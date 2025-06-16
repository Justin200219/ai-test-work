import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const aiService = {
  async sendMessage(message, model = 'llama3', language = 'en') {
    try {
      const response = await axios.post(`${API_URL}/chat`, { 
        message, 
        model,
        language 
      });
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  async getAvailableModels() {
    try {
      const response = await axios.get(`${API_URL}/models`);
      return response.data;
    } catch (error) {
      console.error('Error fetching models:', error);
      throw error;
    }
  }
}; 