class ItemModel {
  constructor (entity) {
    Object.assign(this, {
      brand: '',
      title: '',
      description: '',
      descriptionFull: '',
      price: '',
      currency: ''
    }, entity)
  }
}

export default ItemModel;

//Почему не работает вариант ниже?

/* 
class ItemModel {
  constructor(brand, title, description, descriptionFull, price, currency) {
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.price = price;
    this.currency = currency;
  }
}

export default ItemModel;

*/