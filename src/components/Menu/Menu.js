import React from 'react';
import './Menu.css'

const Menu = (props) => {

  const getPageName = (event) => {
    props.changePage(event.target.name)
  }

  return (<aside>
    <button name='local' onClick={getPageName}>local</button>
    <button name='entertainment' onClick={getPageName}>entertainment</button>
    <button name='health' onClick={getPageName}>health</button>
    <button name='science' onClick={getPageName}>science</button>
    <button name='technology' onClick={getPageName}>technology</button>
    </aside>)
}




export default Menu;
