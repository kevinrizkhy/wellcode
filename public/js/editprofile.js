function ktp(){
      if(ktp.lenght!=16){
        document.getElementById("error").innerHTML = "KTP kurang dari 16 digit."
      }
    }
    function namaF(){
      var namaF = document.getElementById("namaF").value;
      if(namaF.length<3){
        document.getElementById("error").innerHTML = "Nama minimal 3 huruf."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }
    function namaL(){
      var namaL = document.getElementById("namaL").value;
      if(namaL.length<3){
        document.getElementById("error").innerHTML = "Nama minimal 3 huruf."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }
    function password(){
      var password = document.getElementById("password").value;
      if(password.length<6){
        document.getElementById("error").innerHTML = "Kata sandi minimal 3 huruf."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }
    function jabatan(){
      var jabatan = document.getElementById("jabatan").value;
      if(jabatan.length<3){
        document.getElementById("error").innerHTML = "Jabatan minimal 3 huruf."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }
    function saat(){
      var saat = document.getElementById("saat").value;
      if(saat.length<6 || saat.length>13){
        document.getElementById("error").innerHTML = "Nomor telepon hanya terdiri dari 6-13 digit."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }
    function hp(){
      var hp = document.getElementById("hp").value;
      if(hp.length<6 || hp.length>13){
        document.getElementById("error").innerHTML = "Nomor telepon hanya terdiri dari 6-13 digit."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }
    function namaPerusahaan(){
      var namaPerusahaan = document.getElementById("namaPerusahaan").value;
      if(namaPerusahaan.length<3){
        document.getElementById("error").innerHTML = "Nama perusahaan minimal 3 huruf."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }
    function alamatPerusahaan(){
      var alamatPerusahaan = document.getElementById("alamatPerusahaan").value;
      if(alamatPerusahaan.length<10){
        document.getElementById("error").innerHTML = "Alamat perusahaan minimal 10 huruf."
      }else{
        document.getElementById("error").innerHTML = ""
      }
    }