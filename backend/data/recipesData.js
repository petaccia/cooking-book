const recipesData = [
  {
    title: "Spaghetti Carbonara",
    description: "Un classique italien crémeux et délicieux.",
    image: "https://fthmb.tqn.com/AmtBki2yVYtxFyDoH6PpU6-RYag=/3888x2592/filters:fill(auto,1)/italian-food--pasta-alla-carbonara-111648900-5a4fd617ec2f640037f8cf3d.jpg",
    tcookingTime: 20,
    level: "Facile",
    ingredients: [
      { name: "Spaghetti", quantity: "200g" },
      { name: "Œufs", quantity: "4" },
      { name: "Pancetta", quantity: "100g" },
      { name: "Parmesan", quantity: "50g" },
      { name: "Poivre noir", quantity: "1 cuillère à café" }
    ],
    steps: [
      "1. Faites cuire les pâtes.", 
      "2. Mélangez les œufs et le fromage.", 
      "3. Ajoutez les pâtes et le bacon."
    ],
    author: "Marie Dupont",
  },
  {
    title: "Salade César",
    description: "Une salade croquante avec une sauce crémeuse.",
    image: "https://www.marecette.ch/wp-content/uploads/2020/05/salade-cesar.jpg",
    tcookingTime: 15,
    level: "Facile",
    ingredients: [
      { name: "Laitue romaine", quantity: "1" },
      { name: "Poulet grillé", quantity: "200g" },
      { name: "Croûtons", quantity: "100g" },
      { name: "Parmesan", quantity: "50g" },
      { name: "Sauce César", quantity: "100ml" }
    ],
    steps: [
      "1. Mélangez la laitue avec la sauce.",
      "2. Ajoutez les croûtons et le poulet."
    ],
    author: "Pierre Leroy",
  },
  {
    title: "Poulet Tikka Masala",
    description: "Poulet mariné dans une sauce épicée et crémeuse.",
    image: "https://theviewfromgreatisland.com/wp-content/uploads/2013/06/028-002.jpg",
    tcookingTime: 40,
    level: "Moyen",
    ingredients: [
      { name: "Poulet", quantity: "500g" },
      { name: "Yaourt", quantity: "200g" },
      { name: "Épices Tikka", quantity: "2 cuillères à soupe" },
      { name: "Tomates concassées", quantity: "400g" },
      { name: "Crème fraîche", quantity: "200ml" }
    ],
    steps: [
      "1. Faites mariner le poulet.",
      "2. Faites cuire avec la sauce."
    ],
    author: "Sophie Martin",
  },
  {
    title: "Quiche Lorraine",
    description: "Une quiche classique avec du bacon et du fromage.",
    image: "http://marfel.es/wp-content/uploads/2016/08/quiche-lorraine.jpg",
    tcookingTime: 60,
    level: "Facile",
    ingredients: [
      { name: "Pâte brisée", quantity: "1" },
      { name: "Lardons", quantity: "150g" },
      { name: "Crème fraîche", quantity: "200ml" },
      { name: "Œufs", quantity: "3" },
      { name: "Gruyère râpé", quantity: "100g" }
    ],
    steps: [
      "1. Préparez la pâte.",
      "2. Mélangez les ingrédients et faites cuire."
    ],
    author: "Jean Petit",
  },
  {
    title: "Ratatouille",
    description: "Un plat de légumes provençal.",
    image: "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fa41d540a-ac3a-44ce-adcf-3702cdd2db2e.2Ejpeg/1200x675/quality/80/crop-from/center/ratatouille-provencale.jpeg",
    tcookingTime: 50,
    level: "Facile",
    ingredients: [
      { name: "Aubergine", quantity: "1" },
      { name: "Courgette", quantity: "1" },
      { name: "Poivron", quantity: "1" },
      { name: "Tomate", quantity: "4" },
      { name: "Oignon", quantity: "1" },
      { name: "Herbes de Provence", quantity: "1 cuillère à soupe" }
    ],
    steps: [
      "1. Coupez les légumes.",
      "2. Faites cuire avec des herbes."
    ],
    author: "Claire Delaunay",
  },
  {
    title: "Soupe à l'oignon",
    description: "Une soupe réconfortante avec des oignons caramélisés.",
    image: "https://assets.afcdn.com/recipe/20191109/102147_w1024h768c1cx2144cy1424cxt0cyt0cxb4288cyb2848.jpg",
    tcookingTime: 30,
    level: "Facile",
    ingredients: [
      { name: "Oignons", quantity: "4" },
      { name: "Beurre", quantity: "50g" },
      { name: "Bouillon de bœuf", quantity: "1 litre" },
      { name: "Pain", quantity: "4 tranches" },
      { name: "Gruyère râpé", quantity: "100g" }
    ],
    steps: [
      "1. Caramélisez les oignons.",
      "2. Ajoutez le bouillon et faites cuire."
    ],
    author: "Sebastien Loup",
  },
  {
    title: "Curry de légumes",
    description: "Un curry végétarien épicé et savoureux.",
    image: "https://img.mesrecettesfaciles.fr/wp-content/uploads/2018/04/currylegumes-1000x500.jpg",
    tcookingTime: 45,
    level: "Moyen",
    ingredients: [
      { name: "Légumes variés", quantity: "500g" },
      { name: "Lait de coco", quantity: "400ml" },
      { name: "Pâte de curry", quantity: "2 cuillères à soupe" },
      { name: "Oignon", quantity: "1" },
      { name: "Ail", quantity: "2 gousses" }
    ],
    steps: [
      "1. Faites cuire les légumes avec les épices.",
      "2. Ajoutez le lait de coco."
    ],
    author: "Laure Cafe",
  },
  {
    title: "Tarte Tatin",
    description: "Une tarte renversée aux pommes caramélisées.",
    image: "https://assets.afcdn.com/recipe/20180503/79001_w1944h1242c1cx2880cy1920.jpg",
    tcookingTime: 60,
    level: "Difficile",
    ingredients: [
      { name: "Pommes", quantity: "6" },
      { name: "Sucre", quantity: "150g" },
      { name: "Beurre", quantity: "100g" },
      { name: "Pâte feuilletée", quantity: "1" }
    ],
    steps: [
      "1. Caramélisez les pommes.",
      "2. Couvrez de pâte et faites cuire."
    ],
    author: "Marie Dupont",
  },
  {
    title: "Bouillabaisse",
    description: "Une soupe de poisson provençale.",
    image: "http://img.taste.com.au/xevn8hx3/taste/2016/11/bouillabaisse-78546-1.jpeg",
    tcookingTime: 90,
    level: "Difficile",
    ingredients: [
      { name: "Poisson varié", quantity: "1kg" },
      { name: "Tomates", quantity: "4" },
      { name: "Ail", quantity: "3 gousses" },
      { name: "Safran", quantity: "1 pincée" },
      { name: "Fumet de poisson", quantity: "1 litre" }
    ],
    steps: [
      "1. Préparez le bouillon.",
      "2. Ajoutez les poissons et faites cuire."
    ],
    author: "Pierre Leroy",
  },
  {
    title: "Gâteau au chocolat",
    description: "Un dessert riche et fondant.",
    image: "https://www.iutbethune.org/wp-content/uploads/2022/10/Fondant-au-chocolat.jpg",
    tcookingTime: 45,
    level: "Facile",
    ingredients: [
      { name: "Chocolat noir", quantity: "200g" },
      { name: "Beurre", quantity: "100g" },
      { name: "Sucre", quantity: "150g" },
      { name: "Farine", quantity: "100g" },
      { name: "Œufs", quantity: "4" }
    ],
    steps: [
      "1. Mélangez les ingrédients.",
      "2. Faites cuire au four."
    ],
    author: "Marie Dupont",
  },
  {
    title: "Bœuf Bourguignon",
    description: "Un ragoût de bœuf mijoté au vin rouge.",
    image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/boeuf_bourguignon_25475_16x9.jpg",
    tcookingTime: 180,
    level: "Difficile",
    ingredients: [
      { name: "Bœuf", quantity: "1kg" },
      { name: "Vin rouge", quantity: "1 bouteille" },
      { name: "Carottes", quantity: "4" },
      { name: "Oignons", quantity: "2" },
      { name: "Champignons", quantity: "200g" }
    ],
    steps: [
      "1. Faites mariner le bœuf.",
      "2. Faites cuire avec les légumes et le vin."
    ],
    author: "Claire Delaunay",
  },
  {
    title: "Tajine de poulet",
    description: "Un plat marocain épicé avec des olives et des citrons confits.",
    image: "https://perfectlyprovence.co/wp-content/uploads/2020/05/chicken-tagine.jpg",
    tcookingTime: 90,
    level: "Moyen",
    ingredients: [
      { name: "Poulet", quantity: "1kg" },
      { name: "Olives", quantity: "200g" },
      { name: "Citrons confits", quantity: "2" },
      { name: "Oignon", quantity: "1" },
      { name: "Épices à tajine", quantity: "2 cuillères à soupe" }
    ],
    steps: [
      "1. Faites cuire le poulet avec les épices.",
      "2. Ajoutez les olives et les citrons."
    ],
    author: "Sebastien Loup",
  },
  {
    title: "Risotto aux champignons",
    description: "Un plat crémeux de riz avec des champignons.",
    image: "https://img.passeportsante.net/1000x526/2021-03-29/i101004-.jpeg",
    tcookingTime: 35,
    level: "Moyen",
    ingredients: [
      { name: "Riz Arborio", quantity: "200g" },
      { name: "Champignons", quantity: "300g" },
      { name: "Bouillon de légumes", quantity: "1 litre" },
      { name: "Parmesan", quantity: "50g" },
      { name: "Vin blanc", quantity: "100ml" }
    ],
    steps: [
      "1. Faites cuire le riz avec le bouillon.",
      "2. Ajoutez les champignons et le fromage."
    ],
    author: "Marie Dupont",
  },
  {
    title: "Lasagnes",
    description: "Un plat italien de pâtes en couches avec de la viande et de la sauce.",
    image: "https://i.notrefamille.com/1800x0/smart/2020/11/26/42006-large.jpg",
    tcookingTime: 60,
    level: "Moyen",
    ingredients: [
      { name: "Pâtes à lasagnes", quantity: "12 feuilles" },
      { name: "Viande hachée", quantity: "500g" },
      { name: "Tomates concassées", quantity: "400g" },
      { name: "Béchamel", quantity: "500ml" },
      { name: "Parmesan", quantity: "100g" }
    ],
    steps: [
      "1. Faites cuire la viande avec la sauce.",
      "2. Assemblez les couches et faites cuire."
    ],
    author: "Laure Cafe",
  },
  {
    title: "Couscous",
    description: "Un plat nord-africain avec de la semoule et des légumes.",
    image: "https://assets.afcdn.com/recipe/20200828/113350_w1024h768c1cx2880cy1920.jpg",
    tcookingTime: 75,
    level: "Moyen",
    ingredients: [
      { name: "Semoule", quantity: "200g" },
      { name: "Poulet", quantity: "500g" },
      { name: "Carottes", quantity: "4" },
      { name: "Courgettes", quantity: "2" },
      { name: "Pois chiches", quantity: "200g" }
    ],
    steps: [
      "1. Faites cuire la viande et les légumes.",
      "2. Préparez la semoule et servez."
    ],
    author: "Marie Dupont",
  },
  {
    title: "Pâtes aux crevettes",
    description: "Un plat de pâtes rapide avec des crevettes et de l'ail.",
    image: "https://touslesgouts.com/wp-content/uploads/2019/12/P%C3%A2tes-aux-crevettes-avec-sauce-cr%C3%A9meuse-%C3%A0-la-mozzarella.jpg",
    tcookingTime: 25,
    level: "Facile",
    ingredients: [
      { name: "Pâtes", quantity: "200g" },
      { name: "Crevettes", quantity: "300g" },
      { name: "Ail", quantity: "2 gousses" },
      { name: "Tomates cerises", quantity: "100g" },
      { name: "Huile d'olive", quantity: "2 cuillères à soupe" }
    ],
    steps: [
      "1. Faites cuire les pâtes.",
      "2. Faites revenir les crevettes avec l'ail et les tomates."
    ],
    author: "Laure Cafe",
  },
  {
    title: "Chili con carne",
    description: "Un ragoût épicé de viande et de haricots.",
    image: "https://www.easymarket.pf/wp-content/uploads/2016/10/chili-con-carne.jpg",
    tcookingTime: 60,
    level: "Moyen",
    ingredients: [
      { name: "Viande hachée", quantity: "500g" },
      { name: "Haricots rouges", quantity: "400g" },
      { name: "Tomates concassées", quantity: "400g" },
      { name: "Poivron", quantity: "1" },
      { name: "Épices chili", quantity: "2 cuillères à soupe" }
    ],
    steps: [
      "1. Faites revenir la viande avec les épices.",
      "2. Ajoutez les légumes et les haricots."
    ],
    author: "Pierre Leroy",
  },
  {
    title: "Paella",
    description: "Un plat espagnol de riz avec des fruits de mer.",
    image: "https://themediterraneanchick.com/wp-content/uploads/2020/09/IMG_0825-1-scaled.jpg",
    tcookingTime: 90,
    level: "Difficile",
    ingredients: [
      { name: "Riz", quantity: "300g" },
      { name: "Poulet", quantity: "300g" },
      { name: "Crevettes", quantity: "200g" },
      { name: "Petits pois", quantity: "100g" },
      { name: "Safran", quantity: "1 pincée" }
    ],
    steps: [
      "1. Faites revenir le poulet et les fruits de mer.",
      "2. Ajoutez le riz et le bouillon."
    ],
    author: "Jean Petit",
  },
  {
    title: "Poulet rôti",
    description: "Un classique poulet rôti avec des herbes.",
    image: "https://mesdelices.fr/wp-content/uploads/2018/04/poulet-r%C3%B4ti.jpg",
    tcookingTime: 120,
    level: "Facile",
    ingredients: [
      { name: "Poulet entier", quantity: "1" },
      { name: "Beurre", quantity: "50g" },
      { name: "Ail", quantity: "2 gousses" },
      { name: "Herbes de Provence", quantity: "1 cuillère à soupe" },
      { name: "Pommes de terre", quantity: "500g" }
    ],
    steps: [
      "1. Assaisonnez le poulet.",
      "2. Faites cuire au four avec les pommes de terre."
    ],
    author: "Marie Dupont",
  },
  {
    title: "Blanquette de veau",
    description: "Un ragoût de veau crémeux avec des carottes et des champignons.",
    image: "https://www.breizhveau.bzh/wp-content/uploads/2019/12/breizhveau-recette-2019-12-28-blanquette-veau.jpg",
    tcookingTime: 150,
    level: "Difficile",
    ingredients: [
      { name: "Veau", quantity: "1kg" },
      { name: "Carottes", quantity: "4" },
      { name: "Champignons", quantity: "200g" },
      { name: "Crème fraîche", quantity: "200ml" },
      { name: "Bouillon de veau", quantity: "1 litre" }
    ],
    steps: [
      "1. Faites cuire le veau avec les légumes.",
      "2. Ajoutez la crème avant de servir."
    ],
    author: "Pierre Leroy",
  },
  {
    title: "Tiramisu",
    description: "Un dessert italien avec du café et du mascarpone.",
    image: "https://www.pastaweb.de/wp-content/uploads/2016/06/tiramisu.jpg",
    tcookingTime: 30,
    level: "Facile",
    ingredients: [
      { name: "Mascarpone", quantity: "250g" },
      { name: "Œufs", quantity: "3" },
      { name: "Sucre", quantity: "100g" },
      { name: "Café", quantity: "200ml" },
      { name: "Biscuits à la cuillère", quantity: "200g" },
      { name: "Cacao en poudre", quantity: "2 cuillères à soupe" }
    ],
    steps: [
      "1. Mélangez le mascarpone et les œufs.",
      "2. Trempez les biscuits dans le café et assemblez les couches."
    ],
    author: "Laure Cafe",
  },
  {
    title: "Gazpacho",
    description: "Une soupe froide espagnole de tomates.",
    image: "https://assets.bonappetit.com/photos/57aca0e0f1c801a1038bc671/master/pass/summer-gazpacho.jpg",
    tcookingTime: 20,
    level: "Facile",
    ingredients: [
      { name: "Tomates", quantity: "1kg" },
      { name: "Concombre", quantity: "1" },
      { name: "Poivron", quantity: "1" },
      { name: "Oignon", quantity: "1" },
      { name: "Ail", quantity: "2 gousses" },
      { name: "Vinaigre de vin", quantity: "2 cuillères à soupe" }
    ],
    steps: [
      "1. Mixez tous les ingrédients ensemble.",
      "2. Servez froid."
    ],
    author: "Sophie Martin",
  }
];

module.exports = recipesData;
