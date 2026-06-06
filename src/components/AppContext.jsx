import { createContext, useState, useEffect } from "react"

const AppContext = createContext()

function AppProvider({ children }) {
  const [users, setUsers] = useState([])
  const [follows, setFollows] = useState([])
  const [posts, setPosts] = useState([
    {
      id: 1,
      userId: 3,
      teks: "alhadulilah skrg gw kerja di pt mencari mewing sejati jangan lupa makan mas",
      likes: 24,
      sudahLike: false,
      komentar: []
    },
    {
      id: 2,
      userId: 5,
      teks: "hallo sekarang saya sekarang sudah menjadi senior manager di pt mikrocok indoneisa",
      likes: 56,
      sudahLike: false,
      komentar: []
    },
    {
      id: 3,
      userId: 7,
      teks: "gw sekarang kerja di tech comany di google alhamdulilah sekarang bisa beli mercy",
      likes: 112,
      sudahLike: false,
      komentar: []
    }
  ])

  // fetch data user dari API
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        setUsers(data)
      })
  }, [])

  // fungsi tambah postingan baru
  function tambahPost(teks) {
    const postBaru = {
      id: Date.now(),
      userId: 1,
      teks: teks,
      likes: 0,
      sudahLike: false,
      komentar: []
    }
    setPosts([postBaru, ...posts])
  }

  // fungsi like / unlike postingan
  function toggleLike(postId) {
    const postBaru = posts.map(function (post) {
      if (post.id === postId) {
        return {
          ...post,
          sudahLike: !post.sudahLike,
          likes: post.sudahLike ? post.likes - 1 : post.likes + 1
        }
      }
      return post
    })
    setPosts(postBaru)
  }

  // fungsi tambah komentar
  function tambahKomentar(postId, teks) {
    const postBaru = posts.map(function (post) {
      if (post.id === postId) {
        const komentarBaru = {
          id: Date.now(),
          teks: teks
        }
        return {
          ...post,
          komentar: [...post.komentar, komentarBaru]
        }
      }
      return post
    })
    setPosts(postBaru)
  }

  // fungsi follow / unfollow user
  function toggleFollow(userId) {
    if (follows.includes(userId)) {
      setFollows(follows.filter(function (id) {
        return id !== userId
      }))
    } else {
      setFollows([...follows, userId])
    }
  }

  return (
    <AppContext.Provider value={{
      users,
      posts,
      follows,
      tambahPost,
      toggleLike,
      tambahKomentar,
      toggleFollow
    }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
