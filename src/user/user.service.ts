import { Injectable } from '@nestjs/common';
import { PrismaService } from '../orm/prismaService';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getOne({ email }: { email: string }) {
    return this.prisma.user.findFirst({ where: { email } });
  }

  async getAll() {
    return this.prisma.user.findMany();
  }

  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data,
    });
  }
}
