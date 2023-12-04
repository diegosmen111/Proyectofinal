from django.shortcuts
import render 
from django.http
import HttpRespnse
from .models 
import Resultado , Jugador , Foto

//aca pondremos la definicion de la vista de la pagina para el index

def index(request):
//obtendremos los ultimos resultados de los jugadores destacadsos y las fotos de la fecha 
ulti_result=Resultado.objects.order_by('-fecha')[:5]
jugador_destacados=Jugador.objects.filter(destacado=true)
fotos_de_la_fecha=Foto.objects.order_by('-fecha')[:3]
//creamos el contexto para pasar a la plantilla
	contexto = {
		'ulti_result':
		ulti_result,
			'jugador_destacados':
			jugador_destacados,
				'fotos_de_la_fecha':
				fotos_de_la_fecha,
	}
//renderizamos la plantilla index.html con el contexto
	return render(request,'index.html',contexto)