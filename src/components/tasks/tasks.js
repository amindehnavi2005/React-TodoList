import React, {Component} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";

class Tasks extends Component {

    
    
    render() {
        return (
            <Container className={"mt-2 mb-2 border-top"}>
                <Col className={"mt-3"} xs={"12"}>
                    <Row>
                        <Col xs={"12"} md={"1"}><Form.Check checked={this.props.mainTask.todoStatus}
                                                            onChange={() => this.taskCompleted(this.props.mainTask.todoID)}></Form.Check>
                        </Col>
                        <Col xs={"12"} md={"9"}>
                            {this.props.mainTask.todoStatus
                                ? (<Form.Label
                                    className={"text-success text-decoration-line-through"}>{this.props.mainTask.todoName}</Form.Label>)
                                : (<Form.Label>{this.props.mainTask.todoName}</Form.Label>)}
                        </Col>
                        <Col xs={"12"} md={"2"} className={"text-start fa fa-trash "}
                             style={{fontSize: "3vh"}}
                             onClick={() => this.removeTask(this.props.mainTask.todoID)}></Col>
                    </Row>
                </Col>
            </Container>
        );
    }

    taskCompleted(id) {
        this.props.changeCompleteStatus(id);
    }

    removeTask(id) {
        this.props.clickRemoveTask(id);
    }
}

export default Tasks;