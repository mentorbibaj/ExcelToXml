<!DOCTYPE HTML>
<html>
   <head>
      <title>Excel-to-XML</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta charset="UTF-8" />
      <script>
         addEventListener("load", function () {
         	setTimeout(hideURLbar, 0);
         }, false);
         
         function hideURLbar() {
         	window.scrollTo(0, 1);
         }
      </script>
       <script src="js/jquery.min.js"></script>
      <script src="js/main.js"></script>
      <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
      <link href="//fonts.googleapis.com/css?family=Ubuntu:400,500" rel="stylesheet">
   </head>
   <body>
      <h1 class="header-w3ls">Excel to XML</h1>
      <div class="porduct-order-agile">
         <p id="errorOrSuccess" style="text-align: center;"></p>
         <div>
            <div id="loader"></div>
            <div class="form-group">
               <p>Columns:</p>
               <input type="number" id="cols" name="cols" value="1" max="702" min="1" placeholder="Excel columns">
               <button class="btn btn-primary" id="details" style="background-color: #f1b970;">Fill Details</button>
            </div>
         </div>
         <form id="container" action="excel.php" method="GET">
            <div id="inputs" class="form-group">
            </div>
         </form>
      </div>
      <div class="copy">
         <p>&copy; 2019 | <a href="https://codecanyon.net/user/rotnem">Rotnem</a></p>
      </div>
   </body>
</html>