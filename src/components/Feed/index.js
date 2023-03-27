import './style.css'
import InputOption from './inputOption' 
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import ArticleIcon from '@mui/icons-material/Article';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import Posts from '../Posts'
import PDP from '../../images/laptopwave.png'
import { useState } from 'react'


function Feed() {
    const [posts, setPosts] = useState([]);
    const sendPost = e => {
        e.preventDefault();
       // setPosts([...posts]);

    }
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
                <form action="">
                    <input placeholder='Commencer un post' type="text"/>
                    <button onClick={sendPost} type='submit'>Envoyer</button>
                </form>
            </div>
            <div className="feed__inputOptions">
               <InputOption Icon={ImageIcon}title="Photo" color="#70B5F9"/>
               <InputOption Icon={SmartDisplayIcon}title="Vidéo" color="#7FC15E"/>
               <InputOption Icon={InsertInvitationIcon}title="Événement" color="#E7A33E"/>
               <InputOption Icon={ArticleIcon}title="Rédiger un article" color="rgb(214, 66, 21)"/>
            </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
        <Posts/>
            ))}
            <Posts name="Alizéa Massé" description="This is a test" message="This worked !" photoUrl={PDP}/>
    </div>
  )
}

export default Feed