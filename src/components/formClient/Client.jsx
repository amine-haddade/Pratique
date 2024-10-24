import IsOline from "./IsOline"

import { LockKeyhole, MailIcon } from "lucide-react"
import {GetDataUser} from "../../_Provider/index"
function Client() {
    const{email,password,handelEmail,handelPassword}=GetDataUser()
    const Oline=IsOline()
    console.log(Oline ? '✅ En ligne' : '❌ Déconnecté')

  return (
    <div className="body">
        <form action="" method="post" >
            <h1>formulaire d inscerption</h1>
            <div className="row">
                <label htmlFor="email"  ><MailIcon className="icon" />email</label>
                <input value={email} onChange={(e)=>handelEmail(e)} type="email" name="email" id="email" placeholder="taper votre email" />
            </div>
            <div className="row">
                <label htmlFor="password"><LockKeyhole className="icon"    />password</label>
                <input value={password} onChange={(e)=>{handelPassword(e)}} type="password" name="password" id="password" placeholder="taper mots de pass" />
            </div>
            <button>submit</button>
        <p>si vous n avait pas de compte ?<a> Sincrire</a></p>
        </form>
        
    </div>
  )
}

export default Client
