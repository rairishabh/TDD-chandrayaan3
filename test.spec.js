const { executeF, executeB, executeU, executeD } = require("./chandrayaan3")

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