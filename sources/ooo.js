

function ggg()
{
	var cc=document.getElementById("gg1")
	if (cc.innerHTML==""){
	document.getElementById("gg1").innerHTML="<img src='sources/sm.png' onclick='ggg()'>";
	}
	else{
	document.getElementById("gg1").innerHTML="";
	}
}

function zfb() 
{
	if (document.getElementById("qqq").innerHTML==""){
	document.getElementById("qqq").innerHTML ="支付宝 govgouvii@gmail.com"
	}
	else
	{
		document.getElementById("qqq").innerHTML =""
		}
}
function cle()
{
	var val=document.getElementById("org").value
	if(val=="点此输入文本")
	{
		document.getElementById("org").value="";
		}
	
}



function jsuan(bqq)
{
var bq=bqq;

var texts;
texts=document.getElementById("org").value
wbcd=texts.length

var hs=5
var ls
var kg

var ys=wbcd%hs
if (ys==0) 
	{
	ls=wbcd/hs;
	kg=0;
	}
 else
	{
	ls=(wbcd-ys)/hs;
	ls+=1;
	kg=(ls*hs)-wbcd;
	}



var szwb=new Array()
var szwb1=new Array()
var szwb2=new Array()
var szwb3=new Array()
var szwb4=new Array()
var szwb5=new Array()
szwb=texts.split("")

var i=1
var b=0
while (i<=ls)
	{

		szwb1.push(szwb[b]);
		b+=1;
		szwb2.push(szwb[b]);
		b+=1;
		szwb3.push(szwb[b]);
		b+=1;
		szwb4.push(szwb[b]);
		b+=1;
		szwb5.push(szwb[b]);
		b+=1;
		i+=1;
	}

switch(kg)
{
case 4:
	szwb2.push("〇");
	szwb3.push("〇");
	szwb4.push("〇");
	szwb5.push("〇");
  break;
case 3:
	szwb3.push("〇");
	szwb4.push("〇");
	szwb5.push("〇");
  break;
case 2:
	szwb4.push("〇");
	szwb5.push("〇");
  break;
case 1:
	szwb5.push("〇");
  break;
default:
    break;
}

szwb1.reverse()
szwb2.reverse()
szwb3.reverse()
szwb4.reverse()
szwb5.reverse()

wb1=szwb1.join('')
szwb1=wb1.split('')
wb1='&nbsp;'+szwb1.join('&nbsp;&nbsp;')
wb2=szwb2.join('')
szwb2=wb2.split('')
wb2='&nbsp;'+szwb2.join('&nbsp;&nbsp;')
wb3=szwb3.join('')
szwb3=wb3.split('')
wb3='&nbsp;'+szwb3.join('&nbsp;&nbsp;')
wb4=szwb4.join('')
szwb4=wb4.split('')
wb4='&nbsp;'+szwb4.join('&nbsp;&nbsp;')
wb5=szwb5.join('')
szwb5=wb5.split('')
wb5='&nbsp;'+szwb5.join('&nbsp;&nbsp;')
document.getElementById("nnn").innerHTML="&nbsp;"+bq+"</br>"+wb1+"</br>"+wb2+"</br>"+wb3+"</br>"+wb4+"</br>"+wb5+"</br>";
document.getElementById("ppp").innerHTML = ">数据统计 "+" | 文本数 "+wbcd+" | 行数 "+hs+"</br>>建议列数 "+ls+" | 需补充空格数 "+kg+"...";
document.getElementById("gg2").innerHTML="";
}
