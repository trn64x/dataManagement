"use server";

import type { NextApiRequest, NextApiResponse } from 'next'
import { contactFormSchema } from "@/schemas/contactFormSchema"

type ResponseData = {
  message: string;
  errors?: {
    username?: string[];
    email?: string[];
    message?: string[];
  };
};

// Custom in-memory rate limiter
const rateLimit = (windowMs: number, max: number) => {
  const requests: Record<string, { timestamp: number; count: number }[]> = {};
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    ip = Array.isArray(ip) ? ip[0] : ip
    if (!ip) {
      return res.status(400).json({ message: "Unable to determine IP" });
    }

    if (!requests[ip]) {
      requests[ip] = [];
    }

    const currentTime = Date.now();
    const windowStart = currentTime - windowMs;

    // Clean up old requests outside the window
    requests[ip] = requests[ip].filter((request) => request.timestamp > windowStart);

    // If requests exceed the limit
    if (requests[ip].length >= max) {
      return res.status(429).json({ message: "Too many requests, try again later" });
    }

    // Add current request to the record
    requests[ip].push({ timestamp: currentTime, count: requests[ip].length + 1 });

    next();
  };
};

const apiLimiter = rateLimit(15 * 60 * 1000, 5); // 15 minutes, max 5 requests

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  apiLimiter(req, res, async () => {
    const contactFormData = req.body;
    const validatedContactFormData =
      contactFormSchema.safeParse(contactFormData);
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    if (!validatedContactFormData.success) {
      const formFieldErrors =
        validatedContactFormData.error.flatten().fieldErrors;

      res.status(400).send({
        message: "Form invalid",
        errors: {
          username: formFieldErrors?.username,
          email: formFieldErrors?.email,
          message: formFieldErrors?.message,
        },
      });

      return;
    }

    const { ok } = await fetch(process.env.CONTACT_WEBHOOK_URL as string, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            author: {
              name: `${contactFormData.username} <${contactFormData.email}> [${ip}]`,
            },
            title: contactFormData.message,
          },
        ],
        timestamp: new Date().toISOString(),
      }),
    });
    if (!ok) {
      res.status(500).json({ message: "Błąd podczas wysyłania wiadomości" });
      return;
    }

    res.status(200).json({ message: "Pomyślnie wysłano..." });
  });
}
