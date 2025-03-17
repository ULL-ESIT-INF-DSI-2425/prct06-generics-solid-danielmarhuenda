import {describe, expect, test} from "vitest";
import Estacion from "../../src/modificacion2/Estacion.js";
import Telefono from "../../src/modificacion2/Telefono.js";
import {Observable, Observer, EventosMetereologicos} from "../../src/modificacion2/Interfaces.js";

describe("Tests de la estación", () => {
    let estacion:Estacion = new Estacion([], EventosMetereologicos.SOLEADO, 30);

    test("Suscripcion y Desuscripcion", () => {
        let telefono:Telefono = new Telefono("La Laguna", estacion);

        expect(estacion.suscriptores()).toBe(0);

        estacion.subscribe(telefono);
        expect(estacion.suscriptores()).toBe(1);
        expect(estacion.observadores).toStrictEqual([telefono]);

        estacion.unsubscribe(telefono);
        expect(estacion.suscriptores()).toBe(0);
    });

    test("Notify", () => {
        let estacion2:Estacion = new Estacion([], EventosMetereologicos.SOLEADO, 30);
        let telefono:Telefono = new Telefono("La Laguna", estacion2);
        
        estacion2.cambio_metereologico(EventosMetereologicos.TORMENTA, 1);
        expect(estacion.suscriptores()).toBe(0);
        expect(telefono.temperatura_guardado_).toBe(30);
        expect(telefono.evento_guardado_).toBe(EventosMetereologicos.SOLEADO);

        estacion2.subscribe(telefono);
        estacion2.notify();
        expect(telefono.temperatura_guardado_).toBe(1);
        expect(telefono.evento_guardado_).toBe(EventosMetereologicos.TORMENTA);
        estacion2.unsubscribe(telefono);
    });

    test("Cambiar el tiempo", () => {
        let telefono:Telefono = new Telefono("La Laguna", estacion);
        estacion.subscribe(telefono);
        estacion.cambio_metereologico(EventosMetereologicos.LLUVIA, 10);
        expect(telefono.temperatura_guardado_).toBe(10);
        expect(telefono.evento_guardado_).toBe(EventosMetereologicos.LLUVIA);
        estacion.unsubscribe(telefono);
    });



});