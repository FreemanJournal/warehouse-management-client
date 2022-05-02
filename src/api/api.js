import axios from 'axios';
const url = `${process.env.REACT_APP_uri}/items`;

const feedbackUrl = `${process.env.REACT_APP_uri}/feedbacks`;
const faqUrl = `${process.env.REACT_APP_uri}/faq`;

export const getItems = () => axios.get(url);
export const createItem = (item) => axios.put(url, item);
export const deleteItem = (id) => axios.delete(`${url}?id=${id}`)
export const updateItemQtn = (qtn) => axios.put(`${url}/qtnUpdate`, qtn);


export const getFeedBacks = () => axios.get(feedbackUrl);
export const getFaq = () => axios.get(faqUrl);



// export const getProducts = (uri) => axios.get(uri).then(res=>res.data);