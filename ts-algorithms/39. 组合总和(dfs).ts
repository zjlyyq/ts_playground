function combinationSum(candidates: number[], target: number): number[][] {
    let cache = new Set();
    candidates = candidates.sort((a, b) => a - b);
    let ans = dfs(candidates, target);
    return ans.filter(e => {
        let s = ""
        e.forEach(n => s += n);
        if (!cache.has(s)){
            cache.add(s);
            return true;
        }else {
            return false;
        }
    })
};

function dfs(candidates:number[], target: number): number[][] {
    if (target === 0) return [[]]
    if (target < candidates[0]) return []
    let ret: number[][] = []
    for (let i = 0;i < candidates.length;i ++) {
        if (candidates[i] > target) break;
        let subs = dfs(candidates, target-candidates[i]);
        subs.forEach(arr => {
            ret.push([candidates[i]].concat(arr).sort((a, b) => a- b));
        })
    }
    return ret;
}

let candidates = [2,3,5], target = 8;
console.log(combinationSum(candidates, target))