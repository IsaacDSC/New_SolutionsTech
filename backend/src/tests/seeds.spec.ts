// import SolutionsProcedules from '../database/procedules/Solutions.Procedules'

// test('testing generate seed Solutions', () => {
//     let user = {
//         username: 'IsaacDSC',
//         telephone: '24988180688',
//         completeName: 'Isaac de Almeida Silva',
//         email: 'isaac8.silva@hotmail.com',
//         active: true,
//         document: '17856362782',
//         password: 'secret',
//     }
//     const created = SolutionsProcedules.Create(user)
//     expect(created).toBe(false)
// })
function sum(a: number, b: number) {
    return a + b;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});