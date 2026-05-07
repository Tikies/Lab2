import Section from "./Section";

function Skills({ isDark }) {
  const skills = ["Linux (CLI, процеси, права доступу)", "HTML, CSS", "PHP (базовий рівень)", "SQL", "Git", "Python"];

  return (
    <Section title="Навички" isDark={isDark}>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className={`text-xs px-3 py-1 rounded-sm font-mono ${
            isDark
              ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
          }`}>
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}

export default Skills;