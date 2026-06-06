import { useState, useRef, useContext } from "react"
import { AppContext } from "./AppContext"

function Header() {
  const { users } = useContext(AppContext)
  const currentUser = users[0]
  const [cari, setCari] = useState("")
  const inputRef = useRef(null)

  // filter user berdasarkan keyword yang diketik
  let hasilCari = []
  if (cari.trim() !== "") {
    hasilCari = users.filter(function (user) {
      return user.name.toLowerCase().includes(cari.toLowerCase())
    })
  }

  function handleReset() {
    setCari("")
    inputRef.current.focus()
  }

  return (
    <div>
      <header className="flex bg-[#F5EEE9] h-12 items-center justify-evenly">
        <h1 className="font-bold text-[#3d2e2e]">GET A JOB BRO</h1>

        <div className="relative">
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={cari}
              onChange={function (e) { setCari(e.target.value) }}
              placeholder="nyari sopo mas?"
              className="border border-solid border-[#A08080] pr-25 rounded-2xl pl-2 py-1"
            />
            <button onClick={handleReset} className="ml-3 text-[#3d2e2e]">cari</button>
          </div>

          {hasilCari.length > 0 && (
            <div className="absolute top-full left-0 mt-1 w-full bg-[#F5EEE9] rounded-xl shadow-lg border border-[#E0C8B8] z-50 overflow-hidden">
              {hasilCari.map(function (user) {
                return (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#E0C8B8] cursor-pointer transition-colors"
                    onClick={function () { setCari(user.name) }}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#A08080] flex-shrink-0 flex items-center justify-center">
                      <span className="text-[#F5EEE9] text-xs font-bold">
                        {user.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-[#3d2e2e] text-xs font-semibold">{user.name}</p>
                      <p className="text-[#A08080] text-[11px]">{user.company.name}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {cari.trim() !== "" && hasilCari.length === 0 && (
            <div className="absolute top-full left-0 mt-1 w-full bg-[#F5EEE9] rounded-xl shadow-lg border border-[#E0C8B8] z-50 p-3">
              <p className="text-[#A08080] text-xs text-center">gak ketemu bro 😅</p>
            </div>
          )}
        </div>

        <div className="bg-[#A08080] px-3 py-2 rounded-4xl text-[#F5EEE9] font-bold text-sm">
          {currentUser ? currentUser.name.slice(0, 2).toUpperCase() : ".."}
        </div>
      </header>
    </div>
  )
}

export default Header
