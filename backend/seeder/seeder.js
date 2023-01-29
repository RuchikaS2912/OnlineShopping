const connectDB = require("../config/db");
connectDB();

const categoryData = require("./category");
const productsData = require("./products");
const reviewsData = require("./reviews");
const usersData = require("./user");
const ordersData = require("./order");
const Category = require("../models/CategoryModel");
const Products = require("../models/ProductModel");
const Reviews = require("../models/ReviewsModel");
const Users = require("../models/UserModel");
const Orders = require("../models/OrderModel");

const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    await Products.collection.dropIndexes();
    await Reviews.collection.dropIndexes();
    await Users.collection.dropIndexes();
    await Orders.collection.dropIndexes();

    await Category.collection.deleteMany({});
    await Products.collection.deleteMany({});
    await Reviews.collection.deleteMany({});
    await Users.collection.deleteMany({});
    await Orders.collection.deleteMany({});

    await Category.insertMany(categoryData);
    const reviews = await Reviews.insertMany(reviewsData);
    const sampleProducts = productsData.map((product) => {
      console.log(product);
      reviews.map((review) => {
        product.reviews.push(review._id);
      });
      return { ...product };
    });
    await Products.insertMany(sampleProducts);
    await Users.insertMany(usersData);
    await Orders.insertMany(ordersData);

    console.log("Seeder data proceeded successfully");
    process.exit();
  } catch (error) {
    console.error("Error while proccessing seeder data", error);
    process.exit(1);
  }
};
importData();
