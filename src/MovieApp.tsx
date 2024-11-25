import { Footer } from './Footer'
import { Header } from './Header'
import { CategoriesOfMovies } from './CategoriesOfMovies'
import { MainFrame } from './MainFrame'
import { Search } from './Search'

// создаем компонент App
export function MovieApp(){
        return(
            <div>
                
                
                <Header />
                <img src="/static/img/MainPage.png" alt="" />
                <hr />
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
