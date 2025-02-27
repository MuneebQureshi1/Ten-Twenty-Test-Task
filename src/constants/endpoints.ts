import { EnvironmentVariable } from "./env";

const Endpoints=()=>{
    const moviesCurd={
        get_upcoming_movies:()=>`/movie/upcoming`,
        get_movie_detail:(id:string)=>`/movie/${id}`,
        get_video_url:(id:string)=>`/movie/${id}/videos`,
        get_movie:(movieName:string)=>`/search/movie?api_key=${EnvironmentVariable.TMDB_API_KEY}&query=${movieName}`,
    }
    return { 
		moviesCurd
	};
}

export default Endpoints;