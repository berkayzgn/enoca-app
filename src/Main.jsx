import { useState } from "react";
import Card from "./components/Card/Card";

export default function Main() {
    const [index, setIndex] = useState(0);
    const pictures = ["./img/mac1.png", "./img/mac2.png", "./img/mac3.png"];

    function nextPic() {
        if (index === pictures.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function prevPic() {
        if (index === 0) {
            setIndex(pictures.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    return (
        <section className="main-hero">
            <div id="main-content">
                <div id="main-title">
                    <h2>Yeni Nesil Güç: MacBook Pro</h2>
                    <p>
                        Apple’ın en gelişmiş çipiyle yeniden tasarlanan MacBook Pro, performans kavramını baştan tanımlıyor.
                        M5 çip, yapay zekâ destekli işlem gücüyle karmaşık projeleri saniyeler içinde işlerken 16 çekirdekli Neural Engine, Apple Intelligence özelliklerini doğrudan cihaz üzerinde çalıştırarak maksimum hız ve gizlilik sunar.
                        Ultra verimli soğutma mimarisi, uzun pil ömrü ve profesyoneller için optimize edilmiş macOS entegrasyonu sayesinde MacBook Pro, kodlamadan tasarıma, müzik prodüksiyonundan 3D modellemeye kadar her alanda sınırsız yaratıcılık sağlar.
                    </p>
                </div>

                {/* Basit görsel alanı */}
                <div className="img-slider">
                    <button className="arrow left" onClick={prevPic}>
                        ‹
                    </button>
                    <img src={pictures[index]} alt="MacBook" />
                    <button className="arrow right" onClick={nextPic}>
                        ›
                    </button>
                </div>
            </div>

            {/* Fiyat kartları */}
            <div className="price-grid">
                <Card header="M3 • 16GB • 512GB" footer="₺89.999" />
                <Card header="M4 • 16GB • 512GB" footer="₺109.000" />
                <Card header="M5 • 32GB • 1TB" footer="₺129.000" />
            </div>
        </section>
    );
}
