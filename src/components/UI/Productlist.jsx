import ProductCard from "./ProductCard";

const Productlist = ({data}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">


  {data?.map((item , index)=>(
  <ProductCard item={item} key={index} />
  ))}

  </div>

  );
};

export default Productlist;
