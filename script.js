//--------------------------------------------------- for sticky navbar -------------------------------------------------
window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})



// ------------------------------------------- For pie chart1 --------------------------------------------------------------
// var totalCases=0;
// var cases = [1.96,89.75,8.29];

fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
            "x-rapidapi-key": "786c19864dmsh3e6b817208651a7p1b2894jsn1463f2d05f84"
        }
    })
    .then((response) => {
        //console.log(response);
        return response.json();
    }).then((actualdata) => {
        totalCases = actualdata[0].TotalCases;
        var cases=[];
        cases[0] = actualdata[0].TotalDeaths;
        cases[1] = parseInt(actualdata[0].TotalRecovered);
        cases[2] = actualdata[0].ActiveCases;
        //console.log(actualdata[0]);



        //-------------------- Why I write the whole below Chart.js inside the .then() -----------------------------------
        /* Since fetch is asynchronous, any code that accesses variables outside the .then() will probably run before the fetch has
        finished. Anything that depends on the result of the fetch has to go in the .then, directly or indirectly.
        So I just put the code inside .then() and then callback. */

        const myChart = document.getElementById('myChart1').getContext('2d');

        // Global options
        Chart.defaults.global.defaultFontFamily ='Lato';
        Chart.defaults.global.defaultFontSize = 15;
        Chart.defaults.global.defaultFontColor = '#000';

        const massPopChart = new Chart(myChart,
            {
                type: 'pie',   // bar, horizontalBar, pie, line, doughnut, radar, polarArea
                data:
                {
                    labels:['Deaths', 'Recovered', 'Active'],
                    datasets:
                    [{
                        backgroundColor:['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(255,255,0,0.3)'],
                        borderWidth: 1,
                        borderColor:'#777',
                        hoverBorderWidth: 2,
                        hoverBorderColor:'#000',
                        data:cases
                    }]
                },
                options:
                {
                    title:
                    {
                        display:true,
                        text:`Worldwide Total Cases : ${totalCases}`,
                        fontSize:22,
                        fontColor:'#77a'
                    },
                    
                    legend:
                    {
                        //display: false,
                        position:'right',
                        labels:
                        {
                            fontColor:'#77a'
                        }
                    },
                    
                    layout:
                    {
                        padding: {left:20, right:50, bottom:5, top:-12}
                    },
                    
                    tooltips:
                    {
                        //enabled:false
                    }
                }
            });
    //--------------------------------------------------------------------------------------------------------------
    }).catch(err => {
        console.error(err);
    });



/*const myChart = document.getElementById('myChart').getContext('2d');

// Global options
Chart.defaults.global.defaultFontFamily ='Lato';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#000';

const massPopChart = new Chart(myChart,
    {
        type: 'pie',   // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:
        {
            labels:['Deaths', 'Recovered', 'Active'],
            datasets:
            [{
                label:'Population',
                backgroundColor:['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(255,255,0,0.3)'],
                borderWidth: 1,
                borderColor:'#777',
                hoverBorderWidth: 2,
                hoverBorderColor:'#000',
                data:cases
            }]
        },
        options:
        {
            title:
            {
                display:true,
                text:`Worldwide Total Cases : ${totalCases}`,
                fontSize:25,
                fontColor:'#77a'
            },
            
            legend:
            {
                //display: false,
                position:'right',
                labels:
                {
                    fontColor:'#77a'
                }
            },
            
            layout:
            {
                padding: {left:0, right:50, bottom:5, top:-15}
            },
            
            tooltips:
            {
                //enabled:false
            }
        }
    });*/




    /*----------------------------------------------------------- FOR CHART 2 -----------------------------------------------------*/

fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
    {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
            "x-rapidapi-key": "786c19864dmsh3e6b817208651a7p1b2894jsn1463f2d05f84"
        }
    })
    .then((response) => {
        return response.json();
    }).then((actualdata) => {
        newTotalCases = actualdata[0].NewCases;
        var newCases=[];
        newCases[0] = parseInt(actualdata[0].NewDeaths);
        newCases[1] = actualdata[0].NewRecovered;
        //console.log(actualdata[0]);

        const myChart = document.getElementById('myChart2').getContext('2d');

        Chart.defaults.global.defaultFontFamily ='Lato';
        Chart.defaults.global.defaultFontSize = 15;
        Chart.defaults.global.defaultFontColor = '#000';

        const massPopChart = new Chart(myChart,
            {
                type: 'pie',
                data:
                {
                    labels:['New Deaths', 'New Recovered'],
                    datasets:
                    [{
                        backgroundColor:['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)'],
                        borderWidth: 1,
                        borderColor:'#777',
                        hoverBorderWidth: 2,
                        hoverBorderColor:'#000',
                        data:newCases
                    }]
                },
                options:
                {
                    title:
                    {
                        display:true,
                        text:`Worldwide New Cases : ${newTotalCases}`,
                        fontSize:22,
                        fontColor:'#77a'
                    },
                    
                    legend:
                    {
                        //display: false,
                        position:'right',
                        labels:
                        {
                            fontColor:'#77a'
                        }
                    },
                    
                    layout:
                    {
                        padding: {left:20, right:50, bottom:5, top:-12}
                    },
                    
                    tooltips:
                    {
                        //enabled:false
                    }
                }
            });



    //--------------------------------------------------------------------------------------------------------------
    }).catch(err => {
        console.error(err);
    });



    //--------------------------------- for news api -----------------------------------------------
