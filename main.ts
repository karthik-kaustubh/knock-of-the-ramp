OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
while (OrientBit.getwheelDist(OrientBit.wheelSide.left) <= 40 && OrientBit.getwheelDist(OrientBit.wheelSide.right) <= 40) {
    basic.pause(50)
}
maqueen.motorStop(maqueen.Motors.All)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
basic.pause(1000)
maqueen.motorStop(maqueen.Motors.All)
maqueen.servoRun(maqueen.Servos.S1, 160)
basic.forever(function () {
	
})
