/**
 * Created by davidraleigh on 12/14/15.
 */
import Model from 'ampersand-model'
import ParameterCollection from './parameter-collection'

export default Model.extend({
    props: {
        parameterPosition: 'number',
        parameterName: 'string',
        parameterType: 'string',
        parameterKey: 'string',
        parameterValue: 'string'
    }
});
