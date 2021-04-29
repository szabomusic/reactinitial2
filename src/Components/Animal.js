import React,{useState} from 'react';

const Animal = ({ani}) => {

    const [isVaccinated, setIsVaccinated] = useState(ani.isVaccinated)
    const [isLoading, setIsloading] = useState(false)

    const toggle = (ani) => {
        setIsloading(true)
        fetch('api/pets',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'   
              },
              body: JSON.stringify({
                "name":ani.name,
                "isVaccinated":!isVaccinated
              })
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            setIsloading(false)
            setIsVaccinated(!isVaccinated)
          })
          .catch((error) => {
            console.error('Error:', error)
          
        })
    }
    return (
        <div>
              <h4>{ani.name}-Vaccinated: <button 
                            onClick={() => toggle(ani)}
                            >{isLoading ? '...' : isVaccinated ? 'true':'false' }</button>
                            </h4>   
        </div>
    )
}

export default Animal