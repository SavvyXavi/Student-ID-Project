function idcard(){
  var firstN = document.getElementById("firstName").value;
  var lastN = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var fullN = firstN + ' ' + lastN

    document.getElementById("postFullName").innerHTML = fullN;
    document.getElementById("postAddress").innerHTML = address;

  var age = parseInt(document.getElementById("years").value);
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
  var numberArray = [];
  numberArray.push(age, phoneNumber)
  for (var i=0; i<numberArray.length; i++){
    if( numberArray[i] <= 100){
      document.getElementById("postAge").innerHTML = "Age: " + age;
    }
    else if( numberArray[i] > 100){
      document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + PhoneNumber;
    }
}
};
