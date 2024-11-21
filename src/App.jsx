import Box from "./Box"
import Aside from "./component/Aside"
import Aside2 from "./component/Aside2"
import Aside3 from "./component/Aside3"
import Aside4 from "./component/Aside4"
import Aside5 from "./component/Aside5"
import Faqs from "./component/Faqs"
import Footer from "./component/Footer"
import Footer1 from "./component/Footer1"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Main from "./component/Main"
import Contact from "./component/Contact"

 

function App() {
  return (
    <>

      <div className=" bg-[#222222] bg-center w-full h-screen overflow-auto">

      <Header showButton={true} showMobileHeader={true} justifyContent="justify-end" width="w-[1190px]" marginright="mr-[330px]" />

        <div className="mt-28">

          <Main />
        </div>
        <div className="mt-20">

          <Hero />
        </div>
        <div className="mt-20">

          <Aside />
        </div>

        <div className="mt-20">
        <Aside2/>
        </div>

        <div className="mt-16 md:mt-0">

          <Aside3/>
        </div>
        <div className="mt-20">

          <Aside4/>
        </div>
        <div className="mt-20">

        <Aside5/>
        </div>
        <div className="mt-20">
          <Box/>
        </div>
        <div className="mt-20">
          <Faqs/>
        </div>
        <div className="mt-20">
          <Contact/>
        </div>
        <div className="mt-20">
        <Footer/>
        </div>
        <div className="mt-20">
        <Footer1/> 
        </div>
        </div>
        </>
  )
}

export default App
