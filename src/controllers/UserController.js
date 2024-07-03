const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class UserController {
  async create(request, response) {
    try {
      const { name, sobrenome, genero, email, cpf, password, telefone} = request.body;
      const create = await prisma.user.create({
        data: {
          name,
          sobrenome,
          genero,
          email,
          cpf,
          password,
          telefone
        },
      });
      return response.json(create);
    } catch {
      return response.status(409).send('Erro ao criar Usuário!');
    }
  }

  async login(request, response) {
    try {
      const { cpf, password } = request.body;
      const user = await prisma.user.findUnique({
        where: {
          cpf: cpf,
          password: password,

        },
      });
      return response.json(user);
    } catch {
      return response.status(404).send('Login falhou!');
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.body;
      await prisma.user.delete({
        where: {
          id,
        },
      });
      return response.status(200).send('Usuário excluido!');
    } catch {
      return response.status(409).send('Erro ao excluir!');
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, email, password, location } = request.body;
      const user = await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          sobrenome,
          genero,
          password,
          cpf,
          email,
          telefone,

          
          
        },
      });
      return response.json(user);
    } catch {
      return response.status(409).send('Erro ao atualizar Usuário!');
    }
  }

  async findMany(request, response) {
    try {
      const user = await prisma.user.findMany();

      response.json(user);
    } catch (err) {
      return response.status(409).send('Erro ao buscar Usuário!');
    }
  }

  async findOne(request, response) {
    try {
      const { id } = request.params;
      const user = await prisma.user.findFirst({ where: { id: id } });

      response.json(user);
    } catch (err) {
      return response.status(409).send('Erro ao buscar Usuário!');
    }
  }

  async findManyPackage(request, response) {
    try {
      const { id } = request.body;
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
        include: {
          package: true,
        },
      });

      return response.json(user);
    } catch (err) {
      return response.status(409).send('Erro ao buscar Packages do Usuário!');
    }
  }
}

module.exports = UserController;