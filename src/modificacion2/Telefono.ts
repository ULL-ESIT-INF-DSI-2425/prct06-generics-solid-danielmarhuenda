import {Observable, Observer, EventosMetereologicos} from "../../src/modificacion2/Interfaces.js";
import Estacion from "./Estacion.js";


/**
 * Clase para representar una aplicación del tiempo en el teléfono.
 * Muestra tanto la temperatura como el clima
 */
export default class Telefono implements Observer{
    public temperatura_guardado_:number;
    public evento_guardado_:EventosMetereologicos;
    constructor(private lugar:string, private clima_previo_:Estacion){
        this.temperatura_guardado_ = clima_previo_.temperatura;
        this.evento_guardado_ = clima_previo_.evento_actual;
    }

    /**
     * Función para representar la actualización del tiempo
     * Se muestra la diferencia de temperatura entre la anterior toma y la actual
     * @param observable Toma actual de la estación
     * @returns Informe de los datos
     */
    update(observable: Observable):string {
        if (observable instanceof Estacion) {
            if(observable.temperatura > 60 || observable.temperatura < -274){
                return "Error en la toma de temperatura"
            }
            let diferencia:number = observable.temperatura - this.temperatura_guardado_;
            let diferenciastring:string = "";
            if(diferencia > 0) diferenciastring = `+${diferencia}`
            else if(diferencia < 0) diferenciastring = `${diferencia}`
            else diferenciastring = "="

            this.temperatura_guardado_ = observable.temperatura;
            this.evento_guardado_ = observable.evento_actual;

            return `Clima actual en ${this.lugar}: ${observable.temperatura} (${diferenciastring}), ${observable.evento_actual}`
        }
        return "error";
    }
}