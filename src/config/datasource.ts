import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { QuotePost } from 'src/quote_post/entities/quote_post.entity';
import { Post } from 'src/post/entities/post.entity';
import { Like } from 'src/likes/entities/like.entity';
import { TextPost } from 'src/text_post/entities/text_post.entity';


dotenv.config();

const rawDataSourceOptions = {
    type: process.env.DATABASE_TYPE as DataSourceOptions['type'],
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    migrationsRun: false, 
    migrationsTableName: 'migrations',
    logging:false,
    entities: [QuotePost, User, Post,Like,TextPost],
    seeds: ['dist/seeds/**/*.js'],
    migrations: ['dist/migrations/*.js'],
};

export const dataSourceOptions = rawDataSourceOptions as DataSourceOptions;

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;