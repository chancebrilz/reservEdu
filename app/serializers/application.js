import DS from 'ember-data';

export default DS.JSONSerializer.extend({

    /* -----------------------------------
     * Remove line from _normalizeResponse that
     * deletes the .meta from payload
     * -----------------------------------
     */

    _normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {
        let documentHash = {
          data: null,
          included: []
        };

        // let meta = this.extractMeta(store, primaryModelClass, payload);
        // if (meta) {
        //   assert('The `meta` returned from `extractMeta` has to be an object, not "' + Ember.typeOf(meta) + '".', Ember.typeOf(meta) === 'object');
        //   documentHash.meta = meta;
        // }

        if (isSingle) {
          let { data, included } = this.normalize(primaryModelClass, payload);
          documentHash.data = data;
          if (included) {
            documentHash.included = included;
          }
        } else {
          let ret = new Array(payload.length);
          for (let i = 0, l = payload.length; i < l; i++) {
            let item = payload[i];
            let { data, included } = this.normalize(primaryModelClass, item);
            if (included) {
              documentHash.included.push(...included);
            }
            ret[i] = data;
          }

          documentHash.data = ret;
        }

        return documentHash;
      },

});
