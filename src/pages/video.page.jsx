import React, { useState } from 'react';
import { Player, ControlBar, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import NavbarComponent from '../components/navbar.component';

const VideoPage = () => {
  const [video, setVideo] = useState('');
  const [loading, setLoading] = useState(true);

  const sources = [
    {
      title: 'Sintel',
      year: 2020,
      studio: 'Universal Studio',
      movie: "http://media.w3.org/2010/05/sintel/trailer.mp4",
      poster: '/sintel-poster.jpeg',
      cardPoster: '/card-poster-sintel.jpeg'
    },
    {
      title: 'Big Buck Bunny',
      year: 2018,
      studio: 'Universal Studio',
      movie: "http://media.w3.org/2010/05/bunny/trailer.mp4",
      poster: '/bbb-poster.jpeg',
      cardPoster: '/card-poster-bbb.jpeg'
    },
    {
      title: 'Big Buck Bunny II',
      year: 2019,
      studio: 'Universal Studio',
      movie: "http://media.w3.org/2010/05/bunny/movie.mp4",
      poster: '/bbb2-poster.jpeg',
      cardPoster: '/card-poster-bbb.jpeg'
    },
    {
      title: 'Time Travel',
      year: 2021,
      studio: 'Universal Studio',
      movie: "http://media.w3.org/2010/05/video/movie_300.webm",
      poster: '/sintel-poster.jpeg',
      cardPoster: '/card-poster-sintel.jpeg'
    }
  ];

  const streamFilm = (data) => {
    setVideo(data);
    setLoading(false);
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://video-react.github.io/assets/video-react.css"
      />

      <NavbarComponent />
      <div className="container mt-3">
        <h1>Video</h1>
        <hr />

        {/* Tampilkan Film */}
        {
          loading ? '' : (
            <div className="card p-3">
              <Player playsInline src={ video.movie } poster={ video.poster }>
                <BigPlayButton position='center'>
                  {/* autoHide digunakan untuk menghilangkan bagian play, spekaer, durasi video */}
                  {/* Jika diatur true maka dalam beberapa waktu bagian ini aku di hide */}
                  <ControlBar autoHide={ true } />
                </BigPlayButton>
              </Player>
            </div>
          )
        }

        {/* Pilihan Film */}
        <div className="row align-items-center mt-2">
          {
            sources.map((source) => {
              return (
                <div className="col-sm-6 col-md-6 col-lg-3" key={ source.title }>
                  <div className="card">
                    <img src={ source.cardPoster } className="card-img-top" alt="banner-movie" />
                    <div className="card-body">
                      <h5 className="card-title">
                        { source.title }
                      </h5>
                      <p className="text-muted">
                        Year: { source.year }
                      </p>
                      <p className="text-muted">
                        Studio: { source.studio }
                      </p>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className="d-grid gap-2">
                        <p className="btn btn-primary" onClick={ () => streamFilm(source) }>Stream Now!</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default VideoPage;
