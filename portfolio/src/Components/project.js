import '../ComponentsStyle/project.css'
import Sun from '../images/Sunny.png'
import Pokeball from '../images/pokemonbattler.png'
import Severace from '../images/severance.png'
import GitHubLogo from '../images/Octocat.png'
import NetlifyLogo from '../images/logomark.png'

export default function Project(props) {

  const projectRef = props.projectRef

  return (
    <div ref={projectRef} class="projectArea">
      <div class="projectDiv">
        <div class='projTitle'>
          <h1>Projects</h1>
          </div>
        <div class='projectBox'>
          <div class="p1">
            <div id="p1img">
              <img id="sunny" src={Sun}></img>
            </div>
            <div class='projectSocialDiv'>
              <div>
              <a href="https://github.com/MediogreCoder/SunnyBar">
                  <img class='projSocial' src={GitHubLogo} />
              </a>
              </div>
              <div>
              <a href="https://sunnyscore.netlify.app/">
                  <img class='projSocial' src={NetlifyLogo} />
              </a>
              </div>
            </div>
            
        </div>
        <div class="p2">
            <div id="p2img">
              <img id="poke" src={Pokeball}></img>
            </div>
            <div class='projectSocialDiv'>
              <div>
              <a href="https://github.com/MediogreCoder/API-Pokemon-Battler.git">
                  <img class='projSocial' src={GitHubLogo} />
                </a>
              </div>
            <div>
            <a href="https://statuesque-faloodeh-0c0893.netlify.app/">
                <img class='projSocial' src={NetlifyLogo} />
                </a>
              </div>
            </div>
        </div>
        <div class="p3">
            <div id="p3img">
              <img id="sev" src={Severace}></img>
            </div>
            <div class='projectSocialDiv'>
              <div>
              <a href="https://github.com/MediogreCoder/SeveranceAPI">
                  <img class='projSocial' src={GitHubLogo} />
                  </a>
              </div>
              <div>
              <a href="https://incomparable-choux-0f430c.netlify.app/">
                  <img class='projSocial' src={NetlifyLogo} />
                  </a>
              </div>
            </div>
        </div>
        </div>
      </div>
      
      </div>
    );
  }
