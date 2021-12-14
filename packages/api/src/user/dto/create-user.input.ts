import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'The full user name' })
  name: string;

  @Field(() => String, { description: 'The user email used to login' })
  email: string;
}
