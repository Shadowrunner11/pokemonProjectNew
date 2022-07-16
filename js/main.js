import { Map } from "./models/Map.js";
import { Pokemon } from "./models/Pokemon.js";
import { Position } from "./models/Position.js";
import { $ } from "./utils/selectors.js";

const map = $(".map")
let PokemonInstance;

$("#generate-map").addEventListener("click", ()=>{
        if(map.firstChild) map.removeChild(map.firstChild)

        const mapInner = document.createElement("div")
        const [xTotal, yTotal, id] = [
                Number($("#x").value),
                Number($("#y").value),
                Number($("#id").value)
        ]

        const mapInstance  = new Map(xTotal, yTotal, mapInner)
        mapInstance.createMapHtml()    
        map.appendChild(mapInner)
        PokemonInstance = new Pokemon(
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                new Position(0, 0),
                mapInstance,
                "Hola"
        )
        new Pokemon(
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
                new Position(4, 5),
                mapInstance,
                "Cuidado amigo"  
        )

        new Pokemon(
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
                new Position(3, 2),
                mapInstance,
                "Que buena fiesta"  
        )



})

document.addEventListener("keypress", (e)=>{
        switch (e.key) {
                case "w":
                case "W":
                        PokemonInstance.moveUp()
                        break;
                case "s":
                case "S":
                        PokemonInstance.moveDown()
                        break;
                case "d":
                case "D":
                        PokemonInstance.moveRigth()
                        break;
                case "a":
                case "A":
                        PokemonInstance.moveLeft()
                        break;
                default:
                        break;
        }
})