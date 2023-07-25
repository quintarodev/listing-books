import { useBookContext } from "@/context/bookContext"
import { BookType } from "@/types.d"
import { FC } from "react"
interface Props {
  book: BookType
}
const BookCard: FC<Props> = ({ book }: Props) => {
  const {
    books: { addBookToRead },
  } = useBookContext()
  return (
    <div className="h-full flex flex-col justify-between ">
      <div>
        <img
          src={book.cover}
          alt="Image"
          className="aspect-[12/16] rounded-md object-cover"
        />
        <h3 className="font-semibold text-xl">{book.title}</h3>
      </div>
      <button
        onClick={() => addBookToRead(book)}
        className="mt-2 px-4 py-2 rounded-md bg-purple-600 text-white font-bold"
      >
        Leer mas tarde
      </button>
    </div>
  )
}
export default BookCard
