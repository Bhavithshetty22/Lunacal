import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/AboutMe.css'
export default function AboutMe() {
const [activeTab, setActiveTab] = useState('about')
 const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ]

    return (
        <>
        <div className="top-right">
            <div className="sidecontent">
              <div className="sidecontent1">
                <div className="sidetopcontent">
                  <img src='/top-right1.png' alt='Top Right 1' className='top-right-image' />
                </div>
                <div className="sidebottomcontent">
                  <img src='/top-right2.png' alt='Top Right 2' className='bottom-right-image' />
                </div>
              </div>
              <div className="sidecontent2"></div>
            </div>
            <div className="tabcontent">
              <div className="tab-container">
                <motion.div
                  className="active-tab-bg"
                  layoutId="activeTab"
                  initial={false}
                  animate={{
                    x: activeTab === 'about' ? 0 : activeTab === 'experiences' ? '100%' : '200%'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35
                  }}
                  style={{
                    position: 'absolute',
                    width: 'calc(33.333% - 5.67px)',
                    height: 'calc(100% - 12px)',
                    top: '6px',
                    left: '6px'
                  }}
                />
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content with fade animation */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="content"
              >
                {activeTab === 'about' && (
                  <>
                    <p>
                      Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
                    </p>
                    <p>
                      I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
                    </p>
                  </>
                )}
                {activeTab === 'experiences' && (
                  <p>Experience content goes here...</p>
                )}
                {activeTab === 'recommended' && (
                  <p>Recommended content goes here...</p>
                )}
              </motion.div>
            </div>
          </div>
          </>
    );
}