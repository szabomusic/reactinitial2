import React,{useState} from 'react';
import Animal from './Animal'

const Client = ({item}) => {

    return (
        <div>
            <h3>{item.name}</h3>
            {item.pets.map((ani, i)=>{
                return <div>
                          <Animal
                          ani={ani}
                          key={i}
                          />
                               
                        </div>
            })}
        </div>
    )
}

export default Client