let e_name = 'John';
let b_salary = 30000;
let HRA = b_salary * 0.5;
let DA = b_salary * 0.1;
let TA = b_salary * 0.2;
let MA = b_salary * 0.05;
let PF = b_salary * 0.12;
let PT = 200;
let experience = 1;
let Bonus = 0;
let gross_salary = b_salary + HRA + DA + TA + MA + Bonus;
let net_salary = gross_salary - PF - PT;

if(experience >= 5 && b_salary >= 50000){
    Bonus = b_salary * 0.15;
}else if(experience >= 3 && b_salary >= 30000){
    Bonus = b_salary * 0.10;
}else if(experience >= 1.5 && b_salary >= 20000){
    Bonus = b_salary * 0.8;
}else{
    Bonus = 0;
}

console.log(`Employee Name : ${e_name}`);
console.log(`Basic Salary : ${b_salary}`);
console.log(`HRA : ${HRA}`);
console.log(`DA : ${DA}`);
console.log(`TA : ${TA}`);
console.log(`MA : ${MA}`);
console.log(`PF : ${PF}`);
console.log(`PT : ${PT}`);
console.log(`Experience : ${experience}`);
console.log(`Bonus : ${Bonus}`);
console.log(`Gross Salary : ${gross_salary}`);
console.log(`Net Salary : ${net_salary}`);