import SearchIcon from "@mui/icons-material/Search";
import linkedinlogo from "../../images/linkedin_logo.png";
import HeaderOptions from "./headerOptions";
import CottageIcon from '@mui/icons-material/Cottage';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Me from '../../images/laptopwave.png'
import './header.css';
const header = () => {
  return (
    <div className="header">
      <div className="header__left">
        {/* linkedIn logo */}
        <img src={linkedinlogo} alt="" />
        <div className="header__search">
          {/* Search icon */}
          <SearchIcon />
          <input type="text" name="" id="" placeholder="Recherche" />
        </div>
      </div>
      <div className="header__right">
       <HeaderOptions Icon={CottageIcon} title='Accueil'/>
       <HeaderOptions Icon={SupervisedUserCircleIcon} title='Réseau'/>
       <HeaderOptions Icon={BusinessCenterIcon} title="Offres d'emploi"/>
       <HeaderOptions Icon={TextsmsIcon} title='Messagerie'/>
       <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOptions avatar={Me} title='Vous'/>
      </div>
    </div>
  );
};

export default header;
