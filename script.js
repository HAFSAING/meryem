document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('inscriptionForm');
  var successMsg = document.getElementById('successMsg');
  var iframe = document.getElementById('hiddenIframe');

  if (!form) return;

  form.addEventListener('submit', function () {
    window.formSubmitted = true;
  });

  iframe.addEventListener('load', function () {
    if (window.formSubmitted) {
      successMsg.style.display = 'flex';
      form.reset();
      window.formSubmitted = false;
    }
  });
});
