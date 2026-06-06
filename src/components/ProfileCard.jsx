import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "./AppContext"

function ProfileCard() {
  const { users, follows } = useContext(AppContext)
  const currentUser = users[0]

  if (!currentUser) {
    return (
      <div className="bg-[#F5EEE9] rounded-xl p-6 text-center">
        <p className="text-[#A08080] text-sm">Loading...</p>
      </div>
    )
  }

  return (
    <div className="bg-[#F5EEE9] rounded-xl overflow-hidden">
      <div className="h-16 bg-gradient-to-r from-[#A08080] to-[#c4a89a]"></div>

      <div className="flex justify-center -mt-8">
        <Link to={"/profile/" + currentUser.id} className="w-16 h-16 rounded-full bg-[#A08080] border-3 border-[#F5EEE9] flex items-center justify-center no-underline">
          <span className="text-[#F5EEE9] text-xl font-bold">
            {currentUser.name.slice(0, 2).toUpperCase()}
          </span>
        </Link>
      </div>

      <div className="text-center px-4 pt-2 pb-4">
        <Link to={"/profile/" + currentUser.id} className="font-semibold text-[#3d2e2e] text-sm no-underline hover:underline">
          {currentUser.name}
        </Link>
        <p className="text-[#A08080] text-xs mt-0.5">{currentUser.company.catchPhrase}</p>
        <p className="text-[#b09a8a] text-[11px] mt-1">{currentUser.address.city}</p>
      </div>

      <div className="border-t border-[#E0C8B8]"></div>

      <div className="px-4 py-3 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-[#A08080] text-xs">Koneksi</span>
          <span className="text-[#3d2e2e] text-xs font-semibold">{follows.length}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#A08080] text-xs">Yang melihat profil</span>
          <span className="text-[#3d2e2e] text-xs font-semibold">48</span>
        </div>
      </div>

      <div className="border-t border-[#E0C8B8]"></div>

      <div className="px-4 py-3">
        <span className="text-[#A08080] text-xs">📌 Item Tersimpan</span>
      </div>
    </div>
  )
}

export default ProfileCard
