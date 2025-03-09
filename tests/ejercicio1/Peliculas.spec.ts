import {describe, expect, test} from "vitest";
import { Peliculas, Pelicula } from "../../src/ejercicio1/Peliculas";

describe("Tests de los peliculas", () => {
    let pelicula1:Pelicula = {nombre: "La tierra", publicacion:2000, director:"Juan", genero:"Geologia", tomatoscore:6}
    let peliculas:Peliculas = new Peliculas([pelicula1]);
    let pelicula2:Pelicula = {nombre: "Historia de Informatica", publicacion:2000, director:"Segredo", genero:"Informatica", tomatoscore:10}

    test("Get Numero items", () => {
        expect(peliculas.getNumberOfItems()).toBe(1);
    });

    test("Add item", () => {
        peliculas.addItem(pelicula2);
        expect(peliculas.getNumberOfItems()).toBe(2);
    });

    test("Search item", () => {
        expect(peliculas.search("nombre", "Historia de Informatica")).toStrictEqual([pelicula2]);
        expect(peliculas.search("publicacion", 2000)).toStrictEqual([pelicula1, pelicula2]);
        expect(peliculas.search("director", "Segredo")).toStrictEqual([pelicula2]);
        expect(peliculas.search("genero", "Geologia")).toStrictEqual([pelicula1]);
        expect(peliculas.search("tomatoscore", 10)).toStrictEqual([pelicula2]);
    });

    test("Delete item", () => {
        let deletear:Pelicula[] = peliculas.search("nombre", "Historia de Informatica") as Pelicula[];
        peliculas.removeItem(deletear);
        expect(peliculas.getNumberOfItems()).toBe(1);
    });


});