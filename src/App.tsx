import CardSection from "./components/cardsection/CardSection"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navar"
const App = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <CardSection/>
    </div>
  )
}

export default App
