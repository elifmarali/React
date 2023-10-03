import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get(
    "https://api.unsplash.com/photos/?client_id=lew6DtDZi8exw5vYVutYFdBub3NWEksUQU9IT_7YdSM",
    {
      params: {
        query: term,
      },
    }
  );
  return response.data;
};
export default searchImages;
