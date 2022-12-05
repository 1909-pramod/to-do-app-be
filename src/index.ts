import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks';
import userRoutes from './routes/user';
import { PrismaClient } from '@prisma/client';
import graphqlHTTP from 'express-graphql';
import graphQLEndpoints from './graphql';
import cors from 'cors'
import main from './bxgy';


dotenv.config();

const PORT = process.env.PORT || 5000;
const app: Express = express();

export const prisma = new PrismaClient();
app.use(helmet());
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/task', taskRoutes)
app.use('/user', userRoutes)
app.use('/graphql', graphqlHTTP({ schema: graphQLEndpoints, graphiql: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from the TypeScript world!</h1>');
});

// app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));


main();