
interface Listable<T>{
    append(lista2:Lista<T>):void;
    concatenate(listas:Lista<T>[]):void;
    filter(predicado:Function):Lista<T>;
    lenght():number;
    map(funcion:Function):Lista<T>;
    //reduce(funcion:Function, acumulador:number):void;
    reverse():Lista<T>;
    //forEach(lista:Lista<T>, funcion:Function):No se
}

/**
 * Clase generica para representar listas
 * @template T Cualquier tipo de variable
 * @class Es una clase
 */
export class Lista<T> implements Listable<T>{

    /**
     * Constructor de la clase genérica Lista
     * @param items Valores iniciales de la lista
     */
    constructor(private items: T[]){

    }

    /**
     * Getter de los items para los tests
     * @returns Array internos de los items
     */
    getitems():T[]{
        return this.items;
    }

    /**
     * Funcion que dadas dos listas devuelve una lista con los valores de la segunda lista
     * puestos después de los valores de la primera lista
     * @param lista2 Segunda lista
     */
    append(lista2: Lista<T>): void{
        let iterador_pos_segundo:number = 0;
        while(lista2.items[iterador_pos_segundo] !== undefined){
            this.items.push(lista2.items[iterador_pos_segundo]);
            iterador_pos_segundo++;
        }

    }

    /**
     * Funcion que dadas varias listas junto todos sus valores
     * @param listas Listas a unir
     */
    concatenate(listas: Lista<T>[]): void{
        let iterador_listas = 0;

        while(listas[iterador_listas] !== undefined){
            this.append(listas[iterador_listas]);
            iterador_listas++;
        }
    }

    /**
     * Funcion que filtra la lista según una funcion booleana dada
     * @param funcion Funcion filtradora
     * @returns Lista ya filtrada
     */
    filter(funcion: (a: T) => boolean):Lista<T>{
        let resultado:Lista<T> = new Lista<T>([]);
        let iterador_pos = 0;

        while(this.items[iterador_pos] !== undefined){
            if(funcion(this.items[iterador_pos])) resultado.items.push(this.items[iterador_pos]);

            iterador_pos++;
        }

        return resultado;
    }


    /**
     * Función que devuelve la cantidad de valores dentro de la lista
     * @returns Longitud de la lista
     */
    lenght(): number {
        let iterador_pos = 0;
        while(this.items[iterador_pos] !== undefined){
            iterador_pos++;
        }
        return iterador_pos;
    }

    /**
     * Funcion que aplica a todos los valores de la lista una funcion
     * @param funcion Funcion a aplicar
     * @returns Lista con los valores ya aplicados
     */
    map(funcion: Function): Lista<T> {
        let resultado:Lista<T> = new Lista<T>([]);
        let iterador_pos = 0;

        while(this.items[iterador_pos] !== undefined){
            resultado.items.push(funcion(this.items[iterador_pos]));
            iterador_pos++;
        }

        return resultado;
    }

    /**
     * Funcion que devuelve la lista en orden inverso
     * @returns Lista inversa
     */
    reverse(): Lista<T> {
        let resultado:Lista<T> = new Lista<T>([]);
        let iterador_pos = 0;

        while(this.items[iterador_pos] !== undefined){
            iterador_pos++;
        }
        iterador_pos--;

        while(iterador_pos >= 0){
            resultado.items.push(this.items[iterador_pos]);
            iterador_pos--;
        }

        return resultado;
    }
    /** 
    reduce(funcion: Function, acumulador: number): void {
        let resultado:Lista<T> = new Lista<T>([]);
        let iterador_pos = 0;

        while(this.items[iterador_pos] !== undefined){
            resultado.items.push(funcion(this.items[iterador_pos]));
            iterador_pos++;
        }

        return resultado;
    }
        */
}