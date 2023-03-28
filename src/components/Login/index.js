import "./style.css";
import LinkedInLogo from "../../images/LinkedInLogo.png";
import { auth } from "../firebase";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const loginToApp = (e) => {
    e.preventDefault(e);
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
        }))
    }).catch((error) => alert(error.message));
  };
  const register = () => {
    if (!name) {
      return alert("Entrez votre nom complet s'il vous plait");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,

          }))
        });
    }).catch((error) => alert(error.message));
    
  };
  return (
    <div className="login">
      <img className="login__img" src={LinkedInLogo} alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom complet (obligatoire)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Url de photo de profil (facultatif)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          type="password"
        />
        <button
          type="sumbit"
          onClick={loginToApp}
          className="login__signInButton"
        >
          Se connecter
        </button>
      </form>
      <p>
        Pas encore membre ?{" "}
        <span className="login__register" onClick={register}>
          Inscrivez-vous maintenant
        </span>
      </p>
    </div>
  );
}

export default Login;
