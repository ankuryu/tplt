// test axios
//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
//import Axios from 'axios' ;
alert("all is well")
$(document).ready( function() {
	$('#btn1').click( function() {
          tst_it()
		$('#test').html("Done")
	})



});

function tst_it() {
axios(
 {url: 'http//localhost:8000/quote/api/add',
   methods: 'post',
   data: {qno:"",
          qdt:"",
          pname:"",
          paddr:""
	}
 })
.then( function(response) {
     console.log(response);
})
.catch(function(error) {
    console.log(error);
});
}

