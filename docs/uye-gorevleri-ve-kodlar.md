# 5 Kisilik Ayrintili GitHub Gorev Plani

Bu dosya, 5 kisilik ekip icin sunumda gosterilebilir bir GitHub akisini adim adim hazirlar.
Amaç, herkesin:

- en az 1 issue ile iliskilenmesi
- en az 1 branch acmasi
- en az 1 PR olusturmasi
- en az 1 review yapmasi
- en az 1 merge edilmis PR gostermesi
- en az 1 conflict senaryosuna ekip olarak katilmasi

## Ekip Listesi

1. Merve Catalkaya
2. Roba Hazzani
3. Ilgin Kirez
4. Beyzanur Dogan
5. Israa Alalo

## Once Yapilacak Kurulum

1. Merve GitHub'da `uni-share-team` adli organization'i olustursun.
2. Repository organization altinda acilsin: `uni-share-platform`
3. Tum ekip uyeleri organization'a eklensin.
4. `main` ve `develop` branch'leri olusturulsun.
5. Branch protection acilsin:
   `main` icin en az 1 review zorunlu olsun.
6. Project board olusturulsun:
   `Backlog`, `In Progress`, `Review`, `Done`

## Acilacak Issue'lar

Sunumda PR ile issue bagini gostermek icin once su issue'lar acilsin:

1. `#1 Organization ve repository kurulumu`
2. `#2 Project board ve issue takibi`
3. `#3 Backend demo guncellemesi`
4. `#4 Frontend demo guncellemesi`
5. `#5 Test ve review notlari`
6. `#6 Bilincli merge conflict senaryosu`

## Branch Sirasi

1. `main`
2. `develop`
3. `feature/merve-demo`
4. `feature/roba-demo`
5. `feature/ilgin-demo`
6. `feature/beyzanur-demo`
7. `feature/israa-demo`
8. `feature/conflict-a`
9. `feature/conflict-b`

## Uye Bazli Gorevler

## 1. Merve Catalkaya

- Gorev: repository acilisini ve ilk demo kod guncellemesini yapmak
- Issue: `#1`
- Branch: `feature/merve-demo`
- Hedef dosya: `demo/welcome-message.js`
- Reviewer: Roba Hazzani
- Merge hedefi: `develop`

### Merve'nin yapacagi degisiklik

`docs/member-snippets/merve-welcome-message.js` dosyasindaki icerigi `demo/welcome-message.js` olarak kaydetsin.

### Commit mesaji

`feat: update welcome message for organization demo`

### PR basligi

`feat: add organization setup demo message`

### PR aciklamasi

```md
Closes #1

## Ozet
- welcome mesajini ekip reposuna gore guncelledim
- demo ciktilarini sunumda gosterilecek hale getirdim

## Kontrol
- [x] develop branch hedef alindi
- [x] reviewer eklendi
```

### Roba'nin review yorumu ornegi

`Mesajlar net gorunuyor. Sunumda organization ve repo akisini gostermek icin uygun, onayliyorum.`

## 2. Roba Hazzani

- Gorev: issue ve project board akisina bagli kucuk bir kod dosyasi eklemek
- Issue: `#2`
- Branch: `feature/roba-demo`
- Hedef dosya: `demo/analysis-summary.js`
- Reviewer: Ilgin Kirez
- Merge hedefi: `develop`

### Roba'nin yapacagi degisiklik

`docs/member-snippets/roba-analysis-summary.js` dosyasindaki icerigi `demo/analysis-summary.js` olarak eklesin.

### Commit mesaji

`feat: add analysis summary demo file`

### PR basligi

`feat: add project board analysis summary`

### PR aciklamasi

```md
Closes #2

## Ozet
- project board mantigini gosteren kucuk bir js dosyasi ekledim
- issue, status ve owner bilgisini demoya tasidim
```

### Ilgin'in review yorumu ornegi

`Kod basit ama amaca uygun. Board ve issue iliskisini gosterdigi icin merge edilebilir.`

## 3. Ilgin Kirez

- Gorev: backend akisina dair kucuk bir kod dosyasi eklemek
- Issue: `#3`
- Branch: `feature/ilgin-demo`
- Hedef dosya: `demo/backend-status.js`
- Reviewer: Beyzanur Dogan
- Merge hedefi: `develop`

### Ilgin'in yapacagi degisiklik

`docs/member-snippets/ilgin-backend-status.js` dosyasindaki icerigi `demo/backend-status.js` olarak eklesin.

### Commit mesaji

`feat: add backend status demo`

### PR basligi

`feat: add backend flow demo output`

### PR aciklamasi

