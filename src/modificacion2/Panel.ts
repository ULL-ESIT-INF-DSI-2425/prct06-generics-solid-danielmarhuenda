import {Observable, Observer, EventosMetereologicos} from "../../src/modificacion2/Interfaces.js";
import Estacion from "./Estacion.js";


/**
 * Clase para representar un Panel informativo.
 * Me imaginé un Panel de una farmacia, donde no cabe el clima.
 * Así que sólo almacena la temperatura.
 */
export default class Panel implements Observer{
    constructor(){}

    update(observable: Observable):string {
        if (observable instanceof Estacion) {
            if(observable.temperatura > 60 || observable.temperatura < -274){
                return "Error en la toma de temperatura"
            }
            return `Temperatura: ${observable.temperatura}`
        }
        return "Error en la toma de update";
    }
}