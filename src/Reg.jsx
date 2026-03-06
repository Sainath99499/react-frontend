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
        console.log("Submit button clicked", name);
        try{
            const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://cabsystemsms-1.onrender.com";
            console.log("Connecting to:", backendUrl);
            const res=await axios.post(`${backendUrl}/register`,name)
            console.log("Success:", res.data);
            alert(res.data)
        }
        catch(xyz){
            console.error("Error:", xyz);
            alert(xyz.response?.data ||"Error")
        }
    }
    return(
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: 'auto' }}>
        <h1>hey i am App</h1>
        <input onChange={changeName} name="username" placeholder="username"/>
        <input onChange={changeName} name="email" placeholder="email"/>
        <input onChange={changeName} name="password" placeholder="password" type="password"/>
        <button onClick={submit}>Submit</button>
        </div>
    )
}
export default Reg