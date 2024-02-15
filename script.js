const konversi = document.getElementById('konversi');
const reset = document.getElementById('reset');
const reverse = document.getElementById('reverse');
const suhuAwal = document.getElementById('suhu-awal');
const satuanAwal = document.getElementById('satuan-awal');
const suhuHasil = document.getElementById('suhu-hasil');
const satuanHasil = document.getElementById('satuan-hasil');

    konversi.addEventListener('click', function() {
        const suhuAwalValue = parseFloat(suhuAwal.value);
        const satuanAwalValue = satuanAwal.value;
        const satuanHasilValue = satuanHasil.value;

        let hasil;

        if (satuanAwalValue === 'celsius') {
            if (satuanHasilValue === 'fahrenheit') {
            hasil = (suhuAwalValue * 9/5) + 32;
            } else if (satuanHasilValue === 'kelvin') {
            hasil = suhuAwalValue + 273.15;
            }
        } else if (satuanAwalValue === 'fahrenheit') {
            if (satuanHasilValue === 'celsius') {
            hasil = (suhuAwalValue - 32) * 5/9;
            } else if (satuanHasilValue === 'kelvin') {
            hasil = (suhuAwalValue + 459.67) * 5/9;
            }
        } else if (satuanAwalValue === 'kelvin') {
            if (satuanHasilValue === 'celsius') {
            hasil = suhuAwalValue - 273.15;
            } else if (satuanHasilValue === 'fahrenheit') {
            hasil = (suhuAwalValue - 273.15) * 9/5 + 32;
            }
        }

    suhuHasil.value = hasil;
    });

    reset.addEventListener('click', function() {
    suhuAwal.value = '';
    suhuHasil.value = '';
    satuanAwal.value = 'celsius';
    satuanHasil.value = 'celsius';
    });

    reverse.addEventListener('click', function() {
    const temp = satuanAwal.value;
    satuanAwal.value = satuanHasil.value;
    satuanHasil.value = temp;
    });
