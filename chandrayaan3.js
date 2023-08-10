const positiveDirections = ['N', 'E', 'U'];
const indexMove = {
    0: ['E', 'W'],
    1: ['N', 'S'],
    2: ['U', 'D']
};


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
    return [newPosition, direction];
};

const executeU = (position, direction) => {
    return [position, "U"]
};

const executeD = (position, direction) => {
    return [position, "D"]
};

module.exports = {
    executeF,
    executeB,
    executeU,
    executeD
};