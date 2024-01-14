import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faChartBar, faUser, faCog, faBell, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [displaySize, setDisplaySize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDisplaySize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className="sidebar">
      {displaySize > 960 &&
        <div className="top-icons">
        <img src={require('./images/butterfly.png')} alt="Profile" />         
          <li className="search"><FontAwesomeIcon icon={faSearch} /></li>
        </div>
      }
      <div className="icons">
        <li className="active"><FontAwesomeIcon className='navbar_icons' icon={faHome} /></li>
        <li><FontAwesomeIcon className='navbar_icons' icon={faChartBar} /></li>
        <li><FontAwesomeIcon className='navbar_icons' icon={faUser} /></li>
        <li><FontAwesomeIcon className='navbar_icons' icon={faCog} /></li>
        {displaySize <= 960 && 
        <>
          <li className="search"><FontAwesomeIcon icon={faSearch} /></li>
        </>
        }
      </div>
      {displaySize > 960 &&
      <div className="bottom-icons">
        <li><FontAwesomeIcon icon={faBell} /></li>
        <li><FontAwesomeIcon icon={faArrowRightFromBracket} /></li>
      </div>
      }
    </div>
    {displaySize <= 960 && 
      <div className='bell-icon'><FontAwesomeIcon className='navbar_icon' icon={faBell} /></div>
    }
    </>
  );
}

export default Sidebar;
