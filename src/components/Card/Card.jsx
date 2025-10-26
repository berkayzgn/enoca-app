import "./Card.scss";

export default function Card({ header, footer, children }) {
    return (
        <div className="card">
            {header && <div className="card-header">{header}</div>}
            {children && <div className="card-body">{children}</div>}
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}
