import { resourceLimits } from "worker_threads";
import {Observable, Observer, EventosMetereologicos} from "./Interfaces.js"

/**
 * Clase para representar a una estación metereológica
 * Contiene un conjunto de Observadores que quieren saber los cambios del tiempo.
 * @function subscribe Se suscriben mediante esta funcion
 * @function unsubscribe Se desuscriben mediante esta funcion
 * @function notify Se notifica a los suscriptores de los cambios mediante esta funcion
 * @function cambio_metereologico Se cambia el tiempo y se llama a notificar a los suscriptores
 */
export default class Estacion implements Observable{

    /**
     * Constructor de la clase Estacioni
     * @param observadores_ Lista de los suscriptores iniciales a la estación
     * @param evento_actual_ Clima en el momento de la creación de la estación
     * @param temperatura_ Temperatura en el momento de la creación de la estación
     */
    constructor(private observadores_:Observer[], private evento_actual_:EventosMetereologicos,
        private temperatura_:number){}
    
    /**
     * Devuelve la lista de suscriptores para poder comprobar que se insertaron correctamente
     * @returns Lista de suscriptores
     */
    get observadores(){
        return this.observadores_;
    }

    /**
     * Devuelve el evento actual
     */
    get evento_actual(){
        return this.evento_actual_;
    }

    /**
     * Devuelve la temperatura actual
     */
    get temperatura(){
        return this.temperatura_;
    }
    
    /**
     * Cantidad total de suscriptores para hacer los tests de forma mucho más sencilla
     * @returns Cantidad de suscriptores
     */
    public suscriptores():number{
        return this.observadores_.length;
    }

    /**
     * Función para suscribirse a la estación
     * @param observer Observador que se va a suscribir
     */
    public subscribe(observer: Observer): void {
        if (this.observadores_.includes(observer)) {
            throw new Error('Ya está suscrito');
        } else {
            this.observadores_.push(observer);
        }
    }

    /**
     * Función para eliminarse de la lista de suscriptores
     * @param observer Observador que se va a desuscribir
     */
    public unsubscribe(observer: Observer) {
        const index = this.observadores_.indexOf(observer);
        if (index === -1) {
            throw new Error('No estaba suscrito');
        } else {
            this.observadores_.splice(index, 1);
        }
    }

    /**
     * Función para notificar a los suscriptores de un cambio
     */
    public notify():string {
        let resultado:string = "";
        this.observadores_.forEach((observer) => resultado += observer.update(this));
        return resultado;
    }

    /**
     * Función para cambiar el tiempo guardado
     * @param evento Evento actual
     
    public cambio_tiempo(evento:EventosMetereologicos){
        this.evento_actual_ = evento;
        this.notify();
    }

    /**
     * Función para cambiar la temperatura guardada
     * @param temperatura Temperatura actual
     
    public cambio_temperatura(temperatura:number){
        this.temperatura_ = temperatura;
        this.notify();
    }
    */

    /**
     * Función para cambiar tanto la temperatura como el tiempo guardados
     * @param evento Evento actual
     * @param temperatura Temperatura actual
     */
    public cambio_metereologico(evento:EventosMetereologicos, temperatura:number):string{
        this.evento_actual_ = evento;
        this.temperatura_ = temperatura;
        return this.notify();
    }

}