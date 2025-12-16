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

      // Honeypot (client-side)
      if (data.company) return;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      reset();
    } catch (error) {
      console.error(error);
      setSubmitError("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24 min-h-screen snap-start flex flex-col justify-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <p className="text-neutral-700 max-w-xl mb-12 leading-relaxed">
        I’m always open to thoughtful conversations, new opportunities, or
        interesting problems worth solving. If you’d like to connect, feel free
        to reach out.
      </p>

      {isSubmitSuccessful && (
        <motion.p
          className="text-green-600 mb-6 font-medium"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Thanks! Your message has been sent.
        </motion.p>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl space-y-6"
        noValidate
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="border border-neutral-300 rounded-md px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
          {errors.name && (
            <span className="text-sm text-red-600 mt-1">
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
            className="border border-neutral-300 rounded-md px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-neutral-900"
          />
          {errors.email && (
            <span className="text-sm text-red-600 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message", {
              required: "Message is required",
            })}
            className="border border-neutral-300 rounded-md px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
          />
          {errors.message && (
            <span className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Honeypot */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
          className="hidden"
        />

        {submitError && (
          <p className="text-red-600 text-sm font-medium">{submitError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="self-start mt-4 px-6 py-2 rounded-md
                     bg-neutral-900 text-white font-medium
                     hover:bg-neutral-800 transition
                     disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
    </motion.section>
  );
}
