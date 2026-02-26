import axios from "axios"
import { useState } from "react"
function Reg(){
    const [name,setName]=useState(
        {
            username:"",
            email:"",
            password:""
        }
    )
    const changeName=(e)=>{
        setName({...name,[e.target.name]:e.target.value})
    }
    const submit=async()=>{
        try{
            const res=await axios.post("https://cabsystemsms-1.onrender.com/register",name)
            alert(res.data)
        }
        catch(xyz){
            alert(xyz.response?.data ||"Error")
        }
    }
    return(
        <>
        <h1>hey i am App</h1>
        <input onChange={changeName} name="username" placeholder="username"/>
        <input onChange={changeName} name="email" placeholder="email"/>
        <input onChange={changeName} name="password" placeholder="password"/>
        <button onClick={submit}>Submit</button>
        </>
    )
}
export default Reg