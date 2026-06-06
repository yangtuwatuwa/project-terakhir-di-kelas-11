import { useState, useRef, useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "./AppContext"

function PostCard({ post }) {
  const [showKomentar, setShowKomentar] = useState(false)
  const [teksKomentar, setTeksKomentar] = useState("")
  const komentarRef = useRef(null)
  const { users, toggleLike, tambahKomentar } = useContext(AppContext)

  // cari user yang ngepost berdasarkan userId
  const poster = users.find(function (u) {
    return u.id === post.userId
  })

  function handleKomentar() {
    if (teksKomentar.trim() === "") return
    tambahKomentar(post.id, teksKomentar)
    setTeksKomentar("")
    komentarRef.current.focus()
  }

  function bukaKomentar() {
    setShowKomentar(!showKomentar)
  }

  return (
    <div className="bg-[#F5EEE9] rounded-xl overflow-hidden">
      <div className="flex items-start gap-3 p-4 pb-2">
        <Link to={poster ? "/profile/" + poster.id : "#"} className="w-10 h-10 rounded-full bg-[#c4a89a] flex-shrink-0 flex items-center justify-center no-underline">
          <span className="text-[#F5EEE9] text-sm font-bold">
            {poster ? poster.name.slice(0, 2).toUpperCase() : "??"}
          </span>
        </Link>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <Link to={poster ? "/profile/" + poster.id : "#"} className="text-[#3d2e2e] text-sm font-semibold no-underline hover:underline">
                {poster ? poster.name : "Unknown"}
              </Link>
              <p className="text-[#A08080] text-[11px]">
                {poster ? poster.company.name : ""}
              </p>
              <p className="text-[#b09a8a] text-[11px]">baru saja • 🌐</p>
            </div>
            <span className="text-[#A08080] text-lg cursor-pointer">•••</span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-3">
        <p className="text-[#3d2e2e] text-sm leading-relaxed">{post.teks}</p>
      </div>

      <div className="px-4 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-sm">{post.sudahLike ? "❤️" : "👍"}</span>
          <span className="text-[#A08080] text-xs">{post.likes} suka</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#A08080] text-xs">{post.komentar.length} komentar</span>
        </div>
      </div>

      <div className="border-t border-[#E0C8B8] mx-4"></div>

      <div className="flex justify-between px-2 py-1">
        <button
          onClick={function () { toggleLike(post.id) }}
          className={"flex items-center gap-1.5 px-4 py-2.5 rounded-lg cursor-pointer transition-colors flex-1 justify-center " + (post.sudahLike ? "bg-[#E0C8B8] text-[#3d2e2e]" : "hover:bg-[#E0C8B8] text-[#A08080]")}
        >
          <span className="text-base">{post.sudahLike ? "❤️" : "👍"}</span>
          <span className="text-xs font-medium">{post.sudahLike ? "Disukai" : "Suka"}</span>
        </button>
        <button
          onClick={bukaKomentar}
          className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg hover:bg-[#E0C8B8] cursor-pointer transition-colors flex-1 justify-center text-[#A08080]"
        >
          <span className="text-base">💬</span>
          <span className="text-xs font-medium">Komentar</span>
        </button>
        <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg hover:bg-[#E0C8B8] cursor-pointer transition-colors flex-1 justify-center text-[#A08080]">
          <span className="text-base">🔄</span>
          <span className="text-xs font-medium">Repost</span>
        </div>
        <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg hover:bg-[#E0C8B8] cursor-pointer transition-colors flex-1 justify-center text-[#A08080]">
          <span className="text-base">📤</span>
          <span className="text-xs font-medium">Kirim</span>
        </div>
      </div>

      {showKomentar && (
        <div className="border-t border-[#E0C8B8] px-4 py-3">
          {post.komentar.length > 0 && (
            <div className="space-y-2 mb-3">
              {post.komentar.map(function (kom) {
                return (
                  <div key={kom.id} className="bg-[#E0C8B8] rounded-lg px-3 py-2">
                    <p className="text-[#3d2e2e] text-xs font-semibold">Kamu</p>
                    <p className="text-[#3d2e2e] text-xs">{kom.teks}</p>
                  </div>
                )
              })}
            </div>
          )}

          <div className="flex gap-2">
            <input
              ref={komentarRef}
              type="text"
              value={teksKomentar}
              onChange={function (e) { setTeksKomentar(e.target.value) }}
              onKeyDown={function (e) {
                if (e.key === "Enter") handleKomentar()
              }}
              placeholder="Tulis komentar..."
              className="flex-1 border border-[#c4a89a] rounded-full px-3 py-1.5 text-xs text-[#3d2e2e] placeholder-[#A08080] bg-transparent focus:outline-none focus:border-[#A08080]"
            />
            <button
              onClick={handleKomentar}
              className="bg-[#A08080] text-[#F5EEE9] px-3 py-1.5 rounded-full text-xs font-medium hover:bg-[#8a6f6f] cursor-pointer transition-colors"
            >
              Kirim
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostCard
