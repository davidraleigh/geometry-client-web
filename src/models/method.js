/**
 * Created by davidraleigh on 12/14/15.
 */
import Model from 'ampersand-model'
import ParameterCollection from './parameter-collection'
export default Model.extend({
    props: {
        returnType: "string"
    },

    collections: {
        parameters: ParameterCollection
    }
});