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
           [ "Arabia Standard Time UTC +3",
             "Afghanistan Time UTC +4:30",
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
             "Eastern European Time UTC +2",
             "Georgia Standard Time UTC +4",
             "Gulf Standard Time UTC +4",
             "Hong Kong Time UTC +8",
             "Hovd Time UTC +7",
             "Indochina Time UTC +7",
             "Irkutsk Time UTC +8",
             "Israel Standard Time UTC +2",
             "Japan Standard Time UTC +9",
             "Kyrgyzstan Time UTC +6",
             "Krasnoyarsk Time UTC +7",
             "Korea Standard Time UTC +9",
             "Magadan Time UTC +11",
             "Myanmar Time UTC +6:30",
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
                let resultDiv=document.getElementById("result")


                let UtcTwoHour1= hours +18;
                let UtcTwoHour2= hours-6;
                let UtcThreeHour1= hours - 5;
                let UtcThreeHour2= hours + 19;
                let UtcFourHour1= hours-4;
                let UtcFourHour2= hours + 20;
                let UtcFiveHour1=hours-3;
                let UtcFiveHour2= hours+21;
                let UtcSixHour1=hours-2;
                let UtcSixHour2=hours+22;
                let UtcSevenHour1=hours-1;
                let UtcSevenHour2=hours+23;
                let UtcNineHour1= hours +1;
                let UtcNineHour2=hours-23;
                let UtcTenHour1=hours-22;
                let UtcTenHour2=hours+2;
                let UtcElevenHour1= hours +3
                let UtcElevenHour2= hours-21
                let UtcTwelveHour1= hours + 4;
                let UtcTwelveHour2= hours -20;
                let convertedMinutes1= minutes-30;
                let convertedMinutes2= minutes+30



                if(country=== "Eastern European Time UTC +2" && hours<6 ||
                 country=== "Israel Standard Time UTC +2" && hours<6){
                 resultDiv.innerHTML = `${UtcTwoHour1} : ${minutes}`
                }else if (country=== "Eastern European Time UTC +2" && hours>5 || 
                 country=== "Israel Standard Time UTC +2" && hours>5){
                 resultDiv.innerHTML = `${UtcTwoHour2} : ${minutes}`
                }else{}  

                if (country === "Arabia Standard Time UTC +3" &&  hours >4 ||
                  country==="Moscow Standard Time	UTC +3" &&  hours >4 ||
                  country==="Turkey Time UTC +3" &&  hours >4) {
                  resultDiv.innerHTML = `${UtcThreeHour1} : ${minutes}`
                }else if(country === "Arabia Standard Time UTC +3" &&  hours < 5 ||
                  country==="Moscow Standard Time UTC +3" &&  hours < 5 ||
                  country==="Turkey Time UTC +3" && hours < 5 ){
                  resultDiv.innerHTML = `${UtcThreeHour2} : ${minutes}`
                }else{}   

                if(country==="Armenia Time UTC +4" &&  hours>3  ||
                 country=== "Azerbaijan Time UTC +4" && hours>3 || 
                 country=== "Georgia Standard Time UTC +4" &&  hours>3  ||
                  country==="Gulf Standard Time UTC +4" &&  hours>3){
                  resultDiv.innerHTML = `${UtcFourHour1} : ${minutes}`
                }else if (country==="Armenia Time UTC +4" && hours<4  || 
                country==="Azerbaijan Time UTC +4" && hours<4 ||
                 country=== "Georgia Standard Time UTC +4" && hours<4 || 
                 country=== "Gulf Standard Time UTC +4" && hours<4){
                  resultDiv.innerHTML = `${UtcFourHour2} : ${minutes}`
                }else{}

                if(country==="Aqtobe Time UTC +5" && hours>2 ||
                 country==="Oral Time UTC +5" && hours>2 || 
                 country=== "Pakistan Standard Time UTC +5" && hours>2 ||
                  country==="Tajikistan Time UTC +5" && hours>2 || 
                  country==="Maldives Time UTC +5" && hours>2 
                ||country==="Tajikistan Time UTC +5" && hours>2 ||
                 country==="Uzbekistan Time UTC +5" && hours>2 || 
                 country=== "Turkmenistan Time UTC +5" && hours>2 ||
                  country==="Yekaterinburg Time UTC +5" && hours>2 || 
                  country==="Yekaterinburg Time UTC +5" && hours>2){
                  resultDiv.innerHTML = `${UtcFiveHour1} : ${minutes}`
                }else if(country==="Aqtobe Time UTC +5" && hours<3 ||
                 country==="Oral Time UTC +5" && hours<3 ||
                  country=== "Pakistan Standard Time UTC +5" && hours<3 || 
                  country==="Tajikistan Time UTC +5" && hours<3 || 
                  country==="Maldives Time UTC +5" && hours<3
                ||country==="Tajikistan Time UTC +5" && hours<3 || 
                country==="Uzbekistan Time UTC +5" && hours<3 || 
                country=== "Turkmenistan Time UTC +5" && hours<3 || 
                country==="Yekaterinburg Time UTC +5" && hours<3 || 
                country==="Yekaterinburg Time UTC +5" && hours<3 ){
                  resultDiv.innerHTML = `${UtcFiveHour2} : ${minutes}`
                } else{}

                if(country==="Alma-Ata Time UTC +6" && hours>1 ||
                 country==="Bangladesh Standard Time UTC +6" && hours>1 ||
                  country==="Bhutan Time UTC +6" && hours>1 ||
                   country==="Kyrgyzstan Time	UTC +6" && hours>1 
                ||country==="Omsk Standard Time UTC +6" && hours>1 ||
                 country==="Qyzylorda Time UTC +6" && hours>1){
                  resultDiv.innerHTML = `${UtcSixHour1} : ${minutes}`
                  } 
                else if(country==="Alma-Ata Time UTC +6" && hours <2 ||
                 country==="Bangladesh Standard Time UTC +6" ||
                  country==="Bhutan Time UTC +6" && hours <2 ||
                   country==="Kyrgyzstan Time UTC +6" && hours <2 
                ||country==="Omsk Standard Time UTC +6" && hours <2 ||
                 country==="Qyzylorda Time UTC +6" && hours <2){
                  resultDiv.innerHTML = `${UtcSixHour2} : ${minutes}`
                  }
                else{}

                if(country==="Hovd Time UTC +7" && hours <24 && hours > 0 || 
                country==="Indochina Time UTC +7" && hours <24 && hours > 0 || 
                country==="Krasnoyarsk Time UTC +7" && hours <24 && hours > 0 ||
                 country==="Novosibirsk Time UTC +7" && hours <24 && hours > 0 
                || country==="Western Indonesian Time UTC +7" && hours <24 && hours > 0){
                  resultDiv.innerHTML = `${UtcSevenHour1} : ${minutes}`
                }
                else if(country==="Hovd Time UTC +7" && hours===0 ||
                 country==="Indochina Time UTC +7" && hours===0 ||
                  country==="Krasnoyarsk Time UTC +7" && hours===0 ||
                   country==="Novosibirsk Time UTC +7" && hours===0 
                || country==="Western Indonesian Time UTC +7" && hours===0){
                 resultDiv.innerHTML = `${UtcSevenHour2} : ${minutes}`
                }
                else{}

                if(country=== "Brunei Darussalam Time UTC +8" ||
                country==="Choibalsan Time UTC +8"||
                 country=== "China Standard Time UTC +8" ||
                  country==="Hong Kong Time UTC +8" || country=== "Irkutsk Time UTC +8"
                ||country==="Malaysia Time UTC +8"||country==="Singapore Time UTC +8"||
                country=== "Ulaanbaatar Time UTC +8"||country==="Central Indonesian Time UTC +8"){
                  resultDiv.innerHTML = `${hours} : ${minutes}`
                }
                else{}

                if (country==="Yakutsk Time	UTC +9" && hours<23 ||
                country==="Japan Standard Time UTC +9" && hours<23 ||
                country==="Korea Standard Time UTC +9"&& hours<23 ||
                country==="East Timor Time UTC +9"&& hours<23 ||
                country==="Eastern Indonesian Time UTC +9" && hours<23) {
                  resultDiv.innerHTML = `${UtcNineHour1} : ${minutes}`
                 }
                 else if(country==="Yakutsk Time UTC +9" && hours===23 ||
                 country==="Japan Standard Time UTC +9" && hours===23 ||
                 country==="Korea Standard Time UTC +9"&& hours===23 ||
                 country==="East Timor Time UTC +9" && hours===23 ||
                 country==="Eastern Indonesian Time UTC +9"&& hours===23){
                  resultDiv.innerHTML = `${UtcNineHour2} : ${minutes}`
                 }
                else{}

                if(country==="Vladivostok Time UTC +10" && hours>21){
                  resultDiv.innerHTML = `${UtcTenHour1} : ${minutes}`
                }
                else if(country==="Vladivostok Time UTC +10" && hours <22){
                  resultDiv.innerHTML = `${UtcTenHour2} : ${minutes}`
                }
                else{}
                
                if(country=== "Magadan Time	UTC +11" && hours<21 ||
                country=== "Srednekolymsk Time UTC +11" && hours<21 ||
                country==="Sakhalin Time UTC +11" && hours<21){
                  resultDiv.innerHTML = `${UtcElevenHour1} : ${minutes}`
                }
                else if(country=== "Magadan Time UTC +11" && hours>20 ||
                country=== "Srednekolymsk Time UTC +11" && hours>20 ||
                country==="Sakhalin Time UTC +11" && hours>20){
                  resultDiv.innerHTML = `${UtcElevenHour2} : ${minutes}`
                }
                else{}

                if(country==="Anadyr Time UTC +12" && hours<20||
                country=== "Kamchatka Time UTC +12" && hours<20){
                  resultDiv.innerHTML = `${UtcTwelveHour1} : ${minutes}`
                }
                else if(country==="Anadyr Time UTC +12" && hours>19 ||
                country=== "Kamchatka Time UTC +12" && hours>19){
                  resultDiv.innerHTML = `${UtcTwelveHour2} : ${minutes}`
                }
                else{}

                if(country==="Afghanistan Time UTC +4:30" && hours>3 && minutes>=29){
                  resultDiv.innerHTML = `${UtcFourHour1} : ${convertedMinutes1}`
                }
                else if (country==="Afghanistan Time UTC +4:30" && hours>3 && minutes<=30 ){
                  resultDiv.innerHTML = `${ UtcFourHour1} : ${convertedMinutes2}`
                }
                else if(country==="Afghanistan Time UTC +4:30" && hours<4 && minutes>=29){
                  resultDiv.innerHTML = `${UtcFourHour2} : ${convertedMinutes1}` 
                }
                else if(country==="Afghanistan Time UTC +4:30" && hours<4 && minutes<=30){
                    resultDiv.innerHTML = `${UtcFourHour2} : ${convertedMinutes2}` 
                 }
                else{}

               
            }