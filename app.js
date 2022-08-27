/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let res = 0;
    nums = []
    for(var i = 0; i < n + 1; i++) {
        nums.push(0);
    }
    dfs(nums, 1, n)

    function dfs(numArr, val, n) {
        // console.log("nums is ", nums)
        if(val > n) {
            res++;
            return;
        }

        for (let i = 1; i <= n; i++) {
            if(numArr[i] == 0 && (val % i == 0 || i % val == 0)){
                numArr[i] = val;
                dfs(numArr, val + 1, n);
                numArr[i] = 0;
            }
        }
    }

    return res;
};

console.log(countArrangement(4))