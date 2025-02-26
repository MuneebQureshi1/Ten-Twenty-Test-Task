const Endpoints=()=>{
    const moviesCurd={
        get_upcoming_movies:()=>`upcoming`,
        get_movie_image:(id:string)=>`${id}/images`
    }
    return { 
		moviesCurd
	};
}

export default Endpoints;