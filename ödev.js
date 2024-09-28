function bilgilendir(isim, ülke) {
    if (ülke === "Türkiye") {
        return isim + " Seçime uygunsunuz";
    }
    return isim + " Seçime uygun değilsiniz";
}

console.log(bilgilendir("Çiğdem", "Türkiye"));
console.log(bilgilendir("Jessica","İngiltere"))



let a = 180;
let b = 7;
let toplam = a + b;
let fark = a - b;
let carpim = a * b;
let bolum = a / b;
console.log("Toplam: " + toplam);     
console.log("Fark: " + fark);        
console.log("Çarpım: " + carpim);     
console.log("Bölüm: " + bolum);    


for(let i=1; i<=10;i++){
    console.log(i)
}