#!/usr/bin/env node

  class DescriptiveStatistics {
    static mean(arr) {
      return arr.reduce((sum, value) => sum + value, 0) / arr.length;
    }
  
    static median(arr) {
      const sortedArr = arr.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedArr.length / 2);
  
      if (sortedArr.length % 2 === 0) {
        return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
      } else {
        return sortedArr[middle];
      }
    }
  
    static mode(arr) {
      const frequencyMap = arr.reduce((map, value) => {
        map[value] = (map[value] || 0) + 1;
        return map;
      }, {});
  
      let mode;
      let maxFrequency = 0;
  
      for (const key in frequencyMap) {
        if (frequencyMap[key] > maxFrequency) {
          mode = key;
          maxFrequency = frequencyMap[key];
        }
      }
  
      return mode;
    } 


    static range(arr) {
      return Math.max(...arr) - Math.min(...arr);
    }
  
    
    static variance(arr) {
      const meanValue = this.mean(arr);
      const squaredDifferences = arr.map(value => (value - meanValue) ** 2);
      return this.mean(squaredDifferences);
    }
  
    

    static standardDeviation(arr) {
      return Math.sqrt(this.variance(arr));
    }
  }
  

  
  // Example usage
  const data = [2, 4, 4, 4, 5, 5, 7, 9];
  console.log("Mean:", DescriptiveStatistics.mean(data));
  console.log("Median:", DescriptiveStatistics.median(data));
  console.log("Mode:", DescriptiveStatistics.mode(data));
  console.log("Range:", DescriptiveStatistics.range(data));
  console.log("Variance:", DescriptiveStatistics.variance(data));
  console.log("Standard Deviation:", DescriptiveStatistics.standardDeviation(data));
  