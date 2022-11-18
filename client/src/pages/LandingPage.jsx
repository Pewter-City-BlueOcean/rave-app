import axios from 'axios';

const LandingPage = () => {

  const handleLoginClick = () => {
    axios.get('/spotifyAuth/login');
  }


  return (
    <div onClick={() => {
      handleLoginClick();
    }}>
      Log In With Spotify
    </div>
  )
}

export default LandingPage;