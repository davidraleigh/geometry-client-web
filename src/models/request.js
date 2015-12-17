/**
 * Created by davidraleigh on 12/17/15.
 */
import Model from 'ampersand-model'

export default Model.extend({
    props: {
        operator: 'object',
        methodIndex: 'number',
        jsonQuery: 'string'
    }
})