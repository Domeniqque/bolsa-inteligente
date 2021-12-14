import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String, { description: 'User identifier' })
  id: string;

  @Field(() => String, { description: 'The full user name' })
  name: string;

  @Field(() => String, { description: 'The user email used to login' })
  email: string;
}
