<!DOCTYPE html>
<html>
  <head>
    <title>Application - Project Telecine - Dustin Moore</title>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
    <link href="http://fonts.googleapis.com/css?family=Alegreya+SC:400" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="styles/normalize.css" /> 
    <link type="text/css" rel="stylesheet" href="styles/main.css" /> 
    <script type="text/javascript" src="js/modernizr.min.js"></script>
    <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
  </head>
  <body>    
    <div id="container">
      <header>
        <h1>Project Telecine</h1>
        <h2>Film to Video on the cheap</h2>
      </header>
      <nav>
        <ul>
          <?php
            $class = 'class="selected"';
            $page = $_SERVER["PHP_SELF"];
          ?>
          <li><a <?php echo(preg_match('/index.php/i',       $page) ? $class : '') ?>href="index.php">Introduction</a></li>
          <li><a <?php echo(preg_match('/operation.php/i',   $page) ? $class : '') ?>href="operation.php">Theory of Operation</a></li>
          <li><a <?php echo(preg_match('/application.php/i', $page) ? $class : '') ?>href="application.php">Application</a></li>
          <li><a <?php echo(preg_match('/problems.php/i',    $page) ? $class : '') ?>href="problems.php">Problems</a></li>
          <li><a <?php echo(preg_match('/conclusion.php/i',  $page) ? $class : '') ?>href="conclusion.php">Conclusion</a></li>
        </ul>
      </nav> 
