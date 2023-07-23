import { library } from "@/data/books.json"
import { BookType } from "@/types.d"
import { useState } from "react"
const initialState: BookType[] = library.map(({ book }) => ({ ...book }))
export const useBooks = () => {
  const [books] = useState(initialState)

  return books
}

export type BooksType = ReturnType<typeof useBooks>
