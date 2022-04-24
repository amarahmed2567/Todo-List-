import React, { useState } from 'react'

export default function App() {

    const [valueTodo,setvalueTodo]=useState('');
    const [addtodo,setAddtodo] =useState([]);



    function HandlarOncheng(e){
        return setvalueTodo(e.target.value)
    }


    function HandlaOnClick(){
        if(addtodo !== ''){
            const obj = {
                id:Math.floor(Math.random()*100),
                value:valueTodo,
                complet:false
            }
        setAddtodo([...addtodo,obj])
        }
        else{
                setAddtodo('No value')   
        }
    }


    function HandlaDelete(e,id){
        e.preventDefault();
        setAddtodo(addtodo.filter((t)=> t.id != id      ));
    }

    function Handlarcomplet(e,id){
        const element = addtodo.findIndex((e)=>e.id == id);
        const NewAddlist = [...addtodo];

        NewAddlist[element]={
            ...NewAddlist[element],
            complet:true
        }
        setAddtodo(NewAddlist)
    }


    return (
        <div className='contenerApp'>

            
            <div className='type-todo-contener'>
                <input 
                className='type-todo'
                placeholder='type your todo'
                onChange={(e)=>HandlarOncheng(e)}
                />
                <button 
                className='send-todo'
                onClick={()=>HandlaOnClick()}
                >
                send</button>
            </div>

        {
        addtodo !=='' ? addtodo.map((prevaddtodo)=>{

            return (
            <div className= { prevaddtodo.complet ? 'todo-box todo-box-complet': 'todo-box'  } key={prevaddtodo.id}>
            <h3>{prevaddtodo.value}</h3>
            <div className='btns'>

                <span 
                className='btn Delete'
                onClick={(e)=>HandlaDelete(e,prevaddtodo.id)}
                >Delete</span>

                <span 
                className='btn complet'
                onClick={(e)=>Handlarcomplet(e,prevaddtodo.id)}
                >complet</span>
            </div>
        </div>
        )
    }):null
        }
        </div>
    )
}
