// add data to local storage
const addToDB = (id) => {
  let shoppingCart = {};

  // get previous data localStorage
  const storedCard = localStorage.getItem("shopping-cart");
  if (storedCard) {
    shoppingCart = JSON.parse(storedCard);
  }

  // add quaintity
  const quaintity = shoppingCart[id];
    if (quaintity) {
        const newQuaintity = quaintity + 1;
        shoppingCart[id] = newQuaintity;
    } else {
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

// get stored data from cart
const getStoredCard = () => {
  let shoppingCart = {};

  // get previous data localStorage
  const storedCard = localStorage.getItem("shopping-cart");
  if (storedCard) {
    shoppingCart = JSON.parse(storedCard);
  }
  return shoppingCart;

  }


export { addToDB, getStoredCard };
