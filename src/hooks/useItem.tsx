import {useState, useEffect} from 'react';

import {GetLocalStorage} from '../utilities/localStorage';
import {SortToPriorityList} from '../utilities/sort';

type toDolist = {
    id: number,
    message: string,
    done: boolean,
    priority: string
}

interface Iitem {
    id: number
    message: string
}

export const useItem = () => {
    const [item, setItem] = useState<Iitem>({id: 0, message: ''});

    useEffect(() => {
        const storage = GetLocalStorage('To_Do_List');
        let newId:number;
        let newList: toDolist[];
        if(storage !== null) {
            newList = SortToPriorityList(storage);
            newId = Math.max.apply(Math, newList.map((x) => { return x.id}));
            setItem(prev => ({
                ...prev,
                id: newId + 1
            }))
        }
    }, [])

    const updateId = () => {
        setItem(prev => ({
            ...prev,
            id: ++prev.id
        }))
    }

    const updateMessage = (msg: string) => {
        setItem(prev => ({
            ...prev,
            message: msg
        }))
    }

    const addedToList = () => {
        setItem(prev => ({
            ...prev,
            id: ++prev.id,
            message: ''
        }))
    }

    const resetItem = () => {
        setItem(prev => ({
            ...prev,
            id: 0,
            message: ''
        }))
    }

    return [item, updateId, updateMessage, addedToList, resetItem] as const;
}