import usePlatforms from "./usePlatforms"

const usePlatform = (queryId?: number) => {
    const {data: platforms} = usePlatforms()
    return platforms?.results.find((p)=> p.id == queryId)
  }

export default usePlatform