/* Exercise 1
Madlib

Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

Example:

> madlib('Anushka', 'art');
'Anushka's favorite subject in school is art.'
*/

function madlib (name, subject) {
  var output = name + '\'s favorite subject in school is ' + subject;
  return output;
}

newstring = madlib('Greg', 'Javascript');
console.log(newstring);
