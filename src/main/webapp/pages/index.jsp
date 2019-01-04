<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
	<title>Home</title>
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/highcharts.js"></script>
	<script type="text/javascript" src="js/execute.js"></script>
	<link rel="stylesheet" type="text/css" href="style/style.css">
	<script type="text/javascript"></script>
</head>
<body>
	<div id="section1">
		<h2>Modules</h2>
		<hr>
		<label for="ENR062A3">
			<input type="checkbox" name="ENR062A3" id="ENR062A3"> ENR062A3
		</label>
		<br>
		<label for="ENR04CA0">
			<input type="checkbox" name="ENR04CA0" id="ENR04CA0"> ENR04CA0
		</label>
		<br>
		<label for="ENR077A9">
			<input type="checkbox" name="ENR077A9" id="ENR077A9"> ENR077A9
		</label>
	</div>
	<div id="section2">
		<div id="container" ></div>
		<hr id="line">
		<div id="container2"></div>
	</div>
</body>
</html>