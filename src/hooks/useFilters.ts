import { useState } from "react"

export const GENRE = {
  all: "All",
  fantasie: "Fantasía",
  ficction: "Ciencia ficción",
  zombies: "Zombies",
  terror: "Terror",
} as const
export type GenreType = keyof typeof GENRE
export const useFilters = () => {
  const [genre, setGenre] = useState<GenreType>("all")
  const genres = Object.entries(GENRE).map(([key, value]) => ({ key, value }))
  return { genres, genre, setGenre }
}
export type FiltersType = ReturnType<typeof useFilters>
