var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath:
      "https://images.samsung.com/is/image/samsung/p5/in/galaxy-s20/pcd/smartphones-galaxy-s20-ultra-gray.png?$ORIGIN_PNG$",
    title: "Samsung Galaxy S20 Ultra",
    description:
      "Samsung Galaxy S20 Ultra 5G 128GB Factory Unlocked Smartphone - International Version (Cosmic Grey)",
    price: 92000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/51w4wX+yqcL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Oneplus 7T",
    description:
      "OnePlus 7T HD1900 256GB, 8GB, Dual Sim, 6.55 inch, 48MP Main Lens, Triple Lens Camera, GSM Unlocked",
    price: 42000,
  }),
  new Product({
    imagePath:
      "https://images.samsung.com/is/image/samsung/p5/in/galaxy-note10/pcd/smartphones-galaxy-note10-note10plus-aura-glow.png?$ORIGIN_PNG$",
    title: "Samsung Galaxy Note 10+",
    description:
      "Samsung Galaxy Note 10+ Plus 256GB GSM Unlocked Smartphone, Aura Glow / Silver",
    price: 72000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/515hWUDel4L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Oneplus 7T Pro",
    description:
      "OnePlus 7T PRO HD1910 256GB, 8GB, Dual Sim, 6.67 inch, 48MP Main Lens, Triple Lens Camera, GSM Unlocked",
    price: 49000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/41Xxq6sl29L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Oneplus 8 Pro",
    description:
      "OnePlus 8 PRO 5G Dual SIM 12GB+256GB GSM Unlocked IN2025 US Version (ATT, Verizon, Tmobile) - Onyx Black",
    price: 54000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/G/01/appcore/phone/AMZ_FamiyStripe_iPhone_11ProMax.png",
    title: "Iphone 11 Pro Max",
    description:
      "Apple iPhone 11 Pro Max, 256GB, Midnight Green, Fully Unlocked",
    price: 100000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/81T-FKC695L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Google Pixel 3a",
    description:
      "Google - Pixel 3a with 64GB Memory Cell Phone (Unlocked) - Just Black - G020G",
    price: 32000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/61-Nx3i2ZvL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Motorola Moto G8 Play",
    description:
      "Motorola Moto G8 Play XT2015-2 (32GB) 6.2(19: 9) HD+ 4G LTE GSM Factory Unlocked Smartphone(International Version)(Obsidian Grey)",
    price: 30000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/615OoWpLbrL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Motorola One Vision",
    description:
      "Motorola One Vision (128GB) 6.3' Full HD Display, 48MP Camera, Dual SIM US",
    price: 20000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/61NpXPw0WKL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Xiaomi Redmi Note 8",
    description:
      "Xiaomi Redmi Note 8 6.3 64GB 4GB RAM(GSM Only, No CDMA) Internationa Version - No Warranty(Neptune Blue)",
    price: 30000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/61YjtJEsM2L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Xiaomi Redmi Note 8 pro",
    description:
      "Xiaomi Redmi Note 8 Pro 128GB, 6GB RAM 6.53 LTE GSM 64MP Smartphone - Global Model (Mineral Grey)",
    price: 30000,
  }),
  new Product({
    imagePath:
      "https://m.media-amazon.com/images/I/41FBnbqW3pL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Xiaomi Redmi Note 7",
    description:
      "Xiaomi Redmi Note 7, 64GB/4GB RAM, 6.30'' FHD+, Snapdragon 660, Blue - Unlocked Global Version, No Warranty",
    price: 30000,
  }),
];


var done = 0;
for (var i=0; i<products.length; i++){
	products[i].save(function(err, data){
		done++;
		if (done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();
}
