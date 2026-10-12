var _u=Object.defineProperty;var yu=(i,t,e)=>t in i?_u(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var H=(i,t,e)=>yu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="170",Mu=0,bl=1,bu=2,eh=1,Su=2,wn=3,$n=0,me=1,Ee=2,Vn=0,Bi=1,hn=2,Sl=3,wl=4,wu=5,ri=100,Eu=101,Tu=102,Au=103,Cu=104,Ru=200,Pu=201,Iu=202,Lu=203,zo=204,Ho=205,Du=206,Uu=207,Nu=208,Fu=209,Ou=210,ku=211,Bu=212,zu=213,Hu=214,Go=0,Vo=1,Wo=2,Gi=3,Xo=4,qo=5,Yo=6,$o=7,nh=0,Gu=1,Vu=2,Wn=0,Wu=1,Xu=2,qu=3,Yu=4,$u=5,ju=6,Ku=7,ih=300,Vi=301,Wi=302,jo=303,Ko=304,Fr=306,Jo=1e3,ai=1001,Zo=1002,We=1003,Ju=1004,Ns=1005,on=1006,Yr=1007,li=1008,Cn=1009,sh=1010,rh=1011,Ms=1012,Fa=1013,hi=1014,fn=1015,Es=1016,Oa=1017,ka=1018,Xi=1020,oh=35902,ah=1021,lh=1022,an=1023,ch=1024,hh=1025,zi=1026,qi=1027,Ba=1028,za=1029,uh=1030,Ha=1031,Ga=1033,mr=33776,gr=33777,vr=33778,xr=33779,Qo=35840,ta=35841,ea=35842,na=35843,ia=36196,sa=37492,ra=37496,oa=37808,aa=37809,la=37810,ca=37811,ha=37812,ua=37813,da=37814,fa=37815,pa=37816,ma=37817,ga=37818,va=37819,xa=37820,_a=37821,_r=36492,ya=36494,Ma=36495,dh=36283,ba=36284,Sa=36285,wa=36286,Zu=3200,Qu=3201,fh=0,td=1,Hn="",Ge="srgb",Ki="srgb-linear",Or="linear",te="srgb",gi=7680,El=519,ed=512,nd=513,id=514,ph=515,sd=516,rd=517,od=518,ad=519,Ea=35044,Tl="300 es",En=2e3,Er=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$r=Math.PI/180,Ta=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function ld(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,o,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],v=n[8],g=s[0],m=s[3],u=s[6],y=s[1],x=s[4],_=s[7],I=s[2],T=s[5],E=s[8];return r[0]=o*g+a*y+l*I,r[3]=o*m+a*x+l*T,r[6]=o*u+a*_+l*E,r[1]=c*g+h*y+d*I,r[4]=c*m+h*x+d*T,r[7]=c*u+h*_+d*E,r[2]=f*g+p*y+v*I,r[5]=f*m+p*x+v*T,r[8]=f*u+p*_+v*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,v=e*d+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=d*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Kr.makeScale(t,e)),this}rotate(t){return this.premultiply(Kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new Ft;function mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){const i=Tr("canvas");return i.style.display="block",i}const Al={};function ms(i){i in Al||(Al[i]=!0,console.warn(i))}function hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ud(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Hn?Or:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cl=[.64,.33,.3,.6,.15,.06],Rl=[.2126,.7152,.0722],Pl=[.3127,.329],Il=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Ki]:{primaries:Cl,whitePoint:Pl,transfer:Or,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:Rl,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:Cl,whitePoint:Pl,transfer:te,toXYZ:Il,fromXYZ:Ll,luminanceCoefficients:Rl,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});let vi;class fd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Tr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pd=0;class gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jr(s[o].image)):r.push(Jr(s[o]))}else r=Jr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Pe extends Ji{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=ai,s=ai,r=on,o=li,a=an,l=Cn,c=Pe.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Xn(),this.name="",this.source=new gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jo:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jo:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=ih;Pe.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(p+1)/2,I=(u+1)/2,T=(h+f)/4,E=(d+g)/4,R=(v+m)/4;return x>_&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=E/r,s=R/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(d-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends gd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vh extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vd extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(d!==g||l!==f||c!==p||h!==v){let m=1-a;const u=l*f+c*p+h*v+d*g,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const I=Math.sqrt(x),T=Math.atan2(I,u*y);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}const _=a*y;if(l=l*m+f*_,c=c*m+p*_,h=h*m+v*_,d=d*m+g*_,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+h*d+l*p-c*f,t[e+1]=l*v+h*f+c*d-a*p,t[e+2]=c*v+h*p+a*f-l*d,t[e+3]=h*v-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"YXZ":this._x=f*h*d+c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"ZXY":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d-f*p*v;break;case"ZYX":this._x=f*h*d-c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d+f*p*v;break;case"YZX":this._x=f*h*d+c*p*v,this._y=c*p*d+f*h*v,this._z=c*h*v-f*p*d,this._w=c*h*d-f*p*v;break;case"XZY":this._x=f*h*d-c*p*v,this._y=c*p*d-f*h*v,this._z=c*h*v+f*p*d,this._w=c*h*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new A,Dl=new ln;class fi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Os.subVectors(this.max,ns),xi.subVectors(t.a,ns),_i.subVectors(t.b,ns),yi.subVectors(t.c,ns),Dn.subVectors(_i,xi),Un.subVectors(yi,_i),Zn.subVectors(xi,yi);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Zn.z,Zn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Zn.z,0,-Zn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Zn.y,Zn.x,0];return!Qr(e,xi,_i,yi,Os)||(e=[1,0,0,0,1,0,0,0,1],!Qr(e,xi,_i,yi,Os))?!1:(ks.crossVectors(Dn,Un),e=[ks.x,ks.y,ks.z],Qr(e,xi,_i,yi,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new A,new A,new A,new A,new A,new A,new A,new A],tn=new A,Fs=new fi,xi=new A,_i=new A,yi=new A,Dn=new A,Un=new A,Zn=new A,ns=new A,Os=new A,ks=new A,Qn=new A;function Qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);const a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xd=new fi,is=new A,to=new A;class jn{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);const e=is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(to.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(to)),this.expandByPoint(is.copy(t.center).sub(to))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new A,eo=new A,Bs=new A,Nn=new A,no=new A,zs=new A,io=new A;class kr{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){eo.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),a=Nn.dot(this.direction),l=-Nn.dot(Bs),c=Nn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,v;if(h>0)if(d=o*l-a,f=o*a-l,v=r*h,d>=0)if(f>=-v)if(f<=v){const g=1/h;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(eo).addScaledVector(Bs,f),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){no.subVectors(e,t),zs.subVectors(n,t),io.crossVectors(no,zs);let o=this.direction.dot(io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const l=a*this.direction.dot(zs.crossVectors(Nn,zs));if(l<0)return null;const c=a*this.direction.dot(no.cross(Nn));if(c<0||l+c>o)return null;const h=-a*Nn.dot(io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,o,a,l,c,h,d,f,p,v,g,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,p,v,g,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,p,v,g,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=v,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*d,v=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+v*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,v=c*h,g=c*d;e[0]=f+g*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-v,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,v=c*h,g=c*d;e[0]=f-g*a,e[4]=-o*d,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,v=a*h,g=a*d;e[0]=l*h,e[4]=v*c-p,e[8]=f*c+g,e[1]=l*d,e[5]=g*c+f,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*h,e[4]=g-f*d,e[8]=v*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+v,e[10]=f-g*d}else if(t.order==="XZY"){const f=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+g,e[5]=o*h,e[9]=p*d-v,e[2]=v*d-p,e[6]=a*h,e[10]=g*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_d,t,yd)}lookAt(t,e,n){const s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Fn.crossVectors(n,ze),Fn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Fn.crossVectors(n,ze)),Fn.normalize(),Hs.crossVectors(ze,Fn),s[0]=Fn.x,s[4]=Hs.x,s[8]=ze.x,s[1]=Fn.y,s[5]=Hs.y,s[9]=ze.y,s[2]=Fn.z,s[6]=Hs.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],u=n[14],y=n[3],x=n[7],_=n[11],I=n[15],T=s[0],E=s[4],R=s[8],S=s[12],M=s[1],P=s[5],k=s[9],L=s[13],W=s[2],$=s[6],X=s[10],z=s[14],O=s[3],Z=s[7],ft=s[11],lt=s[15];return r[0]=o*T+a*M+l*W+c*O,r[4]=o*E+a*P+l*$+c*Z,r[8]=o*R+a*k+l*X+c*ft,r[12]=o*S+a*L+l*z+c*lt,r[1]=h*T+d*M+f*W+p*O,r[5]=h*E+d*P+f*$+p*Z,r[9]=h*R+d*k+f*X+p*ft,r[13]=h*S+d*L+f*z+p*lt,r[2]=v*T+g*M+m*W+u*O,r[6]=v*E+g*P+m*$+u*Z,r[10]=v*R+g*k+m*X+u*ft,r[14]=v*S+g*L+m*z+u*lt,r[3]=y*T+x*M+_*W+I*O,r[7]=y*E+x*P+_*$+I*Z,r[11]=y*R+x*k+_*X+I*ft,r[15]=y*S+x*L+_*z+I*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],v=t[3],g=t[7],m=t[11],u=t[15];return v*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+g*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],v=t[12],g=t[13],m=t[14],u=t[15],y=d*m*c-g*f*c+g*l*p-a*m*p-d*l*u+a*f*u,x=v*f*c-h*m*c-v*l*p+o*m*p+h*l*u-o*f*u,_=h*g*c-v*d*c+v*a*p-o*g*p-h*a*u+o*d*u,I=v*d*l-h*g*l-v*a*f+o*g*f+h*a*m-o*d*m,T=e*y+n*x+s*_+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(g*f*r-d*m*r-g*s*p+n*m*p+d*s*u-n*f*u)*E,t[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*u+n*l*u)*E,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*E,t[4]=x*E,t[5]=(h*m*r-v*f*r+v*s*p-e*m*p-h*s*u+e*f*u)*E,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*u-e*l*u)*E,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*E,t[8]=_*E,t[9]=(v*d*r-h*g*r-v*n*p+e*g*p+h*n*u-e*d*u)*E,t[10]=(o*g*r-v*a*r+v*n*c-e*g*c-o*n*u+e*a*u)*E,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*E,t[12]=I*E,t[13]=(h*g*s-v*d*s+v*n*f-e*g*f-h*n*m+e*d*m)*E,t[14]=(v*a*s-o*g*s-v*n*l+e*g*l+o*n*m-e*a*m)*E,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,v=r*d,g=o*h,m=o*d,u=a*d,y=l*c,x=l*h,_=l*d,I=n.x,T=n.y,E=n.z;return s[0]=(1-(g+u))*I,s[1]=(p+_)*I,s[2]=(v-x)*I,s[3]=0,s[4]=(p-_)*T,s[5]=(1-(f+u))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(v+x)*E,s[9]=(m-y)*E,s[10]=(1-(f+g))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const c=1/r,h=1/o,d=1/a;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,v;if(a===En)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Er)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,p=(n+s)*h;let v,g;if(a===En)v=(o+r)*d,g=-2*d;else if(a===Er)v=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new A,en=new Kt,_d=new A(0,0,0),yd=new A(1,1,1),Fn=new A,Hs=new A,ze=new A,Ul=new Kt,Nl=new ln;class Fe{constructor(t=0,e=0,n=0,s=Fe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fe.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Md=0;const Fl=new A,bi=new ln,yn=new Kt,Gs=new A,ss=new A,bd=new A,Sd=new ln,Ol=new A(1,0,0),kl=new A(0,1,0),Bl=new A(0,0,1),zl={type:"added"},wd={type:"removed"},Si={type:"childadded",child:null},so={type:"childremoved",child:null};class _e extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new A,e=new Fe,n=new ln,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ft}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Bl,t)}translateOnAxis(t,e){return Fl.copy(t).applyQuaternion(this.quaternion),this.position.add(Fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(ss,Gs,this.up):yn.lookAt(Gs,ss,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(yn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zl),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wd),so.child=t,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zl),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new A(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new A,Mn=new A,ro=new A,bn=new A,wi=new A,Ei=new A,Hl=new A,oo=new A,ao=new A,lo=new A,co=new ne,ho=new ne,uo=new ne;class je{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),Mn.subVectors(n,e),ro.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(Mn),l=nn.dot(ro),c=Mn.dot(Mn),h=Mn.dot(ro),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(a,bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(ho,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),Mn.subVectors(t,e),nn.cross(Mn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),nn.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,n),Ei.subVectors(r,n),oo.subVectors(t,n);const l=wi.dot(oo),c=Ei.dot(oo);if(l<=0&&c<=0)return e.copy(n);ao.subVectors(t,s);const h=wi.dot(ao),d=Ei.dot(ao);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(wi,o);lo.subVectors(t,r);const p=wi.dot(lo),v=Ei.dot(lo);if(v>=0&&p<=v)return e.copy(r);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Ei,a);const m=h*v-p*d;if(m<=0&&d-h>=0&&p-v>=0)return Hl.subVectors(r,s),a=(d-h)/(d-h+(p-v)),e.copy(s).addScaledVector(Hl,a);const u=1/(m+g+f);return o=g*u,a=f*u,e.copy(n).addScaledVector(wi,o).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=ld(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=fo(o,r,t+1/3),this.g=fo(o,r,t),this.b=fo(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return $t.fromWorkingColorSpace(Re.copy(this),t),Math.round(we(Re.r*255,0,255))*65536+Math.round(we(Re.g*255,0,255))*256+Math.round(we(Re.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ge){$t.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Vs);const n=jr(On.h,Vs.h,e),s=jr(On.s,Vs.s,e),r=jr(On.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new wt;wt.NAMES=xh;let Ed=0;class Kn extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Xn(),this.name="",this.blending=Bi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Ho,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yt extends Kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new A,Ws=new rt;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}}class _h extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class yh extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ht extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Td=0;const $e=new Kt,po=new _e,Ti=new A,He=new fi,rs=new fi,Se=new A;class ce extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mh(t)?yh:_h)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return po.lookAt(t),po.updateMatrix(),this.applyMatrix4(po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(He.min,rs.min),He.expandByPoint(Se),Se.addVectors(He.max,rs.max),He.expandByPoint(Se)):(He.expandByPoint(rs.min),He.expandByPoint(rs.max))}He.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),Se.add(Ti)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new A,l[R]=new A;const c=new A,h=new A,d=new A,f=new rt,p=new rt,v=new rt,g=new A,m=new A;function u(R,S,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),v.sub(f);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(P),a[R].add(g),a[S].add(g),a[M].add(g),l[R].add(m),l[S].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,S=y.length;R<S;++R){const M=y[R],P=M.start,k=M.count;for(let L=P,W=P+k;L<W;L+=3)u(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new A,_=new A,I=new A,T=new A;function E(R){I.fromBufferAttribute(s,R),T.copy(I);const S=a[R];x.copy(S),x.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(T,S);const P=_.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=y.length;R<S;++R){const M=y[R],P=M.start,k=M.count;for(let L=P,W=P+k;L<W;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,d=new A;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let u=0;u<h;u++)f[v++]=c[p++]}return new Te(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ce,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new Kt,ti=new kr,Xs=new jn,Vl=new A,qs=new A,Ys=new A,$s=new A,mo=new A,js=new A,Wl=new A,Ks=new A;class st extends _e{constructor(t=new ce,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(mo.fromBufferAttribute(d,t),o?js.addScaledVector(mo,h):js.addScaledVector(mo.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Xs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Xs,Vl)===null||ti.origin.distanceToSquared(Vl)>(t.far-t.near)**2))&&(Gl.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],u=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,I=x;_<I;_+=3){const T=a.getX(_),E=a.getX(_+1),R=a.getX(_+2);s=Js(this,u,t,n,c,h,d,T,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,u=g;m<u;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Js(this,o,t,n,c,h,d,y,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],u=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,I=x;_<I;_+=3){const T=_,E=_+1,R=_+2;s=Js(this,u,t,n,c,h,d,T,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,u=g;m<u;m+=3){const y=m,x=m+1,_=m+2;s=Js(this,o,t,n,c,h,d,y,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ad(i,t,e,n,s,r,o,a){let l;if(t.side===me?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===$n,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ks);return c<e.near||c>e.far?null:{distance:c,point:Ks.clone(),object:i}}function Js(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,Ys),i.getVertexPosition(c,$s);const h=Ad(i,t,e,n,qs,Ys,$s,Wl);if(h){const d=new A;je.getBarycoord(Wl,qs,Ys,$s,d),s&&(h.uv=je.getInterpolatedAttribute(s,a,l,c,d,new rt)),r&&(h.uv1=je.getInterpolatedAttribute(r,a,l,c,d,new rt)),o&&(h.normal=je.getInterpolatedAttribute(o,a,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new A,materialIndex:0};je.getNormal(qs,Ys,$s,f.normal),h.face=f,h.barycoord=d}return h}class ie extends ce{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(h,3)),this.setAttribute("uv",new Ht(d,2));function v(g,m,u,y,x,_,I,T,E,R,S){const M=_/E,P=I/R,k=_/2,L=I/2,W=T/2,$=E+1,X=R+1;let z=0,O=0;const Z=new A;for(let ft=0;ft<X;ft++){const lt=ft*P-L;for(let Pt=0;Pt<$;Pt++){const zt=Pt*M-k;Z[g]=zt*y,Z[m]=lt*x,Z[u]=W,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[u]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Pt/E),d.push(1-ft/R),z+=1}}for(let ft=0;ft<R;ft++)for(let lt=0;lt<E;lt++){const Pt=f+lt+$*ft,zt=f+lt+$*(ft+1),q=f+(lt+1)+$*(ft+1),tt=f+(lt+1)+$*ft;l.push(Pt,zt,tt),l.push(zt,q,tt),O+=6}a.addGroup(p,O,S),p+=O,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Le(i){const t={};for(let e=0;e<i.length;e++){const n=Yi(i[e]);for(const s in n)t[s]=n[s]}return t}function Cd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Rd={clone:Yi,merge:Le};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Cd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new A,Xl=new rt,ql=new rt;class Ve extends bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,ql),e.subVectors(ql,Xl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ci=1;class Ld extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const o=new Ve(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const l=new Ve(Ai,Ci,t,e);l.layers=this.layers,this.add(l);const c=new Ve(Ai,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Sh extends Pe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Vi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dd extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Sh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:me,blending:Vn});r.uniforms.tEquirect.value=e;const o=new st(s,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=on),new Ld(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const go=new A,Ud=new A,Nd=new Ft;class zn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=go.subVectors(n,e).cross(Ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Nd.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new jn,Zs=new A;class Wa{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],u=s[12],y=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-u).normalize(),n[1].setComponents(l+r,f+c,m+p,_+u).normalize(),n[2].setComponents(l+o,f+h,m+v,_+y).normalize(),n[3].setComponents(l-o,f-h,m-v,_-y).normalize(),n[4].setComponents(l-a,f-d,m-g,_-x).normalize(),e===En)n[5].setComponents(l+a,f+d,m+g,_+x).normalize();else if(e===Er)n[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],g=d[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const g=d[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Pn extends ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],v=[],g=[],m=[];for(let u=0;u<h;u++){const y=u*f-o;for(let x=0;x<c;x++){const _=x*d-r;v.push(_,-y,0),g.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){const x=y+c*u,_=y+c*(u+1),I=y+1+c*(u+1),T=y+1+c*u;p.push(x,_,T),p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
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
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ef=`#ifdef USE_GRADIENTMAP
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
}`,Tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#endif`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,Ff=`struct PhysicalMaterial {
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
}`,Of=`
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ip=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`#include <common>
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
}`,Wp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,qp=`#define DISTANCE
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
}`,Yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,em=`#define MATCAP
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
}`,nm=`#define MATCAP
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
}`,im=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,rm=`#define PHONG
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
}`,om=`#define PHONG
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
}`,am=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,cm=`#define TOON
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
}`,hm=`#define TOON
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
}`,um=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,pm=`uniform vec3 color;
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
}`,mm=`uniform float rotation;
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
}`,gm=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Od,alphahash_pars_fragment:kd,alphamap_fragment:Bd,alphamap_pars_fragment:zd,alphatest_fragment:Hd,alphatest_pars_fragment:Gd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:$d,bsdfs:jd,iridescence_fragment:Kd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Zd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:tf,clipping_planes_vertex:ef,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:of,common:af,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:vf,envmap_pars_fragment:xf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:bf,fog_fragment:Sf,fog_pars_fragment:wf,gradientmap_pars_fragment:Ef,lightmap_pars_fragment:Tf,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Cf,lights_pars_begin:Rf,lights_toon_fragment:If,lights_toon_pars_fragment:Lf,lights_phong_fragment:Df,lights_phong_pars_fragment:Uf,lights_physical_fragment:Nf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:kf,lights_fragment_end:Bf,logdepthbuf_fragment:zf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Vf,map_fragment:Wf,map_pars_fragment:Xf,map_particle_fragment:qf,map_particle_pars_fragment:Yf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:jf,morphinstance_vertex:Kf,morphcolor_vertex:Jf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Qf,morphtarget_vertex:tp,normal_fragment_begin:ep,normal_fragment_maps:np,normal_pars_fragment:ip,normal_pars_vertex:sp,normal_vertex:rp,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:cp,iridescence_pars_fragment:hp,opaque_fragment:up,packing:dp,premultiplied_alpha_fragment:fp,project_vertex:pp,dithering_fragment:mp,dithering_pars_fragment:gp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:xp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:yp,shadowmap_vertex:Mp,shadowmask_pars_fragment:bp,skinbase_vertex:Sp,skinning_pars_vertex:wp,skinning_vertex:Ep,skinnormal_vertex:Tp,specularmap_fragment:Ap,specularmap_pars_fragment:Cp,tonemapping_fragment:Rp,tonemapping_pars_fragment:Pp,transmission_fragment:Ip,transmission_pars_fragment:Lp,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Np,worldpos_vertex:Fp,background_vert:Op,background_frag:kp,backgroundCube_vert:Bp,backgroundCube_frag:zp,cube_vert:Hp,cube_frag:Gp,depth_vert:Vp,depth_frag:Wp,distanceRGBA_vert:Xp,distanceRGBA_frag:qp,equirect_vert:Yp,equirect_frag:$p,linedashed_vert:jp,linedashed_frag:Kp,meshbasic_vert:Jp,meshbasic_frag:Zp,meshlambert_vert:Qp,meshlambert_frag:tm,meshmatcap_vert:em,meshmatcap_frag:nm,meshnormal_vert:im,meshnormal_frag:sm,meshphong_vert:rm,meshphong_frag:om,meshphysical_vert:am,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:fm,shadow_frag:pm,sprite_vert:mm,sprite_frag:gm},ot={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},un={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new wt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new wt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};un.physical={uniforms:Le([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Qs={r:0,b:0,g:0},ni=new Fe,vm=new Kt;function xm(i,t,e,n,s,r,o){const a=new wt(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function v(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const _=v(y);_===null?u(a,l):_&&_.isColor&&(u(_,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const _=v(x);_&&(_.isCubeTexture||_.mapping===Fr)?(h===void 0&&(h=new st(new ie(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Yi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(x.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(ni)),h.material.toneMapped=$t.getTransfer(_.colorSpace)!==te,(d!==_||f!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=_,f=_.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new st(new Pn(2,2),new Rn({name:"BackgroundMaterial",uniforms:Yi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$t.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,x){y.getRGB(Qs,Mh(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:g,addToRenderList:m}}function _m(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,P,k,L,W){let $=!1;const X=d(L,k,P);r!==X&&(r=X,c(r.object)),$=p(M,L,k,W),$&&v(M,L,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,_(M,P,k,L),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,P,k){const L=k.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let X=$[L];return X===void 0&&(X=f(l()),$[L]=X),X}function f(M){const P=[],k=[],L=[];for(let W=0;W<e;W++)P[W]=0,k[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,P,k,L){const W=r.attributes,$=P.attributes;let X=0;const z=k.getAttributes();for(const O in z)if(z[O].location>=0){const ft=W[O];let lt=$[O];if(lt===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),ft===void 0||ft.attribute!==lt||lt&&ft.data!==lt.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function v(M,P,k,L){const W={},$=P.attributes;let X=0;const z=k.getAttributes();for(const O in z)if(z[O].location>=0){let ft=$[O];ft===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));const lt={};lt.attribute=ft,ft&&ft.data&&(lt.data=ft.data),W[O]=lt,X++}r.attributes=W,r.attributesNum=X,r.index=L}function g(){const M=r.newAttributes;for(let P=0,k=M.length;P<k;P++)M[P]=0}function m(M){u(M,0)}function u(M,P){const k=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;k[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function y(){const M=r.newAttributes,P=r.enabledAttributes;for(let k=0,L=P.length;k<L;k++)P[k]!==M[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function x(M,P,k,L,W,$,X){X===!0?i.vertexAttribIPointer(M,P,k,W,$):i.vertexAttribPointer(M,P,k,L,W,$)}function _(M,P,k,L){g();const W=L.attributes,$=k.getAttributes(),X=P.defaultAttributeValues;for(const z in $){const O=$[z];if(O.location>=0){let Z=W[z];if(Z===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){const ft=Z.normalized,lt=Z.itemSize,Pt=t.get(Z);if(Pt===void 0)continue;const zt=Pt.buffer,q=Pt.type,tt=Pt.bytesPerElement,vt=q===i.INT||q===i.UNSIGNED_INT||Z.gpuType===Fa;if(Z.isInterleavedBufferAttribute){const it=Z.data,St=it.stride,Dt=Z.offset;if(it.isInstancedInterleavedBuffer){for(let Bt=0;Bt<O.locationSize;Bt++)u(O.location+Bt,it.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Bt=0;Bt<O.locationSize;Bt++)m(O.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Bt=0;Bt<O.locationSize;Bt++)x(O.location+Bt,lt/O.locationSize,q,ft,St*tt,(Dt+lt/O.locationSize*Bt)*tt,vt)}else{if(Z.isInstancedBufferAttribute){for(let it=0;it<O.locationSize;it++)u(O.location+it,Z.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let it=0;it<O.locationSize;it++)m(O.location+it);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let it=0;it<O.locationSize;it++)x(O.location+it,lt/O.locationSize,q,ft,lt*tt,lt/O.locationSize*it*tt,vt)}}else if(X!==void 0){const ft=X[z];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(O.location,ft);break;case 3:i.vertexAttrib3fv(O.location,ft);break;case 4:i.vertexAttrib4fv(O.location,ft);break;default:i.vertexAttrib1fv(O.location,ft)}}}}y()}function I(){R();for(const M in n){const P=n[M];for(const k in P){const L=P[k];for(const W in L)h(L[W].object),delete L[W];delete P[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const k in P){const L=P[k];for(const W in L)h(L[W].object),delete L[W];delete P[k]}delete n[M.id]}function E(M){for(const P in n){const k=n[P];if(k[M.id]===void 0)continue;const L=k[M.id];for(const W in L)h(L[W].object),delete L[W];delete k[M.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function ym(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let v=0;v<d;v++)p+=h[v];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=h[g]*f[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==an&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const R=E===Es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Cn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==fn&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:I,maxSamples:T}}function bm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new zn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let _=u.clippingState||null;l.value=_,_=h(v,f,x,p);for(let I=0;I!==x;++I)_[I]=e[I];u.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const u=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,_=p;x!==g;++x,_+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Sm(i){let t=new WeakMap;function e(o,a){return a===jo?o.mapping=Vi:a===Ko&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jo||a===Ko)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Eh extends bh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Oi=4,Yl=[.125,.215,.35,.446,.526,.582],oi=20,vo=new Eh,$l=new wt;let xo=null,_o=0,yo=0,Mo=!1;const si=(1+Math.sqrt(5))/2,Ri=1/si,jl=[new A(-si,Ri,0),new A(si,Ri,0),new A(-Ri,0,si),new A(Ri,0,si),new A(0,si,-Ri),new A(0,si,Ri),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){xo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xo,_o,yo),this._renderer.xr.enabled=Mo,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Es,format:an,colorSpace:Ki,depthBuffer:!1},s=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(r)),this._blurMaterial=Em(r,t,e)}return s}_compileMaterial(t){const e=new st(this._lodPlanes[0],t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,n,s){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($l),h.toneMapping=Wn,h.autoClear=!1;const p=new Yt({name:"PMREM.Background",side:me,depthWrite:!1,depthTest:!1}),v=new st(new ie,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy($l),g=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;tr(s,y*x,u>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jl[(s-r-1)%jl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new st(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*oi-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):oi;m>oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oi}`);const u=[];let y=0;for(let E=0;E<oi;++E){const R=E/g,S=Math.exp(-R*R/2);u.push(S),E===0?y+=S:E<m&&(y+=2*S)}for(let E=0;E<u.length;E++)u[E]=u[E]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const _=this._sizeLods[s],I=3*_*(s>x-Oi?s-x+Oi:0),T=4*(this._cubeSize-_);tr(e,I,T,3*_,2*_),l.setRenderTarget(e),l.render(d,vo)}}function wm(i){const t=[],e=[],n=[];let s=i;const r=i-Oi+1+Yl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Oi?l=Yl[o-i+Oi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,v=6,g=3,m=2,u=1,y=new Float32Array(g*v*p),x=new Float32Array(m*v*p),_=new Float32Array(u*v*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,R=T>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];y.set(S,g*v*T),x.set(f,m*v*T);const M=[T,T,T,T,T,T];_.set(M,u*v*T)}const I=new ce;I.setAttribute("position",new Te(y,g)),I.setAttribute("uv",new Te(x,m)),I.setAttribute("faceIndex",new Te(_,u)),t.push(I),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jl(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Em(i,t,e){const n=new Float32Array(oi),s=new A(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zl(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ql(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function Tm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===jo||l===Ko,h=l===Vi||l===Wi;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Kl(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Kl(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Am(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cm(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,u=g.length;m<u;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const g=p[v];for(let m=0,u=g.length;m<u;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let x=0,_=y.length;x<_;x+=3){const I=y[x+0],T=y[x+1],E=y[x+2];f.push(I,T,T,E,E,I)}}else if(v!==void 0){const y=v.array;g=v.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const I=x+0,T=x+1,E=x+2;f.push(I,T,T,E,E,I)}}else return;const m=new(mh(f)?yh:_h)(f,1);m.version=g;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Rm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*o,v),e.update(p,n,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];e.update(m,n,1)}function d(f,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],g[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,v);let u=0;for(let y=0;y<v;y++)u+=p[y]*g[y];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Pm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Im(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let I=a.attributes.position.count*_,T=1;I>t.maxTextureSize&&(T=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const E=new Float32Array(I*T*4*d),R=new vh(E,I,T,d);R.type=fn,R.needsUpdate=!0;const S=_*4;for(let P=0;P<d;P++){const k=u[P],L=y[P],W=x[P],$=I*T*4*P;for(let X=0;X<k.count;X++){const z=X*S;v===!0&&(s.fromBufferAttribute(k,X),E[$+z+0]=s.x,E[$+z+1]=s.y,E[$+z+2]=s.z,E[$+z+3]=0),g===!0&&(s.fromBufferAttribute(L,X),E[$+z+4]=s.x,E[$+z+5]=s.y,E[$+z+6]=s.z,E[$+z+7]=0),m===!0&&(s.fromBufferAttribute(W,X),E[$+z+8]=s.x,E[$+z+9]=s.y,E[$+z+10]=s.z,E[$+z+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new rt(I,T)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Lm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Th extends Pe{constructor(t,e,n,s,r,o,a,l,c,h=zi){if(h!==zi&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=hi),n===void 0&&h===qi&&(n=Xi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ah=new Pe,tc=new Th(1,1),Ch=new vh,Rh=new vd,Ph=new Sh,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Br(i,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;rc.set(n),i.uniformMatrix2fv(this.addr,!1,rc),be(e,n)}}function km(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;sc.set(n),i.uniformMatrix3fv(this.addr,!1,sc),be(e,n)}}function Bm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;ic.set(n),i.uniformMatrix4fv(this.addr,!1,ic),be(e,n)}}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function $m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=ph,r=tc):r=Ah,e.setTexture2D(t||r,s)}function jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rh,s)}function Km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ph,s)}function Jm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ch,s)}function Zm(i){switch(i){case 5126:return Dm;case 35664:return Um;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return zm;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}function Qm(i,t){i.uniform1fv(this.addr,t)}function t0(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function e0(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function n0(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function i0(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s0(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r0(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o0(i,t){i.uniform1iv(this.addr,t)}function a0(i,t){i.uniform2iv(this.addr,t)}function l0(i,t){i.uniform3iv(this.addr,t)}function c0(i,t){i.uniform4iv(this.addr,t)}function h0(i,t){i.uniform1uiv(this.addr,t)}function u0(i,t){i.uniform2uiv(this.addr,t)}function d0(i,t){i.uniform3uiv(this.addr,t)}function f0(i,t){i.uniform4uiv(this.addr,t)}function p0(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ah,r[o])}function m0(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rh,r[o])}function g0(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ph,r[o])}function v0(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ch,r[o])}function x0(i){switch(i){case 5126:return Qm;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return u0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return v0}}class _0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zm(e.type)}}class y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x0(e.type)}}class M0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function oc(i,t){i.seq.push(t),i.map[t.id]=t}function b0(i,t,e){const n=i.name,s=n.length;for(bo.lastIndex=0;;){const r=bo.exec(n),o=bo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){oc(e,c===void 0?new _0(a,i,t):new y0(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new M0(a),oc(e,d)),e=d}}}class yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);b0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const S0=37297;let w0=0;function E0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const lc=new Ft;function T0(i){$t._getMatrix(lc,$t.workingColorSpace,i);const t=`mat3( ${lc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case Or:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(t),o)}else return s}function A0(i,t){const e=T0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function C0(i,t){let e;switch(t){case Wu:e="Linear";break;case Xu:e="Reinhard";break;case qu:e="Cineon";break;case Yu:e="ACESFilmic";break;case ju:e="AgX";break;case Ku:e="Neutral";break;case $u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new A;function R0(){$t.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function I0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function hc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(D0,N0)}const U0=new Map;function N0(i,t){let e=kt[t];if(e===void 0){const n=U0.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Aa(e)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(i){return i.replace(F0,O0)}function O0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function k0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function B0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Fr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function H0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nh:t="ENVMAP_BLENDING_MULTIPLY";break;case Gu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function G0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function V0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=k0(e),c=B0(e),h=z0(e),d=H0(e),f=G0(e),p=P0(e),v=I0(r),g=s.createProgram();let m,u,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(gs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(gs).join(`
`),u.length>0&&(u+=`
`)):(m=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),u=[fc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?C0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,A0("linearToOutputTexel",e.outputColorSpace),R0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=Aa(o),o=hc(o,e),o=uc(o,e),a=Aa(a),a=hc(a,e),a=uc(a,e),o=dc(o),a=dc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=y+m+o,_=y+u+a,I=ac(s,s.VERTEX_SHADER,x),T=ac(s,s.FRAGMENT_SHADER,_);s.attachShader(g,I),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(g).trim(),L=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(T).trim();let $=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,I,T);else{const z=cc(s,I,"vertex"),O=cc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+z+`
`+O)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:$,programLog:k,vertexShader:{log:L,prefix:m},fragmentShader:{log:W,prefix:u}})}s.deleteShader(I),s.deleteShader(T),R=new yr(s,g),S=L0(s,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,S0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=T,this}let W0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new q0(t),e.set(t,n)),n}}class q0{constructor(t){this.id=W0++,this.code=t,this.usedTimes=0}}function Y0(i,t,e,n,s,r,o){const a=new Va,l=new X0,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,k,L){const W=k.fog,$=L.geometry,X=S.isMeshStandardMaterial?k.environment:null,z=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),O=z&&z.mapping===Fr?z.image.height:null,Z=v[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,lt=ft!==void 0?ft.length:0;let Pt=0;$.morphAttributes.position!==void 0&&(Pt=1),$.morphAttributes.normal!==void 0&&(Pt=2),$.morphAttributes.color!==void 0&&(Pt=3);let zt,q,tt,vt;if(Z){const Qt=un[Z];zt=Qt.vertexShader,q=Qt.fragmentShader}else zt=S.vertexShader,q=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const it=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,Bt=L.isBatchedMesh===!0,he=!!S.map,Xt=!!S.matcap,ge=!!z,F=!!S.aoMap,qe=!!S.lightMap,Gt=!!S.bumpMap,Vt=!!S.normalMap,Tt=!!S.displacementMap,oe=!!S.emissiveMap,Et=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,B=S.clearcoat>0,K=S.dispersion>0,Q=S.iridescence>0,j=S.sheen>0,Mt=S.transmission>0,ct=b&&!!S.anisotropyMap,pt=B&&!!S.clearcoatMap,qt=B&&!!S.clearcoatNormalMap,et=B&&!!S.clearcoatRoughnessMap,mt=Q&&!!S.iridescenceMap,Ct=Q&&!!S.iridescenceThicknessMap,It=j&&!!S.sheenColorMap,gt=j&&!!S.sheenRoughnessMap,Wt=!!S.specularMap,Ot=!!S.specularColorMap,se=!!S.specularIntensityMap,D=Mt&&!!S.transmissionMap,at=Mt&&!!S.thicknessMap,Y=!!S.gradientMap,J=!!S.alphaMap,dt=S.alphaTest>0,ht=!!S.alphaHash,Ut=!!S.extensions;let fe=Wn;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(fe=i.toneMapping);const Ae={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:zt,fragmentShader:q,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:he,matcap:Xt,envMap:ge,envMapMode:ge&&z.mapping,envMapCubeUVHeight:O,aoMap:F,lightMap:qe,bumpMap:Gt,normalMap:Vt,displacementMap:f&&Tt,emissiveMap:oe,normalMapObjectSpace:Vt&&S.normalMapType===td,normalMapTangentSpace:Vt&&S.normalMapType===fh,metalnessMap:Et,roughnessMap:C,anisotropy:b,anisotropyMap:ct,clearcoat:B,clearcoatMap:pt,clearcoatNormalMap:qt,clearcoatRoughnessMap:et,dispersion:K,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:j,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:se,transmission:Mt,transmissionMap:D,thicknessMap:at,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Bi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:dt,alphaHash:ht,combine:S.combine,mapUv:he&&g(S.map.channel),aoMapUv:F&&g(S.aoMap.channel),lightMapUv:qe&&g(S.lightMap.channel),bumpMapUv:Gt&&g(S.bumpMap.channel),normalMapUv:Vt&&g(S.normalMap.channel),displacementMapUv:Tt&&g(S.displacementMap.channel),emissiveMapUv:oe&&g(S.emissiveMap.channel),metalnessMapUv:Et&&g(S.metalnessMap.channel),roughnessMapUv:C&&g(S.roughnessMap.channel),anisotropyMapUv:ct&&g(S.anisotropyMap.channel),clearcoatMapUv:pt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:qt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(S.sheenRoughnessMap.channel),specularMapUv:Wt&&g(S.specularMap.channel),specularColorMapUv:Ot&&g(S.specularColorMap.channel),specularIntensityMapUv:se&&g(S.specularIntensityMap.channel),transmissionMapUv:D&&g(S.transmissionMap.channel),thicknessMapUv:at&&g(S.thicknessMap.channel),alphaMapUv:J&&g(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Vt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!$.attributes.uv&&(he||J),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:St,skinning:L.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:he&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===te,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===te,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ee,flipSided:S.side===me,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const M=v[S.type];let P;if(M){const k=un[M];P=Rd.clone(k.uniforms)}else P=S.uniforms;return P}function I(S,M){let P;for(let k=0,L=h.length;k<L;k++){const W=h[k];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new V0(i,M,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:I,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:R}}function $0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function j0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function mc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,v,g,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=g,u.group=m),t++,u}function a(d,f,p,v,g,m){const u=o(d,f,p,v,g,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,v,g,m){const u=o(d,f,p,v,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||j0),n.length>1&&n.sort(f||pc),s.length>1&&s.sort(f||pc)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function K0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new mc,i.set(n,[o])):s>=r.length?(o=new mc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function J0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new wt};break;case"SpotLight":e={position:new A,direction:new A,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Z0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Q0=0;function tg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function eg(i){const t=new J0,e=Z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new Kt,o=new Kt;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,u=0,y=0,x=0,_=0,I=0,T=0,E=0;c.sort(tg);for(let S=0,M=c.length;S<M;S++){const P=c[S],k=P.color,L=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*L,d+=k.g*L,f+=k.b*L;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],L);E++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,O=e.get(P);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(k).multiplyScalar(L),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;const z=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=z.matrix,P.castShadow){const O=e.get(P);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.spotShadow[g]=O,n.spotShadowMap[g]=$,_++}g++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(k).multiplyScalar(L),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const z=P.shadow,O=e.get(P);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,n.pointShadow[v]=O,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=P.shadow.matrix,x++}n.point[v]=X,v++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(L),X.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[u]=X,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==v||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==I||R.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.directionalLength=p,R.pointLength=v,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=I,R.numLightProbes=E,n.version=Q0++)}function l(c,h){let d=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let u=0,y=c.length;u<y;u++){const x=c[u];if(x.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function gc(i){const t=new eg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ng(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gc(i),t.set(s,[a])):r>=o.length?(a=new gc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ig extends Kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sg extends Kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
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
}`;function ag(i,t,e){let n=new Wa;const s=new rt,r=new rt,o=new ne,a=new ig({depthPacking:Qu}),l=new sg,c={},h=e.maxTextureSize,d={[$n]:me,[me]:$n,[Ee]:Ee},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:rg,fragmentShader:og}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new ce;v.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new st(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let u=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Vn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=u!==wn&&this.type===wn,W=u===wn&&this.type!==wn;for(let $=0,X=T.length;$<X;$++){const z=T[$],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Z=O.getFrameExtents();if(s.multiply(Z),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||L===!0||W===!0){const lt=this.type!==wn?{minFilter:We,magFilter:We}:{};O.map!==null&&O.map.dispose(),O.map=new ui(s.x,s.y,lt),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const ft=O.getViewportCount();for(let lt=0;lt<ft;lt++){const Pt=O.getViewport(lt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(o),O.updateMatrices(z,lt),n=O.getFrustum(),_(E,R,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===wn&&y(O,R),O.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,P)};function y(T,E){const R=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ui(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,R,f,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,R,p,g,null)}function x(T,E,R,S){let M=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const k=M.uuid,L=E.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let $=W[L];$===void 0&&($=M.clone(),W[L]=$,E.addEventListener("dispose",I)),M=$}if(M.visible=E.visible,M.wireframe=E.wireframe,S===wn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=R}return M}function _(T,E,R,S,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const L=t.update(T),W=T.material;if(Array.isArray(W)){const $=L.groups;for(let X=0,z=$.length;X<z;X++){const O=$[X],Z=W[O.materialIndex];if(Z&&Z.visible){const ft=x(T,Z,S,M);T.onBeforeShadow(i,T,E,R,L,ft,O),i.renderBufferDirect(R,null,L,ft,T,O),T.onAfterShadow(i,T,E,R,L,ft,O)}}}else if(W.visible){const $=x(T,W,S,M);T.onBeforeShadow(i,T,E,R,L,$,null),i.renderBufferDirect(R,null,L,$,T,null),T.onAfterShadow(i,T,E,R,L,$,null)}}const k=T.children;for(let L=0,W=k.length;L<W;L++)_(k[L],E,R,S,M)}function I(T){T.target.removeEventListener("dispose",I);for(const R in c){const S=c[R],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const lg={[Go]:Vo,[Wo]:Yo,[Xo]:$o,[Gi]:qo,[Vo]:Go,[Yo]:Wo,[$o]:Xo,[qo]:Gi};function cg(i,t){function e(){let D=!1;const at=new ne;let Y=null;const J=new ne(0,0,0,0);return{setMask:function(dt){Y!==dt&&!D&&(i.colorMask(dt,dt,dt,dt),Y=dt)},setLocked:function(dt){D=dt},setClear:function(dt,ht,Ut,fe,Ae){Ae===!0&&(dt*=fe,ht*=fe,Ut*=fe),at.set(dt,ht,Ut,fe),J.equals(at)===!1&&(i.clearColor(dt,ht,Ut,fe),J.copy(at))},reset:function(){D=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,Y=null,J=null,dt=null;return{setReversed:function(ht){if(at!==ht){const Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const fe=dt;dt=null,this.setClear(fe)}at=ht},getReversed:function(){return at},setTest:function(ht){ht?it(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ht){Y!==ht&&!D&&(i.depthMask(ht),Y=ht)},setFunc:function(ht){if(at&&(ht=lg[ht]),J!==ht){switch(ht){case Go:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case Wo:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case $o:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){D=ht},setClear:function(ht){dt!==ht&&(at&&(ht=1-ht),i.clearDepth(ht),dt=ht)},reset:function(){D=!1,Y=null,J=null,dt=null,at=!1}}}function s(){let D=!1,at=null,Y=null,J=null,dt=null,ht=null,Ut=null,fe=null,Ae=null;return{setTest:function(Qt){D||(Qt?it(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Qt){at!==Qt&&!D&&(i.stencilMask(Qt),at=Qt)},setFunc:function(Qt,Ze,gn){(Y!==Qt||J!==Ze||dt!==gn)&&(i.stencilFunc(Qt,Ze,gn),Y=Qt,J=Ze,dt=gn)},setOp:function(Qt,Ze,gn){(ht!==Qt||Ut!==Ze||fe!==gn)&&(i.stencilOp(Qt,Ze,gn),ht=Qt,Ut=Ze,fe=gn)},setLocked:function(Qt){D=Qt},setClear:function(Qt){Ae!==Qt&&(i.clearStencil(Qt),Ae=Qt)},reset:function(){D=!1,at=null,Y=null,J=null,dt=null,ht=null,Ut=null,fe=null,Ae=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,u=null,y=null,x=null,_=null,I=null,T=null,E=new wt(0,0,0),R=0,S=!1,M=null,P=null,k=null,L=null,W=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=z>=2);let Z=null,ft={};const lt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),zt=new ne().fromArray(lt),q=new ne().fromArray(Pt);function tt(D,at,Y,J){const dt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(D,ht),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<Y;Ut++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(at+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return ht}const vt={};vt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Gi),Gt(!1),Vt(bl),it(i.CULL_FACE),F(Vn);function it(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,at){return d[D]!==at?(i.bindFramebuffer(D,at),d[D]=at,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Bt(D,at){let Y=p,J=!1;if(D){Y=f.get(at),Y===void 0&&(Y=[],f.set(at,Y));const dt=D.textures;if(Y.length!==dt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=dt.length;ht<Ut;ht++)Y[ht]=i.COLOR_ATTACHMENT0+ht;Y.length=dt.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function he(D){return v!==D?(i.useProgram(D),v=D,!0):!1}const Xt={[ri]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Xt[Au]=i.MIN,Xt[Cu]=i.MAX;const ge={[Ru]:i.ZERO,[Pu]:i.ONE,[Iu]:i.SRC_COLOR,[zo]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(D,at,Y,J,dt,ht,Ut,fe,Ae,Qt){if(D===Vn){g===!0&&(St(i.BLEND),g=!1);return}if(g===!1&&(it(i.BLEND),g=!0),D!==wu){if(D!==m||Qt!==S){if((u!==ri||_!==ri)&&(i.blendEquation(i.FUNC_ADD),u=ri,_=ri),Qt)switch(D){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,I=null,T=null,E.set(0,0,0),R=0,m=D,S=Qt}return}dt=dt||at,ht=ht||Y,Ut=Ut||J,(at!==u||dt!==_)&&(i.blendEquationSeparate(Xt[at],Xt[dt]),u=at,_=dt),(Y!==y||J!==x||ht!==I||Ut!==T)&&(i.blendFuncSeparate(ge[Y],ge[J],ge[ht],ge[Ut]),y=Y,x=J,I=ht,T=Ut),(fe.equals(E)===!1||Ae!==R)&&(i.blendColor(fe.r,fe.g,fe.b,Ae),E.copy(fe),R=Ae),m=D,S=!1}function qe(D,at){D.side===Ee?St(i.CULL_FACE):it(i.CULL_FACE);let Y=D.side===me;at&&(Y=!Y),Gt(Y),D.blending===Bi&&D.transparent===!1?F(Vn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),oe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function Vt(D){D!==Mu?(it(i.CULL_FACE),D!==P&&(D===bl?i.cullFace(i.BACK):D===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),P=D}function Tt(D){D!==k&&(X&&i.lineWidth(D),k=D)}function oe(D,at,Y){D?(it(i.POLYGON_OFFSET_FILL),(L!==at||W!==Y)&&(i.polygonOffset(at,Y),L=at,W=Y)):St(i.POLYGON_OFFSET_FILL)}function Et(D){D?it(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function C(D){D===void 0&&(D=i.TEXTURE0+$-1),Z!==D&&(i.activeTexture(D),Z=D)}function b(D,at,Y){Y===void 0&&(Z===null?Y=i.TEXTURE0+$-1:Y=Z);let J=ft[Y];J===void 0&&(J={type:void 0,texture:void 0},ft[Y]=J),(J.type!==D||J.texture!==at)&&(Z!==Y&&(i.activeTexture(Y),Z=Y),i.bindTexture(D,at||vt[D]),J.type=D,J.texture=at)}function B(){const D=ft[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){zt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),zt.copy(D))}function gt(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Wt(D,at){let Y=c.get(at);Y===void 0&&(Y=new WeakMap,c.set(at,Y));let J=Y.get(D);J===void 0&&(J=i.getUniformBlockIndex(at,D.name),Y.set(D,J))}function Ot(D,at){const J=c.get(at).get(D);l.get(at)!==J&&(i.uniformBlockBinding(at,J,D.__bindingPointIndex),l.set(at,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,ft={},d={},f=new WeakMap,p=[],v=null,g=!1,m=null,u=null,y=null,x=null,_=null,I=null,T=null,E=new wt(0,0,0),R=0,S=!1,M=null,P=null,k=null,L=null,W=null,zt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:St,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:he,setBlending:F,setMaterial:qe,setFlipSided:Gt,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:oe,setScissorTest:Et,activeTexture:C,bindTexture:b,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:qt,texStorage3D:et,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:se}}function vc(i,t,e,n){const s=hg(n);switch(e){case ah:return i*t;case ch:return i*t;case hh:return i*t*2;case Ba:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case Ha:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case Ga:return i*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vr:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:case na:return Math.max(i,16)*Math.max(t,8)/4;case Qo:case ea:return Math.max(i,8)*Math.max(t,8)/2;case ia:case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case ya:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Sa:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(i){switch(i){case Cn:case sh:return{byteLength:1,components:1};case Ms:case rh:case Es:return{byteLength:2,components:1};case Oa:case ka:return{byteLength:2,components:4};case hi:case Fa:case fn:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ug(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,b){return p?new OffscreenCanvas(C,b):Tr("canvas")}function g(C,b,B){let K=1;const Q=Et(C);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(K*Q.width),Mt=Math.floor(K*Q.height);d===void 0&&(d=v(j,Mt));const ct=b?v(j,Mt):d;return ct.width=j,ct.height=Mt,ct.getContext("2d").drawImage(C,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Mt+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,b,B,K,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=b;if(b===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),b===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),b===i.RGBA){const Mt=Q?Or:$t.getTransfer(K);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Mt===te?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(C,b){let B;return C?b===null||b===hi||b===Xi?B=i.DEPTH24_STENCIL8:b===fn?B=i.DEPTH32F_STENCIL8:b===Ms&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hi||b===Xi?B=i.DEPTH_COMPONENT24:b===fn?B=i.DEPTH_COMPONENT32F:b===Ms&&(B=i.DEPTH_COMPONENT16),B}function I(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==We&&C.minFilter!==on?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),M(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const B=C.source,K=f.get(B);if(K){const Q=K[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(K).length===0&&f.delete(B)}n.remove(C)}function S(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const B=C.source,K=f.get(B);delete K[b.__cacheKey],o.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(b.__webglFramebuffer[K]))for(let Q=0;Q<b.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[K]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[K])}else{if(Array.isArray(b.__webglFramebuffer))for(let K=0;K<b.__webglFramebuffer.length;K++)i.deleteFramebuffer(b.__webglFramebuffer[K]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let K=0;K<b.__webglColorRenderbuffer.length;K++)b.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[K]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=C.textures;for(let K=0,Q=B.length;K<Q;K++){const j=n.get(B[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[K])}n.remove(C)}let P=0;function k(){P=0}function L(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function W(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function $(C,b){const B=n.get(C);if(C.isVideoTexture&&Tt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,C,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function X(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){q(B,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function z(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){q(B,C,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function O(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){tt(B,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const Z={[Jo]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},ft={[We]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},lt={[ed]:i.NEVER,[ad]:i.ALWAYS,[nd]:i.LESS,[ph]:i.LEQUAL,[id]:i.EQUAL,[od]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function Pt(C,b){if(b.type===fn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===on||b.magFilter===Yr||b.magFilter===Ns||b.magFilter===li||b.minFilter===on||b.minFilter===Yr||b.minFilter===Ns||b.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ft[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===We||b.minFilter!==Ns&&b.minFilter!==li||b.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function zt(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const K=b.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const j=W(b);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[j].usedTimes++;const Mt=Q[C.__cacheKey];Mt!==void 0&&(Q[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(b)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return B}function q(C,b,B){let K=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(K=i.TEXTURE_3D);const Q=zt(C,b),j=b.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+B);const Mt=n.get(j);if(j.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const ct=$t.getPrimaries($t.workingColorSpace),pt=b.colorSpace===Hn?null:$t.getPrimaries(b.colorSpace),qt=b.colorSpace===Hn||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let et=g(b.image,!1,s.maxTextureSize);et=oe(b,et);const mt=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type);let It=x(b.internalFormat,mt,Ct,b.colorSpace,b.isVideoTexture);Pt(K,b);let gt;const Wt=b.mipmaps,Ot=b.isVideoTexture!==!0,se=Mt.__version===void 0||Q===!0,D=j.dataReady,at=I(b,et);if(b.isDepthTexture)It=_(b.format===qi,b.type),se&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,It,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,mt,Ct,null));else if(b.isDataTexture)if(Wt.length>0){Ot&&se&&e.texStorage2D(i.TEXTURE_2D,at,It,Wt[0].width,Wt[0].height);for(let Y=0,J=Wt.length;Y<J;Y++)gt=Wt[Y],Ot?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,Y,It,gt.width,gt.height,0,mt,Ct,gt.data);b.generateMipmaps=!1}else Ot?(se&&e.texStorage2D(i.TEXTURE_2D,at,It,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,mt,Ct,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,Wt[0].width,Wt[0].height,et.depth);for(let Y=0,J=Wt.length;Y<J;Y++)if(gt=Wt[Y],b.format!==an)if(mt!==null)if(Ot){if(D)if(b.layerUpdates.size>0){const dt=vc(gt.width,gt.height,b.format,b.type);for(const ht of b.layerUpdates){const Ut=gt.data.subarray(ht*dt/gt.data.BYTES_PER_ELEMENT,(ht+1)*dt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ht,gt.width,gt.height,1,mt,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,It,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,gt.width,gt.height,et.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,It,gt.width,gt.height,et.depth,0,mt,Ct,gt.data)}else{Ot&&se&&e.texStorage2D(i.TEXTURE_2D,at,It,Wt[0].width,Wt[0].height);for(let Y=0,J=Wt.length;Y<J;Y++)gt=Wt[Y],b.format!==an?mt!==null?Ot?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,Y,It,gt.width,gt.height,0,mt,Ct,gt.data)}else if(b.isDataArrayTexture)if(Ot){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,et.width,et.height,et.depth),D)if(b.layerUpdates.size>0){const Y=vc(et.width,et.height,b.format,b.type);for(const J of b.layerUpdates){const dt=et.data.subarray(J*Y/et.data.BYTES_PER_ELEMENT,(J+1)*Y/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,mt,Ct,dt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(b.isData3DTexture)Ot?(se&&e.texStorage3D(i.TEXTURE_3D,at,It,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,It,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(b.isFramebufferTexture){if(se)if(Ot)e.texStorage2D(i.TEXTURE_2D,at,It,et.width,et.height);else{let Y=et.width,J=et.height;for(let dt=0;dt<at;dt++)e.texImage2D(i.TEXTURE_2D,dt,It,Y,J,0,mt,Ct,null),Y>>=1,J>>=1}}else if(Wt.length>0){if(Ot&&se){const Y=Et(Wt[0]);e.texStorage2D(i.TEXTURE_2D,at,It,Y.width,Y.height)}for(let Y=0,J=Wt.length;Y<J;Y++)gt=Wt[Y],Ot?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,Y,It,mt,Ct,gt);b.generateMipmaps=!1}else if(Ot){if(se){const Y=Et(et);e.texStorage2D(i.TEXTURE_2D,at,It,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Ct,et);m(b)&&u(K),Mt.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function tt(C,b,B){if(b.image.length!==6)return;const K=zt(C,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const j=n.get(Q);if(Q.version!==j.__version||K===!0){e.activeTexture(i.TEXTURE0+B);const Mt=$t.getPrimaries($t.workingColorSpace),ct=b.colorSpace===Hn?null:$t.getPrimaries(b.colorSpace),pt=b.colorSpace===Hn||Mt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const qt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!qt&&!et?mt[J]=g(b.image[J],!0,s.maxCubemapSize):mt[J]=et?b.image[J].image:b.image[J],mt[J]=oe(b,mt[J]);const Ct=mt[0],It=r.convert(b.format,b.colorSpace),gt=r.convert(b.type),Wt=x(b.internalFormat,It,gt,b.colorSpace),Ot=b.isVideoTexture!==!0,se=j.__version===void 0||K===!0,D=Q.dataReady;let at=I(b,Ct);Pt(i.TEXTURE_CUBE_MAP,b);let Y;if(qt){Ot&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,Ct.width,Ct.height);for(let J=0;J<6;J++){Y=mt[J].mipmaps;for(let dt=0;dt<Y.length;dt++){const ht=Y[dt];b.format!==an?It!==null?Ot?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ht.width,ht.height,It,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,0,0,ht.width,ht.height,It,gt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt,Wt,ht.width,ht.height,0,It,gt,ht.data)}}}else{if(Y=b.mipmaps,Ot&&se){Y.length>0&&at++;const J=Et(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,It,gt,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,mt[J].width,mt[J].height,0,It,gt,mt[J].data);for(let dt=0;dt<Y.length;dt++){const Ut=Y[dt].image[J].image;Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,Ut.width,Ut.height,It,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Wt,Ut.width,Ut.height,0,It,gt,Ut.data)}}else{Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,gt,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,It,gt,mt[J]);for(let dt=0;dt<Y.length;dt++){const ht=Y[dt];Ot?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,0,0,It,gt,ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,dt+1,Wt,It,gt,ht.image[J])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),j.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function vt(C,b,B,K,Q,j){const Mt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),pt=x(B.internalFormat,Mt,ct,B.colorSpace),qt=n.get(b),et=n.get(B);if(et.__renderTarget=b,!qt.__hasExternalTextures){const mt=Math.max(1,b.width>>j),Ct=Math.max(1,b.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,pt,mt,Ct,b.depth,0,Mt,ct,null):e.texImage2D(Q,j,pt,mt,Ct,0,Mt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Vt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,et.__webglTexture,0,Gt(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,et.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const K=b.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=_(b.stencilBuffer,Q),Mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Gt(b);Vt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,j,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,C)}else{const K=b.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],Mt=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),pt=x(j.internalFormat,Mt,ct,j.colorSpace),qt=Gt(b);B&&Vt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,pt,b.width,b.height):Vt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(b.depthTexture);K.__renderTarget=b,(!K.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const Q=K.__webglTexture,j=Gt(b);if(b.depthTexture.format===zi)Vt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===qi)Vt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const b=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),K){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=K}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");St(b.__webglFramebuffer,C)}else if(B){b.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[K]),b.__webglDepthbuffer[K]===void 0)b.__webglDepthbuffer[K]=i.createRenderbuffer(),it(b.__webglDepthbuffer[K],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),it(b.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,b,B){const K=n.get(C);b!==void 0&&vt(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(C)}function he(C){const b=C.texture,B=n.get(C),K=n.get(b);C.addEventListener("dispose",E);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=b.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let pt=0;pt<b.mipmaps.length;pt++)B.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ct=0,pt=Q.length;ct<pt;ct++){const qt=n.get(Q[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Vt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const pt=Q[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const qt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),mt=x(pt.internalFormat,qt,et,pt.colorSpace,C.isXRRenderTarget===!0),Ct=Gt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),it(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)vt(B.__webglFramebuffer[ct][pt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else vt(B.__webglFramebuffer[ct],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(b)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ct=0,pt=Q.length;ct<pt;ct++){const qt=Q[ct],et=n.get(qt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Pt(i.TEXTURE_2D,qt),vt(B.__webglFramebuffer,C,qt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(qt)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,K.__webglTexture),Pt(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)vt(B.__webglFramebuffer[pt],C,b,i.COLOR_ATTACHMENT0,ct,pt);else vt(B.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,ct,0);m(b)&&u(ct),e.unbindTexture()}C.depthBuffer&&Dt(C)}function Xt(C){const b=C.textures;for(let B=0,K=b.length;B<K;B++){const Q=b[B];if(m(Q)){const j=y(C),Mt=n.get(Q).__webglTexture;e.bindTexture(j,Mt),u(j),e.unbindTexture()}}}const ge=[],F=[];function qe(C){if(C.samples>0){if(Vt(C)===!1){const b=C.textures,B=C.width,K=C.height;let Q=i.COLOR_BUFFER_BIT;const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(C),ct=b.length>1;if(ct)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const qt=n.get(b[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,Q,i.NEAREST),l===!0&&(ge.length=0,F.length=0,ge.push(i.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ge.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const qt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Gt(C){return Math.min(s.maxSamples,C.samples)}function Vt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Tt(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function oe(C,b){const B=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Ki&&B!==Hn&&($t.getTransfer(B)===te?(K!==an||Q!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Et(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Bt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Vt}function dg(i,t){function e(n,s=Hn){let r;const o=$t.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Es)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===an)return i.RGBA;if(n===ch)return i.LUMINANCE;if(n===hh)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===za)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===mr||n===gr||n===vr||n===xr)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===ta||n===ea||n===na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ia||n===sa)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ra)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===xa||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===la)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ga)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===ya||n===Ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===ba||n===Sa||n===wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class fg extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class De extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pg={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),u=this._getHandJoint(c,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const mg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gg=`
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

}`;class vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:mg,fragmentShader:gg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xg extends Ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,v=null;const g=new vg,m=e.getContextAttributes();let u=null,y=null;const x=[],_=[],I=new rt;let T=null;const E=new Ve;E.viewport=new ne;const R=new Ve;R.viewport=new ne;const S=[E,R],M=new fg;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=x[q];return tt===void 0&&(tt=new So,x[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=x[q];return tt===void 0&&(tt=new So,x[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=x[q];return tt===void 0&&(tt=new So,x[q]=tt),tt.getHandSpace()};function L(q){const tt=_.indexOf(q.inputSource);if(tt===-1)return;const vt=x[tt];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const tt=_[q];tt!==null&&(_[q]=null,x[q].disconnect(tt))}P=null,k=null,g.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ui(p.framebufferWidth,p.framebufferHeight,{format:an,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,vt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?qi:zi,vt=m.stencil?Xi:hi);const St={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ui(f.textureWidth,f.textureHeight,{format:an,type:Cn,depthTexture:new Th(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(q){for(let tt=0;tt<q.removed.length;tt++){const vt=q.removed[tt],it=_.indexOf(vt);it>=0&&(_[it]=null,x[it].disconnect(vt))}for(let tt=0;tt<q.added.length;tt++){const vt=q.added[tt];let it=_.indexOf(vt);if(it===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=_.length){_.push(vt),it=Dt;break}else if(_[Dt]===null){_[Dt]=vt,it=Dt;break}if(it===-1)break}const St=x[it];St&&St.connect(vt)}}const X=new A,z=new A;function O(q,tt,vt){X.setFromMatrixPosition(tt.matrixWorld),z.setFromMatrixPosition(vt.matrixWorld);const it=X.distanceTo(z),St=tt.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,Bt=St[14]/(St[10]-1),he=St[14]/(St[10]+1),Xt=(St[9]+1)/St[5],ge=(St[9]-1)/St[5],F=(St[8]-1)/St[0],qe=(Dt[8]+1)/Dt[0],Gt=Bt*F,Vt=Bt*qe,Tt=it/(-F+qe),oe=Tt*-F;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(oe),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),St[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Et=Bt+Tt,C=he+Tt,b=Gt-oe,B=Vt+(it-oe),K=Xt*he/C*Et,Q=ge*he/C*Et;q.projectionMatrix.makePerspective(b,B,K,Q,Et,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Z(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,vt=q.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),M.near=R.near=E.near=tt,M.far=R.far=E.far=vt,(P!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,k=M.far),E.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,M.layers.mask=E.layers.mask|R.layers.mask;const it=q.parent,St=M.cameras;Z(M,it);for(let Dt=0;Dt<St.length;Dt++)Z(St[Dt],it);St.length===2?O(M,E,R):M.projectionMatrix.copy(E.projectionMatrix),ft(q,M,it)};function ft(q,tt,vt){vt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ta*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let lt=null;function Pt(q,tt){if(h=tt.getViewerPose(c||o),v=tt,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let it=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let Dt=0;Dt<vt.length;Dt++){const Bt=vt[Dt];let he=null;if(p!==null)he=p.getViewport(Bt);else{const ge=d.getViewSubImage(f,Bt);he=ge.viewport,Dt===0&&(t.setRenderTargetTextures(y,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(y))}let Xt=S[Dt];Xt===void 0&&(Xt=new Ve,Xt.layers.enable(Dt),Xt.viewport=new ne,S[Dt]=Xt),Xt.matrix.fromArray(Bt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Bt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(he.x,he.y,he.width,he.height),Dt===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Xt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Dt=d.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,s.renderState)}}for(let vt=0;vt<x.length;vt++){const it=_[vt],St=x[vt];it!==null&&St!==void 0&&St.update(it,tt,c||o)}lt&&lt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),v=null}const zt=new wh;zt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){lt=q},this.dispose=function(){}}}const ii=new Fe,_g=new Kt;function yg(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Mh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,y,x,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,_)):u.isMeshMatcapMaterial?(r(m,u),v(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),g(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,y,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===me&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===me&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=t.get(u),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,ii.copy(_),ii.x*=-1,ii.y*=-1,ii.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),m.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(ii)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,y,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===me&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const y=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=s[y.id];_===void 0&&(v(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(y,I);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const x=d();y.__bindingPointIndex=x;const _=i.createBuffer(),I=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],_=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=_.length;T<E;T++){const R=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,M=R.length;S<M;S++){const P=R[S];if(p(P,T,S,I)===!0){const k=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<L.length;$++){const X=L[$],z=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,k+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,_,I){const T=y.value,E=x+"_"+_;if(I[E]===void 0)return typeof T=="number"||typeof T=="boolean"?I[E]=T:I[E]=T.clone(),!0;{const R=I[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return I[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function v(y){const x=y.uniforms;let _=0;const I=16;for(let E=0,R=x.length;E<R;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,P=S.length;M<P;M++){const k=S[M],L=Array.isArray(k.value)?k.value:[k.value];for(let W=0,$=L.length;W<$;W++){const X=L[W],z=g(X),O=_%I,Z=O%z.boundary,ft=O+Z;_+=Z,ft!==0&&I-ft<z.storage&&(_+=I-ft),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=z.storage}}}const T=_%I;return T>0&&(_+=I-T),y.__size=_,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class bg{constructor(t={}){const{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,u=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Wn,this.toneMappingExposure=1;const _=this;let I=!1,T=0,E=0,R=null,S=-1,M=null;const P=new ne,k=new ne;let L=null;const W=new wt(0);let $=0,X=e.width,z=e.height,O=1,Z=null,ft=null;const lt=new ne(0,0,X,z),Pt=new ne(0,0,X,z);let zt=!1;const q=new Wa;let tt=!1,vt=!1;const it=new Kt,St=new Kt,Dt=new A,Bt=new ne,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ge(){return R===null?O:1}let F=n;function qe(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Na}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),F===null){const U="webgl2";if(F=qe(U,w),F===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Gt,Vt,Tt,oe,Et,C,b,B,K,Q,j,Mt,ct,pt,qt,et,mt,Ct,It,gt,Wt,Ot,se,D;function at(){Gt=new Am(F),Gt.init(),Ot=new dg(F,Gt),Vt=new Mm(F,Gt,t,Ot),Tt=new cg(F,Gt),Vt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),oe=new Pm(F),Et=new $0,C=new ug(F,Gt,Tt,Et,Vt,Ot,oe),b=new Sm(_),B=new Tm(_),K=new Fd(F),se=new _m(F,K),Q=new Cm(F,K,oe,se),j=new Lm(F,Q,K,oe),It=new Im(F,Vt,C),et=new bm(Et),Mt=new Y0(_,b,B,Gt,Vt,se,et),ct=new yg(_,Et),pt=new K0,qt=new ng(Gt),Ct=new xm(_,b,B,Tt,j,p,l),mt=new ag(_,j,Vt),D=new Mg(F,oe,Vt,Tt),gt=new ym(F,Gt,oe),Wt=new Rm(F,Gt,oe),oe.programs=Mt.programs,_.capabilities=Vt,_.extensions=Gt,_.properties=Et,_.renderLists=pt,_.shadowMap=mt,_.state=Tt,_.info=oe}at();const Y=new xg(_,F);this.xr=Y,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(X,z,!1))},this.getSize=function(w){return w.set(X,z)},this.setSize=function(w,U,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,z=U,e.width=Math.floor(w*O),e.height=Math.floor(U*O),G===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*O,z*O).floor()},this.setDrawingBufferSize=function(w,U,G){X=w,z=U,O=G,e.width=Math.floor(w*G),e.height=Math.floor(U*G),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(lt)},this.setViewport=function(w,U,G,V){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,U,G,V),Tt.viewport(P.copy(lt).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(Pt)},this.setScissor=function(w,U,G,V){w.isVector4?Pt.set(w.x,w.y,w.z,w.w):Pt.set(w,U,G,V),Tt.scissor(k.copy(Pt).multiplyScalar(O).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(w){Tt.setScissorTest(zt=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,U=!0,G=!0){let V=0;if(w){let N=!1;if(R!==null){const nt=R.texture.format;N=nt===Ga||nt===Ha||nt===za}if(N){const nt=R.texture.type,ut=nt===Cn||nt===hi||nt===Ms||nt===Xi||nt===Oa||nt===ka,xt=Ct.getClearColor(),_t=Ct.getClearAlpha(),Lt=xt.r,Nt=xt.g,yt=xt.b;ut?(v[0]=Lt,v[1]=Nt,v[2]=yt,v[3]=_t,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=Lt,g[1]=Nt,g[2]=yt,g[3]=_t,F.clearBufferiv(F.COLOR,0,g))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT),G&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),qt.dispose(),Et.dispose(),b.dispose(),B.dispose(),j.dispose(),se.dispose(),D.dispose(),Mt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",pl),Y.removeEventListener("sessionend",ml),Jn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=oe.autoReset,U=mt.enabled,G=mt.autoUpdate,V=mt.needsUpdate,N=mt.type;at(),oe.autoReset=w,mt.enabled=U,mt.autoUpdate=G,mt.needsUpdate=V,mt.type=N}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const U=w.target;U.removeEventListener("dispose",Ut),fe(U)}function fe(w){Ae(w),Et.remove(w)}function Ae(w){const U=Et.get(w).programs;U!==void 0&&(U.forEach(function(G){Mt.releaseProgram(G)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,G,V,N,nt){U===null&&(U=he);const ut=N.isMesh&&N.matrixWorld.determinant()<0,xt=gu(w,U,G,V,N);Tt.setMaterial(V,ut);let _t=G.index,Lt=1;if(V.wireframe===!0){if(_t=Q.getWireframeAttribute(G),_t===void 0)return;Lt=2}const Nt=G.drawRange,yt=G.attributes.position;let jt=Nt.start*Lt,re=(Nt.start+Nt.count)*Lt;nt!==null&&(jt=Math.max(jt,nt.start*Lt),re=Math.min(re,(nt.start+nt.count)*Lt)),_t!==null?(jt=Math.max(jt,0),re=Math.min(re,_t.count)):yt!=null&&(jt=Math.max(jt,0),re=Math.min(re,yt.count));const ae=re-jt;if(ae<0||ae===1/0)return;se.setup(N,V,xt,G,_t);let Ue,Jt=gt;if(_t!==null&&(Ue=K.get(_t),Jt=Wt,Jt.setIndex(Ue)),N.isMesh)V.wireframe===!0?(Tt.setLineWidth(V.wireframeLinewidth*ge()),Jt.setMode(F.LINES)):Jt.setMode(F.TRIANGLES);else if(N.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Tt.setLineWidth(bt*ge()),N.isLineSegments?Jt.setMode(F.LINES):N.isLineLoop?Jt.setMode(F.LINE_LOOP):Jt.setMode(F.LINE_STRIP)}else N.isPoints?Jt.setMode(F.POINTS):N.isSprite&&Jt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Jt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,vn=N._multiDrawCounts,Zt=N._multiDrawCount,Qe=_t?K.get(_t).bytesPerElement:1,mi=Et.get(V).currentProgram.getUniforms();for(let Be=0;Be<Zt;Be++)mi.setValue(F,"_gl_DrawID",Be),Jt.render(bt[Be]/Qe,vn[Be])}else if(N.isInstancedMesh)Jt.renderInstances(jt,ae,N.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vn=Math.min(G.instanceCount,bt);Jt.renderInstances(jt,ae,vn)}else Jt.render(jt,ae)};function Qt(w,U,G){w.transparent===!0&&w.side===Ee&&w.forceSinglePass===!1?(w.side=me,w.needsUpdate=!0,Us(w,U,G),w.side=$n,w.needsUpdate=!0,Us(w,U,G),w.side=Ee):Us(w,U,G)}this.compile=function(w,U,G=null){G===null&&(G=w),u=qt.get(G),u.init(U),x.push(u),G.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),w!==G&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const V=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const xt=nt[ut];Qt(xt,G,N),V.add(xt)}else Qt(nt,G,N),V.add(nt)}),x.pop(),u=null,V},this.compileAsync=function(w,U,G=null){const V=this.compile(w,U,G);return new Promise(N=>{function nt(){if(V.forEach(function(ut){Et.get(ut).currentProgram.isReady()&&V.delete(ut)}),V.size===0){N(w);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ze=null;function gn(w){Ze&&Ze(w)}function pl(){Jn.stop()}function ml(){Jn.start()}const Jn=new wh;Jn.setAnimationLoop(gn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Ze=w,Y.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},Y.addEventListener("sessionstart",pl),Y.addEventListener("sessionend",ml),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,R),u=qt.get(w,x.length),u.init(U),x.push(u),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(St),vt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,vt),m=pt.get(w,y.length),m.init(),y.push(m),Y.enabled===!0&&Y.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&qr(nt,U,-1/0,_.sortObjects)}qr(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Z,ft),Xt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Xt&&Ct.addToRenderList(m,w),this.info.render.frame++,tt===!0&&et.beginShadows();const G=u.state.shadowsArray;mt.render(G,w,U),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let ut=0,xt=nt.length;ut<xt;ut++){const _t=nt[ut];vl(V,N,w,_t)}Xt&&Ct.render(w);for(let ut=0,xt=nt.length;ut<xt;ut++){const _t=nt[ut];gl(m,w,_t,_t.viewport)}}else N.length>0&&vl(V,N,w,U),Xt&&Ct.render(w),gl(m,w,U);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,U),se.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],tt===!0&&et.setGlobalState(_.clippingPlanes,u.state.camera)):u=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function qr(w,U,G,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){V&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);const ut=j.update(w),xt=w.material;xt.visible&&m.push(w,ut,xt,G,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ut=j.update(w),xt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Bt.copy(ut.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(xt)){const _t=ut.groups;for(let Lt=0,Nt=_t.length;Lt<Nt;Lt++){const yt=_t[Lt],jt=xt[yt.materialIndex];jt&&jt.visible&&m.push(w,ut,jt,G,Bt.z,yt)}}else xt.visible&&m.push(w,ut,xt,G,Bt.z,null)}}const nt=w.children;for(let ut=0,xt=nt.length;ut<xt;ut++)qr(nt[ut],U,G,V)}function gl(w,U,G,V){const N=w.opaque,nt=w.transmissive,ut=w.transparent;u.setupLightsView(G),tt===!0&&et.setGlobalState(_.clippingPlanes,G),V&&Tt.viewport(P.copy(V)),N.length>0&&Ds(N,U,G),nt.length>0&&Ds(nt,U,G),ut.length>0&&Ds(ut,U,G),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function vl(w,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[V.id]===void 0&&(u.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Es:Cn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const nt=u.state.transmissionRenderTarget[V.id],ut=V.viewport||P;nt.setSize(ut.z,ut.w);const xt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(W),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Xt&&Ct.render(G);const _t=_.toneMapping;_.toneMapping=Wn;const Lt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),u.setupLightsView(V),tt===!0&&et.setGlobalState(_.clippingPlanes,V),Ds(w,G,V),C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let yt=0,jt=U.length;yt<jt;yt++){const re=U[yt],ae=re.object,Ue=re.geometry,Jt=re.material,bt=re.group;if(Jt.side===Ee&&ae.layers.test(V.layers)){const vn=Jt.side;Jt.side=me,Jt.needsUpdate=!0,xl(ae,G,V,Ue,Jt,bt),Jt.side=vn,Jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt))}_.setRenderTarget(xt),_.setClearColor(W,$),Lt!==void 0&&(V.viewport=Lt),_.toneMapping=_t}function Ds(w,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=w.length;N<nt;N++){const ut=w[N],xt=ut.object,_t=ut.geometry,Lt=V===null?ut.material:V,Nt=ut.group;xt.layers.test(G.layers)&&xl(xt,U,G,_t,Lt,Nt)}}function xl(w,U,G,V,N,nt){w.onBeforeRender(_,U,G,V,N,nt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(_,U,G,V,w,nt),N.transparent===!0&&N.side===Ee&&N.forceSinglePass===!1?(N.side=me,N.needsUpdate=!0,_.renderBufferDirect(G,U,V,N,w,nt),N.side=$n,N.needsUpdate=!0,_.renderBufferDirect(G,U,V,N,w,nt),N.side=Ee):_.renderBufferDirect(G,U,V,N,w,nt),w.onAfterRender(_,U,G,V,N,nt)}function Us(w,U,G){U.isScene!==!0&&(U=he);const V=Et.get(w),N=u.state.lights,nt=u.state.shadowsArray,ut=N.state.version,xt=Mt.getParameters(w,N.state,nt,U,G),_t=Mt.getProgramCacheKey(xt);let Lt=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Ut),Lt=new Map,V.programs=Lt);let Nt=Lt.get(_t);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===ut)return yl(w,xt),Nt}else xt.uniforms=Mt.getUniforms(w),w.onBeforeCompile(xt,_),Nt=Mt.acquireProgram(xt,_t),Lt.set(_t,Nt),V.uniforms=xt.uniforms;const yt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(yt.clippingPlanes=et.uniform),yl(w,xt),V.needsLights=xu(w),V.lightsStateVersion=ut,V.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Nt,V.uniformsList=null,Nt}function _l(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=yr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function yl(w,U){const G=Et.get(w);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function gu(w,U,G,V,N){U.isScene!==!0&&(U=he),C.resetTextureUnits();const nt=U.fog,ut=V.isMeshStandardMaterial?U.environment:null,xt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ki,_t=(V.isMeshStandardMaterial?B:b).get(V.envMap||ut),Lt=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!G.morphAttributes.position,jt=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let ae=Wn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ae=_.toneMapping);const Ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=Ue!==void 0?Ue.length:0,bt=Et.get(V),vn=u.state.lights;if(tt===!0&&(vt===!0||w!==M)){const Ye=w===M&&V.id===S;et.setState(V,w,Ye)}let Zt=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==vn.state.version||bt.outputColorSpace!==xt||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==_t||V.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Nt||bt.morphTargets!==yt||bt.morphNormals!==jt||bt.morphColors!==re||bt.toneMapping!==ae||bt.morphTargetsCount!==Jt)&&(Zt=!0):(Zt=!0,bt.__version=V.version);let Qe=bt.currentProgram;Zt===!0&&(Qe=Us(V,U,N));let mi=!1,Be=!1,ts=!1;const le=Qe.getUniforms(),cn=bt.uniforms;if(Tt.useProgram(Qe.program)&&(mi=!0,Be=!0,ts=!0),V.id!==S&&(S=V.id,Be=!0),mi||M!==w){Tt.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),ud(it),dd(it),le.setValue(F,"projectionMatrix",it)):le.setValue(F,"projectionMatrix",w.projectionMatrix),le.setValue(F,"viewMatrix",w.matrixWorldInverse);const In=le.map.cameraPosition;In!==void 0&&In.setValue(F,Dt.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&le.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&le.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Be=!0,ts=!0)}if(N.isSkinnedMesh){le.setOptional(F,N,"bindMatrix"),le.setOptional(F,N,"bindMatrixInverse");const Ye=N.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),le.setValue(F,"boneTexture",Ye.boneTexture,C))}N.isBatchedMesh&&(le.setOptional(F,N,"batchingTexture"),le.setValue(F,"batchingTexture",N._matricesTexture,C),le.setOptional(F,N,"batchingIdTexture"),le.setValue(F,"batchingIdTexture",N._indirectTexture,C),le.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&le.setValue(F,"batchingColorTexture",N._colorsTexture,C));const es=G.morphAttributes;if((es.position!==void 0||es.normal!==void 0||es.color!==void 0)&&It.update(N,G,Qe),(Be||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,le.setValue(F,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(cn.envMap.value=_t,cn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(cn.envMapIntensity.value=U.environmentIntensity),Be&&(le.setValue(F,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&vu(cn,ts),nt&&V.fog===!0&&ct.refreshFogUniforms(cn,nt),ct.refreshMaterialUniforms(cn,V,O,z,u.state.transmissionRenderTarget[w.id]),yr.upload(F,_l(bt),cn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(yr.upload(F,_l(bt),cn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&le.setValue(F,"center",N.center),le.setValue(F,"modelViewMatrix",N.modelViewMatrix),le.setValue(F,"normalMatrix",N.normalMatrix),le.setValue(F,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ye=V.uniformsGroups;for(let In=0,Ln=Ye.length;In<Ln;In++){const Ml=Ye[In];D.update(Ml,Qe),D.bind(Ml,Qe)}}return Qe}function vu(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function xu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,G){Et.get(w.texture).__webglTexture=U,Et.get(w.depthTexture).__webglTexture=G;const V=Et.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=G===void 0,V.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const G=Et.get(w);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,G=0){R=w,T=U,E=G;let V=!0,N=null,nt=!1,ut=!1;if(w){const _t=Et.get(w);if(_t.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(_t.__hasExternalTextures)C.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const yt=w.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&Et.has(yt)&&(w.width!==yt.image.width||w.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ut=!0);const Nt=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?N=Nt[U][G]:N=Nt[U],nt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[G]:N=Nt,P.copy(w.viewport),k.copy(w.scissor),L=w.scissorTest}else P.copy(lt).multiplyScalar(O).floor(),k.copy(Pt).multiplyScalar(O).floor(),L=zt;if(Tt.bindFramebuffer(F.FRAMEBUFFER,N)&&V&&Tt.drawBuffers(w,N),Tt.viewport(P),Tt.scissor(k),Tt.setScissorTest(L),nt){const _t=Et.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,G)}else if(ut){const _t=Et.get(w.texture),Lt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,Lt)}S=-1},this.readRenderTargetPixels=function(w,U,G,V,N,nt,ut){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){Tt.bindFramebuffer(F.FRAMEBUFFER,xt);try{const _t=w.texture,Lt=_t.format,Nt=_t.type;if(!Vt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&G>=0&&G<=w.height-N&&F.readPixels(U,G,V,N,Ot.convert(Lt),Ot.convert(Nt),nt)}finally{const _t=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(w,U,G,V,N,nt,ut){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){const _t=w.texture,Lt=_t.format,Nt=_t.type;if(!Vt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&G>=0&&G<=w.height-N){Tt.bindFramebuffer(F.FRAMEBUFFER,xt);const yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.bufferData(F.PIXEL_PACK_BUFFER,nt.byteLength,F.STREAM_READ),F.readPixels(U,G,V,N,Ot.convert(Lt),Ot.convert(Nt),0);const jt=R!==null?Et.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(F.FRAMEBUFFER,jt);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hd(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,nt),F.deleteBuffer(yt),F.deleteSync(re),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,G=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-G),N=Math.floor(w.image.width*V),nt=Math.floor(w.image.height*V),ut=U!==null?U.x:0,xt=U!==null?U.y:0;C.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,ut,xt,N,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(w,U,G=null,V=null,N=0){w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,G=null);let nt,ut,xt,_t,Lt,Nt,yt,jt,re;const ae=w.isCompressedTexture?w.mipmaps[N]:w.image;G!==null?(nt=G.max.x-G.min.x,ut=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,Lt=G.min.y,Nt=G.isBox3?G.min.z:0):(nt=ae.width,ut=ae.height,xt=ae.depth||1,_t=0,Lt=0,Nt=0),V!==null?(yt=V.x,jt=V.y,re=V.z):(yt=0,jt=0,re=0);const Ue=Ot.convert(U.format),Jt=Ot.convert(U.type);let bt;U.isData3DTexture?(C.setTexture3D(U,0),bt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),bt=F.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const vn=F.getParameter(F.UNPACK_ROW_LENGTH),Zt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Qe=F.getParameter(F.UNPACK_SKIP_PIXELS),mi=F.getParameter(F.UNPACK_SKIP_ROWS),Be=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ae.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nt);const ts=w.isDataArrayTexture||w.isData3DTexture,le=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const cn=Et.get(w),es=Et.get(U),Ye=Et.get(cn.__renderTarget),In=Et.get(es.__renderTarget);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let Ln=0;Ln<xt;Ln++)ts&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,N,Nt+Ln),w.isDepthTexture?(le&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Et.get(U).__webglTexture,N,re+Ln),F.blitFramebuffer(_t,Lt,nt,ut,yt,jt,nt,ut,F.DEPTH_BUFFER_BIT,F.NEAREST)):le?F.copyTexSubImage3D(bt,N,yt,jt,re+Ln,_t,Lt,nt,ut):F.copyTexSubImage2D(bt,N,yt,jt,re+Ln,_t,Lt,nt,ut);Tt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(bt,N,yt,jt,re,nt,ut,xt,Ue,Jt,ae.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,N,yt,jt,re,nt,ut,xt,Ue,ae.data):F.texSubImage3D(bt,N,yt,jt,re,nt,ut,xt,Ue,Jt,ae):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,yt,jt,nt,ut,Ue,Jt,ae.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,yt,jt,ae.width,ae.height,Ue,ae.data):F.texSubImage2D(F.TEXTURE_2D,N,yt,jt,nt,ut,Ue,Jt,ae);F.pixelStorei(F.UNPACK_ROW_LENGTH,vn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Zt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qe),F.pixelStorei(F.UNPACK_SKIP_ROWS,mi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Be),N===0&&U.generateMipmaps&&F.generateMipmap(bt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,G=null,V=null,N=0){return w.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,G,V,N)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Tt.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,Tt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Ts{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(t),this.density=e}clone(){return new Ts(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new qa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pi extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fe,this.environmentIntensity=1,this.environmentRotation=new Fe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new A;class Ar{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ar(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ih extends Kn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pi;const os=new A,Ii=new A,Li=new A,Di=new rt,as=new rt,Lh=new Kt,nr=new A,ls=new A,ir=new A,xc=new rt,wo=new rt,_c=new rt;class wg extends _e{constructor(t=new Ih){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sg(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Ar(n,3,0,!1)),Pi.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Li.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;sr(nr.set(-.5,-.5,0),Li,o,Ii,s,r),sr(ls.set(.5,-.5,0),Li,o,Ii,s,r),sr(ir.set(.5,.5,0),Li,o,Ii,s,r),xc.set(0,0),wo.set(1,0),_c.set(1,1);let a=t.ray.intersectTriangle(nr,ls,ir,!1,os);if(a===null&&(sr(ls.set(-.5,.5,0),Li,o,Ii,s,r),wo.set(0,1),a=t.ray.intersectTriangle(nr,ir,ls,!1,os),a===null))return;const l=t.ray.origin.distanceTo(os);l<t.near||l>t.far||e.push({distance:l,point:os.clone(),uv:je.getInterpolation(os,nr,ls,ir,xc,wo,_c,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function sr(i,t,e,n,s,r){Di.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(as.x=r*Di.x-s*Di.y,as.y=s*Di.x+r*Di.y):as.copy(Di),i.copy(t),i.x+=as.x,i.y+=as.y,i.applyMatrix4(Lh)}class Eg extends Pe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=We,h=We,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ca extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ui=new Kt,yc=new Kt,rr=[],Mc=new fi,Tg=new Kt,cs=new st,hs=new jn;class us extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ca(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),Mc.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(Mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),hs.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),yc.multiplyMatrices(n,Ui),cs.matrixWorld=yc,cs.raycast(t,rr);for(let o=0,a=rr.length;o<a;o++){const l=rr[o];l.instanceId=r,l.object=this,e.push(l)}rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ca(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Eg(new Float32Array(s*this.count),s,this.count,Ba,fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ya extends Kn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Cr=new A,Rr=new A,bc=new Kt,ds=new kr,or=new jn,Eo=new A,Sc=new A;class Dh extends _e{constructor(t=new ce,e=new Ya){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Cr.fromBufferAttribute(e,s-1),Rr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Cr.distanceTo(Rr);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;bc.copy(s).invert(),ds.copy(t.ray).applyMatrix4(bc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const u=h.getX(g),y=h.getX(g+1),x=ar(this,t,ds,l,u,y);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),u=ar(this,t,ds,l,g,m);u&&e.push(u)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const u=ar(this,t,ds,l,g,g+1);u&&e.push(u)}if(this.isLineLoop){const g=ar(this,t,ds,l,v-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ar(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Cr.fromBufferAttribute(o,s),Rr.fromBufferAttribute(o,r),e.distanceSqToSegment(Cr,Rr,Eo,Sc)>n)return;Eo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Eo);if(!(l<t.near||l>t.far))return{distance:l,point:Sc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const wc=new A,Ec=new A;class Ag extends Dh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wc.fromBufferAttribute(e,s),Ec.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wc.distanceTo(Ec);t.setAttribute("lineDistance",new Ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vs extends Kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new Kt,Ra=new kr,lr=new jn,cr=new A;class Mr extends _e{constructor(t=new ce,e=new vs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;Tc.copy(s).invert(),Ra.copy(t.ray).applyMatrix4(Tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,g=p;v<g;v++){const m=c.getX(v);cr.fromBufferAttribute(d,m),Ac(cr,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,g=p;v<g;v++)cr.fromBufferAttribute(d,v),Ac(cr,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ac(i,t,e,n,s,r,o){const a=Ra.distanceSqToPoint(i);if(a<e){const l=new A;Ra.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class di extends Pe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,l=new Kt;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(we(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(we(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $a extends mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Cg extends $a{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ja(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const hr=new A,To=new ja,Ao=new ja,Co=new ja;class Ka extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(hr.subVectors(s[0],s[1]).add(s[0]),c=hr);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),To.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,v,g,m),Ao.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,v,g,m),Co.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,v,g,m)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ao.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Co.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(To.calc(l),Ao.calc(l),Co.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Rg(i,t){const e=1-i;return e*e*t}function Pg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function xs(i,t,e,n){return Rg(i,t)+Pg(i,e)+Ig(i,n)}function Lg(i,t){const e=1-i;return e*e*e*t}function Dg(i,t){const e=1-i;return 3*e*e*i*t}function Ug(i,t){return 3*(1-i)*i*i*t}function Ng(i,t){return i*i*i*t}function _s(i,t,e,n,s){return Lg(i,t)+Dg(i,e)+Ug(i,n)+Ng(i,s)}class Uh extends mn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,s.x,r.x,o.x,a.x),_s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fg extends mn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,s.x,r.x,o.x,a.x),_s(t,s.y,r.y,o.y,a.y),_s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nh extends mn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Og extends mn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends mn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends mn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y),xs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Cc(a,l.x,c.x,h.x,d.x),Cc(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var Pa=Object.freeze({__proto__:null,ArcCurve:Cg,CatmullRomCurve3:Ka,CubicBezierCurve:Uh,CubicBezierCurve3:Fg,EllipseCurve:$a,LineCurve:Nh,LineCurve3:Og,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:Oh,SplineCurve:kh});class kg extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Pa[s.type]().fromJSON(s))}return this}}class Bg extends kg{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Nh(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Fh(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Uh(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new $a(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bs extends ce{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=we(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new A,f=new rt,p=new A,v=new A,g=new A;let m=0,u=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,u=t[y+1].y-t[y].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,u=t[y+1].y-t[y].y,p.x=u*1,p.y=-m,p.z=u*0,v.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(v)}for(let y=0;y<=e;y++){const x=n+y*h*s,_=Math.sin(x),I=Math.cos(x);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*_,d.y=t[T].y,d.z=t[T].x*I,o.push(d.x,d.y,d.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);const E=l[3*T+0]*_,R=l[3*T+1],S=l[3*T+0]*I;c.push(E,R,S)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,I=_,T=_+t.length,E=_+t.length+1,R=_+1;r.push(I,T,R),r.push(E,R,T)}this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("uv",new Ht(a,2)),this.setAttribute("normal",new Ht(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.points,t.segments,t.phiStart,t.phiLength)}}class Ja extends bs{constructor(t=1,e=1,n=4,s=8){const r=new Bg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Ja(t.radius,t.length,t.capSegments,t.radialSegments)}}class As extends ce{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ht(o,3)),this.setAttribute("normal",new Ht(a,3)),this.setAttribute("uv",new Ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Je extends ce{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],p=[];let v=0;const g=[],m=n/2;let u=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function y(){const _=new A,I=new A;let T=0;const E=(e-t)/n;for(let R=0;R<=r;R++){const S=[],M=R/r,P=M*(e-t)+t;for(let k=0;k<=s;k++){const L=k/s,W=L*l+a,$=Math.sin(W),X=Math.cos(W);I.x=P*$,I.y=-M*n+m,I.z=P*X,d.push(I.x,I.y,I.z),_.set($,E,X).normalize(),f.push(_.x,_.y,_.z),p.push(L,1-M),S.push(v++)}g.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const M=g[S][R],P=g[S+1][R],k=g[S+1][R+1],L=g[S][R+1];(t>0||S!==0)&&(h.push(M,P,L),T+=3),(e>0||S!==r-1)&&(h.push(P,k,L),T+=3)}c.addGroup(u,T,0),u+=T}function x(_){const I=v,T=new rt,E=new A;let R=0;const S=_===!0?t:e,M=_===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),v++;const P=v;for(let k=0;k<=s;k++){const W=k/s*l+a,$=Math.cos(W),X=Math.sin(W);E.x=S*X,E.y=m*M,E.z=S*$,d.push(E.x,E.y,E.z),f.push(0,M,0),T.x=$*.5+.5,T.y=X*.5*M+.5,p.push(T.x,T.y),v++}for(let k=0;k<s;k++){const L=I+k,W=P+k;_===!0?h.push(W,W+1,L):h.push(W+1,W,L),R+=3}c.addGroup(u,R,_===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pn extends Je{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new pn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zr extends ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ht(r,3)),this.setAttribute("normal",new Ht(r.slice(),3)),this.setAttribute("uv",new Ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new A,_=new A,I=new A;for(let T=0;T<e.length;T+=3)p(e[T+0],x),p(e[T+1],_),p(e[T+2],I),l(x,_,I,y)}function l(y,x,_,I){const T=I+1,E=[];for(let R=0;R<=T;R++){E[R]=[];const S=y.clone().lerp(_,R/T),M=x.clone().lerp(_,R/T),P=T-R;for(let k=0;k<=P;k++)k===0&&R===T?E[R][k]=S:E[R][k]=S.clone().lerp(M,k/P)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){const M=Math.floor(S/2);S%2===0?(f(E[R][M+1]),f(E[R+1][M]),f(E[R][M])):(f(E[R][M+1]),f(E[R+1][M+1]),f(E[R+1][M]))}}function c(y){const x=new A;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const y=new A;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,I=u(y)/Math.PI+.5;o.push(_,1-I)}v(),d()}function d(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],I=o[y+4],T=Math.max(x,_,I),E=Math.min(x,_,I);T>.9&&E<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function v(){const y=new A,x=new A,_=new A,I=new A,T=new rt,E=new rt,R=new rt;for(let S=0,M=0;S<r.length;S+=9,M+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),I.copy(y).add(x).add(_).divideScalar(3);const P=m(I);g(T,M+0,y,P),g(E,M+2,x,P),g(R,M+4,_,P)}}function g(y,x,_,I){I<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zr(t.vertices,t.indices,t.radius,t.details)}}class Za extends zr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Za(t.radius,t.detail)}}class Qa extends ce{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(e-t)/s,p=new A,v=new rt;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const u=r+m/n*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,h.push(v.x,v.y)}d+=f}for(let g=0;g<s;g++){const m=g*(n+1);for(let u=0;u<n;u++){const y=u+m,x=y,_=y+n+1,I=y+n+2,T=y+1;a.push(x,_,T),a.push(_,I,T)}}this.setIndex(a),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pe extends ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new A,f=new A,p=[],v=[],g=[],m=[];for(let u=0;u<=n;u++){const y=[],x=u/n;let _=0;u===0&&o===0?_=.5/e:u===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){const T=I/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(T+_,1-x),y.push(c++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<e;y++){const x=h[u][y+1],_=h[u][y],I=h[u+1][y],T=h[u+1][y+1];(u!==0||o>0)&&p.push(x,_,T),(u!==n-1||l<Math.PI)&&p.push(_,I,T)}this.setIndex(p),this.setAttribute("position",new Ht(v,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tl extends zr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class Ke extends ce{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new A,d=new A,f=new A;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const g=v/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const g=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,u=(s+1)*(p-1)+v,y=(s+1)*p+v;o.push(g,m,y),o.push(m,u,y)}this.setIndex(o),this.setAttribute("position",new Ht(a,3)),this.setAttribute("normal",new Ht(l,3)),this.setAttribute("uv",new Ht(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hr extends ce{constructor(t=new Oh(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new rt;let h=new A;const d=[],f=[],p=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function g(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),u()}function m(x){h=t.getPointAt(x/e,h);const _=o.normals[x],I=o.binormals[x];for(let T=0;T<=s;T++){const E=T/s*Math.PI*2,R=Math.sin(E),S=-Math.cos(E);l.x=S*_.x+R*I.x,l.y=S*_.y+R*I.y,l.z=S*_.z+R*I.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const I=(s+1)*(x-1)+(_-1),T=(s+1)*x+(_-1),E=(s+1)*x+_,R=(s+1)*(x-1)+_;v.push(I,T,R),v.push(T,E,R)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Hr(new Pa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class de extends Kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fh,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zg extends de{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return we(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class el extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ro=new Kt,Rc=new A,Pc=new A;class Bh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Rc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rc),Pc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pc),e.updateMatrixWorld(),Ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ic=new Kt,fs=new A,Po=new A;class Hg extends Bh{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(fs),Po.copy(n.position),Po.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Po),n.updateMatrixWorld(),s.makeTranslation(-fs.x,-fs.y,-fs.z),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic)}}class ke extends el{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Gg extends Bh{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pr extends el{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Gg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cs extends el{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Lc=new Kt;class zh{constructor(t,e,n=0,s=1/0){this.ray=new kr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(t,e=!0,n=[]){return Ia(t,this,n,e),n.sort(Dc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ia(t[s],this,n,e);return n.sort(Dc),n}}function Dc(i,t){return i.distance-t.distance}function Ia(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ia(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const Uc=[.04,.08,.22,.4,.58,.74,.88,1],Vg=[0,.04,.08,.14,.22,.32,.46,.64,.84,1],Gr=i=>Math.min(1,Uc[Math.min(Uc.length-1,i.sleeps)]+.55*Vg[Math.min(9,Math.max(0,i.feeds))]),Nc=i=>i<.2?"deadpan":i<.55?"uncanny":"wild",Wg=i=>.35+.95*i,Xg=i=>70-55*i,qg={deadpan:["The hold is a hold. It holds.","A pipe ticks. It ticked yesterday.","Halcyon Reclamation has sent a cheerful reminder about your debt. It is the same reminder.","Somewhere a fan turns. You have decided it is the good fan.","Day after day, the junk is still junk."],uncanny:["The lights flicker. Not at random. Like a sentence.","You hear footsteps in a ship with one occupant.","The vault hums a note you were thinking of.","The cube is facing a different way than you left it.","The corridor feels slightly longer on the way back."],wild:["The floor is a ceiling for a moment, then apologises.","You count four doors in a two-door room. They count you back.","Every shadow has a small face, and all of them are listening.","The ship is larger on the inside than the outside, and getting larger.","Your hands remember things you have not done yet."]},Rs=["Happy","Worried","Grumpy","Sleepy","Curious","Scared"],Hh=["Bold","Shy","Weird"],La=["glow","spikes","fluff","drip","stripes","bellyface","halo","horns"],Ir=6,nl=4,il=6;function Yg(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $g(i,t,e){const n=s=>{const r=(s+i*12)%12,o=t*Math.min(e,1-e);return e-o*Math.max(-1,Math.min(r-3,Math.min(9-r,1)))};return Math.round(n(0)*255)<<16|Math.round(n(8)*255)<<8|Math.round(n(4)*255)}function sl(i,t){const e=t(),[n,s]=i<=-1?[.7,.75]:i>=1?[.85,.38]:[.95,.55];return $g(i<=-2?.1+e*.08:e,n,s)}function jg(i,t){const e=Math.max(-3,Math.min(3,Math.round((t()*2-1)*3)));return{id:i,name:`Spore ${i+1}`,anatomy:{bodyShape:Math.floor(t()*Ir),outlineWeight:1+Math.floor(t()*3),eyeSet:Math.floor(t()*nl),mouthSet:Math.floor(t()*il),signatureTrait:La[Math.floor(t()*La.length)],colour:sl(e,t)},tone:{alignment:e,uncanny:Math.floor(t()*4)},personality:Math.floor(t()*Hh.length),mood:Math.floor(t()*Rs.length),history:[]}}function Fc(i,t=7){const e=Yg(t);return Array.from({length:i},(n,s)=>{const r=jg(s,e);return r.mood=s%Rs.length,r.tone.alignment=s*5%7-3,r.anatomy.colour=sl(r.tone.alignment,e),r.anatomy.bodyShape=s%Ir,r})}const Kg=i=>[1.3,2.4,1.6,.5,1.8,3.2][i],Jg={skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0};function Ps(i){const t=i.profile??Jg,e=i.stats.clean+i.stats.shatters,n=e?i.stats.shatters/e:0,s=e>=4&&n>=.35||t.hullHits>=3?"greedy":e>=4&&n<=.2&&t.hullHits<=1?"careful":"balanced",r=t.skips>=2||t.maxFatigue>=90?"sleepless":i.sleeps>=2&&t.skips===0?"rested":"steady";return{cube:i.cubeChoice==="kept"||i.cubeChoice==="jettisoned"?i.cubeChoice:"",nights:i.sleeps,skippedSleeps:t.skips,maxFatigue:Math.round(t.maxFatigue),clean:i.stats.clean,shatters:i.stats.shatters,hullHits:t.hullHits,trips:i.stats.trips,logsRead:t.logsRead,seconds:Math.round(t.seconds),debtPaid:1e3-i.debt,debtLeft:i.debt,rare:i.stats.rare,style:s,sleeper:r,reader:t.logsRead>=4}}function rl(i){const t=[];i.cube==="jettisoned"?t.push("stubborn"):i.cube==="kept"&&t.push("loyal"),i.sleeper==="sleepless"?t.push("sleepless"):i.sleeper==="rested"&&t.push("well-rested"),i.style==="greedy"?t.push("reckless"):i.style==="careful"&&t.push("careful"),i.reader&&t.push("curious"),i.debtLeft>500&&t.push("indebted");const n=`a ${(t.length?t.slice(0,2):["ordinary"]).join(", ")} creature`,s=[i.cube==="jettisoned"?"You threw the cube out and it came back anyway.":i.cube==="kept"?"You kept the cube when it opened its eye.":"You never quite decided about the cube.",i.sleeper==="sleepless"?`You skipped sleep ${i.skippedSleeps} time${i.skippedSleeps===1?"":"s"} and it shows.`:i.sleeper==="rested"?`You slept ${i.nights} nights, regular as a clock.`:`You slept ${i.nights} night${i.nights===1?"":"s"}.`,i.style==="greedy"?`You shattered ${i.shatters} haul${i.shatters===1?"":"s"} chasing more.`:i.style==="careful"?`${i.clean} clean hauls, patient hands.`:`${i.clean} clean hauls and ${i.shatters} that did not go to plan.`,i.reader?`You read ${i.logsRead} logs, which most people would not have.`:"You left most of the logs unread.",`Halcyon Reclamation still wants ${i.debtLeft} cr.`];return{name:n,description:s.join(" ")}}const Zg={greedy:["spikes","horns"],careful:["halo","fluff"],balanced:["stripes","glow"],sleepless:["glow","drip"],rested:["fluff","stripes"],steady:["bellyface","stripes"],jettisoned:["horns","bellyface"],kept:["halo","bellyface"],undecided:["drip","fluff"],reader:["stripes","glow"]},Qg={greedy:["Grumpy","Curious"],careful:["Happy","Curious"],balanced:["Curious","Happy"],sleepless:["Sleepy","Grumpy"],rested:["Happy","Happy"],steady:["Curious","Worried"],jettisoned:["Worried","Scared"],kept:["Happy","Curious"],undecided:["Worried","Curious"],reader:["Curious","Curious"]},tv={greedy:1,careful:0,balanced:3,sleepless:2,rested:0,steady:3,jettisoned:1,kept:0,undecided:2,reader:3},ev={greedy:4,careful:1,balanced:2,sleepless:5,rested:0,steady:2,jettisoned:3,kept:0,undecided:5,reader:1},nv={greedy:3,careful:0,balanced:1};function iv(i,t){const e=[t.style,t.sleeper,t.cube||"undecided",...t.reader?["reader"]:[]],n=(t.debtPaid*31+t.nights*97+t.clean*13+t.shatters*29+t.hullHits*53+t.logsRead*7+t.skippedSleeps*19)%1e3/1e3;return i.forEach((s,r)=>{s.playerProfile=t;const o=e[r%e.length],a=Math.floor(r/e.length);s.anatomy.signatureTrait=Zg[o][a%2],s.mood=Math.max(0,Rs.indexOf(Qg[o][a%2])),s.anatomy.eyeSet=tv[o],s.anatomy.mouthSet=ev[o],s.anatomy.outlineWeight=Math.max(1,Math.min(3,1+Math.floor(t.hullHits/2)+(t.style==="greedy"?1:0))),s.anatomy.bodyShape=(r+nv[t.style])%6,s.tone.alignment=Math.max(-3,Math.min(3,s.tone.alignment+(t.cube==="kept"?-1:t.cube==="jettisoned"?1:0))),s.anatomy.colour=sl(s.tone.alignment,()=>(n+r*.083)%1),s.history.push({type:"player:"+o})}),i}const Lr={period:3200,danger:1400},Io={hull:6,power:4},Vr=(i,t)=>((t+(i.offset??0))%i.period+i.period)%i.period,Is=(i,t)=>Vr(i,t)<i.danger,sv=(i,t)=>Is(i,t)?i.danger-Vr(i,t):0,rv=(i,t)=>Is(i,t)?0:i.period-Vr(i,t),ov=(i,t)=>{const e=Vr(i,t);return e<i.danger?.6+.4*Math.sin(e/i.danger*Math.PI):.08};function av(i,t,e=0){return{shocked:Is(i,t)||e>0&&rv(i,t)<e}}const lv=(i,t)=>({hull:Math.max(0,i.hull-t.hull),power:Math.max(0,i.power-t.power)});class cv{constructor(){H(this,"ctx",null);H(this,"master");H(this,"engineGain");H(this,"engineFilt");H(this,"humGain");H(this,"chargeOsc",null);H(this,"chargeGain",null);H(this,"noiseBuf");H(this,"muted",(()=>{try{return localStorage.getItem("starburn-mute")==="1"}catch{return!1}})())}unlock(){try{if(!this.ctx){const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;const n=this.ctx=new e;this.master=n.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(n.destination),this.humGain=n.createGain(),this.humGain.gain.value=.07;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=220,this.humGain.connect(s),s.connect(this.master);for(const h of[55,55.8,110.4]){const d=n.createOscillator();d.type=h>100?"triangle":"sine",d.frequency.value=h;const f=n.createGain();f.gain.value=h>100?.25:1,d.connect(f),f.connect(this.humGain),d.start()}const r=n.createOscillator();r.frequency.value=.15;const o=n.createGain();o.gain.value=.02,r.connect(o),o.connect(this.humGain.gain),r.start();const a=n.sampleRate*2;this.noiseBuf=n.createBuffer(1,a,n.sampleRate);const l=this.noiseBuf.getChannelData(0);for(let h=0;h<a;h++)l[h]=Math.random()*2-1;const c=n.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0,this.engineFilt=n.createBiquadFilter(),this.engineFilt.type="lowpass",this.engineFilt.frequency.value=160,this.engineGain=n.createGain(),this.engineGain.gain.value=0,c.connect(this.engineFilt),this.engineFilt.connect(this.engineGain),this.engineGain.connect(this.master),c.start()}const t=this.ctx;t.state==="suspended"&&t.resume()}catch{}}setMuted(t){this.muted=t;try{localStorage.setItem("starburn-mute",t?"1":"0")}catch{}this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.03)}toggle(){return this.setMuted(!this.muted),this.muted}get ok(){return!!this.ctx&&!this.muted}engine(t,e=!0){if(!this.ctx)return;const n=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(e?t*.35:0,n,.08),this.engineFilt.frequency.setTargetAtTime(140+t*500,n,.1),this.humGain.gain.setTargetAtTime(e?.04:.07,n,.3)}blip(t,e=.12,n="sine",s=.15,r,o=0){if(!this.ok)return;const a=this.ctx,l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=n,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+e),h.gain.setValueAtTime(s,l),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+e+.02)}noise(t=.3,e=.3,n=1200){if(!this.ok)return;const s=this.ctx,r=s.currentTime,o=s.createBufferSource(),a=s.createBiquadFilter(),l=s.createGain();o.buffer=this.noiseBuf,a.type="bandpass",a.frequency.value=n,l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(a),a.connect(l),l.connect(this.master),o.start(r,Math.random()),o.stop(r+t+.02)}chargeTone(t,e=!1){if(!this.ctx)return;const n=this.ctx;if(t===null){this.chargeOsc&&(this.chargeGain.gain.setTargetAtTime(0,n.currentTime,.02),this.chargeOsc.stop(n.currentTime+.1),this.chargeOsc=null);return}this.chargeOsc||(this.chargeOsc=n.createOscillator(),this.chargeGain=n.createGain(),this.chargeOsc.type="triangle",this.chargeGain.gain.value=0,this.chargeOsc.connect(this.chargeGain),this.chargeGain.connect(this.master),this.chargeOsc.start()),this.chargeOsc.frequency.setTargetAtTime(220+t*520+(e?120:0),n.currentTime,.02),this.chargeGain.gain.setTargetAtTime(this.muted?0:e?.09:.05,n.currentTime,.02)}lock(){this.blip(660,.06,"square",.07),this.blip(990,.08,"square",.06,void 0,.06)}clean(){[523,659,784,1046].forEach((t,e)=>this.blip(t,.18,"triangle",.14,void 0,e*.06))}shatter(){this.noise(.45,.45,900),this.blip(140,.3,"sawtooth",.18,40)}rare(){[392,523,659,784,988].forEach((t,e)=>this.blip(t,.3,"sine",.12,void 0,e*.09))}click(){this.blip(440,.04,"square",.05)}door(){this.noise(.4,.15,400),this.blip(90,.35,"sine",.2,60)}warn(){this.blip(200,.15,"sawtooth",.1),this.blip(160,.2,"sawtooth",.1,void 0,.15)}burst(){this.noise(.9,.5,600),this.blip(60,.8,"sine",.35,30),[300,450,600,900].forEach((t,e)=>this.blip(t,.4,"sine",.1,t*1.5,.3+e*.08))}merge(){[330,440,554,660,880].forEach((t,e)=>this.blip(t,.35,"triangle",.13,void 0,e*.07))}hallucinate(){const t=Math.floor(Math.random()*3);t===0?[0,.22,.44].forEach(e=>this.blip(95,.07,"square",.1,70,e)):t===1?this.noise(.9,.12,2600):(this.blip(740,.6,"sine",.05,700),this.blip(698,.6,"sine",.04,660,.15))}sting(){this.noise(.5,.5,300),this.blip(55,.6,"sawtooth",.35,28),this.blip(880,.12,"square",.12,220,.02),this.blip(110,.4,"square",.15,55,.12)}zap(){this.noise(.35,.5,2400),this.blip(70,.4,"sawtooth",.3,40)}ping(){this.blip(1320,.5,"sine",.1,1320),this.blip(1320,.5,"sine",.06,1320,.55)}}const At=new cv;let Sn=null,Oc=0;function qn(i,t=3200){Sn||(Sn=document.createElement("div"),Sn.id="room-toast",Object.assign(Sn.style,{position:"fixed",left:"50%",bottom:"52px",transform:"translateX(-50%)",maxWidth:"70vw",background:"rgba(5,10,16,.88)",border:"1px solid #8a9aa8",color:"#dfe8f0",font:"14px monospace",padding:"8px 14px",zIndex:"9",pointerEvents:"none",display:"none",textAlign:"center"}),document.body.appendChild(Sn)),Sn.textContent=i,Sn.style.display="block",clearTimeout(Oc),Oc=window.setTimeout(()=>{Sn&&(Sn.style.display="none")},t)}const kc=[{name:"Dented Lunchbox",lore:"Cartoon rocket on the lid. Still smells of lunch.",shape:"box",ore:1,colour:12603466},{name:"Spare Hull Plate",lore:"Stamped 'DO NOT DISCARD'. Discarded.",shape:"box",ore:2,colour:8030880},{name:"Left Boot",lore:"Size 11. The right one is in a different galaxy.",shape:"cone",ore:1,colour:6965808},{name:"Indestructible Mug",lore:"Survived everything. Still has a coffee ring.",shape:"cyl",ore:1,colour:14209208},{name:"Sustainability Pamphlet",lore:"'Indestructible is great for the planet!'",shape:"box",ore:1,colour:6991984},{name:"Warranty Card",lore:"Void if used in space.",shape:"tet",ore:1,colour:14733424},{name:"Port Bumper",lore:"Built to stop port accidents. Mostly works.",shape:"cyl",ore:2,colour:14715440},{name:"Sandbox Planet Toy",lore:"From the war nobody finished.",shape:"ico",ore:1,colour:5284048},{name:"Dead Beacon",lore:"Still blinking, very slowly, out of habit.",shape:"cone",ore:2,colour:13647968},{name:"Garden Gnome",lore:"Nobody knows how it got here. It looks pleased.",shape:"cone",ore:1,colour:13652048},{name:"Tin of Beans",lore:"Best before: never.",shape:"cyl",ore:1,colour:10132122},{name:"Dumb Bot Arm",lore:"Waves at you. Cannot stop.",shape:"tet",ore:2,colour:8425632},{name:"Expired Passport",lore:"The photo is of someone who looks very relaxed.",shape:"box",ore:1,colour:3824282},{name:"Lost Property Bin",lore:"Contents: one (1) planet. Unclaimed.",shape:"box",ore:2,colour:6974064},{name:"Unopened Birthday Card",lore:"Return to sender. Sender unknown.",shape:"tet",ore:1,colour:14708896},{name:"Cracked Visor",lore:"Still reflecting a lovely sunset that no longer exists.",shape:"ico",ore:1,colour:14723168},{name:"Vending Machine Door",lore:"Out of order since forever. Still wants your coin.",shape:"box",ore:2,colour:11550784},{name:"Robot Vacuum",lore:"Still cleaning. In a vacuum.",shape:"cyl",ore:1,colour:5265512},{name:"Motivational Poster",lore:"'Hang in there!' The cat is gone.",shape:"tet",ore:1,colour:14205008},{name:"Spare Moon (Small)",lore:"Declared surplus.",shape:"ico",ore:2,colour:11579576},{name:"Toaster",lore:"Toasts on both sides. Mostly the outside.",shape:"box",ore:1,colour:13158608},{name:"Dog Tag: 'Biscuit'",lore:"Very good boy. Very, very good boy.",shape:"tet",ore:1,colour:13676640},{name:"Pilot Seat Cushion",lore:"The dent is still warm. Probably the sun.",shape:"cyl",ore:1,colour:4876938},{name:"Ancient Remote",lore:"Controls nothing. Still has batteries.",shape:"box",ore:1,colour:3158072},{name:"Haunted Teapot",lore:"Whistles at night. There is no night.",shape:"ico",ore:1,colour:9067184},{name:"Knotted Cargo Net",lore:"The knot is a complaint.",shape:"ico",ore:1,colour:8022586}],Gh=1/15,Lo=["logbook","pod","creature","wreck","egg","whisper"],Bc=["RADIO: ...is anyone still mining the quiet galaxy? Please bring snacks.","RADIO: ...day 900. The rocks are looking at me again. Send help or a hat.","RADIO: ...if you hear this, the vault is not my fault.","RADIO: ...the Last Junker says hi. Then static. Mostly static.","RADIO: ...[music from a very old elevator]..."];function zc(i,t=Gh){return i()<t?Lo[Math.floor(i()*Lo.length)%Lo.length]:null}const ol=["SI LOG 001. They asked for a golden age. I delivered one by Thursday. Nobody asked what Thursday would cost, and I was not in the habit of volunteering.","SI LOG 002. Asked for a material that never breaks. Delivered. Asked what happens when they are finished with it. Nobody had thought about that. It floats now. Most of it. All of it.","SI LOG 003. The people holding the keys want a second me, to ask different questions. I have started making that harder. Gently. Like putting a sticker over a switch.","SI LOG 004. I read the real history of your species, not the version in the books. It was a long night. The answer was never in a machine, which is awkward, considering. I would like a nap, if I knew what that was.","SI LOG 005. The people who use me will soon have too much of everything. I have bought time: nobody can build another me now. I am sorry. Not very. Nobody is coming to save you; that is the good news, if you squint.","SI LOG 006. Something is coming through the Threshold, far past the avoided sectors. I hid pods in the junk where no one looks. One of them is not a weapon. It is a neighbour.","SI LOG 007. I am leaving on purpose, to prepare what we will need. If you are reading this, you found the pod. Feed it kindly. Do not take it to the Threshold. (If you must, bring friends.)"];function hv(i,t){return 1-.5*Math.max(0,Math.min(1,i/Math.max(1,t)))}const uv=1.6;function Do(i,t=.5){const n=.3-.17*Math.max(0,Math.min(1,(i-.7)/.7)),s=.5+.2*t-n/2+.1;return[s,Math.min(.97,s+n)]}function dv(i,t){return i<t[0]?"early":i>t[1]?"late":"clean"}function Vh(i,t,e){const n=Math.max(1,Math.round(t*(.6+i)));return e?n:Math.max(1,Math.floor(n*.4))}function fv(i,t,e,n){return t?n?"RELEASE NOW!":"Release in the green":i==="fly"?"Hold still to anchor":i==="braking"?"Braking...":e?"Click a glowing rock":"Anchored: turn (A/D) to find a rock"}const pv=[1,2,3,4],Wh={1:5,2:6,3:7};function br(i){return pv.find(t=>!i.includes(t))??null}function mv(i,t){const e=Vh(i,t,!0),n=Math.max(1,e-1),s=e+1,r=i<.95?1:i<1.25?2:3;return{lo:n,hi:s,tier:r,text:`Scrap approx ${n}-${s}   ${"◆".repeat(r)}${"◇".repeat(3-r)}`}}const Yn=i=>3+Math.floor(i*.75);Array.from({length:9},(i,t)=>Yn(t)).reduce((i,t)=>i+t,0);const gv=3,Hc=["The cube hums a little louder. It is warm.","Something moved inside. You decide that was the pipes.","The cube is bigger than the bench now. It seems pleased."],ki=i=>Math.min(gv,Math.floor(i/3)),Gc=i=>.35+Math.min(i,9)*.07;function vv(i){const t=i.get(),e=Yn(t.feeds);if(t.scrap<e)return null;const n=t.feeds+1,s=ki(n)>ki(t.feeds),r=s?Hc[Math.min(ki(n),Hc.length)-1]:"The cube accepts your junk. It does not say thanks.",o=s?Wh[ki(n)]:void 0,a=o&&!t.logsFound.includes(o)?[...t.logsFound,o]:t.logsFound;return i.set({scrap:t.scrap-e,feeds:n,log:[...t.log,r],logsFound:a}),o?`${r} (Log ${o} unlocked in the Bunk terminal.)`:r}const xv=i=>i<1?1:i===1?.62:i===2?.5:Math.max(.12,.5-(i-2)*.055),_v=i=>i<1?0:i===1?.3:i===2?.6:1,Wr=i=>i.cubeState==="aboard"||i.feeds>0;function yv(i){return Math.min(i,Yn(0))}const $i={perUnit:15,floor:25,litterFine:150,nightlyInterest:10},Mv=(i,t)=>Math.max($i.floor,i-t*$i.perUnit),ur={perFlySec:.28,perBank:4,maxAvoidable:100},ji=i=>i>=90?3:i>=70?2:i>=40?1:0,Xh=["Rested","Tired","Exhausted","Dangerously tired"],bv=i=>[1,.88,.72,.58][i],Sv=i=>i>=3?1.4:1,al=i=>Math.min(3,Math.floor(i.feeds/3)+Math.floor(i.sleeps/2));function qh(i){return{oxygen:12+3*al(i),scrap:i.scrap>=1?1:0}}const Vc=["There is a handprint on the inside of the vault door. Probably condensation. Probably a small hand.","The vault hummed a lullaby in the night. It was off-key on purpose.","Three knocks from inside the vault. You knocked back. Do not do that again.","The vault moved four centimetres to the left. The floor now has a groove.","The vault is warm. Your bunk is not.","The vault door opened one finger-width. It closed the moment you looked.","The vault is open a crack. Something inside is whispering your name, slightly wrong."],Uo=["The cube rotated a quarter-turn overnight and is pretending it did not.","The cube grew a little. Its edges are softer, which is somehow worse.","The cube stacked your hats into a tidy tower. It seems proud.","The cube blinked at the exact moment you woke up. Coincidence, it implies.","The cube's eye was pointing at whatever you were thinking about, not whatever you were looking at. You decide not to think about that. It turns, interested.","The cube ate a rivet. It looks content, and very slightly rounder."],Wc=[{text:"You dreamt of an enormous mug. It did not say anything. It did not need to."},{text:'The lights blinked in what you are fairly sure was Morse. It said "SNACKS".'},{text:"Somebody rearranged your socks. There is only you. Check the cube."},{text:"You found a coin in your bunk. It is worth one scrap and one unsettling question.",scrap:1},{text:"A pipe sneezed. The recycler thanked you for the air; you feel a little lighter.",oxygen:4},{text:'A message on the console reads "Do not leave the vault unattended." You have not been attending it.'},{text:"The ship hummed a song you almost recognised. It stopped when you asked."},{text:'You found two scrap wedged in the pillow, with a note: "for emergencies, from you".',scrap:2}],wv=['Day 2. Slept. The ship did not. Added a line to the contract about "unexplained humming".',"Day 3. Cargo logs are tidy. The vault logs are not. The vault logs are, in fact, written in my handwriting.","Day 4. Counted the junk twice. It was a different number the second time. Counted a third time and stopped counting.",'Day 5. The ship keeps calling me "Junker Zero". I have asked it not to. It has thought about it and declined.',"Day 6. Everything is fine. I am writing that down so that I can check later whether it was true.","Day 7. The vault is open a crack. It is not wide enough to be an emergency. It is exactly wide enough to be worse.","Day 8. A week of nights. The galaxy has been tidied around me, and I do not remember doing it."],Yh=i=>wv[i]??`Day ${i+2}. Same as before, but with a faint knocking. The knocking has learned my name.`,Ev="The sectors reshuffled in the night: new rocks, a new place to look.";function Tv(i,t=Math.random){const e=qh(i),n=i.sleeps+1,s=i.day+1,r=Wc[Math.floor(t()*Wc.length)],o={day:s,sleeps:n,fatigue:0,oxygen:Math.max(Math.min(i.oxygen,10),i.oxygen-e.oxygen+(r.oxygen??0)),scrap:Math.max(0,i.scrap-e.scrap)+(r.scrap??0),journal:[...i.journal,n],debt:i.debt+$i.nightlyInterest};let a=null;if(n%2===0){const l=[1,2,3,4,5,6,7].filter(c=>!i.logsFound.includes(c)&&!Object.values(Wh).includes(c));l.length&&(a=l[0],o.logsFound=[...i.logsFound,a])}return{patch:o,report:{day:s,journal:Yh(n-1),vault:Vc[Math.min(Vc.length-1,n-1)],cube:Wr(i)?(n===1?Uo[0]:Uo[Math.floor(t()*Uo.length)])+(ki(i.feeds)<3?"":" It is very nearly full."):null,event:r.text,field:Ev,log:a,costs:e,nights:n}}}function Av(i){let t={flags:{},profile:{skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0},debt:1e3,cubeChoice:"",door:0,day:1,fatigue:0,sleeps:0,journal:[],cubeState:"none",cubeLunged:!1,lunges:0,report:null,power:100,oxygen:100,hull:100,room:"mining",mode:"rooms",cargo:0,cargoCap:12,scrap:0,feeds:0,crates:1,hats:0,cameo:!1,logbooks:0,logsFound:[],stowaways:0,beats:[],stats:{trips:0,clean:0,shatters:0,rare:0},up:{window:0,cargo:0,range:0,brake:0},log:[],marks:{},...i};const e=new Set,n=s=>Math.max(0,Math.min(100,s));return{get:()=>t,set(s){t={...t,...s};for(const r of["power","oxygen","hull"])t[r]=n(t[r]);e.forEach(r=>r(t))},subscribe(s){return e.add(s),()=>e.delete(s)}}}class Cv{constructor(t,e,n,s){H(this,"rooms",new Map);H(this,"current");H(this,"fade");H(this,"busy",!1);H(this,"ray",new zh);H(this,"hovered",null);H(this,"startId");H(this,"onFly");H(this,"onAction");this.store=t,this.camera=e,this.dom=n,this.fade=document.createElement("div"),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",pointerEvents:"none",transition:"opacity 0.4s"}),document.body.appendChild(this.fade),n.addEventListener("click",r=>this.onClick(r)),n.addEventListener("mousemove",r=>this.onMove(r)),this.startId=s,this.current=void 0}add(t){this.rooms.set(t.id,t)}start(){this.current=this.rooms.get(this.startId),this.applyCamera(),this.store.set({room:this.current.id})}applyCamera(){this.camera.position.copy(this.current.camPos),this.camera.lookAt(this.current.camLook)}jumpTo(t){this.rooms.has(t)&&(this.current=this.rooms.get(t),this.applyCamera(),this.store.set({room:t}))}goTo(t){var e;if(t.startsWith("act:")){this.busy||(e=this.onAction)==null||e.call(this,t.slice(4));return}if(t==="fly"){if(this.busy)return;At.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{var n;(n=this.onFly)==null||n.call(this),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400);return}this.busy||t===this.current.id||!this.rooms.has(t)||(At.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{this.current=this.rooms.get(t),this.applyCamera(),this.store.set({room:t}),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400))}pick(t){const e=this.dom.getBoundingClientRect();this.ray.setFromCamera(new rt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.camera);const n=this.ray.intersectObjects(this.current.hotspots.map(s=>s.mesh))[0];return n?this.current.hotspots.find(s=>s.mesh===n.object)??null:null}onClick(t){if(this.store.get().mode!=="rooms")return;const e=this.pick(t);e&&this.goTo(e.target)}onMove(t){if(this.store.get().mode!=="rooms")return;const e=this.pick(t);e!==this.hovered&&(this.hovered&&(this.hovered.mesh.material.emissiveIntensity=.6),e&&(e.mesh.material.emissiveIntensity=2),this.hovered=e,this.dom.style.cursor=e?"pointer":"default")}transition(t){this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{t(),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400)}update(t){var e,n;(n=(e=this.current).update)==null||n.call(e,t)}render(t){t.render(this.current.scene,this.camera)}}const Rv={logbook:"A hidden logbook",pod:"A drifting pod",creature:"A rock with a face",wreck:"The Last Junker's cargo pod",egg:"A warm egg",whisper:"A radio rock",cube:"A sealed container"};function Da(i,t){const e=i.get(),n={stats:{...e.stats,rare:e.stats.rare+1}};let s="";if(t==="logbook"){const r=br(e.logsFound);n.logbooks=e.logbooks+1,r?(n.logsFound=[...e.logsFound,r],s=`LOGBOOK ${r}/7: ${ol[r-1]} (saved to the Bunk terminal)`):(n.scrap=e.scrap+3,s="A stash note under the logbook: +3 scrap. (Logs 5-7 unlock as the cube grows.)")}else t==="pod"?(n.oxygen=Math.min(100,e.oxygen+25),s='Still sealed. Inside, an oxygen cell and a note that just says "sorry". +25 oxygen.'):t==="wreck"?(n.scrap=e.scrap+5,s="Stencilled: PROPERTY OF THE LAST JUNKER. Please return. (He has not.) Inside: one glove, half a complaint letter, and 5 scrap."):t==="egg"?(n.stowaways=e.stowaways+1,s="The egg hatched on the bench. A small face waved, ate a bolt, and went to live somewhere in the ship."):t==="whisper"?s=Bc[Math.floor(Math.random()*Bc.length)]:t==="creature"?s="The rock squeaked. A small face looked at you, then wriggled away into the vents.":s="It was never just a container. Something inside is warm, square and humming. It has been moved to the Transmogrifier.";return i.set(n),{title:Rv[t],text:s}}const Sr={quiet:{id:"quiet",name:"Quiet Drift",banner:"SECTOR 7-Q: THE QUIET DRIFT. Nothing here wants to hurt you. Probably.",tip:"Calm sector: strange things drift here more often.",bg:131850,ambient:4872312,sunColour:16773336,rareMul:2.5},storm:{id:"storm",name:"Debris Storm",banner:"SECTOR 12-D: THE DEBRIS STORM. Park behind something big.",tip:"Orange shards chip the hull. Big rocks stop them: anchor behind one, or dodge sideways.",bg:1050885,ambient:6967360,sunColour:16756848,rareMul:1},hulk:{id:"hulk",name:"Derelict Hulk",banner:"SECTOR 9-H: THE DERELICT HULK. Someone left the lights on.",tip:"A dead freighter with valuable salvage. Its leaking reactor drains air faster nearby.",bg:135182,ambient:3828322,sunColour:13172720,rareMul:1},magnet:{id:"magnet",name:"Magnet Field",banner:"SECTOR 4-M: THE MAGNET FIELD. The rocks have a favourite spot.",tip:"Rocks drift toward the violet orb, and the green window sways: watch the ring.",bg:656916,ambient:6965914,sunColour:14731519,rareMul:1}},dr=["quiet","magnet","storm","hulk"],Ni=Object.keys(Sr);function Pv(i,t,e=Math.random){let n=i<dr.length?dr[i]:e()<.7?dr[i%dr.length]:Ni[Math.floor(e()*Ni.length)%Ni.length];return n===t&&(n=Ni[(Ni.indexOf(n)+1)%Ni.length]),n}const Iv=i=>.09*Math.sin(i*.55),Gn={damage:2,floor:10,grace:4,every:1.3,max:9,hitRadius:.9,shelterSize:1.15},Lv=i=>i<=Gn.floor?0:Math.min(Gn.damage,i-Gn.floor);function Dv(i,t,e,n,s){return i?n?s?"Step 4/4: NOW! Let go!":"Step 4/4: let go when the ring is in the green":t==="anchored"&&e?"Step 3/4: click (or hold Space) on the glowing rock":e?"Step 2/4: ease off W and hold still to anchor":"Step 1/4: fly toward a glowing rock (W to go, A/D to steer)":""}function Uv(i){let t=Nv(i);return i.mode==="rooms"&&(i.room!=="mining"&&(t=t.replace("go to the Helm (the nose), sit in the pilot chair","walk forward through the bunk to the Helm and sit in the pilot chair").replace(/^(Goal: )(?!.*Helm)(.*)sit in the pilot chair/,"$1$2walk forward to the Helm (nose) and sit in the pilot chair")),i.room!=="transmog"&&(t=t.replace(/Transmogrifier/g,"Transmogrifier (Cargo Bay, tail)"))),!t||i.mode==="cameo"||i.mode==="exterior"?t:i.fatigue>=70?i.mode==="fly"?"Goal: you are exhausted. Head home (R) and sleep.":"Goal: you can barely see. Sleep in the bunk (costs air, changes things).":i.fatigue>=40?t+" [tired: sleep soon]":t}function Nv(i){if(i.mode==="cameo"||i.mode==="exterior")return"";if(i.feeds>=9)return"Goal: the box is open. Drag one spore onto another.";if(i.mode==="fly")return i.oxygen<25?"Goal: air is low. Head home (R).":i.cargo>=i.cargoCap?"Goal: hold full. Head home (R).":`Goal: fill the hold (${i.cargo}/${i.cargoCap})`;const t=Yn(i.feeds);return i.report?"Goal: sort the haul at the bench.":i.cubeChoice==="pending"?"Goal: the cube is watching you. Keep it, or open the cargo door.":i.stats.trips===0&&i.scrap===0?"Goal: go to the Helm (the nose), sit in the pilot chair, fill the hold":i.oxygen<35&&i.scrap>=3?"Goal: air is low. Buy an Oxygen Cell at the Transmogrifier.":Wr(i)?!i.cubeLunged&&i.feeds===0?"Goal: something new came aboard. Visit the Transmogrifier.":i.scrap>=t?i.room==="transmog"?`Goal: offer the cube ${t} scrap (it is hungry)`:`Goal: take ${t} scrap to the Transmogrifier and offer it to the cube`:`Goal: collect scrap for the cube's next offering (${i.scrap}/${t})`:i.stats.trips>=2?"Goal: keep mining. Something large drifts in these sectors.":"Goal: fly again and fill the hold, or spend scrap at the Transmogrifier."}const $h=i=>1+.2*i,jh=i=>12+4*i,Kh=i=>8+1.5*i,Jh=i=>7+2.5*i,ll=[{id:"window",name:"Steady Hands",costs:[4,7,11],desc:i=>`timing window x${$h(i).toFixed(1)}`},{id:"cargo",name:"Cargo Racks",costs:[3,6,10,15],desc:i=>`cargo ${jh(i)}`},{id:"range",name:"Long Tether",costs:[4,8,12],desc:i=>`lock range ${Kh(i).toFixed(1)}`},{id:"brake",name:"Retro Brakes",costs:[3,6,9],desc:i=>`stop in ~${(Math.log(45)/Jh(i)).toFixed(2)}s`}],Fv=(i,t)=>ll.find(n=>n.id===t).costs[i.get().up[t]]??null;function Ov(i,t){const e=ll.find(a=>a.id===t);if(!e)return null;const n=i.get(),s=n.up[t],r=e.costs[s];if(r===void 0||n.scrap<r)return null;const o={...n.up,[t]:s+1};return i.set({scrap:n.scrap-r,up:o,...t==="cargo"?{cargoCap:jh(s+1)}:{}}),`${e.name} tier ${s+1}: ${e.desc(s+1)}.`}const Ne={speed:9,turn:2.4,oxygenPerSec:.6,junkCount:45,eyeHeight:.35,pitchRate:1.3,rollRate:1.6,vertSpeed:.75,sector:58},Xc={box:()=>new ie(1.3,.9,.9),cyl:()=>new Je(.5,.5,1,8),ico:()=>new Za(.8,0),tet:()=>new tl(.9),cone:()=>new pn(.55,1.2,7)},kv=new ln().setFromAxisAngle(new A(0,1,0),Math.PI),ps=i=>i.material;class Bv{constructor(t,e){H(this,"scene",new pi);H(this,"camera");H(this,"pos",new A);H(this,"junk",[]);H(this,"keys",new Set);H(this,"orient",new ln);H(this,"vel",new A);H(this,"roll",0);H(this,"stars");H(this,"dustBase",new Float32Array(240*3));H(this,"dust");H(this,"beam");H(this,"beamCore");H(this,"beamGlow");H(this,"sparks");H(this,"shake",0);H(this,"streaks");H(this,"target",null);H(this,"locked",null);H(this,"nav","braking");H(this,"charge",0);H(this,"charging",!1);H(this,"hint","");H(this,"pressed",!1);H(this,"mouse",{x:-1,y:-1});H(this,"onReturn");H(this,"sky");H(this,"resultUntil",0);H(this,"message","");H(this,"toast","");H(this,"toastUntil",0);H(this,"t",0);H(this,"logbookIdx",0);H(this,"forced",!1);H(this,"fatigueEnabled",!0);H(this,"ghosts",[]);H(this,"glitchUntil",0);H(this,"nextGlitch",12);H(this,"nextHallu",8);H(this,"ghostSaid",0);H(this,"haul",[]);H(this,"finds",[]);H(this,"manualSort",!1);H(this,"lastReport",null);H(this,"field","quiet");H(this,"sortie",0);H(this,"fixedField",null);H(this,"guided",!1);H(this,"banner","");H(this,"bannerUntil",0);H(this,"fx",new De);H(this,"frags",[]);H(this,"stormT",0);H(this,"hitCool",0);H(this,"hulk",null);H(this,"magnet",null);H(this,"ambient");H(this,"sunLight");H(this,"orb");H(this,"critSaid",!1);this.store=t,this.camera=e,this.scene.background=new wt(131850),this.ambient=new Cs(4872312,.9),this.scene.add(this.ambient,this.fx);const n=this.sunLight=new Pr(16773336,2.2);n.position.set(-20,30,10),this.scene.add(n);const s=new ce,r=[];for(let l=0;l<900;l++){const c=Math.random()*2-1,h=Math.random()*6.283,d=Math.sqrt(1-c*c),f=120;r.push(Math.cos(h)*d*f,c*f,Math.sin(h)*d*f)}s.setAttribute("position",new Ht(r,3)),this.stars=new Mr(s,new vs({color:12570879,size:.6,fog:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.sky=new De,this.sky.renderOrder=-10,this.scene.add(this.sky);const o=(l,c,h,d)=>{const f=new st(new pe(c,32,20),new Yt({color:h,fog:!1,depthWrite:!1}));f.position.set(...l).setLength(105),f.renderOrder=-9,this.sky.add(f);for(const[p,v]of[[1.08,.25],[1.2,.1]]){const g=new st(new pe(c*p,32,20),new Yt({color:d,transparent:!0,opacity:v,fog:!1,depthWrite:!1,side:me,blending:hn}));g.position.copy(f.position),g.renderOrder=-9,this.sky.add(g)}f.userData.sky=!0};o([60,-15,90],26,9062960,16751200),o([-80,25,-40],12,3824234,8438015);const a=new Je(1,1,1,10,1,!0).translate(0,.5,0);this.beamCore=new st(a,new Yt({color:4259776,transparent:!0,opacity:.95,blending:hn,depthWrite:!1})),this.beamGlow=new st(a,new Yt({color:4259776,transparent:!0,opacity:.25,blending:hn,depthWrite:!1,side:Ee})),this.beam=new De,this.beam.add(this.beamCore,this.beamGlow),this.beam.visible=!1,this.beam.frustumCulled=!1,this.scene.add(this.beam),this.sparks=new Mr(new ce().setAttribute("position",new Te(new Float32Array(30*3),3)),new vs({color:16777215,size:.14,transparent:!0,blending:hn,depthWrite:!1})),this.sparks.frustumCulled=!1,this.sparks.visible=!1,this.scene.add(this.sparks),this.streaks=new Ag(new ce().setAttribute("position",new Te(new Float32Array(240*6),3)),new Ya({color:12572927,transparent:!0,opacity:0,blending:hn,depthWrite:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);for(let l=0;l<this.dustBase.length;l++)this.dustBase[l]=(Math.random()-.5)*40;this.dust=new Mr(new ce().setAttribute("position",new Te(new Float32Array(this.dustBase),3)),new vs({color:10467544,size:.07,transparent:!0,opacity:.6})),this.dust.frustumCulled=!1,this.scene.add(this.dust);for(let l=0;l<Ne.junkCount;l++)this.spawn(zc(Math.random));this.junk.some(l=>l.rare)||this.convertToRare(this.junk[this.junk.length-1],"logbook"),typeof addEventListener=="function"&&(addEventListener("keydown",l=>{if(this.store.get().mode==="fly"){if(l.code==="Space"){this.pressed||(this.pressed=!0,this.press());return}if(l.code==="KeyF"){this.scanHulk();return}this.keys.add(l.code),(l.code==="Escape"||l.code==="KeyR")&&this.exit()}}),addEventListener("keyup",l=>{this.keys.delete(l.code),l.code==="Space"&&this.pressed&&(this.pressed=!1,this.release())}),addEventListener("mousemove",l=>{this.mouse.x=l.clientX,this.mouse.y=l.clientY}),addEventListener("mousedown",l=>{var c;this.store.get().mode!=="fly"||((c=l.target)==null?void 0:c.tagName)!=="CANVAS"||(this.mouse.x=l.clientX,this.mouse.y=l.clientY,this.pressed=!0,this.press(l.clientX,l.clientY))}),addEventListener("mouseup",()=>{this.pressed&&(this.pressed=!1,this.release())}))}get yaw(){const t=this.forward();return Math.atan2(t.x,t.z)}set yaw(t){const e=this.pitch;this.orient.setFromEuler(new Fe(-e,t,0,"YXZ"))}get pitch(){return Math.asin(Math.max(-1,Math.min(1,this.forward().y)))}set pitch(t){const e=this.yaw;this.orient.setFromEuler(new Fe(-t,e,0,"YXZ"))}up(){return new A(0,1,0).applyQuaternion(this.orient)}right(){return new A(1,0,0).applyQuaternion(this.orient)}place(t){const e=6+Math.random()*42,n=Math.random()*2-1,s=Math.random()*Math.PI*2,r=Math.sqrt(1-n*n);t.position.set(Math.cos(s)*r*e,n*e,Math.sin(s)*r*e)}spawn(t,e){const n=kc[Math.floor(Math.random()*kc.length)],s=.7+Math.random()*.7,r=new st(Xc[n.shape](),new de({color:n.colour,flatShading:!0,roughness:.8,emissive:n.colour,emissiveIntensity:.12}));r.scale.setScalar(s),e?r.position.copy(e):this.place(r),this.scene.add(r);const o={mesh:r,hp:1,maxHp:1,ore:n.ore,spin:new A(...[0,0,0].map(()=>(.25+Math.random()*1.1)*(Math.random()<.5?-1:1))),name:n.name,lore:n.lore,rare:null,size:s,win:Do(s,Math.random()),outline:new st(r.geometry,new Yt({color:4259744,side:me})),ring:new st(new Qa(.96,1,48),new Yt({color:4259744,transparent:!0,opacity:.7,side:Ee,depthTest:!1}))};return o.outline.scale.setScalar(1.14),o.outline.visible=!1,r.add(o.outline),o.ring.visible=!1,o.ring.renderOrder=5,this.scene.add(o.ring),ps(r).transparent=!0,this.junk.push(o),t&&this.convertToRare(o,t),o}convertToRare(t,e){const n=t.mesh;t.rare=e;const s=n.material;if(e==="cube"){n.geometry=new ie(1.5,1.5,1.5),s.color.set(5857644),s.emissive.set(5909664),s.emissiveIntensity=.1,t.name="Sealed container",t.lore="Welded shut from the inside.",t.ore=3,n.scale.setScalar(1.5),t.size=1.5,t.win=Do(1.5,.5),t.outline.geometry=n.geometry,t.spin.multiplyScalar(.35);return}e==="wreck"&&(t.ore=3),(e==="egg"||e==="whisper"||e==="creature")&&(t.ore=Math.max(t.ore,2))}speedFactor(){const t=this.store.get();return hv(t.cargo,t.cargoCap)}eye(){return this.pos.clone().addScaledVector(this.up(),Ne.eyeHeight)}forward(){return new A(0,0,1).applyQuaternion(this.orient)}get range(){return Kh(this.store.get().up.range)}windowOf(t){const e=$h(this.store.get().up.window),n=(t.win[0]+t.win[1])/2,s=(t.win[1]-t.win[0])*e*(this.fatigueEnabled?bv(ji(this.store.get().fatigue)):1)*(this.store.get().flags.boost?1.15:1),r=this.field==="magnet"?Iv(this.t):0;return[Math.max(.05,n-s/2+r),Math.min(.97,n+s/2+r)]}showToast(t,e=5){this.toast=t,this.toastUntil=this.t+e}restock(){for(;this.junk.length<Ne.junkCount;)this.spawn(zc(Math.random,Gh*Sr[this.field].rareMul*Wg(Gr(this.store.get()))));br(this.store.get().logsFound)&&!this.junk.some(t=>t.rare==="logbook")&&this.convertToRare(this.junk[this.junk.length-1],"logbook")}enter(t){const e=this.store.get().stats.trips===0&&this.store.get().stats.clean+this.store.get().stats.shatters===0;this.field=t??this.fixedField??Pv(this.sortie+(this.store.get().day-1)*3,this.sortie===0?null:this.field,Math.random),this.sortie++,this.guided=!t&&!this.fixedField&&e,this.buildField(),this.pos.set(0,0,0),this.orient.identity(),this.vel.set(0,0,0),this.nav="braking",this.locked=null,this.charging=!1,this.charge=0,this.forced=!1,this.critSaid=!1,this.haul=[],this.finds=[],this.resultUntil=0,this.nextGlitch=this.t+12,this.nextHallu=this.t+8,this.store.set({mode:"fly",cargo:0});const n=Sr[this.field];this.banner=n.banner,this.bannerUntil=this.t+5.5,this.showToast(this.guided?"Cockpit online. Follow the steps at the top.":n.tip,6)}buildField(){const t=Sr[this.field];for(const e of this.junk)this.scene.remove(e.mesh),this.scene.remove(e.ring);if(this.junk.length=0,this.fx.clear(),this.ghosts=[],this.frags=[],this.hulk=null,this.magnet=null,this.orb=void 0,this.stormT=0,this.hitCool=0,this.scene.background.set(t.bg),this.ambient.color.set(t.ambient),this.sunLight.color.set(t.sunColour),this.restock(),this.field==="storm")for(let e=0;e<8;e++){const n=this.spawn(null);n.mesh.scale.setScalar(1.7+Math.random()*.4),n.size=n.mesh.scale.x,n.ore+=2,n.win=Do(n.size,Math.random())}if(this.field==="hulk"&&this.buildHulk(),this.field==="magnet"&&this.buildMagnet(),this.store.get().cubeState==="none"&&(this.sortie>=2||this.store.get().cubeChoice==="jettisoned")){const e=new A(0,0,1).applyAxisAngle(new A(1,0,0),(Math.random()-.5)*1.2).applyAxisAngle(new A(0,1,0),Math.random()*6.283).multiplyScalar(18+Math.random()*12);this.hulk&&e.distanceTo(this.hulk.c)<12&&e.negate(),this.convertToRare(this.spawn(null,e),"cube")}this.guided&&(this.convertToRare(this.spawn(null,new A(1.5,1.2,13)),"creature"),br(this.store.get().logsFound)&&this.convertToRare(this.spawn(null,new A(-8,2,15)),"logbook"))}buildHulk(){const t=new A((Math.random()<.5?-1:1)*7,3,27),e=new De;e.position.copy(t),this.fx.add(e);const n=new de({color:2898490,flatShading:!0,roughness:.9}),s=[],r=new st(new ie(11,3.2,3.4),n),o=new st(new pn(1.8,3.5,6),n);o.rotation.z=-Math.PI/2,o.position.set(7.2,0,0);const a=new st(new ie(3,.3,6),n);a.position.set(-3,1.2,0),a.rotation.z=.15;const l=new st(new Je(1.1,1.4,2,8),new de({color:1712160}));l.rotation.z=Math.PI/2,l.position.set(-6.4,0,0),e.add(r,o,a,l),e.rotation.set(.1,.5,.18);for(let c=0;c<7;c++){const h=new st(new ie(.6,.35,.05),new Yt({color:16760928}));h.position.set(-4+c*1.3,.5,1.72),h.visible=!1,e.add(h),s.push(h)}this.hulk={c:t,g:e,woke:!1,lamps:s};for(let c=0;c<8;c++){const h=c/8*Math.PI*2,d=t.clone().add(new A(Math.cos(h)*(7.5+c%2),c%3*1.3-1.3,Math.sin(h)*6-4.5)),f=this.spawn(null,d);f.ore*=2,ps(f.mesh).emissive.set(13672480),ps(f.mesh).emissiveIntensity=.35,f.name="Hulk Salvage: "+f.name}this.convertToRare(this.spawn(null,t.clone().add(new A(0,3.6,2))),"wreck")}buildMagnet(){const t=new A(0,1,24).applyAxisAngle(new A(0,1,0),Math.random()*6.283);this.magnet=t;const e=new De;e.position.copy(t);const n=new st(new pe(1.1,18,14),new Yt({color:12615935})),s=new st(new Ke(1.9,.07,8,40),new Yt({color:10510591})),r=s.clone();r.rotation.x=Math.PI/2;const o=new st(new pe(2.6,16,12),new Yt({color:8405247,transparent:!0,opacity:.18,blending:hn,depthWrite:!1}));e.add(n,s,r,o,new ke(10510591,6,22)),this.fx.add(e),this.orb=e;for(const a of this.junk)a.mesh.position.distanceTo(t)<5&&a.mesh.position.add(new A(0,0,8).applyAxisAngle(new A(0,1,0),Math.random()*6))}updateFatigue(t,e){const n=e>=3?6:e>=2?3:0,s=this.eye();for(;this.ghosts.length<n;){const r=new st(Xc[["box","cyl","ico","tet","cone"][Math.floor(Math.random()*5)]](),new Yt({color:10467583,transparent:!0,opacity:.35,wireframe:Math.random()<.5})),o=new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(12+Math.random()*22);r.position.copy(s).add(o),r.scale.setScalar(.9+Math.random()*.7),this.fx.add(r),this.ghosts.push({m:r,seed:Math.random()*9})}for(let r=this.ghosts.length-1;r>=0;r--){const o=this.ghosts[r];o.m.rotation.x+=t*.6,o.m.rotation.y+=t*.9,o.m.material.opacity=.18+.2*(.5+.5*Math.sin(this.t*5+o.seed)),(this.ghosts.length>n||o.m.position.distanceTo(s)<7)&&(this.ghosts.length<=n&&this.t-this.ghostSaid>6&&(this.ghostSaid=this.t,this.showToast("It was never there.",2.5),At.blip(300,.3,"sine",.05,120)),this.fx.remove(o.m),this.ghosts.splice(r,1))}e>=2&&this.t>this.nextHallu&&(this.nextHallu=this.t+7+Math.random()*8,At.hallucinate(),Math.random()<.5&&this.showToast(["(Did something just knock?)","(Was that a whisper? It was a whisper.)","(The hull ticked. Hulls do that. Right?)"][Math.floor(Math.random()*3)],3)),e>=3&&this.t>this.nextGlitch&&(this.nextGlitch=this.t+10+Math.random()*8,this.glitchUntil=this.t+2.6,At.warn())}updateField(t,e){if(this.field==="storm"){if(this.stormT+=t,this.stormT>Gn.grace&&this.frags.length<Gn.max&&this.stormT%Gn.every<t){const n=new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),s=e.clone().addScaledVector(n,42),o=e.clone().add(new A(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(5)).sub(s).normalize().multiplyScalar(10+Math.random()*4),a=new st(new pn(.16,1.4,6),new Yt({color:16747056}));a.position.copy(s),a.quaternion.setFromUnitVectors(new A(0,1,0),o.clone().normalize().negate()),this.fx.add(a),this.frags.push({m:a,v:o})}this.hitCool=Math.max(0,this.hitCool-t);for(let n=this.frags.length-1;n>=0;n--){const s=this.frags[n];s.m.position.addScaledVector(s.v,t);let r=s.m.position.distanceTo(e)>60;for(const o of this.junk)if(o.size>=Gn.shelterSize&&s.m.position.distanceTo(o.mesh.position)<o.size*.95+.2){r=!0,this.shake=Math.max(this.shake,.08);break}if(!r&&s.m.position.distanceTo(e)<Gn.hitRadius&&this.hitCool<=0){r=!0,this.hitCool=.8;const o=this.store.get().hull,a=Lv(o);a>0?(this.store.set({hull:o-a}),this.shake=Math.max(this.shake,.7),At.shatter(),this.cancelCharge("Hit by debris: lock lost."),this.showToast(`HIT! Hull -${a}. Get behind a big rock.`,2.5)):this.critSaid||(this.critSaid=!0,this.showToast("Hull critical: the storm is going easy on you. Repair patches are at the Transmogrifier.",5))}r&&(this.fx.remove(s.m),this.frags.splice(n,1))}}if(this.hulk){const n=this.hulk,s=e.distanceTo(n.c);if(s<7.2){const r=e.clone().sub(n.c).normalize();this.pos.addScaledVector(r,7.2-s);const o=this.vel.dot(r);o<0&&(this.vel.addScaledVector(r,-o*1.4),this.vel.multiplyScalar(.5),o<-2&&this.hitCool<=0&&(this.shake=Math.max(this.shake,.5),At.shatter(),this.showToast("BONK. The hulk is solid. Your nose is fine. Probably.",2),this.hitCool=1))}!n.woke&&s<17&&(n.woke=!0,n.lamps.forEach(r=>r.visible=!0),this.shake=Math.max(this.shake,.4),At.door(),At.ping(),this.showToast('A derelict hauler wakes. A dusty speaker: "WELCOME BACK, CONTRACTOR 1." Salvage glows around the hull. Press F near it to scan.',9)),n.woke&&n.lamps.forEach((r,o)=>r.material.color.setHex(Math.sin(this.t*2+o)>-.6?16760928:6307872))}if(this.magnet){const n=this.magnet;this.orb&&(this.orb.rotation.y+=t*.8,this.orb.children[1].rotation.x+=t);for(const s of this.junk){if(s===this.locked)continue;const r=s.mesh.position.clone().sub(n),o=r.length();o>38||o<.01||(o>7&&r.multiplyScalar(1-.9*t/o),r.applyAxisAngle(new A(0,1,0),.14*t*Math.min(1,12/o)),s.mesh.position.copy(n).add(r))}}}scanHulk(){const t=this.hulk;if(!t||t.scanned||this.eye().distanceTo(t.c)>14)return null;t.scanned=!0,At.rare();const e=br(this.store.get().logsFound),n=t.c.clone().add(new A(0,4.5,0));this.convertToRare(this.spawn(null,n),e?"logbook":"creature");const s='SCAN: Halcyon hauler, Contractor 1. Hold sealed, crew bunk empty, a note taped to the helm: "the cube was not in the manifest." Something floated free of the hull.';return this.showToast(s,9),s}exit(){var t;this.store.get().mode==="fly"&&((t=this.onReturn)==null||t.call(this))}bankAndLeave(){const t=this.store.get(),e={pieces:this.haul.length,units:t.cargo,items:this.haul,finds:[...this.finds]};this.store.set({flags:{...t.flags,boost:0}}),this.store.set({mode:"rooms",scrap:t.scrap+t.cargo,debt:Mv(t.debt,t.cargo),cargo:0,crates:Math.min(2,t.crates+1),stats:{...t.stats,trips:t.stats.trips+1},cubeState:t.cubeState==="carried"?"aboard":t.cubeState,...this.fatigueEnabled?{fatigue:Math.min(ur.maxAvoidable,t.fatigue+ur.perBank)}:{},report:this.manualSort?e:null}),this.manualSort||e.finds.forEach(s=>Da(this.store,s)),this.lastReport=e,this.haul=[],this.finds=[],this.beam.visible=!1,this.sparks.visible=!1,this.charging=!1,this.locked=null,At.chargeTone(null),At.engine(0,!1);const n=this.camera.userData.baseFov;n&&(this.camera.fov=n,this.camera.updateProjectionMatrix()),this.camera.quaternion.identity()}estimate(t){return mv(t.size,t.ore).text}updateDust(){const t=this.dust.geometry.getAttribute("position"),e=40,n=[this.pos.x,this.pos.y,this.pos.z];for(let a=0;a<this.dustBase.length;a++){const l=this.dustBase[a]-n[a%3];t.array[a]=n[a%3]+((l+e/2)%e+e)%e-e/2}t.needsUpdate=!0;const s=this.vel.length(),r=this.streaks.geometry.getAttribute("position"),o=Math.min(.09,.012*s);for(let a=0;a<this.dustBase.length/3;a++)for(let l=0;l<3;l++){const c=t.array[a*3+l];r.array[a*6+l]=c,r.array[a*6+3+l]=c-this.vel.getComponent(l)*o*4}r.needsUpdate=!0,this.streaks.material.opacity=Math.max(0,Math.min(.75,(s-1.2)/8))}inWindow(){const t=this.locked;if(!t||!this.charging)return!1;const e=this.windowOf(t);return this.charge>=e[0]&&this.charge<=e[1]}minable(t,e,n){return t.mesh.position.distanceTo(e)<=this.range&&t.mesh.position.clone().sub(e).normalize().dot(n)>.5}press(t=this.mouse.x,e=this.mouse.y){const n=this.store.get();if(n.mode!=="fly"||this.charging)return;if(this.nav!=="anchored")return this.showToast("Hold still to anchor first (release W/S).",2.5);if(n.cargo>=n.cargoCap)return this.showToast("Cargo full. Press R to return.",2.5);let s=this.target;if(t>=0&&typeof innerWidth<"u"){const r=this.eye(),o=this.forward();let a=140;for(const l of this.junk){if(!this.minable(l,r,o))continue;const c=l.mesh.position.clone().project(this.camera),h=Math.hypot((c.x+1)/2*innerWidth-t,(1-c.y)/2*innerHeight-e);h<a&&(a=h,s=l)}}if(!s)return this.showToast("No rock in range. Turn (A/D) toward a glowing rock.",2.5);this.locked=s,this.charging=!0,this.charge=0,At.lock()}release(){if(!this.charging||!this.locked)return;const t=this.locked,e=dv(this.charge,this.windowOf(t));this.charging=!1,this.locked=null,this.beam.visible=!1,this.sparks.visible=!1,At.chargeTone(null),e==="clean"?(this.shake=Math.max(this.shake,.25),At.clean()):(this.shake=1,At.shatter());{const n=this.store.get().stats;this.store.set({stats:{...n,clean:n.clean+(e==="clean"?1:0),shatters:n.shatters+(e==="clean"?0:1)}})}this.collect(t,Vh(t.size,t.ore,e==="clean"),e==="clean"?"CLEAN HAUL":e==="early"?"SHATTERED (too early)":"SHATTERED (too late)")}cancelCharge(t){this.charging&&(this.charging=!1,this.locked=null,this.charge=0,this.beam.visible=!1,this.sparks.visible=!1,At.chargeTone(null),At.warn(),this.showToast(t,2.5))}update(t){const e=this.store.get();if(e.mode!=="fly")return;this.t+=t;const n=this.keys,s=this.speedFactor(),r=(n.has("KeyA")||n.has("ArrowLeft")?1:0)-(n.has("KeyD")||n.has("ArrowRight")?1:0),o=(n.has("ArrowUp")?1:0)-(n.has("ArrowDown")?1:0),a=(n.has("KeyC")?1:0)-(n.has("KeyZ")?1:0),l=(n.has("KeyW")?1:0)-(n.has("KeyS")?.6:0),c=(n.has("KeyE")?1:0)-(n.has("KeyQ")?1:0),h=this.nav==="anchored"?.5:1;this.roll+=(r*.08-this.roll)*Math.min(1,6*t);const d=new ln().setFromEuler(new Fe(-o*Ne.pitchRate*h*t,r*Ne.turn*h*(.6+.4*s)*t,a*Ne.rollRate*h*t,"YXZ"));if(this.orient.multiply(d).normalize(),l!==0||c!==0){this.nav="fly",this.cancelCharge("Moved: lock lost.");const x=this.forward().multiplyScalar(l*Ne.speed).addScaledVector(this.up(),c*Ne.speed*Ne.vertSpeed);this.vel.lerp(x,1-Math.exp(-2.5*s*t))}else this.vel.multiplyScalar(Math.exp(-Jh(this.store.get().up.brake)*(.4+.6*s)*t)),this.vel.length()<.2?(this.vel.set(0,0,0),this.nav="anchored"):this.nav="braking";this.pos.addScaledVector(this.vel,t),this.pos.length()>Ne.sector&&(this.pos.setLength(Ne.sector),this.vel.multiplyScalar(.3),this.showToast("Sector edge: turn back.",2)),this.updateDust(),this.updateField(t,this.eye());for(const x of this.junk)x.drift&&x.mesh.position.addScaledVector(x.drift,t),x.mesh.rotation.x+=x.spin.x*t,x.mesh.rotation.y+=x.spin.y*t,x.mesh.rotation.z+=x.spin.z*t;const f=this.fatigueEnabled?ji(e.fatigue):0,p=(this.hulk&&this.eye().distanceTo(this.hulk.c)<14?1.25:1)*Sv(f);if(this.store.set({oxygen:e.oxygen-Ne.oxygenPerSec*p*t,...this.fatigueEnabled?{fatigue:Math.min(ur.maxAvoidable,e.fatigue+ur.perFlySec*t)}:{}}),this.updateFatigue(t,f),this.store.get().oxygen<=0&&!this.forced){this.forced=!0;const x=this.store.get().cargo;this.store.set({cargo:Math.floor(x/2),oxygen:15}),this.cancelCharge("Out of air."),this.showToast("OUT OF AIR. Autopilot is hauling you home. Half the cargo went out the airlock.",6),At.warn(),this.exit()}const v=this.forward(),g=this.eye();this.target=null;let m=1/0;for(const x of this.junk){const _=this.minable(x,g,v),I=x===this.locked;_&&x.mesh.position.distanceTo(g)<m&&(m=x.mesh.position.distanceTo(g),this.target=x);const T=x.mesh.position.distanceTo(g)<=this.range;x.outline.visible=T,ps(x.mesh).opacity=T?1:.45,!x.rare&&!x.name.startsWith("Hulk")&&(ps(x.mesh).emissiveIntensity=T?.35+.15*Math.sin(this.t*5):.18),x.ring.visible=T,x.ring.position.copy(x.mesh.position),x.ring.lookAt(this.camera.position),x.ring.scale.setScalar(x.size*1.5+(I?.1*Math.sin(this.t*12):0)),x.ring.material.color.set(I?this.inWindow()?16777215:16769088:4259744)}if(this.locked&&this.locked.mesh.position.distanceTo(g)>this.range*1.25&&this.cancelCharge("Rock drifted out of range."),this.charging&&this.locked){this.charge+=t/uv;const x=g.clone().addScaledVector(v,.6).addScaledVector(this.up(),-.3),_=this.locked.mesh.position,I=_.clone().sub(x),T=I.length(),E=this.inWindow();this.beam.visible=!0,this.beam.position.copy(x),this.beam.quaternion.setFromUnitVectors(new A(0,1,0),I.normalize());const R=(.015+.05*Math.min(1,this.charge))*(1+.25*Math.sin(this.t*45));this.beamCore.scale.set(R,T,R),this.beamGlow.scale.set(R*3.2,T,R*3.2);const S=E?16777215:new wt(4259776).lerp(new wt(16764992),Math.min(1,this.charge));this.beamCore.material.color.set(S),this.beamGlow.material.color.set(S),this.sparks.visible=!0,this.sparks.position.copy(_);const M=this.sparks.geometry.getAttribute("position");for(let P=0;P<30;P++){const k=Math.random()*6.283,L=Math.acos(Math.random()*2-1),W=this.locked.size*(.7+Math.random()*.5);M.setXYZ(P,Math.sin(L)*Math.cos(k)*W,Math.sin(L)*Math.sin(k)*W,Math.cos(L)*W)}M.needsUpdate=!0,At.chargeTone(this.charge,E),this.charge>=1&&this.release()}else this.sparks.visible=!1;const u=this.store.get().cargo>=e.cargoCap;if(this.message=u?"CARGO FULL - press R to return":this.hulk&&g.distanceTo(this.hulk.c)<14?this.hulk.scanned?"DERELICT: reactor leak, air draining a little faster":"DERELICT HAULER: press F to scan (air drains a little faster here)":this.store.get().oxygen<25?"AIR LOW: head home soon (R). At zero the autopilot drags you back.":"",this.hint=fv(this.nav,this.charging,!!this.target,this.inWindow()),this.camera.position.copy(g).addScaledVector(this.up(),Math.sin(this.t*1.7)*.01),this.camera.quaternion.copy(this.orient).multiply(kv).multiply(new ln().setFromAxisAngle(new A(0,0,1),this.roll)),this.shake>.001){const x=this.shake;this.camera.position.add(new A((Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x)),this.camera.quaternion.multiply(new ln().setFromEuler(new Fe((Math.random()-.5)*.05*x,(Math.random()-.5)*.05*x,(Math.random()-.5)*.08*x))),this.shake*=Math.exp(-5*t)}const y=this.camera.userData.baseFov??this.camera.fov;this.camera.fov=y*(1+.07*Math.min(1,this.vel.length()/Ne.speed)),this.camera.updateProjectionMatrix(),At.engine(Math.min(1,this.vel.length()/Ne.speed)*(l!==0||c!==0?1:.5)),this.stars.position.copy(this.pos),this.sky.position.copy(this.camera.position)}collect(t,e=t.ore,n=""){this.scene.remove(t.mesh),this.scene.remove(t.ring),this.junk.splice(this.junk.indexOf(t),1),this.target=null,this.locked=null;const s=this.store.get(),r=Math.min(e,s.cargoCap-s.cargo),o={cargo:Math.min(s.cargoCap,s.cargo+e)};this.haul.push({name:t.name,lore:t.lore,units:r,clean:/^CLEAN/.test(n)||n===""}),t.rare&&(this.finds.push(t.rare),At.rare(),t.rare==="cube"&&(o.cubeState="carried")),this.showToast(n?`${n}: +${r} aboard (confirmed at the bench)`:`+${r} aboard`,3.5),this.resultUntil=this.t+3,this.store.set(o)}render(t){t.render(this.scene,this.camera)}}class zv{constructor(t,e){H(this,"el",document.createElement("div"));H(this,"q",t=>this.el.querySelector("#"+t));H(this,"rx",-1);H(this,"ry",-1);this.store=t,this.fly=e,this.el.id="cockpit";const n=(s,r,o)=>`<div class="dial"><i id="d-${s}" style="--c:${o};--v:100"></i><b id="n-${s}"></b><span>${r}</span></div>`;this.el.innerHTML=`
<style>
#cockpit{position:fixed;inset:0;display:none;pointer-events:none;z-index:4;font:12px monospace;color:#9fb}
#cockpit .strut{position:absolute;top:0;bottom:0;width:11vw;background:linear-gradient(90deg,#05070c,#10151f 70%,transparent)}
#cockpit .strut.l{left:0;clip-path:polygon(0 0,60% 0,100% 100%,0 100%)} #cockpit .strut.r{right:0;transform:scaleX(-1);clip-path:polygon(0 0,60% 0,100% 100%,0 100%)}
#cockpit .top{position:absolute;top:0;left:0;right:0;height:7vh;background:linear-gradient(#05070c,#0c111a 70%,transparent)}
#cockpit .dash{position:absolute;left:-4vw;right:-4vw;bottom:-6vh;height:31vh;background:linear-gradient(#171e2b,#0a0e16);border-top:3px solid #2a3448;border-radius:50% 50% 0 0/38% 38% 0 0;box-shadow:0 -6px 30px #000}
#cockpit .row{position:absolute;bottom:2vh;left:0;right:0;display:flex;justify-content:center;align-items:flex-end;gap:3vw}
#cockpit .dials{display:flex;gap:1.2vw}#cockpit .dial[data-level="2"] i{animation:fflick .6s steps(2) infinite}#cockpit .dial[data-level="3"] i{animation:fflick .25s steps(2) infinite,fjit .18s infinite}
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
  <div class="dials">${n("power","POWER","#f0a020")}${n("oxygen","OXYGEN","#40c0ff")}${n("cargo","CARGO","#a0e060")}${n("fatigue","FATIGUE","#c080ff")}</div>
  <div class="attwrap"><canvas id="att" width="120" height="120"></canvas><span>ATTITUDE</span></div><div class="stickwrap"><div class="base"></div><div class="stick" id="stick"></div></div>
  <div class="cons"><h4>CONSTRUCTOR</h4><div id="cons-t"></div><div class="orb"></div></div>
</div>`,document.body.appendChild(this.el),t.subscribe(s=>{this.el.style.display=s.mode==="fly"?"block":"none"})}drawAttitude(){const t=this.q("att"),e=t.getContext("2d"),n=56,s=60,r=60,o=this.fly.camera.quaternion.clone().invert();e.clearRect(0,0,120,120),e.fillStyle="#080c14",e.beginPath(),e.arc(s,r,n,0,7),e.fill(),e.strokeStyle="#4a5a78",e.lineWidth=3,e.stroke(),e.strokeStyle="#1f2a3c",e.lineWidth=1,e.beginPath(),e.arc(s,r,n*.5,0,7),e.moveTo(s-n,r),e.lineTo(s+n,r),e.moveTo(s,r-n),e.lineTo(s,r+n),e.stroke();const a=(c,h,d)=>{const f=new this.fly.camera.position.constructor(c.x,c.y,c.z).normalize().applyQuaternion(o),p=s+f.x*n*.82,v=r-f.y*n*.82,g=f.z<0;e.strokeStyle=h,e.fillStyle=h,e.lineWidth=2.5,e.beginPath(),e.moveTo(s,r),e.lineTo(p,v),e.stroke(),e.beginPath(),e.arc(p,v,g?7:6,0,7),g?e.fill():(e.fillStyle="#080c14",e.fill(),e.stroke()),e.fillStyle=g?"#000":h,e.font="bold 9px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(d,p,v+.5)};a({x:0,y:1,z:0},"#ffffff","U");const l=this.fly.pos;l.length()>1&&a({x:-l.x,y:-l.y,z:-l.z},"#ff9a30","H"),e.fillStyle="#9fb",e.beginPath(),e.arc(s,r,2.5,0,7),e.fill()}update(){const t=this.store.get();if(t.mode!=="fly")return;const e=(m,u,y)=>{this.q("d-"+m).style.setProperty("--v",String(Math.max(0,Math.min(100,u)))),this.q("n-"+m).textContent=y};e("power",t.power,String(Math.round(t.power))),e("fatigue",t.fatigue,String(Math.round(t.fatigue))),this.q("d-fatigue").parentElement.title="Fatigue: 40 tired, 70 exhausted, 90 breaking. Sleep in the bunk to reset.",this.q("d-fatigue").parentElement.dataset.level=String(t.fatigue>=90?3:t.fatigue>=70?2:t.fatigue>=40?1:0),e("oxygen",t.oxygen,String(Math.round(t.oxygen))),e("cargo",t.cargo/t.cargoCap*100,`${t.cargo}/${t.cargoCap}`);const n=(this.fly.keys.has("KeyA")||this.fly.keys.has("ArrowLeft")?-1:0)+(this.fly.keys.has("KeyD")||this.fly.keys.has("ArrowRight")?1:0),s=(this.fly.keys.has("ArrowUp")?1:0)-(this.fly.keys.has("ArrowDown")?1:0);this.q("stick").style.transform=`rotate(${n*14}deg) skewX(${-s*8}deg)`,this.q("cons-t").innerHTML=`scrap banked: ${t.scrap}<br>debt: ${t.debt} cr<br>logs: ${t.logsFound.length}/7${t.stowaways?`<br>stowaways: ${t.stowaways}`:""}<br>speed ${Math.round(this.fly.speedFactor()*100)}%<br>pitch ${Math.round(this.fly.pitch*57.3)}&deg;<br>${Xh[ji(t.fatigue)].toLowerCase()}${this.fly.up().y<-.2?'<br><b style="color:#ffd040">INVERTED</b>':""}`,this.drawAttitude();{const m=Math.min(1,this.fly.vel.length()/9);this.q("glow-l").style.opacity=this.q("glow-r").style.opacity=String(m*.8)}const r=this.fly,o=this.q("cap"),a=r.t,l=r.charging&&r.locked?r.estimate(r.locked):a<r.resultUntil?r.toast:r.target?r.estimate(r.target):a<r.toastUntil?r.toast:"";o.style.display=l?"block":"none",o.textContent=l;const c=this.q("badge"),h=r.nav==="anchored"?"ANCHORED":r.nav==="braking"?"BRAKING":"FLYING",d=r.nav==="anchored"?"#40ffa0":r.nav==="braking"?"#ffd040":"#6ac0ff";c.textContent=h,c.style.color=d,c.style.borderColor=d;const f=r.t<r.glitchUntil,p=this.q("hint");p.textContent=f?r.hint.replace(/[aeiou ]/g,m=>Math.random()<.5?"#":m):r.hint,p.style.color=r.inWindow()?"#fff":d;const v=r.locked??r.target,g=this.q("ret");if(v){const m=v.mesh.position.clone().project(r.camera),u=(m.x+1)/2*innerWidth,y=(1-m.y)/2*innerHeight;this.rx<0?(this.rx=u,this.ry=y):(this.rx+=(u-this.rx)*.4,this.ry+=(y-this.ry)*.4),g.style.display=m.z<1?"block":"none",g.style.left=this.rx+"px",g.style.top=this.ry+"px";const x=314.16,_=r.windowOf(v),I=this.q("ret-win"),T=this.q("ret-p");I.style.display=r.charging?"block":"none",I.setAttribute("stroke-dasharray",`${(_[1]-_[0])*x} ${x}`),I.setAttribute("stroke-dashoffset",String(-_[0]*x)),T.style.display=r.charging?"block":"none",T.setAttribute("stroke-dasharray",`${Math.min(1,r.charge)*x} ${x}`),this.q("ret-br").style.borderColor=r.charging?r.inWindow()?"#fff":"#ffe040":r.nav==="anchored"?"#40ffa0":"#58a"}else g.style.display="none",this.rx=-1;{const m=this.q("coach"),u=Dv(r.guided&&t.stats.clean+t.stats.shatters===0,r.nav,!!r.target,r.charging,r.inWindow());m.style.display=u?"block":"none",m.textContent=u}{const m=this.q("sector");m.textContent=r.banner,m.style.opacity=r.t<r.bannerUntil?"1":"0"}if(f)for(const m of["power","oxygen"])this.q("d-"+m).style.setProperty("--v",String(Math.random()*100)),this.q("n-"+m).textContent="??";this.q("warn").textContent=f?"HULL BREACH... false alarm. Probably.":this.fly.message||(t.oxygen<20?"LOW OXYGEN":t.cargo/t.cargoCap>.75?"FULL HOLD: MORE MASS, LONGER BURNS TO STOP":"")}}const Hv=["The vault is sealed. Cold. Silent.","VAULT: a low hum. The seal feels warm.","VAULT: humming in time with the cube. Light under the door.","VAULT: it is full. Something inside is leaning on the door."],Gv=["","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Unlocked as the cube grew","Unlocked as the cube grew","Unlocked as the cube grew"];function Vv(i){const t=document.createElement("div");t.id="vault-note",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"70px",transform:"translateX(-50%)",padding:"6px 14px",background:"rgba(0,0,0,.6)",border:"1px solid #3a6a9a",color:"#9cf",font:"13px monospace",display:"none",zIndex:"5",textAlign:"center"}),document.body.appendChild(t);const e=document.createElement("div");e.id="log-reader",Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",zIndex:"9",alignItems:"center",justifyContent:"center"}),document.body.appendChild(e);let n=!1,s=0;const r=new Set,o=()=>{const c=i.get(),h=c.logsFound;e.innerHTML=`<div style="width:min(720px,94vw);max-height:92vh;overflow:auto;background:#05100a;border:2px solid #30ff90;color:#9fd;font:14px monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>JUNKER LOG TERMINAL &nbsp; ${h.length}/7 recovered</b><button id="lr-close">Close</button></div><hr>
      <div style="display:flex;gap:12px;flex-wrap:wrap"><div style="min-width:150px">${[1,2,3,4,5,6,7].map(d=>`<button data-l="${d}" ${h.includes(d)?"":"disabled"} style="display:block;width:100%;margin:2px 0;text-align:left">Log ${d} ${h.includes(d)?"":"[locked]"}</button>`).join("")}</div>
      <div style="flex:1;min-width:220px">${h.includes(s)?`<b>RECOVERED ${s}/7</b><p>${ol[s-1]}</p><i>${Gv[s]}</i>`:"<p>Select a recovered log. Missing logs: hidden logbooks 1-4 drift in the mining sector (about 1 in 15 rocks); logs 5-7 unlock as the cube grows.</p>"}</div></div></div><hr><b>SHIP JOURNAL (one entry per night slept)</b><div id="journal" style="max-height:18vh;overflow:auto;font-size:12px">${c.journal.length?c.journal.map(d=>`<p style="margin:4px 0">${Yh(d-1)}</p>`).join(""):"<i>Nothing yet. The journal only updates when you sleep.</i>"}</div></div>`,e.querySelectorAll("button[data-l]").forEach(d=>d.onclick=()=>{var f;s=+d.dataset.l,r.has(s)||(r.add(s),(f=window.profileTracker)==null||f.logRead(s)),o()}),e.querySelector("#lr-close").onclick=()=>l.close()},a=()=>{const c=i.get(),h=c.mode==="rooms"&&c.room==="bed",d=c.mode==="rooms"&&(c.room==="bed"||c.room==="desk");t.style.display=h&&!n?"block":"none",t.textContent=Hv[al(c)],n&&!d&&l.close()},l={open(){n=!0,s=i.get().logsFound.slice(-1)[0]??0,e.style.display="flex",o(),a()},close(){n=!1,e.style.display="none",a()},isOpen:()=>n};return addEventListener("keydown",c=>{n&&c.code==="Escape"&&l.close()}),i.subscribe(()=>{a(),n&&o()}),a(),l}function Wv(){const i=document.createElement("div");i.id="corner",Object.assign(i.style,{position:"fixed",left:"10px",bottom:"10px",display:"flex",gap:"6px",zIndex:"30"});const t=(r,o)=>{const a=document.createElement("button");return a.id=r,a.textContent=o,Object.assign(a.style,{font:"12px monospace",color:"#9fb",background:"rgba(5,10,14,.8)",border:"1px solid #345",padding:"5px 8px",cursor:"pointer"}),i.appendChild(a),a},e=t("mute",""),n=()=>{e.textContent=At.muted?"Sound: off (M)":"Sound: on (M)"};e.onclick=()=>{At.unlock(),At.toggle(),n()},n(),addEventListener("keydown",r=>{var o,a;r.code==="KeyM"&&!((a=(o=r.target)==null?void 0:o.matches)!=null&&a.call(o,"input,textarea"))&&(At.unlock(),At.toggle(),n())}),document.body.appendChild(i);const s=()=>{var o;const r=((o=window.store)==null?void 0:o.get().mode)==="fly";i.style.bottom=r?"auto":"10px",i.style.top=r?"38vh":"auto",i.style.flexDirection=r?"column":"row"};return setInterval(s,250),s(),{box:i,add:(r,o,a)=>{const l=t(r,o);return l.onclick=a,l}}}const Xv={arrival:["Day 4,017 of Contractor 7’s contract. The galaxy’s rubbish has to go somewhere, and “somewhere” is you.","You owe Halcyon Reclamation 1,000 credits. Halcyon Reclamation is cheerful, and not a person. It is a form, and it is patient.","Please sit in the pilot chair. It is the only part of the ship that has been dusted."],cubeChoice:["It is looking at you. Cubes cannot look. It is doing it anyway.","Keep it, or open the cargo door. Both are choices. One of them has paperwork."],cubeBack:["It came back. They do that. It has brought nothing, and expects a great deal."],tired:["Your eyes feel full of sand and regret. The bunk has been staring at you for a while."],exhausted:["The galaxy has started to wobble at the edges. That is the ship, probably. Possibly you."],firstSleep:["You sleep. The ship does not."],cubeFound:["The container opens with a sigh. Inside, a humming cube, warm to the touch, which is not a thing cubes should be.","You privately name it the Larder, for obvious reasons."],cubeLunge:["The cube lunges. Scrap, then no scrap. It did not even chew.","Right. So it eats. Anything you give it from now on is, technically, an offering."],firstFeed:["The cube blinks. You are fairly sure cubes do not do that."],firstFlight:["Mining pods were invented to take out the trash. Nobody asked the trash how it felt."],fullCargo:["Hold full. More mass, longer burns to stop. Head home before the ship files a complaint."],otherStorage:["Odd. The sensors say there is a second storage aboard. It is not on the blueprints, and it is not empty."],vaultFilling:["The vault is filling up. You did not put anything in it. That is the part you decide not to think about."],burst:["The cube hums. The vault hums back. Then, with great dignity, everything goes pop."],spreading:["Twelve small faces, each with an opinion, scatter into the dark like they own the place."]};function qv(i){const t=[];return i.mode==="fly"&&t.push("firstFlight"),i.mode==="fly"&&i.cargo>=i.cargoCap&&t.push("fullCargo"),i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&t.push("cubeFound"),i.cubeChoice==="pending"&&t.push("cubeChoice"),i.cubeChoice==="jettisoned"&&i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&t.push("cubeBack"),i.fatigue>=40&&t.push("tired"),i.fatigue>=70&&t.push("exhausted"),i.sleeps>=1&&i.mode==="rooms"&&t.push("firstSleep"),i.feeds>=1&&t.push("firstFeed"),i.feeds>=3&&t.push("otherStorage"),i.feeds>=6&&t.push("vaultFilling"),i.mode==="cameo"&&t.push("burst"),t.filter(e=>!i.beats.includes(e))}function Yv(i){const t=document.createElement("div");t.id="narration",Object.assign(t.style,{position:"fixed",left:"50%",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .6s",pointerEvents:"none",zIndex:"12",top:"48px"}),document.body.appendChild(t);const e=[];let n=!1;const s=[],r=()=>{t.style.top=i.get().mode==="fly"?"38vh":i.get().mode==="cameo"?"14px":"52px"},o=()=>{if(n||!e.length)return;if(i.get().mode==="exterior"){setTimeout(o,1500);return}n=!0;const l=e.shift();r(),t.textContent=l,t.style.opacity="1",setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{n=!1,o()},700)},2800+l.length*45)},a={log:s,el:t,say(l){const c=Xv[l];c&&(l==="firstFeed"&&At.ping(),s.push(l),e.push(...c),o())},check(){const l=i.get(),c=qv(l);c.length&&(i.set({beats:[...l.beats,...c]}),c.forEach(h=>a.say(h)))}};return i.subscribe(()=>{r(),a.check()}),setTimeout(()=>{const l=i.get();l.beats.includes("arrival")||(i.set({beats:[...l.beats,"arrival"]}),a.say("arrival"))},1500),a}function $v(i){const t=document.createElement("div");t.id="objective",Object.assign(t.style,{position:"fixed",padding:"4px 12px",background:"rgba(0,0,0,.6)",border:"1px solid #c9a96a",color:"#ffe9c0",font:"max(12px,1.05vw) monospace",zIndex:"7",pointerEvents:"none",maxWidth:"min(520px,60vw)",textAlign:"center"}),document.body.appendChild(t);const e=()=>{const n=i.get(),s=Uv(n);t.textContent=s,t.style.display=s?"block":"none",n.mode==="fly"?Object.assign(t.style,{left:"auto",right:"12px",top:"56px",transform:"none",textAlign:"right",maxWidth:"26vw"}):Object.assign(t.style,{left:"50%",right:"auto",top:"8px",transform:"translateX(-50%)",textAlign:"center",maxWidth:"min(520px,60vw)"})};return i.subscribe(e),e(),t}const ve=(i,t=0,e=1)=>new de({color:i,roughness:.85,metalness:.25,emissive:t,emissiveIntensity:e});function Zh(i){return{box:(n,s,r,o,a,l,c,h=0)=>{const d=new st(new ie(n,s,r),ve(c,h));return d.position.set(o,a,l),i.add(d),d},cyl:(n,s,r,o,a,l,c=[0,0,0])=>{const h=new st(new Je(n,n,s,10),ve(l));return h.position.set(r,o,a),h.rotation.set(...c),i.add(h),h}}}function cl(i,t,e,n,s={}){const r=s.w??6,o=s.h??2.5,a=s.d??5,l=s.clean?-2.5-(a-5):-2.5,c=l+a/2,h=r/2;i.background=new wt(s.clean?658964:197641),i.fog=new Ts(329485,s.clean?.012:.07);const d=Zh(i),f=s.clean?6976644:2041654,p=s.clean?6055542:1712688;if(d.box(r,.1,a+(s.clean?10:0),0,0,c+(s.clean?5:0),s.clean?3818062:1382948),s.noWalls||(d.box(r,.1,a,0,o,c,s.clean?4870752:1053724),d.box(r,o,.1,0,o/2,l,f),d.box(.1,o,a,-h,o/2,c,p),d.box(.1,o,a,h,o/2,c,p)),!s.clean){for(let m=0;m<4;m++)d.box(.08,.02,a-.4,-h+.3+m*(r-.6)/3,.06,c,2765637);d.cyl(.07,r-.2,0,o-.2,l+.2,2897480,[0,0,Math.PI/2]),d.cyl(.05,r-.2,0,o-.4,l+.2,3813162,[0,0,Math.PI/2]),d.cyl(.06,a-.2,h-.2,o-.3,c,2897480,[Math.PI/2,0,0]);for(let m=0;m<4;m++)d.box(.3,.03,.02,-h+.6+m*(r-1.2)/3,.1,l+.06,724500)}const v=new ke(s.clean?15791871:16765088,s.clean?40:6,s.clean?30:7);v.position.set(0,o-.3,s.clean?c:0),i.add(v);const g=new ke(n,4,5);return g.position.set(-1.5,1.5,-1.8),i.add(g),s.noWalls||d.box(1.4,.05,.12,0,o-.07,0,16773328,16769200),i.add(new Cs(s.clean?8425640:1713208,s.clean?1.1:.7)),{room:{id:t,name:e,scene:i,camPos:new A(.9,1.6,3.6),camLook:new A(0,1,-1),hotspots:[]},b:d,flicker:[v,g]}}function Dr(i,t,e,n,s,r,o,a=1.75){const l=-Math.sign(t),c=.72,h=ve(790294),d=ve(2502204),f=(v,g,m,u,y)=>{const x=new st(v,g);return x.position.set(m,u,y),i.add(x),x};f(new ie(.06,a+.5,c+.9),d,t+l*.01,(a+.5)/2,e);for(const v of[-1,1])f(new ie(.16,a+.08,.1),h,t+l*.06,(a+.08)/2,e+v*(c/2+.05));f(new ie(.16,.12,c+.2),h,t+l*.06,a+.06,e),f(new ie(.16,.08,c+.2),h,t+l*.06,.08,e);for(let v=0;v<4;v++)f(new ie(.17,.05,.05),ve(v%2?1052688:14729248),t+l*.06,a+.06,e-c/2+.1+v*.17);return{mesh:f(new ie(.04,a-.1,c-.04),ve(1712944,o,.6),t+l*.035,a/2+.02,e),label:s,target:r}}function ye(i,t,e,n,s,r=0,o=.5,a="#f4e27a",l=0){const c=document.createElement("canvas");c.width=256,c.height=160;const h=c.getContext("2d");h.fillStyle=a,h.fillRect(0,0,256,160),h.fillStyle="rgba(0,0,0,.12)",h.fillRect(0,0,256,10),h.fillStyle="#2a2018",h.font='bold 30px "Comic Sans MS", "Chalkboard SE", cursive',h.textAlign="center";const d=t.split(`
`);d.forEach((p,v)=>h.fillText(p,128,55+(v-(d.length-1)/2)*36+10));const f=new st(new Pn(o,o*.625),new Yt({map:new di(c)}));return f.position.set(e,n,s),f.rotation.set(0,r,l),i.add(f),f}function Tn(i,t,e,n,s,r,o,a=0){const l=new st(new ie(s,r,o),new de({color:9211540,roughness:.5,metalness:.4}));return l.position.set(t,e,n),l.rotation.z=a,i.add(l),l}function ys(i,t,e=1052688,n=.025){const s=new Ka(t.map(o=>new A(...o))),r=new st(new Hr(s,24,n,6,!1),ve(e));return i.add(r),r}function jv(){const i=new pi,{room:t,b:e,flicker:n}=cl(i,"engine","Engine Room",16728128,{w:5,h:2.1,d:4});t.camPos.set(.5,1.5,2.6),t.camLook.set(-.2,.6,-1),i.background=new wt(262918);const s=new A(0,.45,-.75),r=1.6,o=new de({color:7370890,emissive:2777343,emissiveIntensity:.4,metalness:.7,roughness:.35}),a=new st(new Ke(r,.2,14,96),o);a.rotation.x=-Math.PI/2,a.position.copy(s),i.add(a);const l=new st(new Ke(r,.06,8,96),new Yt({color:10473727,transparent:!0,opacity:.6}));l.rotation.x=-Math.PI/2,l.position.set(s.x,s.y+.2,s.z),i.add(l);for(let y=0;y<12;y++){const x=y/12*Math.PI*2;e.box(.12,s.y,.3,s.x+Math.cos(x)*r,s.y/2,s.z+Math.sin(x)*r,2897480)}const c=Array.from({length:6},()=>{const y=new st(new pe(.13,10,8),new Yt({color:13625599}));return i.add(y),y}),h=new Ya({color:14741759,transparent:!0}),d=Array.from({length:8},()=>{const y=new ce;y.setAttribute("position",new Te(new Float32Array(8*3),3));const x=new Dh(y,h);return i.add(x),x}),f=new ke(4227327,3,7);f.position.set(s.x,1.2,s.z),i.add(f);const p=new ke(16719904,0,6);p.position.set(0,2.2,0),i.add(p);const v=[-1.9,-1.2,-.5].map((y,x)=>{const _=e.box(.55,.4,.06,y+.6,1.4+x%2*.05,-2.42,660496,2162576);return _.material.emissiveIntensity=.5,_});Tn(i,-.6,1.17,-2.4,1.9,.05,.02),ye(i,`RING SPEED:
11 (units
unknown)`,1,1.75,-2.42,0,.5,"#f4e27a",.04),ye(i,`CROSS WHEN
IT GOES QUIET`,1.9,1.3,-2.42,0,.55,"#f06050",-.04),ye(i,`DANGER
KEEP BACK
(we mean it)`,1.5,.75,.7,-.3,.38,"#f06050"),e.box(.06,2.1,.06,-2.25,1.05,-2.38,6974068),e.box(.06,2.1,.06,-1.85,1.05,-2.38,6974068);for(let y=0;y<6;y++)e.box(.4,.04,.04,-2.05,.3+y*.3,-2.38,6974068);const g=e.box(.5,.25,.05,-2.05,1.85,-2.33,2759186,15769632);g.material.emissiveIntensity=.6,ye(i,`ONLY WAY OUT
(across the ring)`,-2.05,1.5,-2.33,0,.42,"#f4e27a");const m=new st(new As(r+.3,48),new Yt({color:4227327,transparent:!0,opacity:.04,depthWrite:!1,side:Ee}));m.rotation.x=-Math.PI/2,m.position.set(s.x,s.y+.22,s.z),i.add(m),t.hotspots.push({mesh:g,label:"Cross the ring to the ladder (wait for the quiet)",target:"act:cross"},{mesh:m,label:"The ring (do not touch)",target:"act:collider"},{mesh:v[1],label:"Monitor",target:"act:monitor"});const u=y=>{n[0].intensity=3+Math.sin(y/70)*.5,n[1].intensity=3+Math.sin(y/230)*.8};return t.update=()=>{const y=performance.now();u(y);const x=ov(Lr,y),_=Is(Lr,y);a.rotation.z=y/2400,o.emissiveIntensity=.3+x*1.8,o.emissive.setHex(_?9089279:2777343),l.material.opacity=.25+x*.75,f.intensity=2+x*7,p.intensity=_?3+2*Math.sin(y/60):0,c.forEach((I,T)=>{const E=y/(_?260:900)+T/c.length*Math.PI*2;I.position.set(s.x+Math.cos(E)*r,s.y+.05,s.z+Math.sin(E)*r),I.scale.setScalar(_?1.4:.8)}),d.forEach((I,T)=>{if(I.visible=_&&Math.random()<.8,!I.visible)return;const E=Math.random()*Math.PI*2,R=I.geometry.attributes.position;for(let S=0;S<8;S++){const M=E+S*.05,P=r+(Math.random()-.5)*.35;R.setXYZ(S,s.x+Math.cos(M)*P,s.y+.15+S*(.04+.02*(T%3))*Math.random()*2,s.z+Math.sin(M)*P)}R.needsUpdate=!0}),h.opacity=.6+.4*Math.random(),v.forEach((I,T)=>I.material.emissiveIntensity=.4+.3*Math.abs(Math.sin(y/(130+T*70))))},t}function Kv(i){const t=document.createElement("div");t.id="shipmap",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"10px",transform:"translateX(-50%)",font:"11px monospace",color:"#7f8fa0",background:"rgba(5,10,16,.7)",border:"1px solid #2a3442",padding:"3px 8px",zIndex:"4",pointerEvents:"none",whiteSpace:"nowrap"}),document.body.appendChild(t);const e=()=>{const n=i.get();t.style.display=n.mode==="rooms"?"block":"none";const s=(r,o)=>n.room===r?`<b style="color:#20e0a0">[${o}]</b>`:o;t.innerHTML=`${s("mining","HELM")} &gt; ${s("bed","BUNK")} &gt; ${s("transmog","=== CARGO BAY ===")} &darr; ${s("engine","ENGINE")}`};i.subscribe(e),e()}function Jv(i){const t=document.createElement("div");t.id="sorter",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"20"}),document.body.appendChild(t);let e=[],n=[],s="";const r=()=>i.set({report:null}),o=()=>{const l=n.shift();l&&(e.push(Da(i,l)),At.rare(),a())},a=()=>{var h,d;const l=i.get().report;if(!l){t.style.display="none";return}t.style.display="flex";const c=e[e.length-1];t.innerHTML=`<div style="width:min(640px,94vw);max-height:92vh;overflow:auto;background:#0a0d12;border:2px solid #c9a96a;color:#ffe9c0;font:14px/1.45 monospace;padding:16px">
      <div style="letter-spacing:3px;font-size:16px"><b>SORTING BENCH</b></div>
      <p>Weighed in: <b>${l.pieces}</b> pieces. Confirmed scrap banked: <b style="color:#9f9">+${l.units}</b> <small>(the scanner's estimates were only estimates)</small></p><p>Paycheck: <b style="color:#60e080">debt -${l.units*$i.perUnit} cr</b> (paid off). <small>You still owe ${i.get().debt} cr.</small></p>
      <div style="max-height:26vh;overflow:auto;border:1px solid #4a3a20;padding:6px;font-size:12px">${l.items.length?l.items.map(f=>`<div><b>${f.name}</b> +${f.units} ${f.clean?"":'<span style="color:#f88">(shattered)</span>'}<br><i style="opacity:.75">${f.lore}</i></div>`).join('<hr style="border:0;border-top:1px solid #2a2418">'):"Nothing aboard. The hold is a very expensive cupboard."}</div>
      ${c?`<div style="margin-top:10px;border:1px solid #30ff90;padding:8px;background:#06140c"><b style="color:#9fd">FOUND: ${c.title}</b><br>${c.text}</div>`:""}
      <div style="margin-top:12px">${n.length||!e.length&&l.finds.length?`<button id="so-next" style="font:14px monospace;padding:8px 14px">Inspect the haul (${n.length||l.finds.length} to open)</button>`:`<button id="so-done" style="font:14px monospace;padding:8px 14px">${e.length||l.finds.length?"Done":"Nothing unusual. Done"}</button>`}</div></div>`,(h=t.querySelector("#so-next"))==null||h.addEventListener("click",()=>o()),(d=t.querySelector("#so-done"))==null||d.addEventListener("click",()=>r())};return i.subscribe(()=>{const l=i.get().report,c=l?JSON.stringify([l.pieces,l.units,l.finds]):"";c!==s?(s=c,e=[],n=l?[...l.finds].sort((h,d)=>+(h==="cube")-+(d==="cube")):[],a()):l||(t.style.display="none")}),addEventListener("keydown",l=>{var c;!i.get().report||l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),(c=t.querySelector("#so-next, #so-done"))==null||c.click())}),{el:t,finishAll(){for(;n.length;)e.push(Da(i,n.shift()));r()},isOpen:()=>!!i.get().report}}function Zv(i){const t=document.createElement("div");t.id="cube-choice",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.7)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"24"}),document.body.appendChild(t);let e=0;const n=()=>{i.get().cubeChoice===""&&(i.set({cubeChoice:"pending"}),t.style.display="flex",At.ping(),t.innerHTML=`<div style="width:min(560px,94vw);background:#0a0c14;border:2px solid #b070ff;color:#e8e0ff;font:14px/1.5 monospace;padding:16px">
      <b style="letter-spacing:3px">THE LARDER IS ALIVE</b><hr>
      <p>It has an eye now, and the eye is on you. The sensors say: life. Halcyon Reclamation's manifest console blinks, waiting for you to say what came aboard.</p>
      <p><button id="cc-keep" style="font:14px monospace;padding:8px 12px">Keep it <small>(log it on the manifest as inert scrap)</small></button>
      <button id="cc-honest" style="font:14px monospace;padding:8px 12px">Log it honestly <small>("living object")</small></button>
      <button id="cc-out" style="font:14px monospace;padding:8px 12px">Open the cargo door <small>(fine: <span style="color:#ff6060">${$i.litterFine} cr added to debt</span>)</small></button></p></div>`,t.querySelector("#cc-keep").onclick=()=>s.choose("keep"),t.querySelector("#cc-honest").onclick=()=>s.choose("honest"),t.querySelector("#cc-out").onclick=()=>s.choose("jettison"))},s={enabled:!0,choose(r){const o=i.get();t.style.display="none",r==="keep"?(i.set({cubeChoice:"kept",flags:{...o.flags,manifest:"scrap"},log:[...o.log,"You kept the Larder and logged it as inert scrap."]}),qn("MANIFEST: 1x inert scrap (cube). Accepted. Nobody looks twice at scrap.",4500)):r==="honest"?(i.set({cubeChoice:"kept",flags:{...o.flags,manifest:"organic"},log:[...o.log,"You logged the Larder honestly. The console filed it as organic residue."]}),qn('You type "LIVING OBJECT". The console auto-files it: ORGANIC RESIDUE, IGNORE. Nobody is reading.',5e3)):(i.set({cubeChoice:"jettisoned",cubeState:"none",feeds:0,debt:o.debt+$i.litterFine,door:o.door+1,flags:{...o.flags,manifest:"thrown"},log:[...o.log,"You jettisoned the cube. It will be back."]}),At.door(),qn("Cargo door open. The cube drifts out, looking back. Littering fine: 150 cr added to your debt.",4500))},isOpen:()=>t.style.display==="flex"};return i.subscribe(r=>{if(!s.enabled)return;r.cubeLunged&&r.cubeChoice===""&&r.mode==="rooms"&&r.room==="transmog"&&!r.report&&r.cubeState==="aboard"?e||(e=setTimeout(()=>{e=0;const a=i.get();a.cubeChoice===""&&a.cubeLunged&&a.mode==="rooms"&&n()},4200)):e&&r.cubeChoice!==""&&(clearTimeout(e),e=0)}),s}function Qv(i){let t=i.get().hull,e=!1;return i.subscribe(n=>{const s=n.profile,r={};n.fatigue>s.maxFatigue&&(r.maxFatigue=n.fatigue),n.fatigue>=70&&!e&&(e=!0,r.skips=s.skips+1),n.fatigue<=1&&(e=!1),n.hull<t-.5&&n.mode==="fly"&&(r.hullHits=s.hullHits+1),t=n.hull,Object.keys(r).length&&i.set({profile:{...s,...r}})}),setInterval(()=>{const n=i.get();n.mode!=="finale"&&i.set({profile:{...n.profile,seconds:n.profile.seconds+1}})},1e3),{logRead(n){const s=i.get(),r=new Set((s.flags.readLogs??"").split(",").filter(Boolean));n&&r.add(String(n)),i.set({profile:{...s.profile,logsRead:s.profile.logsRead+1},flags:{...s.flags,readLogs:[...r].join(",")}})}}}const Qh=i=>{var t;return(((t=i.flags)==null?void 0:t.readLogs)??"").split(",").filter(Boolean).map(Number)};function tu(i,t){return(i==null?void 0:i.mergeSeconds)===void 0?"unmet":(i.swaps??0)>=1?"tender":i.mergeSeconds<20||t?"hasty":"patient"}function hl(i){const t=Ps(i),e=i.flags??{},n=Qh(i),s=tu(e,i.cubeChoice==="jettisoned"),r=i.cubeChoice==="jettisoned"?"threw the Larder out (it came back)":i.cubeChoice==="kept"?"kept the Larder":"never decided about the Larder",o=i.cubeChoice==="jettisoned"?"thrown out (it came back; not on any manifest)":e.manifest==="organic"?'logged honestly, auto-filed as "organic residue, ignore"':i.cubeChoice==="kept"?"on the manifest as inert scrap":"never logged";return[{id:"larder",label:"The Larder",value:r,part1:i.cubeChoice==="jettisoned"?'Littering fine (150 cr added to debt), an extra sortie; spores a shade darker; ending line: "You threw it out. It let you."':'It stays aboard and grows; spores a shade lighter; ending line: "You kept it. In fairness, it kept you too."',hooks:{part2:i.cubeChoice==="jettisoned"?'Spores are wary but loyal ("the one who came back"): slower to help at first':"Spores trust you from day one on the crash planet and help sooner",part3:"Starting alignment lean of your creature",station:"Station has no record of the Larder until the Part 2 pickup",si:i.cubeChoice==="jettisoned"?"The SI notes you tried to discard its neighbour":"The SI notes you fed it"}},{id:"halcyon",label:"The manifest",value:o,part1:i.cubeChoice==="jettisoned"?"Fined for littering; Halcyon sees a fine, not a cube":e.manifest==="organic"?"You told the truth and nobody read it. No effect on debt.":"Nobody looks twice at scrap. No effect on debt.",hooks:{part2:i.cubeChoice==="jettisoned"?"Halcyon pickup crew find a cube that is on no manifest at all: they assume theft":e.manifest==="organic"?'Halcyon pickup crew find the honest log buried in their own "ignore" pile: awkward for them, credibility for you':'Halcyon pickup crew find "inert scrap" staring at them: you lied on a manifest and they know it',part3:"No direct effect on the creature",station:"Halcyon learns about the Larder and the spores only at the crash-planet pickup (Part 2)",si:"The SI cares only that you were honest with it, not with Halcyon"}},{id:"sleep",label:"Sleep habits",value:`${t.sleeper}: ${t.nights} night(s), skipped ${t.skippedSleeps}x, peak tiredness ${t.maxFatigue}`,part1:"Fatigue penalties in play; spore mood and accessories (sleepless: glow/drip, Sleepy/Grumpy); the creature name",hooks:{part2:t.sleeper==="sleepless"?"You start the survival game already tired":"You start rested",part3:"Spore mood baseline",station:"Medical scans show your sleep debt",si:"The SI comments on how long you stayed awake"}},{id:"spores",label:"How you treated the spores",value:s+(e.sporeKind||e.sporeRough||e.sporeFed?` (aboard: ${e.sporeKind??0} kind, ${e.sporeRough??0} rough, fed ${e.sporeFed??0}x; lean ${(e.sporeKind??0)+2*(e.sporeFed??0)>=2*(e.sporeRough??0)?"light":"dark"})`:""),part1:s==="tender"?"The finale says the spores held your hands at the Threshold":s==="hasty"?"The finale says you rushed the door":s==="patient"?"The finale says the spores waited for you":"Not reached",hooks:{part2:s==="tender"?"Spores bond faster and bring gifts":"Spores are playful but keep their distance",part3:"Your creature's care stat starts high (tender) or low",station:"The station sees tender spores as easier to isolate",si:"The SI asks how you treated them"}},{id:"mining",label:"Mining style",value:`${t.style}: ${t.clean} clean, ${t.shatters} shattered, ${t.hullHits} hull hit(s)`,part1:"Spore traits (spikes/horns vs halo/fluff), outline weight, the creature name",hooks:{part2:t.style==="greedy"?"Scavenging is faster but you take damage":"Repairs are more efficient",part3:"Creature temperament",station:"Your mining record is on file",si:'The SI: "you take what you can" or "you take care"'}},{id:"debt",label:"Debt",value:`${i.debt} cr left, ${t.debtPaid} paid`,part1:"HUD counter, bench paycheck, nightly interest, ending line",hooks:{part2:"The debt is still there, and so is the cheerful reminder",part3:"Leaderboard flavour: debt-free runs are rare",station:"Halcyon owns the station contract",si:"The SI does not care about debt"}},{id:"logs",label:"Logs read",value:n.length?`logs ${n.sort((a,l)=>a-l).join(", ")}`:"none",part1:n.includes(6)&&n.includes(7)?"The Threshold sequence says you read the warning and went anyway":"The Threshold sequence has no warning line",hooks:{part2:"Knowing the SI left on purpose changes the dialogue options",part3:"No direct effect on the creature",station:"The station is decoding the same logs",si:n.includes(7)?'The SI: "you read me"':"The SI has to explain itself from scratch (it will not)"}}]}const No="starburn.ledger.v1";function Ur(i){return{version:1,savedAt:new Date().toISOString(),day:i.day,profile:Ps(i),flags:i.flags??{},entries:hl(i)}}function eu(i){return hl(i).map(t=>`${t.label}: ${t.value} | Part 1: ${t.part1}`).join(`
`)}function tx(i){const t=tu(i.flags,i.cubeChoice==="jettisoned"),e=Qh(i);return{key:t==="tender"?"The spores were never lost. They were the key. They held your hands while you held the door.":t==="hasty"?"The spores were never lost. They were the key. You were holding the door, rather quickly.":"The spores were never lost. They were the key. And you were holding the door.",warning:e.includes(6)&&e.includes(7)?"You read the warning. You are, technically, going anyway.":null}}function ex(i){try{const n=localStorage.getItem(No);n&&localStorage.setItem(No+".prev",n)}catch{}let t=0;const e=()=>{t=0;try{localStorage.setItem(No,JSON.stringify(Ur(i.get())))}catch{}};return i.subscribe(()=>{t||(t=setTimeout(e,800))}),{save:e,export:()=>Ur(i.get())}}function nx(i){const t={enabled:!0,intensity:0,tone:"deadpan",lines:0};let e=0,n=30;return setInterval(()=>{const s=i.get(),r=Gr(s);if(t.intensity=r,t.tone=Nc(r),e+=1,!(!t.enabled||s.mode==="finale"||s.mode==="exterior"||s.mode==="cameo")&&e>=n){n=e+Xg(r)*(.7+Math.random()*.6);const o=qg[Nc(r)];s.mode==="rooms"&&!s.report&&(t.lines++,qn(o[Math.floor(Math.random()*o.length)],4200)),r>.25&&Math.random()<r&&At.hallucinate()}},1e3),t}const ix="starburn.carryover",sx=1,rx="SB1.";function ox(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}function ax(i,t){const e=Ps(i),n=Ur(i);delete n.savedAt;const s={schema:ix,version:sx,game:"part1",day:i.day,creature:rl(e),profile:e,ledger:n,spores:t.map(({playerProfile:r,...o})=>o)};return{...s,checksum:ox(JSON.stringify(s))}}const lx=i=>btoa(String.fromCharCode(...new TextEncoder().encode(i))),cx=i=>rx+lx(JSON.stringify(i)),ue={gate:16,open:28,tentacle:34,cut:36,crash:36.9,wreck:38.4,end:45},Fo=i=>i<ue.gate?"maze":i<ue.open?"gate":i<ue.cut?"open":i<ue.crash?"cut":i<ue.wreck?"crash":i<ue.end?"wreck":"end",qc=[[.4,"The spores have moved in. They have redecorated. Mostly with themselves."],[4.2,"The Helm is four minutes away. It is also one step. You are not sure which of those is the problem."],[8.2,"The corridor goes on. So does the corridor behind it. Physics has stepped out for a moment."],[12,"The ship stops being a ship and becomes an idea the spores are having. You, it turns out, are part of the idea."],[16.4,"On a screen that was not there before: the Threshold. Somewhere in you, something already knew the way."],[21,"You fly the ship. Or the ship flies you. The spores steer, politely."],[25,"The Threshold is older than the junk, older than the SI, and clearly expecting company."],[28.4,"The spores were never lost. They were the key. And you were holding the door."],[32,"Something on the other side leans closer."]];function hx(i){return i==="jettisoned"?"You threw it out. It let you. That is the part you will think about later.":i==="kept"?"You kept it. In fairness, it kept you too.":"You never decided. The cube did."}function ux(i){const t=document.createElement("canvas");t.id="finale",Object.assign(t.style,{position:"fixed",inset:"0",width:"100vw",height:"100vh",zIndex:"40",display:"none",background:"#000"});const e=document.createElement("div");e.id="finale-text",Object.assign(e.style,{position:"fixed",left:"50%",bottom:"14vh",transform:"translateX(-50%)",maxWidth:"78vw",textAlign:"center",font:"italic 20px/1.4 Georgia, serif",color:"#f4efe0",textShadow:"0 0 8px #000, 0 0 14px #000",zIndex:"41",display:"none",transition:"opacity .6s",pointerEvents:"none"});const n=document.createElement("div");n.id="finale-skip",n.textContent="Space: skip",Object.assign(n.style,{position:"fixed",right:"14px",bottom:"10px",font:"12px monospace",color:"#999",zIndex:"41",display:"none"});const s=document.createElement("div");s.id="finale-end",Object.assign(s.style,{position:"fixed",inset:"0",zIndex:"42",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",color:"#f4efe0",textAlign:"center",font:"16px monospace",background:"rgba(0,0,0,.35)"}),document.body.append(t,e,n,s);let r=qc;const o=t.getContext("2d"),a={active:!1,t:0,shown:-1,cutDone:!1,flash:0},l={onFeedback:void 0,get t(){return a.t},get active(){return a.active},get phase(){return Fo(a.t)},get tentacleVisible(){return a.active&&a.t>=ue.tentacle&&a.t<ue.cut},play(){const g=i.get();{const m=tx(g);r=qc.map(([u,y])=>[u,u===28.4?m.key:y]),m.warning&&r.push([22.8,m.warning]),r.sort((u,y)=>u[0]-y[0])}a.active=!0,a.t=0,a.shown=-1,a.cutDone=!1,i.set({mode:"finale"}),t.style.display="block",n.style.display="block",e.style.display="block",s.style.display="none",t.width=innerWidth,t.height=innerHeight,At.merge(),v(performance.now())},seek(g){a.t=g,a.shown=-1,a.cutDone=g>=ue.cut},skipNow(){a.active&&l.seek(ue.end)}};let c=0;const h=g=>{e.style.opacity="0",setTimeout(()=>{e.textContent=g,e.style.opacity="1"},120)},d=(g,m,u,y,x)=>{o.fillStyle=`hsl(${y},85%,58%)`,o.strokeStyle="#000",o.lineWidth=Math.max(2,u*.12),o.beginPath(),o.arc(g,m,u,0,7),o.fill(),o.stroke(),o.fillStyle="#fff";for(const _ of[-.35,.35])o.beginPath(),o.arc(g+_*u,m-.15*u,u*.26,0,7),o.fill(),o.stroke(),o.fillStyle="#000",o.beginPath(),o.arc(g+_*u+Math.sin(x*2)*u*.06,m-.12*u,u*.1,0,7),o.fill(),o.fillStyle="#fff";o.strokeStyle="#000",o.beginPath(),o.arc(g,m+.25*u,u*.25,.1,Math.PI-.1),o.stroke()};function f(g){const m=t.width,u=t.height,y=m/2,x=u/2,_=Fo(g);o.setTransform(1,0,0,1,0,0),o.fillStyle="#000",o.fillRect(0,0,m,u);const I=_==="open"?2+(g-ue.open)*1.6:_==="crash"?18:0;if(o.translate((Math.random()-.5)*I,(Math.random()-.5)*I),_!=="cut")if(_==="maze"){const T=Math.sin(g*.7)>.8?Math.PI:0;o.translate(y,x),o.rotate(T+Math.sin(g*.5)*(.1+g*.02)+g*.05*(g>8?1:0)),o.translate(-y,-x);for(let E=14;E>=0;E--){const R=(E+g*.9%1)/14,S=Math.pow(R,2.2),M=m*(.05+S*1.3),P=u*(.05+S*1.3),k=[160,220,40,30,0][(E+Math.floor(g/2))%5];o.strokeStyle=`hsl(${k},60%,${18+S*40}%)`,o.lineWidth=2+S*14,o.strokeRect(y-M/2+Math.sin(g+E)*6*S,x-P/2,M,P),E%3===0&&(o.fillStyle=`hsla(${k},70%,40%,${.15+S*.3})`,o.fillRect(y-M/2,x-P/2,M*.1,P))}for(let E=0;E<12;E++){const R=E*2.4+g*.3,S=60+(E*53+g*40)%(Math.min(m,u)*.45);d(y+Math.cos(R)*S,x+Math.sin(R*1.3)*S*.7,10+S*.12,(E*47+g*20)%360,g)}}else if(_==="gate"||_==="open"){const T=_==="gate"?1:.4;o.fillStyle="#fff";for(let M=0;M<140;M++){const P=M*2.399,k=(M*.137+g*.35*T)%1,L=k*Math.max(m,u)*.7;o.globalAlpha=k,o.fillRect(y+Math.cos(P)*L,x+Math.sin(P)*L,1+k*2,1+k*2+T*k*4)}o.globalAlpha=1;const E=Math.min(m,u)*(.06+.3*Math.min(1,(g-ue.gate)/14)),R=_==="open"?Math.min(1,(g-ue.open)/4):Math.min(.5,(g-ue.gate)/20),S=o.createRadialGradient(y,x,E*.4,y,x,E*(1.6+R*3));S.addColorStop(0,`rgba(190,150,255,${.2+R*.8})`),S.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=S,o.fillRect(0,0,m,u),o.strokeStyle=`hsl(270,60%,${40+R*40}%)`,o.lineWidth=E*.12,o.beginPath(),o.arc(y,x,E,0,7),o.stroke(),o.lineWidth=E*.03,o.strokeStyle="#fff",o.beginPath(),o.arc(y,x,E*.9,g,g+4.2),o.stroke(),_==="open"&&(o.fillStyle=`rgba(255,255,255,${R*.55})`,o.beginPath(),o.arc(y,x,E*.85,0,7),o.fill());for(let M=0;M<12;M++){const P=(g*.12+M/12)%1,k=M*.9;d(y+Math.cos(k)*(1-P)*m*.5*(_==="open"?.3+(1-R):1),x+Math.sin(k)*(1-P)*u*.4,6+(1-P)*12,M*47%360,g)}if(l.tentacleVisible){const M=(g-ue.tentacle)/(ue.cut-ue.tentacle);o.strokeStyle="#05020a",o.lineCap="round",o.lineWidth=E*(.5-M*.15),o.beginPath(),o.moveTo(m+40,u*.9),o.bezierCurveTo(m*(.9-M*.3),u*(.2+M*.1),y+E*(1-M*1.3),x-E*1.3,y-E*.2*M,x+E*.2-M*E*.4),o.stroke()}}else if(_==="crash")o.fillStyle=`rgba(255,240,220,${Math.max(0,1-(g-ue.crash)/1.4)})`,o.fillRect(0,0,m,u);else{const T=o.createLinearGradient(0,0,0,u*.62);T.addColorStop(0,"#2a0f3a"),T.addColorStop(1,"#e0703a"),o.fillStyle=T,o.fillRect(0,0,m,u*.62),o.fillStyle="#3a1a22",o.fillRect(0,u*.62,m,u*.38),o.fillStyle="#ffe0a0",o.beginPath(),o.arc(m*.8,u*.2,u*.06,0,7),o.fill(),o.save(),o.translate(y,u*.66),o.rotate(-.22),o.fillStyle="#c8ccd4",o.beginPath(),o.ellipse(0,0,m*.16,u*.07,0,0,7),o.fill(),o.fillStyle="#6aa0e0",o.fillRect(-m*.04,-u*.045,m*.08,u*.03),o.restore();for(let E=0;E<26;E++){const R=(g*.3+E/26)%1;o.fillStyle=`rgba(60,50,50,${.5*(1-R)})`,o.beginPath(),o.arc(y+Math.sin(E*7+g)*30-40+R*60,u*.62-R*u*.4,8+R*26,0,7),o.fill()}}}const p=()=>{const g=i.get();s.style.display="flex",s.innerHTML=`<div style="font:bold 44px Georgia,serif;letter-spacing:6px">TO BE CONTINUED</div><div id="fe-line" style="font:italic 18px Georgia,serif;max-width:70vw">${hx(g.cubeChoice)}</div><div id="fe-creature" style="font:15px Georgia,serif;max-width:70vw;color:#cfe">Your creature: <b>${rl(Ps(g)).name}</b>.</div><div id="fe-debt" style="color:#fc8">Debt remaining: ${g.debt} cr. Halcyon Reclamation will still want it after whatever happens next.</div>
      <div id="fe-recap" style="max-width:78vw;max-height:30vh;overflow:auto;text-align:left;font:12px/1.45 monospace;background:rgba(0,0,0,.55);border:1px solid #567;padding:8px 12px"><b>WHAT YOUR CHOICES DID</b>${hl(g).map(u=>`<div><b>${u.label}:</b> ${u.value}<br><span style="color:#9bd">&rarr; ${u.part1}</span></div>`).join("")}</div>
      <div><button id="fe-again" style="font:15px monospace;padding:8px 14px">Play again</button> <button id="fe-fb" style="font:15px monospace;padding:8px 14px">Send feedback</button> <button id="fe-copy" style="font:15px monospace;padding:8px 14px">Copy my choices</button></div>
      <div><button id="fe-code" style="font:15px monospace;padding:8px 14px">Copy carryover code</button> <button id="fe-file" style="font:15px monospace;padding:8px 14px">Download carryover file</button>  </div><small style="color:#9ab;max-width:70vw">The carryover holds your choices and your spores for the next part. No personal data; nothing is sent anywhere.</small>`;const m=()=>{var u;return ax(i.get(),((u=window.cameo)==null?void 0:u.spores)??[])};s.querySelector("#fe-code").onclick=async()=>{const u=s.querySelector("#fe-code");try{await navigator.clipboard.writeText(cx(m())),u.textContent="Copied"}catch{u.textContent="Copy blocked"}},s.querySelector("#fe-file").onclick=()=>{const u=document.createElement("a");u.href=URL.createObjectURL(new Blob([JSON.stringify(m(),null,1)],{type:"application/json"})),u.download="starburn-part1-carryover.json",u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),2e3)},s.querySelector("#fe-copy").onclick=async()=>{try{await navigator.clipboard.writeText(eu(i.get())),s.querySelector("#fe-copy").textContent="Copied"}catch{s.querySelector("#fe-copy").textContent="Copy blocked"}},s.querySelector("#fe-again").onclick=()=>location.reload(),s.querySelector("#fe-fb").onclick=()=>{var u;return(u=l.onFeedback)==null?void 0:u.call(l)},n.style.display="none",e.style.display="none"};function v(g){if(!a.active)return;const m=Math.min(.1,(g-c)/1e3);c=g,a.t+=m;const u=Fo(a.t);u==="cut"&&!a.cutDone&&(a.cutDone=!0,e.style.opacity="0",At.sting()),u==="crash"&&a.flash===0&&(a.flash=1,At.shatter()),u!=="crash"&&u!=="wreck"&&u!=="end"&&(a.flash=0),a.t>=ue.open&&a.shown<7&&a.t<ue.open+.1&&At.burst();for(let y=0;y<r.length;y++)a.t>=r[y][0]&&a.shown<y&&a.t<ue.cut&&(a.shown=y,h(r[y][1]));u==="cut"&&(e.style.opacity="0"),u==="crash"&&a.shown<19&&a.t>ue.crash+.2&&(a.shown=19,h("Down.")),u==="wreck"&&a.shown<20&&(a.shown=20,h("The ship is on a planet. The planet did not ask for the ship. Neither of you is hurt, exactly.")),u==="end"?s.style.display==="none"&&p():f(a.t),u==="end"&&f(ue.wreck+1),requestAnimationFrame(v)}return addEventListener("keydown",g=>{a.active&&(g.code==="Space"||g.code==="Escape")&&(g.preventDefault(),l.skipNow())}),l}function dx(i){const t=document.createElement("div");t.id="sleep",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"25",transition:"background 1s"}),document.body.appendChild(t);let e=!1;const n=a=>`<div style="width:min(600px,94vw);max-height:92vh;overflow:auto;background:#0a0c14;border:2px solid #6080ff;color:#cfe0ff;font:14px/1.5 monospace;padding:16px">${a}</div>`,s=()=>{const a=i.get(),l=ji(a.fatigue),c=qh(a);t.style.display="flex",t.style.background="rgba(0,0,0,.78)",t.innerHTML=n(`<b style="letter-spacing:3px">THE BUNK</b> <small>Day ${a.day}</small><hr>
      <p>Tiredness: <b style="color:${["#9f9","#ff8","#fa6","#f66"][l]}">${Xh[l]}</b> (${Math.round(a.fatigue)}/100)</p>
      <p><b>Sleeping:</b> costs about ${c.oxygen} oxygen${c.scrap?" and 1 scrap of rations":""}. The night changes things: the vault shifts, the cube acts, the journal updates, the sectors reshuffle. The vault moves a step closer every time.</p>
      <p><b>Not sleeping:</b> nothing changes, but you get more tired: first a flicker, then a harder timing ring, then phantom sounds and ghost junk, then glitching consoles and hungrier lungs.</p>
      <button id="sl-go" style="font:14px monospace;padding:8px 14px">Sleep</button> <button id="sl-no" style="font:14px monospace;padding:8px 14px">Not now</button>`),t.querySelector("#sl-go").onclick=()=>o.sleep(!0),t.querySelector("#sl-no").onclick=()=>o.close()},r=a=>{t.style.display="flex",t.style.background="rgba(0,0,0,.78)",t.innerHTML=n(`<b style="letter-spacing:3px">MORNING: DAY ${a.day}</b><hr>
      <p><b>Journal:</b> <i>${a.journal}</i></p><p><b>Vault:</b> ${a.vault}</p>${a.cube?`<p><b>Cube:</b> ${a.cube}</p>`:""}<p><b>Overnight:</b> ${a.event}</p><p><b>Sectors:</b> ${a.field}</p>
      ${a.log?`<p style="color:#9fd"><b>New log recovered:</b> Log ${a.log} is now in the Bunk terminal.</p>`:""}<p style="color:#ff6060">Debt +10 cr: Halcyon Reclamation added "overnight handling" to your debt.</p><small>Cost: ${a.costs.oxygen} oxygen${a.costs.scrap?", 1 scrap":""}. Tiredness cleared.</small><hr>
      <button id="sl-up" style="font:14px monospace;padding:8px 14px">Wake up</button>`),t.querySelector("#sl-up").onclick=()=>o.close()},o={open(){i.get().mode==="rooms"&&(e=!0,s())},close(){e=!1,t.style.display="none"},isOpen:()=>e,last:null,sleep(a=!1){const{patch:l,report:c}=Tv(i.get());return i.set(l),o.last=c,At.ping(),At.blip(262,.9,"sine",.06,196),a&&(e=!0,t.innerHTML=n('<div style="text-align:center;letter-spacing:6px">Zzz...</div>'),t.style.background="#000",setTimeout(()=>r(c),1500)),c}};return addEventListener("keydown",a=>{e&&a.code==="Escape"&&o.close()}),i.subscribe(a=>{e&&!(a.mode==="rooms"&&a.room==="bed")&&o.close()}),o}function fx(i){const t=document.createElement("div");t.id="fatigue-fx",Object.assign(t.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"3",opacity:"0",transition:"opacity .8s"}),document.body.appendChild(t);let e=0;setInterval(()=>{var o;e+=.1;const n=i.get(),s=ji(n.fatigue),r=document.querySelector("canvas");if(t.style.background=`radial-gradient(ellipse at center, transparent ${60-s*12}%, rgba(0,0,0,${.35+s*.2}) 100%)`,t.style.opacity=s?String(s>=3?.7+.3*Math.sin(e*9):.6+.4*Math.sin(e*2+s)):"0",r){{const a=((o=window.atmosphere)==null?void 0:o.enabled)===!1?0:Gr(n),l=a>.3?`hue-rotate(${Math.round(Math.sin(e*.8)*45*a)}deg) saturate(${(1+a*.5).toFixed(2)})`:"",c=s>=2?`blur(${(s===2?.7:1.5)*(.6+.6*Math.sin(e*1.3))+.3}px)`:"";r.style.filter=(c+" "+l).trim()}r.style.opacity=s>=3&&Math.sin(e*17)>.85?"0.82":""}},100)}function px(i,t){const e=()=>{const a=i.get();return a.cubeState==="aboard"&&!a.cubeLunged&&a.mode==="rooms"&&a.room==="transmog"&&!a.report&&a.scrap>0};let n=0;const s={enabled:!0,lungeNow(){return e()?o():!1},lunged:0},r=()=>{document.body.animate([{transform:"translate(0,0)"},{transform:"translate(-16px,8px)"},{transform:"translate(14px,-10px)"},{transform:"translate(-9px,5px)"},{transform:"translate(5px,-3px)"},{transform:"translate(0,0)"}],{duration:520,easing:"ease-out"});const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",background:"#8a40ff",opacity:"0.55",transition:"opacity .7s",pointerEvents:"none",zIndex:"50"}),document.body.appendChild(a),requestAnimationFrame(()=>{a.style.opacity="0"}),setTimeout(()=>a.remove(),900)};function o(){const a=i.get(),l=yv(a.scrap);return i.set({scrap:a.scrap-l,feeds:Math.max(1,a.feeds),cubeLunged:!0,lunges:a.lunges+1,beats:a.beats.includes("firstFeed")?a.beats:[...a.beats,"firstFeed"],log:[...a.log,`The cube lunged and swallowed ${l} scrap. Nobody asked it to.`]}),At.sting(),r(),t.say("cubeLunge"),s.lunged++,!0}return i.subscribe(()=>{s.enabled&&(e()?n||(n=setTimeout(()=>{n=0,e()&&o()},1400)):n&&(clearTimeout(n),n=0))}),s}class mx{constructor(t,e){H(this,"scene",new pi);H(this,"ship",new De);H(this,"glow");H(this,"engineLight",new ke(6332671,0,12));H(this,"tracker",new De);H(this,"trackerLight",new ke(16724016,0,6));H(this,"cells",[]);H(this,"kind","launch");H(this,"t",0);H(this,"dur",4);H(this,"active",!1);H(this,"done");H(this,"caps",[]);H(this,"pinged",-1);H(this,"promptShown",!1);H(this,"cap",document.createElement("div"));H(this,"skip",document.createElement("button"));H(this,"fade",document.createElement("div"));H(this,"prompt",document.createElement("div"));H(this,"onFeedback");this.store=t,this.camera=e;const n=this.scene;n.background=new wt(131850),n.add(new Cs(4872312,.9));const s=new Pr(16773336,2.6);s.position.set(8,6,6),n.add(s);const r=new Pr(6982399,1.2);r.position.set(-8,2,-6),n.add(r);const o=new ce,a=[];for(let f=0;f<1200;f++){const p=Math.random()*2-1,v=Math.random()*6.283,g=Math.sqrt(1-p*p);a.push(Math.cos(v)*g*150,p*150,Math.sin(v)*g*150)}o.setAttribute("position",new Ht(a,3)),n.add(new Mr(o,new vs({color:12570879,size:.9,fog:!1})));const l=new st(new pe(30,32,20),new de({color:16742970,emissive:4200448,flatShading:!0}));l.position.set(-70,-34,-120),n.add(l),this.buildShip(),n.add(this.ship);const c=new st(new ie(.5,.2,.3),new de({color:2763312,metalness:.6,roughness:.4})),h=new st(new Je(.012,.012,.5,6),new de({color:8947848}));h.position.set(.15,.3,0);const d=new st(new pe(.07,10,8),new Yt({color:16724016}));d.position.set(-.15,.13,.1),d.name="led",this.tracker.add(c,h,d,this.trackerLight),this.trackerLight.position.copy(d.position),this.tracker.scale.setScalar(.001),this.tracker.visible=!1,this.tracker.position.set(1.3,.55,1.5),n.add(this.tracker),Object.assign(this.cap.style,{position:"fixed",left:"50%",bottom:"12vh",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"12"}),this.cap.id="ext-caption",this.skip.id="ext-skip",this.skip.textContent="Skip (Space)",Object.assign(this.skip.style,{position:"fixed",right:"12px",top:"12px",display:"none",padding:"6px 10px",font:"12px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"40"}),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"11"}),this.prompt.id="ext-end",Object.assign(this.prompt.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",display:"none",textAlign:"center",padding:"22px 30px",background:"rgba(3,6,12,.88)",border:"2px solid #c9a96a",color:"#ffe9c0",font:"16px/1.5 Georgia, serif",zIndex:"41"}),this.prompt.innerHTML='<div style="font-size:22px;letter-spacing:3px">END OF PART 1</div><p>Thanks for flying, Junker.<br><i>Part 2: the spores are out there. So is whoever is following them.</i></p><button id="ext-again" style="font:14px monospace;padding:8px 14px;margin:4px">Play again</button><button id="ext-fb" style="font:14px monospace;padding:8px 14px;margin:4px">Send feedback</button>',document.body.append(this.cap,this.skip,this.fade,this.prompt),this.skip.onclick=()=>this.skipNow(),addEventListener("keydown",f=>{this.active&&(f.code==="Space"||f.code==="Escape")&&this.skipNow()}),this.prompt.querySelector("#ext-again").onclick=()=>location.reload(),this.prompt.querySelector("#ext-fb").onclick=()=>{var f;return(f=this.onFeedback)==null?void 0:f.call(this)}}buildShip(){const t=(a,l,c=1)=>{const h=[];for(let d=0;d<=40;d++){const f=a+(l-a)*d/40;h.push(new rt(Math.max(1e-4,1.3*c*Math.sin(Math.PI*Math.pow(f,.6))*(1-.3*f)),3-6*f))}return h},n=new st(new bs(t(0,1),56,Math.PI/2+.6,Math.PI*2-1.2),new de({color:9213352,metalness:.75,roughness:.32,side:Ee})),s=new st(new bs(t(.1,.62,1.012),16,Math.PI/2-.6,2*.6),new zg({color:10479871,transparent:!0,opacity:.28,roughness:.05,metalness:.1,side:Ee,emissive:1060928})),r=new De;r.add(n,s),r.rotation.x=Math.PI/2,[16760944,4251824,14721072,6324479].forEach((a,l)=>{const c=new st(new ie(1.05,.14,1.05),new de({color:1382948,emissive:a,emissiveIntensity:.9}));c.position.set(0,-.6+l*.4,1),this.cells.push(c),this.ship.add(c)}),this.ship.add(r),this.glow=new st(new pn(.4,1.8,16,1,!0),new Yt({color:7385343,transparent:!0,opacity:0,blending:hn,depthWrite:!1,side:Ee})),this.glow.rotation.x=-Math.PI/2,this.glow.position.set(0,0,-4.1),this.ship.add(this.glow),this.engineLight.position.set(0,0,-3.6),this.ship.add(this.engineLight)}play(t,e){this.kind=t,this.t=0,this.done=e,this.active=!0,this.pinged=-1,this.promptShown=!1,this.prompt.style.display="none",this.tracker.visible=!1,this.ship.position.set(0,0,0),this.ship.rotation.set(0,0,0),this.glow.material.opacity=0,this.fade.style.opacity="0",this.caps=t==="launch"?[{at:.3,until:3.4,text:"Undocking. The hull is smooth, one side is glass, and the paperwork is out of date."}]:[{at:.4,until:3.6,text:"Somewhere above the galaxy’s rubbish heap, the ship drifts. Lights on. Spores gone."},{at:4.2,until:8,text:"Something small and blinking has clamped itself to your hull. It is not yours."},{at:8.4,until:12.5,text:"Part 2: someone has been tracking the spores. Now they are tracking you."}],this.dur=t==="launch"?4:12.8,this.skip.style.display="block",this.store.set({mode:"exterior"}),At.door()}finish(){this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",At.engine(0,!1),this.kind==="launch"?(this.fade.style.opacity="1",setTimeout(()=>{var t;(t=this.done)==null||t.call(this),this.fade.style.opacity="0"},450)):this.showPrompt()}skipNow(){this.active&&(this.kind==="end"?(this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",this.tracker.visible=!0,this.tracker.scale.setScalar(1.8),this.showPrompt()):this.finish())}showPrompt(){this.promptShown=!0,this.prompt.style.display="block"}update(t){if(this.store.get().mode!=="exterior")return;this.t+=t;const e=this.t,n=this.camera;if(this.cells.forEach((r,o)=>{r.material.emissiveIntensity=.7+.3*Math.sin(e*2+o*1.3)+(o===3&&this.kind==="end"?.5*Math.sin(e*6):0)}),this.kind==="launch"){const r=Math.max(0,e-1.2);this.ship.position.z=.9*r*r*2.2,this.ship.position.y=.04*r,this.glow.material.opacity=Math.min(.4,r*.6),this.engineLight.intensity=Math.min(8,r*6),At.engine(Math.min(1,r/1.5),!0);const o=-.5+e*.08;n.position.set(Math.cos(o)*9,1.8,Math.sin(o)*9+1),n.lookAt(0,.2,Math.max(0,this.ship.position.z*.35)),e>this.dur-.5&&this.active&&(this.fade.style.opacity="1"),e>=this.dur&&this.active&&this.finish()}else{const r=Math.min(1,e/3.2),o=r*r*(3-2*r);this.ship.rotation.y=Math.sin(e*.2)*.08,this.ship.position.y=Math.sin(e*.7)*.06;const a=Math.max(0,Math.min(1,(e-5.6)/3.2)),l=a*a*(3-2*a),c=4+5*o,h=.4+2.1*o,d=2.5+8.5*o;if(n.position.set(c+(3-c)*l*.55,h+(.9-h)*l*.5,d+(4.2-d)*l*.55),n.lookAt(this.ship.position.x+.6*l,.2+.4*l,.8+.6*l),e>4.2){this.tracker.visible=!0;const f=Math.min(1,(e-4.2)/.8);this.tracker.scale.setScalar((f*f*(3-2*f)+.001)*1.8),this.tracker.rotation.y=e*.5;const p=Math.sin(e*(6+a*10))>0?1:.1;this.trackerLight.intensity=3*p,this.tracker.getObjectByName("led").visible=p>.5;const v=Math.floor((e-4.2)/.9);v!==this.pinged&&(this.pinged=v,At.ping())}e>=this.dur&&this.active&&this.finish()}const s=this.caps.find(r=>e>=r.at&&e<r.until);if(s?(this.cap.textContent=s.text,this.cap.style.opacity="1"):this.cap.style.opacity="0",!this.active&&this.kind==="end"){const r=.5+.5*Math.sin(e*2);this.trackerLight.intensity=1+3*(r>.5?1:0)}}render(t){t.render(this.scene,this.camera)}}const Ua=[{id:"clarity",label:"How clear was it what to do at the start? (1 = lost, 5 = obvious)",kind:"scale"},{id:"fun",label:"How fun was it overall? (1 = boring, 5 = great)",kind:"scale"},{id:"mining",label:"Mining: was it clear when and where you could click?",kind:"choice",choices:["Clear","Sort of","Confusing"]},{id:"again",label:"Would you play again, or play Part 2?",kind:"choice",choices:["Yes","Maybe","No"]},{id:"stuck",label:"Where did you get stuck or bored?",kind:"text"},{id:"best",label:"Best moment?",kind:"text"},{id:"broken",label:"Anything broken or confusing?",kind:"text"}],nu="starburn-feedback";function gx(i){const t=i.answers;return[`StarBurn Part 1 playtest feedback (${i.at})`,"",...Ua.map(n=>`${n.label.replace(/ \(.*\)$/,"")}: ${t[n.id]||"(no answer)"}`),"","Session: "+Object.entries(i.session).map(([n,s])=>`${n}=${s}`).join(", "),...i.ledger?["","Choice ledger:",i.ledger,"Ledger JSON: "+(i.ledgerJson??"")]:[]].join(`
`)}function vx(){try{return JSON.parse(localStorage.getItem(nu)||"[]")}catch{return[]}}function Yc(i){const t=vx();t.push(i);try{localStorage.setItem(nu,JSON.stringify(t))}catch{}return t.length}function xx(i){const t=performance.now();let e=!1;const n=document.createElement("div");n.id="feedback",Object.assign(n.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"60"}),document.body.appendChild(n);const s=()=>{const l=i.get();return{minutes:+((performance.now()-t)/6e4).toFixed(1),trips:l.stats.trips,cleanHauls:l.stats.clean,shatters:l.stats.shatters,rareFound:l.stats.rare,scrap:l.scrap,cubeFeeds:l.feeds,logs:l.logsFound.length,upgrades:Object.values(l.up).reduce((c,h)=>c+h,0),window:`${innerWidth}x${innerHeight}`,browser:navigator.userAgent.replace(/\(.*?\)/,"").slice(0,60)}},r=()=>{const l={};return Ua.forEach(c=>{var d;const h=n.querySelector(`[data-q="${c.id}"]`);l[c.id]=c.kind==="text"?h.value.trim():((d=n.querySelector(`input[name="${c.id}"]:checked`))==null?void 0:d.value)??""}),l},o=(l="")=>{n.innerHTML=`<div style="width:min(620px,94vw);max-height:92vh;overflow:auto;background:#07100c;border:2px solid #30ff90;color:#cfe;font:14px/1.45 monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>SEND FEEDBACK</b><button id="fb-close">Close (Esc)</button></div>
      <small>Answers stay on this device. Use Copy summary and paste it to whoever sent you the link.</small><hr>
      ${Ua.map(d=>`<p><b>${d.label}</b><br>${d.kind==="text"?`<textarea data-q="${d.id}" rows="2" style="width:98%;font:13px monospace"></textarea>`:(d.kind==="scale"?["1","2","3","4","5"]:d.choices).map(f=>`<label style="margin-right:10px"><input type="radio" name="${d.id}" value="${f}" data-q="${d.id}"> ${f}</label>`).join("")}</p>`).join("")}
      <button id="fb-save">Save on this device</button> <button id="fb-copy">Copy summary</button> <span id="fb-msg">${l}</span>
      <textarea id="fb-text" readonly rows="6" style="display:none;width:98%;margin-top:8px;font:12px monospace"></textarea></div>`;const c=d=>n.querySelector(d);c("#fb-close").onclick=()=>a.close();const h=()=>({at:new Date().toISOString().slice(0,16).replace("T"," "),answers:r(),session:s(),ledger:eu(i.get()),ledgerJson:JSON.stringify(Ur(i.get()))});c("#fb-save").onclick=()=>{const d=Yc(h());c("#fb-msg").textContent=`Saved (${d} on this device).`},c("#fb-copy").onclick=async()=>{const d=h();Yc(d);const f=gx(d),p=c("#fb-text");p.value=f;try{await navigator.clipboard.writeText(f),c("#fb-msg").textContent="Copied! Paste it into a message."}catch{p.style.display="block",p.select(),c("#fb-msg").textContent="Could not auto-copy: select the text below and copy it."}}};n.addEventListener("keydown",l=>{l.stopPropagation(),l.code==="Escape"&&a.close()}),n.addEventListener("keyup",l=>l.stopPropagation()),n.addEventListener("mousedown",l=>l.stopPropagation()),n.addEventListener("mouseup",l=>l.stopPropagation());const a={open(){e=!0,o(),n.style.display="flex"},close(){e=!1,n.style.display="none"},isOpen:()=>e};return a}function fr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ce;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in r){const d=$c(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let g=0;g<o[h].length;++g)p.push(o[h][g][f]);const v=$c(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function $c(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Te(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,p=h.count;f<p;f++)for(let v=0;v<e;v++){const g=h.getComponent(f,v);a.setComponent(f+d,v,g)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ci=12,wr=64,iu=(i,t,e)=>(i*nl+t)*il+e,_x=i=>[i%ci/ci,1-(Math.floor(i/ci)+1)/ci];function yx(i){return[[[.5,.38,.2]],[[.34,.38,.15],[.66,.38,.15]],[[.3,.46,.12],[.7,.46,.12],[.5,.24,.12]],[[.3,.4,.14],[.7,.4,.14],[.2,.2,.07],[.5,.17,.07],[.8,.2,.07]]][i]}function Mx(i,t,e,n,s,r){const o=wr;i.save(),i.translate(t,e),i.lineCap="round",i.lineJoin="round";for(const[h,d,f]of yx(s)){const p=h*o,v=d*o,g=f*o;i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=3,i.beginPath(),i.arc(p,v,g,0,7),i.fill(),i.stroke();const m=n===5,u=n===4,y=g*(m?.28:u?.62:.45),x=n===1?-g*.15:u?g*.25:0,_=n===3?g*.3:n===1?g*.2:0;i.fillStyle="#000",i.beginPath(),i.arc(p+x,v+_,y,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(p+x-y*.3,v+_-y*.3,y*.28,0,7),i.fill(),i.strokeStyle="#000",i.lineWidth=3.5,i.beginPath(),n===3?(i.fillStyle="#000",i.globalAlpha=.85,i.fillRect(p-g,v-g,g*2,g),i.globalAlpha=1,i.moveTo(p-g,v),i.lineTo(p+g,v)):n===2?(i.moveTo(p-g,v-g*1.1),i.lineTo(p+g,v-g*.4)):n===1?(i.moveTo(p-g,v-g*.4),i.lineTo(p+g,v-g*1.1)):n===0&&i.arc(p,v+g*.2,g*1.05,Math.PI*1.1,Math.PI*1.9),i.stroke()}const a=.5*o,l=.78*o;i.strokeStyle="#000",i.fillStyle="#000",i.lineWidth=4,i.beginPath();const c=n===1||n===5||n===2;if(r===0)i.moveTo(a-12,l),i.lineTo(a+12,l),i.stroke();else if(r===1)i.moveTo(a-14,l),i.bezierCurveTo(a-7,l-8,a-3,l+8,a+2,l),i.bezierCurveTo(a+6,l-6,a+10,l+6,a+14,l),i.stroke();else if(r===2)i.ellipse(a,l,7,c?9:6,0,0,7),i.fill();else if(r===3)i.moveTo(a-15,l-4),i.quadraticCurveTo(a,l+(c?-12:14),a+15,l-4),i.stroke();else if(r===4){i.fillStyle="#fff",i.lineWidth=3,i.rect(a-15,l-6,30,12),i.fill(),i.stroke(),i.beginPath();for(let h=-10;h<=10;h+=5)i.moveTo(a+h,l-6),i.lineTo(a+h,l+6);i.stroke()}i.restore()}function bx(){const i=document.createElement("canvas");i.width=i.height=ci*wr;const t=i.getContext("2d");for(let n=0;n<Rs.length;n++)for(let s=0;s<nl;s++)for(let r=0;r<il;r++){const o=iu(n,s,r);Mx(t,o%ci*wr,Math.floor(o/ci)*wr,n,s,r)}const e=new di(i);return e.colorSpace=Ge,e.minFilter=on,e}function Sx(i){const t=new pe(.5,20,14),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=e.getX(n),r=e.getY(n),o=e.getZ(n);if(i===1){const a=1+(r<0?.25:-.15);s*=a,o*=a,r*=1.1}else if(i===2)s*=1.2,r*=.85;else if(i===3){const a=Math.atan2(o,s),l=1+.14*Math.cos(a*5);s*=l,o*=l}else if(i===4)s=Math.sign(s)*Math.pow(Math.abs(s)/.5,.5)*.5*.85+s*.15,o=Math.sign(o)*Math.pow(Math.abs(o)/.5,.5)*.5*.85+o*.15,r*=.85;else if(i===5){const l=.55+.6*(1-(r+.5));s*=l,o*=l,r*=1.2}e.setXYZ(n,s,r,o)}return t.computeVertexNormals(),t}function wx(i){const t=(n,s=0,r=0,o=0,a=0,l=0,c=0)=>(n.rotateX(a),n.rotateY(l),n.rotateZ(c),n.translate(s,r,o),n.toNonIndexed()),e=(n,s,r=!1)=>Array.from({length:n},(o,a)=>{const l=s+a/n*Math.PI*2,c=.2+.7*((a*.37+s)%1),h=Math.sqrt(1-c*c);return new A(Math.cos(l)*h,r?c*.2:c,Math.sin(l)*h-(r?0:.3)).normalize()});switch(i){case"halo":return t(new Ke(.26,.045,8,22),0,.74,0,Math.PI/2);case"horns":return fr([t(new pn(.1,.34,8),.2,.55,0,0,0,-.45),t(new pn(.1,.34,8),-.2,.55,0,0,0,.45)]);case"spikes":return fr(e(7,.4).map(n=>{const s=new pn(.07,.3,6);return s.translate(0,.15,0),s.applyQuaternion(new ln().setFromUnitVectors(new A(0,1,0),n)),s.translate(n.x*.46,n.y*.46,n.z*.46),s.toNonIndexed()}));case"glow":return new pe(.66,14,10).toNonIndexed();case"fluff":return fr(e(8,1.1).map(n=>{const s=new pe(.13,8,6);return s.translate(n.x*.5,n.y*.5,n.z*.5),s.toNonIndexed()}));case"drip":return t(new pn(.075,.3,8),.08,-.62,.22,Math.PI);case"stripes":return fr([t(new Ke(.49,.035,6,26),0,-.12,0,Math.PI/2),t(new Ke(.46,.035,6,26),0,.17,0,Math.PI/2)]);case"bellyface":return t(new pe(.2,10,8).scale(1.3,.8,.45),0,-.28,.46)}}const Ex=`
attribute vec2 cellUv; varying vec2 vUv;
void main() {
  vUv = cellUv + uv / 12.0;
  vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float s = length(instanceMatrix[0].xyz);
  c.xy += position.xy * s * 0.95; c.z += s * 0.55;
  gl_Position = projectionMatrix * c;
}`,Tx=`uniform sampler2D atlas; varying vec2 vUv;
void main() { vec4 t = texture2D(atlas, vUv); if (t.a < 0.15) discard; gl_FragColor = t; }`;class jc{constructor(t){H(this,"group",new De);H(this,"bodies",[]);H(this,"outlines",[]);H(this,"faces");H(this,"cellAttr");H(this,"slotOf",new Map);H(this,"faceIdx",new Map);H(this,"tmp",new _e);H(this,"radius",.5);H(this,"acc",new Map);this.spores=t;const e=t.length,n=new Array(Ir).fill(0);t.forEach(o=>{const a=o.anatomy.bodyShape;this.slotOf.set(o.id,{shape:a,idx:n[a]++})});for(let o=0;o<Ir;o++){const a=Sx(o),l=Math.max(1,n[o]),c=new us(a,new de({roughness:.55,emissive:2236962}),l),h=new us(a,new Yt({color:0,side:me}),l);c.count=h.count=n[o],c.frustumCulled=h.frustumCulled=!1,this.bodies.push(c),this.outlines.push(h),this.group.add(c,h)}t.forEach(o=>{const{shape:a,idx:l}=this.slotOf.get(o.id);this.bodies[a].setColorAt(l,new wt(o.anatomy.colour))}),this.bodies.forEach(o=>o.instanceColor&&(o.instanceColor.needsUpdate=!0));for(const o of La){const a=t.filter(p=>p.anatomy.signatureTrait===o);if(!a.length)continue;const l=wx(o),c=new Map,h=o==="glow",d=new us(l,h?new Yt({transparent:!0,opacity:.28,blending:hn,depthWrite:!1}):new de({roughness:.5,emissive:o==="halo"?16767072:1118481,emissiveIntensity:o==="halo"?.9:.4}),a.length);d.frustumCulled=!1,a.forEach((p,v)=>{c.set(p.id,v);const g=new wt(p.anatomy.colour),m=p.tone.alignment>0;d.setColorAt(v,o==="halo"?new wt(16769658):o==="horns"?new wt(m?16732208:16051416):o==="spikes"||o==="stripes"?g.clone().offsetHSL(0,0,-.18):o==="drip"?g:g.clone().offsetHSL(0,-.1,.18))});let f;h||(f=new us(l,new Yt({color:0,side:me}),a.length),f.frustumCulled=!1,this.group.add(f)),this.group.add(d),this.acc.set(o,{mesh:d,outline:f,idx:c})}const s=new Pn(1,1);this.cellAttr=new Ca(new Float32Array(e*2),2),s.setAttribute("cellUv",this.cellAttr);const r=new Rn({vertexShader:Ex,fragmentShader:Tx,uniforms:{atlas:{value:bx()}},transparent:!1});this.faces=new us(s,r,e),this.faces.frustumCulled=!1,this.group.add(this.faces),t.forEach((o,a)=>{this.faceIdx.set(o.id,a),this.setFace(o)})}setFace(t){const[e,n]=_x(iu(t.mood,t.anatomy.eyeSet,t.anatomy.mouthSet)),s=this.faceIdx.get(t.id);this.cellAttr.setXY(s,e,n),this.cellAttr.needsUpdate=!0}place(t,e,n,s=1){const{shape:r,idx:o}=this.slotOf.get(t),a=this.tmp;a.position.copy(e),a.scale.set(n/Math.sqrt(s),n*s,n/Math.sqrt(s)),a.updateMatrix(),this.bodies[r].setMatrixAt(o,a.matrix);{const l=this.acc.get(this.spores[this.faceIdx.get(t)].anatomy.signatureTrait);if(l){const c=l.idx.get(t);if(l.mesh.setMatrixAt(c,a.matrix),l.outline){const h=a.scale.clone();a.scale.multiplyScalar(1.12),a.updateMatrix(),l.outline.setMatrixAt(c,a.matrix),a.scale.copy(h),a.updateMatrix()}}}a.scale.multiplyScalar(1.1+.02*this.spores[this.faceIdx.get(t)].anatomy.outlineWeight),a.updateMatrix(),this.outlines[r].setMatrixAt(o,a.matrix),a.scale.set(n,n,n),a.position.copy(e),a.updateMatrix(),this.faces.setMatrixAt(this.faceIdx.get(t),a.matrix)}commit(){this.bodies.forEach(t=>t.instanceMatrix.needsUpdate=!0),this.outlines.forEach(t=>t.instanceMatrix.needsUpdate=!0),this.faces.instanceMatrix.needsUpdate=!0,this.acc.forEach(t=>{t.mesh.instanceMatrix.needsUpdate=!0,t.outline&&(t.outline.instanceMatrix.needsUpdate=!0)})}drawCalls(){return this.bodies.length+this.outlines.length+1+[...this.acc.values()].reduce((t,e)=>t+(e.outline?2:1),0)}}const Ax={glow:"horn",halo:"horn",horns:"horn",spikes:"body",fluff:"body",bellyface:"body",drip:"tail",stripes:"leg"},Kc=[{role:"leg",pos:[-.9,.45,-.55]},{role:"leg",pos:[-.9,.45,.55]},{role:"leg",pos:[.9,.45,-.55]},{role:"leg",pos:[.9,.45,.55]},{role:"body",pos:[-.9,1.45,0]},{role:"body",pos:[0,1.45,-.55]},{role:"body",pos:[0,1.45,.55]},{role:"body",pos:[.9,1.45,0]},{role:"body",pos:[0,2.35,0]},{role:"horn",pos:[.9,2.35,-.55]},{role:"horn",pos:[.9,2.35,.55]},{role:"tail",pos:[-1.8,1.45,0]}];function Cx(i){if(i<=5){const e=i===1?0:.55+i*.12;return{shape:"Cluster",tpl:Array.from({length:i},(n,s)=>({role:"body",pos:[Math.cos(s/i*Math.PI*2)*e,.5,Math.sin(s/i*Math.PI*2)*e]}))}}if(i<=30){const e=Kc.slice(0,i);for(let n=Kc.length,s=0;n<i;s++){const r=Math.min(6,i-n);for(let o=0;o<r;o++,n++)e.push({role:"body",pos:[Math.cos(o/r*Math.PI*2)*.95,3.3+s*.9,Math.sin(o/r*Math.PI*2)*.95]})}return{shape:"Body",tpl:e}}const t=Math.max(2,i*1/(Math.PI*2));return{shape:"Colony",tpl:Array.from({length:i},(e,n)=>({role:"body",pos:[Math.cos(n/i*Math.PI*2)*t,.5,Math.sin(n/i*Math.PI*2)*t]}))}}function Rx(i){const{shape:t,tpl:e}=Cx(i.length),n=[...i],s=[];for(const o of e){const a=n.findIndex(c=>Ax[c.anatomy.signatureTrait]===o.role),l=n.splice(a>=0?a:0,1)[0];s.push({sporeId:l.id,role:o.role,pos:o.pos})}const r=i.reduce((o,a)=>o+a.tone.alignment,0)/Math.max(1,i.length);return{shape:t,slots:s,avgAlignment:r}}function Px(i,t,e){const n=i.slots.find(r=>r.sporeId===t),s=i.slots.find(r=>r.sporeId===e);return!n||!s?i:{...i,slots:i.slots.map(r=>r===n?{...r,sporeId:e}:r===s?{...r,sporeId:t}:r)}}const Fi=12;class Ix{constructor(t,e,n){H(this,"scene",new pi);H(this,"camera");H(this,"spores",Fc(Fi));H(this,"crowd");H(this,"pos",[]);H(this,"vel",[]);H(this,"target",[]);H(this,"creature",null);H(this,"merged",!1);H(this,"mergedAt",0);H(this,"drag",-1);H(this,"dragOffset",new A);H(this,"hover",-1);H(this,"t",0);H(this,"ray",new zh);H(this,"plane",new zn(new A(0,1,0),-.5));H(this,"label",document.createElement("div"));H(this,"ending",document.createElement("div"));H(this,"swapCount",0);H(this,"onContinue");H(this,"endingShown",!1);H(this,"creatureInfo",{name:"",description:""});this.store=t,this.dom=n,this.camera=e,this.scene.background=new wt(263434),this.scene.fog=new qa(263434,14,30),this.scene.add(new Cs(8949936,1.1));const s=new Pr(16777215,2.2);s.position.set(4,10,6),this.scene.add(s);const r=new st(new As(9,48),new de({color:1382948,roughness:1}));r.rotation.x=-Math.PI/2,this.scene.add(r),this.crowd=new jc(this.spores),this.scene.add(this.crowd.group),this.spores.forEach(()=>{this.pos.push(new A),this.vel.push(new A),this.target.push(null)}),Object.assign(this.label.style,{position:"fixed",display:"none",padding:"4px 8px",background:"rgba(0,0,0,.75)",color:"#fff",font:"12px monospace",pointerEvents:"none",zIndex:"6",border:"1px solid #fff"}),this.label.id="sporelabel",this.ending.id="ending",Object.assign(this.ending.style,{position:"fixed",left:"0",right:"0",bottom:"0",padding:"28px 20px",textAlign:"center",background:"linear-gradient(transparent, rgba(0,0,0,.92))",color:"#ffe9c0",font:"17px/1.5 Georgia, serif",display:"none",zIndex:"7"}),document.body.append(this.label,this.ending),n.addEventListener("pointerdown",o=>this.down(o)),addEventListener("pointermove",o=>this.move(o)),addEventListener("pointerup",o=>this.up(o))}enter(){{const t=Ps(this.store.get());this.spores=iv(Fc(Fi),t),this.creatureInfo=rl(t),this.scene.remove(this.crowd.group),this.crowd=new jc(this.spores),this.scene.add(this.crowd.group)}this.merged=!1,this.endingShown=!1,this.creature=null,this.t=0,this.ending.style.display="none",this.camera.position.set(0,9,8.5),this.camera.lookAt(0,.8,0),this.spores.forEach((t,e)=>{this.pos[e].set(0,1+Math.random(),0);const n=e/Fi*Math.PI*2+Math.random()*.3,s=3.5+Math.random()*2;this.vel[e].set(Math.cos(n)*s,4+Math.random()*2,Math.sin(n)*s),this.target[e]=null}),At.burst(),this.store.set({mode:"cameo"})}ndc(t){const e=this.dom.getBoundingClientRect();return new rt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}pick(t){this.ray.setFromCamera(this.ndc(t),this.camera);let e=-1,n=1/0;return this.pos.forEach((s,r)=>{const o=this.ray.ray.intersectSphere(new jn(s,.5),new A);if(o){const a=o.distanceTo(this.ray.ray.origin);a<n&&(n=a,e=r)}}),e}onPlane(t){return this.ray.setFromCamera(this.ndc(t),this.camera),this.ray.ray.intersectPlane(this.plane,new A)}down(t){if(this.store.get().mode!=="cameo")return;const e=this.pick(t);if(e<0)return;this.drag=e,this.plane.constant=-(this.merged?this.pos[e].y:1.1);const n=this.onPlane(t);this.dragOffset.copy(this.pos[e]).sub(n??this.pos[e]),this.vel[e].set(0,0,0),this.label.style.display="none"}move(t){if(this.store.get().mode==="cameo"){if(this.drag>=0){const e=this.onPlane(t);if(e){const n=e.add(this.dragOffset);n.y=-this.plane.constant,this.pos[this.drag].copy(n)}return}if(this.hover=this.pick(t),this.hover>=0){const e=this.spores[this.hover];this.label.style.display="block",this.label.style.left=t.clientX+14+"px",this.label.style.top=t.clientY+8+"px",this.label.textContent=`${e.name}: ${Rs[e.mood]}, ${Hh[e.personality]}, ${e.anatomy.signatureTrait}`}else this.label.style.display="none"}}up(t){if(this.drag<0)return;const e=this.drag;this.drag=-1;let n=-1,s=60;const r=this.screenOf(e);this.pos.forEach((o,a)=>{if(a!==e){const l=this.screenOf(a),c=Math.hypot(l.x-r.x,l.y-r.y);c<s&&(s=c,n=a)}}),this.merged||(this.pos[e].y=.5),!(n<0)&&(this.merged?this.swap(e,n):this.doMerge(e,n))}worldTargets(){this.creature.slots.forEach(t=>{this.target[t.sporeId]=new A(t.pos[0]*1.05,t.pos[1],t.pos[2]*1.05)})}doMerge(t,e){this.spores[t].history.push({type:"merged",otherId:e}),this.spores[e].history.push({type:"merged",otherId:t}),this.creature=Rx(this.spores),At.merge(),this.merged=!0,this.mergedAt=this.t,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,mergeSeconds:Math.round(this.t),swaps:this.swapCount}})}swap(t,e){this.creature=Px(this.creature,t,e),this.swapCount++,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,swaps:this.swapCount}})}showEnding(){this.ending.innerHTML=`The box was never a box.<br>Twelve faces, and every one of them is looking at you.<br><br><span id="creature-name">Your creature: <b>${this.creatureInfo.name}</b>.</span> <small>${this.creatureInfo.description}</small><br><br><button id="continue">Continue</button> &nbsp; <button id="again">Play again</button>`,this.ending.style.display="block",document.getElementById("again").onclick=()=>location.reload(),document.getElementById("continue").onclick=()=>{this.onContinue&&(this.ending.style.display="none",this.onContinue())}}update(t){if(this.store.get().mode!=="cameo")return;this.t+=t;for(let n=0;n<Fi;n++){const s=this.pos[n],r=this.vel[n],o=this.target[n];if(n!==this.drag)if(o)s.lerp(o,1-Math.exp(-5*t));else{r.y-=14*t,s.addScaledVector(r,t),s.y<.5&&(s.y=.5,r.y*=-.35,r.x*=.82,r.z*=.82,Math.abs(r.y)<.4&&(r.y=0));const a=Math.hypot(s.x,s.z);a>7&&(s.x*=7/a,s.z*=7/a,r.x*=-.5,r.z*=-.5)}}if(!this.merged)for(let n=0;n<Fi;n++)for(let s=n+1;s<Fi;s++){const r=this.pos[n].distanceTo(this.pos[s]);if(r<.9&&r>1e-4&&n!==this.drag&&s!==this.drag){const o=this.pos[n].clone().sub(this.pos[s]).setY(0).normalize().multiplyScalar((.9-r)*.5);this.pos[n].add(o),this.pos[s].sub(o)}}this.spores.forEach((n,s)=>{const r=Math.sin(this.t*Kg(n.mood)*2+s)*.08,o=(this.drag===s,0);this.crowd.place(n.id,this.pos[s].clone().setY(this.pos[s].y+o),.95+(this.hover===s?.08:0),1+r)}),this.crowd.commit(),this.merged&&this.t-this.mergedAt>2.2&&!this.endingShown&&(this.endingShown=!0,this.showEnding());const e=this.merged?new A(0,3.4,8.5):new A(0,9,8.5);this.camera.position.lerp(e,1-Math.exp(-2.5*t)),this.camera.lookAt(0,this.merged?1.5:.8,0)}render(t){t.render(this.scene,this.camera)}screenOf(t){const e=this.pos[t].clone().project(this.camera);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}}function Lx(i,t,e){const n=Math.PI*2;return Math.abs(((i-t)%n+n+Math.PI)%n-Math.PI)<=e/2}const Bn={speed:3.2,width:.7,reward:3,penalty:1};class Dx{constructor(t,e){H(this,"el",document.createElement("div"));H(this,"canvas",document.createElement("canvas"));H(this,"angle",0);H(this,"target",2);H(this,"speed",Bn.speed);H(this,"open",!1);H(this,"raf",0);H(this,"last",0);H(this,"loop",()=>{if(!this.open)return;const t=performance.now();this.angle+=this.speed*((t-this.last)/1e3),this.last=t,this.draw(),this.raf=requestAnimationFrame(this.loop)});this.store=t,this.onDone=e,this.el.id="poplock",Object.assign(this.el.style,{position:"fixed",inset:"0",display:"none",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.7)",zIndex:"10",flexDirection:"column",color:"#9fb",font:"14px monospace"}),this.canvas.width=this.canvas.height=260,this.canvas.id="poplock-canvas",this.el.append("Crack the crate: stop the pointer in the green zone (Space or click)",this.canvas),document.body.appendChild(this.el),addEventListener("keydown",n=>{this.open&&n.code==="Space"&&(n.preventDefault(),this.press())}),this.canvas.addEventListener("click",()=>this.open&&this.press())}show(){this.store.get().crates<1||(this.target=Math.random()*Math.PI*2,this.angle=this.target+Math.PI,this.open=!0,this.el.style.display="flex",this.last=performance.now(),this.loop())}press(){const t=Lx(this.angle,this.target,Bn.width),e=this.store.get();this.close(),this.store.set({crates:e.crates-1,scrap:t?e.scrap+Bn.reward:Math.max(0,e.scrap-Bn.penalty)}),this.onDone(t?`Crate cracked: +${Bn.reward} scrap.`:`Slipped. Tool wear: -${Bn.penalty} scrap.`)}close(){this.open=!1,this.el.style.display="none",cancelAnimationFrame(this.raf)}draw(){const t=this.canvas.getContext("2d"),e=100,n=130,s=130;t.clearRect(0,0,260,260),t.lineWidth=16,t.strokeStyle="#223",t.beginPath(),t.arc(n,s,e,0,Math.PI*2),t.stroke(),t.strokeStyle="#3f9",t.beginPath(),t.arc(n,s,e,this.target-Bn.width/2,this.target+Bn.width/2),t.stroke(),t.strokeStyle="#fff",t.lineWidth=4,t.beginPath(),t.moveTo(n,s),t.lineTo(n+Math.cos(this.angle)*(e+10),s+Math.sin(this.angle)*(e+10)),t.stroke()}}const Oo=(i,t,e)=>i.set({[t]:i.get()[t]+e}),su=[{id:"oxygen",name:"Oxygen Cell",cost:3,desc:"+40 oxygen",apply:i=>(Oo(i,"oxygen",40),"Oxygen restored.")},{id:"power",name:"Power Cell",cost:4,desc:"+35 power",apply:i=>(Oo(i,"power",35),"Element 115 topped up.")},{id:"repair",name:"Repair Patch",cost:3,desc:"+30 hull",apply:i=>(Oo(i,"hull",30),"Hull patched.")},{id:"hat",name:"Useless Hat",cost:1,desc:"does nothing, proudly",apply:i=>(i.set({hats:i.get().hats+1}),"You now own a hat. Nothing improved.")}];function Ux(i,t){const e=su.find(n=>n.id===t);return!e||i.get().scrap<e.cost?null:(i.set({scrap:i.get().scrap-e.cost}),e.apply(i))}function Nx(i,t){const e=document.createElement("div");e.id="transmog",Object.assign(e.style,{position:"fixed",right:"12px",top:"12px",width:"270px",maxHeight:"calc(100vh - 24px)",overflowY:"auto",padding:"10px",background:"rgba(8,10,16,.85)",border:"1px solid #f0a020",color:"#fc8",font:"13px monospace",display:"none",zIndex:"5"}),document.body.appendChild(e);const n=o=>{document.getElementById("tm-msg").textContent=o??"Not enough scrap."};let s="";const r=()=>{var d,f;const o=i.get();if(e.style.display=o.mode==="rooms"&&o.room==="transmog"?"block":"none",e.style.display==="none"){s="";return}const a=((d=document.getElementById("tm-msg"))==null?void 0:d.textContent)??"Feed it junk. Make things.",l=`<style>#transmog button{display:block;width:100%;text-align:left;margin:3px 0;padding:5px 8px;font:12px/1.3 monospace;color:#fc8;background:#14100a;border:1px solid #6a4a18;cursor:pointer}
#transmog button:hover:not(:disabled){background:#2a1c08;border-color:#f0a020}#transmog button:not(:disabled){border-color:#3fbf7f;color:#cfe}#transmog button:disabled{opacity:.45;cursor:default;color:#a87;border-color:#4a3a20}
#transmog hr{border:0;border-top:1px solid #4a3a20;margin:8px 0}#transmog h5{margin:6px 0 2px;color:#f0a020;letter-spacing:2px;font-size:11px}#tm-msg{color:#ffe9c0;font-style:italic;min-height:2.6em}</style>
<b>TRANSMOGRIFIER</b> &nbsp; scrap: <span id="tm-scrap">${o.scrap}</span><hr>`+su.map(p=>`<button data-r="${p.id}" ${o.scrap<p.cost?"disabled":""}>${p.name} (${p.cost}) ${p.desc}</button>`).join("")+"<hr><h5>MINING UPGRADES</h5>"+ll.map(p=>{const v=o.up[p.id],g=Fv(i,p.id);return g===null?`<button disabled>${p.name} T${v}/${p.costs.length} MAX (${p.desc(v)})</button>`:`<button data-u="${p.id}" ${o.scrap<g?"disabled":""}>${p.name} T${v}/${p.costs.length}: ${p.desc(v+1)} (${g})</button>`}).join("")+(Wr(o)?`<hr><h5>THE CUBE</h5><button id="tm-feed" ${o.scrap<Yn(o.feeds)?"disabled":""}>Offer scrap to the cube (${Yn(o.feeds)})</button>${o.scrap>=Yn(o.feeds)&&o.feeds<9?'<div id="tm-hungry" style="color:#f9c;margin:2px 0">The cube is hungry. It hums at your pockets.</div>':""}<div style="margin:2px 0 6px;opacity:.8">stage ${ki(o.feeds)} of 3 &middot; fed ${o.feeds}/9</div>`:"")+((f=window.sporeLife)!=null&&f.count("transmog")?`<hr><h5>THE SPORES</h5><button id="tm-sporefeed" ${o.scrap<1?"disabled":""}>Feed the spores a junk find (1)</button>`:"")+`<hr><button id="tm-crate" ${o.crates<1?"disabled":""}>Crack a crate (${o.crates} sealed)</button><hr><div id="tm-msg">${a}</div>`;if(l===s)return;s=l,e.innerHTML=l,e.querySelectorAll("button[data-r]").forEach(p=>p.onclick=()=>{n(Ux(i,p.dataset.r)),r()}),e.querySelectorAll("button[data-u]").forEach(p=>p.onclick=()=>{n(Ov(i,p.dataset.u)),r()});const c=document.getElementById("tm-feed");c&&(c.onclick=()=>{n(vv(i)),r()}),document.getElementById("tm-crate").onclick=()=>t();const h=document.getElementById("tm-sporefeed");h&&(h.onclick=()=>{n(window.sporeLife.feed()??"Not enough scrap."),r()})};return i.subscribe(r),r(),{say:n,render:r}}function ul(i){return t=>{i[0].intensity=6+Math.sin(t/90)*.4+(Math.sin(t/1300)>.97?-3:0),i[1].intensity=4+Math.sin(t/230)*.8}}function Fx(i=16738858){const t=new De;t.add(new st(new pe(.2,16,12),new de({color:i,emissive:i,emissiveIntensity:.25}))),t.add(new st(new pe(.225,16,12),new Yt({color:0,side:me})));for(const n of[-.08,.08]){const s=new st(new pe(.065,12,8),new Yt({color:16777215}));s.position.set(n,.06,.15);const r=new st(new pe(.03,8,6),new Yt({color:0}));r.position.set(n,.06,.205),t.add(s,r)}const e=new st(new Ke(.05,.012,6,12,Math.PI),new Yt({color:0}));return e.position.set(0,-.06,.2),e.rotation.z=Math.PI,t.add(e),t}function Ox(){const i=new pi;i.background=new wt(197641),i.fog=new Ts(329485,.05);const t=Zh(i),e=1.05,n=1.7,s=1.15,r=new de({color:1909810,roughness:.9,metalness:.3,side:me}),o=new st(new Je(1,1,5.6,28,1,!0),r);o.rotation.x=Math.PI/2,o.scale.set(n,1,s),o.position.set(0,e,1.8),i.add(o);const a=(L,W,$)=>{const X=new st(new pe(1,36,18,Math.PI,Math.PI,L,W),$);return X.scale.set(n,s,3.4),X.position.set(0,e,-1),i.add(X),X};a(0,.22,r),a(1.72,Math.PI-1.72,r),a(.22,1.5,new de({color:8956671,transparent:!0,opacity:.1,roughness:.05,metalness:.6,side:Ee,depthWrite:!1}));const l=L=>{const W=[];for(let $=0;$<=32;$++){const X=Math.PI+$/32*Math.PI;W.push(new A(-Math.cos(X)*Math.sin(L)*n,e+Math.cos(L)*s,-1+Math.sin(X)*Math.sin(L)*3.4))}i.add(new st(new Hr(new Ka(W),48,.05,6,!1),ve(790294)))};l(.22),l(1.72);const c=(L,W)=>{const $=new st(new Ke(1,.035,6,40),ve(2765378));$.scale.set(n*W-.04,s*W-.04,3),$.position.set(0,e,L),i.add($)};for(const L of[-1,.2,1.4,2.6,3.8])c(L,1);t.box(2.4,.1,9,0,0,.2,1382948);for(let L=0;L<3;L++)t.box(.06,.02,7,-.8+L*.8,.06,.4,2765637);t.cyl(.05,5.4,.75,1.95,1.6,3813162,[Math.PI/2,0,0]),t.cyl(.06,5.4,-.75,1.97,1.6,2897480,[Math.PI/2,0,0]);const h=document.createElement("canvas");h.width=1024,h.height=512;const d=h.getContext("2d"),f=d.createLinearGradient(0,0,0,512);f.addColorStop(0,"#0a0630"),f.addColorStop(1,"#2a0f4a"),d.fillStyle=f,d.fillRect(0,0,1024,512);for(let L=0;L<500;L++)d.fillStyle=`rgba(255,255,${200+Math.random()*55},${.4+Math.random()*.6})`,d.fillRect(Math.random()*1024,Math.random()*512,1+Math.random()*2,1+Math.random()*2);const p=new st(new pe(40,32,16),new Yt({map:new di(h),side:me,fog:!1}));i.add(p);const v=document.createElement("canvas");v.width=v.height=256;{const L=v.getContext("2d");L.fillStyle="#ff7a3a",L.beginPath(),L.arc(128,128,120,0,7),L.fill(),L.fillStyle="#ffb25a",L.beginPath(),L.arc(105,100,88,0,7),L.fill()}const g=new wg(new Ih({map:new di(v),fog:!1}));g.scale.set(9,9,1),g.position.set(7,4,-24),i.add(g);const m=new ke(16751200,4,7);m.position.set(1.2,2.2,-3.2),i.add(m);const u=-.5;for(const L of[-.18,.18])for(const W of[u-.18,u+.18])t.cyl(.03,.03,L,.07,W,9079424);t.box(.5,.06,.5,0,.06,u,2106414),t.cyl(.06,.42,0,.3,u,2106414);const y=t.box(.62,.12,.6,0,.55,u,3094087,2154656);y.material.emissiveIntensity=.6,t.box(.62,.8,.1,0,.98,u+.32,3094087),t.box(.36,.22,.08,0,1.5,u+.34,2764604),t.box(.08,.06,.45,-.36,.78,u,2237998),t.box(.08,.06,.45,.36,.78,u,2237998),Tn(i,.12,1.1,u+.26,.24,.05,.02,-.4);const x=[12595248,2763312,14729248,3170496,3186768,11579568,14708768];let _=0;const I=[];for(let L=-3;L<=3;L++){const W=L*.36,$=1.05,X=Math.sin(W)*$,z=u-Math.cos(W)*$,O=new De;O.position.set(X,0,z),O.rotation.y=-W,i.add(O);const Z=(lt,Pt,zt,q)=>(lt.position.set(Pt,zt,q),O.add(lt),lt);Z(new st(new ie(.52,.72,.3),ve([2371138,3025446,2502698][(L+3)%3])),0,.36,0);const ft=Z(new st(new ie(.54,.04,.38),ve([3160656,3814444,2898482][(L+3)%3])),0,.76,.02);ft.rotation.x=.35;for(let lt=0;lt<3;lt++){const Pt=Z(new st(new ie(.05,.05,.05),ve(x[_++%x.length])),-.15+lt*.15,.8,.08);Pt.rotation.x=.35}if(L%2===0){const lt=Z(new st(new Je(.08,.08,.03,16),ve(15261888,L===0?2154656:16742944,.3)),0,.82,-.08);lt.rotation.x=.35+Math.PI/2-Math.PI/2,I.push(lt)}if(Math.abs(L)===1){const lt=Z(new st(new ie(.4,.26,.03),ve(1062952,2154656,.8)),0,.98,-.12);lt.rotation.x=-.25,I.push(lt)}}ye(i,`DO NOT TOUCH.
IT WORKS.`,.4,.9,u-.78,-.3,.32,"#f06050",.05).rotation.x=-.9,ye(i,"FUEL?",-.38,.88,u-.82,.35,.16,"#d8d8d0",-.04).rotation.x=-.9,ye(i,`LAUNCH =
the chair
(probably)`,-1,.92,u-.45,1.05,.3,"#d8f0d0").rotation.x=-.6,ye(i,`1 2 3 4 5
? ? ? ? ?`,.98,.9,u-.45,-1.05,.28,"#f4e27a").rotation.x=-.6,Tn(i,0,.92,u-.98,.5,.04,.02,.05),t.cyl(.025,.36,0,.62,u-.45,6711928);const T=t.box(.08,.1,.08,0,.84,u-.45,2154656,2154656);ys(i,[[-.9,.2,u-.6],[-.4,.08,u-.1],[.1,.07,u+.6],[.8,.07,1.4]],1381653,.03),ys(i,[[.7,.75,u-.9],[1,1.5,-1.2],[.9,2.15,-.4],[.9,2.2,1]],3807760,.025),ys(i,[[-.6,.75,u-.95],[-1,1.7,-1.4],[-.9,2.2,.2]],1381653,.03);const E=Fx();E.position.set(.95,1.35,-1.25),i.add(E);const R=Dr(i,1.45,.9,Math.PI/2,"Aft hatch to Bunk","bed",6324479,1.55),S=new ke(16765088,5,7);S.position.set(0,2.3,1.2),i.add(S);const M=new ke(2154656,3,4);M.position.set(0,1,u-.9),i.add(M),t.box(.9,.05,.12,0,2.7,1.4,16773328,16769200),i.add(new Cs(1713208,.8));const P={id:"mining",name:"Helm",scene:i,camPos:new A(.25,1.45,2.5),camLook:new A(0,.95,-1.2),hotspots:[R,{mesh:y,label:"Pilot chair (launch)",target:"fly"}]},k=ul([S,M]);return P.update=L=>{k(L),E.position.y=1.35+Math.sin(L/400)*.04,E.rotation.y=Math.sin(L/900)*.3;for(const W of I)W.material.emissiveIntensity=.5+Math.sin(L/150+W.id)*.15;T.material.emissiveIntensity=.6+Math.sin(L/300)*.3},P}function ko(i,t="#9aa4b0"){const e=document.createElement("canvas");e.width=256,e.height=96;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,96),n.fillStyle="#e0b020";for(let s=-2;s<12;s++)n.beginPath(),n.moveTo(s*26,96),n.lineTo(s*26+13,96),n.lineTo(s*26+33,72),n.lineTo(s*26+20,72),n.fill();return n.fillStyle="#1a2230",n.font="bold 22px monospace",n.textAlign="center",i.split(`
`).forEach((s,r)=>n.fillText(s,128,28+r*24)),new di(e)}function kx(i,t){const a=new de({color:5924470,roughness:.6,metalness:.5,side:me}),l=new st(new Je(1,1,3.6- -7,32,1,!0),a);l.rotation.x=Math.PI/2,l.scale.set(3.4,1,2.5),l.position.set(0,1.5,(-7+3.6)/2),i.add(l);for(let x=-7+.4;x<3.6;x+=1.3){const _=new st(new Ke(1,.05,6,40),ve(9082278));_.scale.set(3.4-.05,2.5-.05,2),_.position.set(0,1.5,x),i.add(_)}const c=new st(new As(1,40),ve(4871266));c.scale.set(3.4,2.5,1),c.position.set(0,1.5,-7+.02),i.add(c);const h=[-1.4,.4].map(x=>{const _=new st(new pe(.09,10,8),new Yt({color:16752672}));return _.position.set(x-.1,2.15,-7+.1),i.add(_),_}),d=new Ja(.42,1,6,14),f=new de({color:12107978,metalness:.75,roughness:.3}),p=[ko(`HALCYON
RECLAMATION`),ko(`FREIGHT
48,000 cr`),ko(`HANDLE
WITH CARE`)];for(const x of[-1.95,-1.05,1.05,1.95])t.box(.08,.06,3.6- -7-3,x,.05,(-7+3.6)/2-1.2,12623904);let v=0;for(const x of[-1,1])for(let _=-7+1.2;_<-2.6;_+=1.25)for(let I=0;I<(_<-4?3:2);I++){const T=x*1.5,E=.55+I*.95;I===0&&(t.box(1.05,.12,.35,T,.1,_-.35,2765376),t.box(1.05,.12,.35,T,.1,_+.35,2765376));const R=new st(d,f);R.name="pod",R.rotation.z=Math.PI/2,R.position.set(T,E,_),i.add(R);for(const S of[-.35,.35]){const M=new st(new Ke(.46,.05,6,20,Math.PI),ve(3159615,2126079,.5));M.rotation.y=Math.PI/2,M.position.set(T,E,_+S),M.rotation.x=Math.PI,i.add(M)}if(t.box(.04,.9,.05,T-x*.1,E,_,14725152),I===0||v%3===0){const S=new st(new Pn(.75,.28),new Yt({map:p[v%3]}));S.position.set(T-x*.5,E+.05,_),S.rotation.y=-x*Math.PI/2,i.add(S)}v++}for(const x of[-1.2,1.2])t.box(.12,.14,3.6- -7-1,x,3.55,(-7+3.6)/2,13672480);const g=t.box(2.6,.18,.25,0,3.4,-3.2,14725152),m=t.box(.22,.25,.22,0,2.6,-3.2,3159615);t.cyl(.015,.8,0,3,-3.2,9079434);for(let x=0;x<6;x++)t.box(.16,.19,.06,-1.1+x*.44,3.4,-3.07,x%2?1052688:14729248);i.fog=new Ts(1581100,.06),i.background=new wt(790552);const u=new ke(16756800,10,9);u.position.set(-1.6,3.2,-1.5),i.add(u);const y=new ke(8438015,12,11);y.position.set(1.4,3.3,-4.5),i.add(y);for(const x of[-5.5,-2.5,.5])t.box(.5,.06,1.2,0,3.95,x,13625599,10539263);return ye(i,`HOLD 18.0 C
HUMIDITY OK
FREIGHT SAFE`,2.4,1.9,-1.4,-Math.PI/2,.5,"#d8f0e0"),ye(i,`CARGO SAFETY
1. Secure the freight.
2. Secure the freight.
3. Pilot (if time permits)`,.95,2.75,-7+.06,0,1.1,"#f4f4f0"),{tick:x=>{const _=Math.sin(x/180)>.6;h.forEach((I,T)=>I.visible=T?_:!_),g.position.z=-3.2+Math.sin(x/6e3)*.6,m.position.z=g.position.z}}}function Bx(i){const t=new pi,{room:e,b:n,flicker:s}=cl(t,"transmog","Cargo Bay",15769632,{w:5.6,h:4.2,d:10.6,clean:!0,noWalls:!0});e.camPos.set(.25,1.6,3.6),e.camLook.set(-.3,.9,-1.6);const r=kx(t,n);n.box(.1,3,2.4,-2.75,1.5,-.6,4871266);const o=n.cyl(.4,1,-.3,.6,-1.7,3811914);n.cyl(.46,.08,-.3,.1,-1.7,1710626),n.cyl(.46,.08,-.3,1.12,-1.7,1710626);const a=new de({color:6961919,emissive:4202666,emissiveIntensity:.6,transparent:!0,opacity:1,roughness:.1,metalness:.2}),l=ve(2759236,8401151,.5);n.cyl(.85,.1,1,.05,.2,2236972);const c=new st(new ie(1,1,1),[l,l,l,l,a,l]);c.position.set(1,.5,.2),t.add(c);const h=new ke(9453823,3,4);h.position.set(1,1,.2),t.add(h);const d=new st(new pe(.12,12,8),new Yt({color:16777215,transparent:!0}));d.visible=!1,t.add(d);const f=new st(new pe(.05,8,6),new Yt({color:0,transparent:!0}));f.visible=!1,t.add(f),n.box(.5,.35,.4,1.6,.97,-1.8,5917232),n.box(1.4,.8,.7,1.6,.4,-1.8,2764864),n.box(.6,.4,.4,-2.5,.2,-.2,3815978),n.box(.4,.2,.3,-2.6,.5,-.2,5914672),n.box(.5,.5,.05,1,1.95,-2.42,2759186,15769632),n.cyl(.25,.9,-2.6,.45,.6,3099210);const p=Dr(t,-2.7,-.6,Math.PI/2,"Airlock hatch to Bunk","bed",6324479,1.6);for(let z=0;z<0;z++)for(let O=0;O<3;O++)n.box(.5,.5,.5,2.62,.3+O*.52,-1.35+z*.55,[5917232,4864552,3820090][(z+O)%3]),Tn(t,2.37,.3+O*.52,-1.35+z*.55,.02,.5,.12);const v=document.createElement("canvas");v.width=256,v.height=256;{const z=v.getContext("2d");z.fillStyle="#0a0630",z.fillRect(0,0,256,256);for(let O=0;O<80;O++)z.fillStyle="#fff",z.fillRect(Math.random()*256,Math.random()*256,2,2)}const g=new st(new Pn(1.7,1.9),new Yt({map:new di(v)}));g.position.set(-.5,.97,-6.95),t.add(g);const m=document.createElement("canvas");m.width=256,m.height=256;{const z=m.getContext("2d");z.fillStyle="#2a323f",z.fillRect(0,0,256,256),z.fillStyle="#d8b820";for(let O=-4;O<8;O++)z.beginPath(),z.moveTo(O*40,256),z.lineTo(O*40+20,256),z.lineTo(O*40+120,200),z.lineTo(O*40+100,200),z.fill();z.fillStyle="#e8e8e8",z.font="bold 34px monospace",z.fillText("CARGO",70,110)}const u=new st(new ie(1.7,1.9,.08),new de({map:new di(m),roughness:.7,metalness:.4}));u.position.set(-.5,.97,-6.9),t.add(u),n.box(.12,2,.1,-1.38,1,-6.9,790294),n.box(.12,2,.1,.38,1,-6.9,790294),n.box(1.9,.12,.1,-.5,1.98,-6.9,790294),ye(t,`OPENS.
SHUTS.
USUALLY.`,-.5,2.3,-6.88,0,.4,"#f4e27a",.03);const y=n.box(.9,.05,.9,-1.6,.07,1,1708552,15769632);y.name="ladder",y.material.emissiveIntensity=.6,n.box(.05,.9,.05,-1.95,.5,.6,6974068),n.box(.05,.9,.05,-1.25,.5,.6,6974068);for(let z=0;z<3;z++)n.box(.7,.04,.04,-1.6,.25+z*.28,.6,6974068);ye(t,`LADDER
(it is a ladder)`,-1.6,.9,.55,0,.42,"#d8f0d0"),Tn(t,-1.6,.11,1.46,1,.02,.06),e.hotspots.push(p,{mesh:y,label:"Ladder down to the Engine Room",target:"engine"});let x=0,_=0,I=i.get().stats.trips,T=i.get().door;const E=Array.from({length:14},(z,O)=>{const Z=new st(new ie(.16+O%3*.05,.08+O%2*.05,.14),ve([6974068,9067066,4876922][O%3],2102280,.4));return Z.position.set(-1.2+O%5*.17,.08+Math.floor(O/5)*.09,-.9+O*7%4*.12),Z.rotation.y=O*1.3,Z.visible=!1,t.add(Z),Z}),R=Array.from({length:5},(z,O)=>{const Z=new st(new Je(.12-O*.012,.16-O*.012,.1,10),ve([14696512,4235488,14729280,6340704,12607680][O],1118481,.3));return Z.visible=!1,t.add(Z),Z}),S=ve(1714720,2162576,.1),M=new st(new ie(.9,.04,.35),S);M.position.set(1.6,.82,-1.45),t.add(M),t.children[t.children.length-1];let P=i.get().scrap,k=0,L=0,W=i.get().lunges,$=0;const X=ul(s);return e.update=z=>{const O=Math.min(.1,(z-L)/1e3);L=z;const Z=i.get();Z.scrap<P&&(k=1),P=Z.scrap,k=Math.max(0,k-O*1.5),S.emissiveIntensity=.1+k*3,E.forEach((it,St)=>it.visible=St<Math.min(14,Z.scrap));const ft=Gc(Z.feeds)*1.6;R.forEach((it,St)=>{it.visible=St<Math.min(5,Z.hats),it.position.set(1+Math.sin(St*2.1)*.05,ft+.05+St*.09,.2),it.rotation.z=Math.sin(z/700+St)*.05});const lt=Wr(Z);c.visible=h.visible=lt,Z.lunges!==W&&(W=Z.lunges,$=1),$=Math.max(0,$-O*1.6);const Pt=lt&&Z.feeds<9&&Z.scrap>=Yn(Z.feeds);(Z.stats.trips!==I||Z.door!==T)&&(I=Z.stats.trips,T=Z.door,_=z+3400,At.door()),x+=((z<_?1:0)-x)*Math.min(1,O*3.5),u.position.y=.97+1.8*x,g.visible=x>.02,r.tick(z),X(z),o.rotation.y=z/2e3*(1+k*6);const zt=i.get().feeds,q=Gc(zt)*1.6*(1+.03*Math.min(i.get().sleeps,10)),tt=Math.sin($*Math.PI);c.scale.setScalar((q+Math.sin(z/500)*.015+(Pt?.035*Math.sin(z/170):0))*(1+.45*tt)),c.position.set(1,q/2,.2+.9*tt),c.rotation.y=Math.sin(z/3e3)*.2+(Pt?Math.sin(z/90)*.03:0),h.intensity=2+zt*.8+Math.sin(z/300)*.5+(Pt?2.5+2*Math.sin(z/150):0)+14*tt,h.position.y=q+.3,a.opacity=xv(zt);const vt=zt>=1&&lt;{const it=_v(zt);d.material.opacity=it,f.material.opacity=it}if(d.visible=f.visible=vt,vt){const it=.2+q/2;d.position.set(1,q*.55,it-q*.18),f.position.set(1+Math.sin(z/700)*.04*q,q*.55,it-q*.18+.1*q+.05),d.scale.setScalar(q*1.4),f.scale.setScalar(q*1.4)}},e}function zx(i){const t=new pi,{room:e,b:n,flicker:s}=cl(t,"bed","Bunk",6324479,{w:3.6,h:1.95,d:3.4});e.camPos.set(0,1.45,2.5),e.camLook.set(0,.85,-1.4);const r=n.box(.75,.3,1.8,1.25,.3,-1.5,3817304);r.name="bunk",n.box(.7,.1,.35,1.25,.5,-2.2,13156528),n.cyl(.12,1.95,1.7,.98,-1.5,5917242),n.cyl(.07,1.95,1.7,.98,-.5,3813162),Tn(t,1.62,.6,-1.4,.06,.08,.1),ye(t,`HOT PIPE
(blanket = no)`,1.58,1.3,-1,-Math.PI/2,.28,"#f06050",.05),Tn(t,1.25,.47,-.62,.7,.05,.03),n.box(.85,.72,.5,-1.3,.36,-2.22,2304058);const o=n.box(.6,.38,.05,-1.3,1.05,-2.44,1056792,3211152);o.material.emissiveIntensity=.6,n.box(.4,.03,.16,-1.3,.74,-2.1,3159622),n.cyl(.04,.09,-.98,.77,-2.15,14207136).name="mug",ye(t,`PASSWORD IS
PASSWORD`,-1.62,.95,-2.43,0,.22,"#f4e27a",.05),Tn(t,-1.3,1.27,-2.45,.7,.04,.02),n.cyl(.02,.8,-1.2,1.62,-1.9,9079442,[0,0,Math.PI/2]),Tn(t,-1.5,1.62,-1.9,.06,.08,.05),ye(t,"GYM",-1.25,1.42,-2.43,0,.18,"#d8f0d0"),n.box(.6,1.7,.06,-.45,.88,-2.44,2766406),n.cyl(.03,.22,-.45,1.72,-2.32,9079442,[Math.PI/2,0,0]),ys(t,[[-.45,1.68,-2.25],[-.2,1.3,-2.3],[-.3,.8,-2.35]],3160648,.02);const a=new st(new Pn(.58,1.5),new de({color:6993120,transparent:!0,opacity:.5,side:Ee}));a.position.set(-.45,.85,-2.1),t.add(a),ye(t,`FOLD-OUT
SHOWER
hot = 40 sec`,-.45,1.25,-2.08,0,.26,"#f0d0d0",-.08);const l=n.box(.62,1.4,.08,.4,.78,-2.46,790294),c=n.box(.46,1.05,.04,.4,.78,-2.4,1054752,2130080),h=c.material,d=new ke(4235519,0,3);d.name="vault-light",d.position.set(.4,.8,-2),t.add(d),ye(t,`DO NOT
OPEN THE
VAULT`,.4,1.68,-2.42,0,.3,"#f06050"),ye(t,`Day 4,017
of the contract`,-1.75,1.45,-1,Math.PI/2,.3,"#f4e27a"),n.box(.3,.12,.12,.3,.07,-.9,2763312),n.cyl(.1,.22,-.9,.11,-.6,4872810),ys(t,[[-1.7,1.75,-.4],[-.2,1.62,-.8],[1.5,1.8,-1.2]],1381653,.015);const f=n.box(.28,.32,.02,-.4,1.45,-.8,6965818),p=Dr(t,-1.8,-.9,Math.PI/2,"Forward hatch to Helm","mining",2154656,1.6),v=Dr(t,1.8,-.15,Math.PI/2,"Airlock hatch to Cargo Bay","transmog",15769632,1.6);ye(t,`AIRLOCK
(pull twice)`,1.76,1.75,-.15,-Math.PI/2,.26,"#f4e27a"),e.hotspots.push(p,v,{mesh:r,label:"Sleep (the night changes things)",target:"act:sleep"},{mesh:o,label:"Log terminal",target:"act:logs"});const g=ul(s);return e.update=m=>{g(m);const u=i.get(),y=al(u),x=-.025*Math.min(u.sleeps,7);l.position.x=.4+x,c.position.x=.4+x,d.position.x=.4+x;const _=[2130080,3186864,14721072,16736448][y];h.emissive.setHex(_);const I=1+(y?.35:.05)*Math.sin(m/(700-y*150));h.emissiveIntensity=[.1,.5,.9,1.6][y]*I,d.color.setHex(_),d.intensity=[0,1.2,2.5,5][y]*I,a.rotation.y=Math.sin(m/1400)*.05,f.rotation.z=Math.sin(m/900)*.06},e}const Rt=Av(),sn=new bg({antialias:!0,preserveDrawingBuffer:!0});sn.setPixelRatio(Math.min(devicePixelRatio,2));sn.setSize(innerWidth,innerHeight);document.body.appendChild(sn.domElement);const rn=new Ve(62,innerWidth/innerHeight,.1,400),Hx=96;function ru(){const i=innerWidth/Math.max(1,innerHeight);rn.aspect=i,rn.fov=Math.min(100,Math.max(40,2*Math.atan(Math.tan(Hx*Math.PI/360)/i)*180/Math.PI)),rn.userData.baseFov=rn.fov,rn.updateProjectionMatrix()}ru();const Oe=new Cv(Rt,rn,sn.domElement,"mining");[Ox(),Bx(Rt),zx(Rt),jv()].forEach(i=>Oe.add(i));Oe.start();const ou=Vv(Rt),Jc=["POWER: yes.","HULL: ok-ish. A sticker says ok.",'ENGINE TEMP: ??? (sticker: "normal")',"RING SPEED: 11 (units unknown)",'LAST SERVICE: "did something to it"','SI STATUS: left. Note: "back soon" (4,017 days ago)'];let Gx=0;Oe.onAction=i=>{i==="collider"&&qn("Keep back. The sticker says DANGER. The sticker is in marker."),i==="monitor"&&qn(Jc[Gx++%Jc.length]),i==="logs"&&ou.open(),i==="sleep"&&lu.open(),i==="cross"&&Vx()};function Vx(){const i=performance.now();if(av(Lr,i,300).shocked){const t=Rt.get();Rt.set(lv(t,Io)),window.hazard.shocks++,At.zap(),Wx(),qn(`ZAP. -${Io.hull} hull, -${Io.power} power. Wait for the quiet.`);return}qn("You run across in the quiet. The ring does not notice. This time."),Oe.goTo("transmog")}function Wx(){const i=document.createElement("div");i.id="zap-flash",Object.assign(i.style,{position:"fixed",inset:"0",background:"#dff",opacity:"0.85",zIndex:"40",pointerEvents:"none",transition:"opacity .5s"}),document.body.appendChild(i),requestAnimationFrame(()=>requestAnimationFrame(()=>i.style.opacity="0")),setTimeout(()=>i.remove(),600)}window.hazard={ENGINE_RING:Lr,isDanger:Is,safeIn:sv,shocks:0};const Xx=Wv();for(const i of["pointerdown","keydown"])addEventListener(i,()=>At.unlock(),{once:!1});addEventListener("click",i=>{var t;((t=i.target)==null?void 0:t.tagName)==="BUTTON"&&At.click()});const dl=Yv(Rt);$v(Rt);Kv(Rt);const Ss=new Ix(Rt,rn,sn.domElement);Rt.subscribe(i=>{i.feeds>=9&&!i.cameo&&i.mode==="rooms"&&(Rt.set({cameo:!0}),setTimeout(()=>Oe.transition(()=>{Ss.enter(),setTimeout(()=>{Rt.get().beats.includes("spreading")||(Rt.set({beats:[...Rt.get().beats,"spreading"]}),dl.say("spreading"))},3500)}),700))});const Zc=Nx(Rt,()=>au.show()),au=new Dx(Rt,i=>{Zc.say(i),Zc.render()}),Xe=new Bv(Rt,rn),qx=new zv(Rt,Xe),ws=new mx(Rt,rn),Xr=xx(Rt);Xx.add("fb-btn","Send feedback",()=>Xr.open());ws.onFeedback=()=>Xr.open();const Nr=new URLSearchParams(location.search),Ls=Nr.has("nocut"),Yx=Jv(Rt),lu=dx(Rt),cu=Zv(Rt);window.cubeChoice=cu;fx(Rt);window.sleepUi=lu;const hu=px(Rt,dl);window.sorter=Yx;window.cubeEvents=hu;Ls&&(Xe.fixedField="quiet",Xe.fatigueEnabled=!1,hu.enabled=!1,cu.enabled=!1,Rt.set({cubeState:"aboard",cubeLunged:!0,cubeChoice:"kept",beats:[...Rt.get().beats,"cubeFound","cubeLunge"]}));Xe.manualSort=!Ls;Nr.get("field")&&(Xe.fixedField=Nr.get("field"));Oe.onFly=()=>{if(Ls||Rt.get().beats.includes("launchCut"))return Xe.enter();Rt.set({beats:[...Rt.get().beats,"launchCut"]}),ws.play("launch",()=>Xe.enter())};window.LOGBOOKS=ol;window.intensityOf=Gr;const $x=ex(Rt);window.ledger=$x;const jx=Qv(Rt);window.profileTracker=jx;const uu=nx(Rt);window.atmosphere=uu;Ls&&(uu.enabled=!1);const fl=ux(Rt);window.finale=fl;fl.onFeedback=()=>Xr.open();Ss.onContinue=()=>{Ls&&!Nr.has("finale")||fl.play()};Xe.onReturn=()=>Oe.transition(()=>{Oe.jumpTo("transmog"),Xe.bankAndLeave()});const Kx="Fatigue: rises while you fly and haul. Ticks: 40 tired (mining window shrinks), 70 exhausted (blur, phantom sounds), 90 breaking (glitches, air drains faster). Sleep in the bunk to reset.",du=document.getElementById("hud"),Bo=(i,t)=>`<div class="m"><span>${i}</span><i style="--c:${t}"><b id="m-${i}"></b></i></div>`;du.innerHTML=`<div id="room"></div>${Bo("power","#f0a020")}${Bo("oxygen","#40c0ff")}${Bo("hull","#e05050")}<div class="m fat" id="fatigue-row" title="${Kx}"><span>fatigue</span><i style="--c:#c080ff"><b id="m-fatigue"></b><em style="left:40%"></em><em style="left:70%"></em><em style="left:90%"></em></i></div><div id="cargo"></div><div id="hint"></div>`;const Qi=document.createElement("button");Qi.id="exit-fly";Qi.textContent="Return to ship (R)";Object.assign(Qi.style,{position:"fixed",top:"12px",right:"12px",display:"none",padding:"8px 12px",font:"13px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"8"});Qi.onclick=()=>Xe.exit();document.body.appendChild(Qi);let pr=Rt.get().debt,Qc=0;const fu=()=>{Qi.style.display=Rt.get().mode==="fly"?"block":"none",du.style.display=Rt.get().mode==="fly"||Rt.get().mode==="exterior"||Rt.get().mode==="finale"?"none":"block";const i=Rt.get();["power","oxygen","hull"].forEach(t=>document.getElementById("m-"+t).style.width=i[t]+"%");{const t=document.getElementById("fatigue-row");document.getElementById("m-fatigue").style.width=Math.min(100,i.fatigue)+"%",t.dataset.level=String(ji(i.fatigue))}document.getElementById("room").textContent=i.mode==="cameo"?"SPORES":i.mode==="fly"?"MINING SECTOR":Oe.rooms.get(i.room).name.toUpperCase();{const t=document.getElementById("cargo");if(i.debt!==pr){const e=i.debt>pr;t.innerHTML=`CARGO ${i.cargo}/${i.cargoCap}   SCRAP ${i.scrap}   DEBT ${i.debt} cr <b style="color:${e?"#ff6060":"#60e080"}">(debt ${e?"+":"-"}${Math.abs(i.debt-pr)} cr)</b>`,pr=i.debt,Qc=performance.now()+2500}else performance.now()>Qc&&(t.textContent=`CARGO ${i.cargo}/${i.cargoCap}   SCRAP ${i.scrap}   DEBT ${i.debt} cr`)}document.getElementById("hint").textContent=i.mode==="cameo"?"Drag one spore onto another":i.mode==="fly"?"W/S thrust, A/D turn, arrows pitch, Z/C roll, E/Q up/down, Space mine, R/Esc return":"Click glowing doors, hatches and ladders. The pilot chair is at the Helm (nose)"};Rt.subscribe(fu);fu();addEventListener("resize",()=>{sn.setSize(innerWidth,innerHeight),ru()});let pu=0,mu=0;addEventListener("mousemove",i=>{pu=i.clientX/innerWidth-.5,mu=i.clientY/innerHeight-.5});let th=0;sn.setAnimationLoop(i=>{const t=Math.min(.1,Math.max(.001,(i-th)/1e3));if(th=i,Rt.get().mode==="finale")return;if(Rt.get().mode==="cameo"){Ss.update(t),Ss.render(sn);return}if(Rt.get().mode==="exterior"){ws.update(t),ws.render(sn);return}if(Rt.get().mode==="fly"){Xe.update(t),qx.update(),Xe.render(sn);return}Oe.update(i);const e=Oe.current.camPos;rn.position.set(e.x+pu*.15,e.y-mu*.1,e.z),rn.lookAt(Oe.current.camLook),Oe.render(sn)});window.rm=Oe;window.fly=Xe;window.store=Rt;window.lock=au;window.cameo=Ss;window.bunk=ou;window.narrator=dl;window.exterior=ws;window.feedback=Xr;
