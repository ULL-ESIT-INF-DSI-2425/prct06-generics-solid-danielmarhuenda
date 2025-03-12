import { BasicStreamableCollection } from "./Genericos.js";

/**
 * Interfaz para representar una película
 */
export interface Pelicula{
    nombre:string;
    publicacion:number;
    director:string;
    tomatoscore:number;
    genero:string;
}

/**
 * Clase concreta para representar una colección de Pelicula
 * @extends BasicStreamableCollection<Pelicula> Se especializa en películas
 * @function search Hace concreta la búsqueda
 */
export class Peliculas extends BasicStreamableCollection<Pelicula>{
    
    /**
     * Función concreta para buscar dentro de la colección
     * @param filtro Parámetro de Pelicula por el que se va a buscar
     * @param buscador Valor en el que se va a buscar la coincidencia
     */
    search(filtro: "nombre"|"director"|"genero", buscador: string): Pelicula[] | undefined;
    search(filtro: "tomatoscore"|"publicacion", buscador: number): Pelicula[] | undefined;
    search(filtro: string, buscador: string|number): Pelicula[] | undefined {
        return this.items.filter(item => {
            switch(filtro){
                case "nombre": return item.nombre === buscador;
                case "publicacion": return item.publicacion === buscador;
                case "director": return item.director === buscador;
                case "genero": return item.genero === buscador;
                case "tomatoscore": return item.tomatoscore === buscador;
            }
        });
    }
}