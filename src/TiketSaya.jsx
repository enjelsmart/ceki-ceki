import { useNavigate } from "react-router-dom"

function TiketSaya() {
  const navigate = useNavigate()

  const tiketList = [
    {
      id: 1,
      event: "RAISA World Tour 2026",
      tanggal: "Sabtu, 15 Mei 2026",
      waktu: "19.00 WIB",
      lokasi: "GBK, Jakarta",
      kategori: "VIP",
      kursi: "A-114",
      gate: "Gate 3",
      kode: "CCK-2026-VIP-A114",
      trx: "#TRX-2026-08471",
      harga: "Rp250.000",
      status: "aktif",
      emoji: "🎵"
    },
    {
      id: 2,
      event: "Final Liga 1",
      tanggal: "Kamis, 22 Mei 2026",
      waktu: "20.00 WIB",
      lokasi: "SUGBK",
      kategori: "CAT 2",
      kursi: "B-220",
      gate: "Gate 5",
      kode: "CCK-2026-CAT2-B220",
      trx: "#TRX-2026-08472",
      harga: "Rp150.000",
      status: "aktif",
      emoji: "🏆"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* Header */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-6">
        <h1 className="text-white font-bold text-lg">Tiket Saya</h1>
        <p className="text-blue-200 text-sm mt-1">{tiketList.length} tiket aktif</p>
      </div>

      {/* List Tiket */}
      <div className="px-6 mt-4 space-y-4">
        {tiketList.map((tiket) => (
          <div key={tiket.id} className="bg-white rounded-3xl shadow-sm overflow-hidden">

            {/* Header Tiket */}
            <div className="bg-[#1A56DB] px-5 py-4 flex items-center gap-3">
              <span className="text-2xl">{tiket.emoji}</span>
              <div className="flex-1">
                <h2 className="text-white font-bold text-sm">{tiket.event}</h2>
                <p className="text-blue-200 text-xs mt-0.5">{tiket.tanggal} · {tiket.waktu}</p>
              </div>
              <span className="text-xs bg-green-400 text-white px-2 py-1 rounded-full font-bold">Aktif</span>
            </div>

            {/* Info Tiket */}
            <div className="px-5 py-4 grid grid-cols-2 gap-3">
              {[
                { label: "LOKASI", value: tiket.lokasi },
                { label: "KATEGORI", value: tiket.kategori },
                { label: "KURSI", value: tiket.kursi },
                { label: "PINTU", value: tiket.gate },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="text-sm font-bold text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Garis Putus */}
            <div className="flex items-center px-4">
              <div className="w-4 h-4 rounded-full bg-gray-50 -ml-2" />
              <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-2" />
              <div className="w-4 h-4 rounded-full bg-gray-50 -mr-2" />
            </div>

            {/* QR Code */}
            <div className="px-5 py-4 flex flex-col items-center">
              <div className="w-28 h-28 bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-sm ${[0,2,4,6,8].includes(i) ? "bg-gray-800" : "bg-white"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 font-mono">{tiket.kode}</p>
              <p className="text-xs text-gray-400 font-mono">{tiket.trx}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
        <div className="flex justify-around">
          {[
            { icon: "🏠", label: "Home", path: "/home", active: false },
            { icon: "🔍", label: "Cari", path: "/cari", active: false },
            { icon: "🎟️", label: "Tiket", path: "/tiket-saya", active: true },
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

export default TiketSaya