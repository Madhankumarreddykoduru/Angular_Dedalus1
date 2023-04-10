strings = ['angular', 'java', 'python', 'c']
length = strings.reduce((a,b)=>a+b.length,0)
console.log(length)