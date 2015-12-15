import Router from './router'
import mainStyles from './styles/main.css'
import pureStyles from 'purecss/build/pure-min.css'
import leafletStyles from './styles/leaflet.css'
import app from 'ampersand-app'


// access app from console
window.app = app;

app.extend({
	init() {
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();