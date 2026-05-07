import Section from "./Section";

function Experience({ isDark }) {
  const items = [
    "Налаштування робочих станцій",
    "Підтримка користувачів",
    "Робота з Linux-серверами",
    "Розробка сайтів",
  ];

  return (
    <Section title="Досвід роботи" isDark={isDark}>
      <div className={`border rounded-sm px-5 py-4 ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-slate-50 border-slate-200"
      }`}>
        <h3 className={`text-sm font-bold mb-3 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
          Стажер з IT-підтримки
        </h3>
        <ul className="flex flex-col gap-1">
          {items.map((item, i) => (
            <li key={i} className={`text-sm flex gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>&gt;&gt;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Experience;