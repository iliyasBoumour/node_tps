function multiMax(multi) {
  // Créer le tableau sans le premier élement
  var allButFirst = [].slice.call(arguments, 1);
  // Touver le plus grand nombre dans allButFirst
  var largestAllButFirst = Math.max(...allButFirst);
  // Return the multiplied result
  return multi * largestAllButFirst;
}
console.log(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");
