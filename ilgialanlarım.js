const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');

      burger.addEventListener('click',()=>{
          //Toggle Nav
        nav.classList.toggle('nav-active');

         //Animate Links
        navLinks.forEach((link,index) => {

          if(link.style.animation){
            link.style.animation ='';
            }
          else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/ 7}s`;
            }
      });
        //Burger Animation
        burger.classList.toggle('toggle');
      
    });
     
}
navSlide();

import { MY_API_KEY } from './config.js';

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.log(err);
});

/*//GET İsteği
fetch("https://api.harvardartmuseums.org/RESOURCE_TYPE")
  .then(response => response.json())//parse json data
  .then(function(todos){
    todos.forEach(todo => {
        console.log(todo.title);//Başlıkları console' a yazdırma
    });
})

let payload = {
    title: "Blog Title",
    body: "lorem ipsum", 
    userId:1
  }
  
 /* fetch('https://api.harvardartmuseums.org/RESOURCE_TYPE', {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err));

  //META VERİLER
fetch('https://jsonplaceholder.typicode.com/posts/1').then(function(response) {  
    console.log(response.headers.get('Content-Type'));  
    console.log(response.headers.get('Date'));
    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
});*/