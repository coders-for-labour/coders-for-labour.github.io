var form = $('.email-signup');
var result = $('.result');

function loading() {
  result.show().html('Loading...');
}
function formResult(data) {
  result.html(data);
  form.find('input').val('');
}
function onSubmit() {
  form.submit(function() {
    var action = $(this).attr('action');
    loading();
    $.ajax({
      url: action,
      type: 'POST',
      data: {
        email: form.find('.email-input').val()
      },
      success: function(data){
        formResult(data);
      },
      error: function(data) {
        formResult(data);
      }
    });
  return false;
  });
}onSubmit();