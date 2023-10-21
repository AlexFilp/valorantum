import axios from 'axios';

const BASE_URL = 'https://valorant-api.com/v1';

export const getAgents = async () => {
  const response = await axios.get(
    `${BASE_URL}/agents`
  );
  console.log(response.data.data);
  return response.data.data;
};