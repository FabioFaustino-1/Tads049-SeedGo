import {useState} from "react";
import Login from "./Login"; import AgricultoresCrud from "./AgricultoresCrud";
export default function App(){
 const [t,setT]=useState(null);
 if(!t) return <Login onLogin={setT}/>;
 return <AgricultoresCrud/>;
}