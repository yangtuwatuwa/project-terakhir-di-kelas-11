import { useContext } from "react"
import { AppContext } from "./AppContext"

function SidebarRight() {
  const { users, follows, toggleFollow } = useContext(AppContext)

  // ambil user selain user pertama (user pertama = current user)
  const suggestedUsers = users.slice(1, 6)

  return (
    <div className="space-y-3">
      <div className="bg-[#F5EEE9] rounded-xl p-4">
        <h3 className="text-[#3d2e2e] text-sm font-semibold mb-3">Berita Terkini</h3>
        <div className="space-y-3">
          <div className="group cursor-pointer">
            <h4 className="text-[#3d2e2e] text-xs font-medium group-hover:text-[#A08080] transition-colors">
              React 20 Resmi Dirilis dengan Fitur Baru
            </h4>
            <p className="text-[#b09a8a] text-[11px] mt-0.5">2 jam lalu • 1.234 pembaca</p>
          </div>
          <div className="group cursor-pointer">
            <h4 className="text-[#3d2e2e] text-xs font-medium group-hover:text-[#A08080] transition-colors">
              Tips Karir: Skill yang Dicari 2026
            </h4>
            <p className="text-[#b09a8a] text-[11px] mt-0.5">4 jam lalu • 892 pembaca</p>
          </div>
          <div className="group cursor-pointer">
            <h4 className="text-[#3d2e2e] text-xs font-medium group-hover:text-[#A08080] transition-colors">
              Startup Lokal Raih Pendanaan Seri B
            </h4>
            <p className="text-[#b09a8a] text-[11px] mt-0.5">6 jam lalu • 567 pembaca</p>
          </div>
          <div className="group cursor-pointer">
            <h4 className="text-[#3d2e2e] text-xs font-medium group-hover:text-[#A08080] transition-colors">
              AI dalam Pengembangan Web Modern
            </h4>
            <p className="text-[#b09a8a] text-[11px] mt-0.5">12 jam lalu • 3.455 pembaca</p>
          </div>
        </div>
        <a href="#" className="block text-[#A08080] text-xs font-medium mt-3 hover:text-[#3d2e2e] transition-colors">
          Lihat selengkapnya →
        </a>
      </div>

      <div className="bg-[#F5EEE9] rounded-xl p-4">
        <h3 className="text-[#3d2e2e] text-sm font-semibold mb-3">Tambah ke jaringan</h3>
        <div className="space-y-3">
          {suggestedUsers.map(function (user) {
            const sudahFollow = follows.includes(user.id)
            return (
              <div key={user.id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c4a89a] flex-shrink-0 flex items-center justify-center">
                  <span className="text-[#F5EEE9] text-xs font-bold">
                    {user.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[#3d2e2e] text-xs font-semibold truncate">{user.name}</h4>
                  <p className="text-[#A08080] text-[11px] truncate">{user.company.name}</p>
                </div>
                <button
                  onClick={function () { toggleFollow(user.id) }}
                  className={
                    sudahFollow
                      ? "bg-[#A08080] text-[#F5EEE9] rounded-full px-3 py-1 text-[11px] font-medium hover:bg-[#8a6f6f] cursor-pointer transition-colors flex-shrink-0"
                      : "text-[#A08080] border border-[#A08080] rounded-full px-3 py-1 text-[11px] font-medium hover:bg-[#A08080] hover:text-[#F5EEE9] cursor-pointer transition-colors flex-shrink-0"
                  }
                >
                  {sudahFollow ? "✓ Mengikuti" : "+ Hubungkan"}
                </button>
              </div>
            )
          })}
        </div>
        <a href="#" className="block text-[#A08080] text-xs font-medium mt-3 hover:text-[#3d2e2e] transition-colors">
          Lihat semua rekomendasi →
        </a>
      </div>

      <div className="px-4 py-3 text-center">
        <p className="text-[#b09a8a] text-[10px]">CERITA SI SOSMED © 2026</p>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-1.5">
          <a href="#" className="text-[#A08080] text-[10px] hover:text-[#3d2e2e] transition-colors">Tentang</a>
          <a href="#" className="text-[#A08080] text-[10px] hover:text-[#3d2e2e] transition-colors">Aksesibilitas</a>
          <a href="#" className="text-[#A08080] text-[10px] hover:text-[#3d2e2e] transition-colors">Pusat Bantuan</a>
          <a href="#" className="text-[#A08080] text-[10px] hover:text-[#3d2e2e] transition-colors">Privasi</a>
          <a href="#" className="text-[#A08080] text-[10px] hover:text-[#3d2e2e] transition-colors">Ketentuan</a>
        </div>
      </div>
    </div>
  )
}

export default SidebarRight
