document.getElementById("onChangeKTP").addEventListener("change", onChangeKTP);
function validateLogin(){
  var password= document.getElementById("passwordLogin").value;
  if(password.length < 6){
    document.getElementById("passLoginErr").style.visibility="visible";
    return false;
  }else{
    document.getElementById("passLoginErr").style.visibility="hidden";
    return true;
  }
}

function onChangeKTP(){
  alert("HERE");
  
}

function onChangeSaat(){
  var ktp = document.getElementById("saat").value + "";
  for(i=0; i<ktp.length;i++){
    if(Number.isInteger(parseInt(ktp.charAt(i)))){
    }else{
      var res = ktp.substring(0, i);
      document.getElementById("saat").value = parseInt(res);
      alert("Hanya boleh diisi dengan angka 0-9");
      break;
    }
  }
}

function onChangeSetelah(){
  var ktp = document.getElementById("setelah").value + "";
  for(i=0; i<ktp.length;i++){
    if(Number.isInteger(parseInt(ktp.charAt(i)))){
    }else{
      var res = ktp.substring(0, i);
      document.getElementById("setelah").value = parseInt(res);
      alert("Hanya boleh diisi dengan angka 0-9");
      break;
    }
  }
}

function onChangeHP(){
  var ktp = document.getElementById("hp").value + "";
  for(i=0; i<ktp.length;i++){
    if(Number.isInteger(parseInt(ktp.charAt(i)))){
    }else{
      var res = ktp.substring(0, i);
      document.getElementById("hp").value = parseInt(res);
      alert("Hanya boleh diisi dengan angka 0-9");
      break;
    }
  }
}

function validateForm() {
  var password = document.getElementById("password").value;
  var repassword = document.getElementById("repassword").value;
  var ktp = document.getElementById("ktp").value;
  var saat = document.getElementById("saat").value;
  var setelah = document.getElementById("setelah").value;
  var hp = document.getElementById("hp").value;
  var namaPerusahaan = document.getElementById("namaPerusahaan").value;
  var alamatRumah = document.getElementById("alamatRumah").value;
  var alamatPerusahaan = document.getElementById("alamatPerusahaan").value;
  var error = 0;
  if(password.length < 6){
    error++;
    document.getElementById("passErr").style.visibility="visible";
  }else{
    document.getElementById("passErr").style.visibility="hidden";
  }
  if(repassword.length<6){
    error++;
    document.getElementById("repassErr").style.visibility="visible";
  }else{
    if(password != repassword){
      error++;
      document.getElementById("repassErr").style.visibility="visible";
    }else{
     document.getElementById("repassErr").style.visibility="hidden";
   }
 }
 if(ktp.length!=16){
  error++;
  document.getElementById("ktpErr").style.visibility="visible";
}else{
 document.getElementById("ktpErr").style.visibility="hidden";
}
if (saat.length>13 || saat.length<6){
  error++;
  document.getElementById("saatErr").style.visibility="visible";
}else{
  document.getElementById("saatErr").style.visibility="hidden";
}
if (setelah.length>13 || setelah.length<6){
  error++;
  document.getElementById("setelahErr").style.visibility="visible";
}else{
  document.getElementById("setelahErr").style.visibility="hidden";
}
if (hp.length>13 || hp.length<6){
  error++;
  document.getElementById("hpErr").style.visibility="visible";
}else{
  document.getElementById("hpErr").style.visibility="hidden";
}
if(namaPerusahaan.length<3){
  error++;
  document.getElementById("namaPerusahaanErr").style.visibility="visible";
}else{
  document.getElementById("namaPerusahaanErr").style.visibility="hidden";
}
if(alamatPerusahaan.length<10){
  error++;
  document.getElementById("alamatPerusahaanErr").style.visibility="visible";
}else{
  document.getElementById("alamatPerusahaanErr").style.visibility="hidden";
}
if(alamatRumah.length<10){
  error++;
  document.getElementById("alamatRumahErr").style.visibility="visible";
}else{
  document.getElementById("alamatRumahErr").style.visibility="hidden";
}
if(error>0){
  return false;
}else{
  return true;
}
}


function validateFormEdit() {
  var password = document.getElementById("password").value;
  var ktp = document.getElementById("ktp").value;
  var saat = document.getElementById("saat").value;
  var hp = document.getElementById("hp").value;
  var namaPerusahaan = document.getElementById("namaPerusahaan").value;
  var alamatPerusahaan = document.getElementById("alamatPerusahaan").value;
  var nama = document.getElementById("nama").value;
  var jabatan = document.getElementById("jabatan").value;
  var error = 0;
  if(password.length < 6){
    error++;
    document.getElementById("error").innerHTML = "Kata sandi kurang dari 6 digit.";
  }else{
    document.getElementById("error").innerHTML = "";
  }
  if(ktp.length!=16){
    error++;
    document.getElementById("error").innerHTML = "KTP harus 16 digit.";
  }else{
   document.getElementById("error").innerHTML = "";
 }
 if (saat.length>13 || saat.length<6){
  error++;
  document.getElementById("error").innerHTML = "Nomor hanya terdiri dari 6-13 digit.";
}else{
  document.getElementById("error").innerHTML = "";
}
if (hp.length>13 || hp.length<6){
  error++;
  document.getElementById("error").innerHTML = "Nomor hanya terdiri dari 6-13 digit.";
}else{
  document.getElementById("error").innerHTML = "";
}
if(namaPerusahaan.length<3){
  error++;
  document.getElementById("error").innerHTML = "Nama perusahaan minimal 3 huruf.";
}else{
  document.getElementById("error").innerHTML = "";
}
if(alamatPerusahaan.length<10){
  error++;
  document.getElementById("error").innerHTML = "Alamat perusahaan minimal 10 huruf.";
}else{
  document.getElementById("error").innerHTML = "";
if(nama.length<3){
  error++;
  document.getElementById("error").innerHTML = "Nama minimal 3 huruf.";
  return false;
}else{
  document.getElementById("error").innerHTML = "";
}
if(jabatan.length<3){
  error++;
  document.getElementById("error").innerHTML = "Jabatan minimal 3 huruf.";
}else{
  document.getElementById("error").innerHTML = "";
}
if(error>0){
  return false;
}else{
  return true;
}
}