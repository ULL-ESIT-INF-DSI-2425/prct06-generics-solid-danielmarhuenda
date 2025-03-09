//He separado las funciones de print y de scan para que la Printer no haga scan y la Scanner no haga print

interface Printable {
    print(): void
}

interface Scannable {
    scan(): void
}
  
  export class Printer implements Printable {
    print(): void {
      console.log('Printing...')
    }
  
  }
  
  export class Scanner implements Scannable {
    scan(): void {
      console.log('Scanning...')
    }
  }
  
  export class PrinterScanner implements Printable, Scannable {
    print(): void {
      console.log('Printing...')
    }
  
    scan(): void {
      console.log('Scanning...')
    }
  }
  
  // Client code
  const printer = new Printer();
  // Printing
  printer.print();
  
  const scanner = new Scanner();
  // Scanning
  scanner.scan();
  
  const printerScanner = new PrinterScanner();
  // Printing
  printerScanner.print();
  // Scanning
  printerScanner.scan();
  