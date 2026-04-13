<?php

declare(strict_types=1);

function render_flash(?array $flash): string
{
    if ($flash === null || !isset($flash['text'])) {
        return '';
    }

    $isSuccess = ($flash['type'] ?? 'error') === 'success';
    $className = $isSuccess
        ? 'border-emerald-200/80 bg-emerald-50 text-emerald-700'
        : 'border-rose-200/80 bg-rose-50 text-rose-700';

    return '<div class="rounded-xl border px-4 py-3 text-sm font-medium shadow-sm ' . $className . '" role="status">'
        . escape_html((string) $flash['text'])
        . '</div>';
}

function render_brand(bool $inverse = false): string
{
    $textClass = $inverse ? 'text-zinc-50' : 'text-foreground';
    $subTextClass = $inverse ? 'text-zinc-400' : 'text-muted-foreground';

    return '
      <a href="/" class="inline-flex items-center gap-3 text-sm font-semibold tracking-tight ' . $textClass . '">
        <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-soft">K</span>
        <span class="flex flex-col leading-none">
          <span>Kamsis Secure Auth</span>
          <span class="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] ' . $subTextClass . '">PHP + MySQL</span>
        </span>
      </a>';
}

function render_auth_form(
    string $title,
    string $description,
    string $action,
    string $submitLabel,
    string $passwordAutocomplete
): string {
    $csrfToken = csrf_token();
    $formKey = preg_replace('/[^a-z0-9]+/i', '-', trim($action, '/')) ?: 'auth';

    return '
      <section class="rounded-2xl border bg-card p-6 shadow-soft">
        <div class="space-y-1">
          <h2 class="text-xl font-semibold tracking-tight">' . escape_html($title) . '</h2>
          <p class="text-sm text-muted-foreground">' . escape_html($description) . '</p>
        </div>
        <form class="mt-6 space-y-4" method="post" action="' . escape_html($action) . '" autocomplete="off">
          <input type="hidden" name="csrf_token" value="' . escape_html($csrfToken) . '">
          <div class="space-y-2">
            <label class="text-sm font-medium text-foreground" for="' . escape_html($formKey) . '-username">Username</label>
            <input
              class="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20"
              id="' . escape_html($formKey) . '-username"
              name="username"
              type="text"
              minlength="3"
              maxlength="32"
              pattern="[A-Za-z0-9_.-]+"
              autocomplete="username"
              placeholder="mis. fxrdhan"
              required
            >
          </div>
          <div class="space-y-2">
            <div class="flex items-center justify-between gap-4">
              <label class="text-sm font-medium text-foreground" for="' . escape_html($formKey) . '-password">Password</label>
              <span class="text-xs text-muted-foreground">10-72 karakter</span>
            </div>
            <input
              class="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20"
              id="' . escape_html($formKey) . '-password"
              name="password"
              type="password"
              minlength="10"
              maxlength="72"
              autocomplete="' . escape_html($passwordAutocomplete) . '"
              placeholder="Minimal 1 huruf besar, kecil, dan angka"
              required
            >
          </div>
          <button
            class="inline-flex h-11 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20"
            type="submit"
          >' . escape_html($submitLabel) . '</button>
        </form>
      </section>';
}

function render_layout(string $title, string $content): string
{
    return '<!doctype html>
<html lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>' . escape_html($title) . '</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body class="min-h-screen bg-background text-foreground">
    <main>
      ' . $content . '
    </main>
  </body>
</html>';
}

