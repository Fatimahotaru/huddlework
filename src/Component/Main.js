import React from 'react'
import screenmockups from '../images/screen-mockups.svg'
import iconcommunities from '../images/icon-communities.svg'
import iconmessages from '../images/icon-messages.svg'
import growTogether from '../images/illustration-grow-together.svg'
import flowing from '../images/illustration-flowing-conversation.svg'
import yourUser from '../images/illustration-your-users.svg'


const Main = () => {
    
    return (

        <section>
        <section className ='section1'>
            
            <img className='img-1A' src= {screenmockups} alt='' />
            
           <div className='section-1'>
           <div className ='section1A'>
               <img className='img-section1a' src ={iconcommunities} alt='' />
               <h1> 1.4K+ </h1>
               <p> Communities Formed </p>
             </div>
            
           
             <div className='section1B'>
               <img className='img-section1b' src ={iconmessages} alt='' />
               <h1> 2.7M+ </h1>
               <p> Messages Sent </p>
            </div>
           </div>
            
        </section>

        <section className='section2'>
         <section className='sectionmain2'>
         <div className='section2A'>
             <div >
                 <h2> Grow Together</h2>
                 <p> 
                     Generate meaningful discussions with ypur audience and 
                     build a strong loyal community. Think of the insightful conversations you miss out on with a feedback form.
                 </p>
             </div>
             <img src ={growTogether} alt=''/>
         </div>
         </section>

       <section className = 'section3'>
           <div className ='section3A'>
              <img src={flowing} alt=''  />

              <div>
                  <h2> Flowing Conversations </h2>
                  <p>
                  You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
                  </p>
              </div>
           </div>
        </section>

        <section className= 'section4'>
            <div className = 'section4A'>
                <div className='section4A-1'>
                    <h2> Your Users</h2>
                    <p> 
                    It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
                    </p>

                </div>
                <img src={yourUser} alt='' />
            </div>
             <div className='section-ready'>
                 <h1> Ready To Build Your Community? </h1>
                 <button> Get Started For Free</button>
             </div>
           
        </section>
    </section>
</section>
       
    )
}

export default Main
