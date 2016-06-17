$(document).ready( function() {
  var baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users';

  //index path
  if (location.pathname === '/') {
    function getUsers() {
      $.ajax({
        url: baseUrl,
        type: 'GET',
        dataType: 'JSON'
      }).done(function(data) {
        var tbody = $('#users');
        tbody.children().remove();
        data.users.forEach(function(user) {
          var first_name = user.first_name ? user.first_name : '';
          var last_name = user.last_name ? user.last_name : '';
          var phone_number = user.phone_number ? user.phone_number : '';
          var row = '<tr data-id="' + user.id + '"><td>' + user.first_name + '</td>';
              row += '<td>$' + last_name + '</td>';
              row += '<td>' + phone_number + '</td>';
              row += '<td>'
              row += '<button class="btn btn-danger delete">Delete</button>';
              row += '<button class="btn btn-primary show">Show</button>';
              row += '</td>';
              row += '</tr>';
              tbody.append(row);
        });
      }).fail( function(err) {
        alert('Something went wrong call support');
      });
    }

    getUsers();

    $(document).on('click', '.delete', function() {
      var id = $(this).closest('tr').data().id;
      deleteuser(id);
    });

    $(document).on('click', '.show', function() {
      var id = $(this).closest('tr').data().id;
      location.pathname = '/users/' + id;
    })

    function deleteUsers(id) {
      $.ajax({
        url: baseUrl + '/' + id,
        type: 'DELETE'
      }).done(function() {
        getusers();
      }).fail(function(err) {
      })
    }
  } //root route

  var re = /\/users\/\d+/;
  if (location.pathname.match(re)) {
    var panel = $('#panel');
    var id = panel.data().id;
    $.ajax({
      url: baseUrl + '/' + id,
      type: 'GET',
      dataType: 'JSON'
    }).done( function(data) {
      var user = data.user;
      panel.children('#heading').html(user.name);
      var list = $('#user');
      var price = '<li>Price: $' + user.base_price + '</li>';
      var desc = '<li>Description: ' + user.description + '</li>';
      list.append(price);
      list.append(desc);
    })
  }

//   $('#new_user').on('submit', function(e) {
//     e.preventDefault();
//     $.ajax({x
//       url: baseUrl,
//       type: 'POST',
//       dataType: 'JSON',
//       data: $(this).serializeArray()
//     }).done( function() {
//       location.pathname = '/';
//     });
//   })

})



















