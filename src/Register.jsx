import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register() {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A56DB] to-[#3B82F6] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-3">
            <span className="text-3xl">🎟️</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Buat Akun Baru</h1>
          <p className="text-blue-200 text-sm mt-1">Daftar dan mulai beli tiket!</p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="space-y-4">

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Viktoria Angelita"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB] bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
              <input
                type="email"
                placeholder="viktoria@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB] bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Kata Sandi</label>
              <input
                type="password"
                placeholder="Minimal 8 karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB] bg-gray-50"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                if (!nama || !email || !password) {
                  alert("Semua field harus diisi!")
                  return
                }
                alert("Registrasi berhasil! Silakan login.")
                navigate("/login")
              }}
              className="w-full bg-[#1A56DB] text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition"
            >
              Daftar Sekarang
            </button>

            <p className="text-center text-xs text-gray-500">
              Dengan mendaftar kamu setuju{" "}
              <span className="text-[#1A56DB] font-bold cursor-pointer">Syarat & Ketentuan</span>
            </p>

            <p className="text-center text-xs text-gray-500">
              Sudah punya akun?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#1A56DB] font-bold cursor-pointer"
              >
                Masuk di sini
              </span>
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Register