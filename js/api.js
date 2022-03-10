/* Javascript 샘플 코드 */     
     
var xhr = new XMLHttpRequest();     
var HttpUrl = "http://openapi.nsdi.go.kr/nsdi/map/LandInfoBaseMapUTMKService"; /*URL*/     
var parameter = '?' + encodeURIComponent("authkey") +"="+encodeURIComponent("인증키"); /*authkey Key*/     
parameter += "&" + encodeURIComponent("layers") + "=" + encodeURIComponent("0"); /* 화면에 표출할 레이어명의 나열, 값은 쉼표로 구분 */  
parameter += "&" + encodeURIComponent("crs") + "=" + encodeURIComponent("EPSG:5179"); /* 좌표 체계(산출물을 위한 SRS) */  
parameter += "&" + encodeURIComponent("bbox") + "=" + encodeURIComponent("493368.05375831545,1482162.8092609146,1530302.3275239088,2074169.201760915"); /* 크기(extent)를 정의하는 범위(bounding box) */  
parameter += "&" + encodeURIComponent("width") + "=" + encodeURIComponent("915"); /* 반환 이미지의 너비(픽셀) */  
parameter += "&" + encodeURIComponent("height") + "=" + encodeURIComponent("700"); /* 반환 이미지의 높이(픽셀) */  
parameter += "&" + encodeURIComponent("format") + "=" + encodeURIComponent("image/png"); /* 반환 이미지 형식(image/png 또는 image/jpeg 또는 image/gif) */  
parameter += "&" + encodeURIComponent("transparent") + "=" + encodeURIComponent("false"); /* 반환 이미지 배경의 투명 여부(true 또는 false[기본값]) */  
parameter += "&" + encodeURIComponent("bgcolor") + "=" + encodeURIComponent("0xFFFFFF"); /* 반환 이미지의 배경색(0xRRGGBB) */  
parameter += "&" + encodeURIComponent("exceptions") + "=" + encodeURIComponent("blank"); /* 예외 발생 시 처리 방법(blank 또는 xml 또는 inimage) */  

 
xhr.open('GET', HttpUrl + parameter);     
xhr.onreadystatechange = function () {     
    if (this.readyState == 4) {     
        alert('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);     
   }     
};     
xhr.send('');     