function uangKembalian(totalBelanja,uangPembayaran){

    if(typeof totalBelanja !== "number" || typeof uangPembayaran !== "number"){
        return console.log("inpt harus angka");
    }
    let kembalian = uangPembayaran - totalBelanja
    
    let t,/*t1,*/t2,t3,t4
    let cetakKembalian = {}
    
    t= kembalian/50000
    if (t>0) {
        kembalian= kembalian % 50000
        cetakKembalian = {...cetakKembalian,50000: Math.floor(t)}
    }
    // t1= kembalian/20000
    // if (t1>0) {
    //     kembalian= kembalian % 20000  
    //     cetakKembalian = {...cetakKembalian,20000: Math.floor(t1)}
    // }
    // console.log(t1);
    t2= kembalian/10000
    if (t2>0) {
        kembalian= kembalian % 10000  
        cetakKembalian = {...cetakKembalian,10000: Math.floor(t2)}
    }
    t3= kembalian/5000
    if (t3>0) {
        kembalian= kembalian % 5000  
        cetakKembalian = {...cetakKembalian,5000: Math.floor(t3)}
    }
    t4= kembalian/2000
    if (t4>0) {
        kembalian= kembalian % 2000  
        cetakKembalian = {...cetakKembalian,2000: Math.floor(t4)}
    }
    t5= kembalian/1000
    if (t5>0) {
        kembalian= kembalian % 1000  
        cetakKembalian = {...cetakKembalian,1000: Math.floor(t5)}
    }

    console.log(cetakKembalian);
}

uangKembalian(262000,300000)