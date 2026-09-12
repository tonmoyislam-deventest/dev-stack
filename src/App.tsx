import CardSection from "./assets/components/cardsection/CardSection"
import Hero from "./assets/components/hero/Hero"
import Navbar from "./assets/components/navbar/Navar"
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
