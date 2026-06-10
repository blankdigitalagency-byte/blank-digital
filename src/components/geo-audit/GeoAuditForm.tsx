"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const schema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  website: z.string().min(1, "Website URL is required"),
  email: z.string().email("Please enter a valid email"),
  service: z.string().min(1, "Please tell us what you do"),
  location: z.string().min(1, "Location is required"),
  targetSearches: z.string().min(5, "Please give us at least one example search"),
});

type FormData = z.infer<typeof schema>;

export default function GeoAuditForm() {
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
          subject: `Free GEO Audit Request — ${data.businessName}`,
          from_name: data.businessName,
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

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-green-50 p-10 text-center"
      >
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-green-500" />
        <h3 className="mb-2 text-xl font-black text-[#0a0a0a]">Audit Request Received</h3>
        <p className="text-sm leading-relaxed text-gray-500">
          We will run your GEO audit and email the results to you within one business day.
          Keep an eye on your inbox.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Business name + Website */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="businessName" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
            Business Name *
          </label>
          <input
            id="businessName"
            type="text"
            placeholder="e.g. Smith Plumbing"
            {...register("businessName")}
            className={inputClass}
          />
          {errors.businessName && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle className="h-3 w-3" /> {errors.businessName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="website" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
            Website URL *
          </label>
          <input
            id="website"
            type="text"
            placeholder="e.g. www.smithplumbing.co.uk"
            {...register("website")}
            className={inputClass}
          />
          {errors.website && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle className="h-3 w-3" /> {errors.website.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
          Email Address * <span className="font-normal text-gray-400">(we send your audit here)</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@yourbusiness.co.uk"
          {...register("email")}
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <AlertCircle className="h-3 w-3" /> {errors.email.message}
          </p>
        )}
      </div>

      {/* What they do + Location */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
            What Do You Do? *
          </label>
          <input
            id="service"
            type="text"
            placeholder="e.g. Plumber, Italian restaurant, Electrician"
            {...register("service")}
            className={inputClass}
          />
          {errors.service && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle className="h-3 w-3" /> {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="location" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
            Where Are You Based? *
          </label>
          <input
            id="location"
            type="text"
            placeholder="e.g. Leith, Edinburgh"
            {...register("location")}
            className={inputClass}
          />
          {errors.location && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
              <AlertCircle className="h-3 w-3" /> {errors.location.message}
            </p>
          )}
        </div>
      </div>

      {/* Target searches */}
      <div>
        <label htmlFor="targetSearches" className="mb-1.5 block text-xs font-semibold text-[#0a0a0a]">
          What Would You Want Customers to Ask AI Tools? *
        </label>
        <textarea
          id="targetSearches"
          rows={3}
          placeholder={`e.g. "best plumber in Leith", "emergency electrician Edinburgh", "Italian restaurant near the Royal Mile"`}
          {...register("targetSearches")}
          className={`${inputClass} resize-none`}
        />
        <p className="mt-1 text-xs text-gray-400">
          Think of the questions your customers might type into ChatGPT or Google AI.
        </p>
        {errors.targetSearches && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
            <AlertCircle className="h-3 w-3" /> {errors.targetSearches.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#ff5c1a] px-7 py-4 text-base font-semibold text-white hover:bg-[#e64d0e] disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
      >
        {status === "loading" ? (
          <><Loader2 className="h-5 w-5 animate-spin" /> Submitting…</>
        ) : (
          "Get My Free GEO Audit →"
        )}
      </button>

      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-2xl bg-red-50 p-4 text-sm text-red-700"
          >
            <AlertCircle className="h-5 w-5 shrink-0" />
            Something went wrong. Please email us at{" "}
            <a href="mailto:info@blankdigital.co.uk" className="font-semibold underline">
              info@blankdigital.co.uk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
