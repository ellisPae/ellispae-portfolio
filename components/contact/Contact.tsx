"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import type { ContactFormValues } from "./types";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues & { company?: string }>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormValues & { company?: string }) => {
    try {
      setSubmitError(null);

      if (data.company) return;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      reset();
    } catch (error) {
      console.error(error);
      setSubmitError("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto px-6 pt-12 pb-20 snap-start min-h-[calc(100vh-6rem)] flex flex-col justify-center scroll-mt-24 text-neutral-900 dark:text-neutral-100"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2
        id="contact-heading"
        className="text-3xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100"
      >
        Contact
      </h2>

      <p
        id="contact-description"
        className="text-neutral-700 dark:text-neutral-200/90 max-w-xl mb-10 leading-relaxed"
      >
        I’m always open to thoughtful conversations, new opportunities, or
        interesting problems worth solving. If you’d like to connect, feel free
        to reach out.
      </p>

      {isSubmitSuccessful && (
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role="status"
          aria-live="polite"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-sm dark:bg-emerald-400 dark:text-emerald-950">
            ✓
          </span>
          <span className="font-medium">
            Thanks! Your message has been sent.
          </span>
        </motion.div>
      )}

      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl space-y-5"
        noValidate
      >
        <div className="flex flex-col" id="name_field">
          <label
            htmlFor="name"
            className="text-sm font-medium mb-1 text-neutral-800 dark:text-neutral-200"
          >
            Name
          </label>
          <input
            id="name_input"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name", { required: "Name is required" })}
            className="border border-neutral-300 dark:border-white/10 rounded-lg px-4 py-2.5 bg-white/60 dark:bg-white/5 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500
                       focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-indigo-300/60"
          />
          {errors.name && (
            <span className="text-sm text-red-600 dark:text-red-400 mt-1.5">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col" id="email_field">
          <label
            htmlFor="email"
            className="text-sm font-medium mb-1 text-neutral-800 dark:text-neutral-200"
          >
            Email
          </label>
          <input
            id="email_input"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
            className="border border-neutral-300 dark:border-white/10 rounded-lg px-4 py-2.5 bg-white/60 dark:bg-white/5 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500
                       focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-indigo-300/60"
          />
          {errors.email && (
            <span className="text-sm text-red-600 dark:text-red-400 mt-1.5">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col" id="message_field">
          <label
            htmlFor="message"
            className="text-sm font-medium mb-1 text-neutral-800 dark:text-neutral-200"
          >
            Message
          </label>
          <textarea
            id="message_input"
            rows={4}
            aria-invalid={!!errors.message}
            {...register("message", { required: "Message is required" })}
            className="border border-neutral-300 dark:border-white/10 rounded-lg px-4 py-2.5 bg-white/60 dark:bg-white/5 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500
                       focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-indigo-300/60 resize-none"
          />
          {errors.message && (
            <span className="text-sm text-red-600 dark:text-red-400 mt-1.5">
              {errors.message.message}
            </span>
          )}
        </div>

        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
          className="hidden"
        />

        {submitError && (
          <p className="text-red-600 dark:text-red-400 text-sm font-medium">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="self-start mt-3 inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 hover:shadow-sm active:scale-[0.98] transition disabled:opacity-50 dark:bg-white/10 dark:text-neutral-100 dark:hover:bg-white/15"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
    </motion.section>
  );
}
