# ADR-0002: Bileşen Yapısı

## Karar

Projede her bileşeni ayrı klasörlerde tutmaya karar verdim (`src/components/`).  
Her bileşenin kendi `.jsx` ve `.scss` dosyası bulunuyor.

## Gerekçe

Bu yapıyı seçtim çünkü:

- Kod düzenini korumak ve karışıklığı önlemek istedim  
- SCSS dosyalarının yalnızca ilgili bileşen üzerinde etkili olmasını sağladım  
- Yeniden kullanılabilirliği artırmak için `props` yapısını kullandım  

## Sonuç

Bileşen yapısı şu şekilde:

src/
└── components/
├── Button/
├── Input/
├── Card/
├── Accordion/
└── Modal/

- Bu yapı sayesinde hem dosya düzeni sade kaldı hem de her bileşen bağımsız geliştirilebiliyor.
