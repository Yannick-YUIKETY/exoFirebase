import React , {useState , useEffect} from 'react'
import {firestore} from './firebase'
import {doc , getDocs } from 'firebase/firestore'
import {useParams} from 'react-router-dom'


const Detail = (data) => {

  let {idvoitures} = useParams() ;

  const [voitures, setvoitures] = useState([]) ;
  const [Loading, setLoading] = useState(false) ; // chargement

  const getOneVoiture = async () =>{

    setLoading(true) ;
    const rqVoitures = doc(firestore ,'voitures' , idvoitures) ;

    const snapVoitures = await getDocs(rqVoitures) ;
  
  
    if (snapVoitures.exists) {
      setvoitures(snapVoitures.data())
    }
  }

  useEffect(() => {
    getOneVoiture() ;
  
    
  }, [])
  

  
  return (
    <div>
      
            <div >
                <img
                    src={data.image}
                    alt={data.name}
                    
                />
            </div>

            <div >
                <h2 >
                    {data.name}
                </h2>
                
            </div>

       
    </div>
  )
}

export default Detail