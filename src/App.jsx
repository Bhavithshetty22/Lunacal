import { useState } from 'react'
import { motion } from 'framer-motion'
import './styles/App.css'
import AboutMe from './components/AboutMe'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
      <motion.div 
        className="container"
        initial={{ opacity: 0, rotateY: -15, x: -50 }}
        animate={{ opacity: 1, rotateY: 0, x: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1]
        }}
        style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      >
        <div className="left-container"></div>
        <div className="right-container">
          <AboutMe />
          <div className="divider"></div>
          <Gallery />
          <div className="divider"></div>
        </div>
      </motion.div>
    </>
  )
}

export default App