import {Container, Form} from "react-bootstrap";
import './todoScreen.css'
import Header from "../components/header/header";
import AddTask from "../components/add-task/addTask";
import Tasks from "../components/tasks/tasks";

import React, {Component} from 'react';

class TodoScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0, todoList: [],
        }

        this.addTodo = this.addTodo.bind(this);
        this.isCompleteTodo = this.isCompleteTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    render() {
        return (<Container className={"todo-section p-5 rounded shadow justify-content-around"}>
            <Header tasks={this.state.todoList}/>
            <AddTask onClickaddTodo={this.addTodo}/>
            {this.state.todoList.length ? (this.state.todoList.map(todo => (<Tasks
                mainTask={todo}
                changeCompleteStatus={this.isCompleteTodo}
                clickRemoveTask={this.removeTodo}
            />))) : null}
        </Container>);
    }

    addTodo(event, newTask) {
        this.state.counter++;
        let newTodo = {todoID: this.state.counter, todoName: newTask, todoStatus: false};
        if (newTask !== "") {
            this.setState({
                todoList: [...this.state.todoList, newTodo,],
            });
            this.state.todoList.push(newTodo);
        }
    }

    isCompleteTodo(id) {
        let selectedTodo = this.state.todoList.find(todo => todo.todoID === id);
        selectedTodo.todoStatus = !selectedTodo.todoStatus;
        this.setState({
            todoList: [...this.state.todoList,]
        });
    }

    removeTodo(id) {
        let selectedTodoList = this.state.todoList.filter(todo => todo.todoID !== id);
        this.setState({
            todoList: [...selectedTodoList,],
        })
    }

}

export default TodoScreen;