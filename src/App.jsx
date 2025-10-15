import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import HowToOrder from './components/HowToOrder'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OrderPage from './components/OrderPage'

function App() {
  const [showOrderPage, setShowOrderPage] = useState(false)

  const openOrderPage = () => {
    setShowOrderPage(true)
  }

  const closeOrderPage = () => {
    setShowOrderPage(false)
  }

  return (
    <div className="App">
      <Header />
      <Hero onOpenOrder={openOrderPage} />
      <Menu onOpenOrder={openOrderPage} />
      <About />
      <HowToOrder />
      <Community />
      <Contact />
      <Footer />
      
      {showOrderPage && <OrderPage onClose={closeOrderPage} />}
    </div>
  )
}

export default App
