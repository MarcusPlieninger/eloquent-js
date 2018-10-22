function loopingTriangle(){
    for (let line = "#"; line.length < 8; line += "#"){   
        console.log(line);
    }

describe('loopingTriangle()', () => {
    test('makes triangle of 7 lines', () => {
        expect(loopingTriangle()).stringContaining('#\n##\n###\n####\n#####\n######\n#######\n')
    })
})