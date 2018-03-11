/*
function myfucntion (argument) {
	alert('Votre argument : ' + argument);
}

myfucntion( prompt('Que souhaitez vous passer en argument à la fonction ? '));*/

/*function moar(first, second)
{
	alert('votre premier argument : ' + first);
	alert('votre deuxieme argument : ' + second);
}

moar(
	prompt('Que souhaitez vous passer en argument à la fonction ? '),
    prompt('Que souhaitez vous passer en argument à la fonction ? ')
    );*/

/*function prompt2(text, allowcancel)
{
	if (typeof allowcancel === 'undefined')
	{
		allowcancel = false;
	}
}*/

//prompt2('entrez quelque chose :');

var sayhello =  function()
{
	alert('Bonjour !!');
}

sayhello();

/*var myarray_a = [42,12,6,3];
var myarray_b = [42, 'sebastien', 12, 'Laurence'];

alert(' tableau à l\'etat initiale :' + myarray_b);

// ajouter des elments à la tète du tableau 
myarray_b.push('pauline', 'guillaume');

alert(' tableau apres ajout en tète : '+ myarray_b);

//ajouter des elements à la queue dy tableau 
myarray_b.unshift('Ludovic');

alert(' tableau apres ajout en queue : '+ myarray_b);

//retirer ou supprimer  un element en queue

myarray_b.shift()

alert('tableau apres avoir supprimer la queue : ' + myarray_b );

// supprimer un element en tète du tableau

myarray_b.pop();

alert('tableau apres avoir supprimer l\'entete : ' + myarray_b );*/

 // use split to transform string to arrays

/*
alert(cousinsArray);

// use join to transform an array to a string

cousinsString = cousinsArray.join('*');

alert(cousinsString);


for (var i =0, c= cousinsArray.length; i< c ; i++)
{
	alert(cousinsArray[i]);
}

var family = 
{
	me: 'herve',
	sister: 'phanie',
	mother: 'ella',
	father: 'germain'
};

alert(family.sister);
alert(family['mother']);

family.ant = 'viviane';
var id ='ant';
alert(family[id]);

for (var id in family)
{
	alert(family[id]);
}

var nicks = [], nick;

while (true)
{
	nick = prompt('entrez un prénom : ');

	if (nick)
	{
		nicks.push(nick);
	}
	else break;
}

if (nicks.length) alert(nicks);
else alert('there is no item in this array' );*/

//*********************** Tp convertir en toute lettre (not so bad) *************************** 

var usrnb =0;
do  usrnb=prompt('Veuillez saisir un nombre entre 0 et 999'); while(isNaN(usrnb|| usrnb <0 || 999 < usrnb));
var unit =0;
var decade=0, hundred=0;

function decompose(numbertodecompose)
{
   unit = numbertodecompose % 10;
   if (numbertodecompose > 100)
   {
   	  decade = ((numbertodecompose - unit )%100)/10 ;
      hundred =  (numbertodecompose -((decade*10)+unit))/100;
   }
   else 
   	{
   		decade =  (numbertodecompose-unit)/10;
   	}

 alert('unite : ' + unit + ' dizaine : ' + decade + ' centaine : '+ hundred );
}

var digit=['un','deux','trois','quatre', 'cinq', 'six', 'sept','huit', 'neuf'];
var dizaine=['dix', 'vingt', 'trente','quarante', 'cinquante','soixante'];
var special=['onze', 'douze','treize','quartoze', 'quinze','seize','dix-sept', 'dix-huit','dix-neuf'];

function converter(unit, decade, hundred)
{
   var numberconverted; 
   if (usrnb > 100)
   {
   	  if (hundred)
      {
      	//alert(hundred);
     	if (hundred === 1) numberconverted = 'cent';
   	    else numberconverted = digit[hundred-1] + ' cent';
      }

      if (decade)
      {
      	if (decade === 7) numberconverted +=' '+dizaine[5]+'-';
      	if (decade === 8 || decade === 9) numberconverted +=' '+digit[3]+'-'+dizaine[1]+'-';
      	else numberconverted +=' '+dizaine[decade-1];
      	alert(numberconverted);
      }
      if (unit)
      {
      	if (decade === 7 || decade === 8 || decade === 9) numberconverted +=' '+special[unit-1];
      	else numberconverted +=' '+digit[unit-1];
      	a
      }
   }
   else if (usrnb >10 && usrnb <100)
   {
   	   if (decade)
      {
      	if (decade === 1) ;
      	if (decade === 7) numberconverted = dizaine[5] +'-';
      	if (decade === 8 || decade === 9) numberconverted =  digit[3]+'-'+dizaine[1]+'-';
      	else numberconverted = dizaine[decade-1];
      }
      if (unit)
      {
      	if (decade === 7 || decade === 8 || decade === 9 || decade === 1) numberconverted +=' '+special[unit-1];
      	else numberconverted +=' '+digit[unit-1];
      }
   }
   else numberconverted = digit[unit -1];

     return numberconverted;
}

decompose(usrnb);

var toshow = converter(unit, decade, hundred);

alert(toshow);
