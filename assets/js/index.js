$(() => {
  $('#crud_form_for_create').submit(function(e) {
    e.preventDefault();

    var form = $(this);
    var submit_button = $(this).find('button[type="submit"]');
    
    var submit_method = 'POST';
    var submit_url = 'models/participants/ajax_add_participant.php';
    // var data = (form).serialize();
    var data = {
      name: $(this).find('#name').val(),
      email: $(this).find('#email').val(),
    }

    var default_button_text = 'Submit';
    var before_send_button_text = 'Please Wait ...';
    var after_save_button_text = 'Saved';

    $.ajax({
      type: submit_method,
      url: submit_url,
      data: data,
      context: this,
      beforeSend: function() {
        (submit_button).attr('disabled', true).html(before_send_button_text);
      },
      error: function(xhr) {
        console.log('Error Message: '+xhr.status);
        // $('#doc-details .after-submit.msg-red').text('Server Error.').show();
        // $('#form_create_division .button').attr('disabled', false).html('<i class="fa fa-plus-circle"></i> Add Doctor');
      },
      success: function(res) {
        console.log("Success Message: " + res);
        // response = JSON.parse(response);
        var { status, msg } = JSON.parse(res);

        if (status) {
          submit_button.attr("disabled", true).html(after_save_button_text);
          setTimeout(function () {
            // window.location = redirect_url;
            location.reload(true);
          }, 1000);
        } else {
          submit_button.attr("disabled", false).html(default_button_text);
          error_msg.text(msg).show();
        }
      }, // end success
    }); // end ajax
  });

  $('.btn-edit').click(function(e) {
    var update_form = $('#crud_form_for_update');
    
    update_form.find('#id').val($(this).data('id'));
    update_form.find('#name').val($(this).data('name'));
    update_form.find('#email').val($(this).data('email'));
  });

  $('#crud_form_for_update').submit(function(e) {
    e.preventDefault();

    var form = $(this);
    var submit_button = $(this).find('button[type="submit"]');
    
    var submit_method = 'POST';
    var submit_url = 'models/participants/ajax_update_participant.php';
    // var data = (form).serialize();
    var data = {
      id: $(this).find('#id').val(),
      name: $(this).find('#name').val(),
      email: $(this).find('#email').val(),
    }

    var default_button_text = 'Update';
    var before_send_button_text = 'Please Wait ...';
    var after_save_button_text = 'Successfully Updated';

    $.ajax({
      type: submit_method,
      url: submit_url,
      data: data,
      context: this,
      beforeSend: function() {
        (submit_button).attr('disabled', true).html(before_send_button_text);
      },
      error: function(xhr) {
        console.log('Error Message: '+xhr.status);
        // $('#doc-details .after-submit.msg-red').text('Server Error.').show();
        // $('#form_create_division .button').attr('disabled', false).html('<i class="fa fa-plus-circle"></i> Add Doctor');
      },
      success: function(res) {
        console.log("Success Message: " + res);
        // response = JSON.parse(response);
        var { status, msg } = JSON.parse(res);

        if (status) {
          submit_button.attr("disabled", true).html(after_save_button_text);
          setTimeout(function () {
            // window.location = redirect_url;
            location.reload(true);
          }, 1000);
        } else {
          submit_button.attr("disabled", false).html(default_button_text);
          error_msg.text(msg).show();
        }
      }, // end success
    }); // end ajax
  });
})