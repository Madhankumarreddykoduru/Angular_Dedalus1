const programs = ["c", "python", "angular", "java", "javascript"];
var longest = programs.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);

console.log(longest)