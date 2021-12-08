const inputData = [
    { id: 1, universe: "marvel", name: "Spider Man" },
    { id: 2, universe: "marvel", name: "Iron Man" },
    { id: 3, universe: "dc", name: "Aqua Man" },
    { id: 4, universe: "dc", name: "Bat Man" },
    { id: 5, universe: "marvel", name: "Hulk" }
]

const groupBy = (arr, key) => {
    if (!arr || !key) {
        throw new Error('Incorrect function props!')
    }
    const result = arr.reduce((acc, obj) => {
        if (!obj[key]) {
            return acc
        }
        if (acc[obj[key]]) {
            acc[obj[key]].push(obj)
        } else {
            acc[obj[key]] = [obj]
        }
        return acc
    }, {})
    return result
}
const result = groupBy(inputData, 'universe')
console.log(result);