basic.forever(function () {
    serial.writeValue("uT", input.magneticForce(Dimension.X))
    basic.pause(200)
})
