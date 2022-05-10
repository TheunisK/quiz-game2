const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const secret = process.env.SECRET;

const createUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        // const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await prisma.user.create({
            data: {
                email: email,
                username: username,
                password: password
            }
        });

        console.log("User Controller:", newUser);
        res.json({ data: newUser });
    } catch(error) {
        console.log('ERROR', error.message);
        res.status(500).send({ error: 'There was a problem with your information.'})
    }
} 

module.exports = {
    createUser
}