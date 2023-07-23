import { BookType } from "@/types.d"
import { FC } from "react"
import BookCard from "./BookCard"
interface Props {
  books: BookType[]
}
const ListBook: FC<Props> = ({ books }: Props) => {
  return (
    <ul className="grid grid-cols-4 gap-8">
      {books.map((book) => (
        <li key={book.ISBN}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  )
}
export default ListBook
