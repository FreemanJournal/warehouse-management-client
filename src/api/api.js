import axios from 'axios';
const url = `${process.env.REACT_APP_uri}/items`;
const feedbackUrl = `${process.env.REACT_APP_uri}/feedbacks`;
const faqUrl = `${process.env.REACT_APP_uri}/faq`;
export const getItems = () => axios.get(url);
export const getFeedBacks = () => axios.get(feedbackUrl);
export const getFaq = () => axios.get(faqUrl);
export const createItem = (item) => axios.post(url, item);