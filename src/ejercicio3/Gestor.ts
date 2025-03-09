import * as fs from "fs";

/**
 * He usado interfaces para definir lo que hace falta en un manejador de archivos de lectura y de escritura
 * He usado clases para funciones individuales, una clase para escribir y una clase para leer.
 */

interface Legible{
  readFile():string;
}

interface Escribible{
  writeFile(data:string):void;
}

class ReadableManager implements Legible{
  constructor(private filePath: string) {}

  // Reads file
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo");
      return "";
    }
  }
}

class WritableManager implements Escribible{
  constructor(private filePath: string) {}

  // Writes file
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      console.error("Error al escribir en el archivo");
    }
  }
}

export class FileManager{
  private leer_:ReadableManager;
  private escribir_:WritableManager;

  constructor(private filePath: string){
    this.leer_ = new ReadableManager(filePath);
    this.escribir_ = new WritableManager(filePath);
  }

  readFile():string{return this.leer_.readFile();}
  writeFile(data:string):void{this.escribir_.writeFile(data);}

}



// Client code
const fileManager = new FileManager("example.txt");

// Reading content
const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);
