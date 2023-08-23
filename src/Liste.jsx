import React , {useState , useEffect}  from 'react'
import {firestore} from './firebase'
import {query , getDocs , collection} from 'firebase/firestore'
import Voitures from './common/Voitures';

const Liste = () => {

    const [voitures, setvoitures] = useState([]) ;
    const [Loading, setLoading] = useState(false) ; // chargement

    const getAllVoiture = async () => { 
        console.log("start") ;

        const rqVoitures = query (collection(firestore , "voitures")) ;
        const snapVoitures = await getDocs(rqVoitures) ;

        if (!snapVoitures.empty) {
            const dataVoitures = snapVoitures.docs.map(item =>{
                return{id: item.id , ...item.data()}
            }) ;
            
            console.log('datavoiture : ' , dataVoitures ) ;
            setvoitures(dataVoitures) ;
        }
        
    }

    useEffect(() => {
      
        getAllVoiture() ;
    
    }, [])
    



  return (
    <div>
        {Loading? <Loading/> : voitures.map(itemVoiture => <Voitures key={itemVoiture.id}
                                                                        data={itemVoiture}/>
                                                                    )}
    </div>
  )
}

export default Liste