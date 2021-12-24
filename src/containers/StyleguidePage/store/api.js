import axios from 'axios';

export const getTestApiDetailsApi = ({ payloadId }) => axios.get(`${process.env.API_URL}/posts/${payloadId}`);
