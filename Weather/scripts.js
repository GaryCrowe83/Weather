$(document).ready(function()
	{	
		$("#getForecast").click(function()
			{
				var city = $("#city").val();
				var key = 'ae3723984918e29156906ffa2182bf02';
				var days = $("#days").val();
				var mod = 'json';
				var week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var d = new Date();
				var dayName = d.toString().split(' ')[0];
				var day = week.indexOf(dayName);
				var date = d.getDate();
				var month  = d.getMonth();

				$.ajax(
				{
					url: 'http://api.openweathermap.org/data/2.5/forecast/daily' + '?' + 'q=' + city + '&' + 'cnt=' + days + '&' + 'appid=' + key + '&' + 'units=metric',
					dataType:'json',
					type:'GET',
					data: {q: city, mode: mod, cnt: days, appid: key, units: 'metric'},


					success: function(data)
					{
						var forecast = '';

						for(var i=0; i<days; i++)
						{
							if(month == 1 && date == 29)
							{
								month = 2;
								date = 1;
							} else if((month==8||month==3||month==5||month==10) && date==31)
							{
								month = month + 1;
								console.log("the month is now " + month);
								date = 1;
							}else if(month==11 && date==32)
							{
								month = 0;
								date = 1;
							}else{
								//console.log();
							}

							forecast += '<div class="card" style="background=green"><br><p><b>' + data.city.name + ' | ' + week[(day+i)%7] + ' ' + months[month] + ' ' + date +'</b><br><br><img src=' + data.list[i].weather[0].icon + '.png></p><br>' + data.list[i].temp.max + '&deg;C ' + ' | ' + data.list[i].weather[0].main + ', ' + data.list[i].weather[0].description + '</div><br><br>';
							date = date + 1;

						$('#showForecast').html(forecast);
						}
					}
					
				});
			});


		function show()
		{
			document.getElementById(showForecast).style.visibility='visible';
		}

	}
);

// function show()
// {
// 	document.getElementById(showForecast).style.visibility='visible';
// }

