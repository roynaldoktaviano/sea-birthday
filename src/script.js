let buttonBuka = document.querySelector('#buka')
let tulis = document.querySelector('#tulisan')
// let awal = document.querySelector('#awal')
let cumi = document.querySelector('#cumi')
let lumba = document.querySelector('#lumba')
let kuda = document.querySelector('#kuda')
let back= document.querySelector('#back')
let tgl = document.querySelector('#tanggal')
let info = document.querySelector('#info')
let nama = document.querySelector('#nama')
let foto = document.querySelector('#foto')
// let ket = document.querySelector('#ket')
let content = document.querySelector('#content')
let body = document.querySelector('body')
// let kue = document.querySelector('#kue')
// let rsvp = document.querySelector('#rsvp')
let cont = document.querySelector('#cont')




let bungaKanan = document.querySelector('.bungakanan')
let bungaKiri = document.querySelector('.bungakiri')

let ikanKanan = document.querySelector('.ikankanan')
let ikanKiri = document.querySelector('.ikankiri')


buttonBuka.addEventListener('click', ()=>{
    bungaKanan.classList.add('animate-kanan');
    bungaKiri.classList.add('animate-kiri');
    tulis.classList.add('animate-opa');
    // ikanKanan.classList.add('animate-kanan');
    // ikanKiri.classList.add('animate-kiri');
    cumi.classList.add('animate-naik');
    lumba.classList.remove('animate-putar');

    lumba.classList.add('animate-naik');
    kuda.classList.remove('animate-naktur');


    kuda.classList.add('animate-naik');
    back.classList.add('animate-naik2');
    back.classList.add('animate-naik3');
    // back.classList.add('hidden');
    content.classList.remove('hidden');
    cont.classList.remove('overflow-hidden');


    // tgl.classList.add('delay-150');
    tgl.classList.add('animate-opa2');
    info.classList.add('animate-opa3');
    nama.classList.add('animate-opa4');
    // ket.classList.add('animate-opa5');
    // kue.classList.add('animate-opa5');

    foto.classList.add('animate-opa6');
    content.classList.add('animate-opa1');

    body.classList.remove('overflow-hidden');
    // rsvp.classList.remove('hidden')
    



    // awal.classList.remove('bg-[#fff]');
    // awal.classList.add("bg-[url('D:/mirzaa/sea-birthdayy/assets/bg.png')]")
    // awal.classList.add("animate-bgTurun")




    

    

})