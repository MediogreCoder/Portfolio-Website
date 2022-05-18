import '../ComponentsStyle/project.css'
import Slideshow from './slideShow.js'


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
              'https://i.imgur.com/yumppmR.png',
              'https://i.imgur.com/2TgrIMd.png'
            
          ]}
          links={[
            'https://sunnyscore.netlify.app/',
            'https://statuesque-faloodeh-0c0893.netlify.app/',
            'https://incomparable-choux-0f430c.netlify.app/',
            'https://hatin.netlify.app/'
          ]}
          ghlinks={[
            'https://github.com/MediogreCoder/SunnyBar',
            'https://github.com/MediogreCoder/API-Pokemon-Battler.git',
            'https://github.com/MediogreCoder/SeveranceAPI',
            'https://github.com/MediogreCoder/hater'
          ]}
          />
        </div>
      </div>
      
      </div>
    );
  }
