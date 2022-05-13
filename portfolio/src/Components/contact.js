import '../ComponentsStyle/contact.css'
import Resume from '../files/Evan_Mei_Resume_2022.pdf'

export default function Contact(props) {
  const contactRef = props.contactRef
  return (
    <div ref={contactRef} class="contactArea">
    <div class="contactDiv">
        <h1 id="contactTitle">Lets Connect!</h1>
        <h2>Email: em8258580@gmail.com</h2>
        <h2>Resume:<a href={Resume}> Click here!</a></h2>
      </div>
  </div>
    );
  }