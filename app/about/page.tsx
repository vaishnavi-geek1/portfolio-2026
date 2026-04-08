export default function AboutPage() {
  return (
    <section className="space-y-10 fade-up">
      <button className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-4 py-1.5">
        About me
      </button>

      <div className="space-y-4 max-w-3xl fade-up-delay-1">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          Frontend <span className="text-blue-600 underline">Developer</span>,
          Based In India.
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          I am a Software Engineer from Pune with 6+ years of experience in
          front-end engineering. I specialize in React, Next.js, TypeScript,
          and modern UI tooling, building scalable and maintainable web
          applications for complex business domains.
        </p>
        <p className="text-sm sm:text-base text-slate-700">
          My work focuses on translating designs from Figma and Zeplin into
          pixel-perfect interfaces, managing state with Redux Toolkit, and
          integrating with robust APIs while keeping performance and UX at the
          center.
        </p>
      </div>

      {/* Language / Nationality / Gender / Hobbies */}
      <div className="grid gap-6 md:grid-cols-4 text-sm text-slate-800 fade-up-delay-2">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Language
          </p>
          <div className="h-0.5 w-10 rounded-full bg-blue-500" />
          <p>English</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Nationality
          </p>
          <div className="h-0.5 w-10 rounded-full bg-blue-500" />
          <p>Indian</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Gender
          </p>
          <div className="h-0.5 w-10 rounded-full bg-blue-500" />
          <p>Female</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Hobbies
          </p>
          <div className="h-0.5 w-10 rounded-full bg-blue-500" />
          <ul className="space-y-1 list-disc list-inside">
            <li>Coding</li>
            <li>Editing photos</li>
            <li>Watching tutorials</li>
            <li>Creating web & mobile projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

