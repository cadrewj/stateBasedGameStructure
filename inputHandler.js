export default class InputHandler{
    constructor(){
        this.lastKey = "";
        window.addEventListener("keydown", (e) =>{ //arrow function is used to bind the event key to the input class
            const pressed = e.key;
            switch(pressed){
                case "w":
                    this.lastKey = `PRESS w`;
                break;
                case "a":
                    this.lastKey = `PRESS a`;
                break;
                case "s":
                    this.lastKey = `PRESS s`;
                break;
                case "d":
                    this.lastKey = `PRESS d`;
                break;
                case "Enter":
                    this.lastKey = `Enter`;
                break;
            }
        })
        window.addEventListener("keyup", (e) =>{
            const released = e.key;
            switch(released){
                case "w":
                    this.lastKey = `RELEASE w`;
                break;
                case "a":
                    this.lastKey = `RELEASE a`;
                break;
                case "s":
                    this.lastKey = `RELEASE s`;
                break;
                case "d":
                    this.lastKey = `RELEASE d`;
                break;
                case "Enter":
                    this.lastKey = `RELEASE Enter`;
                break;
            }
        })
    }
}