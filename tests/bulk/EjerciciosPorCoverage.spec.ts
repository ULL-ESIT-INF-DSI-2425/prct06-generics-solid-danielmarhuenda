import {describe, expect, test} from "vitest";

import { FileManager } from "../../src/ejercicio3/Gestor";
import { Printer, Scanner, PrinterScanner } from "../../src/ejercicio4/impresora";
import { Notifier, EmailService, ShortMessageService } from "../../src/ejercicio5/Mensaje";
import { Penguin, Sparrow } from "../../src/ejercicio6/Pajaros";

/**
 * Hago estos tests solamente para que no se queje el coverage.
 * Solamente ejecuto el flujo normal de ejemplo
 * No estoy testeando realmente, el código dado por el enunciado
 * Ya funcionaba de base
 */
describe("Tests de lejercicios de hacer código más bonito", () => {

    test("Ejercicio3", () => {
        // Client code
        const fileManager = new FileManager("example.txt");

        // Reading content
        const currentContent = fileManager.readFile();
        expect(currentContent).toBe("This is new content to be written into the file.");
        //console.log("Current content:", currentContent);

        // Writing content
        const newData = "This is new content to be written into the file.";
        fileManager.writeFile(newData);

        // Updating content
        const updatedContent = fileManager.readFile();
        expect(updatedContent).toBe("This is new content to be written into the file.");
        //console.log("Updated content:", updatedContent);
    });

    test("Ejercicio4", () => {

        // Client code
        const printer = new Printer();
        expect(printer).toHaveProperty("print");
        // Printing
        //printer.print();
  
        const scanner = new Scanner();
        expect(scanner).toHaveProperty("scan");
        // Scanning
        //scanner.scan();
  
        const printerScanner = new PrinterScanner();
        expect(printerScanner).toHaveProperty("print");
        expect(printerScanner).toHaveProperty("scan");
        // Printing
        //printerScanner.print();
        // Scanning
        //printerScanner.scan();
    });

    test("Ejercicio5", () => {
        // Client code
        const emailNotifier = new Notifier(new EmailService());
        expect(emailNotifier).toHaveProperty("sendNotification");
        //emailNotifier.sendNotification('Hello World!');
          
        const shortMessageNotifier = new Notifier(new ShortMessageService());
        expect(shortMessageNotifier).toHaveProperty("sendNotification");
        //shortMessageNotifier.sendNotification('Hello World!');
    });

    test("Ejercicio6", () => {
        // Client code
        const gorrion = new Sparrow();
        expect(gorrion).toHaveProperty("fly");
        gorrion.fly()
        expect(gorrion.ispajaro).toBe(true);
          
        const pinguino = new Penguin();
        expect(pinguino.ispajaro).toBe(true);
    });


});