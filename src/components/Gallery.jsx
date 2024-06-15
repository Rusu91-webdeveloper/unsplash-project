import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
//-----------------------------------------------------------
//------------------------------------------------------
const Gallery = ({ search }) => {
  const BASE_URL = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
  }=${search}`;
  //---------------------------------------------------------------
  ///! SETUP THE QUERY
  const response = useQuery({
    //? setup a key and a querryFn wich is async and we use axios
    // ! I had to pass in querryKey the search term because Reat querry use the cache and it is not rerender staraight away
    queryKey: ["images", search],
    queryFn: async () => {
      const result = await axios.get(BASE_URL);
      return result.data;
    },
  });
  console.log(response);
  //------------------------------------------------------
  // ! SETUP THE CASES WHEN ISLOADING AND WHERE IS AN ERROR
  if (response.isLoading)
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  if (response.isError)
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            className="img"
            key={item.id}
            src={url}
            alt={item.alt_description}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
