import { useBookContext } from "@/context/bookContext"
import { BookType } from "@/types.d"
import { FC } from "react"
import BookReadingCard from "./BookReadingCard"
interface Props {
  booksToRead: BookType[]
}
const ListBookReading: FC<Props> = ({ booksToRead }: Props) => {
  const {
    books: { deleteBookReading },
  } = useBookContext()
  return (
    <div className="max-w-sm">
      <h2 className="text-2xl font-semibold">List Books to Read</h2>
      <ul className="grid grid-cols-1 p-4 border border-gray-300 rounded-lg">
        {booksToRead.map((book) => (
          <li key={book.ISBN}>
            <BookReadingCard deleteBook={deleteBookReading} book={book} />
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ListBookReading
