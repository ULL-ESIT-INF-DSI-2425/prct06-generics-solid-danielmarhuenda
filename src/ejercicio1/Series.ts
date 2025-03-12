import { BasicStreamableCollection } from "./Genericos.js";

/**
 * Interfaz para representar una serie
 */
export interface Serie{
    nombre:string;
    publicacion:number;
    director:string;
    capitulos:number;
    terminado:boolean;
}

/**
 * Clase concreta para representar una colección de Series
 * @extends BasicStreamableCollection<Serie> Se especializa en Series
 * @function search Hace concreta la búsqueda
 */
export class Series extends BasicStreamableCollection<Serie>{
    
    /**
     * Función concreta para buscar dentro de la colección
     * @param filtro Parámetro de Serie por el que se va a buscar
     * @param buscador Valor en el que se va a buscar la coincidencia
     */
    search(filtro: "nombre"|"director", buscador: string): Serie[] | undefined;
    search(filtro: "capitulos"|"publicacion", buscador: number): Serie[] | undefined;
    search(filtro: "terminado", buscador: boolean): Serie[] | undefined;
    search(filtro: string, buscador: string|boolean|number): Serie[] | undefined {
        return this.items.filter(item => {
            switch(filtro){
                case "nombre": return item.nombre === buscador;
                case "publicacion": return item.publicacion === buscador;
                case "director": return item.director === buscador;
                case "terminado": return item.terminado === buscador;
                case "capitulos": return item.capitulos === buscador;
            }
        });
    }
}