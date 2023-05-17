//var api 
let apiKey = '3cee90f6422f2e1fd1d816153e9f2bdf';
let city = ''
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sp`

// var dom
let $contenedor = document.getElementById("contenedor"),

//let $buscador = document.getElementsByClassName("buscador")

 $grados = document.getElementById("grados"),

 $icono = document.getElementById("weather-icon"),

 $descripcion = document.getElementById("descripcion"),

 $ciudad = document.getElementById("ciudad"),

 $form = document.getElementById("form"),

 $dato = document.getElementById("date"),

 $min = document.getElementById("min"),

 $max = document.getElementById("max"),

 $boton = document.getElementById("boton"),

 $viento = document.getElementById("speed"),

 $rafaga = document.getElementById( "gust"),

 $degradacion = document.getElementById( "deg"),

 $humedad = document.getElementById( "Humedad"),

 $sTermica = document.getElementById("termmica"),

 $presion = document.getElementById("presion");



let dia = new Date;









let datosClima = function (ciudad){

    

    let $buscador = document.getElementById("buscador").value;

    // Local storage
    if((localStorage.getItem('ciudad')) == null){
        localStorage.setItem('ciudad', $buscador);
    }
    else if(ciudad != null){
        $buscador = localStorage.getItem('ciudad')
    }
    else{
        localStorage.setItem('ciudad', $buscador);
    }


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${$buscador}&appid=${apiKey}&units=metric&lang=sp`)
        .then(res => res.json())
        .then(json => {
            
        $grados.textContent= json.main.temp + "°C";
        $min.textContent= " " +json.main.temp_min + "°C";
        $max.textContent= " " +json.main.temp_max + "°C";
        $descripcion.textContent= json.weather[0].description;
        $ciudad.textContent= json.name;
        $dato.textContent = [dia.getDate(), dia.getMonth() +1, dia.getFullYear()].join('/')
        $viento.textContent= json.wind.speed + " km/h";
        /*$rafaga.textContent= json.wind.gust + " m/s";
        $degradacion.textContent= json.wind.deg + " m/s";*/
        $humedad.textContent= json.main.humidity + "%";
        $sTermica.textContent= json.main.feels_like +"°C"
        $presion.textContent= json.main.pressure;
        

        $icono.src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`



        /*console.log($icono)
        console.log(json);
        console.log(json.weather[0].description)
        //$descripcion.textContent= json */
    })
};


$boton.addEventListener("click", e =>{
    /*if((localStorage.getItem('ciudad')) !== null){
        let ciudad = localStorage.getItem('ciudad');
        console.log("Funcion que realice la peticion con lo que saque del local storage")
        
    } else{
        console.log("Funcion para pintar el buscadr en blanco")
    }
    */
    datosClima();

    
});

document.addEventListener("DOMContentLoaded", (e)=>{
    if((localStorage.getItem('ciudad')) !== null){
        let datosciudad = localStorage.getItem('ciudad');

        datosClima(datosciudad);
    }
    
    
})










