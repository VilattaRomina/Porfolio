import React, {useContext} from 'react'
import { ThemeContext } from '../../context';

const WorkItem = ({item}) => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='work__card' key={item.id}>
    <img src={item.image} alt='' className='work__img'/>
    <h3 className='work__title'  style={{color: darkMode && '#fff'}}>{item.title}</h3>
    <a className='work__button' href={item.link} target='_blank' style={{color: darkMode && '#fff'}}>
    Ver proyecto <i className='bx bx-right-arrow-alt' work__button-icon></i>
    </a>
     </div>
  )
}

export default WorkItem