function render_auth_page(?array $flash): string
{
    $content = '
      <section class="grid min-h-svh lg:grid-cols-2">
        <div class="flex flex-col gap-6 p-6 md:p-10">
          <div class="flex justify-center lg:justify-start">
            ' . render_brand() . '
          </div>
          <div class="flex flex-1 items-center justify-center">
            <div class="w-full max-w-md space-y-5">
              <div class="space-y-2 text-center lg:text-left">
                <p class="text-sm font-medium text-muted-foreground">Tampilan auth modern ala shadcn/ui, tetap jalan penuh di PHP.</p>
                <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Masuk atau buat akun baru</h1>
                <p class="text-sm leading-6 text-muted-foreground">
                  Form tetap aman dengan HTTPS, CSRF, prepared statements, penyimpanan password <span class="font-medium text-foreground">Argon2id</span>,
                  dan enkripsi username di database.
                </p>
              </div>
              ' . render_flash($flash) . '
              <div class="space-y-4">
                ' . render_auth_form(
                    'Login',
                    'Masuk untuk melihat halaman sambutan dengan username kamu.',
                    '/login.php',
                    'Masuk',
                    'current-password'
                ) . '
                ' . render_auth_form(
                    'Register',
                    'Buat akun baru dengan username unik dan password yang kuat.',
                    '/register.php',
                    'Daftar',
                    'new-password'
                ) . '
              </div>
              <p class="text-center text-xs leading-5 text-muted-foreground lg:text-left">
                Dengan melanjutkan, kamu sedang menguji implementasi keamanan login dalam satu container
                <span class="font-medium text-foreground">PHP + MySQL + HTTPS</span>.
              </p>
            </div>
          </div>
        </div>

        <div class="relative hidden overflow-hidden border-l bg-zinc-950 text-zinc-50 lg:block">
          <div class="absolute inset-0 bg-auth-pattern bg-auth-grid opacity-40"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.22),transparent_24%),linear-gradient(160deg,#09090b_5%,#18181b_45%,#27272a_100%)]"></div>
          <div class="relative flex h-full flex-col justify-between p-10">
            <div class="space-y-4">
              <div class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-zinc-200">
                Secure Auth Demo
              </div>
              <div class="max-w-xl space-y-4">
                <h2 class="text-4xl font-semibold tracking-tight">Autentikasi yang terasa modern, tapi backend-nya tetap PHP.</h2>
                <p class="text-base leading-7 text-zinc-300">
                  Saya dekatkan tampilannya ke auth template shadcn: tipografi rapat, card clean, split layout,
                  dan nuansa design system netral yang rapi saat dibuka di desktop maupun mobile.
                </p>
              </div>
            </div>

            <div class="max-w-xl rounded-3xl border border-white/10 bg-white/10 p-7 shadow-soft backdrop-blur">
              <p class="text-sm font-medium uppercase tracking-[0.22em] text-zinc-300">Security Snapshot</p>
              <ul class="mt-5 space-y-4 text-sm leading-6 text-zinc-100">
                <li class="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">Prepared statement untuk cegah SQL injection.</li>
                <li class="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">Password di-hash dengan Argon2id plus pepper.</li>
                <li class="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">Username disimpan terenkripsi dan lookup via HMAC.</li>
                <li class="rounded-2xl border border-white/10 bg-black/10 px-4 py-3">CSP, cookie aman, dan CSRF token aktif di semua form.</li>
              </ul>
              <blockquote class="mt-6 border-l border-white/20 pl-4 text-sm italic leading-6 text-zinc-300">
                “UI-nya mirip komponen modern, tapi tetap gampang dipresentasikan karena alurnya sederhana:
                register, login, lalu landing page sesuai hasil autentikasi.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>';

    return render_layout('Kamsis Secure Login', $content);
}

