

        let count=0;
        let count1=0;
       
       
       re();
        function my1()
        {
             
          count++;
        document.getElementById('ct1').innerHTML=count;
        localStorage.setItem('hello',count);

}
function re()
{
    let p=localStorage.getItem('hello',count);
    let m=localStorage.getItem('hello1',count1);
    if(p>10)
    {
        p=0;
    }
    document.getElementById('ct1').innerHTML=p;
    count=p;
    document.getElementById('ct2').innerHTML=m;
    count1=m;

}


function my2()
{

    count1++;
        document.getElementById('ct2').innerHTML=count;
        localStorage.setItem('hello1',count);
}



