import Link from "next/link";

type Project = {
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    name: "Via-Inbound",
    subtitle: "Multi‑portal SEVIS‑compliant student workflows",
    description:
      "Inbound is a multi‑portal web platform for international education offices to manage SEVIS‑compliant student workflows across Admin, Student (Intl), and Partner portals.",
    stack: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "React-Bootstrap",
      "Bootstrap 5",
    ],
    href: "https://mundri.inbound.via-trm.com/admin/dashboard",
  },
  {
    name: "Via-Contracts",
    subtitle: "Contracts management portal for admins",
    description:
      "Contracts is a contracts management portal where admins can create, edit, and track contracts, assignees, partner organizations, and primary contacts with rich validation and data grids.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React-Bootstrap",
      "CSS Modules",
      "ag-grid-react",
    ],
    href: "https://mundri.contracts.via-trm.com/dashboard",
  },
  {
    name: "Q‑Tickets",
    subtitle: "Events & ticketing platform",
    description:
      "Q‑Tickets is an events and ticket booking platform serving Qatar, Doha, and Oman, covering movies, sports, concerts, and leisure activities through a unified responsive experience.",
    stack: ["React", "TypeScript", "Responsive UI", "REST APIs"],
    href: "https://events.q-tickets.com/",
  },
];

const getTechPillClasses = (tech: string) => {
  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium border";

  if (tech === "TypeScript" || tech === "TS") {
    return `${base} bg-rose-50 text-rose-700 border-rose-200`;
  }

  if (tech.includes("React")) {
    return `${base} bg-sky-50 text-sky-700 border-sky-200`;
  }

  if (tech.includes("Next")) {
    return `${base} bg-indigo-50 text-indigo-700 border-indigo-200`;
  }

  return `${base} bg-slate-100 text-slate-700 border-slate-100`;
};

export default function ProjectsPage() {
  return (
    <section className="space-y-8 fade-up">
      <button className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-4 py-1.5">
        Projects
      </button>

      <div className="space-y-3 max-w-3xl fade-up-delay-1">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          <span className="underline decoration-blue-500 underline-offset-4">
            My
          </span>{" "}
          Projects
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          I am passionate about building real-world products. Here is a curated
          collection of platforms I&apos;ve worked on professionally, covering
          multi‑portal apps, contracts management, and event ticketing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 projects-grid">
        {projects.map((project) => (
          <article
            key={project.name}
            className="project-card flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-2 hover:scale-[1.01] transition-transform transition-shadow transition-colors"
          >
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold text-slate-900">
                {project.name}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-sky-700">
                {project.subtitle}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-700">
                {project.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={getTechPillClasses(tech)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <Link
                href={project.href}
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-slate-800 hover:shadow-md transition"
              >
                Visit Project
                <span aria-hidden className="ml-1">
                  ↗
                </span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

