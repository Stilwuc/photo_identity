import 'dotenv/config';
import App from './app';
import IndexRoute from '@routes/index.route';
import PhotoRoute from '@routes/photo.route';

const app = new App([new IndexRoute(), new PhotoRoute()]);
app.listen();
