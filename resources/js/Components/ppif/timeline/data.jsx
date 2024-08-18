const days = [
    {
        day: 0,
        dayName: ["Briefing", "Day"],
        date: "Senin, 19 Agustus 2024",
        time: "12:45 WIB",
        location: "Online Zoom",
        Description: () => (
            <span>
                <strong className="font-bold">Briefing Day</strong> merupakan
                momen penting bagi teman-teman mahasiswa baru untuk
                mempersiapkan diri menghadapi hari Perkenalan Prodi Informatika
                2024. Pada hari briefing, kalian akan menerima berbagai materi
                penting yang bermanfaat juga berkenalan dengan teman-teman
                lainnya. Ini adalah langkah awal yang sangat penting untuk
                memastikan teman teman siap mengikuti seluruh rangkaian kegiatan
                PPIF 2024.
            </span>
        ),
        necessities: [
            {
                name: "Polo Putih",
                imageSrc: "/ppif/images/timeline/polo_putih.webp",
            },
            {
                name: "Device",
                imageSrc: "/ppif/images/timeline/device.webp",
            },
            { name: "Zoom", imageSrc: "/ppif/images/timeline/zoom.webp" },
            { name: "Buku", imageSrc: "/ppif/images/timeline/buku_tulis.webp" },
            { name: "Pulpen", imageSrc: "/ppif/images/timeline/pulpen.webp" },
        ],
    },
    {
        day: 1,
        dayName: ["D-Day", "PPIF"],
        date: "Selasa, 20 Agustus 2024",
        time: "10:00 WIB",
        location: "Lecture Theatre Gedung D UMN",
        Description: () => (
            <span>
                <strong className="font-bold">D-Day PPIF 2024</strong> adalah
                hari yang sangat dinantikan oleh teman-teman Informatika, karena
                untuk pertama kalinya kalian akan bertemu secara <i>offline</i>.
                Pada hari ini, kalian juga akan bertemu dengan alumni
                Informatika UMN yang telah sukses di berbagai bidang. Ini akan
                menjadi kesempatan emas untuk berjejaring dan berbincang
                langsung dengan para alumni yang siap berbagi pengalaman, tips,
                dan inspirasi mengenai perjalanan mereka di dunia informatika.
            </span>
        ),
        necessities: [
            {
                name: "Polo Orange",
                imageSrc: "/ppif/images/timeline/polo_orange.webp",
            },
            {
                name: "Jeans Hitam",
                imageSrc: "/ppif/images/timeline/jeans_hitam.webp",
            },
            { name: "Sepatu", imageSrc: "/ppif/images/timeline/sepatu.webp" },
            {
                name: "Botol Minum",
                imageSrc: "/ppif/images/timeline/botol_minum.webp",
            },
            { name: "Tas", imageSrc: "/ppif/images/timeline/tas.webp" },
            { name: "Bekal", imageSrc: "/ppif/images/timeline/bekal.webp" },
            { name: "Buku", imageSrc: "/ppif/images/timeline/buku_tulis.webp" },
            { name: "Pulpen", imageSrc: "/ppif/images/timeline/pulpen.webp" },
        ],
    },
    {
        day: 2,
        dayName: ["HMIF", "Execution Time"],
        date: "Sabtu, 24 Agustus 2024",
        time: "07:25 WIB",
        location: "Lecture Theatre Gedung D UMN",
        Description: () => (
            <span>
                <strong className="font-bold">HMIF Execution Time</strong>{" "}
                adalah momen di mana teman-teman Informatika dapat
                mengaplikasikan secara langsung semua materi yang telah diterima
                selama sesi pembekalan sebelumnya. Hari ini adalah waktu yang
                tepat untuk mengekspresikan diri dan berkolaborasi dengan
                teman-teman semua dalam suasana yang dinamis dan mendukung. HMIF
                Execution Time mendorong teman teman untuk membangun kepercayaan
                diri dan merasakan pengalaman langsung sebagai bagian dari
                mahasiswa Informatika.
            </span>
        ),
        necessities: [
            {
                name: "Kaos Putih Polos",
                imageSrc: "/ppif/images/timeline/kaos_putih_polos.webp",
            },
            {
                name: "Jeans Hitam",
                imageSrc: "/ppif/images/timeline/jeans_hitam.webp",
            },
            { name: "Sepatu", imageSrc: "/ppif/images/timeline/sepatu.webp" },
            {
                name: "Botol Minum",
                imageSrc: "/ppif/images/timeline/botol_minum.webp",
            },
            { name: "Tas", imageSrc: "/ppif/images/timeline/tas.webp" },
            { name: "Bekal", imageSrc: "/ppif/images/timeline/bekal.webp" },
            { name: "Buku", imageSrc: "/ppif/images/timeline/buku_tulis.webp" },
            { name: "Pulpen", imageSrc: "/ppif/images/timeline/pulpen.webp" },
        ],
    },
];

export default days;
