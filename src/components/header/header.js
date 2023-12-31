import React, {Component} from 'react';
import {Col, Nav, Navbar, Row} from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <Row style={{display: "flex", justifyContent: "space-between"}}>
                <Col md={"12"} className={"text-center"}>
                    <h4 className={"text-light"}>{new Intl.DateTimeFormat('fa-IR', {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                    }).format(new Date(Date.now()))}</h4>
                    <p style={{color: "#1C8CBC"}}>{this.props.tasks.length} مورد فعالیت</p>
                </Col>
            </Row>
        );
    }

    ShowSelectedStatus(event) {
        this.props.showSelectedStatus(event);
    }
}

export default Header;