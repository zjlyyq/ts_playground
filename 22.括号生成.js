var ans = [];
function generateParenthesis(n) {
    genenrate(0, 0, n, "");
    console.log(ans);
    return ans;
}
;
function genenrate(left, right, n, str) {
    //terminator
    if (left == n && right == n) {
        // console.log(str);
        ans.push(str);
        return;
    }
    // process current loginc
    //drop down
    if (left < n) {
        genenrate(left + 1, right, n, str + "(");
    }
    if (right < left) {
        genenrate(left, right + 1, n, str + ")");
    }
    //reverse status
    return;
}
generateParenthesis(1);
