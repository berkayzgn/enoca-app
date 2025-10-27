<<<<<<< Updated upstream
=======
import { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input.jsx";
import Modal from "./components/Modal/Modal.jsx";

const Submit = () => {
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);

        const name = (fd.get("name") || "").toString().trim();
        const email = (fd.get("email") || "").toString().trim();
        const message = (fd.get("message") || "").toString().trim();

        if (!name || !email || !message) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        // burada modal aç (setOpen(true)) ya da alert
        alert("Form başarıyla gönderildi!");
        e.currentTarget.reset();
    };

    return (
        <div className="Submit">
            <h2>İletişim Formu</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Ad Soyad</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Adınızı girin"
                />

                <Input
                    id="email"
                    name="email"
                    label="E-posta"
                    type="email"
                    placeholder="E-posta adresinizi girin"
                    required
                />

                <label htmlFor="message">Mesajınız</label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Mesajınızı yazın..."
                ></textarea>

                <Button type="submit">Gönder</Button>
            </form>

            {/*  Modal kullanımı */}
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                ariaLabel="Gönderim bilgisi"
            >
                <h3>Teşekkürler!</h3>
                <p>Mesajınız başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
                <Button onClick={() => setOpen(false)}>Kapat</Button>
            </Modal>
        </div>
    );
};

export default Submit;
>>>>>>> Stashed changes
