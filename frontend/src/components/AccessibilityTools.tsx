//library import
import { useEffect, useState } from "react";
//component import
import { useTheme } from "./theme-provider";

function AccessibilityTools() {
  const [fontSize, setFontSize] = useState(
    JSON.parse(localStorage.getItem("fontSize") || "16")
  );
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    document.getElementsByTagName("html")[0].style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", `${fontSize}`);
    console.log(fontSize);
  }, [fontSize]);
  return (
    <div className="flex min-h-8 bg-slate-200 rounded border border-gray-300 text-sm dark:bg-slate-900">
      <button
        className="px-3 border-r rounded-l border-gray-300 hover:bg-muted"
        onClick={() =>
          setFontSize((prev: number) => (fontSize > 14 ? prev - 1 : prev))
        }
      >
        -A
      </button>
      <button
        className="px-3 border-r border-gray-300 hover:bg-muted"
        onClick={() => setFontSize(16)}
      >
        A
      </button>
      <button
        className="px-3 border-r border-gray-300 hover:bg-muted"
        onClick={() =>
          setFontSize((prev: number) => (fontSize < 18 ? prev + 1 : prev))
        }
      >
        A+
      </button>
      {theme === "light" && (
        <button
          className="px-3 rounded-r bg-black text-yellow-400 hover:bg-gray-700"
          onClick={() => setTheme("dark")}
        >
          A
        </button>
      )}
      {theme === "dark" && (
        <button
          className="px-3 rounded-r border-gray-300 bg-white dark:hover:bg-gray-200 dark:text-black"
          onClick={() => setTheme("light")}
        >
          A
        </button>
      )}
    </div>
  );
}

export default AccessibilityTools;
