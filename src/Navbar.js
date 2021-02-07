import React from 'react'
import {FaBars, FaTwitter } from'react-icons/fa'
import {links, social} from './data'
function Navbar() {
    const[showLinks, setShowLinks] = React.useState(false)
    const linksContainerRef =React.useRef(null)
    const linksRef =React.useRef(null)

    React.useEffect(()=>{
        const linksHeight =linksRef.current.getBoundingClientRect().height
        if(showLinks){
            linksContainerRef.current.style.height=`${linksHeight}px`
        }else{
            linksContainerRef.current.style.height = '0px'
        }
    },[showLinks])

    return (
       <nav>
           <div className='nav-center'>
               <div className='nav-header'>
                   <h4> NAVBAR </h4>
                   <button onClick={()=> setShowLinks(!showLinks)} className='nav-toggle'>
                       <FaBars />
                   </button>
               </div>
               <div ref={linksContainerRef}className='links-container show-container'>              
                <ul ref={linksRef} className='links'>
                 {links.map((link)=>{
                const{ id,url, text}= link
                return (<li key={id}>
                 <a href={url}>{text}</a>
                </li>)
                 })}
        
                </ul>
               
               </div>  
               <ul className='social-icons'>
                {social.map((socialIcon)=>{
               const {id, url, icon} =socialIcon
               return(
                   <li key={id}>
                    <a href={url}>{icon}</a>
                   </li>
               )
                })}
               </ul>   

              
           </div>
       </nav>
    )
}

export default Navbar
