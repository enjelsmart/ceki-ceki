import { useState } from "react"
import { useNavigate } from "react-router-dom"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!email || !password) {
      alert("Email dan password harus diisi!")
      return
    }
    navigate("/home")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A56DB] to-[#3B82F6] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-3">
            <span className="text-3xl">🎟️</span>
          </div>
          <h1 className="text-white text-2xl font-bold">Masuk ke Ceki Ceki</h1>
          <p className="text-blue-200 text-sm mt-1">Selamat datang kembali!</p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <div className="space-y-4">

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
              <input
                type="email"
                placeholder="contoh@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB] bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Kata Sandi</label>
              <input
                type="password"
                placeholder="Masukkan kata sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A56DB] bg-gray-50"
              />
              <p className="text-right text-xs text-[#1A56DB] mt-1 cursor-pointer">Lupa kata sandi?</p>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-[#1A56DB] text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition"
            >
              Masuk
            </button>

            <p className="text-center text-xs text-gray-500">
              Belum punya akun?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#1A56DB] font-bold cursor-pointer"
              >
                Daftar
              </span>
            </p>

            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">atau</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button className="w-full border border-gray-200 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition flex items-center justify-center gap-2">
              <span>🌐</span> Masuk dengan Google
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default App