import bcrypt from 'bcrypt'


const generateHash = async (password: string) => {
    try {
        const hash = await bcrypt.hashSync(password, 10)
        return hash
    } catch (error) {
        console.log(error)
        return 'false'
    }
}

export default generateHash