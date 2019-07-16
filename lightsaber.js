// CATATAN:
//
// Kode ini selesai ditulis pada hari Selasa, 16 Juli 2019 pukul 9:36
// Animasi ini dibuat hanya semata-mata hiburan saja.
// Kode ini bebas dimodif dan gratis.
//
// Jangan lupa untuk terus mendukung ddQiaChannel dengan cara :
// 1. SUBSCRIBE channel youtube kami (ddQia Channel)
// 2. Like dan Share
// 3. Kunjungi website kami ddqiachannel.com
//
// Terima Kasih atas Gambar gratisnnya kepada:
// jalantikus.com
// pixabay.com
// stocksnap.io
//
// Terima Kasih atas dukungan subscribers

let menu = document.querySelectorAll('li'), // menu
    img = document.querySelectorAll('img'), // gambar
    menuArea = document.querySelector('.menu_area'), // lebar area layar
    area = document.querySelector('ul'), // area tombol
    nilaiArea = document.querySelector('ul').offsetWidth, // lebar area jika seluruh tombol ditambah
    handle = document.querySelector('.handle'), // handle/pegangan lightsaber
    block = document.querySelector('.block'), // lightsaber
    bodyLeft = document.body.offsetWidth, // ukuran lebar layar
    blockLeft = bodyLeft - area.offsetWidth, // nilai posisi semua tombol agar di tengah layar
		nilaiLeft = []; // array nilai posisi awal setiap tombol
    transition = 1.5; // efek waktu

// membuat array nilai "offsetLeft" setiap menu
// masuk ke variable nilaiLeft
		for (let i = 0;i < menu.length;i++) {
			nilaiLeft.push(menu[i].offsetLeft);
			menu[i].style.transition = transition * 0 + 's ease';
		}

// membuat fungsi posisi tengah setiap restart
    function center() {
      area.style.left = blockLeft/2 + 'px';
      block.style.left = blockLeft/2 + 'px';
	    block.style.display = 'none'; // lightsaber dihilangkan
      block.style.transition = transition + 's ease';

// fungsi animasi agar cahaya lighsaber berkedip terus menerus
      block.style.animation = 'neon ' + (5 * transition) +'s infinite';

// membuat fungsi agar setiap menu ada di posisi bawah 50px
// kemudian naik setiap menu
      for (let i = 0;i < menu.length;i++) {
        menu[i].style.marginTop = '50px';
        menu[i].style.animation = 'naik ' + 10 * transition + 's linear ' + (200 * transition) * i + 'ms';
        }

// sekitar 5 detik semua menu merubah posisi atas di 0px
// sebelumnya ada di posisi atas 50px
      setTimeout(() => {for (let i = 0;i < menu.length;i++) {
        menu[i].style.marginTop = '0px';
        }
      }, (5000 * transition));
    }
    center();

// membuat tombol menjadi aktif

    for (let i = 0;i < menu.length;i++) {

// saat menekan salah satu tombol
      menu[i].addEventListener('click', () => {
// fungsi lighsaber dan gambar mulai ditampilkan
      block.style.display = 'inline';

// setiap gambar memiliki nilaiLeft dikurang 200px dari menu
      setTimeout(() => {
      img[i].style.display = 'inline';
      img[i].style.left = nilaiLeft[i] - 200 + 'px';
		  img[i].style.animation = 'naik ' + 10 * transition + 's linear';
      },(1500 * transition))

// jika lebar menu lebih dari 100px, ukuran lightsaber
// menjadi lebih besar
      if (menu[i].offsetWidth >= 100) {
        block.style.width = menu[i].offsetWidth + 'px';
        block.style.height = 3 + 'px';
        handle.style.height = 3 + 'px';
      } else {
        block.style.width = menu[i].offsetWidth + 'px';
      }

//  membuat terbang lightsaber
//  jika tombol di tekan akan melewati tombol akhir
      block.style.left = blockLeft/2 + menu[menu.length-1].offsetLeft + 300 + 'px';

// sekitar 1/2 detik lightsaber akan...
// terseret ke bawah tombol yang aktif (yang tadi ditekan)
      setTimeout(()=>{
    	block.style.left = blockLeft/2 + menu[i].offsetLeft + 'px';
      },(500 * transition));

// efek lighsaber berputar mengenai tombol yang tidak ditekan
		block.style.transform = 'rotateZ(-720deg)';

// membuat fungsi tombol yang tidak ditekan
// tombol i = nilai tombol yang di tekan
// tombol j = nilai tombol yang tidak di tekan
    let j = 0;
    while (j < menu.length) {

// warna font tombol yang tidak di tekan
    menu[j].style.color = '#ddd';

// mengatur waktu animasi (2 detik)
// untuk setiap tombol j mennghilang
    setTimeout(()=> {
      let x = 0;
      while (x < menu.length) {

// membuat tombol j hilang permanen
// hanya ada tombol i (tombol yang di tekan)
        if (x != i) {
          menu[x].style.display = 'none';
  			  menu[i].style.left = nilaiLeft[i] + 'px';
        }
        x++; // fungsi loop while
      }
    }, (2000 * transition))

// membuat tombol i tetap di posisinya
// ini dibuat akibat dari tombol j menghilang permanen
// sehingga posisi tombol i otomatis akan bergeser ke kiri
    if (j === i) {
      menu[i].style.color = '#FFF'; // warna tombol i

// (1) membuat efek tombol j (yang tidak aktif) menjadi menghilang
// (2) lalu lighsaber berbalik arah mengikuti tombol i (aktif)
      setTimeout(()=> {
      let x = 0;
      while (x < menu.length) {
        if (x != i) {
          menu[x].style.display = 'none'; // (1)
  				menu[i].style.marginLeft = nilaiLeft[i] + 'px';
                  block.style.left = blockLeft/2 + menu[i].offsetLeft + 'px'; // (2)
                  block.style.transform = 'rotateY(-900deg)'; // (efek berbalik arah)

// membuat fungsi tombol i jika ditekan lagi
// tombol, lighsaber, gambar akan menghilang ke arah kiri
            menu[i].addEventListener('click', () => {
    					area.style.width = nilaiArea + 'px';
    					menu[i].style.position = 'relative';
    					menu[i].style.left = nilaiLeft[i] + 'px';
    					menu[i].style.marginLeft = 0 + 'px';
              menu[i].style.animation = 'kiri ' + 3.52 * transition +'s ease-out ';
    					img[i].style.animation = 'kiri ' + 2.92 * transition +'s ease-out ';
    					block.style.animation = 'kiri ' + 2.52 * transition +'s ease-out';
              block.style.transform = 'rotateY(-900deg)'; // (efek lightsaber berbalik arah)


// menghilangkan secara permanen tombol, gambar dan lightsaber
              setTimeout(() => {
              menu[i].style.display = 'none';img[i].style.display = 'none';block.style.display = 'none';
              }, (800 * transition));

// saat semua menghilang, mengaktifkan fungsi refresh layar
// sehingga semua kembali ke awal
    					setTimeout(() => {location.reload();}, (1200 * transition));
            });
        }
        x++;
      }
      }, (1500 * transition));

// fungsi tombol j (yang tidak di tekan)
      } else {
// efek animasi hilang ke bawah saat tombol i (aktif) ditekan
          menu[j].style.marginTop = 0 + 'px';
    		  menu[j].style.animation = 'turun ' + 5 * transition +'s linear ' + (100 * transition) * j + 'ms';
  		  }
        j++;
      }
    }); // akhir fungsi klik tombol
    }
