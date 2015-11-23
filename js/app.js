var app = angular.module('myApp', []);


app.config(function($httpProvider) {
                $httpProvider.defaults.xsrfCookieName = 'csrftoken';
                $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            });
app.controller('MyController', function ($scope, $http){

    
        $scope.hello = function(){
                console.log("OPTIONS");
            
                
                //-------------GET--------------    


                $http({method: 'GET', url: 'http://192.241.211.179:8000/users/', headers:  {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'

                        }}).success(function successCallback(response) {
                        console.log(response);
                        }).
                        error(function(data) {
                         alert("fallo");
                    });
            
                //-------------POST--------------
                        if($scope.offers==undefined){
                            $scope.offers=false;                            
                        }
                        if($scope.needs==undefined){
                            $scope.needs=false;                            
                        }
                 var dataToPost = {
                        
                        first_name:$scope.name,
                        last_name:$scope.lastname,
                        email:$scope.email,
                        mobile_phone:$scope.phone,                        
                        offers_parking: $scope.offers,
                        needs_parking: $scope.needs
                }; 
                
                var config = {
                    headers:  {
                        'Content-Type': 'application/json',
                        
                    }
                };
                
                
                 
                $http.post("http://192.241.211.179:8000/users/" , dataToPost, config)
                        .success(function(serverResponse, status, headers, config) {
                           $scope.Success = "Gracias por registrarte, te enviaremos más información a tu correo.";
						   $scope.Error = "";
                        }).error(function(serverResponse, status, headers, config) {
                            $scope.Success = "";
						   $scope.Error = "No se pudo registrar, verifique su información";
                        }
                    );
                
            
            //------------------------------
            };
           //--------------------------
});
                               
                                