function render_welcome_page(string $username): string
{
    $content = '
      <section class="flex min-h-svh items-center justify-center bg-muted/40 p-6 md:p-10">
        <div class="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border bg-background shadow-soft lg:grid-cols-[1.15fr_0.85fr]">
          <div class="relative overflow-hidden bg-zinc-950 p-8 text-zinc-50 md:p-10">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_26%),linear-gradient(155deg,#09090b_10%,#18181b_52%,#27272a_100%)]"></div>
            <div class="relative flex h-full flex-col justify-between gap-10">
              <div class="space-y-5">
                ' . render_brand(true) . '
                <div class="space-y-3">
                  <p class="text-sm font-medium uppercase tracking-[0.24em] text-zinc-400">Autentikasi Berhasil</p>
                  <h1 class="text-4xl font-semibold tracking-tight">Selamat datang, ' . escape_html($username) . '</h1>
                  <p class="max-w-xl text-sm leading-7 text-zinc-300">
                    Session kamu sudah aktif dan disimpan aman memakai cookie <span class="font-medium text-white">HttpOnly</span>,
                    <span class="font-medium text-white">Secure</span>, dan <span class="font-medium text-white">SameSite=Strict</span>.
                  </p>
                </div>
              </div>
              <div class="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm leading-7 text-zinc-200 backdrop-blur">
                Username berhasil didekripsi dari data terenkripsi di database, jadi landing page tetap personal tanpa menyimpan
                data akun dalam bentuk asli.
              </div>
            </div>
          </div>

          <div class="flex items-center p-8 md:p-10">
            <div class="w-full space-y-6">
              <div class="space-y-2">
                <p class="text-sm font-medium text-muted-foreground">Status sistem</p>
                <h2 class="text-2xl font-semibold tracking-tight">Akun valid dan sesi aktif</h2>
                <p class="text-sm leading-6 text-muted-foreground">
                  Halaman ini menjadi bukti bahwa proses login, verifikasi password, dan pembacaan user dari MySQL berjalan normal.
                </p>
              </div>
              <div class="grid gap-3 text-sm text-muted-foreground">
                <div class="rounded-2xl border bg-card px-4 py-3">HTTPS aktif dan tersaji dengan sertifikat trusted untuk localhost.</div>
                <div class="rounded-2xl border bg-card px-4 py-3">Query user dilakukan dengan prepared statement PDO MySQL.</div>
                <div class="rounded-2xl border bg-card px-4 py-3">Input/output dibatasi dan di-escape untuk membantu mitigasi abuse dan XSS.</div>
              </div>
              <form method="post" action="/logout.php">
                <input type="hidden" name="csrf_token" value="' . escape_html(csrf_token()) . '">
                <button class="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:opacity-95" type="submit">Logout</button>
              </form>
            </div>
          </div>
        </div>
      </section>';

    return render_layout('Selamat Datang', $content);
}

function render_not_registered_page(): string
{
    $content = '
      <section class="flex min-h-svh items-center justify-center bg-muted/40 p-6 md:p-10">
        <div class="w-full max-w-2xl rounded-[2rem] border bg-background p-8 shadow-soft md:p-10">
          <div class="space-y-4">
            <div class="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Autentikasi Gagal
            </div>
            <h1 class="text-3xl font-semibold tracking-tight md:text-4xl">Anda belum terdaftar</h1>
            <p class="text-sm leading-7 text-muted-foreground">
              Username/password tidak cocok. Halaman ini sengaja tetap generik agar tidak membocorkan akun mana yang valid.
            </p>
          </div>
          <div class="mt-8 rounded-2xl border bg-muted/40 p-5 text-sm leading-7 text-muted-foreground">
            Kalau ingin lanjut ngetes, kembali ke form lalu coba register akun baru atau login dengan kredensial yang benar.
          </div>
          <div class="mt-8">
            <a class="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:opacity-95" href="/">Kembali ke form</a>
          </div>
        </div>
      </section>';

    return render_layout('Anda Belum Terdaftar', $content);
}

function render_error_page(string $title, string $description): string
{
    $content = '
      <section class="flex min-h-svh items-center justify-center bg-muted/40 p-6 md:p-10">
        <div class="w-full max-w-xl rounded-[2rem] border bg-background p-8 shadow-soft md:p-10">
          <div class="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Akses Ditolak
          </div>
          <h1 class="mt-4 text-3xl font-semibold tracking-tight">' . escape_html($title) . '</h1>
          <p class="mt-3 text-sm leading-7 text-muted-foreground">' . escape_html($description) . '</p>
          <a class="mt-8 inline-flex h-11 items-center justify-center rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:opacity-95" href="/">Kembali</a>
        </div>
      </section>';

    return render_layout($title, $content);
}
