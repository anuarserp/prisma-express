import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import postRoutes from './routes/post.routes';

//initialize app
const app = express();

app.set('port', 8000);
//enable cors 
app.use(cors());
//wacth request 
app.use(morgan('dev'));
//express json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(postRoutes);

export default app;