import '../ComponentsStyle/project.css'
import GitHubLogo from '../images/Octocat.png'
import NetlifyLogo from '../images/logomark.png'
import Slideshow from './slideShow.js'
// import ImageSlider from './projectImageSlider'
// import { SliderData } from './projectSliderData'


export default function Project(props) {

  const projectRef = props.projectRef

  return (
    <div ref={projectRef} class="projectArea">
      <div class="projectDiv">
        <div class='projTitle'>
          <h1>Projects</h1>
          
          </div>
        <div class='projectBox'>
          <Slideshow
          images={[
            'https://i.imgur.com/dHo7TcI.png',
            'https://i.imgur.com/N0NEGhS.png',
            'https://i.imgur.com/yumppmR.png'
          ]}
          links={[
            'https://sunnyscore.netlify.app/',
            'https://statuesque-faloodeh-0c0893.netlify.app/',
            'https://incomparable-choux-0f430c.netlify.app/'
          ]}
          ghlinks={[
            'https://github.com/MediogreCoder/SunnyBar',
            'https://github.com/MediogreCoder/API-Pokemon-Battler.git',
            'https://github.com/MediogreCoder/SeveranceAPI'
          ]}
          />
        {/* <ImageSlider slides={SliderData} /> */}
          {/* <div class="p1">
            <div id="p1img">
              <img id="sunny" src={Sun} alt='screenshot'></img>
            </div>
            <div class='projectSocialDiv'>
              <div>
              <a href="https://github.com/MediogreCoder/SunnyBar">
                  <img class='projSocial' src={GitHubLogo} alt='location'/>
              </a>
              </div>
              <div>
              <a href="https://sunnyscore.netlify.app/">
                  <img class='projSocial' src={NetlifyLogo} alt='location'/>
              </a>
              </div>
            </div>
            
        </div>
        <div class="p2">
            <div id="p2img">
              <img id="poke" src={Pokeball} alt='screenshot'></img>
            </div>
            <div class='projectSocialDiv'>
              <div>
              <a href="https://github.com/MediogreCoder/API-Pokemon-Battler.git">
                  <img class='projSocial' src={GitHubLogo} alt='location'/>
                </a>
              </div>
            <div>
            <a href="https://statuesque-faloodeh-0c0893.netlify.app/">
                <img class='projSocial' src={NetlifyLogo} alt='location'/>
                </a>
              </div>
            </div>
        </div>
        <div class="p3">
            <div id="p3img">
              <img id="sev" src={Severace} alt='screenshot'></img>
            </div>
            <div class='projectSocialDiv'>
              <div>
              <a href="https://github.com/MediogreCoder/SeveranceAPI">
                  <img class='projSocial' src={GitHubLogo} alt='location'/>
                  </a>
              </div>
              <div>
              <a href="https://incomparable-choux-0f430c.netlify.app/">
                  <img class='projSocial' src={NetlifyLogo} alt='location'/>
                  </a>
              </div>
            </div>
        </div> */}
        </div>
      </div>
      
      </div>
    );
  }
