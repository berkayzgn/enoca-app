import { useState } from "react";
import "./Accordion.scss";

export default function Accordion({ items = [] }) {
    const [open, setOpen] = useState(null);

    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <div className="accordion">
            {items.map((item, i) => {
                const isOpen = open === i;
                const panelId = `acc-panel-${i}`;
                const btnId = `acc-btn-${i}`;

                return (
                    <div className="accordion-item" key={i}>
                        <button
                            id={btnId}
                            className="accordion-title"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggle(i)}
                        >
                            {item.title}
                            <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                        </button>

                        <div
                            id={panelId}
                            className="accordion-content"
                            aria-labelledby={btnId}
                            role="region"
                            hidden={!isOpen}
                        >
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
