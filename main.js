import Player from "./player.js";
import InputHandler from "./inputHandler.js";
import drawInputKeys from "./drawInputKeys.js";

export let CONSOLE_TEST_LOG = {
    class_Calls: true,
    keyboardInputs: true,
};

window.addEventListener(("load"), function () {
    const loading = document.querySelector("#loading");
    loading.style.display = "none"; //hide loading message

    const canvas = document.querySelector("#canvas1");
    const ctx = canvas.getContext("2d");
    const width = canvas.width = innerWidth;
    const height = canvas.height = innerHeight;

    const playerInfo = {
        image: document.getElementById("player"),
        width: 100,
        height: 100,
        sw: 200, //72
        sh: 181.83, //72
    }
    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(width, height, playerInfo);
            this.input = new InputHandler()
     
        }
        update(context, input, deltaTime){
            this.draw(context);
            this.player.update(input)//pass recent key inputs
            this.player.draw(context, deltaTime);
        }
        draw(context){
            drawInputKeys(context, this.input.lastKey, this.player);
        }
    }
    const game = new Game(width, height);

    let lastTime = 0;
    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, width, height);
        game.update(ctx, game.input.lastKey, deltaTime); 
        requestAnimationFrame(animate);
    }
    animate(0);

})