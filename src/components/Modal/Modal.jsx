
import { useEffect, useRef } from "react";
import "./Modal.scss";

export default function Modal({ open, title, onClose, children }) {
    const panelRef = useRef(null);

    useEffect(() => {
        if (!open) return;
        const prev = document.activeElement;
        panelRef.current?.focus();
        const onKey = (e) => { if (e.key === "Escape") onClose?.(); };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden"; // scroll lock
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
            prev?.focus();
        };
    }, [open, onClose]);

    if (!open) return null;
    return (
        <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
            <div
                className="modal__panel"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
                ref={panelRef}
                aria-label={title}
            >
                <h3 className="modal__title">{title}</h3>
                <button className="modal__close" aria-label="Kapat" onClick={onClose}>×</button>
                <div className="modal__body">{children}</div>
            </div>
        </div>
    );
}
