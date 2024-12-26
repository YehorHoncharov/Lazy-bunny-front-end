import React from "react"
import { CardsList } from "../CardsList/CardsList"
import './CategoriesOfMovies.css'


export function CategoriesOfMovies(){
    return(
        <div >
            <div>
                <div className="categoryInfo">
                    <h1>Today's best</h1>
                    <img src="/static/img/SectionsFilms.png" alt="" />
                </div>
                <CardsList></CardsList>
            </div>
            <div>
                <div className="categoryInfo">
                    <h1>Popular this week</h1>
                    <img src="/static/img/SectionsFilms.png" alt="" />
                </div>
                <CardsList></CardsList>
            </div>
            <div>
                <div className="categoryInfo">
                    <h1>New this month</h1>
                    <img src="/static/img/SectionsFilms.png" alt="" />
                </div>
                <CardsList></CardsList>
            </div>
            <div>
                <div className="categoryInfo">
                    <h1>Coming soon</h1>
                    <img src="/static/img/SectionsFilms.png" alt="" />
                </div>
                <CardsList></CardsList>
            </div>
            <div>
                <div className="categoryInfo">
                    <h1>TV shows</h1>
                    <img src="/static/img/SectionsFilms.png" alt="" />
                </div>
                <CardsList></CardsList>
            </div>
            
        </div>
    )

}