import Filters from "./components/Filters"
import ListBook from "./components/ListBook"
import { useBookContext } from "./context/bookContext"
import { GENRE } from "./hooks/useFilters"
function App() {
  const {
    filters: { genre },
    books,
  } = useBookContext()

  const booksFiltered =
    genre !== "all" ? books.filter((b) => b.genre === GENRE[genre]) : [...books]
  return (
    <main className="mx-auto max-w-6xl min-h-screen">
      <h1>List od Books</h1>
      <Filters />
      <div className=" grid grid-cols-[1fr_auto] gap-16">
        <ListBook books={booksFiltered} />
        <div>books reading</div>
      </div>
    </main>
  )
}

export default App
