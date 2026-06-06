import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import SidebarLinks from "./components/SidebarLinks"
import Feed from "./components/Feed"
import SidebarRight from "./components/SidebarRight"
import Footer from "./components/Footer"
import { AppProvider } from "./components/AppContext"

function App() {
  return (
    <AppProvider>
      <div className="bg-[#E0C8B8] min-h-screen">
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        <main className="max-w-[1400px] mx-auto px-8 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_320px] gap-6">
            <aside className="hidden lg:block">
              <div className="sticky top-16">
                <ProfileCard />
                <SidebarLinks />
              </div>
            </aside>

            <section>
              <Feed />
            </section>

            <aside className="hidden lg:block">
              <div className="sticky top-16">
                <SidebarRight />
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>
    </AppProvider>
  )
}

export default App
