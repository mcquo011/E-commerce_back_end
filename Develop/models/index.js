
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");


Product.belongsTo(Category, {
  foreignKey: 'categoryId'
})

Category.hasMany(Product, {
  foreignKey: 'catgoryID'
})

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'productId'
})

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tagId'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
