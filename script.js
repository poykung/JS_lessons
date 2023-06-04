// loop กลุ่มคำสั่งที่ใช้ในการวนรอบ โดยโปรแกรมจะหยุดทำงานก็ต่อเมื่อเงื่อนไขที่กำหนดเป็นเท็จ

// while loop จะทำงานตามคำสั่งที่อยู่ใน loop ไปเรื่อยๆเมื่อเงื่อนไขที่กำหนดนั้นเป็นจริง

var $count_number = 1;
while($count_number <= 13){
    console.log("Hello!",$count_number);
    $count_number++;

    if($count_number > 5){
        break;  //โดยสามารถกำหนด condition ภายในตัว loop ได้เพื่อให้โปรแกรมทำงานตามเงื่อนไข
    }
    
}