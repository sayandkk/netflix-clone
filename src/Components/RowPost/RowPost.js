import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios'; // Ensure this axios instance points to your base URL
import { API_KEY } from '../../constants/constants';

function RowPost({ content }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`/discover/movie?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((err) => {
                console.error('Failed to fetch movie data:', err);
            });
    }, []);

    return (
        <div className='row'>
            <h1>{content}</h1>
            <div className='posters'>
                {movies.map((movie) => (
                    <div key={movie.id} className='poster-container'>
                        <img
                            className='poster'
                            alt={movie.title || movie.name}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        />
                        <p className='movie-title'>{movie.title || movie.name}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default RowPost;
