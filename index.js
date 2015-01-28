var github = require('./core/github');
var theme = require('./theme');


var hub = require('/core/account-hub');

hub
.merge([github, bitbutcket, skvalley])
.then(function(data){

})


github
  .load({provider:false})
  .then(function(repos){
    console.log(repos)

    // theme
    //   .build({data:repos});

  })