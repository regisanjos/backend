const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class UserController {
  async create(request, response) {
    try {
      const { name, sobrenome, genero, email, cpf, password, telefone } = request.body;

      // Verificação se o usuário já existe pelo CPF ou email
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ cpf }, { email }],
        },
      });
      if (existingUser) {
        return response.status(409).send('Usuário já cadastrado!');
      }

      const newUser = await prisma.user.create({
        data: { name, sobrenome, genero, email, cpf, password, telefone },
      });

      return response.status(201).json(newUser); // Código 201 para indicar criação de recurso
    } catch (error) {
      console.error(error);
      return response.status(500).send('Erro ao criar Usuário!');
    }
  }

  async login(request, response) {
    try {
      const { cpf, password } = request.body;

      const user = await prisma.user.findUnique({
        where: { cpf },
      });

      if (!user || user.password !== password) {
        return response.status(404).send('Login falhou!'); // Mensagem consistente com os testes
      }

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Erro no servidor');
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.body;

      await prisma.user.delete({
        where: { id },
      });

      return response.status(200).send('Usuário excluído!');
    } catch (error) {
      console.error(error);
      return response.status(409).send('Erro ao excluir!');
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, sobrenome, genero, email, cpf, password, telefone } = request.body;

      const user = await prisma.user.update({
        where: { id },
        data: { name, sobrenome, genero, email, cpf, password, telefone },
      });

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(409).send('Erro ao atualizar Usuário!');
    }
  }

  async findMany(request, response) {
    try {
      const users = await prisma.user.findMany();
      return response.status(200).json(users);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Erro ao buscar Usuários!');
    }
  }

  async findOne(request, response) {
    try {
      const { id } = request.params;

      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        return response.status(404).send('Usuário não encontrado!');
      }

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Erro ao buscar Usuário!');
    }
  }

  async findManyPackage(request, response) {
    try {
      const { id } = request.body;

      const user = await prisma.user.findUnique({
        where: { id },
        include: {
          package: true,
        },
      });

      if (!user) {
        return response.status(404).send('Usuário não encontrado!');
      }

      return response.status(200).json(user);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Erro ao buscar Packages do Usuário!');
    }
  }
}

module.exports = UserController;
