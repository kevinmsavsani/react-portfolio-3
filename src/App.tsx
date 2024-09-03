import StarsCanvas from './components/main/StarBackground'
import Navbar from './components/main/Navbar'
import Footer from './components/main/Footer'
import Hero from './components/main/Hero'
import Skills from './components/main/Skills'
import Encryption from './components/main/Encryption'
import Projects from './components/main/Projects'

function App() {
  return (
    <div className={`bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <StarsCanvas />
      <Navbar />
      <main className="h-full w-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Skills />
          <Encryption />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
