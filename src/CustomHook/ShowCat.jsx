import UseCatt from "./UseCatt"
function ShowCat() {
  const Resp=UseCatt()
  return (
    <div className="main-content">
        <h1>your catt this is</h1>
      {Resp &&
      (
        <img width={'300px'} src={Resp}></img>
      )}
    </div>
  )
}

export default ShowCat
