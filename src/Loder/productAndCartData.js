import { getStoredCard } from "../utilities/fakeDB";


export const productsAndData = async () => {
    const productData = await fetch("jobdetails.json")
    const product = await productData.json();
    const savedCart = getStoredCard(); 
    let newArry = [];
  for (const id in savedCart) {
    const foundProducu = product.find((product) => product.id == id);
    if (foundProducu) {
      foundProducu.quaintity = savedCart[id];
      newArry.push(foundProducu);
    }
    } 
  return {newArry, product  }
}