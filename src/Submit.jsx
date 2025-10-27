
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

