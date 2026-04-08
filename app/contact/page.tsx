 "use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section className="space-y-8 max-w-xl fade-up">
      <button className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-4 py-1.5">
        Contact
      </button>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Contact Me!
        </h1>
        <div className="h-1 w-16 rounded-full bg-blue-500" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm pop-in"
      >
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-800" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-1">
          <label
            className="text-sm font-medium text-slate-800"
            htmlFor="message"
          >
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition disabled:opacity-60 btn-blink"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-xs text-emerald-600 pt-1">
            Thank you! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-600 pt-1">
            Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div className="text-xs sm:text-sm text-slate-600 space-y-1">
        <p className="font-medium">Or find me online:</p>
        <a
          href="https://github.com/vaishnavi-geek1"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-800 shadow-sm hover:border-slate-500 hover:text-blue-600 transition"
        >
          <span aria-hidden>🐱</span>
          <span>GitHub Profile</span>
        </a>
      </div>
    </section>
  );
}