```md
Closes #3

## Ozet
- backend akisina dair kucuk bir durum dosyasi ekledim
- servis, durum ve kontrol mesajlarini console ciktisi olarak hazirladim
```

### Beyzanur'un review yorumu ornegi

`Backend akisinin neyi gosterdigi net. Cikti sunum icin yeterli, onayliyorum.`

## 4. Beyzanur Dogan

- Gorev: frontend akisina dair kucuk bir kod dosyasi eklemek
- Issue: `#4`
- Branch: `feature/beyzanur-demo`
- Hedef dosya: `demo/frontend-status.js`
- Reviewer: Israa Alalo
- Merge hedefi: `develop`

### Beyzanur'un yapacagi degisiklik

`docs/member-snippets/beyzanur-frontend-status.js` dosyasindaki icerigi `demo/frontend-status.js` olarak eklesin.

### Commit mesaji

`feat: add frontend status demo`

### PR basligi

`feat: add frontend flow demo output`

### PR aciklamasi

```md
Closes #4

## Ozet
- frontend akisina ait demo js dosyasi ekledim
- sayfa, buton ve durum bilgisini ciktida gosterdim
```

### Israa'nin review yorumu ornegi

`Cikti sade ve anlasilir. Frontend gorevini gostermek icin yeterli gorunuyor.`

## 5. Israa Alalo

- Gorev: test ve review akisina dair kucuk bir kod dosyasi eklemek
- Issue: `#5`
- Branch: `feature/israa-demo`
- Hedef dosya: `demo/test-summary.js`
- Reviewer: Merve Catalkaya
- Merge hedefi: `develop`

### Israa'nin yapacagi degisiklik

`docs/member-snippets/israa-test-summary.js` dosyasindaki icerigi `demo/test-summary.js` olarak eklesin.

### Commit mesaji

`feat: add test summary demo`

### PR basligi

`feat: add review and test summary output`

### PR aciklamasi

```md
Closes #5

## Ozet
- review ve test akisina dair kucuk bir js dosyasi ekledim
- kontrol durumlarini sunum icin console ciktisina cevirdim
```

### Merve'nin review yorumu ornegi

`Review ve test akisinin kayda gectigi goruluyor. PR merge icin uygun.`

## Merge Conflict Senaryosu

Bu kisim ekip icinde bilincli olarak cakisma gostermek icindir.

### Baslangic dosyasi

`demo/conflict-demo.txt` su sekilde kalsin:

```txt
Conflict demo dosyasi
Paylasilan satir: Bu satir merge conflict gostermek icin bilerek degistirilecek.
Durum: Henuz cozulmedi.
```

### Conflict A: Ilgin

- Issue: `#6`
- Branch: `feature/conflict-a`
- Reviewer: Israa Alalo

Ilgin `docs/member-snippets/conflict-a.txt` icerigini `demo/conflict-demo.txt` olarak kaydetsin.

Commit mesaji:

`feat: update shared line for backend conflict demo`

PR basligi:

`feat: prepare backend side of merge conflict`

Bu PR once merge edilsin.

### Conflict B: Beyzanur

- Issue: `#6`
- Branch: `feature/conflict-b`
- Reviewer: Merve Catalkaya

Beyzanur, Ilgin'in PR'i merge edilmeden once `develop` uzerinden branch acsin.
Sonra `docs/member-snippets/conflict-b.txt` icerigini `demo/conflict-demo.txt` olarak kaydetsin.

Commit mesaji:

`feat: update shared line for frontend conflict demo`

PR basligi:

`feat: prepare frontend side of merge conflict`

Bu PR acildiginda GitHub conflict gosterecektir.

### Cozum

Conflict ekraninda son icerik olarak `docs/member-snippets/conflict-solution.txt` dosyasindaki metin kullanilsin.

Cozum commit mesaji:

`fix: resolve demo merge conflict`

Sonra PR merge edilsin.

## Herkesin Kullanacagi Temel Git Komutlari

Her uye kendi branch'i icin su sirayi kullanabilir:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/uye-adi-demo
git add .
git commit -m "ornek commit mesaji"
git push -u origin feature/uye-adi-demo
```

## Sunumda Ne Gosterilecek

1. Organization sayfasi
2. Repository'nin organization altinda oldugu ekran
3. Tum ekip uyeleri
4. `main`, `develop` ve tum `feature/*` branch'leri
5. Her uye icin en az 1 PR
6. Her uye icin en az 1 review
7. Merge edilmis PR ekranlari
8. Conflict uyarisi cikan PR
9. Conflict cozumunden sonraki merge ekrani
10. Commit history
11. Project board kartlari
12. PR aciklamalarindaki `Closes #...` baglantilari
