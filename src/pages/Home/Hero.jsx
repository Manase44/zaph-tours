import Header from "../../components/Header/Header"
import { Link } from "react-router-dom"
const Hero = () => {
  const homePath = window.location.pathname;
  console.log(homePath)
  return (
    <section id="hero" className="hero-section">
        <Header Path={homePath} />
        <div className="section-text">
            <h1>best safaris and adventures</h1>
            <div className="section-cta">
                <Link to={"/book"}>book travel</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero