import "./Button.scss";

export default function Button({ children, type = "button", onClick }) {
    return (
        <button className="btn" type={type} onClick={onClick}>
            {children}
        </button>
    );
}
