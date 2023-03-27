import './headerOptions.css'
import { Avatar } from '@mui/material'

const HeaderOptions = ({avatar,Icon,title}) => {
  return (
    <div className="headerOptions">
        {/* icons */}
        {Icon && <Icon className="headerOptions__icon"/>}
        {avatar && <Avatar className="headerOptions__icon" src={avatar}/>} 
       <h3 className='headerOptions__title'>{title}</h3>
    
        </div>
      

  )
}

export default HeaderOptions