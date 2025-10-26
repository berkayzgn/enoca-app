import Accordion from "./components/Accordion/Accordion";

const SSS = () => {
    const items = [
        {
            title: "MacBook Pro’nun öne çıkan özellikleri neler?",
            content:
                "Apple Silicon çipi, Liquid Retina XDR ekran, uzun pil ömrü, sessiz soğutma ve MagSafe bağlantısı öne çıkar."
        },
        {
            title: "Hangi ekran boyutları mevcut?",
            content:
                "14” ve 16” Liquid Retina XDR paneller; ProMotion teknolojisiyle 120Hz uyarlanabilir yenileme hızı sunar."
        },
        {
            title: "Profesyonel uygulamalarda performansı nasıl?",
            content:
                "Final Cut Pro, Logic Pro, Xcode, Blender gibi profesyonel yazılımlar için optimize edilmiştir."
        },
        {
            title: "Pil ömrü ne kadar?",
            content:
                "Günlük kullanımda 18 saate kadar dayanır, yoğun işlemde dahi verimlidir."
        },
        {
            title: "Bağlantı noktaları neler?",
            content:
                "MagSafe 3, 3x Thunderbolt 4, HDMI, SDXC kart yuvası ve kulaklık jakı bulunur."
        }
    ];

    return (
        <div className="SSS">
            <h2>MacBook Pro – Sık Sorulan Sorular</h2>
            <Accordion items={items} />
        </div>
    );
};

export default SSS;
