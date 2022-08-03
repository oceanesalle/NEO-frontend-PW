import React, {useState} from 'react';
import "./Header.css";
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from "react-scroll"; 

export const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>
        {menuOpened === false && mobile === true ? (
          <div
          style={{
            backgroundColor: 'var(--appColor)', 
            padding: '0.5rem', 
            borderRadius: "5px",
          }}

          onClick={() => setMenuOpened(true)}
          >
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ) : (
        <ul className='header-menu'>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            activeClass="active"
            to='header'
            spy={true}
            smooth={true}
            > 
            Accueil 
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='planning'
            spy={true}
            smooth={true}
            > 
            Planning fitness 
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='reservation'
            spy={true}
            smooth={true}
            > 
             Réservation de cours
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='musculation'
            spy={true}
            smooth={true}
            > 
           Musculation
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='plans'
            spy={true}
            smooth={true}
            > 
            Tarif
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='plans'
            spy={true}
            smooth={true}
            > 
            Team
            </Link>
          </li>
          <li >
            <Link
            onClick={()=>setMenuOpened(false)}
            to='contact'
            spy={true}
            smooth={true}
            > 
            Contact 
            </Link>
          </li>
        </ul>
        )}
    </div>
  );
};
