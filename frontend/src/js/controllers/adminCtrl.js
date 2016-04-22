angular
  .module('Blog')
  .controller('AdminCtrl', [
    '$scope',
    'DatePicker',
    'Validate',
    'GetRequest', 'PutRequest', 'fileReader',
    function($scope, DatePicker, Validate, GetRequest, PutRequest, fileReader) {
      $scope.files = []; //files to be uploaded
      $scope.form={};
      $scope.search = {};
      $scope.newArticle = {};
      $scope.by = '$';
      $scope.datePicker = DatePicker;
       var savedAuthor;
      GetRequest.get_data('../users').then(function(resp) {
        if (resp.data.data.currentUser) {
          $scope.newArticle.author = resp.data.data.currentUser; //get the current user name
          $scope.author = resp.data.data.currentUser; //for use in edit profile section
          savedAuthor = $scope.newArticle.author;  //save value to use after the form is reset
          //  console.log($scope.newArticle.author);
        }
        $scope.users = resp.data.data.allUsers;
        //console.log($scope.users);
      });

      GetRequest.get_data('../article/post').then(function(resp) {
        $scope.art = resp.data.data;
        //  console.log($scope.art);
      });

      GetRequest.get_data('../article/categories').then(function(resp) {
        $scope.categories = resp.data.data;
        $scope.defaultCategories = [];
        //console.log($scope.defaultCategories);
      });

      //listen for the file selected event
          $scope.$on("fileSelected", function (event, args) {
              $scope.$apply(function () {
                  //add the file object to the scope's files collection
                  $scope.files.push(args.file);
              });
          });


          $scope.fileModel = {
                 showLoading: false,
                 readyToUpload: false,
                 fileName: '',
                 dataEncoded: ''
             };


          $scope.imageUpload = function(event){
                 var file = event.target.files[0]; //FileList object
                 fileReader.readAsDataUrl(file, $scope).then(
                     function(result) {
                         if (result) {
                             $scope.fileModel.fileName = file.name;
                             $scope.fileModel.dataEncoded = result;
                             $scope.fileModel.readyToUpload = true;

                             //console.log($scope.fileModel.fileName);
                             //console.log($scope.fileModel.dataEncoded);
                         }
                     }
                 );

            }



      $scope.addArticletoDB = function(newArticle) {
        var sentNewArticle = newArticle;
        sentNewArticle.contentTrimmed = sentNewArticle.content.substr(0, 100) + "...";
        //sentNewArticle.author= "56ec20a31dbc6c541935b9c5";
        sentNewArticle.author = sentNewArticle.author._id; //send only id of author to DB
        sentNewArticle.categories = sentNewArticle.categories.map(function(el) {
          return el._id;
        });


        sentNewArticle.image = {fileName: $scope.fileModel.fileName,
        dataEncoded :  $scope.fileModel.dataEncoded };



        // var data = { sentNewArticle : sentNewArticle, files: $scope.files};
        // console.log(data);
        //
        // var formData = new FormData();
        //
        // formData.append("sentNewArticle", angular.toJson(data.sentNewArticle));
        // for (var i = 0; i < data.files; i++) {
        //             //add each file to the form data and iteratively name them
        //             formData.append("file" + i, data.files[i]);
        //         }
        //
        // console.log(formData);

        PutRequest.put_data('../article/post', sentNewArticle).then(function(resp) { //save article in DB
          $scope.response = resp.data.data;
          console.log($scope.response);
          $scope.successMessage = "Article saved successfully";


          $scope.newArticle = {};
          $scope.newArticle.author = savedAuthor; //restore default value for author
          console.log($scope.newArticle.author);

          $scope.form.addArticle.$setPristine(); //reset form
        });
      };


      $scope.display = true;
      $scope.save = function() {
        $scope.display = true;
      };
      $scope.edit = function() {
        $scope.display = false;
      };

    }
  ]);
