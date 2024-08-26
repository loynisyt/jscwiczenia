function buildQueryString(arg){
    return '?' + Object.entries(arg).map(([key, value]) => `${key}=${value}`).join('&');
}

const testCases = [
    [{a:1, b:2, c:3}, '?a=1&b=2&c=3'],
    [{foo:'bar'}, '?foo=bar'],
    [{a:1, b:2, c:3, d:4, e:5, f: 6, g:7 }, '?a=1&b=2&c=3&d=4&e=5&f=6&g=7']
]

testCases.map(([input, expected]) => {
    const result = buildQueryString(input)
    const isCorrect = result === expected
    !isCorrect && console.log('WRONG', {input, expected, result, isCorrect })
    return isCorrect
}).reduce((prev, next) => (prev && next), true) && console.log('CORRECT!')

