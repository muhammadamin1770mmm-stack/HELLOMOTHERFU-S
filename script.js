alert("hozir sizga random sonlar chiqishni boshledi");
let son = Math.ceil(Math.random() * 99);
alert("Sizga chiqqan random son bu: " + son);
confirm("Biz random sonni 2ga ko'paytirmoqchi va bo'lmoqchimiz");
let kop = son * 2;
let bol = son / 2;
let b3 = son % 3;
alert("sizga chiqqan random son " + son + " edi \n biz uni 2ga ko'paytirib " + kop + " chiqardik \n va shu sonni 2ga bo'lib " + bol + " chiqardik \n va shu sonni uchga bo'lgandagi qoldiq bu " + b3);