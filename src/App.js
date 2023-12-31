import './App.css';
import {Container} from "react-bootstrap";
import TodoScreen from "./pages/todoScreen";

function App() {
    return (
        <Container fluid className={"App justify-content-center align-items-center p-5"}>
            <TodoScreen/>
        </Container>
    );
}

export default App;
