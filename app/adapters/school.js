import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        if(requestType === 'queryRecord') {
            let url = this.get('host') + '/' + this.get('namespace') + '/schools/code/' + query.code;
            delete query.code;
            return url;
        } else if(requestType === 'query') {
            if (query.closest) {
              delete query.closest;
              return `${this._super(...arguments)}/closest`;
            }
        } else {
            return this._super(...arguments);
        }
    }
});
