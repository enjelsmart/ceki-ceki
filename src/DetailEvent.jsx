import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function DetailEvent() {
  const navigate = useNavigate()

  const [countdown, setCountdown] = useState({ jam: 0, menit: 0, detik: 5 })
  const [saleOpen, setSaleOpen] = useState(false)
  const [stok, setStok] = useState({ VIP: 142, Festival: 89, "CAT 1": 204, "CAT 3": 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        let { jam, menit, detik } = prev
        if (jam === 0 && menit === 0 && detik === 0) {
          setSaleOpen(true)
          clearInterval(interval)
          return prev
        }
        if (detik > 0) return { jam, menit, detik: detik - 1 }
        if (menit > 0) return { jam, menit: menit - 1, detik: 59 }
        return { jam: jam - 1, menit: 59, detik: 59 }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!saleOpen) return
    const interval = setInterval(() => {
      setStok(prev => ({
        VIP: Math.max(0, prev.VIP - Math.floor(Math.random() * 3)),
        Festival: Math.max(0, prev.Festival - Math.floor(Math.random() * 4)),
        "CAT 1": Math.max(0, prev["CAT 1"] - Math.floor(Math.random() * 2)),
        "CAT 3": 0,
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [saleOpen])

  const tiketList = [
    { kategori: "VIP", harga: "Rp250.000" },
    { kategori: "Festival", harga: "Rp200.000" },
    { kategori: "CAT 1", harga: "Rp180.000" },
    { kategori: "CAT 3", harga: "Rp120.000" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* Header */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-6 relative">
        <button
          onClick={() => navigate("/home")}
          className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4"
        >
          <span className="text-white text-sm">←</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
            🎵
          </div>
          <div>
            <span className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">Konser</span>
            <h1 className="text-white font-bold text-xl mt-1">RAISA World Tour</h1>
            <p className="text-blue-200 text-sm">2026</p>
          </div>
        </div>
      </div>

      {/* Countdown / Sale Banner */}
      <div className="px-6 mt-4">
        {!saleOpen ? (
          <div className="bg-orange-500 rounded-2xl p-4">
            <p className="text-white text-xs font-semibold mb-2">⏳ Penjualan dibuka dalam</p>
            <div className="flex gap-3">
              {[
                { val: String(countdown.jam).padStart(2, "0"), label: "Jam" },
                { val: String(countdown.menit).padStart(2, "0"), label: "Menit" },
                { val: String(countdown.detik).padStart(2, "0"), label: "Detik" },
              ].map((item) => (
                <div key={item.label} className="bg-white bg-opacity-20 rounded-xl px-4 py-2 text-center">
                  <p className="text-white font-bold text-2xl">{item.val}</p>
                  <p className="text-orange-100 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-green-500 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-white font-bold text-sm">Penjualan Sedang Berlangsung!</p>
              <p className="text-green-100 text-xs">Tiket terbatas — beli sekarang sebelum habis</p>
            </div>
          </div>
        )}
      </div>

      {/* Info Utama */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
          {[
            { icon: "📅", label: "Tanggal", value: "Sabtu, 15 Mei 2026" },
            { icon: "🕖", label: "Waktu", value: "19.00 WIB — Selesai" },
            { icon: "📍", label: "Lokasi", value: "Gelora Bung Karno, Jakarta" },
            { icon: "👥", label: "Kapasitas", value: "50.000 penonton" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-semibold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deskripsi */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-800 mb-2">Tentang Event</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            RAISA World Tour 2026 hadir kembali di Jakarta! Nikmati penampilan memukau
            Raisa Andriana dengan setlist terbaru dan produksi panggung bertaraf internasional.
            Jangan lewatkan momen tak terlupakan bersama ribuan penonton lainnya.
          </p>
        </div>
      </div>

      {/* Syarat */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-800 mb-2">Syarat & Ketentuan</h2>
          <div className="space-y-2">
            {[
              "Tiket tidak dapat direfund atau ditukar",
              "Wajib membawa e-tiket (QR Code)",
              "Dilarang membawa kamera profesional",
              "Gate dibuka 2 jam sebelum acara",
              "Usia minimal 13 tahun",
            ].map((syarat, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-[#1A56DB] text-xs mt-0.5">•</span>
                <p className="text-xs text-gray-500">{syarat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stok Tiket */}
      <div className="px-6 mt-4">
        <div className="bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3">Kategori Tiket</h2>
          <div className="space-y-3">
            {tiketList.map((t) => {
              const sisa = stok[t.kategori]
              const habis = sisa === 0
              const hampirHabis = sisa > 0 && sisa < 50
              return (
                <div key={t.kategori} className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${habis ? "text-gray-400" : "text-gray-800"}`}>
                      {t.kategori}
                    </p>
                    {!habis && (
                      <p className={`text-xs ${hampirHabis ? "text-red-500 font-semibold" : "text-gray-400"}`}>
                        {hampirHabis ? `⚠️ Sisa ${sisa} tiket!` : `Tersedia ${sisa} tiket`}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <p className={`text-sm font-bold ${habis ? "text-gray-400" : "text-red-500"}`}>
                      {t.harga}
                    </p>
                    {habis && (
                      <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">Habis</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Tombol Beli */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4">
        <button
          onClick={() => saleOpen && navigate("/pilih-tiket")}
          disabled={!saleOpen}
          className={`w-full py-4 rounded-2xl font-bold text-sm transition ${
            saleOpen
              ? "bg-[#1A56DB] text-white"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {saleOpen ? "Beli Tiket Sekarang 🔥" : "⏳ Menunggu Penjualan Dibuka..."}
        </button>
      </div>

    </div>
  )
}

export default DetailEvent