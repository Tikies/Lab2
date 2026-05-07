import Section from "./Section";

function About_me({ isDark }) {
  return (
    <Section title="Про мене" isDark={isDark}>
      <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        Я студент спеціальності "Кібербезпека" з інтересом до Linux, мережевої безпеки та веб-розробки.
        Постійно вдосконалюю свої технічні навички та працюю над власними проєктами.
      </p>
    </Section>
  );
}

export default About_me;