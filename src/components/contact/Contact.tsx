"use client";

import CtaButton from "@/components/buttons/CtaButton";
import Header from "@/components/header/Header";
import TextGradient from "@/components/text/TextGradient";
import { Fade } from "react-awesome-reveal";
import Wave from "react-wavify";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z.object({
  username: z.string().min(1, "Name cannot be empty"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message cannot be empty"),
});

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      
      <main className="font-sans gap-8 p-8 flex flex-col gap-4 min-h-[80vh] items-center justify-center">
        <div className="flex flex-col w-full gap-16 xl:flex-row justify-center items-center">
          <div className="flex flex-col gap-4">
            {/* Black Text */}
            <Fade
              triggerOnce
              cascade
              damping={0.05}
              className="text-2xl sm:text-5xl md:text-6xl lg:text-6xl"
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
                className="text-lg sm:text-3xl lg:text-4xl font-bold"
              >
                Nie trać ani sekundy zgłoś się do nas!
              </Fade>
            </TextGradient>
          </div>
          <div className="flex flex-col gap-4 w-86 sm:w-96 md:w-120">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Username Field */}
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input className="input-focus" placeholder="Enter your name" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea className="input-focus" placeholder="Write your message here..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-row">
                  <div className="flex items-center justify-start w-8/10">
                    <a href="">przykladowyMail</a>
                  </div>
                  <div className="flex items-center justify-end w-2/10">
                    <Button className="w-32" type="submit">
                      Submit
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
