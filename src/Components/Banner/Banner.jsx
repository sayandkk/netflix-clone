import React, { useEffect, useState } from 'react';
import './Banner.css';
import { API_KEY } from '../../constants/constants';
import axios from '../../axios';

function Banner() {
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                const movies = response.data.results;
                setMovie(movies[Math.floor(Math.random() * movies.length)]);
            })
            ;
    }, []);

    return (
        <div
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundPosition: 'center center',
            }}
        >
            <div className='content'>
                <h1 className='title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>
                    {movie?.overview}
                </h1>
            </div>
            <div className='fade_bottom'></div>
        </div>
    );
}

export default Banner;
