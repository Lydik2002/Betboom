function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Былин Глеб';

    let footer = document.getElementById('footer');
    name.innerHTML = 'Факультет бизнеса, ФБИ-01, 3 курс, 2022';
    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').Placeholder = 'введите имя';

    document.getElementById('your-name').innerHTML = 'Ваша фамилия';
    document.getElementById('input-name').Placeholder = 'введите фамилию';

    document.getElementById('your-name').innerHTML = 'Ваша возраст';
    document.getElementById('input-name').Placeholder = 'введите ваш возраст';

    document.getElementById('ok-button').value = "Ок";
    document.getElementById('reset-button').value = "Сброс";
}
function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Bylin Gleb';

    let footer = document.getElementById('footer');
    name.innerHTML = 'Faculty of business, FBI-01, 3rd year, 2022';
    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').Placeholder = 'enter your name';

    document.getElementById('your-name').innerHTML = 'Your surname';
    document.getElementById('input-name').Placeholder = 'enter your surname';

    document.getElementById('your-name').innerHTML = 'Your age';
    document.getElementById('input-name').Placeholder = 'enter your age';

    document.getElementById('ok-button').value = "Ok";
    document.getElementById('reset-button').value = "Reset";


}

function snowAlert() {
   letuserName = document.getElementById('input-name').value;
   letuserSurame = document.getElementById('input-surname').value;
   letuserAge = document.getElementById('input-age').value;
   alert( 'Привет,' + userName + '' +userSurame + '\n' + 'Ваш возраст: ' + userAge);
   let r = Math.round(Math.random()*255);
   let g = Math.round(Math.random()*255);
   let b = Math.round(Math.random()*255);
   let color = 'rgb(' + r +',' + g +',' + b + ')';
   document.getElementById('user-data').style.backgroundColor = color;
}