import "./Input.scss";

export default function Input({ id, label, error, ...props }) {
    const errorId = error ? `${id}-error` : undefined;

    return (
        <label htmlFor={id} className="input">
            <span className="input__label">{label}</span>
            <input
                id={id}
                aria-invalid={!!error}
                aria-describedby={errorId}
                {...props}            // placeholder, name, required, type, autoComplete vs. buradan gelir
            />
            {error && (
                <small id={errorId} className="input__error" role="alert">
                    {error}
                </small>
            )}
        </label>
    );
}
