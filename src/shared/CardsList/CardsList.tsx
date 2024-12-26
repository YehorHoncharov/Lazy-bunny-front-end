import {Card} from '../CardBunny/CardBunny' 
import './CardsList.css'

export function CardsList(){
    const cards = [
        {id: 0, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "zxc", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 1, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "zxc", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 2, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "zxc", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 3, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "zxc", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 4, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, description: "zxc", genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
    ]

    return (
        <div className='cardsList'>
            
            {cards.map((card) =>{

                return <Card key={card.id} id={card.id} name={card.name} img={card.img} rating={card.rating} year={card.year} description={card.description} genre={card.genre} moodImg={card.moodImg}></Card>
            })}


        </div>
    )
}