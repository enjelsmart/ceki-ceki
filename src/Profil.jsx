import { useNavigate } from "react-router-dom"

function Profil() {
  const navigate = useNavigate()

  const riwayatTiket = [
    {
      id: 1,
      event: "RAISA World Tour 2026",
      tanggal: "15 Mei 2026",
      kategori: "VIP",
      harga: "Rp250.000",
      status: "Aktif",
      kode: "#TRX-2026-08471",
      emoji: "🎵"
    },
    {
      id: 2,
      event: "Final Liga 1",
      tanggal: "22 Mei 2026",
      kategori: "CAT 2",
      harga: "Rp150.000",
      status: "Aktif",
      kode: "#TRX-2026-08472",
      emoji: "🏆"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* Header */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-20">
        <h1 className="text-white font-bold text-lg mb-6">Profil Saya</h1>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-3">
            <span className="text-[#1A56DB] font-bold text-2xl">VA</span>
          </div>

          <h2 className="text-white font-bold text-xl">
            Viktoria Angelita
          </h2>

          <p className="text-blue-200 text-sm mt-1">
            viktoria@email.com
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 -mt-8 mb-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-[#1A56DB] font-bold text-2xl">2</p>
            <p className="text-gray-400 text-xs mt-1">Tiket Aktif</p>
          </div>

          <div className="text-center border-x border-gray-100">
            <p className="text-[#1A56DB] font-bold text-2xl">5</p>
            <p className="text-gray-400 text-xs mt-1">Total Event</p>
          </div>

          <div className="text-center">
            <p className="text-[#1A56DB] font-bold text-2xl">0</p>
            <p className="text-gray-400 text-xs mt-1">Refund</p>
          </div>
        </div>
      </div>

      {/* Info Akun */}
      <div className="px-6 mb-4">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {[
            {
              icon: "👤",
              label: "Nama Lengkap",
              value: "Viktoria Angelita Setiabudi"
            },
            {
              icon: "📧",
              label: "Email",
              value: "viktoria@email.com"
            },
            {
              icon: "📱",
              label: "No. Telepon",
              value: "+62 812 3456 7890"
            },
            {
              icon: "📍",
              label: "Kota",
              value: "Surabaya, Jawa Timur"
            },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-4 py-3 ${
                i !== arr.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>

              <div className="flex-1">
                <p className="text-xs text-gray-400">
                  {item.label}
                </p>

                <p className="text-sm font-semibold text-gray-800">
                  {item.value}
                </p>
              </div>

              <span className="text-gray-300 text-sm">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Riwayat Tiket */}
      <div className="px-6 mb-4">
        <p className="text-sm font-bold text-gray-700 mb-3">
          Riwayat Tiket
        </p>

        <div className="space-y-3">
          {riwayatTiket.map((tiket) => (
            <div
              key={tiket.id}
              className="bg-white rounded-2xl shadow-sm p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {tiket.emoji}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-gray-800">
                    {tiket.event}
                  </h3>

                  <p className="text-xs text-gray-400 mt-0.5">
                    {tiket.tanggal} · {tiket.kategori}
                  </p>

                  <p className="text-xs text-gray-400">
                    {tiket.kode}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold text-[#1A56DB]">
                    {tiket.harga}
                  </p>

                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold">
                    {tiket.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu About Us */}
      <div className="px-6 mb-4">
        <button
          onClick={() => navigate("/about-us")}
          className="w-full bg-white rounded-2xl shadow-sm p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">ℹ️</span>

            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">
                Tentang Aplikasi
              </p>

              <p className="text-xs text-gray-400">
                Informasi aplikasi dan tim pengembang
              </p>
            </div>
          </div>

          <span className="text-gray-300">›</span>
        </button>
      </div>

      {/* Tombol Logout */}
      <div className="px-6 mb-6">
        <button
          onClick={() => navigate("/login")}
          className="w-full border-2 border-red-400 text-red-400 py-3 rounded-2xl font-bold text-sm hover:bg-red-50 transition"
        >
          Keluar dari Akun
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around">
          {[
            {
              icon: "🏠",
              label: "Home",
              path: "/home",
              active: false
            },
            {
              icon: "🔍",
              label: "Cari",
              path: "/cari",
              active: false
            },
            {
              icon: "🎟️",
              label: "Tiket",
              path: "/tiket-saya",
              active: false
            },
            {
              icon: "👤",
              label: "Profil",
              path: "/profil",
              active: true
            },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-xl">{item.icon}</span>

              <span
                className={`text-xs font-semibold ${
                  item.active
                    ? "text-[#1A56DB]"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Profil