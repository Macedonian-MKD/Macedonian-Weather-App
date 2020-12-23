// Sega ovde moze da gi povikuvame i funkciite od forecast.js bidejki vo html dokumentot prvo se izvrsuva forecast.js pa app.js
// nie ke napravime selektor do formata i kje napraveme nastan na submit na formata
// vo nastanot najprvo ke povikame preventDefault()
// potoa ke go storirame valueto na vneseniot grad vo formata vo promenliva city i ke mu povikame .trim() za vo slucaj na prazni mesta da gi izbrsie
// potoa ke povikame reset() za resetiranje na formata
// potoa ke povikame funkcija updateCity koja ke go prima za argument nasiot grad odnosno promenlivata city koja sto e momentalnat vrednost vnesena vo formata vo text poleto
// taa funkcija ke ja deklarirame pogore
// taa ke bide asinhrona funkcija znaci ke vrakja Promise, znaci pisuvame then i catch

//Funckijata updateCity e asinhrona i za parametar ke go prima gradot sto e vnesen vo formata
// potoa pravime promenliva Gradski Detali i ja povikuvame da funkcijata getCity cij argument ke bide parametarot na updateCity funkcijata
//znaci zemi go gradot sto e vnesen vo formata i storiraj go vo promenliva Gradski Detali , sekako megu niv ima await posto getCity vrakja promise
// potoa istoto i so weather, deklarirame promenliva weather i vo nea ja povikuvame funkcijata getWeather
// NO ovojpat za argument setirame go Key property-to od pogornata promenliva cityDets
// toa znaci deka barame vremenski usluvi za klucot (odnosno gradot) od gradot sto e vnesen vo formata
// funkcijata updateCity ni vrakja objekt so dve vrednosti , prvata cityDets i vtorata weather


//Sega kreirame funkcija updateUI koja ke se povikuva vo eventot najdole vo .then na updateCity funkcijata i ke zima za parametar podatocite  od updateCity funkcijata
// prethodno kreirame 2 selektori eden so klasa card i drug so klasa details
// vo details treba da gi naneseme Imeto, Vremenskite okolnosti i temperaturata
// Toa go praveme so template string vo koj go nanesuvame html kodot i samo dodavame promenlivi kaj imeto na gradot, vremeto i temperaturata
// za imeto na gradot go koristeme parametarot data, bidejki data e objekt so 2 vrednosti cityDets i weather
//kreirame 2 promenlivi za da pristapime do cityDets i do weather od parametarot data
// gi krstime isto taka const cityDets = data.cityDets i const weather = data.weather
// taka pristapuvame do cityDets objektot i do weather objektot
// nie pisuvame cityDets pa posle svojstvoto EnlishName
// isto i za weather pisuvame weather.WeatherText
// za temperatura e malce poveke : weather.Temperature.Metric.Value


//E sega koga se vklucime na nasata strana ne sakame voopsto da se gledaat tie divovi kaj sto pisuva CITY NAME , TEMP
// tuku sakame toa da bide vidlivo samo koga ja submitirame formata
// Toa go pravime taka sto odeme vo HTML dokumentot i vo divot so klasa card mu dodavame nova bootstrap klasa d-none sto znaci dsiplay:none;
//potoa vo updateUI proveruvame so if dali card selektorot sto go napraivme pogore da se odnesuva za div so klasa .card
// dali ja ima klasata d-none, ( na pocetokot na prvoto prebaruvanje ke ja ima)
// Ako da togas izbrisi ja, bidejki ovoj if se naoga vo updateUI, znaci veke sme napisale ime na nekoj grad sto sakame da go prebaruvame
//i sega ke ja snema taa klasa i toj ke se pokaze
// e sega ako sakame po vtorpat , tretpat, n-ti pat da smenime da prebaruvame drug grad
//sega pak proveruva no ovojpat ne uspeva if zatoa sto ovojpat veke ja nema klasata d-none vo toj div


