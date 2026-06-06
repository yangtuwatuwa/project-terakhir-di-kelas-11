function SidebarLinks() {
  return (
    <div className="bg-[#F5EEE9] rounded-xl p-4 mt-3">
      <nav className="space-y-3">
        <a href="#" className="flex items-center gap-3 text-[#3d2e2e] text-sm hover:bg-[#E0C8B8] rounded-lg px-2 py-1.5 transition-colors">
          <span className="text-base">🏠</span>
          <span>Beranda</span>
        </a>
        <a href="#" className="flex items-center gap-3 text-[#3d2e2e] text-sm hover:bg-[#E0C8B8] rounded-lg px-2 py-1.5 transition-colors">
          <span className="text-base">👥</span>
          <span>Jaringan Saya</span>
        </a>
        <a href="#" className="flex items-center gap-3 text-[#3d2e2e] text-sm hover:bg-[#E0C8B8] rounded-lg px-2 py-1.5 transition-colors">
          <span className="text-base">💼</span>
          <span>Lowongan</span>
        </a>
        <a href="#" className="flex items-center gap-3 text-[#3d2e2e] text-sm hover:bg-[#E0C8B8] rounded-lg px-2 py-1.5 transition-colors">
          <span className="text-base">💬</span>
          <span>Pesan</span>
        </a>
        <a href="#" className="flex items-center gap-3 text-[#3d2e2e] text-sm hover:bg-[#E0C8B8] rounded-lg px-2 py-1.5 transition-colors">
          <span className="text-base">🔔</span>
          <span>Notifikasi</span>
        </a>
      </nav>
    </div>
  )
}

export default SidebarLinks
