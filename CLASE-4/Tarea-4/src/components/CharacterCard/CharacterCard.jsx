import React from 'react'
const CharacterCard = (props) => {
    console.log(props,"props")
  return (
    <div className="character-card">
      <img src={props.img} alt="" />
      <h1>{props.name}</h1>
      <h1>{props.gender}</h1>
      <h1>{props.status}</h1>
    </div>
  )
}

export default CharacterCard