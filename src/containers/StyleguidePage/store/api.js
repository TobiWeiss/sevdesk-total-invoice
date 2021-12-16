import axios from 'axios';
const DEFAULT_HEADERS = {
  Accept: 'application/json',
};

export const getTestApiDetailsApi = ({ payloadId }) =>
  axios.get(`${process.env.API_URL}/posts/1`, {
    headers: DEFAULT_HEADERS,
    params: {
      id: payloadId,
    },
  });
