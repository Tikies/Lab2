import { useState, useEffect } from "react";
import Section from "./Section";

function Reviews({ isDark }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/11/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка завантаження:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Section title="Відгуки (Fetch API)" isDark={isDark}>
      {loading ? (
        <p className={`text-sm italic ${isDark ? "text-gray-500" : "text-gray-400"}`}>
          Завантаження коментарів...
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`border-l-2 pl-4 py-2 rounded-sm ${
                isDark
                  ? "border-emerald-400 bg-gray-800"
                  : "border-emerald-500 bg-slate-50"
              }`}
            >
              <h4 className={`text-sm font-bold mb-0.5 ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                {comment.name}
              </h4>
              <small className={`text-xs block mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                {comment.email}
              </small>
              <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {comment.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

export default Reviews;