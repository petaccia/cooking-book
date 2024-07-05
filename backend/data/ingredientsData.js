const ingredientsData = [
  {
    name: "Tomates",
    image: "https://cdn.pixabay.com/photo/2016/02/17/19/26/tomato-1205699_1280.jpg",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Oignons",
    image: "https://cdn.pixabay.com/photo/2020/05/18/15/54/onion-5187140_640.jpg",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Carottes",
    image: "https://cdn.pixabay.com/photo/2016/09/25/16/34/carrots-1694087_640.jpg",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Pommes de terre",
    image: "https://cdn.pixabay.com/photo/2016/08/11/08/43/potatoes-1585060_640.jpg",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Poivrons",
    image: "https://cdn.pixabay.com/photo/2014/04/09/15/31/paprika-320138_640.jpg",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Brocolis",
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238251_640.jpg",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Ail",
    image: "https://tse4.mm.bing.net/th?id=OIP.9IO7302sIXQ_vWECg8DL5AHaGH&pid=Api&P=0&h=180",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Épinards",
    image: "https://tse2.mm.bing.net/th?id=OIP.isHJDrrhv2R3ybWt0IepIwHaE6&pid=Api&P=0&h=180",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Courgettes",
    image: "https://cdn.pixabay.com/photo/2020/07/09/15/24/courgettes-5387743_640.jpg",
    category: "Légumes",
    type: "Frais"
  },
  {
    name: "Aubergines",
    image: "https://cdn.pixabay.com/photo/2010/12/13/09/51/aubergine-1809_640.jpg",
    category: "Légumes",
    type: "Frais"
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
    category: "Pâtes",
    type: "Grain"
  },
  {
    name: "Poulet entier",
    image: "https://cdn.pixabay.com/photo/2010/12/10/08/chicken-1140_640.jpg",
    category: "Viandes",
    type: "Volaille"
  },
  {
    name: "Bœuf",
    image: "https://tse1.explicit.bing.net/th?id=OIP.S9ANvTiJfYGO_Rg8Ecs9nQHaE8&pid=Api&P=0&h=180",
    category: "Viandes",
    type: "Bœuf"
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
    type: "Fromage"
  },
  {
    name: "Beurre",
    image: "https://tse3.mm.bing.net/th?id=OIP.lsXWXNPhsWFh2Y7fkDvw0gHaEI&pid=Api&P=0&h=180",
    category: "Produits laitiers",
    type: "Solide"
  },
  {
    name: "Huile d'olive",
    image: "https://tse2.mm.bing.net/th?id=OIP.6ZBrbpBsjeNk_kEJrGSMzwHaE1&pid=Api&P=0&h=180",
    category: "Condiments",
    type: "Liquide"
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
    type: "Mélange"
  },
  {
    name: "Poivre en grains",
    image: "https://tse2.mm.bing.net/th?id=OIP.2A5mcB41PTLYOtInZpa8GQHaE8&pid=Api&P=0&h=180",
    category: "Épices",
    type: "Mélange"
  },
  {
    name: "Basilic",
    image: "https://tse2.mm.bing.net/th?id=OIP.VfD09Ys4jwfOTp1XJyt73gHaEK&pid=Api&P=0&h=180",
    category: "Herbes aromatiques",
    type: "Frais"
  },
  {
    name: "Pommes",
    image: "https://tse1.mm.bing.net/th?id=OIP.KXk45i8tFR1-OoaVjJ3CjAHaE8&pid=Api&P=0&h=180",
    category: "Fruits",
    type: "Frais"
  },
  {
    name: "Spaghetti",
    image: "https://www.nicepng.com/png/detail/43-430255_spaghetti-pasta-spaghetti.png",
    category: "Pâtes",
    type: "Grains"
  },
  {

    name: "Parmesan",
    category: "Produits Laitiers",
    type: "Solide",
    image: "https://s3.amazonaws.com/images.ecwid.com/images/23320019/1358282545.jpg"
  },
  {

    name: "Poivre noir",
    category: "Épices",
    image: "https://tse2.mm.bing.net/th?id=OIP.2A5mcB41PTLYOtInZpa8GQHaE8&pid=Api&P=0&h=180",
    type: "Mélange"
  },
  {

    name: "Persil",
    category: "Herbes aromatiques",
    image: "https://tse2.mm.bing.net/th?id=OIP.sz29q9DPQ5VB95ypdTUEigHaFE&pid=Api&P=0&h=180",
    type: "Frais"
  },
  {

    name: "Citrons",
    category: "Fruits",
    image: "https://tse3.mm.bing.net/th?id=OIP.mRK-n5s-of03t1_lbX8HcgHaFg&pid=Api&P=0&h=180",
    type: "Frais"
  },
  {

    name: "Bananes",
    category: "Fruits",
    image: "https://tse3.mm.bing.net/th?id=OIP.9uL9bdYXO1RW8GErkX9wBwHaE9&pid=Api&P=0&h=180",
    type: "Frais"
  },
  {

    name: "Pancetta",
    category: "Viandes",
    image: "https://www.tasteforluxury.ca/wp-content/uploads/2020/04/Pancetta_Cruda_Affumicata_15080-600x600.jpg",
    type: "Porc",
  },
  {

    name: "Laitue romaine",
    category: "Legumes",
    image: "https://tse3.mm.bing.net/th?id=OIP.7TsxYCEgQkviB_Mg7CoAYAHaHa&pid=Api&P=0&h=180",
    type: "Frais",
  },
  {

    name: "Poulet grillé",
    category: "Viandes",
    image: "https://tse2.mm.bing.net/th?id=OIP.WYvaQBsBQXMGHDNRGptDfgHaIk&pid=Api&P=0&h=180",
    type: "Volaille",
  },
  {

    name: "Sauce César",
    category: "Sauces",
    image: "https://4epices.fr/wp-content/uploads/2020/12/P10109119-1024x769.png",
    type: "Liquide",
  },
  {

    name: "Croûtons",
    category: "Pains",
    image: "http://tastykitchen.com/recipes/wp-content/uploads/sites/2/2010/06/croutons-2.jpg",
    type: "Sèché",
  },
  {

    name: "Crème fraiche",
    category: "Produits laitiers",
    image: "https://tse2.mm.bing.net/th?id=OIP.6BdS7MGXcdXneRK5UG1ZuAHaE8&pid=Api&P=0&h=180",
    type: "Frais",
  },
  {

    name: "Yaourt nature",
    category: "Produits laitiers",
    image: "https://tse2.mm.bing.net/th?id=OIP.FhHKP-Z1Y12culW0cKwzwAAAAA&pid=Api&P=0&h=180",
    type: "Frais",
  },
  {

    name: "Épices Tikka",
    category: "Épices",
    image: "https://tse4.mm.bing.net/th?id=OIP.-Oxuia6t5q0coLbejC31oAHaHa&pid=Api&P=0&h=180",
    type: "Mélange",
  },
  {

    name: "Tomates concassées",
    category: "Légumes",
    image: "https://www.chefcook.fr/4697-intermediaire_default/concasse-de-tomates-a-l-italienne.jpg",
    type: "Conserve",
  },
  {

    name: "Pâte brisée",
    category: "Pâtisserie",
    image: "https://ashleemarie.com/wp-content/uploads/2015/05/151118_144503-copy.jpg",
    type: "Frais",
  },
  {

    name: "Lardons",
    category: "Viandes",
    image: "https://tse1.explicit.bing.net/th?id=OIP.h2wQgG8jix5eZbpTxRxU6wHaE7&pid=Api&P=0&h=180",
    type: "Porc",
  },
  {

    name: "Gruyère rapé",
    category: "Produits laitiers",
    image: "https://goutu.org/wp-content/uploads/gruy%C3%A8re_rap%C3%A9-750x435.jpg",
    type: "Rapé",
  },
  {

    name: "Herbe de Provence",
    category: "Herbes aromatiques",
    image: "http://www.transgourmet-fruitsetlegumes.fr/sites/default/files/styles/custom_thumbnail_auto/public/69545851.jpg?itok=buYkNUV-",
    type: "Sèché",
  },
  {

    name: "Pains",
    category: "Pains",
    image: "https://tse1.mm.bing.net/th?id=OIP.3N0jwTkDB9mBaUzJ_tMpTgHaJg&pid=Api&P=0&h=180",
    type: "Solide",
  },
  {

    name: "Bouillon de boeuf",
    category: "Condiments",
    image: "https://my-french-grocery.com/wp-content/uploads/2018/12/BOUILLON-BOEUF3.jpg",
    type: "Liquide",
  },
  {

    name: "Pâte à curry",
    category: "Épices",
    image: "https://assets.afcdn.com/recipe/20170621/69118_w300h300c1.jpg",
    type: "Solide",
  },
  {

    name: "Lait de coco",
    category: "Produits laitiers",
    image: "https://www.healthbenefitstimes.com/9/gallery/coconut/Coconut-milk.jpg",
    type: "Liquide",
  },
  {
    name: "Sucre",
    category: "Condiments",
    image: "https://media.istockphoto.com/photos/sugar-picture-id178587194?k=6&m=178587194&s=612x612&w=0&h=dkt6I5Tn64IsdkwKnRA4WVIgqFAZ3wx-MhEKllNoBsA=",
    type: "Solide",
  },
  {
    name: "Pâte feuilletée",
    category: "Pâtisserie",
    image: "https://fridg-front.s3.amazonaws.com/media/CACHE/images/products/rouleau-de-pate-feuilletee-francois-pre-etalee-au-beurre-extra-fin-aop-charente_txtGuZQ/90e528533679f29dc9ebbf644e2db786.jpg",
    type: "Frais",
  },
  {
    name: "Fumet de poisson",
    category: "Condiments",
    image: "https://files.meilleurduchef.com/mdc/photo/produit/pap/fumet-poisson/fumet-poisson-1-main-1300.jpg",
    type: "Poudre",
  },
  {
    name : "safran",
    category : "Épices",
    image : "http://upload.wikimedia.org/wikipedia/commons/1/1c/Safran-Weinviertel_Niederreiter_2_Gramm_8285.jpg",
    type : "Sèché"
  },
  {
    name: "Chocolat noir",
    category: "Produits laitiers",
    image: "https://image.freepik.com/photos-gratuite/morceaux-chocolat-noir-isoles_163782-4962.jpg",
    type: "Solide",
  },
  {
    name: "Farine",
    category: "Céréales",
    image: "https://www.farine-biologique.fr/wp-content/uploads/2019/07/farine-de-froment.jpg",
    type: "Poudre",
  },
  {
    name: "Champignons",
    category: "Légumes",
    image: "http://www.infoescola.com/wp-content/uploads/2010/01/champignon_653103157-1000x667.jpg",
    type: "Frais",
  },
  {
    name: "Vin rouge",
    category: "Alcool",
    image: "https://media.lactualite.com/2019/01/vinrouge.jpg",
    type: "Liquide",
  },
  {
    name: "Épices à tajine",
    category: "Épices",
    image: "https://s.locavor.fr/data/produits/3/54250/54250-tajine-1.jpg",
    type: "Poudre",
  },
  {
    name: "Olives vertes",
    category: "Légumes",
    image: "https://fridg-front.s3.amazonaws.com/media/products/1470.jpg",
    type: "Frais",
  },
  {
  name: "Citrons Confits",
  category: "Fruits",
  image: "https://ileauxepices.com/1493-product_zoom/ecorces-citron-confit.jpg",
  type: "Sèché",
  },
  {
    name: "Bouillon de légumes",
    category: "Condiments",
    image: "https://i.pinimg.com/736x/dd/70/83/dd7083d11c7e0fc0c17ec639571a2eca.jpg",
    type: "Solide",
  },
  {
    name: "Riz Arborio",
    category: "Céréales",
    image: "https://i5.walmartimages.com/asr/030b94cd-3531-4092-891f-5039a9ec1579.d982b4cca1c2f945e2ed89dc21fec71a.jpeg",
    type: "Grain",
  },
  {
    name: "Vin blanc",
    category: "Alcool",
    image: "https://nutrawiki.org/wp-content/uploads/2017/09/White-Wine.jpg",
    type: "Liquide",
  },
  {
    name: "Béchamel",
    category: "Sauces",
    image: "https://realfood.tesco.com/media/images/303-dairyfree-bechamel-sauce-2a15c43f-524a-4162-9cc0-b90b7a837c97-0-1400x919.jpg",
    type: "Liquide",
  },
  {
    name:"Pâtes à lasagne",
    category: "Pâtes",
    image: "https://foodomarket.s3.eu-west-3.amazonaws.com/media/cache/front_big/7/5/5/557-pate-a-lasagne.jpeg",
    type: "Frais",
  },
  {
    name: "Viande hachée",
    category: "Viandes",
    image: "https://drive.mannarini.fr/1362-thickbox_default/viande-hache-pur-boeuf-5-mg-portion-de-1-kg-rayon-traditionnel.jpg",
    type: "Boeuf",
  },
  {
    name: "Semoule",
    category: "Céréales",
    image: "https://media.istockphoto.com/id/176109394/fr/photo/pile-de-couscous.jpg?s=612x612&w=0&k=20&c=8WroGf8b8Wumlf3z_e5irwYxlyJ9iWhh4WyHJwKuU_0=",
    type: "Grain",
  },
  {
    name: "Pois chiches",
    category: "Légumes",
    image: "https://media.gerbeaud.net/2016/03/640/pois-chiche-2.jpg",
    type: "Frais",
  },
  {
    name: "Crevettes",
    category: "Crustacés",
    image: "https://www.fruitsdelamer.com/wp-content/uploads/2017/11/crevettes-roses-cuites.jpg",
    type: "Frais",
  },
  {
    name: "Tomates cerises",
    category: "Légumes",
    image: "https://petitprimeur.fr/wp-content/uploads/2020/04/shutterstock_1198589812-scaled.jpg",
    type: "Frais",
  },
  {
    name: "Épices à chili",
    category: "Épices",
    image: "http://www.lamaisondesaromes.fr/wp-content/uploads/Chili.jpg",
    type: "Poudre",
  },
  {
    name: "Haricots rouges",
    category: "Légumes",
    image: "https://catalog-media.lafourche.fr/la-fourche-1kg-haricots-rouges-bio-en-vrac-48957e39bd2731eb3fdb4bea79257e8f589627f8.jpg?width=2048&quality=75",
    type: "Frais",
  },
  {
    name: "Petits pois",
    category: "Légumes",
    image: "https://www.aprifel.com/wp-content/uploads/2019/02/petits-pois.jpg",
    type: "Frais",
  },
  {
    name: "Blanquettes de veau",
    category: "Viandes",
    image: "https://www.supermarche-match.lu/uploads/assets/discounts/blanquette-de-veau-sans-os-2/_900x700_fit_center-center_none/Blanquette-de-veau-sans-os.jpg",
    type: "Veau",
  },
  {
    name: "Fond de veau",
    category: "Condiments",
    image: "https://leclicavrac.fr/1867-large_default/fond-de-veau-100g.jpg",
    type: "Poudre",
  },
  {
    name: "Mascarpone",
    category: "Produits laitiers",
    image: "http://assets.epicurious.com/photos/57aa13beb10b4fb03f234f44/master/pass/mascarpone.jpg",
    type: "Crème",
  },
  {
    name: "Café",
    category: "Epicerie",
    image: "https://img.freepik.com/free-photo/coffee-powder-powdered-coffee-ground-roasted-coffee-isolated_117930-368.jpg?size=626&ext=jpg",
    type: "Poudre",
  },
  {
    name: "Cacao en poudre",
    category: "Epicerie",
    image: "https://lauvergnenvrac.fr/wp-content/uploads/2020/03/poudre-de-cacao-bio.jpg",
    type: "Poudre",
  },
  {
    name: "Biscuits à la cuillères",
    category: "Epicerie",
    image: "https://popottes.fr/wp-content/uploads/2018/07/shutterstock_132680270.jpg",
    type: "Frais",
  },
  {
    name: "Vinaigre de vins",
    category: "Condiments",
    image: "https://img-3.journaldesfemmes.fr/pVn26eO3zQjaANH_1Kp4Pj5GRJE=/910x607/smart/812ce28e5cdf41ce80fdb65c36b82778/ccmcms-jdf/10426618.jpg",
    type: "Liquide",
  },
  {
    name: "Concombres",
    category: "Légumes",
    image: "https://www.aprifel.com/wp-content/uploads/2019/02/concombre.jpg",
    type: "Frais"
  },
  {
    name: "Blancs de poulet",
    category: "Viandes",
    image: "https://boucherie-zielinger.fr/80-large_default/blanc-de-poulet.jpg",
    type: "Frais"
  }
];

module.exports = ingredientsData;