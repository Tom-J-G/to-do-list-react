import {useState, useEffect} from 'react';

import {GetLocalStorage, AddToStorage} from '../utilities/localStorage';
import {SortToPriorityList} from '../utilities/sort';

type toDolist = {
    id: number,
    message: string,
    done: boolean,
    priority: string
}

interface IList {
    list: Array<toDolist>
}

export const useList = () => {
    const [list, setList] = useState<IList>({list: []});

    useEffect(()=> {
        const storage = GetLocalStorage('To_Do_List');
        console.log(storage);
        let newList: toDolist[];
        if(storage !== null) {
            newList = SortToPriorityList(storage);
            setList(prev => ({
                ...prev,
                list: newList
            }));
        }
    }, []);

    const updateListItem = (id:number, type: string) => {
        const idNum: number = id;
        const listArray: Array<toDolist> = list.list;
        const objIndex = listArray.findIndex(obj => obj.id === idNum);
        
        let updateObj;
        if(type === 'done') {
            updateObj = {...listArray[objIndex], done: true};
        } else {
            (listArray[objIndex].priority === 'low') ? 
            updateObj = {...listArray[objIndex], priority: 'middle'} : (listArray[objIndex].priority === 'middle') ? 
            updateObj = {...listArray[objIndex], priority: 'top'} :
            updateObj = {...listArray[objIndex], priority: 'low'};
        }
        
        let updateArrayList: Array<toDolist> = 
        [...listArray.slice(0, objIndex),
        updateObj,
        ...listArray.slice(objIndex + 1)]

        const updatePriorityArray: toDolist[] = SortToPriorityList(updateArrayList);
        setList(prev => ({
            ...prev,
            list: updatePriorityArray
        }));

        let storageArray: toDolist[] = updatePriorityArray;
        if(type === 'done')
            storageArray = updatePriorityArray.filter((item) => { return item.id !== idNum})

        storageArray = storageArray.filter((item) => !item.done)
        
        AddToStorage('To_Do_List', storageArray);
    }

    const addToDo = (id:number, message: string) => {
        
        const item: toDolist = {id: id, message: message, done: false, priority: 'low'};
        const newArray: Array<toDolist> = [...list.list, item];

        setList(prev => ({
            ...prev,
            list: newArray
        }));
    
        console.log(list.list)

        AddToStorage('To_Do_List', newArray)
    }

    const resetList  = () => {
        setList(prev => ({
            ...prev,
            list: []
        }));
    }

    return [list.list, updateListItem, addToDo, resetList] as const;
}