import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function SplashScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login")
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A56DB] to-[#3B82F6] flex flex-col items-center justify-center">

      {/* Logo Animasi */}
      <div className="flex flex-col items-center animate-bounce">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-6">
          <span className="text-5xl">🎟️</span>
        </div>
        <h1 className="text-white text-4xl font-bold tracking-wide">Ceki Ceki</h1>
        <p className="text-blue-200 text-sm mt-2">Tiket Cepat, Antrean Mudah</p>
      </div>

      {/* Loading Dots */}
      <div className="flex gap-2 mt-16">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>

    </div>
  )
}

export default SplashScreen