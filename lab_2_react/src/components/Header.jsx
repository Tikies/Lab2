function Header({ theme, toggleTheme, isDark }) {
  return (
    <header className={`relative border-l-4 px-9 py-8 transition-colors duration-300 ${
      isDark
        ? "bg-gray-900 border-emerald-400 border-b border-b-gray-800"
        : "bg-white border-emerald-500 border-b border-b-slate-200"
    }`}>

      {/* Термінальна підказка */}
      <span className={`absolute top-3 left-9 text-xs tracking-widest ${
        isDark ? "text-emerald-400 opacity-70" : "text-emerald-600 opacity-60"
      }`}>
        &gt; whoami
      </span>

      {/* Кнопка теми */}
      <button
        onClick={toggleTheme}
        className={`absolute top-3 right-5 text-xs px-3 py-1 rounded border tracking-wider transition-all duration-200 ${
          isDark
            ? "border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black"
            : "border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white"
        }`}
      >
        {theme === "day" ? "🌙 Темна тема" : "☀️ Денна тема"}
      </button>

      <div className="mt-5">
        <h1 className={`text-3xl font-bold tracking-tight ${
          isDark ? "text-gray-100" : "text-gray-900"
        }`}>
          Климаш Олександр
        </h1>
        <p className={`text-sm tracking-wider mt-1 ${
          isDark ? "text-emerald-400" : "text-emerald-600"
        }`}>
          Junior Developer / Спеціаліст з кібербезпеки
        </p>
        <div className={`flex flex-wrap gap-4 text-xs mt-4 pt-3 border-t ${
          isDark ? "border-gray-700 text-gray-400" : "border-slate-200 text-gray-500"
        }`}>
          <span>📧 <a href="mailto:klymash.sasha@gmail.com" className={isDark ? "text-sky-400 hover:underline" : "text-sky-600 hover:underline"}>klymash.sasha@gmail.com</a></span>
          <span>📞 +380 00 000 00 00</span>
          <span>🐙 <a href="https://github.com/Tikies" target="_blank" rel="noreferrer" className={isDark ? "text-sky-400 hover:underline" : "text-sky-600 hover:underline"}>Aleck Klymash</a></span>
        </div>
      </div>
    </header>
  );
}

export default Header;