import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { PrismaService } from './common/prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      sortSchema: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    }),
    UserModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
