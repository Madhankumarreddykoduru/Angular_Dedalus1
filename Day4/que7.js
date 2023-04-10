marks = [{sno :1, Name :'madhan', Score : 80},
{sno :2, Name :'kumar', Score : 68},
{sno :3, Name :'jana', Score : 69},
{sno :4, Name :'sridhar', Score : 79}]
lessmarks= marks.filter(marks=>marks.Score>70)
console.log(lessmarks)