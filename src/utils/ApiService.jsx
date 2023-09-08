const ApiService = {
  async get(endpoint) {
    try {
      const response = await fetch("http://localhost:3000/" + endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};

export default ApiService;

