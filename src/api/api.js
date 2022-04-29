import axios from 'axios';
const url = `${process.env.REACT_APP_uri}/items`;
export const getItems = ()=>axios.get(url);
export const createItem = (item)=>axios.post(url,item);