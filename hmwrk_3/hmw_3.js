let username = prompt('Please enter your name:');
let surname = prompt('Please enter your surname:');
let age = prompt('Please enter your age:');
let city = prompt('Please enter your city:');

age = parseInt(age);
let user_info = {
    username:username, 
    surname:surname, 
    age:age,
    city:city,
};
decision = confirm('Do you agree to share your information?');

decision == true ? console.log(`User's name: ${user_info.username}, 
user's surname: ${user_info.surname}, age: ${user_info.age}, 
city: ${user_info.city}.`) 
: alert("User didn't alow to show information!");
