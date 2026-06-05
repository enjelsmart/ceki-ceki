import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Pembayaran() {
  const navigate = useNavigate()
  const [metodeDipilih, setMetodeDipilih] = useState("transfer")
  const [waktu, setWaktu] = useState(600)

  useEffect(() => {
    const interval = setInterval(() => {
      setWaktu(prev => {
        if (prev <= 0) {
          clearInterval(interval)
          navigate("/home")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatWaktu = (detik) => {
    const m = Math.floor(detik / 60).toString().padStart(2, "0")
    const s = (detik % 60).toString().padStart(2, "0")
    return `${m}:${s}`
  }

  const metode = [
    { id: "transfer", label: "Transfer Bank", sub: "BCA, Mandiri, BNI", icon: "🏦" },
    { id: "kartu", label: "Kartu Kredit", sub: "Visa, Mastercard", icon: "💳" },
    { id: "ewallet", label: "E-Wallet", sub: "GoPay, OVO, Dana", icon: "📱" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => navigate("/antrean")}
            className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-sm">←</span>
          </button>
          <h1 className="text-white font-bold">Selesaikan Pembayaran</h1>
        </div>

        {/* Info Event */}
        <div className="bg-white bg-opacity-20 rounded-2xl p-4">
          <p className="text-blue-200 text-xs">RAISA World Tour · 15 Mei</p>
          <p className="text-white text-xs mt-0.5">2x Tiket VIP · GBK Jakarta</p>
          <p className="text-white text-3xl font-bold mt-2">Rp500.000</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-300 text-xs">⏱</span>
            <span className="text-yellow-300 text-xs font-bold">
              Selesaikan dalam {formatWaktu(waktu)}
            </span>
          </div>
        </div>
      </div>

      {/* Metode Pembayaran */}
      <div className="px-6 mt-4">
        <p className="text-xs font-bold text-gray-500 mb-3">METODE PEMBAYARAN</p>
        <div className="space-y-3">
          {metode.map((m) => (
            <div
              key={m.id}
              onClick={() => setMetodeDipilih(m.id)}
              className={`bg-white rounded-2xl p-4 flex items-center gap-3 cursor-pointer border-2 transition ${
                metodeDipilih === m.id ? "border-[#1A56DB]" : "border-transparent"
              }`}
            >
              <span className="text-2xl">{m.icon}</span>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">{m.label}</p>
                <p className="text-xs text-gray-400">{m.sub}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                metodeDipilih === m.id ? "border-[#1A56DB]" : "border-gray-300"
              }`}>
                {metodeDipilih === m.id && (
                  <div className="w-3 h-3 rounded-full bg-[#1A56DB]" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol Bayar */}
      <div className="px-6 mt-6">
        <button
          onClick={() => navigate("/sukses")}
          className="w-full bg-[#1A56DB] text-white py-4 rounded-2xl font-bold text-sm"
        >
          Bayar Sekarang
        </button>
      </div>

    </div>
  )
}

export default Pembayaran