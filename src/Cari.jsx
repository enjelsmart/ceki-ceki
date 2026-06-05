import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Cari() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const semuaEvent = [
    { id: 1, nama: "RAISA World Tour", tanggal: "15 Mei 2026", lokasi: "GBK, Jakarta", harga: "250K", kategori: "Konser", emoji: "🎵" },
    { id: 2, nama: "Final Liga 1", tanggal: "22 Mei 2026", lokasi: "SUGBK", harga: "150K", kategori: "Sport", emoji: "🏆" },
    { id: 3, nama: "Tech Summit 2026", tanggal: "1 Juni 2026", lokasi: "Jakarta Convention", harga: "100K", kategori: "Seminar", emoji: "💻" },
    { id: 4, nama: "Coldplay Indonesia", tanggal: "10 Juni 2026", lokasi: "GBK, Jakarta", harga: "500K", kategori: "Konser", emoji: "🎸" },
  ]

  const hasil = query.length > 0
    ? semuaEvent.filter(e =>
        e.nama.toLowerCase().includes(query.toLowerCase()) ||
        e.kategori.toLowerCase().includes(query.toLowerCase()) ||
        e.lokasi.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* Header */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-6">
        <h1 className="text-white font-bold text-lg mb-4">Cari Event</h1>
        <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-2">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            autoFocus
            placeholder="Cari event, konser, seminar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm text-gray-600 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-400 text-sm">✕</button>
          )}
        </div>
      </div>

      {/* Hasil */}
      <div className="px-6 mt-4">
        {query.length === 0 && (
          <div className="text-center mt-16">
            <span className="text-5xl">🔍</span>
            <p className="text-gray-400 text-sm mt-3">Ketik nama event, kategori, atau lokasi</p>
          </div>
        )}

        {query.length > 0 && hasil.length === 0 && (
          <div className="text-center mt-16">
            <span className="text-5xl">😕</span>
            <p className="text-gray-500 font-semibold mt-3">Event tidak ditemukan</p>
            <p className="text-gray-400 text-sm mt-1">Coba kata kunci lain</p>
          </div>
        )}

        {hasil.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs text-gray-400">{hasil.length} event ditemukan</p>
            {hasil.map((event) => (
              <div
                key={event.id}
                onClick={() => navigate("/pilih-tiket")}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 cursor-pointer"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {event.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm">{event.nama}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{event.tanggal} · {event.lokasi}</p>
                  <span className="text-xs bg-blue-100 text-[#1A56DB] px-2 py-0.5 rounded-full font-semibold">
                    {event.kategori}
                  </span>
                </div>
                <p className="font-bold text-[#1A56DB] text-sm">{event.harga}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around">
          {[
            { icon: "🏠", label: "Home", path: "/home", active: false },
            { icon: "🔍", label: "Cari", path: "/cari", active: true },
            { icon: "🎟️", label: "Tiket", path: "/home", active: false },
            { icon: "👤", label: "Profil", path: "/profil", active: false },
          ].map((item) => (
            <button key={item.label} onClick={() => navigate(item.path)} className="flex flex-col items-center gap-1">
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

export default Cari