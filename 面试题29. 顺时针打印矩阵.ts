function spiralOrder(matrix: number[][]): number[] {
    
    let dir:string[] = ['right','down','left','up'];
    let c:number = 0;
    let i:number = 0,j:number = -1;
    let rowLen = matrix.length > 0?matrix[0].length:0;
    let colLen = matrix.length;
    let count:number = rowLen*colLen
    let ans:number[] = [];
    let dirindex:number = 0;
    while(c < count){
        // console.log('index',dirindex)
        switch(dir[dirindex]) {
            case 'right':
                // console.log('right')
                if (j + 1 < rowLen  && matrix[i][j+1] != -12345678) {
                    j = j + 1;
                    ans.push(matrix[i][j]);
                    matrix[i][j] = -12345678
                    c ++;
                }
                else {
                    dirindex = (dirindex+1)%4;
                }
                break;
            case 'down':
                // console.log('down')
                if (i + 1 < colLen  && matrix[i+1][j] != -12345678) {
                    i = i + 1;
                    ans.push(matrix[i][j]);
                    matrix[i][j] = -12345678
                    c ++;
                }
                else {
                    dirindex = (dirindex+1)%4;
                }
                break;
            case 'left':
                // console.log('left')
                if (j - 1 > -1 && matrix[i][j-1] != -12345678 ) {
                    j = j -1
                    ans.push(matrix[i][j]);
                    matrix[i][j] = -12345678
                    c ++;
                }
                else {
                    dirindex = (dirindex+1)%4;
                }
                break;
            case 'up':
                // console.log('up')
                if (i-1 > -1 && matrix[i-1][j] != -12345678) {
                    i = i -1
                    ans.push(matrix[i][j]);
                    matrix[i][j] = -12345678
                    c ++;
                }
                else {
                    dirindex = (dirindex+1)%4;
                }
                break;
        }
    }
    return ans;
};