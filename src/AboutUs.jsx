import { useNavigate } from "react-router-dom"

function AboutUs() {
  const navigate = useNavigate()

  const anggotaTim = [
    {
      nama: "Viktoria Angelita Setiabudi",
      nim: "25051204443",
      peran: "Project Manager & Full Stack Developer",
      inisial: "VA",
      deskripsi:
        "Project Manager & Full Stack Developer",
      lead: true,
    },
    {
      nama: "Azka Maristza Assadel",
      nim: "25051204262",
      peran: "UI/UX Designer",
      inisial: "AM",
      deskripsi: "Anggota tim kelompok 2.",
      lead: false,
    },
    {
      nama: "Fakhrur Rohman",
      nim: "25051204373",
      peran: "Quality Assurance",
      inisial: "FR",
      deskripsi: "Anggota tim kelompok 2.",
      lead: false,
    },
  ]

  const fiturUtama = [
    { icon: "🎟️", label: "Antrean Virtual Real-time" },
    { icon: "💳", label: "Pembayaran Multi-metode" },
    { icon: "📱", label: "E-Tiket & QR Code" },
    { icon: "🔔", label: "Notifikasi Giliran" },
    { icon: "🔍", label: "Pencarian Event" },
    { icon: "👤", label: "Manajemen Profil" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 pb-10">

      {/* Header */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-16 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-white opacity-10" />

        <button
          onClick={() => navigate("/profil")}
          className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6"
        >
          <span className="text-white text-sm">←</span>
        </button>

        <div className="flex flex-col items-center text-center relative z-10">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-4">
            <span className="text-4xl">🎟️</span>
          </div>

          <h1 className="text-white font-bold text-2xl">
            Ceki Ceki
          </h1>

          <p className="text-blue-200 text-sm mt-1">
            War Tiket Online
          </p>

          <span className="mt-3 bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full">
            v1.0.0
          </span>
        </div>
      </div>

      {/* Tagline */}
      <div className="px-6 -mt-6">
        <div className="bg-white rounded-2xl shadow-sm p-5 text-center">
          <p className="text-gray-600 text-sm leading-relaxed italic">
            "Platform antrean virtual untuk pembelian tiket event secara adil,
            cepat, dan terstruktur — tanpa perlu rebutan, tanpa perlu khawatir."
          </p>
        </div>
      </div>

      {/* Fitur Utama */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3">
            ✨ Fitur Utama
          </h2>

          <div className="grid grid-cols-2 gap-2">
            {fiturUtama.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 bg-blue-50 rounded-xl px-3 py-2"
              >
                <span>{f.icon}</span>
                <p className="text-xs font-semibold text-gray-700">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3">
            🛠️ Teknologi
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              "React.js",
              "Tailwind CSS",
              "React Router",
              "Vite",
              "Node.js",
              "PostgreSQL",
              "Redis",
              "Midtrans",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tim Pengembang */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-800 mb-4">
            👥 Tim Pengembang
          </h2>

          <div className="space-y-4">
            {anggotaTim.map((anggota) => (
              <div
                key={anggota.nim}
                className={`rounded-2xl p-4 ${
                  anggota.lead ? "bg-[#1A56DB]" : "bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      anggota.lead ? "bg-white" : "bg-blue-100"
                    }`}
                  >
                    <span className="font-bold text-[#1A56DB]">
                      {anggota.inisial}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p
                        className={`font-bold ${
                          anggota.lead
                            ? "text-white"
                            : "text-gray-800"
                        }`}
                      >
                        {anggota.nama}
                      </p>

                      {anggota.lead && (
                        <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full font-bold">
                          ⭐ Lead
                        </span>
                      )}
                    </div>

                    <p
                      className={`text-xs ${
                        anggota.lead
                          ? "text-blue-200"
                          : "text-gray-400"
                      }`}
                    >
                      {anggota.nim}
                    </p>

                    <p
                      className={`text-xs font-semibold ${
                        anggota.lead
                          ? "text-blue-100"
                          : "text-[#1A56DB]"
                      }`}
                    >
                      {anggota.peran}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-xs ${
                    anggota.lead
                      ? "text-blue-200"
                      : "text-gray-500"
                  }`}
                >
                  {anggota.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Informasi Akademik */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3">
            🎓 Informasi Akademik
          </h2>

          <div className="space-y-3">
            {[
              {
                icon: "📚",
                label: "Mata Kuliah",
                value: "Rekayasa Perangkat Lunak",
              },
              {
                icon: "🏫",
                label: "Universitas",
                value: "Universitas Negeri Surabaya",
              },
              {
                icon: "👨‍🏫",
                label: "Dosen",
                value: "Saifudin, S.Kom., M.Kom.",
              },
              {
                icon: "📅",
                label: "Tahun Akademik",
                value: "2025 / 2026",
              },
              {
                icon: "👨‍👩‍👧",
                label: "Kelompok",
                value: "Kelompok 2",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span>{item.icon}</span>

                <div>
                  <p className="text-xs text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 mt-4">
        <div className="bg-[#1A56DB] rounded-2xl p-4 text-center">
          <p className="text-white font-bold">
            Ceki Ceki © 2026
          </p>
          <p className="text-blue-200 text-xs mt-1">
            Dibuat dengan ❤️ oleh Kelompok 2
          </p>
        </div>
      </div>

    </div>
  )
}

export default AboutUs