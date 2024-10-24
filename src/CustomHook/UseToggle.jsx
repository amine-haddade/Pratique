import { useState } from "react"
function UseToggle(intialvalue=true) {
    const [disabl,setDisable]=useState(intialvalue)
    const toggledisbled=(value)=>{
        setDisable(value)
    }

  return [disabl,toggledisbled]
}

export default UseToggle
