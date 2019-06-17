<!DOCTYPE html>
<html>
	<head>
		<title>Weather Forecast</title>
		<script
         	src="https://code.jquery.com/jquery-3.4.1.min.js"
  			integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  			crossorigin="anonymous">		
  		</script>
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>	
  		<script src="scripts.js"></script>
  		<!-- <script src="styles.js"></script> -->
	</head>

	<body>
		<div>
			Please enter a city
			<br>
			<input type="text" id="city"></input><br><br>

			<div id="unit">
				<input type="radio" id="metric" value="mertic" name="unit" checked>
				<label for="Ceslsius">Ceslsius</label><br>
				<input type="radio" id="imperial" value="imperial" name="unit">
				<label for="Fahrenheit">Fahrenheit</label><br><br>
			</div>

			<button id="getForecast">Get Forecast</button><br><br>
			<div id="showForecast"></div>>
		</div>
	</body>
</html>