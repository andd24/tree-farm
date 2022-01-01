import { Link } from "react-router-dom"
import "./homePage.css"

export const HomePage = () => {
    return (
    <>
    <section className="home">
        <div class="container">
            <img src="https://seesugar.com/wp-content/uploads/2020/09/christmas-tree-farms-avery-county.jpg" alt="Snow" />
            <button className="btn"><Link className="button" to="/orders">Order a tree today!</Link></button>
        </div>
            <div className="title">
            {/* <img className="item" src="https://seesugar.com/wp-content/uploads/2020/09/christmas-tree-farms-avery-county.jpg" alt="trees with snow"/> */}
            <h1 className="item">Welcome to the Farm</h1>
            </div>
            <div className="trees">
                <img className="image" src="https://abc17news.b-cdn.net/abc17news.com/2021/12/S179063956-300.jpg" alt="tree with tag" /> 
                <article className="textbox">
                    <div>Our Fraser Firs are grown from seedling at our farm high in the mountains of western North Carolina.</div>
                </article>
            </div>
            <div className="farm">
                <article className="textbox2">
                    The farm is open for choose and cut festivities throughout the holiday season. 
                    <Link to="/locations/1"> Come make some memories with us!</Link>
                </article>
                <img className="image2" src="https://p300-americantownscom.netdna-ssl.com/img/article/tn-christmas-tree-1.jpg" alt="loading up trees" />
            </div>
            <div className="shop">
                <img className="image3" src="https://www.drought.gov/sites/default/files/hero/news/christmas-tree-industry.jpg" alt="tree with tag" /> 
                <article className="textbox3">
                    If you can't make it to the farm, every year we also bring a little piece of the farm direct to you with our tree stands located in 
                    <Link to="/locations"> various cities </Link> throughout the Southeast.
                </article>
            </div>
            <div className="footer">
                <img src="https://ncchristmastrees.com/wp-content/uploads/NNCTAlogo-2019.png" alt="" />
                <img src="images/pngfind.com-pine-tree-silhouette-png-47958.png" alt="logo" height="200" width="200" />
                <img src="https://i0.wp.com/realchristmastrees.org/wp-content/uploads/2020/02/NCTA-65th-Logo.jpg?fit=383%2C195&ssl=1" alt="" /> ``
            </div>
    </section>
    </>
    )
}