export const states = {
    PLAYER_STANDING_LEFT: 0,
    PLAYER_STANDING_RIGHT: 1,
    PLAYER_SITTING_LEFT: 2,
    PLAYER_SITTING_RIGHT: 3,
    PLAYER_RUNNING_LEFT: 4,
    PLAYER_RUNNING_RIGHT: 5,
    PLAYER_JUMPING_LEFT: 6,
    PLAYER_JUMPING_RIGHT: 7,
    PLAYER_FALLING_LEFT: 8,
    PLAYER_FALLING_RIGHT: 9,
    PLAYER_SHELL_SMASH_LEFT: 10,
    PLAYER_SHELL_SMASH_RIGHT: 11,
 
}
class State{
    constructor(state){
        this.state = state; // used to keep track of the state name
    }
}
export class Player_Standing_Left extends State{
    constructor(player){
        super("PLAYER STANDING LEFT"); // used to access and call method on object's parent. meaning everything in their constructor; 
        this.player = player;
    }
    enter(){
        this.player.frame.y = 1; //the row position of the player image you want to use
        this.player.maxFrames = 6;  //the max number of columns for the player image
        this.player.velocity.x = 0;
    }
    handleInput(input){
        if(input === "PRESS d"){ // note: "d" = right
            this.player.setState(states.PLAYER_RUNNING_RIGHT); //set the player current state to standing right
        }
        else if(input === "PRESS a"){  // note: "a" = left 
            this.player.setState(states.PLAYER_RUNNING_LEFT); //set the player current state to standing left
        }
        else if(input === "PRESS s"){ // note: "s" = down 
            this.player.setState(states.PLAYER_SITTING_LEFT); //set the player current state to standing right
        }
        else if(input === "PRESS w"){ // note: "up" = down 
            this.player.setState(states.PLAYER_JUMPING_LEFT); //set the player current state to standing right
        }
    }
}

