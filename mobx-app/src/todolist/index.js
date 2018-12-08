import React, { Component } from 'react'
import store from '../store'
import TodoContent from './todoContent'
import { inject } from 'mobx-react'

@inject('store')
class TodoList extends Component {
    constructor(){
        super()
        this.state = {
           info :[
                {id : 2,title: '未完成',isFinished:true},
                {id : 1,title: '已完成',isFinished:false},
           ]
        }
    }
    render(){
        let { saveNewTodo } = this.props.store.todolist
        return (
            <div>
                <h1>TodoList</h1>
                <input onKeyUp = {(e)=>{
                    if(e.keyCode === 13){
                        let val = e.target.value
                        saveNewTodo(val)
                    }
                    
                }} type="text"/>
                <TodoContent  title = {this.state.info}/>
            </div>
        )
    }
}

export default TodoList