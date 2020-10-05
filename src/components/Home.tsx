import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import {ClearStorage} from '../utilities/localStorage';

//components
import InputForm from './InputForm';
import ToDoList from './ToDoList';

//hooks
import { useItem } from '../hooks/useItem';
import { useList } from '../hooks/useList';

const Home = () => {

    const [item, updateId, updateMessage, addedToList, clearItem] = useItem();
    const [list, updateList, updateListItem, addTodo, clearList] = useList();

    const addItem = (id: number, message: string) => {
        addTodo(id, message);
        addedToList()
    }

    const updateMsg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const msg: string = String(e.target.value);
        updateMessage(msg);
    }

    const updateItemInList = (id: number, type: string) => {
        updateListItem(id, type);
    }

    const clearAll = () => {
        clearItem();
        clearList();
        ClearStorage('To_Do_List')
    }

    return(
        <div>
            <Container fluid="md">
                    <Row>
                        <Col>
                            <h1>To Do List</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Add to your To do List<br />
                                once Done tick the box, click the item if its a bigger priority<br/>
                                Top priority at the top of the list
                            </p>
                        </Col>
                    </Row>
                    <InputForm item={item} addItem={addItem} updateMsg={updateMsg} />
                    <Row>
                        <ToDoList list={list} updateListItem={updateItemInList} clearAll={clearAll} />
                    </Row>
            </Container>

        </div>
    )
}

export default Home;