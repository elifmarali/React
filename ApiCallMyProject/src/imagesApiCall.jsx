import axios from "axios";
const imagesApiCall = async (term) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos/?client_id=jat3j0Ib5uKs72MtfYXRvxTJN7z8aiy4eruKt77O7TA",
    {
      params: {
        query: term,
      },
    }
  );
  return response.data.results;
};
export default imagesApiCall;
