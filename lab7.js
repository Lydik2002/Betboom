function snowAlert() {
    letuserName = document.getElementById('input-name').value;
    letuserSurame = document.getElementById('input-surname').value;
    letuserAge = document.getElementById('input-age').value;
    letusersex = document.getElementById('sex').value;
    letgreeting;
    if(userAge <=17){
        greeting = 'Здравствуй, ';
        if(userSex == 'female'){
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик ';
        }
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex == 'female'){
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин ';
        }
    }
        
    alert( greeting + userName + '' +userSurame + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r +',' + g +',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
 }