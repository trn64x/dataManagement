"use server";

// DO IT BETTER

import rateLimit from "express-rate-limit";
import type { NextApiRequest, NextApiResponse } from "next";
import { contactFormSchema } from "@/schemas/contactFormSchema";

type ResponseData = {
  message: string;
  errors?: {
    username?: string[];
    email?: string[];
    message?: string[];
  };
};

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minut
  max: 5, // 5 wiadomości
  message: '{"message": "Spróbuj ponownie później..."}',
});

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
