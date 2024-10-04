import React, { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard/CharacterCard';

const RickAndMortyCharacterCard = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const param  = props.id;
   
    useEffect(() => {
      const url = "https://rickandmortyapi.com/api/character/" + param;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data,"data");
          setName(data.name)
          setImage(data.image)
          setGender(data.gender); 
          setStatus(data.status);
                  
        }).catch((error,) => {
          console.log(error,"error");
        })
        
    }, [])
  
  
    return (
      <div>
        <CharacterCard name={name} img={image} gender={gender} status={status} />
      </div>
    )
}

export default RickAndMortyCharacterCard