{
 //Array
 const fruits: string[] = ["π", "π"];
 const scores: Array<number> = [1, 3, 4];
 function printArray(fruits: readonly string[]) {}

 //Tuple -> interface,type alias, class
 //κ°λμ±μ΄ λ¨μ΄μ§λ―λ‘ μΆμ²νμ§ μμ
 let student: [string, number];
 student = ["name", 123];
 student[0]; //name
 student[1]; //123
 const [name, age] = student;
}
