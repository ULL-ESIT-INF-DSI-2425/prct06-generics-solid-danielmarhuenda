import {describe, expect, test} from "vitest";
import Estacion from "../../src/modificacion2/Estacion.js";
import Telefono from "../../src/modificacion2/Telefono.js";
import {Observable, Observer, EventosMetereologicos} from "../../src/modificacion2/Interfaces.js";

describe("Tests del Telefono", () => {
    let estacion:Estacion = new Estacion([], EventosMetereologicos.SOLEADO, 30);
    let telefono:Telefono = new Telefono("La Laguna", estacion);
    estacion.subscribe(telefono);


    test("Funcionamiento normal a negativo", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.LLUVIA, 10)).toStrictEqual(
            `Clima actual en La Laguna: 10 (-20), lluvia`
        )
    });

    test("Funcionamiento normal a positivo", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.TORMENTA, 20)).toStrictEqual(
            `Clima actual en La Laguna: 20 (+10), tormenta`
        )
    });

    test("Funcionamiento normal a misma temperatura", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.VIENTO, 20)).toStrictEqual(
            `Clima actual en La Laguna: 20 (=), viento`
        )
    });

    test("Error por demasiado alto", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.SOLEADO, 70)).toStrictEqual(
            "Error en la toma de temperatura"
        )
    });

    test("Error por demasiado bajo", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.NIEVE, -280)).toStrictEqual(
            "Error en la toma de temperatura"
        )
    });



});