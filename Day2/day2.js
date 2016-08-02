var form = document.getElementById("myForm");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var inputField = document.getElementById("name");
    var myName = inputField.value;
    var myNameResult = document.getElementById("name-result");
    myNameResult.innerHTML = myName;
});
