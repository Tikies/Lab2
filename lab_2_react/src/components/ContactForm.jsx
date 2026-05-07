import { useState, useEffect } from "react";

function ContactForm({ isDark }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65"
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`relative w-full max-w-md mx-4 rounded-sm border-t-2 p-8 transition-colors ${
          isDark
            ? "bg-gray-900 border-emerald-400 border border-gray-700"
            : "bg-white border-emerald-500 border border-slate-200"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={`text-xs tracking-widest mb-3 block ${isDark ? "text-emerald-400 opacity-75" : "text-emerald-600 opacity-70"}`}>
          &gt; contact --init
        </span>

        <button
          onClick={() => setIsOpen(false)}
          className={`absolute top-4 right-5 text-xl leading-none transition-colors ${
            isDark ? "text-gray-500 hover:text-emerald-400" : "text-gray-400 hover:text-emerald-600"
          }`}
        >
          ×
        </button>

        <h2 className={`text-lg font-bold mb-5 font-mono ${isDark ? "text-gray-100" : "text-gray-900"}`}>
          Зв'язок зі мною
        </h2>

        <form
          action="https://formspree.io/f/xykopowl"
          method="POST"
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            required
            className={`px-3 py-2 text-sm rounded-sm border font-mono outline-none transition-colors focus:border-emerald-400 ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-600"
                : "bg-slate-50 border-slate-200 text-gray-900 placeholder-gray-400"
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={`px-3 py-2 text-sm rounded-sm border font-mono outline-none transition-colors focus:border-emerald-400 ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-600"
                : "bg-slate-50 border-slate-200 text-gray-900 placeholder-gray-400"
            }`}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            required
            className={`px-3 py-2 text-sm rounded-sm border font-mono outline-none transition-colors focus:border-emerald-400 ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-600"
                : "bg-slate-50 border-slate-200 text-gray-900 placeholder-gray-400"
            }`}
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Повідомлення"
            required
            className={`px-3 py-2 text-sm rounded-sm border font-mono outline-none transition-colors focus:border-emerald-400 resize-none ${
              isDark
                ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-600"
                : "bg-slate-50 border-slate-200 text-gray-900 placeholder-gray-400"
            }`}
          />
          <button
            type="submit"
            className="py-2.5 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm tracking-wider rounded-sm transition-colors font-mono"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;