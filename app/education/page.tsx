export default function EducationPage() {
  return (
    <section className="space-y-12 fade-up">
      <button className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-4 py-1.5">
        Education & Work
      </button>

      <div className="space-y-12">
        {/* Education */}
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
            My Education
          </h1>
          <div className="mt-1 h-[3px] w-24 rounded-full bg-blue-600" />

          <div className="mt-6 grid gap-6 md:grid-cols-[160px_minmax(0,1fr)] items-start fade-up-delay-1">
            <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700">
              2014 – 2017
            </div>

            <div className="relative pl-6 border-l-2 border-slate-300">
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600 shadow-sm" />
              <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                MCA – Master of Computer Applications
              </p>
              <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-600">
                Postgraduate degree in Computer Applications, building strong
                foundations in software engineering and web technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Work timeline */}
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900">
            My Work
          </h2>
          <div className="mt-1 h-[3px] w-24 rounded-full bg-blue-600" />

          <div className="mt-6 space-y-6 fade-up-delay-2">
            <div className="grid gap-6 md:grid-cols-[160px_minmax(0,1fr)] items-start">
              <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700">
                Sept 2017 – 2021
              </div>
              <div className="relative pl-6 border-l-2 border-slate-300">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600 shadow-sm" />
                <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                  Zestgeek Solutions Pvt. Ltd, Mohali
                </p>
                <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-600">
                  Frontend Developer (around 4 years) working on web applications
                  and UI development.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[160px_minmax(0,1fr)] items-start">
              <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700">
                2021 – 2023
              </div>
              <div className="relative pl-6 border-l-2 border-slate-300">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600 shadow-sm" />
                <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                  360 Nautika, Mohali
                </p>
                <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-600">
                  Frontend Developer (around 1.5 years), building responsive UIs
                  and front-end features.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[160px_minmax(0,1fr)] items-start">
              <div className="text-xs sm:text-sm md:text-base font-medium text-slate-700">
                2023 – Present
              </div>
              <div className="relative pl-6 border-l-2 border-slate-300">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-blue-600 shadow-sm" />
                <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
                  Mundrisoft, Pune
                </p>
                <p className="mt-1 text-xs sm:text-sm md:text-base text-slate-600">
                  Software Engineer working on React & Next.js based platforms
                  like Via‑Inbound, Via‑Contracts, and Q‑Tickets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

