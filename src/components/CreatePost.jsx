import { useState, useRef, useContext } from "react"
import { AppContext } from "./AppContext"

function CreatePost() {
  const [teks, setTeks] = useState("")
  const inputRef = useRef(null)
  const { tambahPost, users } = useContext(AppContext)
  const currentUser = users[0]

  function handleSubmit() {
    if (teks.trim() === "") return
    tambahPost(teks)
    setTeks("")
    inputRef.current.focus()
  }

  return (
    <div className="bg-[#F5EEE9] rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#A08080] flex-shrink-0 flex items-center justify-center">
          <span className="text-[#F5EEE9] text-sm font-bold">
            {currentUser ? currentUser.name.slice(0, 2).toUpperCase() : ".."}
          </span>
        </div>
        <div className="flex-1">
          <input
            ref={inputRef}
            type="text"
            value={teks}
            onChange={function (e) { setTeks(e.target.value) }}
            onKeyDown={function (e) {
              if (e.key === "Enter") handleSubmit()
            }}
            placeholder="Apa yang ingin kamu bagikan?"
            className="w-full border border-[#c4a89a] rounded-full px-4 py-2.5 text-sm text-[#3d2e2e] placeholder-[#A08080] bg-transparent focus:outline-none focus:border-[#A08080]"
          />
        </div>
      </div>

      <div className="flex justify-between mt-3 pt-1">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#E0C8B8] cursor-pointer transition-colors">
          <span className="text-base">📷</span>
          <span className="text-[#3d2e2e] text-xs font-medium">Foto</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#E0C8B8] cursor-pointer transition-colors">
          <span className="text-base">🎬</span>
          <span className="text-[#3d2e2e] text-xs font-medium">Video</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#E0C8B8] cursor-pointer transition-colors">
          <span className="text-base">📅</span>
          <span className="text-[#3d2e2e] text-xs font-medium">Acara</span>
        </div>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A08080] text-[#F5EEE9] text-xs font-medium hover:bg-[#8a6f6f] cursor-pointer transition-colors"
        >
          Posting
        </button>
      </div>
    </div>
  )
}

export default CreatePost
