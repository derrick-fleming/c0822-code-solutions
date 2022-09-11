/* exported titleCase */

/* 1. Create a string that will be the lowerCase version of the input (title)
2. Split the lowercase variable into an array, without the spaces
3. Create a variable that will house all of the minor words like "and, but"
4. Create two empty strings that will store the "first letter" of each word & the final word output
5. Capitalize the first letter of each word so long as....
     the length is NOT 3 and below,
     the first index is at least 0;
     and does not contain minor words.
6. Replace the array word with the newly updated letters (first letter + array sliced after first letter)
7. Check if the output string has ":" If it does...capitalize the next letter
8. Check if the array contains "Javascript" or "Api" --> capitalize according to proper covnention
9. Check if a word contains (-), If so...capitalize the next letter.
10. Return the output value in the end */

function titleCase(title) {
  var lowerCaseTitle = title.toLowerCase();
  var titleArray = lowerCaseTitle.split(' ');
  var firstLetter = '';
  var titleOutput = '';
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < titleArray.length; i++) {
    if (titleArray[i].length >= 4 || i === 0 || !minorWords.includes(titleArray[i])) {
      firstLetter = titleArray[i][0].toUpperCase();
      titleArray[i] = firstLetter + titleArray[i].slice(1);
    }

    if (titleArray[i].includes(':') && titleArray[i + 1].length <= 3) {
      firstLetter = titleArray[i + 1][0].toUpperCase();
      titleArray[i + 1] = firstLetter + titleArray[i + 1].slice(1);
    }

    if (titleArray[i] === 'Javascript:') {
      titleArray[i] = 'JavaScript:';
    } else if (titleArray[i] === 'Javascript') {
      titleArray[i] = 'JavaScript';
    }

    if (titleArray[i] === 'Api') {
      titleArray[i] = 'API';
    }
  }

  titleOutput = titleArray.join(' ');

  if (!titleOutput.includes('-')) {
    return titleOutput;
  }

  for (var x = 0; x < titleOutput.length; x++) {
    if (titleOutput[x] === '-') {
      firstLetter = titleOutput[x + 1].toUpperCase();
      return titleOutput.replace(titleOutput[x + 1], firstLetter);
    }
  }
}
