const color = document.querySelectorAll('.color')
const badWord = document.querySelectorAll('.badWord')
const badWordBase = ["Аспид",
"Баран",
"Боров",
"Быдло",
"Волки позорные",
"Горилла",
"Душной козел",
"Змея",
"куча говна",
" пассивный гомосексуалист",
" мужские яйца",
"жопа",
"хуй","говно","залупа"," пенис","хер"," давалка","блядина","Головка", "шлюха", "жопа", "член", "еблан", "петух", "мудила",
"Рукоблуд","ссанина","очко","блядун", "вагина",
"Сука", "ебланище", "влагалище", "пердун", "дрочила",
"Пидор", "пизда", "туз", "малафья", "гомик", "мудила", "пилотка", "манда",
"Анус", "вагина", "путана", "педрила","шалава", "хуила", "мошонка", "елда"]


for(let i=0;i <= color.length;i++){
    color[i].addEventListener('click',function(){
        let bc=`rgba(${Math.floor(Math.random() * 101)},${Math.floor(Math.random() * 101)},${Math.floor(Math.random() * 101)})`;
        color[i].style.background= bc;
        color[i].style.border=0;
        badWord[i].textContent = badWordBase[Math.floor(Math.random() * badWordBase.length)];
        })
    }


