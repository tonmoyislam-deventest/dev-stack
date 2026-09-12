import CardSection from "./components/cardsection/CardSection"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navar"
const App = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <CardSection/>
      <Footer/>
    </div>
  )
}

export default App
