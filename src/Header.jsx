import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <header>
            <img src="./img/logo.png" alt="ZGN Logo" id="logo-img" />
            <ThemeToggle />
        </header>
    );
};

export default Header;
