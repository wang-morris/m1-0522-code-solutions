/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.replace(/[\W_]/g, '');
  secondString = secondString.replace(/[\W_]/g, '');
  var first = firstString.split('').sort().join('');
  var second = secondString.split('').sort().join('');
  if (first === second) {
    return true;
  } else {
    return false;
  }
}
