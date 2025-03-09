import {describe, expect, test} from "vitest";
import { Series, Serie } from "../../src/ejercicio1/Series";

describe("Tests de los series", () => {
    let serie1:Serie = {nombre: "La tierra", publicacion:2000, director:"Juan", capitulos:10, terminado:true}
    let series:Series = new Series([serie1]);
    let serie2:Serie = {nombre: "Historia de Informatica", publicacion:2000, director:"Segredo", capitulos:2, terminado:false}

    test("Get Numero items", () => {
        expect(series.getNumberOfItems()).toBe(1);
    });

    test("Add item", () => {
        series.addItem(serie2);
        expect(series.getNumberOfItems()).toBe(2);
    });

    test("Search item", () => {
        expect(series.search("nombre", "Historia de Informatica")).toStrictEqual([serie2]);
        expect(series.search("publicacion", 2000)).toStrictEqual([serie1, serie2]);
        expect(series.search("director", "Segredo")).toStrictEqual([serie2]);
        expect(series.search("capitulos", 10)).toStrictEqual([serie1]);
        expect(series.search("terminado", false)).toStrictEqual([serie2]);
    });

    test("Delete item", () => {
        let deletear:Serie[] = series.search("nombre", "Historia de Informatica") as Serie[];
        series.removeItem(deletear);
        expect(series.getNumberOfItems()).toBe(1);
    });


});