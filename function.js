/*funtion ชุดคำสั่งที่นำมาเขียนรวมกันตามวัตถุประสงค์ที่ต้องการ สามารถนำไปใช้งานได้ทุกที่เพื่อลดการเขียนคำสั่งที่ใช้งานบ่อยๆ

#funtion รูปแบบที่ไม่มีการรับ-ส่งค่า

function $print(){  //ประกาศใช้ function ตามด้วยชื่อของ function()
    console.log("Say Hi!"); //คำสั่งภายใน function ที่ต้องการให้ทำงาน
}
$print();   //เรียกใช้งาน function ผ่านชื่อของ function โดยสามารถใช้งานที่อื่นได้ 


#function รูปแบบที่มีการรับค่าเข้ามา

function $personal(fname,lname){ //ประกาศ function และกำหนด parameter เพื่อใช้รับค่า 
    console.log("ชื่อจริง :",fname,"นามสกุล :",lname); //คำสั่งภายในที่ต้องการให้โปรแกรมทำงาน
}

$personal("Thaweekhun","Ninkhammee"); //argument ค่าที่ต้องการส่งเข้าไปใน function ที่ให้ parameter เก็บ

function sum(x,y){ //parameter
    var result = x+y; //variable and operator
    console.log(result); //print
}

sum(10,20); //argument/input


#function รูปแบบที่มีการ return ค่าออกมา (ส่งค่าจากตัว function)

function Fullname(){ //ประกาศชื่อ function
    return "Thaweekhun Ninkhammee"; //ค่าที่ต้องการส่งออกจากตัว function
}

var getName = Fullname(); // ตัวแปรที่สร้างไว้เพื่อรับค่าจาก function
console.log("ค่าที่รับจาก function :",getName); //print ตัวแปรที่รับค่ามาจาก function


function getNumber(){ //function
    var number = 10*20; //variable and operator
    return number; //return output
}

result = getNumber(); //get output
console.log("ค่าที่รับจาก function :",result); //print outout


#function รับค่า และ return ค่า

function $personal(fname,lname,city="warinchamrab"){ //สามารถกำหนดค่า default ให้กับ parameter ได้ด้วยเครื่องหมาย = กรณีที่ไม่มีการส่งค่าเข้ามาเก็บข้อมูล
    var $fullname = fname+lname+city;
    return $fullname;
}

console.log(getname =  $personal("Thaweekhun","Ninkhammee"));
*/
