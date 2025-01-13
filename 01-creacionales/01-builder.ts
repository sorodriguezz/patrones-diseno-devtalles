/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = "cpu - not defined";
  public ram: string = "ram - not defined";
  public storage: string = "storage - not defined";
  public gpu?: string;

  displayConfiguration() {
    console.log(`Configuracion de la computadora:
      CPU: ${this.cpu}
      RAM: ${this.ram}
      STORAGE: ${this.storage}
      GPU: ${this.gpu ?? "No GPU"}
      `);
  }
}

class ComputerBuilder {
  public computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): this {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): this {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): this {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): this {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

function main() {
  const computer = new ComputerBuilder()
    .setCPU("Intel i7")
    .setRAM("16 GB")
    .setStorage("1 TB")
    .setGPU("Nvidia RTX 2080")
    .build();

  computer.displayConfiguration();

  const computerGamer = new ComputerBuilder()
  .setCPU("Intel i9")
  .setRAM("64 GB")
  .setStorage("10 TB M.2")
  .setGPU("Nvidia RTX 4090")
  .build();

  computerGamer.displayConfiguration();
}

main();