export type BookType = {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: AuthorType
}

export type AuthorType = {
  name: string
  otherBooks: string[]
}
