import Button from "./components/Button/Button";

const Submit = () => {
    // form kontrol
    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        if (!name || !email || !message) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        alert("Form başarıyla gönderildi!");
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

                <label htmlFor="email">E-posta</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-posta adresiniz"
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
        </div>
    );
};

export default Submit;
