import {describe, expect, test} from "vitest";
import Estacion from "../../src/modificacion2/Estacion.js";
import Panel from "../../src/modificacion2/Panel.js";
import {Observable, Observer, EventosMetereologicos} from "../../src/modificacion2/Interfaces.js";

describe("Tests del panel", () => {
    let estacion:Estacion = new Estacion([], EventosMetereologicos.SOLEADO, 30);
    let panel:Panel = new Panel();
    estacion.subscribe(panel);


    test("Funcionamiento normal a negativo", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.LLUVIA, 10)).toStrictEqual(
            `Temperatura: 10`
        )
    });

    test("Funcionamiento normal a positivo", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.TORMENTA, 20)).toStrictEqual(
            `Temperatura: 20`
        )
    });

    test("Funcionamiento normal a misma temperatura", () => {
        expect(estacion.cambio_metereologico(EventosMetereologicos.VIENTO, 20)).toStrictEqual(
            `Temperatura: 20`
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