let options = "";
        for(let i = 0; i<24; i++){
         options += "<option>"+ i +"</option>";
          }document.getElementById("hour").innerHTML = options; 
          document.getElementById("hour").style.fontSize = "16.4px"; 
 
        
  let  minutes = 60;
   let minutesOption = "";
       for(let j = 0 ; j <=minutes; j++){
         minutesOption += "<option>"+ j +"</option>";
          }document.getElementById("minutes").innerHTML = minutesOption; 
          document.getElementById("minutes").style.fontSize = "16.4px";
        
           let countries =
           [ "Eastern European Time UTC +2",
             "Israel Standard Time UTC +2",
             "Arabia Standard Time UTC +3",
             "Afghanistan Time UTC 4:30",
             "Alma-Ata Time UTC +6",
             "Armenia Time UTC +4",
             "Anadyr Time UTC +12",
             "Aqtobe Time UTC +5",
             "Azerbaijan Time UTC +4",
             "Brunei Darussalam Time UTC +8",
             "Bangladesh Standard Time UTC +6",
             "Bhutan Time UTC +6",
             "Choibalsan Time UTC +8",
             "China Standard Time UTC +8",
             "Georgia Standard Time UTC +4",
             "Gulf Standard Time UTC +4",
             "Hong Kong Time UTC +8",
             "Hovd Time UTC +7",
             "Indochina Time UTC +7",
             "Irkutsk Time UTC +8",
             "Japan Standard Time UTC +9",
             "Kyrgyzstan Time UTC +6",
             "Krasnoyarsk Time UTC +7",
             "Korea Standard Time UTC +9",
             "Magadan Time UTC +11",
             "Moscow Standard Time UTC +3",
             "Maldives Time UTC +5",
             "Malaysia Time UTC +8",
             "Novosibirsk Time UTC +7",
             "Omsk Standard Time UTC +6",
             "Oral Time UTC +5",
             "Kamchatka Time UTC +12",
             "Pakistan Standard Time UTC +5",
             "Qyzylorda Time UTC +6",
             "Sakhalin Time UTC +11",
             "Singapore Time UTC +8",
             "Srednekolymsk Time UTC +11",
             "Tajikistan Time UTC +5",
             "East Timor Time UTC +9",
             "Turkmenistan Time UTC +5",
             "Turkey Time UTC +3",
             "Ulaanbaatar Time UTC +8",
             "Uzbekistan Time UTC +5",
             "Vladivostok Time UTC +10",
             "Western Indonesian Time UTC +7",
             "Eastern Indonesian Time UTC +9",
             "Central Indonesian Time UTC +8",
             "Yakutsk Time UTC +9",
             "Yekaterinburg Time UTC +5",
              ];
            
            let countriesOption =""
              for (let i = 0; i < countries.length; i++) {
                countriesOption += "<option>"+ countries[i] +"</option>";
                  document.getElementById("timezone").innerHTML = countriesOption
                   }document.getElementById("timezone").style.fontSize = "16.4px";

              function convert(){
                let hours = Number(document.getElementById("hour").value)
                let minutes = Number(document.getElementById("minutes").value)
                let country = document.getElementById("timezone").value
                let resultDiv= document.getElementById("result")

             

                let origin = {time: hours - 8, minuto: minutes}

                if ( origin.time < 0 ){
                  origin.time = 24 + origin.time
                }

                let index = country.lastIndexOf('+')
                       
                let offSet = Number(country.slice(index))
                
                let secondIndex = country.lastIndexOf(':') + 1; 
                let secondOffSet = Number(country.slice(secondIndex) );



                let converted = { time :origin.time + offSet, minuto: origin.minuto }
                if (!isNaN(secondOffSet) && secondIndex >= 0) {
                  converted = { 
                    time: origin.time + 4,
                    minuto: origin.minuto + secondOffSet,
                  }
                }
              
                converted = calculateConversion(converted)
                resultDiv.innerHTML = `${converted.time} : ${converted.minuto}`;
              }
              
              function calculateConversion(conversionObject) {
                if (conversionObject.time < 0) {
                  conversionObject.time += 24
                } else if (conversionObject.time > 23) {
                  conversionObject.time -= 24
                }
                else if (conversionObject.minuto > 60){
                  conversionObject.minuto -= 60
                  conversionObject.time += 1

                }
              
                return conversionObject
              }
