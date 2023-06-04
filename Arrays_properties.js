var colors = ["red","green","blue","purle","pinnk"];

var $count =  colors.length; //length เป็นการนับจำนวนสมาชิกที่อยู่ภายใน arrays
console.log("นับจำนวนสมาชิกที่อยู่ใน arrays โดยใช้ length :",$count);

var $result = colors;
console.log("Before ก่อนการเรียงลำดับ arrays โดยใช้ sort :",$result);

$result = colors.sort(); //sort() เป็นการเรียงลำดับ array จากจำนวนน้อยไปมาก พยัญชนะ-ไปสระ
console.log("After หลังการเรียงลำดับ arrays โดยใช้ sort :",$result);

$result = colors.reverse(); //reverse() เป็นการเรียงลำดับโดยจะตรงข้ามกับ sort
console.log("การเรียงลำดับโดยใช้ reverse :",$result);

console.log("การเข้าถึง arrays ลำดับแรก :",colors[0]);
console.log("การเข้าถึง arrays ลำดับสุดท้าย :",colors[colors.length-1]);

colors.push("gray"); //การเพิ่มมูลใน arrays
console.log(colors);


 