import '../ComponentsStyle/language.css'
import React from 'react'


export default function Languages(props) {
const Skills = props.Skills

  return (
    <div class='skills'>
      <img src={Skills} alt='lg'></img>
    </div>
  )
}
