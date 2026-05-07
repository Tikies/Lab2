import Section from "./Section";

function Projects({ isDark }) {
  return (
    <Section title="Проєкти" isDark={isDark}>
      <ul className="flex flex-col gap-2">
        <li className={`text-sm flex gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>&gt;&gt;</span>
          <span>
            Платформа волонтерства —{" "}
            <a href="#" className={`hover:underline ${isDark ? "text-sky-400" : "text-sky-600"}`}>
              Посилання на проєкт
            </a>
          </span>
        </li>
      </ul>
    </Section>
  );
}

export default Projects;