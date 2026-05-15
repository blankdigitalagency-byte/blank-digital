"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1f45f61f-bb1e-411d-9533-884f975c98cc",
          subject: `New enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
          from_name: data.name,
          replyto: data.email,
          ...data,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-black/10 bg-[#f8fafc] px-5 py-4 text-sm text-[#0a0a0a] placeholder-gray-400 outline-none transition-all duration-200 focus:border-[#ff5c1a] focus:bg-white focus:ring-2 focus:ring-[#ff5c1a]/15";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Name + Email row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
            Full Name *
          </label>
          <motion.input
            id="name"
            type="text"
            placeholder="Jane Smith"
            whileFocus={{ scale: 1.005 }}
            {...register("name")}
            className={inputClass}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle className="h-3 w-3" /> {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
            Email Address *
          </label>
          <motion.input
            id="email"
            type="email"
            placeholder="jane@company.co.uk"
            whileFocus={{ scale: 1.005 }}
            {...register("email")}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle className="h-3 w-3" /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
          Company <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <motion.input
          id="company"
          type="text"
          placeholder="Acme Ltd"
          whileFocus={{ scale: 1.005 }}
          {...register("company")}
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
          Message *
        </label>
        <motion.textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals, and timeline..."
          whileFocus={{ scale: 1.005 }}
          {...register("message")}
          className={`${inputClass} resize-none`}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <AlertCircle className="h-3 w-3" /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#ff5c1a] px-7 py-4 text-base font-semibold text-white hover:bg-[#e64d0e] disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending…
          </>
        ) : (
          "Send Message →"
        )}
      </button>

      {/* Feedback messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-2xl bg-green-50 p-4 text-sm text-green-700"
          >
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            <span>
              <strong>Message sent!</strong> We&apos;ll be in touch within 24 hours.
            </span>
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-700"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span>
              Something went wrong. Please email us directly at{" "}
              <a href="mailto:info@blankdigital.co.uk" className="font-semibold underline">
                info@blankdigital.co.uk
              </a>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
