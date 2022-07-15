import React, {useState} from 'react'
import './Home.css'





function Home() {


    const now = new Date().toLocaleStringString();
    const [time, setTime] = useState(now)


  return (
    <div className='home__container grid'>
    
            

       <div className="box__container1">
           <div className="box__card1">
               <img src="/image-jeremy.png" alt="" className="jeremy" />
               
               <span className="card1__title">
                   <p className="tilte__report">Report for</p>
                   <h2 className="title__name">Jeremy Robson</h2>
               </span>
           </div>
           <div className="box__card2">
               <ul className="time__list">
               
                   
                   <li className="daily__list">Dsily
                   </li>
                   <li className="daily__list">
                   Weakly
                  </li>
                   <li className="daily__list">
                   Monthly</li>
               </ul>
           </div>
       </div>

      <div className='box__conta'>

       <div className="box__work">
           <div className="work__card1">
               <img src="/icon-work.svg" alt="" className="work__img" />
           </div>
           <div className="work__card2">

               <h3 className="work__title"> Work</h3>
               <span className="work__list">
                   <h1 className="work__hour">5hrs</h1>
                   <p className="work__time">7hrs</p>
               </span>
              
           </div>
       </div>
       <div className="box__exercise">
           <div className="exercise__card1">
            <img src="/icon-exercise.svg" alt="" className="exercise__img" />
           </div>
           <div className="exercise__card2">
           <h3 className="exercise__hour"> Exercise</h3>
               <span className="exercise__title">
                   <h1 className="exercise__time">5hrs</h1>
                   <h3 className="exercise__hr">7hrs</h3>
               </span>
           </div>
       </div>
       </div>

    <div>
      <div className="box__con">
      <div className="box__play">
           <div className="play__card1">
           <img src="/icon-play.svg" alt="" className="play__img" />
           </div>
           <div className="play__card2">
           <h3 className="play__hour"> Play</h3>
               <span className="play__title">
                   <h1 className="play__time">{time}</h1>
                   <p className="play__hr">7hrs</p>
               </span>
           </div>
       </div>

      </div>
      <div className="box__social">
           <div className="social__card1"> 
           <img src="/icon-social.svg" alt="" className="social__img" />
           </div>
           <div className="social__card2">
           <h3 className="social__hour"> Social</h3>
               <span className="social__title">
                   <h1 className="social__time">5hrs</h1>
                   <p className="social__hr">7hrs</p>
               </span>
           </div>
       </div>
      </div>
      
    <div>
       <div className="box__study">
           <div className="study__card1">
           <img src="/icon-study.svg" alt="" className="study__img" /> 

           </div>
           <div className="study__card2">
           <h3 className="study__hour"> Study</h3>
               <span className="study__title">
                   <h1 className="study__time">5hrs</h1>
                   <p className="study__hr">7hrs</p>
               </span>
           </div>
       </div>
       
       <div className="box__self-care">
           <div className="self-care__card1"> 
           <img src="icon-self-care.svg" alt="" className="self-care__img" />
           </div>
           <div className="self-care__card2">
           <h3 className="self-care__hour">Self Care</h3>
               <span className="self-care__title">
                   <h1 className="self-care__time">5hrs</h1>
                   <p className="self-care__hr">7hrs</p>
               </span>
           </div>
       </div>
       </div>
    </div>
  )
}

export default Home