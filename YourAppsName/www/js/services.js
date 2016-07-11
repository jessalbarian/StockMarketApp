angular.module('YourAppsName.services', [])

.factory('encodeURIService', function(){
  return {
    encode: function(string){
console.log(string);
      return encodeURIComponent(string).replace(/\"/g, "%22").replace(/\ /g, "%20").replace(/[!'()]/g, escape);
    }
  };
})


.factory('dateService', function($filters){

var currentDate = function(){
  var d = new Date();
  var date = $filters('date')(d, 'yyyy-MM-dd');
  return date;
};
var oneYearAgoDate = function(){
  var d = new Date(new Date().setDate(new Date().getDate() - 365));
  var date = $filters('date')(d, 'yyyy-MM-dd');
  return date;
};
})


.factory('stockDataService', function($q, $http, encodeURIService){

var getDetailsData = function(ticker){
  // http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20IN%20(%22YHOO%22)&format=json&env=http://datatables.org/alltables.env
  var deferred = $q.defer(),
  query = 'select * from yahoo.finance.quotes where symbol IN ("' + ticker + '")',
  url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIService.encode(query) + ' &format=json&env=http://datatables.org/alltables.env';
  console.log(url);


  $http.get(url)
    .success(function(json) {
      var jsonData = json.query.results.quote;
       deferred.resolve(jsonData);

    })
    .error(function(error){
      console.log("Details data error: " + error);
      deferred.reject();
    });
    return deferred.promise;

};

var getPriceData = function(ticker) {
  var deferred = $q.defer(),
  url = "http://finance.yahoo.com/webservice/v1/symbols/" + ticker + "/quote?format=json&view=detail";

  $http.get(url)
    .success(function(json) {
      var jsonData = json.list.resources[0].resource.fields;
      deferred.resolve(jsonData);
    })
    .error(function(error){
      console.log("Price data error: " + error);
      deferred.reject();
    });
    return deferred.promise;
};
  return {
    getPriceData: getPriceData,
    getDetailsData: getDetailsData
  };
})
;
