// Допоміжний компонент — обгортка для секцій
// Використовується у всіх компонентах CV
function Section({ title, isDark, children }) {
  return (
    <section className={`border-l-2 rounded-sm px-7 py-5 transition-colors duration-300 ${
      isDark
        ? "bg-gray-900 border-sky-400 border border-gray-800"
        : "bg-white border-sky-500 border border-slate-200"
    }`}>
      <h2 className={`text-xs font-bold uppercase tracking-widest mb-4 pb-2 border-b border-dashed ${
        isDark
          ? "text-sky-400 border-gray-700"
          : "text-sky-600 border-slate-200"
      }`}>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default Section;