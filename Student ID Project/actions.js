function idcard(){
  var firstN = document.getElementById("firstName").value;
  var lastN = document.getElementById("lastName").value;
  var address = document.getElementById("address").value;
  var fullN = firstN + ' ' + lastN

    document.getElementById("postFullName").innerHTML = fullN;
    document.getElementById("postAddress").innerHTML = address;

  var age = parseInt(document.getElementById("years").value);
  var PhoneNumber = parseInt(document.getElementById("phoneNumber").value);
  var numberArray = [];
  numberArray.push("age","PhoneNumber")
  for (var i=0; i<100; i++){
    if( age <= 100){
      document.getElementById("postAge").innerHTML = age;
    }
    else if( numberArray > 100){
      document.getElementById("postPhoneNumber").innerHTML = PhoneNumber;
    }
}
};
