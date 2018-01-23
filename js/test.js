$(function(){
  banner();
});
var banner=function(){


  var getdata=function(callback){
    if(window.data){
      callback&&callback(data)
    } else {
      $.ajax('api/data.json',function(data){
         window.data=data;
        callback&&callback(window.data);
      })
    }
  }
  var render=function(){
    getdata(function(data){
      var ismobile=$(window).width()<768;
      var $()



    })


  }















};