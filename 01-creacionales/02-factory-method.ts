/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
  prepare(): void;
}

class ChickenHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de pollo");
  }
}

class BeefHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de res");
  }
}

class BeanHamburguer implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de frijol");
  }
}

abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburguer(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChickenHamburguer();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburguer();
  }
}

class BeanRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeanHamburguer();
  }
}

function main() {
  let restaurant: Restaurant;
  const burgerType = prompt("¿Que tipo de hamburguesa quieres? (chicken/beef/bean)");

  switch (burgerType) {
    case "chicken":
      restaurant = new ChickenRestaurant();
      break;
    case "beef":
      restaurant = new BeefRestaurant();
      break;
    case "bean":
      restaurant = new BeanRestaurant();
      break;
    default:
      throw new Error("Opción no válida");
  }

  restaurant.orderHamburguer();
}

main();
