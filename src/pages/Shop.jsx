import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { SearchNormal } from "iconsax-react";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductLists from "../components/UI/Productlist";

const Shop = () => {
  const [productsData, setProductsData] = useState(products),
    filterHandler = (e) => {
      const filterValue = e.target.value;
      if (filterValue === "sofa") {
        const filteredProducts = products.filter(
          (item) => item.category === "sofa"
        );

        setProductsData(filteredProducts);
      }

      if (filterValue === "mobile") {
        const filteredProducts = products.filter(
          (item) => item.category === "mobile"
        );

        setProductsData(filteredProducts);
      }
      if (filterValue === "chair") {
        const filteredProducts = products.filter(
          (item) => item.category === "chair"
        );

        setProductsData(filteredProducts);
      }
      if (filterValue === "watch") {
        const filteredProducts = products.filter(
          (item) => item.category === "watch"
        );

        setProductsData(filteredProducts);
      }
      if (filterValue === "wireless") {
        const filteredProducts = products.filter(
          (item) => item.category === "wireless"
        );

        setProductsData(filteredProducts);
      }
    }, 
    handleSearch = (e) =>{
      const searchTerm = e.target.value ,
      searchedProducts = products.filter(item => item.productName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
      setProductsData(searchedProducts)
    }


  return (
    <Helmet title="shop">
      <CommonSection title="products" />

      <section className="pb-0">
        <div className="container">
          <div className="flex flex-wrap gap-5 justify-between">
            <div className="flex flex-1">
              <div className="filter__widget">
                <select className="select" onChange={filterHandler}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="wireless">Wireless</option>
                  <option value="watch">Watch</option>
                </select>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="filter__widget">
                <select className="select">
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </div>
            <div className="flex flex-1 search__container">
              <div className="search__box flex ">
                <input type="text" placeholder="Search ...." onChange={handleSearch} />
                <span>
                  <SearchNormal size="25" color="#e9e9e9" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div>
            {productsData.length === 0 ? (
              <h1 className="text-center p-5">No Product are Found!</h1>
            ) : (
              <ProductLists data={productsData} />
            )}
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Shop;
