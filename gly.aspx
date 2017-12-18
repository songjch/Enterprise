<%@ Page Language="C#" Inherits="System.Web.Mvc.ViewPage" %>

<!DOCTYPE html>

<html>
<head runat="server">
		<meta charset="utf-8"/>
		<title>个人用户</title>
		<link rel="stylesheet"  type="text/css" href="/Content/01.css" />
		<script src="/Scripts/jquery-3.2.1.js"></script>
		<script src="/Scripts/02.js"></script>
		
	</head>
	<body>
		<div class="bg1">
			<div class="header ">
			
			<div id="yhtx" class="dib rel">
				<div class="abs yhtxd" >
				    <canvas  id="myCanvas1" width="90" height="90"></canvas>
			    </div>
			    <div class="abs yhtxd">
				    <input  id="inp1"  type="file" accept="image/*"/>
			    </div>
			</div>
			
			<div id="yhxx" class="dib">
				<table id="yhtab">
					<tr>
						<td>用户名</td>
						<td id="yhyhm"></td>
						<td>性别</td>
						<td id="yhxb"></td>
						
					</tr>
					<tr><td>部门</td>
						<td id="yhbm"></td>
						<td>职务</td>
						<td id="yhzw"></td>
						
					</tr>
				</table>
			</div>
			<div id="result1"></div>
			
			
		    </div>
		    <div class="grbody">
			    <div class="left fl">
			    	<ul class="w100">
			    		<li class="li1">
			    			<a  dy="lr" class="f20 lr db a1 tc" href="javascript:viod(0)">录入</a>
			    		</li>
			    		<li class="li1">
			    			<a dy="yaoj" class="f20 yaoj db a1 tc" href="javascript:viod(0)">要借</a>
			    		</li>
			    		<li class="li1">
			    			<a dy="yaol" class="f20 yaol db a1 tc" href="javascript:viod(0)">要领</a>
			    		</li>
			    		<li class="li1">
			    			<a dy="yaoh" class="f20 yaoh db a1 tc" href="javascript:viod(0)">要还</a>
			    		</li>
			    		<li class="li1">
			    			<a dy="kc" class="f20 kc db a1 tc" href="javascript:viod(0)">库存<span class="db">12345678</span></a>
			    			
			    		</li>
			    		<li class="li1">
			    			<a dy="yij" class="f20 yij db a1 tc" href="javascript:viod(0)">已借<span class="db">12345678</span></a>
			    			
			    		</li>
			    		<li class="li1">
			    			<a dy="yil" class="f20 yil db a1 tc" href="javascript:viod(0)">已领<span class="db">12345678</span></a>
			    			
			    		</li>
			    		<li class="li1">
			    			<a dy="yih" class="f20 yih db a1 tc" href="javascript:viod(0)">已还<span class="db">12345678</span></a>
			    			
			    		</li>
			    	</ul>
			    </div>
			    <div class="right fl rel">
			    	
			    	<div dy="lr" class="abs lrd tongyongdiv on">
			    		<div class="lrk">
			    			<div>
			    				<form id="form1">
			    					<div>
			    						<div class="dib">
			    						<div class="tpxs" id="sctp">
			    							  <canvas id="myCanvas2" width="230" height="150" style="border:1px solid #d3d3d3;">
                                     </canvas>
			    						</div>
			    						<div class=" rel" >
	    							        <button  id="xzb" class="dib"type="button">选择图片上传</button>
	    							        <input type="file" name="tp" accept="image/*"  class="abs" id="inp2"/>
	    							    </div>
			    				        
			    					</div>
			    					<div class="dib wpxx rel">
			    					    <table>
			    					    	<tr>
			    					    		<td>名称</td>
			    					    		<td>
			    					    			<input type="text" name="mingcheng" />
			    					    		</td>
			    					    		<td>价格</td>
			    					    		<td>
			    					    			<input type="text" name="jiage" />
			    					    		</td>
			    					    	</tr>
			    					    	<tr>
			    					    		<td>数量</td>
			    					    		<td>
			    					    			<input type="text" name="num" />
			    					    		</td>
			    					    		<td>名称</td>
			    					    		<td>
			    					    			<input type="text" name="" />
			    					    		</td>
			    					    	</tr>
			    					    	<tr>
			    					    		<td>名称</td>
			    					    		<td>
			    					    			<input type="text" name="" />
			    					    		</td>
			    					    		<td>名称</td>
			    					    		<td>
			    					    			<input type="text" name="" />
			    					    		</td>
			    					    	</tr>
			    					    	
			    					    </table>
			    					</div>
			    					<div class="dib rel bz">
			    						备注
			    					    <textarea  name="bz">
			    					                 
			    					    </textarea>		
			    					</div>
			    					<div class="dib qx rel">
			    						<button id="qx" class="db" type="button">取消</button>
			    						<button id="qr" class="db" type="button">确认</button>
			    						
			    					</div>
			    					</div>
			    					<div id="result2">
			    			    	
			    			        </div>
			    			    
			    			    </form>
			    			   
			    			</div>
			    			
			    		</div>
			    	</div>
			    	<div  dy="yaoj" class="abs yaojd tongyongdiv in"><h1>2</h1></div>
			    	<div dy="yaol" class="abs yaold tongyongdiv in"><h1>3</h1></div>
			    	<div dy="yaoh" class="abs yaohd tongyongdiv in"><h1>4</h1></div>
			    	<div dy="kc" class="abs kcd tongyongdiv in"><h1>5</h1></div>
			    	<div dy="yij" class="abs yijd tongyongdiv in"><h1>6</h1></div>
			    	<div dy="yil" class="abs yild tongyongdiv in"><h1>7</h1></div>
			    	<div dy="yih" class="abs yihd tongyongdiv in"><h1>8</h1></div>
			    </div>
		    </div>
		</div>
		
	</body>
</html>
