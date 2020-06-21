const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const users = {
    firstName: 'Kritika',
    lastName: 'Roy',
    email: 'roykritika00@gmail.com'
}
const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };

})();

function getUserCredentials({ firstName, lastName, email }) {
    return `${firstName} ${lastName} | ${email}`
}
console.log(stats);
console.log(half(stats));
const Users = getUserCredentials(users);
console.log(Users);