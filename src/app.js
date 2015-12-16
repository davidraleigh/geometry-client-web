import Router from './router'
import mainStyles from './styles/main.css'
import pureStyles from 'purecss/build/pure-min.css'
import leafletStyles from './styles/leaflet.css'
import app from 'ampersand-app'
import OperatorCollection from './models/operator-collection'
import Parameter from './models/parameter'
import operators from './operators.json'

// access app from console
window.app = app;

app.extend({
	init() {
        var temp = operators[0]["executeMethods"][0]["parameters"][0];
        var test = new Parameter(operators[0]["executeMethods"][0]["parameters"][0]);
		this.operators = new OperatorCollection(operators);
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();