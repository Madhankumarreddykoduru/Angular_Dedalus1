marks = [{sno :1, Name :'jana',Score : 95},
        {sno :2, Name :'madhan', Score : 90},
    {sno :3, Name :'bhaskar', Score : 91},
    {sno :4, Name :'sridher', Score : 94}]

highest = marks.reduce((a,b)=>a.Score>b.Score? a: b)

console.log(highest)