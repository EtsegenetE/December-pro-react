// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Benefit from './components/Benefit/Benefit.jsx';
import PopularCourses from './components/PopularCourses/PopularCourses.jsx';
import Status from './components/StatusValue/Status.jsx';
import Features from './components/Features/Features.jsx';
import JoinUs from './components/Joinus/JoinUs.jsx';
import Exam from './components/ExamPreparation/Exam.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Events from './components/ExploreEvents/Events.jsx';
import Teachers from './components/Teachers/Teachers.jsx';

function App() {
 
 
  return (
    <div className='react-app'>
     <Header />
     <Navbar />
     <Hero />
     <Benefit />
     <PopularCourses />
     <Status />
     <Features />
     <JoinUs />
     <Exam />
     <Feedback />
     <Events />
     <Teachers />
     
    </div>
  )
}

export default App
