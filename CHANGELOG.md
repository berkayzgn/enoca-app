# Changelog
Bu dosya proje boyunca yapılan değişikliklerin özetidir.

---

## [1.4.0] - 2025-10-28
### Added
- **README.md** dosyası eklendi (kurulum, mimari notlar ve demo linki)
- **docs/** klasörü oluşturuldu:
  - `adr-0001-theme-system.md`
  - `adr-0002-component-structure.md`
  - `daily-progress.md`
  - `lighthouse.png`
- **Lighthouse performans raporu** projeye eklendi.
- **Vercel dağıtımı** tamamlandı ve canlı link README’ye eklendi.

### Changed
- Genel proje yapısı dökümantasyon kurallarına göre düzenlendi.
- Dosya isimleri, açıklamalar ve SCSS küçük iyileştirmelerle güncellendi.

### Docs
- Case kriterlerine uygun dökümantasyon tamamlandı.
- README, ADR ve ilerleme raporu dosyaları son sürüme eklendi.

---

## [1.3.1] - 2025-10-28
### Changed
- Proje görselleri ve logo güncellendi. *(eaa5fda, 6fa185f)*

---

## [1.3.0] - 2025-10-27
### Added
- **Footer** bileşeni eklendi. *(b1aeda6)*
### Changed
- **Input** bileşeninde etkileşim ve yapı iyileştirildi.
- `index.jsx` import ve render düzenlemeleri yapıldı.
### Docs
- `CHANGELOG` 1.3.0 için güncellendi. *(79b8440, 5887845)*

---

## [1.2.1] - 2025-10-27
### Fixed
- SCSS import sırası düzeltildi; global `_variables.scss` tüm bileşenlerden önce yükleniyor.
- Bileşen SCSS dosyalarındaki relative path hataları giderildi.
- `package.json` ve `package-lock.json` bağımlılık uyumsuzlukları düzeltildi. *(a9a9d58, 0ba3030)*

---

## [1.2.0] - 2025-10-27
### Added
- **Input** ve **Modal** bileşenleri eklendi. *(635f261)*
### Changed
- **Accordion** (JSX/SCSS) için erişilebilirlik (a11y) geliştirmeleri.
- **Submit** form yapısı sadeleştirildi ve okunabilirlik artırıldı.

---

## [1.1.0] - 2025-10-27
### Added
- UI stilleri: **Button**, **Card**, **Accordion**
- Tema değişkenleri (`_variables.scss`) ve global layout (`_layout.scss`)
- Responsive kırılımlar ve temel a11y stilleri *(072e2a3)*

---

## [1.0.0] - 2025-10-27
### Added
- Proje başlangıç yapısı oluşturuldu. *(57d1871)*
- Tema sistemi ve ilk bileşen düzenlemeleri eklendi. *(31b56d2)*
