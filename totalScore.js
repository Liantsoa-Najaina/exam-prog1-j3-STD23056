/**
 * @function getTotalScore : compute the total points score by a student according to answers they submitted
 * @param {array} array1 : keys of the correct answers
 * @param {array} array2 : keys of the submitted answers
 * @returns int : points scored by the student (+4 for correct answers, -1 for incorrect ones, 0 for empty answers). 0 if points < 0
 */
function getTotalScore(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array2[i] == "") {
            score += 0;
        }
        (array1[i] == array2[i]) ? score += 4 : score -= 1;
        }
    if (score < 0) {
        return score = 0;
    }
    return score;
}