fetch("https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
		"x-rapidapi-key": "786c19864dmsh3e6b817208651a7p1b2894jsn1463f2d05f84"
	}
}).then(response => {
	//console.log(response);
    return response.json();
}).then((actualdata) => {
    console.log(actualdata)
    var title = actualdata.news[5].title;
    var image = actualdata.news[5].urlToImage;
    var content = actualdata.news[5].content;
    var link = actualdata.news[5].link;

    document.getElementById("news1").innerHTML = `<a href="${link}"><h3> ${title}</h3> <br> <img src="${image}" alt=""> <br> <p>${content}</p><br> <p id="p2">read more</p></a>`;

    var title1 = actualdata.news[8].title;
    var image1 = actualdata.news[8].urlToImage;
    var content1 = actualdata.news[8].content;
    var link1 = actualdata.news[8].link;

    document.getElementById("news2").innerHTML = `<a href="${link1}"><h3> ${title1}</h3> <br> <img src="${image1}" alt=""> <br> <p>${content1}</p><br> <p id="p3">read more</p></a>`;
    
}).catch(err => {
	console.error(err);
});


//------------------------------------------ FOR SEARCH BOX --------------------------------------
let link = document.getElementById("search-btn");

window.addEventListener('keydown', function(checkKey){
    if(checkKey.key=="Enter")
    {
        let content = document.getElementById("content").value.toLowerCase();
    
        if(content=="afganistan")
            window.open("/Countries/afganistan.html", "_blank");
        else if(content=="albania")
            window.open("/Countries/albania.html", "_blank");
        else if(content=="algeria")
            window.open("/Countries/algeria.html", "_blank");
        else if(content=="andorra")
            window.open("/Countries/andorra.html", "_blank");
        else if(content=="angola")
            window.open("/Countries/angola.html", "_blank");
        else if(content=="antigua")
            window.open("/Countries/antigua.html", "_blank");
        else if(content=="argentina")
            window.open("/Countries/argentina.html", "_blank");
        else if(content=="armenia")
            window.open("/Countries/armenia.html", "_blank");
        else if(content=="aruba")
            window.open("/Countries/aruba.html", "_blank");
        else if(content=="australia")
            window.open("/Countries/australia.html", "_blank");
        else if(content=="austria")
            window.open("/Countries/austria.html", "_blank");
        else if(content=="azerbaijan")
            window.open("/Countries/azerbaijan.html", "_blank");
        else if(content=="bahamas")
            window.open("/Countries/bahamas.html", "_blank");
        else if(content=="bahrain")
            window.open("/Countries/bahrain.html", "_blank");
        else if(content=="bangladesh")
            window.open("/Countries/bangladesh.html", "_blank");
        else if(content=="barbados")
            window.open("/Countries/barbados.html", "_blank");
        else if(content=="belarus")
            window.open("/Countries/belarus.html", "_blank");
        else if(content=="belgium")
            window.open("/Countries/belgium.html", "_blank");
        else if(content=="belize")
            window.open("/Countries/belize.html", "_blank");
        else if(content=="benin")
            window.open("/Countries/benin.html", "_blank");
        else if(content=="bermuda")
            window.open("/Countries/bermuda.html", "_blank");
        else if(content=="bhutan")
            window.open("/Countries/bhutan.html", "_blank");
        else if(content=="bolivia")
            window.open("/Countries/bolivia.html", "_blank");
        else if(content=="bosnia")
            window.open("/Countries/bosnia.html", "_blank");
        else if(content=="brazil")
            window.open("/Countries/brazil.html", "_blank");
        else if(content=="brunie")
            window.open("/Countries/brunie.html", "_blank");
        else if(content=="bulgaria")
            window.open("/Countries/bulgaria.html", "_blank");
        else if(content=="burkina faso")
            window.open("/Countries/burkina faso.html", "_blank");
        else if(content=="burundi")
            window.open("/Countries/burundi.html", "_blank");
        else if(content=="cambodia")
            window.open("/Countries/cambodia.html", "_blank");
        else if(content=="cameroon")
            window.open("/Countries/cameroon.html", "_blank");
        else if(content=="canada")
            window.open("/Countries/canada.html", "_blank");
        else if(content=="cayman islands")
            window.open("/Countries/cayman islands.html", "_blank");
        else if(content=="chad")
            window.open("/Countries/chad.html", "_blank");
        else if(content=="chile")
            window.open("/Countries/chile.html", "_blank");
        else if(content=="china")
            window.open("/Countries/china.html", "_blank");
        else if(content=="colombia")
            window.open("/Countries/colombia.html", "_blank");
        else if(content=="comoros")
            window.open("/Countries/comoros.html", "_blank");
        else if(content=="congo")
            window.open("/Countries/congo.html", "_blank");
        else if(content=="costa rica")
            window.open("/Countries/costa rica.html", "_blank");
        else if(content=="croatia")
            window.open("/Countries/croatia.html", "_blank");
        else if(content=="cuba")
            window.open("/Countries/cuba.html", "_blank");
        else if(content=="curacao")
            window.open("/Countries/curacao.html", "_blank");
        else if(content=="cyprus")
            window.open("/Countries/cyprus.html", "_blank");
        else if(content=="czech republic")
            window.open("/Countries/czech rep.html", "_blank");
        else if(content=="denmark")
            window.open("/Countries/denmark.html", "_blank");
        else if(content=="djibouti")
            window.open("/Countries/djibouti.html", "_blank");
        else if(content=="dominica")
            window.open("/Countries/dominica.html", "_blank");
        else if(content=="dominican republic")
            window.open("/Countries/dominican rep.html", "_blank");
        else if(content=="ecuador")
            window.open("/Countries/ecuador.html", "_blank");
        else if(content=="egypt")
            window.open("/Countries/egypt.html", "_blank");
        else if(content=="el salvador")
            window.open("/Countries/el salvador.html", "_blank");
        else if(content=="england")
            window.open("/Countries/england.html", "_blank");
        else if(content=="equatorial guinea")
            window.open("/Countries/equatorial guinea.html", "_blank");
        else if(content=="eritrea")
            window.open("/Countries/eritrea.html", "_blank");
        else if(content=="estonia")
            window.open("/Countries/estonia.html", "_blank");
        else if(content=="ethiopia")
            window.open("/Countries/ethiopia.html", "_blank");
        else if(content=="falkland islands")
            window.open("/Countries/falkland islands.html", "_blank");
        else if(content=="fiji")
            window.open("/Countries/fiji.html", "_blank");
        else if(content=="finland")
            window.open("/Countries/finland.html", "_blank");
        else if(content=="france")
            window.open("/Countries/france.html", "_blank");
        else if(content=="french guiana")
            window.open("/Countries/french guiana.html", "_blank");
        else if(content=="french polynesia")
            window.open("/Countries/french polynesia.html", "_blank");
        else if(content=="gabon")
            window.open("/Countries/gabon.html", "_blank");
        else if(content=="gambia")
            window.open("/Countries/gambia.html", "_blank");
        else if(content=="georgia")
            window.open("/Countries/georgia.html", "_blank");
        else if(content=="germany")
            window.open("/Countries/germany.html", "_blank");
        else if(content=="ghana")
            window.open("/Countries/ghana.html", "_blank");
        else if(content=="gibraltar")
            window.open("/Countries/gibraltar.html", "_blank");
        else if(content=="greece")
            window.open("/Countries/greece.html", "_blank");
        else if(content=="greenland")
            window.open("/Countries/greenland.html", "_blank");
        else if(content=="grenada")
            window.open("/Countries/grenada.html", "_blank");
        else if(content=="guadeloupe")
            window.open("/Countries/guadeloupe.html", "_blank");
        else if(content=="guatemal")
            window.open("/Countries/guatemal.html", "_blank");
        else if(content=="guinea")
            window.open("/Countries/guinea.html", "_blank");
        else if(content=="guinea-bissau" || content=="guinea bissau")
            window.open("/Countries/guinea-bissau.html", "_blank");
        else if(content=="guyana")
            window.open("/Countries/guyana.html", "_blank");
        else if(content=="haiti")
            window.open("/Countries/haiti.html", "_blank");
        else if(content=="hondurus")
            window.open("/Countries/hondurus.html", "_blank");
        else if(content=="hong kong" || content=="hongkong")
            window.open("/Countries/hong kong.html", "_blank");
        else if(content=="hungary")
            window.open("/Countries/hungary.html", "_blank");
        else if(content=="iceland")
            window.open("/Countries/iceland.html", "_blank");
        else if(content=="india")
            window.open("/Countries/india.html", "_blank");
        else if(content=="indonesia")
            window.open("/Countries/indonesia.html", "_blank");
        else if(content=="iran")
            window.open("/Countries/iran.html", "_blank");
        else if(content=="iraq")
            window.open("/Countries/iraq.html", "_blank");
        else if(content=="ireland")
            window.open("/Countries/ireland.html", "_blank");
        else if(content=="isle of man")
            window.open("/Countries/isle of man.html", "_blank");
        else if(content=="israel")
            window.open("/Countries/israel.html", "_blank");
        else if(content=="italy")
            window.open("/Countries/italy.html", "_blank");
        else if(content=="jamaica")
            window.open("/Countries/jamaica.html", "_blank");
        else if(content=="japan")
            window.open("/Countries/japan.html", "_blank");
        else if(content=="jordan")
            window.open("/Countries/jordan.html", "_blank");
        else if(content=="kazakhstan")
            window.open("/Countries/kazakhstan.html", "_blank");
        else if(content=="kenya")
            window.open("/Countries/kenya.html", "_blank");
        else if(content=="kuwait")
            window.open("/Countries/kuwait.html", "_blank");
        else if(content=="kyrgyzstan")
            window.open("/Countries/kyrgyzstan.html", "_blank");
        else if(content=="laos")
            window.open("/Countries/laos.html", "_blank");
        else if(content=="latvia")
            window.open("/Countries/latvia.html", "_blank");
        else if(content=="lebanon")
            window.open("/Countries/lebnon.html", "_blank");
        else if(content=="lesotho")
            window.open("/Countries/lesotho.html", "_blank");
        else if(content=="liberia")
            window.open("/Countries/liberia.html", "_blank");
        else if(content=="libya")
            window.open("/Countries/libya.html", "_blank");
        else if(content=="liechtenstein")
            window.open("/Countries/liechtenstein.html", "_blank");
        else if(content=="lithuania")
            window.open("/Countries/lithuania.html", "_blank");
        else if(content=="luxembourg")
            window.open("/Countries/luxembourg.html", "_blank");
        else if(content=="macao")
            window.open("/Countries/macao.html", "_blank");
        else if(content=="macedonia")
            window.open("/Countries/macedonia.html", "_blank");
        else if(content=="madagascar")
            window.open("/Countries/madagascar.html", "_blank");
        else if(content=="malawi")
            window.open("/Countries/malawi.html", "_blank");
        else if(content=="malaysia")
            window.open("/Countries/malaysia.html", "_blank");
        else if(content=="maldives")
            window.open("/Countries/maldives.html", "_blank");
        else if(content=="mali")
            window.open("/Countries/mali.html", "_blank");
        else if(content=="malta")
            window.open("/Countries/malta.html", "_blank");
        else if(content=="marshall islands")
            window.open("/Countries/marshall islands.html", "_blank");
        else if(content=="martinique")
            window.open("/Countries/martinique.html", "_blank");
        else if(content=="mauritania")
            window.open("/Countries/mauritania.html", "_blank");
        else if(content=="mauritius")
            window.open("/Countries/mauritius.html", "_blank");
        else if(content=="mexico")
            window.open("/Countries/mexico.html", "_blank");
        else if(content=="micronesia-federated states" || content=="micronesia federated states")
            window.open("/Countries/micronesia-federated states.html", "_blank");
        else if(content=="moldova")
            window.open("/Countries/moldova.html", "_blank");
        else if(content=="monaco")
            window.open("/Countries/monaco.html", "_blank");
        else if(content=="mongolia")
            window.open("/Countries/mongolia.html", "_blank");
        else if(content=="montenegro")
            window.open("/Countries/montenegro.html", "_blank");
        else if(content=="montserrat")
            window.open("/Countries/montserrat.html", "_blank");
        else if(content=="morocco")
            window.open("/Countries/morocco.html", "_blank");
        else if(content=="mozambique")
            window.open("/Countries/mozambique.html", "_blank");
        else if(content=="myanmar")
            window.open("/Countries/myanmar.html", "_blank");
        else if(content=="namibia")
            window.open("/Countries/namibia.html", "_blank");
        else if(content=="nepal")
            window.open("/Countries/nepal.html", "_blank");
        else if(content=="netherlands")
            window.open("/Countries/netherlands.html", "_blank");
        else if(content=="new caledonia")
            window.open("/Countries/new caledonia.html", "_blank");
        else if(content=="new zealand")
            window.open("/Countries/new zealand.html", "_blank");
        else if(content=="nicaragua")
            window.open("/Countries/nicaragua.html", "_blank");
        else if(content=="niger")
            window.open("/Countries/niger.html", "_blank");
        else if(content=="nigeria")
            window.open("/Countries/nigeria.html", "_blank");
        else if(content=="north korea")
            window.open("/Countries/north korea.html", "_blank");
        else if(content=="norway")
            window.open("/Countries/norway.html", "_blank");
        else if(content=="oman")
            window.open("/Countries/oman.html", "_blank");
        else if(content=="pakistan")
            window.open("/Countries/pakistan.html", "_blank");
        else if(content=="palau")
            window.open("/Countries/palau.html", "_blank");
        else if(content=="palestine")
            window.open("/Countries/palestine.html", "_blank");
        else if(content=="panama")
            window.open("/Countries/panama.html", "_blank");
        else if(content=="papua new guinea")
            window.open("/Countries/papua new guinea.html", "_blank");
        else if(content=="paraguay")
            window.open("/Countries/paraguay.html", "_blank");
        else if(content=="peru")
            window.open("/Countries/peru.html", "_blank");
        else if(content=="philippines")
            window.open("/Countries/philippines.html", "_blank");
        else if(content=="poland")
            window.open("/Countries/poland.html", "_blank");
        else if(content=="portugal")
            window.open("/Countries/portugal.html", "_blank");
        else if(content=="qatar")
            window.open("/Countries/qatar.html", "_blank");
        else if(content=="romania")
            window.open("/Countries/romania.html", "_blank");
        else if(content=="russia")
            window.open("/Countries/russia.html", "_blank");
        else if(content=="rwanda")
            window.open("/Countries/rwanda.html", "_blank");
        else if(content=="saint helena")
            window.open("/Countries/saint helena.html", "_blank");
        else if(content=="saint kitts and nevis")
            window.open("/Countries/saint kitts and nevis.html", "_blank");
        else if(content=="saint lucia")
            window.open("/Countries/saint lucia.html", "_blank");
        else if(content=="saint martin")
            window.open("/Countries/saint martin.html", "_blank");
        else if(content=="saint pierre and miquelon")
            window.open("/Countries/saint pierre and miquelon.html", "_blank");
        else if(content=="san marino")
            window.open("/Countries/san marino.html", "_blank");
        else if(content=="sao tom and principe")
            window.open("/Countries/sao tom and principe.html", "_blank");
        else if(content=="saudi arabia")
            window.open("/Countries/saudi arabia.html", "_blank");
        else if(content=="senegal")
            window.open("/Countries/senegal.html", "_blank");
        else if(content=="serbia")
            window.open("/Countries/serbia.html", "_blank");
        else if(content=="seychelles")
            window.open("/Countries/seychelles.html", "_blank");
        else if(content=="sierra leone")
            window.open("/Countries/sierra leone.html", "_blank");
        else if(content=="singapore")
            window.open("/Countries/singapore.html", "_blank");
        else if(content=="slovakia")
            window.open("/Countries/slovakia.html", "_blank");
        else if(content=="slovenia")
            window.open("/Countries/slovenia.html", "_blank");
        else if(content=="solomon islands")
            window.open("/Countries/solomon islands.html", "_blank");
        else if(content=="somalia")
            window.open("/Countries/somalia.html", "_blank");
        else if(content=="south africa")
            window.open("/Countries/south africa.html", "_blank");
        else if(content=="south korea")
            window.open("/Countries/south korea.html", "_blank");
        else if(content=="south sudan")
            window.open("/Countries/south sudan.html", "_blank");
        else if(content=="spain")
            window.open("/Countries/spain.html", "_blank");
        else if(content=="sri lanka")
            window.open("/Countries/sri lanka.html", "_blank");
        else if(content=="sudan")
            window.open("/Countries/sudan.html", "_blank");
        else if(content=="suriname")
            window.open("/Countries/suriname.html", "_blank");
        else if(content=="sweden")
            window.open("/Countries/sweden.html", "_blank");
        else if(content=="switzerland")
            window.open("/Countries/switzerland.html", "_blank");
        else if(content=="syria")
            window.open("/Countries/syria", "_blank");
        else if(content=="taiwan")
            window.open("/Countries/taiwan.html", "_blank");
        else if(content=="tajikistan")
            window.open("/Countries/tajikistan.html", "_blank");
        else if(content=="tanzania")
            window.open("/Countries/tanzania.html", "_blank");
        else if(content=="thailand")
            window.open("/Countries/thailand.html", "_blank");
        else if(content=="timor-leste" || content=="timor leste")
            window.open("/Countries/timor-leste.html", "_blank");
        else if(content=="togo")
            window.open("/Countries/togo.html", "_blank");
        else if(content=="tonga")
            window.open("/Countries/tonga.html", "_blank");
        else if(content=="trinidad and tobago")
            window.open("/Countries/trinidad and tobago.html", "_blank");
        else if(content=="tunisia")
            window.open("/Countries/tunisia.html", "_blank");
        else if(content=="turkey")
            window.open("/Countries/turkey.html", "_blank");
        else if(content=="turks and caicos islands")
            window.open("/Countries/turks and caicos islands.html", "_blank");
        else if(content=="uae" || content=="united arab emirate")
            window.open("/Countries/uae.html", "_blank");
        else if(content=="uganda")
            window.open("/Countries/uganda.html", "_blank");
        else if(content=="uk" || content=="united kingdom")
            window.open("/Countries/uk.html", "_blank");
        else if(content=="ukraine")
            window.open("/Countries/ukraine.html", "_blank");
        else if(content=="uruguay")
            window.open("/Countries/uruguay.html", "_blank");
        else if(content=="usa" || content=="united states of america")
            window.open("/Countries/usa.html", "_blank");
        else if(content=="uzbekistan")
            window.open("/Countries/uzbekistan.html", "_blank");
        else if(content=="vanuatu")
            window.open("/Countries/vanuatu.html", "_blank");
        else if(content=="vatican city")
            window.open("/Countries/vatican city.html", "_blank");
        else if(content=="venezuela")
            window.open("/Countries/venezuela.html", "_blank");
        else if(content=="vietnam")
            window.open("/Countries/vietnam.html", "_blank");
        else if(content=="virgin island-uk")
            window.open("/Countries/virgin island-uk.html", "_blank");
        else if(content=="western sahara")
            window.open("/Countries/western sahara.html", "_blank");
        else if(content=="yemen")
            window.open("/Countries/yemen.html", "_blank");
        else if(content=="zambia")
            window.open("/Countries/zambia.html", "_blank");
    }
    else
    {
        link.addEventListener('click', function(event){
            event.preventDefault();
        
            let content = document.getElementById("content").value.toLowerCase();
            
            if(content=="afganistan")
                window.open("/Countries/afganistan.html", "_blank");
            else if(content=="albania")
                window.open("/Countries/albania.html", "_blank");
            else if(content=="algeria")
                window.open("/Countries/algeria.html", "_blank");
            else if(content=="andorra")
                window.open("/Countries/andorra.html", "_blank");
            else if(content=="angola")
                window.open("/Countries/angola.html", "_blank");
            else if(content=="antigua")
                window.open("/Countries/antigua.html", "_blank");
            else if(content=="argentina")
                window.open("/Countries/argentina.html", "_blank");
            else if(content=="armenia")
                window.open("/Countries/armenia.html", "_blank");
            else if(content=="aruba")
                window.open("/Countries/aruba.html", "_blank");
            else if(content=="australia")
                window.open("/Countries/australia.html", "_blank");
            else if(content=="austria")
                window.open("/Countries/austria.html", "_blank");
            else if(content=="azerbaijan")
                window.open("/Countries/azerbaijan.html", "_blank");
            else if(content=="bahamas")
                window.open("/Countries/bahamas.html", "_blank");
            else if(content=="bahrain")
                window.open("/Countries/bahrain.html", "_blank");
            else if(content=="bangladesh")
                window.open("/Countries/bangladesh.html", "_blank");
            else if(content=="barbados")
                window.open("/Countries/barbados.html", "_blank");
            else if(content=="belarus")
                window.open("/Countries/belarus.html", "_blank");
            else if(content=="belgium")
                window.open("/Countries/belgium.html", "_blank");
            else if(content=="belize")
                window.open("/Countries/belize.html", "_blank");
            else if(content=="benin")
                window.open("/Countries/benin.html", "_blank");
            else if(content=="bermuda")
                window.open("/Countries/bermuda.html", "_blank");
            else if(content=="bhutan")
                window.open("/Countries/bhutan.html", "_blank");
            else if(content=="bolivia")
                window.open("/Countries/bolivia.html", "_blank");
            else if(content=="bosnia")
                window.open("/Countries/bosnia.html", "_blank");
            else if(content=="brazil")
                window.open("/Countries/brazil.html", "_blank");
            else if(content=="brunie")
                window.open("/Countries/brunie.html", "_blank");
            else if(content=="bulgaria")
                window.open("/Countries/bulgaria.html", "_blank");
            else if(content=="burkina faso")
                window.open("/Countries/burkina faso.html", "_blank");
            else if(content=="burundi")
                window.open("/Countries/burundi.html", "_blank");
            else if(content=="cambodia")
                window.open("/Countries/cambodia.html", "_blank");
            else if(content=="cameroon")
                window.open("/Countries/cameroon.html", "_blank");
            else if(content=="canada")
                window.open("/Countries/canada.html", "_blank");
            else if(content=="cayman islands")
                window.open("/Countries/cayman islands.html", "_blank");
            else if(content=="chad")
                window.open("/Countries/chad.html", "_blank");
            else if(content=="chile")
                window.open("/Countries/chile.html", "_blank");
            else if(content=="china")
                window.open("/Countries/china.html", "_blank");
            else if(content=="colombia")
                window.open("/Countries/colombia.html", "_blank");
            else if(content=="comoros")
                window.open("/Countries/comoros.html", "_blank");
            else if(content=="congo")
                window.open("/Countries/congo.html", "_blank");
            else if(content=="costa rica")
                window.open("/Countries/costa rica.html", "_blank");
            else if(content=="croatia")
                window.open("/Countries/croatia.html", "_blank");
            else if(content=="cuba")
                window.open("/Countries/cuba.html", "_blank");
            else if(content=="curacao")
                window.open("/Countries/curacao.html", "_blank");
            else if(content=="cyprus")
                window.open("/Countries/cyprus.html", "_blank");
            else if(content=="czech republic")
                window.open("/Countries/czech rep.html", "_blank");
            else if(content=="denmark")
                window.open("/Countries/denmark.html", "_blank");
            else if(content=="djibouti")
                window.open("/Countries/djibouti.html", "_blank");
            else if(content=="dominica")
                window.open("/Countries/dominica.html", "_blank");
            else if(content=="dominican republic")
                window.open("/Countries/dominican rep.html", "_blank");
            else if(content=="ecuador")
                window.open("/Countries/ecuador.html", "_blank");
            else if(content=="egypt")
                window.open("/Countries/egypt.html", "_blank");
            else if(content=="el salvador")
                window.open("/Countries/el salvador.html", "_blank");
            else if(content=="england")
                window.open("/Countries/england.html", "_blank");
            else if(content=="equatorial guinea")
                window.open("/Countries/equatorial guinea.html", "_blank");
            else if(content=="eritrea")
                window.open("/Countries/eritrea.html", "_blank");
            else if(content=="estonia")
                window.open("/Countries/estonia.html", "_blank");
            else if(content=="ethiopia")
                window.open("/Countries/ethiopia.html", "_blank");
            else if(content=="falkland islands")
                window.open("/Countries/falkland islands.html", "_blank");
            else if(content=="fiji")
                window.open("/Countries/fiji.html", "_blank");
            else if(content=="finland")
                window.open("/Countries/finland.html", "_blank");
            else if(content=="france")
                window.open("/Countries/france.html", "_blank");
            else if(content=="french guiana")
                window.open("/Countries/french guiana.html", "_blank");
            else if(content=="french polynesia")
                window.open("/Countries/french polynesia.html", "_blank");
            else if(content=="gabon")
                window.open("/Countries/gabon.html", "_blank");
            else if(content=="gambia")
                window.open("/Countries/gambia.html", "_blank");
            else if(content=="georgia")
                window.open("/Countries/georgia.html", "_blank");
            else if(content=="germany")
                window.open("/Countries/germany.html", "_blank");
            else if(content=="ghana")
                window.open("/Countries/ghana.html", "_blank");
            else if(content=="gibraltar")
                window.open("/Countries/gibraltar.html", "_blank");
            else if(content=="greece")
                window.open("/Countries/greece.html", "_blank");
            else if(content=="greenland")
                window.open("/Countries/greenland.html", "_blank");
            else if(content=="grenada")
                window.open("/Countries/grenada.html", "_blank");
            else if(content=="guadeloupe")
                window.open("/Countries/guadeloupe.html", "_blank");
            else if(content=="guatemal")
                window.open("/Countries/guatemal.html", "_blank");
            else if(content=="guinea")
                window.open("/Countries/guinea.html", "_blank");
            else if(content=="guinea-bissau" || content=="guinea bissau")
                window.open("/Countries/guinea-bissau.html", "_blank");
            else if(content=="guyana")
                window.open("/Countries/guyana.html", "_blank");
            else if(content=="haiti")
                window.open("/Countries/haiti.html", "_blank");
            else if(content=="hondurus")
                window.open("/Countries/hondurus.html", "_blank");
            else if(content=="hong kong" || content=="hongkong")
                window.open("/Countries/hong kong.html", "_blank");
            else if(content=="hungary")
                window.open("/Countries/hungary.html", "_blank");
            else if(content=="iceland")
                window.open("/Countries/iceland.html", "_blank");
            else if(content=="india")
                window.open("/Countries/india.html", "_blank");
            else if(content=="indonesia")
                window.open("/Countries/indonesia.html", "_blank");
            else if(content=="iran")
                window.open("/Countries/iran.html", "_blank");
            else if(content=="iraq")
                window.open("/Countries/iraq.html", "_blank");
            else if(content=="ireland")
                window.open("/Countries/ireland.html", "_blank");
            else if(content=="isle of man")
                window.open("/Countries/isle of man.html", "_blank");
            else if(content=="israel")
                window.open("/Countries/israel.html", "_blank");
            else if(content=="italy")
                window.open("/Countries/italy.html", "_blank");
            else if(content=="jamaica")
                window.open("/Countries/jamaica.html", "_blank");
            else if(content=="japan")
                window.open("/Countries/japan.html", "_blank");
            else if(content=="jordan")
                window.open("/Countries/jordan.html", "_blank");
            else if(content=="kazakhstan")
                window.open("/Countries/kazakhstan.html", "_blank");
            else if(content=="kenya")
                window.open("/Countries/kenya.html", "_blank");
            else if(content=="kuwait")
                window.open("/Countries/kuwait.html", "_blank");
            else if(content=="kyrgyzstan")
                window.open("/Countries/kyrgyzstan.html", "_blank");
            else if(content=="laos")
                window.open("/Countries/laos.html", "_blank");
            else if(content=="latvia")
                window.open("/Countries/latvia.html", "_blank");
            else if(content=="lebanon")
                window.open("/Countries/lebnon.html", "_blank");
            else if(content=="lesotho")
                window.open("/Countries/lesotho.html", "_blank");
            else if(content=="liberia")
                window.open("/Countries/liberia.html", "_blank");
            else if(content=="libya")
                window.open("/Countries/libya.html", "_blank");
            else if(content=="liechtenstein")
                window.open("/Countries/liechtenstein.html", "_blank");
            else if(content=="lithuania")
                window.open("/Countries/lithuania.html", "_blank");
            else if(content=="luxembourg")
                window.open("/Countries/luxembourg.html", "_blank");
            else if(content=="macao")
                window.open("/Countries/macao.html", "_blank");
            else if(content=="macedonia")
                window.open("/Countries/macedonia.html", "_blank");
            else if(content=="madagascar")
                window.open("/Countries/madagascar.html", "_blank");
            else if(content=="malawi")
                window.open("/Countries/malawi.html", "_blank");
            else if(content=="malaysia")
                window.open("/Countries/malaysia.html", "_blank");
            else if(content=="maldives")
                window.open("/Countries/maldives.html", "_blank");
            else if(content=="mali")
                window.open("/Countries/mali.html", "_blank");
            else if(content=="malta")
                window.open("/Countries/malta.html", "_blank");
            else if(content=="marshall islands")
                window.open("/Countries/marshall islands.html", "_blank");
            else if(content=="martinique")
                window.open("/Countries/martinique.html", "_blank");
            else if(content=="mauritania")
                window.open("/Countries/mauritania.html", "_blank");
            else if(content=="mauritius")
                window.open("/Countries/mauritius.html", "_blank");
            else if(content=="mexico")
                window.open("/Countries/mexico.html", "_blank");
            else if(content=="micronesia-federated states" || content=="micronesia federated states")
                window.open("/Countries/micronesia-federated states.html", "_blank");
            else if(content=="moldova")
                window.open("/Countries/moldova.html", "_blank");
            else if(content=="monaco")
                window.open("/Countries/monaco.html", "_blank");
            else if(content=="mongolia")
                window.open("/Countries/mongolia.html", "_blank");
            else if(content=="montenegro")
                window.open("/Countries/montenegro.html", "_blank");
            else if(content=="montserrat")
                window.open("/Countries/montserrat.html", "_blank");
            else if(content=="morocco")
                window.open("/Countries/morocco.html", "_blank");
            else if(content=="mozambique")
                window.open("/Countries/mozambique.html", "_blank");
            else if(content=="myanmar")
                window.open("/Countries/myanmar.html", "_blank");
            else if(content=="namibia")
                window.open("/Countries/namibia.html", "_blank");
            else if(content=="nepal")
                window.open("/Countries/nepal.html", "_blank");
            else if(content=="netherlands")
                window.open("/Countries/netherlands.html", "_blank");
            else if(content=="new caledonia")
                window.open("/Countries/new caledonia.html", "_blank");
            else if(content=="new zealand")
                window.open("/Countries/new zealand.html", "_blank");
            else if(content=="nicaragua")
                window.open("/Countries/nicaragua.html", "_blank");
            else if(content=="niger")
                window.open("/Countries/niger.html", "_blank");
            else if(content=="nigeria")
                window.open("/Countries/nigeria.html", "_blank");
            else if(content=="north korea")
                window.open("/Countries/north korea.html", "_blank");
            else if(content=="norway")
                window.open("/Countries/norway.html", "_blank");
            else if(content=="oman")
                window.open("/Countries/oman.html", "_blank");
            else if(content=="pakistan")
                window.open("/Countries/pakistan.html", "_blank");
            else if(content=="palau")
                window.open("/Countries/palau.html", "_blank");
            else if(content=="palestine")
                window.open("/Countries/palestine.html", "_blank");
            else if(content=="panama")
                window.open("/Countries/panama.html", "_blank");
            else if(content=="papua new guinea")
                window.open("/Countries/papua new guinea.html", "_blank");
            else if(content=="paraguay")
                window.open("/Countries/paraguay.html", "_blank");
            else if(content=="peru")
                window.open("/Countries/peru.html", "_blank");
            else if(content=="philippines")
                window.open("/Countries/philippines.html", "_blank");
            else if(content=="poland")
                window.open("/Countries/poland.html", "_blank");
            else if(content=="portugal")
                window.open("/Countries/portugal.html", "_blank");
            else if(content=="qatar")
                window.open("/Countries/qatar.html", "_blank");
            else if(content=="romania")
                window.open("/Countries/romania.html", "_blank");
            else if(content=="russia")
                window.open("/Countries/russia.html", "_blank");
            else if(content=="rwanda")
                window.open("/Countries/rwanda.html", "_blank");
            else if(content=="saint helena")
                window.open("/Countries/saint helena.html", "_blank");
            else if(content=="saint kitts and nevis")
                window.open("/Countries/saint kitts and nevis.html", "_blank");
            else if(content=="saint lucia")
                window.open("/Countries/saint lucia.html", "_blank");
            else if(content=="saint martin")
                window.open("/Countries/saint martin.html", "_blank");
            else if(content=="saint pierre and miquelon")
                window.open("/Countries/saint pierre and miquelon.html", "_blank");
            else if(content=="san marino")
                window.open("/Countries/san marino.html", "_blank");
            else if(content=="sao tom and principe")
                window.open("/Countries/sao tom and principe.html", "_blank");
            else if(content=="saudi arabia")
                window.open("/Countries/saudi arabia.html", "_blank");
            else if(content=="senegal")
                window.open("/Countries/senegal.html", "_blank");
            else if(content=="serbia")
                window.open("/Countries/serbia.html", "_blank");
            else if(content=="seychelles")
                window.open("/Countries/seychelles.html", "_blank");
            else if(content=="sierra leone")
                window.open("/Countries/sierra leone.html", "_blank");
            else if(content=="singapore")
                window.open("/Countries/singapore.html", "_blank");
            else if(content=="slovakia")
                window.open("/Countries/slovakia.html", "_blank");
            else if(content=="slovenia")
                window.open("/Countries/slovenia.html", "_blank");
            else if(content=="solomon islands")
                window.open("/Countries/solomon islands.html", "_blank");
            else if(content=="somalia")
                window.open("/Countries/somalia.html", "_blank");
            else if(content=="south africa")
                window.open("/Countries/south africa.html", "_blank");
            else if(content=="south korea")
                window.open("/Countries/south korea.html", "_blank");
            else if(content=="south sudan")
                window.open("/Countries/south sudan.html", "_blank");
            else if(content=="spain")
                window.open("/Countries/spain.html", "_blank");
            else if(content=="sri lanka")
                window.open("/Countries/sri lanka.html", "_blank");
            else if(content=="sudan")
                window.open("/Countries/sudan.html", "_blank");
            else if(content=="suriname")
                window.open("/Countries/suriname.html", "_blank");
            else if(content=="sweden")
                window.open("/Countries/sweden.html", "_blank");
            else if(content=="switzerland")
                window.open("/Countries/switzerland.html", "_blank");
            else if(content=="syria")
                window.open("/Countries/syria", "_blank");
            else if(content=="taiwan")
                window.open("/Countries/taiwan.html", "_blank");
            else if(content=="tajikistan")
                window.open("/Countries/tajikistan.html", "_blank");
            else if(content=="tanzania")
                window.open("/Countries/tanzania.html", "_blank");
            else if(content=="thailand")
                window.open("/Countries/thailand.html", "_blank");
            else if(content=="timor-leste" || content=="timor leste")
                window.open("/Countries/timor-leste.html", "_blank");
            else if(content=="togo")
                window.open("/Countries/togo.html", "_blank");
            else if(content=="tonga")
                window.open("/Countries/tonga.html", "_blank");
            else if(content=="trinidad and tobago")
                window.open("/Countries/trinidad and tobago.html", "_blank");
            else if(content=="tunisia")
                window.open("/Countries/tunisia.html", "_blank");
            else if(content=="turkey")
                window.open("/Countries/turkey.html", "_blank");
            else if(content=="turks and caicos islands")
                window.open("/Countries/turks and caicos islands.html", "_blank");
            else if(content=="uae" || content=="united arab emirate")
                window.open("/Countries/uae.html", "_blank");
            else if(content=="uganda")
                window.open("/Countries/uganda.html", "_blank");
            else if(content=="uk" || content=="united kingdom")
                window.open("/Countries/uk.html", "_blank");
            else if(content=="ukraine")
                window.open("/Countries/ukraine.html", "_blank");
            else if(content=="uruguay")
                window.open("/Countries/uruguay.html", "_blank");
            else if(content=="usa" || content=="united states of america")
                window.open("/Countries/usa.html", "_blank");
            else if(content=="uzbekistan")
                window.open("/Countries/uzbekistan.html", "_blank");
            else if(content=="vanuatu")
                window.open("/Countries/vanuatu.html", "_blank");
            else if(content=="vatican city")
                window.open("/Countries/vatican city.html", "_blank");
            else if(content=="venezuela")
                window.open("/Countries/venezuela.html", "_blank");
            else if(content=="vietnam")
                window.open("/Countries/vietnam.html", "_blank");
            else if(content=="virgin island-uk")
                window.open("/Countries/virgin island-uk.html", "_blank");
            else if(content=="western sahara")
                window.open("/Countries/western sahara.html", "_blank");
            else if(content=="yemen")
                window.open("/Countries/yemen.html", "_blank");
            else if(content=="zambia")
                window.open("/Countries/zambia.html", "_blank");
        });
    }
});

