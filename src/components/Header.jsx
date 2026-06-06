import { useContext } from "react"
import { AppContext } from "./AppContext"

function Header() {
  let { users } = useContext(AppContext)
  let currentUser = users[0]

  return (
    <div>
      <header className="flex bg-[#F5EEE9] h-12 items-center justify-evenly">
        <h1 className="font-bold text-[#3d2e2e]">GET A JOB BRO</h1>
        <div>
          <input
            type="text"
            placeholder="nyari sopo mas?"
            className="border border-solid border-[#A08080] pr-25 rounded-2xl pl-2 py-1"
          />
          <button className="ml-3 text-[#3d2e2e]">cari</button>
        </div>
        <div className="bg-[#A08080] px-3 py-2 rounded-4xl text-[#F5EEE9] font-bold text-sm">
          {currentUser ? currentUser.name.slice(0, 2).toUpperCase() : ".."}
        </div>
      </header>
    </div>
  )
}

export default Header
