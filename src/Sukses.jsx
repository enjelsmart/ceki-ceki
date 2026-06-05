import { useNavigate } from "react-router-dom"

function Sukses() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Success Banner */}
      <div className="bg-[#1A56DB] px-6 pt-10 pb-20 flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
          <span className="text-4xl">✅</span>
        </div>
        <h1 className="text-white text-2xl font-bold">Berhasil!</h1>
        <p className="text-blue-200 text-sm mt-1 text-center">
          Tiketmu sudah siap.{"\n"}E-tiket dikirim ke email.
        </p>
      </div>

      {/* E-Tiket Card */}
      <div className="px-6 -mt-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Header Tiket */}
          <div className="bg-[#1A56DB] px-6 py-4">
            <p className="text-blue-200 text-xs">E-Tiket Saya</p>
            <h2 className="text-white font-bold text-lg">RAISA World Tour 2026</h2>
            <p className="text-blue-200 text-xs mt-0.5">Sabtu, 15 Mei 2026 · 19.00 · GBK</p>
          </div>

          {/* Info Tiket */}
          <div className="px-6 py-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400">NAMA</p>
              <p className="text-sm font-bold text-gray-800">Viktoria A.</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">KATEGORI</p>
              <p className="text-sm font-bold text-gray-800">VIP</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">KURSI</p>
              <p className="text-sm font-bold text-gray-800">A-114</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">PINTU</p>
              <p className="text-sm font-bold text-gray-800">Gate 3</p>
            </div>
          </div>

          {/* Garis Putus */}
          <div className="flex items-center px-4">
            <div className="w-5 h-5 rounded-full bg-gray-50 -ml-2" />
            <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-2" />
            <div className="w-5 h-5 rounded-full bg-gray-50 -mr-2" />
          </div>

          {/* QR Code */}
          <div className="px-6 py-4 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-sm ${
                      [0,2,4,6,8].includes(i) ? "bg-gray-800" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2 font-mono">CCK-2026-VIP-A114</p>
          </div>

        </div>

        {/* Info Transaksi */}
        <div className="bg-white rounded-2xl p-4 mt-3 space-y-2">
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">Event</span>
            <span className="text-xs font-bold text-gray-800">RAISA World Tour</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">Tanggal</span>
            <span className="text-xs font-bold text-gray-800">15 Mei 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">Kategori</span>
            <span className="text-xs font-bold text-gray-800">VIP · 2 Tiket</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-gray-400">ID Transaksi</span>
            <span className="text-xs font-bold text-[#1A56DB]">#TRX-2026-08471</span>
          </div>
        </div>

        {/* Tombol */}
        <button
          onClick={() => navigate("/home")}
          className="w-full bg-[#1A56DB] text-white py-4 rounded-2xl font-bold text-sm mt-4 mb-8"
        >
          Kembali ke Home
        </button>

      </div>
    </div>
  )
}

export default Sukses