export class Player_Standing_Right extends State{
    constructor(player){
        super("PLAYER STANDING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frame.y = 0;  //the row position of the player image you want to use
        this.player.maxFrames = 6;   //the max number of columns for the player image
        this.player.velocity.x = 0;
    }
    handleInput(input){
        if(input === "PRESS a"){  // note: "a" = left 
            this.player.setState(states.PLAYER_RUNNING_LEFT); //set the player current state to standing left
        }
        else if(input === "PRESS d"){  // note: "d" = right 
            this.player.setState(states.PLAYER_RUNNING_RIGHT); //set the player current state to standing left
        }
        else if(input === "PRESS s"){ // note: "s" = down 
            this.player.setState(states.PLAYER_SITTING_RIGHT); //set the player current state to standing left
        }
        else if(input === "PRESS w"){ // note: "up" = down 
            this.player.setState(states.PLAYER_JUMPING_RIGHT); //set the player current state to standing right
        }
    }
}



export class Player_Sitting_Left extends State{
    constructor(player){
        super("PLAYER SITTING LEFT");
        this.player = player;
    }
    enter(){
        this.player.frame.y = 9;  //the row position of the player image you want to use
        this.player.maxFrames = 4;   //the max number of columns for the player image
        this.player.velocity.x = 0;
    }
    handleInput(input){
        if(input === "PRESS d"){  // note: "d" = right
            this.player.setState(states.PLAYER_SITTING_RIGHT); //set the player current state to standing left
        }
        else if(input === "RELEASE s"){  // note: "s" = up   //this makes the player stand up if not holding s
            this.player.setState(states.PLAYER_STANDING_LEFT); //set the player current state to standing left
        } 
    }
}

export class Player_Sitting_Right extends State{
    constructor(player){
        super("PLAYER SITTING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frame.y = 8;  //the row position of the player image you want to use
        this.player.maxFrames = 4;   //the max number of columns for the player image
        this.player.velocity.x = 0;
    }
    handleInput(input){
        if(input === "PRESS a"){ // note: "a" = left 
            this.player.setState(states.PLAYER_SITTING_LEFT); //set the player current state to standing left
        }
        else if(input === "RELEASE s"){  // note: "s" = up   //this makes the player stand up if not holding s
            this.player.setState(states.PLAYER_STANDING_RIGHT); //set the player current state to standing right
        } 
    }
}

export class Player_Running_Left extends State{
    constructor(player){
        super("PLAYER RUNNING LEFT"); // used to access and call method on object's parent. meaning everything in their constructor; 
        this.player = player;
    }
    enter(){
        this.player.frame.y = 7; //the row position of the player image you want to use
        this.player.maxFrames = 8;  //the max number of columns for the player image
        this.player.velocity.x = -this.player.maxSpeed;
    }
    handleInput(input){
        if(input === "PRESS d"){ // note: "d" = right
            this.player.setState(states.PLAYER_RUNNING_RIGHT); //set the player current state to standing right
        }
        else if(input === "RELEASE a"){ // note: 'a" = left 
            this.player.setState(states.PLAYER_STANDING_LEFT); //set the player current state to standing right
        }
        else if(input === "PRESS s"){ // note: "s" = down 
            this.player.setState(states.PLAYER_SITTING_LEFT); //set the player current state to standing left
        }
        else if(input === "PRESS w"){ // note: "w" = up
            this.player.setState(states.PLAYER_JUMPING_LEFT); //set the player current state to jump
        }
    }
}

export class Player_Running_Right extends State{
    constructor(player){
        super("PLAYER RUNNING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frame.y = 6;  //the row position of the player image you want to use
        this.player.maxFrames = 8;   //the max number of columns for the player image
        this.player.velocity.x = this.player.maxSpeed; 
    }
    handleInput(input){
        if(input === "PRESS a"){ // note: "a" = left 
            this.player.setState(states.PLAYER_RUNNING_LEFT); //set the player current state to Running left
        }
        else if(input === "RELEASE d"){  // note: "d" = right   //this makes the player stand up if not holding d
            this.player.setState(states.PLAYER_STANDING_RIGHT); //set the player current state to standing right
        } 
        else if(input === "PRESS s"){ // note: "s" = down 
            this.player.setState(states.PLAYER_SITTING_RIGHT); //set the player current state to standing left
        }
        else if(input === "PRESS w"){ // note: "w" = up
            this.player.setState(states.PLAYER_JUMPING_RIGHT); //set the player current state to jump
        }
    }
}

export class Player_Jumping_Left extends State{
    constructor(player){
        super("PLAYER JUMPING LEFT"); // used to access and call method on object's parent. meaning everything in their constructor; 
        this.player = player;
    }
    enter(){
        this.player.frame.y = 3; //the row position of the player image you want to use
        this.player.maxFrames = 6;  //the max number of columns for the player image
        if(this.player.onGround()){ // only jump when on the ground
            this.player.velocity.y =-20;
        }
        this.player.velocity.x = -this.player.maxSpeed * 0.5;
       
    }
    handleInput(input){
        if(input === "PRESS d"){ // note: "d" = right
            this.player.setState(states.PLAYER_JUMPING_RIGHT); //set the player current state to standing right
        }
        else if(this.player.onGround()  && input === "PRESS a"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_RUNNING_LEFT);  //set the player current state to standing left
        }
        else if(this.player.onGround() && input === "RELEASE a"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_STANDING_LEFT); //set the player current state to standing right
        }
        else if(this.player.velocity.y > 0){ //// switch state when player is falling to the ground
            this.player.setState(states.PLAYER_FALLING_LEFT); 
        }
        else if(!this.player.onGround() && input === "PRESS s"){ //// switch state when player is falling to the ground
            this.player.setState(states.PLAYER_SHELL_SMASH_LEFT); 
        }
    }
}

export class Player_Jumping_Right extends State{
    constructor(player){
        super("PLAYER JUMPING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frame.y = 2;  //the row position of the player image you want to use
        this.player.maxFrames = 6;   //the max number of columns for the player image
        if(this.player.onGround()){ // only jump when on the ground
            this.player.velocity.y =-20;
        }
        this.player.velocity.x = this.player.maxSpeed * 0.5;
      
    }
    handleInput(input){
        if(input === "PRESS a" ){ // note: "a" = left 
            this.player.setState(states.PLAYER_JUMPING_LEFT); //set the player current state to Running left
        } 
        else if(this.player.onGround() && input === "PRESS d"){
            this.player.setState(states.PLAYER_RUNNING_RIGHT);
        }
        else if(this.player.onGround() && input === "RELEASE d"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_STANDING_RIGHT); //set the player current state to standing right
        }
        else if(this.player.velocity.y > 0){ //// switch state when player is falling to the ground
            this.player.setState(states.PLAYER_FALLING_RIGHT); 
        }
        else if(!this.player.onGround() && input === "PRESS s"){ //// switch state when player is falling to the ground
            this.player.setState(states.PLAYER_SHELL_SMASH_RIGHT); 
        }
    }
}


export class Player_Falling_Left extends State{
    constructor(player){
        super("PLAYER FALLING LEFT"); // used to access and call method on object's parent. meaning everything in their constructor; 
        this.player = player;
    }
    enter(){
        this.player.frame.y = 5; //the row position of the player image you want to use  (falling image)
        this.player.maxFrames = 6;  //the max number of columns for the player image
       
    }
    handleInput(input){
        if(input === "PRESS d"){ // note: "d" = right
            this.player.setState(states.PLAYER_FALLING_RIGHT); //set the player current state to standing right
        }
        else if(this.player.onGround() && input === "RELEASE a"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_STANDING_LEFT); //set the player current state to standing right
        }
        else if(this.player.onGround()){
            this.player.setState(states.PLAYER_RUNNING_LEFT); 
        }
        else if(!this.player.onGround() && input === "PRESS s"){ //// switch state when player is falling to the ground
            this.player.setState(states.PLAYER_SHELL_SMASH_LEFT); 
        }
    }
}

