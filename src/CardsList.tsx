import {Card} from './CardBunny' 

interface ICategory {
    categoryName: string
    cardList: []
}

export function CardsList(props: ICategory){
    const cards = [
        {id: 0, name: 'Inglourious Basterds', img: '', rating: 4, year: 2009, genre: 'thriller', moodImg: ''},
        {id: 1, name: 'Inglourious Basterds', img: '', rating: 4, year: 2009, genre: 'thriller', moodImg: ''},
        {id: 2, name: 'Inglourious Basterds', img: '', rating: 4, year: 2009, genre: 'thriller', moodImg: ''},
        {id: 3, name: 'Inglourious Basterds', img: '', rating: 4, year: 2009, genre: 'thriller', moodImg: ''},
        {id: 4, name: 'Inglourious Basterds', img: '', rating: 4, year: 2009, genre: 'thriller', moodImg: ''}
    ]

    return (
        <div>
            <h1>{props.categoryName}</h1>
            {{props.cardList}.map((card) =>{

                return <Card key={card.id} name={card.name} img={card.img} rating={card.rating} year={card.year} genre={card.genre} moodImg={card.moodImg}></Card>
            })}


        </div>
    )
}