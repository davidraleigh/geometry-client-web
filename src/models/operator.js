/**
 * Created by davidraleigh on 12/10/15.
 */
import Model from 'ampersand-model'
import OperatorCollection from './operator-collection'
import MethodCollection from './method-collection'

export default Model.extend({
    props: {
        operatorType: 'string',
        executeMethods: 'object'
    },

    session: {
        selected: {
            type: 'boolean',
            default: false
        }
    },
});