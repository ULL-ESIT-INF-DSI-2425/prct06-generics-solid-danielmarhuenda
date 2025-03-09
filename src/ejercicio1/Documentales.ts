import { BasicStreamableCollection } from "./Genericos";

/**
 * Interfaz para representar un documental
 */
export type Documental = {
    nombre:string;
    publicacion:number;
    director:string;
    tema:string;
}

/**
 * Clase concreta para representar una colección de Documentales
 * @extends BasicStreamableCollection<Documental> Se especializa en Documentales
 * @function search Hace concreta la búsqueda
 */
export class Documentales extends BasicStreamableCollection<Documental>{

    /**
     * Función concreta para buscar dentro de la colección
     * @param filtro Parámetro de Documental por el que se va a buscar
     * @param buscador Valor en el que se va a buscar la coincidencia
     */
    search(filtro: "nombre"|"director"|"tema", buscador: string): Documental[] | undefined;
    search(filtro: "publicacion", buscador: number): Documental[] | undefined;
    search(filtro: string, buscador: string|number): Documental[] | undefined {
        return this.items.filter(item => {
            switch(filtro){
                case "nombre": return item.nombre === buscador;
                case "publicacion": return item.publicacion === buscador;
                case "director": return item.director === buscador;
                case "tema": return item.tema === buscador;
            }
        });
    }
}