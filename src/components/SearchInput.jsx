import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { SearchTable } from "./SearchTable";
import routes from "../routes/routes";

export const SearchInput = () => {
  const { register, handleSubmit } = useForm();
  const [packageToSend, setPackageToSend] = useState(null);

  const onSubmit = (data) => {
    ajaxSearch(data);
  };

  const ajaxSearch = (productSearch) => {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productSearch),
    };
      
    fetch(routes.getApiUrl, config)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        setPackageToSend(result); // Update the state with the result
      })
      .catch((err) => {
        console.error("Error:", err); //Error
      });
  };

  return (
    <main>
      <section className="section-input-search">
        <div className="searchMenu">
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
            className="form-controls"
            id="form-search"
          >
            <div className="searchInputBar">
              <input
                type="text"
                className="searchInput-Field"
                placeholder="Search by Name or SKU"
                {...register("searchProduct", {
                  required: true,
                })}
              />
              <button type="submit" className="searchButton">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </section>
      <SearchTable productList={packageToSend} />
    </main>
  );
};
