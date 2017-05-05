import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        return this._super(...arguments);
    }
});
