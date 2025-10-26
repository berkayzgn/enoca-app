export default function ThemeToggle() {
    const toggleTheme = () => {
        const html = document.documentElement;
        const next = html.dataset.theme === "dark" ? "light" : "dark";
        html.dataset.theme = next;
        localStorage.setItem("theme", next);
    };

    // ilk açılışta temayı belirle
    if (!document.documentElement.dataset.theme) {
        const saved = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");
    }

    return (
        <button id="btn-theme" onClick={toggleTheme}>
            Tema
        </button>
    );
}
