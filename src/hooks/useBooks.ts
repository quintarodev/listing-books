import { bookReducer, initialBookState } from "@/reducer/book"
import { BookType } from "@/types.d"
import { useReducer } from "react"

export const useBooks = () => {
  const [state, dispatch] = useReducer(bookReducer, initialBookState)
  const addBookToRead = (book: BookType) => {
    dispatch({ type: "addBookTo", payload: { book } })
  }
  const deleteBookReading = (isbn: BookType["ISBN"]) => {
    dispatch({ type: "deleteBookFromRead", payload: { isbn } })
  }
  return {
    books: state.books,
    booksReading: state.booksToReading,
    addBookToRead,
    deleteBookReading,
  }
}

export type BooksType = ReturnType<typeof useBooks>
