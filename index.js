$(function(){
	$('[data-toggle="tooltip"]').tooltip()
})

function ajax(){
			var ajaxRes = new XMLHttpRequest()
			ajaxRes.onreadystatechange = function(){
				if (ajaxRes.readyState == 4 && ajaxRes.status == 200) {
					document.getElementById("preguntas").innerHTML=ajaxRes.responseText
				}
			}
			ajaxRes.open("GET","Preguntas.html",true)
			//ajaxRes.open("GET","texto.txt",true)
			ajaxRes.send()
		}