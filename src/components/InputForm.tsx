import React from 'react';
import { Row, Col, Button } from 'reactstrap';

type toDoItem = {
    id: number,
    message: string,
}

interface props {
    item: toDoItem,
    addItem: (id: number, message: string) => void,
    updateMsg: (e: React.ChangeEvent<HTMLInputElement>) => void,

}

const InputForm = ({item, addItem, updateMsg}:props) => {

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            addItem(item.id, item.message)
        }
    }

    return(
        <Row>
            <Col className="input-container right" xs="8">
                <div className="flex-right">
                    <input type="text" placeholder="What to do?" name="toDoListInput" value={item.message} id="listInput" onChange={ e=> updateMsg(e)} onKeyPress={e => handleKeyPress(e)} />
                </div>
            </Col>
            <Col className="left" xs="4">
                <Button className="add" onClick={() => addItem(item.id, item.message)}>Add To List</Button>
            </Col>
        </Row>
    )
}

export default InputForm;