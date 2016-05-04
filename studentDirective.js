mainApp.directive('student', function() {
        var directive = {};
        directive.restrict = 'E';
        directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
        directive.scope = {
               student : "=name"
            }
        directive.compile = function(element, attributes) {
                  element.css("border", "2px solid #922");
                  var linkFunction = function($scope, element, attributes) {
                      element.html("Student: <b>"+$scope.student.name +"</b> , Roll No: <b>"+$scope.student.rollno+"</b><br/>");
                      element.css("background-color", "gray");
					  
                    }
                  return linkFunction;
                }
             return directive;
    });
         
      