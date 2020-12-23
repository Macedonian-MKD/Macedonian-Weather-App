// od weather APi stranata kje gi zimame endpointovite za razlicni gradovi za temperaturata
// odkako se se registriravme na accuwather stranata i kreiravme nova APP, sega imame API KEY
// Koga ke pravime request i go pratime i Key-ot togas nivniot server ke znae koja aplikacija e i koj go dal requestot
// bidejki imame free account ne moze poveke od 1 aplikacija da imame ,nasata aplikacija kje moze da prima samo 50 requesti na den
const key = 'RPbewFLPYtr1xkfB5MjtYjDfUMLSI9P7';
// vo API REFERENCE ni se naogaat API endpointovite za se' sto sakame
// nie prvo ke otvorime Locations API  pa podole City Search
// kako del od odgovorot  dobivame vo browserot  i location KEY CODE/ sekoj KEy COde pretstavuva razlicna lokacija
// Sledniot request posle City Search kje bide vo oblasta Current Conditons , pa ke ni treba toj KEY CODE za da pobarame Current Condition za toj grad
//Koga pravime request za City Search nam ni e potreben klucot od nasata aplikacija i imeto na gradot
// za vozvrat dobivame ton informacii za toj grad megu koi i "Key": "nekoj broj"
//Nas kje ni treba toj broj za da go napravime sledniot request za Current Condition za toj grad
//Bidejki za City Search ni trebaat i query parametars kako apikey i ime na grad(q), ke mora da se napravi query dolu vo asinhronata funkcija

//Praveme asinhrona funkcija, vnatre imame promenliva so api endpoinot do koj sto ke sakame da napraveme request
// isto taka i za query parametrite sto trebaat pravime query, toa zapocnuva so ? pa go stavame imeto na parametrot apikey = na promenlivata key pogore pa odma posle toa ampersant pa imeto na vtoriot parametar q(toa e za grad), toa go stavame ednakvo na argumentot na asinhronata funkcija koj ke go passuvame

//Praveme funkcija getWeather za vremenskite uslovi, taa e isto taka asinhrona i za argument go ima Key propertyto na getCity objektot sto go dobivame
// znaci toj key ne e del od queryto , no go stavame vo nego, toj key treba da stoi vednas posle api-endpoinot
// posle toj key zapocnuva vistinskoto query posle ? znaci go stavame query parametarot apikey koj sto e zadolzitelen za Current Condition 
// toj e sekako nasiot kluc najgore na stranata 
// i potoa kako i pogore pravime fetch request so celiot toj link spoen base + query
// sega pravime nova promenliva isto data koja ke go zeme json podatokot od response promenlivata koja e promise
const getWeather = async (gradID) => {
  
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${gradID}?apikey=${key}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    return data[0];
  
  };


const getCity = async(grad)=>{

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey= ${key}&q=${grad}`;

    //sega pravime request so fetch, kako parametri se apito i query-to, fakticki queryto se spojuva vo stringot so api endpointot  
    const response = await fetch(base + query); // fetch vrakja promise vo response promenlivata, pa mora json da upotrebime da gi konvertirame
    const data = await response.json();

    //Primer pobarame grad london, megutoa toa ke ni gi dade site gradovi po ime London vo svetot, no prviot e sekogas onoj najgolemiot
    //toj sto ni treba vistinskiot London, zatoa data bidejki e od tip niza , stavame [0] za da go zeme toj grad sto go barame samo a ne site Londoni po svetot
    return(data[0]);
};




//bidejki getCity e asinhrona funkcija, a taa vrakja Promise, sega moze da se koristat then i catch
// vo then na getCity ja povikuvame getWeather kako return i i go davame za argument property-to Key od getCity(London)
//Zatoa sto toj key e parametar vo getWeather funkcijata i e potreben za da se najdat vremenskite uslovi spored toj key - grad
// potoa bidejki vrakjame nazad promise pak mozeme da koristeme then sega za getWeather i go pecateme podatokot sto go dobivame
/*

getCity('london').then( data => {
    return getWeather(data.Key);
}).then(data => console.log(data))
.catch(err => console.log(err));

*/
