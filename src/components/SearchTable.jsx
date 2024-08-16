import React, { useState, useEffect } from "react";

export const SearchTable = ({productList}) => {
    const [initialMessage, setInitialMessage] = useState(true);

  // Update the search status based on productList changes
  useEffect(() => {
    // When you change productList check that it is not null
    if (productList != null) {
        setInitialMessage(false);
    } 
  }, [productList]);

  const tableHeader = ["SKU", "PRODUCT", "PRICE", "STOCK"];

  return (
    <section className="section-table-search">
      <table className="productsTable">
        <thead>
          <tr>
            {tableHeader.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {initialMessage ? (
            <tr>
              <td colSpan={4}>Search a product</td>
            </tr>
          ) : productList.length > 0 ? (
            productList.map((element, index) => (
              <tr key={index}>
                <td>{element.sku}</td>
                <td>{element.name}</td>
                <td>${element.price}</td>
                <td>#{element.stock}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};
