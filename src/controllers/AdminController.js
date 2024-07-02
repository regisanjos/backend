const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

class AdminController {
  async create(request, response) {
    try {
      const { name, email, cpf, password } = request.body;
      const create = await prisma.admin.create({
        data: {
          name,
          email,
          cpf,
          password,
        },
      });
      response.json(this.create);
    } catch {
      return response.status(409).send('Erro em criar admin!');
    }
  }

  async login(request, response) {
    try {
      const { cpf, password } = request.body;
      const user = await prisma.admin.findUnique({
        where: {
          cpf: cpf,
          password: password,
        },
      });

      if (!user) {
        return response.status(400).send('Usuário não existe');
      }

      return response.status(200).send('Login realizado com sucesso!');
    } catch {
      return response.status(401).send(' Falha em realizar o Login !');
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.body;
      await prisma.admin.delete({
        where: {
          id,
        },
      });
      return response.status(200).send('Admin deletado com sucesso!');
    } catch {
      return response.status(409).send('Erro ao deletar admin');
    }
  }

  async update(request, response) {
    try {
      const { id, name, email, password } = request.body;
      await prisma.admin.update({
        where: {
          id,
        },
        data: {
          name,
          email,
          password,
        },
      });
      return response.status(200).send('Alterações realizadas com sucesso!');
    } catch {
      return response.status(409).send('Alterações não realizadas!');
    }
  }
}

module.exports = AdminController