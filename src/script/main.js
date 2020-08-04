require.config({
    paths:{
        'jquery':'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min'
    }
})
console.log(123);
require(['jquery'],function($){
    console.log($);
    let mod=$('#currentpage').attr('currentmod');
    if(mod){
        require([mod],function(modlist){
            modlist.init();
        })
    }
})