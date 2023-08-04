setInterval(currentTime, 1000);

function currentTime()
{
    let time = new Date();   // creating object of Date class
    let dayName=time.getDay();
    let month=time.getMonth();
    let year=time.getFullYear();
    let date=time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    var am_pm = "AM";
    if(hour==12)
    am_pm = "PM";
    if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
    }
    if (hour == 0) {
    hour = 12;
    am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

   //value of current time
   let currentTime = hour + ":" + min + ":" + sec +" "+ am_pm;

  // value of present day(Day, Month, Year)
  var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  var presentDay=week[dayName]+", "+months[month]+" "+date+", "+year;

  const clock = document.getElementById("time");
  const dayIntro=document.getElementById("dayName");

  clock.innerHTML = currentTime;
  dayIntro.innerHTML = presentDay;
}

currentTime();  //calling currentTime() function to initiate the process
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "3045dd712ffe6e702e3245525ac7fa38"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch
    btn.addEventListener('click', function(){
         fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        .then(res => res.json())
         //.then(data => console.log(data))
        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML=`City: ${nameval}`
            temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('You entered Wrong city name'))
    })