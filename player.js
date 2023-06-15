import {
    Player_Standing_Left, Player_Standing_Right, 
    Player_Sitting_Left, Player_Sitting_Right, 
    Player_Running_Left, Player_Running_Right, 
    Player_Jumping_Left, Player_Jumping_Right,
    Player_Falling_Left, Player_Falling_Right, Player_Shell_Smash_Left, Player_Shell_Smash_Right} from "./state.js";

export default class Player{
    constructor(width, height, playerInfo){
        this.game = {
            width: width,
            height: height
        }
        this.playerInfo = {...playerInfo};
        this.frame = {
            x: 0,
            y: 0,
        }
        this.maxFrames = 6; //set initial max to six cuz the default image is 6 frames long
        this.isOnPlanet = true;
        this.FPS = 60;
        this.frameTimer = 0;
        this.frameInterval = 1000/this.FPS;
        
        this.states = [new Player_Standing_Left(this),  //state 0
            new Player_Standing_Right(this), //state 1
            new Player_Sitting_Left(this), //state 2
            new Player_Sitting_Right(this),//state 3
            new Player_Running_Left(this),  //state 4
            new Player_Running_Right(this), // state 5
            new Player_Jumping_Left(this), // state 6
            new Player_Jumping_Right(this), // state 7
            new Player_Falling_Left(this), // state 8
            new Player_Falling_Right(this), //state 9
            new Player_Shell_Smash_Left(this), //state 10
            new Player_Shell_Smash_Right(this),//state 11
        ]; 
        this.currentState = this.states[1]; //state standing right (1)
        
        this.weight = 1;
        this.maxSpeed = 10;
        this.velocity = {
            x: 0,
            y: 0
        }
        this.position = {
            x: this.game.width * 0.1,
            y: this.game.height - this.playerInfo.height, // place the player at the bottom of the canvas
        }
    }
    handleScreen(){ // used to stop the player from running of the canvas
        if(this.position.x <= 0){
            this.position.x = 0;
        }
        else if(this.position.x >= this.game.width - this.playerInfo.width){
            this.position.x = this.game.width - this.playerInfo.width; 
        }
    }
    onGround(){
        return(this.position.y >= this.game.height - this.playerInfo.height)
    }

    draw(context, deltaTime){
        this.animateFrames(deltaTime)
        context.fillStyle = "rgba(255, 0, 0, 1)"
        // context.fillRect(this.position.x, this.position.y, this.player.width, this.player.height);
        context.drawImage(this.playerInfo.image, 
            this.frame.x * this.playerInfo.sw, 
            this.frame.y * this.playerInfo.sh,
            this.playerInfo.sw,
            this.playerInfo.sh,
            this.position.x, 
            this.position.y,
            this.playerInfo.width,
            this.playerInfo.height);   
    }
    update(input){
        this.handleScreen()
        this.currentState.handleInput(input); 

        ////////horizontal movement////////////////
        this.position.x += this.velocity.x;

        ////////Vertical movement////////////////
        this.position.y += this.velocity.y;
        if(this.isOnPlanet){
            if(!this.onGround()){
                this.velocity.y +=this.weight;
            }
            else{
                this.velocity.y = 0; // make player fall after jump
            }
            if(this.position.y > this.game.height - this.playerInfo.height){// ensure player doesn't fall off screen
                this.position.y = this.game.height - this.playerInfo.height;
            }
        }  
    }

    setState(state){ //the passed state is an index number
        this.currentState = this.states[state]; //set the current state
        this.currentState.enter(); // calls the enter method on the current state you are on 
    }
    animateFrames(deltaTime){
        if(this.frameTimer > this.frameInterval){ // animate player sprite
            if(this.frame.x < this.maxFrames){
                this.frame.x++;
            }
            else{
                this.frame.x = 0;
            }
            this.frameTimer = 0;
        }
        else{
            this.frameTimer += deltaTime;
        }
    }
}

