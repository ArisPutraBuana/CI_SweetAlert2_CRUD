const flashData = $('.flash-data').data('flashdata');

// Jika ada flashdatanya
if (flashData) {
    Swal({
        title: 'Data Mahasiswa ',
        text: 'Berhasil ' + flashData,
        type: 'success'
    });
}

// tombol-hapus
$('.tombol-hapus').on('click', function (e) {

    // Mematikan fungsi href di link hapus
    e.preventDefault();
    const href = $(this).attr('href');  // href => yang lagi di klik

    Swal({
        title: 'Apakah anda yakin',
        text: "data mahasiswa akan dihapus",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Hapus Data!'
    }).then((result) => { // 
        if (result.value) {
            document.location.href = href;      // Jika di tekan oke jalinin ini
        }
    })

});