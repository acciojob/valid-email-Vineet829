function validEmail(str) {
  let reg = /^[^.\s]+$/;
  let arr = str.split("@")[0];
  let arr1 = str.split("@")[1];
  if (!reg.test(arr) || !arr1 || !reg.test(arr1.split(".")[0]) || !arr1.split(".")[1]) {
    return false;
  } else {
    return true;
  }
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
