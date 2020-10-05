import React from 'react';
import { Button } from 'reactstrap';

interface props {
    clear: () => void
}

const ClearButton = ({clear}:props) => {

    const clearAll = () => {
        clear();
    }

    return(<Button className="clear" onClick={() => clearAll()}>Clear List</Button>)
}

export default ClearButton;