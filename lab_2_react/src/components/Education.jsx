import Section from "./Section";

function Education({ isDark }) {
  return (
    <Section title="Освіта" isDark={isDark}>
      <ul className="flex flex-col gap-2">
        <li className={`text-sm flex gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <span className={`mt-0.5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>&gt;&gt;</span>
          <span>2023 – теперішній час — Бакалавр з кібербезпеки, Національний університет «Львівська Політехніка»</span>
        </li>
      </ul>
    </Section>
  );
}

export default Education;