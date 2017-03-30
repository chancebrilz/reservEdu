import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from 'reservedu/config/environment';

export default OAuth2PasswordGrant.extend({
    serverTokenEndpoint: ENV.APP.API.HOST + '/v1/oauth2/token'
});
