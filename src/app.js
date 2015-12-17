import Router from './router'
import mainStyles from './styles/main.css'
import pureStyles from 'purecss/build/pure-min.css'
import leafletStyles from './styles/leaflet.css'
import app from 'ampersand-app'
import OperatorCollection from './models/operator-collection'
import Parameter from './models/parameter'
import operators from './operators.json'
import Request from './models/request'

// access app from console
window.app = app;

app.extend({
	init() {
		this.operators = new OperatorCollection(operators);
        this.request  = new Request({operator:this.operators.at(0), methodIndex: 0, jsonQuery: ''});
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();