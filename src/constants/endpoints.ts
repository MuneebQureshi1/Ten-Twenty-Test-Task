const Endpoints=()=>{
    const postCurd={
        get_all_post:()=>`/posts`,
        update_post:(id:number)=>`/posts/${id}`
    }
    return { 
		postCurd
	};
}

export default Endpoints;