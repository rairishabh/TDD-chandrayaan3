const { executeF, executeB } = require("./chandrayaan3")

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