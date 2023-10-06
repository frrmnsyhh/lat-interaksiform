function klik() {
    var namastr = (document.formulir.nama.value);
    var jperstr = (document.formulir.jper.value);
    var bersejstr = (document.formulir.bersej.value);
    var laystr = (document.formulir.lay.value);
    var penperstr = (document.formulir.penper.value);
    var topenstr = (document.formulir.totpen.value);

    document.formulir.pnama.value = namastr;
    document.formulir.pjper.value = jperstr;
    document.formulir.pbersej.value = bersejstr;
    document.formulir.play.value = laystr;
    document.formulir.ppenper.value = penperstr;
    document.formulir.ptotpen.value = topenstr;
}