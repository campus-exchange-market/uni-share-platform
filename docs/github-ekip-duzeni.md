# 5 Kişilik GitHub Çalışma Düzeni

Bu plan, ekipteki 5 kişi için GitHub organization, branch, pull request, review ve merge conflict sürecini net şekilde göstermek için hazırlandı.

## Ekip

| Kişi | Önerilen sorumluluk | GitHub rolü |
| --- | --- | --- |
| Merve Çatalkaya | Repository yönetişimi, release kontrolü | Owner / Admin |
| Roba Hazzani | Analiz, issue ve proje panosu takibi | Member |
| Ilgın Kirez | Backend veya servis katmanı geliştirme | Member |
| Beyzanur Doğan | Frontend veya kullanıcı akışı geliştirme | Member |
| Israa Alalo | Test, review ve kalite kontrol | Member |

Not: Herkes en az 1 PR açmalı, en az 1 review yapmalı ve açtığı en az 1 PR merge edilmiş olmalı. Sorumluluk alanları sadece düzen kurmak içindir; herkes kod değişikliği de yapmalıdır.

## GitHub Organization Yapısı

- Organization adı: `uni-share-team`
- Repository adı: `uni-share-platform`
- Tüm ekip üyeleri organization içine eklenmeli.
- `main` ve `develop` branch'leri korunmalı.
- Doğrudan `main` branch'ine push yapılmamalı.

## Branch Düzeni

- `main`: Sunumda gösterilecek stabil sürüm
- `develop`: Güncel geliştirme entegrasyon branch'i
- `feature/merve-demo`
- `feature/roba-demo`
- `feature/ilgin-demo`
- `feature/beyzanur-demo`
- `feature/israa-demo`
- `feature/conflict-a`
- `feature/conflict-b`

## 5 Kişi İçin PR Planı

| PR Sahibi | Branch | Küçük değişiklik örneği | Review edecek kişi | Merge sonrası hedef |
| --- | --- | --- | --- | --- |
| Merve Çatalkaya | `feature/merve-demo` | `demo/welcome-message.js` içindeki mesajı güncelleme | Roba Hazzani | `develop` |
| Roba Hazzani | `feature/roba-demo` | `docs/project-board-map.md` içine iş paketi ekleme | Ilgın Kirez | `develop` |
| Ilgın Kirez | `feature/ilgin-demo` | `demo/welcome-message.js` içine ikinci küçük fonksiyon ekleme | Beyzanur Doğan | `develop` |
| Beyzanur Doğan | `feature/beyzanur-demo` | `demo/team-notes.txt` içine kısa açıklama ekleme | Israa Alalo | `develop` |
| Israa Alalo | `feature/israa-demo` | `demo/team-notes.txt` içinde test notu ekleme | Merve Çatalkaya | `develop` |

## Review Rotasyonu

- Merve Çatalkaya -> Israa Alalo'nun PR'ını inceler
- Roba Hazzani -> Merve Çatalkaya'nın PR'ını inceler
- Ilgın Kirez -> Roba Hazzani'nin PR'ını inceler
- Beyzanur Doğan -> Ilgın Kirez'in PR'ını inceler
- Israa Alalo -> Beyzanur Doğan'ın PR'ını inceler

Bu sayede herkes en az 1 review yapmış olur.

## Merge Conflict Senaryosu

Amaç: Bilinçli olarak aynı satırı değiştirip conflict çözümünü göstermek.

1. Ilgın Kirez `feature/conflict-a` branch'ini `develop` üzerinden açar.
2. `demo/conflict-demo.txt` içindeki `Paylaşılan satır:` bölümünü değiştirir.
3. PR açılır ve merge edilir.
4. Beyzanur Doğan `feature/conflict-b` branch'ini Ilgın'ın merge işleminden önce açmış olur.
5. Beyzanur aynı satırı farklı bir içerikle değiştirir ve PR açar.
6. GitHub bu PR'da conflict gösterir.
7. Conflict çözümünde iki katkı tek satırda birleştirilir.
8. Çözüm commit'i push edilir.
9. PR tekrar kontrol edilir ve merge edilir.

Önerilen conflict çözümü:

`Paylaşılan satır: Ilgın backend akışını, Beyzanur arayüz akışını aynı senaryoda birleştirdi.`

## Sunumda Gösterilecek Kanıtlar

1. Organization ana ekranı
2. Repository'nin organization altında göründüğü ekran
3. Tüm ekip üyelerinin listesi
4. `main`, `develop` ve `feature/*` branch listesi
5. Her ekip üyesinin açtığı en az 1 PR
6. Review yorumları ve approval kayıtları
7. Merge edilmiş PR ekranları
8. Conflict uyarısı çıkan PR ekranı
9. Conflict çözümünden sonraki merge ekranı
10. Commit geçmişi
11. Project board veya issue ekranı
12. PR açıklamasında ilgili iş paketine verilen bağlantı

## Project Board Eşleştirmesi

| İş paketi | Sorumlu | Issue örneği | PR örneği |
| --- | --- | --- | --- |
| WP-1 Repo ve organization kurulumu | Merve Çatalkaya | `#1` | `#10` |
| WP-2 Analiz ve görevlerin panoya eklenmesi | Roba Hazzani | `#2` | `#11` |
| WP-3 Backend/demo geliştirme | Ilgın Kirez | `#3` | `#12` |
| WP-4 Frontend/demo geliştirme | Beyzanur Doğan | `#4` | `#13` |
| WP-5 Test ve review süreci | Israa Alalo | `#5` | `#14` |

PR başlığında veya açıklamasında `Closes #issue-no` kullanmanız, iş paketi ilişkisini göstermeyi kolaylaştırır.
