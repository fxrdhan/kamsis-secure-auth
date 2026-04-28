# Peta Tutorial Dasar Proyek Au7h

Catatan:
- Dokumen ini saya susun sebagai peta bahan dasar yang paling relevan untuk proyek Au7h yang saya kerjakan.
- Dokumen ini bukan klaim bahwa saya menyalin satu tutorial utuh, tetapi penjelasan tentang referensi dan fondasi yang paling masuk akal dari fitur-fitur yang saya bangun.

## Ringkasan

Dalam pengerjaannya, proyek ini tidak saya bangun dari satu tutorial tunggal. Yang lebih tepat, proyek ini saya susun dari gabungan beberapa bahan dasar:
- tutorial/dev docs Docker untuk PHP dan database
- panduan HTTPS lokal untuk Apache
- tutorial form auth PHP sederhana
- dokumentasi resmi PHP untuk hashing, session, HMAC, enkripsi, dan PDO
- panduan Tailwind CLI untuk workflow CSS
- referensi OWASP untuk CSRF dan session security

## 1. Docker dan environment dev PHP

Jejak di repo:
- `Dockerfile`
- `compose.dev.yaml`
- `package.json`

Tutorial/dokumen dasar yang paling relevan:
- Docker Docs, "Use containers for PHP development"  
  https://docs.docker.com/guides/php/develop
- DigitalOcean, "How to Create PHP Development Environments With Docker Compose"  
  https://www.digitalocean.com/community/tech_talks/how-to-create-php-development-environments-with-docker-compose

Kenapa cocok:
- Pada proyek ini, aplikasi PHP dijalankan lewat container dan workflow development diatur dengan `docker compose`.
- Ada port mapping, volume mount, dan pemisahan workflow host vs container, yang sangat sejalan dengan pola di tutorial Docker Compose untuk PHP.
- `bun run dev` hanya menjadi pembungkus untuk menyalakan Compose dan watcher CSS, bukan server aplikasi utama.

## 2. HTTPS lokal untuk Apache

Jejak di repo:
- `docker/apache-ssl.conf.template`
- `docker/apache-http.conf.template`
- `docker-entrypoint.sh`
- `README.md`

Tutorial/dokumen dasar yang paling relevan:
- web.dev, "Use HTTPS for local development"  
  https://web.dev/articles/how-to-use-local-https
- mkcert README  
  https://github.com/FiloSottile/mkcert
- DigitalOcean, "How To Create a Self-Signed SSL Certificate for Apache in Ubuntu 22.04"  
  https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-22-04

Kenapa cocok:
- README proyek ini secara eksplisit menyebut `mkcert` untuk `localhost`.
- `docker-entrypoint.sh` juga punya fallback membuat self-signed cert lewat `openssl req -x509`, yang sangat dekat dengan tutorial Apache self-signed cert.
- Konfigurasi Apache memaksa redirect HTTP ke HTTPS dan hanya mengaktifkan TLS 1.2/1.3.

## 3. Form register/login PHP sederhana

Jejak di repo:
- `public/index.php`
- `public/register.php`
- `public/login.php`
- `public/logout.php`
- `src/Presentation/Views.php`

Tutorial/dokumen dasar yang paling relevan:
- PHP Tutorial, "PHP Registration Form"  
  https://www.phptutorial.net/php-tutorial/php-registration-form/

Kenapa cocok:
- Struktur `public/`, `src/`, `config/` dan pola register/login/redirect/flash message mirip sekali dengan tutorial auth PHP dari PHP Tutorial.
- Pola form post ke endpoint sendiri, validasi input, lalu redirect setelah submit juga sangat khas tutorial auth PHP sederhana.
- Walaupun tampilan dan strukturnya sudah saya kustom sendiri, alur dasarnya memang dekat dengan tutorial auth PHP sederhana.

## 4. Session, cookie, dan CSRF protection

Jejak di repo:
- `src/Security/Auth.php`
- `docker/php.ini`
- `README.md`

Tutorial/dokumen dasar yang paling relevan:
- OWASP, "Cross-Site Request Forgery Prevention Cheat Sheet"  
  https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
- PHP Manual, "Session Management Basics"  
  https://www.php.net/manual/en/features.session.security.management.php
- OWASP, "PHP Configuration Cheat Sheet"  
  https://cheatsheetseries.owasp.org/cheatsheets/PHP_Configuration_Cheat_Sheet.html

Kenapa cocok:
- Pada proyek ini, saya membuat CSRF token sendiri di session, mengirimkannya lewat hidden input, lalu memverifikasinya saat request POST.
- Session ID diregenerasi setelah login, yang merupakan anjuran langsung dari dokumentasi security session PHP.
- Cookie/session hardening di `php.ini` juga cocok dengan pola OWASP PHP configuration guidance.

