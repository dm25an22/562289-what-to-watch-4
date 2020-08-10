interface filmType {
    title: string,
    moviePoster: string,
    bigPoster: string,
    genre: string,
    year: number,
    description: string,
    rating: number,
    quantityVotes: number,
    producer: string,
    listActors: string[],
    smallCardImg: string,
    preview: string,
    backgroundColor: string,
    runTime: number,
    id: number,
    videoLink: string,
    isFavorite: boolean
  }

  interface userDataType {
    id: number,
    email: string,
    name: string,
    avatarUrl: string
  }

  interface newCommentType {
    rating: number,
    comment: string
  }

  interface user {
    id: number,
    name: string
  }

  interface commentType {
      comment: string,
      date: string,
      rating: number,
      id: number,
      user: user
  }

  export {
    filmType,
    userDataType,
    newCommentType,
    commentType
  }
