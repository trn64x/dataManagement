"use client";

import TextGradient from "@/components/text/TextGradient";
import { Fade } from "react-awesome-reveal";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {contactFormSchema} from "@/schemas/contactFormSchema";
import { useCallback, useState } from "react";
import { Loader2 } from "lucide-react";


const useContact = () => {
  const [message,setMessage] = useState("Skontaktuj się!");
  const [loading,setLoading] = useState(false);

  const onSubmit = useCallback(async (data: any) => {
    setLoading(true)
    const req = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const json = await req.json();
    setMessage(json.message)
    setLoading(false)

  },[setMessage,setLoading]);

  return {onSubmit,loading,message}
}

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const {message, loading, onSubmit} = useContact()

  return (
    <>
      
      <main className="font-sans gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
        <div className="flex flex-col w-full gap-16 xl:flex-row justify-center items-center">
          <div className="flex flex-col gap-2 sm:gap-4">
            {/* Black Text */}
            <Fade
              triggerOnce
              cascade
              damping={0.05}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Masz pomysł do wykonania?
            </Fade>

            {/* Gradient Text */}
            <TextGradient>
              <Fade
                triggerOnce
                delay={500}
                cascade
                damping={0.05}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Zgłoś się do nas!
              </Fade>
            </TextGradient>
          </div>
          <div className="flex flex-col gap-4 w-64 sm:w-86 sm:w-96 md:w-120">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Username Field */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imię</FormLabel>
                      <FormControl>
                        <Input className="input-focus" placeholder="Wpisz swoje imię" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" className="input-focus" placeholder="example@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Textarea Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wiadomość</FormLabel>
                      <FormControl>
                        <Textarea className="input-focus" placeholder="Miejsce na twoją wiadomość..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-row ">
                  <div className="flex items-center justify-start w-8/10">
                    {loading ? <Loader2 className="spin"/> : <p>{message}</p>}
                  </div>
                  <div className="flex items-center justify-end w-2/10">
                    <Button className="w-32" type="submit">
                      Wyślij
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </main>
      
    </>
  );
}
