# Mini Landing + Bileşen Kütüphanesi

Bu proje, tek sayfalık bir ürün tanıtım sitesi ve küçük bir bileşen kütüphanesi oluşturmak için yapıldı.  
Amacım, HTML yapısını semantik şekilde kurup SCSS ile stilleri düzenlemek ve birkaç etkileşimli bileşen geliştirmekti.

---

## 🚀 Kurulum ve Çalıştırma

Projeyi klonladıktan sonra:

```bash
npm install
npm run dev
```

Build almak için:

```bash
npm run build
npm run preview
```

---

## ⚙️ Kullandığım Teknolojiler

- **React (Vite)** – hızlı geliştirme ortamı  
- **SCSS** – modüler ve düzenli stil yapısı  
- **Vanilla JS** – küçük kontroller için  
- **CSS değişkenleri** – Light / Dark tema yönetimi  

---

## 🧩 Bileşenler

Projede 5 temel bileşen geliştirdim:

- **Button:** Sayfa içinde tutarlı buton yapısı  
- **Input:** Form alanları için özel stil ve hata kontrolü  
- **Card:** Ürün veya özellik kartları  
- **Accordion:** SSS bölümü için açılır/kapanır yapı  
- **Modal:** Form gönderimi sonrası bilgi mesajı  

---

## 🎨 Tema ve Responsive Yapı

Mobil öncelikli olarak 3 breakpoint kullandım:

- **≤640px:** Mobil  
- **641–1024px:** Tablet  
- **≥1025px:** Masaüstü  

---

## 💡 Kısa Mimari Notlar

- Bileşenleri `src/components` klasöründe topladım.  
- Her bileşenin kendi SCSS dosyası var, karmaşayı önlemek için modüler tuttum.  
- Form doğrulamasını sade JS ile yaptım (boş alan ve e-posta kontrolü).  
- Tema geçişini JS değil, doğrudan CSS değişkenleriyle çözdüm.  
- Görselleri `loading="lazy"` özelliğiyle yükleyerek performansı artırdım.

---

## 📁 Proje Mimarisi

```text
ENCOCA-APP/
├── dist/ # Build çıktıları
├── docs/ # Dokümantasyon ve rapor dosyaları
│   ├── adr-component-stucture.md
│   ├── adr-theme-system.md
│   ├── daily-progress.md
│   └── lighthouse.png
├── public/ # Statik dosyalar ve görseller
│   ├── img/
│   │   ├── logo.png
│   └── vite.svg
├── src/
│   ├── components/ # Yeniden kullanılabilir UI bileşenleri
│   │   ├── Accordion/
│   │   │   ├── Accordion.jsx
│   │   │   └── Accordion.scss
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.scss
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.scss
│   │   ├── Input/
│   │   │   ├── Input.jsx
│   │   │   └── Input.scss
│   │   └── Modal/
│   │       ├── Modal.jsx
│   │       └── Modal.scss
│   ├── styles/ # Global SCSS dosyaları ve değişkenler
│   │   ├── _base.scss
│   │   ├── _layout.scss
│   │   ├── _utilities.scss
│   │   ├── _variables.scss
│   │   └── index.scss
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── SSS.jsx
│   ├── Submit.jsx
│   ├── ThemeToggle.jsx
│   └── index.jsx
├── CHANGELOG.md # Sürüm geçmişi
├── README.md # Proje açıklaması ve kurulum notları
├── package.json # Bağımlılıklar
├── vite.config.js # Vite yapılandırması
└── .gitignore # Git hariç tutulan dosyalar


- `src/components/` klasöründe **Button, Input, Card, Accordion, Modal** bileşenleri bulunuyor.  
- `src/styles/` klasörü projede kullanılan tüm global SCSS dosyalarını içeriyor.  
- `docs/` klasörü içinde **ADR**, **daily-progress**, ve **Lighthouse raporu** yer alıyor.  
- `dist/` klasörü build çıktısı; `public/` ise görsellerin bulunduğu statik klasör.  
- `CHANGELOG.md` ve `README.md` kök dizinde yer alarak case gereksinimlerini tamamlıyor.


## 📸 Lighthouse Raporu

Performans testini **Chrome Lighthouse** ile yaptım.  
Skorum **95** çıktı.

## Vercel BAğlantı Linki :

https://enoca-app.vercel.app








