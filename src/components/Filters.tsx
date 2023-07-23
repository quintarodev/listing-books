import { useBookContext } from "@/context/bookContext"
import { GenreType } from "@/hooks/useFilters"
import { FC } from "react"
const Filters: FC = () => {
  const {
    filters: { genres, setGenre },
  } = useBookContext()
  return (
    <div className="my-6">
      <select
        name=""
        id=""
        onChange={(e) => setGenre(e.target.value as GenreType)}
      >
        {genres.map((genre) => (
          <option value={genre.key} key={genre.key}>
            {genre.value}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Filters
