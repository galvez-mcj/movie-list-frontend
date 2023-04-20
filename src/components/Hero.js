import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Hero = ({movies}) => {

    const navigate = useNavigate();

    const reviews = (movieId) => {
        navigate(`/Reviews/${movieId}`)
    }

    return (
        <div className='movie-carousel-container'>
        <Carousel>
            {
                movies?.map((movie) => {
                    return(
                        <Paper>
                            <div className='movie-card-container'>
                                <div className="movie-card" style={{"--img": `url(${movie.backdrops[1]})`}}>
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movie.poster} alt="movie poster" />
                                        </div>
                                        <div className="movie-title">
                                            <h4>{movie.title}</h4>
                                            <div className="movie-button-container">
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                {/* <Link to={`/Trailer`}> */}
                                                    <FontAwesomeIcon 
                                                        className="play-button-icon"
                                                        icon={faCirclePlay}/>
                                                    Play trailer
                                                </Link>
                                            </div>
                                            <div className='movie-button-container'>
                                                <Button variant='info' onClick={() => reviews(movie.imdbId)}></Button>
                                                See Reviews
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
        </div>
    )
}

export default Hero
