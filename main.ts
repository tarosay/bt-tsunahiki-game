function 綱表示 (数値: number) {
    if (数値 == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (数値 == 1) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (数値 == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (数値 == 3) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (数値 == 4) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
    } else if (数値 == 5) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
    } else if (数値 == 6) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            `)
    } else if (数値 == 7) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . # # # .
            `)
    } else if (数値 == 8) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else if (数値 == 9) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
}
let X = 0
basic.forever(function () {
    X = X + 1
    綱表示(X)
    basic.pause(200)
    if (X >= 10) {
        X = 0
    }
})
