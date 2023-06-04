// object เป็นการประกาศชนิดข้อมูลที่อยู่ภายในให้เป็นรูปแบบของวัตถุ

var personal = {
    fname : "Thaweekhun",
    lname : "Ninkhammee",
    age : 23 , 
    weight : 59,
    height : 169,

    Fullname:function(){  //สร้าง method สำหรับ return ค่าเพื่อนำไปใช้งาน
        return this.fname+this.lname;
    },
    weightplus:function(){
        return this.weight+2;
    }

}

console.log(personal.age); //การเข้าถึงข้อมูลโดยอ้างอิงผ่านชื่อ
console.log(personal.Fullname());//การเข้าถึงข้อมูลโดยอ้างอิง method
console.log("น้ำหนักหลังกิน buffe :",personal.weightplus());