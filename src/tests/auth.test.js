const request = require('supertest');
const app = require('../Server');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient(); // Instancia o PrismaClient

describe('Exclusão de Usuário', () => {
    let userId;

    beforeEach(async () => {
        const user = await prisma.user.create({
            data: {
                name: 'ExcluirTeste',
                sobrenome: 'Usuario',
                genero: 'Masculino',
                email: 'excluir@usuario.com',
                cpf: 'cpf_excluir',
                password: 'senha_excluir',
                telefone: '11977777777'
            }
        });
        userId = user.id; // Armazena o ID do usuário criado
    });

    it('Deve excluir um usuário com sucesso', async () => {
        const response = await request(app)
            .delete('/delete')
            .send({ id: userId }); // Envia o ID do usuário para exclusão

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Usuário excluído!');

        const user = await prisma.user.findUnique({
            where: { id: userId }
        });
        expect(user).toBeNull();
    });

    afterEach(async () => {
        await prisma.user.deleteMany({
            where: { id: userId }
        });
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});
