# Laporan Rancang Bangun Proyek Dari Nol

## Daftar Isi

- [1. Posisi Dokumen](#1-posisi-dokumen)
- [2. Pendahuluan](#2-pendahuluan)
- [3. Requirement Tugas Yang Diterjemahkan Menjadi Target Teknis](#3-requirement-tugas-yang-diterjemahkan-menjadi-target-teknis)
- [4. Urutan Kerja Wajib](#4-urutan-kerja-wajib)
- [5. Jejak Riset Internet Sebelum Implementasi](#5-jejak-riset-internet-sebelum-implementasi)
- [6. Decision Log Dari Nol](#6-decision-log-dari-nol)
- [7. Blueprint Struktur Proyek Dari Nol](#7-blueprint-struktur-proyek-dari-nol)
- [8. Tahapan Implementasi Bertahap](#8-tahapan-implementasi-bertahap)
  - [Tahap 0 - Membuat folder kosong dan baseline tooling](#tahap-0---membuat-folder-kosong-dan-baseline-tooling)
  - [Tahap 1 - Menentukan image dasar dan isi container](#tahap-1---menentukan-image-dasar-dan-isi-container)
  - [Tahap 2 - Menetapkan environment inti container](#tahap-2---menetapkan-environment-inti-container)
  - [Tahap 3 - Menulis entrypoint untuk bootstrap runtime, secret, sertifikat, dan MySQL](#tahap-3---menulis-entrypoint-untuk-bootstrap-runtime-secret-sertifikat-dan-mysql)
  - [Tahap 4 - Menyalakan HTTPS dan redirect HTTP ke HTTPS](#tahap-4---menyalakan-https-dan-redirect-http-ke-https)
  - [Tahap 5 - Menambahkan security headers di level web server](#tahap-5---menambahkan-security-headers-di-level-web-server)
  - [Tahap 6 - Mengatur hardening PHP runtime](#tahap-6---mengatur-hardening-php-runtime)
  - [Tahap 7 - Menulis konfigurasi aplikasi dan bootstrap](#tahap-7---menulis-konfigurasi-aplikasi-dan-bootstrap)
  - [Tahap 8 - Mendesain schema database yang memenuhi privasi dan rate limit](#tahap-8---mendesain-schema-database-yang-memenuhi-privasi-dan-rate-limit)
  - [Tahap 9 - Menulis helper keamanan inti](#tahap-9---menulis-helper-keamanan-inti)
  - [Tahap 10 - Menulis seluruh query database dengan prepared statement](#tahap-10---menulis-seluruh-query-database-dengan-prepared-statement)
  - [Tahap 11 - Membuat halaman awal berisi form register dan login](#tahap-11---membuat-halaman-awal-berisi-form-register-dan-login)
  - [Tahap 12 - Menulis endpoint registrasi](#tahap-12---menulis-endpoint-registrasi)
  - [Tahap 13 - Menulis endpoint login](#tahap-13---menulis-endpoint-login)
  - [Tahap 14 - Menulis landing page sukses dan gagal](#tahap-14---menulis-landing-page-sukses-dan-gagal)
  - [Tahap 15 - Menambahkan logout aman](#tahap-15---menambahkan-logout-aman)
  - [Tahap 16 - Menambahkan rate limiting login dan register](#tahap-16---menambahkan-rate-limiting-login-dan-register)
  - [Tahap 17 - Menyiapkan Docker Compose untuk development dan demo](#tahap-17---menyiapkan-docker-compose-untuk-development-dan-demo)
  - [Tahap 18 - Menambahkan Snort IDS dan ACL Jaringan](#tahap-18---menambahkan-snort-ids-dan-acl-jaringan)
- [9. Alur Demo Singkat Saat Presentasi](#9-alur-demo-singkat-saat-presentasi)
- [10. Urutan Verifikasi Setelah Implementasi](#10-urutan-verifikasi-setelah-implementasi)
  - [Uji 1 - Container hidup](#uji-1---container-hidup)
  - [Uji 2 - HTTP redirect ke HTTPS](#uji-2---http-redirect-ke-https)
  - [Uji 3 - Form tampil di browser](#uji-3---form-tampil-di-browser)
  - [Uji 4 - Register berhasil](#uji-4---register-berhasil)
  - [Uji 5 - Login berhasil](#uji-5---login-berhasil)
  - [Uji 6 - Login gagal](#uji-6---login-gagal)
  - [Uji 7 - Username dan password tidak terbaca asli di database](#uji-7---username-dan-password-tidak-terbaca-asli-di-database)
  - [Uji 8 - CSRF protection](#uji-8---csrf-protection)
  - [Uji 9 - SQL injection](#uji-9---sql-injection)
  - [Uji 10 - XSS](#uji-10---xss)
  - [Uji 11 - Buffer overflow / oversized input](#uji-11---buffer-overflow--oversized-input)
  - [Uji 12 - Rate limit](#uji-12---rate-limit)
  - [Uji 13 - Snort IDS dan rule lokal](#uji-13---snort-ids-dan-rule-lokal)
  - [Uji 14 - ACL port jaringan](#uji-14---acl-port-jaringan)
  - [Hasil Verifikasi Aktual](#hasil-verifikasi-aktual)
  - [Bukti Screenshot Verifikasi](#bukti-screenshot-verifikasi)
- [11. Pemetaan Requirement Tugas Ke Tahap Implementasi](#11-pemetaan-requirement-tugas-ke-tahap-implementasi)
- [12. Catatan Transparansi Tentang Bagian Yang Sengaja Tidak Dibesar-besarkan](#12-catatan-transparansi-tentang-bagian-yang-sengaja-tidak-dibesar-besarkan)
- [13. Checklist Final Sebelum Presentasi](#13-checklist-final-sebelum-presentasi)
- [14. Ringkasan Strategi Dari Nol](#14-ringkasan-strategi-dari-nol)

## 1. Posisi Dokumen

Dokumen ini memperlakukan proyek sebagai **greenfield**: belum ada file, belum ada container, belum ada database, dan belum ada flow autentikasi. Target akhirnya adalah aplikasi login-register berbasis browser dengan **satu container** yang memuat **web server + aplikasi PHP + database MySQL**, lalu memenuhi requirement keamanan yang diminta pada tugas.

Fokus utama dokumen ini adalah:

1. menerjemahkan requirement tugas menjadi acceptance criteria teknis,
2. mencatat proses **riset internet terlebih dahulu** sebelum coding,
3. menjelaskan **decision making** dan trade-off yang dipilih,
4. menyusun **urutan implementasi dari nol** secara bertahap,
5. menyediakan **code block per tahap**, bukan dump seluruh isi file,
6. memastikan tidak ada requirement inti yang terlewat.

## 2. Pendahuluan

Posisi masalah untuk tugas ini adalah:

1. target utama adalah **demo aplikasi login-register yang benar-benar berjalan**,
2. pengujian dilakukan lewat browser dan konfigurasi container,
3. diminta **satu container** untuk web server dan database,
4. requirement keamanan yang diminta bersifat **aplikatif dan dapat dibuktikan**, bukan sekadar disebutkan,
5. solusi yang dipilih harus **mudah dijelaskan ulang** saat ditanya alasan teknisnya.

Karena itu, ukuran keputusan yang dipakai bukan “paling modern” atau “paling enterprise”, melainkan:

1. paling selaras dengan requirement tugas,
2. paling kecil jumlah komponennya,
3. paling jelas hubungan antara ancaman dan kontrolnya,
4. paling mudah diuji saat demo,
5. paling mudah dipertanggungjawabkan saat ditanya “kenapa memilih ini, bukan alternatif lain”.

Tabel berikut menyiapkan jawaban kritis sebelum dokumen masuk ke requirement teknis yang lebih rinci.

| Pertanyaan kritis yang mungkin muncul | Jawaban dan justifikasi teknis |
| --- | --- |
| Kenapa Apache + PHP native + MySQL, bukan Node, Laravel, atau stack lain? | Karena kombinasi ini paling lurus untuk tugas browser-based berbasis form. Apache kuat untuk redirect HTTP ke HTTPS, TLS, dan security headers. PHP native membuat hubungan requirement -> kode -> kontrol keamanan tetap terlihat jelas tanpa tertutup abstraksi framework besar. MySQL dipilih karena umum, mudah diuji, dan langsung relevan dengan requirement penyimpanan akun. |
| Kenapa tidak memakai framework penuh agar lebih cepat? | Framework memang bisa mempercepat fitur, tetapi tugas ini menuntut transparansi kontrol keamanan. Jika terlalu banyak abstraksi, penjelasan saat evaluasi menjadi lebih sulit karena banyak mekanisme berjalan “di balik layar”. Untuk tugas akademik seperti ini, transparansi lebih bernilai daripada akselerasi fitur. |
| Kenapa autentikasi berbasis session, bukan JWT? | Karena aplikasi diuji lewat browser dengan form login biasa, bukan API stateless. Session cookie lebih natural untuk skenario ini, lebih mudah dipadukan dengan CSRF protection, dan logout server-side menjadi sederhana. JWT justru menambah kompleksitas yang tidak diminta oleh requirement. |
| Kenapa password di-hash, bukan dienkripsi? | Karena tujuan requirement privasi database adalah mencegah attacker membaca password asli saat database bocor. Hash satu arah memenuhi tujuan itu. Enkripsi justru menyisakan kemungkinan pemulihan plaintext jika key ikut bocor, sehingga tidak cocok sebagai mekanisme utama penyimpanan password. |
| Kenapa username tidak langsung disimpan plaintext? | Karena requirement privasi juga menyentuh data akun. Namun landing page sukses tetap harus menampilkan username asli. Solusi yang proporsional adalah memisahkan fungsi pencarian dan fungsi tampilan: `username_lookup` untuk pencarian stabil, `username_encrypted` untuk pemulihan tampilan asli. |
| Kenapa tetap perlu validasi input kalau sudah memakai prepared statement? | Karena keduanya menutup risiko yang berbeda. Prepared statement adalah pertahanan utama terhadap SQL injection. Validasi input berguna untuk membatasi format, panjang, dan kualitas data sejak awal. Kombinasi keduanya membuat jalur input lebih rapih dan lebih aman. |
| Kenapa XSS tidak cukup ditangani hanya dengan CSP? | Karena CSP adalah defense in depth, bukan pelindung utama. Pertahanan utama tetap output encoding yang konsisten pada setiap data dinamis. CSP dipasang untuk menambah hambatan jika ada celah yang lolos. |
| Kenapa requirement buffer overflow diterjemahkan lewat limit input dan hardening runtime? | Karena logika aplikasi ditulis di PHP userland, bukan manipulasi buffer manual di C. Dalam konteks tugas ini, interpretasi yang jujur dan realistis adalah memilih runtime high-level, membatasi ukuran input, mematikan upload, dan mengurangi permukaan parsing. Itu lebih dapat dipertanggungjawabkan daripada membuat klaim proteksi yang tidak benar-benar dibangun. |
| Kenapa sertifikat self-signed tetap dipakai? | Karena target deploy untuk tugas ini adalah demo lokal. Self-signed cukup untuk membuktikan HTTPS aktif dan alur redirect berjalan. Dokumen tetap harus menyatakan bahwa untuk host publik, sertifikat tepercaya lebih tepat. |

Dengan pendahuluan ini, bagian requirement pada section berikut tidak lagi dibaca sebagai daftar pilihan mendadak, tetapi sebagai turunan langsung dari batas tugas, ancaman yang ingin ditutup, dan kebutuhan presentasi yang harus bisa dijelaskan ulang secara teknis.

## 3. Requirement Tugas Yang Diterjemahkan Menjadi Target Teknis

| Requirement tugas | Target teknis yang harus jadi |
| --- | --- |
| Satu container berisi server dan database | Satu image/container memuat Apache, PHP, MySQL, OpenSSL |
| Web server bisa diakses via browser | Port HTTP/HTTPS dipublish ke host |
| Ada form login dan register | Halaman awal menyediakan mode register dan login |
| Login sukses masuk landing page selamat datang + username | Session login aktif, username ditampilkan |
| Login gagal masuk landing page belum terdaftar | Redirect ke halaman khusus gagal login |
| Minimal harus bisa login | Flow register -> login -> welcome lulus uji |
| Server dilindungi HTTPS | HTTP redirect ke HTTPS, TLS aktif |
| Algoritma enkripsi web server boleh default | Apache + OpenSSL dipakai, TLS 1.2/1.3 diaktifkan |
| Form dilindungi dari serangan integrity | CSRF token, `POST` only, cookie aman |
| Username/password di database tidak boleh terbaca asli | Password di-hash, username dienkripsi |
| Lindungi dari buffer overflow | Pilih runtime high-level, batasi ukuran input/request, hindari parsing biner, nonaktifkan upload |
| Lindungi SQL injection | Prepared statement PDO + validasi input |
| Lindungi XSS | Output encoding + CSP |
| Tambahan Snort IDS | Snort 3 berjalan sebagai sidecar IDS dan membaca rule lokal/komunitas |
| Tambahan ACL jaringan | `iptables` container membatasi traffic masuk: web diizinkan, MySQL/SSH/ICMP dibatasi |

Catatan penting tentang istilah **satu container**: requirement inti satu container mengacu pada container aplikasi `app`, yaitu container yang memuat **Apache + PHP + MySQL + OpenSSL** dalam satu runtime. Service `snort` pada `compose.dev.yaml` adalah IDS sidecar tambahan untuk requirement jaringan, berbagi network namespace dengan `app` melalui `network_mode: service:app`. Sidecar ini tidak memisahkan database dari web server, sehingga requirement satu container web server + database tetap terpenuhi.

## 4. Urutan Kerja Wajib

Urutan kerja yang aman dan transparan untuk tugas ini bukan langsung coding. Urutannya harus:

1. baca requirement tugas sampai menjadi acceptance criteria,
2. cari referensi internet resmi atau otoritatif,
3. ambil bagian referensi yang benar-benar relevan,
4. putuskan arsitektur dan kontrol keamanan,
5. implementasikan skeleton paling kecil yang bisa jalan,
6. tambahkan kontrol keamanan satu per satu,
7. uji flow utama dan uji serangan dasar,
8. cocokkan hasil dengan requirement.

Urutan ini penting karena tanpa riset awal, kontrol keamanan sering dipasang sekadar formalitas dan tidak nyambung dengan ancaman nyata.

## 5. Jejak Riset Internet Sebelum Implementasi

Bagian ini menjawab pertanyaan “search dulu di internet ambil bagian mananya”.

Tabel berikut memuat sumber inti yang langsung memengaruhi keputusan teknis utama.

| Kebutuhan keputusan | Query awal yang dicari | Referensi utama | Bagian yang diambil | Dampak ke implementasi |
| --- | --- | --- | --- | --- |
| Topologi container | `Docker docs one concern per container` | [Docker Docs - Building best practices](https://docs.docker.com/build/building/best-practices/) | bagian **Decouple applications** dan catatan bahwa satu concern per container adalah rule of thumb, bukan hukum mutlak | memilih **satu container** sebagai kompromi tugas, sambil tetap mencatat bahwa produksi normalnya dipisah |
| TLS web server | `Apache mod_ssl SSLProtocol TLSv1.2 TLSv1.3` | [Apache `mod_ssl`](https://httpd.apache.org/docs/current/mod/mod_ssl.html) | bagian `SSLProtocol` dan `mod_ssl relies on OpenSSL` | memilih Apache + OpenSSL, mematikan protokol lama |
| Penyimpanan password | `OWASP Password Storage Cheat Sheet Argon2id pepper` | [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) | bagian **Argon2id**, **Hashing vs Encryption**, **Peppering** | memilih `PASSWORD_ARGON2ID` + pepper; password **tidak** dienkripsi |
| Implementasi hash password di PHP | `PHP password_hash Argon2id manual` | [PHP Manual `password_hash`](https://www.php.net/manual/en/function.password-hash.php) | bagian `PASSWORD_ARGON2ID`, salt otomatis, informasi hash tersimpan di output | memilih `password_hash(..., PASSWORD_ARGON2ID)` dan `password_verify()` |
| Integritas form | `OWASP CSRF Prevention Cheat Sheet synchronizer token pattern` | [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) | bagian **Synchronizer Token Pattern**, **SameSite Cookie Attribute**, larangan `GET` untuk state-changing action | memilih CSRF token di session, hidden input, `POST` only, `SameSite=Strict` |
| Validasi input | `OWASP Input Validation Cheat Sheet allowlist length limit` | [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) | bagian **Allowlist vs Denylist**, **minimum and maximum length**, **server-side validation** | memilih regex allowlist + batas panjang username/password |
| SQL injection | `OWASP SQL Injection Prevention Cheat Sheet prepared statements` | [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html) | bagian **Prepared Statements (with Parameterized Queries)** | seluruh query auth harus PDO prepared statements |
| XSS | `OWASP XSS Prevention Cheat Sheet output encoding CSP` | [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) | bagian **Output Encoding** dan catatan bahwa **CSP hanya defense in depth** | memilih `htmlspecialchars` untuk output dan CSP header di Apache |
| Buffer overflow | `CWE buffer overflow language selection bounds checks` | [MITRE CWE-120](https://cwe.mitre.org/data/definitions/120.html), [MITRE CWE-787](https://cwe.mitre.org/data/definitions/787.html), [MITRE CWE-122](https://cwe.mitre.org/data/definitions/122.html), dan [MITRE CWE-125](https://cwe.mitre.org/data/definitions/125.html) | bagian **classic buffer overflow**, **out-of-bounds write**, **Use a language that provides memory abstractions**, **bounds checking**, **validate length arguments** | memilih PHP userland untuk logika auth, membatasi input dan request size, mematikan upload |
| Rate limiting autentikasi | `OWASP Authentication Cheat Sheet login throttling` | [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) dan [OWASP Blocking Brute Force Attacks](https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks) | bagian **Login Throttling**, lockout threshold, observation window, dan risiko denial of service pada lockout penuh | menambahkan throttling berbasis database dan response `429` |
| Snort IDS di Docker | `Snort 3 Docker Compose ciscotalos/snort3 tutorial` | [Docker Recipes - Snort 3 Docker Compose](https://docker.recipes/security/snort3) dan [Docker Hub - ciscotalos/snort3](https://hub.docker.com/r/ciscotalos/snort3) | image `ciscotalos/snort3`, capability `NET_ADMIN`/`NET_RAW`, mount rules/logs, command `-i eth0 -c snort.lua` | menambahkan service Snort IDS sidecar di Compose |
| Konfigurasi dan rule Snort 3 | `Snort 3 configuration snort.lua local.rules` | [Snort 3 Configuration Guide](https://docs.snort.org/start/configuration) dan [Snort 3 Rule Writing Guide](https://docs.snort.org/start/rules) | `snort.lua`, `snort_defaults.lua`, `ips.include`, file `.rules`, `alert_fast` | membuat `security/snort/snort.lua`, `local.rules`, `community.rules`, dan command validasi rule |
| Sidecar network namespace | `Docker Compose network_mode service` | [Docker Compose services - network_mode](https://docs.docker.com/reference/compose-file/services/#network_mode) | `network_mode: service:[service name]` | Snort berbagi network namespace dengan container aplikasi agar dapat memonitor traffic yang sama |
| ACL container dengan iptables | `Docker iptables restrict external connections to containers` | [Docker Docs - Docker with iptables](https://docs.docker.com/engine/network/firewall-iptables/), [iptables(8)](https://man7.org/linux/man-pages/man8/iptables.8.html), dan [iptables-extensions(8)](https://man7.org/linux/man-pages/man8/iptables-extensions.8.html) | Docker membuat chain iptables; `iptables` menjelaskan chain, policy, `ACCEPT`/`DROP`; extensions menjelaskan `conntrack`, `multiport`, dan `icmp` | menambahkan ACL `iptables` untuk mengizinkan web dan menolak akses langsung ke MySQL/SSH |

Alur kerja pada laporan ini dimulai dari requirement, lalu diterjemahkan menjadi target teknis, kemudian cari referensi, membaca bagian yang relevan, menempelkan kutipan penting ke dokumen, dan setelah itu masuk ke implementasi. 

### Docker Docs - Building best practices

Dipakai saat menilai bagaimana keputusan container dibaca secara jujur: Docker punya best practice umum, tetapi implementasi tugas tetap boleh mengambil kompromi selama alasan teknisnya dijelaskan. Referensi yang sama juga dipakai untuk menjelaskan kenapa Dockerfile memakai multi-stage build: Bun hanya dipakai pada tahap build frontend, sedangkan image runtime akhir tetap berisi komponen yang diperlukan untuk menjalankan aplikasi.

Referensi terkait: [Docker Docs - Building best practices](https://docs.docker.com/build/building/best-practices/)

> Multi-stage builds let you reduce the size of your final image, by creating a
> cleaner separation between the building of your image and the final output.
> Split your Dockerfile instructions into distinct stages to make sure that the
> resulting output only contains the files that are needed to run the application.
>
> **Translated:**
> Multi-stage build membantu mengurangi ukuran image final dengan membuat pemisahan yang lebih bersih antara proses membangun image dan hasil akhirnya.
> Pecah instruksi Dockerfile ke tahap-tahap yang berbeda agar output akhir hanya berisi file yang memang dibutuhkan untuk menjalankan aplikasi.
>
> Each container should have only one concern. Decoupling applications into
> multiple containers makes it easier to scale horizontally and reuse containers.
>
> Limiting each container to one process is a good rule of thumb, but it's not a
> hard and fast rule.
>
> **Translated:**
> Setiap container sebaiknya hanya memiliki satu concern. Memisahkan aplikasi ke
> beberapa container membuat aplikasi lebih mudah diskalakan secara horizontal
> dan container lebih mudah digunakan ulang.
>
> Membatasi setiap container ke satu proses adalah aturan praktis yang baik,
> tetapi bukan aturan mutlak.

### Apache `mod_ssl`

Dipakai untuk menetapkan bahwa HTTPS Apache bertumpu pada modul TLS berbasis OpenSSL, lalu diaktifkan melalui `SSLEngine` dengan sertifikat, private key, dan pembatasan versi protokol yang jelas.

Referensi terkait: [Apache mod_ssl](https://httpd.apache.org/docs/current/mod/mod_ssl.html)

> This module relies on [OpenSSL](https://www.openssl.org/) to provide the cryptography engine.
>
> This directive toggles the usage of the SSL/TLS Protocol Engine.
>
> This directive points to a file with certificate data in PEM format, or the certificate identifier through a configured cryptographic token. If using a PEM file, at minimum, the file must include an end-entity (leaf) certificate.
>
> This directive points to the PEM-encoded private key file for the server, or the key ID through a configured cryptographic token.
>
> This directive can be used to control which versions of the SSL/TLS protocol will be accepted in new connections.
>
> **Translated:**
> Modul ini mengandalkan [OpenSSL](https://www.openssl.org/) untuk menyediakan mesin kriptografi.
>
> Directive ini menyalakan atau mematikan mesin protokol SSL/TLS.
>
> Directive ini menunjuk ke file berisi data sertifikat dalam format PEM, atau identifier sertifikat melalui token kriptografi yang sudah dikonfigurasi. Jika memakai file PEM, minimal file itu harus memuat sertifikat end-entity atau leaf certificate.
>
> Directive ini menunjuk ke file private key server dalam format PEM, atau key ID melalui token kriptografi yang sudah dikonfigurasi.
>
> Directive ini dapat dipakai untuk mengatur versi protokol SSL/TLS mana saja yang diterima pada koneksi baru.

### OWASP Password Storage Cheat Sheet

Password harus di-hash dan algoritma yang dipilih adalah Argon2id, bukan enkripsi dua arah.

Referensi terkait: [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

> This cheat sheet advises you on the proper methods for storing passwords for authentication.
> When passwords are stored, they must be protected from an attacker even if the application or database is compromised.
> To sum up our recommendations:
>
> - Use Argon2id with a minimum configuration of 19 MiB of memory, an iteration count of 2, and 1 degree of parallelism.
>
> **Translated:**
> Cheat sheet ini memberi panduan tentang metode yang tepat untuk menyimpan password untuk keperluan autentikasi.
> Saat password disimpan, password itu harus tetap terlindungi dari penyerang bahkan jika aplikasi atau database sudah dikompromikan.
> Ringkasan rekomendasinya:
>
> - Gunakan Argon2id dengan konfigurasi minimum 19 MiB memori, jumlah iterasi 2, dan derajat paralelisme 1.

### OWASP Input Validation Cheat Sheet

Validasi harus dilakukan sedini mungkin dan tetap berada di server-side.

Referensi terkait: [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

> Input validation is performed to ensure only properly formed data is entering the workflow in an information system, preventing malformed data from persisting in the database and triggering malfunction of various downstream components.
> Input validation should happen as early as possible in the data flow, preferably as soon as the data is received from the external party.
> Data from all potentially untrusted sources should be subject to input validation, including not only Internet-facing web clients but also backend feeds over extranets, from [suppliers, partners, vendors or regulators](https://badcyber.com/several-polish-banks-hacked-information-stolen-by-unknown-attackers/), each of which may be compromised on their own and start sending malformed data.
> Allowlist validation is appropriate for all input fields provided by the user.
> Input validation **must** be implemented on the server-side before any data is processed by an application’s functions, as any JavaScript-based input validation performed on the client-side can be circumvented by an attacker who disables JavaScript or uses a web proxy.
>
> **Translated:**
> Validasi input dilakukan untuk memastikan hanya data yang formatnya benar yang masuk ke alur kerja sistem informasi, mencegah data yang rusak tersimpan di database dan memicu gangguan pada komponen berikutnya.
> Validasi input sebaiknya dilakukan sedini mungkin dalam alur data, idealnya segera setelah data diterima dari pihak eksternal.
> Semua data dari sumber yang berpotensi tidak tepercaya harus divalidasi, termasuk klien web yang menghadap internet maupun feed backend dari pihak eksternal.
> Validasi allowlist cocok untuk semua field input dari user.
> Validasi input harus diterapkan di sisi server sebelum data diproses oleh fungsi aplikasi.

### OWASP SQL Injection Prevention Cheat Sheet

Pastikan jalur query tidak pernah dibangun lewat concat string mentah dari input pengguna.

Referensi terkait: [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)

> This cheat sheet will help you prevent SQL injection flaws in your applications.
> Attackers can use SQL injection on an application if it has dynamic database queries that use string concatenation and user-supplied input.
>
> **Translated:**
> Cheat sheet ini akan membantu Anda mencegah celah SQL injection pada aplikasi.
> Penyerang bisa memanfaatkan SQL injection pada aplikasi jika aplikasi memiliki query database dinamis yang dibangun dengan penggabungan string dan input dari pengguna.

### OWASP XSS Prevention Cheat Sheet

Tempatkan output encoding sebagai pertahanan utama, sementara CSP dipasang sebagai pertahanan tambahan.

Referensi terkait: [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

> This cheat sheet helps developers prevent XSS vulnerabilities.
> Cross-Site Scripting (XSS) is a misnomer. Originally this term was derived from early versions of the attack that were primarily focused on stealing data cross-site. Since then, the term has widened to include injection of basically any content. XSS attacks are serious and can lead to account impersonation, observing user behaviour, loading external content, stealing sensitive data, and more.
> **This cheatsheet contains techniques to prevent or limit the impact of XSS. Since no single technique will solve XSS, using the right combination of defensive techniques will be necessary to prevent XSS.**
>
> **Translated:**
> Cheat sheet ini membantu developer mencegah kerentanan XSS.
> Cross-Site Scripting (XSS) adalah istilah yang agak menyesatkan. Awalnya istilah ini berasal dari versi awal serangan yang terutama berfokus pada pencurian data lintas situs. Sejak itu, maknanya meluas hingga mencakup penyisipan hampir semua jenis konten. Serangan XSS bersifat serius dan dapat menyebabkan peniruan akun, pengamatan perilaku pengguna, pemuatan konten eksternal, pencurian data sensitif, dan lain-lain.
> **Cheat sheet ini berisi teknik untuk mencegah atau membatasi dampak XSS. Karena tidak ada satu teknik pun yang bisa menyelesaikan XSS sendirian, kombinasi teknik pertahanan yang tepat tetap diperlukan untuk mencegah XSS.**

### MITRE CWE-120, CWE-787, CWE-122, dan CWE-125

Terjemahkan requirement “buffer overflow” ke mitigasi yang realistis untuk aplikasi PHP userland.

Referensi terkait: [MITRE CWE-120](https://cwe.mitre.org/data/definitions/120.html)

> CWE-120: Buffer Copy without Checking Size of Input ('Classic Buffer Overflow')
>
> Use a language that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
>
> Implementation: Strategy: _Input Validation_
>
> **Translated:**
> CWE-120 adalah buffer copy tanpa pemeriksaan ukuran input, atau classic buffer overflow.
>
> Gunakan bahasa yang tidak memungkinkan kelemahan ini terjadi, atau menyediakan konstruksi yang membuat kelemahan ini lebih mudah dihindari.
>
> Implementasi: strategi input validation.

Referensi terkait: [MITRE CWE-787](https://cwe.mitre.org/data/definitions/787.html)

> CWE-787: Out-of-bounds Write
>
> Often used to describe the consequences of writing to memory outside the bounds of a buffer, or to memory that is otherwise invalid.
>
> Use a language that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
>
> **Translated:**
> CWE-787 adalah out-of-bounds write.
>
> Istilah ini sering dipakai untuk menjelaskan konsekuensi penulisan ke memori di luar batas buffer, atau ke memori yang tidak valid.
>
> Gunakan bahasa yang tidak memungkinkan kelemahan ini terjadi, atau menyediakan konstruksi yang membuat kelemahan ini lebih mudah dihindari.

Referensi terkait: [MITRE CWE-122](https://cwe.mitre.org/data/definitions/122.html)

> A heap overflow condition is a buffer overflow, where the buffer that can be overwritten is allocated in the heap portion of memory, generally meaning that the buffer was allocated using a routine such as malloc().
> Pre-design: Use a language or compiler that performs automatic bounds checking.
> Implementation: Implement and perform bounds checking on input.
>
> **Translated:**
> Kondisi heap overflow adalah buffer overflow ketika buffer yang dapat ditimpa dialokasikan pada bagian heap dari memori, umumnya berarti buffer tersebut dialokasikan menggunakan routine seperti malloc().
> Pada tahap pra-perancangan, gunakan bahasa atau compiler yang melakukan pemeriksaan batas secara otomatis.
> Pada tahap implementasi, terapkan dan lakukan pemeriksaan batas pada input.

Referensi terkait: [MITRE CWE-125](https://cwe.mitre.org/data/definitions/125.html)

> The product reads data past the end, or before the beginning, of the intended buffer.
> Implementation: Strategy: _Input Validation_
> Assume all input is malicious. Use an "accept known good" input validation strategy, i.e., use a list of acceptable inputs that strictly conform to specifications.
> To reduce the likelihood of introducing an out-of-bounds read, ensure that you validate and ensure correct calculations for any length argument, buffer size calculation, or offset.
> Architecture and Design: Strategy: _Language Selection_
> Use a language that provides appropriate memory abstractions.
>
> **Translated:**
> Produk membaca data melewati akhir, atau sebelum awal, dari buffer yang dimaksud.
> Implementasi: Strategi: _Input Validation_
> Anggap semua input berbahaya. Gunakan strategi validasi input "accept known good", yaitu memakai daftar input yang dapat diterima dan sesuai secara ketat dengan spesifikasi.
> Untuk mengurangi kemungkinan terjadinya out-of-bounds read, pastikan Anda memvalidasi dan menghitung dengan benar setiap argumen panjang, perhitungan ukuran buffer, atau offset.
> Arsitektur dan desain: Strategi: _Language Selection_
> Gunakan bahasa yang menyediakan abstraksi memori yang sesuai.

### Docker Recipes - Snort 3 Docker Compose

Dipakai sebagai pembanding praktis untuk menjalankan Snort 3 lewat Docker Compose. Bagian yang diambil bukan seluruh topologi `network_mode: host`, melainkan pola penggunaan image `ciscotalos/snort3`, capability jaringan, mount rules/logs, dan command Snort yang menunjuk interface serta file konfigurasi.

Referensi terkait: [Docker Recipes - Snort 3 Docker Compose](https://docker.recipes/security/snort3)

> image: ciscotalos/snort3:latest
> cap_add:
>   - NET_ADMIN
>   - NET_RAW
> volumes:
>   - snort_rules:/usr/local/etc/rules
>   - snort_logs:/var/log/snort
> command: -i eth0 -c /usr/local/etc/snort/snort.lua
>
> **Translated:**
> Contoh Compose Snort memakai image `ciscotalos/snort3`, capability `NET_ADMIN` dan `NET_RAW`, volume untuk rules/logs, serta command yang menjalankan Snort pada interface `eth0` dengan file `snort.lua`.

### Docker Hub - ciscotalos/snort3

Dipakai untuk memastikan image Snort 3 yang digunakan memang image publik dari Cisco Talos, bukan image acak yang tidak jelas asalnya.

Referensi terkait: [Docker Hub - ciscotalos/snort3](https://hub.docker.com/r/ciscotalos/snort3)

> docker pull ciscotalos/snort3
>
> **Translated:**
> Image Snort 3 dapat diambil dari Docker Hub dengan nama `ciscotalos/snort3`.

### Snort 3 Configuration Guide

Dipakai untuk menentukan bentuk file `security/snort/snort.lua`, termasuk penggunaan Lua, `snort.lua`, `snort_defaults.lua`, dan validasi konfigurasi lewat argumen `-c`.

Referensi terkait: [Snort 3 Configuration Guide](https://docs.snort.org/start/configuration)

> Snort 3 configuration is now all done in Lua, and these configuration options can be supplied to Snort in three different ways: via the command line, with a single Lua configuration file, or with multiple Lua configuration files.
>
> The default files are located in the `lua/` directory, and the `snort.lua` and `snort_defaults.lua` files present there make up what is considered to be the the base configuration.
>
> **Translated:**
> Konfigurasi Snort 3 dilakukan dengan Lua. File `snort.lua` dan `snort_defaults.lua` menjadi konfigurasi dasar yang dapat dipakai sebagai template.

### Snort 3 Rule Writing Guide

Dipakai untuk dasar pemisahan rule ke file `.rules`, pemuatan rule lewat `ips.include`, dan mode alert `alert_fast` yang dipakai pada service Snort.

Referensi terkait: [Snort 3 Rule Writing Guide](https://docs.snort.org/start/rules)

> Snort rules can be placed directly in one's Lua configuration file(s) via the `ips` module, but for the most part they will live in distinct `.rules` files that get "included".
>
> Snort provides a few different "alert mode" options that can be set on the command line to tweak the way alerts are displayed.
>
> **Translated:**
> Rule Snort umumnya disimpan pada file `.rules` terpisah yang di-include dari konfigurasi, dan output alert dapat diatur memakai opsi alert mode seperti `alert_fast`.

### Docker Compose Services - network_mode

Dipakai untuk menjelaskan keputusan menjalankan Snort sebagai sidecar dengan `network_mode: service:app`, bukan `network_mode: host`. Dengan pola ini, Snort melihat network namespace yang sama dengan aplikasi.

Referensi terkait: [Docker Compose services - network_mode](https://docs.docker.com/reference/compose-file/services/#network_mode)

> `network_mode` sets a service container's network mode.
>
> - `service:{name}`: Gives the container access to the specified container by referring to its service name.
>
> **Translated:**
> `network_mode` mengatur mode jaringan container. Nilai `service:{name}` memberi container akses ke container service yang dituju berdasarkan nama service.

### Docker Docs - Docker with iptables

Dipakai untuk dasar ACL jaringan di konteks Docker. Referensi Docker menjelaskan bagaimana Docker berhubungan dengan `iptables`, sedangkan man page `iptables` dan `iptables-extensions` dipakai untuk menjelaskan semantik rule yang benar-benar muncul di `docker/acl.sh`: chain `INPUT`, policy `DROP`, target `ACCEPT`/`DROP`, `conntrack`, `multiport`, dan filter ICMP.

Referensi terkait: [Docker Docs - Docker with iptables](https://docs.docker.com/engine/network/firewall-iptables/)

> Docker creates iptables rules in the host's network namespace for bridge networks. For bridge and other network types, iptables rules for DNS are also created in the container's network namespace.
>
> You may need to allow responses from servers outside the permitted external address ranges. The following rule accepts any incoming or outgoing packet belonging to a flow that has already been accepted by other rules.
>
> **Translated:**
> Docker membuat rule `iptables` untuk jaringan bridge, dan pada beberapa tipe jaringan juga membuat rule di namespace container. Saat membatasi koneksi, traffic yang sudah termasuk koneksi `RELATED` atau `ESTABLISHED` perlu tetap diizinkan agar respons koneksi yang sah tidak ikut terblokir.

Referensi terkait: [iptables(8)](https://man7.org/linux/man-pages/man8/iptables.8.html)

> A firewall rule specifies criteria for a packet and a target.
>
> The target can be one of the special values `ACCEPT`, `DROP` or `RETURN`.
>
> `ACCEPT` means to let the packet through. `DROP` means to drop the packet on the floor.
>
> The filter table contains the built-in chains `INPUT`, `FORWARD`, and `OUTPUT`.
>
> **Translated:**
> Rule firewall menetapkan kriteria paket dan target.
>
> Target dapat berupa nilai khusus seperti `ACCEPT`, `DROP`, atau `RETURN`.
>
> `ACCEPT` berarti paket diizinkan lewat. `DROP` berarti paket dijatuhkan.
>
> Tabel filter memuat chain bawaan `INPUT`, `FORWARD`, dan `OUTPUT`.

Referensi terkait: [iptables-extensions(8)](https://man7.org/linux/man-pages/man8/iptables-extensions.8.html)

> `conntrack`
>
> `--ctstate statelist`
>
> `ESTABLISHED`
>
> `RELATED`
>
> `multiport`
>
> This module matches a set of source or destination ports.
>
> `--destination-ports`, `--dports`
>
> `icmp`
>
> `--icmp-type`
>
> **Translated:**
> Extension `conntrack` menyediakan pencocokan state koneksi seperti `ESTABLISHED` dan `RELATED`.
>
> Extension `multiport` mencocokkan sekumpulan port sumber atau tujuan, termasuk melalui opsi `--dports`.
>
> Extension `icmp` menyediakan filter tipe ICMP melalui opsi `--icmp-type`.

## 6. Decision Log Dari Nol

### 6.1. Mengapa Apache + PHP native + MySQL dalam satu container

Keputusan ini bukan keputusan “paling modern”, tetapi keputusan yang paling tepat untuk tugas ini.

| Opsi | Kelebihan | Kekurangan | Keputusan |
| --- | --- | --- | --- |
| Nginx + PHP-FPM + MySQL | arsitektur umum produksi | butuh lebih banyak proses dan konfigurasi | ditolak untuk tugas minimal karena kompleksitas naik |
| Apache + mod_php + MySQL | HTTPS, rewrite, header security, PHP langsung di satu stack | bukan pemisahan service ideal produksi | **dipilih** karena paling lurus untuk tugas satu container |
| Laravel/Node framework penuh | cepat untuk fitur | terlalu banyak abstraksi, laporan jadi kurang transparan | ditolak agar hubungan requirement -> implementasi terlihat jelas |
| PHP native procedural terstruktur | sangat transparan, dependency kecil | butuh disiplin struktur file | **dipilih** |

### 6.2. Mengapa autentikasi berbasis session, bukan JWT

Form login web biasa yang ditest via browser lebih cocok memakai session karena:

1. browser otomatis membawa cookie session,
2. CSRF protection mudah dipasang,
3. logout server-side sederhana,
4. requirement tugas tidak butuh API stateless.

### 6.3. Mengapa password di-hash, tetapi username dienkripsi + diindeks dengan HMAC

Requirement landing page meminta username asli tetap bisa ditampilkan setelah login. Itu membuat satu hash saja tidak cukup.

Keputusan yang tepat:

1. password disimpan sebagai hash Argon2id + pepper,
2. username disimpan dalam dua bentuk:
   - `username_lookup`: HMAC-SHA256 dari username yang sudah dinormalisasi,
   - `username_encrypted`: ciphertext AES-256-GCM agar username asli bisa ditampilkan lagi.

Alasan:

1. login butuh pencarian yang stabil dan cepat,
2. halaman welcome butuh nilai asli,
3. database bocor tetap tidak langsung membuka username plaintext.

### 6.4. Mengapa “buffer overflow” diterjemahkan sebagai mitigasi realistis di level aplikasi

Tugas ini berbasis PHP + Apache + MySQL. Logika bisnis auth ditulis di PHP userland, bukan di C manual. Itu menurunkan risiko buffer overflow pada kode aplikasi yang ditulis sendiri, tetapi **tidak berarti** seluruh stack native menjadi kebal secara absolut.

Interpretasi yang realistis dan jujur:

1. logika auth ditulis di bahasa high-level,
2. panjang input dibatasi ketat,
3. ukuran body request dibatasi,
4. file upload dimatikan,
5. parsing file biner tidak dipakai,
6. request yang tidak sesuai ukuran/format dipotong sejak awal.

Catatan transparansi:

Requirement ini dipenuhi pada level **aplikasi tugas** dan **hardening konfigurasi**, bukan dengan menciptakan proteksi kernel-level baru untuk Apache/MySQL.

## 7. Blueprint Struktur Proyek Dari Nol

Catatan pembacaan: struktur ini dibangun untuk memisahkan area yang boleh diakses browser, area logika aplikasi, dan area hardening container sebelum satu baris implementasi ditulis.

```text
au7h/
├── Dockerfile
├── docker-entrypoint.sh
├── compose.dev.yaml
├── docker/
│   ├── apache-global.conf
│   ├── apache-http.conf.template
│   ├── apache-ssl.conf.template
│   ├── acl.sh
│   └── php.ini
├── config/
│   └── bootstrap.php
├── src/
│   ├── Infrastructure/Database.php
│   ├── Security/
│   │   ├── Auth.php
│   │   └── RateLimiter.php
│   ├── Support/Config.php
│   ├── Support/Http.php
│   └── Presentation/
│       ├── Views.php
│       ├── Components.php
│       ├── AuthViews.php
│       └── ResultViews.php
├── public/
│   ├── index.php
│   ├── register.php
│   ├── login.php
│   ├── welcome.php
│   ├── not-registered.php
│   └── logout.php
├── security/
│   └── snort/
│       ├── snort.lua
│       └── rules/
│           ├── au7h.rules
│           ├── local.rules
│           └── community.rules
├── tests/
│   └── AuthSecurityTest.php
└── certs/
```

Blueprint ini tidak disusun sekadar supaya folder terlihat rapi. Struktur awal dipilih untuk membatasi area yang boleh disentuh browser, memusatkan bootstrap request, memisahkan concern aplikasi, dan memisahkan concern runtime container dari logika PHP.

Alasan struktur:

1. `public/` dijadikan area yang boleh diakses browser karena Apache pada repo ini memang diarahkan ke `DocumentRoot /var/www/html/public` dan `DirectoryIndex index.php`, sehingga file di luar folder ini tidak ikut terekspos ke web. Pola ini terlihat di [docker/apache-ssl.conf.template](/home/fxrdhan/au7h/docker/apache-ssl.conf.template:1) dan cocok dengan endpoint yang memang berada di [public/index.php](/home/fxrdhan/au7h/public/index.php:1), [public/register.php](/home/fxrdhan/au7h/public/register.php:1), [public/login.php](/home/fxrdhan/au7h/public/login.php:1), [public/welcome.php](/home/fxrdhan/au7h/public/welcome.php:1), [public/not-registered.php](/home/fxrdhan/au7h/public/not-registered.php:1), dan [public/logout.php](/home/fxrdhan/au7h/public/logout.php:1).
2. `src/` dipisah berdasarkan concern karena alur aplikasi ini memang terbagi jelas: akses database diletakkan di [src/Infrastructure/Database.php](/home/fxrdhan/au7h/src/Infrastructure/Database.php:1), autentikasi di [src/Security/Auth.php](/home/fxrdhan/au7h/src/Security/Auth.php:1), rate limiting di [src/Security/RateLimiter.php](/home/fxrdhan/au7h/src/Security/RateLimiter.php:1), helper umum di [src/Support/Config.php](/home/fxrdhan/au7h/src/Support/Config.php:1) dan [src/Support/Http.php](/home/fxrdhan/au7h/src/Support/Http.php:1), lalu HTML dirender lewat aggregator [src/Presentation/Views.php](/home/fxrdhan/au7h/src/Presentation/Views.php:1) yang memuat komponen di [src/Presentation/Components.php](/home/fxrdhan/au7h/src/Presentation/Components.php:1), form auth di [src/Presentation/AuthViews.php](/home/fxrdhan/au7h/src/Presentation/AuthViews.php:1), dan halaman hasil di [src/Presentation/ResultViews.php](/home/fxrdhan/au7h/src/Presentation/ResultViews.php:1). Pemisahan ini membuat perubahan tampilan tidak langsung mengganggu query database atau aturan login.
3. `docker/` dipisahkan karena isinya bukan logika bisnis aplikasi, melainkan concern runtime dan hardening container: template virtual host Apache, header keamanan, TLS, pengaturan PHP, dan ACL jaringan dibaca oleh [Dockerfile](/home/fxrdhan/au7h/Dockerfile:1), [docker-entrypoint.sh](/home/fxrdhan/au7h/docker-entrypoint.sh:1), serta [docker/acl.sh](/home/fxrdhan/au7h/docker/acl.sh:1). Dengan begitu, konfigurasi server dapat diubah tanpa mencampur file endpoint atau fungsi autentikasi.
4. `security/snort/` dipisah karena Snort IDS adalah concern monitoring jaringan. [security/snort/snort.lua](/home/fxrdhan/au7h/security/snort/snort.lua:1) memuat konfigurasi IDS, sedangkan [security/snort/rules/au7h.rules](/home/fxrdhan/au7h/security/snort/rules/au7h.rules:1), [security/snort/rules/local.rules](/home/fxrdhan/au7h/security/snort/rules/local.rules:1), dan [security/snort/rules/community.rules](/home/fxrdhan/au7h/security/snort/rules/community.rules:1) memisahkan rule aggregator, rule lokal, dan rule komunitas.
5. `tests/` disiapkan untuk verifikasi helper keamanan. [tests/AuthSecurityTest.php](/home/fxrdhan/au7h/tests/AuthSecurityTest.php:1) memeriksa validasi input, normalisasi username, HMAC lookup, enkripsi username, hashing password, CSRF token, dan policy rate limit.
6. `config/bootstrap.php` dipakai sebagai bootstrap aplikasi agar semua endpoint publik memulai request dari titik inisialisasi yang sama. File ini me-load `Config`, `Database`, `Http`, `Auth`, `RateLimiter`, dan `Views`, lalu memanggil `ensure_app_booted();`, sehingga setup koneksi, session, helper HTTP, rate limit, dan renderer tidak perlu diulang di setiap file endpoint. Pola ini terlihat di [config/bootstrap.php](/home/fxrdhan/au7h/config/bootstrap.php:1) dan dipakai ulang dari [public/index.php](/home/fxrdhan/au7h/public/index.php:1).

### Referensi khusus folder `docker/`

Detail referensi isi file di folder `docker/` sengaja tidak diletakkan di blueprint struktur, melainkan di tahap implementasi saat file-file itu benar-benar dipakai:

1. [docker/apache-http.conf.template](/home/fxrdhan/au7h/docker/apache-http.conf.template:1) dan [docker/apache-ssl.conf.template](/home/fxrdhan/au7h/docker/apache-ssl.conf.template:1) dibahas di Tahap 4 karena di sana alur redirect HTTP dan aktivasi HTTPS baru benar-benar diimplementasikan.
2. [docker/apache-global.conf](/home/fxrdhan/au7h/docker/apache-global.conf:1) dan security headers pada [docker/apache-ssl.conf.template](/home/fxrdhan/au7h/docker/apache-ssl.conf.template:12) dibahas di Tahap 5 karena fokus tahap itu adalah hardening HTTP-level di web server.
3. [docker/php.ini](/home/fxrdhan/au7h/docker/php.ini:1) dibahas di Tahap 6 karena isinya adalah hardening runtime PHP dan penguatan session cookie.
4. [docker/acl.sh](/home/fxrdhan/au7h/docker/acl.sh:1) dibahas di Tahap 18 karena isinya adalah ACL jaringan container dengan `iptables`.

### File pendukung UI, tooling, dan test

File berikut bukan pusat requirement keamanan, tetapi tetap bagian dari implementasi repo dan ikut dipetakan agar struktur proyek terbaca utuh:

1. [resources/tailwind.css](/home/fxrdhan/au7h/resources/tailwind.css:1) adalah source styling, sedangkan [public/styles.css](/home/fxrdhan/au7h/public/styles.css:1) adalah output build yang dilayani browser dan disalin ke image lewat `Dockerfile`.
2. [public/favicon.svg](/home/fxrdhan/au7h/public/favicon.svg:1), font [public/assets/Backwards.ttf](/home/fxrdhan/au7h/public/assets/Backwards.ttf:1), [public/assets/Nunito-400.ttf](/home/fxrdhan/au7h/public/assets/Nunito-400.ttf:1), [public/assets/Nunito-500.ttf](/home/fxrdhan/au7h/public/assets/Nunito-500.ttf:1), [public/assets/Nunito-600.ttf](/home/fxrdhan/au7h/public/assets/Nunito-600.ttf:1), [public/assets/Nunito-700.ttf](/home/fxrdhan/au7h/public/assets/Nunito-700.ttf:1), [public/assets/Nunito-800.ttf](/home/fxrdhan/au7h/public/assets/Nunito-800.ttf:1), [public/theme.js](/home/fxrdhan/au7h/public/theme.js:1), [public/password-validation.js](/home/fxrdhan/au7h/public/password-validation.js:1), [public/page-shell.js](/home/fxrdhan/au7h/public/page-shell.js:1), [public/matrix-rain.js](/home/fxrdhan/au7h/public/matrix-rain.js:1), [public/vendor/motion.js](/home/fxrdhan/au7h/public/vendor/motion.js:1), dan [public/vendor/matrix-animation.js](/home/fxrdhan/au7h/public/vendor/matrix-animation.js:1) adalah lapisan presentasi yang dipanggil oleh layout HTML, bukan sumber keputusan autentikasi atau kontrol server-side.
3. [scripts/sync-motion-vendor.mjs](/home/fxrdhan/au7h/scripts/sync-motion-vendor.mjs:1) menyalin bundle Motion ke folder publik, sedangkan [scripts/update-snort-community-rules.sh](/home/fxrdhan/au7h/scripts/update-snort-community-rules.sh:1) memperbarui [security/snort/rules/community.rules](/home/fxrdhan/au7h/security/snort/rules/community.rules:1) yang kemudian dimuat oleh `au7h.rules`.
4. [tests/AuthSecurityTest.php](/home/fxrdhan/au7h/tests/AuthSecurityTest.php:1) adalah test helper keamanan yang memverifikasi validasi input, normalisasi username, HMAC lookup, enkripsi username, hashing password, CSRF token, dan policy rate limit.

### Jejak referensi desain

Referensi berikut dipakai bukan untuk menyalin struktur framework besar, melainkan untuk menguatkan prinsip desain yang memang diterapkan di repo ini: batasi web root ke folder publik, pisahkan concern aplikasi, dan jangan campur config deploy dengan kode inti.

Referensi terkait: [Apache HTTP Server - Mapping URLs to Filesystem Locations](https://httpd.apache.org/docs/current/urlmapping.html)

> In deciding what file to serve for a given request, httpd's default behavior is to take the URL-Path for the request (the part of the URL following the hostname and port) and add it to the end of the `DocumentRoot` specified in your configuration files. Therefore, the files and directories underneath the `DocumentRoot` make up the basic document tree which will be visible from the web.
>
> **Translated:**
> Saat menentukan file apa yang harus dilayani untuk sebuah request, perilaku default `httpd` adalah mengambil URL path request lalu menambahkannya ke akhir `DocumentRoot` yang ditentukan di file konfigurasi. Karena itu, file dan direktori di bawah `DocumentRoot` membentuk pohon dokumen dasar yang akan terlihat dari web.

Referensi terkait: [MDN - MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

> MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic.
> It emphasizes a separation between the software's business logic and display.
> This "separation of concerns" provides for a better division of labor and improved maintenance.
> Model: Manages data and business logic.
> View: Handles layout and display.
> Controller: Routes commands to the model and view parts.
>
> **Translated:**
> MVC (Model-View-Controller) adalah pola desain software yang umum dipakai untuk mengimplementasikan user interface, data, dan controlling logic.
> Pola ini menekankan pemisahan antara business logic software dan tampilan.
> "Separation of concerns" ini memberi pembagian kerja yang lebih baik dan maintenance yang lebih mudah.
> Model: mengelola data dan business logic.
> View: menangani layout dan tampilan.
> Controller: mengarahkan command ke bagian model dan view.

Referensi terkait: [The Twelve-Factor App - Config](https://12factor.net/config)

> An app's config is everything that is likely to vary between deploys (staging, production, developer environments, etc).
> Apps sometimes store config as constants in the code. This is a violation of twelve-factor, which requires strict separation of config from code.
> A litmus test for whether an app has all config correctly factored out of the code is whether the codebase could be made open source at any moment, without compromising any credentials.
> The twelve-factor app stores config in environment variables (often shortened to env vars or env).
>
> **Translated:**
> Config aplikasi adalah semua hal yang kemungkinan berubah antar-deploy (staging, production, environment developer, dan seterusnya).
> Aplikasi kadang menyimpan konfigurasi sebagai konstanta di dalam kode. Ini melanggar prinsip twelve-factor, yang menuntut pemisahan ketat antara konfigurasi dan kode.
> Uji sederhananya: apakah codebase bisa dibuat open source kapan saja tanpa membocorkan credential.
> Aplikasi twelve-factor menyimpan config di environment variables (sering disingkat env vars atau env).

Dengan tiga referensi ini, justifikasi saat presentasi bisa dijelaskan singkat seperti berikut: `public/` dipilih untuk membatasi permukaan akses browser, `src/` dipisah agar data, tampilan, dan controlling logic tidak bercampur, `docker/` dipisah agar hardening server dan runtime container tidak masuk ke logika aplikasi, dan konfigurasi deploy tetap diambil dari environment variable alih-alih ditanam sebagai konstanta kode.

## 8. Tahapan Implementasi Bertahap

Mulai section ini, tiap tahap dibaca dengan alur yang sama: apa yang diminta, target teknis tahap itu, referensi apa yang dicari, bagian sumber mana yang benar-benar dibaca dan ditempel ke laporan, lalu baru implementasinya. Dengan pola ini, hubungan requirement -> referensi -> kode tetap terlihat menyambung.

### Tahap 0 - Membuat folder kosong dan baseline tooling

#### Tujuan

Menyediakan fondasi kerja yang rapi sebelum instalasi dependency.

#### Analisis alur

Jika struktur folder tidak dipatok di awal, file keamanan, runtime, dan endpoint akan cepat tercampur. Untuk tugas yang dinilai berdasarkan hasil demonstrasi, struktur jelas memudahkan debugging saat presentasi.

#### Jejak referensi sebelum implementasi

Tahap ini tidak membutuhkan referensi internet baru. Alurnya langsung bergerak dari requirement umum proyek ke target paling dasar: siapkan kerangka folder dan file inti dulu, baru tahap-tahap berikutnya mengisi detail implementasi dan referensi keamanan.

#### Implementasi

**Langkah 1:**

- Buat seluruh folder dan placeholder file inti lebih dulu.
- Pastikan tahapan berikutnya tinggal mengisi isi file, bukan terus-menerus mengubah struktur proyek.

```bash
mkdir -p au7h/{docker,config,src/Infrastructure,src/Security,src/Support,src/Presentation,public,certs}
cd au7h
touch Dockerfile docker-entrypoint.sh compose.dev.yaml
touch docker/apache-global.conf docker/apache-http.conf.template docker/apache-ssl.conf.template docker/php.ini
touch config/bootstrap.php
touch src/Infrastructure/Database.php src/Security/Auth.php src/Support/Config.php src/Support/Http.php src/Presentation/Views.php
touch public/index.php public/register.php public/login.php public/welcome.php public/not-registered.php public/logout.php
```

#### Hasil tahap

Folder proyek siap diisi tanpa perubahan struktur besar di tengah jalan.

### Tahap 1 - Menentukan image dasar dan isi container

#### Tujuan

Membuat satu image yang memuat Apache, PHP, MySQL, dan OpenSSL.

#### Analisis alur

Tugas memperbolehkan satu container untuk server dan database. Karena itu, image harus langsung memasang semua komponen inti. Pemilihan Apache mengurangi kompleksitas dibanding Nginx + PHP-FPM.

#### Jejak referensi sebelum implementasi

Referensi terkait: [Docker Docs - Dockerfile overview](https://docs.docker.com/build/concepts/dockerfile/)

> Docker can build images automatically by reading the instructions from a
> Dockerfile. A Dockerfile is a text file containing instructions for building
> your source code. The Dockerfile instruction syntax is defined by the
> specification reference in the Dockerfile reference.
>
> Dockerfiles are crucial inputs for image builds and can facilitate automated,
> multi-layer image builds based on your unique configurations.
>
> **Translated:**
> Docker dapat membangun image secara otomatis dengan membaca instruksi dari sebuah Dockerfile.
> Dockerfile adalah file teks yang berisi instruksi untuk membangun source code.
> Sintaks instruksi Dockerfile didefinisikan oleh spesifikasi pada Dockerfile reference.
>
> Dockerfile adalah masukan penting untuk proses build image dan dapat memfasilitasi build image berlapis yang otomatis sesuai konfigurasi unik proyek.

Referensi terkait: [Docker CLI - docker image build](https://docs.docker.com/reference/cli/docker/image/build/)

> | Description | Build an image from a Dockerfile |
> | Usage | `docker image build [OPTIONS] PATH | URL | -` |
> | Aliases | `docker build` `docker builder build` |
>
> The build context is the positional argument you pass when invoking the build
> command. In the following example, the context is `.`, meaning the current
> working directory.
>
> **Translated:**
> | Deskripsi | Membangun image dari sebuah Dockerfile |
> | Pemakaian | `docker image build [OPTIONS] PATH | URL | -` |
> | Alias | `docker build` `docker builder build` |
>
> Build context adalah argumen posisi yang Anda berikan saat memanggil perintah build.
> Pada contoh berikut, context-nya adalah `.`, artinya direktori kerja saat ini.

Referensi terkait: [Dockerfile reference - FROM](https://docs.docker.com/reference/dockerfile/#from)

> The `FROM` instruction initializes a new build stage and sets the
> base image for subsequent instructions. As such, a valid Dockerfile must
> start with a `FROM` instruction. The image can be any valid image.
>
> `ARG` is the only instruction that may precede `FROM` in the Dockerfile.
>
> **Translated:**
> Instruksi `FROM` menginisialisasi tahap build baru dan menetapkan base image untuk instruksi-instruksi berikutnya.
> Karena itu, Dockerfile yang valid harus diawali dengan instruksi `FROM`.
> Image dasarnya bisa berupa image apa pun yang valid.
>
> `ARG` adalah satu-satunya instruksi yang boleh muncul sebelum `FROM` di Dockerfile.

Referensi terkait: [Dockerfile reference - RUN](https://docs.docker.com/reference/dockerfile/#run)

> The `RUN` instruction will execute any commands to create a new layer on top of
> the current image. The added layer is used in the next step in the Dockerfile.
> `RUN` has two forms:
>
> `RUN [OPTIONS] <command> ...`
> `RUN [OPTIONS] [ "<command>", ... ]`
>
> **Translated:**
> Instruksi `RUN` akan mengeksekusi perintah apa pun untuk membuat layer baru di atas image saat ini.
> Layer yang ditambahkan itu lalu dipakai pada langkah berikutnya di Dockerfile.
> `RUN` memiliki dua bentuk:
>
> `RUN [OPTIONS] <command> ...`
> `RUN [OPTIONS] [ "<command>", ... ]`

Referensi terkait: [Dockerfile reference - shell and exec form](https://docs.docker.com/reference/dockerfile/#shell-and-exec-form)

> The `RUN`, `CMD`, and `ENTRYPOINT` instructions all have two possible forms:
> - `INSTRUCTION command param1 param2` (shell form)
> - `INSTRUCTION ["executable","param1","param2"]` (exec form)
>
> **Translated:**
> Instruksi `RUN`, `CMD`, dan `ENTRYPOINT` masing-masing punya dua bentuk:
> - `INSTRUCTION command param1 param2` (bentuk shell)
> - `INSTRUCTION ["executable","param1","param2"]` (bentuk exec)

Referensi terkait: [Dockerfile reference - ENTRYPOINT](https://docs.docker.com/reference/dockerfile/#entrypoint)

> The exec form is best used to specify an `ENTRYPOINT` instruction, combined
> with `CMD` for setting default arguments that can be overridden at runtime.
>
> Using the exec form doesn't automatically invoke a command shell. This means
> that normal shell processing, such as variable substitution, doesn't happen.
>
> **Translated:**
> Bentuk exec paling tepat dipakai untuk menetapkan instruksi `ENTRYPOINT`, lalu dikombinasikan dengan `CMD` untuk memberi argumen default yang masih bisa dioverride saat runtime.
>
> Pemakaian bentuk exec tidak otomatis memanggil command shell. Artinya, pemrosesan shell normal seperti substitusi variabel tidak terjadi secara otomatis.

Bagian overview halaman yang sama juga dipakai untuk memetakan fungsi instruksi yang memang muncul di Dockerfile proyek ini:

Referensi terkait: [Dockerfile reference - instruction overview](https://docs.docker.com/reference/dockerfile/)

> `COPY` | Copy files and directories.
> `ENV` | Set environment variables.
> `EXPOSE` | Describe which ports your application is listening on.
> `ENTRYPOINT` | Specify default executable.
> `CMD` | Specify default commands.
> `VOLUME` | Create volume mounts.
>
> **Translated:**
> `COPY` | Menyalin file dan direktori.
> `ENV` | Menetapkan environment variable.
> `EXPOSE` | Menjelaskan port yang didengarkan aplikasi.
> `ENTRYPOINT` | Menentukan executable default.
> `CMD` | Menentukan perintah default.
> `VOLUME` | Membuat mount volume.

Setelah format image, arti `FROM` dan `RUN`, serta peran `COPY`, `ENV`, `EXPOSE`, `VOLUME`, `ENTRYPOINT`, dan `CMD` jelas, barulah isi container ditulis.

#### Implementasi

**Langkah 1:**

- Mulai dari tahap build frontend yang hanya menghasilkan CSS.
- Lanjut ke base image runtime yang stabil untuk paket sistem.
- Pakai Bun untuk proses build CSS.
- Pastikan image akhir tetap memuat komponen runtime untuk HTTP/HTTPS, PHP, MySQL, dan ACL jaringan.

**Sumber:** [Dockerfile:1](/home/fxrdhan/au7h/Dockerfile:1)

**Alur kode:** stage `frontend-builder` menginstall dependency frontend dan membangun CSS. Setelah itu stage runtime dimulai dari Ubuntu, mode instalasi non-interaktif diaktifkan, paket inti web, database, TLS, dan ACL dipasang, modul Apache yang dibutuhkan dinyalakan, dan sisa cache apt dibersihkan agar layer runtime tetap ringkas.

```dockerfile
FROM oven/bun:1.3.6 AS frontend-builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY resources ./resources
COPY public ./public
RUN bun run build:css
```

Blok ini adalah stage khusus build frontend. Dependency dipasang dengan Bun, lalu CSS dibangun dari resource frontend sebelum hasilnya nanti dibawa ke image runtime.

```dockerfile
FROM ubuntu:25.10

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    apache2 \
    gettext-base \
    iptables \
    libapache2-mod-php8.4 \
    mysql-server \
    openssl \
    php8.4 \
    php8.4-mysql \
  && a2enmod headers rewrite ssl \
  && (a2dissite 000-default default-ssl >/dev/null 2>&1 || true) \
  && rm -rf /var/lib/apt/lists/*
```

Blok ini memulai image runtime dari Ubuntu, memasang paket web/database/TLS/ACL, mengaktifkan modul Apache yang diperlukan, lalu membersihkan cache apt agar image tidak membawa sisa instalasi yang tidak perlu.

**Langkah 2:**

- Salin semua file yang dibutuhkan image.
- Pasang script ACL.
- Bawa hasil build CSS dari stage frontend.
- Aktifkan konfigurasi global Apache.
- Siapkan direktori data persisten.
- Tetapkan proses startup utama container.

**Sumber:** [Dockerfile:44](/home/fxrdhan/au7h/Dockerfile:44)

**Alur kode:** semua file runtime proyek disalin lebih dulu ke image, script ACL ikut dipasang sebagai executable, hasil CSS dari stage frontend disalin ke image final, lalu direktori persisten dan izin file disiapkan. Setelah itu port, volume, entrypoint, dan proses utama container dideklarasikan sebagai urutan startup final.

```dockerfile
COPY docker/php.ini /etc/php/8.4/apache2/conf.d/90-au7h-security.ini
COPY docker/apache-global.conf /etc/apache2/conf-available/zzz-au7h-global.conf
COPY docker/apache-http.conf.template /etc/apache2/sites-available/http-redirect.conf.template
COPY docker/apache-ssl.conf.template /etc/apache2/sites-available/app-ssl.conf.template
COPY docker/acl.sh /usr/local/bin/au7h-apply-acl.sh
```

Blok ini menyalin konfigurasi runtime dan script ACL ke lokasi sistem di dalam image agar Apache, PHP, dan firewall container punya file konfigurasi yang siap dipakai.

```dockerfile
COPY config /var/www/html/config
COPY public /var/www/html/public
COPY --from=frontend-builder /app/public/styles.css /var/www/html/public/styles.css
COPY src /var/www/html/src
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint-custom.sh
```

Blok ini menyalin source aplikasi dan hasil build CSS ke document tree runtime. Entrypoint juga dipasang sebagai script startup utama container.

```dockerfile
RUN mkdir -p /var/www/data /var/www/certs /var/run/mysqld /var/lib/mysql \
  && a2enconf zzz-au7h-global \
  && chmod +x /usr/local/bin/docker-entrypoint-custom.sh \
  && chmod +x /usr/local/bin/au7h-apply-acl.sh \
  && chown -R www-data:www-data /var/www \
  && chown -R mysql:mysql /var/run/mysqld /var/lib/mysql
```

Blok ini menyiapkan direktori data, sertifikat, socket MySQL, dan izin file. Apache global config juga diaktifkan sebelum container dijalankan.

```dockerfile
EXPOSE 8080 8443
VOLUME ["/var/www/data", "/var/www/certs", "/var/lib/mysql"]

ENTRYPOINT ["docker-entrypoint-custom.sh"]
CMD ["apache2ctl", "-D", "FOREGROUND"]
```

Blok ini mendeklarasikan port web, volume persisten, entrypoint bootstrap, dan proses utama Apache yang menjaga container tetap berjalan.

#### Keputusan penting

1. `frontend-builder` dipakai hanya untuk membangun CSS; image runtime akhir tetap menjalankan aplikasi dalam satu container.
2. `openssl` dipasang karena sertifikat perlu dibuat otomatis jika belum ada.
3. `gettext-base` dipasang untuk `envsubst` saat merender template Apache.
4. `iptables` dipasang karena ACL container diterapkan dari dalam container aplikasi.
5. `libapache2-mod-php8.4` dipakai agar PHP langsung dilayani Apache tanpa FPM tambahan.

### Tahap 2 - Menetapkan environment inti container

#### Tujuan

Mendefinisikan port, path data, nama database, dan user aplikasi sejak awal.

#### Analisis alur

Environment variable yang eksplisit membuat startup container deterministik dan memudahkan perpindahan antara mode development dan mode demo/presentasi.

#### Jejak referensi sebelum implementasi

Tahap ini masih memakai referensi Dockerfile yang sama, tetapi fokusnya pindah ke perilaku `ENV` dan penggantian variabel pada instruksi berikutnya.

Referensi terkait: [Dockerfile reference - ENV](https://docs.docker.com/reference/dockerfile/#env)

> Environment variables are supported by the following list of instructions in
> the Dockerfile:
> - `ADD`
> - `COPY`
> - `ENV`
> - `EXPOSE`
> - `FROM`
> - `LABEL`
> - `STOPSIGNAL`
> - `USER`
> - `VOLUME`
> - `WORKDIR`
> - `ONBUILD` (when combined with one of the supported instructions above)
>
> **Translated:**
> Environment variable didukung oleh daftar instruksi berikut di Dockerfile:
> - `ADD`
> - `COPY`
> - `ENV`
> - `EXPOSE`
> - `FROM`
> - `LABEL`
> - `STOPSIGNAL`
> - `USER`
> - `VOLUME`
> - `WORKDIR`
> - `ONBUILD` (saat dikombinasikan dengan salah satu instruksi yang didukung di atas)

Referensi terkait: [Dockerfile reference - ENV](https://docs.docker.com/reference/dockerfile/#env)

> You can also use environment variables with `RUN`, `CMD`, and `ENTRYPOINT`
> instructions, but in those cases the variable substitution is handled by the
> command shell, not the builder.
>
> Environment variable substitution use the same value for each variable
> throughout the entire instruction. Changing the value of a variable only takes
> effect in subsequent instructions.
>
> **Translated:**
> Environment variable juga bisa dipakai pada instruksi `RUN`, `CMD`, dan `ENTRYPOINT`,
> tetapi pada kasus itu substitusi variabel ditangani oleh command shell, bukan oleh builder.
>
> Substitusi environment variable memakai nilai yang sama untuk setiap variabel
> sepanjang satu instruksi. Perubahan nilai sebuah variabel baru berlaku pada
> instruksi-instruksi setelahnya.

Referensi terkait: [Dockerfile reference - ENV](https://docs.docker.com/reference/dockerfile/#env)

> The environment variables set using `ENV` will persist when a container is run
> from the resulting image. You can view the values using `docker inspect`, and
> change them using `docker run --env <key>=<value>`.
>
> Unlike an `ARG` instruction, `ENV` values are always persisted in the built
> image.
>
> **Translated:**
> Environment variable yang ditetapkan dengan `ENV` akan tetap ada saat container
> dijalankan dari image hasil build. Nilainya bisa dilihat dengan `docker inspect`
> dan diubah dengan `docker run --env <key>=<value>`.
>
> Berbeda dari instruksi `ARG`, nilai `ENV` selalu dipersist ke dalam image yang dibangun.

Setelah makna `ENV`, efek perubahan nilainya, dan persistensinya jelas, semua port, path, dan identitas database baru dinyatakan eksplisit agar entrypoint, Apache, PHP, dan MySQL membaca nilai yang sama.

#### Implementasi

**Langkah 1:**

- Deklarasikan semua variabel lingkungan yang dipakai bersama oleh entrypoint, Apache, PHP, dan koneksi database.
- Hindari nilai penting yang terselip hard-code di banyak file.

**Sumber:** [Dockerfile:30](/home/fxrdhan/au7h/Dockerfile:30)

**Alur kode:** blok ini menetapkan satu set environment variable bersama yang nanti dibaca ulang oleh entrypoint, Apache, PHP, dan MySQL agar seluruh komponen bootstrap memakai nilai yang sama.

```dockerfile
ENV APP_PORT_HTTP=8080 \
    APP_PORT_HTTPS=8443 \
    PUBLIC_HTTPS_PORT=8443 \
    APP_DATA_DIR=/var/www/data \
    DB_HOST=127.0.0.1 \
    DB_PORT=3306 \
    DB_NAME=au7h_auth \
    DB_USER=au7h_app \
    CERT_DIR=/var/www/certs \
    MYSQL_DATA_DIR=/var/lib/mysql \
    MYSQL_DATABASE=au7h_auth \
    MYSQL_APP_USER=au7h_app \
    MYSQL_PORT=3306
```

#### Hasil tahap

Semua bagian bootstrap bisa membaca nilai yang konsisten tanpa hard-code tersebar.

### Tahap 3 - Menulis entrypoint untuk bootstrap runtime, secret, sertifikat, dan MySQL

#### Tujuan

Membuat container bisa menyala dari nol tanpa setup manual tambahan.

#### Analisis alur

Tanpa entrypoint, container satu-image akan sulit menghidupkan MySQL lebih dulu, menyiapkan secret runtime, merender template Apache, lalu menyalakan Apache. Entry point menjadi pusat orkestrasi internal container.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah dokumentasi bootstrap MySQL, pembuatan user database, grant privilege, readiness check, dan TLS server dasar.

Referensi terkait: [MySQL - Data Directory Initialization](https://dev.mysql.com/doc/refman/8.4/en/data-directory-initialization.html)

> After MySQL is installed, the data directory must be initialized, including the tables in the `mysql` system schema.
> To initialize the data directory, invoke [mysqld](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html) with the [--initialize](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) or [--initialize-insecure](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure) option.
> Use `--initialize` for “secure by default” installation, including generation of a random initial `root` password.
> Typically, data directory initialization need be done only after MySQL first has been installed.
>
> **Translated:**
> Setelah MySQL di-install, data directory harus diinisialisasi, termasuk tabel dalam system schema `mysql`.
> Untuk menginisialisasi data directory, jalankan [mysqld](https://dev.mysql.com/doc/refman/8.4/en/mysqld.html) dengan opsi [--initialize](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize) atau [--initialize-insecure](https://dev.mysql.com/doc/refman/8.4/en/server-options.html#option_mysqld_initialize-insecure).
> Gunakan `--initialize` untuk instalasi yang “secure by default”, termasuk pembuatan password awal `root` yang acak.
> Biasanya, inisialisasi data directory hanya perlu dilakukan setelah MySQL pertama kali di-install.

Referensi terkait: [MySQL - CREATE USER](https://dev.mysql.com/doc/refman/8.4/en/create-user.html)

> The [CREATE USER](https://dev.mysql.com/doc/refman/8.4/en/create-user.html) statement creates new MySQL accounts.
> It enables authentication, role, SSL/TLS, resource-limit, password-management, comment, and attribute properties to be established for new accounts.
> `CREATE USER 'jeffrey'@'localhost' IDENTIFIED BY 'password';`
> An account when first created has no privileges and the default role `NONE`.
> To assign privileges or roles to this account, use one or more [GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html) statements.
>
> **Translated:**
> Statement [CREATE USER](https://dev.mysql.com/doc/refman/8.4/en/create-user.html) membuat akun MySQL baru.
> Statement ini memungkinkan authentication, role, SSL/TLS, resource limit, password management, comment, dan attribute ditetapkan untuk akun baru.
> `CREATE USER 'jeffrey'@'localhost' IDENTIFIED BY 'password';`
> Saat akun pertama kali dibuat, akun tersebut tidak memiliki privilege dan role default-nya adalah `NONE`.
> Untuk memberikan privilege atau role ke akun ini, gunakan satu atau beberapa statement [GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html).

Referensi terkait: [MySQL - GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html)

> The [GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html) statement assigns privileges and roles to MySQL user accounts and roles.
> The [GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html) statement enables system administrators to grant privileges and roles, which can be granted to user accounts and roles.
> With `ON`, the statement grants privileges.
> Database privileges apply to all objects in a given database. To assign database-level privileges, use `ON db_name.*` syntax.
> `GRANT ALL ON mydb.* TO 'someuser'@'somehost';`
>
> **Translated:**
> Statement [GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html) memberikan privilege dan role kepada akun user dan role MySQL.
> Statement [GRANT](https://dev.mysql.com/doc/refman/8.4/en/grant.html) memungkinkan administrator sistem memberikan privilege dan role, yang dapat diberikan kepada akun user dan role.
> Dengan `ON`, statement tersebut memberikan privilege.
> Privilege tingkat database berlaku untuk semua object dalam database tertentu. Untuk memberikan privilege tingkat database, gunakan sintaks `ON db_name.*`.
> `GRANT ALL ON mydb.* TO 'someuser'@'somehost';`

Referensi terkait: [MySQL - mysqladmin](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html)

> [mysqladmin](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html) is a client for performing administrative operations.
> Invoke [mysqladmin](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html) like this:
> `mysqladmin [options] command [command-arg] [command [command-arg]] ...`
> `ping`: Check whether the server is available. The return status from [mysqladmin](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html) is 0 if the server is running, 1 if it is not.
> `shutdown`: Stop the server.
>
> **Translated:**
> [mysqladmin](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html) adalah client untuk melakukan operasi administratif.
> Panggil [mysqladmin](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html) dengan format:
> `mysqladmin [options] command [command-arg] [command [command-arg]] ...`
> `ping`: memeriksa apakah server tersedia. Status return dari [mysqladmin](https://dev.mysql.com/doc/refman/8.4/en/mysqladmin.html) adalah 0 jika server berjalan, 1 jika tidak.
> `shutdown`: menghentikan server.

Referensi terkait: [OpenSSL - openssl req](https://docs.openssl.org/3.5/man1/openssl-req/)

> This command primarily creates and processes certificate requests (CSRs) in
> PKCS#10 format. It can additionally create self-signed certificates for use
> as root CAs for example.
>
> `-x509`
> This option outputs a certificate instead of a certificate request. This is
> typically used to generate test certificates.
>
> `-newkey arg`
> This option is used to generate a new private key unless `-key` is given.
> This option implies the `-new` flag to create a new certificate request or a
> new certificate in case `-x509` is used.
>
> `[rsa:] nbits` generates an RSA key `nbits` in size. If `nbits` is omitted,
> i.e., `-newkey rsa` is specified, the default key size specified in the
> configuration file with the `default_bits` option is used if present, else
> 2048.
>
> `-keyout filename`
> This gives the filename to write any private key to that has been newly
> created or read from `-key`.
>
> `-out filename`
> This specifies the output filename to write to or standard output by default.
>
> `-subj arg`
> Sets subject name for new request or supersedes the subject name when
> processing a certificate request.
>
> `-days n`
> When `-x509` is in use this specifies the number of days from today to
> certify the certificate for.
>
> `-addext ext`
> Add a specific extension to the certificate (if `-x509` is in use) or
> certificate request.
>
> **Translated:**
> Perintah ini terutama membuat dan memproses certificate request (CSR) dalam
> format PKCS#10. Perintah ini juga dapat membuat self-signed certificate,
> misalnya untuk dipakai sebagai root CA.
>
> `-x509`
> Opsi ini mengeluarkan sertifikat alih-alih certificate request. Opsi ini
> biasanya dipakai untuk membuat test certificate.
>
> `-newkey arg`
> Opsi ini dipakai untuk membuat private key baru kecuali jika `-key` sudah
> diberikan. Opsi ini juga menyiratkan flag `-new` untuk membuat certificate
> request baru atau sertifikat baru ketika `-x509` dipakai.
>
> `[rsa:] nbits` membuat RSA key berukuran `nbits`. Jika `nbits` dihilangkan,
> yaitu ketika `-newkey rsa` dipakai, maka ukuran key default yang ditentukan
> di configuration file dengan opsi `default_bits` akan dipakai bila ada,
> dan jika tidak ada maka default-nya 2048.
>
> `-keyout filename`
> Opsi ini menentukan nama file untuk menulis private key yang baru dibuat
> atau dibaca dari `-key`.
>
> `-out filename`
> Opsi ini menentukan nama file output yang akan ditulis, atau ke standard
> output secara default.
>
> `-subj arg`
> Opsi ini menetapkan subject name untuk request baru atau menimpa subject name
> saat memproses certificate request.
>
> `-days n`
> Saat `-x509` dipakai, opsi ini menentukan jumlah hari sejak hari ini selama
> mana sertifikat dinyatakan berlaku.
>
> `-addext ext`
> Opsi ini menambahkan extension tertentu ke sertifikat (jika `-x509` dipakai)
> atau ke certificate request.

Setelah alur bootstrap, privilege, readiness, dan TLS startup terbaca jelas, entrypoint baru ditulis.

#### Implementasi

**Langkah 1:**

- Buat secret runtime sekali saja pada startup pertama.
- Simpan secret dalam file dengan hak akses ketat.
- Hindari password dan key dibakar permanen ke image.

Shell dibuka dalam mode ketat, lalu secret runtime hanya dibuat saat file belum ada.

**Sumber:** [docker-entrypoint.sh:50](/home/fxrdhan/au7h/docker-entrypoint.sh:50)

**Alur kode:** saat container pertama kali start, skrip mengecek apakah file secret sudah ada; jika belum, skrip membuat semua secret runtime sekaligus lalu menyimpannya ke satu file yang nantinya di-load oleh proses bootstrap berikutnya.

```sh
if [ ! -f "${SECRET_FILE}" ]; then
  {
    printf 'PEPPER_SECRET=%s\n' "$(openssl rand -hex 32)"
    printf 'ENCRYPTION_KEY=%s\n' "$(openssl rand -hex 32)"
    printf 'MYSQL_ROOT_PASSWORD=%s\n' "$(openssl rand -hex 24)"
    printf 'MYSQL_APP_PASSWORD=%s\n' "$(openssl rand -hex 24)"
  } > "${SECRET_FILE}"
fi
```

**Langkah 2:**

- Bangun sertifikat self-signed setelah secret siap.
- Pastikan kanal HTTPS langsung tersedia untuk demo lokal tanpa provisioning eksternal.

**Sumber:** [docker-entrypoint.sh:77](/home/fxrdhan/au7h/docker-entrypoint.sh:77)

**Alur kode:** skrip hanya membuat sertifikat ketika file cert atau key belum tersedia, lalu `openssl req` dipakai untuk membangkitkan pasangan TLS self-signed yang langsung cocok untuk `localhost`.

```sh
if [ ! -f "${TLS_CERT_PATH}" ] || [ ! -f "${TLS_KEY_PATH}" ]; then
  openssl req \
    -x509 \
    -nodes \
    -newkey rsa:2048 \
    -sha256 \
    -days 365 \
    -subj "/CN=localhost" \
    -addext "subjectAltName=DNS:localhost,IP:127.0.0.1" \
    -addext "basicConstraints=critical,CA:FALSE" \
    -addext "keyUsage=critical,digitalSignature,keyEncipherment" \
    -addext "extendedKeyUsage=serverAuth" \
    -keyout "${TLS_KEY_PATH}" \
    -out "${TLS_CERT_PATH}" >/dev/null 2>&1
fi
```

**Langkah 3:**

- Nyalakan MySQL sebagai proses background internal container.
- Simpan PID MySQL agar shutdown dapat dikendalikan dengan rapi saat container berhenti.

**Sumber:** [docker-entrypoint.sh:134](/home/fxrdhan/au7h/docker-entrypoint.sh:134)

**Alur kode:** setelah data dir siap, `mysqld` dijalankan sebagai proses background internal container dengan socket, PID file, port, dan bind address yang semuanya diambil dari environment.

```sh
mysqld \
  --user=mysql \
  --datadir="${MYSQL_DATA_DIR}" \
  --socket="${MYSQL_SOCKET}" \
  --pid-file="${MYSQL_PID_FILE}" \
  --port="${MYSQL_PORT}" \
  --bind-address="${MYSQL_BIND_ADDRESS}" \
  --console &
MYSQLD_PID=$!
```

**Langkah 4:**

- Periksa apakah data directory masih kosong.
- Bootstrap akun root, database aplikasi, dan akun aplikasi dalam urutan yang konsisten.
- Selesaikan bootstrap sebelum Apache melayani request.

**Sumber:** [docker-entrypoint.sh:154](/home/fxrdhan/au7h/docker-entrypoint.sh:154)

**Alur kode:** cabang bootstrap ini hanya berjalan untuk database yang masih kosong; urutannya adalah mengunci password root, membuat database aplikasi, membuat akun aplikasi, memberi grant, lalu menutup dengan `FLUSH PRIVILEGES`.

```sh
if [ "${MYSQL_BOOTSTRAP_REQUIRED}" -eq 1 ]; then
  mysql --protocol=socket --socket="${MYSQL_SOCKET}" -uroot <<EOF
ALTER USER 'root'@'localhost' IDENTIFIED BY '${MYSQL_ROOT_PASSWORD}';
CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE}\`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS '${MYSQL_APP_USER}'@'localhost' IDENTIFIED BY '${MYSQL_APP_PASSWORD}';
CREATE USER IF NOT EXISTS '${MYSQL_APP_USER}'@'127.0.0.1' IDENTIFIED BY '${MYSQL_APP_PASSWORD}';
GRANT ALL PRIVILEGES ON \`${MYSQL_DATABASE}\`.* TO '${MYSQL_APP_USER}'@'localhost';
GRANT ALL PRIVILEGES ON \`${MYSQL_DATABASE}\`.* TO '${MYSQL_APP_USER}'@'127.0.0.1';
${REMOTE_BOOTSTRAP_SQL}
FLUSH PRIVILEGES;
EOF
```

#### Keputusan penting

1. secret runtime tidak ditanam di image, tetapi dibuat saat container pertama kali start,
2. sertifikat self-signed cukup untuk demo lokal; sertifikat host bisa di-mount saat perlu,
3. MySQL dibind ke `127.0.0.1` secara default agar tidak terbuka ke luar container.

### Tahap 4 - Menyalakan HTTPS dan redirect HTTP ke HTTPS

#### Tujuan

Memastikan seluruh akses browser diarahkan ke kanal terenkripsi.

#### Analisis alur

Requirement tugas menyebut server harus dilindungi HTTPS. Karena browser mungkin masih membuka `http://`, perlu redirect permanen ke `https://`.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah modul Apache yang menangani rewrite dan TLS.

Referensi terkait: [Apache mod_rewrite](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)

> `mod_rewrite` operates on the full URL path, including the
> path-info section. A rewrite rule can be invoked in
> `httpd.conf` or in `.htaccess`. The path generated
> by a rewrite rule can include a query string, or can lead to internal
> sub-processing, external request redirection, or internal proxy
> throughput.
>
> The `RewriteCond` directive defines a
> rule condition. One or more `RewriteCond`
> can precede a `RewriteRule`
> directive. The following rule is then only used if both
> the current state of the URI matches its pattern, and if
> these conditions are met.
>
> The `RewriteEngine` directive enables or
> disables the runtime rewriting engine.
> Note that rewrite configurations are not
> inherited by virtual hosts. This means that you need to have a
> `RewriteEngine on` directive for each virtual host
> in which you wish to use rewrite rules.
>
> **Translated:**
> `mod_rewrite` bekerja pada path URL penuh, termasuk bagian
> path-info. Sebuah rewrite rule bisa dipanggil di
> `httpd.conf` atau di `.htaccess`. Path yang dihasilkan
> oleh rewrite rule dapat memuat query string, atau mengarah ke
> sub-processing internal, redirect request eksternal, atau proxy internal.
>
> Directive `RewriteCond` mendefinisikan kondisi aturan.
> Satu atau lebih `RewriteCond` dapat mendahului
> sebuah directive `RewriteRule`. Rule berikutnya hanya akan dipakai jika
> status URI saat ini cocok dengan polanya dan kondisi-kondisi itu juga terpenuhi.
>
> Directive `RewriteEngine` mengaktifkan atau menonaktifkan
> mesin rewrite saat runtime.
> Konfigurasi rewrite tidak diwariskan oleh virtual host.
> Artinya, setiap virtual host yang ingin memakai rewrite rule
> harus punya directive `RewriteEngine on` sendiri.

Referensi terkait: [Apache mod_ssl](https://httpd.apache.org/docs/current/mod/mod_ssl.html)

> This module relies on [OpenSSL](https://www.openssl.org/) to provide the cryptography engine.
>
> This directive toggles the usage of the SSL/TLS Protocol Engine.
>
> This directive points to a file with certificate data in PEM format, or the certificate identifier through a configured cryptographic token. If using a PEM file, at minimum, the file must include an end-entity (leaf) certificate.
>
> This directive points to the PEM-encoded private key file for the server, or the key ID through a configured cryptographic token.
>
> This directive can be used to control which versions of the SSL/TLS protocol will be accepted in new connections.
>
> **Translated:**
> Modul ini mengandalkan [OpenSSL](https://www.openssl.org/) untuk menyediakan mesin kriptografi.
>
> Directive ini menyalakan atau mematikan mesin protokol SSL/TLS.
>
> Directive ini menunjuk ke file berisi data sertifikat dalam format PEM, atau identifier sertifikat melalui token kriptografi yang sudah dikonfigurasi. Jika memakai file PEM, minimal file itu harus memuat sertifikat end-entity atau leaf certificate.
>
> Directive ini menunjuk ke file private key server dalam format PEM, atau key ID melalui token kriptografi yang sudah dikonfigurasi.
>
> Directive ini dapat dipakai untuk mengatur versi protokol SSL/TLS mana saja yang diterima pada koneksi baru.

Setelah fungsi rewrite dan modul TLS-nya terbaca jelas, aturan redirect dan virtual host HTTPS baru diimplementasikan.

#### Implementasi

**Langkah 1:**

- Sediakan virtual host HTTP yang tugasnya hanya meredirect.
- Pisahkan virtual host HTTPS sebagai tempat seluruh aplikasi dijalankan.

**Sumber:** [docker/apache-http.conf.template:1-11](/home/fxrdhan/au7h/docker/apache-http.conf.template:1)

**Alur kode:** virtual host HTTP ini sengaja dibuat tipis, hanya menerima request awal, menulis ulang URL ke skema HTTPS yang benar, lalu mencatat log tanpa melayani aplikasi secara langsung.

```apacheconf
<VirtualHost *:${APP_PORT_HTTP}>
    ServerName localhost
    ServerSignature Off

    RewriteEngine On
    RewriteCond %{HTTP_HOST} ^([^:]+)(?::\d+)?$ [NC]
    RewriteRule ^ https://%1${PUBLIC_HTTPS_SUFFIX}%{REQUEST_URI} [R=301,L,NE]

    ErrorLog /proc/self/fd/2
    CustomLog /proc/self/fd/1 combined
</VirtualHost>
```

**Langkah 2:**

- Aktifkan TLS.
- Tentukan document root aplikasi.
- Pastikan direktori `public/` menjadi satu-satunya area yang boleh diakses langsung oleh browser.

**Sumber:** [docker/apache-ssl.conf.template:1-30](/home/fxrdhan/au7h/docker/apache-ssl.conf.template:1)

**Alur kode:** virtual host HTTPS ini memasang sertifikat, membatasi protokol TLS, menaruh semua security header browser, lalu mengarahkan Apache agar hanya direktori `public/` yang menjadi entry point request web.

```apacheconf
<VirtualHost *:${APP_PORT_HTTPS}>
    ServerName localhost
    DocumentRoot /var/www/html/public
    DirectoryIndex index.php
    ServerSignature Off

    SSLEngine on
    SSLCertificateFile ${TLS_CERT_PATH}
    SSLCertificateKeyFile ${TLS_KEY_PATH}
    SSLProtocol -all +TLSv1.2 +TLSv1.3
```

Blok ini membuka virtual host HTTPS, menetapkan `public/` sebagai document root, mengaktifkan TLS, memakai sertifikat dari entrypoint, dan membatasi protokol ke TLS 1.2/1.3.

```apacheconf
    Header always set Cache-Control "no-store"
    Header always set Content-Security-Policy "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; object-src 'none'; script-src 'self'; style-src 'self'; upgrade-insecure-requests"
    Header always set Permissions-Policy "camera=(), geolocation=(), microphone=()"
    Header always set Referrer-Policy "no-referrer"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains" "expr=%{req:Host} !~ m#^(localhost|127\\.0\\.0\\.1|\\[::1\\])(?::\\d+)?$#"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Permitted-Cross-Domain-Policies "none"
    Header always set X-XSS-Protection "0"
```

Blok ini memasang header keamanan browser. Fokusnya adalah mencegah cache halaman sensitif, membatasi sumber resource, menolak framing, mematikan MIME sniffing, dan mengatur kebijakan referrer.

```apacheconf
    <Directory /var/www/html/public>
        AllowOverride None
        Options -Indexes +FollowSymLinks
        Require all granted
    </Directory>
```

Blok ini memastikan hanya direktori `public/` yang bisa dilayani Apache, mematikan directory listing, dan tetap mengizinkan symlink yang dibutuhkan aplikasi.

```apacheconf
    ErrorLog /proc/self/fd/2
    CustomLog /proc/self/fd/1 combined
</VirtualHost>
```

Blok ini mengarahkan error log dan access log ke stdout/stderr container agar mudah dibaca lewat `docker logs`.

#### Keputusan penting

1. TLS 1.2 dan 1.3 dibiarkan aktif,
2. protokol lama dimatikan,
3. redirect dilakukan di level Apache agar konsisten untuk semua route.

### Tahap 5 - Menambahkan security headers di level web server

#### Tujuan

Memberi perlindungan baseline terhadap XSS, sniffing, clickjacking, dan downgrade risk.

#### Analisis alur

OWASP menekankan bahwa CSP bukan pertahanan utama XSS, tetapi tetap sangat bernilai sebagai defense in depth. Karena itu, encoding output tetap wajib di level PHP, lalu dilengkapi header di Apache.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah dokumentasi identitas server Apache, konfigurasi header Apache, dan deskripsi fungsi setiap response header keamanan yang akan dipasang.

Referensi terkait: [Apache HTTP Server - Server-Wide Configuration](https://httpd.apache.org/docs/current/server-wide.html)

> This document explains some of the directives provided by the `core` server which are used to configure the basic operations of the server.
>
> The `ServerAdmin` and `ServerTokens` directives control what information about the server will be presented in server-generated documents such as error messages. The `ServerTokens` directive sets the value of the Server HTTP response header field.
>
> **Translated:**
> Dokumen ini menjelaskan sebagian directive yang disediakan server `core` dan dipakai untuk mengonfigurasi operasi dasar server.
>
> Directive `ServerAdmin` dan `ServerTokens` mengatur informasi apa tentang server yang akan ditampilkan pada dokumen buatan server seperti error message. Directive `ServerTokens` menetapkan nilai header respons HTTP `Server`.

Rujukan ini dipakai langsung untuk membenarkan `ServerTokens Prod` pada `docker/apache-global.conf`, karena Apache sendiri menjelaskan bahwa directive tersebut mengatur informasi server yang dipresentasikan ke klien melalui dokumen buatan server dan header HTTP `Server`. Pada halaman yang sama, `ServerSignature` juga muncul sebagai directive terkait, sehingga `ServerSignature Off` tetap konsisten sebagai pasangan hardening agar banner server tidak diumbar berlebihan.

Referensi terkait: [Apache mod_headers](https://httpd.apache.org/docs/current/mod/mod_headers.html)

> This module provides directives to control and modify HTTP request and response headers. Headers can be merged, replaced or removed.
>
> This directive can replace, merge or remove HTTP response headers. The header is modified just after the content handler and output filters are run, allowing outgoing headers to be modified.
>
> The optional condition argument determines which internal table of responses headers this directive will operate against: `onsuccess` (default, can be omitted) or `always`. The difference between the two lists is that the headers contained in the latter are added to the response even on error, and persisted across internal redirects (for example, ErrorDocument handlers).
>
> You're adding a header to a locally generated non-success (non-2xx) response, such as a redirect, in which case only the table corresponding to `always` is used in the ultimate response.
>
> **Translated:**
> Modul ini menyediakan directive untuk mengontrol dan memodifikasi header request dan response HTTP. Header dapat digabung, diganti, atau dihapus.
>
> Directive ini dapat mengganti, menggabungkan, atau menghapus header response HTTP. Header dimodifikasi tepat setelah content handler dan output filter dijalankan, sehingga header keluaran masih bisa diubah.
>
> Argumen kondisi opsional menentukan tabel internal header response mana yang akan dipakai directive ini: `onsuccess` sebagai default atau `always`. Perbedaannya, header pada tabel kedua tetap ditambahkan ke response bahkan ketika terjadi error, dan tetap bertahan melewati internal redirect seperti handler `ErrorDocument`.
>
> Jika kita menambahkan header ke response non-sukses yang dibuat lokal, seperti redirect, maka hanya tabel yang sesuai dengan `always` yang dipakai pada response akhirnya.

Referensi terkait: [OWASP - HTTP Security Response Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)

> HTTP Headers are a great booster for web security with easy implementation. Proper HTTP response headers can help prevent security vulnerabilities like Cross-Site Scripting, Clickjacking, Information disclosure and more.
>
> The `X-Content-Type-Options` response HTTP header is used by the server to indicate to the browsers that the MIME types advertised in the Content-Type headers should be followed and not guessed.
>
> This header is used to block browsers' MIME type sniffing, which can transform non-executable MIME types into executable MIME types.
>
> The `Cache-Control` header defines how responses are cached by browsers and intermediate caches.
>
> Use `no-store` for sensitive data to prevent any form of caching.
>
> The HTTP `Strict-Transport-Security` response header (often abbreviated as HSTS) instructs browsers to only access the website using HTTPS, even if a user attempts to connect over HTTP.
>
> Permissions-Policy allows you to control which origins can use which browser features, both in the top-level page and in embedded frames.
>
> Do not set this header or explicitly turn it off.
>
> `X-XSS-Protection: 0`
>
> **Translated:**
> HTTP header adalah penguat keamanan web yang sangat berguna dan mudah diimplementasikan. Header respons HTTP yang tepat dapat membantu mencegah kerentanan seperti Cross-Site Scripting, Clickjacking, kebocoran informasi, dan lainnya.
>
> Header respons HTTP `X-Content-Type-Options` dipakai server untuk memberi tahu browser bahwa MIME type pada header `Content-Type` harus diikuti apa adanya dan tidak ditebak-tebak.
>
> Header ini dipakai untuk memblokir MIME sniffing di browser, yang bisa mengubah MIME type non-eksekusi menjadi MIME type yang bisa dieksekusi.
>
> Header `Cache-Control` mendefinisikan bagaimana respons di-cache oleh browser dan cache perantara.
>
> Gunakan `no-store` untuk data sensitif agar benar-benar tidak disimpan dalam bentuk cache apa pun.
>
> Header respons HTTP `Strict-Transport-Security` atau HSTS menginstruksikan browser agar hanya mengakses situs lewat HTTPS, bahkan ketika pengguna mencoba masuk lewat HTTP.
>
> `Permissions-Policy` memungkinkan kita mengontrol origin mana yang boleh memakai fitur-fitur browser, baik di halaman utama maupun frame tertanam.
>
> Header ini sebaiknya tidak diaktifkan dan secara eksplisit dimatikan.
>
> `X-XSS-Protection: 0`

Referensi terkait: [MDN - Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

> The HTTP **`Content-Security-Policy`** response header allows website administrators to control resources the user agent is allowed to load for a given page.
> With a few exceptions, policies mostly involve specifying server origins and script endpoints.
> This helps guard against [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks.
>
> - `default-src` is a fallback for all other fetch directives.
>
> **Translated:**
> Header response HTTP **`Content-Security-Policy`** memungkinkan administrator situs mengontrol resource apa saja yang boleh dimuat user agent untuk suatu halaman.
> Dengan beberapa pengecualian, kebijakan ini pada umumnya dilakukan dengan menentukan origin server dan endpoint script yang diizinkan.
> Ini membantu melindungi aplikasi dari serangan [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).
>
> - `default-src` menjadi fallback untuk seluruh fetch directive lainnya.

Referensi terkait: [MDN - Permissions-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)

> The HTTP **`Permissions-Policy`** response header provides a mechanism to allow and deny the use of browser features in a document or within any [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe) elements in the document.
>
> `Permissions-Policy: <directive>=<allowlist>`
>
> `()` (empty allowlist)
>
> The feature is disabled in top-level and nested browsing contexts. The equivalent for `<iframe>``allow` attributes is `'none'`.
>
> **Translated:**
> Header response HTTP **`Permissions-Policy`** menyediakan mekanisme untuk mengizinkan atau melarang penggunaan fitur browser di dalam sebuah dokumen atau di dalam elemen [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe) apa pun pada dokumen tersebut.
>
> `Permissions-Policy: <directive>=<allowlist>`
>
> `()` (allowlist kosong)
>
> Fitur tersebut dinonaktifkan pada konteks browsing tingkat atas maupun yang bersarang. Padanan untuk atribut `<iframe>``allow` adalah `'none'`.

Referensi terkait: [MDN - Referrer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)

> The HTTP **`Referrer-Policy`** response header controls how much [referrer information](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) (sent with the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referer) header) should be included with requests.
>
> [`no-referrer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy#no-referrer_2)
>
> The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referer) header will be omitted: sent requests do not include any referrer information.
>
> **Translated:**
> Header response HTTP **`Referrer-Policy`** mengatur seberapa banyak [informasi referrer](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) yang dikirim bersama header [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referer) harus ikut dibawa pada request.
>
> [`no-referrer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy#no-referrer_2)
>
> Header [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referer) akan dihilangkan, sehingga request yang dikirim tidak menyertakan informasi referrer apa pun.

Referensi terkait: [MDN - X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

> The HTTP **`X-Frame-Options`** response header can be used to indicate whether a browser should be allowed to render the document in a [`<frame>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed) or [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object). Sites can use this to avoid [clickjacking](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking) attacks and some [cross-site leaks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XS-Leaks), by ensuring that their content is not embedded into other sites.
>
> [`SAMEORIGIN`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options#sameorigin)
>
> The document can only be embedded if all ancestor frames have the same [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as the page itself.
>
> **Translated:**
> Header response HTTP **`X-Frame-Options`** dapat dipakai untuk menyatakan apakah browser boleh merender dokumen di dalam [`<frame>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/frame), [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe), [`<embed>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/embed), atau [`<object>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/object). Situs dapat memakai header ini untuk menghindari serangan [clickjacking](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/Clickjacking) dan sebagian [cross-site leaks](https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XS-Leaks), dengan memastikan kontennya tidak ditanamkan ke situs lain.
>
> [`SAMEORIGIN`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options#sameorigin)
>
> Dokumen hanya boleh di-embed jika seluruh frame leluhurnya memiliki [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) yang sama dengan halaman itu sendiri.

Referensi terkait: [MDN - X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)

> The HTTP **`X-Content-Type-Options`** response header indicates that the [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) advertised in the [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type) headers should be respected and not changed.
> The header allows you to avoid [MIME type sniffing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) by specifying that the MIME types are deliberately configured.
>
> The `nosniff` directive has two effects depending on the context:
>
> - **Request blocking**: For requests with a [destination](https://developer.mozilla.org/en-US/docs/Web/API/Request/destination) of `"script"` or `"style"`, the browser blocks the response if the MIME type doesn't match an expected type.
> - **MIME type sniffing disabled**: For other response types, including navigations to a new HTML document, the browser uses the supplied [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type) as-is instead of examining the content to infer the type.
>
> **Translated:**
> Header response HTTP **`X-Content-Type-Options`** menyatakan bahwa [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types) yang diumumkan lewat header [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type) harus dihormati dan tidak boleh diubah.
> Header ini membantu menghindari [MIME type sniffing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types#mime_sniffing) dengan menegaskan bahwa MIME type tersebut memang sengaja dikonfigurasi.
>
> Directive `nosniff` memiliki dua efek tergantung konteks:
>
> - **Pemblokiran request**: Untuk request dengan [destination](https://developer.mozilla.org/en-US/docs/Web/API/Request/destination) berupa `"script"` atau `"style"`, browser memblokir respons jika MIME type-nya tidak cocok dengan tipe yang diharapkan.
> - **MIME type sniffing dinonaktifkan**: Untuk tipe respons lain, termasuk navigasi ke dokumen HTML baru, browser memakai nilai [`Content-Type`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Type) apa adanya tanpa memeriksa isi respons untuk menebak tipenya.

Referensi terkait: [OWASP - Clickjacking](https://owasp.org/www-community/attacks/Clickjacking)

> Clickjacking, also known as a “UI redress attack”, is when an attacker uses multiple transparent or opaque layers to trick a user into clicking on a button or link on another page when they were intending to click on the top level page. Thus, the attacker is “hijacking” clicks meant for their page and routing them to another page, most likely owned by another application, domain, or both.
>
> There are three main ways to prevent clickjacking:
>
> 1. Sending the proper Content Security Policy (CSP) frame-ancestors directive response headers that instruct the browser to not allow framing from other domains. The older `X-Frame-Options` HTTP headers is used for graceful degradation and older browser compatibility.
>
> **Translated:**
> Clickjacking, yang juga dikenal sebagai “UI redress attack”, adalah kondisi ketika penyerang memakai beberapa lapisan transparan atau buram untuk menipu pengguna agar mengklik tombol atau tautan di halaman lain, padahal pengguna bermaksud mengklik halaman tingkat atas yang terlihat. Dengan begitu, penyerang “membajak” klik yang seharusnya ditujukan ke halamannya lalu mengarahkannya ke halaman lain, yang kemungkinan dimiliki aplikasi, domain, atau keduanya.
>
> Ada tiga cara utama untuk mencegah clickjacking:
>
> 1. Mengirim header respons Content Security Policy (CSP) `frame-ancestors` yang tepat untuk menginstruksikan browser agar tidak mengizinkan framing dari domain lain. Header HTTP `X-Frame-Options` yang lebih lama dipakai untuk graceful degradation dan kompatibilitas browser yang lebih lama.

Referensi terkait: [OWASP - Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)

> This article brings forth a way to integrate the **defense in depth** concept to the client-side of web applications. By injecting the Content-Security-Policy (CSP) headers from the server, the browser is aware and capable of protecting the user from dynamic calls that will load content into the page currently being visited.
>
> The increase in XSS (Cross-Site Scripting), clickjacking, and cross-site leak vulnerabilities demands a more **defense in depth** security approach.
>
> CSP defends against XSS attacks in the following ways:
>
> #### 1\. Restricting Inline Scripts
>
> **Translated:**
> Artikel ini menawarkan cara untuk mengintegrasikan konsep **defense in depth** ke sisi klien aplikasi web. Dengan menyisipkan header Content-Security-Policy (CSP) dari server, browser menjadi sadar dan mampu melindungi pengguna dari pemanggilan dinamis yang memuat konten ke halaman yang sedang dikunjungi.
>
> Peningkatan kerentanan XSS (Cross-Site Scripting), clickjacking, dan cross-site leak menuntut pendekatan keamanan **defense in depth** yang lebih kuat.
>
> CSP melindungi dari serangan XSS dengan cara berikut:
>
> #### 1\. Membatasi inline script

Referensi terkait: [MDN - Strict-Transport-Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

> The HTTP **`Strict-Transport-Security`** response header (often abbreviated as HSTS) informs browsers that the host should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be upgraded to HTTPS.
>
> [`max-age=<expire-time>`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security#max-ageexpire-time)
>
> The time, in seconds, that the browser should remember that a host is only to be accessed using HTTPS.
>
> [`includeSubDomains`Optional](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security#includesubdomains)
>
> If this directive is specified, the HSTS policy applies to all subdomains of the host's domain as well.
>
> **Translated:**
> Header response HTTP **`Strict-Transport-Security`** atau HSTS memberi tahu browser bahwa host hanya boleh diakses menggunakan HTTPS, dan setiap percobaan berikutnya untuk mengaksesnya lewat HTTP harus otomatis di-upgrade ke HTTPS.
>
> [`max-age=<expire-time>`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security#max-ageexpire-time)
>
> Ini adalah lama waktu dalam detik yang harus diingat browser bahwa suatu host hanya boleh diakses menggunakan HTTPS.
>
> [`includeSubDomains`Optional](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security#includesubdomains)
>
> Jika directive ini ditentukan, kebijakan HSTS berlaku juga untuk seluruh subdomain dari domain host tersebut.

Setelah fungsi masing-masing header dibaca, kombinasi header yang benar-benar relevan dengan tugas baru dipasang di virtual host HTTPS.

#### Implementasi

**Langkah 1:**

- Rapikan fingerprint server di konfigurasi global Apache.
- Tambahkan security headers pada virtual host HTTPS sebagai lapisan pertahanan browser.

**Sumber:** [docker/apache-global.conf:1-4](/home/fxrdhan/au7h/docker/apache-global.conf:1)

**Alur kode:** konfigurasi global ini merapikan fingerprint server di level Apache paling awal dengan menetapkan nama host lokal, menurunkan detail banner, mematikan signature, dan menonaktifkan TRACE.

```apacheconf
ServerName localhost
ServerTokens Prod
ServerSignature Off
TraceEnable Off
```

**Langkah 2:**

- Pasang header yang relevan dengan requirement tugas.
- Tambahkan CSP untuk defense in depth XSS.
- Tambahkan `nosniff`, `SAMEORIGIN`, `Referrer-Policy`, dan HSTS conditional.

**Sumber:** [docker/apache-ssl.conf.template:12-20](/home/fxrdhan/au7h/docker/apache-ssl.conf.template:12)

**Alur kode:** bagian ini adalah lapisan header keamanan browser; setiap `Header always set` menambah satu kebijakan response yang aktif untuk semua request HTTPS yang lolos ke virtual host aplikasi.

```apacheconf
    Header always set Cache-Control "no-store"
    Header always set Content-Security-Policy "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; object-src 'none'; script-src 'self'; style-src 'self'; upgrade-insecure-requests"
    Header always set Permissions-Policy "camera=(), geolocation=(), microphone=()"
    Header always set Referrer-Policy "no-referrer"
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains" "expr=%{req:Host} !~ m#^(localhost|127\\.0\\.0\\.1|\\[::1\\])(?::\\d+)?$#"
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Permitted-Cross-Domain-Policies "none"
    Header always set X-XSS-Protection "0"
```

#### Hasil tahap

Web server sudah memiliki pagar keamanan HTTP-level sebelum aplikasi PHP dijalankan.

#### Catatan transparansi

Untuk demo murni di `localhost`, HSTS bisa dibuat conditional atau dilewati agar perilaku browser saat memakai self-signed cert lebih mudah dikendalikan. Untuk host non-lokal, HSTS sebaiknya aktif.

### Tahap 6 - Mengatur hardening PHP runtime

#### Tujuan

Membatasi permukaan serangan pada interpreter.

#### Analisis alur

Inilah bagian yang paling dekat dengan requirement “buffer overflow” pada level tugas. Logika bisnis memang ada di PHP userland, tetapi pembatasan ukuran input dan menonaktifkan fitur yang tidak dipakai tetap perlu agar request berbahaya tidak melebar ke komponen yang tidak relevan.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah directive `php.ini` yang mengatur disclosure, batas input, upload, dan cookie/session hardening yang memang dipakai oleh runtime aplikasi.

Referensi terkait: [PHP Manual - Runtime Configuration](https://www.php.net/manual/en/ini.core.php)

> `expose_php`
>
> Exposes to the world that PHP is installed on the server, which includes the PHP version within the HTTP header (e.g., X-Powered-By: PHP/5.3.7).
>
> `memory_limit`
>
> This sets the maximum amount of memory in bytes that a script is allowed to allocate. This helps prevent poorly written scripts for eating up all available memory on a server.
>
> `post_max_size`
>
> Sets max size of post data allowed. This setting also affects file upload. To upload large files, this value must be larger than `upload_max_filesize`.
>
> `default_charset`
>
> "UTF-8" is the default value and its value is used as the default character encoding for `htmlentities()`, `html_entity_decode()` and `htmlspecialchars()` if the `encoding` parameter is omitted.
>
> `file_uploads`
>
> Whether or not to allow HTTP file uploads.
>
> `upload_max_filesize`
>
> The maximum size of an uploaded file.
>
> **Translated:**
> `expose_php` berarti server akan memberitahu dunia bahwa PHP terpasang, termasuk versinya di header HTTP seperti `X-Powered-By`.
>
> `memory_limit` menetapkan batas maksimum memori yang boleh dialokasikan sebuah script, sehingga membantu mencegah script yang buruk menghabiskan seluruh memori server.
>
> `post_max_size` menetapkan ukuran maksimum data POST yang diizinkan. Pengaturan ini juga memengaruhi upload file, dan untuk upload besar nilainya harus lebih besar daripada `upload_max_filesize`.
>
> `default_charset` bernilai default `"UTF-8"` dan dipakai sebagai encoding karakter bawaan untuk fungsi seperti `htmlentities()`, `html_entity_decode()`, dan `htmlspecialchars()` ketika parameter `encoding` tidak diberikan.
>
> `file_uploads` menentukan apakah upload file HTTP diizinkan atau tidak.
>
> `upload_max_filesize` menetapkan ukuran maksimum sebuah file yang diunggah.

Referensi terkait: [PHP Manual - Session Configuration](https://www.php.net/manual/en/session.configuration.php)

> `session.use_strict_mode` specifies whether the module will use strict session id mode. If this mode is enabled, the module does not accept uninitialized session IDs. If an uninitialized session ID is sent from the browser, a new session ID is sent to the browser. Applications are protected from session fixation via session adoption with strict mode.
>
> Enabling `session.use_strict_mode` is mandatory for general session security. All sites are advised to enable this.
>
> `session.use_only_cookies` specifies whether the module will **only** use cookies to store the session id on the client side. Enabling this setting prevents attacks that involve passing session IDs in URLs.
>
> `session.cookie_secure` specifies whether cookies should only be sent over secure connections. With this option set to `on`, sessions only work with HTTPS connections.
>
> `session.cookie_httponly`
>
> Marks the cookie as accessible only through the HTTP protocol. This means that the cookie won't be accessible by scripting languages, such as JavaScript. This setting can effectively help to reduce identity theft through XSS attacks.
>
> `session.cookie_samesite`
>
> Allows servers to assert that a cookie ought not to be sent along with cross-site requests. This assertion allows user agents to mitigate the risk of cross-origin information leakage, and provides some protection against cross-site request forgery attacks.
>
> **Translated:**
> `session.use_strict_mode` menentukan apakah modul session memakai mode session ID ketat. Jika diaktifkan, modul tidak menerima session ID yang belum pernah diinisialisasi. Jika browser mengirim session ID yang belum diinisialisasi, browser akan diberi session ID baru. Dengan strict mode, aplikasi dilindungi dari session fixation melalui adopsi session.
>
> Mengaktifkan `session.use_strict_mode` bersifat wajib untuk keamanan session secara umum, dan semua situs disarankan mengaktifkannya.
>
> `session.use_only_cookies` menentukan apakah modul hanya memakai cookie untuk menyimpan session ID di sisi client. Mengaktifkan pengaturan ini mencegah serangan yang memanfaatkan session ID yang dikirim lewat URL.
>
> `session.cookie_secure` menentukan apakah cookie hanya boleh dikirim lewat koneksi aman. Jika opsi ini `on`, session hanya akan bekerja lewat koneksi HTTPS.
>
> `session.cookie_httponly` menandai cookie agar hanya bisa diakses melalui protokol HTTP. Artinya cookie tidak bisa diakses oleh bahasa scripting seperti JavaScript, dan ini membantu mengurangi pencurian identitas lewat serangan XSS.
>
> `session.cookie_samesite` memungkinkan server menyatakan bahwa cookie tidak seharusnya dikirim bersama request lintas situs. Ini membantu user agent mengurangi risiko kebocoran informasi lintas origin dan memberi perlindungan terhadap serangan CSRF.

Setelah arti directive disclosure, batas input, upload, dan session cookie hardening jelas, barulah file `php.ini` dipersempit untuk kebutuhan form auth yang sederhana.

#### Implementasi

**Langkah 1:**

- Kecilkan permukaan serangan interpreter.
- Matikan fitur yang tidak dipakai.
- Batasi ukuran request.
- Keraskan cookie session untuk konteks HTTPS.

**Sumber:** [docker/php.ini:1-18](/home/fxrdhan/au7h/docker/php.ini:1)

**Alur kode:** runtime PHP diketatkan dari awal dengan mematikan fitur bocor informasi, membatasi ukuran input, mengunci perilaku session cookie, dan menutup jalur upload yang tidak dibutuhkan aplikasi.

```ini
default_charset = "UTF-8"
display_errors = Off
display_startup_errors = Off
expose_php = Off
file_uploads = Off
log_errors = On
max_execution_time = 30
max_input_time = 15
max_input_vars = 20
memory_limit = 128M
post_max_size = 8K
session.cookie_httponly = 1
session.cookie_samesite = "Strict"
session.cookie_secure = 1
session.gc_maxlifetime = 1800
session.use_only_cookies = 1
session.use_strict_mode = 1
upload_max_filesize = 1K
```

#### Keputusan penting

1. `file_uploads = Off` karena tugas auth tidak butuh upload file,
2. `post_max_size` kecil karena form hanya membawa username, password, confirm password, dan CSRF token,
3. `max_input_vars` dipersempit karena endpoint sangat sederhana.

### Tahap 7 - Menulis konfigurasi aplikasi dan bootstrap

#### Tujuan

Menyediakan satu titik pusat pembacaan konfigurasi, session, header dasar, dan inisialisasi database.

#### Analisis alur

Bootstrap terpusat membuat setiap endpoint memakai aturan keamanan yang sama. Jika bootstrap tersebar, route yang lupa diproteksi akan mudah muncul.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah dokumentasi session PHP yang mengatur nama session, parameter cookie, dan urutan start session.

Referensi terkait: [PHP Manual - session_name()](https://www.php.net/manual/en/function.session-name.php)

> `session_name()` returns the name of the current session. If `name` is given, `session_name()` will update the session name and return the old session name.
>
> The session name is reset to the default value stored in `session.name` at request startup time. Thus, you need to call `session_name()` for every request (and before `session_start()` is called).
>
> The session name references the name of the session, which is used in cookies and URLs (e.g. `PHPSESSID`).
>
> **Translated:**
> `session_name()` mengembalikan nama session saat ini. Jika `name` diberikan, `session_name()` akan memperbarui nama session dan mengembalikan nama sebelumnya.
>
> Nama session di-reset ke nilai bawaan yang tersimpan di `session.name` setiap kali request dimulai. Karena itu, Anda perlu memanggil `session_name()` pada setiap request, dan sebelum `session_start()` dipanggil.
>
> Nama session merujuk pada nama session yang dipakai di cookie dan URL, misalnya `PHPSESSID`.

Referensi terkait: [PHP Manual - session_set_cookie_params()](https://www.php.net/manual/en/function.session-set-cookie-params.php)

> Set cookie parameters defined in the php.ini file. The effect of this function only lasts for the duration of the script. Thus, you need to call `session_set_cookie_params()` for every request and before `session_start()` is called.
>
> When using the second signature, an associative array which may have any of the keys `lifetime`, `path`, `domain`, `secure`, `httponly` and `samesite`.
>
> The value of the `samesite` element should be either `Lax` or `Strict`.
>
> **Translated:**
> Menetapkan parameter cookie yang didefinisikan di file php.ini. Efek fungsi ini hanya berlaku selama durasi script berjalan. Karena itu, Anda perlu memanggil `session_set_cookie_params()` pada setiap request dan sebelum `session_start()` dipanggil.
>
> Saat memakai signature kedua, kita dapat mengirim associative array yang boleh berisi key `lifetime`, `path`, `domain`, `secure`, `httponly`, dan `samesite`.
>
> Nilai elemen `samesite` harus berupa `Lax` atau `Strict`.

Referensi terkait: [PHP Manual - session_start()](https://www.php.net/manual/en/function.session-start.php)

> `session_start()` creates a session or resumes the current one based on a session identifier passed via a GET or POST request, or passed via a cookie.
>
> To use a named session, call `session_name()` before calling `session_start()`.
>
> When `session_start()` is called or when a session auto starts, PHP will call the open and read session save handlers.
>
> **Translated:**
> `session_start()` membuat session baru atau melanjutkan session yang sedang ada berdasarkan session identifier yang dikirim lewat request GET, POST, atau cookie.
>
> Untuk memakai named session, panggil `session_name()` sebelum memanggil `session_start()`.
>
> Ketika `session_start()` dipanggil atau ketika session dimulai otomatis, PHP akan memanggil handler open dan read milik session save handler.

Setelah urutan nama session -> cookie params -> start session jelas, bootstrap aplikasi baru dipusatkan ke satu jalur.

#### Implementasi

**Langkah 1:**

- Bangun file bootstrap yang selalu dimuat oleh endpoint publik.
- Pastikan semua helper, konfigurasi, dan koneksi database aktif dari jalur yang sama.

**Sumber:** [config/bootstrap.php:1-14](/home/fxrdhan/au7h/config/bootstrap.php:1)

**Alur kode:** file bootstrap ini menjadi pintu masuk bersama, jadi ia memuat seluruh helper inti lebih dulu lalu mengeksekusi `ensure_app_booted()` agar session, header, dan database selalu siap sebelum endpoint berjalan.

```php
<?php

declare(strict_types=1);

const APP_ROOT = __DIR__ . '/..';

require_once APP_ROOT . '/src/Support/Config.php';
require_once APP_ROOT . '/src/Infrastructure/Database.php';
require_once APP_ROOT . '/src/Support/Http.php';
require_once APP_ROOT . '/src/Security/Auth.php';
require_once APP_ROOT . '/src/Security/RateLimiter.php';
require_once APP_ROOT . '/src/Presentation/Views.php';

ensure_app_booted();
```

**Langkah 2:**

- Pusatkan pembacaan environment dan policy aplikasi dalam satu fungsi konfigurasi.
- Pastikan perubahan nilai port, secret, dan rate limit tidak tersebar.

**Sumber:** [src/Support/Config.php:12-52](/home/fxrdhan/au7h/src/Support/Config.php:12)

**Alur kode:** fungsi ini membaca environment, membuat direktori data bila belum ada, lalu menyusun satu array konfigurasi yang dipakai ulang oleh layer database, session, crypto, dan rate limit.

```php
function app_config(): array
{
    static $config = null;

    if ($config !== null) {
        return $config;
    }

    $dataDir = env_string('APP_DATA_DIR', APP_ROOT . '/data');
    if (!is_dir($dataDir)) {
        mkdir($dataDir, 0700, true);
    }
```

Blok ini membuat cache konfigurasi lewat variabel statis, lalu memastikan direktori data aplikasi tersedia sebelum konfigurasi dipakai bagian lain.

```php
    $config = [
        'db_host' => env_string('DB_HOST', '127.0.0.1'),
        'db_port' => env_string('DB_PORT', '3306'),
        'db_name' => env_string('DB_NAME', 'au7h_auth'),
        'db_user' => env_string('DB_USER', 'au7h_app'),
        'db_password' => env_string('DB_PASSWORD', 'change-me'),
        'pepper_secret' => env_string('PEPPER_SECRET', 'replace-me-demo-pepper'),
        'encryption_key' => hash('sha256', env_string('ENCRYPTION_KEY', 'replace-me-demo-key'), true),
```

Blok ini membaca konfigurasi database dan secret keamanan dari environment. Nilai default hanya menjadi fallback demo, sedangkan runtime container mengisi nilai sebenarnya dari secret yang dibuat entrypoint.

```php
        'auth_rate_limits' => [
            'default' => [
                'max_attempts' => 5,
                'window_seconds' => 900,
            ],
            'login' => [
                'max_attempts' => 5,
                'window_seconds' => 900,
            ],
            'register' => [
                'max_attempts' => 3,
                'window_seconds' => 900,
            ],
        ],
        'session_name' => 'au7h_sid',
        'session_ttl' => 1800,
    ];
```

Blok ini menetapkan policy rate limit dan session. Register dibuat lebih ketat daripada login, sedangkan session diberi nama khusus dan TTL 30 menit.

```php
    return $config;
}
```

Blok penutup ini mengembalikan konfigurasi final agar bisa dipakai ulang oleh layer database, session, crypto, dan rate limiter.

**Langkah 3:**

- Jalankan session aman.
- Kirim security header dasar.
- Inisialisasi schema sebelum request diproses lebih jauh.

**Sumber:** [src/Support/Http.php:36](/home/fxrdhan/au7h/src/Support/Http.php:36)

**Alur kode:** `ensure_app_booted()` memakai guard statis supaya hanya berjalan sekali, lalu menjalankan urutan bootstrap tetap: session aman dulu, header dasar kedua, inisialisasi database terakhir.

```php
function ensure_app_booted(): void
{
    static $booted = false;

    if ($booted) {
        return;
    }

    start_secure_session();
    send_security_headers();
    initialize_database();
    $booted = true;
}
```

**Langkah 4:**

- Bentuk session cookie yang cocok untuk aplikasi login berbasis browser.
- Aktifkan atribut `secure`, `httponly`, dan `SameSite=Strict`.

**Sumber:** [src/Support/Http.php:10](/home/fxrdhan/au7h/src/Support/Http.php:10)

**Alur kode:** fungsi ini berhenti jika session sudah aktif, kalau belum ia mengambil policy dari konfigurasi, menerapkan nama dan atribut cookie yang aman, lalu baru memanggil `session_start()`.

```php
function start_secure_session(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    $config = app_config();

    session_name($config['session_name']);
    session_set_cookie_params([
        'lifetime' => $config['session_ttl'],
        'path' => '/',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);

    session_start();
}
```

**Langkah 5:**

- Kirim header dasar anti-cache dari sisi aplikasi.
- Pastikan halaman sensitif tidak mudah tersisa di cache browser bersama session lama.

**Sumber:** [src/Support/Http.php:30](/home/fxrdhan/au7h/src/Support/Http.php:30)

**Alur kode:** header respons dasar dikirim sangat awal dengan dua langkah sederhana, yaitu menghapus fingerprint `X-Powered-By` dan memaksa halaman sensitif tidak disimpan di cache.

```php
function send_security_headers(): void
{
    header_remove('X-Powered-By');
    header('Cache-Control: no-store');
}
```

**Langkah 6:**

- Paksa seluruh aksi perubahan state memakai `POST`.
- Pastikan form register, login, dan logout tidak pernah dipicu lewat query string biasa.

**Sumber:** [src/Support/Http.php:109](/home/fxrdhan/au7h/src/Support/Http.php:109)

**Alur kode:** helper ini memeriksa metode request terlebih dulu; jika bukan `POST`, alur langsung diputus dengan response 405 sehingga endpoint sensitif tidak pernah jalan lewat metode yang salah.

```php
function require_post_method(): void
{
    if (!request_method_is('POST')) {
        render_page_response(405, render_error_page('Metode tidak diizinkan', 'Gunakan request POST untuk aksi ini.'));
    }
}
```

### Tahap 8 - Mendesain schema database yang memenuhi privasi dan rate limit

#### Tujuan

Menyimpan akun dengan aman dan menambah tabel rate limit.

#### Analisis alur

Schema harus mendukung tiga hal sekaligus:

1. login berdasarkan username,
2. penyimpanan aman jika database bocor,
3. pelacakan percobaan login/register berulang.

#### Jejak referensi sebelum implementasi

Tahap ini tidak menambah URL baru. Skema tabel langsung diturunkan dari hasil riset sebelumnya: username harus bisa dicari tanpa plaintext, password harus disimpan dalam bentuk hash, dan rate limit harus punya penyimpanan terpisah agar penguncian percobaan bisa konsisten antar request.

#### Implementasi

**Langkah 1:**

- Bentuk tabel `users` lebih dulu.
- Simpan lookup username, ciphertext username, dan hash password sebagai dasar flow autentikasi.

**Sumber:** [src/Infrastructure/Database.php:35-43](/home/fxrdhan/au7h/src/Infrastructure/Database.php:35)

**Alur kode:** tabel `users` dibentuk dengan kolom yang memisahkan lookup username, ciphertext username, dan hash password, sehingga pencarian akun dan perlindungan data tetap bisa berjalan bersamaan.

```php
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS users (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            username_lookup CHAR(64) NOT NULL UNIQUE,
            username_encrypted TEXT NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            created_at DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );
```

**Langkah 2:**

- Tambahkan tabel terpisah untuk percobaan autentikasi.
- Pastikan throttling tidak tercampur dengan data akun utama.

**Sumber:** [src/Infrastructure/Database.php:45-51](/home/fxrdhan/au7h/src/Infrastructure/Database.php:45)

**Alur kode:** tabel kedua ini khusus menyimpan state throttling, jadi percobaan autentikasi bisa dihitung terpisah dari data akun utama dan tetap konsisten antar request.

```php
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS auth_rate_limits (
            rate_key CHAR(64) NOT NULL PRIMARY KEY,
            attempts INTEGER NOT NULL,
            window_start INTEGER NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );
```

#### Keputusan penting

1. `username_lookup` dibuat fixed length karena hasil SHA-256 hex,
2. `password_hash` diberi `VARCHAR(255)` agar aman untuk format hash modern,
3. tabel rate limit disimpan di database agar tetap konsisten antar request.

### Tahap 9 - Menulis helper keamanan inti

#### Tujuan

Menyatukan validasi input, CSRF, hashing password, enkripsi username, escaping output, dan rate limiting.

#### Analisis alur

Bagian ini adalah jantung keamanan aplikasi. Jika helper ini rapi, endpoint publik tinggal merangkai alur tanpa mengulang logika sensitif.

#### Jejak referensi sebelum implementasi

Tahap ini adalah titik paling jelas untuk pola: requirement keamanan -> cari referensi -> baca bagian yang relevan -> tempel kutipan -> implementasi helper. Karena tiap helper menutup ancaman yang berbeda, bukti referensi ditempel per subbagian agar alurnya tidak putus.

#### Implementasi

**Langkah 1:**

- Output encoding.

Referensi yang dicari: `OWASP XSS Prevention Cheat Sheet` dan PHP `htmlspecialchars()`.

Referensi terkait: [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

> **This cheatsheet contains techniques to prevent or limit the impact of XSS. Since no single technique will solve XSS, using the right combination of defensive techniques will be necessary to prevent XSS.**
>
> When you need to safely display data exactly as a user types it in, output encoding is recommended. Variables should not be interpreted as code instead of text.
>
> Each variable used in the user interface should be passed through an output encoding function.
>
> **Translated:**
> **Cheat sheet ini berisi teknik untuk mencegah atau membatasi dampak XSS. Karena tidak ada satu teknik pun yang bisa menyelesaikan XSS sendirian, kombinasi teknik pertahanan yang tepat tetap diperlukan untuk mencegah XSS.**
>
> Ketika kita perlu menampilkan data persis seperti yang diketik pengguna secara aman, output encoding direkomendasikan. Variabel tidak boleh ditafsirkan sebagai kode, tetapi sebagai teks.
>
> Setiap variabel yang dipakai di antarmuka pengguna harus dilewatkan ke fungsi output encoding.

Referensi terkait: [PHP Manual - htmlspecialchars()](https://www.php.net/manual/en/function.htmlspecialchars.php)

> Certain characters have special significance in HTML, and should be represented by HTML entities if they are to preserve their meanings. This function returns a string with these conversions made.
>
> The default is `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401`.
>
> | Character | Replacement |
> | --- | --- |
> | `&` (ampersand) | `&amp;` |
> | `"` (double quote) | `&quot;`, unless **`ENT_NOQUOTES`** is set |
> | `'` (single quote) | `&#039;` (for **`ENT_HTML401`**) or `&apos;` (for<br> **`ENT_XML1`**, **`ENT_XHTML`** or<br> **`ENT_HTML5`**), but only when<br> **`ENT_QUOTES`** is set |
> | `<` (less than) | `&lt;` |
> | `>` (greater than) | `&gt;` |
>
> **Translated:**
> Karakter tertentu punya makna khusus di HTML, sehingga harus direpresentasikan sebagai entitas HTML jika maknanya ingin tetap dipertahankan. Fungsi ini mengembalikan string yang sudah diberi konversi tersebut.
>
> Nilai default-nya adalah `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401`.
>
> | Karakter | Pengganti |
> | --- | --- |
> | `&` (ampersand) | `&amp;` |
> | `"` (double quote) | `&quot;`, kecuali jika **`ENT_NOQUOTES`** diaktifkan |
> | `'` (single quote) | `&#039;` (untuk **`ENT_HTML401`**) atau `&apos;` (untuk<br> **`ENT_XML1`**, **`ENT_XHTML`** atau<br> **`ENT_HTML5`**), tetapi hanya ketika<br> **`ENT_QUOTES`** diaktifkan |
> | `<` (less than) | `&lt;` |
> | `>` (greater than) | `&gt;` |

**Implementasi:** siapkan helper escaping sesederhana mungkin agar setiap nilai dinamis yang keluar ke HTML selalu lewat jalur yang sama.

**Sumber:** [src/Presentation/Components.php:5](/home/fxrdhan/au7h/src/Presentation/Components.php:5)

**Alur kode:** semua nilai dinamis yang akan masuk ke HTML dilewatkan ke helper ini agar escaping selalu konsisten dan tidak tersebar manual di banyak view.

```php
function escape_html(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
```

**Langkah 2:**

- CSRF token.

Referensi yang dicari: `OWASP CSRF Prevention Cheat Sheet` dan PHP `random_bytes()`.

Referensi terkait: [OWASP CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

> Since browser requests automatically include all cookies including session cookies, this attack works unless proper authorization is used, which means that the target site's challenge-response mechanism does not verify the identity and authority of the requester.
>
> - **If the framework does not have built-in CSRF protection, add [CSRF tokens](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#token-based-mitigation) to all state-changing requests (requests that cause actions on the site) and validate them on the backend.**
> - **Stateful software should use the [synchronizer token pattern](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#synchronizer-token-pattern)**
> - **Do not use GET requests for state changing operations.**
>
> CSRF tokens should be generated on the server-side and they should be generated only once per user session or each request.
>
> When a client issues a request, the server-side component must verify the existence and validity of the token in that request and compare it to the token found in the user session. The request should be rejected if that token was not found within the request or the value provided does not match the value within the user session.
>
> CSRF tokens should be:
>
> - Unique per user session.
> - Secret
> - Unpredictable (large random value generated by a secure method).
>
> **Translated:**
> Karena request dari browser otomatis menyertakan semua cookie, termasuk cookie session, serangan ini akan berhasil kecuali ada mekanisme otorisasi yang tepat, artinya mekanisme challenge-response milik situs target tidak memverifikasi identitas dan otoritas pihak yang meminta.
>
> - **Jika framework tidak punya perlindungan CSRF bawaan, tambahkan [CSRF token](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#token-based-mitigation) ke semua request yang mengubah state situs dan validasi token itu di backend.**
> - **Perangkat lunak yang stateful sebaiknya memakai [synchronizer token pattern](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#synchronizer-token-pattern)**
> - **Jangan gunakan request GET untuk operasi yang mengubah state.**
>
> CSRF token harus dibuat di server-side dan hanya dibuat sekali per session pengguna atau per request.
>
> Ketika klien mengirim request, komponen server-side harus memverifikasi keberadaan dan validitas token di request tersebut lalu membandingkannya dengan token yang ditemukan di session pengguna. Request harus ditolak jika token itu tidak ditemukan dalam request atau nilainya tidak cocok dengan nilai di session pengguna.
>
> CSRF token harus:
>
> - Unik per session pengguna.
> - Rahasia
> - Tidak dapat diprediksi, yaitu berupa nilai acak besar yang dihasilkan dengan metode yang aman.

Referensi terkait: [PHP Manual - random_bytes()](https://www.php.net/manual/en/function.random-bytes.php)

> `random_bytes()` generates a string containing uniformly selected random bytes with the requested `length`.
>
> As the returned bytes are selected completely randomly, the resulting string is likely to contain unprintable characters or invalid UTF-8 sequences. It may be necessary to encode it before transmission or display.
>
> The randomness generated by this function is suitable for all applications, including the generation of long-term secrets, such as encryption keys.
>
> **Translated:**
> `random_bytes()` menghasilkan string yang berisi byte acak yang dipilih secara merata sesuai `length` yang diminta.
>
> Karena byte yang dikembalikan dipilih sepenuhnya secara acak, string hasilnya kemungkinan berisi karakter yang tidak dapat dicetak atau urutan UTF-8 yang tidak valid. Karena itu, hasilnya mungkin perlu di-encode sebelum dikirim atau ditampilkan.
>
> Keacakan yang dihasilkan fungsi ini cocok untuk semua aplikasi, termasuk pembuatan secret jangka panjang seperti kunci enkripsi.

**Implementasi:** hasilkan token acak yang hidup di session, lalu pakai token yang sama untuk semua form sampai token diganti atau session berakhir.

**Sumber:** [src/Security/Auth.php:5](/home/fxrdhan/au7h/src/Security/Auth.php:5)

**Alur kode:** token CSRF dibuat secara lazy, artinya session hanya diisi token baru saat token belum ada atau formatnya tidak valid, lalu token yang sama dipakai kembali sampai diregenerasi.

```php
function csrf_token(): string
{
    if (!isset($_SESSION['csrf_token']) || !is_string($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }

    return $_SESSION['csrf_token'];
}
```

**Lanjutan:** memverifikasi token dengan `hash_equals()` dan langsung memutus request jika integritas form gagal.

**Sumber:** [src/Security/Auth.php:20](/home/fxrdhan/au7h/src/Security/Auth.php:20)

**Alur kode:** helper verifikasi ini mengambil token tersimpan dari session, membandingkannya dengan input form memakai `hash_equals()`, lalu langsung mengembalikan halaman 403 bila integritas form gagal.

```php
function verify_csrf_or_fail(?string $submittedToken): void
{
    $storedToken = $_SESSION['csrf_token'] ?? '';
    if (!is_string($submittedToken) || !is_string($storedToken) || !hash_equals($storedToken, $submittedToken)) {
        render_page_response(
            403,
            render_error_page('Form ditolak', 'Token integritas form tidak valid atau sudah kedaluwarsa.')
        );
    }
}
```

**Langkah 3:**

- Validasi username dan password.

Referensi yang dicari: `OWASP Input Validation Cheat Sheet`.

Referensi terkait: [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

> Input validation is performed to ensure only properly formed data is entering the workflow in an information system, preventing malformed data from persisting in the database and triggering malfunction of various downstream components.
> Input validation should happen as early as possible in the data flow, preferably as soon as the data is received from the external party.
> Input validation can be implemented using any programming technique that allows effective enforcement of syntactic and semantic correctness, for example:
> Minimum and maximum value range check for numerical parameters and dates, minimum and maximum length check for strings.
> Allowlist validation is appropriate for all input fields provided by the user.
> Input validation **must** be implemented on the server-side before any data is processed by an application’s functions, as any JavaScript-based input validation performed on the client-side can be circumvented by an attacker who disables JavaScript or uses a web proxy.
>
> **Translated:**
> Validasi input dilakukan untuk memastikan hanya data yang formatnya benar yang masuk ke alur kerja sistem informasi, mencegah data yang rusak tersimpan di database dan memicu gangguan pada komponen berikutnya.
> Validasi input sebaiknya dilakukan sedini mungkin dalam alur data, idealnya segera setelah data diterima dari pihak eksternal.
> Validasi input dapat diterapkan dengan teknik apa pun yang menegakkan kebenaran sintaksis dan semantik secara efektif.
> Untuk string, lakukan pemeriksaan panjang minimum dan maksimum.
> Validasi allowlist cocok untuk semua field input dari user.
> Validasi input harus diterapkan di sisi server sebelum data diproses oleh fungsi aplikasi.

**Implementasi:** validasi username dipasang lebih dulu dengan pendekatan allowlist dan batas panjang tetap agar input berbahaya berhenti sebelum menyentuh query atau penyimpanan.

**Sumber:** [src/Security/Auth.php:31](/home/fxrdhan/au7h/src/Security/Auth.php:31)

**Alur kode:** username lebih dulu di-trim, kemudian diperiksa panjang minimumnya, lalu diuji dengan regex allowlist; hanya input yang lolos semua gerbang ini yang diteruskan sebagai nilai valid.

```php
function validate_username(string $username): array
{
    $trimmed = trim($username);

    if (strlen($trimmed) < 3 || strlen($trimmed) > 32) {
        return ['ok' => false, 'message' => 'Username harus 3-32 karakter.'];
    }

    if (!preg_match('/^[A-Za-z0-9_. -]+$/', $trimmed)) {
        return ['ok' => false, 'message' => 'Username hanya boleh huruf, angka, spasi, titik, strip, atau underscore.'];
    }

    return ['ok' => true, 'value' => $trimmed];
}
```

**Lanjutan:** memaksa kompleksitas minimum password dan menetapkan batas atas panjang agar hashing tetap terkontrol.

**Sumber:** [src/Security/Auth.php:46](/home/fxrdhan/au7h/src/Security/Auth.php:46)

**Alur kode:** password diperiksa dari dua sisi, yaitu batas panjang untuk keamanan operasional dan kombinasi karakter untuk kompleksitas dasar, baru kemudian dikembalikan sebagai nilai yang boleh diproses lebih jauh.

```php
function validate_password(string $password): array
{
    if (strlen($password) < 10 || strlen($password) > 72) {
        return ['ok' => false, 'message' => 'Password harus 10-72 karakter.'];
    }

    $checks = preg_match('/[a-z]/', $password)
        && preg_match('/[A-Z]/', $password)
        && preg_match('/[0-9]/', $password);

    if (!$checks) {
        return ['ok' => false, 'message' => 'Password harus memuat huruf kecil, huruf besar, dan angka.'];
    }

    return ['ok' => true, 'value' => $password];
}
```

**Langkah 4:**

- Privasi username.

Referensi yang dicari: OWASP Cryptographic Storage, PHP `hash_hmac()`, `openssl_encrypt()`, dan `openssl_decrypt()`.

Referensi terkait: [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)

> For symmetric encryption **AES** with a key that's at least **128 bits** (ideally **256 bits**) and a secure mode should be used as the preferred algorithm.
>
> Where available, authenticated modes should always be used. These provide guarantees of the integrity and authenticity of the data, as well as confidentiality. The most commonly used authenticated modes are **GCM** and **CCM**, which should be used as a first preference.
>
> **Translated:**
> Untuk enkripsi simetris, **AES** dengan key minimal **128 bit** dan idealnya **256 bit** serta mode yang aman sebaiknya dipakai sebagai algoritma pilihan.
>
> Jika tersedia, mode terautentikasi sebaiknya selalu dipakai. Mode ini memberi jaminan integritas dan autentisitas data, selain kerahasiaan. Mode terautentikasi yang umum dipakai adalah **GCM** dan **CCM**, dan sebaiknya menjadi pilihan pertama.

Referensi terkait: [PHP Manual - hash_hmac()](https://www.php.net/manual/en/function.hash-hmac.php)

> `hash_hmac()` — Generate a keyed hash value using the HMAC method
>
> `algo`
>
> Name of selected hashing algorithm (e.g. `"sha256"`).
>
> `key`
>
> Shared secret key used for generating the HMAC variant of the message digest.
>
> `binary`
>
> When set to `true`, outputs raw binary data. `false` outputs lowercase hexits.
>
> Returns a string containing the calculated message digest as lowercase hexits unless `binary` is set to true in which case the raw binary representation of the message digest is returned.
>
> **Translated:**
> `hash_hmac()` — menghasilkan nilai hash ber-key dengan metode HMAC.
>
> `algo`
>
> Nama algoritma hash yang dipilih, misalnya `"sha256"`.
>
> `key`
>
> Secret key bersama yang dipakai untuk menghasilkan varian HMAC dari message digest.
>
> `binary`
>
> Jika diatur ke `true`, fungsi akan mengeluarkan data biner mentah. Jika `false`, fungsi akan mengeluarkan hexits huruf kecil.
>
> Fungsi ini mengembalikan string yang berisi message digest terhitung dalam bentuk hexits huruf kecil, kecuali jika `binary` diatur ke `true`, maka representasi biner mentah dari message digest yang dikembalikan.

Referensi terkait: [PHP Manual - openssl_encrypt()](https://www.php.net/manual/en/function.openssl-encrypt.php)

> `openssl_encrypt()` — Encrypts data
>
> Encrypts given data with given method and passphrase, returns a raw or base64 encoded string.
>
> `options` is a bitwise disjunction of the flags `OPENSSL_RAW_DATA`, and `OPENSSL_ZERO_PADDING` or `OPENSSL_DONT_ZERO_PAD_KEY`.
>
> `tag`
>
> The authentication tag passed by reference when using AEAD cipher mode (GCM or CCM).
>
> **Translated:**
> `openssl_encrypt()` — mengenkripsi data.
>
> Fungsi ini mengenkripsi data yang diberikan dengan metode dan passphrase tertentu, lalu mengembalikan string raw atau string yang sudah di-encode base64.
>
> `options` adalah gabungan bitwise dari flag `OPENSSL_RAW_DATA`, serta `OPENSSL_ZERO_PADDING` atau `OPENSSL_DONT_ZERO_PAD_KEY`.
>
> `tag`
>
> Ini adalah authentication tag yang dikirim lewat reference ketika memakai mode cipher AEAD seperti GCM atau CCM.

Referensi terkait: [PHP Manual - openssl_decrypt()](https://www.php.net/manual/en/function.openssl-decrypt.php)

> `openssl_decrypt()` — Decrypts data
>
> Takes a raw or base64 encoded string and decrypts it using a given method and passphrase.
>
> `tag`
>
> The authentication tag in AEAD cipher mode. If it is incorrect, the authentication fails and the function returns `false`.
>
> **Translated:**
> `openssl_decrypt()` — mendekripsi data.
>
> Fungsi ini menerima string raw atau string yang sudah di-encode base64 lalu mendekripsinya dengan metode dan passphrase tertentu.
>
> `tag`
>
> Ini adalah authentication tag pada mode cipher AEAD. Jika tag tersebut salah, autentikasi gagal dan fungsi mengembalikan `false`.

**Implementasi:** normalisasi username lebih dulu supaya variasi huruf besar-kecil dan spasi tidak memecah identitas yang sebenarnya sama.

**Sumber:** [src/Security/Auth.php:63](/home/fxrdhan/au7h/src/Security/Auth.php:63)

**Alur kode:** username lebih dulu dinormalisasi menjadi bentuk stabil, lalu bentuk stabil itu di-hash dengan HMAC dan pepper aplikasi sehingga login bisa mencari akun tanpa menyimpan plaintext.

```php
function normalize_username(string $username): string
{
    return strtolower(trim($username));
}

function username_lookup(string $username): string
{
    return hash_hmac('sha256', normalize_username($username), app_config()['pepper_secret']);
}
```

**Lanjutan:** menyiapkan utilitas `base64url` karena ciphertext AES-GCM perlu dibawa dalam format string yang aman disimpan dan dibaca ulang.

**Sumber:** [src/Security/Auth.php:73](/home/fxrdhan/au7h/src/Security/Auth.php:73)

**Alur kode:** dua helper ini mengubah data biner menjadi format base64url yang aman dipakai di payload string, lalu menyediakan jalur baliknya saat payload perlu didekode.

```php
function base64url_encode(string $value): string
{
    return rtrim(strtr(base64_encode($value), '+/', '-_'), '=');
}

function base64url_decode(string $value): string
{
    $padding = strlen($value) % 4;
    if ($padding !== 0) {
        $value .= str_repeat('=', 4 - $padding);
    }

    return (string) base64_decode(strtr($value, '-_', '+/'), true);
}
```

**Lanjutan:** mengenkripsi username untuk penyimpanan dan menyediakan pasangan fungsi dekripsi agar landing page sukses masih bisa menampilkan nama asli.

**Sumber:** [src/Security/Auth.php:88](/home/fxrdhan/au7h/src/Security/Auth.php:88)

**Alur kode:** username dienkripsi dengan AES-256-GCM memakai IV acak, lalu IV, tag, dan ciphertext digabung menjadi satu payload; fungsi kebalikannya memecah payload itu lagi dan mendekripsinya hanya jika strukturnya valid.

```php
function encrypt_username(string $username): string
{
    $key = app_config()['encryption_key'];
    $iv = random_bytes(12);
    $tag = '';
    $cipherText = openssl_encrypt($username, 'aes-256-gcm', $key, OPENSSL_RAW_DATA, $iv, $tag);

    if ($cipherText === false) {
        throw new RuntimeException('Username encryption failed.');
    }

    return implode('.', [
        base64url_encode($iv),
        base64url_encode($tag),
        base64url_encode($cipherText),
    ]);
}
```

Blok ini mengenkripsi username memakai AES-256-GCM. IV dibuat acak, tag autentikasi disimpan bersama ciphertext, lalu semuanya dibungkus menjadi payload string yang aman disimpan di database.

```php
function decrypt_username(string $payload): string
{
    $parts = explode('.', $payload);
    if (count($parts) !== 3) {
        throw new RuntimeException('Encrypted username payload is invalid.');
    }

    [$ivPart, $tagPart, $cipherPart] = $parts;
```

Blok ini memvalidasi struktur payload username terenkripsi. Payload harus berisi tiga bagian: IV, tag autentikasi, dan ciphertext.

```php
    $plainText = openssl_decrypt(
        base64url_decode($cipherPart),
        'aes-256-gcm',
        app_config()['encryption_key'],
        OPENSSL_RAW_DATA,
        base64url_decode($ivPart),
        base64url_decode($tagPart)
    );
```

Blok ini menjalankan dekripsi AES-256-GCM dengan key aplikasi, IV, dan tag autentikasi yang sudah didecode dari payload.

```php
    if ($plainText === false) {
        throw new RuntimeException('Username decryption failed.');
    }

    return $plainText;
}
```

Blok ini memastikan hasil dekripsi valid. Jika tag autentikasi gagal atau data rusak, fungsi tidak mengembalikan nilai palsu ke halaman.

**Langkah 5:**

- Privasi password.

Referensi yang dicari: `OWASP Password Storage Cheat Sheet`, PHP `password_hash()`, PHP `password_verify()`, dan `PHP Password Hashing FAQ`.

Referensi terkait: [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)

> When passwords are stored, they must be protected from an attacker even if the application or database is compromised.
> Use Argon2id with a minimum configuration of 19 MiB of memory, an iteration count of 2, and 1 degree of parallelism.
>
> **Translated:**
> Saat password disimpan, password itu harus tetap terlindungi dari penyerang bahkan jika aplikasi atau database sudah dikompromikan.
> Gunakan Argon2id dengan konfigurasi minimum 19 MiB memori, jumlah iterasi 2, dan derajat paralelisme 1.

Referensi terkait: [PHP Manual - password_hash()](https://www.php.net/manual/en/function.password-hash.php)

> `password_hash()` creates a new password hash using a strong one-way hashing algorithm.
>
> The following algorithms are currently supported:
>
> - `PASSWORD_ARGON2ID` - Use the Argon2id hashing algorithm to create the hash.
>
> Returns the hashed password.
>
> The used algorithm, cost and salt are returned as part of the hash. Therefore, all information that's needed to verify the hash is included in it.
>
> **Translated:**
> `password_hash()` membuat hash password baru dengan algoritma hashing satu arah yang kuat.
>
> Algoritma berikut saat ini didukung:
>
> - `PASSWORD_ARGON2ID` - memakai algoritma hashing Argon2id untuk membuat hash.
>
> Fungsi ini mengembalikan password yang sudah di-hash.
>
> Algoritma, cost, dan salt yang dipakai dikembalikan sebagai bagian dari hash. Karena itu, semua informasi yang dibutuhkan untuk memverifikasi hash sudah tercakup di dalamnya.

Referensi terkait: [PHP Manual - password_verify()](https://www.php.net/manual/en/function.password-verify.php)

> Verifies that the given hash matches the given password.
>
> Note that `password_hash()` returns the algorithm, cost and salt as part of the returned hash. Therefore, all information that's needed to verify the hash is included in it.
>
> This function is safe against timing attacks.
>
> **Translated:**
> Fungsi ini memverifikasi bahwa hash yang diberikan memang cocok dengan password yang diberikan.
>
> Perlu diperhatikan bahwa `password_hash()` mengembalikan algoritma, cost, dan salt sebagai bagian dari hash yang dikembalikan. Karena itu, semua informasi yang dibutuhkan untuk memverifikasi hash sudah tercakup di dalamnya.
>
> Fungsi ini aman terhadap timing attack.

Referensi terkait: [PHP Manual - Password Hashing FAQ](https://www.php.net/manual/en/faq.passwords.php)

> Password hashing is one of the most basic security considerations that must be made when designing any application or service that accepts passwords from users.
>
> By applying a hashing algorithm to the user's passwords before storing them, it becomes implausible for any attacker to determine the original password, while still being able to compare the resulting hash to the original password in the future.
>
> PHP provides a native password hashing API that safely handles both hashing and verifying passwords in a secure manner.
>
> `password_verify()` should always be used instead of re-hashing and comparing the result to a stored hash in order to avoid timing attacks.
>
> **Translated:**
> Password hashing adalah salah satu pertimbangan keamanan paling dasar yang harus dibuat ketika merancang aplikasi atau layanan apa pun yang menerima password dari pengguna.
>
> Dengan menerapkan algoritma hashing ke password pengguna sebelum menyimpannya, menjadi sangat tidak masuk akal bagi penyerang untuk menentukan password asli, sambil tetap memungkinkan sistem membandingkan hash yang dihasilkan dengan password asli di masa depan.
>
> PHP menyediakan native password hashing API yang secara aman menangani proses hashing maupun verifikasi password.
>
> `password_verify()` harus selalu dipakai alih-alih melakukan hash ulang lalu membandingkannya dengan hash tersimpan, agar terhindar dari timing attack.

**Implementasi:** password dipadukan dengan pepper aplikasi lalu di-hash memakai Argon2id, sehingga kebocoran database tidak langsung membuka password asli.

**Sumber:** [src/Security/Auth.php:130](/home/fxrdhan/au7h/src/Security/Auth.php:130)

**Alur kode:** sebelum disimpan, password digabung dulu dengan pepper aplikasi, lalu hasil gabungannya di-hash menggunakan Argon2id sehingga kebocoran hash tidak langsung membuka password asli.

```php
function hash_password_for_storage(string $password): string
{
    $pepperedPassword = $password . '|' . app_config()['pepper_secret'];
    return password_hash($pepperedPassword, PASSWORD_ARGON2ID);
}
```

**Lanjutan:** memverifikasi input login terhadap hash tersimpan tanpa pernah mengubah data hash menjadi plaintext.

**Sumber:** [src/Security/Auth.php:136](/home/fxrdhan/au7h/src/Security/Auth.php:136)

**Alur kode:** saat login, input password dibentuk kembali dengan pepper yang sama, lalu diverifikasi terhadap hash tersimpan tanpa pernah mengubah hash itu menjadi plaintext.

```php
function verify_stored_password(string $password, string $storedHash): bool
{
    return password_verify($password . '|' . app_config()['pepper_secret'], $storedHash);
}
```

#### Keputusan penting

1. `hash_equals()` dipakai untuk membandingkan token agar tidak memakai compare biasa,
2. username tidak dicari lewat ciphertext,
3. password tidak pernah disimpan dalam bentuk yang bisa didekripsi balik.

### Tahap 10 - Menulis seluruh query database dengan prepared statement

#### Tujuan

Menutup celah SQL injection dan memastikan akses data konsisten.

#### Analisis alur

OWASP menempatkan parameterized query sebagai pertahanan utama. Karena itu, seluruh operasi `SELECT`, `INSERT`, `UPDATE`, dan `DELETE` harus lewat prepared statement.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah `OWASP SQL Injection Prevention Cheat Sheet`, PHP `PDO::prepare()`, dan overview PDO.

Referensi terkait: [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)

> Attackers can use SQL injection on an application if it has dynamic database queries that use string concatenation and user-supplied input.
>
> **Translated:**
> Penyerang bisa memanfaatkan SQL injection pada aplikasi jika aplikasi memiliki query database dinamis yang dibangun dengan penggabungan string dan input dari pengguna.

Referensi terkait: [PHP Manual - PDO::prepare()](https://www.php.net/manual/en/pdo.prepare.php)

> `PDO::prepare()` — Prepares a statement for execution and returns a statement object.
>
> Prepares an SQL statement to be executed by the `PDOStatement::execute()` method. The statement template can contain zero or more named (`:name`) or question mark (`?`) parameter markers for which real values will be substituted when the statement is executed.
>
> Use these parameters to bind any user-input, do not include the user-input directly in the query.
>
> Calling `PDO::prepare()` and `PDOStatement::execute()` helps to prevent SQL injection attacks by eliminating the need to manually quote and escape the parameters.
>
> **Translated:**
> `PDO::prepare()` — menyiapkan statement untuk dieksekusi dan mengembalikan objek statement.
>
> Fungsi ini menyiapkan statement SQL untuk dieksekusi oleh metode `PDOStatement::execute()`. Template statement dapat berisi nol atau lebih penanda parameter bernama (`:name`) atau tanda tanya (`?`) yang akan diganti dengan nilai sebenarnya saat statement dijalankan.
>
> Gunakan parameter-parameter ini untuk melakukan binding terhadap input pengguna; jangan memasukkan input pengguna secara langsung ke dalam query.
>
> Pemanggilan `PDO::prepare()` dan `PDOStatement::execute()` membantu mencegah serangan SQL injection karena menghilangkan kebutuhan untuk mengutip dan meng-escape parameter secara manual.

Referensi terkait: [PHP Manual - PDO](https://www.php.net/manual/en/book.pdo.php)

> PDO provides a data-access abstraction layer, which means that, regardless of which database you're using, you use the same functions to issue queries and fetch data.
>
> **Translated:**
> PDO menyediakan lapisan abstraksi akses data, yang berarti terlepas dari database apa yang dipakai, Anda memakai fungsi yang sama untuk menjalankan query dan mengambil data.

#### Implementasi

**Langkah 1:**

- Bentuk koneksi PDO.
- Paksa native prepared statement dan mode SQL ketat sejak awal.

**Sumber:** [src/Infrastructure/Database.php:5-29](/home/fxrdhan/au7h/src/Infrastructure/Database.php:5)

**Alur kode:** koneksi PDO dibuat sekali lalu disimpan statis, sesudah itu koneksi dipaksa memakai prepared statement native, mode error exception, charset utf8mb4, dan SQL mode ketat.

```php
function db_connection(): PDO
{
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $config = app_config();
    $dsn = sprintf(
        'mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4',
        $config['db_host'],
        $config['db_port'],
        $config['db_name']
    );
```

Blok ini membuat koneksi PDO hanya sekali, membaca konfigurasi database, lalu menyusun DSN MySQL dengan charset `utf8mb4`.

```php
    $pdo = new PDO($dsn, $config['db_user'], $config['db_password'], [
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $pdo->exec("SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci");
    $pdo->exec("SET SESSION sql_mode = 'STRICT_ALL_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'");
```

Blok ini membuat koneksi memakai prepared statement native, mengaktifkan error exception, menetapkan fetch associative array, dan mengunci charset serta SQL mode.

```php
    return $pdo;
}
```

Blok penutup ini mengembalikan koneksi yang sudah dikonfigurasi agar semua query berikutnya memakai policy database yang sama.

**Langkah 2:**

- Cari akun saat login lewat `username_lookup`.
- Hindari pencarian lewat string mentah dari form.

**Sumber:** [src/Infrastructure/Database.php:56-65](/home/fxrdhan/au7h/src/Infrastructure/Database.php:56)

**Alur kode:** pencarian akun login berjalan lewat satu prepared statement yang hanya menerima `username_lookup`, lalu hasil fetch dinormalisasi menjadi `null` bila tidak ada row yang cocok.

```php
    $statement = db_connection()->prepare(
        'SELECT id, username_lookup, username_encrypted, password_hash, created_at
         FROM users
         WHERE username_lookup = :username_lookup'
    );

    $statement->execute(['username_lookup' => $usernameLookup]);
    $user = $statement->fetch();

    return $user === false ? null : $user;
```

**Langkah 3:**

- Pisahkan pencarian berdasarkan `user_id`.
- Gunakan jalur ini untuk kebutuhan session dan guard halaman setelah login berhasil.

**Sumber:** [src/Infrastructure/Database.php:68-80](/home/fxrdhan/au7h/src/Infrastructure/Database.php:68)

**Alur kode:** helper ini mengambil user berdasarkan `id` dari session, jadi guard halaman privat bisa memvalidasi identitas aktif tanpa perlu membaca credential dari form lagi.

```php
function find_user_by_id(int $userId): ?array
{
    $statement = db_connection()->prepare(
        'SELECT id, username_lookup, username_encrypted, password_hash, created_at
         FROM users
         WHERE id = :id'
    );

    $statement->execute(['id' => $userId]);
    $user = $statement->fetch();

    return $user === false ? null : $user;
}
```

**Langkah 4:**

- Simpan akun baru dengan parameter terikat penuh.
- Hindari concat SQL di jalur registrasi.

**Sumber:** [src/Infrastructure/Database.php:82-104](/home/fxrdhan/au7h/src/Infrastructure/Database.php:82)

**Alur kode:** akun baru ditulis ke database lewat `INSERT` berparameter penuh, sehingga lookup username, ciphertext username, hash password, dan timestamp masuk sebagai satu transaksi penyimpanan yang eksplisit.

```php
function create_user(string $usernameLookup, string $usernameEncrypted, string $passwordHash): void
{
    $statement = db_connection()->prepare(
        'INSERT INTO users (
            username_lookup,
            username_encrypted,
            password_hash,
            created_at
         ) VALUES (
            :username_lookup,
            :username_encrypted,
            :password_hash,
            :created_at
         )'
    );
```

Blok ini menyiapkan query `INSERT` dengan placeholder untuk setiap nilai akun. Tidak ada nilai user yang ditempel langsung ke string SQL.

```php
    $statement->execute([
        'username_lookup' => $usernameLookup,
        'username_encrypted' => $usernameEncrypted,
        'password_hash' => $passwordHash,
        'created_at' => gmdate('Y-m-d H:i:s.u'),
    ]);
}
```

Blok ini mengikat semua nilai lewat parameter `execute()`, sehingga lookup username, ciphertext username, hash password, dan timestamp masuk sebagai data, bukan bagian dari query.

#### Catatan transparansi

Input validation tetap ada, tetapi **bukan pengganti** prepared statement.

### Tahap 11 - Membuat halaman awal berisi form register dan login

#### Tujuan

Memenuhi requirement browser-facing: user harus melihat form register/login dari web server.

#### Analisis alur

Halaman awal harus menjadi titik masuk tunggal. Flow tugas akan jauh lebih mudah diuji jika register dan login langsung tersedia di halaman pertama.

#### Jejak referensi sebelum implementasi

Tahap ini tidak menambah referensi internet baru. Setelah helper CSRF, escaping, dan session siap pada tahap sebelumnya, tahap ini langsung menerjemahkan requirement browser-facing menjadi form yang benar-benar bisa diuji.

#### Implementasi

**Langkah 1:**

- Arahkan root route ke satu file masuk.
- Putuskan mode register atau login dari file tersebut.
- Cegah user yang sudah login kembali ke form awal.

**Sumber:** [public/index.php:5-16](/home/fxrdhan/au7h/public/index.php:5)

**Alur kode:** endpoint root memuat bootstrap dulu, menolak user yang sudah login agar langsung ke welcome page, lalu menormalkan mode form sebelum merender halaman auth yang sesuai.

```php
require_once dirname(__DIR__) . '/config/bootstrap.php';

if (current_user() !== null) {
    redirect_to('/welcome.php');
}

$mode = (string) ($_GET['mode'] ?? 'register');
if (!in_array($mode, ['register', 'login'], true)) {
    $mode = 'register';
}

render_page_response(200, render_auth_page(pull_flash(), $mode));
```

**Langkah 2:**

- Siapkan state form dinamis.
- Tetapkan judul, action, label tombol, dan token CSRF sebelum HTML akhir dirender.

**Sumber:** [src/Presentation/AuthViews.php](/home/fxrdhan/au7h/src/Presentation/AuthViews.php:5)

**Alur kode:** potongan ini membangun seluruh state view untuk kartu auth, mulai dari token CSRF, jenis mode, teks UI, target form, hingga field konfirmasi password yang hanya muncul saat registrasi.

```php
function render_auth_form_card(string $mode, ?array $flash): string
{
    $csrfToken = csrf_token();
    $isRegister = $mode === 'register';
    $title = $isRegister ? 'Create your account' : 'Sign in to your account';
    $description = $isRegister
        ? 'Fill in the form below to create your account'
        : 'Enter your credentials below to sign in to your account';
    $action = $isRegister ? '/register.php' : '/login.php';
    $submitLabel = $isRegister ? 'Create Account' : 'Sign In';
    $switchHref = $isRegister ? '/?mode=login' : '/?mode=register';
    $switchLabel = $isRegister ? 'Already have an account?' : 'Don\'t have an account?';
    $switchAction = $isRegister ? 'Sign in' : 'Create one';
    $passwordAutocomplete = $isRegister ? 'new-password' : 'current-password';
    $topMarginClass = $flash === null ? 'mt-0' : 'mt-4';
```

Blok ini menyiapkan state view berdasarkan mode halaman. Judul, target form, label tombol, link switch, autocomplete password, dan jarak flash message ditentukan sebelum HTML dirangkai.

```php
    $confirmField = $isRegister
        ? render_auth_field(
            'Confirm Password',
            'confirm_password',
            'password',
            'new-password',
            '',
            null,
            true,
            'data-confirm-password-input',
            render_confirm_password_status()
        )
        : '';
```

Blok ini hanya menambahkan field konfirmasi password saat mode register. Saat mode login, `$confirmField` dikosongkan agar form tetap ringkas.

**Langkah 3:**

- Bentuk markup form setelah seluruh state siap.
- Muat hidden CSRF token.
- Muat field username-password.
- Muat switch antar mode.

**Sumber cuplikan relevan:** [src/Presentation/AuthViews.php:35](/home/fxrdhan/au7h/src/Presentation/AuthViews.php:35)

**Alur kode:** setelah semua state siap, blok ini menyusun HTML final form dengan urutan yang konsisten: judul, flash message, hidden CSRF token, field input, tombol submit, lalu link untuk berpindah mode.

```php
    return '
      <div class="w-full max-w-sm text-foreground dark:text-zinc-100">
        <div class="space-y-1 text-left">
          <h1 class="text-[2rem] font-semibold tracking-[-0.035em] text-foreground dark:text-white">' . escape_html($title) . '</h1>
          <p class="text-sm text-muted-foreground dark:text-zinc-200">' . escape_html($description) . '</p>
        </div>
        <div class="' . $topMarginClass . '">' . render_flash($flash) . '</div>
```

Blok ini membentuk pembuka kartu auth: judul, deskripsi, dan area flash message. Teks dinamis tetap dilewatkan ke `escape_html()`.

```php
        <form class="mt-8 space-y-6" method="post" action="' . escape_html($action) . '" autocomplete="off">
          <input type="hidden" name="csrf_token" value="' . escape_html($csrfToken) . '">
          ' . render_auth_field(
              'Username',
              'username',
              'text',
              'username',
              'johndoe'
          ) . '
```

Blok ini membuka form dan memasang hidden CSRF token, lalu merender field username.

```php
          ' . render_auth_field(
              'Password',
              'password',
              'password',
              $passwordAutocomplete,
              '',
              null,
              true,
              $isRegister ? 'data-password-input aria-describedby="password-requirements"' : '',
              $isRegister ? render_password_requirements() : ''
          ) . '
          ' . $confirmField . '
```

Blok ini merender field password, menambahkan atribut bantuan khusus mode register, lalu menyisipkan field konfirmasi password bila diperlukan.

```php
          <button
            class="inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white hover:bg-zinc-800 focus:outline-hidden focus:ring-2 focus:ring-zinc-300 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus:ring-zinc-400/30"
            type="submit"
          >' . escape_html($submitLabel) . '</button>
        </form>
```

Blok ini membuat tombol submit dengan label yang mengikuti mode form.

```php
        <p class="mt-4 text-center text-sm text-muted-foreground dark:text-zinc-300">
          ' . escape_html($switchLabel) . '
          <a class="font-medium text-foreground underline underline-offset-4 dark:text-white" href="' . escape_html($switchHref) . '">' . escape_html($switchAction) . '</a>
        </p>
      </div>';
```

Blok ini menutup kartu dengan link untuk berpindah dari register ke login atau sebaliknya.

### Tahap 12 - Menulis endpoint registrasi

#### Tujuan

Membuat akun baru secara aman dan siap dipakai login.

#### Analisis alur

Endpoint register harus memverifikasi method, CSRF, rate limit, validasi input, duplikasi username, lalu baru menyimpan data terenkripsi/terhash.

#### Jejak referensi sebelum implementasi

Tahap ini tidak mencari sumber baru. Implementasinya langsung memakai hasil bacaan dari tahap session, CSRF, validasi input, enkripsi username, hashing password, dan prepared statement.

#### Implementasi

**Langkah 1:**

- Hentikan request non-POST.
- Baca input dasar.
- Verifikasi CSRF.
- Throttle jalur registrasi sebelum validasi lebih dalam dilakukan.

**Sumber:** [public/register.php:7-11](/home/fxrdhan/au7h/public/register.php:7)

**Alur kode:** request registrasi dipagari dari awal dengan tiga langkah berurutan, yaitu wajib `POST`, baca username mentah, validasi CSRF, lalu aktifkan throttling sebelum logika lain dijalankan.

```php
require_post_method();
$submittedUsername = (string) ($_POST['username'] ?? '');
verify_csrf_or_fail($_POST['csrf_token'] ?? null);
// Registration throttling is IP-scoped to slow down bulk account creation attempts.
enforce_auth_rate_limit('register');
```

**Langkah 2:**

- Validasi username.
- Validasi password.
- Validasi konfirmasi password sebagai gerbang pertama sebelum menyentuh database.

**Sumber:** [public/register.php:13-15](/home/fxrdhan/au7h/public/register.php:13)

**Alur kode:** setelah lolos guard awal, input form dipisah menjadi tiga jalur validasi agar username, password, dan konfirmasi password bisa diperiksa dengan pesan error yang tepat.

```php
$usernameValidation = validate_username($submittedUsername);
$passwordValidation = validate_password((string) ($_POST['password'] ?? ''));
$confirmPassword = (string) ($_POST['confirm_password'] ?? '');
```

**Langkah 3:**

- Cek duplikasi username berdasarkan lookup stabil.
- Alihkan alur ke form login jika akun ternyata sudah pernah dibuat.

**Sumber:** [public/register.php:33-37](/home/fxrdhan/au7h/public/register.php:33)

**Alur kode:** bila lookup username sudah ditemukan, proses registrasi tidak diteruskan; sistem justru mencatat kegagalan rate limit, menaruh flash message, lalu mengarahkan user ke mode login.

```php
if (find_user_by_lookup($lookup) !== null) {
    record_auth_rate_limit_failure('register');
    set_flash('success', 'Username sudah terdaftar. Silakan login.');
    redirect_to('/?mode=login');
}
```

**Langkah 4:**

- Simpan akun baru jika seluruh pemeriksaan lolos.
- Bersihkan rate limit register.
- Kirim flash success ke halaman login.

**Sumber:** [public/register.php:39-52](/home/fxrdhan/au7h/public/register.php:39)

**Alur kode:** pada jalur sukses, username diubah menjadi lookup dan ciphertext, password di-hash, akun disimpan, rate limit dibersihkan, lalu user diarahkan ke halaman login; bila penyimpanan gagal, endpoint jatuh ke response 500.

```php
try {
    create_user(
        $lookup,
        encrypt_username($username),
        hash_password_for_storage($password)
    );

    clear_auth_rate_limit('register');
    set_flash('success', 'Registrasi berhasil. Silakan login.');
    redirect_to('/?mode=login');
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    render_page_response(500, render_error_page('Registrasi gagal', 'Server gagal menyimpan akun baru.'));
}
```

#### Hasil tahap

Data akun sudah aman di database dan siap dipakai saat login.

### Tahap 13 - Menulis endpoint login

#### Tujuan

Memenuhi requirement login sukses/gagal dengan dua landing page berbeda.

#### Analisis alur

Inilah titik yang dinilai langsung pada tugas. Login harus:

1. hanya menerima `POST`,
2. mengecek CSRF,
3. mengecek rate limit,
4. mencari user via `username_lookup`,
5. memverifikasi hash password,
6. mengaktifkan session,
7. mengarahkan sesuai hasil.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah PHP `session_regenerate_id()` untuk memastikan session tidak diteruskan mentah setelah autentikasi sukses.

Referensi terkait: [PHP Manual - session_regenerate_id()](https://www.php.net/manual/en/function.session-regenerate-id.php)

> `session_regenerate_id()` will replace the current session id with a new one, and keep the current session information.
>
> `delete_old_session`
>
> Whether to delete the old associated session file or not.
>
> **Translated:**
> `session_regenerate_id()` akan mengganti session id saat ini dengan yang baru, sambil tetap mempertahankan informasi session yang ada.
>
> `delete_old_session`
>
> Menentukan apakah file session lama yang terkait akan dihapus atau tidak.

#### Implementasi

**Langkah 1:**

- Paksa jalur login melewati `POST`.
- Validasi CSRF.
- Terapkan throttle berbasis kombinasi bucket login dan subject username.

**Sumber:** [public/login.php:7-10](/home/fxrdhan/au7h/public/login.php:7)

**Alur kode:** seperti registrasi, login juga dimulai dari guard berlapis: paksa `POST`, baca username mentah, verifikasi token CSRF, lalu aktifkan throttling berbasis bucket login dan subject username.

```php
require_post_method();
$submittedUsername = (string) ($_POST['username'] ?? '');
verify_csrf_or_fail($_POST['csrf_token'] ?? null);
enforce_auth_rate_limit('login', $submittedUsername);
```

**Langkah 2:**

- Cari akun melalui lookup ter-normalisasi.
- Kirim user ke landing page gagal jika user tidak ditemukan atau password salah.

**Sumber:** [public/login.php:21-27](/home/fxrdhan/au7h/public/login.php:21)

**Alur kode:** username valid lebih dulu diubah menjadi lookup stabil untuk mencari akun, lalu satu kondisi gabungan memutuskan kegagalan jika user tidak ditemukan atau hash password tidak cocok.

```php
$user = find_user_by_lookup(username_lookup((string) $usernameValidation['value']));

if ($user === null || !verify_stored_password((string) $passwordValidation['value'], (string) $user['password_hash'])) {
    record_auth_rate_limit_failure('login', $submittedUsername);
    unset($_SESSION['user_id']);
    redirect_to('/not-registered.php');
}
```

**Langkah 3:**

- Reset rate limit setelah autentikasi sukses.
- Regenerasi session ID.
- Rotasi token CSRF.
- Arahkan user ke halaman welcome.

**Sumber:** [public/login.php:29-34](/home/fxrdhan/au7h/public/login.php:29)

**Alur kode:** jalur sukses mereset throttling, mengganti session ID, menyimpan `user_id` aktif, merotasi token CSRF, lalu mengarahkan browser ke welcome page sebagai akhir autentikasi.

```php
clear_auth_rate_limit('login', $submittedUsername);
session_regenerate_id(true);
$_SESSION['user_id'] = (int) $user['id'];
regenerate_csrf_token();

redirect_to('/welcome.php');
```

#### Keputusan penting

1. `session_regenerate_id(true)` dipanggil setelah login untuk mencegah session fixation,
2. CSRF token dirotasi lagi setelah login,
3. login gagal langsung menuju landing page “belum terdaftar”.

### Tahap 14 - Menulis landing page sukses dan gagal

#### Tujuan

Menutup acceptance criteria utama yang diminta pada tugas.

#### Analisis alur

Tanpa dua landing page ini, requirement tugas belum lengkap walaupun autentikasi sebenarnya sudah bekerja.

#### Jejak referensi sebelum implementasi

Tahap ini tidak menambah referensi internet baru. Implementasinya hanya menyambungkan hasil login, guard session, dan kemampuan dekripsi username yang sudah dibangun pada tahap keamanan sebelumnya.

#### Implementasi

**Langkah 1:**

- Panggil guard login lebih dulu di halaman welcome.
- Dekripsi username agar identitas yang tampil tetap nilai asli, bukan hash atau ciphertext.

**Sumber:** [public/welcome.php:7-14](/home/fxrdhan/au7h/public/welcome.php:7)

**Alur kode:** endpoint ini memastikan user sudah login lebih dulu, lalu mencoba mendekripsi username untuk ditampilkan; jika dekripsi gagal, alur dipindah ke halaman error server.

```php
$user = require_login();

try {
    render_page_response(200, render_welcome_page(decrypt_username((string) $user['username_encrypted'])));
} catch (Throwable $exception) {
    error_log($exception->getMessage());
    render_page_response(500, render_error_page('Data akun tidak bisa dibaca', 'Kunci enkripsi untuk username tidak cocok.'));
}
```

Akses halaman welcome tetap dijaga oleh helper session agar route ini tidak bisa dibuka tanpa login.

**Langkah 2:**

- Bangun guard session secara terpisah.
- Gunakan aturan yang sama untuk semua route privat.
- Hindari pengulangan pengecekan `$_SESSION` mentah.

**Sumber:** [src/Support/Http.php:81](/home/fxrdhan/au7h/src/Support/Http.php:81)

**Alur kode:** `current_user()` membaca `user_id` dari session dan menukarnya menjadi row user nyata, sedangkan `require_login()` memakai hasil itu sebagai guard keras yang me-redirect tamu kembali ke root.

```php
function current_user(): ?array
{
    $userId = $_SESSION['user_id'] ?? null;
    if (!is_int($userId) && !ctype_digit((string) $userId)) {
        return null;
    }

    return find_user_by_id((int) $userId);
}

function require_login(): array
{
    $user = current_user();
    if ($user === null) {
        redirect_to('/');
    }

    return $user;
}
```

**Langkah 3:**

- Buat halaman gagal dengan struktur sangat tipis.
- Sediakan satu respons jelas saat kredensial tidak cocok.

**Sumber:** [public/not-registered.php:7-7](/home/fxrdhan/au7h/public/not-registered.php:7)

**Alur kode:** endpoint ini sengaja tipis karena seluruh keputusan gagal login sudah terjadi sebelumnya; tugasnya tinggal mengembalikan status 401 dengan view gagal yang seragam.

```php
render_page_response(401, render_not_registered_page());
```

**Langkah 4:**

- Tampilkan username hasil dekripsi di view welcome.
- Sediakan form logout yang juga diproteksi CSRF.

**Sumber:** [src/Presentation/ResultViews.php](/home/fxrdhan/au7h/src/Presentation/ResultViews.php:5)

**Alur kode:** view welcome membungkus username yang sudah didekripsi ke shell halaman hasil, lalu menaruh form logout berisi token CSRF agar aksi keluar tetap lewat jalur aman.

```php
function render_welcome_page(string $username): string
{
    $content = render_result_page_shell(
        '
          <h1 class="text-4xl font-semibold tracking-tight text-foreground dark:text-white">Welcome, ' . escape_html($username) . '!</h1>
          <form method="post" action="/logout.php" class="mt-10">
            <input type="hidden" name="csrf_token" value="' . escape_html(csrf_token()) . '">
            <button class="inline-flex h-11 items-center justify-center rounded-xl border border-rose-200/80 bg-rose-50 px-5 text-sm font-medium text-rose-700 hover:bg-rose-500 hover:text-white focus:outline-hidden focus:ring-2 focus:ring-rose-300 dark:border-rose-500/35 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500 dark:hover:text-white dark:focus:ring-rose-400/35" type="submit">Logout</button>
          </form>
        ',
        'max-w-2xl'
    );

    return render_layout('Welcome | Au7h', $content);
}
```

**Langkah 5:**

- Tutup requirement dengan pesan gagal login yang eksplisit.
- Jangan bocorkan detail apakah username atau password yang salah.

**Sumber:** [src/Presentation/ResultViews.php](/home/fxrdhan/au7h/src/Presentation/ResultViews.php:21)

**Alur kode:** view gagal login ini membentuk satu pesan netral yang tidak membocorkan detail kegagalan, lalu menyediakan satu aksi balik ke form sebagai jalur pemulihan user.

```php
function render_not_registered_page(): string
{
    $content = render_result_page_shell('
          <div class="space-y-4">
            <h1 class="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">You are not registered yet</h1>
            <p class="text-sm leading-6 text-muted-foreground">
              <span class="block">The username or password is incorrect.</span>
              <span class="block">Try logging in again or create a new account.</span>
            </p>
          </div>
          <div class="mt-8">
            <a class="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200" href="/?mode=register">Back to form</a>
          </div>
        ');

    return render_layout('Not Registered Yet', $content);
}
```

### Tahap 15 - Menambahkan logout aman

#### Tujuan

Menutup sesi tanpa menyisakan token lama.

#### Analisis alur

Logout sering dianggap sepele, padahal tetap state-changing action. Karena itu, logout juga perlu `POST` dan CSRF.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah PHP `session_destroy()` dan `session_get_cookie_params()`.

Referensi terkait: [PHP Manual - session_destroy()](https://www.php.net/manual/en/function.session-destroy.php)

> `session_destroy()` destroys all of the data associated with the current session. It does not unset any of the global variables associated with the session, or unset the session cookie.
>
> In order to kill the session altogether, the session ID must also be unset. If a cookie is used to propagate the session ID (default behavior), then the session cookie must be deleted.
>
> `setcookie()` may be used for that.
>
> **Translated:**
> `session_destroy()` menghancurkan semua data yang terkait dengan session saat ini. Fungsi ini tidak menghapus global variable yang terkait dengan session, dan juga tidak otomatis menghapus cookie session.
>
> Agar session benar-benar dimatikan, session ID juga harus dihapus. Jika cookie dipakai untuk membawa session ID yang merupakan perilaku bawaan, maka cookie session tersebut juga harus dihapus.
>
> `setcookie()` dapat dipakai untuk melakukan itu.

Referensi terkait: [PHP Manual - session_get_cookie_params()](https://www.php.net/manual/en/function.session-get-cookie-params.php)

> Gets the session cookie parameters.
>
> Returns an array with the current session cookie information, the array contains the following items:
>
> - `"lifetime"` - The lifetime of the cookie in seconds.
> - `"path"` - The path where information is stored.
> - `"domain"` - The domain of the cookie.
> - `"secure"` - The cookie should only be sent over secure connections.
> - `"httponly"` - The cookie can only be accessed through the HTTP protocol.
> - `"samesite"` - Controls the cross-domain sending of the cookie.
>
> **Translated:**
> Mengambil parameter cookie milik session.
>
> Fungsi ini mengembalikan array berisi informasi cookie session saat ini, dengan item-item berikut:
>
> - `"lifetime"` - lama hidup cookie dalam detik.
> - `"path"` - path tempat informasi cookie berlaku.
> - `"domain"` - domain cookie.
> - `"secure"` - cookie hanya boleh dikirim melalui koneksi aman.
> - `"httponly"` - cookie hanya boleh diakses lewat protokol HTTP.
> - `"samesite"` - mengontrol pengiriman cookie lintas domain.

#### Implementasi

**Langkah 1:**

- Perlakukan logout seperti aksi sensitif lain.
- Wajibkan `POST`.
- Wajibkan CSRF valid.
- Hapus seluruh state session sebelum redirect.

**Sumber:** [public/logout.php:7-17](/home/fxrdhan/au7h/public/logout.php:7)

**Alur kode:** logout dipagari seperti aksi sensitif lain, lalu session dibersihkan dari memori, cookie session lama dihapus bila ada, session dihancurkan, dan browser dipulangkan ke halaman awal.

```php
require_post_method();
verify_csrf_or_fail($_POST['csrf_token'] ?? null);

$_SESSION = [];
if (ini_get('session.use_cookies')) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000, $params['path'], '', true, true);
}
session_destroy();

redirect_to('/');
```

### Tahap 16 - Menambahkan rate limiting login dan register

#### Tujuan

Memperlambat brute-force dan pembuatan akun massal.

#### Analisis alur

Password kuat tetap butuh throttling. Tanpa rate limit, endpoint login bisa dipukul terus dari IP atau kombinasi username tertentu.

#### Jejak referensi sebelum implementasi

Referensi yang dipakai pada tahap ini adalah OWASP Authentication Cheat Sheet bagian **Login Throttling** dan OWASP Blocking Brute Force Attacks. Intinya, password kuat tetap perlu dibantu throttling karena endpoint login bisa diserang dengan percobaan berulang.

Referensi terkait: [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

> Login Throttling is a protocol used to prevent an attacker from making too many attempts at guessing a password through normal interactive means.
>
> There are a number of different factors that should be considered when implementing an account lockout policy in order to find a balance between security and usability:
>
> - The number of failed attempts before the account is locked out (lockout threshold).
> - The time period that these attempts must occur within (observation window).
> - How long the account is locked out for (lockout duration).
>
> **Translated:**
> Login throttling adalah protokol untuk mencegah penyerang melakukan terlalu banyak percobaan menebak password melalui cara interaktif normal.
>
> Saat menerapkan policy lockout, ada beberapa faktor yang perlu dipertimbangkan agar seimbang antara keamanan dan usability:
>
> - jumlah kegagalan sebelum akun dibatasi,
> - periode waktu tempat percobaan itu dihitung,
> - durasi pembatasan.

Referensi terkait: [OWASP Blocking Brute Force Attacks](https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks)

> Account lockout is not always the best solution, because someone could easily abuse the security measure and lock out hundreds of user accounts.
>
> An attacker can cause a denial of service (DoS) by locking out large numbers of accounts.
>
> **Translated:**
> Account lockout tidak selalu menjadi solusi terbaik karena mekanisme ini bisa disalahgunakan untuk mengunci banyak akun pengguna.
>
> Penyerang bisa menyebabkan denial of service (DoS) dengan mengunci banyak akun.

Karena itu, implementasi proyek ini memilih throttling ringan berbasis database dan window waktu, bukan lockout permanen. Percobaan dicatat, dievaluasi dalam window, lalu request yang melewati batas dihentikan dengan status `429`.

#### Implementasi

**Langkah 1:**

- Bentuk `rate_key` yang stabil dari alamat klien, bucket aksi, dan subject opsional.
- Pastikan throttling bisa dibedakan antara login dan register.

**Sumber:** [src/Security/RateLimiter.php:5-15](/home/fxrdhan/au7h/src/Security/RateLimiter.php:5)

**Alur kode:** helper ini menyusun identitas throttle dari IP klien, nama bucket aksi, dan subject opsional, lalu mengubah gabungan itu menjadi hash tetap yang aman dipakai sebagai primary key rate limit.

```php
function auth_rate_limit_key(string $bucket, ?string $subject = null): string
{
    $normalizedSubject = normalize_username((string) $subject);
    $keySource = client_address() . '|' . $bucket;

    if ($normalizedSubject !== '') {
        $keySource .= '|' . $normalizedSubject;
    }

    return hash('sha256', $keySource);
}
```

**Langkah 2:**

- Tentukan policy per bucket.
- Buat batas register lebih ketat daripada login.
- Hindari fungsi pengecekan yang bercabang liar.

**Sumber:** [src/Security/RateLimiter.php:17-33](/home/fxrdhan/au7h/src/Security/RateLimiter.php:17)

**Alur kode:** policy rate limit dibaca dari konfigurasi aplikasi, lalu helper ini memilih policy bucket spesifik bila ada atau jatuh ke default bila bucket tersebut belum diatur.

```php
function auth_rate_limit_policy(string $bucket): array
{
    $limits = app_config()['auth_rate_limits'] ?? [];
    $policy = $limits[$bucket] ?? $limits['default'] ?? null;

    if (!is_array($policy)) {
        return [
            'max_attempts' => 5,
            'window_seconds' => 900,
        ];
    }

    return [
        'max_attempts' => (int) ($policy['max_attempts'] ?? 5),
        'window_seconds' => (int) ($policy['window_seconds'] ?? 900),
    ];
}
```

**Langkah 3:**

- Baca record rate limit aktif dari database.
- Tentukan apakah jendela percobaan lama masih berlaku atau perlu direset.

**Sumber:** [src/Security/RateLimiter.php:35-46](/home/fxrdhan/au7h/src/Security/RateLimiter.php:35)

**Alur kode:** fungsi ini hanya bertugas mengambil record throttling aktif untuk kombinasi bucket-subject tertentu, sehingga logika keputusan blokir bisa dipisahkan dari query mentahnya.

```php
function find_auth_rate_limit_record(string $bucket, ?string $subject = null): ?array
{
    $select = db_connection()->prepare(
        'SELECT attempts, window_start
         FROM auth_rate_limits
         WHERE rate_key = :rate_key'
    );
    $select->execute(['rate_key' => auth_rate_limit_key($bucket, $subject)]);
    $record = $select->fetch();

    return $record === false ? null : $record;
}
```

**Langkah 4:**

- Bandingkan jumlah percobaan dengan policy aktif.
- Kembalikan keputusan blokir secara deterministik.

**Sumber:** [src/Security/RateLimiter.php:48-61](/home/fxrdhan/au7h/src/Security/RateLimiter.php:48)

**Alur kode:** keputusan blokir dihitung dengan membaca policy, waktu sekarang, dan record aktif; bila window lama sudah lewat maka percobaan dianggap bersih lagi, kalau belum maka jumlah attempts dibandingkan dengan batas policy.

```php
function auth_rate_limit_exceeded(string $bucket, ?string $subject = null): bool
{
    $policy = auth_rate_limit_policy($bucket);
    $now = time();
    $windowSeconds = $policy['window_seconds'];
    $maxAttempts = $policy['max_attempts'];
    $record = find_auth_rate_limit_record($bucket, $subject);

    if ($record === null || ($now - (int) $record['window_start']) >= $windowSeconds) {
        return false;
    }

    return (int) $record['attempts'] >= $maxAttempts;
}
```

**Langkah 5:**

- Catat kegagalan autentikasi.
- Gunakan upsert awal atau increment lanjutan pada window yang sama.

**Sumber:** [src/Security/RateLimiter.php:63-91](/home/fxrdhan/au7h/src/Security/RateLimiter.php:63)

**Alur kode:** saat autentikasi gagal, helper ini memeriksa apakah window lama masih berlaku; jika tidak, ia membuat atau me-reset record dengan `upsert`, jika ya, ia cukup menambah counter attempts pada record yang sama.

```php
function record_auth_rate_limit_failure(string $bucket, ?string $subject = null): void
{
    $policy = auth_rate_limit_policy($bucket);
    $pdo = db_connection();
    $now = time();
    $windowSeconds = $policy['window_seconds'];
    $rateKey = auth_rate_limit_key($bucket, $subject);
    $record = find_auth_rate_limit_record($bucket, $subject);
```

Blok ini membaca policy aktif, waktu sekarang, key rate limit, dan record percobaan yang sudah ada untuk bucket-subject tersebut.

```php
    if ($record === null || ($now - (int) $record['window_start']) >= $windowSeconds) {
        $upsert = $pdo->prepare(
            'INSERT INTO auth_rate_limits (rate_key, attempts, window_start)
             VALUES (:rate_key, 1, :window_start)
             ON DUPLICATE KEY UPDATE attempts = VALUES(attempts), window_start = VALUES(window_start)'
        );
        $upsert->execute([
            'rate_key' => $rateKey,
            'window_start' => $now,
        ]);
        return;
    }
```

Blok ini membuat window percobaan baru atau mereset window lama yang sudah kedaluwarsa. `ON DUPLICATE KEY UPDATE` menjaga operasi tetap aman saat record sudah ada.

```php
    $update = $pdo->prepare(
        'UPDATE auth_rate_limits
         SET attempts = attempts + 1
         WHERE rate_key = :rate_key'
    );
    $update->execute(['rate_key' => $rateKey]);
}
```

Blok ini menangani kasus window masih aktif: jumlah percobaan cukup dinaikkan satu untuk rate key yang sama.

**Langkah 6:**

- Bersihkan record throttling setelah login atau register sukses.
- Pastikan user sah tidak tetap terkena pembatasan lama.

**Sumber:** [src/Security/RateLimiter.php:93-100](/home/fxrdhan/au7h/src/Security/RateLimiter.php:93)

**Alur kode:** begitu login atau registrasi berhasil, helper ini menghapus record throttling yang sesuai agar user sah tidak mewarisi penalti dari kegagalan sebelumnya.

```php
function clear_auth_rate_limit(string $bucket, ?string $subject = null): void
{
    $delete = db_connection()->prepare(
        'DELETE FROM auth_rate_limits
         WHERE rate_key = :rate_key'
    );
    $delete->execute(['rate_key' => auth_rate_limit_key($bucket, $subject)]);
}
```

**Langkah 7:**

- Jalankan helper enforcement sebelum endpoint melanjutkan logika bisnis.
- Ubah status blokir menjadi respons HTTP 429 yang jelas.

**Sumber:** [src/Security/Auth.php:141-149](/home/fxrdhan/au7h/src/Security/Auth.php:141)

**Alur kode:** helper enforcement ini berada di tepi endpoint; ia memanggil pengecekan rate limit dan langsung menghentikan request dengan halaman 429 bila bucket tersebut sedang diblokir.

```php
function enforce_auth_rate_limit(string $bucket, ?string $subject = null): void
{
    if (auth_rate_limit_exceeded($bucket, $subject)) {
        render_page_response(
            429,
            render_error_page('Terlalu banyak percobaan', 'Coba lagi beberapa menit lagi.')
        );
    }
}
```

### Tahap 17 - Menyiapkan Docker Compose untuk development dan demo

#### Tujuan

Membuat proyek cepat dijalankan saat demo.

#### Analisis alur

Port harus jelas sejak awal agar browser langsung bisa mengakses web server. Development juga lebih nyaman jika source code bisa di-mount.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah dokumentasi `docker compose build`, `docker compose up`, bind mount, dan volume persisten.

Referensi terkait: [Docker CLI - docker compose build](https://docs.docker.com/reference/cli/docker/compose/build/)

> Description: Build or rebuild services
> Usage: `docker compose build [OPTIONS] [SERVICE...]`
> Services are built once and then tagged, by default as `project-service`.
> If you change a service's `Dockerfile` or the contents of its build directory, run `docker compose build` to rebuild it.
>
> **Translated:**
> Deskripsi: membangun atau membangun ulang service.
> Pemakaian: `docker compose build [OPTIONS] [SERVICE...]`
> Service dibuild sekali lalu diberi tag, secara default sebagai `project-service`.
> Jika `Dockerfile` milik service atau isi direktori build berubah, jalankan `docker compose build` untuk membangunnya ulang.

Referensi terkait: [Docker CLI - docker compose up](https://docs.docker.com/reference/cli/docker/compose/up/)

> Description: Create and start containers
> Usage: `docker compose up [OPTIONS] [SERVICE...]`
> Builds, (re)creates, starts, and attaches to containers for a service.
> Running `docker compose up --detach` starts the containers in the background and leaves them running.
> If there are existing containers for a service, and the service’s configuration or image was changed after the container’s creation, `docker compose up` picks up the changes by stopping and recreating the containers (preserving mounted volumes).
>
> **Translated:**
> Deskripsi: membuat dan menjalankan container.
> Pemakaian: `docker compose up [OPTIONS] [SERVICE...]`
> Perintah ini membangun, membuat ulang, menjalankan, dan menghubungkan diri ke container milik suatu service.
> Menjalankan `docker compose up --detach` akan menjalankan container di background dan membiarkannya tetap berjalan.
> Jika container untuk sebuah service sudah ada, lalu konfigurasi service atau image berubah setelah container dibuat, `docker compose up` mengambil perubahan tersebut dengan menghentikan dan membuat ulang container sambil mempertahankan mounted volume.

Referensi terkait: [Docker Docs - Bind mounts](https://docs.docker.com/engine/storage/bind-mounts/)

> When you use a bind mount, a file or directory on the host machine is mounted from the host into a container. By contrast, when you use a volume, a new directory is created within Docker's storage directory on the host machine. Docker creates and maintains this storage location, but containers access it directly using standard filesystem operations.
> Bind mounts are appropriate for the following types of use case:
> - Sharing source code or build artifacts between a development environment on the Docker host and a container.
> - Sharing configuration files from the host machine to containers.
>
> **Translated:**
> Saat Anda memakai bind mount, file atau direktori pada mesin host akan di-mount dari host ke dalam container. Sebaliknya, saat memakai volume, direktori baru dibuat di dalam direktori storage Docker pada mesin host. Docker membuat dan memelihara lokasi storage ini, tetapi container mengaksesnya langsung memakai operasi filesystem standar.
> Bind mount cocok untuk beberapa use case berikut:
> - Berbagi source code atau build artifact antara environment development pada host Docker dan container.
> - Berbagi file konfigurasi dari mesin host ke container.

Referensi terkait: [Docker Docs - Volumes](https://docs.docker.com/engine/storage/volumes/)

> Volumes are persistent data stores for containers, created and managed by Docker.
> When you create a volume, it's stored within a directory on the Docker host. When you mount the volume into a container, this directory is what's mounted into the container. This is similar to the way that bind mounts work, except that volumes are managed by Docker and are isolated from the core functionality of the host machine.
> A volume's contents exist outside the lifecycle of a given container. When a container is destroyed, the writable layer is destroyed with it. Using a volume ensures that the data is persisted even if the container using it is removed.
>
> **Translated:**
> Volume adalah media penyimpanan data persisten untuk container yang dibuat dan dikelola oleh Docker.
> Saat volume dibuat, volume disimpan di dalam direktori pada host Docker. Saat volume di-mount ke container, direktori itulah yang di-mount ke dalam container. Ini mirip dengan bind mount, tetapi volume dikelola oleh Docker dan terisolasi dari fungsi inti mesin host.
> Isi volume berada di luar lifecycle container tertentu. Saat container dihancurkan, writable layer ikut dihancurkan. Dengan volume, data tetap persisten walaupun container yang memakainya dihapus.

Setelah alur build, start, bind mount, dan volume persisten jelas, file Compose baru ditulis sebagai jalur demo lokal.

#### Implementasi

**Langkah 1:**

- Tampilkan satu file Compose yang cukup untuk demo lokal.
- Tetapkan mapping port yang eksplisit.
- Pasang volume mount agar perubahan source langsung tercermin saat pengujian.

**Sumber cuplikan relevan:** [compose.dev.yaml:1](/home/fxrdhan/au7h/compose.dev.yaml:1)

**Alur kode:** file Compose ini mendefinisikan service aplikasi yang sekaligus di-build lokal, memetakan port demo HTTP/HTTPS, mengaktifkan ACL, memasang bind mount source code, lalu menambahkan service Snort sidecar untuk monitoring traffic jaringan.

```yaml
name: au7h

services:
  app:
    image: au7h
    build:
      context: .
    cap_add:
      - NET_ADMIN
```

Blok ini mendefinisikan service utama `app`, membangun image dari source lokal, dan memberi capability `NET_ADMIN` agar ACL berbasis iptables bisa diterapkan dari dalam container.

```yaml
    ports:
      - "${HOST_HTTP_PORT:-10080}:8080"
      - "${HOST_HTTPS_PORT:-10443}:8443"
    environment:
      PUBLIC_HTTPS_PORT: ${HOST_HTTPS_PORT:-10443}
      MYSQL_BIND_ADDRESS: 127.0.0.1
      MYSQL_ALLOW_REMOTE: "0"
      ACL_ENABLED: "1"
      ACL_WEB_CIDR: ${ACL_WEB_CIDR:-0.0.0.0/0}
      ACL_DB_CIDR: ${ACL_DB_CIDR:-}
      ACL_ALLOW_ICMP: ${ACL_ALLOW_ICMP:-0}
```

Blok ini memetakan port demo dan mengatur environment jaringan. HTTP/HTTPS dibuka ke host, MySQL dibatasi ke localhost, dan ACL dikendalikan lewat variabel environment.

```yaml
    volumes:
      - ./config:/var/www/html/config
      - ./public:/var/www/html/public
      - ./src:/var/www/html/src
      - ./certs:/var/www/certs
      - au7h-data:/var/www/data
      - au7h-mysql:/var/lib/mysql
```

Blok ini memasang bind mount untuk source code agar perubahan lokal langsung tercermin, lalu memakai named volume untuk data aplikasi dan data MySQL yang perlu persisten.

```yaml
  snort:
    image: ciscotalos/snort3:latest
    depends_on:
      - app
    network_mode: service:app
    entrypoint:
      - /home/snorty/snort3/bin/snort
    user: root
    cap_add:
      - NET_ADMIN
      - NET_RAW
```

Blok ini mendefinisikan Snort sebagai sidecar. `network_mode: service:app` membuat Snort memantau network namespace yang sama dengan aplikasi.

```yaml
    volumes:
      - ./security/snort/snort.lua:/home/snorty/snort3/etc/snort/au7h.lua:ro
      - ./security/snort/rules:/home/snorty/snort3/etc/rules/au7h:ro
      - snort-logs:/var/log/snort
    environment:
      SNORT_HOME_NET: ${SNORT_HOME_NET:-any}
      SNORT_EXTERNAL_NET: ${SNORT_EXTERNAL_NET:-any}
```

Blok ini memasang konfigurasi Snort, rule lokal, dan direktori log. Variabel network Snort tetap bisa diubah dari environment saat demo.

```yaml
    command:
      - -i
      - ${SNORT_INTERFACE:-eth0}
      - -i
      - lo
      - -k
      - none
      - -c
      - /home/snorty/snort3/etc/snort/au7h.lua
      - -A
      - alert_fast
      - -l
      - /var/log/snort
```

Blok ini menjalankan Snort pada interface aplikasi dan loopback, memakai konfigurasi proyek, menulis alert cepat, dan menyimpan log ke volume.

```yaml
volumes:
  au7h-data:
  au7h-mysql:
  snort-logs:
```

Blok ini mendeklarasikan named volume untuk data aplikasi, data MySQL, dan log Snort agar tidak hilang ketika container dibuat ulang.

#### Hasil tahap

**Catatan pembacaan:** alamat ini menjadi target akses minimal saat demo, sehingga penguji bisa langsung memeriksa redirect HTTP dan akses HTTPS tanpa menebak port.

Browser bisa mengakses:

```text
http://localhost:10080
https://localhost:10443
```

### Tahap 18 - Menambahkan Snort IDS dan ACL Jaringan

#### Tujuan

Menjawab tambahan requirement jaringan: traffic aplikasi dipantau oleh Snort, rule lokal tersedia, rule komunitas dapat diperbarui, dan akses port dibatasi dengan ACL.

#### Analisis alur

Snort diposisikan sebagai IDS sidecar, bukan menggantikan Apache atau MySQL. ACL dipasang di container aplikasi agar browser tetap bisa mengakses HTTP/HTTPS, sementara port sensitif seperti MySQL dan SSH tidak terbuka langsung ke user.

Bagian ini tidak mengubah keputusan satu container untuk aplikasi utama. Container `app` tetap menjadi tempat Apache, PHP, dan MySQL berjalan bersama. Snort dibuat sebagai sidecar karena IDS jaringan perlu proses dan image khusus, tetapi ia hanya menempel pada network namespace `app` untuk memantau traffic yang sama, bukan menjadi container database atau web server terpisah.

#### Jejak referensi sebelum implementasi

Referensi yang dicari pada tahap ini adalah tutorial Snort 3 di Docker, dokumentasi resmi konfigurasi Snort 3, pemuatan rule `.rules`, sidecar network namespace di Compose, dan dokumentasi Docker terkait `iptables`.

Referensi terkait: [Docker Recipes - Snort 3 Docker Compose](https://docker.recipes/security/snort3)

> image: ciscotalos/snort3:latest
> cap_add:
>   - NET_ADMIN
>   - NET_RAW
> command: -i eth0 -c /usr/local/etc/snort/snort.lua

Referensi terkait: [Docker Hub - ciscotalos/snort3](https://hub.docker.com/r/ciscotalos/snort3)

> docker pull ciscotalos/snort3

Referensi terkait: [Snort 3 Configuration Guide](https://docs.snort.org/start/configuration)

> Snort 3 configuration is now all done in Lua.
>
> Snort doesn't look for a specific configuration file by default, but you can pass one to it very easily with the `-c` argument.

Referensi terkait: [Snort 3 Rule Writing Guide](https://docs.snort.org/start/rules)

> Snort rules can be placed directly in one's Lua configuration file(s) via the `ips` module, but for the most part they will live in distinct `.rules` files that get "included".
>
> `alert_fast (logger): output event with brief text format`

Referensi terkait: [Docker Compose services - network_mode](https://docs.docker.com/reference/compose-file/services/#network_mode)

> `network_mode` sets a service container's network mode.
>
> `service:{name}`: Gives the container access to the specified container by referring to its service name.

Referensi terkait: [Docker Docs - Docker with iptables](https://docs.docker.com/engine/network/firewall-iptables/)

> Docker creates iptables rules in the host's network namespace for bridge networks.
>
> The following rule accepts any incoming or outgoing packet belonging to a flow that has already been accepted by other rules.

Referensi terkait: [iptables(8)](https://man7.org/linux/man-pages/man8/iptables.8.html)

> A firewall rule specifies criteria for a packet and a target.
>
> `ACCEPT` means to let the packet through. `DROP` means to drop the packet on the floor.

Referensi terkait: [iptables-extensions(8)](https://man7.org/linux/man-pages/man8/iptables-extensions.8.html)

> `conntrack`
>
> `--ctstate`
>
> `multiport`
>
> This module matches a set of source or destination ports.
>
> `--destination-ports`, `--dports`
>

#### Implementasi

**Langkah 1:**

- Konfigurasikan Snort sidecar.
- Baca rule proyek.
- Tulis alert.

**Sumber cuplikan relevan:** [security/snort/snort.lua:5](/home/fxrdhan/au7h/security/snort/snort.lua:5)

**Alur kode:** konfigurasi Snort menetapkan network yang dilindungi, memuat default Snort, mengarahkan `RULE_PATH`, mengaktifkan builtin rules, memasukkan file rules proyek, lalu menulis alert ke format `alert_fast`.

```lua
HOME_NET = os.getenv('SNORT_HOME_NET') or 'any'
EXTERNAL_NET = os.getenv('SNORT_EXTERNAL_NET') or 'any'

include 'snort_defaults.lua'

RULE_PATH = '/home/snorty/snort3/etc/rules/au7h'
HTTP_PORTS = '80 443 8080 8443'
SQL_SERVERS = HOME_NET

default_variables.paths.RULE_PATH = RULE_PATH
default_variables.ports.HTTP_PORTS = HTTP_PORTS
default_variables.nets.SQL_SERVERS = SQL_SERVERS
```

Blok ini menetapkan variabel jaringan Snort, memuat default konfigurasi, lalu mengarahkan path rule dan port HTTP yang akan dipantau.

```lua
ips =
{
    enable_builtin_rules = true,
    include = RULE_PATH .. '/au7h.rules',
    variables = default_variables
}
```

Blok ini mengaktifkan builtin rules dan memasukkan rule aggregator proyek, sehingga rule lokal dan komunitas bisa dimuat dari satu pintu.

```lua
alert_fast =
{
    file = true,
    packet = false,
    limit = 10
}
```

Blok ini memilih output alert ringkas ke file log, tanpa menyimpan isi paket penuh, agar hasil demo mudah dibaca.

**Langkah 2:**

- Susun file rule Snort proyek.
- Pastikan rule lokal dan rule komunitas bisa dimuat dari satu aggregator.

**Sumber cuplikan relevan:** [security/snort/rules/au7h.rules:1](/home/fxrdhan/au7h/security/snort/rules/au7h.rules:1) dan [security/snort/rules/local.rules:1](/home/fxrdhan/au7h/security/snort/rules/local.rules:1)

`au7h.rules` menjadi file aggregator yang di-include oleh `snort.lua`, lalu memuat `local.rules` dan `community.rules`. Rule lokal mendeteksi ping, akses HTTP/HTTPS, akses langsung ke MySQL, dan akses SSH.

```conf
include $RULE_PATH/local.rules
include $RULE_PATH/community.rules
```

```conf
alert icmp any any -> $HOME_NET any (msg:"AU7H ICMP ping attempt to protected server"; itype:8; sid:1000001; rev:2; classtype:icmp-event;)
alert tcp any any -> $HOME_NET $HTTP_PORTS (msg:"AU7H HTTP/HTTPS connection to web server"; sid:1000002; rev:3; classtype:web-application-activity;)
alert tcp any any -> $HOME_NET 3306 (msg:"AU7H direct MySQL port access attempt"; sid:1000003; rev:3; classtype:attempted-recon;)
alert tcp any any -> $HOME_NET 22 (msg:"AU7H SSH port access attempt"; sid:1000004; rev:3; classtype:attempted-recon;)
```

**Langkah 3:**

- Terapkan ACL jaringan di container aplikasi.
- Batasi port yang boleh diakses.

**Sumber cuplikan relevan:** [docker/acl.sh:22](/home/fxrdhan/au7h/docker/acl.sh:22)

**Alur kode:** ACL membuat chain khusus `AU7H_INPUT`, mengizinkan loopback dan koneksi yang sudah established, membuka port HTTP/HTTPS, lalu menolak MySQL, SSH, ICMP ping, dan traffic lain yang tidak masuk daftar allow.

```sh
iptables -w -P INPUT DROP
iptables -w -P FORWARD DROP
iptables -w -P OUTPUT ACCEPT

iptables -w -N "${ACL_CHAIN}" 2>/dev/null || iptables -w -F "${ACL_CHAIN}"
iptables -w -C INPUT -j "${ACL_CHAIN}" 2>/dev/null || iptables -w -I INPUT 1 -j "${ACL_CHAIN}"
```

Blok ini menetapkan default policy yang ketat dan menyiapkan chain khusus `AU7H_INPUT`. Jika chain sudah ada, isinya dibersihkan agar aturan lama tidak menumpuk.

```sh
iptables -w -A "${ACL_CHAIN}" -i lo -j ACCEPT
iptables -w -A "${ACL_CHAIN}" -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
iptables -w -A "${ACL_CHAIN}" -p tcp -s "${ACL_WEB_CIDR}" -m multiport --dports "${APP_PORT_HTTP},${APP_PORT_HTTPS}" -j ACCEPT
```

Blok ini membuka jalur aman yang memang diperlukan: loopback, koneksi yang sudah established, dan akses web HTTP/HTTPS dari CIDR yang diizinkan.

```sh
if [ -n "${ACL_DB_CIDR}" ]; then
  iptables -w -A "${ACL_CHAIN}" -p tcp -s "${ACL_DB_CIDR}" --dport "${MYSQL_PORT}" -j ACCEPT
fi

if [ "${ACL_ALLOW_ICMP}" = "1" ]; then
  iptables -w -A "${ACL_CHAIN}" -p icmp --icmp-type echo-request -j ACCEPT
fi
```

Blok ini menyediakan pengecualian terkontrol untuk akses database dan ICMP. Keduanya hanya aktif jika environment memang mengizinkan.

```sh
iptables -w -A "${ACL_CHAIN}" -p tcp --dport "${MYSQL_PORT}" -j REJECT
iptables -w -A "${ACL_CHAIN}" -p tcp --dport 22 -j REJECT
iptables -w -A "${ACL_CHAIN}" -p icmp --icmp-type echo-request -j DROP
iptables -w -A "${ACL_CHAIN}" -j DROP
```

Blok ini menutup port sensitif dan traffic lain yang tidak masuk daftar allow. MySQL dan SSH ditolak eksplisit, ICMP ping dibuang, lalu aturan terakhir menjadi fallback drop.

#### Hasil tahap

Hasil yang dapat ditunjukkan saat demo:

1. `docker compose -f compose.dev.yaml ps` menampilkan service `app` dan `snort` aktif,
2. `bun run snort:test-rules` memvalidasi konfigurasi Snort,
3. `bun run snort:logs` menampilkan alert dari `alert_fast.txt`,
4. `bun run acl:status` menampilkan chain `AU7H_INPUT`,
5. request HTTP/HTTPS tetap berhasil,
6. akses langsung ke MySQL `3306` dan SSH `22` ditolak.

## 9. Alur Demo Singkat Saat Presentasi

Bagian ini adalah contekan demo cepat. Detail uji lengkap tetap ada pada bagian verifikasi setelahnya, tetapi urutan berikut lebih enak dipakai saat sesi evaluasi meminta bukti langsung.

### 9.1. Start container dan pastikan service aktif

```bash
docker compose -f compose.dev.yaml up -d --build
docker compose -f compose.dev.yaml ps
```

Yang ditunjukkan:

1. service `app` aktif,
2. service `snort` aktif sebagai IDS sidecar,
3. port HTTP `10080` dan HTTPS `10443` terpublish.

### 9.2. Buka aplikasi lewat browser

Buka:

```text
https://localhost:10443/
```

Yang ditunjukkan:

1. halaman register/login tampil,
2. form memakai metode `POST`,
3. form membawa `csrf_token`.

### 9.3. Buktikan HTTP diarahkan ke HTTPS

```bash
curl -k -I http://localhost:10080
```

Yang ditunjukkan:

1. status `301 Moved Permanently`,
2. header `Location: https://localhost:10443/`.

### 9.4. Demo flow utama login-register

Urutan demo:

1. register username baru dengan password valid,
2. login memakai akun yang baru dibuat,
3. tunjukkan halaman `/welcome.php`,
4. pastikan username muncul pada halaman welcome,
5. logout,
6. coba login dengan akun salah dan tunjukkan redirect ke `/not-registered.php`.

### 9.5. Buktikan database tidak menyimpan kredensial plaintext

Jalankan query inspeksi tabel `users` dari MySQL container:

```sql
SELECT username_lookup, username_encrypted, password_hash FROM users ORDER BY id DESC LIMIT 1;
```

Yang ditunjukkan:

1. `username_lookup` berupa HMAC 64 karakter hex,
2. `username_encrypted` berupa payload terenkripsi `iv.tag.ciphertext`,
3. `password_hash` berformat `$argon2id$...`,
4. tidak ada username/password plaintext di database.

### 9.6. Demo uji negatif keamanan

Urutan paling cepat:

1. kirim login tanpa `csrf_token` dan tunjukkan status `403`,
2. masukkan payload SQL injection `' OR 1=1 --` dan tunjukkan login tetap gagal,
3. masukkan payload XSS `<script>alert(1)</script>` pada register dan tunjukkan input ditolak,
4. masukkan username terlalu panjang dan tunjukkan validasi `Username harus 3-32 karakter.`,
5. lakukan login gagal 6 kali dan tunjukkan request ke-6 menerima `429`.

Catatan saat menjelaskan SQL injection: payload memang ditolak oleh validasi username sebelum query dijalankan, dan layer database tetap memakai PDO prepared statement sebagai pertahanan utama bila input valid sampai ke query.

### 9.7. Demo Snort IDS dan ACL jaringan

```bash
bun run snort:test-rules
bun run acl:status
```

Yang ditunjukkan:

1. konfigurasi Snort valid,
2. rule lokal dan komunitas dimuat,
3. chain `AU7H_INPUT` aktif,
4. HTTP/HTTPS diizinkan,
5. MySQL `3306`, SSH `22`, dan ICMP dibatasi sesuai ACL.

## 10. Urutan Verifikasi Setelah Implementasi

### Uji 1 - Container hidup

Alur pengujian: jalankan build bersih lebih dulu, lalu baca log startup sampai bootstrap MySQL dan Apache benar-benar selesai tanpa fatal error.

```bash
docker compose -f compose.dev.yaml up -d --build
docker compose -f compose.dev.yaml logs -f app
```

Yang harus terlihat:

1. MySQL berhasil bootstrap,
2. Apache listen di port HTTP/HTTPS,
3. tidak ada error fatal PHP saat startup.

### Uji 2 - HTTP redirect ke HTTPS

Alur pengujian: kirim request HEAD ke endpoint HTTP untuk memastikan web server tidak melayani konten sensitif di kanal tidak terenkripsi.

```bash
curl -I http://localhost:10080
```

Yang harus terlihat:

1. status redirect,
2. header `Location` menuju `https://localhost:10443/...`.

### Uji 3 - Form tampil di browser

Alur pengujian: panggil halaman utama lewat HTTPS dan periksa bahwa HTML yang kembali memang sudah memuat form autentikasi serta hidden field CSRF.

```bash
curl -k https://localhost:10443/
```

Yang harus terlihat:

1. HTML form register/login,
2. hidden field CSRF token,
3. endpoint action menuju `/register.php` atau `/login.php`.

### Uji 4 - Register berhasil

**Langkah manual:**

1. buka `https://localhost:10443/`,
2. isi username valid,
3. isi password valid,
4. submit register,
5. halaman kembali ke mode login dengan flash sukses.

### Uji 5 - Login berhasil

**Langkah manual:**

1. isi username yang baru terdaftar,
2. isi password benar,
3. submit login.

Hasil yang harus muncul:

1. redirect ke `/welcome.php`,
2. teks `Welcome, <username>!`,
3. session aktif.

### Uji 6 - Login gagal

**Langkah manual:**

1. isi username salah atau password salah,
2. submit login.

Hasil yang harus muncul:

1. redirect ke `/not-registered.php`,
2. teks bahwa username atau password salah,
3. session lama dibersihkan.

### Uji 7 - Username dan password tidak terbaca asli di database

Alur pengujian: periksa isi tabel secara langsung untuk membuktikan bahwa database hanya menyimpan lookup, ciphertext, dan hash, bukan kredensial plaintext.

```sql
SELECT username_lookup, username_encrypted, password_hash FROM users;
```

Yang harus terlihat:

1. tidak ada password plaintext,
2. `password_hash` berformat hash Argon2id,
3. `username_encrypted` berupa ciphertext, bukan username asli.

### Uji 8 - CSRF protection

Cara uji:

1. kirim `POST` login/register tanpa `csrf_token`,
2. atau kirim token yang tidak cocok.

Hasil yang harus muncul:

1. status `403`,
2. halaman error `Form ditolak`.

### Uji 9 - SQL injection

Alur pengujian: gunakan payload klasik pada field username untuk membuktikan prepared statement tetap membuat input itu diperlakukan sebagai data biasa.

Masukkan pada field username:

```text
' OR 1=1 --
```

Hasil yang diharapkan:

1. query tidak pecah,
2. login tetap gagal,
3. tidak ada akun yang lolos secara ilegal.

### Uji 10 - XSS

Alur pengujian: masukkan payload script ke form register untuk melihat bahwa validasi input menghentikan nilai berbahaya bahkan sebelum output encoding dan CSP bekerja.

Masukkan pada username saat register:

```text
<script>alert(1)</script>
```

Hasil yang diharapkan:

1. validasi username menolak input,
2. jika suatu saat nilai itu lolos ke tampilan, `escape_html()` tetap mengubahnya menjadi teks aman,
3. CSP tetap memberi lapisan tambahan.

### Uji 11 - Buffer overflow / oversized input

Alur pengujian: kirim input yang sengaja dibuat melewati batas normal aplikasi, lalu cocokkan dengan hardening runtime PHP untuk memastikan request besar tidak diproses bebas.

Contoh input yang diuji:

```text
username = 80 karakter
password = lebih dari 72 karakter
POST body = lebih besar dari post_max_size
```

Yang harus terlihat:

1. username lebih dari 32 karakter ditolak oleh validasi server-side,
2. password lebih dari 72 karakter ditolak oleh validasi server-side,
3. file upload tetap nonaktif,
4. ukuran POST dibatasi oleh konfigurasi Apache PHP,
5. tidak ada data oversized yang masuk ke tabel `users`.

### Uji 12 - Rate limit

Lakukan login gagal berulang kali sampai melewati batas.

Hasil yang diharapkan:

1. request berikutnya menerima status `429`,
2. halaman error menyatakan terlalu banyak percobaan.

### Uji 13 - Snort IDS dan rule lokal

Alur pengujian: validasi konfigurasi Snort, jalankan traffic HTTP/HTTPS, lalu baca file alert Snort.

```bash
bun run snort:test-rules
bun run snort:logs
```

Yang harus terlihat:

1. konfigurasi Snort valid tanpa warning fatal,
2. alert HTTP/HTTPS muncul saat browser atau `curl` mengakses aplikasi,
3. alert MySQL atau SSH muncul saat ada percobaan akses langsung ke port `3306` atau `22`.

### Uji 14 - ACL port jaringan

Alur pengujian: tampilkan chain ACL dan pastikan port web diizinkan, sementara MySQL dan SSH ditolak.

```bash
bun run acl:status
```

Yang harus terlihat:

1. chain `AU7H_INPUT` aktif,
2. port `8080` dan `8443` berstatus `ACCEPT`,
3. port `3306` dan `22` berstatus `REJECT`,
4. ICMP echo request berstatus `DROP` kecuali `ACL_ALLOW_ICMP=1`.

### Hasil Verifikasi Aktual

Bagian ini mencatat hasil uji yang sudah dijalankan pada proyek, bukan hanya rencana uji.

| Area yang diuji | Perintah atau cara uji | Hasil aktual |
| --- | --- | --- |
| Unit security helper | `bun run test` | `Auth security tests passed.` |
| Container app + Snort | `docker compose -f compose.dev.yaml up -d --build` lalu `docker compose -f compose.dev.yaml ps` | service `app` dan `snort` berstatus `Up`; port `10080->8080` dan `10443->8443` terpublish |
| Redirect HTTP ke HTTPS | `curl -k -I http://localhost:10080` | `HTTP/1.1 301 Moved Permanently`, `Location: https://localhost:10443/` |
| Form dan CSRF | `curl -k -s https://localhost:10443/` | HTML memuat form `POST`, action `/register.php`, dan hidden field `csrf_token` |
| Register berhasil | Submit form register dengan username unik, password valid, dan `confirm_password` cocok | response `302 Found`, `Location: /?mode=login` |
| Login berhasil | Submit form login memakai akun hasil register | response `302 Found`, `Location: /welcome.php` |
| Welcome username | Buka `/welcome.php` dengan cookie session login | halaman memuat teks `Welcome, <username>!` |
| Login gagal | Submit username yang tidak terdaftar | response `302 Found`, `Location: /not-registered.php` |
| Logout | Submit `/logout.php` dengan CSRF token dari halaman welcome | response `302 Found`, `Location: /`; akses ulang `/welcome.php` kembali redirect |
| CSRF protection | Submit `POST /login.php` tanpa `csrf_token` | status `403` |
| Privasi database | Query `SELECT username_lookup, username_encrypted, password_hash FROM users ORDER BY id DESC LIMIT 1` | username tampil sebagai HMAC 64 hex, username terenkripsi berbentuk payload `iv.tag.ciphertext`, password berbentuk hash `$argon2id$...` |
| SQL injection | Payload username `' OR 1=1 --` pada form login | payload tidak membypass login; input ditolak sebagai credential tidak valid dan query auth tetap memakai prepared statement |
| XSS | Payload username `<script>alert(1)</script>` pada form register | validasi username menolak karakter berbahaya; output dinamis tetap melewati `escape_html()` dan CSP aktif sebagai lapisan tambahan |
| Buffer overflow / oversized input | Submit register dengan username 80 karakter, lalu cek `/etc/php/8.4/apache2/conf.d/90-au7h-security.ini` di container app | request ditolak kembali ke `/?mode=register`; config Apache PHP memuat `file_uploads = Off`, `post_max_size = 8K`, `upload_max_filesize = 1K`, dan `max_input_vars = 20` |
| Rate limiting | Login gagal 6 kali beruntun untuk subject yang sama | percobaan 1-5 menghasilkan `302`, percobaan ke-6 menghasilkan `429` |
| Snort rules | `bun run snort:test-rules` | Snort berhasil validasi konfigurasi, `644` rules loaded, `0 warnings` |
| Snort live alert | `curl -k -s -o /dev/null https://localhost:10443/` lalu baca `/var/log/snort/alert_fast.txt` | alert `[1:1000002:3] "AU7H HTTP/HTTPS connection to web server"` muncul untuk traffic ke port `8443` |
| ACL container | `bun run acl:status` | chain `AU7H_INPUT` aktif; HTTP/HTTPS `ACCEPT`; MySQL `3306` dan SSH `22` `REJECT`; ICMP echo request `DROP` |
| Batas satu container | Review `Dockerfile` dan `compose.dev.yaml` | container `app` memuat Apache/PHP/MySQL; `snort` adalah sidecar IDS, bukan pemisahan web/database |

### Bukti Screenshot Verifikasi

Bagian ini melampirkan bukti visual dari verifikasi aktual yang sudah dijalankan. Screenshot yang dipilih menunjukkan hasil final yang berhasil, termasuk uji positif dan uji negatif keamanan; screenshot percobaan database yang masih menghasilkan `Access denied` tidak dimasukkan karena bukan bukti final.

#### Screenshot 1 - Container app dan Snort aktif

![Container app dan Snort aktif](assets/screenshots/01-compose-services.png)

Gambar ini menunjukkan `docker compose -f compose.dev.yaml ps` dengan service `app` dan `snort` berstatus `Up`, serta port `10080->8080` dan `10443->8443` terpublish.

#### Screenshot 2 - HTTP redirect ke HTTPS

![HTTP redirect ke HTTPS](assets/screenshots/02-http-redirect.png)

Gambar ini menunjukkan request `curl -k -I http://localhost:10080` menerima status `301 Moved Permanently` dan header `Location: https://localhost:10443/`.

#### Screenshot 3 - Form register tampil di browser

![Form register tampil di browser](assets/screenshots/03-register-form.png)

Gambar ini menunjukkan halaman utama aplikasi dapat dibuka lewat `https://localhost:10443/` dan menampilkan form pendaftaran akun.

#### Screenshot 4 - Login sukses ke welcome page

![Login sukses ke welcome page](assets/screenshots/04-welcome-page.png)

Gambar ini menunjukkan login berhasil dan user diarahkan ke `/welcome.php` dengan username tampil pada halaman welcome.

#### Screenshot 5 - Database tidak menyimpan kredensial plaintext

![Database tidak menyimpan kredensial plaintext](assets/screenshots/05-database-privacy.png)

Gambar ini menunjukkan tabel `users` hanya memuat `username_lookup`, `username_encrypted`, dan `password_hash`. Nilai username tidak tampil sebagai plaintext, sedangkan password tersimpan sebagai hash Argon2id.

#### Screenshot 6 - Unit security helper lulus

![Unit security helper lulus](assets/screenshots/06-security-test.png)

Gambar ini menunjukkan `bun run test` berhasil menjalankan test helper keamanan dan menghasilkan `Auth security tests passed.`

#### Screenshot 7 - Validasi konfigurasi Snort berhasil

![Validasi konfigurasi Snort berhasil](assets/screenshots/07-snort-rules.png)

Gambar ini menunjukkan `bun run snort:test-rules` berhasil memvalidasi konfigurasi Snort, memuat `644` rules, dan berakhir dengan `0 warnings`.

#### Screenshot 8 - Alert Snort muncul saat traffic HTTPS

![Alert Snort muncul saat traffic HTTPS](assets/screenshots/08-snort-alert.png)

Gambar ini menunjukkan alert `[1:1000002:3] "AU7H HTTP/HTTPS connection to web server"` muncul setelah traffic HTTPS dikirim ke aplikasi.

#### Screenshot 9 - ACL container aktif

![ACL container aktif](assets/screenshots/09-acl-status.png)

Gambar ini menunjukkan chain `AU7H_INPUT` aktif, port web `8080,8443` diizinkan, port MySQL `3306` dan SSH `22` ditolak, serta ICMP echo request di-drop.

#### Screenshot 10 - Build ulang container berhasil sebelum uji negatif

![Build ulang container berhasil sebelum uji negatif](assets/screenshots/10-dev-up-build.png)

Gambar ini menunjukkan `bun run dev:up` menjalankan `docker compose -f compose.dev.yaml up -d --build`, image `au7h` berhasil dibangun, dan container `au7h-app-1` serta `au7h-snort-1` berjalan.

#### Screenshot 11 - CSRF tanpa token ditolak

![CSRF tanpa token ditolak](assets/screenshots/11-csrf-403.png)

Gambar ini menunjukkan request `POST` ke `/login.php` tanpa `csrf_token` menerima respons `HTTP/1.1 403 Forbidden`, sehingga integritas form benar-benar divalidasi di server.

#### Screenshot 12a - Payload SQL injection diisi pada form login

![Payload SQL injection diisi pada form login](assets/screenshots/12a-sql-injection-payload.png)

Gambar ini menunjukkan field username diisi payload `' OR 1=1 --` dan field password tetap diisi agar browser benar-benar mengirim request ke server, bukan berhenti pada validasi `required` di sisi browser.

#### Screenshot 12b - Payload SQL injection tidak membypass login

![Payload SQL injection tidak membypass login](assets/screenshots/12b-sql-injection-blocked.png)

Gambar ini menunjukkan hasil setelah payload dikirim: aplikasi tetap menampilkan halaman `You are not registered yet`, sehingga payload tidak membypass autentikasi dan tidak membuka akun lain.

#### Screenshot 13 - Payload XSS ditolak validasi input

![Payload XSS ditolak validasi input](assets/screenshots/13-xss-blocked.png)

Gambar ini menunjukkan payload `<script>alert(1)</script>` pada username register ditolak dengan pesan `Username hanya boleh huruf, angka, spasi, titik, strip, atau underscore.`

#### Screenshot 14 - Oversized username ditolak

![Oversized username ditolak](assets/screenshots/14-oversized-input-blocked.png)

Gambar ini menunjukkan username panjang berlebih ditolak dengan pesan `Username harus 3-32 karakter.`, sehingga batas ukuran input berjalan di sisi server.

#### Screenshot 15 - Rate limit login aktif

![Rate limit login aktif](assets/screenshots/15-rate-limit-429.png)

Gambar ini menunjukkan lima percobaan login gagal pertama menerima `HTTP 302`, lalu percobaan keenam menerima `HTTP 429` dengan pesan `Terlalu banyak percobaan`.

## 11. Pemetaan Requirement Tugas Ke Tahap Implementasi

| Requirement tugas | Tahap implementasi yang menutup requirement |
| --- | --- |
| Satu container web server + database | Tahap 1, 2, 3 |
| Bisa diakses browser | Tahap 4, 17 |
| Form login dan register | Tahap 11 |
| Minimal harus bisa login | Tahap 12, 13, 14 |
| Login sukses ke welcome + username | Tahap 13, 14 |
| Login gagal ke belum terdaftar | Tahap 13, 14 |
| HTTPS | Tahap 4 |
| Algoritma enkripsi web server boleh default | Tahap 1, 3, 4 |
| Integritas form | Tahap 9, 12, 13, 15 |
| Privasi data di database | Tahap 8, 9 |
| Buffer overflow | Tahap 6 + pilihan stack pada Tahap 1 + Decision Log 6.4 |
| SQL injection | Tahap 10 |
| XSS | Tahap 5, 9, 11, 14 |
| Snort IDS + rule lokal | Tahap 18 |
| ACL ICMP dan port | Tahap 18 |

## 12. Catatan Transparansi Tentang Bagian Yang Sengaja Tidak Dibesar-besarkan

1. Satu container dipilih karena requirement tugas, bukan karena itu pola terbaik produksi.
2. “Buffer overflow protection” di sini diterapkan secara realistis pada level aplikasi: bahasa high-level, limit ukuran, nonaktif upload, hardening runtime. Ini bukan klaim bahwa seluruh dependency native bebas bug.
3. CSP dipasang sebagai defense in depth, bukan pengganti output encoding.
4. Password tidak dienkripsi karena referensi keamanan modern merekomendasikan hashing satu arah.
5. Username tidak cukup di-hash karena landing page perlu menampilkan nilai asli setelah login.
6. Snort berjalan sebagai sidecar IDS untuk kebutuhan monitoring jaringan; ini tidak mengubah fakta bahwa web server, aplikasi PHP, dan database MySQL tetap berada dalam satu container aplikasi.
7. Sertifikat self-signed cukup untuk demo lokal dan pembuktian HTTPS, tetapi browser bisa tetap menampilkan warning trust. Untuk host publik, sertifikat dari CA tepercaya lebih tepat.

## 13. Checklist Final Sebelum Presentasi

Catatan pembacaan: checklist ini dipakai sebagai pemeriksaan terakhir tepat sebelum demo, supaya tidak ada requirement yang tertinggal saat presentasi berlangsung.

```text
[x] docker compose up berhasil
[x] http:// redirect ke https://
[x] form register tampil
[x] form login tampil
[x] register sukses
[x] login sukses
[x] login gagal menuju halaman belum terdaftar
[x] welcome page menampilkan username
[x] logout berhasil
[x] CSRF token divalidasi
[x] session cookie secure + httponly + samesite
[x] password hash Argon2id
[x] username terenkripsi
[x] lookup username via HMAC
[x] prepared statement aktif
[x] emulate prepares dimatikan
[x] payload SQL injection tidak membypass login
[x] CSP aktif
[x] input validation aktif
[x] payload XSS ditolak atau di-escape
[x] oversized username/password ditolak
[x] rate limiting aktif
[x] file upload dimatikan
[x] ukuran POST dibatasi
[x] batas satu container app vs Snort sidecar dijelaskan
[x] sertifikat self-signed untuk demo lokal dijelaskan
[x] Snort service aktif
[x] au7h.rules memuat local.rules dan community.rules
[x] local.rules memuat ICMP, HTTP/HTTPS, MySQL, dan SSH
[x] snort:test-rules berhasil
[x] Snort alert HTTP/HTTPS muncul di alert_fast.txt
[x] acl:status menampilkan chain AU7H_INPUT
[x] HTTP/HTTPS diizinkan ACL
[x] MySQL 3306 dan SSH 22 ditolak ACL
```

## 14. Ringkasan Strategi Dari Nol

Strategi pembangunan yang paling aman dan paling mudah dipertanggungjawabkan untuk tugas ini adalah:

1. terjemahkan requirement dulu menjadi acceptance criteria,
2. lakukan riset internet per kontrol keamanan,
3. pilih arsitektur yang paling sederhana namun tetap aman,
4. bangun satu container yang bisa bootstrap sendiri,
5. implementasikan login/register paling kecil dulu,
6. pasang proteksi CSRF, session, hashing, enkripsi, SQLi, XSS, dan rate limit,
7. tambahkan Snort IDS dan ACL untuk kontrol jaringan,
8. tutup dengan uji manual dan uji negatif,
9. cocokkan satu per satu dengan requirement.

Urutan ini menghasilkan proyek yang tidak hanya “jalan”, tetapi juga mudah dijelaskan saat alasan teknisnya perlu dipertanggungjawabkan di sesi evaluasi.
