import { Footer } from './Footer'
import { Header } from './Header'
import { CategoriesOfMovies } from './CategoriesOfMovies'
import { MainFrame } from './MainFrame'
import { Search } from './Search'
import "./css/MovieApp.css"

// создаем компонент App
export function MovieApp(){
        return(
            <div className='contener'>
                
                
                <Header />
                <img className='mainBG' src="/static/img/MainPage.png" alt="" />
                <img className="imgBG" src="/static/img/MainBunny.png" alt="" />
                <MainFrame />
                <hr />
                <Search />
                <hr />
                <CategoriesOfMovies />
                <hr />
                <Footer />
                
            </div>
        )
}
