import axios from 'axios';

const API_URL =
  process.env.REACT_APP_API_URL?.replace(/\/$/, '') || 'http://localhost:3001';

export const aiService = {
  async sendMessage(message, model = 'llama3', language = 'en', isFirstMessage = false) {
    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        message,
        model,
        language,
        isFirstMessage
      });
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  },

  async getAvailableModels() {
    try {
      const response = await axios.get(`${API_URL}/api/models`);
      return response.data;
    } catch (error) {
      console.error('Error fetching models:', error);
      throw error;
    }
  }
}; 