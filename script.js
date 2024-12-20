class Product {
    constructor(name, category, price, quantity) {
      this.name = name;
      this.category = category;
      this.price = price;
      this.quantity = quantity;
    }
  
    displayInfo() {
      console.log(
        `Назва: ${this.name}, Категорія: ${this.category}, Ціна: ${this.price} грн, Кількість: ${this.quantity}`
      );
    }
  
    
    displayOnPage() {
      document.write(
        `<p>Назва: ${this.name}, Категорія: ${this.category}, Ціна: ${this.price} грн, Кількість: ${this.quantity}</p>`
      );
    }
  }
  
 
  const product1 = new Product("Телевізор", "Електроніка", 12000, 5);
  const product2 = new Product("Стіл", "Меблі", 3500, 10);
  const product3 = new Product("Ноутбук", "Електроніка", 30000, 3);
  
 
  product1.displayOnPage();
  product2.displayOnPage();
  product3.displayOnPage();
  

  function ProductAlt(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }
  
 
  ProductAlt.prototype.displayOnPage = function () {
    document.write(
      `<p>Назва: ${this.name}, Категорія: ${this.category}, Ціна: ${this.price} грн, Кількість: ${this.quantity}</p>`
    );
  };
  

  const altProduct1 = new ProductAlt("Пилосос", "Електроніка", 6000, 8);
  const altProduct2 = new ProductAlt("Крісло", "Меблі", 1500, 20);
  
    
  altProduct1.displayOnPage();
  altProduct2.displayOnPage();
  