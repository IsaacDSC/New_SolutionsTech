import bcrypt from 'bcrypt'

test('testing generate hash', async () => {

    let password = '$2b$10$tWnQKtv92lgh.NchovUVkeI6Uk1FUxWnrNGmezuS9XsJ7k6eWbuXq'
    const match = await bcrypt.compare('secret', password)
    expect(match).toBe(true)
})

