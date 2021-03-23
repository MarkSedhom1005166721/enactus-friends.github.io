<!DOCTYPE html>
<html lang="en">
        <head>
		<meta charset="utf-8">
                <script src="jquery-3.5.1.min.js"></script>
                <script>
			// See the JQuery documentation at ... 
			// http://api.jquery.com/
			// http://learn.jquery.com/
			// See my JQuery and Ajax notes 


			

			// show and hide the playForm and the newGameForm
			function showPlayForm(value){
				if(value){
					$("#playForm").show();
					$("#newGameForm").hide();
				}else{
					$("#playForm").hide();
					$("#newGameForm").show();
				}
			}

			// User requests a new game
			function newGame(){
				// Ajax request goes here...
				$.getJSON("newGame.php", {}, function(data){
					if(data['status']=='ok'){
						showPlayForm(true);
						$("#status").html("");
						getHistory();
					}else{
						$("#status").html('Error');
						
					}
				});

			}
				
			// User makes a guess of param at the secret number
			function guess(param){
				// Ajax request goes here...
				$.getJSON("guess.php", {guess: param}, function(data){
					if(data['status']=='ok'){
						$("#guessText").val("");
						$("#status").html("");
						getHistory();
					}else{
						$("#status").html(data['status']);
					}
				});

			}
	
			// Request the history from the server
			function getHistory(){
				// Ajax request goes here...
				
				
				$.getJSON("getHistory.php", {}, function(data){
					var comment="";
					var html="";
					var isWon=false;
					if(data['status']=='ok'){
						for(var i=0;i<data['history'].length;i++){
							if(data['history'][i].comparison==">")comment="too large";
							if(data['history'][i].comparison=="<")comment="too small";	
							if(data['history'][i].comparison=="="){
								isWon=true;
								comment="correct";
							}
							html+="<br/> Guess "+(i+1)+": "+data['history'][i].guess+" was "+comment;
						}
						
						$('#history').html(html);
						if(isWon)showPlayForm(false);
						$("#status").html("");
					
					}else{
						$("#status").html(data['status']);
					}
				});


			}

			

			// This is executed when the document is ready (the DOM for this document is loaded)
			$(function(){
				// Setup all events here and display the appropriate UI
				showPlayForm(false);
				
				
				
				$('#newGameButton').on('click',function(){
					newGame();	
				});

				$('#guessButton').on('click',function(){
					guess($('#guessText').val());
				});


			});

		</script>
	</head>
	<!-- DO NOT ALTER ANY OF THE HTML BELOW -->
	<body>
		<h3>Guess Game</h3>
		<div id="history"> </div>
		<form id="playForm"> 
			<input type="text" id="guessText" /> 
			<input id="guessButton" type="button" value="guess" />
		</form>
		<form id="newGameForm">
			<input id="newGameButton" type="button" value="new game" />
		</form>
		<div id="status"></div>
	</body>
</html>
