/**
 * @function bestFriend : check if , in a given string, the first given letter always follows the second one in all of its occurrences
 * @param {string} txt : the main target of the function
 * @param {string} a : the first letter
 * @param {string} b : the second letter which will be checked if it ALWAYS follow the first one
 * @returns boolean
 */
function bestFriend(txt, a, b) {
    let boolArray = [];
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] == a || txt[i+1] == b) {
            boolArray.push("true")
        } else (
            boolArray.push("false")
        );
    }
    if (boolArray.includes("false")) {
        return false;
    }
    return true;
}

