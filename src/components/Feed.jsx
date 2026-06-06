


import { useContext } from "react"
import { AppContext } from "./AppContext"
import CreatePost from "./CreatePost"
import PostCard from "./PostCard"

function Feed() {
  let { posts } = useContext(AppContext)

  return (
    <div className="space-y-3">
      <CreatePost />

      <div className="flex items-center gap-2 px-1">
        <div className="flex-1 border-t border-[#c4a89a]"></div>
        <span className="text-[#A08080] text-xs whitespace-nowrap">
          Urutkan berdasarkan: <span className="text-[#3d2e2e] font-semibold">Terbaru</span> ▾
        </span>
      </div>

      {posts.map(function (post) {
        return <PostCard key={post.id} post={post} />
      })}
    </div>
  )
}

export default Feed
