import Logo from "../images/E-logos.jpeg"
import LinkedinLogo from "../images/new-linkedin-logo-white-black-png.png"
import GitHubLogo from '../images/github-logo.png'
import "../ComponentsStyle/header.css"




export default function Header(props) {
  const handleHomeClick = props.handleHomeClick
  const handleAboutClick = props.handleAboutClick
  const handleProjectClick = props.handleProjectClick
  const handleContactClick = props.handleContactClick

  return (
    <div class="mainHeaderContainer">
      <div>
        <img class="mainLogo" src={Logo} alt='lg'/>
    </div>
    <div class='headerContainer'>
      <div class="headerList">
        <div class="headerSect">
          <h2 onClick={handleHomeClick}>Home</h2>
        </div>
        <div class="headerSect">
        <h2 onClick={handleAboutClick}>About</h2>
        </div>
        <div  class="headerSect">
        <h2 onClick={handleProjectClick}>Projects</h2>
        </div>
        {/* <div class="headerSect">
        <h2 onClick={handleContactClick} >Contact</h2>
       </div> */}
      </div>
      </div>
      <div class='socials'>
        <div>
          <a href="https://www.linkedin.com/in/evan-mei-47ba43b1/">
            <img id='LinkedinLogo' src={LinkedinLogo} alt="ll" />
            </a>
        </div>
        <div>
          <a href="https://github.com/MediogreCoder">
            <img id='GithubLogo' src={GitHubLogo} alt="gl"  />
          </a>
      </div>
      </div>
      </div>
  );
}

