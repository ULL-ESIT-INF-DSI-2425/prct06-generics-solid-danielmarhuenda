
/**
 * Interfaz que representa un conjunto de algo stremeable
 */
interface Streamable<T>{
    search(filtro:string, buscador:string): T[] | undefined;
    addItem(newItem: T): void;
    getNumberOfItems(): number;
    removeItem(lostItems: T[]):void;
}

/**
 * Clase abstracta genérica que se usará para colecciones de objetos stremeables
 * @abstract Es abstracta
 * @class Es una clase
 * @constructor Su constructor se heredará a sus hijos
 * @template T El tipo que sus hijos especificarán
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>{

    /**
     * Función para el constructor de la clase
     * @param items Array inicial de valores
     */
    constructor(protected items: T[]) {
    }

    /**
     * Función abstracta genérica para buscar dentro de la colección
     * @param filtro Parámetro de T por el que se va a buscar
     * @param buscador Valor en el que se va a buscar la coincidencia
     */
    abstract search(filtro: string, buscador:string|boolean|number): T[] | undefined;

    /**
     * Añadir un nuevo item a la colección
     * @param newItem Item a añadir
     */
    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    /**
     * Función que devuelve la cantidad de items en la colección
     * @returns Cantidad de items
     */
    getNumberOfItems(): number {
        return this.items.length;
    }

    /**
     * Función que elimina varios items de la colección
     * @param lostItems Array de items a eliminar, lo ideal es que se reciban de la función search
     */
    removeItem(lostItems: T[]): void {
        let nuevaLista:T[] = [];
        this.items.forEach(item => {
            if((lostItems.find((element) => element === item)) === undefined){
                nuevaLista.push(item);
            }
        });
        this.items = nuevaLista;
    }
}