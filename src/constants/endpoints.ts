const Endpoints=()=>{
    const moviesCurd={
        get_upcoming_movies:()=>`upcoming`,
        get_movie_detail:(id:string)=>`${id}`
    }
    return { 
		moviesCurd
	};
}

export default Endpoints;