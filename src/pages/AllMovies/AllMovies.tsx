import { useEffect, useState } from 'react'
// import { CardsList } from '../CardsList/CardsList'
import { Footer } from '../../shared/Footer/Footer'
import { Header } from '../../shared/Header/Header'
import './AllMovies.css'
import { Card } from '../../shared/CardBunny/CardBunny'

export const cards = [
    {id: 0, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", genre: 'Action', moodImg: '/static/img/CardBadBunny.png'},
    {id: 1, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
    {id: 2, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", genre: 'Comedy', moodImg: '/static/img/CardBadBunny.png'},
    {id: 3, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
    {id: 4, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
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
                id={card.id}
                name={card.name}
                img={card.img}
                rating={card.rating}
                year={card.year}
                genre={card.genre}
                description={card.description}
                moodImg={card.moodImg}
              />
            ))}
          </div>
        <Footer />
      </div>
    );
    
}

