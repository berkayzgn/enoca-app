# ADR-0001: Tema Sistemi


## Karar
Tema geçişini (Light/Dark) JavaScript yerine **CSS değişkenleri** ile yapmaya karar verdim.  
Uygulama kökünde `data-theme` özelliği üzerinden geçiş yapılıyor.

## Gerekçe
Bu yöntemi seçtim çünkü:
- Daha sade ve framework bağımsız  
- React içinde ekstra state veya context yönetimi gerektirmiyor  
- CSS tarafında değişken kullanımı daha performanslı  

## Sonuç
- Tüm renk, arka plan ve yazı tonları `var(--c-text)` gibi değişkenlerle yönetiliyor.  
- Kullanıcı temayı değiştirdiğinde sayfa yeniden render edilmeden görünüm değişiyor.
