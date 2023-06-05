import useGenres from "./useGenres"

 const useGenre =(queryId?: number) => {
    const {data: genres} = useGenres()
    return genres?.results.find(
      g => g.id === queryId
    )
  }

  export default useGenre