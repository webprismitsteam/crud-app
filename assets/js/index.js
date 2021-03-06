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
        // xhr - XMLHttpRequest
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

  // data fetch from button and set to the update form
  $('.btn-edit').click(function(e) {
    e.preventDefault();
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

  $('.btn-del').click(function(e) {
    e.preventDefault();

    var data = {
      id: $(this).data('id'),
    };

    var submit_button = $(this);
    var submit_method = 'POST';
    var submit_url = 'models/participants/ajax_delete_participant.php';

    var default_button_text = 'Delete';
    var before_send_button_text = 'Please Wait ...';
    var after_save_button_text = 'Successfully Deleted';

    $.ajax({
      type: submit_method,
      url: submit_url,
      data: data,
      context: this,
      beforeSend: function() {
        (submit_button).attr('disabled', true).html(before_send_button_text);
      },
      error: function(xhr) {
        // xhr - XMLHttpRequest
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

  // file_upload_form submit
  $('#file_upload_form').submit(function(e) {
    e.preventDefault();
    
    var form = $(this);
    var submit_button = $(this).find('button[type="submit"]');
    var submit_method = 'POST';
    var submit_url = 'models/participants/ajax_file_upload_form_submit.php';

    var default_button_text = 'Submit';
    var before_send_button_text = 'Please Wait ...';
    var after_save_button_text = 'Saved';

    var formdata = new FormData();
    formdata.append( 'name', form.find('#name').val() );
    formdata.append( 'your_file', form.find('#your_file').prop('files')[0] );

    $.ajax({
      type: submit_method,
      url: submit_url,
      data: formdata,

      cache: false,
      contentType: false,
      processData: false,
      context: this,

      beforeSend: function() {
        (submit_button).attr('disabled', true).html(before_send_button_text);
      },

      error: function(xhr) {
        console.log('Error Message: ' + xhr.status);
      },

      success: function(res) {
        console.log("Success Message: " + res);
        // response = JSON.parse(response);
        var { status, msg } = JSON.parse(res);

        if (status) {
          setTimeout(function () {
            submit_button.attr("disabled", true).html(after_save_button_text);
            // window.location = redirect_url;
            location.reload(true);
          }, 1000);
        } else {
          submit_button.attr("disabled", false).html(default_button_text);
          error_msg.text(msg).show();
        }
      }, // end success
    }); // ajax end
  });

  // multiple_files_upload_form submit
  $('#multiple_files_upload_form').submit(function(e) {
    e.preventDefault();
    
    var form = $(this);
    var submit_button = $(this).find('button[type="submit"]');
    var submit_method = 'POST';
    var submit_url = 'models/participants/ajax_multiple_files_upload_form_submit.php';

    var default_button_text = 'Submit';
    var before_send_button_text = 'Please Wait ...';
    var after_save_button_text = 'Saved';

    var formdata = new FormData();
    formdata.append('name', form.find('#name').val());
    var number_of_files = (form.find('#your_file').prop('files')).length;
    for(let i=0; i<number_of_files; i++) {
      formdata.append( 'your_file[]', form.find('#your_file').prop('files')[i] );
    }

    $.ajax({
      type: submit_method,
      url: submit_url,
      data: formdata,

      cache: false,
      contentType: false,
      processData: false,
      context: this,

      beforeSend: function() {
        (submit_button).attr('disabled', true).html(before_send_button_text);
      },

      error: function(xhr) {
        console.log('Error Message: ' + xhr.status);
      },

      success: function(res) {
        console.log("Success Message: " + res);
        // response = JSON.parse(response);
        var { status, msg } = JSON.parse(res);

        if (status) {
          setTimeout(function () {
            submit_button.attr("disabled", true).html(after_save_button_text);
            // window.location = redirect_url;
            location.reload(true);
          }, 1000);
        } else {
          submit_button.attr("disabled", false).html(default_button_text);
          error_msg.text(msg).show();
        }
      }, // end success
    }); // ajax end
  });
})