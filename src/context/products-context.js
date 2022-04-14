import React, { useState, useEffect } from 'react';

export const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
  
});

export default props => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
   const url="https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15";

   const fetchData = async () => {
    try {
        const response = await fetch(url);
        
        const data = await response.json();
        
        console.log(data.results);  
        setProductsList(data.results);
        
    } catch (error) {
        console.log("error", error);
    }
};

fetchData();

  }, [])

  const toggleFavorite = productId => {
    setProductsList(currentProdList => {
      const prodIndex = currentProdList.findIndex(p => p.id === productId);
      const newFavStatus = !currentProdList[prodIndex].isFavorite;
      const updatedProducts = [...currentProdList];
      updatedProducts[prodIndex] = {
        ...currentProdList[prodIndex],
        isFavorite: newFavStatus
      };
      return updatedProducts;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavorite }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
