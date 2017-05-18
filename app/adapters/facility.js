import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, query) {
        if(requestType === 'query') {
            let url = this.get('host') + '/' + this.get('namespace') + '/facilities/school/' + query.school_id;
            delete query.school_id;
            return url;
        } else {
            return this._super(...arguments);
        }
    }
});
