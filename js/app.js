var app = angular.module('myApp', []);


app.config(function($httpProvider) {
                $httpProvider.defaults.xsrfCookieName = 'csrftoken';
                $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            });
app.controller('MyController', function ($scope, $http, $log){
		$scope.data = {};
		
    
        $scope.SaveAndNext = function(){
                if($scope.formRegistro.$valid){
			$log.info('Form is valid');	
                        if($scope.offers==undefined){
                            $scope.offers=false;                            
                        }
                        if($scope.needs==undefined){
                            $scope.needs=false;                            
                        }
			$http({
			    method: 'POST',
			    url: "https://knowhere.wufoo.com/api/v3/forms/z1wwzorb14vei3s/entries.json",
			    headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Basic MjlFMS1OSDFBLVA0TUotTk1RQzpiOGVuJFImNVRuYkE2am1t'
			    },
			    transformRequest: function(obj) {
				var str = [];
				for(var p in obj)
				str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				return str.join("&");
			    },
			    data: {
				Field1: $scope.name,
				Field2: $scope.lastname,
				Field3: $scope.phone,
				Field4: $scope.email,
				Field6: $scope.offers,
				Field7: $scope.needs
			    }
			}).success(function (serverResponse, status, headers, config) {
				$scope.Success = "Gracias por registrarte, te enviaremos más información a tu correo.";
				$scope.Error = "";
			}).error(function(serverResponse, status, headers, config) {
				$scope.Success = "";
				$scope.Error = "No se pudo registrar, verifique su información";
			});			                          
            
            //------------------------------
		} else {
			$log.error('Form is not valid');
			$scope.Error = "No se pudo registrar, verifique su información";
			$scope.Success = "";
		}
                
                
            };
           //--------------------------
});
                               
                                