export class Player_Falling_Right extends State{
    constructor(player){
        super("PLAYER FALLING RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frame.y = 4;  //the row position of the player image you want to use (falling image)
        this.player.maxFrames = 6;   //the max number of columns for the player image
      
    }
    handleInput(input){
        if(input === "PRESS a" ){ // note: "a" = left 
            this.player.setState(states.PLAYER_FALLING_LEFT); //set the player current state to Running left
        } 
        else if(this.player.onGround() && input === "RELEASE d"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_STANDING_RIGHT); //set the player current state to standing right
        }
        else if(this.player.onGround()){
            this.player.setState(states.PLAYER_RUNNING_RIGHT);
        }
        else if(!this.player.onGround() && input === "PRESS s"){ //// switch state when player is falling to the ground
            this.player.setState(states.PLAYER_SHELL_SMASH_RIGHT); 
        }

    }
}



export class Player_Shell_Smash_Left extends State{
    constructor(player){
        super("PLAYER SHELL SMASH LEFT"); // used to access and call method on object's parent. meaning everything in their constructor; 
        this.player = player;
    }
    enter(){
        this.player.frame.y = 11; //the row position of the player image you want to use
        this.player.maxFrames = 6;  //the max number of columns for the player image
        this.player.velocity.x = -this.player.maxSpeed * 1.5;
        this.player.velocity.y = this.player.weight * 30;
    }
    handleInput(input){
        if(input === "PRESS d"){ // note: "d" = right
            this.player.setState(states.PLAYER_SHELL_SMASH_RIGHT); //set the player current state to standing right
        }
        else if(this.player.onGround()  && input === "PRESS a"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_RUNNING_LEFT);  //set the player current state to standing left
        }
        else if(this.player.onGround() && input === "RELEASE a"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_STANDING_LEFT); //set the player current state to standing right
        }
    
    }
}

export class Player_Shell_Smash_Right extends State{
    constructor(player){
        super("PLAYER SHELL SMASH RIGHT");
        this.player = player;
    }
    enter(){
        this.player.frame.y = 10;  //the row position of the player image you want to use
        this.player.maxFrames = 6;   //the max number of columns for the player image
        this.player.velocity.x = this.player.maxSpeed * 1.5;
        this.player.velocity.y = this.player.weight * 30;
      
    }
    handleInput(input){
        if(input === "PRESS a" ){ // note: "a" = left 
            this.player.setState(states.PLAYER_SHELL_SMASH_LEFT); //set the player current state to Running left
        } 
        else if(this.player.onGround() && input === "PRESS d"){
            this.player.setState(states.PLAYER_RUNNING_RIGHT);
        }
        else if(this.player.onGround() && input === "RELEASE d"){ // switch state when player touch the ground
            this.player.setState(states.PLAYER_STANDING_RIGHT); //set the player current state to standing right
        }

    }
}