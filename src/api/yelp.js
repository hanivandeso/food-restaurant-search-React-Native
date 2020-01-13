import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 14HbPuP4auyEhnGcc4zR6ZU5ORhXDgciqnxE9jN52yjcQdaI4DLZGj78lFE2iuZ07gM6CqyvtZvCmTWFgzWmV8e41cdjAQWyQLQ0K65QORq2udyNUXZgrGKeKDYTXnYx"
  }
});
