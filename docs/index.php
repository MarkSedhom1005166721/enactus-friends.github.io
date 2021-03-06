<html lang="en">
	<head>
	    <title>Enactus</title>
	    <link rel="stylesheet" href="style.css" type="text/css">
	    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	</head>
	<body>

		<script type="text/javascript">
			xmlHttp=null;
			
			/*
			xmlHttp.open(): Sets up a new request to a server.
			xmlHttp.send(): Sends a request to a server.
			xmlHttp.abort(): Bails out of the current request.
			xmlHttp.readyState: Provides the current HTML ready state.
			xmlHttp.responseText: The text that the server sends back to respond to a request.
			xmlHttp.status: can be any of ...  http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
			xmlHttp.status==200 means OK
					400 means URL does not exist
					404 not found
					500 internal server error
			*/
			
			function yes() {
				xmlHttp=GetXmlHttpObject();
				if (xmlHttp==null) {
					 alert ("Browser does not support HTTP Request");
					 return;
				 }
			
				var url="api/test.py";
				// url=url+"?name=" + param;
				xmlHttp.onreadystatechange=stateChanged ;
				xmlHttp.open("GET",url,true); // arg1=GET/POST, arg2=url, arg3=isAsynchronous
				xmlHttp.send(null); // null is replaced with the body of POST
			}
			
			
			function stateChanged() { 
				// alert("state="+xmlHttp.readyState);
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") { 
					 document.getElementById("helloMessage").innerHTML=xmlHttp.responseText ;
				 } 
				/*
				possible values for xmlHttp.readyState
				0	The request is not initialized
				1	The request has been set up
				2	The request has been sent
				3	The request is in process
				4	The request is complete
				*/
			}
			
			function GetXmlHttpObject() {
				var xmlHttp=null;
				try {
					// Firefox, Opera 8.0+, Safari
					xmlHttp=new XMLHttpRequest();
				} catch (e) {
					//Internet Explorer
					try {
						xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
					} catch (e)  {
						xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
					}
				}
				return xmlHttp;
			}
			</script>
		<form name="myForm">
			Name: <input type="text" name="username1" /> 
			<input type="button" value="Press me" onclick="yes()"; />
			<br/>
		</form>
		<div style="border:2px solid black;" id="helloMessage"> &nbsp; </div>

		<p>Sometimes I just wanna cry :')</p>
	</body>
</html>