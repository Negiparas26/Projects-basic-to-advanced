import Greeting from "./Child"

const Par=()=>{

    let mess="hello sending props to child";
    return (
    <>
    <Greeting name ="paras" age={25} message={mess}/>
    </>

    )
}
export default Par ;