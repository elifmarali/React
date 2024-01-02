import axios from "axios";
const searchTerm = async (term) => {
  const result = await axios.get(
    "https://api.unsplash.com/photos/?client_id=lew6DtDZi8exw5vYVutYFdBub3NWEksUQU9IT_7YdSM",
    {
      params: {
        query: term,
      },
    }
  );
  return result.data;
};
export default searchTerm;
