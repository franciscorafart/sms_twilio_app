//Script to extract message from DOM and send Ajax request to app API
let $sendbutton = document.getElementById("send")

  $sendbutton.addEventListener('click',()=>{


  let message = $('#smsmessage').val()

  //Ajax request to API. To send message
  fetch('sendMessage',{

      method:'post',//this has to be post
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        //message passed in the body of Ajax request
        'mess': message
      })

    })
    .then(response => {
      console.log(response)
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
    })
  })
