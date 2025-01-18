import { Footer } from '../../shared/Footer/Footer'
import { Header } from '../../shared/Header/Header'
import { CategoriesOfMovies } from '../../shared/CategoriesOfMovies/CategoriesOfMovies'
import { MainFrame } from '../../shared/MainFrame/MainFrame'
import { Search } from '../../shared/Search/Search'
import "./MainPage.css"

export function MainPage(){
    return (
        <div className='contener'>
                
                <Header />
                {/* <div>
                    <video autoPlay muted width="640" height="360">
                    <source src="https://imdb-video.media-imdb.com/vi3953117465/1434659607842-pgv4ql-1732573687923.mp4?Expires=1736972403&Signature=Gk9pzT471OfvKiL8xu~P0R48FioS3CKGolSPRdqdEMYbJjUVqCcaFu~DT9C3ZZBiAPFr1GfBdrQm7s8b~6eGEj3HJSxAIN2xbT2LRaj8PNVrnKN~JTVBhsyvKZseXNkO9qPvqGckb3syhLQKUp5199rX3RE7z1cCUnKZrofPBBL8j3Uf6KeYlGQuNqp4--i~woiAamR7YSgTbbDFiqnUITQ26AGSBtxoAsXiFmh8z9BKizhmI9MEN6iQJ9PUTxxgtSQmxo5IuCXewa49m4167swPK6gRikJNCGqQ3l06hf2qfGAL0DSNDYDMP~BBZ5MtaX6wb8dcQ6qJb68PGyYfow__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"/>
                    </video>
                </div> */}
                {/* <iframe
                    width="640"
                    height="360"
                    src="https://imdb-video.media-imdb.com/vi3953117465/1434659607842-pgv4ql-1732573687923.mp4?Expires=1736972403&Signature=Gk9pzT471OfvKiL8xu~P0R48FioS3CKGolSPRdqdEMYbJjUVqCcaFu~DT9C3ZZBiAPFr1GfBdrQm7s8b~6eGEj3HJSxAIN2xbT2LRaj8PNVrnKN~JTVBhsyvKZseXNkO9qPvqGckb3syhLQKUp5199rX3RE7z1cCUnKZrofPBBL8j3Uf6KeYlGQuNqp4--i~woiAamR7YSgTbbDFiqnUITQ26AGSBtxoAsXiFmh8z9BKizhmI9MEN6iQJ9PUTxxgtSQmxo5IuCXewa49m4167swPK6gRikJNCGqQ3l06hf2qfGAL0DSNDYDMP~BBZ5MtaX6wb8dcQ6qJb68PGyYfow__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen>
                </iframe> */}
                <MainFrame />
                <hr />
                <Search />
                <hr />
                <CategoriesOfMovies />
                <Footer />
                
        </div>
    )
}