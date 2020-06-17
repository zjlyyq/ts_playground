
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */ 
class NodeStatus {
    isValidBST: boolean
    maxValue: number
    minValue: number
    constructor(isValid?:boolean, maxValue?: number, minValue?: number){   
        this.isValidBST = isValid == undefined?false:isValid
        this.maxValue = maxValue == undefined?0:maxValue
        this.minValue = minValue == undefined?0:minValue
    }
}
function isValidBST(root: TreeNode | null): boolean {
    let status = isValidBSTWithValue(root);

    if (!status) {
        return true;
    }
    return status.isValidBST;
};

function isValidBSTWithValue(root: TreeNode | null): NodeStatus|null {
    if (root == null) return null;

    let leftStatus: NodeStatus|null = isValidBSTWithValue(root.left);
    let rightStatus: NodeStatus|null = isValidBSTWithValue(root.right);

    let rootStatus = new NodeStatus();
    rootStatus.isValidBST = false;
    rootStatus.maxValue = root.val
    rootStatus.minValue = root.val
    if ((leftStatus == null || leftStatus.isValidBST) && (rightStatus == null || rightStatus.isValidBST)){
        if ((!rightStatus || root.val < rightStatus.minValue) && (!leftStatus || root.val > leftStatus.maxValue)) {
            rootStatus.isValidBST = true;
            rootStatus.maxValue = rightStatus==null?root.val:rightStatus.maxValue;
            rootStatus.minValue = leftStatus==null?root.val:leftStatus.minValue;
        } 
    }
    return rootStatus
};