//Destructive - toa znaci mesto da gi vikame promenlivite vo updateUI const cityDets = data.cityDets i const weather = data.weather
// toa moze vaka const { cityDets, weather } = data
// i ke raboti se isto samo pomalku pisuvanje
// toa znaci deka deklarirame 2 promenlivi istovremeno i gi inicijalizirame da bidat ednakvi na parametarot data
//e sega bidejki data e objekt so 2 properties , kako sme gi pisale promenlivite vo golemite zagradi taka ke im gi dodeli na niv



//Sega sakame taa slikata vo html sto e placeholder da ja zamenime so slika od den ili so slika od nokj vo zavisnost kakvo e vremeto vo gradot sto go prebaruvame
//isto taka i vo div tagot so klasa icon da vmetneme mala iconka vo zavisnost od vremeto(weather type) vo gradot sto go prebaruvame
//Znaci prvo ni treba referenca do slikata so klasa time ( taa so placeholderot) i do div tagot za ikona
// niv gi selektirame najgore kaj drugite selektori

//Sega bilo koj grad da go prebarame i ako otideme vo console i go otvorime negoviot objekt i otideme vo weahter
// nadole ke zabelezeme property Weather Icon : broj, toj broj e od 1 do 44 vo zavisnost od vremeto
// Znaci sega nie ke proveruvame koj broj e toj i vo zavisnost od toj broj ke pokazeme soodvetna ikonka, Znaci ni trebat 44 ikonki
// isto taka imame property isDateTime koe e true ili false , pa i toa go proveruvame ako e den togas placeholder slikata se zamenuva so slika od den, a ako e nokj se zamenuva so slika od nokj
// 44-te ikonki moze da gi najdeme adamwhitcroft.com/climacons/ tamu moze da gi downloadiras i da i gi smenes iminjata od 1 do 44

//Pa vo funkcijata updateUI pravime promenliva timeSrc i ja setirame na nul
// vo taa promenliva ke storirame ili img/day.svg resursot do slikata ili img/night.svg 
// taka sto ke proverime so pomos na weather propertyto isDayTime ako e true togas setiraj go timeSrc na img/day.svg ako ne togas na img/night.svg
// otkako toa go proveruvame vo if ciklus potoa go iskoristuvame gore deklariraniot selektor time koj sto ja selektira slikata so klasa time 
// i togas vikame samo da go setirame atributot src na taa slika vo novata promenliva timeSrc , i vo zavisnost dali e den ili nokj razlicna slika ke se pokaze
// sega podolu ja updejtirame i ikonata na ist nacin kreirame promenliva po ime iconSrc
// taa ja postavuvame da bide ednakva na template string `img/icons/${weather.WeatherIcon}.svg`
// znaci ja postavuvame direktno na slika no vo zavisnost od propertito WeatherIcon na objektot weather koe moze da bide od 1 do 44
// ako e primer 10 togas setiraj go brojot 10 vo toj template string i toa ke ispadne slikata 10.svg , a taa e tocno nameneta za taa vremenska pogoda
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    /*const cityDets = data.cityDets;
    const weather = data.weather; isto so ova podole*/
    const { cityDets, weather} = data;
    console.log(data);
    // update details template
    details.innerHTML = `
      <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>
    `;
    
    //update the night/day & icon images

    let timeSrc = null; // ova kje bide imeto na slikata, moze da bide img/day.svg ili night.scg i ovoj source ke zavisi od propertito isDayTime
    if (weather.isDayTime === true){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }
    //Sega treba da ja zememe vrednosta na timeSrc i da ja naneseme na elementot img so klasa time
    // imame gore referenca do taa slika , vika se time

    time.setAttribute('src',timeSrc);


    //sega za iconata
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);


    // remove the d-none class if present
    if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
    }
  };

const updateCity = async (city) => {

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);
  return {cityDets,weather};

};

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();
  
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
