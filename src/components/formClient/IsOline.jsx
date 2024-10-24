// import React from 'react'
import { useState,useEffect } from 'react'

function IsOline() {
    const [isOline,setIsOline]=useState(true);
    useEffect(()=>{
        function handelIsoline (){
            setIsOline(true)
        }
        function handelIsOfline (){
            setIsOline(false)
        }
        window.addEventListener('online',handelIsoline)
        window.addEventListener('offline',handelIsOfline)
        return ()=>{
            window.removeEventListener('online',handelIsoline)
            window.removeEventListener('offline',handelIsOfline)
        }
    },[])
  return isOline
}

export default IsOline
