import { BookType } from "@/types.d"
import { FC } from "react"
interface Props {
  book: BookType
  deleteBook: (isbn: BookType["ISBN"]) => void
}
const BookReadingCard: FC<Props> = ({ book, deleteBook }: Props) => {
  return (
    <>
      <div className=" border rounded-md p-2 flex items-center space-x-2">
        <img
          src={book.cover}
          alt=""
          className="object-cover max-w-[100px] rounded-md"
        />
        <h4 className="font-semibold">{book.title}</h4>
      </div>
      <button onClick={() => deleteBook(book.ISBN)}>elimimnar</button>
    </>
  )
}
export default BookReadingCard
