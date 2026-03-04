
import './App.css'
import Box from './components/layout/Animation'
import WhiteHero from './components/sections/WhiteHero'
import StickyScrollBoxes from './components/sections/StickyScrollBoxes'
import Footer from './components/layout/Footer'

function App() {

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #030712 0%, #0a1222 45%, #0a1730 100%)",
      }}
    >
      <div
        style={{ height: "30px" }}
        className="w-full bg-[#020617] text-white flex items-center justify-center text-[12px] font-medium tracking-[0.04em] border-b border-[#1d2941]"
      >
        New: Chargeback prevention updates are now live
      </div>
      <Box></Box>
      <WhiteHero></WhiteHero>
      <StickyScrollBoxes></StickyScrollBoxes>
      <Footer></Footer>
    </div>
  )
}

export default App