## 5. Hashing password dengan Argon2id

Jejak di repo:
- `src/Security/Auth.php`
- `README.md`

Tutorial/dokumen dasar yang paling relevan:
- PHP Manual, "Password Hashing"  
  https://www.php.net/manual/en/faq.passwords.php
- PHP Manual, `password_hash()`  
  https://www.php.net/manual/en/function.password-hash.php
- PHP Manual, `password_verify()`  
  https://www.php.net/manual/en/function.password-verify.php

Kenapa cocok:
- Password disimpan menggunakan `password_hash(..., PASSWORD_ARGON2ID)`.
- Verifikasi login menggunakan `password_verify(...)`.
- Ini sangat sesuai dengan pola resmi yang diajarkan PHP manual untuk auth modern.

## 6. Pepper, HMAC, dan lookup username

Jejak di repo:
- `src/Security/Auth.php`

Tutorial/dokumen dasar yang paling relevan:
- PHP Manual, `hash_hmac()`  
  https://www.php.net/manual/en/function.hash-hmac.php
- PHP Manual, `password_hash()` note dan praktik umum password pepper  
  https://www.php.net/manual/en/function.password-hash.php

Kenapa cocok:
- Pada proyek ini, saya tidak menyimpan username biasa untuk kebutuhan lookup cepat. Sebagai gantinya, saya membuat `username_lookup` dengan `hash_hmac('sha256', ...)`.
- Password juga saya beri pepper sebelum masuk ke `password_hash()`.
- Pendekatan ini terasa lebih dekat ke gabungan dokumentasi resmi PHP dan praktik security tambahan, bukan tutorial CRUD biasa.

## 7. Enkripsi username dengan AES-256-GCM

Jejak di repo:
- `src/Security/Auth.php`
- `README.md`

Tutorial/dokumen dasar yang paling relevan:
- PHP Manual, `openssl_encrypt()`  
  https://www.php.net/manual/en/function.openssl-encrypt.php

Kenapa cocok:
- Implementasi pada proyek ini memakai `openssl_encrypt()` dan `openssl_decrypt()` dengan `aes-256-gcm`.
- Ada IV acak, tag autentikasi, dan penyimpanan payload hasil encode, semua selaras dengan pola penggunaan fungsi OpenSSL di PHP.
- Bagian ini terlihat lebih teknis dan kemungkinan besar berangkat dari manual resmi, lalu saya rakit sendiri sesuai kebutuhan proyek.

## 8. Database MySQL dengan PDO dan prepared statements

Jejak di repo:
- `src/Infrastructure/Database.php`

Tutorial/dokumen dasar yang paling relevan:
- PHP Manual, `PDO::prepare()`  
  https://www.php.net/manual/en/pdo.prepare.php
- PHP Manual, "Prepared statements and stored procedures"  
  https://www.php.net/manual/en/pdo.prepared-statements.php
- PHP Manual, "MySQL PDO Driver"  
  https://www.php.net/pdo_mysql

Kenapa cocok:
- Semua operasi database penting pada proyek ini memakai PDO dan prepared statements.
- Ini persis pola yang dianjurkan manual PHP untuk akses MySQL yang aman.
- Ada juga pengaturan `PDO::ATTR_EMULATE_PREPARES => false`, yang menunjukkan bahwa implementasinya kemungkinan tidak hanya mengikuti tutorial CRUD paling dasar, tetapi juga mengacu pada dokumentasi yang lebih detail.

## 9. Login throttling / rate limiting

Jejak di repo:
- `src/Infrastructure/Database.php`
- `src/Security/Auth.php`

Dokumen dasar yang paling relevan:
- OWASP, "Authentication Cheat Sheet"  
  https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html
- OWASP, "Blocking Brute Force Attacks"  
  https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks
- OWASP ASVS 4, V2.2.1 anti-automation controls  
  https://cornucopia.owasp.org/taxonomy/asvs-4.0.3/02-authentication/02-general-authenticator-security

Kenapa cocok:
- Landasan fitur ini bukan "biar kelihatan aman", tetapi untuk menahan brute force, credential stuffing, dan password spraying pada endpoint login.
- OWASP Authentication Cheat Sheet secara eksplisit membahas `Login Throttling`, observation window, lockout/throttling duration, dan tradeoff antara security vs usability.
- OWASP ASVS juga menuliskan bahwa aplikasi sebaiknya punya anti-automation control seperti rate limiting, CAPTCHA, soft lockout, atau delay yang meningkat.
- OWASP "Blocking Brute Force Attacks" menjelaskan bahwa lockout total sering bermasalah karena bisa dipakai untuk DoS, sehingga throttling/rate limiting ringan justru masuk akal sebagai langkah awal.

