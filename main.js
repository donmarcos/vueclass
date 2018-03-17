new Vue({
  el: '#root',
    data() {
    return {
      msg: 'Hello World!',
      link: 'http://www.google.com',
      finishedLink: '<a href="http://google.com">Google</a>',
      counter: 0,
      x: 0,
      y: 0,
    }
  },
   methods: {

       sayHello: function (){
         this.msg = "Hello! dude";
       	 return this.msg;
       },
       increase: function (step, event) {
       	 this.counter += step;
       },
       updateCorrdinates: function(event){
        this.x = event.clientX;
        this.y = event.clientY;

       },
       alertMe: function(){
       	  alert('alert here');
       }
    }
})