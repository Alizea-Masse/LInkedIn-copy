import './style.css'
import { Avatar } from '@mui/material'
import background from '../../images/background-radius.jpg'
import Groups3Icon from '@mui/icons-material/Groups3';
import PDP from '../../images/laptopwave.png'

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash"><Groups3Icon/></span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        {/* sidebarTop */}
        <div className="sidebar__top">
            <img src={background} alt="" />
            <Avatar className="sidebar__avatar" src={PDP}/>
            <h2>Alizéa Massé</h2>
            <h4 className='sidebar__desc'>À la recherche active d'une alternance Conceptrice d'application avec l'école O'clock - Développeuse Web / Web Mobile HTML | CSS | JAVASCRIPT | REACT | NODE JS | EXPRESS | SQL | PostgreSQL/MongoDB || spé DATA & API</h4>
        </div>
        {/* sidebarStats */}
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Vues de votre profil</p>
                <p className="sidebar__statNumber">2,657</p>
            </div>
            <div className="sidebar__stat">
                <p>Relations</p>
                <p className="sidebar__statNumber">5,657</p>
            </div>
        </div>
        {/* sidebarBottom */}
        <div className="sidebar__bottom">
            <p>Récent</p>
            {recentItem('Recrutement développeur')}
            {recentItem('MySQL')}
            {recentItem('Javascript/Frontend/UI UX')}
            {recentItem('Javascript')}
            {recentItem('Sécurité informatique')}
        </div>
    </div>
  )
}

export default Sidebar