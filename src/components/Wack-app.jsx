import { useEffect, useState } from "react"

import dole from '../assets/images/doles.png';
import mole from '../assets/images/moles.png';


export function WakApp(){

    const[moles,setMoles]=useState(new Array(9).fill(false))
    const [score,setScore]=useState(0);

    useEffect(()=>{
        const timer=setInterval(()=>{
            const randomIndex=Math.floor(Math.random()*moles.length)
            // Math.floor arrondit le nombre générer
            //Math.random() généreée une nombre aléatoire entre 1 et 0 0.2325,0.25554,0.255
            // exemple 0.223555 *7 =6,2555
            // math.floor===>6
            const Newmoles=[...moles]
            Newmoles[randomIndex]=true
            setMoles(Newmoles)

        },5000)
        return()=>{
            clearInterval(timer)
        }
        
    },[])
    function check(element,index){
        console.log(element,index)
        if(element==true){
            const NewMoless=[...moles]
            NewMoless[index]=false
            setScore(c=>c+1)
            setMoles(NewMoless)
        }
        
    }
    
    const ListMoles=moles.map((item,index)=>{
      return   <img key={index} onClick={()=>check(item,index)}  src={item ? mole :dole} alt="" />
    })
    
    
    return(
        <>
            <h1 style={{fontSize:'30px',textAlign:'center'}}>Score {score}</h1>
            <div className="container">
                {ListMoles}

            </div>
        </>
    )
}