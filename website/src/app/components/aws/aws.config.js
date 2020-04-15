(function() {
  'use strict';
  angular
    .module('ServerlessBlog')
    .constant('awsRegion','us-east-1')
    .constant('awsCognitoIdentityPoolId', 'us-east-1:8152289a-34fe-492d-931c-36c676a741b0')
    .config(config);

    function config(awsRegion,awsCognitoIdentityPoolId) {
    	var creds = AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    		IdentityPoolId: awsCognitoIdentityPoolId
    	});
    	AWS.config.update({
    		region: awsRegion,
    		credentials: creds
    	});
    };

})();
