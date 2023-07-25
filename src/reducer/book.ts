import { library } from "@/data/books.json"
import { BookType } from "@/types.d"
const initialBooksState: BookType[] = library.map(({ book }) => ({ ...book }))
type StateReducer = {
  books: BookType[]
  booksToReading: BookType[]
}
export const initialBookState: StateReducer = {
  books: initialBooksState,
  booksToReading: [],
}
type Action =
  | {
      type: "addBookTo"
      payload: {
        book: BookType
      }
    }
  | { type: "deleteBookFromRead"; payload: { isbn: BookType["ISBN"] } }
export const bookReducer = (
  state: StateReducer,
  action: Action
): StateReducer => {
  const { type, payload } = action
  if (type === "addBookTo") {
    const newBooks = state.books.filter((b) => b.ISBN !== payload.book.ISBN)
    const newBooksReading = [...state.booksToReading, payload.book]
    return { books: newBooks, booksToReading: newBooksReading }
  }
  if (type === "deleteBookFromRead") {
    let bookAux = {} as BookType
    const booksReading = state.booksToReading.filter((b) => {
      if (b.ISBN === payload.isbn) {
        bookAux = { ...b }
      }
      return b.ISBN !== payload.isbn
    })
    return { books: [...state.books, bookAux], booksToReading: booksReading }
  }
  return state
}
