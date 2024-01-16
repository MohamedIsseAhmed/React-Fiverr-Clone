import React, { useEffect, useState } from 'react'
import './NavBar.scss';
import { Link } from 'react-router-dom';
function NavBar({pathName}) {

  const [active,setActive]=useState(false);
  const [open, setOpen] = useState(false);
  

  const scroldEventListener=()=>{
    window.scrollY>0?setActive(true):setActive(false);
  }
  useEffect(()=>{

    window.addEventListener('scroll',scroldEventListener);

    return ()=>{
      window.removeEventListener('scroll',scroldEventListener);
    }
  },[]);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  console.log(pathName);
  return (
    <div className={(active || pathName!=='/') ? 'navbar active':'navbar'}>
      <div className="container">
        <div className="logo">
          <Link className='link' to='/'>
            <span className='text'>Fiverr</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className="links">
          <span>Liverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become Seller</span>}
          {!currentUser?.isSeller && <button>Join</button>}
      
          {currentUser?.isSeller &&
            <div onClick={()=>setOpen(!open)} className="user">
              <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <span>{currentUser?.username}</span>
              {open &&<div className="options">
                {currentUser?.isSeller &&
                  <>
                    
                    <Link className="link" to="/mygigs">
                      Gigs
                    </Link>
                    <Link className="link" to="/add">
                      Add New Gig
                    </Link>

                  </>
                }
                <Link className="link" to="/orders">
                  Orders
                </Link>
                <Link className="link" to="/messages">
                  Messages
                </Link>
                <Link className="link" to="/">
                  Logout
                </Link>
              </div>
              }
            </div>

          }
        </div>
      </div>
      
      { (active || pathName!=='/')&&
         <>
         <hr>
         
         </hr>
         <div className="menu">
           <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
         </div>
         <hr/>
         </>
      }
     
     </div>
  )
}

export default NavBar