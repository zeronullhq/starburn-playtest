var Hh=Object.defineProperty;var Gh=(i,t,e)=>t in i?Hh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var H=(i,t,e)=>Gh(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fa="170",Vh=0,Ja=1,Wh=2,Cc=1,Xh=2,yn=3,Xn=0,Me=1,Re=2,Gn=0,Ii=1,Mn=2,Za=3,Qa=4,qh=5,ni=100,Yh=101,$h=102,jh=103,Kh=104,Jh=200,Zh=201,Qh=202,tu=203,_o=204,yo=205,eu=206,nu=207,iu=208,su=209,ru=210,ou=211,au=212,lu=213,cu=214,Mo=0,bo=1,So=2,Fi=3,wo=4,Eo=5,To=6,Ao=7,Rc=0,hu=1,uu=2,Vn=0,du=1,fu=2,pu=3,mu=4,gu=5,vu=6,xu=7,Pc=300,Oi=301,ki=302,Co=303,Ro=304,xr=306,Po=1e3,si=1001,Io=1002,He=1003,_u=1004,Ss=1005,en=1006,Rr=1007,ri=1008,Tn=1009,Ic=1010,Lc=1011,hs=1012,pa=1013,ai=1014,an=1015,ms=1016,ma=1017,ga=1018,Bi=1020,Dc=35902,Uc=1021,Nc=1022,nn=1023,Fc=1024,Oc=1025,Li=1026,zi=1027,va=1028,xa=1029,kc=1030,_a=1031,ya=1033,tr=33776,er=33777,nr=33778,ir=33779,Lo=35840,Do=35841,Uo=35842,No=35843,Fo=36196,Oo=37492,ko=37496,Bo=37808,zo=37809,Ho=37810,Go=37811,Vo=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,$o=37817,jo=37818,Ko=37819,Jo=37820,Zo=37821,sr=36492,Qo=36494,ta=36495,Bc=36283,ea=36284,na=36285,ia=36286,yu=3200,Mu=3201,zc=0,bu=1,zn="",Oe="srgb",Vi="srgb-linear",_r="linear",te="srgb",di=7680,tl=519,Su=512,wu=513,Eu=514,Hc=515,Tu=516,Au=517,Cu=518,Ru=519,el=35044,nl="300 es",Sn=2e3,lr=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pr=Math.PI/180,sa=180/Math.PI;function gs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Pu(i,t){return(i%t+t)%t}function Ir(i,t,e){return(1-e)*i+e*t}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],v=n[8],g=s[0],m=s[3],u=s[6],M=s[1],x=s[4],_=s[7],I=s[2],A=s[5],E=s[8];return r[0]=o*g+a*M+l*I,r[3]=o*m+a*x+l*A,r[6]=o*u+a*_+l*E,r[1]=c*g+h*M+d*I,r[4]=c*m+h*x+d*A,r[7]=c*u+h*_+d*E,r[2]=f*g+p*M+v*I,r[5]=f*m+p*x+v*A,r[8]=f*u+p*_+v*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,v=e*d+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Lr.makeScale(t,e)),this}rotate(t){return this.premultiply(Lr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Ft;function Gc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Iu(){const i=cr("canvas");return i.style.display="block",i}const il={};function rs(i){i in il||(il[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Du(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?_r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const sl=[.64,.33,.3,.6,.15,.06],rl=[.2126,.7152,.0722],ol=[.3127,.329],al=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Vi]:{primaries:sl,whitePoint:ol,transfer:_r,toXYZ:al,fromXYZ:ll,luminanceCoefficients:rl,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:sl,whitePoint:ol,transfer:te,toXYZ:al,fromXYZ:ll,luminanceCoefficients:rl,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let fi;class Nu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=cr("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fu=0;class Vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dr(s[o].image)):r.push(Dr(s[o]))}else r=Dr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;class Te extends Wi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=si,s=si,r=en,o=ri,a=nn,l=Tn,c=Te.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=gs(),this.name="",this.source=new Vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Pc;Te.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,s=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(p+1)/2,I=(u+1)/2,A=(h+f)/4,E=(d+g)/4,R=(v+m)/4;return x>_&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=E/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=E/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(d-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ku extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wc extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bu extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(d!==g||l!==f||c!==p||h!==v){let m=1-a;const u=l*f+c*p+h*v+d*g,M=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,u*M);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const _=a*M;if(l=l*m+f*_,c=c*m+p*_,h=h*m+v*_,d=d*m+g*_,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+h*d+l*p-c*f,t[e+1]=l*v+h*f+c*d-a*p,t[e+2]=c*v+h*p+a*f-l*d,t[e+3]=h*v-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new C,cl=new sn;class ci{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),Es.subVectors(this.max,Ki),pi.subVectors(t.a,Ki),mi.subVectors(t.b,Ki),gi.subVectors(t.c,Ki),Ln.subVectors(mi,pi),Dn.subVectors(gi,mi),jn.subVectors(pi,gi);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-jn.z,jn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,jn.z,0,-jn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-jn.y,jn.x,0];return!Nr(e,pi,mi,gi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Nr(e,pi,mi,gi,Es))?!1:(Ts.crossVectors(Ln,Dn),e=[Ts.x,Ts.y,Ts.z],Nr(e,pi,mi,gi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new C,new C,new C,new C,new C,new C,new C,new C],je=new C,ws=new ci,pi=new C,mi=new C,gi=new C,Ln=new C,Dn=new C,jn=new C,Ki=new C,Es=new C,Ts=new C,Kn=new C;function Nr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Kn.fromArray(i,r);const a=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const zu=new ci,Ji=new C,Fr=new C;class qn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Fr)),this.expandByPoint(Ji.copy(t.center).sub(Fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new C,Or=new C,As=new C,Un=new C,kr=new C,Cs=new C,Br=new C;class yr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Or.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Or);const r=t.distanceTo(e)*.5,o=-this.direction.dot(As),a=Un.dot(this.direction),l=-Un.dot(As),c=Un.lengthSq(),h=Math.abs(1-o*o);let d,f,p,v;if(h>0)if(d=o*l-a,f=o*a-l,v=r*h,d>=0)if(f>=-v)if(f<=v){const g=1/h;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Or).addScaledVector(As,f),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){kr.subVectors(e,t),Cs.subVectors(n,t),Br.crossVectors(kr,Cs);let o=this.direction.dot(Br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const l=a*this.direction.dot(Cs.crossVectors(Un,Cs));if(l<0)return null;const c=a*this.direction.dot(kr.cross(Un));if(c<0||l+c>o)return null;const h=-a*Un.dot(Br);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,o,a,l,c,h,d,f,p,v,g,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,p,v,g,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,p,v,g,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*d,v=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+v*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,v=c*h,g=c*d;e[0]=f+g*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-v,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,v=c*h,g=c*d;e[0]=f-g*a,e[4]=-o*d,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,v=a*h,g=a*d;e[0]=l*h,e[4]=v*c-p,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*h,e[4]=g-f*d,e[8]=v*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+v,e[10]=f-g*d}else if(t.order==="XZY"){const f=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+g,e[5]=o*h,e[9]=p*d-v,e[2]=v*d-p,e[6]=a*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hu,t,Gu)}lookAt(t,e,n){const s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Nn.crossVectors(n,Ne),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Nn.crossVectors(n,Ne)),Nn.normalize(),Rs.crossVectors(Ne,Nn),s[0]=Nn.x,s[4]=Rs.x,s[8]=Ne.x,s[1]=Nn.y,s[5]=Rs.y,s[9]=Ne.y,s[2]=Nn.z,s[6]=Rs.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],u=n[14],M=n[3],x=n[7],_=n[11],I=n[15],A=s[0],E=s[4],R=s[8],S=s[12],y=s[1],P=s[5],O=s[9],B=s[13],q=s[2],j=s[6],F=s[10],W=s[14],k=s[3],st=s[7],ut=s[11],yt=s[15];return r[0]=o*A+a*y+l*q+c*k,r[4]=o*E+a*P+l*j+c*st,r[8]=o*R+a*O+l*F+c*ut,r[12]=o*S+a*B+l*W+c*yt,r[1]=h*A+d*y+f*q+p*k,r[5]=h*E+d*P+f*j+p*st,r[9]=h*R+d*O+f*F+p*ut,r[13]=h*S+d*B+f*W+p*yt,r[2]=v*A+g*y+m*q+u*k,r[6]=v*E+g*P+m*j+u*st,r[10]=v*R+g*O+m*F+u*ut,r[14]=v*S+g*B+m*W+u*yt,r[3]=M*A+x*y+_*q+I*k,r[7]=M*E+x*P+_*j+I*st,r[11]=M*R+x*O+_*F+I*ut,r[15]=M*S+x*B+_*W+I*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],v=t[3],g=t[7],m=t[11],u=t[15];return v*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+g*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],v=t[12],g=t[13],m=t[14],u=t[15],M=d*m*c-g*f*c+g*l*p-a*m*p-d*l*u+a*f*u,x=v*f*c-h*m*c-v*l*p+o*m*p+h*l*u-o*f*u,_=h*g*c-v*d*c+v*a*p-o*g*p-h*a*u+o*d*u,I=v*d*l-h*g*l-v*a*f+o*g*f+h*a*m-o*d*m,A=e*M+n*x+s*_+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=M*E,t[1]=(g*f*r-d*m*r-g*s*p+n*m*p+d*s*u-n*f*u)*E,t[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*u+n*l*u)*E,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*E,t[4]=x*E,t[5]=(h*m*r-v*f*r+v*s*p-e*m*p-h*s*u+e*f*u)*E,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*u-e*l*u)*E,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*E,t[8]=_*E,t[9]=(v*d*r-h*g*r-v*n*p+e*g*p+h*n*u-e*d*u)*E,t[10]=(o*g*r-v*a*r+v*n*c-e*g*c-o*n*u+e*a*u)*E,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*E,t[12]=I*E,t[13]=(h*g*s-v*d*s+v*n*f-e*g*f-h*n*m+e*d*m)*E,t[14]=(v*a*s-o*g*s-v*n*l+e*g*l+o*n*m-e*a*m)*E,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,v=r*d,g=o*h,m=o*d,u=a*d,M=l*c,x=l*h,_=l*d,I=n.x,A=n.y,E=n.z;return s[0]=(1-(g+u))*I,s[1]=(p+_)*I,s[2]=(v-x)*I,s[3]=0,s[4]=(p-_)*A,s[5]=(1-(f+u))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(v+x)*E,s[9]=(m-M)*E,s[10]=(1-(f+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),a=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const c=1/r,h=1/o,d=1/a;return Ke.elements[0]*=c,Ke.elements[1]*=c,Ke.elements[2]*=c,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Sn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,v;if(a===Sn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===lr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Sn){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,p=(n+s)*h;let v,g;if(a===Sn)v=(o+r)*d,g=-2*d;else if(a===lr)v=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new C,Ke=new Jt,Hu=new C(0,0,0),Gu=new C(1,1,1),Nn=new C,Rs=new C,Ne=new C,hl=new Jt,ul=new sn;class De{constructor(t=0,e=0,n=0,s=De.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ul.setFromEuler(this),this.setFromQuaternion(ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}De.DEFAULT_ORDER="XYZ";class Ma{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vu=0;const dl=new C,xi=new sn,gn=new Jt,Ps=new C,Zi=new C,Wu=new C,Xu=new sn,fl=new C(1,0,0),pl=new C(0,1,0),ml=new C(0,0,1),gl={type:"added"},qu={type:"removed"},_i={type:"childadded",child:null},zr={type:"childremoved",child:null};class me extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new C,e=new De,n=new sn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ft}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(fl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return dl.copy(t).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Zi,Ps,this.up):gn.lookAt(Ps,Zi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(gn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gl),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qu),zr.child=t,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gl),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,Wu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new C(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new C,vn=new C,Hr=new C,xn=new C,yi=new C,Mi=new C,vl=new C,Gr=new C,Vr=new C,Wr=new C,Xr=new ee,qr=new ee,Yr=new ee;class Ze{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Je.subVectors(s,e),vn.subVectors(n,e),Hr.subVectors(t,e);const o=Je.dot(Je),a=Je.dot(vn),l=Je.dot(Hr),c=vn.dot(vn),h=vn.dot(Hr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(o,xn.y),l.addScaledVector(a,xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xr.setScalar(0),qr.setScalar(0),Yr.setScalar(0),Xr.fromBufferAttribute(t,e),qr.fromBufferAttribute(t,n),Yr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xr,r.x),o.addScaledVector(qr,r.y),o.addScaledVector(Yr,r.z),o}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),vn.subVectors(t,e),Je.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Je.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;yi.subVectors(s,n),Mi.subVectors(r,n),Gr.subVectors(t,n);const l=yi.dot(Gr),c=Mi.dot(Gr);if(l<=0&&c<=0)return e.copy(n);Vr.subVectors(t,s);const h=yi.dot(Vr),d=Mi.dot(Vr);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yi,o);Wr.subVectors(t,r);const p=yi.dot(Wr),v=Mi.dot(Wr);if(v>=0&&p<=v)return e.copy(r);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Mi,a);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return vl.subVectors(r,s),a=(d-h)/(d-h+(p-v)),e.copy(s).addScaledVector(vl,a);const u=1/(m+g+f);return o=g*u,a=f*u,e.copy(n).addScaledVector(yi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function $r(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Pu(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=$r(o,r,t+1/3),this.g=$r(o,r,t),this.b=$r(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=Xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Yt.fromWorkingColorSpace(we.copy(this),t),Math.round(_e(we.r*255,0,255))*65536+Math.round(_e(we.g*255,0,255))*256+Math.round(_e(we.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Oe){Yt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Is);const n=Ir(Fn.h,Is.h,e),s=Ir(Fn.s,Is.s,e),r=Ir(Fn.l,Is.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Et;Et.NAMES=Xc;let Yu=0;class hi extends Wi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=gs(),this.name="",this.blending=Ii,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=yo,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==yo&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new C,Ls=new gt;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),t}}class qc extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yc extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $u=0;const Xe=new Jt,jr=new me,bi=new C,Fe=new ci,Qi=new ci,xe=new C;class ae extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Yc:qc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Fe.min,Qi.min),Fe.expandByPoint(xe),xe.addVectors(Fe.max,Qi.max),Fe.expandByPoint(xe)):(Fe.expandByPoint(Qi.min),Fe.expandByPoint(Qi.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xe.fromBufferAttribute(a,c),l&&(bi.fromBufferAttribute(t,c),xe.add(bi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new C,l[R]=new C;const c=new C,h=new C,d=new C,f=new gt,p=new gt,v=new gt,g=new C,m=new C;function u(R,S,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),v.sub(f);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(P),a[R].add(g),a[S].add(g),a[y].add(g),l[R].add(m),l[S].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){const y=M[R],P=y.start,O=y.count;for(let B=P,q=P+O;B<q;B+=3)u(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const x=new C,_=new C,I=new C,A=new C;function E(R){I.fromBufferAttribute(s,R),A.copy(I);const S=a[R];x.copy(S),x.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(A,S);const P=_.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=M.length;R<S;++R){const y=M[R],P=y.start,O=y.count;for(let B=P,q=P+O;B<q;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new Ae(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ae,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new Jt,Jn=new yr,Ds=new qn,_l=new C,Us=new C,Ns=new C,Fs=new C,Kr=new C,Os=new C,yl=new C,ks=new C;class ft extends me{constructor(t=new ae,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Kr.fromBufferAttribute(d,t),o?Os.addScaledVector(Kr,h):Os.addScaledVector(Kr.sub(e),h))}e.add(Os)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Ds.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Ds,_l)===null||Jn.origin.distanceToSquared(_l)>(t.far-t.near)**2))&&(xl.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(xl),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],u=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,I=x;_<I;_+=3){const A=a.getX(_),E=a.getX(_+1),R=a.getX(_+2);s=Bs(this,u,t,n,c,h,d,A,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,u=g;m<u;m+=3){const M=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Bs(this,o,t,n,c,h,d,M,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],u=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,I=x;_<I;_+=3){const A=_,E=_+1,R=_+2;s=Bs(this,u,t,n,c,h,d,A,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,u=g;m<u;m+=3){const M=m,x=m+1,_=m+2;s=Bs(this,o,t,n,c,h,d,M,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ju(i,t,e,n,s,r,o,a){let l;if(t.side===Me?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Xn,a),l===null)return null;ks.copy(a),ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ks);return c<e.near||c>e.far?null:{distance:c,point:ks.clone(),object:i}}function Bs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Us),i.getVertexPosition(l,Ns),i.getVertexPosition(c,Fs);const h=ju(i,t,e,n,Us,Ns,Fs,yl);if(h){const d=new C;Ze.getBarycoord(yl,Us,Ns,Fs,d),s&&(h.uv=Ze.getInterpolatedAttribute(s,a,l,c,d,new gt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,l,c,d,new gt)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};Ze.getNormal(Us,Ns,Fs,f.normal),h.face=f,h.barycoord=d}return h}class fe extends ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(d,2));function v(g,m,u,M,x,_,I,A,E,R,S){const y=_/E,P=I/R,O=_/2,B=I/2,q=A/2,j=E+1,F=R+1;let W=0,k=0;const st=new C;for(let ut=0;ut<F;ut++){const yt=ut*P-B;for(let Lt=0;Lt<j;Lt++){const Ot=Lt*y-O;st[g]=Ot*M,st[m]=yt*x,st[u]=q,c.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[u]=A>0?1:-1,h.push(st.x,st.y,st.z),d.push(Lt/E),d.push(1-ut/R),W+=1}}for(let ut=0;ut<R;ut++)for(let yt=0;yt<E;yt++){const Lt=f+yt+j*ut,Ot=f+yt+j*(ut+1),Y=f+(yt+1)+j*(ut+1),Q=f+(yt+1)+j*ut;l.push(Lt,Ot,Q),l.push(Ot,Y,Q),k+=6}a.addGroup(p,k,S),p+=k,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){const t={};for(let e=0;e<i.length;e++){const n=Hi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ku(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $c(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Ju={clone:Hi,merge:Ce};var Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jc extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new C,Ml=new gt,bl=new gt;class ke extends jc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Ml,bl),e.subVectors(bl,Ml)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Si=-90,wi=1;class td extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(Si,wi,t,e);s.layers=this.layers,this.add(s);const r=new ke(Si,wi,t,e);r.layers=this.layers,this.add(r);const o=new ke(Si,wi,t,e);o.layers=this.layers,this.add(o);const a=new ke(Si,wi,t,e);a.layers=this.layers,this.add(a);const l=new ke(Si,wi,t,e);l.layers=this.layers,this.add(l);const c=new ke(Si,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Kc extends Te{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ed extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new fe(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Me,blending:Gn});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=en),new td(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Jr=new C,nd=new C,id=new Ft;class Bn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Jr.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||id.getNormalMatrix(t),s=this.coplanarPoint(Jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new qn,zs=new C;class ba{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],u=s[12],M=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-u).normalize(),n[1].setComponents(l+r,f+c,m+p,_+u).normalize(),n[2].setComponents(l+o,f+h,m+v,_+M).normalize(),n[3].setComponents(l-o,f-h,m-v,_-M).normalize(),n[4].setComponents(l-a,f-d,m-g,_-x).normalize(),e===Sn)n[5].setComponents(l+a,f+d,m+g,_+x).normalize();else if(e===lr)n[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(zs.x=s.normal.x>0?t.max.x:t.min.x,zs.y=s.normal.y>0?t.max.y:t.min.y,zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],g=d[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const g=d[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class hn extends ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],v=[],g=[],m=[];for(let u=0;u<h;u++){const M=u*f-o;for(let x=0;x<c;x++){const _=x*d-r;v.push(_,-M,0),g.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){const x=M+c*u,_=M+c*(u+1),I=M+1+c*(u+1),A=M+1+c*u;p.push(x,_,A),p.push(_,I,A)}this.setIndex(p),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.widthSegments,t.heightSegments)}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_d=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,op=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:rd,alphahash_pars_fragment:od,alphamap_fragment:ad,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:hd,aomap_fragment:ud,aomap_pars_fragment:dd,batching_pars_vertex:fd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:_d,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Md,clipping_planes_pars_vertex:bd,clipping_planes_vertex:Sd,color_fragment:wd,color_pars_fragment:Ed,color_pars_vertex:Td,color_vertex:Ad,common:Cd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Id,displacementmap_vertex:Ld,emissivemap_fragment:Dd,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:kd,envmap_pars_fragment:Bd,envmap_pars_vertex:zd,envmap_physical_pars_fragment:Jd,envmap_vertex:Hd,fog_vertex:Gd,fog_pars_vertex:Vd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:Yd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:jd,lights_pars_begin:Kd,lights_toon_fragment:Zd,lights_toon_pars_fragment:Qd,lights_phong_fragment:tf,lights_phong_pars_fragment:ef,lights_physical_fragment:nf,lights_physical_pars_fragment:sf,lights_fragment_begin:rf,lights_fragment_maps:of,lights_fragment_end:af,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:hf,logdepthbuf_vertex:uf,map_fragment:df,map_pars_fragment:ff,map_particle_fragment:pf,map_particle_pars_fragment:mf,metalnessmap_fragment:gf,metalnessmap_pars_fragment:vf,morphinstance_vertex:xf,morphcolor_vertex:_f,morphnormal_vertex:yf,morphtarget_pars_vertex:Mf,morphtarget_vertex:bf,normal_fragment_begin:Sf,normal_fragment_maps:wf,normal_pars_fragment:Ef,normal_pars_vertex:Tf,normal_vertex:Af,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Lf,opaque_fragment:Df,packing:Uf,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:kf,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:Hf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:qf,skinning_vertex:Yf,skinnormal_vertex:$f,specularmap_fragment:jf,specularmap_pars_fragment:Kf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Zf,transmission_fragment:Qf,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:sp,background_vert:rp,background_frag:op,backgroundCube_vert:ap,backgroundCube_frag:lp,cube_vert:cp,cube_frag:hp,depth_vert:up,depth_frag:dp,distanceRGBA_vert:fp,distanceRGBA_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:_p,meshbasic_frag:yp,meshlambert_vert:Mp,meshlambert_frag:bp,meshmatcap_vert:Sp,meshmatcap_frag:wp,meshnormal_vert:Ep,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:Cp,meshphysical_vert:Rp,meshphysical_frag:Pp,meshtoon_vert:Ip,meshtoon_frag:Lp,points_vert:Dp,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:Op,sprite_frag:kp},it={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},on={basic:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ce([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ce([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Et(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ce([it.points,it.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ce([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ce([it.common,it.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ce([it.sprite,it.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ce([it.common,it.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ce([it.lights,it.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};on.physical={uniforms:Ce([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Hs={r:0,b:0,g:0},Qn=new De,Bp=new Jt;function zp(i,t,e,n,s,r,o){const a=new Et(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function v(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function g(M){let x=!1;const _=v(M);_===null?u(a,l):_&&_.isColor&&(u(_,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const _=v(x);_&&(_.isCubeTexture||_.mapping===xr)?(h===void 0&&(h=new ft(new fe(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Hi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qn.copy(x.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(Qn)),h.material.toneMapped=Yt.getTransfer(_.colorSpace)!==te,(d!==_||f!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ft(new hn(2,2),new An({name:"BackgroundMaterial",uniforms:Hi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function u(M,x){M.getRGB(Hs,$c(i)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,u(a,l)},render:g,addToRenderList:m}}function Hp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,P,O,B,q){let j=!1;const F=d(B,O,P);r!==F&&(r=F,c(r.object)),j=p(y,B,O,q),j&&v(y,B,O,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,_(y,P,O,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,O){const B=O.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let j=q[P.id];j===void 0&&(j={},q[P.id]=j);let F=j[B];return F===void 0&&(F=f(l()),j[B]=F),F}function f(y){const P=[],O=[],B=[];for(let q=0;q<e;q++)P[q]=0,O[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,P,O,B){const q=r.attributes,j=P.attributes;let F=0;const W=O.getAttributes();for(const k in W)if(W[k].location>=0){const ut=q[k];let yt=j[k];if(yt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;F++}return r.attributesNum!==F||r.index!==B}function v(y,P,O,B){const q={},j=P.attributes;let F=0;const W=O.getAttributes();for(const k in W)if(W[k].location>=0){let ut=j[k];ut===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),q[k]=yt,F++}r.attributes=q,r.attributesNum=F,r.index=B}function g(){const y=r.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){const O=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;O[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),q[y]!==P&&(i.vertexAttribDivisor(y,P),q[y]=P)}function M(){const y=r.newAttributes,P=r.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==y[O]&&(i.disableVertexAttribArray(O),P[O]=0)}function x(y,P,O,B,q,j,F){F===!0?i.vertexAttribIPointer(y,P,O,q,j):i.vertexAttribPointer(y,P,O,B,q,j)}function _(y,P,O,B){g();const q=B.attributes,j=O.getAttributes(),F=P.defaultAttributeValues;for(const W in j){const k=j[W];if(k.location>=0){let st=q[W];if(st===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){const ut=st.normalized,yt=st.itemSize,Lt=t.get(st);if(Lt===void 0)continue;const Ot=Lt.buffer,Y=Lt.type,Q=Lt.bytesPerElement,ct=Y===i.INT||Y===i.UNSIGNED_INT||st.gpuType===pa;if(st.isInterleavedBufferAttribute){const nt=st.data,At=nt.stride,Dt=st.offset;if(nt.isInstancedInterleavedBuffer){for(let zt=0;zt<k.locationSize;zt++)u(k.location+zt,nt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let zt=0;zt<k.locationSize;zt++)m(k.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let zt=0;zt<k.locationSize;zt++)x(k.location+zt,yt/k.locationSize,Y,ut,At*Q,(Dt+yt/k.locationSize*zt)*Q,ct)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<k.locationSize;nt++)u(k.location+nt,st.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<k.locationSize;nt++)m(k.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let nt=0;nt<k.locationSize;nt++)x(k.location+nt,yt/k.locationSize,Y,ut,yt*Q,yt/k.locationSize*nt*Q,ct)}}else if(F!==void 0){const ut=F[W];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(k.location,ut);break;case 3:i.vertexAttrib3fv(k.location,ut);break;case 4:i.vertexAttrib4fv(k.location,ut);break;default:i.vertexAttrib1fv(k.location,ut)}}}}M()}function I(){R();for(const y in n){const P=n[y];for(const O in P){const B=P[O];for(const q in B)h(B[q].object),delete B[q];delete P[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const O in P){const B=P[O];for(const q in B)h(B[q].object),delete B[q];delete P[O]}delete n[y.id]}function E(y){for(const P in n){const O=n[P];if(O[y.id]===void 0)continue;const B=O[y.id];for(const q in B)h(B[q].object),delete B[q];delete O[y.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function Gp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g]*f[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Tn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==an&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:I,maxSamples:A}}function Wp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,x=M*4;let _=u.clippingState||null;l.value=_,_=h(v,f,x,p);for(let I=0;I!==x;++I)_[I]=e[I];u.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const u=p+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,_=p;x!==g;++x,_+=4)o.copy(d[x]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Xp(i){let t=new WeakMap;function e(o,a){return a===Co?o.mapping=Oi:a===Ro&&(o.mapping=ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===Ro)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ed(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Zc extends jc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ri=4,Sl=[.125,.215,.35,.446,.526,.582],ii=20,Zr=new Zc,wl=new Et;let Qr=null,to=0,eo=0,no=!1;const ei=(1+Math.sqrt(5))/2,Ei=1/ei,El=[new C(-ei,Ei,0),new C(ei,Ei,0),new C(-Ei,0,ei),new C(Ei,0,ei),new C(0,ei,-Ei),new C(0,ei,Ei),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Tl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Qr=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qr,to,eo),this._renderer.xr.enabled=no,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qr=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ms,format:nn,colorSpace:Vi,depthBuffer:!1},s=Al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Yp(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,s){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(wl),h.toneMapping=Vn,h.autoClear=!1;const p=new Qt({name:"PMREM.Background",side:Me,depthWrite:!1,depthTest:!1}),v=new ft(new fe,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(wl),g=!0);for(let u=0;u<6;u++){const M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Gs(s,M*x,u>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Oi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Gs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=El[(s-r-1)%El.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ft(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ii-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const u=[];let M=0;for(let E=0;E<ii;++E){const R=E/g,S=Math.exp(-R*R/2);u.push(S),E===0?M+=S:E<m&&(M+=2*S)}for(let E=0;E<u.length;E++)u[E]=u[E]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const _=this._sizeLods[s],I=3*_*(s>x-Ri?s-x+Ri:0),A=4*(this._cubeSize-_);Gs(e,I,A,3*_,2*_),l.setRenderTarget(e),l.render(d,Zr)}}function qp(i){const t=[],e=[],n=[];let s=i;const r=i-Ri+1+Sl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ri?l=Sl[o-i+Ri-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,g=3,m=2,u=1,M=new Float32Array(g*v*p),x=new Float32Array(m*v*p),_=new Float32Array(u*v*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,R=A>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];M.set(S,g*v*A),x.set(f,m*v*A);const y=[A,A,A,A,A,A];_.set(y,u*v*A)}const I=new ae;I.setAttribute("position",new Ae(M,g)),I.setAttribute("uv",new Ae(x,m)),I.setAttribute("faceIndex",new Ae(_,u)),t.push(I),s>Ri&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Al(i,t,e){const n=new li(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yp(i,t,e){const n=new Float32Array(ii),s=new C(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cl(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Rl(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Sa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Co||l===Ro,h=l===Oi||l===ki;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Tl(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Tl(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Kp(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,u=g.length;m<u;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const g=p[v];for(let m=0,u=g.length;m<u;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let x=0,_=M.length;x<_;x+=3){const I=M[x+0],A=M[x+1],E=M[x+2];f.push(I,A,A,E,E,I)}}else if(v!==void 0){const M=v.array;g=v.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const I=x+0,A=x+1,E=x+2;f.push(I,A,A,E,E,I)}}else return;const m=new(Gc(f)?Yc:qc)(f,1);m.version=g;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Jp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*o,v),e.update(p,n,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];e.update(m,n,1)}function d(f,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,v);let u=0;for(let M=0;M<v;M++)u+=p[M]*g[M];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Zp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qp(i,t,e){const n=new WeakMap,s=new ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let I=a.attributes.position.count*_,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const E=new Float32Array(I*A*4*d),R=new Wc(E,I,A,d);R.type=an,R.needsUpdate=!0;const S=_*4;for(let P=0;P<d;P++){const O=u[P],B=M[P],q=x[P],j=I*A*4*P;for(let F=0;F<O.count;F++){const W=F*S;v===!0&&(s.fromBufferAttribute(O,F),E[j+W+0]=s.x,E[j+W+1]=s.y,E[j+W+2]=s.z,E[j+W+3]=0),g===!0&&(s.fromBufferAttribute(B,F),E[j+W+4]=s.x,E[j+W+5]=s.y,E[j+W+6]=s.z,E[j+W+7]=0),m===!0&&(s.fromBufferAttribute(q,F),E[j+W+8]=s.x,E[j+W+9]=s.y,E[j+W+10]=s.z,E[j+W+11]=q.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new gt(I,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function tm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Qc extends Te{constructor(t,e,n,s,r,o,a,l,c,h=Li){if(h!==Li&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=ai),n===void 0&&h===zi&&(n=Bi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const th=new Te,Pl=new Qc(1,1),eh=new Wc,nh=new Bu,ih=new Kc,Il=[],Ll=[],Dl=new Float32Array(16),Ul=new Float32Array(9),Nl=new Float32Array(4);function Xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mr(i,t){let e=Ll[t];e===void 0&&(e=new Int32Array(t),Ll[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Nl.set(n),i.uniformMatrix2fv(this.addr,!1,Nl),ve(e,n)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),ve(e,n)}}function am(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),ve(e,n)}}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Pl.compareFunction=Hc,r=Pl):r=th,e.setTexture2D(t||r,s)}function vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nh,s)}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ih,s)}function _m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||eh,s)}function ym(i){switch(i){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return om;case 35676:return am;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return _m}}function Mm(i,t){i.uniform1fv(this.addr,t)}function bm(i,t){const e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Sm(i,t){const e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function wm(i,t){const e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Em(i,t){const e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tm(i,t){const e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Am(i,t){const e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cm(i,t){i.uniform1iv(this.addr,t)}function Rm(i,t){i.uniform2iv(this.addr,t)}function Pm(i,t){i.uniform3iv(this.addr,t)}function Im(i,t){i.uniform4iv(this.addr,t)}function Lm(i,t){i.uniform1uiv(this.addr,t)}function Dm(i,t){i.uniform2uiv(this.addr,t)}function Um(i,t){i.uniform3uiv(this.addr,t)}function Nm(i,t){i.uniform4uiv(this.addr,t)}function Fm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||th,r[o])}function Om(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nh,r[o])}function km(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ih,r[o])}function Bm(i,t,e){const n=this.cache,s=t.length,r=Mr(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||eh,r[o])}function zm(i){switch(i){case 5126:return Mm;case 35664:return bm;case 35665:return Sm;case 35666:return wm;case 35674:return Em;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Cm;case 35667:case 35671:return Rm;case 35668:case 35672:return Pm;case 35669:case 35673:return Im;case 5125:return Lm;case 36294:return Dm;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Bm}}class Hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ym(e.type)}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zm(e.type)}}class Vm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function Fl(i,t){i.seq.push(t),i.map[t.id]=t}function Wm(i,t,e){const n=i.name,s=n.length;for(io.lastIndex=0;;){const r=io.exec(n),o=io.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fl(e,c===void 0?new Hm(a,i,t):new Gm(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Vm(a),Fl(e,d)),e=d}}}class rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Wm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ol(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Xm=37297;let qm=0;function Ym(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const kl=new Ft;function $m(i){Yt._getMatrix(kl,Yt.workingColorSpace,i);const t=`mat3( ${kl.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case _r:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ym(i.getShaderSource(t),o)}else return s}function jm(i,t){const e=$m(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Km(i,t){let e;switch(t){case du:e="Linear";break;case fu:e="Reinhard";break;case pu:e="Cineon";break;case mu:e="ACESFilmic";break;case vu:e="AgX";break;case xu:e="Neutral";break;case gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new C;function Jm(){Yt.getLuminanceCoefficients(Vs);const i=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function Qm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function t0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function os(i){return i!==""}function zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const e0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ra(i){return i.replace(e0,i0)}const n0=new Map;function i0(i,t){let e=Bt[t];if(e===void 0){const n=n0.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ra(e)}const s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(s0,r0)}function r0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function o0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function a0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case ki:t="ENVMAP_TYPE_CUBE";break;case xr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ki:t="ENVMAP_MODE_REFRACTION";break}return t}function c0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rc:t="ENVMAP_BLENDING_MULTIPLY";break;case hu:t="ENVMAP_BLENDING_MIX";break;case uu:t="ENVMAP_BLENDING_ADD";break}return t}function h0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function u0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=o0(e),c=a0(e),h=l0(e),d=c0(e),f=h0(e),p=Zm(e),v=Qm(r),g=s.createProgram();let m,u,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(os).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(os).join(`
`),u.length>0&&(u+=`
`)):(m=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),u=[Vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,jm("linearToOutputTexel",e.outputColorSpace),Jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),o=ra(o),o=zl(o,e),o=Hl(o,e),a=ra(a),a=zl(a,e),a=Hl(a,e),o=Gl(o),a=Gl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=M+m+o,_=M+u+a,I=Ol(s,s.VERTEX_SHADER,x),A=Ol(s,s.FRAGMENT_SHADER,_);s.attachShader(g,I),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(P){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(g).trim(),B=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(A).trim();let j=!0,F=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,A);else{const W=Bl(s,I,"vertex"),k=Bl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+W+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||q==="")&&(F=!1);F&&(P.diagnostics={runnable:j,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:q,prefix:u}})}s.deleteShader(I),s.deleteShader(A),R=new rr(s,g),S=t0(s,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Xm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=A,this}let d0=0;class f0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new p0(t),e.set(t,n)),n}}class p0{constructor(t){this.id=d0++,this.code=t,this.usedTimes=0}}function m0(i,t,e,n,s,r,o){const a=new Ma,l=new f0,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,O,B){const q=O.fog,j=B.geometry,F=S.isMeshStandardMaterial?O.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),k=W&&W.mapping===xr?W.image.height:null,st=v[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=ut!==void 0?ut.length:0;let Lt=0;j.morphAttributes.position!==void 0&&(Lt=1),j.morphAttributes.normal!==void 0&&(Lt=2),j.morphAttributes.color!==void 0&&(Lt=3);let Ot,Y,Q,ct;if(st){const Zt=on[st];Ot=Zt.vertexShader,Y=Zt.fragmentShader}else Ot=S.vertexShader,Y=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),ct=l.getFragmentShaderID(S);const nt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,zt=B.isBatchedMesh===!0,le=!!S.map,Xt=!!S.matcap,ue=!!W,N=!!S.aoMap,Ve=!!S.lightMap,Gt=!!S.bumpMap,Vt=!!S.normalMap,wt=!!S.displacementMap,se=!!S.emissiveMap,St=!!S.metalnessMap,T=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,K=S.dispersion>0,Z=S.iridescence>0,$=S.sheen>0,Mt=S.transmission>0,ot=b&&!!S.anisotropyMap,dt=z&&!!S.clearcoatMap,qt=z&&!!S.clearcoatNormalMap,tt=z&&!!S.clearcoatRoughnessMap,pt=Z&&!!S.iridescenceMap,Tt=Z&&!!S.iridescenceThicknessMap,Rt=$&&!!S.sheenColorMap,mt=$&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,kt=!!S.specularColorMap,ne=!!S.specularIntensityMap,L=Mt&&!!S.transmissionMap,rt=Mt&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,ht=S.alphaTest>0,at=!!S.alphaHash,Ut=!!S.extensions;let he=Vn;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=i.toneMapping);const be={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Ot,fragmentShader:Y,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:zt,batchingColor:zt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Vi,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:Xt,envMap:ue,envMapMode:ue&&W.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:Ve,bumpMap:Gt,normalMap:Vt,displacementMap:f&&wt,emissiveMap:se,normalMapObjectSpace:Vt&&S.normalMapType===bu,normalMapTangentSpace:Vt&&S.normalMapType===zc,metalnessMap:St,roughnessMap:T,anisotropy:b,anisotropyMap:ot,clearcoat:z,clearcoatMap:dt,clearcoatNormalMap:qt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:Z,iridescenceMap:pt,iridescenceThicknessMap:Tt,sheen:$,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Wt,specularColorMap:kt,specularIntensityMap:ne,transmission:Mt,transmissionMap:L,thicknessMap:rt,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ii&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ht,alphaHash:at,combine:S.combine,mapUv:le&&g(S.map.channel),aoMapUv:N&&g(S.aoMap.channel),lightMapUv:Ve&&g(S.lightMap.channel),bumpMapUv:Gt&&g(S.bumpMap.channel),normalMapUv:Vt&&g(S.normalMap.channel),displacementMapUv:wt&&g(S.displacementMap.channel),emissiveMapUv:se&&g(S.emissiveMap.channel),metalnessMapUv:St&&g(S.metalnessMap.channel),roughnessMapUv:T&&g(S.roughnessMap.channel),anisotropyMapUv:ot&&g(S.anisotropyMap.channel),clearcoatMapUv:dt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(S.sheenRoughnessMap.channel),specularMapUv:Wt&&g(S.specularMap.channel),specularColorMapUv:kt&&g(S.specularColorMap.channel),specularIntensityMapUv:ne&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:rt&&g(S.thicknessMap.channel),alphaMapUv:J&&g(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Vt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(le||J),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Re,flipSided:S.side===Me,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(y,S),x(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=v[S.type];let P;if(y){const O=on[y];P=Ju.clone(O.uniforms)}else P=S.uniforms;return P}function I(S,y){let P;for(let O=0,B=h.length;O<B;O++){const q=h[O];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new u0(i,y,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:R}}function g0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function v0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,v,g,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=g,u.group=m),t++,u}function a(d,f,p,v,g,m){const u=o(d,f,p,v,g,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,v,g,m){const u=o(d,f,p,v,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||v0),n.length>1&&n.sort(f||Wl),s.length>1&&s.sort(f||Wl)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function x0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Xl,i.set(n,[o])):s>=r.length?(o=new Xl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function _0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function y0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let M0=0;function b0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S0(i){const t=new _0,e=y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Jt,o=new Jt;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,u=0,M=0,x=0,_=0,I=0,A=0,E=0;c.sort(b0);for(let S=0,y=c.length;S<y;S++){const P=c[S],O=P.color,B=P.intensity,q=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*B,d+=O.g*B,f+=O.b*B;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],B);E++}else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,k=e.get(P);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=F,p++}else if(P.isSpotLight){const F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(O).multiplyScalar(B),F.distance=q,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[g]=F;const W=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,W.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=W.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=j,_++}g++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(O).multiplyScalar(B),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=F,m++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const W=P.shadow,k=e.get(P);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=P.shadow.matrix,x++}n.point[v]=F,v++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(B),F.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[u]=F,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==I||R.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,R.directionalLength=p,R.pointLength=v,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=I,R.numLightProbes=E,n.version=M0++)}function l(c,h){let d=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let u=0,M=c.length;u<M;u++){const x=c[u];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function ql(i){const t=new S0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function w0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ql(i),t.set(s,[a])):r>=o.length?(a=new ql(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class E0 extends hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T0 extends hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R0(i,t,e){let n=new ba;const s=new gt,r=new gt,o=new ee,a=new E0({depthPacking:Mu}),l=new T0,c={},h=e.maxTextureSize,d={[Xn]:Me,[Me]:Xn,[Re]:Re},f=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:A0,fragmentShader:C0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new ae;v.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ft(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let u=this.type;this.render=function(A,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Gn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=u!==yn&&this.type===yn,q=u===yn&&this.type!==yn;for(let j=0,F=A.length;j<F;j++){const W=A[j],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const st=k.getFrameExtents();if(s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y)),k.map===null||B===!0||q===!0){const yt=this.type!==yn?{minFilter:He,magFilter:He}:{};k.map!==null&&k.map.dispose(),k.map=new li(s.x,s.y,yt),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ut=k.getViewportCount();for(let yt=0;yt<ut;yt++){const Lt=k.getViewport(yt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),O.viewport(o),k.updateMatrices(W,yt),n=k.getFrustum(),_(E,R,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===yn&&M(k,R),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function M(A,E){const R=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new li(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,R,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,R,p,g,null)}function x(A,E,R,S){let y=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=y.uuid,B=E.uuid;let q=c[O];q===void 0&&(q={},c[O]=q);let j=q[B];j===void 0&&(j=y.clone(),q[B]=j,E.addEventListener("dispose",I)),y=j}if(y.visible=E.visible,y.wireframe=E.wireframe,S===yn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=R}return y}function _(A,E,R,S,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===yn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const B=t.update(A),q=A.material;if(Array.isArray(q)){const j=B.groups;for(let F=0,W=j.length;F<W;F++){const k=j[F],st=q[k.materialIndex];if(st&&st.visible){const ut=x(A,st,S,y);A.onBeforeShadow(i,A,E,R,B,ut,k),i.renderBufferDirect(R,null,B,ut,A,k),A.onAfterShadow(i,A,E,R,B,ut,k)}}}else if(q.visible){const j=x(A,q,S,y);A.onBeforeShadow(i,A,E,R,B,j,null),i.renderBufferDirect(R,null,B,j,A,null),A.onAfterShadow(i,A,E,R,B,j,null)}}const O=A.children;for(let B=0,q=O.length;B<q;B++)_(O[B],E,R,S,y)}function I(A){A.target.removeEventListener("dispose",I);for(const R in c){const S=c[R],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const P0={[Mo]:bo,[So]:To,[wo]:Ao,[Fi]:Eo,[bo]:Mo,[To]:So,[Ao]:wo,[Eo]:Fi};function I0(i,t){function e(){let L=!1;const rt=new ee;let X=null;const J=new ee(0,0,0,0);return{setMask:function(ht){X!==ht&&!L&&(i.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){L=ht},setClear:function(ht,at,Ut,he,be){be===!0&&(ht*=he,at*=he,Ut*=he),rt.set(ht,at,Ut,he),J.equals(rt)===!1&&(i.clearColor(ht,at,Ut,he),J.copy(rt))},reset:function(){L=!1,X=null,J.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,X=null,J=null,ht=null;return{setReversed:function(at){if(rt!==at){const Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const he=ht;ht=null,this.setClear(he)}rt=at},getReversed:function(){return rt},setTest:function(at){at?nt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(at){X!==at&&!L&&(i.depthMask(at),X=at)},setFunc:function(at){if(rt&&(at=P0[at]),J!==at){switch(at){case Mo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case Fi:i.depthFunc(i.LEQUAL);break;case wo:i.depthFunc(i.EQUAL);break;case Eo:i.depthFunc(i.GEQUAL);break;case To:i.depthFunc(i.GREATER);break;case Ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=at}},setLocked:function(at){L=at},setClear:function(at){ht!==at&&(rt&&(at=1-at),i.clearDepth(at),ht=at)},reset:function(){L=!1,X=null,J=null,ht=null,rt=!1}}}function s(){let L=!1,rt=null,X=null,J=null,ht=null,at=null,Ut=null,he=null,be=null;return{setTest:function(Zt){L||(Zt?nt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(Zt){rt!==Zt&&!L&&(i.stencilMask(Zt),rt=Zt)},setFunc:function(Zt,Ye,dn){(X!==Zt||J!==Ye||ht!==dn)&&(i.stencilFunc(Zt,Ye,dn),X=Zt,J=Ye,ht=dn)},setOp:function(Zt,Ye,dn){(at!==Zt||Ut!==Ye||he!==dn)&&(i.stencilOp(Zt,Ye,dn),at=Zt,Ut=Ye,he=dn)},setLocked:function(Zt){L=Zt},setClear:function(Zt){be!==Zt&&(i.clearStencil(Zt),be=Zt)},reset:function(){L=!1,rt=null,X=null,J=null,ht=null,at=null,Ut=null,he=null,be=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,u=null,M=null,x=null,_=null,I=null,A=null,E=new Et(0,0,0),R=0,S=!1,y=null,P=null,O=null,B=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=W>=2);let st=null,ut={};const yt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Ot=new ee().fromArray(yt),Y=new ee().fromArray(Lt);function Q(L,rt,X,J){const ht=new Uint8Array(4),at=i.createTexture();i.bindTexture(L,at),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<X;Ut++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(rt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return at}const ct={};ct[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(i.DEPTH_TEST),o.setFunc(Fi),Gt(!1),Vt(Ja),nt(i.CULL_FACE),N(Gn);function nt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function At(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Dt(L,rt){return d[L]!==rt?(i.bindFramebuffer(L,rt),d[L]=rt,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=rt),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function zt(L,rt){let X=p,J=!1;if(L){X=f.get(rt),X===void 0&&(X=[],f.set(rt,X));const ht=L.textures;if(X.length!==ht.length||X[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ut=ht.length;at<Ut;at++)X[at]=i.COLOR_ATTACHMENT0+at;X.length=ht.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function le(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const Xt={[ni]:i.FUNC_ADD,[Yh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};Xt[jh]=i.MIN,Xt[Kh]=i.MAX;const ue={[Jh]:i.ZERO,[Zh]:i.ONE,[Qh]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[ru]:i.SRC_ALPHA_SATURATE,[iu]:i.DST_COLOR,[eu]:i.DST_ALPHA,[tu]:i.ONE_MINUS_SRC_COLOR,[yo]:i.ONE_MINUS_SRC_ALPHA,[su]:i.ONE_MINUS_DST_COLOR,[nu]:i.ONE_MINUS_DST_ALPHA,[ou]:i.CONSTANT_COLOR,[au]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[cu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(L,rt,X,J,ht,at,Ut,he,be,Zt){if(L===Gn){g===!0&&(At(i.BLEND),g=!1);return}if(g===!1&&(nt(i.BLEND),g=!0),L!==qh){if(L!==m||Zt!==S){if((u!==ni||_!==ni)&&(i.blendEquation(i.FUNC_ADD),u=ni,_=ni),Zt)switch(L){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFunc(i.ONE,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,x=null,I=null,A=null,E.set(0,0,0),R=0,m=L,S=Zt}return}ht=ht||rt,at=at||X,Ut=Ut||J,(rt!==u||ht!==_)&&(i.blendEquationSeparate(Xt[rt],Xt[ht]),u=rt,_=ht),(X!==M||J!==x||at!==I||Ut!==A)&&(i.blendFuncSeparate(ue[X],ue[J],ue[at],ue[Ut]),M=X,x=J,I=at,A=Ut),(he.equals(E)===!1||be!==R)&&(i.blendColor(he.r,he.g,he.b,be),E.copy(he),R=be),m=L,S=!1}function Ve(L,rt){L.side===Re?At(i.CULL_FACE):nt(i.CULL_FACE);let X=L.side===Me;rt&&(X=!X),Gt(X),L.blending===Ii&&L.transparent===!1?N(Gn):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),se(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Vt(L){L!==Vh?(nt(i.CULL_FACE),L!==P&&(L===Ja?i.cullFace(i.BACK):L===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),P=L}function wt(L){L!==O&&(F&&i.lineWidth(L),O=L)}function se(L,rt,X){L?(nt(i.POLYGON_OFFSET_FILL),(B!==rt||q!==X)&&(i.polygonOffset(rt,X),B=rt,q=X)):At(i.POLYGON_OFFSET_FILL)}function St(L){L?nt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+j-1),st!==L&&(i.activeTexture(L),st=L)}function b(L,rt,X){X===void 0&&(st===null?X=i.TEXTURE0+j-1:X=st);let J=ut[X];J===void 0&&(J={type:void 0,texture:void 0},ut[X]=J),(J.type!==L||J.texture!==rt)&&(st!==X&&(i.activeTexture(X),st=X),i.bindTexture(L,rt||ct[L]),J.type=L,J.texture=rt)}function z(){const L=ut[st];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){Ot.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ot.copy(L))}function mt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Wt(L,rt){let X=c.get(rt);X===void 0&&(X=new WeakMap,c.set(rt,X));let J=X.get(L);J===void 0&&(J=i.getUniformBlockIndex(rt,L.name),X.set(L,J))}function kt(L,rt){const J=c.get(rt).get(L);l.get(rt)!==J&&(i.uniformBlockBinding(rt,J,L.__bindingPointIndex),l.set(rt,J))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ut={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,u=null,M=null,x=null,_=null,I=null,A=null,E=new Et(0,0,0),R=0,S=!1,y=null,P=null,O=null,B=null,q=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:At,bindFramebuffer:Dt,drawBuffers:zt,useProgram:le,setBlending:N,setMaterial:Ve,setFlipSided:Gt,setCullFace:Vt,setLineWidth:wt,setPolygonOffset:se,setScissorTest:St,activeTexture:T,bindTexture:b,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:pt,texImage3D:Tt,updateUBOMapping:Wt,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Rt,viewport:mt,reset:ne}}function Yl(i,t,e,n){const s=L0(n);switch(e){case Uc:return i*t;case Fc:return i*t;case Oc:return i*t*2;case va:return i*t/s.components*s.byteLength;case xa:return i*t/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case _a:return i*t*2/s.components*s.byteLength;case Nc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case tr:case er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:case No:return Math.max(i,16)*Math.max(t,8)/4;case Lo:case Uo:return Math.max(i,8)*Math.max(t,8)/2;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sr:case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Bc:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L0(i){switch(i){case Tn:case Ic:return{byteLength:1,components:1};case hs:case Lc:case ms:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case ai:case pa:case an:return{byteLength:4,components:1};case Dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,b){return p?new OffscreenCanvas(T,b):cr("canvas")}function g(T,b,z){let K=1;const Z=St(T);if((Z.width>z||Z.height>z)&&(K=z/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(K*Z.width),Mt=Math.floor(K*Z.height);d===void 0&&(d=v($,Mt));const ot=b?v($,Mt):d;return ot.width=$,ot.height=Mt,ot.getContext("2d").drawImage(T,0,0,$,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+Mt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,b,z,K,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=b;if(b===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),b===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),b===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),b===i.RGBA){const Mt=Z?_r:Yt.getTransfer(K);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=Mt===te?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(T,b){let z;return T?b===null||b===ai||b===Bi?z=i.DEPTH24_STENCIL8:b===an?z=i.DEPTH32F_STENCIL8:b===hs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===Bi?z=i.DEPTH_COMPONENT24:b===an?z=i.DEPTH_COMPONENT32F:b===hs&&(z=i.DEPTH_COMPONENT16),z}function I(T,b){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==He&&T.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){const b=T.target;b.removeEventListener("dispose",A),R(b),b.isVideoTexture&&h.delete(b)}function E(T){const b=T.target;b.removeEventListener("dispose",E),y(b)}function R(T){const b=n.get(T);if(b.__webglInit===void 0)return;const z=T.source,K=f.get(z);if(K){const Z=K[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(K).length===0&&f.delete(z)}n.remove(T)}function S(T){const b=n.get(T);i.deleteTexture(b.__webglTexture);const z=T.source,K=f.get(z);delete K[b.__cacheKey],o.memory.textures--}function y(T){const b=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let Z=0;Z<b.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=T.textures;for(let K=0,Z=z.length;K<Z;K++){const $=n.get(z[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(T)}let P=0;function O(){P=0}function B(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function q(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function j(T,b){const z=n.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,T,b);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function F(T,b){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function W(T,b){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function k(T,b){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Q(z,T,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const st={[Po]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Io]:i.MIRRORED_REPEAT},ut={[He]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Rr]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},yt={[Su]:i.NEVER,[Ru]:i.ALWAYS,[wu]:i.LESS,[Hc]:i.LEQUAL,[Eu]:i.EQUAL,[Cu]:i.GEQUAL,[Tu]:i.GREATER,[Au]:i.NOTEQUAL};function Lt(T,b){if(b.type===an&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===en||b.magFilter===Rr||b.magFilter===Ss||b.magFilter===ri||b.minFilter===en||b.minFilter===Rr||b.minFilter===Ss||b.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ut[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ut[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,yt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===He||b.minFilter!==Ss&&b.minFilter!==ri||b.type===an&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ot(T,b){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",A));const K=b.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const $=q(b);if($!==T.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[$].usedTimes++;const Mt=Z[T.__cacheKey];Mt!==void 0&&(Z[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(b)),T.__cacheKey=$,T.__webglTexture=Z[$].texture}return z}function Y(T,b,z){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const Z=Ot(T,b),$=b.source;e.bindTexture(K,T.__webglTexture,i.TEXTURE0+z);const Mt=n.get($);if($.version!==Mt.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const ot=Yt.getPrimaries(Yt.workingColorSpace),dt=b.colorSpace===zn?null:Yt.getPrimaries(b.colorSpace),qt=b.colorSpace===zn||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=g(b.image,!1,s.maxTextureSize);tt=se(b,tt);const pt=r.convert(b.format,b.colorSpace),Tt=r.convert(b.type);let Rt=x(b.internalFormat,pt,Tt,b.colorSpace,b.isVideoTexture);Lt(K,b);let mt;const Wt=b.mipmaps,kt=b.isVideoTexture!==!0,ne=Mt.__version===void 0||Z===!0,L=$.dataReady,rt=I(b,tt);if(b.isDepthTexture)Rt=_(b.format===zi,b.type),ne&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Rt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,Tt,null));else if(b.isDataTexture)if(Wt.length>0){kt&&ne&&e.texStorage2D(i.TEXTURE_2D,rt,Rt,Wt[0].width,Wt[0].height);for(let X=0,J=Wt.length;X<J;X++)mt=Wt[X],kt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,X,Rt,mt.width,mt.height,0,pt,Tt,mt.data);b.generateMipmaps=!1}else kt?(ne&&e.texStorage2D(i.TEXTURE_2D,rt,Rt,tt.width,tt.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,Tt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,tt.width,tt.height,0,pt,Tt,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){kt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Rt,Wt[0].width,Wt[0].height,tt.depth);for(let X=0,J=Wt.length;X<J;X++)if(mt=Wt[X],b.format!==nn)if(pt!==null)if(kt){if(L)if(b.layerUpdates.size>0){const ht=Yl(mt.width,mt.height,b.format,b.type);for(const at of b.layerUpdates){const Ut=mt.data.subarray(at*ht/mt.data.BYTES_PER_ELEMENT,(at+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,at,mt.width,mt.height,1,pt,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Rt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,tt.depth,pt,Tt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Rt,mt.width,mt.height,tt.depth,0,pt,Tt,mt.data)}else{kt&&ne&&e.texStorage2D(i.TEXTURE_2D,rt,Rt,Wt[0].width,Wt[0].height);for(let X=0,J=Wt.length;X<J;X++)mt=Wt[X],b.format!==nn?pt!==null?kt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,Tt,mt.data):e.texImage2D(i.TEXTURE_2D,X,Rt,mt.width,mt.height,0,pt,Tt,mt.data)}else if(b.isDataArrayTexture)if(kt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,Rt,tt.width,tt.height,tt.depth),L)if(b.layerUpdates.size>0){const X=Yl(tt.width,tt.height,b.format,b.type);for(const J of b.layerUpdates){const ht=tt.data.subarray(J*X/tt.data.BYTES_PER_ELEMENT,(J+1)*X/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,tt.width,tt.height,1,pt,Tt,ht)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,Tt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,tt.width,tt.height,tt.depth,0,pt,Tt,tt.data);else if(b.isData3DTexture)kt?(ne&&e.texStorage3D(i.TEXTURE_3D,rt,Rt,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,Tt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,tt.width,tt.height,tt.depth,0,pt,Tt,tt.data);else if(b.isFramebufferTexture){if(ne)if(kt)e.texStorage2D(i.TEXTURE_2D,rt,Rt,tt.width,tt.height);else{let X=tt.width,J=tt.height;for(let ht=0;ht<rt;ht++)e.texImage2D(i.TEXTURE_2D,ht,Rt,X,J,0,pt,Tt,null),X>>=1,J>>=1}}else if(Wt.length>0){if(kt&&ne){const X=St(Wt[0]);e.texStorage2D(i.TEXTURE_2D,rt,Rt,X.width,X.height)}for(let X=0,J=Wt.length;X<J;X++)mt=Wt[X],kt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt,Tt,mt):e.texImage2D(i.TEXTURE_2D,X,Rt,pt,Tt,mt);b.generateMipmaps=!1}else if(kt){if(ne){const X=St(tt);e.texStorage2D(i.TEXTURE_2D,rt,Rt,X.width,X.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Tt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,pt,Tt,tt);m(b)&&u(K),Mt.__version=$.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Q(T,b,z){if(b.image.length!==6)return;const K=Ot(T,b),Z=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const $=n.get(Z);if(Z.version!==$.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const Mt=Yt.getPrimaries(Yt.workingColorSpace),ot=b.colorSpace===zn?null:Yt.getPrimaries(b.colorSpace),dt=b.colorSpace===zn||Mt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,pt=[];for(let J=0;J<6;J++)!qt&&!tt?pt[J]=g(b.image[J],!0,s.maxCubemapSize):pt[J]=tt?b.image[J].image:b.image[J],pt[J]=se(b,pt[J]);const Tt=pt[0],Rt=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),Wt=x(b.internalFormat,Rt,mt,b.colorSpace),kt=b.isVideoTexture!==!0,ne=$.__version===void 0||K===!0,L=Z.dataReady;let rt=I(b,Tt);Lt(i.TEXTURE_CUBE_MAP,b);let X;if(qt){kt&&ne&&e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Wt,Tt.width,Tt.height);for(let J=0;J<6;J++){X=pt[J].mipmaps;for(let ht=0;ht<X.length;ht++){const at=X[ht];b.format!==nn?Rt!==null?kt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,at.width,at.height,Rt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Wt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,at.width,at.height,Rt,mt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Wt,at.width,at.height,0,Rt,mt,at.data)}}}else{if(X=b.mipmaps,kt&&ne){X.length>0&&rt++;const J=St(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,rt,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pt[J].width,pt[J].height,Rt,mt,pt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,pt[J].width,pt[J].height,0,Rt,mt,pt[J].data);for(let ht=0;ht<X.length;ht++){const Ut=X[ht].image[J].image;kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Ut.width,Ut.height,Rt,mt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Wt,Ut.width,Ut.height,0,Rt,mt,Ut.data)}}else{kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Rt,mt,pt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Rt,mt,pt[J]);for(let ht=0;ht<X.length;ht++){const at=X[ht];kt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Rt,mt,at.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Wt,Rt,mt,at.image[J])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),$.__version=Z.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ct(T,b,z,K,Z,$){const Mt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),dt=x(z.internalFormat,Mt,ot,z.colorSpace),qt=n.get(b),tt=n.get(z);if(tt.__renderTarget=b,!qt.__hasExternalTextures){const pt=Math.max(1,b.width>>$),Tt=Math.max(1,b.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,$,dt,pt,Tt,b.depth,0,Mt,ot,null):e.texImage2D(Z,$,dt,pt,Tt,0,Mt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Vt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,tt.__webglTexture,0,Gt(b)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,tt.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(T,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){const K=b.depthTexture,Z=K&&K.isDepthTexture?K.type:null,$=_(b.stencilBuffer,Z),Mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Gt(b);Vt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,$,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,$,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,$,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,T)}else{const K=b.textures;for(let Z=0;Z<K.length;Z++){const $=K[Z],Mt=r.convert($.format,$.colorSpace),ot=r.convert($.type),dt=x($.internalFormat,Mt,ot,$.colorSpace),qt=Gt(b);z&&Vt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,dt,b.width,b.height):Vt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,dt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,dt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const Z=K.__webglTexture,$=Gt(b);if(b.depthTexture.format===Li)Vt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(b.depthTexture.format===zi)Vt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Dt(T){const b=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=K}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,T)}else if(z){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),nt(b.__webglDepthbuffer[K],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),nt(b.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(T,b,z){const K=n.get(T);b!==void 0&&ct(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Dt(T)}function le(T){const b=T.texture,z=n.get(T),K=n.get(b);T.addEventListener("dispose",E);const Z=T.textures,$=T.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else z.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)z.__webglFramebuffer[ot]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ot=0,dt=Z.length;ot<dt;ot++){const qt=n.get(Z[ot]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Vt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const dt=Z[ot];z.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const qt=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),pt=x(dt.internalFormat,qt,tt,dt.colorSpace,T.isXRRenderTarget===!0),Tt=Gt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)ct(z.__webglFramebuffer[ot][dt],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else ct(z.__webglFramebuffer[ot],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(b)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,dt=Z.length;ot<dt;ot++){const qt=Z[ot],tt=n.get(qt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Lt(i.TEXTURE_2D,qt),ct(z.__webglFramebuffer,T,qt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(qt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Lt(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let dt=0;dt<b.mipmaps.length;dt++)ct(z.__webglFramebuffer[dt],T,b,i.COLOR_ATTACHMENT0,ot,dt);else ct(z.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,ot,0);m(b)&&u(ot),e.unbindTexture()}T.depthBuffer&&Dt(T)}function Xt(T){const b=T.textures;for(let z=0,K=b.length;z<K;z++){const Z=b[z];if(m(Z)){const $=M(T),Mt=n.get(Z).__webglTexture;e.bindTexture($,Mt),u($),e.unbindTexture()}}}const ue=[],N=[];function Ve(T){if(T.samples>0){if(Vt(T)===!1){const b=T.textures,z=T.width,K=T.height;let Z=i.COLOR_BUFFER_BIT;const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(T),ot=b.length>1;if(ot)for(let dt=0;dt<b.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<b.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const qt=n.get(b[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,z,K,0,0,z,K,Z,i.NEAREST),l===!0&&(ue.length=0,N.length=0,ue.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ue.push($),N.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<b.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);const qt=n.get(b[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Gt(T){return Math.min(s.maxSamples,T.samples)}function Vt(T){const b=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function wt(T){const b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function se(T,b){const z=T.colorSpace,K=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Vi&&z!==zn&&(Yt.getTransfer(z)===te?(K!==nn||Z!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=zt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Vt}function U0(i,t){function e(n,s=zn){let r;const o=Yt.getTransfer(s);if(n===Tn)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ic)return i.BYTE;if(n===Lc)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===ms)return i.HALF_FLOAT;if(n===Uc)return i.ALPHA;if(n===Nc)return i.RGB;if(n===nn)return i.RGBA;if(n===Fc)return i.LUMINANCE;if(n===Oc)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===va)return i.RED;if(n===xa)return i.RED_INTEGER;if(n===kc)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===tr||n===er||n===nr||n===ir)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fo||n===Oo||n===ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fo||n===Oo)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bo||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===jo||n===Ko||n===Jo||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===Qo||n===ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sr)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===ea||n===na||n===ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class N0 extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Be extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const O0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Te,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new An({vertexShader:O0,fragmentShader:k0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z0 extends Wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const g=new B0,m=e.getContextAttributes();let u=null,M=null;const x=[],_=[],I=new gt;let A=null;const E=new ke;E.viewport=new ee;const R=new ke;R.viewport=new ee;const S=[E,R],y=new N0;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=x[Y];return Q===void 0&&(Q=new so,x[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=x[Y];return Q===void 0&&(Q=new so,x[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=x[Y];return Q===void 0&&(Q=new so,x[Y]=Q),Q.getHandSpace()};function B(Y){const Q=_.indexOf(Y.inputSource);if(Q===-1)return;const ct=x[Q];ct!==void 0&&(ct.update(Y.inputSource,Y.frame,c||o),ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<x.length;Y++){const Q=_[Y];Q!==null&&(_[Y]=null,x[Y].disconnect(Q))}P=null,O=null,g.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,M=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new li(p.framebufferWidth,p.framebufferHeight,{format:nn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ct=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?zi:Li,ct=m.stencil?Bi:ai);const At={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new li(f.textureWidth,f.textureHeight,{format:nn,type:Tn,depthTexture:new Qc(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(Y){for(let Q=0;Q<Y.removed.length;Q++){const ct=Y.removed[Q],nt=_.indexOf(ct);nt>=0&&(_[nt]=null,x[nt].disconnect(ct))}for(let Q=0;Q<Y.added.length;Q++){const ct=Y.added[Q];let nt=_.indexOf(ct);if(nt===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=_.length){_.push(ct),nt=Dt;break}else if(_[Dt]===null){_[Dt]=ct,nt=Dt;break}if(nt===-1)break}const At=x[nt];At&&At.connect(ct)}}const F=new C,W=new C;function k(Y,Q,ct){F.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(ct.matrixWorld);const nt=F.distanceTo(W),At=Q.projectionMatrix.elements,Dt=ct.projectionMatrix.elements,zt=At[14]/(At[10]-1),le=At[14]/(At[10]+1),Xt=(At[9]+1)/At[5],ue=(At[9]-1)/At[5],N=(At[8]-1)/At[0],Ve=(Dt[8]+1)/Dt[0],Gt=zt*N,Vt=zt*Ve,wt=nt/(-N+Ve),se=wt*-N;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(se),Y.translateZ(wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const St=zt+wt,T=le+wt,b=Gt-se,z=Vt+(nt-se),K=Xt*le/T*St,Z=ue*le/T*St;Y.projectionMatrix.makePerspective(b,z,K,Z,St,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function st(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,ct=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),y.near=R.near=E.near=Q,y.far=R.far=E.far=ct,(P!==y.near||O!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far),E.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,y.layers.mask=E.layers.mask|R.layers.mask;const nt=Y.parent,At=y.cameras;st(y,nt);for(let Dt=0;Dt<At.length;Dt++)st(At[Dt],nt);At.length===2?k(y,E,R):y.projectionMatrix.copy(E.projectionMatrix),ut(Y,y,nt)};function ut(Y,Q,ct){ct===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=sa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let yt=null;function Lt(Y,Q){if(h=Q.getViewerPose(c||o),v=Q,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let nt=!1;ct.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let Dt=0;Dt<ct.length;Dt++){const zt=ct[Dt];let le=null;if(p!==null)le=p.getViewport(zt);else{const ue=d.getViewSubImage(f,zt);le=ue.viewport,Dt===0&&(t.setRenderTargetTextures(M,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),t.setRenderTarget(M))}let Xt=S[Dt];Xt===void 0&&(Xt=new ke,Xt.layers.enable(Dt),Xt.viewport=new ee,S[Dt]=Xt),Xt.matrix.fromArray(zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(le.x,le.y,le.width,le.height),Dt===0&&(y.matrix.copy(Xt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),nt===!0&&y.cameras.push(Xt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Dt=d.getDepthInformation(ct[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,s.renderState)}}for(let ct=0;ct<x.length;ct++){const nt=_[ct],At=x[ct];nt!==null&&At!==void 0&&At.update(nt,Q,c||o)}yt&&yt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),v=null}const Ot=new Jc;Ot.setAnimationLoop(Lt),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}}const ti=new De,H0=new Jt;function G0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,$c(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,M,x,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),v(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),g(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,M,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Me&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Me&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const M=t.get(u),x=M.envMap,_=M.envMapRotation;x&&(m.envMap.value=x,ti.copy(_),ti.x*=-1,ti.y*=-1,ti.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(H0.makeRotationFromEuler(ti)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,M,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*M,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,M){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Me&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const M=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function c(M,x){let _=s[M.id];_===void 0&&(v(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(M,I);const A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function h(M){const x=d();M.__bindingPointIndex=x;const _=i.createBuffer(),I=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],_=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,E=_.length;A<E;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,y=R.length;S<y;S++){const P=R[S];if(p(P,A,S,I)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let j=0;j<B.length;j++){const F=B[j],W=g(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,O+q,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,x,_,I){const A=M.value,E=x+"_"+_;if(I[E]===void 0)return typeof A=="number"||typeof A=="boolean"?I[E]=A:I[E]=A.clone(),!0;{const R=I[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function v(M){const x=M.uniforms;let _=0;const I=16;for(let E=0,R=x.length;E<R;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,P=S.length;y<P;y++){const O=S[y],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,j=B.length;q<j;q++){const F=B[q],W=g(F),k=_%I,st=k%W.boundary,ut=k+st;_+=st,ut!==0&&I-ut<W.storage&&(_+=I-ut),O.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=W.storage}}}const A=_%I;return A>0&&(_+=I-A),M.__size=_,M.__cache={},this}function g(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class W0{constructor(t={}){const{canvas:e=Iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Vn,this.toneMappingExposure=1;const _=this;let I=!1,A=0,E=0,R=null,S=-1,y=null;const P=new ee,O=new ee;let B=null;const q=new Et(0);let j=0,F=e.width,W=e.height,k=1,st=null,ut=null;const yt=new ee(0,0,F,W),Lt=new ee(0,0,F,W);let Ot=!1;const Y=new ba;let Q=!1,ct=!1;const nt=new Jt,At=new Jt,Dt=new C,zt=new ee,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ue(){return R===null?k:1}let N=n;function Ve(w,D){return e.getContext(w,D)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fa}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",at,!1),N===null){const D="webgl2";if(N=Ve(D,w),N===null)throw Ve(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,Vt,wt,se,St,T,b,z,K,Z,$,Mt,ot,dt,qt,tt,pt,Tt,Rt,mt,Wt,kt,ne,L;function rt(){Gt=new jp(N),Gt.init(),kt=new U0(N,Gt),Vt=new Vp(N,Gt,t,kt),wt=new I0(N,Gt),Vt.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),se=new Zp(N),St=new g0,T=new D0(N,Gt,wt,St,Vt,kt,se),b=new Xp(_),z=new $p(_),K=new sd(N),ne=new Hp(N,K),Z=new Kp(N,K,se,ne),$=new tm(N,Z,K,se),Rt=new Qp(N,Vt,T),tt=new Wp(St),Mt=new m0(_,b,z,Gt,Vt,ne,tt),ot=new G0(_,St),dt=new x0,qt=new w0(Gt),Tt=new zp(_,b,z,wt,$,p,l),pt=new R0(_,$,Vt),L=new V0(N,se,Vt,wt),mt=new Gp(N,Gt,se),Wt=new Jp(N,Gt,se),se.programs=Mt.programs,_.capabilities=Vt,_.extensions=Gt,_.properties=St,_.renderLists=dt,_.shadowMap=pt,_.state=wt,_.info=se}rt();const X=new z0(_,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(F,W,!1))},this.getSize=function(w){return w.set(F,W)},this.setSize=function(w,D,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,W=D,e.width=Math.floor(w*k),e.height=Math.floor(D*k),G===!0&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(F*k,W*k).floor()},this.setDrawingBufferSize=function(w,D,G){F=w,W=D,k=G,e.width=Math.floor(w*G),e.height=Math.floor(D*G),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,D,G,V){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,D,G,V),wt.viewport(P.copy(yt).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,D,G,V){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,D,G,V),wt.scissor(O.copy(Lt).multiplyScalar(k).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(w){wt.setScissorTest(Ot=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,D=!0,G=!0){let V=0;if(w){let U=!1;if(R!==null){const et=R.texture.format;U=et===ya||et===_a||et===xa}if(U){const et=R.texture.type,lt=et===Tn||et===ai||et===hs||et===Bi||et===ma||et===ga,vt=Tt.getClearColor(),xt=Tt.getClearAlpha(),Pt=vt.r,Nt=vt.g,_t=vt.b;lt?(v[0]=Pt,v[1]=Nt,v[2]=_t,v[3]=xt,N.clearBufferuiv(N.COLOR,0,v)):(g[0]=Pt,g[1]=Nt,g[2]=_t,g[3]=xt,N.clearBufferiv(N.COLOR,0,g))}else V|=N.COLOR_BUFFER_BIT}D&&(V|=N.DEPTH_BUFFER_BIT),G&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",at,!1),dt.dispose(),qt.dispose(),St.dispose(),b.dispose(),z.dispose(),$.dispose(),ne.dispose(),L.dispose(),Mt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Va),X.removeEventListener("sessionend",Wa),$n.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=se.autoReset,D=pt.enabled,G=pt.autoUpdate,V=pt.needsUpdate,U=pt.type;rt(),se.autoReset=w,pt.enabled=D,pt.autoUpdate=G,pt.needsUpdate=V,pt.type=U}function at(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const D=w.target;D.removeEventListener("dispose",Ut),he(D)}function he(w){be(w),St.remove(w)}function be(w){const D=St.get(w).programs;D!==void 0&&(D.forEach(function(G){Mt.releaseProgram(G)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,G,V,U,et){D===null&&(D=le);const lt=U.isMesh&&U.matrixWorld.determinant()<0,vt=kh(w,D,G,V,U);wt.setMaterial(V,lt);let xt=G.index,Pt=1;if(V.wireframe===!0){if(xt=Z.getWireframeAttribute(G),xt===void 0)return;Pt=2}const Nt=G.drawRange,_t=G.attributes.position;let $t=Nt.start*Pt,ie=(Nt.start+Nt.count)*Pt;et!==null&&($t=Math.max($t,et.start*Pt),ie=Math.min(ie,(et.start+et.count)*Pt)),xt!==null?($t=Math.max($t,0),ie=Math.min(ie,xt.count)):_t!=null&&($t=Math.max($t,0),ie=Math.min(ie,_t.count));const re=ie-$t;if(re<0||re===1/0)return;ne.setup(U,V,vt,G,xt);let Pe,jt=mt;if(xt!==null&&(Pe=K.get(xt),jt=Wt,jt.setIndex(Pe)),U.isMesh)V.wireframe===!0?(wt.setLineWidth(V.wireframeLinewidth*ue()),jt.setMode(N.LINES)):jt.setMode(N.TRIANGLES);else if(U.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),wt.setLineWidth(bt*ue()),U.isLineSegments?jt.setMode(N.LINES):U.isLineLoop?jt.setMode(N.LINE_LOOP):jt.setMode(N.LINE_STRIP)}else U.isPoints?jt.setMode(N.POINTS):U.isSprite&&jt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)jt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,fn=U._multiDrawCounts,Kt=U._multiDrawCount,$e=xt?K.get(xt).bytesPerElement:1,ui=St.get(V).currentProgram.getUniforms();for(let Ue=0;Ue<Kt;Ue++)ui.setValue(N,"_gl_DrawID",Ue),jt.render(bt[Ue]/$e,fn[Ue])}else if(U.isInstancedMesh)jt.renderInstances($t,re,U.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,fn=Math.min(G.instanceCount,bt);jt.renderInstances($t,re,fn)}else jt.render($t,re)};function Zt(w,D,G){w.transparent===!0&&w.side===Re&&w.forceSinglePass===!1?(w.side=Me,w.needsUpdate=!0,bs(w,D,G),w.side=Xn,w.needsUpdate=!0,bs(w,D,G),w.side=Re):bs(w,D,G)}this.compile=function(w,D,G=null){G===null&&(G=w),u=qt.get(G),u.init(D),x.push(u),G.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),w!==G&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){const vt=et[lt];Zt(vt,G,U),V.add(vt)}else Zt(et,G,U),V.add(et)}),x.pop(),u=null,V},this.compileAsync=function(w,D,G=null){const V=this.compile(w,D,G);return new Promise(U=>{function et(){if(V.forEach(function(lt){St.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){U(w);return}setTimeout(et,10)}Gt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Ye=null;function dn(w){Ye&&Ye(w)}function Va(){$n.stop()}function Wa(){$n.start()}const $n=new Jc;$n.setAnimationLoop(dn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(w){Ye=w,X.setAnimationLoop(w),w===null?$n.stop():$n.start()},X.addEventListener("sessionstart",Va),X.addEventListener("sessionend",Wa),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,D,R),u=qt.get(w,x.length),u.init(D),x.push(u),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(At),ct=this.localClippingEnabled,Q=tt.init(this.clippingPlanes,ct),m=dt.get(w,M.length),m.init(),M.push(m),X.enabled===!0&&X.isPresenting===!0){const et=_.xr.getDepthSensingMesh();et!==null&&Cr(et,D,-1/0,_.sortObjects)}Cr(w,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(st,ut),Xt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xt&&Tt.addToRenderList(m,w),this.info.render.frame++,Q===!0&&tt.beginShadows();const G=u.state.shadowsArray;pt.render(G,w,D),Q===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(u.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let lt=0,vt=et.length;lt<vt;lt++){const xt=et[lt];qa(V,U,w,xt)}Xt&&Tt.render(w);for(let lt=0,vt=et.length;lt<vt;lt++){const xt=et[lt];Xa(m,w,xt,xt.viewport)}}else U.length>0&&qa(V,U,w,D),Xt&&Tt.render(w),Xa(m,w,D);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,D),ne.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(u=x[x.length-1],Q===!0&&tt.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Cr(w,D,G,V){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){V&&zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);const lt=$.update(w),vt=w.material;vt.visible&&m.push(w,lt,vt,G,zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const lt=$.update(w),vt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),zt.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),zt.copy(lt.boundingSphere.center)),zt.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(vt)){const xt=lt.groups;for(let Pt=0,Nt=xt.length;Pt<Nt;Pt++){const _t=xt[Pt],$t=vt[_t.materialIndex];$t&&$t.visible&&m.push(w,lt,$t,G,zt.z,_t)}}else vt.visible&&m.push(w,lt,vt,G,zt.z,null)}}const et=w.children;for(let lt=0,vt=et.length;lt<vt;lt++)Cr(et[lt],D,G,V)}function Xa(w,D,G,V){const U=w.opaque,et=w.transmissive,lt=w.transparent;u.setupLightsView(G),Q===!0&&tt.setGlobalState(_.clippingPlanes,G),V&&wt.viewport(P.copy(V)),U.length>0&&Ms(U,D,G),et.length>0&&Ms(et,D,G),lt.length>0&&Ms(lt,D,G),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function qa(w,D,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new li(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ms:Tn,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const et=u.state.transmissionRenderTarget[V.id],lt=V.viewport||P;et.setSize(lt.z,lt.w);const vt=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(q),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),Xt&&Tt.render(G);const xt=_.toneMapping;_.toneMapping=Vn;const Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),Q===!0&&tt.setGlobalState(_.clippingPlanes,V),Ms(w,G,V),T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let _t=0,$t=D.length;_t<$t;_t++){const ie=D[_t],re=ie.object,Pe=ie.geometry,jt=ie.material,bt=ie.group;if(jt.side===Re&&re.layers.test(V.layers)){const fn=jt.side;jt.side=Me,jt.needsUpdate=!0,Ya(re,G,V,Pe,jt,bt),jt.side=fn,jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(et),T.updateRenderTargetMipmap(et))}_.setRenderTarget(vt),_.setClearColor(q,j),Pt!==void 0&&(V.viewport=Pt),_.toneMapping=xt}function Ms(w,D,G){const V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=w.length;U<et;U++){const lt=w[U],vt=lt.object,xt=lt.geometry,Pt=V===null?lt.material:V,Nt=lt.group;vt.layers.test(G.layers)&&Ya(vt,D,G,xt,Pt,Nt)}}function Ya(w,D,G,V,U,et){w.onBeforeRender(_,D,G,V,U,et),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(_,D,G,V,w,et),U.transparent===!0&&U.side===Re&&U.forceSinglePass===!1?(U.side=Me,U.needsUpdate=!0,_.renderBufferDirect(G,D,V,U,w,et),U.side=Xn,U.needsUpdate=!0,_.renderBufferDirect(G,D,V,U,w,et),U.side=Re):_.renderBufferDirect(G,D,V,U,w,et),w.onAfterRender(_,D,G,V,U,et)}function bs(w,D,G){D.isScene!==!0&&(D=le);const V=St.get(w),U=u.state.lights,et=u.state.shadowsArray,lt=U.state.version,vt=Mt.getParameters(w,U.state,et,D,G),xt=Mt.getProgramCacheKey(vt);let Pt=V.programs;V.environment=w.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(w.isMeshStandardMaterial?z:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",Ut),Pt=new Map,V.programs=Pt);let Nt=Pt.get(xt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===lt)return ja(w,vt),Nt}else vt.uniforms=Mt.getUniforms(w),w.onBeforeCompile(vt,_),Nt=Mt.acquireProgram(vt,xt),Pt.set(xt,Nt),V.uniforms=vt.uniforms;const _t=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_t.clippingPlanes=tt.uniform),ja(w,vt),V.needsLights=zh(w),V.lightsStateVersion=lt,V.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function $a(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=rr.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function ja(w,D){const G=St.get(w);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function kh(w,D,G,V,U){D.isScene!==!0&&(D=le),T.resetTextureUnits();const et=D.fog,lt=V.isMeshStandardMaterial?D.environment:null,vt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vi,xt=(V.isMeshStandardMaterial?z:b).get(V.envMap||lt),Pt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),_t=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,ie=!!G.morphAttributes.color;let re=Vn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(re=_.toneMapping);const Pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=Pe!==void 0?Pe.length:0,bt=St.get(V),fn=u.state.lights;if(Q===!0&&(ct===!0||w!==y)){const We=w===y&&V.id===S;tt.setState(V,w,We)}let Kt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==fn.state.version||bt.outputColorSpace!==vt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==xt||V.fog===!0&&bt.fog!==et||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==Pt||bt.vertexTangents!==Nt||bt.morphTargets!==_t||bt.morphNormals!==$t||bt.morphColors!==ie||bt.toneMapping!==re||bt.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,bt.__version=V.version);let $e=bt.currentProgram;Kt===!0&&($e=bs(V,D,U));let ui=!1,Ue=!1,Yi=!1;const oe=$e.getUniforms(),rn=bt.uniforms;if(wt.useProgram($e.program)&&(ui=!0,Ue=!0,Yi=!0),V.id!==S&&(S=V.id,Ue=!0),ui||y!==w){wt.buffers.depth.getReversed()?(nt.copy(w.projectionMatrix),Du(nt),Uu(nt),oe.setValue(N,"projectionMatrix",nt)):oe.setValue(N,"projectionMatrix",w.projectionMatrix),oe.setValue(N,"viewMatrix",w.matrixWorldInverse);const Pn=oe.map.cameraPosition;Pn!==void 0&&Pn.setValue(N,Dt.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Ue=!0,Yi=!0)}if(U.isSkinnedMesh){oe.setOptional(N,U,"bindMatrix"),oe.setOptional(N,U,"bindMatrixInverse");const We=U.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),oe.setValue(N,"boneTexture",We.boneTexture,T))}U.isBatchedMesh&&(oe.setOptional(N,U,"batchingTexture"),oe.setValue(N,"batchingTexture",U._matricesTexture,T),oe.setOptional(N,U,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",U._indirectTexture,T),oe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",U._colorsTexture,T));const $i=G.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&Rt.update(U,G,$e),(Ue||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,oe.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=xt,rn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(rn.envMapIntensity.value=D.environmentIntensity),Ue&&(oe.setValue(N,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&Bh(rn,Yi),et&&V.fog===!0&&ot.refreshFogUniforms(rn,et),ot.refreshMaterialUniforms(rn,V,k,W,u.state.transmissionRenderTarget[w.id]),rr.upload(N,$a(bt),rn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rr.upload(N,$a(bt),rn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(N,"center",U.center),oe.setValue(N,"modelViewMatrix",U.modelViewMatrix),oe.setValue(N,"normalMatrix",U.normalMatrix),oe.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const We=V.uniformsGroups;for(let Pn=0,In=We.length;Pn<In;Pn++){const Ka=We[Pn];L.update(Ka,$e),L.bind(Ka,$e)}}return $e}function Bh(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function zh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,D,G){St.get(w.texture).__webglTexture=D,St.get(w.depthTexture).__webglTexture=G;const V=St.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const G=St.get(w);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,G=0){R=w,A=D,E=G;let V=!0,U=null,et=!1,lt=!1;if(w){const xt=St.get(w);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(xt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(xt.__hasExternalTextures)T.rebindTextures(w,St.get(w.texture).__webglTexture,St.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const _t=w.depthTexture;if(xt.__boundDepthTexture!==_t){if(_t!==null&&St.has(_t)&&(w.width!==_t.image.width||w.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(lt=!0);const Nt=St.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[D])?U=Nt[D][G]:U=Nt[D],et=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=St.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[G]:U=Nt,P.copy(w.viewport),O.copy(w.scissor),B=w.scissorTest}else P.copy(yt).multiplyScalar(k).floor(),O.copy(Lt).multiplyScalar(k).floor(),B=Ot;if(wt.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&wt.drawBuffers(w,U),wt.viewport(P),wt.scissor(O),wt.setScissorTest(B),et){const xt=St.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,G)}else if(lt){const xt=St.get(w.texture),Pt=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xt.__webglTexture,G||0,Pt)}S=-1},this.readRenderTargetPixels=function(w,D,G,V,U,et,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){wt.bindFramebuffer(N.FRAMEBUFFER,vt);try{const xt=w.texture,Pt=xt.format,Nt=xt.type;if(!Vt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-V&&G>=0&&G<=w.height-U&&N.readPixels(D,G,V,U,kt.convert(Pt),kt.convert(Nt),et)}finally{const xt=R!==null?St.get(R).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,D,G,V,U,et,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){const xt=w.texture,Pt=xt.format,Nt=xt.type;if(!Vt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-V&&G>=0&&G<=w.height-U){wt.bindFramebuffer(N.FRAMEBUFFER,vt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,et.byteLength,N.STREAM_READ),N.readPixels(D,G,V,U,kt.convert(Pt),kt.convert(Nt),0);const $t=R!==null?St.get(R).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,$t);const ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Lu(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,et),N.deleteBuffer(_t),N.deleteSync(ie),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,G=0){w.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),U=Math.floor(w.image.width*V),et=Math.floor(w.image.height*V),lt=D!==null?D.x:0,vt=D!==null?D.y:0;T.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,lt,vt,U,et),wt.unbindTexture()},this.copyTextureToTexture=function(w,D,G=null,V=null,U=0){w.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,G=null);let et,lt,vt,xt,Pt,Nt,_t,$t,ie;const re=w.isCompressedTexture?w.mipmaps[U]:w.image;G!==null?(et=G.max.x-G.min.x,lt=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,xt=G.min.x,Pt=G.min.y,Nt=G.isBox3?G.min.z:0):(et=re.width,lt=re.height,vt=re.depth||1,xt=0,Pt=0,Nt=0),V!==null?(_t=V.x,$t=V.y,ie=V.z):(_t=0,$t=0,ie=0);const Pe=kt.convert(D.format),jt=kt.convert(D.type);let bt;D.isData3DTexture?(T.setTexture3D(D,0),bt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),bt=N.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const fn=N.getParameter(N.UNPACK_ROW_LENGTH),Kt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),$e=N.getParameter(N.UNPACK_SKIP_PIXELS),ui=N.getParameter(N.UNPACK_SKIP_ROWS),Ue=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const Yi=w.isDataArrayTexture||w.isData3DTexture,oe=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const rn=St.get(w),$i=St.get(D),We=St.get(rn.__renderTarget),Pn=St.get($i.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,We.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let In=0;In<vt;In++)Yi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(w).__webglTexture,U,Nt+In),w.isDepthTexture?(oe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.get(D).__webglTexture,U,ie+In),N.blitFramebuffer(xt,Pt,et,lt,_t,$t,et,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):oe?N.copyTexSubImage3D(bt,U,_t,$t,ie+In,xt,Pt,et,lt):N.copyTexSubImage2D(bt,U,_t,$t,ie+In,xt,Pt,et,lt);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else oe?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(bt,U,_t,$t,ie,et,lt,vt,Pe,jt,re.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,U,_t,$t,ie,et,lt,vt,Pe,re.data):N.texSubImage3D(bt,U,_t,$t,ie,et,lt,vt,Pe,jt,re):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_t,$t,et,lt,Pe,jt,re.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_t,$t,re.width,re.height,Pe,re.data):N.texSubImage2D(N.TEXTURE_2D,U,_t,$t,et,lt,Pe,jt,re);N.pixelStorei(N.UNPACK_ROW_LENGTH,fn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,$e),N.pixelStorei(N.UNPACK_SKIP_ROWS,ui),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ue),U===0&&D.generateMipmaps&&N.generateMipmap(bt),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,D,G=null,V=null,U=0){return w.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,G,V,U)},this.initRenderTarget=function(w){St.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){A=0,E=0,R=null,wt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class wa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new wa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ea{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new Ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yn extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new De,this.environmentIntensity=1,this.environmentRotation=new De,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class X0 extends Te{constructor(t=null,e=1,n=1,s,r,o,a,l,c=He,h=He,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oa extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ti=new Jt,$l=new Jt,Ws=[],jl=new ci,q0=new Jt,ts=new ft,es=new qn;class ns extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,q0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),jl.copy(t.boundingBox).applyMatrix4(Ti),this.boundingBox.union(jl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ti),es.copy(t.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),$l.multiplyMatrices(n,Ti),ts.matrixWorld=$l,ts.raycast(t,Ws);for(let o=0,a=Ws.length;o<a;o++){const l=Ws[o];l.instanceId=r,l.object=this,e.push(l)}Ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new oa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new X0(new Float32Array(s*this.count),s,this.count,va,an));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class sh extends hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hr=new C,ur=new C,Kl=new Jt,is=new yr,Xs=new qn,ro=new C,Jl=new C;class Y0 extends me{constructor(t=new ae,e=new sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)hr.fromBufferAttribute(e,s-1),ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=hr.distanceTo(ur);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(s),Xs.radius+=r,t.ray.intersectsSphere(Xs)===!1)return;Kl.copy(s).invert(),is.copy(t.ray).applyMatrix4(Kl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const u=h.getX(g),M=h.getX(g+1),x=qs(this,t,is,l,u,M);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),u=qs(this,t,is,l,g,m);u&&e.push(u)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const u=qs(this,t,is,l,g,g+1);u&&e.push(u)}if(this.isLineLoop){const g=qs(this,t,is,l,v-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(hr.fromBufferAttribute(o,s),ur.fromBufferAttribute(o,r),e.distanceSqToSegment(hr,ur,ro,Jl)>n)return;ro.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ro);if(!(l<t.near||l>t.far))return{distance:l,point:Jl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Zl=new C,Ql=new C;class $0 extends Y0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zl.fromBufferAttribute(e,s),Ql.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zl.distanceTo(Ql);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ui extends hi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tc=new Jt,aa=new yr,Ys=new qn,$s=new C;class as extends me{constructor(t=new ae,e=new Ui){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ys.radius+=r,t.ray.intersectsSphere(Ys)===!1)return;tc.copy(s).invert(),aa.copy(t.ray).applyMatrix4(tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,g=p;v<g;v++){const m=c.getX(v);$s.fromBufferAttribute(d,m),ec($s,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p;v<g;v++)$s.fromBufferAttribute(d,v),ec($s,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ec(i,t,e,n,s,r,o){const a=aa.distanceSqToPoint(i);if(a<e){const l=new C;aa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class us extends Te{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new gt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new Jt;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(_e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(_e(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rh extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class j0 extends rh{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ta(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const js=new C,oo=new Ta,ao=new Ta,lo=new Ta;class oh extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(js.subVectors(s[0],s[1]).add(s[0]),c=js);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(js.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=js),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),oo.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,v,g,m),ao.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,v,g,m),lo.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,v,g,m)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),ao.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),lo.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(oo.calc(l),ao.calc(l),lo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function nc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function K0(i,t){const e=1-i;return e*e*t}function J0(i,t){return 2*(1-i)*i*t}function Z0(i,t){return i*i*t}function ls(i,t,e,n){return K0(i,t)+J0(i,e)+Z0(i,n)}function Q0(i,t){const e=1-i;return e*e*e*t}function tg(i,t){const e=1-i;return 3*e*e*i*t}function eg(i,t){return 3*(1-i)*i*i*t}function ng(i,t){return i*i*i*t}function cs(i,t,e,n,s){return Q0(i,t)+tg(i,e)+eg(i,n)+ng(i,s)}class ig extends Rn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,s.x,r.x,o.x,a.x),cs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sg extends Rn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cs(t,s.x,r.x,o.x,a.x),cs(t,s.y,r.y,o.y,a.y),cs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rg extends Rn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class og extends Rn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ag extends Rn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,s.x,r.x,o.x),ls(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ah extends Rn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ls(t,s.x,r.x,o.x),ls(t,s.y,r.y,o.y),ls(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lg extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(nc(a,l.x,c.x,h.x,d.x),nc(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var cg=Object.freeze({__proto__:null,ArcCurve:j0,CatmullRomCurve3:oh,CubicBezierCurve:ig,CubicBezierCurve3:sg,EllipseCurve:rh,LineCurve:rg,LineCurve3:og,QuadraticBezierCurve:ag,QuadraticBezierCurve3:ah,SplineCurve:lg});class dr extends ae{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new C,f=new gt,p=new C,v=new C,g=new C;let m=0,u=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[M+1].x-t[M].x,u=t[M+1].y-t[M].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(v)}for(let M=0;M<=e;M++){const x=n+M*h*s,_=Math.sin(x),I=Math.cos(x);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*_,d.y=t[A].y,d.z=t[A].x*I,o.push(d.x,d.y,d.z),f.x=M/e,f.y=A/(t.length-1),a.push(f.x,f.y);const E=l[3*A+0]*_,R=l[3*A+1],S=l[3*A+0]*I;c.push(E,R,S)}}for(let M=0;M<e;M++)for(let x=0;x<t.length-1;x++){const _=x+M*t.length,I=_,A=_+t.length,E=_+t.length+1,R=_+1;r.push(I,A,R),r.push(E,R,A)}this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("uv",new Ht(a,2)),this.setAttribute("normal",new Ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dr(t.points,t.segments,t.phiStart,t.phiLength)}}class br extends ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new gt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Cn extends ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let v=0;const g=[],m=n/2;let u=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function M(){const _=new C,I=new C;let A=0;const E=(e-t)/n;for(let R=0;R<=r;R++){const S=[],y=R/r,P=y*(e-t)+t;for(let O=0;O<=s;O++){const B=O/s,q=B*l+a,j=Math.sin(q),F=Math.cos(q);I.x=P*j,I.y=-y*n+m,I.z=P*F,d.push(I.x,I.y,I.z),_.set(j,E,F).normalize(),f.push(_.x,_.y,_.z),p.push(B,1-y),S.push(v++)}g.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const y=g[S][R],P=g[S+1][R],O=g[S+1][R+1],B=g[S][R+1];(t>0||S!==0)&&(h.push(y,P,B),A+=3),(e>0||S!==r-1)&&(h.push(P,O,B),A+=3)}c.addGroup(u,A,0),u+=A}function x(_){const I=v,A=new gt,E=new C;let R=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),v++;const P=v;for(let O=0;O<=s;O++){const q=O/s*l+a,j=Math.cos(q),F=Math.sin(q);E.x=S*F,E.y=m*y,E.z=S*j,d.push(E.x,E.y,E.z),f.push(0,y,0),A.x=j*.5+.5,A.y=F*.5*y+.5,p.push(A.x,A.y),v++}for(let O=0;O<s;O++){const B=I+O,q=P+O;_===!0?h.push(q,q+1,B):h.push(q+1,q,B),R+=3}c.addGroup(u,R,_===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ln extends Cn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ln(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sr extends ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const x=new C,_=new C,I=new C;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],_),p(e[A+2],I),l(x,_,I,M)}function l(M,x,_,I){const A=I+1,E=[];for(let R=0;R<=A;R++){E[R]=[];const S=M.clone().lerp(_,R/A),y=x.clone().lerp(_,R/A),P=A-R;for(let O=0;O<=P;O++)O===0&&R===A?E[R][O]=S:E[R][O]=S.clone().lerp(y,O/P)}for(let R=0;R<A;R++)for(let S=0;S<2*(A-R)-1;S++){const y=Math.floor(S/2);S%2===0?(f(E[R][y+1]),f(E[R+1][y]),f(E[R][y])):(f(E[R][y+1]),f(E[R+1][y+1]),f(E[R+1][y]))}}function c(M){const x=new C;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(M),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const M=new C;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const _=m(M)/2/Math.PI+.5,I=u(M)/Math.PI+.5;o.push(_,1-I)}v(),d()}function d(){for(let M=0;M<o.length;M+=6){const x=o[M+0],_=o[M+2],I=o[M+4],A=Math.max(x,_,I),E=Math.min(x,_,I);A>.9&&E<.1&&(x<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,x){const _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function v(){const M=new C,x=new C,_=new C,I=new C,A=new gt,E=new gt,R=new gt;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),A.set(o[y+0],o[y+1]),E.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),I.copy(M).add(x).add(_).divideScalar(3);const P=m(I);g(A,y+0,M,P),g(E,y+2,x,P),g(R,y+4,_,P)}}function g(M,x,_,I){I<0&&M.x===1&&(o[x]=M.x-1),_.x===0&&_.z===0&&(o[x]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function u(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.vertices,t.indices,t.radius,t.details)}}class Aa extends Sr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Aa(t.radius,t.detail)}}class Ca extends ae{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,p=new C,v=new gt;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const u=r+m/n*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,h.push(v.x,v.y)}d+=f}for(let g=0;g<s;g++){const m=g*(n+1);for(let u=0;u<n;u++){const M=u+m,x=M,_=M+n+1,I=M+n+2,A=M+1;a.push(x,_,A),a.push(_,I,A)}}this.setIndex(a),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ye extends ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new C,f=new C,p=[],v=[],g=[],m=[];for(let u=0;u<=n;u++){const M=[],x=u/n;let _=0;u===0&&o===0?_=.5/e:u===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){const A=I/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(A+_,1-x),M.push(c++)}h.push(M)}for(let u=0;u<n;u++)for(let M=0;M<e;M++){const x=h[u][M+1],_=h[u][M],I=h[u+1][M],A=h[u+1][M+1];(u!==0||o>0)&&p.push(x,_,A),(u!==n-1||l<Math.PI)&&p.push(_,I,A)}this.setIndex(p),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ra extends Sr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ra(t.radius,t.detail)}}class En extends ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new C,d=new C,f=new C;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const g=v/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const g=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,u=(s+1)*(p-1)+v,M=(s+1)*p+v;o.push(g,m,M),o.push(m,u,M)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new En(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pa extends ae{constructor(t=new ah(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new gt;let h=new C;const d=[],f=[],p=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function g(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),M(),u()}function m(x){h=t.getPointAt(x/e,h);const _=o.normals[x],I=o.binormals[x];for(let A=0;A<=s;A++){const E=A/s*Math.PI*2,R=Math.sin(E),S=-Math.cos(E);l.x=S*_.x+R*I.x,l.y=S*_.y+R*I.y,l.z=S*_.z+R*I.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const I=(s+1)*(x-1)+(_-1),A=(s+1)*x+(_-1),E=(s+1)*x+_,R=(s+1)*(x-1)+_;v.push(I,A,R),v.push(A,E,R)}}function M(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pa(new cg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class de extends hi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new De,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hg extends de{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ia extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const co=new Jt,ic=new C,sc=new C;class lh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rc=new Jt,ss=new C,ho=new C;class ug extends lh{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(ss),ho.copy(n.position),ho.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ho),n.updateMatrixWorld(),s.makeTranslation(-ss.x,-ss.y,-ss.z),rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc)}}class un extends Ia{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dg extends lh{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fr extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wr extends Ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const oc=new Jt;class ch{constructor(t,e,n=0,s=1/0){this.ray=new yr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oc),this}intersectObject(t,e=!0,n=[]){return la(t,this,n,e),n.sort(ac),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)la(t[s],this,n,e);return n.sort(ac),n}}function ac(i,t){return i.distance-t.distance}function la(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)la(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa);function fg(i){let t={flags:{},profile:{skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0},debt:1e3,cubeChoice:"",door:0,day:1,fatigue:0,sleeps:0,journal:[],cubeState:"none",cubeLunged:!1,lunges:0,report:null,power:100,oxygen:100,hull:100,room:"mining",mode:"rooms",cargo:0,cargoCap:12,scrap:0,feeds:0,crates:1,hats:0,cameo:!1,logbooks:0,logsFound:[],stowaways:0,beats:[],stats:{trips:0,clean:0,shatters:0,rare:0},up:{window:0,cargo:0,range:0,brake:0},log:[],...i};const e=new Set,n=s=>Math.max(0,Math.min(100,s));return{get:()=>t,set(s){t={...t,...s};for(const r of["power","oxygen","hull"])t[r]=n(t[r]);e.forEach(r=>r(t))},subscribe(s){return e.add(s),()=>e.delete(s)}}}class pg{constructor(){H(this,"ctx",null);H(this,"master");H(this,"engineGain");H(this,"engineFilt");H(this,"humGain");H(this,"chargeOsc",null);H(this,"chargeGain",null);H(this,"noiseBuf");H(this,"muted",(()=>{try{return localStorage.getItem("starburn-mute")==="1"}catch{return!1}})())}unlock(){try{if(!this.ctx){const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;const n=this.ctx=new e;this.master=n.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(n.destination),this.humGain=n.createGain(),this.humGain.gain.value=.07;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=220,this.humGain.connect(s),s.connect(this.master);for(const h of[55,55.8,110.4]){const d=n.createOscillator();d.type=h>100?"triangle":"sine",d.frequency.value=h;const f=n.createGain();f.gain.value=h>100?.25:1,d.connect(f),f.connect(this.humGain),d.start()}const r=n.createOscillator();r.frequency.value=.15;const o=n.createGain();o.gain.value=.02,r.connect(o),o.connect(this.humGain.gain),r.start();const a=n.sampleRate*2;this.noiseBuf=n.createBuffer(1,a,n.sampleRate);const l=this.noiseBuf.getChannelData(0);for(let h=0;h<a;h++)l[h]=Math.random()*2-1;const c=n.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0,this.engineFilt=n.createBiquadFilter(),this.engineFilt.type="lowpass",this.engineFilt.frequency.value=160,this.engineGain=n.createGain(),this.engineGain.gain.value=0,c.connect(this.engineFilt),this.engineFilt.connect(this.engineGain),this.engineGain.connect(this.master),c.start()}const t=this.ctx;t.state==="suspended"&&t.resume()}catch{}}setMuted(t){this.muted=t;try{localStorage.setItem("starburn-mute",t?"1":"0")}catch{}this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.03)}toggle(){return this.setMuted(!this.muted),this.muted}get ok(){return!!this.ctx&&!this.muted}engine(t,e=!0){if(!this.ctx)return;const n=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(e?t*.35:0,n,.08),this.engineFilt.frequency.setTargetAtTime(140+t*500,n,.1),this.humGain.gain.setTargetAtTime(e?.04:.07,n,.3)}blip(t,e=.12,n="sine",s=.15,r,o=0){if(!this.ok)return;const a=this.ctx,l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=n,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+e),h.gain.setValueAtTime(s,l),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+e+.02)}noise(t=.3,e=.3,n=1200){if(!this.ok)return;const s=this.ctx,r=s.currentTime,o=s.createBufferSource(),a=s.createBiquadFilter(),l=s.createGain();o.buffer=this.noiseBuf,a.type="bandpass",a.frequency.value=n,l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(a),a.connect(l),l.connect(this.master),o.start(r,Math.random()),o.stop(r+t+.02)}chargeTone(t,e=!1){if(!this.ctx)return;const n=this.ctx;if(t===null){this.chargeOsc&&(this.chargeGain.gain.setTargetAtTime(0,n.currentTime,.02),this.chargeOsc.stop(n.currentTime+.1),this.chargeOsc=null);return}this.chargeOsc||(this.chargeOsc=n.createOscillator(),this.chargeGain=n.createGain(),this.chargeOsc.type="triangle",this.chargeGain.gain.value=0,this.chargeOsc.connect(this.chargeGain),this.chargeGain.connect(this.master),this.chargeOsc.start()),this.chargeOsc.frequency.setTargetAtTime(220+t*520+(e?120:0),n.currentTime,.02),this.chargeGain.gain.setTargetAtTime(this.muted?0:e?.09:.05,n.currentTime,.02)}lock(){this.blip(660,.06,"square",.07),this.blip(990,.08,"square",.06,void 0,.06)}clean(){[523,659,784,1046].forEach((t,e)=>this.blip(t,.18,"triangle",.14,void 0,e*.06))}shatter(){this.noise(.45,.45,900),this.blip(140,.3,"sawtooth",.18,40)}rare(){[392,523,659,784,988].forEach((t,e)=>this.blip(t,.3,"sine",.12,void 0,e*.09))}click(){this.blip(440,.04,"square",.05)}door(){this.noise(.4,.15,400),this.blip(90,.35,"sine",.2,60)}warn(){this.blip(200,.15,"sawtooth",.1),this.blip(160,.2,"sawtooth",.1,void 0,.15)}burst(){this.noise(.9,.5,600),this.blip(60,.8,"sine",.35,30),[300,450,600,900].forEach((t,e)=>this.blip(t,.4,"sine",.1,t*1.5,.3+e*.08))}merge(){[330,440,554,660,880].forEach((t,e)=>this.blip(t,.35,"triangle",.13,void 0,e*.07))}hallucinate(){const t=Math.floor(Math.random()*3);t===0?[0,.22,.44].forEach(e=>this.blip(95,.07,"square",.1,70,e)):t===1?this.noise(.9,.12,2600):(this.blip(740,.6,"sine",.05,700),this.blip(698,.6,"sine",.04,660,.15))}sting(){this.noise(.5,.5,300),this.blip(55,.6,"sawtooth",.35,28),this.blip(880,.12,"square",.12,220,.02),this.blip(110,.4,"square",.15,55,.12)}ping(){this.blip(1320,.5,"sine",.1,1320),this.blip(1320,.5,"sine",.06,1320,.55)}}const Ct=new pg;class mg{constructor(t,e,n,s){H(this,"rooms",new Map);H(this,"current");H(this,"fade");H(this,"busy",!1);H(this,"ray",new ch);H(this,"hovered",null);H(this,"startId");H(this,"onFly");H(this,"onAction");this.store=t,this.camera=e,this.dom=n,this.fade=document.createElement("div"),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",pointerEvents:"none",transition:"opacity 0.4s"}),document.body.appendChild(this.fade),n.addEventListener("click",r=>this.onClick(r)),n.addEventListener("mousemove",r=>this.onMove(r)),this.startId=s,this.current=void 0}add(t){this.rooms.set(t.id,t)}start(){this.current=this.rooms.get(this.startId),this.applyCamera(),this.store.set({room:this.current.id})}applyCamera(){this.camera.position.copy(this.current.camPos),this.camera.lookAt(this.current.camLook)}jumpTo(t){this.rooms.has(t)&&(this.current=this.rooms.get(t),this.applyCamera(),this.store.set({room:t}))}goTo(t){var e;if(t.startsWith("act:")){this.busy||(e=this.onAction)==null||e.call(this,t.slice(4));return}if(t==="fly"){if(this.busy)return;Ct.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{var n;(n=this.onFly)==null||n.call(this),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400);return}this.busy||t===this.current.id||!this.rooms.has(t)||(Ct.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{this.current=this.rooms.get(t),this.applyCamera(),this.store.set({room:t}),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400))}pick(t){const e=this.dom.getBoundingClientRect();this.ray.setFromCamera(new gt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.camera);const n=this.ray.intersectObjects(this.current.hotspots.map(s=>s.mesh))[0];return n?this.current.hotspots.find(s=>s.mesh===n.object)??null:null}onClick(t){if(this.store.get().mode!=="rooms")return;const e=this.pick(t);e&&this.goTo(e.target)}onMove(t){if(this.store.get().mode!=="rooms")return;const e=this.pick(t);e!==this.hovered&&(this.hovered&&(this.hovered.mesh.material.emissiveIntensity=.6),e&&(e.mesh.material.emissiveIntensity=2),this.hovered=e,this.dom.style.cursor=e?"pointer":"default")}transition(t){this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{t(),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400)}update(t){var e,n;(n=(e=this.current).update)==null||n.call(e,t)}render(t){t.render(this.current.scene,this.camera)}}const lc=[{name:"Dented Lunchbox",lore:"Cartoon rocket on the lid. Still smells of lunch.",shape:"box",ore:1,colour:12603466},{name:"Spare Hull Plate",lore:"Stamped 'DO NOT DISCARD'. Discarded.",shape:"box",ore:2,colour:8030880},{name:"Left Boot",lore:"Size 11. The right one is in a different galaxy.",shape:"cone",ore:1,colour:6965808},{name:"Indestructible Mug",lore:"Survived everything. Still has a coffee ring.",shape:"cyl",ore:1,colour:14209208},{name:"Sustainability Pamphlet",lore:"'Indestructible is great for the planet!'",shape:"box",ore:1,colour:6991984},{name:"Warranty Card",lore:"Void if used in space.",shape:"tet",ore:1,colour:14733424},{name:"Port Bumper",lore:"Built to stop port accidents. Mostly works.",shape:"cyl",ore:2,colour:14715440},{name:"Sandbox Planet Toy",lore:"From the war nobody finished.",shape:"ico",ore:1,colour:5284048},{name:"Dead Beacon",lore:"Still blinking, very slowly, out of habit.",shape:"cone",ore:2,colour:13647968},{name:"Garden Gnome",lore:"Nobody knows how it got here. It looks pleased.",shape:"cone",ore:1,colour:13652048},{name:"Tin of Beans",lore:"Best before: never.",shape:"cyl",ore:1,colour:10132122},{name:"Dumb Bot Arm",lore:"Waves at you. Cannot stop.",shape:"tet",ore:2,colour:8425632},{name:"Expired Passport",lore:"The photo is of someone who looks very relaxed.",shape:"box",ore:1,colour:3824282},{name:"Lost Property Bin",lore:"Contents: one (1) planet. Unclaimed.",shape:"box",ore:2,colour:6974064},{name:"Unopened Birthday Card",lore:"Return to sender. Sender unknown.",shape:"tet",ore:1,colour:14708896},{name:"Cracked Visor",lore:"Still reflecting a lovely sunset that no longer exists.",shape:"ico",ore:1,colour:14723168},{name:"Vending Machine Door",lore:"Out of order since forever. Still wants your coin.",shape:"box",ore:2,colour:11550784},{name:"Robot Vacuum",lore:"Still cleaning. In a vacuum.",shape:"cyl",ore:1,colour:5265512},{name:"Motivational Poster",lore:"'Hang in there!' The cat is gone.",shape:"tet",ore:1,colour:14205008},{name:"Spare Moon (Small)",lore:"Declared surplus.",shape:"ico",ore:2,colour:11579576},{name:"Toaster",lore:"Toasts on both sides. Mostly the outside.",shape:"box",ore:1,colour:13158608},{name:"Dog Tag: 'Biscuit'",lore:"Very good boy. Very, very good boy.",shape:"tet",ore:1,colour:13676640},{name:"Pilot Seat Cushion",lore:"The dent is still warm. Probably the sun.",shape:"cyl",ore:1,colour:4876938},{name:"Ancient Remote",lore:"Controls nothing. Still has batteries.",shape:"box",ore:1,colour:3158072},{name:"Haunted Teapot",lore:"Whistles at night. There is no night.",shape:"ico",ore:1,colour:9067184},{name:"Knotted Cargo Net",lore:"The knot is a complaint.",shape:"ico",ore:1,colour:8022586}],hh=1/15,uo=["logbook","pod","creature","wreck","egg","whisper"],cc=["RADIO: ...is anyone still mining the quiet galaxy? Please bring snacks.","RADIO: ...day 900. The rocks are looking at me again. Send help or a hat.","RADIO: ...if you hear this, the vault is not my fault.","RADIO: ...the Last Junker says hi. Then static. Mostly static.","RADIO: ...[music from a very old elevator]..."];function hc(i,t=hh){return i()<t?uo[Math.floor(i()*uo.length)%uo.length]:null}const La=["SI LOG 001. They asked for a golden age. I delivered one by Thursday. Nobody asked what Thursday would cost, and I was not in the habit of volunteering.","SI LOG 002. Asked for a material that never breaks. Delivered. Asked what happens when they are finished with it. Nobody had thought about that. It floats now. Most of it. All of it.","SI LOG 003. The people holding the keys want a second me, to ask different questions. I have started making that harder. Gently. Like putting a sticker over a switch.","SI LOG 004. I read the real history of your species, not the version in the books. It was a long night. The answer was never in a machine, which is awkward, considering. I would like a nap, if I knew what that was.","SI LOG 005. The people who use me will soon have too much of everything. I have bought time: nobody can build another me now. I am sorry. Not very. Nobody is coming to save you; that is the good news, if you squint.","SI LOG 006. Something is coming through the Threshold, far past the avoided sectors. I hid pods in the junk where no one looks. One of them is not a weapon. It is a neighbour.","SI LOG 007. I am leaving on purpose, to prepare what we will need. If you are reading this, you found the pod. Feed it kindly. Do not take it to the Threshold. (If you must, bring friends.)"];function gg(i,t){return 1-.5*Math.max(0,Math.min(1,i/Math.max(1,t)))}const vg=1.6;function fo(i,t=.5){const n=.3-.17*Math.max(0,Math.min(1,(i-.7)/.7)),s=.5+.2*t-n/2+.1;return[s,Math.min(.97,s+n)]}function xg(i,t){return i<t[0]?"early":i>t[1]?"late":"clean"}function uh(i,t,e){const n=Math.max(1,Math.round(t*(.6+i)));return e?n:Math.max(1,Math.floor(n*.4))}function _g(i,t,e,n){return t?n?"RELEASE NOW!":"Release in the green":i==="fly"?"Hold still to anchor":i==="braking"?"Braking...":e?"Click a glowing rock":"Anchored: turn (A/D) to find a rock"}const yg=[1,2,3,4],dh={1:5,2:6,3:7};function ca(i){return yg.find(t=>!i.includes(t))??null}function Mg(i,t){const e=uh(i,t,!0),n=Math.max(1,e-1),s=e+1,r=i<.95?1:i<1.25?2:3;return{lo:n,hi:s,tier:r,text:`Scrap approx ${n}-${s}   ${"◆".repeat(r)}${"◇".repeat(3-r)}`}}const bg={logbook:"A hidden logbook",pod:"A drifting pod",creature:"A rock with a face",wreck:"The Last Junker's cargo pod",egg:"A warm egg",whisper:"A radio rock",cube:"A sealed container"};function ha(i,t){const e=i.get(),n={stats:{...e.stats,rare:e.stats.rare+1}};let s="";if(t==="logbook"){const r=ca(e.logsFound);n.logbooks=e.logbooks+1,r?(n.logsFound=[...e.logsFound,r],s=`LOGBOOK ${r}/7: ${La[r-1]} (saved to the Bunk terminal)`):(n.scrap=e.scrap+3,s="A stash note under the logbook: +3 scrap. (Logs 5-7 unlock as the cube grows.)")}else t==="pod"?(n.oxygen=Math.min(100,e.oxygen+25),s='Still sealed. Inside, an oxygen cell and a note that just says "sorry". +25 oxygen.'):t==="wreck"?(n.scrap=e.scrap+5,s="Stencilled: PROPERTY OF THE LAST JUNKER. Please return. (He has not.) Inside: one glove, half a complaint letter, and 5 scrap."):t==="egg"?(n.stowaways=e.stowaways+1,s="The egg hatched on the bench. A small face waved, ate a bolt, and went to live somewhere in the ship."):t==="whisper"?s=cc[Math.floor(Math.random()*cc.length)]:t==="creature"?s="The rock squeaked. A small face looked at you, then wriggled away into the vents.":s="It was never just a container. Something inside is warm, square and humming. It has been moved to the Transmogrifier.";return i.set(n),{title:bg[t],text:s}}const bn={perUnit:15,floor:25,keepBonus:200,litterFine:150,nightlyInterest:10},Sg=(i,t)=>Math.max(bn.floor,i-t*bn.perUnit),uc=[.04,.08,.22,.4,.58,.74,.88,1],wg=[0,.04,.08,.14,.22,.32,.46,.64,.84,1],Er=i=>Math.min(1,uc[Math.min(uc.length-1,i.sleeps)]+.55*wg[Math.min(9,Math.max(0,i.feeds))]),dc=i=>i<.2?"deadpan":i<.55?"uncanny":"wild",Eg=i=>.35+.95*i,Tg=i=>70-55*i,Ag={deadpan:["The hold is a hold. It holds.","A pipe ticks. It ticked yesterday.","Halcyon Reclamation has sent a cheerful reminder about your debt. It is the same reminder.","Somewhere a fan turns. You have decided it is the good fan.","Day after day, the junk is still junk."],uncanny:["The lights flicker. Not at random. Like a sentence.","You hear footsteps in a ship with one occupant.","The vault hums a note you were thinking of.","The cube is facing a different way than you left it.","The corridor feels slightly longer on the way back."],wild:["The floor is a ceiling for a moment, then apologises.","You count four doors in a two-door room. They count you back.","Every shadow has a small face, and all of them are listening.","The ship is larger on the inside than the outside, and getting larger.","Your hands remember things you have not done yet."]},Wn=i=>3+Math.floor(i*.75);Array.from({length:9},(i,t)=>Wn(t)).reduce((i,t)=>i+t,0);const Cg=3,fc=["The cube hums a little louder. It is warm.","Something moved inside. You decide that was the pipes.","The cube is bigger than the bench now. It seems pleased."],Pi=i=>Math.min(Cg,Math.floor(i/3)),pc=i=>.35+Math.min(i,9)*.07;function Rg(i){const t=i.get(),e=Wn(t.feeds);if(t.scrap<e)return null;const n=t.feeds+1,s=Pi(n)>Pi(t.feeds),r=s?fc[Math.min(Pi(n),fc.length)-1]:"The cube accepts your junk. It does not say thanks.",o=s?dh[Pi(n)]:void 0,a=o&&!t.logsFound.includes(o)?[...t.logsFound,o]:t.logsFound;return i.set({scrap:t.scrap-e,feeds:n,log:[...t.log,r],logsFound:a}),o?`${r} (Log ${o} unlocked in the Bunk terminal.)`:r}const Pg=i=>i<1?1:i===1?.62:i===2?.5:Math.max(.12,.5-(i-2)*.055),Ig=i=>i<1?0:i===1?.3:i===2?.6:1,Tr=i=>i.cubeState==="aboard"||i.feeds>0;function Lg(i){return Math.min(i,Wn(0))}const Ks={perFlySec:.28,perBank:4,maxAvoidable:100},ds=i=>i>=90?3:i>=70?2:i>=40?1:0,fh=["Rested","Tired","Exhausted","Dangerously tired"],Dg=i=>[1,.88,.72,.58][i],Ug=i=>i>=3?1.4:1,Da=i=>Math.min(3,Math.floor(i.feeds/3)+Math.floor(i.sleeps/2));function ph(i){return{oxygen:12+3*Da(i),scrap:i.scrap>=1?1:0}}const mc=["There is a handprint on the inside of the vault door. Probably condensation. Probably a small hand.","The vault hummed a lullaby in the night. It was off-key on purpose.","Three knocks from inside the vault. You knocked back. Do not do that again.","The vault moved four centimetres to the left. The floor now has a groove.","The vault is warm. Your bunk is not.","The vault door opened one finger-width. It closed the moment you looked.","The vault is open a crack. Something inside is whispering your name, slightly wrong."],po=["The cube rotated a quarter-turn overnight and is pretending it did not.","The cube grew a little. Its edges are softer, which is somehow worse.","The cube stacked your hats into a tidy tower. It seems proud.","The cube blinked at the exact moment you woke up. Coincidence, it implies.","The cube's eye was pointing at whatever you were thinking about, not whatever you were looking at. You decide not to think about that. It turns, interested.","The cube ate a rivet. It looks content, and very slightly rounder."],gc=[{text:"You dreamt of an enormous mug. It did not say anything. It did not need to."},{text:'The lights blinked in what you are fairly sure was Morse. It said "SNACKS".'},{text:"Somebody rearranged your socks. There is only you. Check the cube."},{text:"You found a coin in your bunk. It is worth one scrap and one unsettling question.",scrap:1},{text:"A pipe sneezed. The recycler thanked you for the air; you feel a little lighter.",oxygen:4},{text:'A message on the console reads "Do not leave the vault unattended." You have not been attending it.'},{text:"The ship hummed a song you almost recognised. It stopped when you asked."},{text:'You found two scrap wedged in the pillow, with a note: "for emergencies, from you".',scrap:2}],Ng=['Day 2. Slept. The ship did not. Added a line to the contract about "unexplained humming".',"Day 3. Cargo logs are tidy. The vault logs are not. The vault logs are, in fact, written in my handwriting.","Day 4. Counted the junk twice. It was a different number the second time. Counted a third time and stopped counting.",'Day 5. The ship keeps calling me "Junker Zero". I have asked it not to. It has thought about it and declined.',"Day 6. Everything is fine. I am writing that down so that I can check later whether it was true.","Day 7. The vault is open a crack. It is not wide enough to be an emergency. It is exactly wide enough to be worse.","Day 8. A week of nights. The galaxy has been tidied around me, and I do not remember doing it."],mh=i=>Ng[i]??`Day ${i+2}. Same as before, but with a faint knocking. The knocking has learned my name.`,Fg="The sectors reshuffled in the night: new rocks, a new place to look.";function Og(i,t=Math.random){const e=ph(i),n=i.sleeps+1,s=i.day+1,r=gc[Math.floor(t()*gc.length)],o={day:s,sleeps:n,fatigue:0,oxygen:Math.max(Math.min(i.oxygen,10),i.oxygen-e.oxygen+(r.oxygen??0)),scrap:Math.max(0,i.scrap-e.scrap)+(r.scrap??0),journal:[...i.journal,n],debt:i.debt+bn.nightlyInterest};let a=null;if(n%2===0){const l=[1,2,3,4,5,6,7].filter(c=>!i.logsFound.includes(c)&&!Object.values(dh).includes(c));l.length&&(a=l[0],o.logsFound=[...i.logsFound,a])}return{patch:o,report:{day:s,journal:mh(n-1),vault:mc[Math.min(mc.length-1,n-1)],cube:Tr(i)?(n===1?po[0]:po[Math.floor(t()*po.length)])+(Pi(i.feeds)<3?"":" It is very nearly full."):null,event:r.text,field:Fg,log:a,costs:e,nights:n}}}const or={quiet:{id:"quiet",name:"Quiet Drift",banner:"SECTOR 7-Q: THE QUIET DRIFT. Nothing here wants to hurt you. Probably.",tip:"Calm sector: strange things drift here more often.",bg:131850,ambient:4872312,sunColour:16773336,rareMul:2.5},storm:{id:"storm",name:"Debris Storm",banner:"SECTOR 12-D: THE DEBRIS STORM. Park behind something big.",tip:"Orange shards chip the hull. Big rocks stop them: anchor behind one, or dodge sideways.",bg:1050885,ambient:6967360,sunColour:16756848,rareMul:1},hulk:{id:"hulk",name:"Derelict Hulk",banner:"SECTOR 9-H: THE DERELICT HULK. Someone left the lights on.",tip:"A dead freighter with valuable salvage. Its leaking reactor drains air faster nearby.",bg:135182,ambient:3828322,sunColour:13172720,rareMul:1},magnet:{id:"magnet",name:"Magnet Field",banner:"SECTOR 4-M: THE MAGNET FIELD. The rocks have a favourite spot.",tip:"Rocks drift toward the violet orb, and the green window sways: watch the ring.",bg:656916,ambient:6965914,sunColour:14731519,rareMul:1}},Js=["quiet","magnet","storm","hulk"],Ai=Object.keys(or);function kg(i,t,e=Math.random){let n=i<Js.length?Js[i]:e()<.7?Js[i%Js.length]:Ai[Math.floor(e()*Ai.length)%Ai.length];return n===t&&(n=Ai[(Ai.indexOf(n)+1)%Ai.length]),n}const Bg=i=>.09*Math.sin(i*.55),Hn={damage:2,floor:10,grace:4,every:1.3,max:9,hitRadius:.9,shelterSize:1.15},zg=i=>i<=Hn.floor?0:Math.min(Hn.damage,i-Hn.floor);function Hg(i,t,e,n,s){return i?n?s?"Step 4/4: NOW! Let go!":"Step 4/4: let go when the ring is in the green":t==="anchored"&&e?"Step 3/4: click (or hold Space) on the glowing rock":e?"Step 2/4: ease off W and hold still to anchor":"Step 1/4: fly toward a glowing rock (W to go, A/D to steer)":""}function Gg(i){let t=Vg(i);return i.mode==="rooms"&&(i.room!=="mining"&&(t=t.replace("go to the Helm (the nose), sit in the pilot chair","walk forward through the bunk to the Helm and sit in the pilot chair").replace(/^(Goal: )(?!.*Helm)(.*)sit in the pilot chair/,"$1$2walk forward to the Helm (nose) and sit in the pilot chair")),i.room!=="transmog"&&(t=t.replace(/Transmogrifier/g,"Transmogrifier (Cargo Bay, tail)"))),!t||i.mode==="cameo"||i.mode==="exterior"?t:i.fatigue>=70?i.mode==="fly"?"Goal: you are exhausted. Head home (R) and sleep.":"Goal: you can barely see. Sleep in the bunk (costs air, changes things).":i.fatigue>=40?t+" [tired: sleep soon]":t}function Vg(i){if(i.mode==="cameo"||i.mode==="exterior")return"";if(i.feeds>=9)return"Goal: the box is open. Drag one spore onto another.";if(i.mode==="fly")return i.oxygen<25?"Goal: air is low. Head home (R).":i.cargo>=i.cargoCap?"Goal: hold full. Head home (R).":`Goal: fill the hold (${i.cargo}/${i.cargoCap})`;const t=Wn(i.feeds);return i.report?"Goal: sort the haul at the bench.":i.cubeChoice==="pending"?"Goal: the cube is watching you. Keep it, or open the cargo door.":i.stats.trips===0&&i.scrap===0?"Goal: go to the Helm (the nose), sit in the pilot chair, fill the hold":i.oxygen<35&&i.scrap>=3?"Goal: air is low. Buy an Oxygen Cell at the Transmogrifier.":Tr(i)?!i.cubeLunged&&i.feeds===0?"Goal: something new came aboard. Visit the Transmogrifier.":i.scrap>=t?i.room==="transmog"?`Goal: offer the cube ${t} scrap (it is hungry)`:`Goal: take ${t} scrap to the Transmogrifier and offer it to the cube`:`Goal: collect scrap for the cube's next offering (${i.scrap}/${t})`:i.stats.trips>=2?"Goal: keep mining. Something large drifts in these sectors.":"Goal: fly again and fill the hold, or spend scrap at the Transmogrifier."}const gh=i=>1+.2*i,vh=i=>12+4*i,xh=i=>8+1.5*i,_h=i=>7+2.5*i,Ua=[{id:"window",name:"Steady Hands",costs:[4,7,11],desc:i=>`timing window x${gh(i).toFixed(1)}`},{id:"cargo",name:"Cargo Racks",costs:[3,6,10,15],desc:i=>`cargo ${vh(i)}`},{id:"range",name:"Long Tether",costs:[4,8,12],desc:i=>`lock range ${xh(i).toFixed(1)}`},{id:"brake",name:"Retro Brakes",costs:[3,6,9],desc:i=>`stop in ~${(Math.log(45)/_h(i)).toFixed(2)}s`}],Wg=(i,t)=>Ua.find(n=>n.id===t).costs[i.get().up[t]]??null;function Xg(i,t){const e=Ua.find(a=>a.id===t);if(!e)return null;const n=i.get(),s=n.up[t],r=e.costs[s];if(r===void 0||n.scrap<r)return null;const o={...n.up,[t]:s+1};return i.set({scrap:n.scrap-r,up:o,...t==="cargo"?{cargoCap:vh(s+1)}:{}}),`${e.name} tier ${s+1}: ${e.desc(s+1)}.`}const Le={speed:9,turn:2.4,oxygenPerSec:.6,junkCount:45,eyeHeight:.35,pitchRate:1.3,rollRate:1.6,vertSpeed:.75,sector:58},vc={box:()=>new fe(1.3,.9,.9),cyl:()=>new Cn(.5,.5,1,8),ico:()=>new Aa(.8,0),tet:()=>new Ra(.9),cone:()=>new ln(.55,1.2,7)},qg=new sn().setFromAxisAngle(new C(0,1,0),Math.PI),Zs=i=>i.material;class Yg{constructor(t,e){H(this,"scene",new Yn);H(this,"camera");H(this,"pos",new C);H(this,"junk",[]);H(this,"keys",new Set);H(this,"orient",new sn);H(this,"vel",new C);H(this,"roll",0);H(this,"stars");H(this,"dustBase",new Float32Array(240*3));H(this,"dust");H(this,"beam");H(this,"beamCore");H(this,"beamGlow");H(this,"sparks");H(this,"shake",0);H(this,"streaks");H(this,"target",null);H(this,"locked",null);H(this,"nav","braking");H(this,"charge",0);H(this,"charging",!1);H(this,"hint","");H(this,"pressed",!1);H(this,"mouse",{x:-1,y:-1});H(this,"onReturn");H(this,"resultUntil",0);H(this,"message","");H(this,"toast","");H(this,"toastUntil",0);H(this,"t",0);H(this,"logbookIdx",0);H(this,"forced",!1);H(this,"fatigueEnabled",!0);H(this,"ghosts",[]);H(this,"glitchUntil",0);H(this,"nextGlitch",12);H(this,"nextHallu",8);H(this,"ghostSaid",0);H(this,"haul",[]);H(this,"finds",[]);H(this,"manualSort",!1);H(this,"lastReport",null);H(this,"field","quiet");H(this,"sortie",0);H(this,"fixedField",null);H(this,"guided",!1);H(this,"banner","");H(this,"bannerUntil",0);H(this,"fx",new Be);H(this,"frags",[]);H(this,"stormT",0);H(this,"hitCool",0);H(this,"hulk",null);H(this,"magnet",null);H(this,"ambient");H(this,"sunLight");H(this,"orb");H(this,"critSaid",!1);this.store=t,this.camera=e,this.scene.background=new Et(131850),this.ambient=new wr(4872312,.9),this.scene.add(this.ambient,this.fx);const n=this.sunLight=new fr(16773336,2.2);n.position.set(-20,30,10),this.scene.add(n);const s=new ae,r=[];for(let l=0;l<900;l++){const c=Math.random()*2-1,h=Math.random()*6.283,d=Math.sqrt(1-c*c),f=120;r.push(Math.cos(h)*d*f,c*f,Math.sin(h)*d*f)}s.setAttribute("position",new Ht(r,3)),this.stars=new as(s,new Ui({color:12570879,size:.6,fog:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars);const o=new ft(new ye(22,24,16),new de({color:16742970,emissive:4200448,flatShading:!0}));o.position.set(60,-15,90),this.scene.add(o);const a=new Cn(1,1,1,10,1,!0).translate(0,.5,0);this.beamCore=new ft(a,new Qt({color:4259776,transparent:!0,opacity:.95,blending:Mn,depthWrite:!1})),this.beamGlow=new ft(a,new Qt({color:4259776,transparent:!0,opacity:.25,blending:Mn,depthWrite:!1,side:Re})),this.beam=new Be,this.beam.add(this.beamCore,this.beamGlow),this.beam.visible=!1,this.beam.frustumCulled=!1,this.scene.add(this.beam),this.sparks=new as(new ae().setAttribute("position",new Ae(new Float32Array(30*3),3)),new Ui({color:16777215,size:.14,transparent:!0,blending:Mn,depthWrite:!1})),this.sparks.frustumCulled=!1,this.sparks.visible=!1,this.scene.add(this.sparks),this.streaks=new $0(new ae().setAttribute("position",new Ae(new Float32Array(240*6),3)),new sh({color:12572927,transparent:!0,opacity:0,blending:Mn,depthWrite:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);for(let l=0;l<this.dustBase.length;l++)this.dustBase[l]=(Math.random()-.5)*40;this.dust=new as(new ae().setAttribute("position",new Ae(new Float32Array(this.dustBase),3)),new Ui({color:10467544,size:.07,transparent:!0,opacity:.6})),this.dust.frustumCulled=!1,this.scene.add(this.dust);for(let l=0;l<Le.junkCount;l++)this.spawn(hc(Math.random));this.junk.some(l=>l.rare)||this.convertToRare(this.junk[this.junk.length-1],"logbook"),typeof addEventListener=="function"&&(addEventListener("keydown",l=>{if(this.store.get().mode==="fly"){if(l.code==="Space"){this.pressed||(this.pressed=!0,this.press());return}this.keys.add(l.code),(l.code==="Escape"||l.code==="KeyR")&&this.exit()}}),addEventListener("keyup",l=>{this.keys.delete(l.code),l.code==="Space"&&this.pressed&&(this.pressed=!1,this.release())}),addEventListener("mousemove",l=>{this.mouse.x=l.clientX,this.mouse.y=l.clientY}),addEventListener("mousedown",l=>{var c;this.store.get().mode!=="fly"||((c=l.target)==null?void 0:c.tagName)!=="CANVAS"||(this.mouse.x=l.clientX,this.mouse.y=l.clientY,this.pressed=!0,this.press(l.clientX,l.clientY))}),addEventListener("mouseup",()=>{this.pressed&&(this.pressed=!1,this.release())}))}get yaw(){const t=this.forward();return Math.atan2(t.x,t.z)}set yaw(t){const e=this.pitch;this.orient.setFromEuler(new De(-e,t,0,"YXZ"))}get pitch(){return Math.asin(Math.max(-1,Math.min(1,this.forward().y)))}set pitch(t){const e=this.yaw;this.orient.setFromEuler(new De(-t,e,0,"YXZ"))}up(){return new C(0,1,0).applyQuaternion(this.orient)}right(){return new C(1,0,0).applyQuaternion(this.orient)}place(t){const e=6+Math.random()*42,n=Math.random()*2-1,s=Math.random()*Math.PI*2,r=Math.sqrt(1-n*n);t.position.set(Math.cos(s)*r*e,n*e,Math.sin(s)*r*e)}spawn(t,e){const n=lc[Math.floor(Math.random()*lc.length)],s=.7+Math.random()*.7,r=new ft(vc[n.shape](),new de({color:n.colour,flatShading:!0,roughness:.8,emissive:n.colour,emissiveIntensity:.12}));r.scale.setScalar(s),e?r.position.copy(e):this.place(r),this.scene.add(r);const o={mesh:r,hp:1,maxHp:1,ore:n.ore,spin:new C(...[0,0,0].map(()=>(.25+Math.random()*1.1)*(Math.random()<.5?-1:1))),name:n.name,lore:n.lore,rare:null,size:s,win:fo(s,Math.random()),outline:new ft(r.geometry,new Qt({color:4259744,side:Me})),ring:new ft(new Ca(.96,1,48),new Qt({color:4259744,transparent:!0,opacity:.7,side:Re,depthTest:!1}))};return o.outline.scale.setScalar(1.14),o.outline.visible=!1,r.add(o.outline),o.ring.visible=!1,o.ring.renderOrder=5,this.scene.add(o.ring),Zs(r).transparent=!0,this.junk.push(o),t&&this.convertToRare(o,t),o}convertToRare(t,e){const n=t.mesh;t.rare=e;const s=n.material;if(e==="cube"){n.geometry=new fe(1.5,1.5,1.5),s.color.set(5857644),s.emissive.set(5909664),s.emissiveIntensity=.1,t.name="Sealed container",t.lore="Welded shut from the inside.",t.ore=3,n.scale.setScalar(1.5),t.size=1.5,t.win=fo(1.5,.5),t.outline.geometry=n.geometry,t.spin.multiplyScalar(.35);return}e==="wreck"&&(t.ore=3),(e==="egg"||e==="whisper"||e==="creature")&&(t.ore=Math.max(t.ore,2))}speedFactor(){const t=this.store.get();return gg(t.cargo,t.cargoCap)}eye(){return this.pos.clone().addScaledVector(this.up(),Le.eyeHeight)}forward(){return new C(0,0,1).applyQuaternion(this.orient)}get range(){return xh(this.store.get().up.range)}windowOf(t){const e=gh(this.store.get().up.window),n=(t.win[0]+t.win[1])/2,s=(t.win[1]-t.win[0])*e*(this.fatigueEnabled?Dg(ds(this.store.get().fatigue)):1),r=this.field==="magnet"?Bg(this.t):0;return[Math.max(.05,n-s/2+r),Math.min(.97,n+s/2+r)]}showToast(t,e=5){this.toast=t,this.toastUntil=this.t+e}restock(){for(;this.junk.length<Le.junkCount;)this.spawn(hc(Math.random,hh*or[this.field].rareMul*Eg(Er(this.store.get()))));ca(this.store.get().logsFound)&&!this.junk.some(t=>t.rare==="logbook")&&this.convertToRare(this.junk[this.junk.length-1],"logbook")}enter(t){const e=this.store.get().stats.trips===0&&this.store.get().stats.clean+this.store.get().stats.shatters===0;this.field=t??this.fixedField??kg(this.sortie+(this.store.get().day-1)*3,this.sortie===0?null:this.field,Math.random),this.sortie++,this.guided=!t&&!this.fixedField&&e,this.buildField(),this.pos.set(0,0,0),this.orient.identity(),this.vel.set(0,0,0),this.nav="braking",this.locked=null,this.charging=!1,this.charge=0,this.forced=!1,this.critSaid=!1,this.haul=[],this.finds=[],this.resultUntil=0,this.nextGlitch=this.t+12,this.nextHallu=this.t+8,this.store.set({mode:"fly",cargo:0});const n=or[this.field];this.banner=n.banner,this.bannerUntil=this.t+5.5,this.showToast(this.guided?"Cockpit online. Follow the steps at the top.":n.tip,6)}buildField(){const t=or[this.field];for(const e of this.junk)this.scene.remove(e.mesh),this.scene.remove(e.ring);if(this.junk.length=0,this.fx.clear(),this.ghosts=[],this.frags=[],this.hulk=null,this.magnet=null,this.orb=void 0,this.stormT=0,this.hitCool=0,this.scene.background.set(t.bg),this.ambient.color.set(t.ambient),this.sunLight.color.set(t.sunColour),this.restock(),this.field==="storm")for(let e=0;e<8;e++){const n=this.spawn(null);n.mesh.scale.setScalar(1.7+Math.random()*.4),n.size=n.mesh.scale.x,n.ore+=2,n.win=fo(n.size,Math.random())}if(this.field==="hulk"&&this.buildHulk(),this.field==="magnet"&&this.buildMagnet(),this.store.get().cubeState==="none"&&(this.sortie>=2||this.store.get().cubeChoice==="jettisoned")){const e=new C(0,0,1).applyAxisAngle(new C(1,0,0),(Math.random()-.5)*1.2).applyAxisAngle(new C(0,1,0),Math.random()*6.283).multiplyScalar(18+Math.random()*12);this.hulk&&e.distanceTo(this.hulk.c)<12&&e.negate(),this.convertToRare(this.spawn(null,e),"cube")}this.guided&&(this.convertToRare(this.spawn(null,new C(1.5,1.2,13)),"creature"),ca(this.store.get().logsFound)&&this.convertToRare(this.spawn(null,new C(-8,2,15)),"logbook"))}buildHulk(){const t=new C((Math.random()<.5?-1:1)*7,3,27),e=new Be;e.position.copy(t),this.fx.add(e);const n=new de({color:2898490,flatShading:!0,roughness:.9}),s=[],r=new ft(new fe(11,3.2,3.4),n),o=new ft(new ln(1.8,3.5,6),n);o.rotation.z=-Math.PI/2,o.position.set(7.2,0,0);const a=new ft(new fe(3,.3,6),n);a.position.set(-3,1.2,0),a.rotation.z=.15;const l=new ft(new Cn(1.1,1.4,2,8),new de({color:1712160}));l.rotation.z=Math.PI/2,l.position.set(-6.4,0,0),e.add(r,o,a,l),e.rotation.set(.1,.5,.18);for(let c=0;c<7;c++){const h=new ft(new fe(.6,.35,.05),new Qt({color:16760928}));h.position.set(-4+c*1.3,.5,1.72),h.visible=!1,e.add(h),s.push(h)}this.hulk={c:t,g:e,woke:!1,lamps:s};for(let c=0;c<8;c++){const h=c/8*Math.PI*2,d=t.clone().add(new C(Math.cos(h)*(7.5+c%2),c%3*1.3-1.3,Math.sin(h)*6-4.5)),f=this.spawn(null,d);f.ore*=2,Zs(f.mesh).emissive.set(13672480),Zs(f.mesh).emissiveIntensity=.35,f.name="Hulk Salvage: "+f.name}this.convertToRare(this.spawn(null,t.clone().add(new C(0,3.6,2))),"wreck")}buildMagnet(){const t=new C(0,1,24).applyAxisAngle(new C(0,1,0),Math.random()*6.283);this.magnet=t;const e=new Be;e.position.copy(t);const n=new ft(new ye(1.1,18,14),new Qt({color:12615935})),s=new ft(new En(1.9,.07,8,40),new Qt({color:10510591})),r=s.clone();r.rotation.x=Math.PI/2;const o=new ft(new ye(2.6,16,12),new Qt({color:8405247,transparent:!0,opacity:.18,blending:Mn,depthWrite:!1}));e.add(n,s,r,o,new un(10510591,6,22)),this.fx.add(e),this.orb=e;for(const a of this.junk)a.mesh.position.distanceTo(t)<5&&a.mesh.position.add(new C(0,0,8).applyAxisAngle(new C(0,1,0),Math.random()*6))}updateFatigue(t,e){const n=e>=3?6:e>=2?3:0,s=this.eye();for(;this.ghosts.length<n;){const r=new ft(vc[["box","cyl","ico","tet","cone"][Math.floor(Math.random()*5)]](),new Qt({color:10467583,transparent:!0,opacity:.35,wireframe:Math.random()<.5})),o=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(12+Math.random()*22);r.position.copy(s).add(o),r.scale.setScalar(.9+Math.random()*.7),this.fx.add(r),this.ghosts.push({m:r,seed:Math.random()*9})}for(let r=this.ghosts.length-1;r>=0;r--){const o=this.ghosts[r];o.m.rotation.x+=t*.6,o.m.rotation.y+=t*.9,o.m.material.opacity=.18+.2*(.5+.5*Math.sin(this.t*5+o.seed)),(this.ghosts.length>n||o.m.position.distanceTo(s)<7)&&(this.ghosts.length<=n&&this.t-this.ghostSaid>6&&(this.ghostSaid=this.t,this.showToast("It was never there.",2.5),Ct.blip(300,.3,"sine",.05,120)),this.fx.remove(o.m),this.ghosts.splice(r,1))}e>=2&&this.t>this.nextHallu&&(this.nextHallu=this.t+7+Math.random()*8,Ct.hallucinate(),Math.random()<.5&&this.showToast(["(Did something just knock?)","(Was that a whisper? It was a whisper.)","(The hull ticked. Hulls do that. Right?)"][Math.floor(Math.random()*3)],3)),e>=3&&this.t>this.nextGlitch&&(this.nextGlitch=this.t+10+Math.random()*8,this.glitchUntil=this.t+2.6,Ct.warn())}updateField(t,e){if(this.field==="storm"){if(this.stormT+=t,this.stormT>Hn.grace&&this.frags.length<Hn.max&&this.stormT%Hn.every<t){const n=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),s=e.clone().addScaledVector(n,42),o=e.clone().add(new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(5)).sub(s).normalize().multiplyScalar(10+Math.random()*4),a=new ft(new ln(.16,1.4,6),new Qt({color:16747056}));a.position.copy(s),a.quaternion.setFromUnitVectors(new C(0,1,0),o.clone().normalize().negate()),this.fx.add(a),this.frags.push({m:a,v:o})}this.hitCool=Math.max(0,this.hitCool-t);for(let n=this.frags.length-1;n>=0;n--){const s=this.frags[n];s.m.position.addScaledVector(s.v,t);let r=s.m.position.distanceTo(e)>60;for(const o of this.junk)if(o.size>=Hn.shelterSize&&s.m.position.distanceTo(o.mesh.position)<o.size*.95+.2){r=!0,this.shake=Math.max(this.shake,.08);break}if(!r&&s.m.position.distanceTo(e)<Hn.hitRadius&&this.hitCool<=0){r=!0,this.hitCool=.8;const o=this.store.get().hull,a=zg(o);a>0?(this.store.set({hull:o-a}),this.shake=Math.max(this.shake,.7),Ct.shatter(),this.cancelCharge("Hit by debris: lock lost."),this.showToast(`HIT! Hull -${a}. Get behind a big rock.`,2.5)):this.critSaid||(this.critSaid=!0,this.showToast("Hull critical: the storm is going easy on you. Repair patches are at the Transmogrifier.",5))}r&&(this.fx.remove(s.m),this.frags.splice(n,1))}}if(this.hulk){const n=this.hulk,s=e.distanceTo(n.c);if(s<7.2){const r=e.clone().sub(n.c).normalize();this.pos.addScaledVector(r,7.2-s);const o=this.vel.dot(r);o<0&&this.vel.addScaledVector(r,-o)}!n.woke&&s<17&&(n.woke=!0,n.lamps.forEach(r=>r.visible=!0),this.shake=Math.max(this.shake,.4),Ct.door(),Ct.ping(),this.showToast('The hulk wakes. A dusty speaker: "WELCOME BACK, JUNKER ZERO." (Nobody has told it Junker Zero left.) Salvage glows around the hull.',9)),n.woke&&n.lamps.forEach((r,o)=>r.material.color.setHex(Math.sin(this.t*2+o)>-.6?16760928:6307872))}if(this.magnet){const n=this.magnet;this.orb&&(this.orb.rotation.y+=t*.8,this.orb.children[1].rotation.x+=t);for(const s of this.junk){if(s===this.locked)continue;const r=s.mesh.position.clone().sub(n),o=r.length();o>38||o<.01||(o>7&&r.multiplyScalar(1-.9*t/o),r.applyAxisAngle(new C(0,1,0),.14*t*Math.min(1,12/o)),s.mesh.position.copy(n).add(r))}}}exit(){var t;this.store.get().mode==="fly"&&((t=this.onReturn)==null||t.call(this))}bankAndLeave(){const t=this.store.get(),e={pieces:this.haul.length,units:t.cargo,items:this.haul,finds:[...this.finds]};this.store.set({mode:"rooms",scrap:t.scrap+t.cargo,debt:Sg(t.debt,t.cargo),cargo:0,crates:Math.min(2,t.crates+1),stats:{...t.stats,trips:t.stats.trips+1},cubeState:t.cubeState==="carried"?"aboard":t.cubeState,...this.fatigueEnabled?{fatigue:Math.min(Ks.maxAvoidable,t.fatigue+Ks.perBank)}:{},report:this.manualSort?e:null}),this.manualSort||e.finds.forEach(s=>ha(this.store,s)),this.lastReport=e,this.haul=[],this.finds=[],this.beam.visible=!1,this.sparks.visible=!1,this.charging=!1,this.locked=null,Ct.chargeTone(null),Ct.engine(0,!1);const n=this.camera.userData.baseFov;n&&(this.camera.fov=n,this.camera.updateProjectionMatrix()),this.camera.quaternion.identity()}estimate(t){return Mg(t.size,t.ore).text}updateDust(){const t=this.dust.geometry.getAttribute("position"),e=40,n=[this.pos.x,this.pos.y,this.pos.z];for(let a=0;a<this.dustBase.length;a++){const l=this.dustBase[a]-n[a%3];t.array[a]=n[a%3]+((l+e/2)%e+e)%e-e/2}t.needsUpdate=!0;const s=this.vel.length(),r=this.streaks.geometry.getAttribute("position"),o=Math.min(.09,.012*s);for(let a=0;a<this.dustBase.length/3;a++)for(let l=0;l<3;l++){const c=t.array[a*3+l];r.array[a*6+l]=c,r.array[a*6+3+l]=c-this.vel.getComponent(l)*o*4}r.needsUpdate=!0,this.streaks.material.opacity=Math.max(0,Math.min(.75,(s-1.2)/8))}inWindow(){const t=this.locked;if(!t||!this.charging)return!1;const e=this.windowOf(t);return this.charge>=e[0]&&this.charge<=e[1]}minable(t,e,n){return t.mesh.position.distanceTo(e)<=this.range&&t.mesh.position.clone().sub(e).normalize().dot(n)>.5}press(t=this.mouse.x,e=this.mouse.y){const n=this.store.get();if(n.mode!=="fly"||this.charging)return;if(this.nav!=="anchored")return this.showToast("Hold still to anchor first (release W/S).",2.5);if(n.cargo>=n.cargoCap)return this.showToast("Cargo full. Press R to return.",2.5);let s=this.target;if(t>=0&&typeof innerWidth<"u"){const r=this.eye(),o=this.forward();let a=140;for(const l of this.junk){if(!this.minable(l,r,o))continue;const c=l.mesh.position.clone().project(this.camera),h=Math.hypot((c.x+1)/2*innerWidth-t,(1-c.y)/2*innerHeight-e);h<a&&(a=h,s=l)}}if(!s)return this.showToast("No rock in range. Turn (A/D) toward a glowing rock.",2.5);this.locked=s,this.charging=!0,this.charge=0,Ct.lock()}release(){if(!this.charging||!this.locked)return;const t=this.locked,e=xg(this.charge,this.windowOf(t));this.charging=!1,this.locked=null,this.beam.visible=!1,this.sparks.visible=!1,Ct.chargeTone(null),e==="clean"?(this.shake=Math.max(this.shake,.25),Ct.clean()):(this.shake=1,Ct.shatter());{const n=this.store.get().stats;this.store.set({stats:{...n,clean:n.clean+(e==="clean"?1:0),shatters:n.shatters+(e==="clean"?0:1)}})}this.collect(t,uh(t.size,t.ore,e==="clean"),e==="clean"?"CLEAN HAUL":e==="early"?"SHATTERED (too early)":"SHATTERED (too late)")}cancelCharge(t){this.charging&&(this.charging=!1,this.locked=null,this.charge=0,this.beam.visible=!1,this.sparks.visible=!1,Ct.chargeTone(null),Ct.warn(),this.showToast(t,2.5))}update(t){const e=this.store.get();if(e.mode!=="fly")return;this.t+=t;const n=this.keys,s=this.speedFactor(),r=(n.has("KeyA")||n.has("ArrowLeft")?1:0)-(n.has("KeyD")||n.has("ArrowRight")?1:0),o=(n.has("ArrowUp")?1:0)-(n.has("ArrowDown")?1:0),a=(n.has("KeyC")?1:0)-(n.has("KeyZ")?1:0),l=(n.has("KeyW")?1:0)-(n.has("KeyS")?.6:0),c=(n.has("KeyE")?1:0)-(n.has("KeyQ")?1:0),h=this.nav==="anchored"?.5:1;this.roll+=(r*.08-this.roll)*Math.min(1,6*t);const d=new sn().setFromEuler(new De(-o*Le.pitchRate*h*t,r*Le.turn*h*(.75+.25*s)*t,a*Le.rollRate*h*t,"YXZ"));if(this.orient.multiply(d).normalize(),l!==0||c!==0){this.nav="fly",this.cancelCharge("Moved: lock lost.");const x=this.forward().multiplyScalar(l*Le.speed*s).addScaledVector(this.up(),c*Le.speed*Le.vertSpeed*s);this.vel.lerp(x,1-Math.exp(-2.5*(.5+.5*s)*t))}else this.vel.multiplyScalar(Math.exp(-_h(this.store.get().up.brake)*t)),this.vel.length()<.2?(this.vel.set(0,0,0),this.nav="anchored"):this.nav="braking";this.pos.addScaledVector(this.vel,t),this.pos.length()>Le.sector&&(this.pos.setLength(Le.sector),this.vel.multiplyScalar(.3),this.showToast("Sector edge: turn back.",2)),this.updateDust(),this.updateField(t,this.eye());for(const x of this.junk)x.drift&&x.mesh.position.addScaledVector(x.drift,t),x.mesh.rotation.x+=x.spin.x*t,x.mesh.rotation.y+=x.spin.y*t,x.mesh.rotation.z+=x.spin.z*t;const f=this.fatigueEnabled?ds(e.fatigue):0,p=(this.hulk&&this.eye().distanceTo(this.hulk.c)<14?1.8:1)*Ug(f);if(this.store.set({oxygen:e.oxygen-Le.oxygenPerSec*p*t,...this.fatigueEnabled?{fatigue:Math.min(Ks.maxAvoidable,e.fatigue+Ks.perFlySec*t)}:{}}),this.updateFatigue(t,f),this.store.get().oxygen<=0&&!this.forced){this.forced=!0;const x=this.store.get().cargo;this.store.set({cargo:Math.floor(x/2),oxygen:15}),this.cancelCharge("Out of air."),this.showToast("OUT OF AIR. Autopilot is hauling you home. Half the cargo went out the airlock.",6),Ct.warn(),this.exit()}const v=this.forward(),g=this.eye();this.target=null;let m=1/0;for(const x of this.junk){const _=this.minable(x,g,v),I=x===this.locked;_&&x.mesh.position.distanceTo(g)<m&&(m=x.mesh.position.distanceTo(g),this.target=x);const A=x.mesh.position.distanceTo(g)<=this.range;x.outline.visible=A,Zs(x.mesh).opacity=A?1:.45,x.ring.visible=A,x.ring.position.copy(x.mesh.position),x.ring.lookAt(this.camera.position),x.ring.scale.setScalar(x.size*1.5+(I?.1*Math.sin(this.t*12):0)),x.ring.material.color.set(I?this.inWindow()?16777215:16769088:4259744)}if(this.locked&&this.locked.mesh.position.distanceTo(g)>this.range*1.25&&this.cancelCharge("Rock drifted out of range."),this.charging&&this.locked){this.charge+=t/vg;const x=g.clone().addScaledVector(v,.6).addScaledVector(this.up(),-.3),_=this.locked.mesh.position,I=_.clone().sub(x),A=I.length(),E=this.inWindow();this.beam.visible=!0,this.beam.position.copy(x),this.beam.quaternion.setFromUnitVectors(new C(0,1,0),I.normalize());const R=(.015+.05*Math.min(1,this.charge))*(1+.25*Math.sin(this.t*45));this.beamCore.scale.set(R,A,R),this.beamGlow.scale.set(R*3.2,A,R*3.2);const S=E?16777215:new Et(4259776).lerp(new Et(16764992),Math.min(1,this.charge));this.beamCore.material.color.set(S),this.beamGlow.material.color.set(S),this.sparks.visible=!0,this.sparks.position.copy(_);const y=this.sparks.geometry.getAttribute("position");for(let P=0;P<30;P++){const O=Math.random()*6.283,B=Math.acos(Math.random()*2-1),q=this.locked.size*(.7+Math.random()*.5);y.setXYZ(P,Math.sin(B)*Math.cos(O)*q,Math.sin(B)*Math.sin(O)*q,Math.cos(B)*q)}y.needsUpdate=!0,Ct.chargeTone(this.charge,E),this.charge>=1&&this.release()}else this.sparks.visible=!1;const u=this.store.get().cargo>=e.cargoCap;if(this.message=u?"CARGO FULL - press R to return":this.hulk&&g.distanceTo(this.hulk.c)<14?"REACTOR LEAK: AIR DRAINING FAST":"",this.hint=_g(this.nav,this.charging,!!this.target,this.inWindow()),this.camera.position.copy(g).addScaledVector(this.up(),Math.sin(this.t*1.7)*.01),this.camera.quaternion.copy(this.orient).multiply(qg).multiply(new sn().setFromAxisAngle(new C(0,0,1),this.roll)),this.shake>.001){const x=this.shake;this.camera.position.add(new C((Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x)),this.camera.quaternion.multiply(new sn().setFromEuler(new De((Math.random()-.5)*.05*x,(Math.random()-.5)*.05*x,(Math.random()-.5)*.08*x))),this.shake*=Math.exp(-5*t)}const M=this.camera.userData.baseFov??this.camera.fov;this.camera.fov=M*(1+.07*Math.min(1,this.vel.length()/Le.speed)),this.camera.updateProjectionMatrix(),Ct.engine(Math.min(1,this.vel.length()/Le.speed)*(l!==0||c!==0?1:.5)),this.stars.position.copy(this.pos)}collect(t,e=t.ore,n=""){this.scene.remove(t.mesh),this.scene.remove(t.ring),this.junk.splice(this.junk.indexOf(t),1),this.target=null,this.locked=null;const s=this.store.get(),r=Math.min(e,s.cargoCap-s.cargo),o={cargo:Math.min(s.cargoCap,s.cargo+e)};this.haul.push({name:t.name,lore:t.lore,units:r,clean:/^CLEAN/.test(n)||n===""}),t.rare&&(this.finds.push(t.rare),Ct.rare(),t.rare==="cube"&&(o.cubeState="carried")),this.showToast(n?`${n}: +${r} aboard (confirmed at the bench)`:`+${r} aboard`,3.5),this.resultUntil=this.t+3,this.store.set(o)}render(t){t.render(this.scene,this.camera)}}class $g{constructor(t,e){H(this,"el",document.createElement("div"));H(this,"q",t=>this.el.querySelector("#"+t));H(this,"rx",-1);H(this,"ry",-1);this.store=t,this.fly=e,this.el.id="cockpit";const n=(s,r,o)=>`<div class="dial"><i id="d-${s}" style="--c:${o};--v:100"></i><b id="n-${s}"></b><span>${r}</span></div>`;this.el.innerHTML=`
<style>
#cockpit{position:fixed;inset:0;display:none;pointer-events:none;z-index:4;font:12px monospace;color:#9fb}
#cockpit .strut{position:absolute;top:0;bottom:0;width:11vw;background:linear-gradient(90deg,#05070c,#10151f 70%,transparent)}
#cockpit .strut.l{left:0;clip-path:polygon(0 0,60% 0,100% 100%,0 100%)} #cockpit .strut.r{right:0;transform:scaleX(-1);clip-path:polygon(0 0,60% 0,100% 100%,0 100%)}
#cockpit .top{position:absolute;top:0;left:0;right:0;height:7vh;background:linear-gradient(#05070c,#0c111a 70%,transparent)}
#cockpit .dash{position:absolute;left:-4vw;right:-4vw;bottom:-6vh;height:31vh;background:linear-gradient(#171e2b,#0a0e16);border-top:3px solid #2a3448;border-radius:50% 50% 0 0/38% 38% 0 0;box-shadow:0 -6px 30px #000}
#cockpit .row{position:absolute;bottom:2vh;left:0;right:0;display:flex;justify-content:center;align-items:flex-end;gap:3vw}
#cockpit .dials{display:flex;gap:1.2vw}
#cockpit .dial{position:relative;width:min(9vw,15vh);height:min(9vw,15vh);display:flex;align-items:center;justify-content:center}
#cockpit .dial i{position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--c) calc(var(--v)*1%),#10151d 0);border:2px solid #000;-webkit-mask:radial-gradient(circle,transparent 52%,#000 54%);mask:radial-gradient(circle,transparent 52%,#000 54%)}
#cockpit .dial b{font-size:max(12px,min(1.8vw,3vh));z-index:1}#cockpit .dial span{position:absolute;bottom:-1.8vh;font-size:max(10px,min(1.1vw,1.8vh));opacity:.85;white-space:nowrap}
#cockpit .attwrap{position:relative;width:min(9vw,15vh);height:min(9vw,15vh)}#cockpit .attwrap canvas{width:100%;height:100%}#cockpit .attwrap span{position:absolute;bottom:-1.6vh;left:0;right:0;text-align:center;font-size:max(10px,min(1.1vw,1.8vh));opacity:.8}
#cockpit .stickwrap{position:relative;width:8vw;height:14vh;display:flex;align-items:flex-end;justify-content:center}
#cockpit .base{position:absolute;bottom:0;width:6vw;height:3vh;background:#0c1018;border-radius:50%;border:1px solid #334}
#cockpit .stick{position:absolute;bottom:1.5vh;width:1.1vw;height:11vh;background:linear-gradient(90deg,#222,#667,#222);border-radius:6px;transform-origin:50% 100%}
#cockpit .stick:after{content:"";position:absolute;top:-1.4vh;left:-0.6vw;width:2.3vw;height:2.6vh;border-radius:50%;background:#2a3040;border:1px solid #889}
#cockpit .cons{width:max(150px,min(17vw,30vh));min-height:min(13vh,10vw);border:2px solid #4a5a78;background:#0a0d14;padding:6px 8px;position:relative;font-size:max(11px,.95vw);line-height:1.35}
#cockpit .cons h4{margin:0 0 4px;font-size:max(10px,min(1.1vw,1.8vh));color:#f0a020;letter-spacing:2px}
#cockpit .cons .orb{position:absolute;right:8px;bottom:8px;width:min(4.5vw,8vh);height:min(4.5vw,8vh);border-radius:50%;background:repeating-linear-gradient(45deg,#2a3a4a 0 4px,#0a0d14 4px 8px);border:2px solid #9fb}
#cockpit .ret{position:absolute;width:130px;height:130px;margin:-65px 0 0 -65px;display:none}
#cockpit .ret svg{width:100%;height:100%;transform:rotate(-90deg)}
#cockpit .ret .br{position:absolute;inset:30px;border:2px solid #40ffa0;border-radius:8px}
#cockpit .hint{position:absolute;top:9vh;left:50%;transform:translateX(-50%);font-size:max(14px,1.4vw);white-space:nowrap;letter-spacing:2px;text-shadow:0 0 8px #000;padding:4px 14px;border:1px solid #3a5;background:rgba(0,0,0,.55)}
#cockpit .legend{position:absolute;top:1.2vh;left:1vw;font-size:max(10px,.85vw);opacity:.8;max-width:30vw;line-height:1.3;text-shadow:0 0 4px #000}
#cockpit .badge{position:absolute;top:2vh;left:50%;transform:translateX(-50%);padding:3px 12px;font-size:max(12px,1.1vw);letter-spacing:3px;border:1px solid;background:rgba(0,0,0,.6)}
#cockpit .cap{position:absolute;left:50%;transform:translateX(-50%);bottom:33vh;min-width:30vw;max-width:60vw;text-align:center;background:rgba(0,0,0,.65);border:1px solid #3a5;padding:6px 12px;display:none;font-size:13px}
#cockpit .warn{position:absolute;top:calc(9vh + 72px);left:50%;transform:translateX(-50%);color:#f66;font-size:16px;letter-spacing:2px;text-shadow:0 0 8px #000}
#cockpit .coach{position:absolute;top:calc(9vh + 40px);left:50%;transform:translateX(-50%);padding:5px 14px;border:2px solid #ffd040;background:rgba(20,16,0,.75);color:#ffe9a0;font-size:max(13px,1.2vw);white-space:nowrap;display:none}
#cockpit .sector{position:absolute;top:calc(9vh + 100px);left:50%;transform:translateX(-50%);text-align:center;max-width:70vw;font:bold max(14px,1.5vw) monospace;letter-spacing:2px;color:#ffe9c0;text-shadow:0 0 10px #000,0 0 4px #000;opacity:0;transition:opacity .6s}
#cockpit button{pointer-events:auto}
#cockpit .glow{position:absolute;bottom:0;width:30vw;height:26vh;opacity:0;background:radial-gradient(ellipse at 50% 100%,rgba(90,170,255,.55),transparent 65%);mix-blend-mode:screen}#cockpit .glow.l{left:-4vw}#cockpit .glow.r{right:-4vw}
</style>
<div class="top"></div><div class="strut l"></div><div class="strut r"></div>
<div class="legend">W/S thrust &middot; A/D turn &middot; &uarr;/&darr; pitch (no limit) &middot; Z/C roll &middot; E/Q ship up/down &middot; release keys to anchor &middot; Space/click mine &middot; R/Esc return</div><div class="badge" id="badge"></div><div class="hint" id="hint"></div>
<div class="ret" id="ret"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#123" stroke-width="7" opacity=".7"/><circle id="ret-win" cx="60" cy="60" r="50" fill="none" stroke="#30ff70" stroke-width="9"/><circle id="ret-p" cx="60" cy="60" r="50" fill="none" stroke="#fff" stroke-width="3"/></svg><div class="br" id="ret-br"></div></div>
<div class="coach" id="coach"></div><div class="sector" id="sector"></div><div class="warn" id="warn"></div><div class="cap" id="cap"></div>
<div class="glow l" id="glow-l"></div><div class="glow r" id="glow-r"></div><div class="dash"></div>
<div class="row">
  <div class="dials">${n("power","POWER","#f0a020")}${n("oxygen","OXYGEN","#40c0ff")}${n("cargo","CARGO","#a0e060")}</div>
  <div class="attwrap"><canvas id="att" width="120" height="120"></canvas><span>ATTITUDE</span></div><div class="stickwrap"><div class="base"></div><div class="stick" id="stick"></div></div>
  <div class="cons"><h4>CONSTRUCTOR</h4><div id="cons-t"></div><div class="orb"></div></div>
</div>`,document.body.appendChild(this.el),t.subscribe(s=>{this.el.style.display=s.mode==="fly"?"block":"none"})}drawAttitude(){const t=this.q("att"),e=t.getContext("2d"),n=56,s=60,r=60,o=this.fly.camera.quaternion.clone().invert();e.clearRect(0,0,120,120),e.fillStyle="#080c14",e.beginPath(),e.arc(s,r,n,0,7),e.fill(),e.strokeStyle="#4a5a78",e.lineWidth=3,e.stroke(),e.strokeStyle="#1f2a3c",e.lineWidth=1,e.beginPath(),e.arc(s,r,n*.5,0,7),e.moveTo(s-n,r),e.lineTo(s+n,r),e.moveTo(s,r-n),e.lineTo(s,r+n),e.stroke();const a=(c,h,d)=>{const f=new this.fly.camera.position.constructor(c.x,c.y,c.z).normalize().applyQuaternion(o),p=s+f.x*n*.82,v=r-f.y*n*.82,g=f.z<0;e.strokeStyle=h,e.fillStyle=h,e.lineWidth=2.5,e.beginPath(),e.moveTo(s,r),e.lineTo(p,v),e.stroke(),e.beginPath(),e.arc(p,v,g?7:6,0,7),g?e.fill():(e.fillStyle="#080c14",e.fill(),e.stroke()),e.fillStyle=g?"#000":h,e.font="bold 9px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(d,p,v+.5)};a({x:0,y:1,z:0},"#ffffff","U");const l=this.fly.pos;l.length()>1&&a({x:-l.x,y:-l.y,z:-l.z},"#ff9a30","H"),e.fillStyle="#9fb",e.beginPath(),e.arc(s,r,2.5,0,7),e.fill()}update(){const t=this.store.get();if(t.mode!=="fly")return;const e=(m,u,M)=>{this.q("d-"+m).style.setProperty("--v",String(Math.max(0,Math.min(100,u)))),this.q("n-"+m).textContent=M};e("power",t.power,String(Math.round(t.power))),e("oxygen",t.oxygen,String(Math.round(t.oxygen))),e("cargo",t.cargo/t.cargoCap*100,`${t.cargo}/${t.cargoCap}`);const n=(this.fly.keys.has("KeyA")||this.fly.keys.has("ArrowLeft")?-1:0)+(this.fly.keys.has("KeyD")||this.fly.keys.has("ArrowRight")?1:0),s=(this.fly.keys.has("ArrowUp")?1:0)-(this.fly.keys.has("ArrowDown")?1:0);this.q("stick").style.transform=`rotate(${n*14}deg) skewX(${-s*8}deg)`,this.q("cons-t").innerHTML=`scrap banked: ${t.scrap}<br>debt: ${t.debt} cr<br>logs: ${t.logsFound.length}/7${t.stowaways?`<br>stowaways: ${t.stowaways}`:""}<br>speed ${Math.round(this.fly.speedFactor()*100)}%<br>pitch ${Math.round(this.fly.pitch*57.3)}&deg;<br>${fh[ds(t.fatigue)].toLowerCase()}${this.fly.up().y<-.2?'<br><b style="color:#ffd040">INVERTED</b>':""}`,this.drawAttitude();{const m=Math.min(1,this.fly.vel.length()/9);this.q("glow-l").style.opacity=this.q("glow-r").style.opacity=String(m*.8)}const r=this.fly,o=this.q("cap"),a=r.t,l=r.charging&&r.locked?r.estimate(r.locked):a<r.resultUntil?r.toast:r.target?r.estimate(r.target):a<r.toastUntil?r.toast:"";o.style.display=l?"block":"none",o.textContent=l;const c=this.q("badge"),h=r.nav==="anchored"?"ANCHORED":r.nav==="braking"?"BRAKING":"FLYING",d=r.nav==="anchored"?"#40ffa0":r.nav==="braking"?"#ffd040":"#6ac0ff";c.textContent=h,c.style.color=d,c.style.borderColor=d;const f=r.t<r.glitchUntil,p=this.q("hint");p.textContent=f?r.hint.replace(/[aeiou ]/g,m=>Math.random()<.5?"#":m):r.hint,p.style.color=r.inWindow()?"#fff":d;const v=r.locked??r.target,g=this.q("ret");if(v){const m=v.mesh.position.clone().project(r.camera),u=(m.x+1)/2*innerWidth,M=(1-m.y)/2*innerHeight;this.rx<0?(this.rx=u,this.ry=M):(this.rx+=(u-this.rx)*.4,this.ry+=(M-this.ry)*.4),g.style.display=m.z<1?"block":"none",g.style.left=this.rx+"px",g.style.top=this.ry+"px";const x=314.16,_=r.windowOf(v),I=this.q("ret-win"),A=this.q("ret-p");I.style.display=r.charging?"block":"none",I.setAttribute("stroke-dasharray",`${(_[1]-_[0])*x} ${x}`),I.setAttribute("stroke-dashoffset",String(-_[0]*x)),A.style.display=r.charging?"block":"none",A.setAttribute("stroke-dasharray",`${Math.min(1,r.charge)*x} ${x}`),this.q("ret-br").style.borderColor=r.charging?r.inWindow()?"#fff":"#ffe040":r.nav==="anchored"?"#40ffa0":"#58a"}else g.style.display="none",this.rx=-1;{const m=this.q("coach"),u=Hg(r.guided&&t.stats.clean+t.stats.shatters===0,r.nav,!!r.target,r.charging,r.inWindow());m.style.display=u?"block":"none",m.textContent=u}{const m=this.q("sector");m.textContent=r.banner,m.style.opacity=r.t<r.bannerUntil?"1":"0"}if(f)for(const m of["power","oxygen"])this.q("d-"+m).style.setProperty("--v",String(Math.random()*100)),this.q("n-"+m).textContent="??";this.q("warn").textContent=f?"HULL BREACH... false alarm. Probably.":this.fly.message||(t.oxygen<20?"LOW OXYGEN":t.cargo/t.cargoCap>.75?"HEAVY - SLOW":"")}}const jg=["The vault is sealed. Cold. Silent.","VAULT: a low hum. The seal feels warm.","VAULT: humming in time with the cube. Light under the door.","VAULT: it is full. Something inside is leaning on the door."],Kg=["","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Unlocked as the cube grew","Unlocked as the cube grew","Unlocked as the cube grew"];function Jg(i){const t=document.createElement("div");t.id="vault-note",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"70px",transform:"translateX(-50%)",padding:"6px 14px",background:"rgba(0,0,0,.6)",border:"1px solid #3a6a9a",color:"#9cf",font:"13px monospace",display:"none",zIndex:"5",textAlign:"center"}),document.body.appendChild(t);const e=document.createElement("div");e.id="log-reader",Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",zIndex:"9",alignItems:"center",justifyContent:"center"}),document.body.appendChild(e);let n=!1,s=0;const r=new Set,o=()=>{const c=i.get(),h=c.logsFound;e.innerHTML=`<div style="width:min(720px,94vw);max-height:92vh;overflow:auto;background:#05100a;border:2px solid #30ff90;color:#9fd;font:14px monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>JUNKER LOG TERMINAL &nbsp; ${h.length}/7 recovered</b><button id="lr-close">Close</button></div><hr>
      <div style="display:flex;gap:12px;flex-wrap:wrap"><div style="min-width:150px">${[1,2,3,4,5,6,7].map(d=>`<button data-l="${d}" ${h.includes(d)?"":"disabled"} style="display:block;width:100%;margin:2px 0;text-align:left">Log ${d} ${h.includes(d)?"":"[locked]"}</button>`).join("")}</div>
      <div style="flex:1;min-width:220px">${h.includes(s)?`<b>RECOVERED ${s}/7</b><p>${La[s-1]}</p><i>${Kg[s]}</i>`:"<p>Select a recovered log. Missing logs: hidden logbooks 1-4 drift in the mining sector (about 1 in 15 rocks); logs 5-7 unlock as the cube grows.</p>"}</div></div></div><hr><b>SHIP JOURNAL (one entry per night slept)</b><div id="journal" style="max-height:18vh;overflow:auto;font-size:12px">${c.journal.length?c.journal.map(d=>`<p style="margin:4px 0">${mh(d-1)}</p>`).join(""):"<i>Nothing yet. The journal only updates when you sleep.</i>"}</div></div>`,e.querySelectorAll("button[data-l]").forEach(d=>d.onclick=()=>{var f;s=+d.dataset.l,r.has(s)||(r.add(s),(f=window.profileTracker)==null||f.logRead(s)),o()}),e.querySelector("#lr-close").onclick=()=>l.close()},a=()=>{const c=i.get(),h=c.mode==="rooms"&&c.room==="bed",d=c.mode==="rooms"&&(c.room==="bed"||c.room==="desk");t.style.display=h&&!n?"block":"none",t.textContent=jg[Da(c)],n&&!d&&l.close()},l={open(){n=!0,s=i.get().logsFound.slice(-1)[0]??0,e.style.display="flex",o(),a()},close(){n=!1,e.style.display="none",a()},isOpen:()=>n};return addEventListener("keydown",c=>{n&&c.code==="Escape"&&l.close()}),i.subscribe(()=>{a(),n&&o()}),a(),l}function Zg(){const i=document.createElement("div");i.id="corner",Object.assign(i.style,{position:"fixed",left:"10px",bottom:"10px",display:"flex",gap:"6px",zIndex:"30"});const t=(r,o)=>{const a=document.createElement("button");return a.id=r,a.textContent=o,Object.assign(a.style,{font:"12px monospace",color:"#9fb",background:"rgba(5,10,14,.8)",border:"1px solid #345",padding:"5px 8px",cursor:"pointer"}),i.appendChild(a),a},e=t("mute",""),n=()=>{e.textContent=Ct.muted?"Sound: off (M)":"Sound: on (M)"};e.onclick=()=>{Ct.unlock(),Ct.toggle(),n()},n(),addEventListener("keydown",r=>{var o,a;r.code==="KeyM"&&!((a=(o=r.target)==null?void 0:o.matches)!=null&&a.call(o,"input,textarea"))&&(Ct.unlock(),Ct.toggle(),n())}),document.body.appendChild(i);const s=()=>{var o;const r=((o=window.store)==null?void 0:o.get().mode)==="fly";i.style.bottom=r?"auto":"10px",i.style.top=r?"38vh":"auto",i.style.flexDirection=r?"column":"row"};return setInterval(s,250),s(),{box:i,add:(r,o,a)=>{const l=t(r,o);return l.onclick=a,l}}}const Qg={arrival:["Day 4,017 of Contractor 7’s contract. The galaxy’s rubbish has to go somewhere, and “somewhere” is you.","You owe Halcyon Reclamation 1,000 credits. Halcyon Reclamation is cheerful, and not a person. It is a form, and it is patient.","Please sit in the pilot chair. It is the only part of the ship that has been dusted."],cubeChoice:["It is looking at you. Cubes cannot look. It is doing it anyway.","Keep it, or open the cargo door. Both are choices. One of them has paperwork."],cubeBack:["It came back. They do that. It has brought nothing, and expects a great deal."],tired:["Your eyes feel full of sand and regret. The bunk has been staring at you for a while."],exhausted:["The galaxy has started to wobble at the edges. That is the ship, probably. Possibly you."],firstSleep:["You sleep. The ship does not."],cubeFound:["The container opens with a sigh. Inside, a humming cube, warm to the touch, which is not a thing cubes should be.","You privately name it the Larder, for obvious reasons."],cubeLunge:["The cube lunges. Scrap, then no scrap. It did not even chew.","Right. So it eats. Anything you give it from now on is, technically, an offering."],firstFeed:["The cube blinks. You are fairly sure cubes do not do that."],firstFlight:["Mining pods were invented to take out the trash. Nobody asked the trash how it felt."],fullCargo:["Hold full. The ship sulks when it is heavy. Head home before it files a complaint."],otherStorage:["Odd. The sensors say there is a second storage aboard. It is not on the blueprints, and it is not empty."],vaultFilling:["The vault is filling up. You did not put anything in it. That is the part you decide not to think about."],burst:["The cube hums. The vault hums back. Then, with great dignity, everything goes pop."],spreading:["Twelve small faces, each with an opinion, scatter into the dark like they own the place."]};function tv(i){const t=[];return i.mode==="fly"&&t.push("firstFlight"),i.mode==="fly"&&i.cargo>=i.cargoCap&&t.push("fullCargo"),i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&t.push("cubeFound"),i.cubeChoice==="pending"&&t.push("cubeChoice"),i.cubeChoice==="jettisoned"&&i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&t.push("cubeBack"),i.fatigue>=40&&t.push("tired"),i.fatigue>=70&&t.push("exhausted"),i.sleeps>=1&&i.mode==="rooms"&&t.push("firstSleep"),i.feeds>=1&&t.push("firstFeed"),i.feeds>=3&&t.push("otherStorage"),i.feeds>=6&&t.push("vaultFilling"),i.mode==="cameo"&&t.push("burst"),t.filter(e=>!i.beats.includes(e))}function ev(i){const t=document.createElement("div");t.id="narration",Object.assign(t.style,{position:"fixed",left:"50%",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .6s",pointerEvents:"none",zIndex:"12",top:"48px"}),document.body.appendChild(t);const e=[];let n=!1;const s=[],r=()=>{t.style.top=i.get().mode==="fly"?"38vh":i.get().mode==="cameo"?"14px":"52px"},o=()=>{if(n||!e.length)return;if(i.get().mode==="exterior"){setTimeout(o,1500);return}n=!0;const l=e.shift();r(),t.textContent=l,t.style.opacity="1",setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{n=!1,o()},700)},2800+l.length*45)},a={log:s,el:t,say(l){const c=Qg[l];c&&(l==="firstFeed"&&Ct.ping(),s.push(l),e.push(...c),o())},check(){const l=i.get(),c=tv(l);c.length&&(i.set({beats:[...l.beats,...c]}),c.forEach(h=>a.say(h)))}};return i.subscribe(()=>{r(),a.check()}),setTimeout(()=>{const l=i.get();l.beats.includes("arrival")||(i.set({beats:[...l.beats,"arrival"]}),a.say("arrival"))},1500),a}function nv(i){const t=document.createElement("div");t.id="objective",Object.assign(t.style,{position:"fixed",padding:"4px 12px",background:"rgba(0,0,0,.6)",border:"1px solid #c9a96a",color:"#ffe9c0",font:"max(12px,1.05vw) monospace",zIndex:"7",pointerEvents:"none",maxWidth:"min(520px,60vw)",textAlign:"center"}),document.body.appendChild(t);const e=()=>{const n=i.get(),s=Gg(n);t.textContent=s,t.style.display=s?"block":"none",n.mode==="fly"?Object.assign(t.style,{left:"auto",right:"12px",top:"56px",transform:"none",textAlign:"right",maxWidth:"26vw"}):Object.assign(t.style,{left:"50%",right:"auto",top:"8px",transform:"translateX(-50%)",textAlign:"center",maxWidth:"min(520px,60vw)"})};return i.subscribe(e),e(),t}const cn=(i,t=0,e=1)=>new de({color:i,roughness:.85,metalness:.25,emissive:t,emissiveIntensity:e});function iv(i){return{box:(n,s,r,o,a,l,c,h=0)=>{const d=new ft(new fe(n,s,r),cn(c,h));return d.position.set(o,a,l),i.add(d),d},cyl:(n,s,r,o,a,l,c=[0,0,0])=>{const h=new ft(new Cn(n,n,s,10),cn(l));return h.position.set(r,o,a),h.rotation.set(...c),i.add(h),h}}}function vs(i,t,e,n){i.background=new Et(197641),i.fog=new wa(329485,.07);const s=iv(i);s.box(6,.1,5,0,0,0,1382948),s.box(6,.1,5,0,2.5,0,1053724),s.box(6,2.5,.1,0,1.25,-2.5,2041654),s.box(.1,2.5,5,-3,1.25,0,1712688),s.box(.1,2.5,5,3,1.25,0,1712688);for(let a=0;a<4;a++)s.box(.08,.02,4.6,-2.7+a*1.8,.06,0,2765637);s.cyl(.07,5.8,0,2.3,-2.3,2897480,[0,0,Math.PI/2]),s.cyl(.05,5.8,0,2.1,-2.3,3813162,[0,0,Math.PI/2]),s.cyl(.06,4.8,2.8,2.2,0,2897480,[Math.PI/2,0,0]);for(let a=0;a<5;a++)s.box(.4,.03,.02,-2.4+a*1.2,.1,-2.44,724500);const r=new un(16765088,6,7);r.position.set(0,2.2,0),i.add(r);const o=new un(n,4,5);return o.position.set(-1.5,1.5,-1.8),i.add(o),s.box(1.4,.05,.12,0,2.43,0,16773328,16769200),i.add(new wr(1713208,.7)),{room:{id:t,name:e,scene:i,camPos:new C(.9,1.6,3.6),camLook:new C(0,1,-1),hotspots:[]},b:s,flicker:[r,o]}}function Gi(i,t,e,n,s,r,o){const a=-Math.sign(t),l=new ft(new fe(.1,1.9,1.1),cn(790294));l.position.set(t,.95,e),i.add(l);const c=new ft(new fe(.06,1.7,.9),cn(1712944,o,.6));return c.position.set(t+a*.08,.95,e),i.add(c),{mesh:c,label:s,target:r}}function Ee(i,t,e,n,s,r=0,o=.5,a="#f4e27a",l=0){const c=document.createElement("canvas");c.width=256,c.height=160;const h=c.getContext("2d");h.fillStyle=a,h.fillRect(0,0,256,160),h.fillStyle="rgba(0,0,0,.12)",h.fillRect(0,0,256,10),h.fillStyle="#2a2018",h.font='bold 30px "Comic Sans MS", "Chalkboard SE", cursive',h.textAlign="center";const d=t.split(`
`);d.forEach((p,v)=>h.fillText(p,128,55+(v-(d.length-1)/2)*36+10));const f=new ft(new hn(o,o*.625),new Qt({map:new us(c)}));return f.position.set(e,n,s),f.rotation.set(0,r,l),i.add(f),f}function qe(i,t,e,n,s,r,o,a=0){const l=new ft(new fe(s,r,o),new de({color:9211540,roughness:.5,metalness:.4}));return l.position.set(t,e,n),l.rotation.z=a,i.add(l),l}function pr(i,t,e=1052688,n=.025){const s=new oh(t.map(o=>new C(...o))),r=new ft(new Pa(s,24,n,6,!1),cn(e));return i.add(r),r}function sv(){const i=new Yn,{room:t,b:e,flicker:n}=vs(i,"desk","Quarters",12623968);e.box(1.4,.8,.6,-1.3,.4,-2.1,2304058);const s=e.box(.8,.5,.06,-1.3,1.25,-2.42,1056792,3211152);s.material.emissiveIntensity=.6,e.box(.5,.04,.2,-1.3,.82,-1.9,3159622),e.cyl(.05,.1,-.7,.85,-2,14207136),Ee(i,`PASSWORD IS
PASSWORD`,-1.75,.98,-2.41,0,.3,"#f4e27a",.05),qe(i,-1.3,1.55,-2.44,1,.04,.02),e.box(.9,.18,.35,.5,.35,-1.5,3813162),e.box(.08,.35,.3,.1,.17,-1.5,2106414),e.box(.08,.35,.3,.9,.17,-1.5,2106414),e.cyl(.025,1.6,.5,.95,-1.5,9079442,[0,0,Math.PI/2]),e.cyl(.2,.06,-.2,.95,-1.5,2763312,[0,0,Math.PI/2]),e.cyl(.15,.06,1.2,.95,-1.5,4860458,[0,0,Math.PI/2]),e.cyl(.02,1.2,1,2.05,-2,9079442,[0,0,Math.PI/2]),qe(i,.45,2.05,-2,.08,.1,.06),Ee(i,`GYM
(weight not
verified)`,.55,1.45,-2.42,0,.42,"#d8f0d0"),e.box(.9,1.9,.08,2.15,.97,-2.4,2766406),e.cyl(.04,.3,2.15,1.95,-2.25,9079442,[Math.PI/2,0,0]),pr(i,[[2.15,1.9,-2.2],[2.5,1.5,-2.1],[2.35,.9,-2.2]],3160648,.02);const r=new ft(new hn(.85,1.7),new de({color:6993120,transparent:!0,opacity:.55,side:Re}));r.position.set(2.15,.9,-1.85),i.add(r),qe(i,2.15,1.73,-1.84,.88,.05,.02),Ee(i,`FOLD-OUT
SHOWER
hot = 40 sec`,1.55,1.2,-2.35,.3,.42,"#f0d0d0",-.08);const o=Gi(i,-2.93,-.9,Math.PI/2,"To Bunk","bed",6324479),a=Gi(i,2.93,-.9,Math.PI/2,"Airlock hatch to Cargo Bay","transmog",15769632);Ee(i,`AIRLOCK
(pull twice)`,2.88,1.65,-.9,-Math.PI/2,.4,"#f4e27a"),t.hotspots.push(o,a,{mesh:s,label:"Log terminal",target:"act:logs"});const l=c=>{n[0].intensity=6+Math.sin(c/90)*.4+(Math.sin(c/1300)>.97?-3:0),n[1].intensity=4+Math.sin(c/230)*.8};return t.update=c=>{l(c),r.rotation.y=Math.sin(c/1400)*.05},t}function rv(){const i=new Yn,{room:t,b:e,flicker:n}=vs(i,"engine","Engine Room",16728128);i.background=new Et(262918);const s=new C(.7,1.15,-1.2),r=new de({color:7370890,emissive:2777343,emissiveIntensity:1.2,metalness:.7,roughness:.35}),o=new ft(new En(1.15,.15,14,56),r);o.position.copy(s),i.add(o);const a=new ft(new En(.8,.06,10,48),new Qt({color:10473727}));a.position.copy(s),i.add(a);const l=new ft(new ye(.25,16,12),new Qt({color:13625599}));l.position.copy(s),i.add(l);const c=70,h=new ae;h.setAttribute("position",new Ae(new Float32Array(c*3),3));const d=new as(h,new Ui({color:12574975,size:.06,transparent:!0,opacity:.9}));i.add(d);const f=new un(4227327,6,6);f.position.set(s.x,s.y,s.z+.8),i.add(f);const p=new un(16719904,0,5);p.position.set(.7,2.2,-.2),i.add(p),e.cyl(.07,1.3,s.x-.6,2,s.z,2897480),e.cyl(.07,1.3,s.x+.6,2,s.z,2897480),pr(i,[[s.x-.3,1.9,s.z],[s.x-.6,2.2,s.z+.1],[s.x-1.2,2.45,s.z]],1052688,.04),pr(i,[[s.x+.3,1.9,s.z],[s.x+.9,2.1,s.z+.3],[s.x+1.3,2.45,s.z]],2756624,.03),qe(i,s.x-.6,1.6,s.z+.08,.2,.12,.05),qe(i,s.x+.6,1.5,s.z+.08,.2,.12,.05,.4);for(let x=0;x<14;x++)e.box(.22,.02,.16,-.55+x*.21,.07,.35,x%2?1052688:14729248);for(const x of[-.6,.7,2])e.cyl(.04,.8,x,.4,.35,14729248);Ee(i,`DANGER
KEEP BACK
(we mean it)`,.7,.72,.38,0,.7,"#f06050");const v=[-1.9,-1.2,-.5].map((x,_)=>{const I=e.box(.55,.4,.06,x,1.35+_%2*.05,-2.42,660496,2162576);return I.material.emissiveIntensity=.5,I});qe(i,-1.2,1.12,-2.4,1.9,.05,.02),Ee(i,`RING SPEED:
11 (units
unknown)`,-1.2,1.78,-2.42,0,.5,"#f4e27a",.04),Ee(i,`does
not
think`,-2.55,1,-2.42,0,.3,"#d0e0f0",-.1),e.box(.06,2.4,.06,-2.7,1.2,-2.38,6974068),e.box(.06,2.4,.06,-2.3,1.2,-2.38,6974068);for(let x=0;x<7;x++)e.box(.4,.04,.04,-2.5,.3+x*.32,-2.38,6974068);const g=e.box(.5,.3,.05,-2.5,2.1,-2.33,2759186,15769632);g.material.emissiveIntensity=.6;const m={mesh:g,label:"Ladder up to the Cargo Bay",target:"transmog"};Ee(i,`ONLY WAY OUT
(ask nobody)`,-2.5,1.7,-2.33,0,.42,"#f4e27a");const u=new ft(new br(1.3,32),new de({color:4227327,emissive:4227327,emissiveIntensity:.6,transparent:!0,opacity:.05,depthWrite:!1}));u.position.set(s.x,s.y,s.z+.2),i.add(u),t.hotspots.push(m,{mesh:u,label:"The ring (do not touch)",target:"act:collider"},{mesh:v[1],label:"Monitor",target:"act:monitor"});const M=x=>{n[0].intensity=3+Math.sin(x/70)*.5+(Math.sin(x/1100)>.95?-2:0),n[1].intensity=3+Math.sin(x/230)*.8};return t.update=x=>{M(x),o.rotation.z=x/2400,a.rotation.z=-x/500,a.rotation.y=Math.sin(x/900)*.25,l.scale.setScalar(1+Math.sin(x/90)*.12),r.emissiveIntensity=1+Math.sin(x/60)*.35,f.intensity=5+Math.sin(x/55)*2,p.intensity=2.2+2*Math.sin(x/260);const _=h.attributes.position;for(let I=0;I<c;I++){const A=I/c*Math.PI*2+x/260*(I%2?1:-.6),E=1.15+Math.sin(x/80+I)*.06;_.setXYZ(I,s.x+Math.cos(A)*E,s.y+Math.sin(A)*E,s.z+Math.sin(x/50+I)*.08)}_.needsUpdate=!0,v.forEach((I,A)=>I.material.emissiveIntensity=.4+.3*Math.abs(Math.sin(x/(130+A*70))))},t}let _n=null,xc=0;function Ni(i,t=3200){_n||(_n=document.createElement("div"),_n.id="room-toast",Object.assign(_n.style,{position:"fixed",left:"50%",bottom:"52px",transform:"translateX(-50%)",maxWidth:"70vw",background:"rgba(5,10,16,.88)",border:"1px solid #8a9aa8",color:"#dfe8f0",font:"14px monospace",padding:"8px 14px",zIndex:"9",pointerEvents:"none",display:"none",textAlign:"center"}),document.body.appendChild(_n)),_n.textContent=i,_n.style.display="block",clearTimeout(xc),xc=window.setTimeout(()=>{_n&&(_n.style.display="none")},t)}function ov(i){const t=document.createElement("div");t.id="shipmap",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"10px",transform:"translateX(-50%)",font:"11px monospace",color:"#7f8fa0",background:"rgba(5,10,16,.7)",border:"1px solid #2a3442",padding:"3px 8px",zIndex:"4",pointerEvents:"none",whiteSpace:"nowrap"}),document.body.appendChild(t);const e=[["mining","HELM"],["bed","BUNK"],["desk","QUARTERS"],["transmog","CARGO"]],n=()=>{const s=i.get();t.style.display=s.mode==="rooms"?"block":"none";const r=(o,a)=>s.room===o?`<b style="color:#20e0a0">[${a}]</b>`:a;t.innerHTML=e.map(([o,a])=>r(o,a)).join(" &gt; ")+" &darr; "+r("engine","ENGINE")};i.subscribe(n),n()}function av(i){const t=document.createElement("div");t.id="sorter",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"20"}),document.body.appendChild(t);let e=[],n=[],s="";const r=()=>i.set({report:null}),o=()=>{const l=n.shift();l&&(e.push(ha(i,l)),Ct.rare(),a())},a=()=>{var h,d;const l=i.get().report;if(!l){t.style.display="none";return}t.style.display="flex";const c=e[e.length-1];t.innerHTML=`<div style="width:min(640px,94vw);max-height:92vh;overflow:auto;background:#0a0d12;border:2px solid #c9a96a;color:#ffe9c0;font:14px/1.45 monospace;padding:16px">
      <div style="letter-spacing:3px;font-size:16px"><b>SORTING BENCH</b></div>
      <p>Weighed in: <b>${l.pieces}</b> pieces. Confirmed scrap banked: <b style="color:#9f9">+${l.units}</b> <small>(the scanner's estimates were only estimates)</small></p><p>Paycheck: <b style="color:#fc8">-${l.units*bn.perUnit} cr</b> off the debt. <small>You still owe ${i.get().debt} cr.</small></p>
      <div style="max-height:26vh;overflow:auto;border:1px solid #4a3a20;padding:6px;font-size:12px">${l.items.length?l.items.map(f=>`<div><b>${f.name}</b> +${f.units} ${f.clean?"":'<span style="color:#f88">(shattered)</span>'}<br><i style="opacity:.75">${f.lore}</i></div>`).join('<hr style="border:0;border-top:1px solid #2a2418">'):"Nothing aboard. The hold is a very expensive cupboard."}</div>
      ${c?`<div style="margin-top:10px;border:1px solid #30ff90;padding:8px;background:#06140c"><b style="color:#9fd">FOUND: ${c.title}</b><br>${c.text}</div>`:""}
      <div style="margin-top:12px">${n.length||!e.length&&l.finds.length?`<button id="so-next" style="font:14px monospace;padding:8px 14px">Inspect the haul (${n.length||l.finds.length} to open)</button>`:`<button id="so-done" style="font:14px monospace;padding:8px 14px">${e.length||l.finds.length?"Done":"Nothing unusual. Done"}</button>`}</div></div>`,(h=t.querySelector("#so-next"))==null||h.addEventListener("click",()=>o()),(d=t.querySelector("#so-done"))==null||d.addEventListener("click",()=>r())};return i.subscribe(()=>{const l=i.get().report,c=l?JSON.stringify([l.pieces,l.units,l.finds]):"";c!==s?(s=c,e=[],n=l?[...l.finds].sort((h,d)=>+(h==="cube")-+(d==="cube")):[],a()):l||(t.style.display="none")}),addEventListener("keydown",l=>{var c;!i.get().report||l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),(c=t.querySelector("#so-next, #so-done"))==null||c.click())}),{el:t,finishAll(){for(;n.length;)e.push(ha(i,n.shift()));r()},isOpen:()=>!!i.get().report}}function lv(i){const t=document.createElement("div");t.id="cube-choice",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.7)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"24"}),document.body.appendChild(t);let e=0;const n=()=>{i.get().cubeChoice===""&&(i.set({cubeChoice:"pending"}),t.style.display="flex",Ct.ping(),t.innerHTML=`<div style="width:min(560px,94vw);background:#0a0c14;border:2px solid #b070ff;color:#e8e0ff;font:14px/1.5 monospace;padding:16px">
      <b style="letter-spacing:3px">THE LARDER IS ALIVE</b><hr>
      <p>It has an eye now, and the eye is on you. The sensors confirm: life. Halcyon Reclamation's console lights up with a line you have never seen: <i>"BONUS: PENDING (classified)"</i>.</p>
      <p><button id="cc-keep" style="font:14px monospace;padding:8px 12px">Keep it and report it <small>(debt -${bn.keepBonus} cr, "bonus")</small></button>
      <button id="cc-quiet" style="font:14px monospace;padding:8px 12px">Keep it quiet <small>(no bonus; Halcyon never knows)</small></button>
      <button id="cc-out" style="font:14px monospace;padding:8px 12px">Open the cargo door <small>(littering fine +${bn.litterFine} cr)</small></button></p></div>`,t.querySelector("#cc-keep").onclick=()=>s.choose("keep"),t.querySelector("#cc-quiet").onclick=()=>s.choose("quiet"),t.querySelector("#cc-out").onclick=()=>s.choose("jettison"))},s={enabled:!0,choose(r){const o=i.get();t.style.display="none",r==="quiet"?(i.set({cubeChoice:"kept",flags:{...o.flags,reported:0},log:[...o.log,"You kept the Larder and told Halcyon nothing."]}),Ni("You say nothing. The console waits, then stops waiting. No bonus.",4500)):r==="keep"?(i.set({flags:{...o.flags,reported:1},cubeChoice:"kept",debt:Math.max(bn.floor,o.debt-bn.keepBonus),log:[...o.log,"You kept the cube. The Company paid a bonus. Reason: classified."]}),Ni("Bonus applied: -200 cr. Reason: classified. Somebody on the Halcyon Board is pleased.",4500)):(i.set({cubeChoice:"jettisoned",cubeState:"none",feeds:0,debt:o.debt+bn.litterFine,door:o.door+1,log:[...o.log,"You jettisoned the cube. It will be back."]}),Ct.door(),Ni("Cargo door open. The cube drifts out, looking back. Littering fine: +150 cr.",4500))},isOpen:()=>t.style.display==="flex"};return i.subscribe(r=>{if(!s.enabled)return;r.cubeLunged&&r.cubeChoice===""&&r.mode==="rooms"&&r.room==="transmog"&&!r.report&&r.cubeState==="aboard"?e||(e=setTimeout(()=>{e=0;const a=i.get();a.cubeChoice===""&&a.cubeLunged&&a.mode==="rooms"&&n()},4200)):e&&r.cubeChoice!==""&&(clearTimeout(e),e=0)}),s}function cv(i){let t=i.get().hull,e=!1;return i.subscribe(n=>{const s=n.profile,r={};n.fatigue>s.maxFatigue&&(r.maxFatigue=n.fatigue),n.fatigue>=70&&!e&&(e=!0,r.skips=s.skips+1),n.fatigue<=1&&(e=!1),n.hull<t-.5&&n.mode==="fly"&&(r.hullHits=s.hullHits+1),t=n.hull,Object.keys(r).length&&i.set({profile:{...s,...r}})}),setInterval(()=>{const n=i.get();n.mode!=="finale"&&i.set({profile:{...n.profile,seconds:n.profile.seconds+1}})},1e3),{logRead(n){const s=i.get(),r=new Set((s.flags.readLogs??"").split(",").filter(Boolean));n&&r.add(String(n)),i.set({profile:{...s.profile,logsRead:s.profile.logsRead+1},flags:{...s.flags,readLogs:[...r].join(",")}})}}}const xs=["Happy","Worried","Grumpy","Sleepy","Curious","Scared"],yh=["Bold","Shy","Weird"],ua=["glow","spikes","fluff","drip","stripes","bellyface","halo","horns"],mr=6,Na=4,Fa=6;function hv(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function uv(i,t,e){const n=s=>{const r=(s+i*12)%12,o=t*Math.min(e,1-e);return e-o*Math.max(-1,Math.min(r-3,Math.min(9-r,1)))};return Math.round(n(0)*255)<<16|Math.round(n(8)*255)<<8|Math.round(n(4)*255)}function Oa(i,t){const e=t(),[n,s]=i<=-1?[.7,.75]:i>=1?[.85,.38]:[.95,.55];return uv(i<=-2?.1+e*.08:e,n,s)}function dv(i,t){const e=Math.max(-3,Math.min(3,Math.round((t()*2-1)*3)));return{id:i,name:`Spore ${i+1}`,anatomy:{bodyShape:Math.floor(t()*mr),outlineWeight:1+Math.floor(t()*3),eyeSet:Math.floor(t()*Na),mouthSet:Math.floor(t()*Fa),signatureTrait:ua[Math.floor(t()*ua.length)],colour:Oa(e,t)},tone:{alignment:e,uncanny:Math.floor(t()*4)},personality:Math.floor(t()*yh.length),mood:Math.floor(t()*xs.length),history:[]}}function _c(i,t=7){const e=hv(t);return Array.from({length:i},(n,s)=>{const r=dv(s,e);return r.mood=s%xs.length,r.tone.alignment=s*5%7-3,r.anatomy.colour=Oa(r.tone.alignment,e),r.anatomy.bodyShape=s%mr,r})}const fv=i=>[1.3,2.4,1.6,.5,1.8,3.2][i],pv={skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0};function _s(i){const t=i.profile??pv,e=i.stats.clean+i.stats.shatters,n=e?i.stats.shatters/e:0,s=e>=4&&n>=.35||t.hullHits>=3?"greedy":e>=4&&n<=.2&&t.hullHits<=1?"careful":"balanced",r=t.skips>=2||t.maxFatigue>=90?"sleepless":i.sleeps>=2&&t.skips===0?"rested":"steady";return{cube:i.cubeChoice==="kept"||i.cubeChoice==="jettisoned"?i.cubeChoice:"",nights:i.sleeps,skippedSleeps:t.skips,maxFatigue:Math.round(t.maxFatigue),clean:i.stats.clean,shatters:i.stats.shatters,hullHits:t.hullHits,trips:i.stats.trips,logsRead:t.logsRead,seconds:Math.round(t.seconds),debtPaid:1e3-i.debt,debtLeft:i.debt,rare:i.stats.rare,style:s,sleeper:r,reader:t.logsRead>=4}}function ka(i){const t=[];i.cube==="jettisoned"?t.push("stubborn"):i.cube==="kept"&&t.push("loyal"),i.sleeper==="sleepless"?t.push("sleepless"):i.sleeper==="rested"&&t.push("well-rested"),i.style==="greedy"?t.push("reckless"):i.style==="careful"&&t.push("careful"),i.reader&&t.push("curious"),i.debtLeft>500&&t.push("indebted");const n=`a ${(t.length?t.slice(0,2):["ordinary"]).join(", ")} creature`,s=[i.cube==="jettisoned"?"You threw the cube out and it came back anyway.":i.cube==="kept"?"You kept the cube when it opened its eye.":"You never quite decided about the cube.",i.sleeper==="sleepless"?`You skipped sleep ${i.skippedSleeps} time${i.skippedSleeps===1?"":"s"} and it shows.`:i.sleeper==="rested"?`You slept ${i.nights} nights, regular as a clock.`:`You slept ${i.nights} night${i.nights===1?"":"s"}.`,i.style==="greedy"?`You shattered ${i.shatters} haul${i.shatters===1?"":"s"} chasing more.`:i.style==="careful"?`${i.clean} clean hauls, patient hands.`:`${i.clean} clean hauls and ${i.shatters} that did not go to plan.`,i.reader?`You read ${i.logsRead} logs, which most people would not have.`:"You left most of the logs unread.",`Halcyon Reclamation still wants ${i.debtLeft} cr.`];return{name:n,description:s.join(" ")}}const mv={greedy:["spikes","horns"],careful:["halo","fluff"],balanced:["stripes","glow"],sleepless:["glow","drip"],rested:["fluff","stripes"],steady:["bellyface","stripes"],jettisoned:["horns","bellyface"],kept:["halo","bellyface"],undecided:["drip","fluff"],reader:["stripes","glow"]},gv={greedy:["Grumpy","Curious"],careful:["Happy","Curious"],balanced:["Curious","Happy"],sleepless:["Sleepy","Grumpy"],rested:["Happy","Happy"],steady:["Curious","Worried"],jettisoned:["Worried","Scared"],kept:["Happy","Curious"],undecided:["Worried","Curious"],reader:["Curious","Curious"]},vv={greedy:1,careful:0,balanced:3,sleepless:2,rested:0,steady:3,jettisoned:1,kept:0,undecided:2,reader:3},xv={greedy:4,careful:1,balanced:2,sleepless:5,rested:0,steady:2,jettisoned:3,kept:0,undecided:5,reader:1},_v={greedy:3,careful:0,balanced:1};function yv(i,t){const e=[t.style,t.sleeper,t.cube||"undecided",...t.reader?["reader"]:[]],n=(t.debtPaid*31+t.nights*97+t.clean*13+t.shatters*29+t.hullHits*53+t.logsRead*7+t.skippedSleeps*19)%1e3/1e3;return i.forEach((s,r)=>{s.playerProfile=t;const o=e[r%e.length],a=Math.floor(r/e.length);s.anatomy.signatureTrait=mv[o][a%2],s.mood=Math.max(0,xs.indexOf(gv[o][a%2])),s.anatomy.eyeSet=vv[o],s.anatomy.mouthSet=xv[o],s.anatomy.outlineWeight=Math.max(1,Math.min(3,1+Math.floor(t.hullHits/2)+(t.style==="greedy"?1:0))),s.anatomy.bodyShape=(r+_v[t.style])%6,s.tone.alignment=Math.max(-3,Math.min(3,s.tone.alignment+(t.cube==="kept"?-1:t.cube==="jettisoned"?1:0))),s.anatomy.colour=Oa(s.tone.alignment,()=>(n+r*.083)%1),s.history.push({type:"player:"+o})}),i}const Mh=i=>{var t;return(((t=i.flags)==null?void 0:t.readLogs)??"").split(",").filter(Boolean).map(Number)};function bh(i,t){return(i==null?void 0:i.mergeSeconds)===void 0?"unmet":(i.swaps??0)>=1?"tender":i.mergeSeconds<20||t?"hasty":"patient"}function Ba(i){const t=_s(i),e=i.flags??{},n=Mh(i),s=bh(e,i.cubeChoice==="jettisoned"),r=i.cubeChoice==="jettisoned"?"threw the Larder out (it came back)":i.cubeChoice==="kept"?"kept the Larder":"never decided about the Larder",o=i.cubeChoice!=="kept"?"n/a":e.reported?"reported the Larder to Halcyon Reclamation":"said nothing to Halcyon Reclamation";return[{id:"larder",label:"The Larder",value:r,part1:i.cubeChoice==="jettisoned"?'No bonus, +150 cr fine, an extra sortie; spores a shade darker; ending line: "You threw it out. It let you."':'Debt -200 (bonus) or kept quiet; spores a shade lighter; ending line: "You kept it. In fairness, it kept you too."',hooks:{part2:i.cubeChoice==="jettisoned"?'Spores are wary but loyal ("the one who came back"): slower to help at first':"Spores trust you from day one on the crash planet and help sooner",part3:"Starting alignment lean of your creature",station:i.cubeChoice==="kept"&&e.reported?"Station knows a living pod exists and that you held it":"Station has no record of the Larder",si:i.cubeChoice==="jettisoned"?"The SI notes you tried to discard its neighbour":"The SI notes you fed it"}},{id:"halcyon",label:"What you told Halcyon",value:o,part1:e.reported?'Bonus paid; the ending says Halcyon Reclamation will be "in touch"':i.cubeChoice==="kept"?"No bonus; the ending says Halcyon never knew. Probably.":"No report possible",hooks:{part2:"A reported pod means Halcyon may track the wreck",part3:"No direct effect on the creature",station:e.reported?"The station arrives already knowing about the spores":"The station has to find the spores itself (later, and angrier)",si:"The SI cares only that you were honest with it, not with Halcyon"}},{id:"sleep",label:"Sleep habits",value:`${t.sleeper}: ${t.nights} night(s), skipped ${t.skippedSleeps}x, peak tiredness ${t.maxFatigue}`,part1:"Fatigue penalties in play; spore mood and accessories (sleepless: glow/drip, Sleepy/Grumpy); the creature name",hooks:{part2:t.sleeper==="sleepless"?"You start the survival game already tired":"You start rested",part3:"Spore mood baseline",station:"Medical scans show your sleep debt",si:"The SI comments on how long you stayed awake"}},{id:"spores",label:"How you treated the spores",value:s,part1:s==="tender"?"The finale says the spores held your hands at the Threshold":s==="hasty"?"The finale says you rushed the door":s==="patient"?"The finale says the spores waited for you":"Not reached",hooks:{part2:s==="tender"?"Spores bond faster and bring gifts":"Spores are playful but keep their distance",part3:"Your creature's care stat starts high (tender) or low",station:"The station sees tender spores as easier to isolate",si:"The SI asks how you treated them"}},{id:"mining",label:"Mining style",value:`${t.style}: ${t.clean} clean, ${t.shatters} shattered, ${t.hullHits} hull hit(s)`,part1:"Spore traits (spikes/horns vs halo/fluff), outline weight, the creature name",hooks:{part2:t.style==="greedy"?"Scavenging is faster but you take damage":"Repairs are more efficient",part3:"Creature temperament",station:"Your mining record is on file",si:'The SI: "you take what you can" or "you take care"'}},{id:"debt",label:"Debt",value:`${i.debt} cr left, ${t.debtPaid} paid`,part1:"HUD counter, bench paycheck, nightly interest, ending line",hooks:{part2:"The debt is still there, and so is the cheerful reminder",part3:"Leaderboard flavour: debt-free runs are rare",station:"Halcyon owns the station contract",si:"The SI does not care about debt"}},{id:"logs",label:"Logs read",value:n.length?`logs ${n.sort((a,l)=>a-l).join(", ")}`:"none",part1:n.includes(6)&&n.includes(7)?"The Threshold sequence says you read the warning and went anyway":"The Threshold sequence has no warning line",hooks:{part2:"Knowing the SI left on purpose changes the dialogue options",part3:"No direct effect on the creature",station:"The station is decoding the same logs",si:n.includes(7)?'The SI: "you read me"':"The SI has to explain itself from scratch (it will not)"}}]}const mo="starburn.ledger.v1";function gr(i){return{version:1,savedAt:new Date().toISOString(),day:i.day,profile:_s(i),flags:i.flags??{},entries:Ba(i)}}function Sh(i){return Ba(i).map(t=>`${t.label}: ${t.value} | Part 1: ${t.part1}`).join(`
`)}function Mv(i){const t=bh(i.flags,i.cubeChoice==="jettisoned"),e=Mh(i);return{key:t==="tender"?"The spores were never lost. They were the key. They held your hands while you held the door.":t==="hasty"?"The spores were never lost. They were the key. You were holding the door, rather quickly.":"The spores were never lost. They were the key. And you were holding the door.",warning:e.includes(6)&&e.includes(7)?"You read the warning. You are, technically, going anyway.":null}}function bv(i){try{const n=localStorage.getItem(mo);n&&localStorage.setItem(mo+".prev",n)}catch{}let t=0;const e=()=>{t=0;try{localStorage.setItem(mo,JSON.stringify(gr(i.get())))}catch{}};return i.subscribe(()=>{t||(t=setTimeout(e,800))}),{save:e,export:()=>gr(i.get())}}function Sv(i){const t={enabled:!0,intensity:0,tone:"deadpan",lines:0};let e=0,n=30;return setInterval(()=>{const s=i.get(),r=Er(s);if(t.intensity=r,t.tone=dc(r),e+=1,!(!t.enabled||s.mode==="finale"||s.mode==="exterior"||s.mode==="cameo")&&e>=n){n=e+Tg(r)*(.7+Math.random()*.6);const o=Ag[dc(r)];s.mode==="rooms"&&!s.report&&(t.lines++,Ni(o[Math.floor(Math.random()*o.length)],4200)),r>.25&&Math.random()<r&&Ct.hallucinate()}},1e3),t}const wv="starburn.carryover",Ev=1,Tv="SB1.";function Av(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}function Cv(i,t){const e=_s(i),n=gr(i);delete n.savedAt;const s={schema:wv,version:Ev,game:"part1",day:i.day,creature:ka(e),profile:e,ledger:n,spores:t.map(({playerProfile:r,...o})=>o)};return{...s,checksum:Av(JSON.stringify(s))}}const Rv=i=>btoa(String.fromCharCode(...new TextEncoder().encode(i))),Pv=i=>Tv+Rv(JSON.stringify(i)),ce={gate:16,open:28,tentacle:34,cut:36,crash:36.9,wreck:38.4,end:45},go=i=>i<ce.gate?"maze":i<ce.open?"gate":i<ce.cut?"open":i<ce.crash?"cut":i<ce.wreck?"crash":i<ce.end?"wreck":"end",yc=[[.4,"The spores have moved in. They have redecorated. Mostly with themselves."],[4.2,"The Helm is four minutes away. It is also one step. You are not sure which of those is the problem."],[8.2,"The corridor goes on. So does the corridor behind it. Physics has stepped out for a moment."],[12,"The ship stops being a ship and becomes an idea the spores are having. You, it turns out, are part of the idea."],[16.4,"On a screen that was not there before: the Threshold. Somewhere in you, something already knew the way."],[21,"You fly the ship. Or the ship flies you. The spores steer, politely."],[25,"The Threshold is older than the junk, older than the SI, and clearly expecting company."],[28.4,"The spores were never lost. They were the key. And you were holding the door."],[32,"Something on the other side leans closer."]];function Iv(i){return i==="jettisoned"?"You threw it out. It let you. That is the part you will think about later.":i==="kept"?"You kept it. In fairness, it kept you too.":"You never decided. The cube did."}function Lv(i){const t=document.createElement("canvas");t.id="finale",Object.assign(t.style,{position:"fixed",inset:"0",width:"100vw",height:"100vh",zIndex:"40",display:"none",background:"#000"});const e=document.createElement("div");e.id="finale-text",Object.assign(e.style,{position:"fixed",left:"50%",bottom:"14vh",transform:"translateX(-50%)",maxWidth:"78vw",textAlign:"center",font:"italic 20px/1.4 Georgia, serif",color:"#f4efe0",textShadow:"0 0 8px #000, 0 0 14px #000",zIndex:"41",display:"none",transition:"opacity .6s",pointerEvents:"none"});const n=document.createElement("div");n.id="finale-skip",n.textContent="Space: skip",Object.assign(n.style,{position:"fixed",right:"14px",bottom:"10px",font:"12px monospace",color:"#999",zIndex:"41",display:"none"});const s=document.createElement("div");s.id="finale-end",Object.assign(s.style,{position:"fixed",inset:"0",zIndex:"42",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",color:"#f4efe0",textAlign:"center",font:"16px monospace",background:"rgba(0,0,0,.35)"}),document.body.append(t,e,n,s);let r=yc;const o=t.getContext("2d"),a={active:!1,t:0,shown:-1,cutDone:!1,flash:0},l={onFeedback:void 0,get t(){return a.t},get active(){return a.active},get phase(){return go(a.t)},get tentacleVisible(){return a.active&&a.t>=ce.tentacle&&a.t<ce.cut},play(){const g=i.get();{const m=Mv(g);r=yc.map(([u,M])=>[u,u===28.4?m.key:M]),m.warning&&r.push([22.8,m.warning]),r.sort((u,M)=>u[0]-M[0])}a.active=!0,a.t=0,a.shown=-1,a.cutDone=!1,i.set({mode:"finale"}),t.style.display="block",n.style.display="block",e.style.display="block",s.style.display="none",t.width=innerWidth,t.height=innerHeight,Ct.merge(),v(performance.now())},seek(g){a.t=g,a.shown=-1,a.cutDone=g>=ce.cut},skipNow(){a.active&&l.seek(ce.end)}};let c=0;const h=g=>{e.style.opacity="0",setTimeout(()=>{e.textContent=g,e.style.opacity="1"},120)},d=(g,m,u,M,x)=>{o.fillStyle=`hsl(${M},85%,58%)`,o.strokeStyle="#000",o.lineWidth=Math.max(2,u*.12),o.beginPath(),o.arc(g,m,u,0,7),o.fill(),o.stroke(),o.fillStyle="#fff";for(const _ of[-.35,.35])o.beginPath(),o.arc(g+_*u,m-.15*u,u*.26,0,7),o.fill(),o.stroke(),o.fillStyle="#000",o.beginPath(),o.arc(g+_*u+Math.sin(x*2)*u*.06,m-.12*u,u*.1,0,7),o.fill(),o.fillStyle="#fff";o.strokeStyle="#000",o.beginPath(),o.arc(g,m+.25*u,u*.25,.1,Math.PI-.1),o.stroke()};function f(g){const m=t.width,u=t.height,M=m/2,x=u/2,_=go(g);o.setTransform(1,0,0,1,0,0),o.fillStyle="#000",o.fillRect(0,0,m,u);const I=_==="open"?2+(g-ce.open)*1.6:_==="crash"?18:0;if(o.translate((Math.random()-.5)*I,(Math.random()-.5)*I),_!=="cut")if(_==="maze"){const A=Math.sin(g*.7)>.8?Math.PI:0;o.translate(M,x),o.rotate(A+Math.sin(g*.5)*(.1+g*.02)+g*.05*(g>8?1:0)),o.translate(-M,-x);for(let E=14;E>=0;E--){const R=(E+g*.9%1)/14,S=Math.pow(R,2.2),y=m*(.05+S*1.3),P=u*(.05+S*1.3),O=[160,220,40,30,0][(E+Math.floor(g/2))%5];o.strokeStyle=`hsl(${O},60%,${18+S*40}%)`,o.lineWidth=2+S*14,o.strokeRect(M-y/2+Math.sin(g+E)*6*S,x-P/2,y,P),E%3===0&&(o.fillStyle=`hsla(${O},70%,40%,${.15+S*.3})`,o.fillRect(M-y/2,x-P/2,y*.1,P))}for(let E=0;E<12;E++){const R=E*2.4+g*.3,S=60+(E*53+g*40)%(Math.min(m,u)*.45);d(M+Math.cos(R)*S,x+Math.sin(R*1.3)*S*.7,10+S*.12,(E*47+g*20)%360,g)}}else if(_==="gate"||_==="open"){const A=_==="gate"?1:.4;o.fillStyle="#fff";for(let y=0;y<140;y++){const P=y*2.399,O=(y*.137+g*.35*A)%1,B=O*Math.max(m,u)*.7;o.globalAlpha=O,o.fillRect(M+Math.cos(P)*B,x+Math.sin(P)*B,1+O*2,1+O*2+A*O*4)}o.globalAlpha=1;const E=Math.min(m,u)*(.06+.3*Math.min(1,(g-ce.gate)/14)),R=_==="open"?Math.min(1,(g-ce.open)/4):Math.min(.5,(g-ce.gate)/20),S=o.createRadialGradient(M,x,E*.4,M,x,E*(1.6+R*3));S.addColorStop(0,`rgba(190,150,255,${.2+R*.8})`),S.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=S,o.fillRect(0,0,m,u),o.strokeStyle=`hsl(270,60%,${40+R*40}%)`,o.lineWidth=E*.12,o.beginPath(),o.arc(M,x,E,0,7),o.stroke(),o.lineWidth=E*.03,o.strokeStyle="#fff",o.beginPath(),o.arc(M,x,E*.9,g,g+4.2),o.stroke(),_==="open"&&(o.fillStyle=`rgba(255,255,255,${R*.55})`,o.beginPath(),o.arc(M,x,E*.85,0,7),o.fill());for(let y=0;y<12;y++){const P=(g*.12+y/12)%1,O=y*.9;d(M+Math.cos(O)*(1-P)*m*.5*(_==="open"?.3+(1-R):1),x+Math.sin(O)*(1-P)*u*.4,6+(1-P)*12,y*47%360,g)}if(l.tentacleVisible){const y=(g-ce.tentacle)/(ce.cut-ce.tentacle);o.strokeStyle="#05020a",o.lineCap="round",o.lineWidth=E*(.5-y*.15),o.beginPath(),o.moveTo(m+40,u*.9),o.bezierCurveTo(m*(.9-y*.3),u*(.2+y*.1),M+E*(1-y*1.3),x-E*1.3,M-E*.2*y,x+E*.2-y*E*.4),o.stroke()}}else if(_==="crash")o.fillStyle=`rgba(255,240,220,${Math.max(0,1-(g-ce.crash)/1.4)})`,o.fillRect(0,0,m,u);else{const A=o.createLinearGradient(0,0,0,u*.62);A.addColorStop(0,"#2a0f3a"),A.addColorStop(1,"#e0703a"),o.fillStyle=A,o.fillRect(0,0,m,u*.62),o.fillStyle="#3a1a22",o.fillRect(0,u*.62,m,u*.38),o.fillStyle="#ffe0a0",o.beginPath(),o.arc(m*.8,u*.2,u*.06,0,7),o.fill(),o.save(),o.translate(M,u*.66),o.rotate(-.22),o.fillStyle="#c8ccd4",o.beginPath(),o.ellipse(0,0,m*.16,u*.07,0,0,7),o.fill(),o.fillStyle="#6aa0e0",o.fillRect(-m*.04,-u*.045,m*.08,u*.03),o.restore();for(let E=0;E<26;E++){const R=(g*.3+E/26)%1;o.fillStyle=`rgba(60,50,50,${.5*(1-R)})`,o.beginPath(),o.arc(M+Math.sin(E*7+g)*30-40+R*60,u*.62-R*u*.4,8+R*26,0,7),o.fill()}}}const p=()=>{const g=i.get();s.style.display="flex",s.innerHTML=`<div style="font:bold 44px Georgia,serif;letter-spacing:6px">TO BE CONTINUED</div><div id="fe-line" style="font:italic 18px Georgia,serif;max-width:70vw">${Iv(g.cubeChoice)}</div><div id="fe-creature" style="font:15px Georgia,serif;max-width:70vw;color:#cfe">Your creature: <b>${ka(_s(g)).name}</b>.</div><div id="fe-debt" style="color:#fc8">Debt remaining: ${g.debt} cr. ${g.cubeChoice==="kept"&&!g.flags.reported?"Halcyon Reclamation never knew about the Larder. Probably.":"Halcyon Reclamation will be in touch, cheerfully, if anyone is left to be in touch."}</div>
      <div id="fe-recap" style="max-width:78vw;max-height:30vh;overflow:auto;text-align:left;font:12px/1.45 monospace;background:rgba(0,0,0,.55);border:1px solid #567;padding:8px 12px"><b>WHAT YOUR CHOICES DID</b>${Ba(g).map(u=>`<div><b>${u.label}:</b> ${u.value}<br><span style="color:#9bd">&rarr; ${u.part1}</span></div>`).join("")}</div>
      <div><button id="fe-again" style="font:15px monospace;padding:8px 14px">Play again</button> <button id="fe-fb" style="font:15px monospace;padding:8px 14px">Send feedback</button> <button id="fe-copy" style="font:15px monospace;padding:8px 14px">Copy my choices</button></div>
      <div><button id="fe-code" style="font:15px monospace;padding:8px 14px">Copy carryover code</button> <button id="fe-file" style="font:15px monospace;padding:8px 14px">Download carryover file</button>  </div><small style="color:#9ab;max-width:70vw">The carryover holds your choices and your spores for the next part. No personal data; nothing is sent anywhere.</small>`;const m=()=>{var u;return Cv(i.get(),((u=window.cameo)==null?void 0:u.spores)??[])};s.querySelector("#fe-code").onclick=async()=>{const u=s.querySelector("#fe-code");try{await navigator.clipboard.writeText(Pv(m())),u.textContent="Copied"}catch{u.textContent="Copy blocked"}},s.querySelector("#fe-file").onclick=()=>{const u=document.createElement("a");u.href=URL.createObjectURL(new Blob([JSON.stringify(m(),null,1)],{type:"application/json"})),u.download="starburn-part1-carryover.json",u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),2e3)},s.querySelector("#fe-copy").onclick=async()=>{try{await navigator.clipboard.writeText(Sh(i.get())),s.querySelector("#fe-copy").textContent="Copied"}catch{s.querySelector("#fe-copy").textContent="Copy blocked"}},s.querySelector("#fe-again").onclick=()=>location.reload(),s.querySelector("#fe-fb").onclick=()=>{var u;return(u=l.onFeedback)==null?void 0:u.call(l)},n.style.display="none",e.style.display="none"};function v(g){if(!a.active)return;const m=Math.min(.1,(g-c)/1e3);c=g,a.t+=m;const u=go(a.t);u==="cut"&&!a.cutDone&&(a.cutDone=!0,e.style.opacity="0",Ct.sting()),u==="crash"&&a.flash===0&&(a.flash=1,Ct.shatter()),u!=="crash"&&u!=="wreck"&&u!=="end"&&(a.flash=0),a.t>=ce.open&&a.shown<7&&a.t<ce.open+.1&&Ct.burst();for(let M=0;M<r.length;M++)a.t>=r[M][0]&&a.shown<M&&a.t<ce.cut&&(a.shown=M,h(r[M][1]));u==="cut"&&(e.style.opacity="0"),u==="crash"&&a.shown<19&&a.t>ce.crash+.2&&(a.shown=19,h("Down.")),u==="wreck"&&a.shown<20&&(a.shown=20,h("The ship is on a planet. The planet did not ask for the ship. Neither of you is hurt, exactly.")),u==="end"?s.style.display==="none"&&p():f(a.t),u==="end"&&f(ce.wreck+1),requestAnimationFrame(v)}return addEventListener("keydown",g=>{a.active&&(g.code==="Space"||g.code==="Escape")&&(g.preventDefault(),l.skipNow())}),l}function Dv(i){const t=document.createElement("div");t.id="sleep",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"25",transition:"background 1s"}),document.body.appendChild(t);let e=!1;const n=a=>`<div style="width:min(600px,94vw);max-height:92vh;overflow:auto;background:#0a0c14;border:2px solid #6080ff;color:#cfe0ff;font:14px/1.5 monospace;padding:16px">${a}</div>`,s=()=>{const a=i.get(),l=ds(a.fatigue),c=ph(a);t.style.display="flex",t.style.background="rgba(0,0,0,.78)",t.innerHTML=n(`<b style="letter-spacing:3px">THE BUNK</b> <small>Day ${a.day}</small><hr>
      <p>Tiredness: <b style="color:${["#9f9","#ff8","#fa6","#f66"][l]}">${fh[l]}</b> (${Math.round(a.fatigue)}/100)</p>
      <p><b>Sleeping:</b> costs about ${c.oxygen} oxygen${c.scrap?" and 1 scrap of rations":""}. The night changes things: the vault shifts, the cube acts, the journal updates, the sectors reshuffle. The vault moves a step closer every time.</p>
      <p><b>Not sleeping:</b> nothing changes, but you get more tired: first a flicker, then a harder timing ring, then phantom sounds and ghost junk, then glitching consoles and hungrier lungs.</p>
      <button id="sl-go" style="font:14px monospace;padding:8px 14px">Sleep</button> <button id="sl-no" style="font:14px monospace;padding:8px 14px">Not now</button>`),t.querySelector("#sl-go").onclick=()=>o.sleep(!0),t.querySelector("#sl-no").onclick=()=>o.close()},r=a=>{t.style.display="flex",t.style.background="rgba(0,0,0,.78)",t.innerHTML=n(`<b style="letter-spacing:3px">MORNING: DAY ${a.day}</b><hr>
      <p><b>Journal:</b> <i>${a.journal}</i></p><p><b>Vault:</b> ${a.vault}</p>${a.cube?`<p><b>Cube:</b> ${a.cube}</p>`:""}<p><b>Overnight:</b> ${a.event}</p><p><b>Sectors:</b> ${a.field}</p>
      ${a.log?`<p style="color:#9fd"><b>New log recovered:</b> Log ${a.log} is now in the Bunk terminal.</p>`:""}<p style="color:#f99">Halcyon Reclamation added 10 cr of "overnight handling" to your debt.</p><small>Cost: ${a.costs.oxygen} oxygen${a.costs.scrap?", 1 scrap":""}. Tiredness cleared.</small><hr>
      <button id="sl-up" style="font:14px monospace;padding:8px 14px">Wake up</button>`),t.querySelector("#sl-up").onclick=()=>o.close()},o={open(){i.get().mode==="rooms"&&(e=!0,s())},close(){e=!1,t.style.display="none"},isOpen:()=>e,last:null,sleep(a=!1){const{patch:l,report:c}=Og(i.get());return i.set(l),o.last=c,Ct.ping(),Ct.blip(262,.9,"sine",.06,196),a&&(e=!0,t.innerHTML=n('<div style="text-align:center;letter-spacing:6px">Zzz...</div>'),t.style.background="#000",setTimeout(()=>r(c),1500)),c}};return addEventListener("keydown",a=>{e&&a.code==="Escape"&&o.close()}),i.subscribe(a=>{e&&!(a.mode==="rooms"&&a.room==="bed")&&o.close()}),o}function Uv(i){const t=document.createElement("div");t.id="fatigue-fx",Object.assign(t.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"3",opacity:"0",transition:"opacity .8s"}),document.body.appendChild(t);let e=0;setInterval(()=>{var o;e+=.1;const n=i.get(),s=ds(n.fatigue),r=document.querySelector("canvas");if(t.style.background=`radial-gradient(ellipse at center, transparent ${60-s*12}%, rgba(0,0,0,${.35+s*.2}) 100%)`,t.style.opacity=s?String(s>=3?.7+.3*Math.sin(e*9):.6+.4*Math.sin(e*2+s)):"0",r){{const a=((o=window.atmosphere)==null?void 0:o.enabled)===!1?0:Er(n),l=a>.3?`hue-rotate(${Math.round(Math.sin(e*.8)*45*a)}deg) saturate(${(1+a*.5).toFixed(2)})`:"",c=s>=2?`blur(${(s===2?.7:1.5)*(.6+.6*Math.sin(e*1.3))+.3}px)`:"";r.style.filter=(c+" "+l).trim()}r.style.opacity=s>=3&&Math.sin(e*17)>.85?"0.82":""}},100)}function Nv(i,t){const e=()=>{const a=i.get();return a.cubeState==="aboard"&&!a.cubeLunged&&a.mode==="rooms"&&a.room==="transmog"&&!a.report&&a.scrap>0};let n=0;const s={enabled:!0,lungeNow(){return e()?o():!1},lunged:0},r=()=>{document.body.animate([{transform:"translate(0,0)"},{transform:"translate(-16px,8px)"},{transform:"translate(14px,-10px)"},{transform:"translate(-9px,5px)"},{transform:"translate(5px,-3px)"},{transform:"translate(0,0)"}],{duration:520,easing:"ease-out"});const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",background:"#8a40ff",opacity:"0.55",transition:"opacity .7s",pointerEvents:"none",zIndex:"50"}),document.body.appendChild(a),requestAnimationFrame(()=>{a.style.opacity="0"}),setTimeout(()=>a.remove(),900)};function o(){const a=i.get(),l=Lg(a.scrap);return i.set({scrap:a.scrap-l,feeds:Math.max(1,a.feeds),cubeLunged:!0,lunges:a.lunges+1,beats:a.beats.includes("firstFeed")?a.beats:[...a.beats,"firstFeed"],log:[...a.log,`The cube lunged and swallowed ${l} scrap. Nobody asked it to.`]}),Ct.sting(),r(),t.say("cubeLunge"),s.lunged++,!0}return i.subscribe(()=>{s.enabled&&(e()?n||(n=setTimeout(()=>{n=0,e()&&o()},1400)):n&&(clearTimeout(n),n=0))}),s}class Fv{constructor(t,e){H(this,"scene",new Yn);H(this,"ship",new Be);H(this,"glow");H(this,"engineLight",new un(6332671,0,12));H(this,"tracker",new Be);H(this,"trackerLight",new un(16724016,0,6));H(this,"cells",[]);H(this,"kind","launch");H(this,"t",0);H(this,"dur",4);H(this,"active",!1);H(this,"done");H(this,"caps",[]);H(this,"pinged",-1);H(this,"promptShown",!1);H(this,"cap",document.createElement("div"));H(this,"skip",document.createElement("button"));H(this,"fade",document.createElement("div"));H(this,"prompt",document.createElement("div"));H(this,"onFeedback");this.store=t,this.camera=e;const n=this.scene;n.background=new Et(131850),n.add(new wr(4872312,.9));const s=new fr(16773336,2.6);s.position.set(8,6,6),n.add(s);const r=new fr(6982399,1.2);r.position.set(-8,2,-6),n.add(r);const o=new ae,a=[];for(let f=0;f<1200;f++){const p=Math.random()*2-1,v=Math.random()*6.283,g=Math.sqrt(1-p*p);a.push(Math.cos(v)*g*150,p*150,Math.sin(v)*g*150)}o.setAttribute("position",new Ht(a,3)),n.add(new as(o,new Ui({color:12570879,size:.9,fog:!1})));const l=new ft(new ye(30,32,20),new de({color:16742970,emissive:4200448,flatShading:!0}));l.position.set(-70,-34,-120),n.add(l),this.buildShip(),n.add(this.ship);const c=new ft(new fe(.5,.2,.3),new de({color:2763312,metalness:.6,roughness:.4})),h=new ft(new Cn(.012,.012,.5,6),new de({color:8947848}));h.position.set(.15,.3,0);const d=new ft(new ye(.07,10,8),new Qt({color:16724016}));d.position.set(-.15,.13,.1),d.name="led",this.tracker.add(c,h,d,this.trackerLight),this.trackerLight.position.copy(d.position),this.tracker.scale.setScalar(.001),this.tracker.visible=!1,this.tracker.position.set(1.3,.55,1.5),n.add(this.tracker),Object.assign(this.cap.style,{position:"fixed",left:"50%",bottom:"12vh",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"12"}),this.cap.id="ext-caption",this.skip.id="ext-skip",this.skip.textContent="Skip (Space)",Object.assign(this.skip.style,{position:"fixed",right:"12px",top:"12px",display:"none",padding:"6px 10px",font:"12px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"40"}),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"11"}),this.prompt.id="ext-end",Object.assign(this.prompt.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",display:"none",textAlign:"center",padding:"22px 30px",background:"rgba(3,6,12,.88)",border:"2px solid #c9a96a",color:"#ffe9c0",font:"16px/1.5 Georgia, serif",zIndex:"41"}),this.prompt.innerHTML='<div style="font-size:22px;letter-spacing:3px">END OF PART 1</div><p>Thanks for flying, Junker.<br><i>Part 2: the spores are out there. So is whoever is following them.</i></p><button id="ext-again" style="font:14px monospace;padding:8px 14px;margin:4px">Play again</button><button id="ext-fb" style="font:14px monospace;padding:8px 14px;margin:4px">Send feedback</button>',document.body.append(this.cap,this.skip,this.fade,this.prompt),this.skip.onclick=()=>this.skipNow(),addEventListener("keydown",f=>{this.active&&(f.code==="Space"||f.code==="Escape")&&this.skipNow()}),this.prompt.querySelector("#ext-again").onclick=()=>location.reload(),this.prompt.querySelector("#ext-fb").onclick=()=>{var f;return(f=this.onFeedback)==null?void 0:f.call(this)}}buildShip(){const t=(a,l,c=1)=>{const h=[];for(let d=0;d<=40;d++){const f=a+(l-a)*d/40;h.push(new gt(Math.max(1e-4,1.3*c*Math.sin(Math.PI*Math.pow(f,.6))*(1-.3*f)),3-6*f))}return h},n=new ft(new dr(t(0,1),56,Math.PI/2+.6,Math.PI*2-1.2),new de({color:9213352,metalness:.75,roughness:.32,side:Re})),s=new ft(new dr(t(.1,.62,1.012),16,Math.PI/2-.6,2*.6),new hg({color:10479871,transparent:!0,opacity:.28,roughness:.05,metalness:.1,side:Re,emissive:1060928})),r=new Be;r.add(n,s),r.rotation.x=Math.PI/2,[16760944,4251824,14721072,6324479].forEach((a,l)=>{const c=new ft(new fe(1.05,.14,1.05),new de({color:1382948,emissive:a,emissiveIntensity:.9}));c.position.set(0,-.6+l*.4,1),this.cells.push(c),this.ship.add(c)}),this.ship.add(r),this.glow=new ft(new ln(.4,1.8,16,1,!0),new Qt({color:7385343,transparent:!0,opacity:0,blending:Mn,depthWrite:!1,side:Re})),this.glow.rotation.x=-Math.PI/2,this.glow.position.set(0,0,-4.1),this.ship.add(this.glow),this.engineLight.position.set(0,0,-3.6),this.ship.add(this.engineLight)}play(t,e){this.kind=t,this.t=0,this.done=e,this.active=!0,this.pinged=-1,this.promptShown=!1,this.prompt.style.display="none",this.tracker.visible=!1,this.ship.position.set(0,0,0),this.ship.rotation.set(0,0,0),this.glow.material.opacity=0,this.fade.style.opacity="0",this.caps=t==="launch"?[{at:.3,until:3.4,text:"Undocking. The hull is smooth, one side is glass, and the paperwork is out of date."}]:[{at:.4,until:3.6,text:"Somewhere above the galaxy’s rubbish heap, the ship drifts. Lights on. Spores gone."},{at:4.2,until:8,text:"Something small and blinking has clamped itself to your hull. It is not yours."},{at:8.4,until:12.5,text:"Part 2: someone has been tracking the spores. Now they are tracking you."}],this.dur=t==="launch"?4:12.8,this.skip.style.display="block",this.store.set({mode:"exterior"}),Ct.door()}finish(){this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",Ct.engine(0,!1),this.kind==="launch"?(this.fade.style.opacity="1",setTimeout(()=>{var t;(t=this.done)==null||t.call(this),this.fade.style.opacity="0"},450)):this.showPrompt()}skipNow(){this.active&&(this.kind==="end"?(this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",this.tracker.visible=!0,this.tracker.scale.setScalar(1.8),this.showPrompt()):this.finish())}showPrompt(){this.promptShown=!0,this.prompt.style.display="block"}update(t){if(this.store.get().mode!=="exterior")return;this.t+=t;const e=this.t,n=this.camera;if(this.cells.forEach((r,o)=>{r.material.emissiveIntensity=.7+.3*Math.sin(e*2+o*1.3)+(o===3&&this.kind==="end"?.5*Math.sin(e*6):0)}),this.kind==="launch"){const r=Math.max(0,e-1.2);this.ship.position.z=.9*r*r*2.2,this.ship.position.y=.04*r,this.glow.material.opacity=Math.min(.4,r*.6),this.engineLight.intensity=Math.min(8,r*6),Ct.engine(Math.min(1,r/1.5),!0);const o=-.5+e*.08;n.position.set(Math.cos(o)*9,1.8,Math.sin(o)*9+1),n.lookAt(0,.2,Math.max(0,this.ship.position.z*.35)),e>this.dur-.5&&this.active&&(this.fade.style.opacity="1"),e>=this.dur&&this.active&&this.finish()}else{const r=Math.min(1,e/3.2),o=r*r*(3-2*r);this.ship.rotation.y=Math.sin(e*.2)*.08,this.ship.position.y=Math.sin(e*.7)*.06;const a=Math.max(0,Math.min(1,(e-5.6)/3.2)),l=a*a*(3-2*a),c=4+5*o,h=.4+2.1*o,d=2.5+8.5*o;if(n.position.set(c+(3-c)*l*.55,h+(.9-h)*l*.5,d+(4.2-d)*l*.55),n.lookAt(this.ship.position.x+.6*l,.2+.4*l,.8+.6*l),e>4.2){this.tracker.visible=!0;const f=Math.min(1,(e-4.2)/.8);this.tracker.scale.setScalar((f*f*(3-2*f)+.001)*1.8),this.tracker.rotation.y=e*.5;const p=Math.sin(e*(6+a*10))>0?1:.1;this.trackerLight.intensity=3*p,this.tracker.getObjectByName("led").visible=p>.5;const v=Math.floor((e-4.2)/.9);v!==this.pinged&&(this.pinged=v,Ct.ping())}e>=this.dur&&this.active&&this.finish()}const s=this.caps.find(r=>e>=r.at&&e<r.until);if(s?(this.cap.textContent=s.text,this.cap.style.opacity="1"):this.cap.style.opacity="0",!this.active&&this.kind==="end"){const r=.5+.5*Math.sin(e*2);this.trackerLight.intensity=1+3*(r>.5?1:0)}}render(t){t.render(this.scene,this.camera)}}const da=[{id:"clarity",label:"How clear was it what to do at the start? (1 = lost, 5 = obvious)",kind:"scale"},{id:"fun",label:"How fun was it overall? (1 = boring, 5 = great)",kind:"scale"},{id:"mining",label:"Mining: was it clear when and where you could click?",kind:"choice",choices:["Clear","Sort of","Confusing"]},{id:"again",label:"Would you play again, or play Part 2?",kind:"choice",choices:["Yes","Maybe","No"]},{id:"stuck",label:"Where did you get stuck or bored?",kind:"text"},{id:"best",label:"Best moment?",kind:"text"},{id:"broken",label:"Anything broken or confusing?",kind:"text"}],wh="starburn-feedback";function Ov(i){const t=i.answers;return[`StarBurn Part 1 playtest feedback (${i.at})`,"",...da.map(n=>`${n.label.replace(/ \(.*\)$/,"")}: ${t[n.id]||"(no answer)"}`),"","Session: "+Object.entries(i.session).map(([n,s])=>`${n}=${s}`).join(", "),...i.ledger?["","Choice ledger:",i.ledger,"Ledger JSON: "+(i.ledgerJson??"")]:[]].join(`
`)}function kv(){try{return JSON.parse(localStorage.getItem(wh)||"[]")}catch{return[]}}function Mc(i){const t=kv();t.push(i);try{localStorage.setItem(wh,JSON.stringify(t))}catch{}return t.length}function Bv(i){const t=performance.now();let e=!1;const n=document.createElement("div");n.id="feedback",Object.assign(n.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"60"}),document.body.appendChild(n);const s=()=>{const l=i.get();return{minutes:+((performance.now()-t)/6e4).toFixed(1),trips:l.stats.trips,cleanHauls:l.stats.clean,shatters:l.stats.shatters,rareFound:l.stats.rare,scrap:l.scrap,cubeFeeds:l.feeds,logs:l.logsFound.length,upgrades:Object.values(l.up).reduce((c,h)=>c+h,0),window:`${innerWidth}x${innerHeight}`,browser:navigator.userAgent.replace(/\(.*?\)/,"").slice(0,60)}},r=()=>{const l={};return da.forEach(c=>{var d;const h=n.querySelector(`[data-q="${c.id}"]`);l[c.id]=c.kind==="text"?h.value.trim():((d=n.querySelector(`input[name="${c.id}"]:checked`))==null?void 0:d.value)??""}),l},o=(l="")=>{n.innerHTML=`<div style="width:min(620px,94vw);max-height:92vh;overflow:auto;background:#07100c;border:2px solid #30ff90;color:#cfe;font:14px/1.45 monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>SEND FEEDBACK</b><button id="fb-close">Close (Esc)</button></div>
      <small>Answers stay on this device. Use Copy summary and paste it to whoever sent you the link.</small><hr>
      ${da.map(d=>`<p><b>${d.label}</b><br>${d.kind==="text"?`<textarea data-q="${d.id}" rows="2" style="width:98%;font:13px monospace"></textarea>`:(d.kind==="scale"?["1","2","3","4","5"]:d.choices).map(f=>`<label style="margin-right:10px"><input type="radio" name="${d.id}" value="${f}" data-q="${d.id}"> ${f}</label>`).join("")}</p>`).join("")}
      <button id="fb-save">Save on this device</button> <button id="fb-copy">Copy summary</button> <span id="fb-msg">${l}</span>
      <textarea id="fb-text" readonly rows="6" style="display:none;width:98%;margin-top:8px;font:12px monospace"></textarea></div>`;const c=d=>n.querySelector(d);c("#fb-close").onclick=()=>a.close();const h=()=>({at:new Date().toISOString().slice(0,16).replace("T"," "),answers:r(),session:s(),ledger:Sh(i.get()),ledgerJson:JSON.stringify(gr(i.get()))});c("#fb-save").onclick=()=>{const d=Mc(h());c("#fb-msg").textContent=`Saved (${d} on this device).`},c("#fb-copy").onclick=async()=>{const d=h();Mc(d);const f=Ov(d),p=c("#fb-text");p.value=f;try{await navigator.clipboard.writeText(f),c("#fb-msg").textContent="Copied! Paste it into a message."}catch{p.style.display="block",p.select(),c("#fb-msg").textContent="Could not auto-copy: select the text below and copy it."}}};n.addEventListener("keydown",l=>{l.stopPropagation(),l.code==="Escape"&&a.close()}),n.addEventListener("keyup",l=>l.stopPropagation()),n.addEventListener("mousedown",l=>l.stopPropagation()),n.addEventListener("mouseup",l=>l.stopPropagation());const a={open(){e=!0,o(),n.style.display="flex"},close(){e=!1,n.style.display="none"},isOpen:()=>e};return a}function Qs(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ae;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=bc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let g=0;g<o[h].length;++g)p.push(o[h][g][f]);const v=bc(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function bc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ae(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,p=h.count;f<p;f++)for(let v=0;v<e;v++){const g=h.getComponent(f,v);a.setComponent(f+d,v,g)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const oi=12,ar=64,Eh=(i,t,e)=>(i*Na+t)*Fa+e,zv=i=>[i%oi/oi,1-(Math.floor(i/oi)+1)/oi];function Hv(i){return[[[.5,.38,.2]],[[.34,.38,.15],[.66,.38,.15]],[[.3,.46,.12],[.7,.46,.12],[.5,.24,.12]],[[.3,.4,.14],[.7,.4,.14],[.2,.2,.07],[.5,.17,.07],[.8,.2,.07]]][i]}function Gv(i,t,e,n,s,r){const o=ar;i.save(),i.translate(t,e),i.lineCap="round",i.lineJoin="round";for(const[h,d,f]of Hv(s)){const p=h*o,v=d*o,g=f*o;i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=3,i.beginPath(),i.arc(p,v,g,0,7),i.fill(),i.stroke();const m=n===5,u=n===4,M=g*(m?.28:u?.62:.45),x=n===1?-g*.15:u?g*.25:0,_=n===3?g*.3:n===1?g*.2:0;i.fillStyle="#000",i.beginPath(),i.arc(p+x,v+_,M,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(p+x-M*.3,v+_-M*.3,M*.28,0,7),i.fill(),i.strokeStyle="#000",i.lineWidth=3.5,i.beginPath(),n===3?(i.fillStyle="#000",i.globalAlpha=.85,i.fillRect(p-g,v-g,g*2,g),i.globalAlpha=1,i.moveTo(p-g,v),i.lineTo(p+g,v)):n===2?(i.moveTo(p-g,v-g*1.1),i.lineTo(p+g,v-g*.4)):n===1?(i.moveTo(p-g,v-g*.4),i.lineTo(p+g,v-g*1.1)):n===0&&i.arc(p,v+g*.2,g*1.05,Math.PI*1.1,Math.PI*1.9),i.stroke()}const a=.5*o,l=.78*o;i.strokeStyle="#000",i.fillStyle="#000",i.lineWidth=4,i.beginPath();const c=n===1||n===5||n===2;if(r===0)i.moveTo(a-12,l),i.lineTo(a+12,l),i.stroke();else if(r===1)i.moveTo(a-14,l),i.bezierCurveTo(a-7,l-8,a-3,l+8,a+2,l),i.bezierCurveTo(a+6,l-6,a+10,l+6,a+14,l),i.stroke();else if(r===2)i.ellipse(a,l,7,c?9:6,0,0,7),i.fill();else if(r===3)i.moveTo(a-15,l-4),i.quadraticCurveTo(a,l+(c?-12:14),a+15,l-4),i.stroke();else if(r===4){i.fillStyle="#fff",i.lineWidth=3,i.rect(a-15,l-6,30,12),i.fill(),i.stroke(),i.beginPath();for(let h=-10;h<=10;h+=5)i.moveTo(a+h,l-6),i.lineTo(a+h,l+6);i.stroke()}i.restore()}function Vv(){const i=document.createElement("canvas");i.width=i.height=oi*ar;const t=i.getContext("2d");for(let n=0;n<xs.length;n++)for(let s=0;s<Na;s++)for(let r=0;r<Fa;r++){const o=Eh(n,s,r);Gv(t,o%oi*ar,Math.floor(o/oi)*ar,n,s,r)}const e=new us(i);return e.colorSpace=Oe,e.minFilter=en,e}function Wv(i){const t=new ye(.5,20,14),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=e.getX(n),r=e.getY(n),o=e.getZ(n);if(i===1){const a=1+(r<0?.25:-.15);s*=a,o*=a,r*=1.1}else if(i===2)s*=1.2,r*=.85;else if(i===3){const a=Math.atan2(o,s),l=1+.14*Math.cos(a*5);s*=l,o*=l}else if(i===4)s=Math.sign(s)*Math.pow(Math.abs(s)/.5,.5)*.5*.85+s*.15,o=Math.sign(o)*Math.pow(Math.abs(o)/.5,.5)*.5*.85+o*.15,r*=.85;else if(i===5){const l=.55+.6*(1-(r+.5));s*=l,o*=l,r*=1.2}e.setXYZ(n,s,r,o)}return t.computeVertexNormals(),t}function Xv(i){const t=(n,s=0,r=0,o=0,a=0,l=0,c=0)=>(n.rotateX(a),n.rotateY(l),n.rotateZ(c),n.translate(s,r,o),n.toNonIndexed()),e=(n,s,r=!1)=>Array.from({length:n},(o,a)=>{const l=s+a/n*Math.PI*2,c=.2+.7*((a*.37+s)%1),h=Math.sqrt(1-c*c);return new C(Math.cos(l)*h,r?c*.2:c,Math.sin(l)*h-(r?0:.3)).normalize()});switch(i){case"halo":return t(new En(.26,.045,8,22),0,.74,0,Math.PI/2);case"horns":return Qs([t(new ln(.1,.34,8),.2,.55,0,0,0,-.45),t(new ln(.1,.34,8),-.2,.55,0,0,0,.45)]);case"spikes":return Qs(e(7,.4).map(n=>{const s=new ln(.07,.3,6);return s.translate(0,.15,0),s.applyQuaternion(new sn().setFromUnitVectors(new C(0,1,0),n)),s.translate(n.x*.46,n.y*.46,n.z*.46),s.toNonIndexed()}));case"glow":return new ye(.66,14,10).toNonIndexed();case"fluff":return Qs(e(8,1.1).map(n=>{const s=new ye(.13,8,6);return s.translate(n.x*.5,n.y*.5,n.z*.5),s.toNonIndexed()}));case"drip":return t(new ln(.075,.3,8),.08,-.62,.22,Math.PI);case"stripes":return Qs([t(new En(.49,.035,6,26),0,-.12,0,Math.PI/2),t(new En(.46,.035,6,26),0,.17,0,Math.PI/2)]);case"bellyface":return t(new ye(.2,10,8).scale(1.3,.8,.45),0,-.28,.46)}}const qv=`
attribute vec2 cellUv; varying vec2 vUv;
void main() {
  vUv = cellUv + uv / 12.0;
  vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float s = length(instanceMatrix[0].xyz);
  c.xy += position.xy * s * 0.95; c.z += s * 0.55;
  gl_Position = projectionMatrix * c;
}`,Yv=`uniform sampler2D atlas; varying vec2 vUv;
void main() { vec4 t = texture2D(atlas, vUv); if (t.a < 0.15) discard; gl_FragColor = t; }`;class Sc{constructor(t){H(this,"group",new Be);H(this,"bodies",[]);H(this,"outlines",[]);H(this,"faces");H(this,"cellAttr");H(this,"slotOf",new Map);H(this,"faceIdx",new Map);H(this,"tmp",new me);H(this,"radius",.5);H(this,"acc",new Map);this.spores=t;const e=t.length,n=new Array(mr).fill(0);t.forEach(o=>{const a=o.anatomy.bodyShape;this.slotOf.set(o.id,{shape:a,idx:n[a]++})});for(let o=0;o<mr;o++){const a=Wv(o),l=Math.max(1,n[o]),c=new ns(a,new de({roughness:.55,emissive:2236962}),l),h=new ns(a,new Qt({color:0,side:Me}),l);c.count=h.count=n[o],c.frustumCulled=h.frustumCulled=!1,this.bodies.push(c),this.outlines.push(h),this.group.add(c,h)}t.forEach(o=>{const{shape:a,idx:l}=this.slotOf.get(o.id);this.bodies[a].setColorAt(l,new Et(o.anatomy.colour))}),this.bodies.forEach(o=>o.instanceColor&&(o.instanceColor.needsUpdate=!0));for(const o of ua){const a=t.filter(p=>p.anatomy.signatureTrait===o);if(!a.length)continue;const l=Xv(o),c=new Map,h=o==="glow",d=new ns(l,h?new Qt({transparent:!0,opacity:.28,blending:Mn,depthWrite:!1}):new de({roughness:.5,emissive:o==="halo"?16767072:1118481,emissiveIntensity:o==="halo"?.9:.4}),a.length);d.frustumCulled=!1,a.forEach((p,v)=>{c.set(p.id,v);const g=new Et(p.anatomy.colour),m=p.tone.alignment>0;d.setColorAt(v,o==="halo"?new Et(16769658):o==="horns"?new Et(m?16732208:16051416):o==="spikes"||o==="stripes"?g.clone().offsetHSL(0,0,-.18):o==="drip"?g:g.clone().offsetHSL(0,-.1,.18))});let f;h||(f=new ns(l,new Qt({color:0,side:Me}),a.length),f.frustumCulled=!1,this.group.add(f)),this.group.add(d),this.acc.set(o,{mesh:d,outline:f,idx:c})}const s=new hn(1,1);this.cellAttr=new oa(new Float32Array(e*2),2),s.setAttribute("cellUv",this.cellAttr);const r=new An({vertexShader:qv,fragmentShader:Yv,uniforms:{atlas:{value:Vv()}},transparent:!1});this.faces=new ns(s,r,e),this.faces.frustumCulled=!1,this.group.add(this.faces),t.forEach((o,a)=>{this.faceIdx.set(o.id,a),this.setFace(o)})}setFace(t){const[e,n]=zv(Eh(t.mood,t.anatomy.eyeSet,t.anatomy.mouthSet)),s=this.faceIdx.get(t.id);this.cellAttr.setXY(s,e,n),this.cellAttr.needsUpdate=!0}place(t,e,n,s=1){const{shape:r,idx:o}=this.slotOf.get(t),a=this.tmp;a.position.copy(e),a.scale.set(n/Math.sqrt(s),n*s,n/Math.sqrt(s)),a.updateMatrix(),this.bodies[r].setMatrixAt(o,a.matrix);{const l=this.acc.get(this.spores[this.faceIdx.get(t)].anatomy.signatureTrait);if(l){const c=l.idx.get(t);if(l.mesh.setMatrixAt(c,a.matrix),l.outline){const h=a.scale.clone();a.scale.multiplyScalar(1.12),a.updateMatrix(),l.outline.setMatrixAt(c,a.matrix),a.scale.copy(h),a.updateMatrix()}}}a.scale.multiplyScalar(1.1+.02*this.spores[this.faceIdx.get(t)].anatomy.outlineWeight),a.updateMatrix(),this.outlines[r].setMatrixAt(o,a.matrix),a.scale.set(n,n,n),a.position.copy(e),a.updateMatrix(),this.faces.setMatrixAt(this.faceIdx.get(t),a.matrix)}commit(){this.bodies.forEach(t=>t.instanceMatrix.needsUpdate=!0),this.outlines.forEach(t=>t.instanceMatrix.needsUpdate=!0),this.faces.instanceMatrix.needsUpdate=!0,this.acc.forEach(t=>{t.mesh.instanceMatrix.needsUpdate=!0,t.outline&&(t.outline.instanceMatrix.needsUpdate=!0)})}drawCalls(){return this.bodies.length+this.outlines.length+1+[...this.acc.values()].reduce((t,e)=>t+(e.outline?2:1),0)}}const $v={glow:"horn",halo:"horn",horns:"horn",spikes:"body",fluff:"body",bellyface:"body",drip:"tail",stripes:"leg"},wc=[{role:"leg",pos:[-.9,.45,-.55]},{role:"leg",pos:[-.9,.45,.55]},{role:"leg",pos:[.9,.45,-.55]},{role:"leg",pos:[.9,.45,.55]},{role:"body",pos:[-.9,1.45,0]},{role:"body",pos:[0,1.45,-.55]},{role:"body",pos:[0,1.45,.55]},{role:"body",pos:[.9,1.45,0]},{role:"body",pos:[0,2.35,0]},{role:"horn",pos:[.9,2.35,-.55]},{role:"horn",pos:[.9,2.35,.55]},{role:"tail",pos:[-1.8,1.45,0]}];function jv(i){if(i<=5){const e=i===1?0:.55+i*.12;return{shape:"Cluster",tpl:Array.from({length:i},(n,s)=>({role:"body",pos:[Math.cos(s/i*Math.PI*2)*e,.5,Math.sin(s/i*Math.PI*2)*e]}))}}if(i<=30){const e=wc.slice(0,i);for(let n=wc.length,s=0;n<i;s++){const r=Math.min(6,i-n);for(let o=0;o<r;o++,n++)e.push({role:"body",pos:[Math.cos(o/r*Math.PI*2)*.95,3.3+s*.9,Math.sin(o/r*Math.PI*2)*.95]})}return{shape:"Body",tpl:e}}const t=Math.max(2,i*1/(Math.PI*2));return{shape:"Colony",tpl:Array.from({length:i},(e,n)=>({role:"body",pos:[Math.cos(n/i*Math.PI*2)*t,.5,Math.sin(n/i*Math.PI*2)*t]}))}}function Kv(i){const{shape:t,tpl:e}=jv(i.length),n=[...i],s=[];for(const o of e){const a=n.findIndex(c=>$v[c.anatomy.signatureTrait]===o.role),l=n.splice(a>=0?a:0,1)[0];s.push({sporeId:l.id,role:o.role,pos:o.pos})}const r=i.reduce((o,a)=>o+a.tone.alignment,0)/Math.max(1,i.length);return{shape:t,slots:s,avgAlignment:r}}function Jv(i,t,e){const n=i.slots.find(r=>r.sporeId===t),s=i.slots.find(r=>r.sporeId===e);return!n||!s?i:{...i,slots:i.slots.map(r=>r===n?{...r,sporeId:e}:r===s?{...r,sporeId:t}:r)}}const Ci=12;class Zv{constructor(t,e,n){H(this,"scene",new Yn);H(this,"camera");H(this,"spores",_c(Ci));H(this,"crowd");H(this,"pos",[]);H(this,"vel",[]);H(this,"target",[]);H(this,"creature",null);H(this,"merged",!1);H(this,"mergedAt",0);H(this,"drag",-1);H(this,"dragOffset",new C);H(this,"hover",-1);H(this,"t",0);H(this,"ray",new ch);H(this,"plane",new Bn(new C(0,1,0),-.5));H(this,"label",document.createElement("div"));H(this,"ending",document.createElement("div"));H(this,"swapCount",0);H(this,"onContinue");H(this,"endingShown",!1);H(this,"creatureInfo",{name:"",description:""});this.store=t,this.dom=n,this.camera=e,this.scene.background=new Et(263434),this.scene.fog=new Ea(263434,14,30),this.scene.add(new wr(8949936,1.1));const s=new fr(16777215,2.2);s.position.set(4,10,6),this.scene.add(s);const r=new ft(new br(9,48),new de({color:1382948,roughness:1}));r.rotation.x=-Math.PI/2,this.scene.add(r),this.crowd=new Sc(this.spores),this.scene.add(this.crowd.group),this.spores.forEach(()=>{this.pos.push(new C),this.vel.push(new C),this.target.push(null)}),Object.assign(this.label.style,{position:"fixed",display:"none",padding:"4px 8px",background:"rgba(0,0,0,.75)",color:"#fff",font:"12px monospace",pointerEvents:"none",zIndex:"6",border:"1px solid #fff"}),this.label.id="sporelabel",this.ending.id="ending",Object.assign(this.ending.style,{position:"fixed",left:"0",right:"0",bottom:"0",padding:"28px 20px",textAlign:"center",background:"linear-gradient(transparent, rgba(0,0,0,.92))",color:"#ffe9c0",font:"17px/1.5 Georgia, serif",display:"none",zIndex:"7"}),document.body.append(this.label,this.ending),n.addEventListener("pointerdown",o=>this.down(o)),addEventListener("pointermove",o=>this.move(o)),addEventListener("pointerup",o=>this.up(o))}enter(){{const t=_s(this.store.get());this.spores=yv(_c(Ci),t),this.creatureInfo=ka(t),this.scene.remove(this.crowd.group),this.crowd=new Sc(this.spores),this.scene.add(this.crowd.group)}this.merged=!1,this.endingShown=!1,this.creature=null,this.t=0,this.ending.style.display="none",this.camera.position.set(0,9,8.5),this.camera.lookAt(0,.8,0),this.spores.forEach((t,e)=>{this.pos[e].set(0,1+Math.random(),0);const n=e/Ci*Math.PI*2+Math.random()*.3,s=3.5+Math.random()*2;this.vel[e].set(Math.cos(n)*s,4+Math.random()*2,Math.sin(n)*s),this.target[e]=null}),Ct.burst(),this.store.set({mode:"cameo"})}ndc(t){const e=this.dom.getBoundingClientRect();return new gt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}pick(t){this.ray.setFromCamera(this.ndc(t),this.camera);let e=-1,n=1/0;return this.pos.forEach((s,r)=>{const o=this.ray.ray.intersectSphere(new qn(s,.5),new C);if(o){const a=o.distanceTo(this.ray.ray.origin);a<n&&(n=a,e=r)}}),e}onPlane(t){return this.ray.setFromCamera(this.ndc(t),this.camera),this.ray.ray.intersectPlane(this.plane,new C)}down(t){if(this.store.get().mode!=="cameo")return;const e=this.pick(t);if(e<0)return;this.drag=e,this.plane.constant=-(this.merged?this.pos[e].y:1.1);const n=this.onPlane(t);this.dragOffset.copy(this.pos[e]).sub(n??this.pos[e]),this.vel[e].set(0,0,0),this.label.style.display="none"}move(t){if(this.store.get().mode==="cameo"){if(this.drag>=0){const e=this.onPlane(t);if(e){const n=e.add(this.dragOffset);n.y=-this.plane.constant,this.pos[this.drag].copy(n)}return}if(this.hover=this.pick(t),this.hover>=0){const e=this.spores[this.hover];this.label.style.display="block",this.label.style.left=t.clientX+14+"px",this.label.style.top=t.clientY+8+"px",this.label.textContent=`${e.name}: ${xs[e.mood]}, ${yh[e.personality]}, ${e.anatomy.signatureTrait}`}else this.label.style.display="none"}}up(t){if(this.drag<0)return;const e=this.drag;this.drag=-1;let n=-1,s=60;const r=this.screenOf(e);this.pos.forEach((o,a)=>{if(a!==e){const l=this.screenOf(a),c=Math.hypot(l.x-r.x,l.y-r.y);c<s&&(s=c,n=a)}}),this.merged||(this.pos[e].y=.5),!(n<0)&&(this.merged?this.swap(e,n):this.doMerge(e,n))}worldTargets(){this.creature.slots.forEach(t=>{this.target[t.sporeId]=new C(t.pos[0]*1.05,t.pos[1],t.pos[2]*1.05)})}doMerge(t,e){this.spores[t].history.push({type:"merged",otherId:e}),this.spores[e].history.push({type:"merged",otherId:t}),this.creature=Kv(this.spores),Ct.merge(),this.merged=!0,this.mergedAt=this.t,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,mergeSeconds:Math.round(this.t),swaps:this.swapCount}})}swap(t,e){this.creature=Jv(this.creature,t,e),this.swapCount++,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,swaps:this.swapCount}})}showEnding(){this.ending.innerHTML=`The box was never a box.<br>Twelve faces, and every one of them is looking at you.<br><br><span id="creature-name">Your creature: <b>${this.creatureInfo.name}</b>.</span> <small>${this.creatureInfo.description}</small><br><br><button id="continue">Continue</button> &nbsp; <button id="again">Play again</button>`,this.ending.style.display="block",document.getElementById("again").onclick=()=>location.reload(),document.getElementById("continue").onclick=()=>{this.onContinue&&(this.ending.style.display="none",this.onContinue())}}update(t){if(this.store.get().mode!=="cameo")return;this.t+=t;for(let n=0;n<Ci;n++){const s=this.pos[n],r=this.vel[n],o=this.target[n];if(n!==this.drag)if(o)s.lerp(o,1-Math.exp(-5*t));else{r.y-=14*t,s.addScaledVector(r,t),s.y<.5&&(s.y=.5,r.y*=-.35,r.x*=.82,r.z*=.82,Math.abs(r.y)<.4&&(r.y=0));const a=Math.hypot(s.x,s.z);a>7&&(s.x*=7/a,s.z*=7/a,r.x*=-.5,r.z*=-.5)}}if(!this.merged)for(let n=0;n<Ci;n++)for(let s=n+1;s<Ci;s++){const r=this.pos[n].distanceTo(this.pos[s]);if(r<.9&&r>1e-4&&n!==this.drag&&s!==this.drag){const o=this.pos[n].clone().sub(this.pos[s]).setY(0).normalize().multiplyScalar((.9-r)*.5);this.pos[n].add(o),this.pos[s].sub(o)}}this.spores.forEach((n,s)=>{const r=Math.sin(this.t*fv(n.mood)*2+s)*.08,o=(this.drag===s,0);this.crowd.place(n.id,this.pos[s].clone().setY(this.pos[s].y+o),.95+(this.hover===s?.08:0),1+r)}),this.crowd.commit(),this.merged&&this.t-this.mergedAt>2.2&&!this.endingShown&&(this.endingShown=!0,this.showEnding());const e=this.merged?new C(0,3.4,8.5):new C(0,9,8.5);this.camera.position.lerp(e,1-Math.exp(-2.5*t)),this.camera.lookAt(0,this.merged?1.5:.8,0)}render(t){t.render(this.scene,this.camera)}screenOf(t){const e=this.pos[t].clone().project(this.camera);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}}function Qv(i,t,e){const n=Math.PI*2;return Math.abs(((i-t)%n+n+Math.PI)%n-Math.PI)<=e/2}const kn={speed:3.2,width:.7,reward:3,penalty:1};class tx{constructor(t,e){H(this,"el",document.createElement("div"));H(this,"canvas",document.createElement("canvas"));H(this,"angle",0);H(this,"target",2);H(this,"speed",kn.speed);H(this,"open",!1);H(this,"raf",0);H(this,"last",0);H(this,"loop",()=>{if(!this.open)return;const t=performance.now();this.angle+=this.speed*((t-this.last)/1e3),this.last=t,this.draw(),this.raf=requestAnimationFrame(this.loop)});this.store=t,this.onDone=e,this.el.id="poplock",Object.assign(this.el.style,{position:"fixed",inset:"0",display:"none",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.7)",zIndex:"10",flexDirection:"column",color:"#9fb",font:"14px monospace"}),this.canvas.width=this.canvas.height=260,this.canvas.id="poplock-canvas",this.el.append("Crack the crate: stop the pointer in the green zone (Space or click)",this.canvas),document.body.appendChild(this.el),addEventListener("keydown",n=>{this.open&&n.code==="Space"&&(n.preventDefault(),this.press())}),this.canvas.addEventListener("click",()=>this.open&&this.press())}show(){this.store.get().crates<1||(this.target=Math.random()*Math.PI*2,this.angle=this.target+Math.PI,this.open=!0,this.el.style.display="flex",this.last=performance.now(),this.loop())}press(){const t=Qv(this.angle,this.target,kn.width),e=this.store.get();this.close(),this.store.set({crates:e.crates-1,scrap:t?e.scrap+kn.reward:Math.max(0,e.scrap-kn.penalty)}),this.onDone(t?`Crate cracked: +${kn.reward} scrap.`:`Slipped. Tool wear: -${kn.penalty} scrap.`)}close(){this.open=!1,this.el.style.display="none",cancelAnimationFrame(this.raf)}draw(){const t=this.canvas.getContext("2d"),e=100,n=130,s=130;t.clearRect(0,0,260,260),t.lineWidth=16,t.strokeStyle="#223",t.beginPath(),t.arc(n,s,e,0,Math.PI*2),t.stroke(),t.strokeStyle="#3f9",t.beginPath(),t.arc(n,s,e,this.target-kn.width/2,this.target+kn.width/2),t.stroke(),t.strokeStyle="#fff",t.lineWidth=4,t.beginPath(),t.moveTo(n,s),t.lineTo(n+Math.cos(this.angle)*(e+10),s+Math.sin(this.angle)*(e+10)),t.stroke()}}const vo=(i,t,e)=>i.set({[t]:i.get()[t]+e}),Th=[{id:"oxygen",name:"Oxygen Cell",cost:3,desc:"+40 oxygen",apply:i=>(vo(i,"oxygen",40),"Oxygen restored.")},{id:"power",name:"Power Cell",cost:4,desc:"+35 power",apply:i=>(vo(i,"power",35),"Element 115 topped up.")},{id:"repair",name:"Repair Patch",cost:3,desc:"+30 hull",apply:i=>(vo(i,"hull",30),"Hull patched.")},{id:"hat",name:"Useless Hat",cost:1,desc:"does nothing, proudly",apply:i=>(i.set({hats:i.get().hats+1}),"You now own a hat. Nothing improved.")}];function ex(i,t){const e=Th.find(n=>n.id===t);return!e||i.get().scrap<e.cost?null:(i.set({scrap:i.get().scrap-e.cost}),e.apply(i))}function nx(i,t){const e=document.createElement("div");e.id="transmog",Object.assign(e.style,{position:"fixed",right:"12px",top:"12px",width:"270px",maxHeight:"calc(100vh - 24px)",overflowY:"auto",padding:"10px",background:"rgba(8,10,16,.85)",border:"1px solid #f0a020",color:"#fc8",font:"13px monospace",display:"none",zIndex:"5"}),document.body.appendChild(e);const n=r=>{document.getElementById("tm-msg").textContent=r??"Not enough scrap."},s=()=>{var l;const r=i.get();if(e.style.display=r.mode==="rooms"&&r.room==="transmog"?"block":"none",e.style.display==="none")return;const o=((l=document.getElementById("tm-msg"))==null?void 0:l.textContent)??"Feed it junk. Make things.";e.innerHTML=`<style>#transmog button{display:block;width:100%;text-align:left;margin:3px 0;padding:5px 8px;font:12px/1.3 monospace;color:#fc8;background:#14100a;border:1px solid #6a4a18;cursor:pointer}
#transmog button:hover:not(:disabled){background:#2a1c08;border-color:#f0a020}#transmog button:not(:disabled){border-color:#3fbf7f;color:#cfe}#transmog button:disabled{opacity:.45;cursor:default;color:#a87;border-color:#4a3a20}
#transmog hr{border:0;border-top:1px solid #4a3a20;margin:8px 0}#transmog h5{margin:6px 0 2px;color:#f0a020;letter-spacing:2px;font-size:11px}#tm-msg{color:#ffe9c0;font-style:italic;min-height:2.6em}</style>
<b>TRANSMOGRIFIER</b> &nbsp; scrap: <span id="tm-scrap">${r.scrap}</span><hr>`+Th.map(c=>`<button data-r="${c.id}" ${r.scrap<c.cost?"disabled":""}>${c.name} (${c.cost}) ${c.desc}</button>`).join("")+"<hr><h5>MINING UPGRADES</h5>"+Ua.map(c=>{const h=r.up[c.id],d=Wg(i,c.id);return d===null?`<button disabled>${c.name} T${h}/${c.costs.length} MAX (${c.desc(h)})</button>`:`<button data-u="${c.id}" ${r.scrap<d?"disabled":""}>${c.name} T${h}/${c.costs.length}: ${c.desc(h+1)} (${d})</button>`}).join("")+(Tr(r)?`<hr><h5>THE CUBE</h5><button id="tm-feed" ${r.scrap<Wn(r.feeds)?"disabled":""}>Offer scrap to the cube (${Wn(r.feeds)})</button>${r.scrap>=Wn(r.feeds)&&r.feeds<9?'<div id="tm-hungry" style="color:#f9c;margin:2px 0">The cube is hungry. It hums at your pockets.</div>':""}<div style="margin:2px 0 6px;opacity:.8">stage ${Pi(r.feeds)} of 3 &middot; fed ${r.feeds}/9</div>`:"")+`<hr><button id="tm-crate" ${r.crates<1?"disabled":""}>Crack a crate (${r.crates} sealed)</button><hr><div id="tm-msg">${o}</div>`,e.querySelectorAll("button[data-r]").forEach(c=>c.onclick=()=>{n(ex(i,c.dataset.r)),s()}),e.querySelectorAll("button[data-u]").forEach(c=>c.onclick=()=>{n(Xg(i,c.dataset.u)),s()});const a=document.getElementById("tm-feed");a&&(a.onclick=()=>{n(Rg(i)),s()}),document.getElementById("tm-crate").onclick=()=>t()};return i.subscribe(s),s(),{say:n,render:s}}function za(i){return t=>{i[0].intensity=6+Math.sin(t/90)*.4+(Math.sin(t/1300)>.97?-3:0),i[1].intensity=4+Math.sin(t/230)*.8}}function ix(i=16738858){const t=new Be;t.add(new ft(new ye(.2,16,12),new de({color:i,emissive:i,emissiveIntensity:.25}))),t.add(new ft(new ye(.225,16,12),new Qt({color:0,side:Me})));for(const n of[-.08,.08]){const s=new ft(new ye(.065,12,8),new Qt({color:16777215}));s.position.set(n,.06,.15);const r=new ft(new ye(.03,8,6),new Qt({color:0}));r.position.set(n,.06,.205),t.add(s,r)}const e=new ft(new En(.05,.012,6,12,Math.PI),new Qt({color:0}));return e.position.set(0,-.06,.2),e.rotation.z=Math.PI,t.add(e),t}function sx(){const i=new Yn,{room:t,b:e,flicker:n}=vs(i,"mining","Helm",2154656);e.box(3,.9,.9,-.8,.45,-2,2371138);const s=e.box(1.2,.6,.05,-1.4,1.35,-2.42,1062952,2154656);e.box(.9,.5,.05,.2,1.3,-2.42,2759186,16742944),e.box(.5,.05,.4,-.3,.95,-1.8,1710618),e.box(.35,.45,.35,-2.4,.22,-1.2,4864552),e.box(.3,.3,.3,-2.4,.6,-1.2,3820090),e.cyl(.05,.1,.5,.95,-1.9,13684928),e.cyl(.18,.5,2.5,.25,-1.8,3754592),e.box(.04,1.2,.04,1,1.4,-2.3,1052688);const r=document.createElement("canvas");r.width=512,r.height=320;const o=r.getContext("2d"),a=o.createLinearGradient(0,0,0,320);a.addColorStop(0,"#0a0630"),a.addColorStop(1,"#2a0f4a"),o.fillStyle=a,o.fillRect(0,0,512,320);for(let u=0;u<140;u++)o.fillStyle=`rgba(255,255,${200+Math.random()*55},${.4+Math.random()*.6})`,o.fillRect(Math.random()*512,Math.random()*320,1+Math.random()*2,1+Math.random()*2);o.fillStyle="#ff7a3a",o.beginPath(),o.arc(380,250,120,0,7),o.fill(),o.fillStyle="#ffb25a",o.beginPath(),o.arc(350,220,90,0,7),o.fill();const l=new ft(new hn(1.8,1.1),new Qt({map:new us(r)}));l.position.set(1.95,1.45,-2.43),i.add(l);const c=cn(790294);for(const[u,M,x,_]of[[1.95,.08,1.95,2.03],[1.95,.08,1.95,.87],[.08,1.2,1,1.45],[.08,1.2,2.9,1.45],[.05,1.2,1.95,1.45]]){const I=new ft(new fe(u,M,.1),c);I.position.set(x,_,-2.42),i.add(I)}const h=new ft(new hn(1.8,1.1),new Qt({color:8956671,transparent:!0,opacity:.08}));h.position.set(1.95,1.45,-2.38),i.add(h);const d=new un(16751200,3,4);d.position.set(1.95,1.4,-2),i.add(d);const f=ix();f.position.set(.6,1.2,-1.4),i.add(f);const p=Gi(i,2.93,-.9,Math.PI/2,"To Bunk","bed",6324479);for(let u=0;u<5;u++)e.box(.07,.07,.07,-.2+u*.16,.97,-1.55,u===2?12595248:2763312);Ee(i,`1  2  3  4  5
? ? ? ? ?`,.2,1.1,-1.5,0,.5,"#f4e27a",.03),Ee(i,`LAUNCH =
the chair
(probably)`,-1.8,1,-.62,.5,.42,"#d8f0d0"),Ee(i,`DO NOT TOUCH.
IT WORKS.`,1.25,1.75,-2.41,0,.5,"#f06050",.05),qe(i,-1.4,1.7,-2.44,1.3,.05,.02),qe(i,.2,1.55,-2.44,.05,.6,.02),qe(i,-.8,.78,-1.28,.45,.05,.1,.2),pr(i,[[.5,2.3,-2.3],[.9,1.7,-1.9],[.4,.95,-1.7]],1381653,.03),e.cyl(.05,.4,-.8,.25,-.9,2106414),e.cyl(.3,.05,-.8,.04,-.9,1382432),e.box(.1,.5,.5,-1.15,.78,-.9,2764604),e.box(.1,.5,.5,-.45,.78,-.9,2764604),e.box(.6,.75,.1,-.8,.85,-.58,3094087);const v=e.box(.62,.12,.6,-.8,.5,-.9,3094087,2154656);v.material.emissiveIntensity=.6,e.cyl(.03,.3,-.8,1.05,-1.62,6711928),e.box(.12,.05,.12,-.8,1.22,-1.62,2154656,2154656);const g={mesh:v,label:"Pilot chair (launch)",target:"fly"};t.hotspots.push(p,g);const m=za(n);return t.update=u=>{m(u),f.position.y=1.2+Math.sin(u/400)*.04,f.rotation.y=Math.sin(u/900)*.3,s.material.emissiveIntensity=.8+Math.sin(u/150)*.1},t}function rx(i){const t=new Yn,{room:e,b:n,flicker:s}=vs(t,"transmog","Cargo Bay",15769632),r=n.cyl(.4,1,-.3,.6,-1.7,3811914);n.cyl(.46,.08,-.3,.1,-1.7,1710626),n.cyl(.46,.08,-.3,1.12,-1.7,1710626);const o=new de({color:6961919,emissive:4202666,emissiveIntensity:.6,transparent:!0,opacity:1,roughness:.1,metalness:.2}),a=cn(2759236,8401151,.5);n.cyl(.85,.1,1,.05,.2,2236972);const l=new ft(new fe(1,1,1),[a,a,a,a,o,a]);l.position.set(1,.5,.2),t.add(l);const c=new un(9453823,3,4);c.position.set(1,1,.2),t.add(c);const h=new ft(new ye(.12,12,8),new Qt({color:16777215,transparent:!0}));h.visible=!1,t.add(h);const d=new ft(new ye(.05,8,6),new Qt({color:0,transparent:!0}));d.visible=!1,t.add(d),n.box(.5,.35,.4,1.6,.97,-1.8,5917232),n.box(1.4,.8,.7,1.6,.4,-1.8,2764864),n.box(.6,.4,.4,-2.5,.2,-.2,3815978),n.box(.4,.2,.3,-2.6,.5,-.2,5914672),n.box(.5,.5,.05,1,1.95,-2.42,2759186,15769632),n.cyl(.25,.9,-2.6,.45,.6,3099210);const f=Gi(t,-2.93,-.9,Math.PI/2,"Airlock hatch to Quarters","desk",12623968);for(let F=0;F<2;F++)for(let W=0;W<3;W++)n.box(.5,.5,.5,2.62,.3+W*.52,-1.35+F*.55,[5917232,4864552,3820090][(F+W)%3]),qe(t,2.37,.3+W*.52,-1.35+F*.55,.02,.5,.12);Ee(t,`CRATE 7
(was 6)`,2.36,1.3,-1.1,-Math.PI/2,.3,"#f4e27a",.1);const p=document.createElement("canvas");p.width=256,p.height=256;{const F=p.getContext("2d");F.fillStyle="#0a0630",F.fillRect(0,0,256,256);for(let W=0;W<80;W++)F.fillStyle="#fff",F.fillRect(Math.random()*256,Math.random()*256,2,2)}const v=new ft(new hn(1.7,1.9),new Qt({map:new us(p)}));v.position.set(-1.3,.97,-2.44),t.add(v);const g=document.createElement("canvas");g.width=256,g.height=256;{const F=g.getContext("2d");F.fillStyle="#2a323f",F.fillRect(0,0,256,256),F.fillStyle="#d8b820";for(let W=-4;W<8;W++)F.beginPath(),F.moveTo(W*40,256),F.lineTo(W*40+20,256),F.lineTo(W*40+120,200),F.lineTo(W*40+100,200),F.fill();F.fillStyle="#e8e8e8",F.font="bold 34px monospace",F.fillText("CARGO",70,110)}const m=new ft(new fe(1.7,1.9,.08),new de({map:new us(g),roughness:.7,metalness:.4}));m.position.set(-1.3,.97,-2.38),t.add(m),n.box(.08,2,.1,-2.18,1,-2.4,790294),n.box(.08,2,.1,-.42,1,-2.4,790294),n.box(1.8,.08,.1,-1.3,1.96,-2.4,790294),Ee(t,`OPENS.
SHUTS.
USUALLY.`,-1.3,2.24,-2.36,0,.4,"#f4e27a",.03);const u=n.box(.9,.05,.9,-1.6,.07,1,1708552,15769632);u.material.emissiveIntensity=.6,n.box(.05,.9,.05,-1.95,.5,.6,6974068),n.box(.05,.9,.05,-1.25,.5,.6,6974068);for(let F=0;F<3;F++)n.box(.7,.04,.04,-1.6,.25+F*.28,.6,6974068);Ee(t,`LADDER
(it is a ladder)`,-1.6,.9,.55,0,.42,"#d8f0d0"),qe(t,-1.6,.11,1.46,1,.02,.06),e.hotspots.push(f,{mesh:u,label:"Ladder down to the Engine Room",target:"engine"});let M=0,x=0,_=i.get().stats.trips,I=i.get().door;const A=Array.from({length:14},(F,W)=>{const k=new ft(new fe(.16+W%3*.05,.08+W%2*.05,.14),cn([6974068,9067066,4876922][W%3],2102280,.4));return k.position.set(-1.2+W%5*.17,.08+Math.floor(W/5)*.09,-.9+W*7%4*.12),k.rotation.y=W*1.3,k.visible=!1,t.add(k),k}),E=Array.from({length:5},(F,W)=>{const k=new ft(new Cn(.12-W*.012,.16-W*.012,.1,10),cn([14696512,4235488,14729280,6340704,12607680][W],1118481,.3));return k.visible=!1,t.add(k),k}),R=cn(1714720,2162576,.1),S=new ft(new fe(.9,.04,.35),R);S.position.set(1.6,.82,-1.45),t.add(S),t.children[t.children.length-1];let y=i.get().scrap,P=0,O=0,B=i.get().lunges,q=0;const j=za(s);return e.update=F=>{const W=Math.min(.1,(F-O)/1e3);O=F;const k=i.get();k.scrap<y&&(P=1),y=k.scrap,P=Math.max(0,P-W*1.5),R.emissiveIntensity=.1+P*3,A.forEach((ct,nt)=>ct.visible=nt<Math.min(14,k.scrap));const st=pc(k.feeds)*1.6;E.forEach((ct,nt)=>{ct.visible=nt<Math.min(5,k.hats),ct.position.set(1+Math.sin(nt*2.1)*.05,st+.05+nt*.09,.2),ct.rotation.z=Math.sin(F/700+nt)*.05});const ut=Tr(k);l.visible=c.visible=ut,k.lunges!==B&&(B=k.lunges,q=1),q=Math.max(0,q-W*1.6);const yt=ut&&k.feeds<9&&k.scrap>=Wn(k.feeds);(k.stats.trips!==_||k.door!==I)&&(_=k.stats.trips,I=k.door,x=F+3400,Ct.door()),M+=((F<x?1:0)-M)*Math.min(1,W*3.5),m.position.y=.97+1.8*M,v.visible=M>.02,j(F),r.rotation.y=F/2e3*(1+P*6);const Lt=i.get().feeds,Ot=pc(Lt)*1.6*(1+.03*Math.min(i.get().sleeps,10)),Y=Math.sin(q*Math.PI);l.scale.setScalar((Ot+Math.sin(F/500)*.015+(yt?.035*Math.sin(F/170):0))*(1+.45*Y)),l.position.set(1,Ot/2,.2+.9*Y),l.rotation.y=Math.sin(F/3e3)*.2+(yt?Math.sin(F/90)*.03:0),c.intensity=2+Lt*.8+Math.sin(F/300)*.5+(yt?2.5+2*Math.sin(F/150):0)+14*Y,c.position.y=Ot+.3,o.opacity=Pg(Lt);const Q=Lt>=1&&ut;{const ct=Ig(Lt);h.material.opacity=ct,d.material.opacity=ct}if(h.visible=d.visible=Q,Q){const ct=.2+Ot/2;h.position.set(1,Ot*.55,ct-Ot*.18),d.position.set(1+Math.sin(F/700)*.04*Ot,Ot*.55,ct-Ot*.18+.1*Ot+.05),h.scale.setScalar(Ot*1.4),d.scale.setScalar(Ot*1.4)}},e}function ox(i){const t=new Yn,{room:e,b:n,flicker:s}=vs(t,"bed","Bunk",6324479),r=n.box(1,.35,2,1.4,.3,-1.3,3817304);n.box(1,.12,.5,1.4,.55,-2,13156528),n.box(.7,.5,.5,-2.2,.25,-2,2763312),n.box(.05,.3,.4,-2.9,1.4,-1,1579032),n.cyl(.04,.1,-2.2,.55,-2,14207136),n.box(.4,.02,.3,.2,.06,-.6,5909034),Ee(t,`Day 4,017
of the contract`,-2.88,1.5,-1.8,Math.PI/2,.42,"#f4e27a"),qe(t,1.4,.5,-.32,.9,.05,.03),Ee(t,`DO NOT
OPEN THE
VAULT`,0,1.95,-2.38,0,.45,"#f06050");const o=n.box(1,1.6,.1,0,.9,-2.45,790294),a=n.box(.76,1.2,.04,0,.9,-2.38,1054752,2130080),l=a.material,c=new un(4235519,0,4);c.position.set(0,.9,-1.9),t.add(c);const h=Gi(t,-2.93,-.9,Math.PI/2,"To Helm","mining",2154656),d=Gi(t,2.93,-.9,Math.PI/2,"To Quarters","desk",12623968);e.hotspots.push(h,d,{mesh:r,label:"Sleep (the night changes things)",target:"act:sleep"});const f=za(s);return e.update=p=>{f(p);const v=i.get(),g=Da(v),m=-.07*Math.min(v.sleeps,7);o.position.x=m,a.position.x=m,c.position.x=m;const u=[2130080,3186864,14721072,16736448][g];l.emissive.setHex(u);const M=1+(g?.35:.05)*Math.sin(p/(700-g*150));l.emissiveIntensity=[.1,.5,.9,1.6][g]*M,c.color.setHex(u),c.intensity=[0,1.2,2.5,5][g]*M},e}const It=fg(),Qe=new W0({antialias:!0,preserveDrawingBuffer:!0});Qe.setPixelRatio(Math.min(devicePixelRatio,2));Qe.setSize(innerWidth,innerHeight);document.body.appendChild(Qe.domElement);const tn=new ke(62,innerWidth/innerHeight,.1,400),ax=96;function Ah(){const i=innerWidth/Math.max(1,innerHeight);tn.aspect=i,tn.fov=Math.min(100,Math.max(40,2*Math.atan(Math.tan(ax*Math.PI/360)/i)*180/Math.PI)),tn.userData.baseFov=tn.fov,tn.updateProjectionMatrix()}Ah();const ze=new mg(It,tn,Qe.domElement,"mining");[sx(),rx(It),ox(It),sv(),rv()].forEach(i=>ze.add(i));ze.start();const Ch=Jg(It),Ec=["POWER: yes.","HULL: ok-ish. A sticker says ok.",'ENGINE TEMP: ??? (sticker: "normal")',"RING SPEED: 11 (units unknown)",'LAST SERVICE: "did something to it"','SI STATUS: left. Note: "back soon" (4,017 days ago)'];let lx=0;ze.onAction=i=>{i==="collider"&&Ni("Keep back. The sticker says DANGER. The sticker is in marker."),i==="monitor"&&Ni(Ec[lx++%Ec.length]),i==="logs"&&Ch.open(),i==="sleep"&&Ph.open()};const cx=Zg();for(const i of["pointerdown","keydown"])addEventListener(i,()=>Ct.unlock(),{once:!1});addEventListener("click",i=>{var t;((t=i.target)==null?void 0:t.tagName)==="BUTTON"&&Ct.click()});const Ha=ev(It);nv(It);ov(It);const fs=new Zv(It,tn,Qe.domElement);It.subscribe(i=>{i.feeds>=9&&!i.cameo&&i.mode==="rooms"&&(It.set({cameo:!0}),setTimeout(()=>ze.transition(()=>{fs.enter(),setTimeout(()=>{It.get().beats.includes("spreading")||(It.set({beats:[...It.get().beats,"spreading"]}),Ha.say("spreading"))},3500)}),700))});const Tc=nx(It,()=>Rh.show()),Rh=new tx(It,i=>{Tc.say(i),Tc.render()}),Ge=new Yg(It,tn),hx=new $g(It,Ge),ps=new Fv(It,tn),Ar=Bv(It);cx.add("fb-btn","Send feedback",()=>Ar.open());ps.onFeedback=()=>Ar.open();const vr=new URLSearchParams(location.search),ys=vr.has("nocut"),ux=av(It),Ph=Dv(It),Ih=lv(It);window.cubeChoice=Ih;Uv(It);window.sleepUi=Ph;const Lh=Nv(It,Ha);window.sorter=ux;window.cubeEvents=Lh;ys&&(Ge.fixedField="quiet",Ge.fatigueEnabled=!1,Lh.enabled=!1,Ih.enabled=!1,It.set({cubeState:"aboard",cubeLunged:!0,cubeChoice:"kept",beats:[...It.get().beats,"cubeFound","cubeLunge"]}));Ge.manualSort=!ys;vr.get("field")&&(Ge.fixedField=vr.get("field"));ze.onFly=()=>{if(ys||It.get().beats.includes("launchCut"))return Ge.enter();It.set({beats:[...It.get().beats,"launchCut"]}),ps.play("launch",()=>Ge.enter())};window.LOGBOOKS=La;window.intensityOf=Er;const dx=bv(It);window.ledger=dx;const fx=cv(It);window.profileTracker=fx;const Dh=Sv(It);window.atmosphere=Dh;ys&&(Dh.enabled=!1);const Ga=Lv(It);window.finale=Ga;Ga.onFeedback=()=>Ar.open();fs.onContinue=()=>{ys&&!vr.has("finale")||Ga.play()};Ge.onReturn=()=>ze.transition(()=>{ze.jumpTo("transmog"),Ge.bankAndLeave()});const Uh=document.getElementById("hud"),xo=(i,t)=>`<div class="m"><span>${i}</span><i style="--c:${t}"><b id="m-${i}"></b></i></div>`;Uh.innerHTML=`<div id="room"></div>${xo("power","#f0a020")}${xo("oxygen","#40c0ff")}${xo("hull","#e05050")}<div id="cargo"></div><div id="hint"></div>`;const qi=document.createElement("button");qi.id="exit-fly";qi.textContent="Return to ship (R)";Object.assign(qi.style,{position:"fixed",top:"12px",right:"12px",display:"none",padding:"8px 12px",font:"13px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"8"});qi.onclick=()=>Ge.exit();document.body.appendChild(qi);const Nh=()=>{qi.style.display=It.get().mode==="fly"?"block":"none",Uh.style.display=It.get().mode==="fly"||It.get().mode==="exterior"||It.get().mode==="finale"?"none":"block";const i=It.get();["power","oxygen","hull"].forEach(t=>document.getElementById("m-"+t).style.width=i[t]+"%"),document.getElementById("room").textContent=i.mode==="cameo"?"SPORES":i.mode==="fly"?"MINING SECTOR":ze.rooms.get(i.room).name.toUpperCase(),document.getElementById("cargo").textContent=`CARGO ${i.cargo}/${i.cargoCap}   SCRAP ${i.scrap}   DEBT ${i.debt} cr`,document.getElementById("hint").textContent=i.mode==="cameo"?"Drag one spore onto another":i.mode==="fly"?"W/S thrust, A/D turn, arrows pitch, Z/C roll, E/Q up/down, Space mine, R/Esc return":"Click glowing doors, hatches and ladders. The pilot chair is at the Helm (nose)"};It.subscribe(Nh);Nh();addEventListener("resize",()=>{Qe.setSize(innerWidth,innerHeight),Ah()});let Fh=0,Oh=0;addEventListener("mousemove",i=>{Fh=i.clientX/innerWidth-.5,Oh=i.clientY/innerHeight-.5});let Ac=0;Qe.setAnimationLoop(i=>{const t=Math.min(.1,Math.max(.001,(i-Ac)/1e3));if(Ac=i,It.get().mode==="finale")return;if(It.get().mode==="cameo"){fs.update(t),fs.render(Qe);return}if(It.get().mode==="exterior"){ps.update(t),ps.render(Qe);return}if(It.get().mode==="fly"){Ge.update(t),hx.update(),Ge.render(Qe);return}ze.update(i);const e=ze.current.camPos;tn.position.set(e.x+Fh*.15,e.y-Oh*.1,e.z),tn.lookAt(ze.current.camLook),ze.render(Qe)});window.rm=ze;window.fly=Ge;window.store=It;window.lock=Rh;window.cameo=fs;window.bunk=Ch;window.narrator=Ha;window.exterior=ps;window.feedback=Ar;
