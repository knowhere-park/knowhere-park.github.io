var app = angular.module('myApp', []);

app.config(function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});

app.controller('MyController', function ($scope, $http){
            
            $scope.hello = function(){
                console.log("GET");
            

            //-------------GET--------------    
                
              
              
            $http({method: 'OPTIONS', url: 'http://192.241.211.179:8000/rest-auth/registration/', headers:  {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                        
                    }}).
                success(function successCallback(response) {
                console.log(response);

                
                
                }).
                error(function(data) {
                 alert("fallo");
                });
                //-------------POST--------------
                        
                 var dataToPost = {
                        username: $scope.user,
                        password1: $scope.password1,
                        password2: $scope.password2,
                        email:$scope.email,
                        first_name:$scope.name,
                        last_name:$scope.lastname,
                        mobile_phone:$scope.phone
                }; 
                
                var config = {
                    headers:  {
                        
                        'Content-Type': 'application/json'
                    }
                };
                $http.post("http://192.241.211.179:8000/rest-auth/registration/" , dataToPost, config)
                        .success(function(serverResponse, status, headers, config) {
                           $scope.Success = "Gracias por registrarte, te enviaremos más información a tu correo.";
                        }).error(function(serverResponse, status, headers, config) {
                            $scope.Error = "Error al agregar Ususario";
                        }
                    );
                
            
            //------------------------------
            };
           //--------------------------
});
                               
                                