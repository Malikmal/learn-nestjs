import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty({
    description: 'email',
    type: 'string',
    format: 'email',
    required: true,
  })
  email: string;
  age: number;
}
