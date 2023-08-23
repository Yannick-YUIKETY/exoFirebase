import React from 'react'

const Voitures = ({data}) => {

    

  return (
    <div>
        <a href={'detail/' +data.id}>
        Voitures : {data.name} 

        <img src={data.image} />
        </a>
    </div>
  )
}

export default Voitures