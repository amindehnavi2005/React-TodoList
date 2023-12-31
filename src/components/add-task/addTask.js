import React, {Component} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

class AddTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            tasks: [],
        }

    }

    render() {
        return (
            <Form className={"mt-3 mb-5 text-center"} onSubmit={(event) => this.addTask(event)}>
                <Row>
                    <Col xs={"12"} sm={"8"} lg={"8"}>
                        <Form.Group>
                            <Form.Control type={"text"} value={this.state.inputValue}
                                          placeholder={"فعالیت مورد نظر خود را وارد کنید "}
                                          onChange={(event) => this.todoEditTitle(event)}/>
                        </Form.Group>
                    </Col>
                    <Col xs={"12"} sm={"4"} lg={"4"}>
                        <Button style={{backgroundColor: "#61DBFB"}} onClick={(event) => this.addTask(event)}>افزودن
                            فعالیت</Button>
                    </Col>
                </Row>
            </Form>
        );
    }

    todoEditTitle(event) {
        event.preventDefault();
        this.setState({inputValue: event.nativeEvent.target.value});
    }

    addTask(event) {
        event.preventDefault();
        let newTask = this.state.inputValue;
        let newTasks = this.state.tasks;
        this.props.onClickaddTodo(event, newTask, newTasks);
        this.setState({
            inputValue: '',
        });
    }
}

export default AddTask;