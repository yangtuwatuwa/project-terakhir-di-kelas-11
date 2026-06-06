selamat datang di company saya yahahahh

get a job bro adalah platform mencari kerja yang ideal dengan anak muda jaman sekarang yang enggak suka muluk muluk ngeliat pencapaian orang lain, dan juga bisa koneksi langsung dengan hrd dan atasan sehingga anda tidak ada batasan anatara anda dan atasan ANDA yahahah

untuk fungsinya kita ada:
- **useState**: buat nyimpen data yang bisa berubah-ubah, kayak inputan lu pas mau bikin postingan atau ngetik komentar, sama nyimpen status jumlah like postingan yahahah.
- **useContext**: ini mantep bro, buat nyebar data (kayak data user, postingan, sama followers) ke seluruh komponen tanpa harus lempar-lemparan props yang bikin pusing wkwkwk.
- **useRef**: nah yang ini buat auto-focus ke dalem kolom ngetik pas lu abis neken tombol submit postingan atau komentar, biar mulus aja gitu UX nya.
- **useEffect**: buat nge-fetch data user dummy dari API pas webnya baru pertama kali dibuka, biar keliatan ada penghuninya web kita ini wkwk.
- **react-router-dom**: nah ini tambahan dari luar biar web kita berasa beneran ada banyak halamannya bro. Pake ini kita bisa pindah-pindah dari halaman Beranda ke halaman Profile orang lain tanpa loading muter-muter wkwkwk.

**Workflow aplikasinya simple aja bro:**

1. **Load Data Pertama Kali**: Pas web di-load, `useEffect` langsung kerja rodi narik data user dari API. Terus datanya ditampung santai pake `useState` di dalem Context.
```javascript
// Di dalem AppContext.jsx
useEffect(function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (res) { return res.json() })
    .then(function (data) { setUsers(data) })
}, [])
```

2. **Narik Data ke Komponen**: Komponen-komponen macem Header, Feed, ProfileCard tinggal minta jatah data dari `AppContext` pake `useContext`.
```javascript
// Di dalem ProfileCard.jsx
import { useContext } from "react"
import { AppContext } from "./AppContext"

function ProfileCard() {
  const { users, follows } = useContext(AppContext)
  const currentUser = users[0]
  // ... tinggal ditampilin di HTML nya
}
```

3. **Interaksi User**: Kalo lu interaksi, misalnya nge-post, nambah komen, ngelike, ato ngefollow orang, fungsi di Context bakal dipanggil buat ngubah state pake `useState`. Abis klik submit, `useRef` bakal bantu balikin kursor.
```javascript
// Contoh pas bikin post di CreatePost.jsx
const [teks, setTeks] = useState("")
const inputRef = useRef(null)
const { tambahPost } = useContext(AppContext)

function handleSubmit() {
  if (teks.trim() === "") return
  tambahPost(teks) // manggil fungsi dari context
  setTeks("") // reset inputan jadi kosong lagi
  inputRef.current.focus() // balikin kursor ngetik (ini guna nya useRef)
}
```

4. **Auto Update UI**: Berkat the power of React, tiap kali state di `AppContext` berubah, UI nya bakal auto update menyesuaikan. Jadi lu ga perlu reload-reload page lagi yahahah!
```javascript
// Contoh di AppContext.jsx, pas nambah post, state berubah otomatis UI ke-render ulang
function tambahPost(teks) {
  const postBaru = {
    id: Date.now(),
    userId: 1, // anggep aja lu user id 1 wkwk
    teks: teks,
    likes: 0,
    sudahLike: false,
    komentar: []
  }
  setPosts([postBaru, ...posts]) // <== Ini nih yang bikin UI auto update!
}
```

5. **Pindah-pindah Halaman**: Kalo lu kepo sama profil orang, tinggal klik aja nama atau fotonya (bisa dari hasil search, feed, atau sidebar). `react-router-dom` bakal nangkep klik lu lewat tag `<Link>`, trus URL nya ganti deh jadi `/profile/id_orangnya`. Terus komponen `ProfilePage` bakal ngebaca ID dari URL itu pake `useParams`, trus nampilin deh detail si user itu secara instan! Yahahah canggih kan!