Hubungannya dengan implementasi proyek ini:
- Di `src/Infrastructure/Database.php`, key rate limit dibuat dari kombinasi `IP + bucket + subject/username` lalu di-hash, sehingga pembatasan tidak hanya bergantung pada satu faktor saja.
- Di file yang sama ada konsep:
  - `maxAttempts`
  - `windowSeconds`
  - pencatatan jumlah gagal
  - reset/clear saat kondisi tertentu
- Di `src/Security/Auth.php`, ketika limit terlampaui aplikasi mengembalikan `429 Too Many Requests`.
- Konfigurasi aktif saat ini:
  - `login`: `5` percobaan gagal dalam `15` menit
  - `register`: `3` percobaan gagal dalam `15` menit
- Implementasi register sengaja dibuat lebih ketat dan berbasis IP untuk memperlambat bulk account creation.

Catatan jujur:
- Implementasi proyek ini adalah versi sederhana dari login throttling, belum adaptive/risk-based.
- Belum ada CAPTCHA, device cookie, exponential backoff, atau integrasi denylist IP.
- Jadi, bagian ini tetap punya landasan yang jelas dari OWASP, tetapi implementasinya memang masih versi minimal yang cocok untuk scope proyek ini.

## 10. Tailwind CLI untuk styling

Jejak di repo:
- `package.json`
- `resources/tailwind.css`
- `tailwind.config.cjs`
- `public/styles.css`

Tutorial/dokumen dasar yang paling relevan:
- Tailwind CSS, "Tailwind CLI"  
  https://tailwindcss.com/docs/installation/tailwind-cli
- Tailwind CSS, "Standalone CLI: Use Tailwind CSS without Node.js"  
  https://tailwindcss.com/blog/standalone-cli

Kenapa cocok:
- Workflow proyek ini memakai command line build/watch untuk menghasilkan `public/styles.css`.
- Tidak ada framework frontend penuh; Tailwind hanya dipakai sebagai tool styling statis.
- Ini sangat cocok dengan cara kerja Tailwind CLI pada proyek sederhana/non-SPA.

## 11. Bagian yang saya kustom atau rakit sendiri

Beberapa bagian proyek ini justru terlalu spesifik untuk dianggap berasal dari satu tutorial umum:
- Menggabungkan Apache + PHP + MySQL dalam satu container yang sama.
- Menyimpan username dalam dua bentuk: `username_encrypted` dan `username_lookup`.
- Rate limiting login saya implementasikan sendiri dengan tabel `auth_rate_limits`, walaupun landasan konsepnya tetap mengacu ke OWASP.
- Tampilan auth page yang cukup polished, lengkap dengan theme toggle dan animasi matrix.

Bagian-bagian ini lebih masuk akal dijelaskan sebagai hasil pengembangan dan penyesuaian saya sendiri di atas fondasi tutorial dan dokumentasi resmi.

## Kesimpulan

Kalau harus saya jelaskan saat evaluasi, penjelasan yang paling jujur adalah:

> Proyek ini tidak saya ambil dari satu tutorial utuh, melainkan saya susun dari beberapa bahan dasar. Fondasi infrastrukturnya paling dekat ke tutorial Docker PHP + Compose, fondasi auth form-nya dekat ke tutorial registration/login PHP sederhana, lalu aspek security dan database-nya kuat dipengaruhi dokumentasi resmi PHP dan panduan OWASP. Styling-nya mengikuti workflow Tailwind CLI, tetapi tampilan akhirnya sudah banyak saya kustom sendiri.

## Daftar singkat sumber yang paling penting

- Docker Docs - PHP development with containers  
  https://docs.docker.com/guides/php/develop
- web.dev - Local HTTPS with mkcert  
  https://web.dev/articles/how-to-use-local-https
- mkcert README  
  https://github.com/FiloSottile/mkcert
- DigitalOcean - Apache self-signed SSL  
  https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-22-04
- PHP Tutorial - Registration form  
  https://www.phptutorial.net/php-tutorial/php-registration-form/
- OWASP - CSRF Prevention Cheat Sheet  
  https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
- PHP Manual - password_hash / password_verify / session security / PDO / hash_hmac / openssl_encrypt  
  https://www.php.net/manual/en/
- Tailwind CSS - Tailwind CLI  
  https://tailwindcss.com/docs/installation/tailwind-cli
