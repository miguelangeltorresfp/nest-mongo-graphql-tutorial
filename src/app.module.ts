import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(
      'mongodb+srv://miguelangeltorresfp:U8YkUb3H41z1Dh18cSstMWA2Z@cluster0-v0ss2.mongodb.net/test?retryWrites=true',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
