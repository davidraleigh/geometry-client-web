import Router from './router'
import mainStyles from './styles/main.css'
import pureStyles from 'purecss/build/pure-min.css'
import leafletStyles from './styles/leaflet.css'
import app from 'ampersand-app'
import OperatorCollection from './models/operator-collection'
import Parameter from './models/parameter'
import operators from './operators.json'

window.app = app;

app.extend({
	init() {
		this.operators = new OperatorCollection(operators);
		this.selectedOperator = this.operators.at(0);
		this.router = new Router();
		this.router.history.start();
	}
});

app.init();

