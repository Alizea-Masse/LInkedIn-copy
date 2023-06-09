import "./style.css";
import InputOption from "./inputOption";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import ArticleIcon from "@mui/icons-material/Article";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import Posts from "../Posts";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";


function Feed() {
    const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: "This is a test",
      message: input,
      photoUrl: user.photoUrl || "" ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Commencer un post"
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Envoyer
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SmartDisplayIcon} title="Vidéo" color="#7FC15E" />
          <InputOption
            Icon={InsertInvitationIcon}
            title="Événement"
            color="#E7A33E"
          />
          <InputOption
            Icon={ArticleIcon}
            title="Rédiger un article"
            color="rgb(214, 66, 21)"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
        ))}
        </FlipMove>
    </div>
  );
}

export default Feed;
