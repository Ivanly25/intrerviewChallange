// if the modal button is clicked hide all h1 tags 


$(() => {
// $('.h1').show()
//$('#modal').on('click', ('h1').hide())

// $(document).ready(function(){
//   $('h1').show()
//   $('#modal').click(function(){
//     $('h1').toggle();
//   })
// })

// var flip = 0
$('#modal').click(function () {
	$('h1').toggle("slow")
})
$('#btn').click(function () {
    $('h1').show()
})

})
// $('#modal').onClick($('h1').css("display", "none"))
// # button is called # modal
