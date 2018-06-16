$("#inputicon").click(function () {
    $("input[type='file']").trigger('click');
  });
  
  $('input[type="file"]').on('change', function() {
    var val = $(this).val();
    $(this).siblings('input[type="text"]').val(val);
  })