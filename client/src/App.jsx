
import './App.css'
import OurHistory from './Compoenent/History/History'
import Navbar from './Compoenent/Navbar/Navbar'
import Setup from './Compoenent/Setup/Setup'
import Banner from './Compoenent/banner/Banner'
import Philosophy from './Compoenent/philosophy/Philosophy'
import Testimonial from './Compoenent/testimonial/Testimonial';
import PromoSection from './Compoenent/footer/Footer'

function App() {

  return (
    <>
  <Navbar/>
  <Banner/>
  <OurHistory/>
  <Philosophy/>
  <Testimonial/>
  <Setup/>
  <PromoSection/>
    </>
  )
}

export default App
