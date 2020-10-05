import React from 'react';
import { Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';

import ToDoSingle from './ToDoSingle';
import ClearButton from './ClearButton';

type toDolist = {
    id: number,
    message: string,
    done: boolean,
    priority: string
}
interface props {
    list: Array<toDolist>
    updateListItem: (id: number, type: string) => void
    clearAll: () => void
}
const ToDoList = ({list, updateListItem, clearAll}: props) => {

    return(
        <Col>
            <Container id="list" fluid="sm">
                <ListGroup>
                    {list.map((x, i) => 
                        <ListGroupItem key={i} color={(x.done) ? 'success' : (x.priority === 'top') ? 'danger' : (x.priority === 'middle') ? 'warning': 'info'}>
                            <ToDoSingle id={x.id} message={x.message} done={x.done} priority={x.priority} updateListItem={updateListItem}/>
                        </ListGroupItem>
                    )}
                </ListGroup>
                <Row>
                    <Col>
                    {(list.length === 0 ? null : <ClearButton clear={clearAll} />)}
                </Col>
            </Row> 
            </Container>
               
        </Col>
    )
}

export default ToDoList;