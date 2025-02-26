const Endpoints=()=>{
    const moviesCurd={
        get_upcoming_movies:()=>`upcoming`,
        get_movie_detail:(id:string)=>`${id}`,
        get_video_url:(id:string)=>`${id}/videos`
    }
    return { 
		moviesCurd
	};
}

export default Endpoints;