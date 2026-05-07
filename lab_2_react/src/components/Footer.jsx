import { useState, useEffect } from "react";

function Footer({ isDark }) {
  const [sysInfo, setSysInfo] = useState({ platform: "", language: "", userAgent: "" });

  useEffect(() => {
    const data = {
      platform: navigator.platform,
      language: navigator.language,
      userAgent: navigator.userAgent,
    };
    localStorage.setItem("sys_info", JSON.stringify(data));
    const saved = JSON.parse(localStorage.getItem("sys_info"));
    setSysInfo(saved);
  }, []);

  return (
    <footer className={`border-t-2 px-8 py-6 text-center font-mono transition-colors ${
      isDark
        ? "bg-gray-950 border-sky-500 text-gray-500"
        : "bg-slate-100 border-sky-400 text-gray-500"
    }`}>
      <p className="text-sm">CV — Климаш Олександр, 2026</p>

      <div className={`mt-4 text-xs leading-relaxed ${isDark ? "text-gray-600" : "text-gray-400"}`}>
        <p className={`font-bold mb-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Інформація про систему (з LocalStorage):
        </p>
        <p>Платформа: {sysInfo.platform}</p>
        <p>Мова: {sysInfo.language}</p>
        <p className={`mt-1 text-xs break-all ${isDark ? "text-gray-700" : "text-gray-400"}`}>
          User-Agent: {sysInfo.userAgent}
        </p>
      </div>
    </footer>
  );
}

export default Footer;