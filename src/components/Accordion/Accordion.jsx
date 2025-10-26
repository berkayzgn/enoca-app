import { useState } from "react";
import "./Accordion.scss";

export default function Accordion({ items = [] }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="accordion">
            {items.map((item, i) => (
                <div key={i} className="accordion-item">
                    <div className="accordion-title" onClick={() => toggle(i)}>
                        {item.title}
                    </div>
                    {openIndex === i && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
