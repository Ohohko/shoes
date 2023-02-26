import axios from 'axios';

const API_URL = 'https://63fa95f62027a45d8d599965.mockapi.io/shoes';

// Fetch all shoes
export const getAllShoes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new shoe
export const createShoe = async (shoe) => {
  const response = await axios.post(API_URL, shoe);
  return response.data;
};

// Update an existing shoe
export const updateShoe = async (id, shoe) => {
  const response = await axios.put(`${API_URL}/${id}`, shoe);
  return response.data;
};

// Delete a shoe
export const deleteShoe = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default API_URL