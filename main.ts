basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Happy)
        servos.P0.setAngle(125)
    } else {
        basic.showIcon(IconNames.Sad)
        servos.P0.setAngle(180)
    }
})
