import {useEffect,useState} from "react";
import API from "./api";
export default function AgricultoresCrud(){
 const [lista,setLista]=useState([]); const [form,setForm]=useState({});
 function update(e){ setForm({...form,[e.target.name]:e.target.value});}
 async function listar(){ const r=await fetch(API+"/api/agricultores"); setLista(await r.json());}
 async function salvar(){ await fetch(API+"/api/agricultores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)}); listar();}
 async function deletar(id){ await fetch(API+"/api/agricultores/"+id,{method:"DELETE"}); listar();}
 useEffect(()=>{listar();},[]);
 return (<div><h2>Agricultores</h2>
  <input name="nome" placeholder="Nome" onChange={update}/>
  <input name="cpf" placeholder="CPF" onChange={update}/>
  <button onClick={salvar}>Salvar</button>
  <ul>{lista.map(a=><li key={a.id}>{a.nome}<button onClick={()=>deletar(a.id)}>X</button></li>)}</ul>
 </div>);
}