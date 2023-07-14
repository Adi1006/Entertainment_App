
import axios from "axios";
import React,{ useEffect } from "react";
import {Chip, createTheme, ThemeProvider} from '@mui/material';
// import Stack from '@mui/material/Stack';

const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

const Genres=({
         selectedGenres, 
         setSelectedGenres,
         genres, 
         setGenres,
         setPage,
         type
    })=>{

        //for adding genre type
        const handleClickAdd=(genre)=>{
            setSelectedGenres([...selectedGenres,genre]);
            setGenres(genres.filter((gen) => gen.id !== genre.id));
            setPage(1);
        };

        //for removing the genre type
        const handleClickRemove=(genre)=>{
            setSelectedGenres(
                selectedGenres.filter((g) => g.id !== genre.id)
                );
            setGenres([...genres,genre]);
            setPage(1);
        };
        const fetchGenres= async()=>{
           const {data}= await axios.get(
                `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            );
            setGenres(data.genres);
        };
        // console.log(genres);
        useEffect(()=>{
            fetchGenres();

            return ()=>{
                setGenres([]);
            }
             // eslint-disable-next-line
        },[])

        return (
            <div style={{ padding: "6px 0" }}>
                <ThemeProvider theme={darkTheme}>

                    {selectedGenres && selectedGenres.map((genre) => (
                        <Chip
                            label={genre.name}
                            style={{ margin: 2 }}
                            size="small"
                            color="primary"
                            key={genre.id}
                            clickable
                            onDelete={()=>handleClickRemove(genre)}
                            // color={selectedGenres.includes(genre) ? "primary" : "default"}
                        />
                        ))}

                    {genres && genres.map((genre) => (
                    <Chip
                        label={genre.name}
                        style={{ margin: 2 }}
                        size="small"
                        key={genre.id}
                        clickable
                        onClick={() => handleClickAdd(genre)}
                        // color={selectedGenres.includes(genre) ? "primary" : "default"}
                    />
                    ))}
                    </ThemeProvider>
             </div>
        );
}

export default Genres;