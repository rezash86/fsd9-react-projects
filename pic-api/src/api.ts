import axios from "axios";

const searchImages = async (term: string) => {
  // calls the api
  //it takes a while to get the result
  //and if you want to use the result, probably it will be empty

  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID AsueAor325WIG1g0q5XxfiSrcYVYhdaqrfgDyCsHNJk",
    },
    params: {
      query: term,
    },
  });

  // return response;
  return response.data.results;
};

export default searchImages;
