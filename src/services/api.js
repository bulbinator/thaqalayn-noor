const API_URL = "https://thaqalayn-noor-api.vercel.app";

export const getChain = async (thaqURL) => {
  try {
    const response = await fetch(
      `${API_URL}/chain?url=${encodeURIComponent(thaqURL)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch narrators:", error);
    return [];
  }
};