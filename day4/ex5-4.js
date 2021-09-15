
// let text;
// document.write('문자열 길이 :' + text.length); //length는 속성!()가 있는 것은 메소드
// document.write('<br>');
// document.write('단어 위치찾기:' + text.indexOf('am'));
// document.write('<br>');
// document.write('단어 위치찾기:' + text.lastIndexOf('am'));
// document.write('<br>');
// let result = text.substring(7,11);  //11은 포함 안됨.
// document.write('문자열 추출 : ' + result);
// document.write('<br>');
// result = text.replace('javascript','jsp');  //대소문자구분해서 일치하는 것을 변환.
// let x="John";
// let y=new String("John"); //String타입
// let z=new String("John"); //객체생성
// document.writeln("x,y 동등비교:"+(x==y)+"<br>");
// document.writeln("x,y일치 비교:"+(x===y)+"<br>");//false
// document.writeln("z,y동등비교:"+(z===y)+"<br>");
// document.writeln("y,z일치 비교:"+(x===y)+"<br>");
function strIndex2(){
    var text4=prompt("문자열을 입력하세요");
    console.log(text4);
    let result2 = text.substring(11,); 
    document.write('문자열 추출 : ' + result2);
    document.getElementById('subs2').innerHTML=text4;
}