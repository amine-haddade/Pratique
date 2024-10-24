
import {useState, useContext,createContext} from "react"
const UserContext=createContext()

export  function UserProvider({children}) {
    const[email,Setemail]=useState("")
    const[password,Setpassword]=useState("")

    const handelEmail=(e)=>{
        Setemail(e.target.value)
    }
    const handelPassword=(e)=>{
        Setpassword(e.target.value)
    }

  return (
    <UserContext.Provider value={{email,password,handelEmail,handelPassword}}>
        {children}
    </UserContext.Provider>
  )
}

export function GetDataUser(){
    return useContext(UserContext)
}



