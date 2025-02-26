const Endpoints=()=>{
    const moviesCurd={
        get_upcoming_movies:()=>`/3/movie/upcoming`,
        update_post:(id:number)=>`/posts/${id}`
    }
    return { 
		moviesCurd
	};
}

export default Endpoints;