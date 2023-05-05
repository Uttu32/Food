import React from 'react';
import { Link } from 'react-router-dom';
import Style from "./Navbar.module.css"

const Navbar = () => {
    let value= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72N52GDNXZS22PpLU33GVof9TBe78mLEjsw&usqp=CAU"
  return (
    <div className={Style.Main}>
      <div className={Style.logo}>
        <Link to="/"><img src={value} /></Link>
      </div>

      <div className={Style.tags}>
        <Link to="/"><a>Home</a></Link>
        <Link to="/work"><a>Work</a></Link>
        <Link to="/meal"><a>Meal</a></Link>
        <Link to="/testimonial"><a>Testimonial</a></Link>
      </div>
    </div>
  )
}

export default Navbar
