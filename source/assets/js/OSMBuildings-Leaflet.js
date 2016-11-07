var OSMBuildings=function(){function wa(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function Ra(a){for(var b=Infinity,c=-Infinity,d=Infinity,f=-Infinity,e=0,g=a.length-3;e<g;e+=2)b=T(b,a[e]),c=O(c,a[e]),d=T(d,a[e+1]),f=O(f,a[e+1]);return{x:b+(c-b)/2<<0,y:d+(f-d)/2<<0}}function ca(a,b){var c={};a/=U;b/=U;c[Sa]=0>=b?90:1<=b?-90:xa*(2*Ta(Ua(F*(1-2*b)))-P);c[Va]=360*(1===a?1:(a%1+1)%1)-180;return c}function ya(a,b,c){function d(a){if("XDomainRequest"in V&&a!==f.readyState&&(f.readyState=a,f.onreadystatechange))f.onreadystatechange()}
a=a.replace(/\{ *([\w_]+) *\}/g,function(a,c){return b[c]||a});var f="XDomainRequest"in V?new XDomainRequest:new XMLHttpRequest;f.onerror=function(){f.status=500;f.statusText="Error";d(4)};f.ontimeout=function(){f.status=408;f.statusText="Timeout";d(4)};f.onprogress=function(){d(3)};f.onload=function(){f.status=200;f.statusText="Ok";d(4)};f.onreadystatechange=function(){4===f.readyState&&f.status&&!(200>f.status||299<f.status)&&c&&f.responseText&&c(JSON.parse(f.responseText))};d(0);f.open("GET",a);
d(1);f.send(null);d(2);return f}function ja(a){W=X+a.x;Y=y+a.y}function za(a){C=a.w;y=a.h;X=C/2<<0;ka=y/2<<0;W=X;Y=y;s.setSize(C,y);la=G-50}function Aa(a){D=a;U=Wa<<D;a=ca(t+X,q+ka);Ba=Math.abs(40075040*Ca(a.latitude)/ma(2,D+8));A=ma(0.95,D-K);na=I.alpha(A)+"";da=ea.alpha(A)+"";Z=Q.alpha(A)+""}var Da=Da||Array,Ea=Ea||Array,m=Math,Ua=m.exp,Xa=m.log,Ya=m.sin,Ca=m.cos,Fa=m.tan,Ta=m.atan,fa=m.atan2,T=m.min,O=m.max,Ga=m.sqrt,Ha=m.ceil,Ia=m.floor,ma=m.pow,V=window,oa=document;V.console||(V.console={});
var J,pa=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},Za={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",
darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",
fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",
navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",
sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},R=function(a,b,c,d){this.H=a;this.S=b;this.L=c;this.A=d},m=R.prototype;m.toString=function(){var a=Math.min(360,Math.max(0,this.H)),b=Math.min(1,Math.max(0,this.S)),
c=Math.min(1,Math.max(0,this.L)),d=Math.min(1,Math.max(0,this.A)),f;if(0===b)a=f=b=c;else{var e=0.5>c?c*(1+b):c+b-c*b,c=2*c-e,a=a/360,b=pa(c,e,a+1/3);f=pa(c,e,a);a=pa(c,e,a-1/3)}b*=255;f*=255;a*=255;return 1===d?"#"+(16777216+(b<<16)+(f<<8)+a).toString(16).slice(1,7):"rgba("+[Math.round(b),Math.round(f),Math.round(a),d.toFixed(2)].join()+")"};m.hue=function(a){return new R(this.H*a,this.S,this.L,this.A)};m.saturation=function(a){return new R(this.H,this.S*a,this.L,this.A)};m.lightness=function(a){return new R(this.H,
this.S,this.L*a,this.A)};m.alpha=function(a){return new R(this.H,this.S,this.L,this.A*a)};J=function(a){var b=0,c=0,d=0,f=1,e;a=(""+a).toLowerCase().replace("grey","gray");a=Za[a]||a;if(e=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(e[1],16),c=parseInt(e[2],16),d=parseInt(e[3],16);if(e=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(e[1],10),c=parseInt(e[2],10),d=parseInt(e[3],10),f=e[4]?parseFloat(e[5]):1;b/=255;c/=255;d/=255;a=Math.max(b,c,d);var g=Math.min(b,c,d),h;e=(a+g)/
2;var l=a-g;if(l){g=0.5<e?l/(2-a-g):l/(a+g);switch(a){case b:h=(c-d)/l+(c<d?6:0);break;case c:h=(d-b)/l+2;break;case d:h=(b-c)/l+4}h*=60}else h=g=0;return new R(h,g,e,f)};var Ja,m=Math,qa=m.PI,x=m.sin,H=m.cos,Ka=m.tan,La=m.asin,Ma=m.atan2,M=qa/180,ga=23.4397*M;Ja=function(a,b,c){c=M*-c;b*=M;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=M*(357.5291+0.98560028*a),f=M*(1.9148*x(d)+0.02*x(2*d)+3E-4*x(3*d)),f=d+f+102.9372*M+qa,d=La(x(0)*H(ga)+H(0)*x(ga)*x(f)),f=Ma(x(f)*H(ga)-Ka(0)*x(ga),H(f));c=M*(280.16+
360.9856235*a)-c-f;return{altitude:La(x(b)*x(d)+H(b)*H(d)*H(c)),azimuth:Ma(x(c),H(c)*x(b)-Ka(d)*H(b))-qa/2}};var B={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",getWinding:function(a){var b,c,d,f,e=0,g,h;g=0;for(h=a.length-3;g<h;g+=2)b=a[g],c=a[g+1],d=a[g+2],f=a[g+3],e+=b*f-d*c;return 0<e/2?this.clockwise:this.counterClockwise},makeWinding:function(a,b){if(this.getWinding(a)===b)return a;for(var c=[],d=a.length-2;0<=d;d-=2)c.push(a[d],
a[d+1]);return c},toMeters:function(a){a=""+a;var b=parseFloat(a);return b===a||~a.indexOf("m")?b<<0:~a.indexOf("yd")?b*this.YARD_TO_METER<<0:~a.indexOf("ft")?b*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+a[1]*this.INCH_TO_METER<<0):b<<0},getRadius:function(a){for(var b=90,c=-90,d=0,f=a.length;d<f;d+=2)b=T(b,a[d]),c=O(c,a[d]);return 6378137*((c-b)/xa)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",
gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",
shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||a]||null},alignProperties:function(a){var b={};a=a||{};b.height=this.toMeters(a.height);b.height||(a["building:height"]&&(b.height=this.toMeters(a["building:height"])),a.levels&&(b.height=a.levels*this.METERS_PER_LEVEL<<0),a["building:levels"]&&
(b.height=a["building:levels"]*this.METERS_PER_LEVEL<<0),b.height||(b.height=$a));b.minHeight=this.toMeters(a.min_height);b.min_height||(a["building:min_height"]&&(b.minHeight=this.toMeters(a["building:min_height"])),a.min_level&&(b.minHeight=a.min_level*this.METERS_PER_LEVEL<<0),a["building:min_level"]&&(b.minHeight=a["building:min_level"]*this.METERS_PER_LEVEL<<0));b.wallColor=a.wallColor||a.color;b.wallColor||(a.color&&(b.wallColor=a.color),a["building:material"]&&(b.wallColor=this.getMaterialColor(a["building:material"])),
a["building:facade:material"]&&(b.wallColor=this.getMaterialColor(a["building:facade:material"])),a["building:cladding"]&&(b.wallColor=this.getMaterialColor(a["building:cladding"])),a["building:color"]&&(b.wallColor=a["building:color"]),a["building:colour"]&&(b.wallColor=a["building:colour"]));b.roofColor=a.roofColor;b.roofColor||(a["roof:material"]&&(b.roofColor=this.getMaterialColor(a["roof:material"])),a["building:roof:material"]&&(b.roofColor=this.getMaterialColor(a["building:roof:material"])),
a["roof:color"]&&(b.roofColor=a["roof:color"]),a["roof:colour"]&&(b.roofColor=a["roof:colour"]),a["building:roof:color"]&&(b.roofColor=a["building:roof:color"]),a["building:roof:colour"]&&(b.roofColor=a["building:roof:colour"]));switch(a["building:shape"]){case "cone":case "cylinder":b.shape=a["building:shape"];break;case "dome":b.shape="dome";break;case "sphere":b.shape="cylinder"}if(("cone"===a["roof:shape"]||"dome"===a["roof:shape"])&&a["roof:height"])b.shape="cylinder",b.roofShape=a["roof:shape"],
b.roofHeight=this.toMeters(a["roof:height"]);b.roofHeight&&(b.height=O(0,b.height-b.roofHeight));return b}},Na,Oa=function(a){var b,c,d,f,e,g=[],h=[],l=0;d=[];switch(a.type){case "GeometryCollection":b=0;for(c=a.geometries.length;b<c;b++)if(g=Oa(a.geometries[b]))d=d.concat(g);return d;case "Polygon":f=a.coordinates;break;case "MultiPolygon":f=a.coordinates[0];break;default:return d}e=f[0];b=0;for(c=e.length;b<c;b++)g.push(e[b][1],e[b][0]),void 0!==e[b][2]&&(l+=e[b][2]);b=0;for(c=f.length-1;b<c;b++){e=
f[b+1];h[b]=[];a=0;for(d=e.length;a<d;a++)h[b].push(e[a][1],e[a][0]);h[b]=B.makeWinding(h[b],B.counterClockwise)}return[{outer:B.makeWinding(g,B.clockwise),inner:h.length?h:null,height:l/f[0].length}]};Na=function(a,b){var c,d,f,e,g=[],h,l,j,k;c=0;for(d=a.length;c<d;c++)if(h=a[c],!("Feature"!==h.type||!1===b(h))){j=B.alignProperties(h.properties);l=Oa(h.geometry);f=0;for(e=l.length;f<e;f++){k=j;var n={},v=void 0;for(v in k)k.hasOwnProperty(v)&&(n[v]=k[v]);k=n;k.footprint=l[f].outer;if("cone"===k.shape||
"cylinder"===k.shape)k.radius=B.getRadius(k.footprint);k.holes=l[f].inner;k.id=h.id||h.properties.id||[k.footprint[0],k.footprint[1],k.height,k.minHeight].join();g.push(k)}}return g};var Pa,Qa=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},sa=function(a){if(a){for(var b=[],c,d=0,f=a.length;d<f;d++)c=ra[a[d]],b.push(c[0],c[1]);b[b.length-2]!==b[0]&&b[b.length-1]!==b[1]&&b.push(b[0],b[1]);if(!(8>b.length))return b}},ab=function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c]);return a},ta=function(a,b){var c=B.alignProperties(a.tags);a.id&&(c.id=a.id);b&&(c.footprint=B.makeWinding(b,B.clockwise));if("cone"===c.shape||"cylinder"===c.shape)c.radius=B.getRadius(c.footprint);return c},ra,$,ha,ia;Pa=function(a,b){ra={};$={};ha=[];ia=b;for(var c,d=0,f=a.length;d<f;d++)switch(c=a[d],c.type){case "node":ra[c.id]=[c.lat,c.lon];break;case "way":if(Qa(c)){var e=void 0,e=void 0;if((e=sa(c.nodes))&&!1!==ia(c))e=ta(c,e),ha.push(e)}else if(e=c.tags,!e||!e.highway&&!e.railway&&
!e.landuse)$[c.id]=c;break;case "relation":var g=c,h=void 0,l=void 0;c=[];var j=l=void 0,k=void 0,e=void 0;if(Qa(g)&&!("multipolygon"!==g.tags.type&&"building"!==g.tags.type||!1===ia(g))){for(var h=g.members,l=j=void 0,k=[],n=0,v=h.length;n<v;n++)j=h[n],"way"===j.type&&$[j.ref]&&(!j.role||"outer"===j.role?l=$[j.ref]:("inner"===j.role||"enclave"===j.role)&&k.push($[j.ref]));h=l?{outer:l,inner:k}:void 0;if(h&&(j=ta(g),l=h.outer))if((k=sa(l.nodes))&&!1!==ia(l)){l=ta(l,k);g=0;for(k=h.inner.length;g<k;g++)(e=
sa(h.inner[g].nodes))&&c.push(B.makeWinding(e,B.counterClockwise));c.length&&(l.holes=c);ha.push(ab(l,j))}}}return ha};var F=Math.PI,P=F/2,bb=F/4,xa=180/F,Wa=256,K=15,Sa="latitude",Va="longitude",C=0,y=0,X=0,ka=0,t=0,q=0,D,U,I=J("rgba(200, 190, 180)"),ea=I.lightness(0.8),Q=I.lightness(1.2),na=""+I,da=""+ea,Z=""+Q,S,Ba=1,A=1,la,$a=5,W,Y,G=450,aa,ua={time:new Date,data:{},add:function(a,b){this.data[b]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-
5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},E={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},getPixelFootprint:function(a){for(var b,c,d=new Da(a.length),f=0,e=a.length-1;f<e;f+=2)b=a[f+1],c=T(1,O(0,0.5-Xa(Fa(bb+P*a[f]/180))/F/2)),b=(b/360+0.5)*U<<0,c=c*U<<0,d[f]=b,d[f+1]=c;a=d;d=a.length/2;f=new Ea(d);e=0;b=d-1;var g,h,l,j=[],k=[],n=[];for(f[e]=f[b]=1;b;){g=0;for(c=e+1;c<b;c++){h=a[2*c];var v=a[2*c+1],p=a[2*e],m=a[2*e+1],
u=a[2*b],t=a[2*b+1],q=u-p,w=t-m,r=void 0;if(0!==q||0!==w)r=((h-p)*q+(v-m)*w)/(q*q+w*w),1<r?(p=u,m=t):0<r&&(p+=q*r,m+=w*r);q=h-p;w=v-m;h=q*q+w*w;h>g&&(l=c,g=h)}2<g&&(f[l]=1,j.push(e),k.push(l),j.push(l),k.push(b));e=j.pop();b=k.pop()}for(c=0;c<d;c++)f[c]&&n.push(a[2*c],a[2*c+1]);d=n;if(!(8>d.length))return d},createClosure:function(a){var b=this;return function(c){c=b.parse(c);ua.add(c,a);b.addRenderItems(c,!0)}},parse:function(a){return!a?[]:"FeatureCollection"===a.type?Na(a.features,this.each):a.osm3s?
Pa(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,b){for(var c=this.scale(a),d=0,f=c.length;d<f;d++)this.currentItemsIndex[c[d].id]||(c[d].scale=b?0:1,this.items.push(c[d]),this.currentItemsIndex[c[d].id]=1);S||(S=setInterval(function(){for(var a=E.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);s.render();b||(clearInterval(S),S=null)},33))},scale:function(a){var b,c,d,f,e=[],g,
h,l,j,k,n,v,p,m,q=4/ma(2,D-K);b=0;for(c=a.length;b<c;b++)if(g=a[b],h=g.height/q,l=isNaN(g.minHeight)?0:g.minHeight/q,!(l>la)&&(j=this.getPixelFootprint(g.footprint))){p=[];if(g.holes){d=0;for(f=g.holes.length;d<f;d++)(m=this.getPixelFootprint(g.holes[d]))&&p.push(m)}f=d=null;if(g.wallColor&&(k=J(g.wallColor)))d=k.alpha(A),f=""+d.lightness(0.8),d=""+d;n=null;if(g.roofColor&&(k=J(g.roofColor)))n=""+k.alpha(A);v=g.roofHeight/q;h<=l&&0>=v||e.push({id:g.id,footprint:j,height:T(h,la),minHeight:l,wallColor:d,
altColor:f,roofColor:n,roofShape:g.roofShape,roofHeight:v,center:Ra(j),holes:p.length?p:null,shape:g.shape,radius:g.radius/Ba})}return e},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=this.parse(a),!0)},load:function(a){this.url=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=
!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),ya(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(D<K))if(this.isStatic)this.addRenderItems(this.staticData);else if(this.url){var a,b,c,d,f=ca(t,q);a=ca(t+C,q+y);var e=0.0075*Ha(f.latitude/0.0075),g=0.015*Ha(a.longitude/0.015);a=0.0075*Ia(a.latitude/0.0075);for(f=0.015*Ia(f.longitude/0.015);a<=e;a+=0.0075)for(b=f;b<=g;b+=0.015)a=this.cropDecimals(a),b=
this.cropDecimals(b),d=a+","+b,(c=ua.get(d))?this.addRenderItems(c):ya(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(b+0.015),s:a,w:b},this.createClosure(d));ua.purge()}},each:function(){}},z={circle:function(a,b,c,d,f){a.fillStyle=f;a.beginPath();a.arc(b,c,d,0,2*F);a.stroke();a.fill()},draw:function(a,b,c,d,f,e,g,h,l,j){var k=G/(G-e);e=ba.project(b,c,k);f*=k;g&&(k=G/(G-g),c=ba.project(b,c,k),b=c.x,c=c.y,d*=k);(k=z.getTangents(b,c,d,e.x,e.y,f))?(g=fa(k[0].y1-c,k[0].x1-b),k=fa(k[1].y1-
c,k[1].x1-b)):(g=0,k=1.5*F);a.fillStyle=h;a.beginPath();a.arc(e.x,e.y,f,P,g,!0);a.arc(b,c,d,g,P);a.closePath();a.fill();a.fillStyle=l;a.beginPath();a.arc(e.x,e.y,f,k,P,!0);a.arc(b,c,d,P,k);a.closePath();a.fill();z.circle(a,e.x,e.y,f,j)},shadow:function(a,b,c,d,f,e,g){e=N.project(b,c,e);var h;g&&(c=N.project(b,c,g),b=c.x,c=c.y);var l=z.getTangents(b,c,d,e.x,e.y,f);l?(g=fa(l[0].y1-c,l[0].x1-b),h=fa(l[1].y1-c,l[1].x1-b),a.moveTo(l[1].x2,l[1].y2),a.arc(e.x,e.y,f,h,g),a.arc(b,c,d,g,h)):(a.moveTo(b+d,c),
a.arc(b,c,d,0,2*F))},footprintMask:function(a,b,c,d){a.moveTo(b+d,c);a.arc(b,c,d,0,2*F)},getTangents:function(a,b,c,d,f,e){var g=a-d,h=b-f,l=c-e,j=g*g+h*h;if(!(j<=l*l)){var j=Ga(j),g=-g/j,h=-h/j,l=l/j,j=[],k,n,v;k=Ga(O(0,1-l*l));for(var p=1;-1<=p;p-=2)n=g*l-p*k*h,v=h*l+p*k*g,j.push({x1:a+c*n<<0,y1:b+c*v<<0,x2:d+e*n<<0,y2:f+e*v<<0});return j}}},ba={project:function(a,b,c){return{x:(a-W)*c+W<<0,y:(b-Y)*c+Y<<0}},drawSolid:function(a,b,c,d,f){for(var e={x:0,y:0},g={x:0,y:0},h,l,j=[],k=0,n=a.length-3;k<
n;k+=2)e.x=a[k]-t,e.y=a[k+1]-q,g.x=a[k+2]-t,g.y=a[k+3]-q,h=this.project(e.x,e.y,b),l=this.project(g.x,g.y,b),c&&(e=this.project(e.x,e.y,c),g=this.project(g.x,g.y,c)),(g.x-e.x)*(h.y-e.y)>(h.x-e.x)*(g.y-e.y)&&(this.context.fillStyle=e.x<g.x&&e.y<g.y||e.x>g.x&&e.y>g.y?f:d,this.drawFace([g.x,g.y,e.x,e.y,h.x,h.y,l.x,l.y])),j[k]=h.x,j[k+1]=h.y;return j},drawFace:function(a,b,c){var d=this.context,f,e,g,h;if(a.length){d.beginPath();d.moveTo(a[0],a[1]);f=2;for(e=a.length;f<e;f+=2)d.lineTo(a[f],a[f+1]);if(c){f=
0;for(e=c.length;f<e;f++){a=c[f];d.moveTo(a[0],a[1]);g=2;for(h=a.length;g<h;g+=2)d.lineTo(a[g],a[g+1])}}d.closePath();b&&d.stroke();d.fill()}},render:function(){var a=this.context;a.clearRect(0,0,C,y);if(!(D<K||aa)){var b,c,d,f,e,g,h,l={x:W+t,y:Y+q},j=t,k=t+C,n=q,v=q+y,p,m,u,r,s,w=E.items;w.sort(function(a,b){return a.minHeight-b.minHeight||wa(b.center,l)-wa(a.center,l)||b.height-a.height});b=0;for(c=w.length;b<c;b++)if(e=w[b],!va.isSimple(e)){u=!1;p=e.footprint;d=0;for(f=p.length-1;d<f;d+=2)u||(u=
p[d]>j&&p[d]<k&&p[d+1]>n&&p[d+1]<v);if(u)switch(d=1>e.scale?e.height*e.scale:e.height,g=G/(G-d),h=f=0,e.minHeight&&(f=1>e.scale?e.minHeight*e.scale:e.minHeight,h=G/(G-f)),u=e.wallColor||na,r=e.altColor||da,s=e.roofColor||Z,a.strokeStyle=r,e.shape){case "cylinder":g=e.center.x-t;h=e.center.y-q;p=e.radius;z.draw(a,g,h,p,p,d,f,u,r,s);"cone"===e.roofShape&&z.draw(a,g,h,p,0,d+e.roofHeight,d,s,""+J(s).lightness(0.9));"dome"===e.roofShape&&z.draw(a,g,h,p,p/2,d+e.roofHeight,d,s,""+J(s).lightness(0.9));break;
case "cone":z.draw(a,e.center.x-t,e.center.y-q,e.radius,0,d,f,u,r);break;case "dome":z.draw(a,e.center.x-t,e.center.y-q,e.radius,e.radius/2,d,f,u,r);break;default:p=this.drawSolid(p,g,h,u,r);m=[];if(e.holes){d=0;for(f=e.holes.length;d<f;d++)m[d]=this.drawSolid(e.holes[d],g,h,u,r)}a.fillStyle=s;this.drawFace(p,!0,m)}}}}},va={maxZoom:K+2,maxHeight:2,isSimple:function(a){return D<=this.maxZoom&&a.height<this.maxHeight},getFace:function(a){for(var b=[],c=0,d=a.length-3;c<d;c+=2)b[c]=a[c]-t,b[c+1]=a[c+
1]-q;return b},drawFace:function(a,b){if(a.length){var c=this.context,d,f,e,g;c.beginPath();c.moveTo(a[0],a[1]);d=2;for(f=a.length;d<f;d+=2)c.lineTo(a[d],a[d+1]);if(b){d=0;for(f=b.length;d<f;d++){a=b[d];c.moveTo(a[0],a[1]);e=2;for(g=a.length;e<g;e+=2)c.lineTo(a[e],a[e+1])}}c.closePath();c.stroke();c.fill()}},render:function(){this.context.clearRect(0,0,C,y);if(!(D<K||aa||D>this.maxZoom)){var a,b,c,d,f,e=t,g=t+C,h=q,l=q+y,j,k,n,m=E.items;a=0;for(b=m.length;a<b;a++)if(f=m[a],!(f.height>=this.maxHeight)){n=
!1;j=f.footprint;c=0;for(d=j.length-1;c<d;c+=2)n||(n=j[c]>e&&j[c]<g&&j[c+1]>h&&j[c+1]<l);if(n)if(c=f.altColor||da,n=f.roofColor||Z,this.context.strokeStyle=c,"cylinder"===f.shape||"cone"===f.shape||"dome"===f.shape)z.circle(this.context,f.center.x-t,f.center.y-q,f.radius,n);else{j=this.getFace(j);k=[];if(f.holes){c=0;for(d=f.holes.length;c<d;c++)k[c]=this.getFace(f.holes[c])}this.context.fillStyle=n;this.drawFace(j,k)}}}}},N={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,
direction:{x:0,y:0},project:function(a,b,c){return{x:a+this.direction.x*c,y:b+this.direction.y*c}},render:function(){var a=this.context,b,c,d;a.clearRect(0,0,C,y);if(this.enabled&&!(D<K||aa))if(b=ca(t+X,q+ka),b=Ja(this.date,b.latitude,b.longitude),!(0>=b.altitude)){c=1/Fa(b.altitude);d=5>c?0.75:5*(1/c);this.direction.x=Ca(b.azimuth)*c;this.direction.y=Ya(b.azimuth)*c;var f,e,g,h,l,j,k,n,m,p,r,u,s,x;b=[];c=[];var w=E.items;a.canvas.style.opacity=d/(2*A);a.shadowColor=this.blurColor;a.shadowBlur=this.blurSize*
(A/2);a.fillStyle=this.color;a.beginPath();d=0;for(f=w.length;d<f;d++){j=w[d];m=!1;k=j.footprint;h=[];e=0;for(g=k.length-1;e<g;e+=2)h[e]=l=k[e]-t,h[e+1]=n=k[e+1]-q,m||(m=0<l&&l<C&&0<n&&n<y);if(m)if(l=1>j.scale?j.height*j.scale:j.height,k=0,j.minHeight&&(k=1>j.scale?j.minHeight*j.scale:j.minHeight),"cylinder"===j.shape||"cone"===j.shape||"dome"===j.shape)b.push({shape:j.shape,center:{x:j.center.x-t,y:j.center.y-q},radius:j.radius,h:l,mh:k}),("cone"===j.roofShape||"dome"===j.roofShape)&&b.push({shape:j.roofShape,
center:{x:j.center.x-t,y:j.center.y-q},radius:j.radius,h:l+j.roofHeight,mh:l});else{n=null;e=0;for(g=h.length-3;e<g;e+=2)m=h[e],p=h[e+1],r=h[e+2],u=h[e+3],s=this.project(m,p,l),x=this.project(r,u,l),k&&(p=this.project(m,p,k),u=this.project(r,u,k),m=p.x,p=p.y,r=u.x,u=u.y),(r-m)*(s.y-p)>(s.x-m)*(u-p)?(1===n&&a.lineTo(m,p),n=0,e||a.moveTo(m,p),a.lineTo(r,u)):(0===n&&a.lineTo(s.x,s.y),n=1,e||a.moveTo(s.x,s.y),a.lineTo(x.x,x.y));k||c.push(h);if(j.holes){e=0;for(g=j.holes.length;e<g;e++){n=j.holes[e];m=
[n[0]-t,n[1]-q];a.moveTo(m[0],m[1]);h=2;for(l=n.length;h<l;h+=2)m[h]=n[h]-t,m[h+1]=n[h+1]-q,a.lineTo(m[h],m[h+1]);k||c.push(m)}}}}d=0;for(f=b.length;d<f;d++)switch(j=b[d],w=j.center.x,e=j.center.y,g=j.radius,j.shape){case "cylinder":z.shadow(a,w,e,g,g,j.h,j.mh);break;case "cone":z.shadow(a,w,e,g,0,j.h,j.mh);break;case "dome":z.shadow(a,w,e,g,g/2,j.h,j.mh)}a.closePath();a.fill();a.shadowBlur=null;a.globalCompositeOperation="destination-out";a.beginPath();d=0;for(f=c.length;d<f;d++){n=c[d];a.moveTo(n[0],
n[1]);e=2;for(g=n.length;e<g;e+=2)a.lineTo(n[e],n[e+1]);a.lineTo(n[0],n[1])}d=0;for(f=b.length;d<f;d++)j=b[d],("cylinder"===j.shape||"cone"===j.shape||"dome"===j.shape)&&!j.mh&&z.footprintMask(a,j.center.x,j.center.y,j.radius);a.fillStyle="#00ff00";a.fill();a.globalCompositeOperation="source-over"}}},s={container:oa.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;
N.context=this.createContext();va.context=this.createContext();ba.context=this.createContext()},render:function(){N.render();va.render();ba.render()},createContext:function(){var a=oa.createElement("CANVAS");a.style.webkitTransform="translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var b=a.getContext("2d");b.lineCap="round";b.lineJoin="round";b.lineWidth=1;b.mozImageSmoothingEnabled=!1;b.webkitImageSmoothingEnabled=!1;this.items.push(a);
this.container.appendChild(a);return b},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,b){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=a,this.items[c].height=b},screenshot:function(){var a=oa.createElement("CANVAS"),b=a.getContext("2d"),c,d,f;a.width=C;a.height=y;clearInterval(S);S=null;f=E.items;c=0;for(d=f.length;c<d;c++)f[c].scale=1;this.render();c=0;for(d=this.items.length;c<d;c++)f=
this.items[c],""!==f.style.opacity&&(b.globalAlpha=parseFloat(f.style.opacity)),b.drawImage(f,0,0),b.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,b){this.container.style.left=a+"px";this.container.style.top=b+"px"}};s.init();var m=function(a){this.offset={x:0,y:0};a.addLayer(this)},r=m.prototype;r.onAdd=function(a){this.map=a;s.appendTo(a._panes.overlayPane);var b=this.getOffset(),c=a.getPixelOrigin();za({w:a._size.x,h:a._size.y});var d=c.y-b.y;t=c.x-b.x;q=d;Aa(a._zoom);s.setPosition(-b.x,
-b.y);a.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);if(a.options.zoomAnimation)a.on("zoomanim",this.onZoom,this);a.attributionControl&&a.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');E.update()};r.onRemove=function(){var a=this.map;a.attributionControl&&a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');
a.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);a.options.zoomAnimation&&a.off("zoomanim",this.onZoom,this);s.remove()};r.onMove=function(){var a=this.getOffset();ja({x:this.offset.x-a.x,y:this.offset.y-a.y});ba.render()};r.onMoveEnd=function(){if(this.skipMoveEnd)this.skipMoveEnd=!1;else{var a=this.map,b=this.getOffset(),c=a.getPixelOrigin();this.offset=b;s.setPosition(-b.x,-b.y);ja({x:0,y:0});
za({w:a._size.x,h:a._size.y});a=c.y-b.y;t=c.x-b.x;q=a;s.render();E.update()}};r.onZoomStart=function(){aa=!0;s.render()};r.onZoom=function(){};r.onZoomEnd=function(){var a=this.map,b=this.getOffset(),c=a.getPixelOrigin(),d=c.y-b.y;t=c.x-b.x;q=d;a=a._zoom;aa=!1;Aa(a);E.update();s.render();this.skipMoveEnd=!0};r.onResize=function(){};r.onViewReset=function(){var a=this.getOffset();this.offset=a;s.setPosition(-a.x,-a.y);ja({x:0,y:0})};r.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};
r.setStyle=function(a){a=a||{};var b;if(b=a.color||a.wallColor)I=J(b),na=""+I.alpha(A),ea=I.lightness(0.8),da=""+ea.alpha(A),Q=I.lightness(1.2),Z=""+Q.alpha(A);a.roofColor&&(Q=J(a.roofColor),Z=""+Q.alpha(A));void 0!==a.shadows&&(N.enabled=!!a.shadows);s.render();return this};r.setDate=function(a){N.date=a;N.render();return this};r.loadData=function(a){E.load(a);return this};r.setData=function(a){E.set(a);return this};r.each=function(a,b){E.each=function(c){return a.call(b,c)};return this};r.screenshot=
function(a){var b=s.screenshot();a&&(V.location.href=b.replace("image/png","image/octet-stream"));return b};m.VERSION="0.1.9a";m.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return m}();
