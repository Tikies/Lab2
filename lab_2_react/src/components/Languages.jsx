import Section from "./Section";

function Languages({ isDark }) {
  const langs = [
    { name: "Українська", level: "рідна" },
    { name: "Англійська", level: "B1" },
    { name: "Польська", level: "B2" },
  ];

  return (
    <Section title="Мови" isDark={isDark}>
      <ul className="flex flex-col gap-2">
        {langs.map((lang, i) => (
          <li key={i} className={`text-sm flex justify-between border-b pb-1 last:border-0 last:pb-0 ${
            isDark ? "text-gray-300 border-gray-800" : "text-gray-700 border-slate-100"
          }`}>
            <span className="flex gap-2">
              <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>&gt;&gt;</span>
              {lang.name}
            </span>
            <span className={`text-xs font-mono px-2 py-0.5 rounded-sm ${
              isDark ? "bg-gray-800 text-sky-400" : "bg-slate-100 text-sky-600"
            }`}>
              {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Languages;