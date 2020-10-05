type list = {
    id: number,
    message: string,
    done: boolean,
    priority: string
} 

const SortToPriorityList = (list: Array<list>) => {
    let newList = list;
    const order: {[key: string]: number} = {'top': 1, 'middle': 2, 'low': 3 }
    newList.sort((a , b ) => {
        return order[a.priority] - order[b.priority];
    })

    return newList;
}

export { SortToPriorityList };