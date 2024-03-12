### Nama : Brian Mohamad Safiudin
### NIM : 2141720133
### Kelas : TI-3A
---

# Praktikum 1: Event Handler

`React/Nextjs` memiliki event handler untuk merespon event yang dilakukan oleh pengguna di sebuah halaman website. Untuk menambahkan event handler, pertama-tama kita akan mendefinisikan sebuah fungsi dan kemudian mengopernya sebagai prop ke tag JSX yang sesuai.

## Langkah 1
#### Kita mencoba membuat tombol sederhana yang belum bisa melakukan apa-apa alias belum kita buat event handler untuk tombol tersebut. Sebagai contoh, berikut adalah sebuah tombol yang belum melakukan apa pun.

![Screenshot P1](assets-report/praktikum1langkah1.jpg)

## Langkah 2
#### Kita bisa menambahkan event pada tombol tersebut. Seperti contoh kita buat ketika tombol di klik, akan memunculkan notif/alert.

- Deklarasikan sebuah fungsi bernama `handleClick` di dalam komponen Button kita.
- Implementasikan logika di dalam fungsi tersebut (gunakan `alert` untuk menampilkan pesan).
- Tambahkan handler `onClick={handleClick}` ke tag JSX `< button >`

Kita butuh mengatur agar komponen yang kita gunakan menjadi komponen client. Untuk menjadikan komponen client, kita cukup memberikan perintah ini `"use client";` pada baris pertama file `page.tsx`

Kita mendefinisikan fungsi `handleClick` dan kemudian mengopernya sebagai prop ke `< button >`. Method handleClick adalah sebuah event handler pada tombol tersebut.

Method `event handle` HARUS dioper (ditulis nama fungsinya, tanpa tanda kurung `()`), bukan dipanggil/call (nama fungsi ditulis dengan tanda kurung `()`).

![Screenshot P1](assets-report/praktikum1langkah2a.jpg)

#### Selain itu, sebagai alternatif, Kita juga dapat mendefinisikan event handler secara inline dalam JSX secara langsung seperti berikut

```tsx
    return (
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            // onMouseOver={handleMouseOver}
            onMouseLeave={() => {
                    alert("Loh, Brian kok sudah pergi!!!")
                }
            }
        >
            Ini tombol Brian
        </button>
    )
```

![Screenshot P1](assets-report/praktikum1langkah2b.jpg)

---

# Praktikum 2:

Pada `component`, hanya ada 1 fungsi yang memiliki `default` !

Parameter `isiPesan` dan `namaTombol` bisa diisi oleh layout yang ada di `page.tsx` nanti, sehingga komponen `Tombol_2` bernilai dinamis.

![Screenshot P2](assets-report/praktikum2.jpg)

#### Jelaskan mengapa bisa seperti itu?

- Karena pada parameter `isiPesan` dan `namaTombol` bisa diisi oleh tata letak (layout) yang ada di file `page.tsx`. Ini berarti bahwa nilai untuk kedua parameter tersebut akan ditentukan `dinamis` oleh komponen yang menggunakan tombol tersebut di dalam `page.tsx`.

---

# Praktikum 3: Propagation

## Langkah 1 - Start Propagation
#### Jalankan di browser, coba klik Tombol-1, dan amati apa yang terjadi?

![Screenshot P3](assets-report/praktikum3langkah1a.jpg)
![Screenshot P3](assets-report/praktikum3langkah1b.jpg)

- Kita akan disuguhkan dengan pesan/alert sebanyak 2 kali, yaitu Pesan `"Child Element : Tombol-1"` dan pesan `"Parent Element : Div"`.

- Hal ini terjadi karena baik untuk element `div maupun button memiliki event yang sama yaitu onClick`, sehingga ketika button diklik maka event handler untuk onClick pada button akan dijalankan. Kemudian baru event handler dari parent (element div) akan dijalankan.

## Langkah 2 - Stop Propagation

#### Objek event dapat memungkinkan untuk menghentikan propagasi. Jika kita ingin mencegah sebuah event untuk mencapai komponen induknya (propagation), Kita harus memanggil e.stopPropagation() untuk mencegah propagasi.

```tsx
    return (
        <button
            className="bg-green-400 hover:bg-green-700 text-white p-2 rounded m-2"
            onClick={(e) => {
                    e.stopPropagation()
                    alert(isiPesan)
                }
            }>
            {namaTombol}
        </button>
    );
```

![GIF P3](assets-report/praktikum3langkah2.gif)

---

# Praktikum 4:

## Langkah 1 - Membuat File Data Dummy
#### Sekarang coba di browser dan klik tombol "Artikel Selanjutnya" dan perhatikan apa yang terjadi?

![Screenshot P4](assets-report/praktikum4langkah1.jpg)

- Ya, tidak terjadi apa-apa 😀. Karena kita belum membuat event handler untuk tombol tersebut.

Event handler `handleClick` memperbarui nilai variabel `index`. Namun dua hal mencegah pembaruan tersebut ditampilkan ke pengguna:

- Variabel lokal tidak dipertahankan antar-render. Saat React me-render komponen ini untuk kedua kalinya, react membuat ulang dari awal, sehingga `index` tetap bernilai 0 dan react tidak memperhatikan adanya perubahan ke variabel `index` tersebut.
- `Perubahan terhadap variabel lokal tidak memicu render`. React tidak menyadari kalau dia perlu melakukan render ulang dengan data yang baru.

Untuk memperbarui komponen dengan data baru, dua hal perlu terjadi:

- `Mempertahankan` data antar-render.
- `Memicu` React untuk merender ulang komponennya dengan data baru.

Dua hal tersebut bisa dicapai dengan Hook `useState`:

- Sebuah `variabel state` untuk mempertahankan data antar-render.
- Sebuah `fungsi state setter` untuk memperbarui variabel dan memicu React untuk merender ulang komponen.

## Langkah 2 - Membuat Variabel State
#### Jalankan pada browser dan amati apa yang terjadi?

![GIF P4](assets-report/praktikum4langkah2.gif)

- ketika `komponen` tersebut dijalankan di browser, ketika tombol yang sesuai diklik, `variabel state index` akan bertambah satu setiap kali handleClick dipanggil. Ini akan menyebabkan perubahan pada tampilan atau perilaku `komponen Gallery`, tergantung pada bagaimana variabel state tersebut digunakan dalam komponen tersebut.

