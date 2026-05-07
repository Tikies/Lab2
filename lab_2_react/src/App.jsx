import { useState, useEffect } from "react";
import Header from "./components/Header";
import About_me from "./components/About_me";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

function App() {
  const [theme, setTheme] = useState("day");

  // Автоматично встановити тему при завантаженні залежно від часу
  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? "day" : "night");
  }, []);

  // Застосовуємо тему до <html> елементу
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "day" ? "night" : "day"));
  };

  const isDark = theme === "night";

  return (
    <div className={`min-h-screen font-mono transition-colors duration-300 ${
      isDark ? "bg-gray-950 text-gray-200" : "bg-slate-100 text-gray-900"
    }`}>
      <div className="max-w-3xl mx-auto px-4 pt-10">
        <Header theme={theme} toggleTheme={toggleTheme} isDark={isDark} />
      </div>
      <main className="max-w-3xl mx-auto py-10 px-4 flex flex-col gap-5">
        <About_me isDark={isDark} />
        <Education isDark={isDark} />
        <Experience isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Languages isDark={isDark} />
        <Reviews isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
      <ContactForm isDark={isDark} />
    </div>
  );
}

export default App;