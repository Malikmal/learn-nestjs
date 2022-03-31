import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { v4 as uuidv4 } from 'uuid';
import { UserUpdateDto } from './dto/user.update.dto';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.userRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async createUser(email: string, age: number): Promise<User> {
    return this.userRepository.create({
      userId: uuidv4(),
      email,
      age,
      favoriteFoods: [],
    });
  }

  async updateUser(userId: string, userUpdates: UserUpdateDto): Promise<User> {
    await this.userRepository.findOneAndUpdate({ userId }, userUpdates);
    return this.userRepository.findOne({ userId });
  }
}
