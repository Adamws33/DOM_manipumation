//Waits untill the dom is loaded and then runs our JavaScript
$(document).ready(function(){

  // On page load, make an AJAX request to our API endpoint to retrieve all friends in DB
  $.ajax({
    url: 'http://rest.learncode.academy/api/adamws33/friends', 
    type: 'GET'
  }).done( (data)=>{
    // We get an array of friends back, iterate over the array
    data.forEach( (eachFriend)=>{
      // For each friend, Construct their full name and build a list-item from that
      let name = `${eachFriend.first} ${eachFriend.last}`;
      let newElement= createFriend(name, eachFriend.id);
      // Append the new list item to our unordered list
      $('#friend-list').append(newElement);
    })
  }).fail( ()=>{
    //if our alert fails notify the user
    alert('AJAX call failed, unable to retrieve friends');
  })


  // On page load, make a clidk event listening for our Add A New Friend button
  $('#friend-form').submit((e) =>{
    // Stop the page from refreshing, and then get the value from the input field
    e.preventDefault();
    let newFriend=$('#input').val(); 
    //Split the names based on the first space we find
    let firstName = newFriend.substr(0, newFriend.indexOf(' '));
    let lastName = newFriend.substr(newFriend.indexOf(' ')+1);
    // Send the new friend's information to the API
    $.ajax({
      url: 'http://rest.learncode.academy/api/adamws33/friends', 
      type: 'POST',
      data: {
        first: firstName,
        last: lastName,
        email: `${firstName}@${lastName}.com`
      }
    }).done( (data)=>{
      //When the API sends us the success message, construct a list-item and add it to the unordered list
      let newElement = createFriend(newFriend, data.id);
      $('#friend-list').append(newElement);
      //clear the input field
      $('#input').val("");
    }).fail( ()=>{
          //if our alert fails notify the user
      alert('AJAX call failed, unable to POST new friends');
    })
  })

  //On page load, make a click event listener for our unordered list
  // when somone clicks a list-item, this function will fire 
  $('#friend-list').on('click', 'li', function(e){
    $.ajax({
      url: `http://rest.learncode.academy/api/adamws33/friends/${e.target.id}`, 
      type: 'DELETE'
    }).done( ()=>{
      $(this).remove();
    }).fail( ()=>{
          //if our alert fails notify the user
      alert('AJAX call failed, unable to DELETE friends');
    })
  })

    function createFriend(name,id){
      return $(`<li>${name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark').attr('id', id);
    }
})  