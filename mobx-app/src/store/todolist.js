import { observable , computed,action,runInAction } from 'mobx' 
import uuid from 'uuid'
import { asyncAction } from '../api'


class Todostore {
    @observable todos = [   // 定义一条被观察的数据 在需要使用的页面再引入observable
        { id:uuid(),title:'今天也是元气满满的一天呢',isFinished:false },
        { id:uuid(),title:'日常懵逼',isFinished:true }
    ]
    @computed get finished (){    // 需要加获得属性
        return this.todos.filter(item=>item.isFinished)
    }
    @computed get unfinished (){
        return this.todos.filter(item=>!item.isFinished)
    }
    // @action addTodo = (title)=>{
    //     this.todos = this.todos.concat([{
    //         id:uuid(),title,isFinished:false
    //     }])
    // }

    // @action.bound saveNewTodo (title)  {
    //     console.log(this)
    //     asyncAction().then(this.addTodo.bind(null,title))     
    // }
    // @action.bound saveNewTodo(title) {
    //     asyncAction().then(
    //         action('addtodo',() =>{
    //             this.todos = this.todos.concat([{
    //                 id:uuid(),title,isFinished:false
    //             }])
    //         })
    //     )
    // }

    @action.bound  async saveNewTodo(title){
        const projects = await asyncAction()
        runInAction(()=>{
            this.todos = this.todos.concat([{
                id:uuid(),title,isFinished:false
            }])
        })
    }

    @action changeFinished = (id)=>{
        this.todos.forEach((item)=>{
            if(item.id === id){
                item.isFinished = !item.isFinished 
            }
        })
        return this.todos
    }
}

export default new Todostore()