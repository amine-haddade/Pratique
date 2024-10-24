import UseToggle from './UseToggle'
import { useState } from 'react'
function Button1() {
    const [value,setValue]=useState('')
    const [disabled,setDisabled]=UseToggle()
    function handelvalue(e){
        const inputValue=e.target.value
        setValue(inputValue)
        
        if(inputValue===''){
            setDisabled(true)
        }
        else{
            setDisabled(false)
        }
        
    }
    

  return (
    <div className='validate-data'>
      <input className='full-name' value={value} onChange={(e)=>{handelvalue(e)}} />
      <button disabled={disabled} >submit</button>
    </div>
  )
}

export default Button1
