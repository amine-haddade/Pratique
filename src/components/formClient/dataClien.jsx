import {GetDataUser} from "../../_Provider/index";
import IsOline from "./IsOline";

function DataClient() {
  const Oline=IsOline();
  const{email,password}=GetDataUser()

  return (
    <div className="dataUser">
      <h1> data user</h1>
      <p>email {email}</p>
      <p>password {password}</p>
      <h1>{Oline ? '✅ En ligne' : '❌ Déconnecté'}</h1>
    </div>
  )
}

export default DataClient
