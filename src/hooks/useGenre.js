const useGenre=(selectdGenres)=>{
    if(selectdGenres.length < 1) return "";
    
    const GenreId=selectdGenres.map((g) => g.id);
    return GenreId.reduce((accu,curr) => accu +","+curr);

}

export default useGenre;