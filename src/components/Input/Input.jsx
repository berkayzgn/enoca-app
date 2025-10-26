// src/components/Input/Input.jsx
import "./Input.scss";

export default function Input({ id, label, error, ...props }) {
    return (
        <label htmlFor={id} className="input">
            <span className="input__label">{label}</span>
            <input id={id} {...props} aria-invalid={!!error} />
            {error && <small className="input__error" role="alert">{error}</small>}
        </label>
    );
}
