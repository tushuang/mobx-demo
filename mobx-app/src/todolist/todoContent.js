import React, { Component } from 'react'
import { inject,observer } from 'mobx-react'

const TodoItem = (props)=>{
    let { title,id } = props.todo
    let { changeFinished } = props
    return(
        <ul>
            <li><input 
            onClick = {(e)=>{
                changeFinished(id)
            }} 
            type="checkBox"/>{title}</li>
        </ul>
    ) 
}

@inject('store')
@observer
class TodoContent extends Component {
    constructor(){
        super()
        this.renderItem = this.renderItem.bind(this)
    }
    render(){
        return (
            <>
                {this.renderItem()}
            </>
        )
    }
    renderItem(){
        let { todos,finished,unfinished,changeFinished }  = this.props.store.todolist
        let {title} = this.props
        console.log(true?unfinished:finished)
        return title.map((item)=>(
            <div key = {item.id}>
               <h1>{item.title}</h1>
               <ul>
                {
                    (item.isFinished?unfinished:finished).map(todo=>(
                        <TodoItem key = {todo.id} changeFinished = {changeFinished} todo = { todo }/>
                    ))
                }
               </ul>
           </div> 
       ))
    }
}

export default TodoContent