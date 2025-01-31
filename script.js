// Inisialisasi peta
const map = L.map('map').setView([-5.4264, 122.6965], 11); // Koordinat Buton Tengah

// Tambahkan tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Data lokasi wisata budaya
const wisataBudaya = [
    {
        name: "Benteng Keraton Liya",
        lat: -5.4019,
        lon: 122.7233,
        description: `
            Benteng Keraton Liya adalah salah satu situs bersejarah yang menjadi simbol kekuasaan Kesultanan Buton. 
            Dibangun dengan teknik pertahanan yang canggih pada masanya, benteng ini tidak hanya berfungsi sebagai 
            tempat perlindungan tetapi juga sebagai pusat pemerintahan. Pengunjung bisa menikmati pemandangan 
            indah sambil belajar tentang sejarah dan kebudayaan Buton yang kaya.
        `,
        image: "assets/images/wisata1.jpeg"
    },
    {
        name: "Pantai Mutiara",
        lat: -5.4392,
        lon: 122.7035,
        description: `
            Pantai Mutiara terkenal dengan pasir putih yang halus dan air laut yang jernih. Pantai ini juga memiliki 
            nilai budaya tinggi karena sering digunakan oleh masyarakat setempat untuk upacara adat dan perayaan 
            kebudayaan. Pantai ini cocok untuk berlibur, bersantai, dan menikmati keindahan alam.
        `,
        image: "assets/images/wisata2.jpg"
    },
    {
        name: "Cagar Alam Wakatobi",
        lat: -5.4976,
        lon: 123.4468,
        description: `
            Wakatobi adalah taman nasional yang terkenal dengan keindahan bawah lautnya. Cagar alam ini tidak hanya 
            memiliki keanekaragaman hayati yang luar biasa tetapi juga kaya akan budaya lokal yang dipertahankan oleh 
            masyarakat setempat. Di sini, pengunjung bisa menyelam sambil belajar tentang tradisi maritim Buton.
        `,
        image: "assets/images/wisata3.jpg"
    },
    {
        name: "Taman Nasional Wakatobi",
        lat: -5.4976,
        lon: 123.4468,
        description: `
            Taman Nasional Wakatobi adalah salah satu taman nasional terpenting di Indonesia, terkenal dengan keindahan 
            bawah lautnya yang luar biasa. Terletak di Kabupaten Wakatobi, Sulawesi Tenggara, taman nasional ini menjadi 
            rumah bagi terumbu karang yang kaya dan berbagai spesies laut langka. Selain wisata laut, taman ini juga 
            menawarkan pemandangan alam yang menakjubkan dan nilai budaya yang tinggi bagi masyarakat setempat.
        `,
        image: "assets/images/wisata4.jpg"
    },
    {
        name: "Danau Maobu",
        lat: -5.4878,
        lon: 121.9394,
        description: `
            Danau Maobu terletak di Desa Lalibo, Kecamatan Mawasangka Tengah, Kabupaten Buton Tengah, Sulawesi Tenggara. 
            Danau ini memiliki air yang jernih dan berwarna biru, serta rasa payau akibat campuran air tawar dan air laut. 
            Keunikan ini tercipta karena air Laut Flores yang menyelinap menuju permandian tersebut. 
            Pada siang hari, air akan terlihat sangat biru dan segar. Meskipun tidak terlalu luas, fasilitas yang disediakan sudah cukup lengkap, 
            mulai dari lahan parkir, jalan setapak, anak tangga, gazebo, dan taman yang cantik. 
            Danau ini menjadi destinasi wisata yang menarik bagi wisatawan yang ingin menikmati keindahan alam dan ketenangan suasana.
        `,
        image: "assets/images/wisata5.jpg"
    },
    {
        name: "Pantai Nirwana",
        lat: -5.3870,
        lon: 122.7810,
        description: `
            Pantai Nirwana adalah salah satu pantai eksotis yang terletak di Buton. Dengan pasir putih yang lembut dan air laut yang jernih, 
            pantai ini cocok untuk berjemur, berenang, dan menikmati keindahan alam. Kawasan ini juga menawarkan pemandangan matahari terbenam 
            yang spektakuler. Pantai Nirwana adalah tempat yang sangat cocok untuk relaksasi atau berfoto dengan latar belakang alam yang menawan.
        `,
        image: "assets/images/wisata6.jpg"
    },
    {
        name: "Pantai Katembe",
        lat: -5.3591,
        lon: 122.7521,
        description: `
            Pantai Katembe dikenal dengan pemandangan lautnya yang luas dan hamparan pasir putih yang bersih. Pantai ini sangat populer 
            di kalangan wisatawan yang suka menikmati keindahan alam, serta menikmati berbagai aktivitas air. Pantai Katembe juga memiliki 
            pemandangan matahari terbenam yang menakjubkan.
        `,
        image: "assets/images/wisata7.jpg"
    },
    {
        name: "Hutan Lambusango",
        lat: -5.4567,
        lon: 122.8323,
        description: `
            Hutan Lambusango adalah kawasan hutan tropis yang terletak di Buton, yang merupakan habitat bagi berbagai flora dan fauna langka. 
            Hutan ini cocok bagi wisatawan yang tertarik pada petualangan alam, seperti trekking, observasi satwa, dan menjelajahi keindahan alam.
        `,
        image: "assets/images/wisata8.jpg"
    },
    {
        name: "Tanjung Pemali",
        lat: -5.3456,
        lon: 122.7950,
        description: `
            Tanjung Pemali adalah titik paling indah untuk menikmati pemandangan laut, tebing, dan pegunungan yang menakjubkan. 
            Tempat ini sangat cocok untuk foto-foto panorama yang memukau. Tanjung Pemali juga menawarkan suasana yang tenang dan 
            nyaman untuk bersantai sambil menikmati angin laut.
        `,
        image: "assets/images/wisata9.jpg"
    }
];

// Tambahkan marker untuk setiap lokasi wisata
wisataBudaya.forEach((wisata) => {
    const marker = L.marker([wisata.lat, wisata.lon]).addTo(map);
    marker.bindPopup(`
        <h3>${wisata.name}</h3>
        <p><strong>Deskripsi:</strong> ${wisata.description}</p>
        <img src="${wisata.image}" alt="${wisata.name}" style="width:100%; height:auto;"/>
    `);
});
