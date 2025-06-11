import axios from "axios";

export const fetchTranslation = async (dutchWord, language) => {
  try {
    // Using the environment variable for API URL (React's REACT_APP_API_URL)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/ollama`, {
      prompt: `Translate the Dutch word '${dutchWord}' into ${language}.`
    });
    return response.data.translation || "N/A";
  } catch (error) {
    console.error("Translation error:", error);
    return "Error";
  }
};
