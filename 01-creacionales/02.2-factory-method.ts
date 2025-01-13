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
 */

/**
 * 	!Descripción:
  1.	Completen las clases SalesReport e InventoryReport para implementar
      la interfaz Report, generando el contenido de cada reporte en el método generate.

  2.	Implementen las clases SalesReportFactory e InventoryReportFactory
      para crear instancias de SalesReport y InventoryReport, respectivamente.

	3.	Prueben el programa generando diferentes tipos de reportes usando
      el prompt para seleccionar el tipo de reporte.
 */

// 1. Definir la interfaz Report
interface IReport {
  generate(): void;
}

// 2. Clases concretas de Reportes
// Implementar SalesReport e InventoryReport

class SalesReport implements IReport {
  generate(): void {
    console.log("Reporte ventas");
  }
}

class InventoryReport implements IReport {
  generate(): void {
    console.log("reporte inventario");
  }
}

class GenericReport implements IReport {
  generate(): void {
    console.log("reporte generico");
  }
}

// 3. Clase Base ReportFactory con el Método Factory

abstract class ReportFactory {
  protected abstract createReport(): IReport;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

// 4. Clases Concretas de Fábricas de Reportes

class SalesReportFactory extends ReportFactory {
  createReport(): IReport {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  createReport(): IReport {
    return new InventoryReport();
  }
}

class GenericReportFactory extends ReportFactory {
  createReport(): IReport {
    return new GenericReport();
  }
}

// 5. Código Cliente para Probar

// main function implementation
function main() {
  let reportFactory: ReportFactory;

  const reportType = prompt(
    "¿Qué tipo de reporte deseas? (sales/inventory/generic)"
  );

  if (reportType === "sales") {
    reportFactory = new SalesReportFactory();
  } else if (reportType === "inventory") {
    reportFactory = new InventoryReportFactory();
  } else if (reportType === "generic") {
    reportFactory = new GenericReportFactory();
  } else {
    throw new Error("Opcion no valida");
  }

  reportFactory.generateReport();
}

main();
