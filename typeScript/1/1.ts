function twoSum(nums: number[], target: number): number[] {
    for(let i=0; i<nums.length; i++){
        let currentSelection : number = nums[i];
        for(let i2=i+1; i2<nums.length; i2++){
            if(currentSelection + nums[i2] == target){
                return [i, i2];
            }
        }
        
    }
    return [];
};

console.log(twoSum([3,2,4], 6));