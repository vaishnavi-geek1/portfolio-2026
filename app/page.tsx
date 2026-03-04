import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa";
import { TypingName } from "../components/TypingName";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
      {/* Left content – text */}
      <div className="max-w-xl space-y-6 slide-in-left">
        <p className="text-base sm:text-lg font-medium text-slate-600">
          My Name is
        </p>

        <div>
          <TypingName />
          <div className="mt-2 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        <p className="text-base sm:text-lg text-slate-700">
          I am a{" "}
          <span className="font-semibold float-y">
            Software Engineer
          </span>{" "}
          &nbsp;/{" "}
          <span className="font-semibold text-blue-600 float-y">
            Frontend Developer
          </span>{" "}
          specializing in React and Next.js. I build clean, scalable, and
          accessible front‑end interfaces.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="https://twitter.com"
            target="_blank"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
            aria-label="Twitter"
          >
            <FaTwitter className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vaishnavi-gupta-4a72b1154/"
            target="_blank"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </Link>
          <Link
            href="https://gitlab.com/users/vaishnavi-geek1/projects"
            target="_blank"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-orange-500 hover:text-orange-500 transition"
            aria-label="GitLab"
          >
            <FaGitlab className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/Vaishnavi-Gupta-Resume-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            View / Download Resume
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-blue-500 hover:text-blue-600 transition"
          >
            View Projects
          </Link>
        </div>

        <div className="mt-4 inline-flex items-center gap-3 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            <FaGithub className="h-3 w-3" />
          </span>
          <span>My Github</span>
        </div>
      </div>

      {/* Right – avatar illustration */}
      <div className="mt-8 flex flex-1 items-center justify-center lg:mt-0 lg:h-auto slide-in-right">
        <div className="relative h-full w-64 sm:w-80 max-h-[420px] flex items-center justify-center">
          <img
            src="/vaishnavi.png"
            alt="Avatar illustration of Vaishnavi"
            className="max-h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

