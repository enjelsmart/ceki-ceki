import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Antrean() {
  const navigate = useNavigate()
  const [fase, setFase] = useState("waiting") // "waiting" | "antrean"
  const [waitingHitung, setWaitingHitung] = useState(5)
  const [posisi, setPosisi] = useState(247)
  const [estimasi, setEstimasi] = useState(8)
  const total = 5840
  const sesiAman = 15

  // Waiting Room countdown
  useEffect(() => {
    if (fase !== "waiting") return
    const interval = setInterval(() => {
      setWaitingHitung(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setFase("antrean")
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [fase])

  // Antrean countdown
  useEffect(() => {
    if (fase !== "antrean") return
    const interval = setInterval(() => {
      setPosisi(prev => {
        if (prev <= 1) { clearInterval(interval); return 1 }
        return prev - 1
      })
      setEstimasi(prev => Math.max(1, prev - 0.1))
    }, 3000)
    return () => clearInterval(interval)
  }, [fase])

  const progress = ((total - posisi) / total) * 100

  if (fase === "waiting") {
    return (
      <div className="min-h-screen bg-[#1A56DB] flex flex-col items-center justify-center px-6">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-bold text-white">{waitingHitung}</span>
          </div>
          <h1 className="text-white font-bold text-xl mb-2">Waiting Room</h1>
          <p className="text-blue-200 text-sm mb-8">Mohon tunggu, sistem sedang memverifikasi aksesmu...</p>
          <div className="bg-white bg-opacity-10 rounded-2xl p-4 text-left space-y-2 max-w-xs mx-auto">
            <p className="text-white text-xs font-semibold">RAISA World Tour 2026</p>
            <p className="text-blue-200 text-xs">🎟️ VIP — Rp250.000</p>
            <p className="text-blue-200 text-xs">📍 GBK, Jakarta · 15 Mei 2026</p>
          </div>
          <p className="text-blue-300 text-xs mt-6">Jangan tutup halaman ini</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1A56DB] flex flex-col">

      {/* Header */}
      <div className="px-6 pt-10 pb-4 flex items-center gap-3">
        <button
          onClick={() => navigate("/home")}
          className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
        >
          <span className="text-white text-sm">←</span>
        </button>
        <div>
          <p className="text-blue-200 text-xs">Status Antreanmu</p>
          <h1 className="text-white font-bold text-sm">RAISA World Tour</h1>
        </div>
      </div>

      {/* Nomor Antrean */}
      <div className="flex flex-col items-center mt-6 mb-8">
        <div className="w-40 h-40 rounded-full border-4 border-white border-opacity-30 flex flex-col items-center justify-center bg-white bg-opacity-10">
          <span className="text-white text-6xl font-bold">{posisi}</span>
          <span className="text-blue-200 text-xs mt-1">dari {total.toLocaleString()}</span>
        </div>
        <div className="w-64 h-2 bg-white bg-opacity-20 rounded-full mt-6">
          <div
            className="h-2 bg-white rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Info Cards */}
      <div className="px-6 grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white bg-opacity-20 rounded-2xl p-4 text-center">
          <p className="text-white text-2xl font-bold">~{Math.round(estimasi)} mnt</p>
          <p className="text-blue-200 text-xs mt-1">Estimasi</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-2xl p-4 text-center">
          <p className="text-white text-2xl font-bold">{posisi}</p>
          <p className="text-blue-200 text-xs mt-1">Posisi</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-2xl p-4 text-center">
          <p className="text-white text-2xl font-bold">{total.toLocaleString()}</p>
          <p className="text-blue-200 text-xs mt-1">Total</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-2xl p-4 text-center">
          <p className="text-white text-2xl font-bold">{sesiAman} mnt</p>
          <p className="text-blue-200 text-xs mt-1">Sesi Aman</p>
        </div>
      </div>

      {/* Notifikasi */}
      <div className="px-6 mb-6">
        <div className="bg-white bg-opacity-10 rounded-2xl p-4 flex items-center gap-3">
          <span className="text-2xl">🔔</span>
          <div className="flex-1">
            <p className="text-white text-xs">Kami notif saat giliranmu tiba</p>
          </div>
          <button
            onClick={() => navigate("/pembayaran")}
            className="bg-white text-[#1A56DB] text-xs font-bold px-3 py-1.5 rounded-xl"
          >
            Aktifkan
          </button>
        </div>
      </div>

      {/* Lanjut Button */}
      <div className="px-6 mt-auto pb-10">
        <button
          onClick={() => navigate("/pembayaran")}
          className="w-full bg-white text-[#1A56DB] py-4 rounded-2xl font-bold text-sm"
        >
          Giliran Tiba — Lanjut Bayar 🎉
        </button>
      </div>

    </div>
  )
}

export default Antrean