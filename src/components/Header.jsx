import { useState, useRef, useContext } from "react"
import { Link } from "react-router-dom"
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
        <Link to="/" className="font-bold text-[#3d2e2e] no-underline">GET A JOB BRO</Link>

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
                  <Link
                    key={user.id}
                    to={"/profile/" + user.id}
                    onClick={function () { setCari("") }}
                    className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#E0C8B8] cursor-pointer transition-colors no-underline"
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
                  </Link>
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

        <Link to={currentUser ? "/profile/" + currentUser.id : "/"} className="bg-[#A08080] px-3 py-2 rounded-4xl text-[#F5EEE9] font-bold text-sm no-underline">
          {currentUser ? currentUser.name.slice(0, 2).toUpperCase() : ".."}
        </Link>
      </header>
    </div>
  )
}

export default Header
