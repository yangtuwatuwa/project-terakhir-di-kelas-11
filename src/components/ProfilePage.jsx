import { useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { AppContext } from "./AppContext"

function ProfilePage() {
  const { id } = useParams()
  const { users, follows, toggleFollow } = useContext(AppContext)

  // cari user berdasarkan id dari URL
  const user = users.find(function (u) {
    return u.id === Number(id)
  })

  if (!user) {
    return (
      <div className="bg-[#F5EEE9] rounded-xl p-8 text-center">
        <p className="text-[#A08080] text-sm">Loading profil...</p>
      </div>
    )
  }

  const sudahFollow = follows.includes(user.id)

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* tombol balik */}
      <Link to="/" className="inline-flex items-center gap-2 text-[#A08080] text-sm hover:text-[#3d2e2e] transition-colors">
        ← Kembali ke Beranda
      </Link>

      {/* card profil utama */}
      <div className="bg-[#F5EEE9] rounded-xl overflow-hidden">
        {/* cover photo */}
        <div className="h-32 bg-gradient-to-r from-[#A08080] to-[#c4a89a]"></div>

        {/* avatar + info */}
        <div className="px-6 pb-6">
          <div className="flex items-end gap-4 -mt-10">
            <div className="w-20 h-20 rounded-full bg-[#A08080] border-4 border-[#F5EEE9] flex items-center justify-center flex-shrink-0">
              <span className="text-[#F5EEE9] text-2xl font-bold">
                {user.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="pb-1 flex-1">
              <h1 className="text-[#3d2e2e] text-xl font-bold">{user.name}</h1>
              <p className="text-[#A08080] text-sm">@{user.username}</p>
            </div>
            <button
              onClick={function () { toggleFollow(user.id) }}
              className={
                sudahFollow
                  ? "bg-[#A08080] text-[#F5EEE9] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#8a6f6f] cursor-pointer transition-colors"
                  : "text-[#A08080] border-2 border-[#A08080] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#A08080] hover:text-[#F5EEE9] cursor-pointer transition-colors"
              }
            >
              {sudahFollow ? "✓ Mengikuti" : "+ Hubungkan"}
            </button>
          </div>

          {/* bio */}
          <p className="text-[#3d2e2e] text-sm mt-4">{user.company.catchPhrase}</p>
          <p className="text-[#A08080] text-xs mt-1">📍 {user.address.city}</p>
        </div>
      </div>

      {/* info detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* info kontak */}
        <div className="bg-[#F5EEE9] rounded-xl p-5">
          <h3 className="text-[#3d2e2e] text-sm font-bold mb-3">Info Kontak</h3>
          <div className="space-y-3">
            <div>
              <p className="text-[#A08080] text-[11px]">Name</p>
              <p className="text-[#3d2e2e] text-sm font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-[#A08080] text-[11px]">Username</p>
              <p className="text-[#3d2e2e] text-sm font-medium">@{user.username}</p>
            </div>
            <div>
              <p className="text-[#A08080] text-[11px]">Email</p>
              <p className="text-[#3d2e2e] text-sm font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-[#A08080] text-[11px]">Telepon</p>
              <p className="text-[#3d2e2e] text-sm font-medium">{user.phone}</p>
            </div>
            <div>
              <p className="text-[#A08080] text-[11px]">Website</p>
              <p className="text-[#3d2e2e] text-sm font-medium">{user.website}</p>
            </div>
          </div>
        </div>

        {/* info perusahaan */}
        <div className="bg-[#F5EEE9] rounded-xl p-5">
          <h3 className="text-[#3d2e2e] text-sm font-bold mb-3">Pengalaman Kerja</h3>
          <div className="space-y-3">
            <div>
              <p className="text-[#A08080] text-[11px]">Perusahaan</p>
              <p className="text-[#3d2e2e] text-sm font-medium">{user.company.name}</p>
            </div>
            <div>
              <p className="text-[#A08080] text-[11px]">Posisi</p>
              <p className="text-[#3d2e2e] text-sm font-medium">{user.company.bs}</p>
            </div>
            <div>
              <p className="text-[#A08080] text-[11px]">Motto</p>
              <p className="text-[#3d2e2e] text-sm font-medium">{user.company.catchPhrase}</p>
            </div>
            <div>
              <p className="text-[#A08080] text-[11px]">Alamat</p>
              <p className="text-[#3d2e2e] text-sm font-medium">
                {user.address.street}, {user.address.suite}, {user.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
