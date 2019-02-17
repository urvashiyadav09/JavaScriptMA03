document.getElementById("submit").addEventListener("click", function() {

  //  	var fnameInput = document.getelementsByName("f_name");
  //    var lnameInput = document.getelementsByName("l_name");
  //    var phoneNumber = document.getelementsByName("ph_number");
  //    var emailAddress = document.get getelementsByName("email");


      var nameArray = document.getElementsByTagName("input");

      if(nameArray[0].value.length == 0){
        console.log("First Name is Empty. Please Enter First Name");
      }
      if(nameArray[1].value.length == 0){
        console.log("Last Name is Empty. Please Enter Last Name");
      }


      for (var i = 2; i<nameArray.length; i++)

        console.log( nameArray[i].value);
        var value1 = nameArray[i].value;
        var valuePattern = new RegExp(nameArray[i].pattern);
        var patternTest = thePattern.test(value1);
        console.log(patternTest);

    });
