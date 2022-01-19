let TenpExt = 0
radio.setGroup(4)
basic.forever(function () {
    TenpExt = input.temperature()
    TenpExt = TenpExt - 2
    basic.showString("" + (TenpExt))
    radio.sendNumber(TenpExt)
    if (TenpExt < 0) {
        music.playTone(262, music.beat(BeatFraction.Breve))
    }
})
