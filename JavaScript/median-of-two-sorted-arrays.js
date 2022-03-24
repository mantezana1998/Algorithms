var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums1.length){
        return findMedianSortedArrays(nums2, nums1)
    }
    
    const m = nums1.length;
    const n = nums2.length;
    
    let start = 0;
    let end = m;
    
    while (start <= end){
        let partitionX = Math.floor((start + end) /2)
        let partitionY = Math.floor((m + n + 1) /2) - partitionX
        
        let maxLeftNums1 = partitionX == 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionX -1]
        let minRightNums1 = partitionX == m ? Number.MAX_SAFE_INTEGER : nums1[partitionX]
        
        let maxLeftNums2 = partitionY == 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1]
        let minRightNums2 = partitionY == n ? Number.MAX_SAFE_INTEGER : nums2[partitionY]
        
        if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1){
            if((m + n) % 2 == 0){
                return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2.0
            }else{
                return (Math.max(maxLeftNums1, maxLeftNums2))
            }
        }
        else if (maxLeftNums1 > minRightNums2) {
            start = partitionX -1
        }else {
            end = partitionX + 1
        }
    }
    
};