export default function drawInputKeys(context, input, player){
    context.font = '10px Helvetica'
    context.fillText("Last Input: " + input, 20, 20)
    context.fillText("Active State: " + player.currentState.state, 20, 40)
}