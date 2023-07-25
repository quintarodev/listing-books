import { BookType } from "@/types.d"
import { FC } from "react"
import BookCard from "./BookCard"
interface Props {
  books: BookType[]
}
const ListBook: FC<Props> = ({ books }: Props) => {
  const booksIsEmpty = books.length === 0
  return booksIsEmpty ? (
    <div className="bg-red-100 grid place-items-center text-3xl font-bold">
      vacio
    </div>
  ) : (
    <ul className="grid grid-cols-4 place-content-start gap-8 border rounded-lg border-gray-300 p-6">
      {books.map((book) => (
        <li key={book.ISBN} className="h-full">
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  )
}
export default ListBook
