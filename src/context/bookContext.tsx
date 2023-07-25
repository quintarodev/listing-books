import { BooksType, useBooks } from "@/hooks/useBooks"
import { FiltersType, useFilters } from "@/hooks/useFilters"
import { ReactNode, createContext, useContext } from "react"

export const Context = createContext<{
  books: BooksType
  filters: FiltersType
}>({
  filters: {} as FiltersType,
  books: {} as BooksType,
})
interface Props {
  children: ReactNode
}
export const BookProvider = ({ children }: Props) => {
  const filters = useFilters()
  const books = useBooks()
  return (
    <Context.Provider value={{ filters, books }}>{children}</Context.Provider>
  )
}

export const useBookContext = () => useContext(Context)
