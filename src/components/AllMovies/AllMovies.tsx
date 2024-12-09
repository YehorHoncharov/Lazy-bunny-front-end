import { useEffect, useState } from 'react'
// import { CardsList } from '../CardsList/CardsList'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import './AllMovies.css'
import { Card } from '../CardBunny/CardBunny'

const cards = [
    {id: 0, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'Action', moodImg: '/static/img/CardBadBunny.png'},
    {id: 1, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
    {id: 2, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'Comedy', moodImg: '/static/img/CardBadBunny.png'},
    {id: 3, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
    {id: 4, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
]

export function AllMovies(){
    
    const [filteredMovies, setFilteredMovies] = useState(cards)
    const [selectedGenre, setSelectedGenre] = useState('AllGenre')

    useEffect(() =>{
        if (selectedGenre === 'AllGenre'){
            setFilteredMovies(cards)
        }else{
            setFilteredMovies(cards.filter( (movie) =>{
                return movie.genre === selectedGenre
            }))
        }
    }, [selectedGenre])
    

    return (
      <div className='allMoviesPage'>
        <Header />
          <div className="filterOfFilms">

            <p className='textFilter'>Choose films to suit your tastes</p>

            <div className='filter'>
              <select
                className="chooseGenre"
                onChange={(event) => {
                  setSelectedGenre(event.target.value);
                }}
              >
                <option value="AllGenre">All genre</option>
                <option value="Action">Action</option>
                <option value="Melodramas">Melodramas</option>
                <option value="Comedy">Comedy</option>
                <option value="Adventures">Adventures</option>
                <option value="Detectives">Detectives</option>
                <option value="Dramas">Dramas</option>
                <option value="Crime">Crime</option>
                <option value="Thrillers">Thrillers</option>
                <option value="Horror">Horror</option>
                <option value="Fiction">Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Romance">Romance</option>
                <option value="Family">Family</option>
                <option value="Documentary">Documentary</option>
              </select>

              <select className="chooseYear">
                <option value="">Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>

              <select className="chooseFilter">
                <option value="">Filter</option>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="top-rated">Top Rated</option>
              </select>
            </div>
            
          </div>

          <div className="cardsList">
            {filteredMovies.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                img={card.img}
                rating={card.rating}
                year={card.year}
                genre={card.genre}
                moodImg={card.moodImg}
              />
            ))}
          </div>
          <hr />
        <Footer />
      </div>
    );
    
}