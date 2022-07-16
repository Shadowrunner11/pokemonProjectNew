import { Map } from "./Map.js"
import { Position } from "./Position.js"

export class Pokemon{
    /**
     * @param  {String} spritePath
     * @param  {Position} location
     * @param  {Map} map
     */
    constructor(spritePath, location, map, dialog){
        this.spritePath = spritePath
        this.location = location
        this.map = map
        this.dialog = dialog
        this.map.place(this)
    }
    /**
     * @param  {Position} location
     */
    moveRelative(x, y){
        const prevPosition = new Position(this.location.x, this.location.y)
        try {
            this.location.move(y, x)
            this.map.place(this)
            this.map.clean(prevPosition)
            
        } catch (error) {
            this.location = prevPosition
        }
    }

    moveUp(){
        this.moveRelative(0, -1)
    }
    moveDown(){
        this.moveRelative(0, 1)
    }
    moveLeft(){
        this.moveRelative(-1, 0)
    }
    moveRigth(){
        this.moveRelative(1, 0)
    }


}