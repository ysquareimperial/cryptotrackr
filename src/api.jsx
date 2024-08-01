import axios from "axios";

const API_URL = "https://api.coincap.io/v2";

export const getCoinData = async (coinId) => {
  try {
    const response = await axios.get(`${API_URL}/assets/${coinId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the coin data", error);
  }
};

export const getTopCoins = async () => {
  try {
    const response = await axios.get(`${API_URL}/assets`, {
      params: {
        // limit: 10,
        order: "marketCapUsd",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the top coins", error);
  }
};

// export const getLowCoins = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/assets`, {
//       params: {
//         limit: 10,
//         order: "marketCapUsd",
//         sort: "asc",
//       },
//     });
//     return response.data.data;
//   } catch (error) {
//     console.error("Error fetching the low coins", error);
//   }
// };
