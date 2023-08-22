const { executeF, executeB, executeR, executeL, executeU, executeD, executeCommand, executeCommands } = require("./chandrayaan3")

test("execute command f successfully", () => {
    const [position, direction] = executeF([0, 0, 0], "N")
    expect(position).toEqual([0, 1, 0])
    expect(direction).toEqual("N")
})

test("execute command b successfully", () => {
    const [position, direction] = executeB([0, -4, 0], "D")
    expect(position).toEqual([0, -4, 1])
    expect(direction).toEqual("D")
})

test("execute command r successfully", () => {
    const [position, direction] = executeR([0, 7, 8], "S")
    expect(position).toEqual([0, 7, 8])
    expect(direction).toEqual("W")
})

test("execute command l successfully", () => {
    const [position, direction] = executeL([0, 1, 0], "U")
    expect(position).toEqual([0, 1, 0])
    expect(direction).toEqual("W")
})
test("execute command u successfully", () => {
    const [position, direction] = executeU([0, 0, 0], "N")
    expect(position).toEqual([0, 0, 0])
    expect(direction).toEqual("U")
})

test("execute command d successfully", () => {
    const [position, direction] = executeD([0, 0, 0], "N")
    expect(position).toEqual([0, 0, 0])
    expect(direction).toEqual("D")
})

test("execute command successfully", () => {

    let [p1, d1] = executeCommand([0, 0, 0], "N", "f")
    expect(p1).toEqual([0, 1, 0])
    expect(d1).toEqual("N")

    let [p2, d2] = executeCommand([0, -4, 0], "D", "b")
    expect(p2).toEqual([0, -4, 1])
    expect(d2).toEqual("D")

    let [p3, d3] = executeCommand([0, 7, 8], "S", "r")
    expect(p3).toEqual([0, 7, 8])
    expect(d3).toEqual("W")

    let [p4, d4] = executeCommand([0, 1, 0], "U", "l")
    expect(p4).toEqual([0, 1, 0])
    expect(d4).toEqual("W")

    let [p5, d5] = executeCommand([0, 0, 0], "N", "u")
    expect(p5).toEqual([0, 0, 0])
    expect(d5).toEqual("U")

    let [p6, d6] = executeCommand([0, 0, 0], "N", "d")
    expect(p6).toEqual([0, 0, 0])
    expect(d6).toEqual("D")
})

test("execute commands successfully", () => {
    const [position, direction] = executeCommands([0, 0, 0], "N", ["f", "r", "u", "b", "l"])
    expect(position).toEqual([0, 1, -1])
    expect(direction).toEqual("W")
})