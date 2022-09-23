let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 10)
    if (Hand == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
