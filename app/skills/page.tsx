const programming = [
  { label: "HTML5", icon: "🟧" },
  { label: "CSS3", icon: "🎨" },
  { label: "JavaScript", icon: "✨" },
  { label: "TypeScript", icon: "🌀" },
];

const tools = [
  { label: "React", icon: "⚛️" },
  { label: "Next.js", icon: "⭘" },
  { label: "Redux Toolkit", icon: "🧩" },
  { label: "Tailwind", icon: "🌊" },
  { label: "Bootstrap", icon: "🅱️" },
  { label: "Webpack", icon: "📦" },
  { label: "Git", icon: "🌿" },
  { label: "Figma", icon: "🎨" },
  { label: "Zeplin", icon: "✈️" },
  { label: "Cursor", icon: "⚡" },
  { label: "Claude", icon: "🤖" },
  { label: "ChatGPT", icon: "💬" },
];

export default function SkillsPage() {
  return (
    <section className="space-y-6 fade-up">
      <button className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs px-4 py-1.5">
        My Skills
      </button>

      <div className="space-y-3 max-w-3xl fade-up-delay-1">
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
          My Technical Experience/Skills.
        </h1>
        <p className="text-sm sm:text-base text-slate-700">
          With over 6 years of experience, I specialize in JavaScript and
          TypeScript for dynamic web experiences, React and Next.js for modern
          front-end applications, and Tailwind/Bootstrap for clean responsive
          UIs.
        </p>
      </div>

      <div className="space-y-4 fade-up-delay-1">
        <h2 className="text-base sm:text-lg font-semibold text-slate-900">
          Programming & Markup
        </h2>
        <div className="flex flex-wrap gap-4 skills-grid">
          {programming.map((item) => (
            <div
              key={item.label}
              className="group inline-flex h-24 w-24 flex-col items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-md skill-card"
            >
              <span className="mb-1 text-2xl group-hover:animate-bounce">
                {item.icon}
              </span>
              <span className="px-2 text-[10px] text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 fade-up-delay-2">
        <h2 className="text-base sm:text-lg font-semibold text-slate-900">
          Frameworks, Libraries & Tools
        </h2>
        <div className="flex flex-wrap gap-4 skills-grid">
          {tools.map((item) => (
            <div
              key={item.label}
              className="group inline-flex h-20 w-20 flex-col items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-[11px] font-semibold text-slate-800 shadow-xs transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-md skill-card"
            >
              <span className="mb-0.5 text-xl group-hover:animate-pulse">
                {item.icon}
              </span>
              <span className="px-2 text-[9px] text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

