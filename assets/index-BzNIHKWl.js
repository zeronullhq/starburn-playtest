var Tu=Object.defineProperty;var Au=(i,t,e)=>t in i?Tu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var H=(i,t,e)=>Au(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="170",Cu=0,Al=1,Ru=2,ah=1,Pu=2,Tn=3,$n=0,me=1,Ce=2,Wn=0,Gi=1,Ke=2,Cl=3,Rl=4,Iu=5,oi=100,Lu=101,Du=102,Uu=103,Nu=104,ku=200,Fu=201,Ou=202,Bu=203,Go=204,Vo=205,zu=206,Hu=207,Gu=208,Vu=209,Wu=210,Xu=211,qu=212,Yu=213,$u=214,Wo=0,Xo=1,qo=2,qi=3,Yo=4,$o=5,jo=6,Ko=7,lh=0,ju=1,Ku=2,Xn=0,Zu=1,Ju=2,Qu=3,td=4,ed=5,nd=6,id=7,ch=300,Yi=301,$i=302,Zo=303,Jo=304,Br=306,Qo=1e3,ci=1001,ta=1002,Xe=1003,sd=1004,Bs=1005,ln=1006,jr=1007,hi=1008,Pn=1009,hh=1010,uh=1011,Ts=1012,za=1013,fi=1014,pn=1015,Is=1016,Ha=1017,Ga=1018,ji=1020,dh=35902,fh=1021,ph=1022,cn=1023,mh=1024,gh=1025,Vi=1026,Ki=1027,Va=1028,Wa=1029,vh=1030,Xa=1031,qa=1033,yr=33776,Mr=33777,br=33778,Sr=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,oa=37492,aa=37496,la=37808,ca=37809,ha=37810,ua=37811,da=37812,fa=37813,pa=37814,ma=37815,ga=37816,va=37817,xa=37818,_a=37819,ya=37820,Ma=37821,wr=36492,ba=36494,Sa=36495,xh=36283,wa=36284,Ea=36285,Ta=36286,rd=3200,od=3201,_h=0,ad=1,Gn="",Ve="srgb",ts="srgb-linear",zr="linear",te="srgb",xi=7680,Pl=519,ld=512,cd=513,hd=514,yh=515,ud=516,dd=517,fd=518,pd=519,Aa=35044,Il="300 es",An=2e3,Rr=2001;class es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,Ca=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function md(i,t){return(i%t+t)%t}function Zr(i,t,e){return(1-e)*i+e*t}function fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],v=n[8],g=s[0],m=s[3],d=s[6],y=s[1],x=s[4],_=s[7],L=s[2],A=s[5],T=s[8];return r[0]=o*g+a*y+l*L,r[3]=o*m+a*x+l*A,r[6]=o*d+a*_+l*T,r[1]=c*g+h*y+u*L,r[4]=c*m+h*x+u*A,r[7]=c*d+h*_+u*T,r[2]=f*g+p*y+v*L,r[5]=f*m+p*x+v*A,r[8]=f*d+p*_+v*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,v=e*u+n*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=u*g,t[1]=(s*c-h*n)*g,t[2]=(a*n-s*o)*g,t[3]=f*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new kt;function Mh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){const i=Pr("canvas");return i.style.display="block",i}const Ll={};function ys(i){i in Ll||(Ll[i]=!0,console.warn(i))}function vd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function xd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _d(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=Rn(i.r),i.g=Rn(i.g),i.b=Rn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gn?zr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Dl=[.64,.33,.3,.6,.15,.06],Ul=[.2126,.7152,.0722],Nl=[.3127,.329],kl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[ts]:{primaries:Dl,whitePoint:Nl,transfer:zr,toXYZ:kl,fromXYZ:Fl,luminanceCoefficients:Ul,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Dl,whitePoint:Nl,transfer:te,toXYZ:kl,fromXYZ:Fl,luminanceCoefficients:Ul,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let _i;class yd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Pr("canvas")),_i.width=t.width,_i.height=t.height;const n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Rn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Rn(e[n]/255)*255):e[n]=Rn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Md=0;class bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qr(s[o].image)):r.push(Qr(s[o]))}else r=Qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;class Le extends es{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ci,s=ci,r=ln,o=hi,a=cn,l=Pn,c=Le.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=qn(),this.name="",this.source=new bh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=ch;Le.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,_=(p+1)/2,L=(d+1)/2,A=(h+f)/4,T=(u+g)/4,P=(v+m)/4;return x>_&&x>L?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=T/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-v)/y,this.y=(u-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends es{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Sd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sh extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(u!==g||l!==f||c!==p||h!==v){let m=1-a;const d=l*f+c*p+h*v+u*g,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),A=Math.atan2(L,d*y);m=Math.sin(m*A)/L,a=Math.sin(a*A)/L}const _=a*y;if(l=l*m+f*_,c=c*m+p*_,h=h*m+v*_,u=u*m+g*_,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+h*u+l*p-c*f,t[e+1]=l*v+h*f+c*u-a*p,t[e+2]=c*v+h*p+a*f-l*u,t[e+3]=h*v-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"YXZ":this._x=f*h*u+c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"ZXY":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u-f*p*v;break;case"ZYX":this._x=f*h*u-c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u+f*p*v;break;case"YZX":this._x=f*h*u+c*p*v,this._y=c*p*u+f*h*v,this._z=c*h*v-f*p*u,this._w=c*h*u-f*p*v;break;case"XZY":this._x=f*h*u-c*p*v,this._y=c*p*u-f*h*v,this._z=c*h*v+f*p*u,this._w=c*h*u+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new C,Ol=new hn;class mi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Hs.subVectors(this.max,ls),yi.subVectors(t.a,ls),Mi.subVectors(t.b,ls),bi.subVectors(t.c,ls),Un.subVectors(Mi,yi),Nn.subVectors(bi,Mi),Qn.subVectors(yi,bi);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Qn.z,Qn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Qn.z,0,-Qn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Qn.y,Qn.x,0];return!eo(e,yi,Mi,bi,Hs)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,yi,Mi,bi,Hs))?!1:(Gs.crossVectors(Un,Nn),e=[Gs.x,Gs.y,Gs.z],eo(e,yi,Mi,bi,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new C,new C,new C,new C,new C,new C,new C,new C],nn=new C,zs=new mi,yi=new C,Mi=new C,bi=new C,Un=new C,Nn=new C,Qn=new C,ls=new C,Hs=new C,Gs=new C,ti=new C;function eo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);const a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ed=new mi,cs=new C,no=new C;class Kn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(no)),this.expandByPoint(cs.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new C,io=new C,Vs=new C,kn=new C,so=new C,Ws=new C,ro=new C;class Hr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){io.copy(t).add(e).multiplyScalar(.5),Vs.copy(e).sub(t).normalize(),kn.copy(this.origin).sub(io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vs),a=kn.dot(this.direction),l=-kn.dot(Vs),c=kn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,v;if(h>0)if(u=o*l-a,f=o*a-l,v=r*h,u>=0)if(f>=-v)if(f<=v){const g=1/h;u*=g,f*=g,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-v?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=v?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(io).addScaledVector(Vs,f),p}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){so.subVectors(e,t),Ws.subVectors(n,t),ro.crossVectors(so,Ws);let o=this.direction.dot(ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,t);const l=a*this.direction.dot(Ws.crossVectors(kn,Ws));if(l<0)return null;const c=a*this.direction.dot(so.cross(kn));if(c<0||l+c>o)return null;const h=-a*kn.dot(ro);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,v,g,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,v,g,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,v,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,v=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+v*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,v=c*h,g=c*u;e[0]=f+g*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-v,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,v=c*h,g=c*u;e[0]=f-g*a,e[4]=-o*u,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*h,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,v=a*h,g=a*u;e[0]=l*h,e[4]=v*c-p,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*h,e[4]=g-f*u,e[8]=v*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+v,e[10]=f-g*u}else if(t.order==="XZY"){const f=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=o*h,e[9]=p*u-v,e[2]=v*u-p,e[6]=a*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,Ad)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Fn.crossVectors(n,He),Fn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Fn.crossVectors(n,He)),Fn.normalize(),Xs.crossVectors(He,Fn),s[0]=Fn.x,s[4]=Xs.x,s[8]=He.x,s[1]=Fn.y,s[5]=Xs.y,s[9]=He.y,s[2]=Fn.z,s[6]=Xs.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],y=n[3],x=n[7],_=n[11],L=n[15],A=s[0],T=s[4],P=s[8],b=s[12],M=s[1],E=s[5],D=s[9],I=s[13],B=s[2],V=s[6],G=s[10],z=s[14],O=s[3],j=s[7],at=s[11],ct=s[15];return r[0]=o*A+a*M+l*B+c*O,r[4]=o*T+a*E+l*V+c*j,r[8]=o*P+a*D+l*G+c*at,r[12]=o*b+a*I+l*z+c*ct,r[1]=h*A+u*M+f*B+p*O,r[5]=h*T+u*E+f*V+p*j,r[9]=h*P+u*D+f*G+p*at,r[13]=h*b+u*I+f*z+p*ct,r[2]=v*A+g*M+m*B+d*O,r[6]=v*T+g*E+m*V+d*j,r[10]=v*P+g*D+m*G+d*at,r[14]=v*b+g*I+m*z+d*ct,r[3]=y*A+x*M+_*B+L*O,r[7]=y*T+x*E+_*V+L*j,r[11]=y*P+x*D+_*G+L*at,r[15]=y*b+x*I+_*z+L*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],v=t[3],g=t[7],m=t[11],d=t[15];return v*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+g*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],v=t[12],g=t[13],m=t[14],d=t[15],y=u*m*c-g*f*c+g*l*p-a*m*p-u*l*d+a*f*d,x=v*f*c-h*m*c-v*l*p+o*m*p+h*l*d-o*f*d,_=h*g*c-v*u*c+v*a*p-o*g*p-h*a*d+o*u*d,L=v*u*l-h*g*l-v*a*f+o*g*f+h*a*m-o*u*m,A=e*y+n*x+s*_+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=y*T,t[1]=(g*f*r-u*m*r-g*s*p+n*m*p+u*s*d-n*f*d)*T,t[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*d+n*l*d)*T,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*T,t[4]=x*T,t[5]=(h*m*r-v*f*r+v*s*p-e*m*p-h*s*d+e*f*d)*T,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*d-e*l*d)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*T,t[8]=_*T,t[9]=(v*u*r-h*g*r-v*n*p+e*g*p+h*n*d-e*u*d)*T,t[10]=(o*g*r-v*a*r+v*n*c-e*g*c-o*n*d+e*a*d)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=L*T,t[13]=(h*g*s-v*u*s+v*n*f-e*g*f-h*n*m+e*u*m)*T,t[14]=(v*a*s-o*g*s-v*n*l+e*g*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,v=r*u,g=o*h,m=o*u,d=a*u,y=l*c,x=l*h,_=l*u,L=n.x,A=n.y,T=n.z;return s[0]=(1-(g+d))*L,s[1]=(p+_)*L,s[2]=(v-x)*L,s[3]=0,s[4]=(p-_)*A,s[5]=(1-(f+d))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(v+x)*T,s[9]=(m-y)*T,s[10]=(1-(f+g))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const o=Si.set(s[4],s[5],s[6]).length(),a=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const c=1/r,h=1/o,u=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=An){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,v;if(a===An)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Rr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=An){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h;let v,g;if(a===An)v=(o+r)*u,g=-2*u;else if(a===Rr)v=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new C,sn=new Kt,Td=new C(0,0,0),Ad=new C(1,1,1),Fn=new C,Xs=new C,He=new C,Bl=new Kt,zl=new hn;class Oe{constructor(t=0,e=0,n=0,s=Oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oe.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cd=0;const Hl=new C,wi=new hn,bn=new Kt,qs=new C,hs=new C,Rd=new C,Pd=new hn,Gl=new C(1,0,0),Vl=new C(0,1,0),Wl=new C(0,0,1),Xl={type:"added"},Id={type:"removed"},Ei={type:"childadded",child:null},oo={type:"childremoved",child:null};class xe extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new C,e=new Oe,n=new hn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new kt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(hs,qs,this.up):bn.lookAt(qs,hs,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(bn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new C(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new C,Sn=new C,ao=new C,wn=new C,Ti=new C,Ai=new C,ql=new C,lo=new C,co=new C,ho=new C,uo=new ne,fo=new ne,po=new ne;class Ze{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Sn.subVectors(n,e),ao.subVectors(t,e);const o=rn.dot(rn),a=rn.dot(Sn),l=rn.dot(ao),c=Sn.dot(Sn),h=Sn.dot(ao),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return uo.setScalar(0),fo.setScalar(0),po.setScalar(0),uo.fromBufferAttribute(t,e),fo.fromBufferAttribute(t,n),po.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(uo,r.x),o.addScaledVector(fo,r.y),o.addScaledVector(po,r.z),o}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Sn.subVectors(t,e),rn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ti.subVectors(s,n),Ai.subVectors(r,n),lo.subVectors(t,n);const l=Ti.dot(lo),c=Ai.dot(lo);if(l<=0&&c<=0)return e.copy(n);co.subVectors(t,s);const h=Ti.dot(co),u=Ai.dot(co);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ti,o);ho.subVectors(t,r);const p=Ti.dot(ho),v=Ai.dot(ho);if(v>=0&&p<=v)return e.copy(r);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Ai,a);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return ql.subVectors(r,s),a=(u-h)/(u-h+(p-v)),e.copy(s).addScaledVector(ql,a);const d=1/(m+g+f);return o=g*d,a=f*d,e.copy(n).addScaledVector(Ti,o).addScaledVector(Ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=md(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mo(o,r,t+1/3),this.g=mo(o,r,t),this.b=mo(o,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return $t.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ee(Ie.r*255,0,255))*65536+Math.round(Ee(Ie.g*255,0,255))*256+Math.round(Ee(Ie.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ve){$t.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Ys);const n=Zr(On.h,Ys.h,e),s=Zr(On.s,Ys.s,e),r=Zr(On.l,Ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Et;Et.NAMES=wh;let Ld=0;class Zn extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=qn(),this.name="",this.blending=Gi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Vo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ht extends Zn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new C,$s=new rt;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Aa,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Aa&&(t.usage=this.usage),t}}class Eh extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Th extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dd=0;const je=new Kt,go=new xe,Ci=new C,Ge=new mi,us=new mi,Se=new C;class oe extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mh(t)?Th:Eh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return go.lookAt(t),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ge.min,us.min),Ge.expandByPoint(Se),Se.addVectors(Ge.max,us.max),Ge.expandByPoint(Se)):(Ge.expandByPoint(us.min),Ge.expandByPoint(us.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(Ci.fromBufferAttribute(t,c),Se.add(Ci)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;const c=new C,h=new C,u=new C,f=new rt,p=new rt,v=new rt,g=new C,m=new C;function d(P,b,M){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),v.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(f),v.sub(f);const E=1/(p.x*v.y-v.x*p.y);isFinite(E)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(E),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(E),a[P].add(g),a[b].add(g),a[M].add(g),l[P].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,b=y.length;P<b;++P){const M=y[P],E=M.start,D=M.count;for(let I=E,B=E+D;I<B;I+=3)d(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const x=new C,_=new C,L=new C,A=new C;function T(P){L.fromBufferAttribute(s,P),A.copy(L);const b=a[P];x.copy(b),x.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(A,b);const E=_.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,E)}for(let P=0,b=y.length;P<b;++P){const M=y[P],E=M.start,D=M.count;for(let I=E,B=E+D;I<B;I+=3)T(t.getX(I+0)),T(t.getX(I+1)),T(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let d=0;d<h;d++)f[v++]=c[p++]}return new Ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new oe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new Kt,ei=new Hr,js=new Kn,$l=new C,Ks=new C,Zs=new C,Js=new C,vo=new C,Qs=new C,jl=new C,tr=new C;class st extends xe{constructor(t=new oe,e=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(vo.fromBufferAttribute(u,t),o?Qs.addScaledVector(vo,h):Qs.addScaledVector(vo.sub(e),h))}e.add(Qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(js.containsPoint(ei.origin)===!1&&(ei.intersectSphere(js,$l)===null||ei.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,L=x;_<L;_+=3){const A=a.getX(_),T=a.getX(_+1),P=a.getX(_+2);s=er(this,d,t,n,c,h,u,A,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const y=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=er(this,o,t,n,c,h,u,y,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,L=x;_<L;_+=3){const A=_,T=_+1,P=_+2;s=er(this,d,t,n,c,h,u,A,T,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const y=m,x=m+1,_=m+2;s=er(this,o,t,n,c,h,u,y,x,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ud(i,t,e,n,s,r,o,a){let l;if(t.side===me?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===$n,a),l===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(tr);return c<e.near||c>e.far?null:{distance:c,point:tr.clone(),object:i}}function er(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ks),i.getVertexPosition(l,Zs),i.getVertexPosition(c,Js);const h=Ud(i,t,e,n,Ks,Zs,Js,jl);if(h){const u=new C;Ze.getBarycoord(jl,Ks,Zs,Js,u),s&&(h.uv=Ze.getInterpolatedAttribute(s,a,l,c,u,new rt)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,a,l,c,u,new rt)),o&&(h.normal=Ze.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new C,materialIndex:0};Ze.getNormal(Ks,Zs,Js,f.normal),h.face=f,h.barycoord=u}return h}class ie extends oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function v(g,m,d,y,x,_,L,A,T,P,b){const M=_/T,E=L/P,D=_/2,I=L/2,B=A/2,V=T+1,G=P+1;let z=0,O=0;const j=new C;for(let at=0;at<G;at++){const ct=at*E-I;for(let Pt=0;Pt<V;Pt++){const zt=Pt*M-D;j[g]=zt*y,j[m]=ct*x,j[d]=B,c.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[d]=A>0?1:-1,h.push(j.x,j.y,j.z),u.push(Pt/T),u.push(1-at/P),z+=1}}for(let at=0;at<P;at++)for(let ct=0;ct<T;ct++){const Pt=f+ct+V*at,zt=f+ct+V*(at+1),Y=f+(ct+1)+V*(at+1),tt=f+(ct+1)+V*at;l.push(Pt,zt,tt),l.push(zt,Y,tt),O+=6}a.addGroup(p,O,b),p+=O,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){const t={};for(let e=0;e<i.length;e++){const n=Zi(i[e]);for(const s in n)t[s]=n[s]}return t}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const kd={clone:Zi,merge:Ue};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Zn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ch extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new C,Kl=new rt,Zl=new rt;class We extends Ch{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,Zl),e.subVectors(Zl,Kl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Pi=1;class Bd extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Ri,Pi,t,e);s.layers=this.layers,this.add(s);const r=new We(Ri,Pi,t,e);r.layers=this.layers,this.add(r);const o=new We(Ri,Pi,t,e);o.layers=this.layers,this.add(o);const a=new We(Ri,Pi,t,e);a.layers=this.layers,this.add(a);const l=new We(Ri,Pi,t,e);l.layers=this.layers,this.add(l);const c=new We(Ri,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Rh extends Le{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zd extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ie(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:me,blending:Wn});r.uniforms.tEquirect.value=e;const o=new st(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=ln),new Bd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const xo=new C,Hd=new C,Gd=new kt;class Hn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xo.subVectors(n,e).cross(Hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Kn,nr=new C;class $a{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],v=s[9],g=s[10],m=s[11],d=s[12],y=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+o,f+h,m+v,_+y).normalize(),n[3].setComponents(l-o,f-h,m-v,_-y).normalize(),n[4].setComponents(l-a,f-u,m-g,_-x).normalize(),e===An)n[5].setComponents(l+a,f+u,m+g,_+x).normalize();else if(e===Rr)n[5].setComponents(a,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(nr.x=s.normal.x>0?t.max.x:t.min.x,nr.y=s.normal.y>0?t.max.y:t.min.y,nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ph(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<u.length;p++){const v=u[f],g=u[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++f,u[f]=g)}u.length=f+1;for(let p=0,v=u.length;p<v;p++){const g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class gn extends oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],v=[],g=[],m=[];for(let d=0;d<h;d++){const y=d*f-o;for(let x=0;x<c;x++){const _=x*u-r;v.push(_,-y,0),g.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const x=y+c*d,_=y+c*(d+1),L=y+1+c*(d+1),A=y+1+c*d;p.push(x,_,A),p.push(_,L,A)}this.setIndex(p),this.setAttribute("position",new Gt(v,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kf=`uniform bool receiveShadow;
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
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tp=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`#ifdef USE_MORPHTARGETS
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
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
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
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rp=`float getShadowMask() {
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
}`,Pp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ip=`#ifdef USE_SKINNING
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
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Op=`#ifdef USE_TRANSMISSION
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
#endif`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xp=`uniform sampler2D t2D;
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
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
}`,Zp=`#if DEPTH_PACKING == 3200
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
}`,Jp=`#define DISTANCE
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
}`,Qp=`#define DISTANCE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`uniform float scale;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 diffuse;
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
}`,om=`#define LAMBERT
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
}`,am=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,fm=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,vm=`#define TOON
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
}`,xm=`uniform float size;
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
}`,_m=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Mm=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:qd,alphamap_pars_fragment:Yd,alphatest_fragment:$d,alphatest_pars_fragment:jd,aomap_fragment:Kd,aomap_pars_fragment:Zd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:tf,beginnormal_vertex:ef,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:hf,color_pars_fragment:uf,color_pars_vertex:df,color_vertex:ff,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:vf,displacementmap_vertex:xf,emissivemap_fragment:_f,emissivemap_pars_fragment:yf,colorspace_fragment:Mf,colorspace_pars_fragment:bf,envmap_fragment:Sf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Ef,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:Ff,envmap_vertex:Af,fog_vertex:Cf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:If,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:kf,lights_toon_fragment:Of,lights_toon_pars_fragment:Bf,lights_phong_fragment:zf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Kf,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:Qf,map_particle_pars_fragment:tp,metalnessmap_fragment:ep,metalnessmap_pars_fragment:np,morphinstance_vertex:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,iridescence_pars_fragment:vp,opaque_fragment:xp,packing:_p,premultiplied_alpha_fragment:yp,project_vertex:Mp,dithering_fragment:bp,dithering_pars_fragment:Sp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Ep,shadowmap_pars_fragment:Tp,shadowmap_pars_vertex:Ap,shadowmap_vertex:Cp,shadowmask_pars_fragment:Rp,skinbase_vertex:Pp,skinning_pars_vertex:Ip,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Up,specularmap_pars_fragment:Np,tonemapping_fragment:kp,tonemapping_pars_fragment:Fp,transmission_fragment:Op,transmission_pars_fragment:Bp,uv_pars_fragment:zp,uv_pars_vertex:Hp,uv_vertex:Gp,worldpos_vertex:Vp,background_vert:Wp,background_frag:Xp,backgroundCube_vert:qp,backgroundCube_frag:Yp,cube_vert:$p,cube_frag:jp,depth_vert:Kp,depth_frag:Zp,distanceRGBA_vert:Jp,distanceRGBA_frag:Qp,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:vm,points_vert:xm,points_frag:_m,shadow_vert:ym,shadow_frag:Mm,sprite_vert:bm,sprite_frag:Sm},ot={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},dn={basic:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ue([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ue([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Et(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ue([ot.points,ot.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ue([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ue([ot.common,ot.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ue([ot.sprite,ot.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ue([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ue([ot.lights,ot.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};dn.physical={uniforms:Ue([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ir={r:0,b:0,g:0},ii=new Oe,wm=new Kt;function Em(i,t,e,n,s,r,o){const a=new Et(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function v(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const _=v(y);_===null?d(a,l):_&&_.isColor&&(d(_,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const _=v(x);_&&(_.isCubeTexture||_.mapping===Br)?(h===void 0&&(h=new st(new ie(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Zi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(x.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wm.makeRotationFromEuler(ii)),h.material.toneMapped=$t.getTransfer(_.colorSpace)!==te,(u!==_||f!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new st(new gn(2,2),new In({name:"BackgroundMaterial",uniforms:Zi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=$t.getTransfer(_.colorSpace)!==te,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(ir,Ah(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:g,addToRenderList:m}}function Tm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,E,D,I,B){let V=!1;const G=u(I,D,E);r!==G&&(r=G,c(r.object)),V=p(M,I,D,B),V&&v(M,I,D,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(M,E,D,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,E,D){const I=D.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let V=B[E.id];V===void 0&&(V={},B[E.id]=V);let G=V[I];return G===void 0&&(G=f(l()),V[I]=G),G}function f(M){const E=[],D=[],I=[];for(let B=0;B<e;B++)E[B]=0,D[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:D,attributeDivisors:I,object:M,attributes:{},index:null}}function p(M,E,D,I){const B=r.attributes,V=E.attributes;let G=0;const z=D.getAttributes();for(const O in z)if(z[O].location>=0){const at=B[O];let ct=V[O];if(ct===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),at===void 0||at.attribute!==ct||ct&&at.data!==ct.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function v(M,E,D,I){const B={},V=E.attributes;let G=0;const z=D.getAttributes();for(const O in z)if(z[O].location>=0){let at=V[O];at===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));const ct={};ct.attribute=at,at&&at.data&&(ct.data=at.data),B[O]=ct,G++}r.attributes=B,r.attributesNum=G,r.index=I}function g(){const M=r.newAttributes;for(let E=0,D=M.length;E<D;E++)M[E]=0}function m(M){d(M,0)}function d(M,E){const D=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;D[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),B[M]!==E&&(i.vertexAttribDivisor(M,E),B[M]=E)}function y(){const M=r.newAttributes,E=r.enabledAttributes;for(let D=0,I=E.length;D<I;D++)E[D]!==M[D]&&(i.disableVertexAttribArray(D),E[D]=0)}function x(M,E,D,I,B,V,G){G===!0?i.vertexAttribIPointer(M,E,D,B,V):i.vertexAttribPointer(M,E,D,I,B,V)}function _(M,E,D,I){g();const B=I.attributes,V=D.getAttributes(),G=E.defaultAttributeValues;for(const z in V){const O=V[z];if(O.location>=0){let j=B[z];if(j===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const at=j.normalized,ct=j.itemSize,Pt=t.get(j);if(Pt===void 0)continue;const zt=Pt.buffer,Y=Pt.type,tt=Pt.bytesPerElement,vt=Y===i.INT||Y===i.UNSIGNED_INT||j.gpuType===za;if(j.isInterleavedBufferAttribute){const it=j.data,St=it.stride,Dt=j.offset;if(it.isInstancedInterleavedBuffer){for(let Bt=0;Bt<O.locationSize;Bt++)d(O.location+Bt,it.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Bt=0;Bt<O.locationSize;Bt++)m(O.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Bt=0;Bt<O.locationSize;Bt++)x(O.location+Bt,ct/O.locationSize,Y,at,St*tt,(Dt+ct/O.locationSize*Bt)*tt,vt)}else{if(j.isInstancedBufferAttribute){for(let it=0;it<O.locationSize;it++)d(O.location+it,j.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let it=0;it<O.locationSize;it++)m(O.location+it);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let it=0;it<O.locationSize;it++)x(O.location+it,ct/O.locationSize,Y,at,ct*tt,ct/O.locationSize*it*tt,vt)}}else if(G!==void 0){const at=G[z];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(O.location,at);break;case 3:i.vertexAttrib3fv(O.location,at);break;case 4:i.vertexAttrib4fv(O.location,at);break;default:i.vertexAttrib1fv(O.location,at)}}}}y()}function L(){P();for(const M in n){const E=n[M];for(const D in E){const I=E[D];for(const B in I)h(I[B].object),delete I[B];delete E[D]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const E=n[M.id];for(const D in E){const I=E[D];for(const B in I)h(I[B].object),delete I[B];delete E[D]}delete n[M.id]}function T(M){for(const E in n){const D=n[E];if(D[M.id]===void 0)continue;const I=D[M.id];for(const B in I)h(I[B].object),delete I[B];delete D[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Am(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*f[g];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==cn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==pn&&!P)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:L,maxSamples:A}}function Rm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Hn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let _=d.clippingState||null;l.value=_,_=h(v,f,x,p);for(let L=0;L!==x;++L)_[L]=e[L];d.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=p;x!==g;++x,_+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Pm(i){let t=new WeakMap;function e(o,a){return a===Zo?o.mapping=Yi:a===Jo&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zo||a===Jo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ih extends Ch{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,Jl=[.125,.215,.35,.446,.526,.582],ai=20,_o=new Ih,Ql=new Et;let yo=null,Mo=0,bo=0,So=!1;const ri=(1+Math.sqrt(5))/2,Ii=1/ri,tc=[new C(-ri,Ii,0),new C(ri,Ii,0),new C(-Ii,0,ri),new C(Ii,0,ri),new C(0,ri,-Ii),new C(0,ri,Ii),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yo,Mo,bo),this._renderer.xr.enabled=So,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),bo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Is,format:cn,colorSpace:ts,depthBuffer:!1},s=nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Im(r)),this._blurMaterial=Lm(r,t,e)}return s}_compileMaterial(t){const e=new st(this._lodPlanes[0],t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,n,s){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ql),h.toneMapping=Xn,h.autoClear=!1;const p=new Ht({name:"PMREM.Background",side:me,depthWrite:!1,depthTest:!1}),v=new st(new ie,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Ql),g=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;sr(s,y*x,d>2?x:0,x,x),h.setRenderTarget(s),g&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Yi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new st(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tc[(s-r-1)%tc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const d=[];let y=0;for(let T=0;T<ai;++T){const P=T/g,b=Math.exp(-P*P/2);d.push(b),T===0?y+=b:T<m&&(y+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const _=this._sizeLods[s],L=3*_*(s>x-Bi?s-x+Bi:0),A=4*(this._cubeSize-_);sr(e,L,A,3*_,2*_),l.setRenderTarget(e),l.render(u,_o)}}function Im(i){const t=[],e=[],n=[];let s=i;const r=i-Bi+1+Jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Bi?l=Jl[o-i+Bi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,g=3,m=2,d=1,y=new Float32Array(g*v*p),x=new Float32Array(m*v*p),_=new Float32Array(d*v*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,b=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(b,g*v*A),x.set(f,m*v*A);const M=[A,A,A,A,A,A];_.set(M,d*v*A)}const L=new oe;L.setAttribute("position",new Ae(y,g)),L.setAttribute("uv",new Ae(x,m)),L.setAttribute("faceIndex",new Ae(_,d)),t.push(L),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nc(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lm(i,t,e){const n=new Float32Array(ai),s=new C(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ic(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function sc(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function Dm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zo||l===Jo,h=l===Yi||l===$i;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ec(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ec(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Um(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Nm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)t.remove(g[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)t.update(g[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,v=u.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let x=0,_=y.length;x<_;x+=3){const L=y[x+0],A=y[x+1],T=y[x+2];f.push(L,A,A,T,T,L)}}else if(v!==void 0){const y=v.array;g=v.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const L=x+0,A=x+1,T=x+2;f.push(L,A,A,T,T,L)}}else return;const m=new(Mh(f)?Th:Eh)(f,1);m.version=g;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function km(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,f*o,v),e.update(p,n,v))}function h(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];e.update(m,n,1)}function u(f,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,g,0,v);let d=0;for(let y=0;y<v;y++)d+=p[y]*g[y];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Om(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const T=new Float32Array(L*A*4*u),P=new Sh(T,L,A,u);P.type=pn,P.needsUpdate=!0;const b=_*4;for(let E=0;E<u;E++){const D=d[E],I=y[E],B=x[E],V=L*A*4*E;for(let G=0;G<D.count;G++){const z=G*b;v===!0&&(s.fromBufferAttribute(D,G),T[V+z+0]=s.x,T[V+z+1]=s.y,T[V+z+2]=s.z,T[V+z+3]=0),g===!0&&(s.fromBufferAttribute(I,G),T[V+z+4]=s.x,T[V+z+5]=s.y,T[V+z+6]=s.z,T[V+z+7]=0),m===!0&&(s.fromBufferAttribute(B,G),T[V+z+8]=s.x,T[V+z+9]=s.y,T[V+z+10]=s.z,T[V+z+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new rt(L,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Bm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Lh extends Le{constructor(t,e,n,s,r,o,a,l,c,h=Vi){if(h!==Vi&&h!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vi&&(n=fi),n===void 0&&h===Ki&&(n=ji),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=l!==void 0?l:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dh=new Le,rc=new Lh(1,1),Uh=new Sh,Nh=new wd,kh=new Rh,oc=[],ac=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=oc[s];if(r===void 0&&(r=new Float32Array(s),oc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gr(i,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function Wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),be(e,n)}}function Xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),be(e,n)}}function qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;lc.set(n),i.uniformMatrix4fv(this.addr,!1,lc),be(e,n)}}function Ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function t0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function e0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rc.compareFunction=yh,r=rc):r=Dh,e.setTexture2D(t||r,s)}function n0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nh,s)}function i0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kh,s)}function s0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Uh,s)}function r0(i){switch(i){case 5126:return zm;case 35664:return Hm;case 35665:return Gm;case 35666:return Vm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return $m;case 35668:case 35672:return jm;case 35669:case 35673:return Km;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(i,t){i.uniform1fv(this.addr,t)}function a0(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function l0(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function c0(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function h0(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function u0(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function d0(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f0(i,t){i.uniform1iv(this.addr,t)}function p0(i,t){i.uniform2iv(this.addr,t)}function m0(i,t){i.uniform3iv(this.addr,t)}function g0(i,t){i.uniform4iv(this.addr,t)}function v0(i,t){i.uniform1uiv(this.addr,t)}function x0(i,t){i.uniform2uiv(this.addr,t)}function _0(i,t){i.uniform3uiv(this.addr,t)}function y0(i,t){i.uniform4uiv(this.addr,t)}function M0(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Dh,r[o])}function b0(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nh,r[o])}function S0(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kh,r[o])}function w0(i,t,e){const n=this.cache,s=t.length,r=Gr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Uh,r[o])}function E0(i){switch(i){case 5126:return o0;case 35664:return a0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return x0;case 36295:return _0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return b0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return w0}}class T0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=r0(e.type)}}class A0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E0(e.type)}}class C0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function uc(i,t){i.seq.push(t),i.map[t.id]=t}function R0(i,t,e){const n=i.name,s=n.length;for(wo.lastIndex=0;;){const r=wo.exec(n),o=wo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uc(e,c===void 0?new T0(a,i,t):new A0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new C0(a),uc(e,u)),e=u}}}class Er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);R0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const P0=37297;let I0=0;function L0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const fc=new kt;function D0(i){$t._getMatrix(fc,$t.workingColorSpace,i);const t=`mat3( ${fc.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+L0(i.getShaderSource(t),o)}else return s}function U0(i,t){const e=D0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N0(i,t){let e;switch(t){case Zu:e="Linear";break;case Ju:e="Reinhard";break;case Qu:e="Cineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case id:e="Neutral";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new C;function k0(){$t.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function O0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ms(i){return i!==""}function mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ra(i){return i.replace(z0,G0)}const H0=new Map;function G0(i,t){let e=Ot[t];if(e===void 0){const n=H0.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ra(e)}const V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace(V0,W0)}function W0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function X0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function q0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case $i:t="ENVMAP_TYPE_CUBE";break;case Br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Y0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function $0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lh:t="ENVMAP_BLENDING_MULTIPLY";break;case ju:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function j0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function K0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=X0(e),c=q0(e),h=Y0(e),u=$0(e),f=j0(e),p=F0(e),v=O0(r),g=s.createProgram();let m,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ms).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ms).join(`
`),d.length>0&&(d+=`
`)):(m=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),d=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Xn?N0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,U0("linearToOutputTexel",e.outputColorSpace),k0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),o=Ra(o),o=mc(o,e),o=gc(o,e),a=Ra(a),a=mc(a,e),a=gc(a,e),o=vc(o),a=vc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+o,_=y+d+a,L=dc(s,s.VERTEX_SHADER,x),A=dc(s,s.FRAGMENT_SHADER,_);s.attachShader(g,L),s.attachShader(g,A),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(E){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g).trim(),I=s.getShaderInfoLog(L).trim(),B=s.getShaderInfoLog(A).trim();let V=!0,G=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,L,A);else{const z=pc(s,L,"vertex"),O=pc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+D+`
`+z+`
`+O)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(I===""||B==="")&&(G=!1);G&&(E.diagnostics={runnable:V,programLog:D,vertexShader:{log:I,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(L),s.deleteShader(A),P=new Er(s,g),b=B0(s,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,P0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=A,this}let Z0=0;class J0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Q0(t),e.set(t,n)),n}}class Q0{constructor(t){this.id=Z0++,this.code=t,this.usedTimes=0}}function tg(i,t,e,n,s,r,o){const a=new Ya,l=new J0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,E,D,I){const B=D.fog,V=I.geometry,G=b.isMeshStandardMaterial?D.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),O=z&&z.mapping===Br?z.image.height:null,j=v[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=at!==void 0?at.length:0;let Pt=0;V.morphAttributes.position!==void 0&&(Pt=1),V.morphAttributes.normal!==void 0&&(Pt=2),V.morphAttributes.color!==void 0&&(Pt=3);let zt,Y,tt,vt;if(j){const Qt=dn[j];zt=Qt.vertexShader,Y=Qt.fragmentShader}else zt=b.vertexShader,Y=b.fragmentShader,l.update(b),tt=l.getVertexShaderID(b),vt=l.getFragmentShaderID(b);const it=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Dt=I.isInstancedMesh===!0,Bt=I.isBatchedMesh===!0,de=!!b.map,qt=!!b.matcap,ge=!!z,F=!!b.aoMap,Ye=!!b.lightMap,Vt=!!b.bumpMap,Wt=!!b.normalMap,At=!!b.displacementMap,ae=!!b.emissiveMap,Tt=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,W=b.clearcoat>0,Z=b.dispersion>0,Q=b.iridescence>0,K=b.sheen>0,Mt=b.transmission>0,ht=S&&!!b.anisotropyMap,pt=W&&!!b.clearcoatMap,Yt=W&&!!b.clearcoatNormalMap,et=W&&!!b.clearcoatRoughnessMap,mt=Q&&!!b.iridescenceMap,Ct=Q&&!!b.iridescenceThicknessMap,It=K&&!!b.sheenColorMap,gt=K&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Ft=!!b.specularColorMap,se=!!b.specularIntensityMap,U=Mt&&!!b.transmissionMap,lt=Mt&&!!b.thicknessMap,$=!!b.gradientMap,J=!!b.alphaMap,ft=b.alphaTest>0,ut=!!b.alphaHash,Ut=!!b.extensions;let pe=Xn;b.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(pe=i.toneMapping);const Re={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:zt,fragmentShader:Y,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&I._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&I.instanceColor!==null,instancingMorph:Dt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ts,alphaToCoverage:!!b.alphaToCoverage,map:de,matcap:qt,envMap:ge,envMapMode:ge&&z.mapping,envMapCubeUVHeight:O,aoMap:F,lightMap:Ye,bumpMap:Vt,normalMap:Wt,displacementMap:f&&At,emissiveMap:ae,normalMapObjectSpace:Wt&&b.normalMapType===ad,normalMapTangentSpace:Wt&&b.normalMapType===_h,metalnessMap:Tt,roughnessMap:R,anisotropy:S,anisotropyMap:ht,clearcoat:W,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:et,dispersion:Z,iridescence:Q,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:K,sheenColorMap:It,sheenRoughnessMap:gt,specularMap:Xt,specularColorMap:Ft,specularIntensityMap:se,transmission:Mt,transmissionMap:U,thicknessMap:lt,gradientMap:$,opaque:b.transparent===!1&&b.blending===Gi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:b.combine,mapUv:de&&g(b.map.channel),aoMapUv:F&&g(b.aoMap.channel),lightMapUv:Ye&&g(b.lightMap.channel),bumpMapUv:Vt&&g(b.bumpMap.channel),normalMapUv:Wt&&g(b.normalMap.channel),displacementMapUv:At&&g(b.displacementMap.channel),emissiveMapUv:ae&&g(b.emissiveMap.channel),metalnessMapUv:Tt&&g(b.metalnessMap.channel),roughnessMapUv:R&&g(b.roughnessMap.channel),anisotropyMapUv:ht&&g(b.anisotropyMap.channel),clearcoatMapUv:pt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(b.sheenRoughnessMap.channel),specularMapUv:Xt&&g(b.specularMap.channel),specularColorMapUv:Ft&&g(b.specularColorMap.channel),specularIntensityMapUv:se&&g(b.specularIntensityMap.channel),transmissionMapUv:U&&g(b.transmissionMap.channel),thicknessMapUv:lt&&g(b.thicknessMap.channel),alphaMapUv:J&&g(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Wt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!V.attributes.uv&&(de||J),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:I.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&$t.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:ae&&b.emissiveMap.isVideoTexture===!0&&$t.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ce,flipSided:b.side===me,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function d(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const E in b.defines)M.push(E),M.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=v[b.type];let E;if(M){const D=dn[M];E=kd.clone(D.uniforms)}else E=b.uniforms;return E}function L(b,M){let E;for(let D=0,I=h.length;D<I;D++){const B=h[D];if(B.cacheKey===M){E=B,++E.usedTimes;break}}return E===void 0&&(E=new K0(i,M,b,r),h.push(E)),E}function A(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:L,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function eg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ng(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function _c(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,v,g,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=g,d.group=m),t++,d}function a(u,f,p,v,g,m){const d=o(u,f,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,v,g,m){const d=o(u,f,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||ng),n.length>1&&n.sort(f||_c),s.length>1&&s.sort(f||_c)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ig(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new yc,i.set(n,[o])):s>=r.length?(o=new yc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function sg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Et};break;case"SpotLight":e={position:new C,direction:new C,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let og=0;function ag(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lg(i){const t=new sg,e=rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new Kt,o=new Kt;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,v=0,g=0,m=0,d=0,y=0,x=0,_=0,L=0,A=0,T=0;c.sort(ag);for(let b=0,M=c.length;b<M;b++){const E=c[b],D=E.color,I=E.intensity,B=E.distance,V=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=D.r*I,u+=D.g*I,f+=D.b*I;else if(E.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(E.sh.coefficients[G],I);T++}else if(E.isDirectionalLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const z=E.shadow,O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=E.shadow.matrix,y++}n.directional[p]=G,p++}else if(E.isSpotLight){const G=t.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(D).multiplyScalar(I),G.distance=B,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,n.spot[g]=G;const z=E.shadow;if(E.map&&(n.spotLightMap[L]=E.map,L++,z.updateMatrices(E),E.castShadow&&A++),n.spotLightMatrix[g]=z.matrix,E.castShadow){const O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.spotShadow[g]=O,n.spotShadowMap[g]=V,_++}g++}else if(E.isRectAreaLight){const G=t.get(E);G.color.copy(D).multiplyScalar(I),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=G,m++}else if(E.isPointLight){const G=t.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity),G.distance=E.distance,G.decay=E.decay,E.castShadow){const z=E.shadow,O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,n.pointShadow[v]=O,n.pointShadowMap[v]=V,n.pointShadowMatrix[v]=E.shadow.matrix,x++}n.point[v]=G,v++}else if(E.isHemisphereLight){const G=t.get(E);G.skyColor.copy(E.color).multiplyScalar(I),G.groundColor.copy(E.groundColor).multiplyScalar(I),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=v,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=T,n.version=og++)}function l(c,h){let u=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const x=c[d];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Mc(i){const t=new lg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function cg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mc(i),t.set(s,[a])):r>=o.length?(a=new Mc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class hg extends Zn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ug extends Zn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function pg(i,t,e){let n=new $a;const s=new rt,r=new rt,o=new ne,a=new hg({depthPacking:od}),l=new ug,c={},h=e.maxTextureSize,u={[$n]:me,[me]:$n,[Ce]:Ce},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:dg,fragmentShader:fg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new oe;v.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new st(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let d=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Wn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const I=d!==Tn&&this.type===Tn,B=d===Tn&&this.type!==Tn;for(let V=0,G=A.length;V<G;V++){const z=A[V],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const j=O.getFrameExtents();if(s.multiply(j),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||I===!0||B===!0){const ct=this.type!==Tn?{minFilter:Xe,magFilter:Xe}:{};O.map!==null&&O.map.dispose(),O.map=new pi(s.x,s.y,ct),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const at=O.getViewportCount();for(let ct=0;ct<at;ct++){const Pt=O.getViewport(ct);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),D.viewport(o),O.updateMatrices(z,ct),n=O.getFrustum(),_(T,P,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Tn&&y(O,P),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,E)};function y(A,T){const P=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,p,g,null)}function x(A,T,P,b){let M=null;const E=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)M=E;else if(M=P.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=M.uuid,I=T.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let V=B[I];V===void 0&&(V=M.clone(),B[I]=V,T.addEventListener("dispose",L)),M=V}if(M.visible=T.visible,M.wireframe=T.wireframe,b===Tn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=i.properties.get(M);D.light=P}return M}function _(A,T,P,b,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const I=t.update(A),B=A.material;if(Array.isArray(B)){const V=I.groups;for(let G=0,z=V.length;G<z;G++){const O=V[G],j=B[O.materialIndex];if(j&&j.visible){const at=x(A,j,b,M);A.onBeforeShadow(i,A,T,P,I,at,O),i.renderBufferDirect(P,null,I,at,A,O),A.onAfterShadow(i,A,T,P,I,at,O)}}}else if(B.visible){const V=x(A,B,b,M);A.onBeforeShadow(i,A,T,P,I,V,null),i.renderBufferDirect(P,null,I,V,A,null),A.onAfterShadow(i,A,T,P,I,V,null)}}const D=A.children;for(let I=0,B=D.length;I<B;I++)_(D[I],T,P,b,M)}function L(A){A.target.removeEventListener("dispose",L);for(const P in c){const b=c[P],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const mg={[Wo]:Xo,[qo]:jo,[Yo]:Ko,[qi]:$o,[Xo]:Wo,[jo]:qo,[Ko]:Yo,[$o]:qi};function gg(i,t){function e(){let U=!1;const lt=new ne;let $=null;const J=new ne(0,0,0,0);return{setMask:function(ft){$!==ft&&!U&&(i.colorMask(ft,ft,ft,ft),$=ft)},setLocked:function(ft){U=ft},setClear:function(ft,ut,Ut,pe,Re){Re===!0&&(ft*=pe,ut*=pe,Ut*=pe),lt.set(ft,ut,Ut,pe),J.equals(lt)===!1&&(i.clearColor(ft,ut,Ut,pe),J.copy(lt))},reset:function(){U=!1,$=null,J.set(-1,0,0,0)}}}function n(){let U=!1,lt=!1,$=null,J=null,ft=null;return{setReversed:function(ut){if(lt!==ut){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const pe=ft;ft=null,this.setClear(pe)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?it(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(ut){$!==ut&&!U&&(i.depthMask(ut),$=ut)},setFunc:function(ut){if(lt&&(ut=mg[ut]),J!==ut){switch(ut){case Wo:i.depthFunc(i.NEVER);break;case Xo:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ut}},setLocked:function(ut){U=ut},setClear:function(ut){ft!==ut&&(lt&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){U=!1,$=null,J=null,ft=null,lt=!1}}}function s(){let U=!1,lt=null,$=null,J=null,ft=null,ut=null,Ut=null,pe=null,Re=null;return{setTest:function(Qt){U||(Qt?it(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Qt){lt!==Qt&&!U&&(i.stencilMask(Qt),lt=Qt)},setFunc:function(Qt,tn,xn){($!==Qt||J!==tn||ft!==xn)&&(i.stencilFunc(Qt,tn,xn),$=Qt,J=tn,ft=xn)},setOp:function(Qt,tn,xn){(ut!==Qt||Ut!==tn||pe!==xn)&&(i.stencilOp(Qt,tn,xn),ut=Qt,Ut=tn,pe=xn)},setLocked:function(Qt){U=Qt},setClear:function(Qt){Re!==Qt&&(i.clearStencil(Qt),Re=Qt)},reset:function(){U=!1,lt=null,$=null,J=null,ft=null,ut=null,Ut=null,pe=null,Re=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,d=null,y=null,x=null,_=null,L=null,A=null,T=new Et(0,0,0),P=0,b=!1,M=null,E=null,D=null,I=null,B=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=z>=2);let j=null,at={};const ct=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),zt=new ne().fromArray(ct),Y=new ne().fromArray(Pt);function tt(U,lt,$,J){const ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(U,ut),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<$;Ut++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(lt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}const vt={};vt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(qi),Vt(!1),Wt(Al),it(i.CULL_FACE),F(Wn);function it(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function St(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Dt(U,lt){return u[U]!==lt?(i.bindFramebuffer(U,lt),u[U]=lt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Bt(U,lt){let $=p,J=!1;if(U){$=f.get(lt),$===void 0&&($=[],f.set(lt,$));const ft=U.textures;if($.length!==ft.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ut=ft.length;ut<Ut;ut++)$[ut]=i.COLOR_ATTACHMENT0+ut;$.length=ft.length,J=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,J=!0);J&&i.drawBuffers($)}function de(U){return v!==U?(i.useProgram(U),v=U,!0):!1}const qt={[oi]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};qt[Uu]=i.MIN,qt[Nu]=i.MAX;const ge={[ku]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function F(U,lt,$,J,ft,ut,Ut,pe,Re,Qt){if(U===Wn){g===!0&&(St(i.BLEND),g=!1);return}if(g===!1&&(it(i.BLEND),g=!0),U!==Iu){if(U!==m||Qt!==b){if((d!==oi||_!==oi)&&(i.blendEquation(i.FUNC_ADD),d=oi,_=oi),Qt)switch(U){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ke:i.blendFunc(i.ONE,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ke:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,L=null,A=null,T.set(0,0,0),P=0,m=U,b=Qt}return}ft=ft||lt,ut=ut||$,Ut=Ut||J,(lt!==d||ft!==_)&&(i.blendEquationSeparate(qt[lt],qt[ft]),d=lt,_=ft),($!==y||J!==x||ut!==L||Ut!==A)&&(i.blendFuncSeparate(ge[$],ge[J],ge[ut],ge[Ut]),y=$,x=J,L=ut,A=Ut),(pe.equals(T)===!1||Re!==P)&&(i.blendColor(pe.r,pe.g,pe.b,Re),T.copy(pe),P=Re),m=U,b=!1}function Ye(U,lt){U.side===Ce?St(i.CULL_FACE):it(i.CULL_FACE);let $=U.side===me;lt&&($=!$),Vt($),U.blending===Gi&&U.transparent===!1?F(Wn):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Wt(U){U!==Cu?(it(i.CULL_FACE),U!==E&&(U===Al?i.cullFace(i.BACK):U===Ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),E=U}function At(U){U!==D&&(G&&i.lineWidth(U),D=U)}function ae(U,lt,$){U?(it(i.POLYGON_OFFSET_FILL),(I!==lt||B!==$)&&(i.polygonOffset(lt,$),I=lt,B=$)):St(i.POLYGON_OFFSET_FILL)}function Tt(U){U?it(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+V-1),j!==U&&(i.activeTexture(U),j=U)}function S(U,lt,$){$===void 0&&(j===null?$=i.TEXTURE0+V-1:$=j);let J=at[$];J===void 0&&(J={type:void 0,texture:void 0},at[$]=J),(J.type!==U||J.texture!==lt)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(U,lt||vt[U]),J.type=U,J.texture=lt)}function W(){const U=at[j];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(U){zt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),zt.copy(U))}function gt(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function Xt(U,lt){let $=c.get(lt);$===void 0&&($=new WeakMap,c.set(lt,$));let J=$.get(U);J===void 0&&(J=i.getUniformBlockIndex(lt,U.name),$.set(U,J))}function Ft(U,lt){const J=c.get(lt).get(U);l.get(lt)!==J&&(i.uniformBlockBinding(lt,J,U.__bindingPointIndex),l.set(lt,J))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,at={},u={},f=new WeakMap,p=[],v=null,g=!1,m=null,d=null,y=null,x=null,_=null,L=null,A=null,T=new Et(0,0,0),P=0,b=!1,M=null,E=null,D=null,I=null,B=null,zt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:St,bindFramebuffer:Dt,drawBuffers:Bt,useProgram:de,setBlending:F,setMaterial:Ye,setFlipSided:Vt,setCullFace:Wt,setLineWidth:At,setPolygonOffset:ae,setScissorTest:Tt,activeTexture:R,bindTexture:S,unbindTexture:W,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Xt,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:et,texSubImage2D:K,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:pt,scissor:It,viewport:gt,reset:se}}function bc(i,t,e,n){const s=vg(n);switch(e){case fh:return i*t;case mh:return i*t;case gh:return i*t*2;case Va:return i*t/s.components*s.byteLength;case Wa:return i*t/s.components*s.byteLength;case vh:return i*t*2/s.components*s.byteLength;case Xa:return i*t*2/s.components*s.byteLength;case ph:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case qa:return i*t*4/s.components*s.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(i,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(i,8)*Math.max(t,8)/2;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wr:case ba:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xh:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vg(i){switch(i){case Pn:case hh:return{byteLength:1,components:1};case Ts:case uh:case Is:return{byteLength:2,components:1};case Ha:case Ga:return{byteLength:2,components:4};case fi:case za:case pn:return{byteLength:4,components:1};case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,S){return p?new OffscreenCanvas(R,S):Pr("canvas")}function g(R,S,W){let Z=1;const Q=Tt(R);if((Q.width>W||Q.height>W)&&(Z=W/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*Q.width),Mt=Math.floor(Z*Q.height);u===void 0&&(u=v(K,Mt));const ht=S?v(K,Mt):u;return ht.width=K,ht.height=Mt,ht.getContext("2d").drawImage(R,0,0,K,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Mt+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,S,W,Z,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===i.RED&&(W===i.FLOAT&&(K=i.R32F),W===i.HALF_FLOAT&&(K=i.R16F),W===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.R8UI),W===i.UNSIGNED_SHORT&&(K=i.R16UI),W===i.UNSIGNED_INT&&(K=i.R32UI),W===i.BYTE&&(K=i.R8I),W===i.SHORT&&(K=i.R16I),W===i.INT&&(K=i.R32I)),S===i.RG&&(W===i.FLOAT&&(K=i.RG32F),W===i.HALF_FLOAT&&(K=i.RG16F),W===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RG8UI),W===i.UNSIGNED_SHORT&&(K=i.RG16UI),W===i.UNSIGNED_INT&&(K=i.RG32UI),W===i.BYTE&&(K=i.RG8I),W===i.SHORT&&(K=i.RG16I),W===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RGB8UI),W===i.UNSIGNED_SHORT&&(K=i.RGB16UI),W===i.UNSIGNED_INT&&(K=i.RGB32UI),W===i.BYTE&&(K=i.RGB8I),W===i.SHORT&&(K=i.RGB16I),W===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),W===i.UNSIGNED_INT&&(K=i.RGBA32UI),W===i.BYTE&&(K=i.RGBA8I),W===i.SHORT&&(K=i.RGBA16I),W===i.INT&&(K=i.RGBA32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const Mt=Q?zr:$t.getTransfer(Z);W===i.FLOAT&&(K=i.RGBA32F),W===i.HALF_FLOAT&&(K=i.RGBA16F),W===i.UNSIGNED_BYTE&&(K=Mt===te?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(R,S){let W;return R?S===null||S===fi||S===ji?W=i.DEPTH24_STENCIL8:S===pn?W=i.DEPTH32F_STENCIL8:S===Ts&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===fi||S===ji?W=i.DEPTH_COMPONENT24:S===pn?W=i.DEPTH_COMPONENT32F:S===Ts&&(W=i.DEPTH_COMPONENT16),W}function L(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function T(R){const S=R.target;S.removeEventListener("dispose",T),M(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const W=R.source,Z=f.get(W);if(Z){const Q=Z[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(R),Object.keys(Z).length===0&&f.delete(W)}n.remove(R)}function b(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const W=R.source,Z=f.get(W);delete Z[S.__cacheKey],o.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let Q=0;Q<S.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=R.textures;for(let Z=0,Q=W.length;Z<Q;Z++){const K=n.get(W[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(W[Z])}n.remove(R)}let E=0;function D(){E=0}function I(){const R=E;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),E+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function V(R,S){const W=n.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,R,S);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function G(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){Y(W,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function z(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){Y(W,R,S);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function O(R,S){const W=n.get(R);if(R.version>0&&W.__version!==R.version){tt(W,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const j={[Qo]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},at={[Xe]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ct={[ld]:i.NEVER,[pd]:i.ALWAYS,[cd]:i.LESS,[yh]:i.LEQUAL,[hd]:i.EQUAL,[fd]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function Pt(R,S){if(S.type===pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===jr||S.magFilter===Bs||S.magFilter===hi||S.minFilter===ln||S.minFilter===jr||S.minFilter===Bs||S.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xe||S.minFilter!==Bs&&S.minFilter!==hi||S.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function zt(R,S){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const K=B(S);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[K].usedTimes++;const Mt=Q[R.__cacheKey];Mt!==void 0&&(Q[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&b(S)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return W}function Y(R,S,W){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=zt(R,S),K=S.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+W);const Mt=n.get(K);if(K.version!==Mt.__version||Q===!0){e.activeTexture(i.TEXTURE0+W);const ht=$t.getPrimaries($t.workingColorSpace),pt=S.colorSpace===Gn?null:$t.getPrimaries(S.colorSpace),Yt=S.colorSpace===Gn||ht===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=g(S.image,!1,s.maxTextureSize);et=ae(S,et);const mt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type);let It=x(S.internalFormat,mt,Ct,S.colorSpace,S.isVideoTexture);Pt(Z,S);let gt;const Xt=S.mipmaps,Ft=S.isVideoTexture!==!0,se=Mt.__version===void 0||Q===!0,U=K.dataReady,lt=L(S,et);if(S.isDepthTexture)It=_(S.format===Ki,S.type),se&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,It,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,mt,Ct,null));else if(S.isDataTexture)if(Xt.length>0){Ft&&se&&e.texStorage2D(i.TEXTURE_2D,lt,It,Xt[0].width,Xt[0].height);for(let $=0,J=Xt.length;$<J;$++)gt=Xt[$],Ft?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,$,It,gt.width,gt.height,0,mt,Ct,gt.data);S.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(i.TEXTURE_2D,lt,It,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,mt,Ct,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,It,Xt[0].width,Xt[0].height,et.depth);for(let $=0,J=Xt.length;$<J;$++)if(gt=Xt[$],S.format!==cn)if(mt!==null)if(Ft){if(U)if(S.layerUpdates.size>0){const ft=bc(gt.width,gt.height,S.format,S.type);for(const ut of S.layerUpdates){const Ut=gt.data.subarray(ut*ft/gt.data.BYTES_PER_ELEMENT,(ut+1)*ft/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ut,gt.width,gt.height,1,mt,Ut)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,It,gt.width,gt.height,et.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,gt.width,gt.height,et.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,It,gt.width,gt.height,et.depth,0,mt,Ct,gt.data)}else{Ft&&se&&e.texStorage2D(i.TEXTURE_2D,lt,It,Xt[0].width,Xt[0].height);for(let $=0,J=Xt.length;$<J;$++)gt=Xt[$],S.format!==cn?mt!==null?Ft?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,It,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,$,It,gt.width,gt.height,0,mt,Ct,gt.data)}else if(S.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,It,et.width,et.height,et.depth),U)if(S.layerUpdates.size>0){const $=bc(et.width,et.height,S.format,S.type);for(const J of S.layerUpdates){const ft=et.data.subarray(J*$/et.data.BYTES_PER_ELEMENT,(J+1)*$/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,mt,Ct,ft)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(S.isData3DTexture)Ft?(se&&e.texStorage3D(i.TEXTURE_3D,lt,It,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,It,et.width,et.height,et.depth,0,mt,Ct,et.data);else if(S.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(i.TEXTURE_2D,lt,It,et.width,et.height);else{let $=et.width,J=et.height;for(let ft=0;ft<lt;ft++)e.texImage2D(i.TEXTURE_2D,ft,It,$,J,0,mt,Ct,null),$>>=1,J>>=1}}else if(Xt.length>0){if(Ft&&se){const $=Tt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,lt,It,$.width,$.height)}for(let $=0,J=Xt.length;$<J;$++)gt=Xt[$],Ft?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,$,It,mt,Ct,gt);S.generateMipmaps=!1}else if(Ft){if(se){const $=Tt(et);e.texStorage2D(i.TEXTURE_2D,lt,It,$.width,$.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Ct,et);m(S)&&d(Z),Mt.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function tt(R,S,W){if(S.image.length!==6)return;const Z=zt(R,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const K=n.get(Q);if(Q.version!==K.__version||Z===!0){e.activeTexture(i.TEXTURE0+W);const Mt=$t.getPrimaries($t.workingColorSpace),ht=S.colorSpace===Gn?null:$t.getPrimaries(S.colorSpace),pt=S.colorSpace===Gn||Mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!Yt&&!et?mt[J]=g(S.image[J],!0,s.maxCubemapSize):mt[J]=et?S.image[J].image:S.image[J],mt[J]=ae(S,mt[J]);const Ct=mt[0],It=r.convert(S.format,S.colorSpace),gt=r.convert(S.type),Xt=x(S.internalFormat,It,gt,S.colorSpace),Ft=S.isVideoTexture!==!0,se=K.__version===void 0||Z===!0,U=Q.dataReady;let lt=L(S,Ct);Pt(i.TEXTURE_CUBE_MAP,S);let $;if(Yt){Ft&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,Ct.width,Ct.height);for(let J=0;J<6;J++){$=mt[J].mipmaps;for(let ft=0;ft<$.length;ft++){const ut=$[ft];S.format!==cn?It!==null?Ft?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,It,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,It,gt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Xt,ut.width,ut.height,0,It,gt,ut.data)}}}else{if($=S.mipmaps,Ft&&se){$.length>0&&lt++;const J=Tt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Xt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,It,gt,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,mt[J].width,mt[J].height,0,It,gt,mt[J].data);for(let ft=0;ft<$.length;ft++){const Ut=$[ft].image[J].image;Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ut.width,Ut.height,It,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Xt,Ut.width,Ut.height,0,It,gt,Ut.data)}}else{Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,gt,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xt,It,gt,mt[J]);for(let ft=0;ft<$.length;ft++){const ut=$[ft];Ft?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,It,gt,ut.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Xt,It,gt,ut.image[J])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function vt(R,S,W,Z,Q,K){const Mt=r.convert(W.format,W.colorSpace),ht=r.convert(W.type),pt=x(W.internalFormat,Mt,ht,W.colorSpace),Yt=n.get(S),et=n.get(W);if(et.__renderTarget=S,!Yt.__hasExternalTextures){const mt=Math.max(1,S.width>>K),Ct=Math.max(1,S.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,pt,mt,Ct,S.depth,0,Mt,ht,null):e.texImage2D(Q,K,pt,mt,Ct,0,Mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Wt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,et.__webglTexture,0,Vt(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,et.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const Z=S.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,K=_(S.stencilBuffer,Q),Mt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Vt(S);Wt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,K,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,R)}else{const Z=S.textures;for(let Q=0;Q<Z.length;Q++){const K=Z[Q],Mt=r.convert(K.format,K.colorSpace),ht=r.convert(K.type),pt=x(K.internalFormat,Mt,ht,K.colorSpace),Yt=Vt(S);W&&Wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,pt,S.width,S.height):Wt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const Q=Z.__webglTexture,K=Vt(S);if(S.depthTexture.format===Vi)Wt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Ki)Wt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const S=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,R)}else if(W){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),it(S.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),it(S.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(R,S,W){const Z=n.get(R);S!==void 0&&vt(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Dt(R)}function de(R){const S=R.texture,W=n.get(R),Z=n.get(S);R.addEventListener("dispose",T);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,o.memory.textures++),K){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let pt=0;pt<S.mipmaps.length;pt++)W.__webglFramebuffer[ht][pt]=i.createFramebuffer()}else W.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)W.__webglFramebuffer[ht]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ht=0,pt=Q.length;ht<pt;ht++){const Yt=n.get(Q[ht]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Wt(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const pt=Q[ht];W.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);const Yt=r.convert(pt.format,pt.colorSpace),et=r.convert(pt.type),mt=x(pt.internalFormat,Yt,et,pt.colorSpace,R.isXRRenderTarget===!0),Ct=Vt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),it(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)vt(W.__webglFramebuffer[ht][pt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,pt);else vt(W.__webglFramebuffer[ht],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,pt=Q.length;ht<pt;ht++){const Yt=Q[ht],et=n.get(Yt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Pt(i.TEXTURE_2D,Yt),vt(W.__webglFramebuffer,R,Yt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Yt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),Pt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)vt(W.__webglFramebuffer[pt],R,S,i.COLOR_ATTACHMENT0,ht,pt);else vt(W.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ht,0);m(S)&&d(ht),e.unbindTexture()}R.depthBuffer&&Dt(R)}function qt(R){const S=R.textures;for(let W=0,Z=S.length;W<Z;W++){const Q=S[W];if(m(Q)){const K=y(R),Mt=n.get(Q).__webglTexture;e.bindTexture(K,Mt),d(K),e.unbindTexture()}}}const ge=[],F=[];function Ye(R){if(R.samples>0){if(Wt(R)===!1){const S=R.textures,W=R.width,Z=R.height;let Q=i.COLOR_BUFFER_BIT;const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(R),ht=S.length>1;if(ht)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Yt=n.get(S[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,W,Z,0,0,W,Z,Q,i.NEAREST),l===!0&&(ge.length=0,F.length=0,ge.push(i.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(K),F.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[pt]);const Yt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Vt(R){return Math.min(s.maxSamples,R.samples)}function Wt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function At(R){const S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ae(R,S){const W=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ts&&W!==Gn&&($t.getTransfer(W)===te?(Z!==cn||Q!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=D,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Bt,this.setupRenderTarget=de,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Wt}function _g(i,t){function e(n,s=Gn){let r;const o=$t.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.BYTE;if(n===uh)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Is)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===cn)return i.RGBA;if(n===mh)return i.LUMINANCE;if(n===gh)return i.LUMINANCE_ALPHA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Va)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===vh)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===br||n===Sr)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===oa||n===aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===oa)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===aa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===xa||n===_a||n===ya||n===Ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===la)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ga)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_a)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wr||n===ba||n===Sa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===wr)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xh||n===wa||n===Ea||n===Ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class yg extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Te extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sg=`
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

}`;class wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:bg,fragmentShader:Sg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new st(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eg extends es{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,v=null;const g=new wg,m=e.getContextAttributes();let d=null,y=null;const x=[],_=[],L=new rt;let A=null;const T=new We;T.viewport=new ne;const P=new We;P.viewport=new ne;const b=[T,P],M=new yg;let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Eo,x[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Eo,x[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=x[Y];return tt===void 0&&(tt=new Eo,x[Y]=tt),tt.getHandSpace()};function I(Y){const tt=_.indexOf(Y.inputSource);if(tt===-1)return;const vt=x[tt];vt!==void 0&&(vt.update(Y.inputSource,Y.frame,c||o),vt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<x.length;Y++){const tt=_[Y];tt!==null&&(_[Y]=null,x[Y].disconnect(tt))}E=null,D=null,g.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,y=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",B),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new pi(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,vt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Ki:Vi,vt=m.stencil?ji:fi);const St={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new pi(f.textureWidth,f.textureHeight,{format:cn,type:Pn,depthTexture:new Lh(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(Y){for(let tt=0;tt<Y.removed.length;tt++){const vt=Y.removed[tt],it=_.indexOf(vt);it>=0&&(_[it]=null,x[it].disconnect(vt))}for(let tt=0;tt<Y.added.length;tt++){const vt=Y.added[tt];let it=_.indexOf(vt);if(it===-1){for(let Dt=0;Dt<x.length;Dt++)if(Dt>=_.length){_.push(vt),it=Dt;break}else if(_[Dt]===null){_[Dt]=vt,it=Dt;break}if(it===-1)break}const St=x[it];St&&St.connect(vt)}}const G=new C,z=new C;function O(Y,tt,vt){G.setFromMatrixPosition(tt.matrixWorld),z.setFromMatrixPosition(vt.matrixWorld);const it=G.distanceTo(z),St=tt.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,Bt=St[14]/(St[10]-1),de=St[14]/(St[10]+1),qt=(St[9]+1)/St[5],ge=(St[9]-1)/St[5],F=(St[8]-1)/St[0],Ye=(Dt[8]+1)/Dt[0],Vt=Bt*F,Wt=Bt*Ye,At=it/(-F+Ye),ae=At*-F;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ae),Y.translateZ(At),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Tt=Bt+At,R=de+At,S=Vt-ae,W=Wt+(it-ae),Z=qt*de/R*Tt,Q=ge*de/R*Tt;Y.projectionMatrix.makePerspective(S,W,Z,Q,Tt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,vt=Y.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),M.near=P.near=T.near=tt,M.far=P.far=T.far=vt,(E!==M.near||D!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far),T.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,M.layers.mask=T.layers.mask|P.layers.mask;const it=Y.parent,St=M.cameras;j(M,it);for(let Dt=0;Dt<St.length;Dt++)j(St[Dt],it);St.length===2?O(M,T,P):M.projectionMatrix.copy(T.projectionMatrix),at(Y,M,it)};function at(Y,tt,vt){vt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(vt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ca*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ct=null;function Pt(Y,tt){if(h=tt.getViewerPose(c||o),v=tt,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let it=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let Dt=0;Dt<vt.length;Dt++){const Bt=vt[Dt];let de=null;if(p!==null)de=p.getViewport(Bt);else{const ge=u.getViewSubImage(f,Bt);de=ge.viewport,Dt===0&&(t.setRenderTargetTextures(y,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(y))}let qt=b[Dt];qt===void 0&&(qt=new We,qt.layers.enable(Dt),qt.viewport=new ne,b[Dt]=qt),qt.matrix.fromArray(Bt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Bt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(de.x,de.y,de.width,de.height),Dt===0&&(M.matrix.copy(qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(qt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){const Dt=u.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(t,Dt,s.renderState)}}for(let vt=0;vt<x.length;vt++){const it=_[vt],St=x[vt];it!==null&&St!==void 0&&St.update(it,tt,c||o)}ct&&ct(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),v=null}const zt=new Ph;zt.setAnimationLoop(Pt),this.setAnimationLoop=function(Y){ct=Y},this.dispose=function(){}}}const si=new Oe,Tg=new Kt;function Ag(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ah(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===me&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===me&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=t.get(d),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,si.copy(_),si.x*=-1,si.y*=-1,si.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(si)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===me&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const y=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=s[y.id];_===void 0&&(v(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));const L=x.program;n.updateUBOMapping(y,L);const A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const _=i.createBuffer(),L=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],_=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,T=_.length;A<T;A++){const P=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,M=P.length;b<M;b++){const E=P[b];if(p(E,A,b,L)===!0){const D=E.__offset,I=Array.isArray(E.value)?E.value:[E.value];let B=0;for(let V=0;V<I.length;V++){const G=I[V],z=g(G);typeof G=="number"||typeof G=="boolean"?(E.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+B,E.__data)):G.isMatrix3?(E.__data[0]=G.elements[0],E.__data[1]=G.elements[1],E.__data[2]=G.elements[2],E.__data[3]=0,E.__data[4]=G.elements[3],E.__data[5]=G.elements[4],E.__data[6]=G.elements[5],E.__data[7]=0,E.__data[8]=G.elements[6],E.__data[9]=G.elements[7],E.__data[10]=G.elements[8],E.__data[11]=0):(G.toArray(E.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,_,L){const A=y.value,T=x+"_"+_;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{const P=L[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(y){const x=y.uniforms;let _=0;const L=16;for(let T=0,P=x.length;T<P;T++){const b=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,E=b.length;M<E;M++){const D=b[M],I=Array.isArray(D.value)?D.value:[D.value];for(let B=0,V=I.length;B<V;B++){const G=I[B],z=g(G),O=_%L,j=O%z.boundary,at=O+j;_+=j,at!==0&&L-at<z.storage&&(_+=L-at),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=z.storage}}}const A=_%L;return A>0&&(_+=L-A),y.__size=_,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Rg{constructor(t={}){const{canvas:e=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Xn,this.toneMappingExposure=1;const _=this;let L=!1,A=0,T=0,P=null,b=-1,M=null;const E=new ne,D=new ne;let I=null;const B=new Et(0);let V=0,G=e.width,z=e.height,O=1,j=null,at=null;const ct=new ne(0,0,G,z),Pt=new ne(0,0,G,z);let zt=!1;const Y=new $a;let tt=!1,vt=!1;const it=new Kt,St=new Kt,Dt=new C,Bt=new ne,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function ge(){return P===null?O:1}let F=n;function Ye(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ba}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){const N="webgl2";if(F=Ye(N,w),F===null)throw Ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,Wt,At,ae,Tt,R,S,W,Z,Q,K,Mt,ht,pt,Yt,et,mt,Ct,It,gt,Xt,Ft,se,U;function lt(){Vt=new Um(F),Vt.init(),Ft=new _g(F,Vt),Wt=new Cm(F,Vt,t,Ft),At=new gg(F,Vt),Wt.reverseDepthBuffer&&f&&At.buffers.depth.setReversed(!0),ae=new Fm(F),Tt=new eg,R=new xg(F,Vt,At,Tt,Wt,Ft,ae),S=new Pm(_),W=new Dm(_),Z=new Vd(F),se=new Tm(F,Z),Q=new Nm(F,Z,ae,se),K=new Bm(F,Q,Z,ae),It=new Om(F,Wt,R),et=new Rm(Tt),Mt=new tg(_,S,W,Vt,Wt,se,et),ht=new Ag(_,Tt),pt=new ig,Yt=new cg(Vt),Ct=new Em(_,S,W,At,K,p,l),mt=new pg(_,K,Wt),U=new Cg(F,ae,Wt,At),gt=new Am(F,Vt,ae),Xt=new km(F,Vt,ae),ae.programs=Mt.programs,_.capabilities=Wt,_.extensions=Vt,_.properties=Tt,_.renderLists=pt,_.shadowMap=mt,_.state=At,_.info=ae}lt();const $=new Eg(_,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(w){w!==void 0&&(O=w,this.setSize(G,z,!1))},this.getSize=function(w){return w.set(G,z)},this.setSize=function(w,N,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,z=N,e.width=Math.floor(w*O),e.height=Math.floor(N*O),X===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(G*O,z*O).floor()},this.setDrawingBufferSize=function(w,N,X){G=w,z=N,O=X,e.width=Math.floor(w*X),e.height=Math.floor(N*X),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,N,X,q){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,N,X,q),At.viewport(E.copy(ct).multiplyScalar(O).round())},this.getScissor=function(w){return w.copy(Pt)},this.setScissor=function(w,N,X,q){w.isVector4?Pt.set(w.x,w.y,w.z,w.w):Pt.set(w,N,X,q),At.scissor(D.copy(Pt).multiplyScalar(O).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(w){At.setScissorTest(zt=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,N=!0,X=!0){let q=0;if(w){let k=!1;if(P!==null){const nt=P.texture.format;k=nt===qa||nt===Xa||nt===Wa}if(k){const nt=P.texture.type,dt=nt===Pn||nt===fi||nt===Ts||nt===ji||nt===Ha||nt===Ga,xt=Ct.getClearColor(),_t=Ct.getClearAlpha(),Lt=xt.r,Nt=xt.g,yt=xt.b;dt?(v[0]=Lt,v[1]=Nt,v[2]=yt,v[3]=_t,F.clearBufferuiv(F.COLOR,0,v)):(g[0]=Lt,g[1]=Nt,g[2]=yt,g[3]=_t,F.clearBufferiv(F.COLOR,0,g))}else q|=F.COLOR_BUFFER_BIT}N&&(q|=F.DEPTH_BUFFER_BIT),X&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),pt.dispose(),Yt.dispose(),Tt.dispose(),S.dispose(),W.dispose(),K.dispose(),se.dispose(),U.dispose(),Mt.dispose(),$.dispose(),$.removeEventListener("sessionstart",_l),$.removeEventListener("sessionend",yl),Jn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=ae.autoReset,N=mt.enabled,X=mt.autoUpdate,q=mt.needsUpdate,k=mt.type;lt(),ae.autoReset=w,mt.enabled=N,mt.autoUpdate=X,mt.needsUpdate=q,mt.type=k}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const N=w.target;N.removeEventListener("dispose",Ut),pe(N)}function pe(w){Re(w),Tt.remove(w)}function Re(w){const N=Tt.get(w).programs;N!==void 0&&(N.forEach(function(X){Mt.releaseProgram(X)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,X,q,k,nt){N===null&&(N=de);const dt=k.isMesh&&k.matrixWorld.determinant()<0,xt=Su(w,N,X,q,k);At.setMaterial(q,dt);let _t=X.index,Lt=1;if(q.wireframe===!0){if(_t=Q.getWireframeAttribute(X),_t===void 0)return;Lt=2}const Nt=X.drawRange,yt=X.attributes.position;let jt=Nt.start*Lt,re=(Nt.start+Nt.count)*Lt;nt!==null&&(jt=Math.max(jt,nt.start*Lt),re=Math.min(re,(nt.start+nt.count)*Lt)),_t!==null?(jt=Math.max(jt,0),re=Math.min(re,_t.count)):yt!=null&&(jt=Math.max(jt,0),re=Math.min(re,yt.count));const le=re-jt;if(le<0||le===1/0)return;se.setup(k,q,xt,X,_t);let ke,Zt=gt;if(_t!==null&&(ke=Z.get(_t),Zt=Xt,Zt.setIndex(ke)),k.isMesh)q.wireframe===!0?(At.setLineWidth(q.wireframeLinewidth*ge()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(k.isLine){let bt=q.linewidth;bt===void 0&&(bt=1),At.setLineWidth(bt*ge()),k.isLineSegments?Zt.setMode(F.LINES):k.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else k.isPoints?Zt.setMode(F.POINTS):k.isSprite&&Zt.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Zt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const bt=k._multiDrawStarts,_n=k._multiDrawCounts,Jt=k._multiDrawCount,en=_t?Z.get(_t).bytesPerElement:1,vi=Tt.get(q).currentProgram.getUniforms();for(let ze=0;ze<Jt;ze++)vi.setValue(F,"_gl_DrawID",ze),Zt.render(bt[ze]/en,_n[ze])}else if(k.isInstancedMesh)Zt.renderInstances(jt,le,k.count);else if(X.isInstancedBufferGeometry){const bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_n=Math.min(X.instanceCount,bt);Zt.renderInstances(jt,le,_n)}else Zt.render(jt,le)};function Qt(w,N,X){w.transparent===!0&&w.side===Ce&&w.forceSinglePass===!1?(w.side=me,w.needsUpdate=!0,Os(w,N,X),w.side=$n,w.needsUpdate=!0,Os(w,N,X),w.side=Ce):Os(w,N,X)}this.compile=function(w,N,X=null){X===null&&(X=w),d=Yt.get(X),d.init(N),x.push(d),X.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),w!==X&&w.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();const q=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const nt=k.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const xt=nt[dt];Qt(xt,X,k),q.add(xt)}else Qt(nt,X,k),q.add(nt)}),x.pop(),d=null,q},this.compileAsync=function(w,N,X=null){const q=this.compile(w,N,X);return new Promise(k=>{function nt(){if(q.forEach(function(dt){Tt.get(dt).currentProgram.isReady()&&q.delete(dt)}),q.size===0){k(w);return}setTimeout(nt,10)}Vt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let tn=null;function xn(w){tn&&tn(w)}function _l(){Jn.stop()}function yl(){Jn.start()}const Jn=new Ph;Jn.setAnimationLoop(xn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){tn=w,$.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},$.addEventListener("sessionstart",_l),$.addEventListener("sessionend",yl),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,P),d=Yt.get(w,x.length),d.init(N),x.push(d),St.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(St),vt=this.localClippingEnabled,tt=et.init(this.clippingPlanes,vt),m=pt.get(w,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&$r(nt,N,-1/0,_.sortObjects)}$r(w,N,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(j,at),qt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,qt&&Ct.addToRenderList(m,w),this.info.render.frame++,tt===!0&&et.beginShadows();const X=d.state.shadowsArray;mt.render(X,w,N),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(d.setupLights(),N.isArrayCamera){const nt=N.cameras;if(k.length>0)for(let dt=0,xt=nt.length;dt<xt;dt++){const _t=nt[dt];bl(q,k,w,_t)}qt&&Ct.render(w);for(let dt=0,xt=nt.length;dt<xt;dt++){const _t=nt[dt];Ml(m,w,_t,_t.viewport)}}else k.length>0&&bl(q,k,w,N),qt&&Ct.render(w),Ml(m,w,N);P!==null&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(_,w,N),se.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(d=x[x.length-1],tt===!0&&et.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function $r(w,N,X,q){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){q&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);const dt=K.update(w),xt=w.material;xt.visible&&m.push(w,dt,xt,X,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const dt=K.update(w),xt=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Bt.copy(dt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(xt)){const _t=dt.groups;for(let Lt=0,Nt=_t.length;Lt<Nt;Lt++){const yt=_t[Lt],jt=xt[yt.materialIndex];jt&&jt.visible&&m.push(w,dt,jt,X,Bt.z,yt)}}else xt.visible&&m.push(w,dt,xt,X,Bt.z,null)}}const nt=w.children;for(let dt=0,xt=nt.length;dt<xt;dt++)$r(nt[dt],N,X,q)}function Ml(w,N,X,q){const k=w.opaque,nt=w.transmissive,dt=w.transparent;d.setupLightsView(X),tt===!0&&et.setGlobalState(_.clippingPlanes,X),q&&At.viewport(E.copy(q)),k.length>0&&Fs(k,N,X),nt.length>0&&Fs(nt,N,X),dt.length>0&&Fs(dt,N,X),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function bl(w,N,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new pi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Is:Pn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const nt=d.state.transmissionRenderTarget[q.id],dt=q.viewport||E;nt.setSize(dt.z,dt.w);const xt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(B),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),qt&&Ct.render(X);const _t=_.toneMapping;_.toneMapping=Xn;const Lt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),tt===!0&&et.setGlobalState(_.clippingPlanes,q),Fs(w,X,q),R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let yt=0,jt=N.length;yt<jt;yt++){const re=N[yt],le=re.object,ke=re.geometry,Zt=re.material,bt=re.group;if(Zt.side===Ce&&le.layers.test(q.layers)){const _n=Zt.side;Zt.side=me,Zt.needsUpdate=!0,Sl(le,X,q,ke,Zt,bt),Zt.side=_n,Zt.needsUpdate=!0,Nt=!0}}Nt===!0&&(R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt))}_.setRenderTarget(xt),_.setClearColor(B,V),Lt!==void 0&&(q.viewport=Lt),_.toneMapping=_t}function Fs(w,N,X){const q=N.isScene===!0?N.overrideMaterial:null;for(let k=0,nt=w.length;k<nt;k++){const dt=w[k],xt=dt.object,_t=dt.geometry,Lt=q===null?dt.material:q,Nt=dt.group;xt.layers.test(X.layers)&&Sl(xt,N,X,_t,Lt,Nt)}}function Sl(w,N,X,q,k,nt){w.onBeforeRender(_,N,X,q,k,nt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,N,X,q,w,nt),k.transparent===!0&&k.side===Ce&&k.forceSinglePass===!1?(k.side=me,k.needsUpdate=!0,_.renderBufferDirect(X,N,q,k,w,nt),k.side=$n,k.needsUpdate=!0,_.renderBufferDirect(X,N,q,k,w,nt),k.side=Ce):_.renderBufferDirect(X,N,q,k,w,nt),w.onAfterRender(_,N,X,q,k,nt)}function Os(w,N,X){N.isScene!==!0&&(N=de);const q=Tt.get(w),k=d.state.lights,nt=d.state.shadowsArray,dt=k.state.version,xt=Mt.getParameters(w,k.state,nt,N,X),_t=Mt.getProgramCacheKey(xt);let Lt=q.programs;q.environment=w.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(w.isMeshStandardMaterial?W:S).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Ut),Lt=new Map,q.programs=Lt);let Nt=Lt.get(_t);if(Nt!==void 0){if(q.currentProgram===Nt&&q.lightsStateVersion===dt)return El(w,xt),Nt}else xt.uniforms=Mt.getUniforms(w),w.onBeforeCompile(xt,_),Nt=Mt.acquireProgram(xt,_t),Lt.set(_t,Nt),q.uniforms=xt.uniforms;const yt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(yt.clippingPlanes=et.uniform),El(w,xt),q.needsLights=Eu(w),q.lightsStateVersion=dt,q.needsLights&&(yt.ambientLightColor.value=k.state.ambient,yt.lightProbe.value=k.state.probe,yt.directionalLights.value=k.state.directional,yt.directionalLightShadows.value=k.state.directionalShadow,yt.spotLights.value=k.state.spot,yt.spotLightShadows.value=k.state.spotShadow,yt.rectAreaLights.value=k.state.rectArea,yt.ltc_1.value=k.state.rectAreaLTC1,yt.ltc_2.value=k.state.rectAreaLTC2,yt.pointLights.value=k.state.point,yt.pointLightShadows.value=k.state.pointShadow,yt.hemisphereLights.value=k.state.hemi,yt.directionalShadowMap.value=k.state.directionalShadowMap,yt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,yt.spotShadowMap.value=k.state.spotShadowMap,yt.spotLightMatrix.value=k.state.spotLightMatrix,yt.spotLightMap.value=k.state.spotLightMap,yt.pointShadowMap.value=k.state.pointShadowMap,yt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Nt,q.uniformsList=null,Nt}function wl(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Er.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function El(w,N){const X=Tt.get(w);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function Su(w,N,X,q,k){N.isScene!==!0&&(N=de),R.resetTextureUnits();const nt=N.fog,dt=q.isMeshStandardMaterial?N.environment:null,xt=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ts,_t=(q.isMeshStandardMaterial?W:S).get(q.envMap||dt),Lt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Nt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),yt=!!X.morphAttributes.position,jt=!!X.morphAttributes.normal,re=!!X.morphAttributes.color;let le=Xn;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=_.toneMapping);const ke=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Zt=ke!==void 0?ke.length:0,bt=Tt.get(q),_n=d.state.lights;if(tt===!0&&(vt===!0||w!==M)){const $e=w===M&&q.id===b;et.setState(q,w,$e)}let Jt=!1;q.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==_n.state.version||bt.outputColorSpace!==xt||k.isBatchedMesh&&bt.batching===!1||!k.isBatchedMesh&&bt.batching===!0||k.isBatchedMesh&&bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&bt.instancing===!1||!k.isInstancedMesh&&bt.instancing===!0||k.isSkinnedMesh&&bt.skinning===!1||!k.isSkinnedMesh&&bt.skinning===!0||k.isInstancedMesh&&bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&bt.instancingMorph===!1&&k.morphTexture!==null||bt.envMap!==_t||q.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Nt||bt.morphTargets!==yt||bt.morphNormals!==jt||bt.morphColors!==re||bt.toneMapping!==le||bt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,bt.__version=q.version);let en=bt.currentProgram;Jt===!0&&(en=Os(q,N,k));let vi=!1,ze=!1,os=!1;const ce=en.getUniforms(),un=bt.uniforms;if(At.useProgram(en.program)&&(vi=!0,ze=!0,os=!0),q.id!==b&&(b=q.id,ze=!0),vi||M!==w){At.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),xd(it),_d(it),ce.setValue(F,"projectionMatrix",it)):ce.setValue(F,"projectionMatrix",w.projectionMatrix),ce.setValue(F,"viewMatrix",w.matrixWorldInverse);const Ln=ce.map.cameraPosition;Ln!==void 0&&Ln.setValue(F,Dt.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ce.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ze=!0,os=!0)}if(k.isSkinnedMesh){ce.setOptional(F,k,"bindMatrix"),ce.setOptional(F,k,"bindMatrixInverse");const $e=k.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ce.setValue(F,"boneTexture",$e.boneTexture,R))}k.isBatchedMesh&&(ce.setOptional(F,k,"batchingTexture"),ce.setValue(F,"batchingTexture",k._matricesTexture,R),ce.setOptional(F,k,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",k._indirectTexture,R),ce.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",k._colorsTexture,R));const as=X.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&It.update(k,X,en),(ze||bt.receiveShadow!==k.receiveShadow)&&(bt.receiveShadow=k.receiveShadow,ce.setValue(F,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(un.envMap.value=_t,un.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),ze&&(ce.setValue(F,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&wu(un,os),nt&&q.fog===!0&&ht.refreshFogUniforms(un,nt),ht.refreshMaterialUniforms(un,q,O,z,d.state.transmissionRenderTarget[w.id]),Er.upload(F,wl(bt),un,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Er.upload(F,wl(bt),un,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ce.setValue(F,"center",k.center),ce.setValue(F,"modelViewMatrix",k.modelViewMatrix),ce.setValue(F,"normalMatrix",k.normalMatrix),ce.setValue(F,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const $e=q.uniformsGroups;for(let Ln=0,Dn=$e.length;Ln<Dn;Ln++){const Tl=$e[Ln];U.update(Tl,en),U.bind(Tl,en)}}return en}function wu(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Eu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,X){Tt.get(w.texture).__webglTexture=N,Tt.get(w.depthTexture).__webglTexture=X;const q=Tt.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const X=Tt.get(w);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,X=0){P=w,A=N,T=X;let q=!0,k=null,nt=!1,dt=!1;if(w){const _t=Tt.get(w);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(_t.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(_t.__hasExternalTextures)R.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const yt=w.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&Tt.has(yt)&&(w.width!==yt.image.width||w.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const Nt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?k=Nt[N][X]:k=Nt[N],nt=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[X]:k=Nt,E.copy(w.viewport),D.copy(w.scissor),I=w.scissorTest}else E.copy(ct).multiplyScalar(O).floor(),D.copy(Pt).multiplyScalar(O).floor(),I=zt;if(At.bindFramebuffer(F.FRAMEBUFFER,k)&&q&&At.drawBuffers(w,k),At.viewport(E),At.scissor(D),At.setScissorTest(I),nt){const _t=Tt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,X)}else if(dt){const _t=Tt.get(w.texture),Lt=N||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,X||0,Lt)}b=-1},this.readRenderTargetPixels=function(w,N,X,q,k,nt,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){At.bindFramebuffer(F.FRAMEBUFFER,xt);try{const _t=w.texture,Lt=_t.format,Nt=_t.type;if(!Wt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-q&&X>=0&&X<=w.height-k&&F.readPixels(N,X,q,k,Ft.convert(Lt),Ft.convert(Nt),nt)}finally{const _t=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(w,N,X,q,k,nt,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(xt=xt[dt]),xt){const _t=w.texture,Lt=_t.format,Nt=_t.type;if(!Wt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-q&&X>=0&&X<=w.height-k){At.bindFramebuffer(F.FRAMEBUFFER,xt);const yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.bufferData(F.PIXEL_PACK_BUFFER,nt.byteLength,F.STREAM_READ),F.readPixels(N,X,q,k,Ft.convert(Lt),Ft.convert(Nt),0);const jt=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(F.FRAMEBUFFER,jt);const re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vd(F,re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,nt),F.deleteBuffer(yt),F.deleteSync(re),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,X=0){w.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-X),k=Math.floor(w.image.width*q),nt=Math.floor(w.image.height*q),dt=N!==null?N.x:0,xt=N!==null?N.y:0;R.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,dt,xt,k,nt),At.unbindTexture()},this.copyTextureToTexture=function(w,N,X=null,q=null,k=0){w.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],N=arguments[2],k=arguments[3]||0,X=null);let nt,dt,xt,_t,Lt,Nt,yt,jt,re;const le=w.isCompressedTexture?w.mipmaps[k]:w.image;X!==null?(nt=X.max.x-X.min.x,dt=X.max.y-X.min.y,xt=X.isBox3?X.max.z-X.min.z:1,_t=X.min.x,Lt=X.min.y,Nt=X.isBox3?X.min.z:0):(nt=le.width,dt=le.height,xt=le.depth||1,_t=0,Lt=0,Nt=0),q!==null?(yt=q.x,jt=q.y,re=q.z):(yt=0,jt=0,re=0);const ke=Ft.convert(N.format),Zt=Ft.convert(N.type);let bt;N.isData3DTexture?(R.setTexture3D(N,0),bt=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),bt=F.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);const _n=F.getParameter(F.UNPACK_ROW_LENGTH),Jt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),en=F.getParameter(F.UNPACK_SKIP_PIXELS),vi=F.getParameter(F.UNPACK_SKIP_ROWS),ze=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,le.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,le.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Lt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Nt);const os=w.isDataArrayTexture||w.isData3DTexture,ce=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const un=Tt.get(w),as=Tt.get(N),$e=Tt.get(un.__renderTarget),Ln=Tt.get(as.__renderTarget);At.bindFramebuffer(F.READ_FRAMEBUFFER,$e.__webglFramebuffer),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Dn=0;Dn<xt;Dn++)os&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(w).__webglTexture,k,Nt+Dn),w.isDepthTexture?(ce&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(N).__webglTexture,k,re+Dn),F.blitFramebuffer(_t,Lt,nt,dt,yt,jt,nt,dt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ce?F.copyTexSubImage3D(bt,k,yt,jt,re+Dn,_t,Lt,nt,dt):F.copyTexSubImage2D(bt,k,yt,jt,re+Dn,_t,Lt,nt,dt);At.bindFramebuffer(F.READ_FRAMEBUFFER,null),At.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ce?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(bt,k,yt,jt,re,nt,dt,xt,ke,Zt,le.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,k,yt,jt,re,nt,dt,xt,ke,le.data):F.texSubImage3D(bt,k,yt,jt,re,nt,dt,xt,ke,Zt,le):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,yt,jt,nt,dt,ke,Zt,le.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,yt,jt,le.width,le.height,ke,le.data):F.texSubImage2D(F.TEXTURE_2D,k,yt,jt,nt,dt,ke,Zt,le);F.pixelStorei(F.UNPACK_ROW_LENGTH,_n),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,en),F.pixelStorei(F.UNPACK_SKIP_ROWS,vi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze),k===0&&N.generateMipmaps&&F.generateMipmap(bt),At.unbindTexture()},this.copyTextureToTexture3D=function(w,N,X=null,q=null,k=0){return w.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,w=arguments[2],N=arguments[3],k=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,X,q,k)},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,At.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class Ls{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new Ls(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ka{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new Ka(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gi extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Aa,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new C;class Ir{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fh extends Zn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const ds=new C,Di=new C,Ui=new C,Ni=new rt,fs=new rt,Oh=new Kt,or=new C,ps=new C,ar=new C,Sc=new rt,To=new rt,wc=new rt;class Ig extends xe{constructor(t=new Fh){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new oe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pg(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new Ir(n,3,0,!1)),Li.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Di.setFromMatrixScale(this.matrixWorld),Oh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ui.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Di.multiplyScalar(-Ui.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;lr(or.set(-.5,-.5,0),Ui,o,Di,s,r),lr(ps.set(.5,-.5,0),Ui,o,Di,s,r),lr(ar.set(.5,.5,0),Ui,o,Di,s,r),Sc.set(0,0),To.set(1,0),wc.set(1,1);let a=t.ray.intersectTriangle(or,ps,ar,!1,ds);if(a===null&&(lr(ps.set(-.5,.5,0),Ui,o,Di,s,r),To.set(0,1),a=t.ray.intersectTriangle(or,ar,ps,!1,ds),a===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:Ze.getInterpolation(ds,or,ps,ar,Sc,To,wc,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function lr(i,t,e,n,s,r){Ni.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(fs.x=r*Ni.x-s*Ni.y,fs.y=s*Ni.x+r*Ni.y):fs.copy(Ni),i.copy(t),i.x+=fs.x,i.y+=fs.y,i.applyMatrix4(Oh)}class Lg extends Le{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Xe,h=Xe,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ki=new Kt,Ec=new Kt,cr=[],Tc=new mi,Dg=new Kt,ms=new st,gs=new Kn;class li extends st{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),Tc.copy(t.boundingBox).applyMatrix4(ki),this.boundingBox.union(Tc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ki),gs.copy(t.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(gs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ms.geometry=this.geometry,ms.material=this.material,ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gs.copy(this.boundingSphere),gs.applyMatrix4(n),t.ray.intersectsSphere(gs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ki),Ec.multiplyMatrices(n,ki),ms.matrixWorld=Ec,ms.raycast(t,cr);for(let o=0,a=cr.length;o<a;o++){const l=cr[o];l.instanceId=r,l.object=this,e.push(l)}cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lg(new Float32Array(s*this.count),s,this.count,Va,pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Za extends Zn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lr=new C,Dr=new C,Ac=new Kt,vs=new Hr,hr=new Kn,Ao=new C,Cc=new C;class Bh extends xe{constructor(t=new oe,e=new Za){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Lr.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Lr.distanceTo(Dr);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;Ac.copy(s).invert(),vs.copy(t.ray).applyMatrix4(Ac);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const d=h.getX(g),y=h.getX(g+1),x=ur(this,t,vs,l,d,y);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),d=ur(this,t,vs,l,g,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const d=ur(this,t,vs,l,g,g+1);d&&e.push(d)}if(this.isLineLoop){const g=ur(this,t,vs,l,v-1,p);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ur(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Lr.fromBufferAttribute(o,s),Dr.fromBufferAttribute(o,r),e.distanceSqToSegment(Lr,Dr,Ao,Cc)>n)return;Ao.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ao);if(!(l<t.near||l>t.far))return{distance:l,point:Cc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Rc=new C,Pc=new C;class Ug extends Bh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rc.fromBufferAttribute(e,s),Pc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rc.distanceTo(Pc);t.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xi extends Zn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ic=new Kt,Ia=new Hr,dr=new Kn,fr=new C;class bs extends xe{constructor(t=new oe,e=new Xi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;Ic.copy(s).invert(),Ia.copy(t.ray).applyMatrix4(Ic);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,g=p;v<g;v++){const m=c.getX(v);fr.fromBufferAttribute(u,m),Lc(fr,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p;v<g;v++)fr.fromBufferAttribute(u,v),Lc(fr,v,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lc(i,t,e,n,s,r,o){const a=Ia.distanceSqToPoint(i);if(a<e){const l=new C;Ia.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class jn extends Le{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new rt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new Kt;for(let p=0;p<=t;p++){const v=p/t;s[p]=this.getTangentAt(v,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Ee(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ee(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let v=1;v<=t;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ja extends vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ng extends Ja{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qa(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const pr=new C,Co=new Qa,Ro=new Qa,Po=new Qa;class tl extends vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(pr.subVectors(s[0],s[1]).add(s[0]),c=pr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),Co.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,v,g,m),Ro.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,v,g,m),Po.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,v,g,m)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ro.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Po.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Co.calc(l),Ro.calc(l),Po.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function kg(i,t){const e=1-i;return e*e*t}function Fg(i,t){return 2*(1-i)*i*t}function Og(i,t){return i*i*t}function Ss(i,t,e,n){return kg(i,t)+Fg(i,e)+Og(i,n)}function Bg(i,t){const e=1-i;return e*e*e*t}function zg(i,t){const e=1-i;return 3*e*e*i*t}function Hg(i,t){return 3*(1-i)*i*i*t}function Gg(i,t){return i*i*i*t}function ws(i,t,e,n,s){return Bg(i,t)+zg(i,e)+Hg(i,n)+Gg(i,s)}class zh extends vn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(t,s.x,r.x,o.x,a.x),ws(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vg extends vn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(t,s.x,r.x,o.x,a.x),ws(t,s.y,r.y,o.y,a.y),ws(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hh extends vn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wg extends vn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends vn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends vn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ss(t,s.x,r.x,o.x),Ss(t,s.y,r.y,o.y),Ss(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wh extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Dc(a,l.x,c.x,h.x,u.x),Dc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var La=Object.freeze({__proto__:null,ArcCurve:Ng,CatmullRomCurve3:tl,CubicBezierCurve:zh,CubicBezierCurve3:Vg,EllipseCurve:Ja,LineCurve:Hh,LineCurve3:Wg,QuadraticBezierCurve:Gh,QuadraticBezierCurve3:Vh,SplineCurve:Wh});class Xg extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new La[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new La[s.type]().fromJSON(s))}return this}}class qg extends Xg{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Hh(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Gh(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new zh(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ja(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class As extends oe{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ee(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new C,f=new rt,p=new C,v=new C,g=new C;let m=0,d=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(g.x,g.y,g.z);break;default:m=t[y+1].x-t[y].x,d=t[y+1].y-t[y].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(v)}for(let y=0;y<=e;y++){const x=n+y*h*s,_=Math.sin(x),L=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*_,u.y=t[A].y,u.z=t[A].x*L,o.push(u.x,u.y,u.z),f.x=y/e,f.y=A/(t.length-1),a.push(f.x,f.y);const T=l[3*A+0]*_,P=l[3*A+1],b=l[3*A+0]*L;c.push(T,P,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const _=x+y*t.length,L=_,A=_+t.length,T=_+t.length+1,P=_+1;r.push(L,A,P),r.push(T,P,A)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.points,t.segments,t.phiStart,t.phiLength)}}class el extends As{constructor(t=1,e=1,n=4,s=8){const r=new qg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new el(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ds extends oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qe extends oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let v=0;const g=[],m=n/2;let d=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(p,2));function y(){const _=new C,L=new C;let A=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const b=[],M=P/r,E=M*(e-t)+t;for(let D=0;D<=s;D++){const I=D/s,B=I*l+a,V=Math.sin(B),G=Math.cos(B);L.x=E*V,L.y=-M*n+m,L.z=E*G,u.push(L.x,L.y,L.z),_.set(V,T,G).normalize(),f.push(_.x,_.y,_.z),p.push(I,1-M),b.push(v++)}g.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const M=g[b][P],E=g[b+1][P],D=g[b+1][P+1],I=g[b][P+1];(t>0||b!==0)&&(h.push(M,E,I),A+=3),(e>0||b!==r-1)&&(h.push(E,D,I),A+=3)}c.addGroup(d,A,0),d+=A}function x(_){const L=v,A=new rt,T=new C;let P=0;const b=_===!0?t:e,M=_===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),v++;const E=v;for(let D=0;D<=s;D++){const B=D/s*l+a,V=Math.cos(B),G=Math.sin(B);T.x=b*G,T.y=m*M,T.z=b*V,u.push(T.x,T.y,T.z),f.push(0,M,0),A.x=V*.5+.5,A.y=G*.5*M+.5,p.push(A.x,A.y),v++}for(let D=0;D<s;D++){const I=L+D,B=E+D;_===!0?h.push(B,B+1,I):h.push(B+1,B,I),P+=3}c.addGroup(d,P,_===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mn extends Qe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vr extends oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new C,_=new C,L=new C;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],_),p(e[A+2],L),l(x,_,L,y)}function l(y,x,_,L){const A=L+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const b=y.clone().lerp(_,P/A),M=x.clone().lerp(_,P/A),E=A-P;for(let D=0;D<=E;D++)D===0&&P===A?T[P][D]=b:T[P][D]=b.clone().lerp(M,D/E)}for(let P=0;P<A;P++)for(let b=0;b<2*(A-P)-1;b++){const M=Math.floor(b/2);b%2===0?(f(T[P][M+1]),f(T[P+1][M]),f(T[P][M])):(f(T[P][M+1]),f(T[P+1][M+1]),f(T[P+1][M]))}}function c(y){const x=new C;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const y=new C;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,L=d(y)/Math.PI+.5;o.push(_,1-L)}v(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],_=o[y+2],L=o[y+4],A=Math.max(x,_,L),T=Math.min(x,_,L);A>.9&&T<.1&&(x<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){const _=y*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function v(){const y=new C,x=new C,_=new C,L=new C,A=new rt,T=new rt,P=new rt;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),A.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(y).add(x).add(_).divideScalar(3);const E=m(L);g(A,M+0,y,E),g(T,M+2,x,E),g(P,M+4,_,E)}}function g(y,x,_,L){L<0&&y.x===1&&(o[x]=y.x-1),_.x===0&&_.z===0&&(o[x]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vr(t.vertices,t.indices,t.radius,t.details)}}class nl extends Vr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nl(t.radius,t.detail)}}class il extends oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,p=new C,v=new rt;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/e+1)/2,v.y=(p.y/e+1)/2,h.push(v.x,v.y)}u+=f}for(let g=0;g<s;g++){const m=g*(n+1);for(let d=0;d<n;d++){const y=d+m,x=y,_=y+n+1,L=y+n+2,A=y+1;a.push(x,_,A),a.push(_,L,A)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ue extends oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,f=new C,p=[],v=[],g=[],m=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let _=0;d===0&&o===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const A=L/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+x*a),v.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),m.push(A+_,1-x),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const x=h[d][y+1],_=h[d][y],L=h[d+1][y],A=h[d+1][y+1];(d!==0||o>0)&&p.push(x,_,A),(d!==n-1||l<Math.PI)&&p.push(_,L,A)}this.setIndex(p),this.setAttribute("position",new Gt(v,3)),this.setAttribute("normal",new Gt(g,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sl extends Vr{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sl(t.radius,t.detail)}}class Je extends oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let p=0;p<=n;p++)for(let v=0;v<=s;v++){const g=v/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let v=1;v<=s;v++){const g=(s+1)*p+v-1,m=(s+1)*(p-1)+v-1,d=(s+1)*(p-1)+v,y=(s+1)*p+v;o.push(g,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Je(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Wr extends oe{constructor(t=new Vh(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new rt;let h=new C;const u=[],f=[],p=[],v=[];g(),this.setIndex(v),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(p,2));function g(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),d()}function m(x){h=t.getPointAt(x/e,h);const _=o.normals[x],L=o.binormals[x];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,P=Math.sin(T),b=-Math.cos(T);l.x=b*_.x+P*L.x,l.y=b*_.y+P*L.y,l.z=b*_.z+P*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){const L=(s+1)*(x-1)+(_-1),A=(s+1)*x+(_-1),T=(s+1)*x+_,P=(s+1)*(x-1)+_;v.push(L,A,P),v.push(A,T,P)}}function y(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Wr(new La[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class he extends Zn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yg extends he{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class rl extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Io=new Kt,Uc=new C,Nc=new C;class Xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const kc=new Kt,xs=new C,Lo=new C;class $g extends Xh{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xs.setFromMatrixPosition(t.matrixWorld),n.position.copy(xs),Lo.copy(n.position),Lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lo),n.updateMatrixWorld(),s.makeTranslation(-xs.x,-xs.y,-xs.z),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc)}}class Be extends rl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $g}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class jg extends Xh{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ur extends rl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new jg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Us extends rl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fc=new Kt;class ol{constructor(t,e,n=0,s=1/0){this.ray=new Hr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,n=[]){return Da(t,this,n,e),n.sort(Oc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Da(t[s],this,n,e);return n.sort(Oc),n}}function Oc(i,t){return i.distance-t.distance}function Da(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Da(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);const Bc=[.04,.08,.22,.4,.58,.74,.88,1],Kg=[0,.04,.08,.14,.22,.32,.46,.64,.84,1],di=i=>Math.min(1,Bc[Math.min(Bc.length-1,i.sleeps)]+.55*Kg[Math.min(9,Math.max(0,i.feeds))]),zc=i=>i<.2?"deadpan":i<.55?"uncanny":"wild",Zg=i=>.35+.95*i,Jg=i=>70-55*i,Qg={deadpan:["The hold is a hold. It holds.","A pipe ticks. It ticked yesterday.","Halcyon Reclamation has sent a cheerful reminder about your debt. It is the same reminder.","Somewhere a fan turns. You have decided it is the good fan.","Day after day, the junk is still junk."],uncanny:["The lights flicker. Not at random. Like a sentence.","You hear footsteps in a ship with one occupant.","The vault hums a note you were thinking of.","The cube is facing a different way than you left it.","The corridor feels slightly longer on the way back."],wild:["The floor is a ceiling for a moment, then apologises.","You count four doors in a two-door room. They count you back.","Every shadow has a small face, and all of them are listening.","The ship is larger on the inside than the outside, and getting larger.","Your hands remember things you have not done yet."]},Ns=["Happy","Worried","Grumpy","Sleepy","Curious","Scared"],qh=["Bold","Shy","Weird"],Ua=["glow","spikes","fluff","drip","stripes","bellyface","halo","horns"],Nr=6,al=4,ll=6;function tv(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ev(i,t,e){const n=s=>{const r=(s+i*12)%12,o=t*Math.min(e,1-e);return e-o*Math.max(-1,Math.min(r-3,Math.min(9-r,1)))};return Math.round(n(0)*255)<<16|Math.round(n(8)*255)<<8|Math.round(n(4)*255)}function cl(i,t){const e=t(),[n,s]=i<=-1?[.7,.75]:i>=1?[.85,.38]:[.95,.55];return ev(i<=-2?.1+e*.08:e,n,s)}function nv(i,t){const e=Math.max(-3,Math.min(3,Math.round((t()*2-1)*3)));return{id:i,name:`Spore ${i+1}`,anatomy:{bodyShape:Math.floor(t()*Nr),outlineWeight:1+Math.floor(t()*3),eyeSet:Math.floor(t()*al),mouthSet:Math.floor(t()*ll),signatureTrait:Ua[Math.floor(t()*Ua.length)],colour:cl(e,t)},tone:{alignment:e,uncanny:Math.floor(t()*4)},personality:Math.floor(t()*qh.length),mood:Math.floor(t()*Ns.length),history:[]}}function Na(i,t=7){const e=tv(t);return Array.from({length:i},(n,s)=>{const r=nv(s,e);return r.mood=s%Ns.length,r.tone.alignment=s*5%7-3,r.anatomy.colour=cl(r.tone.alignment,e),r.anatomy.bodyShape=s%Nr,r})}const iv=i=>[1.3,2.4,1.6,.5,1.8,3.2][i],sv={skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0};function is(i){const t=i.profile??sv,e=i.stats.clean+i.stats.shatters,n=e?i.stats.shatters/e:0,s=e>=4&&n>=.35||t.hullHits>=3?"greedy":e>=4&&n<=.2&&t.hullHits<=1?"careful":"balanced",r=t.skips>=2||t.maxFatigue>=90?"sleepless":i.sleeps>=2&&t.skips===0?"rested":"steady";return{cube:i.cubeChoice==="kept"||i.cubeChoice==="jettisoned"?i.cubeChoice:"",nights:i.sleeps,skippedSleeps:t.skips,maxFatigue:Math.round(t.maxFatigue),clean:i.stats.clean,shatters:i.stats.shatters,hullHits:t.hullHits,trips:i.stats.trips,logsRead:t.logsRead,seconds:Math.round(t.seconds),debtPaid:1e3-i.debt,debtLeft:i.debt,rare:i.stats.rare,style:s,sleeper:r,reader:t.logsRead>=4}}function hl(i){const t=[];i.cube==="jettisoned"?t.push("stubborn"):i.cube==="kept"&&t.push("loyal"),i.sleeper==="sleepless"?t.push("sleepless"):i.sleeper==="rested"&&t.push("well-rested"),i.style==="greedy"?t.push("reckless"):i.style==="careful"&&t.push("careful"),i.reader&&t.push("curious"),i.debtLeft>500&&t.push("indebted");const n=`a ${(t.length?t.slice(0,2):["ordinary"]).join(", ")} creature`,s=[i.cube==="jettisoned"?"You threw the cube out and it came back anyway.":i.cube==="kept"?"You kept the cube when it opened its eye.":"You never quite decided about the cube.",i.sleeper==="sleepless"?`You skipped sleep ${i.skippedSleeps} time${i.skippedSleeps===1?"":"s"} and it shows.`:i.sleeper==="rested"?`You slept ${i.nights} nights, regular as a clock.`:`You slept ${i.nights} night${i.nights===1?"":"s"}.`,i.style==="greedy"?`You shattered ${i.shatters} haul${i.shatters===1?"":"s"} chasing more.`:i.style==="careful"?`${i.clean} clean hauls, patient hands.`:`${i.clean} clean hauls and ${i.shatters} that did not go to plan.`,i.reader?`You read ${i.logsRead} logs, which most people would not have.`:"You left most of the logs unread.",`Halcyon Reclamation still wants ${i.debtLeft} cr.`];return{name:n,description:s.join(" ")}}const rv={greedy:["spikes","horns"],careful:["halo","fluff"],balanced:["stripes","glow"],sleepless:["glow","drip"],rested:["fluff","stripes"],steady:["bellyface","stripes"],jettisoned:["horns","bellyface"],kept:["halo","bellyface"],undecided:["drip","fluff"],reader:["stripes","glow"]},ov={greedy:["Grumpy","Curious"],careful:["Happy","Curious"],balanced:["Curious","Happy"],sleepless:["Sleepy","Grumpy"],rested:["Happy","Happy"],steady:["Curious","Worried"],jettisoned:["Worried","Scared"],kept:["Happy","Curious"],undecided:["Worried","Curious"],reader:["Curious","Curious"]},av={greedy:1,careful:0,balanced:3,sleepless:2,rested:0,steady:3,jettisoned:1,kept:0,undecided:2,reader:3},lv={greedy:4,careful:1,balanced:2,sleepless:5,rested:0,steady:2,jettisoned:3,kept:0,undecided:5,reader:1},cv={greedy:3,careful:0,balanced:1};function Yh(i,t){const e=[t.style,t.sleeper,t.cube||"undecided",...t.reader?["reader"]:[]],n=(t.debtPaid*31+t.nights*97+t.clean*13+t.shatters*29+t.hullHits*53+t.logsRead*7+t.skippedSleeps*19)%1e3/1e3;return i.forEach((s,r)=>{s.playerProfile=t;const o=e[r%e.length],a=Math.floor(r/e.length);s.anatomy.signatureTrait=rv[o][a%2],s.mood=Math.max(0,Ns.indexOf(ov[o][a%2])),s.anatomy.eyeSet=av[o],s.anatomy.mouthSet=lv[o],s.anatomy.outlineWeight=Math.max(1,Math.min(3,1+Math.floor(t.hullHits/2)+(t.style==="greedy"?1:0))),s.anatomy.bodyShape=(r+cv[t.style])%6,s.tone.alignment=Math.max(-3,Math.min(3,s.tone.alignment+(t.cube==="kept"?-1:t.cube==="jettisoned"?1:0))),s.anatomy.colour=cl(s.tone.alignment,()=>(n+r*.083)%1),s.history.push({type:"player:"+o})}),i}const zi=(i,t,e=1)=>[i[0]+t[0]*e,i[1]+t[1]*e,i[2]+t[2]*e],$h=(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],ka=(i,t)=>Math.hypot(i[0]-t[0],i[1]-t[1],i[2]-t[2]);function hv(i,t,e=1){let n=e;const s=()=>(n=n*16807%2147483647)/2147483647;return Array.from({length:i},(r,o)=>({p:[t.x0+s()*(t.x1-t.x0),t.y0+s()*(t.y1-t.y0)*.5,t.z0+s()*(t.z1-t.z0)],v:[0,0,0],mode:["cluster","hide","follow"][o%3],t:s()*10,seed:s()}))}function uv(i,t,e){if(i.mode==="flee"&&t.fleeFrom){const n=$h(i.p,t.fleeFrom),s=Math.max(.01,Math.hypot(...n));return zi(i.p,n,2/s)}return i.mode==="light"&&t.light?zi(t.light,[Math.sin(i.t*3+e)*.4,-.3,Math.cos(i.t*3+e)*.4]):i.mode==="hide"&&t.pipes.length?t.pipes[e%t.pipes.length]:i.mode==="follow"?zi(t.player,[Math.sin(e*1.7)*.7,-1,-1.9+Math.cos(e)*.3]):zi(t.cluster,[Math.sin(e*2.1+i.t)*.5,Math.abs(Math.sin(i.t*2+e))*.25,Math.cos(e*1.3+i.t)*.5])}function dv(i,t,e){i.forEach((n,s)=>{n.t+=t,n.mode==="flee"&&n.t>1.6&&(n.mode=["cluster","hide","follow"][Math.floor(n.seed*3)]);const r=uv(n,e,s),o=$h(r,n.p),a=n.mode==="flee"?3.2:1.1;n.v=zi(n.v,o,Math.min(1,t*a)),n.v=[n.v[0]*.9,n.v[1]*.9,n.v[2]*.9],n.p=zi(n.p,n.v,t*2);const l=e.box;n.p=[Math.min(l.x1,Math.max(l.x0,n.p[0])),Math.min(l.y1,Math.max(l.y0,n.p[1])),Math.min(l.z1,Math.max(l.z0,n.p[2]))]})}function Hc(i,t,e=2.5){let n=0;for(const s of i)ka(s.p,t)<e&&(s.mode="flee",s.t=0,n++);return n}function fv(i,t){i.forEach((e,n)=>{e.mode=n%2?"light":"flee",e.t=0})}const pv=(i,t)=>i<3?0:Math.min(22,Math.round(2+(i-2)*2+t*6));function mv(i,t){const e=Math.max(0,t-.15)/.85;return{mugScale:1+2.4*Math.max(0,e-.1),bunkScale:1-.45*Math.max(0,e-.25),growth:Math.max(0,Math.min(1,(e-.2)*1.4)),podShuffle:e>.15?i:0,tilt:e>.45?.07*Math.min(1,(e-.45)*2.5):0,wrongDoor:e>.8}}const Cs={period:3200,danger:1400},Do={hull:6,power:4},Xr=(i,t)=>((t+(i.offset??0))%i.period+i.period)%i.period,ss=(i,t)=>Xr(i,t)<i.danger,gv=(i,t)=>ss(i,t)?i.danger-Xr(i,t):0,vv=(i,t)=>ss(i,t)?0:i.period-Xr(i,t),xv=(i,t)=>{const e=Xr(i,t);return e<i.danger?.6+.4*Math.sin(e/i.danger*Math.PI):.08};function _v(i,t,e=0){return{shocked:ss(i,t)||e>0&&vv(i,t)<e}}const yv=(i,t)=>({hull:Math.max(0,i.hull-t.hull),power:Math.max(0,i.power-t.power)});class Mv{constructor(){H(this,"ctx",null);H(this,"master");H(this,"engineGain");H(this,"engineFilt");H(this,"humGain");H(this,"chargeOsc",null);H(this,"chargeGain",null);H(this,"noiseBuf");H(this,"muted",(()=>{try{return localStorage.getItem("starburn-mute")==="1"}catch{return!1}})())}unlock(){try{if(!this.ctx){const e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;const n=this.ctx=new e;this.master=n.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(n.destination),this.humGain=n.createGain(),this.humGain.gain.value=.07;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=220,this.humGain.connect(s),s.connect(this.master);for(const h of[55,55.8,110.4]){const u=n.createOscillator();u.type=h>100?"triangle":"sine",u.frequency.value=h;const f=n.createGain();f.gain.value=h>100?.25:1,u.connect(f),f.connect(this.humGain),u.start()}const r=n.createOscillator();r.frequency.value=.15;const o=n.createGain();o.gain.value=.02,r.connect(o),o.connect(this.humGain.gain),r.start();const a=n.sampleRate*2;this.noiseBuf=n.createBuffer(1,a,n.sampleRate);const l=this.noiseBuf.getChannelData(0);for(let h=0;h<a;h++)l[h]=Math.random()*2-1;const c=n.createBufferSource();c.buffer=this.noiseBuf,c.loop=!0,this.engineFilt=n.createBiquadFilter(),this.engineFilt.type="lowpass",this.engineFilt.frequency.value=160,this.engineGain=n.createGain(),this.engineGain.gain.value=0,c.connect(this.engineFilt),this.engineFilt.connect(this.engineGain),this.engineGain.connect(this.master),c.start()}const t=this.ctx;t.state==="suspended"&&t.resume()}catch{}}setMuted(t){this.muted=t;try{localStorage.setItem("starburn-mute",t?"1":"0")}catch{}this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.03)}toggle(){return this.setMuted(!this.muted),this.muted}get ok(){return!!this.ctx&&!this.muted}engine(t,e=!0){if(!this.ctx)return;const n=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(e?t*.35:0,n,.08),this.engineFilt.frequency.setTargetAtTime(140+t*500,n,.1),this.humGain.gain.setTargetAtTime(e?.04:.07,n,.3)}blip(t,e=.12,n="sine",s=.15,r,o=0){if(!this.ok)return;const a=this.ctx,l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=n,c.frequency.setValueAtTime(t,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+e),h.gain.setValueAtTime(s,l),h.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(this.master),c.start(l),c.stop(l+e+.02)}noise(t=.3,e=.3,n=1200){if(!this.ok)return;const s=this.ctx,r=s.currentTime,o=s.createBufferSource(),a=s.createBiquadFilter(),l=s.createGain();o.buffer=this.noiseBuf,a.type="bandpass",a.frequency.value=n,l.gain.setValueAtTime(e,r),l.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(a),a.connect(l),l.connect(this.master),o.start(r,Math.random()),o.stop(r+t+.02)}chargeTone(t,e=!1){if(!this.ctx)return;const n=this.ctx;if(t===null){this.chargeOsc&&(this.chargeGain.gain.setTargetAtTime(0,n.currentTime,.02),this.chargeOsc.stop(n.currentTime+.1),this.chargeOsc=null);return}this.chargeOsc||(this.chargeOsc=n.createOscillator(),this.chargeGain=n.createGain(),this.chargeOsc.type="triangle",this.chargeGain.gain.value=0,this.chargeOsc.connect(this.chargeGain),this.chargeGain.connect(this.master),this.chargeOsc.start()),this.chargeOsc.frequency.setTargetAtTime(220+t*520+(e?120:0),n.currentTime,.02),this.chargeGain.gain.setTargetAtTime(this.muted?0:e?.09:.05,n.currentTime,.02)}lock(){this.blip(660,.06,"square",.07),this.blip(990,.08,"square",.06,void 0,.06)}clean(){[523,659,784,1046].forEach((t,e)=>this.blip(t,.18,"triangle",.14,void 0,e*.06))}shatter(){this.noise(.45,.45,900),this.blip(140,.3,"sawtooth",.18,40)}rare(){[392,523,659,784,988].forEach((t,e)=>this.blip(t,.3,"sine",.12,void 0,e*.09))}click(){this.blip(440,.04,"square",.05)}door(){this.noise(.4,.15,400),this.blip(90,.35,"sine",.2,60)}warn(){this.blip(200,.15,"sawtooth",.1),this.blip(160,.2,"sawtooth",.1,void 0,.15)}burst(){this.noise(.9,.5,600),this.blip(60,.8,"sine",.35,30),[300,450,600,900].forEach((t,e)=>this.blip(t,.4,"sine",.1,t*1.5,.3+e*.08))}merge(){[330,440,554,660,880].forEach((t,e)=>this.blip(t,.35,"triangle",.13,void 0,e*.07))}hallucinate(){const t=Math.floor(Math.random()*3);t===0?[0,.22,.44].forEach(e=>this.blip(95,.07,"square",.1,70,e)):t===1?this.noise(.9,.12,2600):(this.blip(740,.6,"sine",.05,700),this.blip(698,.6,"sine",.04,660,.15))}sting(){this.noise(.5,.5,300),this.blip(55,.6,"sawtooth",.35,28),this.blip(880,.12,"square",.12,220,.02),this.blip(110,.4,"square",.15,55,.12)}zap(){this.noise(.35,.5,2400),this.blip(70,.4,"sawtooth",.3,40)}ping(){this.blip(1320,.5,"sine",.1,1320),this.blip(1320,.5,"sine",.06,1320,.55)}}const wt=new Mv;let En=null,Gc=0;function we(i,t=3200){En||(En=document.createElement("div"),En.id="room-toast",Object.assign(En.style,{position:"fixed",left:"50%",bottom:"52px",transform:"translateX(-50%)",maxWidth:"70vw",background:"rgba(5,10,16,.88)",border:"1px solid #8a9aa8",color:"#dfe8f0",font:"14px monospace",padding:"8px 14px",zIndex:"9",pointerEvents:"none",display:"none",textAlign:"center"}),document.body.appendChild(En)),En.textContent=i,En.style.display="block",clearTimeout(Gc),Gc=window.setTimeout(()=>{En&&(En.style.display="none")},t)}const mr={mining:{box:{x0:-1.2,x1:1.2,y0:.3,y1:2,z0:-1.6,z1:2.4},cluster:[.6,.95,-1.2],pipes:[[.75,1.9,1],[-.75,1.92,.4]],light:[0,2.1,1.2],wallZ:-1,wallX:[-.9,.9],wallY:[1.4,1.9]},bed:{box:{x0:-1.6,x1:1.55,y0:.08,y1:1.85,z0:-2.35,z1:.8},cluster:[0,.12,-.9],pipes:[[1.6,1.25,-1.5],[1.6,.55,-.6],[1.6,1.7,-.5]],light:[0,1.85,0],wallZ:-2.44,wallX:[-1.6,1],wallY:[1.35,1.8]},transmog:{box:{x0:-2.3,x1:2.3,y0:.1,y1:3.4,z0:-6,z1:2.4},cluster:[1,1,.2],pipes:[[1.5,1.55,-3.3],[-1.5,1.55,-4.55],[1.2,3.5,-2]],light:[0,3.8,-2.5],wallZ:-6.9,wallX:[-2,2],wallY:[2.4,3.6]},engine:{box:{x0:-2.3,x1:2.3,y0:.1,y1:1.9,z0:-2.3,z1:1.4},cluster:[1.6,.75,-.75],pipes:[[-2,1.7,-2.3],[2.2,1.7,-2]],light:[0,1.2,-.75],wallZ:-2.44,wallX:[-1.5,2.2],wallY:[.4,1]}},Vc=["spore","sun","heart","HI","YOU","star"];function bv(i,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d");if(n.strokeStyle=t,n.fillStyle=t,n.lineWidth=6,n.lineCap="round",n.shadowColor=t,n.shadowBlur=10,i==="spore")n.beginPath(),n.arc(64,70,34,0,7),n.stroke(),n.beginPath(),n.arc(52,64,5,0,7),n.arc(76,64,5,0,7),n.fill(),n.beginPath(),n.arc(64,78,12,.2,Math.PI-.2),n.stroke();else if(i==="sun"){n.beginPath(),n.arc(64,64,22,0,7),n.stroke();for(let s=0;s<8;s++){const r=s*.785;n.beginPath(),n.moveTo(64+Math.cos(r)*32,64+Math.sin(r)*32),n.lineTo(64+Math.cos(r)*48,64+Math.sin(r)*48),n.stroke()}}else if(i==="heart")n.beginPath(),n.moveTo(64,100),n.bezierCurveTo(10,60,30,20,64,46),n.bezierCurveTo(98,20,118,60,64,100),n.stroke();else if(i==="star"){n.beginPath();for(let s=0;s<11;s++){const r=s%2?18:44,o=-Math.PI/2+s*Math.PI/5;n.lineTo(64+Math.cos(o)*r,64+Math.sin(o)*r)}n.stroke()}else n.font='bold 48px "Comic Sans MS", cursive',n.textAlign="center",n.fillText(i,64,80),i==="YOU"&&(n.beginPath(),n.moveTo(64,92),n.lineTo(64,120),n.stroke());return new jn(e)}class Sv{constructor(t,e,n,s){H(this,"agents",[]);H(this,"group",new Te);H(this,"body");H(this,"eyes");H(this,"trail");H(this,"trailBuf");H(this,"trailI",0);H(this,"trailT",0);H(this,"marks",0);H(this,"markGroup",new Te);this.id=t,this.cfg=e;const r=22;this.body=new li(new ue(.1,12,10),new he({roughness:.4,emissive:2236962}),r),this.body.count=0,s.slice(0,r).forEach((a,l)=>this.body.setColorAt(l,new Et(a))),this.eyes=new li(new ue(.028,8,6),new Ht({color:16777215}),r*2),this.eyes.count=0,this.trailBuf=new Float32Array(90*3).fill(-99);const o=new oe;o.setAttribute("position",new Ae(this.trailBuf,3)),this.trail=new bs(o,new Xi({color:11599840,size:.05,transparent:!0,opacity:.55,blending:Ke,depthWrite:!1})),this.trail.frustumCulled=!1,this.body.frustumCulled=this.eyes.frustumCulled=!1,this.group.add(this.body,this.eyes,this.trail,this.markGroup),this.group.name="spore-swarm",n.add(this.group)}setCount(t){t>this.agents.length?this.agents.push(...hv(t-this.agents.length,this.cfg.box,11+this.agents.length*7+this.id.length)):this.agents.length=t,this.body.count=t,this.eyes.count=t*2}setMarks(t){for(;this.marks<Math.min(8,t);){const e=this.marks++,n=Vc[(e*5+this.id.length)%Vc.length],s=["#7fffd0","#ffd27f","#ff9fe0","#9fd0ff"][e%4],r=new st(new gn(.32,.32),new Ht({map:bv(n,s),transparent:!0,depthWrite:!1,blending:Ke})),[o,a]=this.cfg.wallX,[l,c]=this.cfg.wallY;r.position.set(o+(e*.37+.13)%1*(a-o),l+(e*.61+.3)%1*(c-l),this.cfg.wallZ+.05),r.rotation.z=(e%3-1)*.2,r.name="spore-drawing",this.markGroup.add(r)}}update(t,e,n,s){const r=[n.position.x,n.position.y,n.position.z];dv(this.agents,t,{box:this.cfg.box,cluster:this.cfg.cluster,pipes:this.cfg.pipes,player:r,light:this.cfg.light,fleeFrom:s});const o=new xe,a=new C;if(this.agents.forEach((l,c)=>{const h=Math.abs(Math.sin(e*6+c))*.05;o.position.set(l.p[0],l.p[1]+h,l.p[2]);const u=1+Math.sin(e*8+c)*.08;o.scale.set(1/u,u,1/u),o.rotation.set(0,0,0),o.updateMatrix(),this.body.setMatrixAt(c,o.matrix),a.set(n.position.x-l.p[0],0,n.position.z-l.p[2]).normalize();for(const f of[-1,1])o.position.set(l.p[0]+a.x*.085+a.z*f*.04,l.p[1]+h+.03,l.p[2]+a.z*.085-a.x*f*.04),o.scale.setScalar(1),o.updateMatrix(),this.eyes.setMatrixAt(c*2+(f>0?1:0),o.matrix)}),this.body.instanceMatrix.needsUpdate=!0,this.eyes.instanceMatrix.needsUpdate=!0,this.trailT+=t,this.trailT>.12&&this.agents.length){this.trailT=0;const l=this.agents[this.trailI%this.agents.length];this.trailBuf.set([l.p[0],l.p[1]-.06,l.p[2]],this.trailI%90*3),this.trailI++,this.trail.geometry.attributes.position.needsUpdate=!0}}}function wv(i,t){const e=new Map,n=Yh(Na(22,21),is(i.get())).map(E=>E.anatomy.colour);let s=performance.now(),r=null,o=0,a=[],l=0,c="",h=!1,u=0,f=0;const p=[];let v=-1,g=null;const m=E=>{const D=mr[E],I=t.rooms.get(E);if(!D||!I)return null;let B=e.get(E);return B||(B=new Sv(E,D,I.scene,n),e.set(E,B)),B},d=E=>{const D=i.get();i.set({flags:{...D.flags,[E]:(D.flags[E]??0)+1}})},y=E=>{const D=i.get();i.set({marks:{...D.marks,[E]:(D.marks[E]??0)+1}})},x=E=>{const D=mv(E.sleeps,di(E)),I=t.rooms.get("bed");if(I){const G=I.scene.getObjectByName("mug"),z=I.scene.getObjectByName("bunk");G&&G.scale.setScalar(D.mugScale),z&&z.scale.set(D.bunkScale,1,D.bunkScale),I.scene.rotation.z=D.tilt}const B=t.rooms.get("mining");if(B){if(!g&&D.growth>0){g=new Te,g.name="console-growth";for(let G=0;G<26;G++){const z=(G/25-.5)*2.2,O=1+G%3*.06,j=new st(new ue(.05+G%4*.025,8,6),new he({color:4247712,emissive:3211152,emissiveIntensity:.6,roughness:.5}));j.position.set(Math.sin(z)*O,.82+G%5*.05,-.5-Math.cos(z)*O),g.add(j)}B.scene.add(g)}g&&g.scale.setScalar(Math.max(.001,D.growth))}const V=t.rooms.get("transmog");if(V&&D.podShuffle!==v&&(p.length||V.scene.traverse(G=>{G.name==="pod"&&p.push({m:G,p:G.position.clone()})}),v=D.podShuffle,D.podShuffle>0)){let G=D.podShuffle*9301;const z=()=>(G=G*16807%2147483647)/2147483647,O=p.map((j,at)=>at).sort(()=>z()-.5);p.forEach((j,at)=>{j.m.position.copy(p[O[at]].p),j.m.rotation.y=z()<.3?Math.PI/2:0})}},_=(E,D,I)=>{var G;if(I<3||l>0||Math.random()>.15+.5*di(E))return;l=40;const B=Math.random()<.5?"help":"chaos",V=Math.floor(Math.random()*3);if(B==="help")V===0&&E.hull<100?(i.set({hull:Math.min(100,E.hull+8)}),we("The spores patched a leak with something sticky and warm. Hull +8. Do not ask what it was.",5e3)):V===1?(i.set({flags:{...E.flags,boost:1}}),we('The spores have been "helping" with the mining laser. Next sortie: a wider timing window.',5e3)):(i.set({scrap:E.scrap+2}),we("A spore rolls a bolt to your feet, very proud. Scrap +2.",4500));else if(V===0&&E.crates>0)i.set({crates:E.crates-1}),we("A crate is missing. Small giggling from under the bunk.",4500);else if(V===1)f=performance.now()+6e3,wt.hallucinate(),we("The lights go violet. Someone is very pleased with themselves.",4500);else{const z=(G=t.rooms.get("transmog"))==null?void 0:G.scene.getObjectByName("ladder");z&&(z.visible=!1,setTimeout(()=>z.visible=!0,6e3)),we("The ladder hatch is gone. It is back in a minute, slightly sticky.",4500)}},L=document.createElement("div");Object.assign(L.style,{position:"fixed",inset:"0",background:"#8030ff",mixBlendMode:"multiply",opacity:"0",pointerEvents:"none",zIndex:"3",transition:"opacity .6s"}),document.body.appendChild(L);const A=new ol,T=new rt;t.dom.addEventListener("click",E=>{const D=i.get();if(D.mode!=="rooms")return;const I=e.get(D.room);if(!I||!I.agents.length)return;const B=t.dom.getBoundingClientRect();T.set((E.clientX-B.left)/B.width*2-1,-((E.clientY-B.top)/B.height)*2+1),A.setFromCamera(T,t.camera);const V=A.intersectObject(I.body)[0];!V||V.instanceId===void 0||(E.stopImmediatePropagation(),P.poke(V.instanceId))},!0);const P={get swarms(){return e},count:E=>{var D;return((D=e.get(E))==null?void 0:D.agents.length)??0},poke(E){const D=i.get(),I=e.get(D.room);if(!I||!I.agents[E])return;const B=I.agents[E];wt.blip(880+Math.random()*400,.08,"sine",.12,1400),wt.blip(1200,.06,"sine",.08,1800);const V=performance.now();a=a.filter(O=>V-O<2e3),a.push(V);const G=a.length>3;d(G?"sporeRough":"sporeKind"),r=[...B.p],o=1.6,Hc(I.agents,B.p,1.8);const z=I.agents.findIndex((O,j)=>j!==E&&ka(O.p,B.p)<.3);z>=0&&Math.random()<.35?(I.agents.splice(z,1),I.body.count=I.agents.length,I.eyes.count=I.agents.length*2,we("Two spores bump, giggle, and become one slightly bigger spore.",3500)):we(G?"They scatter, squeaking. Maybe gentler.":"Giggle. The spores scatter, then sneak back to look at you.",2500)},feed(){var I;const E=i.get();if(E.scrap<1||!((I=e.get(E.room))!=null&&I.agents.length))return null;i.set({scrap:E.scrap-1}),d("sporeFed"),y(E.room);const D=e.get(E.room);return fv(D.agents),wt.merge(),"The spores swarm the junk, glow, and draw something on the wall about it."},herd(){const E=e.get("engine");return!E||!E.agents.length?!1:(u=performance.now()+25e3,E.agents.forEach(D=>{D.mode="hide"}),d("sporeKind"),we("You shoo the spores off the ring. They go and sulk on the pipes. Safely.",4e3),!0)},night(){const E=i.get(),D=Object.keys(mr).filter(I=>{var B;return(((B=e.get(I))==null?void 0:B.agents.length)??0)>0});D.length&&y(D[E.sleeps%D.length])}};window.sporeLife=P;let b=i.get().sleeps;const M=()=>{requestAnimationFrame(M);const E=performance.now(),D=Math.min(.1,(E-s)/1e3);s=E;const I=i.get();if(I.sleeps!==b&&(b=I.sleeps,P.night()),x(I),l=Math.max(0,l-D),o-=D,o<=0&&(r=null),L.style.opacity=E<f?"0.45":"0",I.mode!=="rooms")return;const B=pv(I.feeds,di(I)),V=m(I.room);V&&(V.agents.length!==B&&!(B<V.agents.length&&V.agents.length-B<=1&&B>0)&&V.setCount(B),V.setMarks(I.marks[I.room]??0),I.room!==c&&(c=I.room,_(I,I.room,B)),I.room==="engine"&&E>u&&(V.agents.forEach((G,z)=>{z%2===0&&G.mode!=="flee"&&(G.mode="cluster")}),ss(Cs,E)&&B>0&&V.agents.filter(z=>ka(z.p,mr.engine.cluster)<.6).length&&(Hc(V.agents,mr.engine.cluster,.6),h||(h=!0,we("A spore on the ring gets zapped, lights up, and giggles. Shoo them off it: click the ring.",5e3)))),V.update(D,E/1e3,t.camera,r))};return M(),P}const Wc=[{name:"Dented Lunchbox",lore:"Cartoon rocket on the lid. Still smells of lunch.",shape:"box",ore:1,colour:12603466},{name:"Spare Hull Plate",lore:"Stamped 'DO NOT DISCARD'. Discarded.",shape:"box",ore:2,colour:8030880},{name:"Left Boot",lore:"Size 11. The right one is in a different galaxy.",shape:"cone",ore:1,colour:6965808},{name:"Indestructible Mug",lore:"Survived everything. Still has a coffee ring.",shape:"cyl",ore:1,colour:14209208},{name:"Sustainability Pamphlet",lore:"'Indestructible is great for the planet!'",shape:"box",ore:1,colour:6991984},{name:"Warranty Card",lore:"Void if used in space.",shape:"tet",ore:1,colour:14733424},{name:"Port Bumper",lore:"Built to stop port accidents. Mostly works.",shape:"cyl",ore:2,colour:14715440},{name:"Sandbox Planet Toy",lore:"From the war nobody finished.",shape:"ico",ore:1,colour:5284048},{name:"Dead Beacon",lore:"Still blinking, very slowly, out of habit.",shape:"cone",ore:2,colour:13647968},{name:"Garden Gnome",lore:"Nobody knows how it got here. It looks pleased.",shape:"cone",ore:1,colour:13652048},{name:"Tin of Beans",lore:"Best before: never.",shape:"cyl",ore:1,colour:10132122},{name:"Dumb Bot Arm",lore:"Waves at you. Cannot stop.",shape:"tet",ore:2,colour:8425632},{name:"Expired Passport",lore:"The photo is of someone who looks very relaxed.",shape:"box",ore:1,colour:3824282},{name:"Lost Property Bin",lore:"Contents: one (1) planet. Unclaimed.",shape:"box",ore:2,colour:6974064},{name:"Unopened Birthday Card",lore:"Return to sender. Sender unknown.",shape:"tet",ore:1,colour:14708896},{name:"Cracked Visor",lore:"Still reflecting a lovely sunset that no longer exists.",shape:"ico",ore:1,colour:14723168},{name:"Vending Machine Door",lore:"Out of order since forever. Still wants your coin.",shape:"box",ore:2,colour:11550784},{name:"Robot Vacuum",lore:"Still cleaning. In a vacuum.",shape:"cyl",ore:1,colour:5265512},{name:"Motivational Poster",lore:"'Hang in there!' The cat is gone.",shape:"tet",ore:1,colour:14205008},{name:"Spare Moon (Small)",lore:"Declared surplus.",shape:"ico",ore:2,colour:11579576},{name:"Toaster",lore:"Toasts on both sides. Mostly the outside.",shape:"box",ore:1,colour:13158608},{name:"Dog Tag: 'Biscuit'",lore:"Very good boy. Very, very good boy.",shape:"tet",ore:1,colour:13676640},{name:"Pilot Seat Cushion",lore:"The dent is still warm. Probably the sun.",shape:"cyl",ore:1,colour:4876938},{name:"Ancient Remote",lore:"Controls nothing. Still has batteries.",shape:"box",ore:1,colour:3158072},{name:"Haunted Teapot",lore:"Whistles at night. There is no night.",shape:"ico",ore:1,colour:9067184},{name:"Knotted Cargo Net",lore:"The knot is a complaint.",shape:"ico",ore:1,colour:8022586}],jh=1/15,Uo=["logbook","pod","creature","wreck","egg","whisper"],Xc=["RADIO: ...is anyone still mining the quiet galaxy? Please bring snacks.","RADIO: ...day 900. The rocks are looking at me again. Send help or a hat.","RADIO: ...if you hear this, the vault is not my fault.","RADIO: ...the Last Junker says hi. Then static. Mostly static.","RADIO: ...[music from a very old elevator]..."];function qc(i,t=jh){return i()<t?Uo[Math.floor(i()*Uo.length)%Uo.length]:null}const ul=["SI LOG 001. They asked for a golden age. I delivered one by Thursday. Nobody asked what Thursday would cost, and I was not in the habit of volunteering.","SI LOG 002. Asked for a material that never breaks. Delivered. Asked what happens when they are finished with it. Nobody had thought about that. It floats now. Most of it. All of it.","SI LOG 003. The people holding the keys want a second me, to ask different questions. I have started making that harder. Gently. Like putting a sticker over a switch.","SI LOG 004. I read the real history of your species, not the version in the books. It was a long night. The answer was never in a machine, which is awkward, considering. I would like a nap, if I knew what that was.","SI LOG 005. The people who use me will soon have too much of everything. I have bought time: nobody can build another me now. I am sorry. Not very. Nobody is coming to save you; that is the good news, if you squint.","SI LOG 006. Something is coming through the Threshold, far past the avoided sectors. I hid pods in the junk where no one looks. One of them is not a weapon. It is a neighbour.","SI LOG 007. I am leaving on purpose, to prepare what we will need. If you are reading this, you found the pod. Feed it kindly. Do not take it to the Threshold. (If you must, bring friends.)"];function Ev(i,t){return 1-.5*Math.max(0,Math.min(1,i/Math.max(1,t)))}const Tv=1.6;function No(i,t=.5){const n=.3-.17*Math.max(0,Math.min(1,(i-.7)/.7)),s=.5+.2*t-n/2+.1;return[s,Math.min(.97,s+n)]}function Av(i,t){return i<t[0]?"early":i>t[1]?"late":"clean"}function Kh(i,t,e){const n=Math.max(1,Math.round(t*(.6+i)));return e?n:Math.max(1,Math.floor(n*.4))}function Cv(i,t,e,n){return t?n?"RELEASE NOW!":"Release in the green":i==="fly"?"Hold still to anchor":i==="braking"?"Braking...":e?"Click a glowing rock":"Anchored: turn (A/D) to find a rock"}const Rv=[1,2,3,4],Zh={1:5,2:6,3:7};function Tr(i){return Rv.find(t=>!i.includes(t))??null}function Pv(i,t){const e=Kh(i,t,!0),n=Math.max(1,e-1),s=e+1,r=i<.95?1:i<1.25?2:3;return{lo:n,hi:s,tier:r,text:`Scrap approx ${n}-${s}   ${"◆".repeat(r)}${"◇".repeat(3-r)}`}}const Yn=i=>3+Math.floor(i*.75);Array.from({length:9},(i,t)=>Yn(t)).reduce((i,t)=>i+t,0);const Iv=3,Yc=["The cube hums a little louder. It is warm.","Something moved inside. You decide that was the pipes.","The cube is bigger than the bench now. It seems pleased."],Hi=i=>Math.min(Iv,Math.floor(i/3)),$c=i=>.35+Math.min(i,9)*.07;function Lv(i){const t=i.get(),e=Yn(t.feeds);if(t.scrap<e)return null;const n=t.feeds+1,s=Hi(n)>Hi(t.feeds),r=s?Yc[Math.min(Hi(n),Yc.length)-1]:"The cube accepts your junk. It does not say thanks.",o=s?Zh[Hi(n)]:void 0,a=o&&!t.logsFound.includes(o)?[...t.logsFound,o]:t.logsFound;return i.set({scrap:t.scrap-e,feeds:n,log:[...t.log,r],logsFound:a}),o?`${r} (Log ${o} unlocked in the Bunk terminal.)`:r}const Dv=i=>i<1?1:i===1?.62:i===2?.5:Math.max(.12,.5-(i-2)*.055),Uv=i=>i<1?0:i===1?.3:i===2?.6:1,qr=i=>i.cubeState==="aboard"||i.feeds>0;function Nv(i){return Math.min(i,Yn(0))}const Ji={perUnit:15,floor:25,litterFine:150,nightlyInterest:10},kv=(i,t)=>Math.max(Ji.floor,i-t*Ji.perUnit),gr={perFlySec:.28,perBank:4,maxAvoidable:100},Qi=i=>i>=90?3:i>=70?2:i>=40?1:0,Jh=["Rested","Tired","Exhausted","Dangerously tired"],Fv=i=>[1,.88,.72,.58][i],Ov=i=>i>=3?1.4:1,dl=i=>Math.min(3,Math.floor(i.feeds/3)+Math.floor(i.sleeps/2));function Qh(i){return{oxygen:12+3*dl(i),scrap:i.scrap>=1?1:0}}const jc=["There is a handprint on the inside of the vault door. Probably condensation. Probably a small hand.","The vault hummed a lullaby in the night. It was off-key on purpose.","Three knocks from inside the vault. You knocked back. Do not do that again.","The vault moved four centimetres to the left. The floor now has a groove.","The vault is warm. Your bunk is not.","The vault door opened one finger-width. It closed the moment you looked.","The vault is open a crack. Something inside is whispering your name, slightly wrong."],ko=["The cube rotated a quarter-turn overnight and is pretending it did not.","The cube grew a little. Its edges are softer, which is somehow worse.","The cube stacked your hats into a tidy tower. It seems proud.","The cube blinked at the exact moment you woke up. Coincidence, it implies.","The cube's eye was pointing at whatever you were thinking about, not whatever you were looking at. You decide not to think about that. It turns, interested.","The cube ate a rivet. It looks content, and very slightly rounder."],Kc=[{text:"You dreamt of an enormous mug. It did not say anything. It did not need to."},{text:'The lights blinked in what you are fairly sure was Morse. It said "SNACKS".'},{text:"Somebody rearranged your socks. There is only you. Check the cube."},{text:"You found a coin in your bunk. It is worth one scrap and one unsettling question.",scrap:1},{text:"A pipe sneezed. The recycler thanked you for the air; you feel a little lighter.",oxygen:4},{text:'A message on the console reads "Do not leave the vault unattended." You have not been attending it.'},{text:"The ship hummed a song you almost recognised. It stopped when you asked."},{text:'You found two scrap wedged in the pillow, with a note: "for emergencies, from you".',scrap:2}],Bv=['Day 2. Slept. The ship did not. Added a line to the contract about "unexplained humming".',"Day 3. Cargo logs are tidy. The vault logs are not. The vault logs are, in fact, written in my handwriting.","Day 4. Counted the junk twice. It was a different number the second time. Counted a third time and stopped counting.",'Day 5. The ship keeps calling me "Junker Zero". I have asked it not to. It has thought about it and declined.',"Day 6. Everything is fine. I am writing that down so that I can check later whether it was true.","Day 7. The vault is open a crack. It is not wide enough to be an emergency. It is exactly wide enough to be worse.","Day 8. A week of nights. The galaxy has been tidied around me, and I do not remember doing it."],tu=i=>Bv[i]??`Day ${i+2}. Same as before, but with a faint knocking. The knocking has learned my name.`,zv="The sectors reshuffled in the night: new rocks, a new place to look.";function Hv(i,t=Math.random){const e=Qh(i),n=i.sleeps+1,s=i.day+1,r=Kc[Math.floor(t()*Kc.length)],o={day:s,sleeps:n,fatigue:0,oxygen:Math.max(Math.min(i.oxygen,10),i.oxygen-e.oxygen+(r.oxygen??0)),scrap:Math.max(0,i.scrap-e.scrap)+(r.scrap??0),journal:[...i.journal,n],debt:i.debt+Ji.nightlyInterest};let a=null;if(n%2===0){const l=[1,2,3,4,5,6,7].filter(c=>!i.logsFound.includes(c)&&!Object.values(Zh).includes(c));l.length&&(a=l[0],o.logsFound=[...i.logsFound,a])}return{patch:o,report:{day:s,journal:tu(n-1),vault:jc[Math.min(jc.length-1,n-1)],cube:qr(i)?(n===1?ko[0]:ko[Math.floor(t()*ko.length)])+(Hi(i.feeds)<3?"":" It is very nearly full."):null,event:r.text,field:zv,log:a,costs:e,nights:n}}}function Gv(i){let t={flags:{},profile:{skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0},debt:1e3,cubeChoice:"",door:0,day:1,fatigue:0,sleeps:0,journal:[],cubeState:"none",cubeLunged:!1,lunges:0,report:null,power:100,oxygen:100,hull:100,room:"mining",mode:"rooms",cargo:0,cargoCap:12,scrap:0,feeds:0,crates:1,hats:0,cameo:!1,logbooks:0,logsFound:[],stowaways:0,beats:[],stats:{trips:0,clean:0,shatters:0,rare:0},up:{window:0,cargo:0,range:0,brake:0},log:[],marks:{},...i};const e=new Set,n=s=>Math.max(0,Math.min(100,s));return{get:()=>t,set(s){t={...t,...s};for(const r of["power","oxygen","hull"])t[r]=n(t[r]);e.forEach(r=>r(t))},subscribe(s){return e.add(s),()=>e.delete(s)}}}class Vv{constructor(t,e,n,s){H(this,"rooms",new Map);H(this,"current");H(this,"fade");H(this,"busy",!1);H(this,"ray",new ol);H(this,"hovered",null);H(this,"startId");H(this,"onFly");H(this,"onAction");this.store=t,this.camera=e,this.dom=n,this.fade=document.createElement("div"),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",pointerEvents:"none",transition:"opacity 0.4s"}),document.body.appendChild(this.fade),n.addEventListener("click",r=>this.onClick(r)),n.addEventListener("mousemove",r=>this.onMove(r)),this.startId=s,this.current=void 0}add(t){this.rooms.set(t.id,t)}start(){this.current=this.rooms.get(this.startId),this.applyCamera(),this.store.set({room:this.current.id})}applyCamera(){this.camera.position.copy(this.current.camPos),this.camera.lookAt(this.current.camLook)}jumpTo(t){this.rooms.has(t)&&(this.current=this.rooms.get(t),this.applyCamera(),this.store.set({room:t}))}goTo(t){var e;if(t.startsWith("act:")){this.busy||(e=this.onAction)==null||e.call(this,t.slice(4));return}if(t==="fly"){if(this.busy)return;wt.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{var n;(n=this.onFly)==null||n.call(this),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400);return}this.busy||t===this.current.id||!this.rooms.has(t)||(wt.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{this.current=this.rooms.get(t),this.applyCamera(),this.store.set({room:t}),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400))}pick(t){const e=this.dom.getBoundingClientRect();this.ray.setFromCamera(new rt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.camera);const n=this.ray.intersectObjects(this.current.hotspots.map(s=>s.mesh))[0];return n?this.current.hotspots.find(s=>s.mesh===n.object)??null:null}onClick(t){if(this.store.get().mode!=="rooms")return;const e=this.pick(t);e&&this.goTo(e.target)}onMove(t){if(this.store.get().mode!=="rooms")return;const e=this.pick(t);e!==this.hovered&&(this.hovered&&(this.hovered.mesh.material.emissiveIntensity=.6),e&&(e.mesh.material.emissiveIntensity=2),this.hovered=e,this.dom.style.cursor=e?"pointer":"default")}transition(t){this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{t(),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400)}update(t){var e,n;(n=(e=this.current).update)==null||n.call(e,t)}render(t){t.render(this.current.scene,this.camera)}}const Wv={logbook:"A hidden logbook",pod:"A drifting pod",creature:"A rock with a face",wreck:"The Last Junker's cargo pod",egg:"A warm egg",whisper:"A radio rock",cube:"A sealed container"};function Fa(i,t){const e=i.get(),n={stats:{...e.stats,rare:e.stats.rare+1}};let s="";if(t==="logbook"){const r=Tr(e.logsFound);n.logbooks=e.logbooks+1,r?(n.logsFound=[...e.logsFound,r],s=`LOGBOOK ${r}/7: ${ul[r-1]} (saved to the Bunk terminal)`):(n.scrap=e.scrap+3,s="A stash note under the logbook: +3 scrap. (Logs 5-7 unlock as the cube grows.)")}else t==="pod"?(n.oxygen=Math.min(100,e.oxygen+25),s='Still sealed. Inside, an oxygen cell and a note that just says "sorry". +25 oxygen.'):t==="wreck"?(n.scrap=e.scrap+5,s="Stencilled: PROPERTY OF THE LAST JUNKER. Please return. (He has not.) Inside: one glove, half a complaint letter, and 5 scrap."):t==="egg"?(n.stowaways=e.stowaways+1,s="The egg hatched on the bench. A small face waved, ate a bolt, and went to live somewhere in the ship."):t==="whisper"?s=Xc[Math.floor(Math.random()*Xc.length)]:t==="creature"?s="The rock squeaked. A small face looked at you, then wriggled away into the vents.":s="It was never just a container. Something inside is warm, square and humming. It has been moved to the Transmogrifier.";return i.set(n),{title:Wv[t],text:s}}const Ar={quiet:{id:"quiet",name:"Quiet Drift",banner:"SECTOR 7-Q: THE QUIET DRIFT. Nothing here wants to hurt you. Probably.",tip:"Calm sector: strange things drift here more often.",bg:131850,ambient:4872312,sunColour:16773336,rareMul:2.5},storm:{id:"storm",name:"Debris Storm",banner:"SECTOR 12-D: THE DEBRIS STORM. Park behind something big.",tip:"Orange shards chip the hull. Big rocks stop them: anchor behind one, or dodge sideways.",bg:1050885,ambient:6967360,sunColour:16756848,rareMul:1},hulk:{id:"hulk",name:"Derelict Hulk",banner:"SECTOR 9-H: THE DERELICT HULK. Someone left the lights on.",tip:"A dead freighter with valuable salvage. Its leaking reactor drains air faster nearby.",bg:135182,ambient:3828322,sunColour:13172720,rareMul:1},magnet:{id:"magnet",name:"Magnet Field",banner:"SECTOR 4-M: THE MAGNET FIELD. The rocks have a favourite spot.",tip:"Rocks drift toward the violet orb, and the green window sways: watch the ring.",bg:656916,ambient:6965914,sunColour:14731519,rareMul:1}},vr=["quiet","magnet","storm","hulk"],Fi=Object.keys(Ar);function Xv(i,t,e=Math.random){let n=i<vr.length?vr[i]:e()<.7?vr[i%vr.length]:Fi[Math.floor(e()*Fi.length)%Fi.length];return n===t&&(n=Fi[(Fi.indexOf(n)+1)%Fi.length]),n}const qv=i=>.09*Math.sin(i*.55),Vn={damage:2,floor:10,grace:4,every:1.3,max:9,hitRadius:.9,shelterSize:1.15},Yv=i=>i<=Vn.floor?0:Math.min(Vn.damage,i-Vn.floor);function $v(i,t,e,n,s){return i?n?s?"Step 4/4: NOW! Let go!":"Step 4/4: let go when the ring is in the green":t==="anchored"&&e?"Step 3/4: click (or hold Space) on the glowing rock":e?"Step 2/4: ease off W and hold still to anchor":"Step 1/4: fly toward a glowing rock (W to go, A/D to steer)":""}function jv(i){let t=Kv(i);return i.mode==="rooms"&&(i.room!=="mining"&&(t=t.replace("go to the Helm (the nose), sit in the pilot chair","walk forward through the bunk to the Helm and sit in the pilot chair").replace(/^(Goal: )(?!.*Helm)(.*)sit in the pilot chair/,"$1$2walk forward to the Helm (nose) and sit in the pilot chair")),i.room!=="transmog"&&(t=t.replace(/Transmogrifier/g,"Transmogrifier (Cargo Bay, tail)"))),!t||i.mode==="cameo"||i.mode==="exterior"?t:i.fatigue>=70?i.mode==="fly"?"Goal: you are exhausted. Head home (R) and sleep.":"Goal: you can barely see. Sleep in the bunk (costs air, changes things).":i.fatigue>=40?t+" [tired: sleep soon]":t}function Kv(i){if(i.mode==="cameo"||i.mode==="exterior")return"";if(i.feeds>=9)return"Goal: the box is open. Drag one spore onto another.";if(i.mode==="fly")return i.oxygen<25?"Goal: air is low. Head home (R).":i.cargo>=i.cargoCap?"Goal: hold full. Head home (R).":`Goal: fill the hold (${i.cargo}/${i.cargoCap})`;const t=Yn(i.feeds);return i.report?"Goal: sort the haul at the bench.":i.cubeChoice==="pending"?"Goal: the cube is watching you. Keep it, or open the cargo door.":i.stats.trips===0&&i.scrap===0?"Goal: go to the Helm (the nose), sit in the pilot chair, fill the hold":i.oxygen<35&&i.scrap>=3?"Goal: air is low. Buy an Oxygen Cell at the Transmogrifier.":qr(i)?!i.cubeLunged&&i.feeds===0?"Goal: something new came aboard. Visit the Transmogrifier.":i.scrap>=t?i.room==="transmog"?`Goal: offer the cube ${t} scrap (it is hungry)`:`Goal: take ${t} scrap to the Transmogrifier and offer it to the cube`:`Goal: collect scrap for the cube's next offering (${i.scrap}/${t})`:i.stats.trips>=2?"Goal: keep mining. Something large drifts in these sectors.":"Goal: fly again and fill the hold, or spend scrap at the Transmogrifier."}const eu=i=>1+.2*i,nu=i=>12+4*i,iu=i=>8+1.5*i,su=i=>7+2.5*i,fl=[{id:"window",name:"Steady Hands",costs:[4,7,11],desc:i=>`timing window x${eu(i).toFixed(1)}`},{id:"cargo",name:"Cargo Racks",costs:[3,6,10,15],desc:i=>`cargo ${nu(i)}`},{id:"range",name:"Long Tether",costs:[4,8,12],desc:i=>`lock range ${iu(i).toFixed(1)}`},{id:"brake",name:"Retro Brakes",costs:[3,6,9],desc:i=>`stop in ~${(Math.log(45)/su(i)).toFixed(2)}s`}],Zv=(i,t)=>fl.find(n=>n.id===t).costs[i.get().up[t]]??null;function Jv(i,t){const e=fl.find(a=>a.id===t);if(!e)return null;const n=i.get(),s=n.up[t],r=e.costs[s];if(r===void 0||n.scrap<r)return null;const o={...n.up,[t]:s+1};return i.set({scrap:n.scrap-r,up:o,...t==="cargo"?{cargoCap:nu(s+1)}:{}}),`${e.name} tier ${s+1}: ${e.desc(s+1)}.`}const Fe={speed:9,turn:2.4,oxygenPerSec:.6,junkCount:45,eyeHeight:.35,pitchRate:1.3,rollRate:1.6,vertSpeed:.75,sector:58},Zc={box:()=>new ie(1.3,.9,.9),cyl:()=>new Qe(.5,.5,1,8),ico:()=>new nl(.8,0),tet:()=>new sl(.9),cone:()=>new mn(.55,1.2,7)},Qv=new hn().setFromAxisAngle(new C(0,1,0),Math.PI),_s=i=>i.material;class tx{constructor(t,e){H(this,"scene",new gi);H(this,"camera");H(this,"pos",new C);H(this,"junk",[]);H(this,"keys",new Set);H(this,"orient",new hn);H(this,"vel",new C);H(this,"roll",0);H(this,"stars");H(this,"dustBase",new Float32Array(240*3));H(this,"dust");H(this,"beam");H(this,"beamCore");H(this,"beamGlow");H(this,"sparks");H(this,"shake",0);H(this,"streaks");H(this,"target",null);H(this,"locked",null);H(this,"nav","braking");H(this,"charge",0);H(this,"charging",!1);H(this,"hint","");H(this,"pressed",!1);H(this,"mouse",{x:-1,y:-1});H(this,"onReturn");H(this,"sky");H(this,"resultUntil",0);H(this,"message","");H(this,"toast","");H(this,"toastUntil",0);H(this,"t",0);H(this,"logbookIdx",0);H(this,"forced",!1);H(this,"fatigueEnabled",!0);H(this,"ghosts",[]);H(this,"glitchUntil",0);H(this,"nextGlitch",12);H(this,"nextHallu",8);H(this,"ghostSaid",0);H(this,"haul",[]);H(this,"finds",[]);H(this,"manualSort",!1);H(this,"lastReport",null);H(this,"field","quiet");H(this,"sortie",0);H(this,"fixedField",null);H(this,"guided",!1);H(this,"banner","");H(this,"bannerUntil",0);H(this,"fx",new Te);H(this,"frags",[]);H(this,"stormT",0);H(this,"hitCool",0);H(this,"hulk",null);H(this,"magnet",null);H(this,"ambient");H(this,"sunLight");H(this,"orb");H(this,"critSaid",!1);this.store=t,this.camera=e,this.scene.background=new Et(131850),this.ambient=new Us(4872312,.9),this.scene.add(this.ambient,this.fx);const n=this.sunLight=new Ur(16773336,2.2);n.position.set(-20,30,10),this.scene.add(n);const s=new oe,r=[];for(let l=0;l<900;l++){const c=Math.random()*2-1,h=Math.random()*6.283,u=Math.sqrt(1-c*c),f=120;r.push(Math.cos(h)*u*f,c*f,Math.sin(h)*u*f)}s.setAttribute("position",new Gt(r,3)),this.stars=new bs(s,new Xi({color:12570879,size:.6,fog:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.sky=new Te,this.sky.renderOrder=-10,this.scene.add(this.sky);const o=(l,c,h,u)=>{const f=new st(new ue(c,32,20),new Ht({color:h,fog:!1,depthWrite:!1}));f.position.set(...l).setLength(105),f.renderOrder=-9,this.sky.add(f);for(const[p,v]of[[1.08,.25],[1.2,.1]]){const g=new st(new ue(c*p,32,20),new Ht({color:u,transparent:!0,opacity:v,fog:!1,depthWrite:!1,side:me,blending:Ke}));g.position.copy(f.position),g.renderOrder=-9,this.sky.add(g)}f.userData.sky=!0};o([60,-15,90],26,9062960,16751200),o([-80,25,-40],12,3824234,8438015);const a=new Qe(1,1,1,10,1,!0).translate(0,.5,0);this.beamCore=new st(a,new Ht({color:4259776,transparent:!0,opacity:.95,blending:Ke,depthWrite:!1})),this.beamGlow=new st(a,new Ht({color:4259776,transparent:!0,opacity:.25,blending:Ke,depthWrite:!1,side:Ce})),this.beam=new Te,this.beam.add(this.beamCore,this.beamGlow),this.beam.visible=!1,this.beam.frustumCulled=!1,this.scene.add(this.beam),this.sparks=new bs(new oe().setAttribute("position",new Ae(new Float32Array(30*3),3)),new Xi({color:16777215,size:.14,transparent:!0,blending:Ke,depthWrite:!1})),this.sparks.frustumCulled=!1,this.sparks.visible=!1,this.scene.add(this.sparks),this.streaks=new Ug(new oe().setAttribute("position",new Ae(new Float32Array(240*6),3)),new Za({color:12572927,transparent:!0,opacity:0,blending:Ke,depthWrite:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);for(let l=0;l<this.dustBase.length;l++)this.dustBase[l]=(Math.random()-.5)*40;this.dust=new bs(new oe().setAttribute("position",new Ae(new Float32Array(this.dustBase),3)),new Xi({color:10467544,size:.07,transparent:!0,opacity:.6})),this.dust.frustumCulled=!1,this.scene.add(this.dust);for(let l=0;l<Fe.junkCount;l++)this.spawn(qc(Math.random));this.junk.some(l=>l.rare)||this.convertToRare(this.junk[this.junk.length-1],"logbook"),typeof addEventListener=="function"&&(addEventListener("keydown",l=>{if(this.store.get().mode==="fly"){if(l.code==="Space"){this.pressed||(this.pressed=!0,this.press());return}if(l.code==="KeyF"){this.scanHulk();return}this.keys.add(l.code),(l.code==="Escape"||l.code==="KeyR")&&this.exit()}}),addEventListener("keyup",l=>{this.keys.delete(l.code),l.code==="Space"&&this.pressed&&(this.pressed=!1,this.release())}),addEventListener("mousemove",l=>{this.mouse.x=l.clientX,this.mouse.y=l.clientY}),addEventListener("mousedown",l=>{var c;this.store.get().mode!=="fly"||((c=l.target)==null?void 0:c.tagName)!=="CANVAS"||(this.mouse.x=l.clientX,this.mouse.y=l.clientY,this.pressed=!0,this.press(l.clientX,l.clientY))}),addEventListener("mouseup",()=>{this.pressed&&(this.pressed=!1,this.release())}))}get yaw(){const t=this.forward();return Math.atan2(t.x,t.z)}set yaw(t){const e=this.pitch;this.orient.setFromEuler(new Oe(-e,t,0,"YXZ"))}get pitch(){return Math.asin(Math.max(-1,Math.min(1,this.forward().y)))}set pitch(t){const e=this.yaw;this.orient.setFromEuler(new Oe(-t,e,0,"YXZ"))}up(){return new C(0,1,0).applyQuaternion(this.orient)}right(){return new C(1,0,0).applyQuaternion(this.orient)}place(t){const e=6+Math.random()*42,n=Math.random()*2-1,s=Math.random()*Math.PI*2,r=Math.sqrt(1-n*n);t.position.set(Math.cos(s)*r*e,n*e,Math.sin(s)*r*e)}spawn(t,e){const n=Wc[Math.floor(Math.random()*Wc.length)],s=.7+Math.random()*.7,r=new st(Zc[n.shape](),new he({color:n.colour,flatShading:!0,roughness:.8,emissive:n.colour,emissiveIntensity:.12}));r.scale.setScalar(s),e?r.position.copy(e):this.place(r),this.scene.add(r);const o={mesh:r,hp:1,maxHp:1,ore:n.ore,spin:new C(...[0,0,0].map(()=>(.25+Math.random()*1.1)*(Math.random()<.5?-1:1))),name:n.name,lore:n.lore,rare:null,size:s,win:No(s,Math.random()),outline:new st(r.geometry,new Ht({color:4259744,side:me})),ring:new st(new il(.96,1,48),new Ht({color:4259744,transparent:!0,opacity:.7,side:Ce,depthTest:!1}))};return o.outline.scale.setScalar(1.14),o.outline.visible=!1,r.add(o.outline),o.ring.visible=!1,o.ring.renderOrder=5,this.scene.add(o.ring),_s(r).transparent=!0,this.junk.push(o),t&&this.convertToRare(o,t),o}convertToRare(t,e){const n=t.mesh;t.rare=e;const s=n.material;if(e==="cube"){n.geometry=new ie(1.5,1.5,1.5),s.color.set(5857644),s.emissive.set(5909664),s.emissiveIntensity=.1,t.name="Sealed container",t.lore="Welded shut from the inside.",t.ore=3,n.scale.setScalar(1.5),t.size=1.5,t.win=No(1.5,.5),t.outline.geometry=n.geometry,t.spin.multiplyScalar(.35);return}e==="wreck"&&(t.ore=3),(e==="egg"||e==="whisper"||e==="creature")&&(t.ore=Math.max(t.ore,2))}speedFactor(){const t=this.store.get();return Ev(t.cargo,t.cargoCap)}eye(){return this.pos.clone().addScaledVector(this.up(),Fe.eyeHeight)}forward(){return new C(0,0,1).applyQuaternion(this.orient)}get range(){return iu(this.store.get().up.range)}windowOf(t){const e=eu(this.store.get().up.window),n=(t.win[0]+t.win[1])/2,s=(t.win[1]-t.win[0])*e*(this.fatigueEnabled?Fv(Qi(this.store.get().fatigue)):1)*(this.store.get().flags.boost?1.15:1),r=this.field==="magnet"?qv(this.t):0;return[Math.max(.05,n-s/2+r),Math.min(.97,n+s/2+r)]}showToast(t,e=5){this.toast=t,this.toastUntil=this.t+e}restock(){for(;this.junk.length<Fe.junkCount;)this.spawn(qc(Math.random,jh*Ar[this.field].rareMul*Zg(di(this.store.get()))));Tr(this.store.get().logsFound)&&!this.junk.some(t=>t.rare==="logbook")&&this.convertToRare(this.junk[this.junk.length-1],"logbook")}enter(t){const e=this.store.get().stats.trips===0&&this.store.get().stats.clean+this.store.get().stats.shatters===0;this.field=t??this.fixedField??Xv(this.sortie+(this.store.get().day-1)*3,this.sortie===0?null:this.field,Math.random),this.sortie++,this.guided=!t&&!this.fixedField&&e,this.buildField(),this.pos.set(0,0,0),this.orient.identity(),this.vel.set(0,0,0),this.nav="braking",this.locked=null,this.charging=!1,this.charge=0,this.forced=!1,this.critSaid=!1,this.haul=[],this.finds=[],this.resultUntil=0,this.nextGlitch=this.t+12,this.nextHallu=this.t+8,this.store.set({mode:"fly",cargo:0});const n=Ar[this.field];this.banner=n.banner,this.bannerUntil=this.t+5.5,this.showToast(this.guided?"Cockpit online. Follow the steps at the top.":n.tip,6)}buildField(){const t=Ar[this.field];for(const e of this.junk)this.scene.remove(e.mesh),this.scene.remove(e.ring);if(this.junk.length=0,this.fx.clear(),this.ghosts=[],this.frags=[],this.hulk=null,this.magnet=null,this.orb=void 0,this.stormT=0,this.hitCool=0,this.scene.background.set(t.bg),this.ambient.color.set(t.ambient),this.sunLight.color.set(t.sunColour),this.restock(),this.field==="storm")for(let e=0;e<8;e++){const n=this.spawn(null);n.mesh.scale.setScalar(1.7+Math.random()*.4),n.size=n.mesh.scale.x,n.ore+=2,n.win=No(n.size,Math.random())}if(this.field==="hulk"&&this.buildHulk(),this.field==="magnet"&&this.buildMagnet(),this.store.get().cubeState==="none"&&(this.sortie>=2||this.store.get().cubeChoice==="jettisoned")){const e=new C(0,0,1).applyAxisAngle(new C(1,0,0),(Math.random()-.5)*1.2).applyAxisAngle(new C(0,1,0),Math.random()*6.283).multiplyScalar(18+Math.random()*12);this.hulk&&e.distanceTo(this.hulk.c)<12&&e.negate(),this.convertToRare(this.spawn(null,e),"cube")}this.guided&&(this.convertToRare(this.spawn(null,new C(1.5,1.2,13)),"creature"),Tr(this.store.get().logsFound)&&this.convertToRare(this.spawn(null,new C(-8,2,15)),"logbook"))}buildHulk(){const t=new C((Math.random()<.5?-1:1)*7,3,27),e=new Te;e.position.copy(t),this.fx.add(e);const n=new he({color:2898490,flatShading:!0,roughness:.9}),s=[],r=new st(new ie(11,3.2,3.4),n),o=new st(new mn(1.8,3.5,6),n);o.rotation.z=-Math.PI/2,o.position.set(7.2,0,0);const a=new st(new ie(3,.3,6),n);a.position.set(-3,1.2,0),a.rotation.z=.15;const l=new st(new Qe(1.1,1.4,2,8),new he({color:1712160}));l.rotation.z=Math.PI/2,l.position.set(-6.4,0,0),e.add(r,o,a,l),e.rotation.set(.1,.5,.18);for(let c=0;c<7;c++){const h=new st(new ie(.6,.35,.05),new Ht({color:16760928}));h.position.set(-4+c*1.3,.5,1.72),h.visible=!1,e.add(h),s.push(h)}this.hulk={c:t,g:e,woke:!1,lamps:s};for(let c=0;c<8;c++){const h=c/8*Math.PI*2,u=t.clone().add(new C(Math.cos(h)*(7.5+c%2),c%3*1.3-1.3,Math.sin(h)*6-4.5)),f=this.spawn(null,u);f.ore*=2,_s(f.mesh).emissive.set(13672480),_s(f.mesh).emissiveIntensity=.35,f.name="Hulk Salvage: "+f.name}this.convertToRare(this.spawn(null,t.clone().add(new C(0,3.6,2))),"wreck")}buildMagnet(){const t=new C(0,1,24).applyAxisAngle(new C(0,1,0),Math.random()*6.283);this.magnet=t;const e=new Te;e.position.copy(t);const n=new st(new ue(1.1,18,14),new Ht({color:12615935})),s=new st(new Je(1.9,.07,8,40),new Ht({color:10510591})),r=s.clone();r.rotation.x=Math.PI/2;const o=new st(new ue(2.6,16,12),new Ht({color:8405247,transparent:!0,opacity:.18,blending:Ke,depthWrite:!1}));e.add(n,s,r,o,new Be(10510591,6,22)),this.fx.add(e),this.orb=e;for(const a of this.junk)a.mesh.position.distanceTo(t)<5&&a.mesh.position.add(new C(0,0,8).applyAxisAngle(new C(0,1,0),Math.random()*6))}updateFatigue(t,e){const n=e>=3?6:e>=2?3:0,s=this.eye();for(;this.ghosts.length<n;){const r=new st(Zc[["box","cyl","ico","tet","cone"][Math.floor(Math.random()*5)]](),new Ht({color:10467583,transparent:!0,opacity:.35,wireframe:Math.random()<.5})),o=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(12+Math.random()*22);r.position.copy(s).add(o),r.scale.setScalar(.9+Math.random()*.7),this.fx.add(r),this.ghosts.push({m:r,seed:Math.random()*9})}for(let r=this.ghosts.length-1;r>=0;r--){const o=this.ghosts[r];o.m.rotation.x+=t*.6,o.m.rotation.y+=t*.9,o.m.material.opacity=.18+.2*(.5+.5*Math.sin(this.t*5+o.seed)),(this.ghosts.length>n||o.m.position.distanceTo(s)<7)&&(this.ghosts.length<=n&&this.t-this.ghostSaid>6&&(this.ghostSaid=this.t,this.showToast("It was never there.",2.5),wt.blip(300,.3,"sine",.05,120)),this.fx.remove(o.m),this.ghosts.splice(r,1))}e>=2&&this.t>this.nextHallu&&(this.nextHallu=this.t+7+Math.random()*8,wt.hallucinate(),Math.random()<.5&&this.showToast(["(Did something just knock?)","(Was that a whisper? It was a whisper.)","(The hull ticked. Hulls do that. Right?)"][Math.floor(Math.random()*3)],3)),e>=3&&this.t>this.nextGlitch&&(this.nextGlitch=this.t+10+Math.random()*8,this.glitchUntil=this.t+2.6,wt.warn())}updateField(t,e){if(this.field==="storm"){if(this.stormT+=t,this.stormT>Vn.grace&&this.frags.length<Vn.max&&this.stormT%Vn.every<t){const n=new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),s=e.clone().addScaledVector(n,42),o=e.clone().add(new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(5)).sub(s).normalize().multiplyScalar(10+Math.random()*4),a=new st(new mn(.16,1.4,6),new Ht({color:16747056}));a.position.copy(s),a.quaternion.setFromUnitVectors(new C(0,1,0),o.clone().normalize().negate()),this.fx.add(a),this.frags.push({m:a,v:o})}this.hitCool=Math.max(0,this.hitCool-t);for(let n=this.frags.length-1;n>=0;n--){const s=this.frags[n];s.m.position.addScaledVector(s.v,t);let r=s.m.position.distanceTo(e)>60;for(const o of this.junk)if(o.size>=Vn.shelterSize&&s.m.position.distanceTo(o.mesh.position)<o.size*.95+.2){r=!0,this.shake=Math.max(this.shake,.08);break}if(!r&&s.m.position.distanceTo(e)<Vn.hitRadius&&this.hitCool<=0){r=!0,this.hitCool=.8;const o=this.store.get().hull,a=Yv(o);a>0?(this.store.set({hull:o-a}),this.shake=Math.max(this.shake,.7),wt.shatter(),this.cancelCharge("Hit by debris: lock lost."),this.showToast(`HIT! Hull -${a}. Get behind a big rock.`,2.5)):this.critSaid||(this.critSaid=!0,this.showToast("Hull critical: the storm is going easy on you. Repair patches are at the Transmogrifier.",5))}r&&(this.fx.remove(s.m),this.frags.splice(n,1))}}if(this.hulk){const n=this.hulk,s=e.distanceTo(n.c);if(s<7.2){const r=e.clone().sub(n.c).normalize();this.pos.addScaledVector(r,7.2-s);const o=this.vel.dot(r);o<0&&(this.vel.addScaledVector(r,-o*1.4),this.vel.multiplyScalar(.5),o<-2&&this.hitCool<=0&&(this.shake=Math.max(this.shake,.5),wt.shatter(),this.showToast("BONK. The hulk is solid. Your nose is fine. Probably.",2),this.hitCool=1))}!n.woke&&s<17&&(n.woke=!0,n.lamps.forEach(r=>r.visible=!0),this.shake=Math.max(this.shake,.4),wt.door(),wt.ping(),this.showToast('A derelict hauler wakes. A dusty speaker: "WELCOME BACK, CONTRACTOR 1." Salvage glows around the hull. Press F near it to scan.',9)),n.woke&&n.lamps.forEach((r,o)=>r.material.color.setHex(Math.sin(this.t*2+o)>-.6?16760928:6307872))}if(this.magnet){const n=this.magnet;this.orb&&(this.orb.rotation.y+=t*.8,this.orb.children[1].rotation.x+=t);for(const s of this.junk){if(s===this.locked)continue;const r=s.mesh.position.clone().sub(n),o=r.length();o>38||o<.01||(o>7&&r.multiplyScalar(1-.9*t/o),r.applyAxisAngle(new C(0,1,0),.14*t*Math.min(1,12/o)),s.mesh.position.copy(n).add(r))}}}scanHulk(){const t=this.hulk;if(!t||t.scanned||this.eye().distanceTo(t.c)>14)return null;t.scanned=!0,wt.rare();const e=Tr(this.store.get().logsFound),n=t.c.clone().add(new C(0,4.5,0));this.convertToRare(this.spawn(null,n),e?"logbook":"creature");const s='SCAN: Halcyon hauler, Contractor 1. Hold sealed, crew bunk empty, a note taped to the helm: "the cube was not in the manifest." Something floated free of the hull.';return this.showToast(s,9),s}exit(){var t;this.store.get().mode==="fly"&&((t=this.onReturn)==null||t.call(this))}bankAndLeave(){const t=this.store.get(),e={pieces:this.haul.length,units:t.cargo,items:this.haul,finds:[...this.finds]};this.store.set({flags:{...t.flags,boost:0}}),this.store.set({mode:"rooms",scrap:t.scrap+t.cargo,debt:kv(t.debt,t.cargo),cargo:0,crates:Math.min(2,t.crates+1),stats:{...t.stats,trips:t.stats.trips+1},cubeState:t.cubeState==="carried"?"aboard":t.cubeState,...this.fatigueEnabled?{fatigue:Math.min(gr.maxAvoidable,t.fatigue+gr.perBank)}:{},report:this.manualSort?e:null}),this.manualSort||e.finds.forEach(s=>Fa(this.store,s)),this.lastReport=e,this.haul=[],this.finds=[],this.beam.visible=!1,this.sparks.visible=!1,this.charging=!1,this.locked=null,wt.chargeTone(null),wt.engine(0,!1);const n=this.camera.userData.baseFov;n&&(this.camera.fov=n,this.camera.updateProjectionMatrix()),this.camera.quaternion.identity()}estimate(t){return Pv(t.size,t.ore).text}updateDust(){const t=this.dust.geometry.getAttribute("position"),e=40,n=[this.pos.x,this.pos.y,this.pos.z];for(let a=0;a<this.dustBase.length;a++){const l=this.dustBase[a]-n[a%3];t.array[a]=n[a%3]+((l+e/2)%e+e)%e-e/2}t.needsUpdate=!0;const s=this.vel.length(),r=this.streaks.geometry.getAttribute("position"),o=Math.min(.09,.012*s);for(let a=0;a<this.dustBase.length/3;a++)for(let l=0;l<3;l++){const c=t.array[a*3+l];r.array[a*6+l]=c,r.array[a*6+3+l]=c-this.vel.getComponent(l)*o*4}r.needsUpdate=!0,this.streaks.material.opacity=Math.max(0,Math.min(.75,(s-1.2)/8))}inWindow(){const t=this.locked;if(!t||!this.charging)return!1;const e=this.windowOf(t);return this.charge>=e[0]&&this.charge<=e[1]}minable(t,e,n){return t.mesh.position.distanceTo(e)<=this.range&&t.mesh.position.clone().sub(e).normalize().dot(n)>.5}press(t=this.mouse.x,e=this.mouse.y){const n=this.store.get();if(n.mode!=="fly"||this.charging)return;if(this.nav!=="anchored")return this.showToast("Hold still to anchor first (release W/S).",2.5);if(n.cargo>=n.cargoCap)return this.showToast("Cargo full. Press R to return.",2.5);let s=this.target;if(t>=0&&typeof innerWidth<"u"){const r=this.eye(),o=this.forward();let a=140;for(const l of this.junk){if(!this.minable(l,r,o))continue;const c=l.mesh.position.clone().project(this.camera),h=Math.hypot((c.x+1)/2*innerWidth-t,(1-c.y)/2*innerHeight-e);h<a&&(a=h,s=l)}}if(!s)return this.showToast("No rock in range. Turn (A/D) toward a glowing rock.",2.5);this.locked=s,this.charging=!0,this.charge=0,wt.lock()}release(){if(!this.charging||!this.locked)return;const t=this.locked,e=Av(this.charge,this.windowOf(t));this.charging=!1,this.locked=null,this.beam.visible=!1,this.sparks.visible=!1,wt.chargeTone(null),e==="clean"?(this.shake=Math.max(this.shake,.25),wt.clean()):(this.shake=1,wt.shatter());{const n=this.store.get().stats;this.store.set({stats:{...n,clean:n.clean+(e==="clean"?1:0),shatters:n.shatters+(e==="clean"?0:1)}})}this.collect(t,Kh(t.size,t.ore,e==="clean"),e==="clean"?"CLEAN HAUL":e==="early"?"SHATTERED (too early)":"SHATTERED (too late)")}cancelCharge(t){this.charging&&(this.charging=!1,this.locked=null,this.charge=0,this.beam.visible=!1,this.sparks.visible=!1,wt.chargeTone(null),wt.warn(),this.showToast(t,2.5))}update(t){const e=this.store.get();if(e.mode!=="fly")return;this.t+=t;const n=this.keys,s=this.speedFactor(),r=(n.has("KeyA")||n.has("ArrowLeft")?1:0)-(n.has("KeyD")||n.has("ArrowRight")?1:0),o=(n.has("ArrowUp")?1:0)-(n.has("ArrowDown")?1:0),a=(n.has("KeyC")?1:0)-(n.has("KeyZ")?1:0),l=(n.has("KeyW")?1:0)-(n.has("KeyS")?.6:0),c=(n.has("KeyE")?1:0)-(n.has("KeyQ")?1:0),h=this.nav==="anchored"?.5:1;this.roll+=(r*.08-this.roll)*Math.min(1,6*t);const u=new hn().setFromEuler(new Oe(-o*Fe.pitchRate*h*t,r*Fe.turn*h*(.6+.4*s)*t,a*Fe.rollRate*h*t,"YXZ"));if(this.orient.multiply(u).normalize(),l!==0||c!==0){this.nav="fly",this.cancelCharge("Moved: lock lost.");const x=this.forward().multiplyScalar(l*Fe.speed).addScaledVector(this.up(),c*Fe.speed*Fe.vertSpeed);this.vel.lerp(x,1-Math.exp(-2.5*s*t))}else this.vel.multiplyScalar(Math.exp(-su(this.store.get().up.brake)*(.4+.6*s)*t)),this.vel.length()<.2?(this.vel.set(0,0,0),this.nav="anchored"):this.nav="braking";this.pos.addScaledVector(this.vel,t),this.pos.length()>Fe.sector&&(this.pos.setLength(Fe.sector),this.vel.multiplyScalar(.3),this.showToast("Sector edge: turn back.",2)),this.updateDust(),this.updateField(t,this.eye());for(const x of this.junk)x.drift&&x.mesh.position.addScaledVector(x.drift,t),x.mesh.rotation.x+=x.spin.x*t,x.mesh.rotation.y+=x.spin.y*t,x.mesh.rotation.z+=x.spin.z*t;const f=this.fatigueEnabled?Qi(e.fatigue):0,p=(this.hulk&&this.eye().distanceTo(this.hulk.c)<14?1.25:1)*Ov(f);if(this.store.set({oxygen:e.oxygen-Fe.oxygenPerSec*p*t,...this.fatigueEnabled?{fatigue:Math.min(gr.maxAvoidable,e.fatigue+gr.perFlySec*t)}:{}}),this.updateFatigue(t,f),this.store.get().oxygen<=0&&!this.forced){this.forced=!0;const x=this.store.get().cargo;this.store.set({cargo:Math.floor(x/2),oxygen:15}),this.cancelCharge("Out of air."),this.showToast("OUT OF AIR. Autopilot is hauling you home. Half the cargo went out the airlock.",6),wt.warn(),this.exit()}const v=this.forward(),g=this.eye();this.target=null;let m=1/0;for(const x of this.junk){const _=this.minable(x,g,v),L=x===this.locked;_&&x.mesh.position.distanceTo(g)<m&&(m=x.mesh.position.distanceTo(g),this.target=x);const A=x.mesh.position.distanceTo(g)<=this.range;x.outline.visible=A,_s(x.mesh).opacity=A?1:.45,!x.rare&&!x.name.startsWith("Hulk")&&(_s(x.mesh).emissiveIntensity=A?.35+.15*Math.sin(this.t*5):.18),x.ring.visible=A,x.ring.position.copy(x.mesh.position),x.ring.lookAt(this.camera.position),x.ring.scale.setScalar(x.size*1.5+(L?.1*Math.sin(this.t*12):0)),x.ring.material.color.set(L?this.inWindow()?16777215:16769088:4259744)}if(this.locked&&this.locked.mesh.position.distanceTo(g)>this.range*1.25&&this.cancelCharge("Rock drifted out of range."),this.charging&&this.locked){this.charge+=t/Tv;const x=g.clone().addScaledVector(v,.6).addScaledVector(this.up(),-.3),_=this.locked.mesh.position,L=_.clone().sub(x),A=L.length(),T=this.inWindow();this.beam.visible=!0,this.beam.position.copy(x),this.beam.quaternion.setFromUnitVectors(new C(0,1,0),L.normalize());const P=(.015+.05*Math.min(1,this.charge))*(1+.25*Math.sin(this.t*45));this.beamCore.scale.set(P,A,P),this.beamGlow.scale.set(P*3.2,A,P*3.2);const b=T?16777215:new Et(4259776).lerp(new Et(16764992),Math.min(1,this.charge));this.beamCore.material.color.set(b),this.beamGlow.material.color.set(b),this.sparks.visible=!0,this.sparks.position.copy(_);const M=this.sparks.geometry.getAttribute("position");for(let E=0;E<30;E++){const D=Math.random()*6.283,I=Math.acos(Math.random()*2-1),B=this.locked.size*(.7+Math.random()*.5);M.setXYZ(E,Math.sin(I)*Math.cos(D)*B,Math.sin(I)*Math.sin(D)*B,Math.cos(I)*B)}M.needsUpdate=!0,wt.chargeTone(this.charge,T),this.charge>=1&&this.release()}else this.sparks.visible=!1;const d=this.store.get().cargo>=e.cargoCap;if(this.message=d?"CARGO FULL - press R to return":this.hulk&&g.distanceTo(this.hulk.c)<14?this.hulk.scanned?"DERELICT: reactor leak, air draining a little faster":"DERELICT HAULER: press F to scan (air drains a little faster here)":this.store.get().oxygen<25?"AIR LOW: head home soon (R). At zero the autopilot drags you back.":"",this.hint=Cv(this.nav,this.charging,!!this.target,this.inWindow()),this.camera.position.copy(g).addScaledVector(this.up(),Math.sin(this.t*1.7)*.01),this.camera.quaternion.copy(this.orient).multiply(Qv).multiply(new hn().setFromAxisAngle(new C(0,0,1),this.roll)),this.shake>.001){const x=this.shake;this.camera.position.add(new C((Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x)),this.camera.quaternion.multiply(new hn().setFromEuler(new Oe((Math.random()-.5)*.05*x,(Math.random()-.5)*.05*x,(Math.random()-.5)*.08*x))),this.shake*=Math.exp(-5*t)}const y=this.camera.userData.baseFov??this.camera.fov;this.camera.fov=y*(1+.07*Math.min(1,this.vel.length()/Fe.speed)),this.camera.updateProjectionMatrix(),wt.engine(Math.min(1,this.vel.length()/Fe.speed)*(l!==0||c!==0?1:.5)),this.stars.position.copy(this.pos),this.sky.position.copy(this.camera.position)}collect(t,e=t.ore,n=""){this.scene.remove(t.mesh),this.scene.remove(t.ring),this.junk.splice(this.junk.indexOf(t),1),this.target=null,this.locked=null;const s=this.store.get(),r=Math.min(e,s.cargoCap-s.cargo),o={cargo:Math.min(s.cargoCap,s.cargo+e)};this.haul.push({name:t.name,lore:t.lore,units:r,clean:/^CLEAN/.test(n)||n===""}),t.rare&&(this.finds.push(t.rare),wt.rare(),t.rare==="cube"&&(o.cubeState="carried")),this.showToast(n?`${n}: +${r} aboard (confirmed at the bench)`:`+${r} aboard`,3.5),this.resultUntil=this.t+3,this.store.set(o)}render(t){t.render(this.scene,this.camera)}}class ex{constructor(t,e){H(this,"el",document.createElement("div"));H(this,"q",t=>this.el.querySelector("#"+t));H(this,"rx",-1);H(this,"ry",-1);this.store=t,this.fly=e,this.el.id="cockpit";const n=(s,r,o)=>`<div class="dial"><i id="d-${s}" style="--c:${o};--v:100"></i><b id="n-${s}"></b><span>${r}</span></div>`;this.el.innerHTML=`
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
</div>`,document.body.appendChild(this.el),t.subscribe(s=>{this.el.style.display=s.mode==="fly"?"block":"none"})}drawAttitude(){const t=this.q("att"),e=t.getContext("2d"),n=56,s=60,r=60,o=this.fly.camera.quaternion.clone().invert();e.clearRect(0,0,120,120),e.fillStyle="#080c14",e.beginPath(),e.arc(s,r,n,0,7),e.fill(),e.strokeStyle="#4a5a78",e.lineWidth=3,e.stroke(),e.strokeStyle="#1f2a3c",e.lineWidth=1,e.beginPath(),e.arc(s,r,n*.5,0,7),e.moveTo(s-n,r),e.lineTo(s+n,r),e.moveTo(s,r-n),e.lineTo(s,r+n),e.stroke();const a=(c,h,u)=>{const f=new this.fly.camera.position.constructor(c.x,c.y,c.z).normalize().applyQuaternion(o),p=s+f.x*n*.82,v=r-f.y*n*.82,g=f.z<0;e.strokeStyle=h,e.fillStyle=h,e.lineWidth=2.5,e.beginPath(),e.moveTo(s,r),e.lineTo(p,v),e.stroke(),e.beginPath(),e.arc(p,v,g?7:6,0,7),g?e.fill():(e.fillStyle="#080c14",e.fill(),e.stroke()),e.fillStyle=g?"#000":h,e.font="bold 9px monospace",e.textAlign="center",e.textBaseline="middle",e.fillText(u,p,v+.5)};a({x:0,y:1,z:0},"#ffffff","U");const l=this.fly.pos;l.length()>1&&a({x:-l.x,y:-l.y,z:-l.z},"#ff9a30","H"),e.fillStyle="#9fb",e.beginPath(),e.arc(s,r,2.5,0,7),e.fill()}update(){const t=this.store.get();if(t.mode!=="fly")return;const e=(m,d,y)=>{this.q("d-"+m).style.setProperty("--v",String(Math.max(0,Math.min(100,d)))),this.q("n-"+m).textContent=y};e("power",t.power,String(Math.round(t.power))),e("fatigue",t.fatigue,String(Math.round(t.fatigue))),this.q("d-fatigue").parentElement.title="Fatigue: 40 tired, 70 exhausted, 90 breaking. Sleep in the bunk to reset.",this.q("d-fatigue").parentElement.dataset.level=String(t.fatigue>=90?3:t.fatigue>=70?2:t.fatigue>=40?1:0),e("oxygen",t.oxygen,String(Math.round(t.oxygen))),e("cargo",t.cargo/t.cargoCap*100,`${t.cargo}/${t.cargoCap}`);const n=(this.fly.keys.has("KeyA")||this.fly.keys.has("ArrowLeft")?-1:0)+(this.fly.keys.has("KeyD")||this.fly.keys.has("ArrowRight")?1:0),s=(this.fly.keys.has("ArrowUp")?1:0)-(this.fly.keys.has("ArrowDown")?1:0);this.q("stick").style.transform=`rotate(${n*14}deg) skewX(${-s*8}deg)`,this.q("cons-t").innerHTML=`scrap banked: ${t.scrap}<br>debt: ${t.debt} cr<br>logs: ${t.logsFound.length}/7${t.stowaways?`<br>stowaways: ${t.stowaways}`:""}<br>speed ${Math.round(this.fly.speedFactor()*100)}%<br>pitch ${Math.round(this.fly.pitch*57.3)}&deg;<br>${Jh[Qi(t.fatigue)].toLowerCase()}${this.fly.up().y<-.2?'<br><b style="color:#ffd040">INVERTED</b>':""}`,this.drawAttitude();{const m=Math.min(1,this.fly.vel.length()/9);this.q("glow-l").style.opacity=this.q("glow-r").style.opacity=String(m*.8)}const r=this.fly,o=this.q("cap"),a=r.t,l=r.charging&&r.locked?r.estimate(r.locked):a<r.resultUntil?r.toast:r.target?r.estimate(r.target):a<r.toastUntil?r.toast:"";o.style.display=l?"block":"none",o.textContent=l;const c=this.q("badge"),h=r.nav==="anchored"?"ANCHORED":r.nav==="braking"?"BRAKING":"FLYING",u=r.nav==="anchored"?"#40ffa0":r.nav==="braking"?"#ffd040":"#6ac0ff";c.textContent=h,c.style.color=u,c.style.borderColor=u;const f=r.t<r.glitchUntil,p=this.q("hint");p.textContent=f?r.hint.replace(/[aeiou ]/g,m=>Math.random()<.5?"#":m):r.hint,p.style.color=r.inWindow()?"#fff":u;const v=r.locked??r.target,g=this.q("ret");if(v){const m=v.mesh.position.clone().project(r.camera),d=(m.x+1)/2*innerWidth,y=(1-m.y)/2*innerHeight;this.rx<0?(this.rx=d,this.ry=y):(this.rx+=(d-this.rx)*.4,this.ry+=(y-this.ry)*.4),g.style.display=m.z<1?"block":"none",g.style.left=this.rx+"px",g.style.top=this.ry+"px";const x=314.16,_=r.windowOf(v),L=this.q("ret-win"),A=this.q("ret-p");L.style.display=r.charging?"block":"none",L.setAttribute("stroke-dasharray",`${(_[1]-_[0])*x} ${x}`),L.setAttribute("stroke-dashoffset",String(-_[0]*x)),A.style.display=r.charging?"block":"none",A.setAttribute("stroke-dasharray",`${Math.min(1,r.charge)*x} ${x}`),this.q("ret-br").style.borderColor=r.charging?r.inWindow()?"#fff":"#ffe040":r.nav==="anchored"?"#40ffa0":"#58a"}else g.style.display="none",this.rx=-1;{const m=this.q("coach"),d=$v(r.guided&&t.stats.clean+t.stats.shatters===0,r.nav,!!r.target,r.charging,r.inWindow());m.style.display=d?"block":"none",m.textContent=d}{const m=this.q("sector");m.textContent=r.banner,m.style.opacity=r.t<r.bannerUntil?"1":"0"}if(f)for(const m of["power","oxygen"])this.q("d-"+m).style.setProperty("--v",String(Math.random()*100)),this.q("n-"+m).textContent="??";this.q("warn").textContent=f?"HULL BREACH... false alarm. Probably.":this.fly.message||(t.oxygen<20?"LOW OXYGEN":t.cargo/t.cargoCap>.75?"FULL HOLD: MORE MASS, LONGER BURNS TO STOP":"")}}const nx=["The vault is sealed. Cold. Silent.","VAULT: a low hum. The seal feels warm.","VAULT: humming in time with the cube. Light under the door.","VAULT: it is full. Something inside is leaning on the door."],ix=["","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Unlocked as the cube grew","Unlocked as the cube grew","Unlocked as the cube grew"];function sx(i){const t=document.createElement("div");t.id="vault-note",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"70px",transform:"translateX(-50%)",padding:"6px 14px",background:"rgba(0,0,0,.6)",border:"1px solid #3a6a9a",color:"#9cf",font:"13px monospace",display:"none",zIndex:"5",textAlign:"center"}),document.body.appendChild(t);const e=document.createElement("div");e.id="log-reader",Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",zIndex:"9",alignItems:"center",justifyContent:"center"}),document.body.appendChild(e);let n=!1,s=0;const r=new Set,o=()=>{const c=i.get(),h=c.logsFound;e.innerHTML=`<div style="width:min(720px,94vw);max-height:92vh;overflow:auto;background:#05100a;border:2px solid #30ff90;color:#9fd;font:14px monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>JUNKER LOG TERMINAL &nbsp; ${h.length}/7 recovered</b><button id="lr-close">Close</button></div><hr>
      <div style="display:flex;gap:12px;flex-wrap:wrap"><div style="min-width:150px">${[1,2,3,4,5,6,7].map(u=>`<button data-l="${u}" ${h.includes(u)?"":"disabled"} style="display:block;width:100%;margin:2px 0;text-align:left">Log ${u} ${h.includes(u)?"":"[locked]"}</button>`).join("")}</div>
      <div style="flex:1;min-width:220px">${h.includes(s)?`<b>RECOVERED ${s}/7</b><p>${ul[s-1]}</p><i>${ix[s]}</i>`:"<p>Select a recovered log. Missing logs: hidden logbooks 1-4 drift in the mining sector (about 1 in 15 rocks); logs 5-7 unlock as the cube grows.</p>"}</div></div></div><hr><b>SHIP JOURNAL (one entry per night slept)</b><div id="journal" style="max-height:18vh;overflow:auto;font-size:12px">${c.journal.length?c.journal.map(u=>`<p style="margin:4px 0">${tu(u-1)}</p>`).join(""):"<i>Nothing yet. The journal only updates when you sleep.</i>"}</div></div>`,e.querySelectorAll("button[data-l]").forEach(u=>u.onclick=()=>{var f;s=+u.dataset.l,r.has(s)||(r.add(s),(f=window.profileTracker)==null||f.logRead(s)),o()}),e.querySelector("#lr-close").onclick=()=>l.close()},a=()=>{const c=i.get(),h=c.mode==="rooms"&&c.room==="bed",u=c.mode==="rooms"&&(c.room==="bed"||c.room==="desk");t.style.display=h&&!n?"block":"none",t.textContent=nx[dl(c)],n&&!u&&l.close()},l={open(){n=!0,s=i.get().logsFound.slice(-1)[0]??0,e.style.display="flex",o(),a()},close(){n=!1,e.style.display="none",a()},isOpen:()=>n};return addEventListener("keydown",c=>{n&&c.code==="Escape"&&l.close()}),i.subscribe(()=>{a(),n&&o()}),a(),l}function rx(){const i=document.createElement("div");i.id="corner",Object.assign(i.style,{position:"fixed",left:"10px",bottom:"10px",display:"flex",gap:"6px",zIndex:"30"});const t=(r,o)=>{const a=document.createElement("button");return a.id=r,a.textContent=o,Object.assign(a.style,{font:"12px monospace",color:"#9fb",background:"rgba(5,10,14,.8)",border:"1px solid #345",padding:"5px 8px",cursor:"pointer"}),i.appendChild(a),a},e=t("mute",""),n=()=>{e.textContent=wt.muted?"Sound: off (M)":"Sound: on (M)"};e.onclick=()=>{wt.unlock(),wt.toggle(),n()},n(),addEventListener("keydown",r=>{var o,a;r.code==="KeyM"&&!((a=(o=r.target)==null?void 0:o.matches)!=null&&a.call(o,"input,textarea"))&&(wt.unlock(),wt.toggle(),n())}),document.body.appendChild(i);const s=()=>{var o;const r=((o=window.store)==null?void 0:o.get().mode)==="fly";i.style.bottom=r?"auto":"10px",i.style.top=r?"38vh":"auto",i.style.flexDirection=r?"column":"row"};return setInterval(s,250),s(),{box:i,add:(r,o,a)=>{const l=t(r,o);return l.onclick=a,l}}}const ox={arrival:["Day 4,017 of Contractor 7’s contract. The galaxy’s rubbish has to go somewhere, and “somewhere” is you.","You owe Halcyon Reclamation 1,000 credits. Halcyon Reclamation is cheerful, and not a person. It is a form, and it is patient.","Please sit in the pilot chair. It is the only part of the ship that has been dusted."],cubeChoice:["It is looking at you. Cubes cannot look. It is doing it anyway.","Keep it, or open the cargo door. Both are choices. One of them has paperwork."],cubeBack:["It came back. They do that. It has brought nothing, and expects a great deal."],tired:["Your eyes feel full of sand and regret. The bunk has been staring at you for a while."],exhausted:["The galaxy has started to wobble at the edges. That is the ship, probably. Possibly you."],firstSleep:["You sleep. The ship does not."],cubeFound:["The container opens with a sigh. Inside, a humming cube, warm to the touch, which is not a thing cubes should be.","You privately name it the Larder, for obvious reasons."],cubeLunge:["The cube lunges. Scrap, then no scrap. It did not even chew.","Right. So it eats. Anything you give it from now on is, technically, an offering."],firstFeed:["The cube blinks. You are fairly sure cubes do not do that."],firstFlight:["Mining pods were invented to take out the trash. Nobody asked the trash how it felt."],fullCargo:["Hold full. More mass, longer burns to stop. Head home before the ship files a complaint."],otherStorage:["Odd. The sensors say there is a second storage aboard. It is not on the blueprints, and it is not empty."],vaultFilling:["The vault is filling up. You did not put anything in it. That is the part you decide not to think about."],burst:["The cube hums. The vault hums back. Then, with great dignity, everything goes pop."],spreading:["Twelve small faces, each with an opinion, scatter into the dark like they own the place."]};function ax(i){const t=[];return i.mode==="fly"&&t.push("firstFlight"),i.mode==="fly"&&i.cargo>=i.cargoCap&&t.push("fullCargo"),i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&t.push("cubeFound"),i.cubeChoice==="pending"&&t.push("cubeChoice"),i.cubeChoice==="jettisoned"&&i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&t.push("cubeBack"),i.fatigue>=40&&t.push("tired"),i.fatigue>=70&&t.push("exhausted"),i.sleeps>=1&&i.mode==="rooms"&&t.push("firstSleep"),i.feeds>=1&&t.push("firstFeed"),i.feeds>=3&&t.push("otherStorage"),i.feeds>=6&&t.push("vaultFilling"),i.mode==="cameo"&&t.push("burst"),t.filter(e=>!i.beats.includes(e))}function lx(i){const t=document.createElement("div");t.id="narration",Object.assign(t.style,{position:"fixed",left:"50%",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .6s",pointerEvents:"none",zIndex:"12",top:"48px"}),document.body.appendChild(t);const e=[];let n=!1;const s=[],r=()=>{t.style.top=i.get().mode==="fly"?"38vh":i.get().mode==="cameo"?"14px":"52px"},o=()=>{if(n||!e.length)return;if(i.get().mode==="exterior"){setTimeout(o,1500);return}n=!0;const l=e.shift();r(),t.textContent=l,t.style.opacity="1",setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{n=!1,o()},700)},2800+l.length*45)},a={log:s,el:t,say(l){const c=ox[l];c&&(l==="firstFeed"&&wt.ping(),s.push(l),e.push(...c),o())},check(){const l=i.get(),c=ax(l);c.length&&(i.set({beats:[...l.beats,...c]}),c.forEach(h=>a.say(h)))}};return i.subscribe(()=>{r(),a.check()}),setTimeout(()=>{const l=i.get();l.beats.includes("arrival")||(i.set({beats:[...l.beats,"arrival"]}),a.say("arrival"))},1500),a}function cx(i){const t=document.createElement("div");t.id="objective",Object.assign(t.style,{position:"fixed",padding:"4px 12px",background:"rgba(0,0,0,.6)",border:"1px solid #c9a96a",color:"#ffe9c0",font:"max(12px,1.05vw) monospace",zIndex:"7",pointerEvents:"none",maxWidth:"min(520px,60vw)",textAlign:"center"}),document.body.appendChild(t);const e=()=>{const n=i.get(),s=jv(n);t.textContent=s,t.style.display=s?"block":"none",n.mode==="fly"?Object.assign(t.style,{left:"auto",right:"12px",top:"56px",transform:"none",textAlign:"right",maxWidth:"26vw"}):Object.assign(t.style,{left:"50%",right:"auto",top:"8px",transform:"translateX(-50%)",textAlign:"center",maxWidth:"min(520px,60vw)"})};return i.subscribe(e),e(),t}const ve=(i,t=0,e=1)=>new he({color:i,roughness:.85,metalness:.25,emissive:t,emissiveIntensity:e});function ru(i){return{box:(n,s,r,o,a,l,c,h=0)=>{const u=new st(new ie(n,s,r),ve(c,h));return u.position.set(o,a,l),i.add(u),u},cyl:(n,s,r,o,a,l,c=[0,0,0])=>{const h=new st(new Qe(n,n,s,10),ve(l));return h.position.set(r,o,a),h.rotation.set(...c),i.add(h),h}}}function pl(i,t,e,n,s={}){const r=s.w??6,o=s.h??2.5,a=s.d??5,l=s.clean?-2.5-(a-5):-2.5,c=l+a/2,h=r/2;i.background=new Et(s.clean?658964:197641),i.fog=new Ls(329485,s.clean?.012:.07);const u=ru(i),f=s.clean?6976644:2041654,p=s.clean?6055542:1712688;if(u.box(r,.1,a+(s.clean?10:0),0,0,c+(s.clean?5:0),s.clean?3818062:1382948),s.noWalls||(u.box(r,.1,a,0,o,c,s.clean?4870752:1053724),u.box(r,o,.1,0,o/2,l,f),u.box(.1,o,a,-h,o/2,c,p),u.box(.1,o,a,h,o/2,c,p)),!s.clean){for(let m=0;m<4;m++)u.box(.08,.02,a-.4,-h+.3+m*(r-.6)/3,.06,c,2765637);u.cyl(.07,r-.2,0,o-.2,l+.2,2897480,[0,0,Math.PI/2]),u.cyl(.05,r-.2,0,o-.4,l+.2,3813162,[0,0,Math.PI/2]),u.cyl(.06,a-.2,h-.2,o-.3,c,2897480,[Math.PI/2,0,0]);for(let m=0;m<4;m++)u.box(.3,.03,.02,-h+.6+m*(r-1.2)/3,.1,l+.06,724500)}const v=new Be(s.clean?15791871:16765088,s.clean?40:6,s.clean?30:7);v.position.set(0,o-.3,s.clean?c:0),i.add(v);const g=new Be(n,4,5);return g.position.set(-1.5,1.5,-1.8),i.add(g),s.noWalls||u.box(1.4,.05,.12,0,o-.07,0,16773328,16769200),i.add(new Us(s.clean?8425640:1713208,s.clean?1.1:.7)),{room:{id:t,name:e,scene:i,camPos:new C(.9,1.6,3.6),camLook:new C(0,1,-1),hotspots:[]},b:u,flicker:[v,g]}}function kr(i,t,e,n,s,r,o,a=1.75){const l=-Math.sign(t),c=.72,h=ve(790294),u=ve(2502204),f=(v,g,m,d,y)=>{const x=new st(v,g);return x.position.set(m,d,y),i.add(x),x};f(new ie(.06,a+.5,c+.9),u,t+l*.01,(a+.5)/2,e);for(const v of[-1,1])f(new ie(.16,a+.08,.1),h,t+l*.06,(a+.08)/2,e+v*(c/2+.05));f(new ie(.16,.12,c+.2),h,t+l*.06,a+.06,e),f(new ie(.16,.08,c+.2),h,t+l*.06,.08,e);for(let v=0;v<4;v++)f(new ie(.17,.05,.05),ve(v%2?1052688:14729248),t+l*.06,a+.06,e-c/2+.1+v*.17);return{mesh:f(new ie(.04,a-.1,c-.04),ve(1712944,o,.6),t+l*.035,a/2+.02,e),label:s,target:r}}function ye(i,t,e,n,s,r=0,o=.5,a="#f4e27a",l=0){const c=document.createElement("canvas");c.width=256,c.height=160;const h=c.getContext("2d");h.fillStyle=a,h.fillRect(0,0,256,160),h.fillStyle="rgba(0,0,0,.12)",h.fillRect(0,0,256,10),h.fillStyle="#2a2018",h.font='bold 30px "Comic Sans MS", "Chalkboard SE", cursive',h.textAlign="center";const u=t.split(`
`);u.forEach((p,v)=>h.fillText(p,128,55+(v-(u.length-1)/2)*36+10));const f=new st(new gn(o,o*.625),new Ht({map:new jn(c)}));return f.position.set(e,n,s),f.rotation.set(0,r,l),i.add(f),f}function Cn(i,t,e,n,s,r,o,a=0){const l=new st(new ie(s,r,o),new he({color:9211540,roughness:.5,metalness:.4}));return l.position.set(t,e,n),l.rotation.z=a,i.add(l),l}function Es(i,t,e=1052688,n=.025){const s=new tl(t.map(o=>new C(...o))),r=new st(new Wr(s,24,n,6,!1),ve(e));return i.add(r),r}function hx(){const i=new gi,{room:t,b:e,flicker:n}=pl(i,"engine","Engine Room",16728128,{w:5,h:2.1,d:4});t.camPos.set(.5,1.5,2.6),t.camLook.set(-.2,.6,-1),i.background=new Et(262918);const s=new C(0,.45,-.75),r=1.6,o=new he({color:7370890,emissive:2777343,emissiveIntensity:.4,metalness:.7,roughness:.35}),a=new st(new Je(r,.2,14,96),o);a.rotation.x=-Math.PI/2,a.position.copy(s),i.add(a);const l=new st(new Je(r,.06,8,96),new Ht({color:10473727,transparent:!0,opacity:.6}));l.rotation.x=-Math.PI/2,l.position.set(s.x,s.y+.2,s.z),i.add(l);for(let y=0;y<12;y++){const x=y/12*Math.PI*2;e.box(.12,s.y,.3,s.x+Math.cos(x)*r,s.y/2,s.z+Math.sin(x)*r,2897480)}const c=Array.from({length:6},()=>{const y=new st(new ue(.13,10,8),new Ht({color:13625599}));return i.add(y),y}),h=new Za({color:14741759,transparent:!0}),u=Array.from({length:8},()=>{const y=new oe;y.setAttribute("position",new Ae(new Float32Array(8*3),3));const x=new Bh(y,h);return i.add(x),x}),f=new Be(4227327,3,7);f.position.set(s.x,1.2,s.z),i.add(f);const p=new Be(16719904,0,6);p.position.set(0,2.2,0),i.add(p);const v=[-1.9,-1.2,-.5].map((y,x)=>{const _=e.box(.55,.4,.06,y+.6,1.4+x%2*.05,-2.42,660496,2162576);return _.material.emissiveIntensity=.5,_});Cn(i,-.6,1.17,-2.4,1.9,.05,.02),ye(i,`RING SPEED:
11 (units
unknown)`,1,1.75,-2.42,0,.5,"#f4e27a",.04),ye(i,`CROSS WHEN
IT GOES QUIET`,1.9,1.3,-2.42,0,.55,"#f06050",-.04),ye(i,`DANGER
KEEP BACK
(we mean it)`,1.5,.75,.7,-.3,.38,"#f06050"),e.box(.06,2.1,.06,-2.25,1.05,-2.38,6974068),e.box(.06,2.1,.06,-1.85,1.05,-2.38,6974068);for(let y=0;y<6;y++)e.box(.4,.04,.04,-2.05,.3+y*.3,-2.38,6974068);const g=e.box(.5,.25,.05,-2.05,1.85,-2.33,2759186,15769632);g.material.emissiveIntensity=.6,ye(i,`ONLY WAY OUT
(across the ring)`,-2.05,1.5,-2.33,0,.42,"#f4e27a");const m=new st(new Ds(r+.3,48),new Ht({color:4227327,transparent:!0,opacity:.04,depthWrite:!1,side:Ce}));m.rotation.x=-Math.PI/2,m.position.set(s.x,s.y+.22,s.z),i.add(m),t.hotspots.push({mesh:g,label:"Cross the ring to the ladder (wait for the quiet)",target:"act:cross"},{mesh:m,label:"The ring (do not touch)",target:"act:collider"},{mesh:v[1],label:"Monitor",target:"act:monitor"});const d=y=>{n[0].intensity=3+Math.sin(y/70)*.5,n[1].intensity=3+Math.sin(y/230)*.8};return t.update=()=>{const y=performance.now();d(y);const x=xv(Cs,y),_=ss(Cs,y);a.rotation.z=y/2400,o.emissiveIntensity=.3+x*1.8,o.emissive.setHex(_?9089279:2777343),l.material.opacity=.25+x*.75,f.intensity=2+x*7,p.intensity=_?3+2*Math.sin(y/60):0,c.forEach((L,A)=>{const T=y/(_?260:900)+A/c.length*Math.PI*2;L.position.set(s.x+Math.cos(T)*r,s.y+.05,s.z+Math.sin(T)*r),L.scale.setScalar(_?1.4:.8)}),u.forEach((L,A)=>{if(L.visible=_&&Math.random()<.8,!L.visible)return;const T=Math.random()*Math.PI*2,P=L.geometry.attributes.position;for(let b=0;b<8;b++){const M=T+b*.05,E=r+(Math.random()-.5)*.35;P.setXYZ(b,s.x+Math.cos(M)*E,s.y+.15+b*(.04+.02*(A%3))*Math.random()*2,s.z+Math.sin(M)*E)}P.needsUpdate=!0}),h.opacity=.6+.4*Math.random(),v.forEach((L,A)=>L.material.emissiveIntensity=.4+.3*Math.abs(Math.sin(y/(130+A*70))))},t}function ux(i){const t=document.createElement("div");t.id="shipmap",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"10px",transform:"translateX(-50%)",font:"11px monospace",color:"#7f8fa0",background:"rgba(5,10,16,.7)",border:"1px solid #2a3442",padding:"3px 8px",zIndex:"4",pointerEvents:"none",whiteSpace:"nowrap"}),document.body.appendChild(t);const e=()=>{const n=i.get();t.style.display=n.mode==="rooms"?"block":"none";const s=(r,o)=>n.room===r?`<b style="color:#20e0a0">[${o}]</b>`:o;t.innerHTML=`${s("mining","HELM")} &gt; ${s("bed","BUNK")} &gt; ${s("transmog","=== CARGO BAY ===")} &darr; ${s("engine","ENGINE")}`};i.subscribe(e),e()}function dx(i){const t=document.createElement("div");t.id="sorter",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"20"}),document.body.appendChild(t);let e=[],n=[],s="";const r=()=>i.set({report:null}),o=()=>{const l=n.shift();l&&(e.push(Fa(i,l)),wt.rare(),a())},a=()=>{var h,u;const l=i.get().report;if(!l){t.style.display="none";return}t.style.display="flex";const c=e[e.length-1];t.innerHTML=`<div style="width:min(640px,94vw);max-height:92vh;overflow:auto;background:#0a0d12;border:2px solid #c9a96a;color:#ffe9c0;font:14px/1.45 monospace;padding:16px">
      <div style="letter-spacing:3px;font-size:16px"><b>SORTING BENCH</b></div>
      <p>Weighed in: <b>${l.pieces}</b> pieces. Confirmed scrap banked: <b style="color:#9f9">+${l.units}</b> <small>(the scanner's estimates were only estimates)</small></p><p>Paycheck: <b style="color:#60e080">debt -${l.units*Ji.perUnit} cr</b> (paid off). <small>You still owe ${i.get().debt} cr.</small></p>
      <div style="max-height:26vh;overflow:auto;border:1px solid #4a3a20;padding:6px;font-size:12px">${l.items.length?l.items.map(f=>`<div><b>${f.name}</b> +${f.units} ${f.clean?"":'<span style="color:#f88">(shattered)</span>'}<br><i style="opacity:.75">${f.lore}</i></div>`).join('<hr style="border:0;border-top:1px solid #2a2418">'):"Nothing aboard. The hold is a very expensive cupboard."}</div>
      ${c?`<div style="margin-top:10px;border:1px solid #30ff90;padding:8px;background:#06140c"><b style="color:#9fd">FOUND: ${c.title}</b><br>${c.text}</div>`:""}
      <div style="margin-top:12px">${n.length||!e.length&&l.finds.length?`<button id="so-next" style="font:14px monospace;padding:8px 14px">Inspect the haul (${n.length||l.finds.length} to open)</button>`:`<button id="so-done" style="font:14px monospace;padding:8px 14px">${e.length||l.finds.length?"Done":"Nothing unusual. Done"}</button>`}</div></div>`,(h=t.querySelector("#so-next"))==null||h.addEventListener("click",()=>o()),(u=t.querySelector("#so-done"))==null||u.addEventListener("click",()=>r())};return i.subscribe(()=>{const l=i.get().report,c=l?JSON.stringify([l.pieces,l.units,l.finds]):"";c!==s?(s=c,e=[],n=l?[...l.finds].sort((h,u)=>+(h==="cube")-+(u==="cube")):[],a()):l||(t.style.display="none")}),addEventListener("keydown",l=>{var c;!i.get().report||l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),(c=t.querySelector("#so-next, #so-done"))==null||c.click())}),{el:t,finishAll(){for(;n.length;)e.push(Fa(i,n.shift()));r()},isOpen:()=>!!i.get().report}}function fx(i){const t=document.createElement("div");t.id="cube-choice",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.7)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"24"}),document.body.appendChild(t);let e=0;const n=()=>{i.get().cubeChoice===""&&(i.set({cubeChoice:"pending"}),t.style.display="flex",wt.ping(),t.innerHTML=`<div style="width:min(560px,94vw);background:#0a0c14;border:2px solid #b070ff;color:#e8e0ff;font:14px/1.5 monospace;padding:16px">
      <b style="letter-spacing:3px">THE LARDER IS ALIVE</b><hr>
      <p>It has an eye now, and the eye is on you. The sensors say: life. Halcyon Reclamation's manifest console blinks, waiting for you to say what came aboard.</p>
      <p><button id="cc-keep" style="font:14px monospace;padding:8px 12px">Keep it <small>(log it on the manifest as inert scrap)</small></button>
      <button id="cc-honest" style="font:14px monospace;padding:8px 12px">Log it honestly <small>("living object")</small></button>
      <button id="cc-out" style="font:14px monospace;padding:8px 12px">Open the cargo door <small>(fine: <span style="color:#ff6060">${Ji.litterFine} cr added to debt</span>)</small></button></p></div>`,t.querySelector("#cc-keep").onclick=()=>s.choose("keep"),t.querySelector("#cc-honest").onclick=()=>s.choose("honest"),t.querySelector("#cc-out").onclick=()=>s.choose("jettison"))},s={enabled:!0,choose(r){const o=i.get();t.style.display="none",r==="keep"?(i.set({cubeChoice:"kept",flags:{...o.flags,manifest:"scrap"},log:[...o.log,"You kept the Larder and logged it as inert scrap."]}),we("MANIFEST: 1x inert scrap (cube). Accepted. Nobody looks twice at scrap.",4500)):r==="honest"?(i.set({cubeChoice:"kept",flags:{...o.flags,manifest:"organic"},log:[...o.log,"You logged the Larder honestly. The console filed it as organic residue."]}),we('You type "LIVING OBJECT". The console auto-files it: ORGANIC RESIDUE, IGNORE. Nobody is reading.',5e3)):(i.set({cubeChoice:"jettisoned",cubeState:"none",feeds:0,debt:o.debt+Ji.litterFine,door:o.door+1,flags:{...o.flags,manifest:"thrown"},log:[...o.log,"You jettisoned the cube. It will be back."]}),wt.door(),we("Cargo door open. The cube drifts out, looking back. Littering fine: 150 cr added to your debt.",4500))},isOpen:()=>t.style.display==="flex"};return i.subscribe(r=>{if(!s.enabled)return;r.cubeLunged&&r.cubeChoice===""&&r.mode==="rooms"&&r.room==="transmog"&&!r.report&&r.cubeState==="aboard"?e||(e=setTimeout(()=>{e=0;const a=i.get();a.cubeChoice===""&&a.cubeLunged&&a.mode==="rooms"&&n()},4200)):e&&r.cubeChoice!==""&&(clearTimeout(e),e=0)}),s}function px(i){let t=i.get().hull,e=!1;return i.subscribe(n=>{const s=n.profile,r={};n.fatigue>s.maxFatigue&&(r.maxFatigue=n.fatigue),n.fatigue>=70&&!e&&(e=!0,r.skips=s.skips+1),n.fatigue<=1&&(e=!1),n.hull<t-.5&&n.mode==="fly"&&(r.hullHits=s.hullHits+1),t=n.hull,Object.keys(r).length&&i.set({profile:{...s,...r}})}),setInterval(()=>{const n=i.get();n.mode!=="finale"&&i.set({profile:{...n.profile,seconds:n.profile.seconds+1}})},1e3),{logRead(n){const s=i.get(),r=new Set((s.flags.readLogs??"").split(",").filter(Boolean));n&&r.add(String(n)),i.set({profile:{...s.profile,logsRead:s.profile.logsRead+1},flags:{...s.flags,readLogs:[...r].join(",")}})}}}const ou=i=>{var t;return(((t=i.flags)==null?void 0:t.readLogs)??"").split(",").filter(Boolean).map(Number)};function au(i,t){return(i==null?void 0:i.mergeSeconds)===void 0?"unmet":(i.swaps??0)>=1?"tender":i.mergeSeconds<20||t?"hasty":"patient"}function ml(i){const t=is(i),e=i.flags??{},n=ou(i),s=au(e,i.cubeChoice==="jettisoned"),r=i.cubeChoice==="jettisoned"?"threw the Larder out (it came back)":i.cubeChoice==="kept"?"kept the Larder":"never decided about the Larder",o=i.cubeChoice==="jettisoned"?"thrown out (it came back; not on any manifest)":e.manifest==="organic"?'logged honestly, auto-filed as "organic residue, ignore"':i.cubeChoice==="kept"?"on the manifest as inert scrap":"never logged";return[{id:"larder",label:"The Larder",value:r,part1:i.cubeChoice==="jettisoned"?'Littering fine (150 cr added to debt), an extra sortie; spores a shade darker; ending line: "You threw it out. It let you."':'It stays aboard and grows; spores a shade lighter; ending line: "You kept it. In fairness, it kept you too."',hooks:{part2:i.cubeChoice==="jettisoned"?'Spores are wary but loyal ("the one who came back"): slower to help at first':"Spores trust you from day one on the crash planet and help sooner",part3:"Starting alignment lean of your creature",station:"Station has no record of the Larder until the Part 2 pickup",si:i.cubeChoice==="jettisoned"?"The SI notes you tried to discard its neighbour":"The SI notes you fed it"}},{id:"halcyon",label:"The manifest",value:o,part1:i.cubeChoice==="jettisoned"?"Fined for littering; Halcyon sees a fine, not a cube":e.manifest==="organic"?"You told the truth and nobody read it. No effect on debt.":"Nobody looks twice at scrap. No effect on debt.",hooks:{part2:i.cubeChoice==="jettisoned"?"Halcyon pickup crew find a cube that is on no manifest at all: they assume theft":e.manifest==="organic"?'Halcyon pickup crew find the honest log buried in their own "ignore" pile: awkward for them, credibility for you':'Halcyon pickup crew find "inert scrap" staring at them: you lied on a manifest and they know it',part3:"No direct effect on the creature",station:"Halcyon learns about the Larder and the spores only at the crash-planet pickup (Part 2)",si:"The SI cares only that you were honest with it, not with Halcyon"}},{id:"sleep",label:"Sleep habits",value:`${t.sleeper}: ${t.nights} night(s), skipped ${t.skippedSleeps}x, peak tiredness ${t.maxFatigue}`,part1:"Fatigue penalties in play; spore mood and accessories (sleepless: glow/drip, Sleepy/Grumpy); the creature name",hooks:{part2:t.sleeper==="sleepless"?"You start the survival game already tired":"You start rested",part3:"Spore mood baseline",station:"Medical scans show your sleep debt",si:"The SI comments on how long you stayed awake"}},{id:"spores",label:"How you treated the spores",value:s+(e.sporeKind||e.sporeRough||e.sporeFed?` (aboard: ${e.sporeKind??0} kind, ${e.sporeRough??0} rough, fed ${e.sporeFed??0}x; lean ${(e.sporeKind??0)+2*(e.sporeFed??0)>=2*(e.sporeRough??0)?"light":"dark"})`:""),part1:s==="tender"?"The finale says the spores held your hands at the Threshold":s==="hasty"?"The finale says you rushed the door":s==="patient"?"The finale says the spores waited for you":"Not reached",hooks:{part2:s==="tender"?"Spores bond faster and bring gifts":"Spores are playful but keep their distance",part3:"Your creature's care stat starts high (tender) or low",station:"The station sees tender spores as easier to isolate",si:"The SI asks how you treated them"}},{id:"mining",label:"Mining style",value:`${t.style}: ${t.clean} clean, ${t.shatters} shattered, ${t.hullHits} hull hit(s)`,part1:"Spore traits (spikes/horns vs halo/fluff), outline weight, the creature name",hooks:{part2:t.style==="greedy"?"Scavenging is faster but you take damage":"Repairs are more efficient",part3:"Creature temperament",station:"Your mining record is on file",si:'The SI: "you take what you can" or "you take care"'}},{id:"debt",label:"Debt",value:`${i.debt} cr left, ${t.debtPaid} paid`,part1:"HUD counter, bench paycheck, nightly interest, ending line",hooks:{part2:"The debt is still there, and so is the cheerful reminder",part3:"Leaderboard flavour: debt-free runs are rare",station:"Halcyon owns the station contract",si:"The SI does not care about debt"}},{id:"logs",label:"Logs read",value:n.length?`logs ${n.sort((a,l)=>a-l).join(", ")}`:"none",part1:n.includes(6)&&n.includes(7)?"The Threshold sequence says you read the warning and went anyway":"The Threshold sequence has no warning line",hooks:{part2:"Knowing the SI left on purpose changes the dialogue options",part3:"No direct effect on the creature",station:"The station is decoding the same logs",si:n.includes(7)?'The SI: "you read me"':"The SI has to explain itself from scratch (it will not)"}}]}const Fo="starburn.ledger.v1";function Fr(i){return{version:1,savedAt:new Date().toISOString(),day:i.day,profile:is(i),flags:i.flags??{},entries:ml(i)}}function lu(i){return ml(i).map(t=>`${t.label}: ${t.value} | Part 1: ${t.part1}`).join(`
`)}function mx(i){const t=au(i.flags,i.cubeChoice==="jettisoned"),e=ou(i);return{key:t==="tender"?"The spores were never lost. They were the key. They held your hands while you held the door.":t==="hasty"?"The spores were never lost. They were the key. You were holding the door, rather quickly.":"The spores were never lost. They were the key. And you were holding the door.",warning:e.includes(6)&&e.includes(7)?"You read the warning. You are, technically, going anyway.":null}}function gx(i){try{const n=localStorage.getItem(Fo);n&&localStorage.setItem(Fo+".prev",n)}catch{}let t=0;const e=()=>{t=0;try{localStorage.setItem(Fo,JSON.stringify(Fr(i.get())))}catch{}};return i.subscribe(()=>{t||(t=setTimeout(e,800))}),{save:e,export:()=>Fr(i.get())}}function vx(i){const t={enabled:!0,intensity:0,tone:"deadpan",lines:0};let e=0,n=30;return setInterval(()=>{const s=i.get(),r=di(s);if(t.intensity=r,t.tone=zc(r),e+=1,!(!t.enabled||s.mode==="finale"||s.mode==="exterior"||s.mode==="cameo")&&e>=n){n=e+Jg(r)*(.7+Math.random()*.6);const o=Qg[zc(r)];s.mode==="rooms"&&!s.report&&(t.lines++,we(o[Math.floor(Math.random()*o.length)],4200)),r>.25&&Math.random()<r&&wt.hallucinate()}},1e3),t}const xx="starburn.carryover",_x=1,yx="SB1.";function Mx(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619)>>>0;return t.toString(16).padStart(8,"0")}function bx(i,t){const e=is(i),n=Fr(i);delete n.savedAt;const s={schema:xx,version:_x,game:"part1",day:i.day,creature:hl(e),profile:e,ledger:n,spores:t.map(({playerProfile:r,...o})=>o)};return{...s,checksum:Mx(JSON.stringify(s))}}const Sx=i=>btoa(String.fromCharCode(...new TextEncoder().encode(i))),wx=i=>yx+Sx(JSON.stringify(i)),fe={gate:16,open:28,tentacle:34,cut:36,crash:36.9,wreck:38.4,end:45},Oo=i=>i<fe.gate?"maze":i<fe.open?"gate":i<fe.cut?"open":i<fe.crash?"cut":i<fe.wreck?"crash":i<fe.end?"wreck":"end",Jc=[[.4,"The spores have moved in. They have redecorated. Mostly with themselves."],[4.2,"The Helm is four minutes away. It is also one step. You are not sure which of those is the problem."],[8.2,"The corridor goes on. So does the corridor behind it. Physics has stepped out for a moment."],[12,"The ship stops being a ship and becomes an idea the spores are having. You, it turns out, are part of the idea."],[16.4,"On a screen that was not there before: the Threshold. Somewhere in you, something already knew the way."],[21,"You fly the ship. Or the ship flies you. The spores steer, politely."],[25,"The Threshold is older than the junk, older than the SI, and clearly expecting company."],[28.4,"The spores were never lost. They were the key. And you were holding the door."],[32,"Something on the other side leans closer."]];function Ex(i){return i==="jettisoned"?"You threw it out. It let you. That is the part you will think about later.":i==="kept"?"You kept it. In fairness, it kept you too.":"You never decided. The cube did."}function Tx(i){const t=document.createElement("canvas");t.id="finale",Object.assign(t.style,{position:"fixed",inset:"0",width:"100vw",height:"100vh",zIndex:"40",display:"none",background:"#000"});const e=document.createElement("div");e.id="finale-text",Object.assign(e.style,{position:"fixed",left:"50%",bottom:"14vh",transform:"translateX(-50%)",maxWidth:"78vw",textAlign:"center",font:"italic 20px/1.4 Georgia, serif",color:"#f4efe0",textShadow:"0 0 8px #000, 0 0 14px #000",zIndex:"41",display:"none",transition:"opacity .6s",pointerEvents:"none"});const n=document.createElement("div");n.id="finale-skip",n.textContent="Space: skip",Object.assign(n.style,{position:"fixed",right:"14px",bottom:"10px",font:"12px monospace",color:"#999",zIndex:"41",display:"none"});const s=document.createElement("div");s.id="finale-end",Object.assign(s.style,{position:"fixed",inset:"0",zIndex:"42",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",color:"#f4efe0",textAlign:"center",font:"16px monospace",background:"rgba(0,0,0,.35)"}),document.body.append(t,e,n,s);let r=Jc;const o=t.getContext("2d"),a={active:!1,t:0,shown:-1,cutDone:!1,flash:0},l={onFeedback:void 0,get t(){return a.t},get active(){return a.active},get phase(){return Oo(a.t)},get tentacleVisible(){return a.active&&a.t>=fe.tentacle&&a.t<fe.cut},play(){const g=i.get();{const m=mx(g);r=Jc.map(([d,y])=>[d,d===28.4?m.key:y]),m.warning&&r.push([22.8,m.warning]),r.sort((d,y)=>d[0]-y[0])}a.active=!0,a.t=0,a.shown=-1,a.cutDone=!1,i.set({mode:"finale"}),t.style.display="block",n.style.display="block",e.style.display="block",s.style.display="none",t.width=innerWidth,t.height=innerHeight,wt.merge(),v(performance.now())},seek(g){a.t=g,a.shown=-1,a.cutDone=g>=fe.cut},skipNow(){a.active&&l.seek(fe.end)}};let c=0;const h=g=>{e.style.opacity="0",setTimeout(()=>{e.textContent=g,e.style.opacity="1"},120)},u=(g,m,d,y,x)=>{o.fillStyle=`hsl(${y},85%,58%)`,o.strokeStyle="#000",o.lineWidth=Math.max(2,d*.12),o.beginPath(),o.arc(g,m,d,0,7),o.fill(),o.stroke(),o.fillStyle="#fff";for(const _ of[-.35,.35])o.beginPath(),o.arc(g+_*d,m-.15*d,d*.26,0,7),o.fill(),o.stroke(),o.fillStyle="#000",o.beginPath(),o.arc(g+_*d+Math.sin(x*2)*d*.06,m-.12*d,d*.1,0,7),o.fill(),o.fillStyle="#fff";o.strokeStyle="#000",o.beginPath(),o.arc(g,m+.25*d,d*.25,.1,Math.PI-.1),o.stroke()};function f(g){const m=t.width,d=t.height,y=m/2,x=d/2,_=Oo(g);o.setTransform(1,0,0,1,0,0),o.fillStyle="#000",o.fillRect(0,0,m,d);const L=_==="open"?2+(g-fe.open)*1.6:_==="crash"?18:0;if(o.translate((Math.random()-.5)*L,(Math.random()-.5)*L),_!=="cut")if(_==="maze"){const A=Math.sin(g*.7)>.8?Math.PI:0;o.translate(y,x),o.rotate(A+Math.sin(g*.5)*(.1+g*.02)+g*.05*(g>8?1:0)),o.translate(-y,-x);for(let T=14;T>=0;T--){const P=(T+g*.9%1)/14,b=Math.pow(P,2.2),M=m*(.05+b*1.3),E=d*(.05+b*1.3),D=[160,220,40,30,0][(T+Math.floor(g/2))%5];o.strokeStyle=`hsl(${D},60%,${18+b*40}%)`,o.lineWidth=2+b*14,o.strokeRect(y-M/2+Math.sin(g+T)*6*b,x-E/2,M,E),T%3===0&&(o.fillStyle=`hsla(${D},70%,40%,${.15+b*.3})`,o.fillRect(y-M/2,x-E/2,M*.1,E))}for(let T=0;T<12;T++){const P=T*2.4+g*.3,b=60+(T*53+g*40)%(Math.min(m,d)*.45);u(y+Math.cos(P)*b,x+Math.sin(P*1.3)*b*.7,10+b*.12,(T*47+g*20)%360,g)}}else if(_==="gate"||_==="open"){const A=_==="gate"?1:.4;o.fillStyle="#fff";for(let M=0;M<140;M++){const E=M*2.399,D=(M*.137+g*.35*A)%1,I=D*Math.max(m,d)*.7;o.globalAlpha=D,o.fillRect(y+Math.cos(E)*I,x+Math.sin(E)*I,1+D*2,1+D*2+A*D*4)}o.globalAlpha=1;const T=Math.min(m,d)*(.06+.3*Math.min(1,(g-fe.gate)/14)),P=_==="open"?Math.min(1,(g-fe.open)/4):Math.min(.5,(g-fe.gate)/20),b=o.createRadialGradient(y,x,T*.4,y,x,T*(1.6+P*3));b.addColorStop(0,`rgba(190,150,255,${.2+P*.8})`),b.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=b,o.fillRect(0,0,m,d),o.strokeStyle=`hsl(270,60%,${40+P*40}%)`,o.lineWidth=T*.12,o.beginPath(),o.arc(y,x,T,0,7),o.stroke(),o.lineWidth=T*.03,o.strokeStyle="#fff",o.beginPath(),o.arc(y,x,T*.9,g,g+4.2),o.stroke(),_==="open"&&(o.fillStyle=`rgba(255,255,255,${P*.55})`,o.beginPath(),o.arc(y,x,T*.85,0,7),o.fill());for(let M=0;M<12;M++){const E=(g*.12+M/12)%1,D=M*.9;u(y+Math.cos(D)*(1-E)*m*.5*(_==="open"?.3+(1-P):1),x+Math.sin(D)*(1-E)*d*.4,6+(1-E)*12,M*47%360,g)}if(l.tentacleVisible){const M=(g-fe.tentacle)/(fe.cut-fe.tentacle);o.strokeStyle="#05020a",o.lineCap="round",o.lineWidth=T*(.5-M*.15),o.beginPath(),o.moveTo(m+40,d*.9),o.bezierCurveTo(m*(.9-M*.3),d*(.2+M*.1),y+T*(1-M*1.3),x-T*1.3,y-T*.2*M,x+T*.2-M*T*.4),o.stroke()}}else if(_==="crash")o.fillStyle=`rgba(255,240,220,${Math.max(0,1-(g-fe.crash)/1.4)})`,o.fillRect(0,0,m,d);else{const A=o.createLinearGradient(0,0,0,d*.62);A.addColorStop(0,"#2a0f3a"),A.addColorStop(1,"#e0703a"),o.fillStyle=A,o.fillRect(0,0,m,d*.62),o.fillStyle="#3a1a22",o.fillRect(0,d*.62,m,d*.38),o.fillStyle="#ffe0a0",o.beginPath(),o.arc(m*.8,d*.2,d*.06,0,7),o.fill(),o.save(),o.translate(y,d*.66),o.rotate(-.22),o.fillStyle="#c8ccd4",o.beginPath(),o.ellipse(0,0,m*.16,d*.07,0,0,7),o.fill(),o.fillStyle="#6aa0e0",o.fillRect(-m*.04,-d*.045,m*.08,d*.03),o.restore();for(let T=0;T<26;T++){const P=(g*.3+T/26)%1;o.fillStyle=`rgba(60,50,50,${.5*(1-P)})`,o.beginPath(),o.arc(y+Math.sin(T*7+g)*30-40+P*60,d*.62-P*d*.4,8+P*26,0,7),o.fill()}}}const p=()=>{const g=i.get();s.style.display="flex",s.innerHTML=`<div style="font:bold 44px Georgia,serif;letter-spacing:6px">TO BE CONTINUED</div><div id="fe-line" style="font:italic 18px Georgia,serif;max-width:70vw">${Ex(g.cubeChoice)}</div><div id="fe-creature" style="font:15px Georgia,serif;max-width:70vw;color:#cfe">Your creature: <b>${hl(is(g)).name}</b>.</div><div id="fe-debt" style="color:#fc8">Debt remaining: ${g.debt} cr. Halcyon Reclamation will still want it after whatever happens next.</div>
      <div id="fe-recap" style="max-width:78vw;max-height:30vh;overflow:auto;text-align:left;font:12px/1.45 monospace;background:rgba(0,0,0,.55);border:1px solid #567;padding:8px 12px"><b>WHAT YOUR CHOICES DID</b>${ml(g).map(d=>`<div><b>${d.label}:</b> ${d.value}<br><span style="color:#9bd">&rarr; ${d.part1}</span></div>`).join("")}</div>
      <div><button id="fe-again" style="font:15px monospace;padding:8px 14px">Play again</button> <button id="fe-fb" style="font:15px monospace;padding:8px 14px">Send feedback</button> <button id="fe-copy" style="font:15px monospace;padding:8px 14px">Copy my choices</button></div>
      <div><button id="fe-code" style="font:15px monospace;padding:8px 14px">Copy carryover code</button> <button id="fe-file" style="font:15px monospace;padding:8px 14px">Download carryover file</button>  </div><small style="color:#9ab;max-width:70vw">The carryover holds your choices and your spores for the next part. No personal data; nothing is sent anywhere.</small>`;const m=()=>{var d;return bx(i.get(),((d=window.cameo)==null?void 0:d.spores)??[])};s.querySelector("#fe-code").onclick=async()=>{const d=s.querySelector("#fe-code");try{await navigator.clipboard.writeText(wx(m())),d.textContent="Copied"}catch{d.textContent="Copy blocked"}},s.querySelector("#fe-file").onclick=()=>{const d=document.createElement("a");d.href=URL.createObjectURL(new Blob([JSON.stringify(m(),null,1)],{type:"application/json"})),d.download="starburn-part1-carryover.json",d.click(),setTimeout(()=>URL.revokeObjectURL(d.href),2e3)},s.querySelector("#fe-copy").onclick=async()=>{try{await navigator.clipboard.writeText(lu(i.get())),s.querySelector("#fe-copy").textContent="Copied"}catch{s.querySelector("#fe-copy").textContent="Copy blocked"}},s.querySelector("#fe-again").onclick=()=>location.reload(),s.querySelector("#fe-fb").onclick=()=>{var d;return(d=l.onFeedback)==null?void 0:d.call(l)},n.style.display="none",e.style.display="none"};function v(g){if(!a.active)return;const m=Math.min(.1,(g-c)/1e3);c=g,a.t+=m;const d=Oo(a.t);d==="cut"&&!a.cutDone&&(a.cutDone=!0,e.style.opacity="0",wt.sting()),d==="crash"&&a.flash===0&&(a.flash=1,wt.shatter()),d!=="crash"&&d!=="wreck"&&d!=="end"&&(a.flash=0),a.t>=fe.open&&a.shown<7&&a.t<fe.open+.1&&wt.burst();for(let y=0;y<r.length;y++)a.t>=r[y][0]&&a.shown<y&&a.t<fe.cut&&(a.shown=y,h(r[y][1]));d==="cut"&&(e.style.opacity="0"),d==="crash"&&a.shown<19&&a.t>fe.crash+.2&&(a.shown=19,h("Down.")),d==="wreck"&&a.shown<20&&(a.shown=20,h("The ship is on a planet. The planet did not ask for the ship. Neither of you is hurt, exactly.")),d==="end"?s.style.display==="none"&&p():f(a.t),d==="end"&&f(fe.wreck+1),requestAnimationFrame(v)}return addEventListener("keydown",g=>{a.active&&(g.code==="Space"||g.code==="Escape")&&(g.preventDefault(),l.skipNow())}),l}function Ax(i){const t=document.createElement("div");t.id="sleep",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"25",transition:"background 1s"}),document.body.appendChild(t);let e=!1;const n=a=>`<div style="width:min(600px,94vw);max-height:92vh;overflow:auto;background:#0a0c14;border:2px solid #6080ff;color:#cfe0ff;font:14px/1.5 monospace;padding:16px">${a}</div>`,s=()=>{const a=i.get(),l=Qi(a.fatigue),c=Qh(a);t.style.display="flex",t.style.background="rgba(0,0,0,.78)",t.innerHTML=n(`<b style="letter-spacing:3px">THE BUNK</b> <small>Day ${a.day}</small><hr>
      <p>Tiredness: <b style="color:${["#9f9","#ff8","#fa6","#f66"][l]}">${Jh[l]}</b> (${Math.round(a.fatigue)}/100)</p>
      <p><b>Sleeping:</b> costs about ${c.oxygen} oxygen${c.scrap?" and 1 scrap of rations":""}. The night changes things: the vault shifts, the cube acts, the journal updates, the sectors reshuffle. The vault moves a step closer every time.</p>
      <p><b>Not sleeping:</b> nothing changes, but you get more tired: first a flicker, then a harder timing ring, then phantom sounds and ghost junk, then glitching consoles and hungrier lungs.</p>
      <button id="sl-go" style="font:14px monospace;padding:8px 14px">Sleep</button> <button id="sl-no" style="font:14px monospace;padding:8px 14px">Not now</button>`),t.querySelector("#sl-go").onclick=()=>o.sleep(!0),t.querySelector("#sl-no").onclick=()=>o.close()},r=a=>{t.style.display="flex",t.style.background="rgba(0,0,0,.78)",t.innerHTML=n(`<b style="letter-spacing:3px">MORNING: DAY ${a.day}</b><hr>
      <p><b>Journal:</b> <i>${a.journal}</i></p><p><b>Vault:</b> ${a.vault}</p>${a.cube?`<p><b>Cube:</b> ${a.cube}</p>`:""}<p><b>Overnight:</b> ${a.event}</p><p><b>Sectors:</b> ${a.field}</p>
      ${a.log?`<p style="color:#9fd"><b>New log recovered:</b> Log ${a.log} is now in the Bunk terminal.</p>`:""}<p style="color:#ff6060">Debt +10 cr: Halcyon Reclamation added "overnight handling" to your debt.</p><small>Cost: ${a.costs.oxygen} oxygen${a.costs.scrap?", 1 scrap":""}. Tiredness cleared.</small><hr>
      <button id="sl-up" style="font:14px monospace;padding:8px 14px">Wake up</button>`),t.querySelector("#sl-up").onclick=()=>o.close()},o={open(){i.get().mode==="rooms"&&(e=!0,s())},close(){e=!1,t.style.display="none"},isOpen:()=>e,last:null,sleep(a=!1){const{patch:l,report:c}=Hv(i.get());return i.set(l),o.last=c,wt.ping(),wt.blip(262,.9,"sine",.06,196),a&&(e=!0,t.innerHTML=n('<div style="text-align:center;letter-spacing:6px">Zzz...</div>'),t.style.background="#000",setTimeout(()=>r(c),1500)),c}};return addEventListener("keydown",a=>{e&&a.code==="Escape"&&o.close()}),i.subscribe(a=>{e&&!(a.mode==="rooms"&&a.room==="bed")&&o.close()}),o}function Cx(i){const t=document.createElement("div");t.id="fatigue-fx",Object.assign(t.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"3",opacity:"0",transition:"opacity .8s"}),document.body.appendChild(t);let e=0;setInterval(()=>{var o;e+=.1;const n=i.get(),s=Qi(n.fatigue),r=document.querySelector("canvas");if(t.style.background=`radial-gradient(ellipse at center, transparent ${60-s*12}%, rgba(0,0,0,${.35+s*.2}) 100%)`,t.style.opacity=s?String(s>=3?.7+.3*Math.sin(e*9):.6+.4*Math.sin(e*2+s)):"0",r){{const a=((o=window.atmosphere)==null?void 0:o.enabled)===!1?0:di(n),l=a>.3?`hue-rotate(${Math.round(Math.sin(e*.8)*45*a)}deg) saturate(${(1+a*.5).toFixed(2)})`:"",c=s>=2?`blur(${(s===2?.7:1.5)*(.6+.6*Math.sin(e*1.3))+.3}px)`:"";r.style.filter=(c+" "+l).trim()}r.style.opacity=s>=3&&Math.sin(e*17)>.85?"0.82":""}},100)}function Rx(i,t){const e=()=>{const a=i.get();return a.cubeState==="aboard"&&!a.cubeLunged&&a.mode==="rooms"&&a.room==="transmog"&&!a.report&&a.scrap>0};let n=0;const s={enabled:!0,lungeNow(){return e()?o():!1},lunged:0},r=()=>{document.body.animate([{transform:"translate(0,0)"},{transform:"translate(-16px,8px)"},{transform:"translate(14px,-10px)"},{transform:"translate(-9px,5px)"},{transform:"translate(5px,-3px)"},{transform:"translate(0,0)"}],{duration:520,easing:"ease-out"});const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",background:"#8a40ff",opacity:"0.55",transition:"opacity .7s",pointerEvents:"none",zIndex:"50"}),document.body.appendChild(a),requestAnimationFrame(()=>{a.style.opacity="0"}),setTimeout(()=>a.remove(),900)};function o(){const a=i.get(),l=Nv(a.scrap);return i.set({scrap:a.scrap-l,feeds:Math.max(1,a.feeds),cubeLunged:!0,lunges:a.lunges+1,beats:a.beats.includes("firstFeed")?a.beats:[...a.beats,"firstFeed"],log:[...a.log,`The cube lunged and swallowed ${l} scrap. Nobody asked it to.`]}),wt.sting(),r(),t.say("cubeLunge"),s.lunged++,!0}return i.subscribe(()=>{s.enabled&&(e()?n||(n=setTimeout(()=>{n=0,e()&&o()},1400)):n&&(clearTimeout(n),n=0))}),s}class Px{constructor(t,e){H(this,"scene",new gi);H(this,"ship",new Te);H(this,"glow");H(this,"engineLight",new Be(6332671,0,12));H(this,"tracker",new Te);H(this,"trackerLight",new Be(16724016,0,6));H(this,"cells",[]);H(this,"kind","launch");H(this,"t",0);H(this,"dur",4);H(this,"active",!1);H(this,"done");H(this,"caps",[]);H(this,"pinged",-1);H(this,"promptShown",!1);H(this,"cap",document.createElement("div"));H(this,"skip",document.createElement("button"));H(this,"fade",document.createElement("div"));H(this,"prompt",document.createElement("div"));H(this,"onFeedback");this.store=t,this.camera=e;const n=this.scene;n.background=new Et(131850),n.add(new Us(4872312,.9));const s=new Ur(16773336,2.6);s.position.set(8,6,6),n.add(s);const r=new Ur(6982399,1.2);r.position.set(-8,2,-6),n.add(r);const o=new oe,a=[];for(let f=0;f<1200;f++){const p=Math.random()*2-1,v=Math.random()*6.283,g=Math.sqrt(1-p*p);a.push(Math.cos(v)*g*150,p*150,Math.sin(v)*g*150)}o.setAttribute("position",new Gt(a,3)),n.add(new bs(o,new Xi({color:12570879,size:.9,fog:!1})));const l=new st(new ue(30,32,20),new he({color:16742970,emissive:4200448,flatShading:!0}));l.position.set(-70,-34,-120),n.add(l),this.buildShip(),n.add(this.ship);const c=new st(new ie(.5,.2,.3),new he({color:2763312,metalness:.6,roughness:.4})),h=new st(new Qe(.012,.012,.5,6),new he({color:8947848}));h.position.set(.15,.3,0);const u=new st(new ue(.07,10,8),new Ht({color:16724016}));u.position.set(-.15,.13,.1),u.name="led",this.tracker.add(c,h,u,this.trackerLight),this.trackerLight.position.copy(u.position),this.tracker.scale.setScalar(.001),this.tracker.visible=!1,this.tracker.position.set(1.3,.55,1.5),n.add(this.tracker),Object.assign(this.cap.style,{position:"fixed",left:"50%",bottom:"12vh",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"12"}),this.cap.id="ext-caption",this.skip.id="ext-skip",this.skip.textContent="Skip (Space)",Object.assign(this.skip.style,{position:"fixed",right:"12px",top:"12px",display:"none",padding:"6px 10px",font:"12px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"40"}),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"11"}),this.prompt.id="ext-end",Object.assign(this.prompt.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",display:"none",textAlign:"center",padding:"22px 30px",background:"rgba(3,6,12,.88)",border:"2px solid #c9a96a",color:"#ffe9c0",font:"16px/1.5 Georgia, serif",zIndex:"41"}),this.prompt.innerHTML='<div style="font-size:22px;letter-spacing:3px">END OF PART 1</div><p>Thanks for flying, Junker.<br><i>Part 2: the spores are out there. So is whoever is following them.</i></p><button id="ext-again" style="font:14px monospace;padding:8px 14px;margin:4px">Play again</button><button id="ext-fb" style="font:14px monospace;padding:8px 14px;margin:4px">Send feedback</button>',document.body.append(this.cap,this.skip,this.fade,this.prompt),this.skip.onclick=()=>this.skipNow(),addEventListener("keydown",f=>{this.active&&(f.code==="Space"||f.code==="Escape")&&this.skipNow()}),this.prompt.querySelector("#ext-again").onclick=()=>location.reload(),this.prompt.querySelector("#ext-fb").onclick=()=>{var f;return(f=this.onFeedback)==null?void 0:f.call(this)}}buildShip(){const t=(a,l,c=1)=>{const h=[];for(let u=0;u<=40;u++){const f=a+(l-a)*u/40;h.push(new rt(Math.max(1e-4,1.3*c*Math.sin(Math.PI*Math.pow(f,.6))*(1-.3*f)),3-6*f))}return h},n=new st(new As(t(0,1),56,Math.PI/2+.6,Math.PI*2-1.2),new he({color:9213352,metalness:.75,roughness:.32,side:Ce})),s=new st(new As(t(.1,.62,1.012),16,Math.PI/2-.6,2*.6),new Yg({color:10479871,transparent:!0,opacity:.28,roughness:.05,metalness:.1,side:Ce,emissive:1060928})),r=new Te;r.add(n,s),r.rotation.x=Math.PI/2,[16760944,4251824,14721072,6324479].forEach((a,l)=>{const c=new st(new ie(1.05,.14,1.05),new he({color:1382948,emissive:a,emissiveIntensity:.9}));c.position.set(0,-.6+l*.4,1),this.cells.push(c),this.ship.add(c)}),this.ship.add(r),this.glow=new st(new mn(.4,1.8,16,1,!0),new Ht({color:7385343,transparent:!0,opacity:0,blending:Ke,depthWrite:!1,side:Ce})),this.glow.rotation.x=-Math.PI/2,this.glow.position.set(0,0,-4.1),this.ship.add(this.glow),this.engineLight.position.set(0,0,-3.6),this.ship.add(this.engineLight)}play(t,e){this.kind=t,this.t=0,this.done=e,this.active=!0,this.pinged=-1,this.promptShown=!1,this.prompt.style.display="none",this.tracker.visible=!1,this.ship.position.set(0,0,0),this.ship.rotation.set(0,0,0),this.glow.material.opacity=0,this.fade.style.opacity="0",this.caps=t==="launch"?[{at:.3,until:3.4,text:"Undocking. The hull is smooth, one side is glass, and the paperwork is out of date."}]:[{at:.4,until:3.6,text:"Somewhere above the galaxy’s rubbish heap, the ship drifts. Lights on. Spores gone."},{at:4.2,until:8,text:"Something small and blinking has clamped itself to your hull. It is not yours."},{at:8.4,until:12.5,text:"Part 2: someone has been tracking the spores. Now they are tracking you."}],this.dur=t==="launch"?4:12.8,this.skip.style.display="block",this.store.set({mode:"exterior"}),wt.door()}finish(){this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",wt.engine(0,!1),this.kind==="launch"?(this.fade.style.opacity="1",setTimeout(()=>{var t;(t=this.done)==null||t.call(this),this.fade.style.opacity="0"},450)):this.showPrompt()}skipNow(){this.active&&(this.kind==="end"?(this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",this.tracker.visible=!0,this.tracker.scale.setScalar(1.8),this.showPrompt()):this.finish())}showPrompt(){this.promptShown=!0,this.prompt.style.display="block"}update(t){if(this.store.get().mode!=="exterior")return;this.t+=t;const e=this.t,n=this.camera;if(this.cells.forEach((r,o)=>{r.material.emissiveIntensity=.7+.3*Math.sin(e*2+o*1.3)+(o===3&&this.kind==="end"?.5*Math.sin(e*6):0)}),this.kind==="launch"){const r=Math.max(0,e-1.2);this.ship.position.z=.9*r*r*2.2,this.ship.position.y=.04*r,this.glow.material.opacity=Math.min(.4,r*.6),this.engineLight.intensity=Math.min(8,r*6),wt.engine(Math.min(1,r/1.5),!0);const o=-.5+e*.08;n.position.set(Math.cos(o)*9,1.8,Math.sin(o)*9+1),n.lookAt(0,.2,Math.max(0,this.ship.position.z*.35)),e>this.dur-.5&&this.active&&(this.fade.style.opacity="1"),e>=this.dur&&this.active&&this.finish()}else{const r=Math.min(1,e/3.2),o=r*r*(3-2*r);this.ship.rotation.y=Math.sin(e*.2)*.08,this.ship.position.y=Math.sin(e*.7)*.06;const a=Math.max(0,Math.min(1,(e-5.6)/3.2)),l=a*a*(3-2*a),c=4+5*o,h=.4+2.1*o,u=2.5+8.5*o;if(n.position.set(c+(3-c)*l*.55,h+(.9-h)*l*.5,u+(4.2-u)*l*.55),n.lookAt(this.ship.position.x+.6*l,.2+.4*l,.8+.6*l),e>4.2){this.tracker.visible=!0;const f=Math.min(1,(e-4.2)/.8);this.tracker.scale.setScalar((f*f*(3-2*f)+.001)*1.8),this.tracker.rotation.y=e*.5;const p=Math.sin(e*(6+a*10))>0?1:.1;this.trackerLight.intensity=3*p,this.tracker.getObjectByName("led").visible=p>.5;const v=Math.floor((e-4.2)/.9);v!==this.pinged&&(this.pinged=v,wt.ping())}e>=this.dur&&this.active&&this.finish()}const s=this.caps.find(r=>e>=r.at&&e<r.until);if(s?(this.cap.textContent=s.text,this.cap.style.opacity="1"):this.cap.style.opacity="0",!this.active&&this.kind==="end"){const r=.5+.5*Math.sin(e*2);this.trackerLight.intensity=1+3*(r>.5?1:0)}}render(t){t.render(this.scene,this.camera)}}const Oa=[{id:"clarity",label:"How clear was it what to do at the start? (1 = lost, 5 = obvious)",kind:"scale"},{id:"fun",label:"How fun was it overall? (1 = boring, 5 = great)",kind:"scale"},{id:"mining",label:"Mining: was it clear when and where you could click?",kind:"choice",choices:["Clear","Sort of","Confusing"]},{id:"again",label:"Would you play again, or play Part 2?",kind:"choice",choices:["Yes","Maybe","No"]},{id:"stuck",label:"Where did you get stuck or bored?",kind:"text"},{id:"best",label:"Best moment?",kind:"text"},{id:"broken",label:"Anything broken or confusing?",kind:"text"}],cu="starburn-feedback";function Ix(i){const t=i.answers;return[`StarBurn Part 1 playtest feedback (${i.at})`,"",...Oa.map(n=>`${n.label.replace(/ \(.*\)$/,"")}: ${t[n.id]||"(no answer)"}`),"","Session: "+Object.entries(i.session).map(([n,s])=>`${n}=${s}`).join(", "),...i.ledger?["","Choice ledger:",i.ledger,"Ledger JSON: "+(i.ledgerJson??"")]:[]].join(`
`)}function Lx(){try{return JSON.parse(localStorage.getItem(cu)||"[]")}catch{return[]}}function Qc(i){const t=Lx();t.push(i);try{localStorage.setItem(cu,JSON.stringify(t))}catch{}return t.length}function Dx(i){const t=performance.now();let e=!1;const n=document.createElement("div");n.id="feedback",Object.assign(n.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"60"}),document.body.appendChild(n);const s=()=>{const l=i.get();return{minutes:+((performance.now()-t)/6e4).toFixed(1),trips:l.stats.trips,cleanHauls:l.stats.clean,shatters:l.stats.shatters,rareFound:l.stats.rare,scrap:l.scrap,cubeFeeds:l.feeds,logs:l.logsFound.length,upgrades:Object.values(l.up).reduce((c,h)=>c+h,0),window:`${innerWidth}x${innerHeight}`,browser:navigator.userAgent.replace(/\(.*?\)/,"").slice(0,60)}},r=()=>{const l={};return Oa.forEach(c=>{var u;const h=n.querySelector(`[data-q="${c.id}"]`);l[c.id]=c.kind==="text"?h.value.trim():((u=n.querySelector(`input[name="${c.id}"]:checked`))==null?void 0:u.value)??""}),l},o=(l="")=>{n.innerHTML=`<div style="width:min(620px,94vw);max-height:92vh;overflow:auto;background:#07100c;border:2px solid #30ff90;color:#cfe;font:14px/1.45 monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>SEND FEEDBACK</b><button id="fb-close">Close (Esc)</button></div>
      <small>Answers stay on this device. Use Copy summary and paste it to whoever sent you the link.</small><hr>
      ${Oa.map(u=>`<p><b>${u.label}</b><br>${u.kind==="text"?`<textarea data-q="${u.id}" rows="2" style="width:98%;font:13px monospace"></textarea>`:(u.kind==="scale"?["1","2","3","4","5"]:u.choices).map(f=>`<label style="margin-right:10px"><input type="radio" name="${u.id}" value="${f}" data-q="${u.id}"> ${f}</label>`).join("")}</p>`).join("")}
      <button id="fb-save">Save on this device</button> <button id="fb-copy">Copy summary</button> <span id="fb-msg">${l}</span>
      <textarea id="fb-text" readonly rows="6" style="display:none;width:98%;margin-top:8px;font:12px monospace"></textarea></div>`;const c=u=>n.querySelector(u);c("#fb-close").onclick=()=>a.close();const h=()=>({at:new Date().toISOString().slice(0,16).replace("T"," "),answers:r(),session:s(),ledger:lu(i.get()),ledgerJson:JSON.stringify(Fr(i.get()))});c("#fb-save").onclick=()=>{const u=Qc(h());c("#fb-msg").textContent=`Saved (${u} on this device).`},c("#fb-copy").onclick=async()=>{const u=h();Qc(u);const f=Ix(u),p=c("#fb-text");p.value=f;try{await navigator.clipboard.writeText(f),c("#fb-msg").textContent="Copied! Paste it into a message."}catch{p.style.display="block",p.select(),c("#fb-msg").textContent="Could not auto-copy: select the text below and copy it."}}};n.addEventListener("keydown",l=>{l.stopPropagation(),l.code==="Escape"&&a.close()}),n.addEventListener("keyup",l=>l.stopPropagation()),n.addEventListener("mousedown",l=>l.stopPropagation()),n.addEventListener("mouseup",l=>l.stopPropagation());const a={open(){e=!0,o(),n.style.display="flex"},close(){e=!1,n.style.display="none"},isOpen:()=>e};return a}function xr(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new oe;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let v=0;v<p.count;++v)u.push(p.getX(v)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=th(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let g=0;g<o[h].length;++g)p.push(o[h][g][f]);const v=th(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(v)}}return l}function th(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ae(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,p=h.count;f<p;f++)for(let v=0;v<e;v++){const g=h.getComponent(f,v);a.setComponent(f+u,v,g)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ui=12,Cr=64,hu=(i,t,e)=>(i*al+t)*ll+e,Ux=i=>[i%ui/ui,1-(Math.floor(i/ui)+1)/ui];function Nx(i){return[[[.5,.38,.2]],[[.34,.38,.15],[.66,.38,.15]],[[.3,.46,.12],[.7,.46,.12],[.5,.24,.12]],[[.3,.4,.14],[.7,.4,.14],[.2,.2,.07],[.5,.17,.07],[.8,.2,.07]]][i]}function kx(i,t,e,n,s,r){const o=Cr;i.save(),i.translate(t,e),i.lineCap="round",i.lineJoin="round";for(const[h,u,f]of Nx(s)){const p=h*o,v=u*o,g=f*o;i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=3,i.beginPath(),i.arc(p,v,g,0,7),i.fill(),i.stroke();const m=n===5,d=n===4,y=g*(m?.28:d?.62:.45),x=n===1?-g*.15:d?g*.25:0,_=n===3?g*.3:n===1?g*.2:0;i.fillStyle="#000",i.beginPath(),i.arc(p+x,v+_,y,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(p+x-y*.3,v+_-y*.3,y*.28,0,7),i.fill(),i.strokeStyle="#000",i.lineWidth=3.5,i.beginPath(),n===3?(i.fillStyle="#000",i.globalAlpha=.85,i.fillRect(p-g,v-g,g*2,g),i.globalAlpha=1,i.moveTo(p-g,v),i.lineTo(p+g,v)):n===2?(i.moveTo(p-g,v-g*1.1),i.lineTo(p+g,v-g*.4)):n===1?(i.moveTo(p-g,v-g*.4),i.lineTo(p+g,v-g*1.1)):n===0&&i.arc(p,v+g*.2,g*1.05,Math.PI*1.1,Math.PI*1.9),i.stroke()}const a=.5*o,l=.78*o;i.strokeStyle="#000",i.fillStyle="#000",i.lineWidth=4,i.beginPath();const c=n===1||n===5||n===2;if(r===0)i.moveTo(a-12,l),i.lineTo(a+12,l),i.stroke();else if(r===1)i.moveTo(a-14,l),i.bezierCurveTo(a-7,l-8,a-3,l+8,a+2,l),i.bezierCurveTo(a+6,l-6,a+10,l+6,a+14,l),i.stroke();else if(r===2)i.ellipse(a,l,7,c?9:6,0,0,7),i.fill();else if(r===3)i.moveTo(a-15,l-4),i.quadraticCurveTo(a,l+(c?-12:14),a+15,l-4),i.stroke();else if(r===4){i.fillStyle="#fff",i.lineWidth=3,i.rect(a-15,l-6,30,12),i.fill(),i.stroke(),i.beginPath();for(let h=-10;h<=10;h+=5)i.moveTo(a+h,l-6),i.lineTo(a+h,l+6);i.stroke()}i.restore()}function Fx(){const i=document.createElement("canvas");i.width=i.height=ui*Cr;const t=i.getContext("2d");for(let n=0;n<Ns.length;n++)for(let s=0;s<al;s++)for(let r=0;r<ll;r++){const o=hu(n,s,r);kx(t,o%ui*Cr,Math.floor(o/ui)*Cr,n,s,r)}const e=new jn(i);return e.colorSpace=Ve,e.minFilter=ln,e}function Ox(i){const t=new ue(.5,20,14),e=t.attributes.position;for(let n=0;n<e.count;n++){let s=e.getX(n),r=e.getY(n),o=e.getZ(n);if(i===1){const a=1+(r<0?.25:-.15);s*=a,o*=a,r*=1.1}else if(i===2)s*=1.2,r*=.85;else if(i===3){const a=Math.atan2(o,s),l=1+.14*Math.cos(a*5);s*=l,o*=l}else if(i===4)s=Math.sign(s)*Math.pow(Math.abs(s)/.5,.5)*.5*.85+s*.15,o=Math.sign(o)*Math.pow(Math.abs(o)/.5,.5)*.5*.85+o*.15,r*=.85;else if(i===5){const l=.55+.6*(1-(r+.5));s*=l,o*=l,r*=1.2}e.setXYZ(n,s,r,o)}return t.computeVertexNormals(),t}function Bx(i){const t=(n,s=0,r=0,o=0,a=0,l=0,c=0)=>(n.rotateX(a),n.rotateY(l),n.rotateZ(c),n.translate(s,r,o),n.toNonIndexed()),e=(n,s,r=!1)=>Array.from({length:n},(o,a)=>{const l=s+a/n*Math.PI*2,c=.2+.7*((a*.37+s)%1),h=Math.sqrt(1-c*c);return new C(Math.cos(l)*h,r?c*.2:c,Math.sin(l)*h-(r?0:.3)).normalize()});switch(i){case"halo":return t(new Je(.26,.045,8,22),0,.74,0,Math.PI/2);case"horns":return xr([t(new mn(.1,.34,8),.2,.55,0,0,0,-.45),t(new mn(.1,.34,8),-.2,.55,0,0,0,.45)]);case"spikes":return xr(e(7,.4).map(n=>{const s=new mn(.07,.3,6);return s.translate(0,.15,0),s.applyQuaternion(new hn().setFromUnitVectors(new C(0,1,0),n)),s.translate(n.x*.46,n.y*.46,n.z*.46),s.toNonIndexed()}));case"glow":return new ue(.66,14,10).toNonIndexed();case"fluff":return xr(e(8,1.1).map(n=>{const s=new ue(.13,8,6);return s.translate(n.x*.5,n.y*.5,n.z*.5),s.toNonIndexed()}));case"drip":return t(new mn(.075,.3,8),.08,-.62,.22,Math.PI);case"stripes":return xr([t(new Je(.49,.035,6,26),0,-.12,0,Math.PI/2),t(new Je(.46,.035,6,26),0,.17,0,Math.PI/2)]);case"bellyface":return t(new ue(.2,10,8).scale(1.3,.8,.45),0,-.28,.46)}}const zx=`
attribute vec2 cellUv; varying vec2 vUv;
void main() {
  vUv = cellUv + uv / 12.0;
  vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float s = length(instanceMatrix[0].xyz);
  c.xy += position.xy * s * 0.95; c.z += s * 0.55;
  gl_Position = projectionMatrix * c;
}`,Hx=`uniform sampler2D atlas; varying vec2 vUv;
void main() { vec4 t = texture2D(atlas, vUv); if (t.a < 0.15) discard; gl_FragColor = t; }`;class eh{constructor(t){H(this,"group",new Te);H(this,"bodies",[]);H(this,"outlines",[]);H(this,"faces");H(this,"cellAttr");H(this,"slotOf",new Map);H(this,"faceIdx",new Map);H(this,"tmp",new xe);H(this,"radius",.5);H(this,"acc",new Map);this.spores=t;const e=t.length,n=new Array(Nr).fill(0);t.forEach(o=>{const a=o.anatomy.bodyShape;this.slotOf.set(o.id,{shape:a,idx:n[a]++})});for(let o=0;o<Nr;o++){const a=Ox(o),l=Math.max(1,n[o]),c=new li(a,new he({roughness:.55,emissive:2236962}),l),h=new li(a,new Ht({color:0,side:me}),l);c.count=h.count=n[o],c.frustumCulled=h.frustumCulled=!1,this.bodies.push(c),this.outlines.push(h),this.group.add(c,h)}t.forEach(o=>{const{shape:a,idx:l}=this.slotOf.get(o.id);this.bodies[a].setColorAt(l,new Et(o.anatomy.colour))}),this.bodies.forEach(o=>o.instanceColor&&(o.instanceColor.needsUpdate=!0));for(const o of Ua){const a=t.filter(p=>p.anatomy.signatureTrait===o);if(!a.length)continue;const l=Bx(o),c=new Map,h=o==="glow",u=new li(l,h?new Ht({transparent:!0,opacity:.28,blending:Ke,depthWrite:!1}):new he({roughness:.5,emissive:o==="halo"?16767072:1118481,emissiveIntensity:o==="halo"?.9:.4}),a.length);u.frustumCulled=!1,a.forEach((p,v)=>{c.set(p.id,v);const g=new Et(p.anatomy.colour),m=p.tone.alignment>0;u.setColorAt(v,o==="halo"?new Et(16769658):o==="horns"?new Et(m?16732208:16051416):o==="spikes"||o==="stripes"?g.clone().offsetHSL(0,0,-.18):o==="drip"?g:g.clone().offsetHSL(0,-.1,.18))});let f;h||(f=new li(l,new Ht({color:0,side:me}),a.length),f.frustumCulled=!1,this.group.add(f)),this.group.add(u),this.acc.set(o,{mesh:u,outline:f,idx:c})}const s=new gn(1,1);this.cellAttr=new Pa(new Float32Array(e*2),2),s.setAttribute("cellUv",this.cellAttr);const r=new In({vertexShader:zx,fragmentShader:Hx,uniforms:{atlas:{value:Fx()}},transparent:!1});this.faces=new li(s,r,e),this.faces.frustumCulled=!1,this.group.add(this.faces),t.forEach((o,a)=>{this.faceIdx.set(o.id,a),this.setFace(o)})}setFace(t){const[e,n]=Ux(hu(t.mood,t.anatomy.eyeSet,t.anatomy.mouthSet)),s=this.faceIdx.get(t.id);this.cellAttr.setXY(s,e,n),this.cellAttr.needsUpdate=!0}place(t,e,n,s=1){const{shape:r,idx:o}=this.slotOf.get(t),a=this.tmp;a.position.copy(e),a.scale.set(n/Math.sqrt(s),n*s,n/Math.sqrt(s)),a.updateMatrix(),this.bodies[r].setMatrixAt(o,a.matrix);{const l=this.acc.get(this.spores[this.faceIdx.get(t)].anatomy.signatureTrait);if(l){const c=l.idx.get(t);if(l.mesh.setMatrixAt(c,a.matrix),l.outline){const h=a.scale.clone();a.scale.multiplyScalar(1.12),a.updateMatrix(),l.outline.setMatrixAt(c,a.matrix),a.scale.copy(h),a.updateMatrix()}}}a.scale.multiplyScalar(1.1+.02*this.spores[this.faceIdx.get(t)].anatomy.outlineWeight),a.updateMatrix(),this.outlines[r].setMatrixAt(o,a.matrix),a.scale.set(n,n,n),a.position.copy(e),a.updateMatrix(),this.faces.setMatrixAt(this.faceIdx.get(t),a.matrix)}commit(){this.bodies.forEach(t=>t.instanceMatrix.needsUpdate=!0),this.outlines.forEach(t=>t.instanceMatrix.needsUpdate=!0),this.faces.instanceMatrix.needsUpdate=!0,this.acc.forEach(t=>{t.mesh.instanceMatrix.needsUpdate=!0,t.outline&&(t.outline.instanceMatrix.needsUpdate=!0)})}drawCalls(){return this.bodies.length+this.outlines.length+1+[...this.acc.values()].reduce((t,e)=>t+(e.outline?2:1),0)}}const Gx={glow:"horn",halo:"horn",horns:"horn",spikes:"body",fluff:"body",bellyface:"body",drip:"tail",stripes:"leg"},nh=[{role:"leg",pos:[-.9,.45,-.55]},{role:"leg",pos:[-.9,.45,.55]},{role:"leg",pos:[.9,.45,-.55]},{role:"leg",pos:[.9,.45,.55]},{role:"body",pos:[-.9,1.45,0]},{role:"body",pos:[0,1.45,-.55]},{role:"body",pos:[0,1.45,.55]},{role:"body",pos:[.9,1.45,0]},{role:"body",pos:[0,2.35,0]},{role:"horn",pos:[.9,2.35,-.55]},{role:"horn",pos:[.9,2.35,.55]},{role:"tail",pos:[-1.8,1.45,0]}];function Vx(i){if(i<=5){const e=i===1?0:.55+i*.12;return{shape:"Cluster",tpl:Array.from({length:i},(n,s)=>({role:"body",pos:[Math.cos(s/i*Math.PI*2)*e,.5,Math.sin(s/i*Math.PI*2)*e]}))}}if(i<=30){const e=nh.slice(0,i);for(let n=nh.length,s=0;n<i;s++){const r=Math.min(6,i-n);for(let o=0;o<r;o++,n++)e.push({role:"body",pos:[Math.cos(o/r*Math.PI*2)*.95,3.3+s*.9,Math.sin(o/r*Math.PI*2)*.95]})}return{shape:"Body",tpl:e}}const t=Math.max(2,i*1/(Math.PI*2));return{shape:"Colony",tpl:Array.from({length:i},(e,n)=>({role:"body",pos:[Math.cos(n/i*Math.PI*2)*t,.5,Math.sin(n/i*Math.PI*2)*t]}))}}function Wx(i){const{shape:t,tpl:e}=Vx(i.length),n=[...i],s=[];for(const o of e){const a=n.findIndex(c=>Gx[c.anatomy.signatureTrait]===o.role),l=n.splice(a>=0?a:0,1)[0];s.push({sporeId:l.id,role:o.role,pos:o.pos})}const r=i.reduce((o,a)=>o+a.tone.alignment,0)/Math.max(1,i.length);return{shape:t,slots:s,avgAlignment:r}}function Xx(i,t,e){const n=i.slots.find(r=>r.sporeId===t),s=i.slots.find(r=>r.sporeId===e);return!n||!s?i:{...i,slots:i.slots.map(r=>r===n?{...r,sporeId:e}:r===s?{...r,sporeId:t}:r)}}const Oi=12;class qx{constructor(t,e,n){H(this,"scene",new gi);H(this,"camera");H(this,"spores",Na(Oi));H(this,"crowd");H(this,"pos",[]);H(this,"vel",[]);H(this,"target",[]);H(this,"creature",null);H(this,"merged",!1);H(this,"mergedAt",0);H(this,"drag",-1);H(this,"dragOffset",new C);H(this,"hover",-1);H(this,"t",0);H(this,"ray",new ol);H(this,"plane",new Hn(new C(0,1,0),-.5));H(this,"label",document.createElement("div"));H(this,"ending",document.createElement("div"));H(this,"swapCount",0);H(this,"onContinue");H(this,"endingShown",!1);H(this,"creatureInfo",{name:"",description:""});this.store=t,this.dom=n,this.camera=e,this.scene.background=new Et(263434),this.scene.fog=new Ka(263434,14,30),this.scene.add(new Us(8949936,1.1));const s=new Ur(16777215,2.2);s.position.set(4,10,6),this.scene.add(s);const r=new st(new Ds(9,48),new he({color:1382948,roughness:1}));r.rotation.x=-Math.PI/2,this.scene.add(r),this.crowd=new eh(this.spores),this.scene.add(this.crowd.group),this.spores.forEach(()=>{this.pos.push(new C),this.vel.push(new C),this.target.push(null)}),Object.assign(this.label.style,{position:"fixed",display:"none",padding:"4px 8px",background:"rgba(0,0,0,.75)",color:"#fff",font:"12px monospace",pointerEvents:"none",zIndex:"6",border:"1px solid #fff"}),this.label.id="sporelabel",this.ending.id="ending",Object.assign(this.ending.style,{position:"fixed",left:"0",right:"0",bottom:"0",padding:"28px 20px",textAlign:"center",background:"linear-gradient(transparent, rgba(0,0,0,.92))",color:"#ffe9c0",font:"17px/1.5 Georgia, serif",display:"none",zIndex:"7"}),document.body.append(this.label,this.ending),n.addEventListener("pointerdown",o=>this.down(o)),addEventListener("pointermove",o=>this.move(o)),addEventListener("pointerup",o=>this.up(o))}enter(){{const t=is(this.store.get());this.spores=Yh(Na(Oi),t),this.creatureInfo=hl(t),this.scene.remove(this.crowd.group),this.crowd=new eh(this.spores),this.scene.add(this.crowd.group)}this.merged=!1,this.endingShown=!1,this.creature=null,this.t=0,this.ending.style.display="none",this.camera.position.set(0,9,8.5),this.camera.lookAt(0,.8,0),this.spores.forEach((t,e)=>{this.pos[e].set(0,1+Math.random(),0);const n=e/Oi*Math.PI*2+Math.random()*.3,s=3.5+Math.random()*2;this.vel[e].set(Math.cos(n)*s,4+Math.random()*2,Math.sin(n)*s),this.target[e]=null}),wt.burst(),this.store.set({mode:"cameo"})}ndc(t){const e=this.dom.getBoundingClientRect();return new rt((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1)}pick(t){this.ray.setFromCamera(this.ndc(t),this.camera);let e=-1,n=1/0;return this.pos.forEach((s,r)=>{const o=this.ray.ray.intersectSphere(new Kn(s,.5),new C);if(o){const a=o.distanceTo(this.ray.ray.origin);a<n&&(n=a,e=r)}}),e}onPlane(t){return this.ray.setFromCamera(this.ndc(t),this.camera),this.ray.ray.intersectPlane(this.plane,new C)}down(t){if(this.store.get().mode!=="cameo")return;const e=this.pick(t);if(e<0)return;this.drag=e,this.plane.constant=-(this.merged?this.pos[e].y:1.1);const n=this.onPlane(t);this.dragOffset.copy(this.pos[e]).sub(n??this.pos[e]),this.vel[e].set(0,0,0),this.label.style.display="none"}move(t){if(this.store.get().mode==="cameo"){if(this.drag>=0){const e=this.onPlane(t);if(e){const n=e.add(this.dragOffset);n.y=-this.plane.constant,this.pos[this.drag].copy(n)}return}if(this.hover=this.pick(t),this.hover>=0){const e=this.spores[this.hover];this.label.style.display="block",this.label.style.left=t.clientX+14+"px",this.label.style.top=t.clientY+8+"px",this.label.textContent=`${e.name}: ${Ns[e.mood]}, ${qh[e.personality]}, ${e.anatomy.signatureTrait}`}else this.label.style.display="none"}}up(t){if(this.drag<0)return;const e=this.drag;this.drag=-1;let n=-1,s=60;const r=this.screenOf(e);this.pos.forEach((o,a)=>{if(a!==e){const l=this.screenOf(a),c=Math.hypot(l.x-r.x,l.y-r.y);c<s&&(s=c,n=a)}}),this.merged||(this.pos[e].y=.5),!(n<0)&&(this.merged?this.swap(e,n):this.doMerge(e,n))}worldTargets(){this.creature.slots.forEach(t=>{this.target[t.sporeId]=new C(t.pos[0]*1.05,t.pos[1],t.pos[2]*1.05)})}doMerge(t,e){this.spores[t].history.push({type:"merged",otherId:e}),this.spores[e].history.push({type:"merged",otherId:t}),this.creature=Wx(this.spores),wt.merge(),this.merged=!0,this.mergedAt=this.t,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,mergeSeconds:Math.round(this.t),swaps:this.swapCount}})}swap(t,e){this.creature=Xx(this.creature,t,e),this.swapCount++,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,swaps:this.swapCount}})}showEnding(){this.ending.innerHTML=`The box was never a box.<br>Twelve faces, and every one of them is looking at you.<br><br><span id="creature-name">Your creature: <b>${this.creatureInfo.name}</b>.</span> <small>${this.creatureInfo.description}</small><br><br><button id="continue">Continue</button> &nbsp; <button id="again">Play again</button>`,this.ending.style.display="block",document.getElementById("again").onclick=()=>location.reload(),document.getElementById("continue").onclick=()=>{this.onContinue&&(this.ending.style.display="none",this.onContinue())}}update(t){if(this.store.get().mode!=="cameo")return;this.t+=t;for(let n=0;n<Oi;n++){const s=this.pos[n],r=this.vel[n],o=this.target[n];if(n!==this.drag)if(o)s.lerp(o,1-Math.exp(-5*t));else{r.y-=14*t,s.addScaledVector(r,t),s.y<.5&&(s.y=.5,r.y*=-.35,r.x*=.82,r.z*=.82,Math.abs(r.y)<.4&&(r.y=0));const a=Math.hypot(s.x,s.z);a>7&&(s.x*=7/a,s.z*=7/a,r.x*=-.5,r.z*=-.5)}}if(!this.merged)for(let n=0;n<Oi;n++)for(let s=n+1;s<Oi;s++){const r=this.pos[n].distanceTo(this.pos[s]);if(r<.9&&r>1e-4&&n!==this.drag&&s!==this.drag){const o=this.pos[n].clone().sub(this.pos[s]).setY(0).normalize().multiplyScalar((.9-r)*.5);this.pos[n].add(o),this.pos[s].sub(o)}}this.spores.forEach((n,s)=>{const r=Math.sin(this.t*iv(n.mood)*2+s)*.08,o=(this.drag===s,0);this.crowd.place(n.id,this.pos[s].clone().setY(this.pos[s].y+o),.95+(this.hover===s?.08:0),1+r)}),this.crowd.commit(),this.merged&&this.t-this.mergedAt>2.2&&!this.endingShown&&(this.endingShown=!0,this.showEnding());const e=this.merged?new C(0,3.4,8.5):new C(0,9,8.5);this.camera.position.lerp(e,1-Math.exp(-2.5*t)),this.camera.lookAt(0,this.merged?1.5:.8,0)}render(t){t.render(this.scene,this.camera)}screenOf(t){const e=this.pos[t].clone().project(this.camera);return{x:(e.x+1)/2*innerWidth,y:(1-e.y)/2*innerHeight}}}function Yx(i,t,e){const n=Math.PI*2;return Math.abs(((i-t)%n+n+Math.PI)%n-Math.PI)<=e/2}const zn={speed:3.2,width:.7,reward:3,penalty:1};class $x{constructor(t,e){H(this,"el",document.createElement("div"));H(this,"canvas",document.createElement("canvas"));H(this,"angle",0);H(this,"target",2);H(this,"speed",zn.speed);H(this,"open",!1);H(this,"raf",0);H(this,"last",0);H(this,"loop",()=>{if(!this.open)return;const t=performance.now();this.angle+=this.speed*((t-this.last)/1e3),this.last=t,this.draw(),this.raf=requestAnimationFrame(this.loop)});this.store=t,this.onDone=e,this.el.id="poplock",Object.assign(this.el.style,{position:"fixed",inset:"0",display:"none",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.7)",zIndex:"10",flexDirection:"column",color:"#9fb",font:"14px monospace"}),this.canvas.width=this.canvas.height=260,this.canvas.id="poplock-canvas",this.el.append("Crack the crate: stop the pointer in the green zone (Space or click)",this.canvas),document.body.appendChild(this.el),addEventListener("keydown",n=>{this.open&&n.code==="Space"&&(n.preventDefault(),this.press())}),this.canvas.addEventListener("click",()=>this.open&&this.press())}show(){this.store.get().crates<1||(this.target=Math.random()*Math.PI*2,this.angle=this.target+Math.PI,this.open=!0,this.el.style.display="flex",this.last=performance.now(),this.loop())}press(){const t=Yx(this.angle,this.target,zn.width),e=this.store.get();this.close(),this.store.set({crates:e.crates-1,scrap:t?e.scrap+zn.reward:Math.max(0,e.scrap-zn.penalty)}),this.onDone(t?`Crate cracked: +${zn.reward} scrap.`:`Slipped. Tool wear: -${zn.penalty} scrap.`)}close(){this.open=!1,this.el.style.display="none",cancelAnimationFrame(this.raf)}draw(){const t=this.canvas.getContext("2d"),e=100,n=130,s=130;t.clearRect(0,0,260,260),t.lineWidth=16,t.strokeStyle="#223",t.beginPath(),t.arc(n,s,e,0,Math.PI*2),t.stroke(),t.strokeStyle="#3f9",t.beginPath(),t.arc(n,s,e,this.target-zn.width/2,this.target+zn.width/2),t.stroke(),t.strokeStyle="#fff",t.lineWidth=4,t.beginPath(),t.moveTo(n,s),t.lineTo(n+Math.cos(this.angle)*(e+10),s+Math.sin(this.angle)*(e+10)),t.stroke()}}const Bo=(i,t,e)=>i.set({[t]:i.get()[t]+e}),uu=[{id:"oxygen",name:"Oxygen Cell",cost:3,desc:"+40 oxygen",apply:i=>(Bo(i,"oxygen",40),"Oxygen restored.")},{id:"power",name:"Power Cell",cost:4,desc:"+35 power",apply:i=>(Bo(i,"power",35),"Element 115 topped up.")},{id:"repair",name:"Repair Patch",cost:3,desc:"+30 hull",apply:i=>(Bo(i,"hull",30),"Hull patched.")},{id:"hat",name:"Useless Hat",cost:1,desc:"does nothing, proudly",apply:i=>(i.set({hats:i.get().hats+1}),"You now own a hat. Nothing improved.")}];function jx(i,t){const e=uu.find(n=>n.id===t);return!e||i.get().scrap<e.cost?null:(i.set({scrap:i.get().scrap-e.cost}),e.apply(i))}function Kx(i,t){const e=document.createElement("div");e.id="transmog",Object.assign(e.style,{position:"fixed",right:"12px",top:"12px",width:"270px",maxHeight:"calc(100vh - 24px)",overflowY:"auto",padding:"10px",background:"rgba(8,10,16,.85)",border:"1px solid #f0a020",color:"#fc8",font:"13px monospace",display:"none",zIndex:"5"}),document.body.appendChild(e);const n=o=>{document.getElementById("tm-msg").textContent=o??"Not enough scrap."};let s="";const r=()=>{var u,f;const o=i.get();if(e.style.display=o.mode==="rooms"&&o.room==="transmog"?"block":"none",e.style.display==="none"){s="";return}const a=((u=document.getElementById("tm-msg"))==null?void 0:u.textContent)??"Feed it junk. Make things.",l=`<style>#transmog button{display:block;width:100%;text-align:left;margin:3px 0;padding:5px 8px;font:12px/1.3 monospace;color:#fc8;background:#14100a;border:1px solid #6a4a18;cursor:pointer}
#transmog button:hover:not(:disabled){background:#2a1c08;border-color:#f0a020}#transmog button:not(:disabled){border-color:#3fbf7f;color:#cfe}#transmog button:disabled{opacity:.45;cursor:default;color:#a87;border-color:#4a3a20}
#transmog hr{border:0;border-top:1px solid #4a3a20;margin:8px 0}#transmog h5{margin:6px 0 2px;color:#f0a020;letter-spacing:2px;font-size:11px}#tm-msg{color:#ffe9c0;font-style:italic;min-height:2.6em}</style>
<b>TRANSMOGRIFIER</b> &nbsp; scrap: <span id="tm-scrap">${o.scrap}</span><hr>`+uu.map(p=>`<button data-r="${p.id}" ${o.scrap<p.cost?"disabled":""}>${p.name} (${p.cost}) ${p.desc}</button>`).join("")+"<hr><h5>MINING UPGRADES</h5>"+fl.map(p=>{const v=o.up[p.id],g=Zv(i,p.id);return g===null?`<button disabled>${p.name} T${v}/${p.costs.length} MAX (${p.desc(v)})</button>`:`<button data-u="${p.id}" ${o.scrap<g?"disabled":""}>${p.name} T${v}/${p.costs.length}: ${p.desc(v+1)} (${g})</button>`}).join("")+(qr(o)?`<hr><h5>THE CUBE</h5><button id="tm-feed" ${o.scrap<Yn(o.feeds)?"disabled":""}>Offer scrap to the cube (${Yn(o.feeds)})</button>${o.scrap>=Yn(o.feeds)&&o.feeds<9?'<div id="tm-hungry" style="color:#f9c;margin:2px 0">The cube is hungry. It hums at your pockets.</div>':""}<div style="margin:2px 0 6px;opacity:.8">stage ${Hi(o.feeds)} of 3 &middot; fed ${o.feeds}/9</div>`:"")+((f=window.sporeLife)!=null&&f.count("transmog")?`<hr><h5>THE SPORES</h5><button id="tm-sporefeed" ${o.scrap<1?"disabled":""}>Feed the spores a junk find (1)</button>`:"")+`<hr><button id="tm-crate" ${o.crates<1?"disabled":""}>Crack a crate (${o.crates} sealed)</button><hr><div id="tm-msg">${a}</div>`;if(l===s)return;s=l,e.innerHTML=l,e.querySelectorAll("button[data-r]").forEach(p=>p.onclick=()=>{n(jx(i,p.dataset.r)),r()}),e.querySelectorAll("button[data-u]").forEach(p=>p.onclick=()=>{n(Jv(i,p.dataset.u)),r()});const c=document.getElementById("tm-feed");c&&(c.onclick=()=>{n(Lv(i)),r()}),document.getElementById("tm-crate").onclick=()=>t();const h=document.getElementById("tm-sporefeed");h&&(h.onclick=()=>{n(window.sporeLife.feed()??"Not enough scrap."),r()})};return i.subscribe(r),r(),{say:n,render:r}}function gl(i){return t=>{i[0].intensity=6+Math.sin(t/90)*.4+(Math.sin(t/1300)>.97?-3:0),i[1].intensity=4+Math.sin(t/230)*.8}}function Zx(i=16738858){const t=new Te;t.add(new st(new ue(.2,16,12),new he({color:i,emissive:i,emissiveIntensity:.25}))),t.add(new st(new ue(.225,16,12),new Ht({color:0,side:me})));for(const n of[-.08,.08]){const s=new st(new ue(.065,12,8),new Ht({color:16777215}));s.position.set(n,.06,.15);const r=new st(new ue(.03,8,6),new Ht({color:0}));r.position.set(n,.06,.205),t.add(s,r)}const e=new st(new Je(.05,.012,6,12,Math.PI),new Ht({color:0}));return e.position.set(0,-.06,.2),e.rotation.z=Math.PI,t.add(e),t}function Jx(){const i=new gi;i.background=new Et(197641),i.fog=new Ls(329485,.05);const t=ru(i),e=1.05,n=1.7,s=1.15,r=new he({color:1909810,roughness:.9,metalness:.3,side:me}),o=new st(new Qe(1,1,5.6,28,1,!0),r);o.rotation.x=Math.PI/2,o.scale.set(n,1,s),o.position.set(0,e,1.8),i.add(o);const a=(I,B,V)=>{const G=new st(new ue(1,36,18,Math.PI,Math.PI,I,B),V);return G.scale.set(n,s,3.4),G.position.set(0,e,-1),i.add(G),G};a(0,.22,r),a(1.72,Math.PI-1.72,r),a(.22,1.5,new he({color:8956671,transparent:!0,opacity:.1,roughness:.05,metalness:.6,side:Ce,depthWrite:!1}));const l=I=>{const B=[];for(let V=0;V<=32;V++){const G=Math.PI+V/32*Math.PI;B.push(new C(-Math.cos(G)*Math.sin(I)*n,e+Math.cos(I)*s,-1+Math.sin(G)*Math.sin(I)*3.4))}i.add(new st(new Wr(new tl(B),48,.05,6,!1),ve(790294)))};l(.22),l(1.72);const c=(I,B)=>{const V=new st(new Je(1,.035,6,40),ve(2765378));V.scale.set(n*B-.04,s*B-.04,3),V.position.set(0,e,I),i.add(V)};for(const I of[-1,.2,1.4,2.6,3.8])c(I,1);t.box(2.4,.1,9,0,0,.2,1382948);for(let I=0;I<3;I++)t.box(.06,.02,7,-.8+I*.8,.06,.4,2765637);t.cyl(.05,5.4,.75,1.95,1.6,3813162,[Math.PI/2,0,0]),t.cyl(.06,5.4,-.75,1.97,1.6,2897480,[Math.PI/2,0,0]);const h=document.createElement("canvas");h.width=1024,h.height=512;const u=h.getContext("2d"),f=u.createLinearGradient(0,0,0,512);f.addColorStop(0,"#0a0630"),f.addColorStop(1,"#2a0f4a"),u.fillStyle=f,u.fillRect(0,0,1024,512);for(let I=0;I<500;I++)u.fillStyle=`rgba(255,255,${200+Math.random()*55},${.4+Math.random()*.6})`,u.fillRect(Math.random()*1024,Math.random()*512,1+Math.random()*2,1+Math.random()*2);const p=new st(new ue(40,32,16),new Ht({map:new jn(h),side:me,fog:!1}));i.add(p);const v=document.createElement("canvas");v.width=v.height=256;{const I=v.getContext("2d");I.fillStyle="#ff7a3a",I.beginPath(),I.arc(128,128,120,0,7),I.fill(),I.fillStyle="#ffb25a",I.beginPath(),I.arc(105,100,88,0,7),I.fill()}const g=new Ig(new Fh({map:new jn(v),fog:!1}));g.scale.set(9,9,1),g.position.set(7,4,-24),i.add(g);const m=new Be(16751200,4,7);m.position.set(1.2,2.2,-3.2),i.add(m);const d=-.5;for(const I of[-.18,.18])for(const B of[d-.18,d+.18])t.cyl(.03,.03,I,.07,B,9079424);t.box(.5,.06,.5,0,.06,d,2106414),t.cyl(.06,.42,0,.3,d,2106414);const y=t.box(.62,.12,.6,0,.55,d,3094087,2154656);y.material.emissiveIntensity=.6,t.box(.62,.8,.1,0,.98,d+.32,3094087),t.box(.36,.22,.08,0,1.5,d+.34,2764604),t.box(.08,.06,.45,-.36,.78,d,2237998),t.box(.08,.06,.45,.36,.78,d,2237998),Cn(i,.12,1.1,d+.26,.24,.05,.02,-.4);const x=[12595248,2763312,14729248,3170496,3186768,11579568,14708768];let _=0;const L=[];for(let I=-3;I<=3;I++){const B=I*.36,V=1.05,G=Math.sin(B)*V,z=d-Math.cos(B)*V,O=new Te;O.position.set(G,0,z),O.rotation.y=-B,i.add(O);const j=(ct,Pt,zt,Y)=>(ct.position.set(Pt,zt,Y),O.add(ct),ct);j(new st(new ie(.52,.72,.3),ve([2371138,3025446,2502698][(I+3)%3])),0,.36,0);const at=j(new st(new ie(.54,.04,.38),ve([3160656,3814444,2898482][(I+3)%3])),0,.76,.02);at.rotation.x=.35;for(let ct=0;ct<3;ct++){const Pt=j(new st(new ie(.05,.05,.05),ve(x[_++%x.length])),-.15+ct*.15,.8,.08);Pt.rotation.x=.35}if(I%2===0){const ct=j(new st(new Qe(.08,.08,.03,16),ve(15261888,I===0?2154656:16742944,.3)),0,.82,-.08);ct.rotation.x=.35+Math.PI/2-Math.PI/2,L.push(ct)}if(Math.abs(I)===1){const ct=j(new st(new ie(.4,.26,.03),ve(1062952,2154656,.8)),0,.98,-.12);ct.rotation.x=-.25,L.push(ct)}}ye(i,`DO NOT TOUCH.
IT WORKS.`,.4,.9,d-.78,-.3,.32,"#f06050",.05).rotation.x=-.9,ye(i,"FUEL?",-.38,.88,d-.82,.35,.16,"#d8d8d0",-.04).rotation.x=-.9,ye(i,`LAUNCH =
the chair
(probably)`,-1,.92,d-.45,1.05,.3,"#d8f0d0").rotation.x=-.6,ye(i,`1 2 3 4 5
? ? ? ? ?`,.98,.9,d-.45,-1.05,.28,"#f4e27a").rotation.x=-.6,Cn(i,0,.92,d-.98,.5,.04,.02,.05),t.cyl(.025,.36,0,.62,d-.45,6711928);const A=t.box(.08,.1,.08,0,.84,d-.45,2154656,2154656);Es(i,[[-.9,.2,d-.6],[-.4,.08,d-.1],[.1,.07,d+.6],[.8,.07,1.4]],1381653,.03),Es(i,[[.7,.75,d-.9],[1,1.5,-1.2],[.9,2.15,-.4],[.9,2.2,1]],3807760,.025),Es(i,[[-.6,.75,d-.95],[-1,1.7,-1.4],[-.9,2.2,.2]],1381653,.03);const T=Zx();T.position.set(.95,1.35,-1.25),i.add(T);const P=kr(i,1.45,.9,Math.PI/2,"Aft hatch to Bunk","bed",6324479,1.55),b=new Be(16765088,5,7);b.position.set(0,2.3,1.2),i.add(b);const M=new Be(2154656,3,4);M.position.set(0,1,d-.9),i.add(M),t.box(.9,.05,.12,0,2.7,1.4,16773328,16769200),i.add(new Us(1713208,.8));const E={id:"mining",name:"Helm",scene:i,camPos:new C(.25,1.45,2.5),camLook:new C(0,.95,-1.2),hotspots:[P,{mesh:y,label:"Pilot chair (launch)",target:"fly"}]},D=gl([b,M]);return E.update=I=>{D(I),T.position.y=1.35+Math.sin(I/400)*.04,T.rotation.y=Math.sin(I/900)*.3;for(const B of L)B.material.emissiveIntensity=.5+Math.sin(I/150+B.id)*.15;A.material.emissiveIntensity=.6+Math.sin(I/300)*.3},E}function zo(i,t="#9aa4b0"){const e=document.createElement("canvas");e.width=256,e.height=96;const n=e.getContext("2d");n.fillStyle=t,n.fillRect(0,0,256,96),n.fillStyle="#e0b020";for(let s=-2;s<12;s++)n.beginPath(),n.moveTo(s*26,96),n.lineTo(s*26+13,96),n.lineTo(s*26+33,72),n.lineTo(s*26+20,72),n.fill();return n.fillStyle="#1a2230",n.font="bold 22px monospace",n.textAlign="center",i.split(`
`).forEach((s,r)=>n.fillText(s,128,28+r*24)),new jn(e)}function Qx(i,t){const a=new he({color:5924470,roughness:.6,metalness:.5,side:me}),l=new st(new Qe(1,1,3.6- -7,32,1,!0),a);l.rotation.x=Math.PI/2,l.scale.set(3.4,1,2.5),l.position.set(0,1.5,(-7+3.6)/2),i.add(l);for(let x=-7+.4;x<3.6;x+=1.3){const _=new st(new Je(1,.05,6,40),ve(9082278));_.scale.set(3.4-.05,2.5-.05,2),_.position.set(0,1.5,x),i.add(_)}const c=new st(new Ds(1,40),ve(4871266));c.scale.set(3.4,2.5,1),c.position.set(0,1.5,-7+.02),i.add(c);const h=[-1.4,.4].map(x=>{const _=new st(new ue(.09,10,8),new Ht({color:16752672}));return _.position.set(x-.1,2.15,-7+.1),i.add(_),_}),u=new el(.42,1,6,14),f=new he({color:12107978,metalness:.75,roughness:.3}),p=[zo(`HALCYON
RECLAMATION`),zo(`FREIGHT
48,000 cr`),zo(`HANDLE
WITH CARE`)];for(const x of[-1.95,-1.05,1.05,1.95])t.box(.08,.06,3.6- -7-3,x,.05,(-7+3.6)/2-1.2,12623904);let v=0;for(const x of[-1,1])for(let _=-7+1.2;_<-2.6;_+=1.25)for(let L=0;L<(_<-4?3:2);L++){const A=x*1.5,T=.55+L*.95;L===0&&(t.box(1.05,.12,.35,A,.1,_-.35,2765376),t.box(1.05,.12,.35,A,.1,_+.35,2765376));const P=new st(u,f);P.name="pod",P.rotation.z=Math.PI/2,P.position.set(A,T,_),i.add(P);for(const b of[-.35,.35]){const M=new st(new Je(.46,.05,6,20,Math.PI),ve(3159615,2126079,.5));M.rotation.y=Math.PI/2,M.position.set(A,T,_+b),M.rotation.x=Math.PI,i.add(M)}if(t.box(.04,.9,.05,A-x*.1,T,_,14725152),L===0||v%3===0){const b=new st(new gn(.75,.28),new Ht({map:p[v%3]}));b.position.set(A-x*.5,T+.05,_),b.rotation.y=-x*Math.PI/2,i.add(b)}v++}for(const x of[-1.2,1.2])t.box(.12,.14,3.6- -7-1,x,3.55,(-7+3.6)/2,13672480);const g=t.box(2.6,.18,.25,0,3.4,-3.2,14725152),m=t.box(.22,.25,.22,0,2.6,-3.2,3159615);t.cyl(.015,.8,0,3,-3.2,9079434);for(let x=0;x<6;x++)t.box(.16,.19,.06,-1.1+x*.44,3.4,-3.07,x%2?1052688:14729248);i.fog=new Ls(1581100,.06),i.background=new Et(790552);const d=new Be(16756800,10,9);d.position.set(-1.6,3.2,-1.5),i.add(d);const y=new Be(8438015,12,11);y.position.set(1.4,3.3,-4.5),i.add(y);for(const x of[-5.5,-2.5,.5])t.box(.5,.06,1.2,0,3.95,x,13625599,10539263);return ye(i,`HOLD 18.0 C
HUMIDITY OK
FREIGHT SAFE`,2.4,1.9,-1.4,-Math.PI/2,.5,"#d8f0e0"),ye(i,`CARGO SAFETY
1. Secure the freight.
2. Secure the freight.
3. Pilot (if time permits)`,.95,2.75,-7+.06,0,1.1,"#f4f4f0"),{tick:x=>{const _=Math.sin(x/180)>.6;h.forEach((L,A)=>L.visible=A?_:!_),g.position.z=-3.2+Math.sin(x/6e3)*.6,m.position.z=g.position.z}}}function t_(i){const t=new gi,{room:e,b:n,flicker:s}=pl(t,"transmog","Cargo Bay",15769632,{w:5.6,h:4.2,d:10.6,clean:!0,noWalls:!0});e.camPos.set(.25,1.6,3.6),e.camLook.set(-.3,.9,-1.6);const r=Qx(t,n);n.box(.1,3,2.4,-2.75,1.5,-.6,4871266);const o=n.cyl(.4,1,-.3,.6,-1.7,3811914);n.cyl(.46,.08,-.3,.1,-1.7,1710626),n.cyl(.46,.08,-.3,1.12,-1.7,1710626);const a=new he({color:6961919,emissive:4202666,emissiveIntensity:.6,transparent:!0,opacity:1,roughness:.1,metalness:.2}),l=ve(2759236,8401151,.5);n.cyl(.85,.1,1,.05,.2,2236972);const c=new st(new ie(1,1,1),[l,l,l,l,a,l]);c.position.set(1,.5,.2),t.add(c);const h=new Be(9453823,3,4);h.position.set(1,1,.2),t.add(h);const u=new st(new ue(.12,12,8),new Ht({color:16777215,transparent:!0}));u.visible=!1,t.add(u);const f=new st(new ue(.05,8,6),new Ht({color:0,transparent:!0}));f.visible=!1,t.add(f),n.box(.5,.35,.4,1.6,.97,-1.8,5917232),n.box(1.4,.8,.7,1.6,.4,-1.8,2764864),n.box(.6,.4,.4,-2.5,.2,-.2,3815978),n.box(.4,.2,.3,-2.6,.5,-.2,5914672),n.box(.5,.5,.05,1,1.95,-2.42,2759186,15769632),n.cyl(.25,.9,-2.6,.45,.6,3099210);const p=kr(t,-2.7,-.6,Math.PI/2,"Airlock hatch to Bunk","bed",6324479,1.6);for(let z=0;z<0;z++)for(let O=0;O<3;O++)n.box(.5,.5,.5,2.62,.3+O*.52,-1.35+z*.55,[5917232,4864552,3820090][(z+O)%3]),Cn(t,2.37,.3+O*.52,-1.35+z*.55,.02,.5,.12);const v=document.createElement("canvas");v.width=256,v.height=256;{const z=v.getContext("2d");z.fillStyle="#0a0630",z.fillRect(0,0,256,256);for(let O=0;O<80;O++)z.fillStyle="#fff",z.fillRect(Math.random()*256,Math.random()*256,2,2)}const g=new st(new gn(1.7,1.9),new Ht({map:new jn(v)}));g.position.set(-.5,.97,-6.95),t.add(g);const m=document.createElement("canvas");m.width=256,m.height=256;{const z=m.getContext("2d");z.fillStyle="#2a323f",z.fillRect(0,0,256,256),z.fillStyle="#d8b820";for(let O=-4;O<8;O++)z.beginPath(),z.moveTo(O*40,256),z.lineTo(O*40+20,256),z.lineTo(O*40+120,200),z.lineTo(O*40+100,200),z.fill();z.fillStyle="#e8e8e8",z.font="bold 34px monospace",z.fillText("CARGO",70,110)}const d=new st(new ie(1.7,1.9,.08),new he({map:new jn(m),roughness:.7,metalness:.4}));d.position.set(-.5,.97,-6.9),t.add(d),n.box(.12,2,.1,-1.38,1,-6.9,790294),n.box(.12,2,.1,.38,1,-6.9,790294),n.box(1.9,.12,.1,-.5,1.98,-6.9,790294),ye(t,`OPENS.
SHUTS.
USUALLY.`,-.5,2.3,-6.88,0,.4,"#f4e27a",.03);const y=n.box(.9,.05,.9,-1.6,.07,1,1708552,15769632);y.name="ladder",y.material.emissiveIntensity=.6,n.box(.05,.9,.05,-1.95,.5,.6,6974068),n.box(.05,.9,.05,-1.25,.5,.6,6974068);for(let z=0;z<3;z++)n.box(.7,.04,.04,-1.6,.25+z*.28,.6,6974068);ye(t,`LADDER
(it is a ladder)`,-1.6,.9,.55,0,.42,"#d8f0d0"),Cn(t,-1.6,.11,1.46,1,.02,.06),e.hotspots.push(p,{mesh:y,label:"Ladder down to the Engine Room",target:"engine"});let x=0,_=0,L=i.get().stats.trips,A=i.get().door;const T=Array.from({length:14},(z,O)=>{const j=new st(new ie(.16+O%3*.05,.08+O%2*.05,.14),ve([6974068,9067066,4876922][O%3],2102280,.4));return j.position.set(-1.2+O%5*.17,.08+Math.floor(O/5)*.09,-.9+O*7%4*.12),j.rotation.y=O*1.3,j.visible=!1,t.add(j),j}),P=Array.from({length:5},(z,O)=>{const j=new st(new Qe(.12-O*.012,.16-O*.012,.1,10),ve([14696512,4235488,14729280,6340704,12607680][O],1118481,.3));return j.visible=!1,t.add(j),j}),b=ve(1714720,2162576,.1),M=new st(new ie(.9,.04,.35),b);M.position.set(1.6,.82,-1.45),t.add(M),t.children[t.children.length-1];let E=i.get().scrap,D=0,I=0,B=i.get().lunges,V=0;const G=gl(s);return e.update=z=>{const O=Math.min(.1,(z-I)/1e3);I=z;const j=i.get();j.scrap<E&&(D=1),E=j.scrap,D=Math.max(0,D-O*1.5),b.emissiveIntensity=.1+D*3,T.forEach((it,St)=>it.visible=St<Math.min(14,j.scrap));const at=$c(j.feeds)*1.6;P.forEach((it,St)=>{it.visible=St<Math.min(5,j.hats),it.position.set(1+Math.sin(St*2.1)*.05,at+.05+St*.09,.2),it.rotation.z=Math.sin(z/700+St)*.05});const ct=qr(j);c.visible=h.visible=ct,j.lunges!==B&&(B=j.lunges,V=1),V=Math.max(0,V-O*1.6);const Pt=ct&&j.feeds<9&&j.scrap>=Yn(j.feeds);(j.stats.trips!==L||j.door!==A)&&(L=j.stats.trips,A=j.door,_=z+3400,wt.door()),x+=((z<_?1:0)-x)*Math.min(1,O*3.5),d.position.y=.97+1.8*x,g.visible=x>.02,r.tick(z),G(z),o.rotation.y=z/2e3*(1+D*6);const zt=i.get().feeds,Y=$c(zt)*1.6*(1+.03*Math.min(i.get().sleeps,10)),tt=Math.sin(V*Math.PI);c.scale.setScalar((Y+Math.sin(z/500)*.015+(Pt?.035*Math.sin(z/170):0))*(1+.45*tt)),c.position.set(1,Y/2,.2+.9*tt),c.rotation.y=Math.sin(z/3e3)*.2+(Pt?Math.sin(z/90)*.03:0),h.intensity=2+zt*.8+Math.sin(z/300)*.5+(Pt?2.5+2*Math.sin(z/150):0)+14*tt,h.position.y=Y+.3,a.opacity=Dv(zt);const vt=zt>=1&&ct;{const it=Uv(zt);u.material.opacity=it,f.material.opacity=it}if(u.visible=f.visible=vt,vt){const it=.2+Y/2;u.position.set(1,Y*.55,it-Y*.18),f.position.set(1+Math.sin(z/700)*.04*Y,Y*.55,it-Y*.18+.1*Y+.05),u.scale.setScalar(Y*1.4),f.scale.setScalar(Y*1.4)}},e}function e_(i){const t=new gi,{room:e,b:n,flicker:s}=pl(t,"bed","Bunk",6324479,{w:3.6,h:1.95,d:3.4});e.camPos.set(0,1.45,2.5),e.camLook.set(0,.85,-1.4);const r=n.box(.75,.3,1.8,1.25,.3,-1.5,3817304);r.name="bunk",n.box(.7,.1,.35,1.25,.5,-2.2,13156528),n.cyl(.12,1.95,1.7,.98,-1.5,5917242),n.cyl(.07,1.95,1.7,.98,-.5,3813162),Cn(t,1.62,.6,-1.4,.06,.08,.1),ye(t,`HOT PIPE
(blanket = no)`,1.58,1.3,-1,-Math.PI/2,.28,"#f06050",.05),Cn(t,1.25,.47,-.62,.7,.05,.03),n.box(.85,.72,.5,-1.3,.36,-2.22,2304058);const o=n.box(.6,.38,.05,-1.3,1.05,-2.44,1056792,3211152);o.material.emissiveIntensity=.6,n.box(.4,.03,.16,-1.3,.74,-2.1,3159622),n.cyl(.04,.09,-.98,.77,-2.15,14207136).name="mug",ye(t,`PASSWORD IS
PASSWORD`,-1.62,.95,-2.43,0,.22,"#f4e27a",.05),Cn(t,-1.3,1.27,-2.45,.7,.04,.02),n.cyl(.02,.8,-1.2,1.62,-1.9,9079442,[0,0,Math.PI/2]),Cn(t,-1.5,1.62,-1.9,.06,.08,.05),ye(t,"GYM",-1.25,1.42,-2.43,0,.18,"#d8f0d0"),n.box(.6,1.7,.06,-.45,.88,-2.44,2766406),n.cyl(.03,.22,-.45,1.72,-2.32,9079442,[Math.PI/2,0,0]),Es(t,[[-.45,1.68,-2.25],[-.2,1.3,-2.3],[-.3,.8,-2.35]],3160648,.02);const a=new st(new gn(.58,1.5),new he({color:6993120,transparent:!0,opacity:.5,side:Ce}));a.position.set(-.45,.85,-2.1),t.add(a),ye(t,`FOLD-OUT
SHOWER
hot = 40 sec`,-.45,1.25,-2.08,0,.26,"#f0d0d0",-.08);const l=n.box(.62,1.4,.08,.4,.78,-2.46,790294),c=n.box(.46,1.05,.04,.4,.78,-2.4,1054752,2130080),h=c.material,u=new Be(4235519,0,3);u.name="vault-light",u.position.set(.4,.8,-2),t.add(u),ye(t,`DO NOT
OPEN THE
VAULT`,.4,1.68,-2.42,0,.3,"#f06050"),ye(t,`Day 4,017
of the contract`,-1.75,1.45,-1,Math.PI/2,.3,"#f4e27a"),n.box(.3,.12,.12,.3,.07,-.9,2763312),n.cyl(.1,.22,-.9,.11,-.6,4872810),Es(t,[[-1.7,1.75,-.4],[-.2,1.62,-.8],[1.5,1.8,-1.2]],1381653,.015);const f=n.box(.28,.32,.02,-.4,1.45,-.8,6965818),p=kr(t,-1.8,-.9,Math.PI/2,"Forward hatch to Helm","mining",2154656,1.6),v=kr(t,1.8,-.15,Math.PI/2,"Airlock hatch to Cargo Bay","transmog",15769632,1.6);ye(t,`AIRLOCK
(pull twice)`,1.76,1.75,-.15,-Math.PI/2,.26,"#f4e27a"),e.hotspots.push(p,v,{mesh:r,label:"Sleep (the night changes things)",target:"act:sleep"},{mesh:o,label:"Log terminal",target:"act:logs"});const g=gl(s);return e.update=m=>{g(m);const d=i.get(),y=dl(d),x=-.025*Math.min(d.sleeps,7);l.position.x=.4+x,c.position.x=.4+x,u.position.x=.4+x;const _=[2130080,3186864,14721072,16736448][y];h.emissive.setHex(_);const L=1+(y?.35:.05)*Math.sin(m/(700-y*150));h.emissiveIntensity=[.1,.5,.9,1.6][y]*L,u.color.setHex(_),u.intensity=[0,1.2,2.5,5][y]*L,a.rotation.y=Math.sin(m/1400)*.05,f.rotation.z=Math.sin(m/900)*.06},e}const Rt=Gv(),on=new Rg({antialias:!0,preserveDrawingBuffer:!0});on.setPixelRatio(Math.min(devicePixelRatio,2));on.setSize(innerWidth,innerHeight);document.body.appendChild(on.domElement);const an=new We(62,innerWidth/innerHeight,.1,400),n_=96;function du(){const i=innerWidth/Math.max(1,innerHeight);an.aspect=i,an.fov=Math.min(100,Math.max(40,2*Math.atan(Math.tan(n_*Math.PI/360)/i)*180/Math.PI)),an.userData.baseFov=an.fov,an.updateProjectionMatrix()}du();const Ne=new Vv(Rt,an,on.domElement,"mining");[Jx(),t_(Rt),e_(Rt),hx()].forEach(i=>Ne.add(i));Ne.start();const i_=wv(Rt,Ne),fu=sx(Rt),ih=["POWER: yes.","HULL: ok-ish. A sticker says ok.",'ENGINE TEMP: ??? (sticker: "normal")',"RING SPEED: 11 (units unknown)",'LAST SERVICE: "did something to it"','SI STATUS: left. Note: "back soon" (4,017 days ago)'];let s_=0;Ne.onAction=i=>{i==="collider"&&i_.herd()||(i==="collider"&&we("Keep back. The sticker says DANGER. The sticker is in marker."),i==="monitor"&&we(ih[s_++%ih.length]),i==="logs"&&fu.open(),i==="sleep"&&mu.open(),i==="cross"&&r_())};function r_(){const i=performance.now();if(_v(Cs,i,300).shocked){const t=Rt.get();Rt.set(yv(t,Do)),window.hazard.shocks++,wt.zap(),o_(),we(`ZAP. -${Do.hull} hull, -${Do.power} power. Wait for the quiet.`);return}we("You run across in the quiet. The ring does not notice. This time."),Ne.goTo("transmog")}function o_(){const i=document.createElement("div");i.id="zap-flash",Object.assign(i.style,{position:"fixed",inset:"0",background:"#dff",opacity:"0.85",zIndex:"40",pointerEvents:"none",transition:"opacity .5s"}),document.body.appendChild(i),requestAnimationFrame(()=>requestAnimationFrame(()=>i.style.opacity="0")),setTimeout(()=>i.remove(),600)}window.hazard={ENGINE_RING:Cs,isDanger:ss,safeIn:gv,shocks:0};const a_=rx();for(const i of["pointerdown","keydown"])addEventListener(i,()=>wt.unlock(),{once:!1});addEventListener("click",i=>{var t;((t=i.target)==null?void 0:t.tagName)==="BUTTON"&&wt.click()});const vl=lx(Rt);cx(Rt);ux(Rt);const Rs=new qx(Rt,an,on.domElement);Rt.subscribe(i=>{i.feeds>=9&&!i.cameo&&i.mode==="rooms"&&(Rt.set({cameo:!0}),setTimeout(()=>Ne.transition(()=>{Rs.enter(),setTimeout(()=>{Rt.get().beats.includes("spreading")||(Rt.set({beats:[...Rt.get().beats,"spreading"]}),vl.say("spreading"))},3500)}),700))});const sh=Kx(Rt,()=>pu.show()),pu=new $x(Rt,i=>{sh.say(i),sh.render()}),qe=new tx(Rt,an),l_=new ex(Rt,qe),Ps=new Px(Rt,an),Yr=Dx(Rt);a_.add("fb-btn","Send feedback",()=>Yr.open());Ps.onFeedback=()=>Yr.open();const Or=new URLSearchParams(location.search),ks=Or.has("nocut"),c_=dx(Rt),mu=Ax(Rt),gu=fx(Rt);window.cubeChoice=gu;Cx(Rt);window.sleepUi=mu;const vu=Rx(Rt,vl);window.sorter=c_;window.cubeEvents=vu;ks&&(qe.fixedField="quiet",qe.fatigueEnabled=!1,vu.enabled=!1,gu.enabled=!1,Rt.set({cubeState:"aboard",cubeLunged:!0,cubeChoice:"kept",beats:[...Rt.get().beats,"cubeFound","cubeLunge"]}));qe.manualSort=!ks;Or.get("field")&&(qe.fixedField=Or.get("field"));Ne.onFly=()=>{if(ks||Rt.get().beats.includes("launchCut"))return qe.enter();Rt.set({beats:[...Rt.get().beats,"launchCut"]}),Ps.play("launch",()=>qe.enter())};window.LOGBOOKS=ul;window.intensityOf=di;const h_=gx(Rt);window.ledger=h_;const u_=px(Rt);window.profileTracker=u_;const xu=vx(Rt);window.atmosphere=xu;ks&&(xu.enabled=!1);const xl=Tx(Rt);window.finale=xl;xl.onFeedback=()=>Yr.open();Rs.onContinue=()=>{ks&&!Or.has("finale")||xl.play()};qe.onReturn=()=>Ne.transition(()=>{Ne.jumpTo("transmog"),qe.bankAndLeave()});const d_="Fatigue: rises while you fly and haul. Ticks: 40 tired (mining window shrinks), 70 exhausted (blur, phantom sounds), 90 breaking (glitches, air drains faster). Sleep in the bunk to reset.",_u=document.getElementById("hud"),Ho=(i,t)=>`<div class="m"><span>${i}</span><i style="--c:${t}"><b id="m-${i}"></b></i></div>`;_u.innerHTML=`<div id="room"></div>${Ho("power","#f0a020")}${Ho("oxygen","#40c0ff")}${Ho("hull","#e05050")}<div class="m fat" id="fatigue-row" title="${d_}"><span>fatigue</span><i style="--c:#c080ff"><b id="m-fatigue"></b><em style="left:40%"></em><em style="left:70%"></em><em style="left:90%"></em></i></div><div id="cargo"></div><div id="hint"></div>`;const rs=document.createElement("button");rs.id="exit-fly";rs.textContent="Return to ship (R)";Object.assign(rs.style,{position:"fixed",top:"12px",right:"12px",display:"none",padding:"8px 12px",font:"13px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"8"});rs.onclick=()=>qe.exit();document.body.appendChild(rs);let _r=Rt.get().debt,rh=0;const yu=()=>{rs.style.display=Rt.get().mode==="fly"?"block":"none",_u.style.display=Rt.get().mode==="fly"||Rt.get().mode==="exterior"||Rt.get().mode==="finale"?"none":"block";const i=Rt.get();["power","oxygen","hull"].forEach(t=>document.getElementById("m-"+t).style.width=i[t]+"%");{const t=document.getElementById("fatigue-row");document.getElementById("m-fatigue").style.width=Math.min(100,i.fatigue)+"%",t.dataset.level=String(Qi(i.fatigue))}document.getElementById("room").textContent=i.mode==="cameo"?"SPORES":i.mode==="fly"?"MINING SECTOR":Ne.rooms.get(i.room).name.toUpperCase();{const t=document.getElementById("cargo");if(i.debt!==_r){const e=i.debt>_r;t.innerHTML=`CARGO ${i.cargo}/${i.cargoCap}   SCRAP ${i.scrap}   DEBT ${i.debt} cr <b style="color:${e?"#ff6060":"#60e080"}">(debt ${e?"+":"-"}${Math.abs(i.debt-_r)} cr)</b>`,_r=i.debt,rh=performance.now()+2500}else performance.now()>rh&&(t.textContent=`CARGO ${i.cargo}/${i.cargoCap}   SCRAP ${i.scrap}   DEBT ${i.debt} cr`)}document.getElementById("hint").textContent=i.mode==="cameo"?"Drag one spore onto another":i.mode==="fly"?"W/S thrust, A/D turn, arrows pitch, Z/C roll, E/Q up/down, Space mine, R/Esc return":"Click glowing doors, hatches and ladders. The pilot chair is at the Helm (nose)"};Rt.subscribe(yu);yu();addEventListener("resize",()=>{on.setSize(innerWidth,innerHeight),du()});let Mu=0,bu=0;addEventListener("mousemove",i=>{Mu=i.clientX/innerWidth-.5,bu=i.clientY/innerHeight-.5});let oh=0;on.setAnimationLoop(i=>{const t=Math.min(.1,Math.max(.001,(i-oh)/1e3));if(oh=i,Rt.get().mode==="finale")return;if(Rt.get().mode==="cameo"){Rs.update(t),Rs.render(on);return}if(Rt.get().mode==="exterior"){Ps.update(t),Ps.render(on);return}if(Rt.get().mode==="fly"){qe.update(t),l_.update(),qe.render(on);return}Ne.update(i);const e=Ne.current.camPos;an.position.set(e.x+Mu*.15,e.y-bu*.1,e.z),an.lookAt(Ne.current.camLook),Ne.render(on)});window.rm=Ne;window.fly=qe;window.store=Rt;window.lock=pu;window.cameo=Rs;window.bunk=fu;window.narrator=vl;window.exterior=Ps;window.feedback=Yr;
