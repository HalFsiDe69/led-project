input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    turtle.forward(1)
})
