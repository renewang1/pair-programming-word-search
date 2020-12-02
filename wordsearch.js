const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const horizontalReverse = horizontalJoin;
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of horizontalReverse) {
    let m = l.split('').reverse().join('');
    if (m.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const verticalReverse = verticalJoin;
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of verticalReverse) {
    let m = l.split('').reverse().join('');
    if (m.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let newArr = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    newArr.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newArr[i].push(matrix[j][i]);
    }
  }
  return newArr;
};

module.exports = wordSearch;
