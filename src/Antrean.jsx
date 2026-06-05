import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Antrean() {
  const navigate = useNavigate()
  const [posisi, setPosisi] = useState(247)
  const [estimasi, setEstimasi] = useState(8)
  const total = 5840
  const sesiAman = 15

  useEffect(() => {
    const interval = setInterval(() => {
      setPosisi(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          return 1
        }
        return prev - 1
      })
      setEstimasi(prev => Math.max(1, prev - 0.1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const progress = ((total - posisi) / total) * 100

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

        {/* Progress Bar */}
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