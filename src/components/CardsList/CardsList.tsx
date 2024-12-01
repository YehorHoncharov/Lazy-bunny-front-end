import {Card} from '../CardBunny/CardBunny' 
import './CardsList.css'
// interface ICategory {
//     categoryName: string
//     cardList: []
// }

export function CardsList(){
    const cards = [
        {id: 0, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 1, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 2, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 3, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
        {id: 4, name: 'Django Unchained', img: '/static/img/DjangoFilm.png', rating: 4, year: 2009, genre: 'thriller', moodImg: '/static/img/CardBadBunny.png'},
    ]

    return (
        <div className='cardsList'>
            
            {cards.map((card) =>{

                return <Card key={card.id} name={card.name} img={card.img} rating={card.rating} year={card.year} genre={card.genre} moodImg={card.moodImg}></Card>
            })}


        </div>
    )
}