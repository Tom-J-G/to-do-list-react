import React from 'react';
import { Row, Col, Button} from 'reactstrap';
import { MdCheck } from 'react-icons/md'

interface toDoList {
    id: number,
    message: string,
    done: boolean,
    priority: string,
    updateListItem: (id: number, type: string) => void
}

const ToDoSingle = (item: toDoList) => {
    
    const updateItem = (type: string) => {
        item.updateListItem(item.id, type)
    }

    return(
        <Row>
            <Col xs="10" onClick={() => updateItem('priority')}>
                {item.message}
            </Col>
            <Col xs="2" >
                {item.done ? null :
                <Button onClick={() => updateItem('done')}>
                    <MdCheck />
                </Button>
                }
            </Col>
        </Row>
    )
}

export default ToDoSingle;