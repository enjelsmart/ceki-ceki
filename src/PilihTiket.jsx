import { useState } from "react"
import { useNavigate } from "react-router-dom"

function PilihTiket() {
  const navigate = useNavigate()
  const [kategoriDipilih, setKategoriDipilih] = useState("VIP")

  const paketTiket = {
    "VIP": [
      {
        id: 1,
        nama: "VIP (Numbered Seating)",
        deskripsi: "Harga tiket sudah termasuk Pajak 10%, Biaya Platform 6%, tetapi belum termasuk biaya lainnya.",
        harga: "Rp250.000",
        refund: false,
        tipe: null,
        tersedia: true,
      },
    ],
    "FESTIVAL": [
      {
        id: 2,
        nama: "Festival Standing (Area Berdiri)",
        deskripsi: "Harga tiket sudah termasuk Pajak 10%, Biaya Platform 6%, tetapi belum termasuk biaya lainnya.",
        harga: "Rp200.000",
        refund: false,
        tipe: "Berdiri",
        tipeDeskripsi: "Seluruh tiket untuk area khusus berdiri.",
        tersedia: true,
      },
    ],
    "CAT 1": [
      {
        id: 3,
        nama: "CAT 1 (Numbered Seating)",
        deskripsi: "Harga tiket sudah termasuk Pajak 10%, Biaya Platform 6%, tetapi belum termasuk biaya lainnya.",
        harga: "Rp180.000",
        refund: false,
        tipe: null,
        tersedia: true,
      },
    ],
    "CAT 2": [
      {
        id: 4,
        nama: "CAT 2 (Numbered Seating)",
        deskripsi: "Harga tiket sudah termasuk Pajak 10%, Biaya Platform 6%, tetapi belum termasuk biaya lainnya.",
        harga: "Rp150.000",
        refund: false,
        tipe: null,
        tersedia: true,
      },
    ],
    "CAT 3": [
      {
        id: 5,
        nama: "CAT 3 (Numbered Seating Restricted View)",
        deskripsi: "Harga tiket sudah termasuk Pajak 10%, Biaya Platform 6%, tetapi belum termasuk biaya lainnya.",
        harga: "Rp120.000",
        refund: false,
        tipe: null,
        tersedia: false,
        statusHabis: "Terjual habis",
      },
    ],
    "CAT 4": [
      {
        id: 6,
        nama: "CAT 4A (Numbered Seating Restricted View)",
        deskripsi: "Harga tiket sudah termasuk Pajak 10%, Biaya Platform 6%, tetapi belum termasuk biaya lainnya.",
        harga: "Rp100.000",
        refund: false,
        tipe: null,
        tersedia: false,
        statusHabis: "Terjual habis",
      },
      {
        id: 7,
        nama: "CAT 4B (Numbered Seating Restricted View)",
        deskripsi: "Harga tiket sudah termasuk Pajak 10%, Biaya Platform 6%, tetapi belum termasuk biaya lainnya.",
        harga: "Rp100.000",
        refund: false,
        tipe: null,
        tersedia: false,
        statusHabis: "Terjual habis",
      },
    ],
  }

  const kategoriList = Object.keys(paketTiket)

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white px-4 pt-10 pb-4 flex items-center gap-3 shadow-sm sticky top-0 z-10">
        <button
          onClick={() => navigate("/home")}
          className="text-gray-800 text-xl font-bold"
        >
          ←
        </button>
        <h1 className="text-gray-800 font-bold text-lg">Paket — RAISA World Tour</h1>
      </div>

      {/* Dropdown Kategori */}
      <div className="px-4 pt-4 pb-2 bg-white">
        <select
          value={kategoriDipilih}
          onChange={(e) => setKategoriDipilih(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1A56DB]"
        >
          {kategoriList.map((kat) => (
            <option key={kat} value={kat}>{kat}</option>
          ))}
        </select>
      </div>

      {/* List Semua Paket */}
      <div className="px-4 py-4 space-y-6">
        {kategoriList.map((kat) => (
          <div key={kat}>
            <h2 className="text-gray-800 font-bold text-lg mb-3">{kat}</h2>
            <div className="space-y-3">
              {paketTiket[kat].map((tiket) => (
                <div key={tiket.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className={`text-sm font-bold flex-1 pr-2 ${!tiket.tersedia ? "text-gray-400" : "text-gray-800"}`}>
                        {tiket.nama}
                      </p>
                      <span className="text-[#1A56DB] text-xs font-bold whitespace-nowrap">Detail</span>
                    </div>
                    <p className={`text-xs mb-3 ${!tiket.tersedia ? "text-gray-300" : "text-gray-500"}`}>
                      {tiket.deskripsi}
                    </p>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-xs">🚫</span>
                        <span className={`text-xs ${!tiket.tersedia ? "text-gray-300" : "text-gray-500"}`}>
                          Tidak bisa refund
                        </span>
                      </div>
                      {tiket.tipe && (
                        <div className="flex items-start gap-2">
                          <span className="text-gray-400 text-xs mt-0.5">👥</span>
                          <div>
                            <p className="text-xs text-gray-700 font-semibold">{tiket.tipe}</p>
                            <p className="text-xs text-gray-400">{tiket.tipeDeskripsi}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="border-t border-dashed border-gray-200 mb-3" />
                    <div className="flex items-center justify-between">
                      <p className={`font-bold text-lg ${tiket.tersedia ? "text-red-500" : "text-gray-400"}`}>
                        {tiket.harga}
                      </p>
                      <button
                        onClick={() => tiket.tersedia && navigate("/antrean")}
                        disabled={!tiket.tersedia}
                        className={`px-6 py-2 rounded-xl text-sm font-bold transition ${
                          tiket.tersedia
                            ? "bg-[#1A56DB] text-white hover:bg-blue-700"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Pilih
                      </button>
                    </div>
                  </div>
                  {!tiket.tersedia && (
                    <div className="bg-gray-500 px-4 py-2">
                      <p className="text-white text-xs font-semibold">
                        {tiket.statusHabis || "Terjual habis"}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PilihTiket