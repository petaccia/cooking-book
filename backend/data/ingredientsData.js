const ingredientsData = [
  {
    name: "Tomates",
    image: "https://cdn.pixabay.com/photo/2016/02/17/19/26/tomato-1205699_1280.jpg",
    category: "Légumes",
    type: "Fruit"
  },
  {
    name: "Oignons",
    image: "https://cdn.pixabay.com/photo/2020/05/18/15/54/onion-5187140_640.jpg",
    category: "Légumes",
    type: "Bulbe"
  },
  {
    name: "Carottes",
    image: "https://cdn.pixabay.com/photo/2016/09/25/16/34/carrots-1694087_640.jpg",
    category: "Légumes",
    type: "Racine"
  },
  {
    name: "Pommes de terre",
    image: "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_640.jpg",
    category: "Légumes",
    type: "Tubercule"
  },
  {
    name: "Poivrons",
    image: "https://cdn.pixabay.com/photo/2014/04/09/15/31/paprika-320138_640.jpg",
    category: "Légumes",
    type: "Fruit"
  },
  {
    name: "Brocolis",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238251_640.jpg",
    category: "Légumes",
    type: "Fleur"
  },
  {
    name: "Ail",
    image: "https://tse4.mm.bing.net/th?id=OIP.9IO7302sIXQ_vWECg8DL5AHaGH&pid=Api&P=0&h=180",
    category: "Légumes",
    type: "Bulbe"
  },
  {
    name: "Épinards",
    image: "https://tse2.mm.bing.net/th?id=OIP.isHJDrrhv2R3ybWt0IepIwHaE6&pid=Api&P=0&h=180",
    category: "Légumes",
    type: "Feuille"
  },
  {
    name: "Courgettes",
    image: "https://cdn.pixabay.com/photo/2020/07/09/15/24/courgettes-5387743_640.jpg",
    category: "Légumes",
    type: "Fruit"
  },
  {
    name: "Aubergines",
    image: "https://cdn.pixabay.com/photo/2010/12/13/09/51/aubergine-1809_640.jpg",
    category: "Légumes",
    type: "Fruit"
  },
  {
    name: "Riz",
    image: "https://cdn.pixabay.com/photo/2015/09/27/12/51/rice-960627_640.jpg",
    category: "Céréales",
    type: "Grain"
  },
  {
    name: "Pâtes",
    image: "https://cdn.pixabay.com/photo/2010/12/13/10/00/pasta-2093_640.jpg",
    category: "Céréales",
    type: "Grain"
  },
  {
    name: "Poulet",
    image: "https://cdn.pixabay.com/photo/2010/12/10/08/chicken-1140_640.jpg",
    category: "Viandes",
    type: "Volaille"
  },
  {
    name: "Bœuf",
    image: "https://tse1.explicit.bing.net/th?id=OIP.S9ANvTiJfYGO_Rg8Ecs9nQHaE8&pid=Api&P=0&h=180",
    category: "Viandes",
    type: "Rouge"
  },
  {
    name: "Saumon",
    image: "https://cdn.pixabay.com/photo/2016/11/04/20/10/sea-trout-1798847_640.jpg",
    category: "Poissons",
    type: "Gras"
  },
  {
    name: "Thon",
    image: "https://cdn.pixabay.com/photo/2018/12/20/13/31/tuna-3886014_640.jpg",
    category: "Poissons",
    type: "Maigre"
  },
  {
    name: "Œufs",
    image: "https://tse3.mm.bing.net/th?id=OIP.KsG3cpGZWLHskUdv4dZKYwHaFj&pid=Api&P=0&h=180",
    category: "Œufs",
    type: "Coquille"
  },
  {
    name: "Lait",
    image: "https://tse2.mm.bing.net/th?id=OIP.30Kd0S2Ms3wg3EhHLxlShgHaFt&pid=Api&P=0&h=180",
    category: "Produits laitiers",
    type: "Liquide"
  },
  {
    name: "camenbert",
    image: "https://tse3.mm.bing.net/th?id=OIP.7ISbnAoZWAgg69xZLO_aWQHaE7&pid=Api&P=0&h=180",
    category: "Produits laitiers",
    type: "Solide"
  },
  {
    name: "Beurre",
    image: "https://tse3.mm.bing.net/th?id=OIP.lsXWXNPhsWFh2Y7fkDvw0gHaEI&pid=Api&P=0&h=180",
    category: "Produits laitiers",
    type: "Gras"
  },
  {
    name: "Huile d'olive",
    image: "https://tse2.mm.bing.net/th?id=OIP.6ZBrbpBsjeNk_kEJrGSMzwHaE1&pid=Api&P=0&h=180",
    category: "Huiles",
    type: "Végétale"
  },
  {
    name: "Vinaigre balsamique",
    image: "https://tse1.mm.bing.net/th?id=OIP.2SebWSLMGQ3x80FRweP40wHaIW&pid=Api&P=0&h=180",
    category: "Condiments",
    type: "Liquide"
  },
  {
    name: "Moutarde",
    image: "https://tse3.mm.bing.net/th?id=OIP.w110RYfAHdNV06uiJvuFHQHaFF&pid=Api&P=0&h=180",
    category: "Condiments",
    type: "Pâte"
  },
  {
    name: "Sel",
    image: "https://tse1.mm.bing.net/th?id=OIP.1Fd2buQSZyA_EJhQ-uFs4AHaC9&pid=Api&P=0&h=180",
    category: "Épices",
    type: "Minéral"
  },
  {
    name: "Poivre en grains",
    image: "https://tse2.mm.bing.net/th?id=OIP.2A5mcB41PTLYOtInZpa8GQHaE8&pid=Api&P=0&h=180",
    category: "Épices",
    type: "Baie"
  },
  {
    name: "Basilic",
    image: "https://tse2.mm.bing.net/th?id=OIP.VfD09Ys4jwfOTp1XJyt73gHaEK&pid=Api&P=0&h=180",
    category: "Herbes aromatiques",
    type: "Feuille"
  },
  {
    name: "Persil",
    image: "https://tse2.mm.bing.net/th?id=OIP.sz29q9DPQ5VB95ypdTUEigHaFE&pid=Api&P=0&h=180",
    category: "Herbes aromatiques",
    type: "Feuille"
  },
  {
    name: "Citrons",
    image: "https://tse3.mm.bing.net/th?id=OIP.mRK-n5s-of03t1_lbX8HcgHaFg&pid=Api&P=0&h=180",
    category: "Fruits",
    type: "Agrume"
  },
  {
    name: "Pommes",
    image: "https://tse1.mm.bing.net/th?id=OIP.KXk45i8tFR1-OoaVjJ3CjAHaE8&pid=Api&P=0&h=180",
    category: "Fruits",
    type: "Fruit à pépins"
  },
  {
    name: "Bananes",
    image: "https://tse3.mm.bing.net/th?id=OIP.9uL9bdYXO1RW8GErkX9wBwHaE9&pid=Api&P=0&h=180",
    category: "Fruits",
    type: "Fruit tropical"
  }
];

module.exports = ingredientsData;