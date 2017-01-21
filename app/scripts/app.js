'use strict';

var app = angular.module('videoStore',[]);

app.controller('HomeController', ['$scope', function($scope) {
    $scope.showDetails = false;
    var films=[
                {
                   title:'ACADEMY DINOSAUR',
                   image: 'images/academy_dinosaur.jpg',
                   length: '86', 
                   price:'4.99',
                   release: '2006',
                   description:'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies.'
                },
                {
                   title:'ACE GOLDFINGER',
                   image: 'images/ace_goldfinger.jpg',
                   length: '48', 
                   price:'4.99',
                   release: '2006',
                   description:'A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China'
                },
                {
                   title:'ADAPTATION HOLES',
                   image: 'images/adaptation_holes.jpg',
                   length: '50', 
                   price:'2.99',
                   release: '2006',
                   description:'A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory'
                }
              ];
    $scope.films = films;

    $scope.toggleDetails = function() {
      $scope.showDetails = !$scope.showDetails;
    };
}])

.controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                $scope.channels = channels;
    $scope.invalidChannelSelection = false;
}])

.controller('FeedbackController', ['$scope', function($scope) {
      $scope.sendFeedback = function() {
      console.log($scope.feedback);
      if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {
          $scope.invalidChannelSelection = true;
          console.log('incorrect');
      }
      else {
        $scope.invalidChannelSelection = false;
        $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
        $scope.feedback.mychannel="";
        $scope.feedbackForm.$setPristine();
        console.log($scope.feedback);
      }
    };
}])

.controller('FilmDetailController', ['$scope', function($scope) {
    var film={
                 title:'ACADEMY DINOSAUR',
                 image: 'images/academy_dinosaur.jpg',
                 length: '86', 
                 price:'4.99',
                 release: '2006',
                 description:'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies.',
                 comments: [
                       {
                           rating:5,
                           comment:"Excelente Pelicula!!",
                           author:"John Lemon",
                           date:"2017-01-01T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Muy recomendada!",
                           author:"Paul McVites",
                           date:"2017-01-05T17:57:28.556094Z"
                       },
                       {
                           rating:3,
                           comment:"Entretenida pero por momentos aburrida",
                           author:"Michael Jaikishan",
                           date:"2017-01-13T17:57:28.556094Z"
                       },
                       {
                           rating:4,
                           comment:"Muy buena!!",
                           author:"Ringo Starry",
                           date:"2017-01-02T17:57:28.556094Z"
                       },
                       {
                           rating:2,
                           comment:"Muy lenta",
                           author:"25 Cent",
                           date:"2017-01-02T17:57:28.556094Z"
                       }
                       
                   ]
              };
    $scope.film = film;
}])

.controller('FilmCommentController', ['$scope', function($scope) {
    
    //Step 1: Create a JavaScript object to hold the comment from the form
    $scope.filmComment = {
      author: null,
      rating: 5,
      comment: null,
      date: null
    };
    
    $scope.submitComment = function () {
        console.log("pasa");
        
        //Step 2: This is how you record the date
        //"The date property of your JavaScript object holding the comment" = new Date().toISOString();
        $scope.filmComment.date = new Date().toISOString();
        
        // Step 3: Push your comment into the dish's comment array
        $scope.film.comments.push($scope.filmComment);
        
        //Step 4: reset your form to pristine
        $scope.filmCommentForm.$setPristine();

        //Step 5: reset your JavaScript object that holds your comment
        $scope.filmComment = {
          author: null,
          rating: 5,
          comment: null,
          date: null
        };
    }
}])