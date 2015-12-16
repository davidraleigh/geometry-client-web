import Router from './router'
import mainStyles from './styles/main.css'
import pureStyles from 'purecss/build/pure-min.css'
import leafletStyles from './styles/leaflet.css'
import app from 'ampersand-app'
import OperatorCollection from './models/operation-collection'


// access app from console
window.app = app;

app.extend({
	init() {
		this.operatorCollection = new OperatorCollection()
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();