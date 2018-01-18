$(document).ready(function(){

  $.ajax({
    url: 'http://rest.learncode.academy/api/adamws33/friends', 
    type: 'GET'
  }).done( (data)=>{
    data.forEach( (eachFriend)=>{
      let name = `${eachFriend.first} ${eachFriend.last}`;
      let newElement= createFriend(name);
      $('#friend-list').append(newElement);
    })
  }).fail( ()=>{
    alert('AJAX call failed, unable to retrieve friends');
  })

  $('#friend-form').submit((e) =>{
    e.preventDefault();
    let newFriend=$('#input').val(); 
    let firstName = newFriend.substr(0, newFriend.indexOf(' '));
    let lastName = newFriend.substr(newFriend.indexOf(' ')+1);
    $.ajax({
      url: 'http://rest.learncode.academy/api/adamws33/friends', 
      type: 'POST',
      data: {
        first: firstName,
        last: lastName,
        email: `${firstName}@${lastName}.com`
      }
    }).done( (data)=>{
      console.log(data);
    }).fail( ()=>{
      alert('AJAX call failed, unable to POST new friends');
    })
    let newElement = createFriend(newFriend);
    $('#friend-list').append(newElement);
    $('#input').val("");
  });
  $('#friend-list').on('click', 'li', function(e){
    $(this).remove();
  })
  function createFriend(name){
    return $(`<li>${name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark');
  }  

  })
  