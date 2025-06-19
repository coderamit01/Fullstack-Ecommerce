import express from 'express';
import router from './src/routes/api.js';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();


// Security Middleware
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(hpp());

// Parsing 
app.use(express.json({"limit": "5mb"}));
app.use(express.urlencoded({extended: true, limit: "5mb"}));

// Limiter 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
})
app.use(limiter);

app.set('etag', false);



app.use('/api/v1', router);


export default app;