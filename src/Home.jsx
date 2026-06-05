import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  const [kategoriAktif, setKategoriAktif] = useState("Konser")

  const events = [
    {
      id: 1,
      nama: "RAISA World Tour",
      tanggal: "15 Mei 2026",
      lokasi: "GBK, Jakarta",
      harga: "250K",
      kategori: "Konser",
      status: "available",
      emoji: "🎵"
    },
    {
      id: 2,
      nama: "Final Liga 1",
      tanggal: "22 Mei 2026",
      lokasi: "SUGBK",
      harga: "150K",
      kategori: "Sport",
      status: "onsale",
      emoji: "🏆"
    },
    {
      id: 3,
      nama: "Tech Summit 2026",
      tanggal: "1 Juni 2026",
      lokasi: "Jakarta Convention",
      harga: "100K",
      kategori: "Seminar",
      status: "available",
      emoji: "💻"
    },
    {
      id: 4,
      nama: "Coldplay Indonesia",
      tanggal: "10 Juni 2026",
      lokasi: "GBK, Jakarta",
      harga: "500K",
      kategori: "Konser",
      status: "available",
      emoji: "🎸"
    },
  ]

  const eventFiltered = events.filter(e => e.kategori === kategoriAktif)

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-200 text-sm">Halo, selamat datang 👋</p>
            <h1 className="text-white text-xl font-bold">Viktoria A.</h1>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1A56DB] font-bold text-sm">VA</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 bg-white rounded-2xl px-4 py-3 flex items-center gap-2">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Cari event, konser, seminar..."
            className="flex-1 text-sm text-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 -mt-8">

        {/* Kategori */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
          <p className="text-xs text-gray-400 font-semibold mb-3">Kategori</p>
          <div className="flex gap-2">
            {["Konser", "Sport", "Seminar"].map((kat) => (
              <button
                key={kat}
                onClick={() => setKategoriAktif(kat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                  kategoriAktif === kat
                    ? "bg-[#1A56DB] text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        {/* Event Populer */}
        <p className="text-sm font-bold text-gray-700 mb-3">Event Populer</p>
        <div className="space-y-3 pb-24">
          {eventFiltered.map((event) => (
            <div
              key={event.id}
              onClick={() => navigate("/detail-event")}
              className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 cursor-pointer active:scale-95 transition"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                {event.emoji}
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm">{event.nama}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{event.tanggal} · {event.lokasi}</p>
                <div className="flex items-center gap-2 mt-1">
                  {event.status === "onsale" ? (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-semibold">On Sale</span>
                  ) : (
                    <span className="text-xs bg-blue-100 text-[#1A56DB] px-2 py-0.5 rounded-full font-semibold">Tersedia</span>
                  )}
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-[#1A56DB] text-sm">{event.harga}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around">
          {[
            { icon: "🏠", label: "Home", path: "/home", active: true },
            { icon: "🔍", label: "Cari", path: "/cari", active: false },
            { icon: "🎟️", label: "Tiket", path: "/tiket-saya", active: false },
            { icon: "👤", label: "Profil", path: "/profil", active: false },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-xl">{item.icon}</span>
              <span className={`text-xs font-semibold ${item.active ? "text-[#1A56DB]" : "text-gray-400"}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home