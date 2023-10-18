import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Au4uOPCeKRXod9K8j17LbMJry1iZ1IpfJ7sa6M8NOOg",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default SearchImages;
