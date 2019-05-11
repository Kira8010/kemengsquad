<script type="text/javascript">
function validasi_input(form){
      var mincar = 8;
   pola_username=/^[a-z0-9\_\-\.]{8,100}$/;
   if (!pola_username.test(form.username.value < mincar)){
      alert ('Username 8 karakter dan hanya boleh Huruf atau Angka!');
      form.username.focus();
      return false;
   }
return (true);
}
</script>

<script type="text/javascript">
function validasi_form_input(form){
      var mincar = 4;
  pola_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!pola_email.test(form.email.value < mincar)){
    alert ('Penulisan Email tidak benar');
    form.email.focus();
    return false;
  }
  return (true);
}
</script>