const tabsBtn   = document.querySelectorAll(".taps_navig");
const tabsItems = document.querySelectorAll(".tab_it");

tabsBtn.forEach(onTabClick);

//Функция переключения страниц
function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    

            currentTab.classList.add('active');
        }
    });
}


document.querySelector('.taps_navig').click();






//Функция изминения размера текста
$('#font-size').change(function(){
	var i = $(this).val();
  $('p').css({
  	'font-size': i+'px'
  })
});



//Функции смены цвета фона и текста
function changeColor(color) {
      document.body.style.background = color;
  }

function changeColor2(color) {
    document.body.style.color = color;
}
    
function gfg_Run() {
      changeColor('black');
      changeColor2('white')
  }

function gfg_Run2() {
    changeColor('white');
    changeColor2('black');
  }













