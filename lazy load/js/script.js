
//substituir imagem pesada pela mesma mais leve 
const image = document.querySelectorAll(".image-container img");

//Criando o Lazy loading
const observer = new IntersectionObserver((entries, observer)=>{
     entries.forEach(entry => {
        //se img esta sendo observada
        if(!entry.isIntersecting) return
        //se não estiver
        const image = entry.target
        //substituição de uma img para outra(elemento html,img)
         image.src = image.src.replace("&w=1000&", "&w=0&");

         //para o observe servir apenas uma vez e a imagem mudar apenas uma vez 
         observer.unobserve(image);
     });

},{});


image.forEach((image) => {
    observer.observe(image);
});