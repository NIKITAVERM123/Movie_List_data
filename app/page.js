'use client'
import Add_move from './Add_movie.js'
import './globals.css';
import Header from './Header.js';
import Movie_row from './Movie_row.js';
import {movieList} from './movie_data.js';
import {useState} from 'react';


function Page() {
    const [movies,setMovies]=useState(movieList)
    
    const handleDelete = (id ) => {
        const ubdate_Movies=movies.filter( movie =>movie.id!==id)
        setMovies(ubdate_Movies);
    };
    
    return (
        <div>
            <Header/>
            {movies.map((data)=>(
                <Movie_row
                    key={data.id} 
                    data={data} 
                    onDelete={()=> handleDelete(data.id )} 
                />
            ))}
        </div>
    );
};

export default Page;
