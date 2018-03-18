new Vue({
  el: '#root',
    data() {
    return {
      counter: 0,
      secondCounter: 0,
      name: 'Max',
    }
  },
   computed: {
      output: function (){
        return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
      }
   },
   methods: {
       result: function (){
         return this.counter > 5 ? 'Greater 5' : 'Smaller than 5'
       }
       
    }
})