{
    let combinationSum = function(candidates: number[], target: number): number[][] {
        candidates = candidates.sort((a, b) => a - b);
        return dfs(candidates, target)
    };

    let dfs = function(candidates: number[], target: number): number[][] {
        if (target === 0) return [[]]
        if (target < candidates[0] || candidates.length === 0) return []
        let ret: number[][] = []
        let n = Math.floor(target / candidates[0]);
        for (let i = 0; i <= n; i++) {
            let cur = new Array(i).fill(candidates[0]);
            let subs = dfs(candidates.slice(1), target - i * candidates[0]);
            subs.forEach(arr => {ret.push(cur.concat(arr));})
        }
        return ret;
    }
}