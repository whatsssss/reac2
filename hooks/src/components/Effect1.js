import React, {useState, useEffect} from 'react';
import Axios from 'axios';


export default function Effect1(props){
    const[text, setText] = useState('---')

    const[page,setPage] = useState(1)
    
    const[content, setContent] = useState([])

    useEffect(() => {
        console.log("use text effec....")   
    },[text])

    useEffect(() => {
        console.log("use page effec....") 
        async function fetchData(){
            //Axios.get("http://192.168.41.80:8080/todo/pages/" + page)

            //const res = await

            const res = await Axios.get("http://192.168.41.80:8080/todo/pages/" + page)
            console.log(res.data.content)
        }
        fetchData()
        
    },[page])

    const list = content.map(({tno, title}) => <li key={tno}>{title}</li>)

    

    return(
        <div>
            <h1>Todo List</h1>
            <ul>
                {list}
            </ul>
            <div>
                <button onClick={()=>setPage(2)}>2</button>
                <button onClick={()=>setPage(3)}>3</button>
                <button onClick={()=>setPage(4)}>4</button>
                <button onClick={()=>setPage(5)}>5</button>

            </div>
        </div>

        

        // <div>
        //     <h1>{text}</h1>
        //     <input type = 'text' onChange={(e)=>setText(e.target.value)}>

        //     </input>

        // </div>
    )



    
}