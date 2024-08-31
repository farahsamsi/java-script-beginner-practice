const friends = ['balam', 'kalam', 'salam', 'gelam', 'khailam'];

console.log(friends);

// includes Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(friends.includes('gelam'));

if(friends.includes('balam')){
    console.log('ok');
}
else{
    console.log('no ok')
}
