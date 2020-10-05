const GetLocalStorage = (key:string) => {
    const local = localStorage.getItem(key);
    return (local !== null) ? JSON.parse(local) : null;
}

const ClearStorage = (key:string) => {
    localStorage.removeItem(key);
}

const AddToStorage =  (key:string, list: Array<object>) => {
    localStorage.setItem(key, JSON.stringify(list));
}

export { GetLocalStorage, ClearStorage, AddToStorage };