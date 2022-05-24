document.addEventListener('alpine:init', function(){
  Alpine.data('clothing',()=>{

    return{
        init(){
            fetch('api/garments')
			.then(r => r.json())
			.then(garmentsData => this.garments = garmentsData.data)
        },
        garments:[]
        
    }
    
   
  })
 
});





