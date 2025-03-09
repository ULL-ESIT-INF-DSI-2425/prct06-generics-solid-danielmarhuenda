import {describe, expect, test} from "vitest";
import { Documentales, Documental } from "../../src/ejercicio1/Documentales";

describe("Tests de los documentales", () => {
    let documental1:Documental = {nombre: "La tierra", publicacion:2000, director:"Juan", tema:"Geologia"}
    let documentales:Documentales = new Documentales([documental1]);
    let documental2:Documental = {nombre: "Historia de Informatica", publicacion:2000, director:"Segredo", tema:"Informatica"}

    test("Get Numero items", () => {
        expect(documentales.getNumberOfItems()).toBe(1);
    });

    test("Add item", () => {
        documentales.addItem(documental2);
        expect(documentales.getNumberOfItems()).toBe(2);
    });

    test("Search item", () => {
        expect(documentales.search("nombre", "Historia de Informatica")).toStrictEqual([documental2]);
        expect(documentales.search("publicacion", 2000)).toStrictEqual([documental1, documental2]);
        expect(documentales.search("director", "Segredo")).toStrictEqual([documental2]);
        expect(documentales.search("tema", "Geologia")).toStrictEqual([documental1]);
    });

    test("Delete item", () => {
        let deletear:Documental[] = documentales.search("nombre", "Historia de Informatica") as Documental[];
        documentales.removeItem(deletear);
        expect(documentales.getNumberOfItems()).toBe(1);
    });


});