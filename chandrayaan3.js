const positiveDirections = ['N', 'E', 'U'];
const indexMove = {
    0: ['E', 'W'],
    1: ['N', 'S'],
    2: ['U', 'D']
};

const compass = ["N", "E", "S", "W"]

const executeCommand = (position, direction, command) => {
    switch (command) {
        case "f":
            return executeF(position, direction);
        case "b":
            return executeB(position, direction);
        case "u":
            return executeU(position, direction);
        case "d":
            return executeD(position, direction);
        case "l":
            return executeL(position, direction);
        case "r":
            return executeR(position, direction);
    }
}

const executeCommands = (position, direction, commands) => {
    let currentPosition = position
    let currentDirection = direction
    commands.forEach((command) => {
        const newState = executeCommand(currentPosition, currentDirection, command)
        currentPosition = newState[0]
        currentDirection = newState[1]

    })
    return [currentPosition, currentDirection]
}

const executeF = (position, direction) => {
    const change = positiveDirections.includes(direction) ? 1 : -1;
    return move(position, direction, change);
};

const executeB = (position, direction) => {
    const change = positiveDirections.includes(direction) ? -1 : 1;
    return move(position, direction, change);
};

const move = (position, direction, change) => {
    const newPosition = [...position];
    const [index] = Object.entries(indexMove).find(([i, directions]) => directions.includes(direction));
    newPosition[index] = newPosition[index] + change;
    if (index == 0 && newPosition[index] > 3) {
        return [position, direction]
    }
    return [newPosition, direction];
};

const executeU = (position, direction) => {
    return [position, "U"]
};

const executeD = (position, direction) => {
    return [position, "D"]
};

const executeL = (position, direction) => {
    const index = ["U", "D"].includes(direction) ? 0 : compass.indexOf(direction)
    const leftIndex = index == 0 ? compass.length - 1 : index - 1
    return [position, compass[leftIndex]]
};

const executeR = (position, direction) => {
    const index = ["U", "D"].includes(direction) ? 0 : compass.indexOf(direction)
    const rightIndex = index == compass.length - 1 ? 0 : index + 1
    return [position, compass[rightIndex]]
};

const executeBoundaries = (position, direction, command) => {
    const change = positiveDirections.includes(direction) ? 1 : -1;
    return move(position, direction, change)
}

module.exports = {
    executeF,
    executeB,
    executeU,
    executeD,
    executeL,
    executeR,
    executeCommand,
    executeCommands,
    executeBoundaries
};