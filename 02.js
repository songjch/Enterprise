$(function () {

    $.post("url",
	{ data: "tbxx" },
	function (data) {
	    $('#yhtx').innerHTML = '<img src="' + data.pic + '"/>';
	    $('#yhyhm').innerHTML = '"+data.yhyhm+"';

	})
    $('.a1').click(function () {
        $('.tongyongdiv').addClass("in");
        var ady = $(this).attr("dy");
        $('.tongyongdiv').each(function () {

            var ddy = $(this).attr("dy");
            if (ady == ddy) {
                $(this).removeClass("in");
                $(this).addClass("on");
            }
        });

    });

    var result1 = document.getElementById("result1");
    var input1 = document.getElementById("inp1");


    if (typeof FileReader === 'undefined') {
        result1.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input1.setAttribute('disabled', 'disabled');
    } else {
        input1.addEventListener('change', readFile, false);
    }
    function readFile() {
        var file = this.files[0];
        if (!/image\/\w+/.test(file.type)) {
            alert("请确保文件为图像类型");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            result1.innerHTML = '<img id="img" src="' + this.result + '" alt=""/>'

            var c1 = document.getElementById("myCanvas1");
            var ctx = canvas.getContext("2d");
            var img = document.getElementById("img");
            img.onload = function () {
                result1.style.display = "none";
                alert(2);

                ctx.drawImage(img, 0, 0, 90, 90);

            }

        }
    }

    var bate642;

    var result2 = document.getElementById("result2");
    var input2 = document.getElementById("inp2");
    if (typeof FileReader === 'undefined') {
        result2.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input2.setAttribute('disabled', 'disabled');
    } else {
        input2.addEventListener('change', readFile, false);
    }
    function readFile() {
        var file = this.files[0];
        if (!/image\/\w+/.test(file.type)) {
            alert("请确保文件为图像类型");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
            result2.innerHTML = '<img id="img" src="' + this.result + '" alt=""/>'

            var c2 = document.getElementById("myCanvas2");
            var ctx = c2.getContext("2d");
            var img = document.getElementById("img");
            img.onload = function () {
                result2.style.display = "none";
                alert(2);

                ctx.drawImage(img, 0, 0, 230, 150);
                bate642 = c2.toDataURL();
            }

        }
    }







    $('#qr').click(function () {
        var form1 = $('#form1').serialize();
        alert(form1);
        $.post("/Home/CreateStock",
    	{ data: form1,
    	    pic: bate642
    	},
    	function (data) {
    	    alert(data);
    	})
    })
    function isScrollBottom() {
        var scrollHeight = document.documentElement.scrollHeight;
        var viewportHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop;
        var chazhi = scrollHeight - viewportHeight - scrollTop;

        return chazhi < 20;


    }
    if (isScrollBottom()) {
        alert(1);
    };
    /*
    function we () {
    return '<div class="abd">12345667dxxx</div>'+
    "<div>2355656fgffgf</div>";
		
    }
    */
    function getlrGoodslist(goods) {
        alert("url" + goods.SImgUrl + "num" + goods.Snum + "mingcheng" + goods.Sname)
        return "<div>" +
		       "<img src='" + goods.SImgUrl + "'/>" +
		       "<table><tr><td>名称</td><td>" + goods.Sname + "</td><tr><td>数量</td><td>" + goods.Snum + "</td></tr>" +
		       "<tr><td>价格</td><td>" + goods.SPrice + "</td><tr><td>来源</td><td>" + goods.source + "</td></tr>" +
		       "<tr><td>购买时间</td><td>" + goods.SSaveDate + "</td><tr><td>型号</td><td>" + goods.model + "</td></tr>" +
		       '<tr><td>备注</td><td colspan="3">"+goods.remark+"</td></tr></table>' +
		       "</div>";

    }

    $.post("/Home/SelectStock",
	{ data: "ck15" },
	function (result) {
	    alert(result.length);
	    alert(result);
	    var txt = "";
	    for (var i = 0, len = result.length; i < len; i++) {
	        txt += getlrGoodslist(result[i]);
	    }
	    $('.kcd').append(txt);

	})




    //$('.kcd').append(we());










    /*var result = document.getElementById("result1");
    var inputx = document.getElementById("inp");
    
    if(typeof FileReader === 'undefined'){
    result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
    inputx.setAttribute('disabled','disabled');
    }else{
    inputx.addEventListener('change',readFile1,false);
    }
                
                
    function readFile1(){
    var file = this.files[0];
    if(!/image\/\w+/.test(file.type)){
    alert("请确保文件为图像类型");
    return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
        
    reader.onload = function(){
    alert(3333)
    //alert(this.result);
    // var txt1='<img id="img" src="'+this.result+'" alt=""/>'
    // $("#result").append(txt1);
    result1.innerHTML = '<img id="img1" src="'+this.result+'" alt=""/>'
           
            
    var c=$('#myCanvas1')[0];
    var ctx=c.getContext("2d");
    // ctx.fillStyle="#FF0000";
    //ctx.fillRect(0,0,150,75);
    var img=document.getElementById("img1");
            
            
    img.onload=function  () {
            	
            	
    ctx.drawImage(img1,0,0,90,90);
            	 
            	 
            	
            	 
    }
           
            
           
    /*var bate64=$('#myCanvas')[0].toDataURL();
            	
    $.post("url",
    {data:bate64},
    function  (result) {
    $('#yhtx').innerHTML='<img id="img1" src="'+result+'"/>'
            		
    }
            
    )
    *
            	
            	
           
    }
 
	
    }*/



    /* function sctp (result,input1,canvas,x,y) {
	   	
    
    if(typeof FileReader === 'undefined'){
    result.innerHTML = "抱歉，你的浏览器不支持 FileReader";
    input1.setAttribute('disabled','disabled');
    }else{
    input1.addEventListener('change',readFile,false);
    }
    function readFile(){
    var file = this.files[0];
    if(!/image\/\w+/.test(file.type)){
    alert("请确保文件为图像类型");
    return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
        
    reader.onload = function(){
    result.innerHTML = '<img id="img" src="'+this.result+'" alt=""/>' 
            
           
    var ctx=canvas.getContext("2d");
    var img=document.getElementById("img");
    img.onload=function  () {
    result.style.display="none";
            
    alert(2);
            
    ctx.drawImage(img,0,0,x,y);
            
    }
	   	
    }
    }
    }
    var result1 = document.getElementById("result1");
    var input1= document.getElementById("inp1");
    var c1=document.getElementById("myCanvas1");
    sctp(result1,input1,c1,90,90);
	   
	   
    var result2 = document.getElementById("result2");
    var input2= document.getElementById("inp2");
    var c2=document.getElementById("myCanvas2");
    sctp(result2,input2,c2,230,150);
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    /* var result1 = document.getElementById("result");
    var inputx1= document.getElementById("inp4");
    
    if(typeof FileReader === 'undefined'){
    result1.innerHTML = "抱歉，你的浏览器不支持 FileReader";
    inputx1.setAttribute('disabled','disabled');
    }else{
    inputx1.addEventListener('change',readFile,false);
    }
                
                
    function readFile(){
    var file = this.files[0];
    if(!/image\/\w+/.test(file.type)){
    alert("请确保文件为图像类型");
    return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
        
    reader.onload = function(){
    alert(3333)
    //alert(this.result);
    // var txt1='<img id="img" src="'+this.result+'" alt=""/>'
    // $("#result").append(txt1);
    result1.innerHTML = '<img id="img" src="'+this.result+'" alt=""/>'
           
            
    var c=$('#myCanvas')[0];
    var ctx=c.getContext("2d");
    // ctx.fillStyle="#FF0000";
    //ctx.fillRect(0,0,150,75);
    var img=document.getElementById("img");
            
            
    img.onload=function  () {
    $('#result').css("display","none");
    $('#canvasd').css("display","block");
    alert(2);
    ctx.drawImage(img,0,0,230,150);
            	 
            	 
            	
            	 
    }
           
    $('#qxsc').click(function  () {
    result.innerHTML="";
    c.height=c.height;
    $('#canvasd').css("display","none");
            	
    }
    )
    $('#qrsc').click(function  () {
    var bate64=$('#myCanvas')[0].toDataURL();
            	
    $.post("url",
    {data:bate64},
    function  (result) {
    $('#sctp').innerHTML='<img id="img1" src="'+result+'"/>'
            		
    }
            
    )
    $('#img1').load(function(){
    $('#canvasd').css("display","none");
    })
            	
            	
    })
            
    }
 
	
    }
    $('#qx').click(function(){
		
    $('#form1')[0].reset();
    })
    $('#qr').click(function  () {
    var form1=$('#form1').serialize();
    alert(form1);
    //$.post("url",
    //{data:form1},
    //function  (data) {
    alert(1);
    //var txt="1"
    var txt="<div class='ckdiv dib'><div class='dib'><img src=''/></div>"+
    "<div class='dib'><table><tr><td>要借物品</td><td></td><td>要借数量</td><td></td></tr>"+
    "<tr><td>要借时间</td><td></td>要还时间<td></td>></tr>"+
    		
    "</tr><tr><td>备注</td><td colspan='3'></td></tr></table></div></div>";
			 	
			
    $('.kcd').append(txt);
    		
    //})
    })
    */
})
