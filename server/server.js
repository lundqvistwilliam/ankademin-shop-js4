const express = require('express');
const app = express();


const products = [
    {
    "name": "Julgran",
    "price": 10,
    "id": 1,
    "image": "https://images.unsplash.com/photo-1609024849543-ff59df361d08?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "inStock": 2,
    "inShoppingCart": false,
    "description": "Upplev julens magi med vår perfekt formade och doftande julgran. Skapa minnen och sprid feststämning i ditt hem. Beställ nu och låt julen börja!"
  },
  {
    "name": "Julgranskulor",
    "price": 15,
    "id": 2,
    "image": "https://images.unsplash.com/photo-1512503751345-2167dfe9d2b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "inStock": 3,
    "inShoppingCart": false,
    "description": "Förhöj julstämningen med våra skimrande julgranskulor. Välj bland en mängd färger och mönster för att skapa en festlig och personlig touch till din julgran. Gör din jul ännu mer glittrande – beställ dina julgranskulor idag!"
  },
  {
    "name": "Tomtebloss",
    "price": 20,
    "id": 3,
    "image": "https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "inStock": 5,
    "inShoppingCart": false,
    "description": "Lys upp vinterkvällarna med våra färgsprakande tomtebloss! Skapa magiska ögonblick och sprid glädje med dessa säkra och underhållande pyrotekniska ljus. Beställ dina tomtebloss nu och gör julen minnesvärd för alla åldrar!"
  },
  {
    "name": "Juligt doftljus",
    "price": 25,
    "id": 4,
    "image": "https://plus.unsplash.com/premium_photo-1663928246541-334029ba9413?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "inStock": 7,
    "inShoppingCart": false,
    "description": "Skapa en stämningsfull atmosfär med vårt juliga doftljus! Njut av den förtrollande doften av julens kryddor och sprid värme och frid i ditt hem. Beställ nu för en extra touch av julmys och harmoni."
  },
  {
    "name": "Julstrumpor (4 pack)",
    "price": 30,
    "id": 5,
    "image": "https://images.unsplash.com/photo-1607900177462-ac553f1f5d97?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "inStock": 2,
    "inShoppingCart": false,
    "description": "Ge ditt hem en touch av traditionellt julmys med våra färgglada julstrumpor! Häng upp dem med omsorg och fyll dem med små överraskningar för dina nära och kära. Skapa en minnesvärd och hjärtlig jul med våra charmiga julstrumpor. Beställ dina idag och låt glädjen sprida sig!"
  },
  {
    "name": "Julkrans",
    "price": 30,
    "id": 6,
    "image": "https://images.unsplash.com/photo-1448062920312-78ec18ff7e3c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "inStock": 1,
    "inShoppingCart": false,
    "description": "Skapa en inbjudande julstämning med vår vackra julkrans! Tillverkad med omsorg och dekorerad med traditionella juldetaljer, ger den en varm och välkomnande känsla till ditt hem. Låt denna tidlösa symbol för julglädje bli en del av din festliga inredning. Beställ din julkrans nu och låt magin börja!"
  },
  {
    "name": "Julstjärna",
    "price": 10,
    "id": 7,
    "image": "https://images.unsplash.com/photo-1480719598364-fe3123242a9d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "inStock": 0,
    "inShoppingCart": false,
    "description": "Skapa en inbjudande julstämning med vår vackra julstjärna! Tillverkad med omsorg och dekorerad med traditionella juldetaljer, ger den en varm och välkomnande känsla till ditt hem. Låt denna tidlösa symbol för julglädje bli en del av din festliga inredning. Beställ din julstjärna nu och låt magin börja!"
  }
];

app.get('/api/products', (req,res) => {
  res.json({products:products});
});

app.get('/api/products/:id', (req,res) => {
  const id = parseInt(req.params.id);
  const product = products.find((product) => product.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
})  

const PORT = 5000;
app.listen(PORT,() => {console.log(`Server started on port ${PORT}`)});