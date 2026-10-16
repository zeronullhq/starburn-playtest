var ef=Object.defineProperty;var tf=(i,e,t)=>e in i?ef(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var V=(i,e,t)=>tf(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function da(i){const e=(i==null?void 0:i.sporeKind)??0,t=(i==null?void 0:i.sporeRough)??0;return t>=3&&t>e+2?"rough":e>=3&&e>t+2?"kind":"neutral"}function nf(i,e,t){return i==="rough"?e&&t<.45?"pokeBack":"flinch":i==="kind"?e?"flinch":"nuzzle":e?"flinch":"giggle"}const sf={flinch:["They flinch before your finger even arrives. They have learned your hands.","The spores pull back as one. Somebody taught them that. Probably you."],pokeBack:["A spore pokes you back. Exactly as hard. It watches to see what you do.","Poke. Poke back. The spores are keeping score, and they are good at maths."],giggle:["Giggle. The spores scatter, then sneak back to look at you."],nuzzle:["A spore leans into your finger like a cat that has decided you are furniture.","They do not scatter any more. They just hum at you. It is unsettling and nice."]},gl=[{id:"skipSleep",who:"SHIP",when:i=>i.profile.skips>=1&&i.sleeps===0,text:"SHIP: Bunk occupancy: zero. Last time the bunk sat empty this long, it was still called Cooling Bay 2."},{id:"skipSleep2",who:"NARRATOR",when:i=>i.profile.skips>=2,text:"You skipped sleep again. The ship dims the corridor lights for you anyway. It does that for no one. It used to do it for someone."},{id:"hoard",who:"SHIP",when:i=>i.scrap>=30&&i.feeds<=1,text:"SHIP: Scrap reserve high. Spending: none. Previous operator also kept everything. Previous operator is not available for comment."},{id:"crates",who:"NARRATOR",when:i=>i.crates>=2,text:"Two sealed crates, unopened. You are saving them for something. So was the last person who sat in that chair."},{id:"noLogs",who:"NARRATOR",when:i=>i.stats.trips>=3&&i.profile.logsRead===0,text:"Three sorties and not one logbook read. The ship has stopped leaving them where you will trip over them. It is a little hurt."},{id:"rough",who:"SHIP",when:i=>da(i.flags)==="rough",text:"SHIP: Spore behaviour updated. They are copying someone. Reviewing crew list. Crew list: you."},{id:"kind",who:"NARRATOR",when:i=>da(i.flags)==="kind",text:'The spores hum when you walk past now. The ship logs it under "anomalies", then quietly un-logs it.'},{id:"facePoked",who:"SHIP",when:i=>(i.flags.facePokes??0)>=5,text:"SHIP: Companion module reports being shooed a normal amount. Its definition of normal is under review. So is yours."},{id:"faceHelped",who:"FACE",when:i=>(i.flags.faceHints??0)>=3,text:"FACE: You keep asking me for help! That is what best friends do! The last pilot never asked. The last pilot was not a pilot. Forget I said that."},{id:"shatter",who:"SHIP",when:i=>i.stats.shatters>=3,text:"SHIP: Third shattered haul. The loader arm would have caught that. The loader arm was removed. You know the drill."},{id:"debt",who:"NARRATOR",when:i=>i.stats.trips>=2&&i.debt>=1e3,text:"Halcyon Reclamation notices the debt has not moved. Halcyon Reclamation is patient. Halcyon Reclamation has outlived better pilots."}];function rf(i,e){for(const t of gl)if(!e.has(t.id)&&t.when(i))return{id:t.id,who:t.who,text:t.text};return null}gl.map(i=>i.id);gl.map(i=>i.text);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="170",of=0,hc=1,af=2,du=1,lf=2,Ln=3,ii=0,bt=1,Tt=2,Un=0,Zi=1,Ht=2,uc=3,dc=4,cf=5,pi=100,hf=101,uf=102,df=103,ff=104,pf=200,mf=201,gf=202,vf=203,fa=204,pa=205,yf=206,xf=207,_f=208,bf=209,Mf=210,wf=211,Sf=212,Tf=213,Ef=214,ma=0,ga=1,va=2,ts=3,ya=4,xa=5,_a=6,ba=7,fu=0,Af=1,Cf=2,ei=0,pu=1,mu=2,gu=3,vu=4,Rf=5,yu=6,xu=7,_u=300,ns=301,is=302,Ma=303,wa=304,so=306,Sa=1e3,vi=1001,Ta=1002,Jt=1003,Pf=1004,Js=1005,cn=1006,go=1007,yi=1008,Bn=1009,bu=1010,Mu=1011,zs=1012,yl=1013,bi=1014,yn=1015,Nn=1016,xl=1017,_l=1018,ss=1020,wu=35902,Su=1021,Tu=1022,hn=1023,Eu=1024,Au=1025,Ji=1026,rs=1027,bl=1028,Ml=1029,Cu=1030,wl=1031,Sl=1033,Ur=33776,Nr=33777,Or=33778,Fr=33779,Ea=35840,Aa=35841,Ca=35842,Ra=35843,Pa=36196,Ia=37492,La=37496,Da=37808,ka=37809,Ua=37810,Na=37811,Oa=37812,Fa=37813,Ba=37814,za=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,Ya=37821,Br=36492,$a=36494,qa=36495,Ru=36283,ja=36284,Ka=36285,Za=36286,If=3200,Lf=3201,Pu=0,Df=1,Zn="",Yt="srgb",hs="srgb-linear",ro="linear",ot="srgb",Ti=7680,fc=519,kf=512,Uf=513,Nf=514,Iu=515,Of=516,Ff=517,Bf=518,zf=519,Ja=35044,pc="300 es",kn=2e3,$r=2001;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vo=Math.PI/180,Qa=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Hf(i,e){return(i%e+e)%e}function yo(i,e,t){return(1-t)*i+t*e}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],y=s[1],x=s[4],b=s[7],I=s[2],A=s[5],C=s[8];return r[0]=o*v+a*y+l*I,r[3]=o*m+a*x+l*A,r[6]=o*d+a*b+l*C,r[1]=c*v+h*y+u*I,r[4]=c*m+h*x+u*A,r[7]=c*d+h*b+u*C,r[2]=f*v+p*y+g*I,r[5]=f*m+p*x+g*A,r[8]=f*d+p*b+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new He;function Lu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){const i=qr("canvas");return i.style.display="block",i}const mc={};function Ds(i){i in mc||(mc[i]=!0,console.warn(i))}function Vf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const je={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(i.r=On(i.r),i.g=On(i.g),i.b=On(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gc=[.64,.33,.3,.6,.15,.06],vc=[.2126,.7152,.0722],yc=[.3127,.329],xc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[hs]:{primaries:gc,whitePoint:yc,transfer:ro,toXYZ:xc,fromXYZ:_c,luminanceCoefficients:vc,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:gc,whitePoint:yc,transfer:ot,toXYZ:xc,fromXYZ:_c,luminanceCoefficients:vc,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let Ei;class Yf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=qr("canvas")),Ei.width=e.width,Ei.height=e.height;const n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $f=0;class Du{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(_o(s[o].image)):r.push(_o(s[o]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qf=0;class Nt extends us{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=vi,s=vi,r=cn,o=yi,a=hn,l=Bn,c=Nt.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ti(),this.name="",this.source=new Du(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=_u;Nt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(p+1)/2,I=(d+1)/2,A=(h+f)/4,C=(u+v)/4,R=(g+m)/4;return x>b&&x>I?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=A/n,r=C/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=C/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jf extends us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Nt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Du(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends jf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ku extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kf extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class un{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*v,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,d*y);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const b=a*y;if(l=l*m+f*b,c=c*m+p*b,h=h*m+g*b,u=u*m+v*b,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new E,bc=new un;class Mi{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(e.matrixWorld),this.union(Qs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),er.subVectors(this.max,_s),Ai.subVectors(e.a,_s),Ci.subVectors(e.b,_s),Ri.subVectors(e.c,_s),Vn.subVectors(Ci,Ai),Wn.subVectors(Ri,Ci),ai.subVectors(Ai,Ri);let t=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ai.y,ai.x,0];return!Mo(t,Ai,Ci,Ri,er)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,Ai,Ci,Ri,er))?!1:(tr.crossVectors(Vn,Wn),t=[tr.x,tr.y,tr.z],Mo(t,Ai,Ci,Ri,er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new E,new E,new E,new E,new E,new E,new E,new E],on=new E,Qs=new Mi,Ai=new E,Ci=new E,Ri=new E,Vn=new E,Wn=new E,ai=new E,_s=new E,er=new E,tr=new E,li=new E;function Mo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){li.fromArray(i,r);const a=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),l=e.dot(li),c=t.dot(li),h=n.dot(li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Zf=new Mi,bs=new E,wo=new E;class si{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(wo)),this.expandByPoint(bs.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new E,So=new E,nr=new E,Xn=new E,To=new E,ir=new E,Eo=new E;class oo{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){So.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(So);const r=e.distanceTo(t)*.5,o=-this.direction.dot(nr),a=Xn.dot(this.direction),l=-Xn.dot(nr),c=Xn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(So).addScaledVector(nr,f),p}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,s,r){To.subVectors(t,e),ir.subVectors(n,e),Eo.crossVectors(To,ir);let o=this.direction.dot(Eo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(ir.crossVectors(Xn,ir));if(l<0)return null;const c=a*this.direction.dot(To.cross(Xn));if(c<0||l+c>o)return null;const h=-a*Xn.dot(Eo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,o,a,l,c,h,u,f,p,g,v,m){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,v,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jf,e,Qf)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Yn.crossVectors(n,jt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Yn.crossVectors(n,jt)),Yn.normalize(),sr.crossVectors(jt,Yn),s[0]=Yn.x,s[4]=sr.x,s[8]=jt.x,s[1]=Yn.y,s[5]=sr.y,s[9]=jt.y,s[2]=Yn.z,s[6]=sr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],x=n[7],b=n[11],I=n[15],A=s[0],C=s[4],R=s[8],M=s[12],_=s[1],T=s[5],D=s[9],k=s[13],G=s[2],q=s[6],N=s[10],O=s[14],U=s[3],J=s[7],ee=s[11],ce=s[15];return r[0]=o*A+a*_+l*G+c*U,r[4]=o*C+a*T+l*q+c*J,r[8]=o*R+a*D+l*N+c*ee,r[12]=o*M+a*k+l*O+c*ce,r[1]=h*A+u*_+f*G+p*U,r[5]=h*C+u*T+f*q+p*J,r[9]=h*R+u*D+f*N+p*ee,r[13]=h*M+u*k+f*O+p*ce,r[2]=g*A+v*_+m*G+d*U,r[6]=g*C+v*T+m*q+d*J,r[10]=g*R+v*D+m*N+d*ee,r[14]=g*M+v*k+m*O+d*ce,r[3]=y*A+x*_+b*G+I*U,r[7]=y*C+x*T+b*q+I*J,r[11]=y*R+x*D+b*N+I*ee,r[15]=y*M+x*k+b*O+I*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],y=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,x=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,b=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,I=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,A=t*y+n*x+s*b+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=y*C,e[1]=(v*f*r-u*m*r-v*s*p+n*m*p+u*s*d-n*f*d)*C,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*d+n*l*d)*C,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*C,e[4]=x*C,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*C,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*C,e[8]=b*C,e[9]=(g*u*r-h*v*r-g*n*p+t*v*p+h*n*d-t*u*d)*C,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*d+t*a*d)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*C,e[12]=I*C,e[13]=(h*v*s-g*u*s+g*n*f-t*v*f-h*n*m+t*u*m)*C,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,v=o*h,m=o*u,d=a*u,y=l*c,x=l*h,b=l*u,I=n.x,A=n.y,C=n.z;return s[0]=(1-(v+d))*I,s[1]=(p+b)*I,s[2]=(g-x)*I,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(f+d))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+x)*C,s[9]=(m-y)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),a=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);const c=1/r,h=1/o,u=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=kn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let p,g;if(a===kn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$r)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*c,p=(n+s)*h;let g,v;if(a===kn)g=(o+r)*u,v=-2*u;else if(a===$r)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new E,an=new tt,Jf=new E(0,0,0),Qf=new E(1,1,1),Yn=new E,sr=new E,jt=new E,Mc=new tt,wc=new un;class $t{constructor(e=0,t=0,n=0,s=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ep=0;const Sc=new E,Ii=new un,Cn=new tt,rr=new E,Ms=new E,tp=new E,np=new un,Tc=new E(1,0,0),Ec=new E(0,1,0),Ac=new E(0,0,1),Cc={type:"added"},ip={type:"removed"},Li={type:"childadded",child:null},Ao={type:"childremoved",child:null};class Mt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new E,t=new $t,n=new un,s=new E(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new He}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ms,rr,this.up):Cn.lookAt(rr,Ms,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cc),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cc),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new E(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new E,Rn=new E,Co=new E,Pn=new E,Di=new E,ki=new E,Rc=new E,Ro=new E,Po=new E,Io=new E,Lo=new lt,Do=new lt,ko=new lt;class tn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),Rn.subVectors(n,t),Co.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Rn),l=ln.dot(Co),c=Rn.dot(Rn),h=Rn.dot(Co),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Lo.setScalar(0),Do.setScalar(0),ko.setScalar(0),Lo.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),ko.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Lo,r.x),o.addScaledVector(Do,r.y),o.addScaledVector(ko,r.z),o}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),Rn.subVectors(e,t),ln.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Di.subVectors(s,n),ki.subVectors(r,n),Ro.subVectors(e,n);const l=Di.dot(Ro),c=ki.dot(Ro);if(l<=0&&c<=0)return t.copy(n);Po.subVectors(e,s);const h=Di.dot(Po),u=ki.dot(Po);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Di,o);Io.subVectors(e,r);const p=Di.dot(Io),g=ki.dot(Io);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ki,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Rc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Rc,a);const d=1/(m+v+f);return o=v*d,a=f*d,t.copy(n).addScaledVector(Di,o).addScaledVector(ki,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},or={h:0,s:0,l:0};function Uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Hf(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Uo(o,r,e+1/3),this.g=Uo(o,r,e),this.b=Uo(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return je.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Rt(Dt.r*255,0,255))*65536+Math.round(Rt(Dt.g*255,0,255))*256+Math.round(Rt(Dt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,s=Dt.g,r=Dt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Yt){je.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,s=Dt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(or);const n=yo($n.h,or.h,t),s=yo($n.s,or.s,t),r=yo($n.l,or.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Te;Te.NAMES=Uu;let sp=0;class ri extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ti(),this.name="",this.blending=Zi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=pa,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fa&&(n.blendSrc=this.blendSrc),this.blendDst!==pa&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ne extends ri{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new E,ar=new le;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ja&&(e.usage=this.usage),e}}class Nu extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ou extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rp=0;const en=new tt,No=new Mt,Ui=new E,Kt=new Mi,ws=new Mi,Ct=new E;class ht extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lu(e)?Ou:Nu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return No.lookAt(e),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(Kt.min,ws.min),Kt.expandByPoint(Ct),Ct.addVectors(Kt.max,ws.max),Kt.expandByPoint(Ct)):(Kt.expandByPoint(ws.min),Kt.expandByPoint(ws.max))}Kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ct.fromBufferAttribute(a,c),l&&(Ui.fromBufferAttribute(e,c),Ct.add(Ui)),s=Math.max(s,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new E,l[R]=new E;const c=new E,h=new E,u=new E,f=new le,p=new le,g=new le,v=new E,m=new E;function d(R,M,_){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(T),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),a[R].add(v),a[M].add(v),a[_].add(v),l[R].add(m),l[M].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,M=y.length;R<M;++R){const _=y[R],T=_.start,D=_.count;for(let k=T,G=T+D;k<G;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new E,b=new E,I=new E,A=new E;function C(R){I.fromBufferAttribute(s,R),A.copy(I);const M=a[R];x.copy(M),x.sub(I.multiplyScalar(I.dot(M))).normalize(),b.crossVectors(A,M);const T=b.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,M=y.length;R<M;++R){const _=y[R],T=_.start,D=_.count;for(let k=T,G=T+D;k<G;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Pt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new tt,ci=new oo,lr=new si,Ic=new E,cr=new E,hr=new E,ur=new E,Oo=new E,dr=new E,Lc=new E,fr=new E;class ne extends Mt{constructor(e=new ht,t=new Ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,e),o?dr.addScaledVector(Oo,h):dr.addScaledVector(Oo.sub(t),h))}t.add(dr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(lr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(lr,Ic)===null||ci.origin.distanceToSquared(Ic)>(e.far-e.near)**2))&&(Pc.copy(r).invert(),ci.copy(e.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,I=x;b<I;b+=3){const A=a.getX(b),C=a.getX(b+1),R=a.getX(b+2);s=pr(this,d,e,n,c,h,u,A,C,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const y=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);s=pr(this,o,e,n,c,h,u,y,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,I=x;b<I;b+=3){const A=b,C=b+1,R=b+2;s=pr(this,d,e,n,c,h,u,A,C,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const y=m,x=m+1,b=m+2;s=pr(this,o,e,n,c,h,u,y,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function op(i,e,t,n,s,r,o,a){let l;if(e.side===bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fr);return c<t.near||c>t.far?null:{distance:c,point:fr.clone(),object:i}}function pr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,cr),i.getVertexPosition(l,hr),i.getVertexPosition(c,ur);const h=op(i,e,t,n,cr,hr,ur,Lc);if(h){const u=new E;tn.getBarycoord(Lc,cr,hr,ur,u),s&&(h.uv=tn.getInterpolatedAttribute(s,a,l,c,u,new le)),r&&(h.uv1=tn.getInterpolatedAttribute(r,a,l,c,u,new le)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new E,materialIndex:0};tn.getNormal(cr,hr,ur,f.normal),h.face=f,h.barycoord=u}return h}class Ye extends ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(v,m,d,y,x,b,I,A,C,R,M){const _=b/C,T=I/R,D=b/2,k=I/2,G=A/2,q=C+1,N=R+1;let O=0,U=0;const J=new E;for(let ee=0;ee<N;ee++){const ce=ee*T-k;for(let $=0;$<q;$++){const j=$*_-D;J[v]=j*y,J[m]=ce*x,J[d]=G,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[d]=A>0?1:-1,h.push(J.x,J.y,J.z),u.push($/C),u.push(1-ee/R),O+=1}}for(let ee=0;ee<R;ee++)for(let ce=0;ce<C;ce++){const $=f+ce+q*ee,j=f+ce+q*(ee+1),L=f+(ce+1)+q*(ee+1),W=f+(ce+1)+q*ee;l.push($,j,W),l.push(j,L,W),U+=6}a.addGroup(p,U,M),p+=U,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=os(i[t]);for(const s in n)e[s]=n[s]}return e}function ap(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Hs={clone:os,merge:zt};var lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kt extends ri{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lp,this.fragmentShader=cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=ap(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bu extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new E,Dc=new le,kc=new le;class Gt extends Bu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Dc,kc),t.subVectors(kc,Dc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ni=-90,Oi=1;class hp extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(Ni,Oi,e,t);s.layers=this.layers,this.add(s);const r=new Gt(Ni,Oi,e,t);r.layers=this.layers,this.add(r);const o=new Gt(Ni,Oi,e,t);o.layers=this.layers,this.add(o);const a=new Gt(Ni,Oi,e,t);a.layers=this.layers,this.add(a);const l=new Gt(Ni,Oi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(Ni,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zu extends Nt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ns,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class up extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:Un});r.uniforms.tEquirect.value=t;const o=new ne(s,r),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=cn),new hp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Fo=new E,dp=new E,fp=new He;class Kn{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fo.subVectors(n,t).cross(dp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fp.getNormalMatrix(e),s=this.coplanarPoint(Fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new si,mr=new E;class El{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],y=s[13],x=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,m-p,b-d).normalize(),n[1].setComponents(l+r,f+c,m+p,b+d).normalize(),n[2].setComponents(l+o,f+h,m+g,b+y).normalize(),n[3].setComponents(l-o,f-h,m-g,b-y).normalize(),n[4].setComponents(l-a,f-u,m-v,b-x).normalize(),t===kn)n[5].setComponents(l+a,f+u,m+v,b+x).normalize();else if(t===$r)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pp(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class nn extends ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const y=d*f-o;for(let x=0;x<c;x++){const b=x*u-r;g.push(b,-y,0),v.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const x=y+c*d,b=y+c*(d+1),I=y+1+c*(d+1),A=y+1+c*d;p.push(x,b,A),p.push(b,I,A)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.widthSegments,e.heightSegments)}}var mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gp=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_p=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Rp=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zp=`vec3 transformedNormal = objectNormal;
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
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nm=`#ifdef USE_GRADIENTMAP
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
}`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,om=`uniform bool receiveShadow;
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
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dm=`PhysicalMaterial material;
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
#endif`,fm=`struct PhysicalMaterial {
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
}`,pm=`
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
#endif`,mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ym=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sm=`#if defined( USE_POINTS_UV )
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
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
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
#endif`,Fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qm=`float getShadowMask() {
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
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
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
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
#endif`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
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
}`,b0=`#if DEPTH_PACKING == 3200
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
}`,M0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`uniform float scale;
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
}`,A0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,R0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,I0=`#define LAMBERT
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
}`,L0=`#define MATCAP
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
}`,D0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,U0=`#define NORMAL
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
}`,N0=`#define PHONG
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
}`,O0=`#define PHONG
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
}`,F0=`#define STANDARD
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
}`,B0=`#define STANDARD
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
}`,z0=`#define TOON
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
}`,H0=`#define TOON
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
}`,G0=`uniform float size;
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#include <common>
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
}`,X0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:mp,alphahash_pars_fragment:gp,alphamap_fragment:vp,alphamap_pars_fragment:yp,alphatest_fragment:xp,alphatest_pars_fragment:_p,aomap_fragment:bp,aomap_pars_fragment:Mp,batching_pars_vertex:wp,batching_vertex:Sp,begin_vertex:Tp,beginnormal_vertex:Ep,bsdfs:Ap,iridescence_fragment:Cp,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Dp,color_fragment:kp,color_pars_fragment:Up,color_pars_vertex:Np,color_vertex:Op,common:Fp,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:Hp,displacementmap_vertex:Gp,emissivemap_fragment:Vp,emissivemap_pars_fragment:Wp,colorspace_fragment:Xp,colorspace_pars_fragment:Yp,envmap_fragment:$p,envmap_common_pars_fragment:qp,envmap_pars_fragment:jp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:am,envmap_vertex:Zp,fog_vertex:Jp,fog_pars_vertex:Qp,fog_fragment:em,fog_pars_fragment:tm,gradientmap_pars_fragment:nm,lightmap_pars_fragment:im,lights_lambert_fragment:sm,lights_lambert_pars_fragment:rm,lights_pars_begin:om,lights_toon_fragment:lm,lights_toon_pars_fragment:cm,lights_phong_fragment:hm,lights_phong_pars_fragment:um,lights_physical_fragment:dm,lights_physical_pars_fragment:fm,lights_fragment_begin:pm,lights_fragment_maps:mm,lights_fragment_end:gm,logdepthbuf_fragment:vm,logdepthbuf_pars_fragment:ym,logdepthbuf_pars_vertex:xm,logdepthbuf_vertex:_m,map_fragment:bm,map_pars_fragment:Mm,map_particle_fragment:wm,map_particle_pars_fragment:Sm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:Em,morphinstance_vertex:Am,morphcolor_vertex:Cm,morphnormal_vertex:Rm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Im,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:km,normal_pars_vertex:Um,normal_vertex:Nm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Fm,clearcoat_normal_fragment_maps:Bm,clearcoat_pars_fragment:zm,iridescence_pars_fragment:Hm,opaque_fragment:Gm,packing:Vm,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:Ym,dithering_pars_fragment:$m,roughnessmap_fragment:qm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:Zm,shadowmap_vertex:Jm,shadowmask_pars_fragment:Qm,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:o0,tonemapping_pars_fragment:a0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:v0,cube_vert:y0,cube_frag:x0,depth_vert:_0,depth_frag:b0,distanceRGBA_vert:M0,distanceRGBA_frag:w0,equirect_vert:S0,equirect_frag:T0,linedashed_vert:E0,linedashed_frag:A0,meshbasic_vert:C0,meshbasic_frag:R0,meshlambert_vert:P0,meshlambert_frag:I0,meshmatcap_vert:L0,meshmatcap_frag:D0,meshnormal_vert:k0,meshnormal_frag:U0,meshphong_vert:N0,meshphong_frag:O0,meshphysical_vert:F0,meshphysical_frag:B0,meshtoon_vert:z0,meshtoon_frag:H0,points_vert:G0,points_frag:V0,shadow_vert:W0,shadow_frag:X0,sprite_vert:Y0,sprite_frag:$0},fe={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},gn={basic:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:zt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:zt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:zt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:zt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:zt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:zt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:zt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:zt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:zt([fe.common,fe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:zt([fe.lights,fe.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};gn.physical={uniforms:zt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const gr={r:0,b:0,g:0},ui=new $t,q0=new tt;function j0(i,e,t,n,s,r,o){const a=new Te(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const b=g(y);b===null?d(a,l):b&&b.isColor&&(d(b,1),x=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===so)?(h===void 0&&(h=new ne(new Ye(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:os(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(x.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(q0.makeRotationFromEuler(ui)),h.material.toneMapped=je.getTransfer(b.colorSpace)!==ot,(u!==b||f!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ne(new nn(2,2),new kt({name:"BackgroundMaterial",uniforms:os(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(gr,Fu(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:v,addToRenderList:m}}function K0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,T,D,k,G){let q=!1;const N=u(k,D,T);r!==N&&(r=N,c(r.object)),q=p(_,k,D,G),q&&g(_,k,D,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(_,T,D,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,T,D){const k=D.wireframe===!0;let G=n[_.id];G===void 0&&(G={},n[_.id]=G);let q=G[T.id];q===void 0&&(q={},G[T.id]=q);let N=q[k];return N===void 0&&(N=f(l()),q[k]=N),N}function f(_){const T=[],D=[],k=[];for(let G=0;G<t;G++)T[G]=0,D[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,T,D,k){const G=r.attributes,q=T.attributes;let N=0;const O=D.getAttributes();for(const U in O)if(O[U].location>=0){const ee=G[U];let ce=q[U];if(ce===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;N++}return r.attributesNum!==N||r.index!==k}function g(_,T,D,k){const G={},q=T.attributes;let N=0;const O=D.getAttributes();for(const U in O)if(O[U].location>=0){let ee=q[U];ee===void 0&&(U==="instanceMatrix"&&_.instanceMatrix&&(ee=_.instanceMatrix),U==="instanceColor"&&_.instanceColor&&(ee=_.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),G[U]=ce,N++}r.attributes=G,r.attributesNum=N,r.index=k}function v(){const _=r.newAttributes;for(let T=0,D=_.length;T<D;T++)_[T]=0}function m(_){d(_,0)}function d(_,T){const D=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;D[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),G[_]!==T&&(i.vertexAttribDivisor(_,T),G[_]=T)}function y(){const _=r.newAttributes,T=r.enabledAttributes;for(let D=0,k=T.length;D<k;D++)T[D]!==_[D]&&(i.disableVertexAttribArray(D),T[D]=0)}function x(_,T,D,k,G,q,N){N===!0?i.vertexAttribIPointer(_,T,D,G,q):i.vertexAttribPointer(_,T,D,k,G,q)}function b(_,T,D,k){v();const G=k.attributes,q=D.getAttributes(),N=T.defaultAttributeValues;for(const O in q){const U=q[O];if(U.location>=0){let J=G[O];if(J===void 0&&(O==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),O==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),J!==void 0){const ee=J.normalized,ce=J.itemSize,$=e.get(J);if($===void 0)continue;const j=$.buffer,L=$.type,W=$.bytesPerElement,re=L===i.INT||L===i.UNSIGNED_INT||J.gpuType===yl;if(J.isInterleavedBufferAttribute){const X=J.data,oe=X.stride,ge=J.offset;if(X.isInstancedInterleavedBuffer){for(let we=0;we<U.locationSize;we++)d(U.location+we,X.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let we=0;we<U.locationSize;we++)m(U.location+we);i.bindBuffer(i.ARRAY_BUFFER,j);for(let we=0;we<U.locationSize;we++)x(U.location+we,ce/U.locationSize,L,ee,oe*W,(ge+ce/U.locationSize*we)*W,re)}else{if(J.isInstancedBufferAttribute){for(let X=0;X<U.locationSize;X++)d(U.location+X,J.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let X=0;X<U.locationSize;X++)m(U.location+X);i.bindBuffer(i.ARRAY_BUFFER,j);for(let X=0;X<U.locationSize;X++)x(U.location+X,ce/U.locationSize,L,ee,ce*W,ce/U.locationSize*X*W,re)}}else if(N!==void 0){const ee=N[O];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(U.location,ee);break;case 3:i.vertexAttrib3fv(U.location,ee);break;case 4:i.vertexAttrib4fv(U.location,ee);break;default:i.vertexAttrib1fv(U.location,ee)}}}}y()}function I(){R();for(const _ in n){const T=n[_];for(const D in T){const k=T[D];for(const G in k)h(k[G].object),delete k[G];delete T[D]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const D in T){const k=T[D];for(const G in k)h(k[G].object),delete k[G];delete T[D]}delete n[_.id]}function C(_){for(const T in n){const D=n[T];if(D[_.id]===void 0)continue;const k=D[_.id];for(const G in k)h(k[G].object),delete k[G];delete D[_.id]}}function R(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Z0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function J0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==yn&&!R)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:I,maxSamples:A}}function Q0(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Kn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let b=d.clippingState||null;l.value=b,b=h(g,f,x,p);for(let I=0;I!==x;++I)b[I]=t[I];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,b=p;x!==v;++x,b+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function eg(i){let e=new WeakMap;function t(o,a){return a===Ma?o.mapping=ns:a===wa&&(o.mapping=is),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ma||a===wa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new up(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Al extends Bu{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,Uc=[.125,.215,.35,.446,.526,.582],mi=20,Bo=new Al,Nc=new Te;let zo=null,Ho=0,Go=0,Vo=!1;const fi=(1+Math.sqrt(5))/2,Fi=1/fi,Oc=[new E(-fi,Fi,0),new E(fi,Fi,0),new E(-Fi,0,fi),new E(Fi,0,fi),new E(0,fi,-Fi),new E(0,fi,Fi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Ho,Go),this._renderer.xr.enabled=Vo,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Vo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Nn,format:hn,colorSpace:hs,depthBuffer:!1},s=Bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(r)),this._blurMaterial=ng(r,e,t)}return s}_compileMaterial(e){const t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,s){const a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Nc),h.toneMapping=ei,h.autoClear=!1;const p=new Ne({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new ne(new Ye,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Nc),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;vr(s,y*x,d>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ns||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Bo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oc[(s-r-1)%Oc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ne(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*mi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const d=[];let y=0;for(let C=0;C<mi;++C){const R=C/v,M=Math.exp(-R*R/2);d.push(M),C===0?y+=M:C<m&&(y+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[s],I=3*b*(s>x-$i?s-x+$i:0),A=4*(this._cubeSize-b);vr(t,I,A,3*b,2*b),l.setRenderTarget(t),l.render(u,Bo)}}function tg(i){const e=[],t=[],n=[];let s=i;const r=i-$i+1+Uc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-$i?l=Uc[o-i+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,y=new Float32Array(v*g*p),x=new Float32Array(m*g*p),b=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,R=A>2?0:-1,M=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];y.set(M,v*g*A),x.set(f,m*g*A);const _=[A,A,A,A,A,A];b.set(_,d*g*A)}const I=new ht;I.setAttribute("position",new Pt(y,v)),I.setAttribute("uv",new Pt(x,m)),I.setAttribute("faceIndex",new Pt(b,d)),e.push(I),s>$i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bc(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ng(i,e,t){const n=new Float32Array(mi),s=new E(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function zc(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Hc(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function ig(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ma||l===wa,h=l===ns||l===is;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Fc(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Fc(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let x=0,b=y.length;x<b;x+=3){const I=y[x+0],A=y[x+1],C=y[x+2];f.push(I,A,A,C,C,I)}}else if(g!==void 0){const y=g.array;v=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const I=x+0,A=x+1,C=x+2;f.push(I,A,A,C,C,I)}}else return;const m=new(Lu(f)?Ou:Nu)(f,1);m.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function og(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*v[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ag(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,e,t){const n=new WeakMap,s=new lt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let _=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let I=a.attributes.position.count*b,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*A*4*u),R=new ku(C,I,A,u);R.type=yn,R.needsUpdate=!0;const M=b*4;for(let T=0;T<u;T++){const D=d[T],k=y[T],G=x[T],q=I*A*4*T;for(let N=0;N<D.count;N++){const O=N*M;g===!0&&(s.fromBufferAttribute(D,N),C[q+O+0]=s.x,C[q+O+1]=s.y,C[q+O+2]=s.z,C[q+O+3]=0),v===!0&&(s.fromBufferAttribute(k,N),C[q+O+4]=s.x,C[q+O+5]=s.y,C[q+O+6]=s.z,C[q+O+7]=0),m===!0&&(s.fromBufferAttribute(G,N),C[q+O+8]=s.x,C[q+O+9]=s.y,C[q+O+10]=s.z,C[q+O+11]=G.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new le(I,A)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cg(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Gu extends Nt{constructor(e,t,n,s,r,o,a,l,c,h=Ji){if(h!==Ji&&h!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=bi),n===void 0&&h===rs&&(n=ss),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Vu=new Nt,Gc=new Gu(1,1),Wu=new ku,Xu=new Kf,Yu=new zu,Vc=[],Wc=[],Xc=new Float32Array(16),Yc=new Float32Array(9),$c=new Float32Array(4);function ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=Wc[e];t===void 0&&(t=new Int32Array(e),Wc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),At(t,n)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Yc.set(n),i.uniformMatrix3fv(this.addr,!1,Yc),At(t,n)}}function gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Xc.set(n),i.uniformMatrix4fv(this.addr,!1,Xc),At(t,n)}}function vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=Iu,r=Gc):r=Vu,t.setTexture2D(e||r,s)}function Eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Xu,s)}function Ag(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yu,s)}function Cg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Wu,s)}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return xg;case 35669:case 35673:return _g;case 5125:return bg;case 36294:return Mg;case 36295:return wg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(i,e){i.uniform1fv(this.addr,e)}function Ig(i,e){const t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function Lg(i,e){const t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function Dg(i,e){const t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function kg(i,e){const t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ug(i,e){const t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ng(i,e){const t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Og(i,e){i.uniform1iv(this.addr,e)}function Fg(i,e){i.uniform2iv(this.addr,e)}function Bg(i,e){i.uniform3iv(this.addr,e)}function zg(i,e){i.uniform4iv(this.addr,e)}function Hg(i,e){i.uniform1uiv(this.addr,e)}function Gg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Wg(i,e){i.uniform4uiv(this.addr,e)}function Xg(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vu,r[o])}function Yg(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Xu,r[o])}function $g(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Yu,r[o])}function qg(i,e,t){const n=this.cache,s=e.length,r=ao(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Wu,r[o])}function jg(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return kg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return Og;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return qg}}class Kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rg(t.type)}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jg(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Wo=/(\w+)(\])?(\[|\.)?/g;function qc(i,e){i.seq.push(e),i.map[e.id]=e}function Qg(i,e,t){const n=i.name,s=n.length;for(Wo.lastIndex=0;;){const r=Wo.exec(n),o=Wo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qc(t,c===void 0?new Kg(a,i,e):new Zg(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Jg(a),qc(t,u)),t=u}}}class zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Qg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function jc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ev=37297;let tv=0;function nv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Kc=new He;function iv(i){je._getMatrix(Kc,je.workingColorSpace,i);const e=`mat3( ${Kc.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case ro:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+nv(i.getShaderSource(e),o)}else return s}function sv(i,e){const t=iv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rv(i,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case gu:t="Cineon";break;case vu:t="ACESFilmic";break;case yu:t="AgX";break;case xu:t="Neutral";break;case Rf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new E;function ov(){je.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function lv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ks(i){return i!==""}function Jc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(hv,dv)}const uv=new Map;function dv(i,e){let t=Ve[e];if(t===void 0){const n=uv.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(fv,pv)}function pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===du?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function yv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Af:e="ENVMAP_BLENDING_MIX";break;case Cf:e="ENVMAP_BLENDING_ADD";break}return e}function xv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _v(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mv(t),c=gv(t),h=vv(t),u=yv(t),f=xv(t),p=av(t),g=lv(r),v=s.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),d.length>0&&(d+=`
`)):(m=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),d=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ei?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),ov(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=el(o),o=Jc(o,t),o=Qc(o,t),a=el(a),a=Jc(a,t),a=Qc(a,t),o=eh(o),a=eh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+o,b=y+d+a,I=jc(s,s.VERTEX_SHADER,x),A=jc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,I),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(T){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(A).trim();let q=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,A);else{const O=Zc(s,I,"vertex"),U=Zc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+O+`
`+U)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(k===""||G==="")&&(N=!1);N&&(T.diagnostics={runnable:q,programLog:D,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(I),s.deleteShader(A),R=new zr(s,v),M=cv(s,v)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,ev)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=A,this}let bv=0;class Mv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wv(e),t.set(e,n)),n}}class wv{constructor(e){this.id=bv++,this.code=e,this.usedTimes=0}}function Sv(i,e,t,n,s,r,o){const a=new Tl,l=new Mv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,T,D,k){const G=D.fog,q=k.geometry,N=M.isMeshStandardMaterial?D.environment:null,O=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),U=O&&O.mapping===so?O.image.height:null,J=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ee=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=ee!==void 0?ee.length:0;let $=0;q.morphAttributes.position!==void 0&&($=1),q.morphAttributes.normal!==void 0&&($=2),q.morphAttributes.color!==void 0&&($=3);let j,L,W,re;if(J){const rt=gn[J];j=rt.vertexShader,L=rt.fragmentShader}else j=M.vertexShader,L=M.fragmentShader,l.update(M),W=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);const X=i.getRenderTarget(),oe=i.state.buffers.depth.getReversed(),ge=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ie=!!M.map,Le=!!M.matcap,Je=!!O,F=!!M.aoMap,wt=!!M.lightMap,We=!!M.bumpMap,Xe=!!M.normalMap,ke=!!M.displacementMap,pt=!!M.emissiveMap,De=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,Y=M.clearcoat>0,ie=M.dispersion>0,ae=M.iridescence>0,te=M.sheen>0,Re=M.transmission>0,me=w&&!!M.anisotropyMap,_e=Y&&!!M.clearcoatMap,Ke=Y&&!!M.clearcoatNormalMap,he=Y&&!!M.clearcoatRoughnessMap,be=ae&&!!M.iridescenceMap,Ue=ae&&!!M.iridescenceThicknessMap,Oe=te&&!!M.sheenColorMap,Me=te&&!!M.sheenRoughnessMap,qe=!!M.specularMap,Ge=!!M.specularColorMap,ut=!!M.specularIntensityMap,B=Re&&!!M.transmissionMap,pe=Re&&!!M.thicknessMap,Q=!!M.gradientMap,se=!!M.alphaMap,xe=M.alphaTest>0,ve=!!M.alphaHash,Be=!!M.extensions;let xt=ei;M.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(xt=i.toneMapping);const It={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:L,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:ge,instancingColor:ge&&k.instanceColor!==null,instancingMorph:ge&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:hs,alphaToCoverage:!!M.alphaToCoverage,map:Ie,matcap:Le,envMap:Je,envMapMode:Je&&O.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:wt,bumpMap:We,normalMap:Xe,displacementMap:f&&ke,emissiveMap:pt,normalMapObjectSpace:Xe&&M.normalMapType===Df,normalMapTangentSpace:Xe&&M.normalMapType===Pu,metalnessMap:De,roughnessMap:P,anisotropy:w,anisotropyMap:me,clearcoat:Y,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:he,dispersion:ie,iridescence:ae,iridescenceMap:be,iridescenceThicknessMap:Ue,sheen:te,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:qe,specularColorMap:Ge,specularIntensityMap:ut,transmission:Re,transmissionMap:B,thicknessMap:pe,gradientMap:Q,opaque:M.transparent===!1&&M.blending===Zi&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:xe,alphaHash:ve,combine:M.combine,mapUv:Ie&&v(M.map.channel),aoMapUv:F&&v(M.aoMap.channel),lightMapUv:wt&&v(M.lightMap.channel),bumpMapUv:We&&v(M.bumpMap.channel),normalMapUv:Xe&&v(M.normalMap.channel),displacementMapUv:ke&&v(M.displacementMap.channel),emissiveMapUv:pt&&v(M.emissiveMap.channel),metalnessMapUv:De&&v(M.metalnessMap.channel),roughnessMapUv:P&&v(M.roughnessMap.channel),anisotropyMapUv:me&&v(M.anisotropyMap.channel),clearcoatMapUv:_e&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(M.sheenRoughnessMap.channel),specularMapUv:qe&&v(M.specularMap.channel),specularColorMapUv:Ge&&v(M.specularColorMap.channel),specularIntensityMapUv:ut&&v(M.specularIntensityMap.channel),transmissionMapUv:B&&v(M.transmissionMap.channel),thicknessMapUv:pe&&v(M.thicknessMap.channel),alphaMapUv:se&&v(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Xe||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ie||se),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:oe,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:$,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:Ie&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:pt&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Tt,flipSided:M.side===bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Be&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&M.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function d(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)_.push(T),_.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(_,M),x(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function x(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){const _=g[M.type];let T;if(_){const D=gn[_];T=Hs.clone(D.uniforms)}else T=M.uniforms;return T}function I(M,_){let T;for(let D=0,k=h.length;D<k;D++){const G=h[D];if(G.cacheKey===_){T=G,++T.usedTimes;break}}return T===void 0&&(T=new _v(i,_,M,r),h.push(T)),T}function A(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:R}}function Tv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ev(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ih(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,p,g,v,m){const d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,v,m){const d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Ev),n.length>1&&n.sort(f||nh),s.length>1&&s.sort(f||nh)}function h(){for(let u=e,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Av(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new ih,i.set(n,[o])):s>=r.length?(o=new ih,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Te};break;case"SpotLight":t={position:new E,direction:new E,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function Rv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Pv=0;function Iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lv(i){const e=new Cv,t=Rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const s=new E,r=new tt,o=new tt;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,y=0,x=0,b=0,I=0,A=0,C=0;c.sort(Iv);for(let M=0,_=c.length;M<_;M++){const T=c[M],D=T.color,k=T.intensity,G=T.distance,q=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*k,u+=D.g*k,f+=D.b*k;else if(T.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(T.sh.coefficients[N],k);C++}else if(T.isDirectionalLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const O=T.shadow,U=t.get(T);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.directionalShadow[p]=U,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=T.shadow.matrix,y++}n.directional[p]=N,p++}else if(T.isSpotLight){const N=e.get(T);N.position.setFromMatrixPosition(T.matrixWorld),N.color.copy(D).multiplyScalar(k),N.distance=G,N.coneCos=Math.cos(T.angle),N.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),N.decay=T.decay,n.spot[v]=N;const O=T.shadow;if(T.map&&(n.spotLightMap[I]=T.map,I++,O.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[v]=O.matrix,T.castShadow){const U=t.get(T);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=q,b++}v++}else if(T.isRectAreaLight){const N=e.get(T);N.color.copy(D).multiplyScalar(k),N.halfWidth.set(T.width*.5,0,0),N.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=N,m++}else if(T.isPointLight){const N=e.get(T);if(N.color.copy(T.color).multiplyScalar(T.intensity),N.distance=T.distance,N.decay=T.decay,T.castShadow){const O=T.shadow,U=t.get(T);U.shadowIntensity=O.intensity,U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=T.shadow.matrix,x++}n.point[g]=N,g++}else if(T.isHemisphereLight){const N=e.get(T);N.skyColor.copy(T.color).multiplyScalar(k),N.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[d]=N,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==b||R.numSpotMaps!==I||R.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=b,R.numSpotMaps=I,R.numLightProbes=C,n.version=Pv++)}function l(c,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const x=c[d];if(x.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(x.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function sh(i){const e=new Lv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Dv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new sh(i),e.set(s,[a])):r>=o.length?(a=new sh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class kv extends ri{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uv extends ri{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`;function Fv(i,e,t){let n=new El;const s=new le,r=new le,o=new lt,a=new kv({depthPacking:Lf}),l=new Uv,c={},h=t.maxTextureSize,u={[ii]:bt,[bt]:ii,[Tt]:Tt},f=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Nv,fragmentShader:Ov}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ht;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ne(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let d=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=d!==Ln&&this.type===Ln,G=d===Ln&&this.type!==Ln;for(let q=0,N=A.length;q<N;q++){const O=A[q],U=O.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const J=U.getFrameExtents();if(s.multiply(J),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,U.mapSize.y=r.y)),U.map===null||k===!0||G===!0){const ce=this.type!==Ln?{minFilter:Jt,magFilter:Jt}:{};U.map!==null&&U.map.dispose(),U.map=new pn(s.x,s.y,ce),U.map.texture.name=O.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const ee=U.getViewportCount();for(let ce=0;ce<ee;ce++){const $=U.getViewport(ce);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),D.viewport(o),U.updateMatrices(O,ce),n=U.getFrustum(),b(C,R,U.camera,O,this.type)}U.isPointLightShadow!==!0&&this.type===Ln&&y(U,R),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,T)};function y(A,C){const R=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,R,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,R,p,v,null)}function x(A,C,R,M){let _=null;const T=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)_=T;else if(_=R.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=_.uuid,k=C.uuid;let G=c[D];G===void 0&&(G={},c[D]=G);let q=G[k];q===void 0&&(q=_.clone(),G[k]=q,C.addEventListener("dispose",I)),_=q}if(_.visible=C.visible,_.wireframe=C.wireframe,M===Ln?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const D=i.properties.get(_);D.light=R}return _}function b(A,C,R,M,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Ln)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const k=e.update(A),G=A.material;if(Array.isArray(G)){const q=k.groups;for(let N=0,O=q.length;N<O;N++){const U=q[N],J=G[U.materialIndex];if(J&&J.visible){const ee=x(A,J,M,_);A.onBeforeShadow(i,A,C,R,k,ee,U),i.renderBufferDirect(R,null,k,ee,A,U),A.onAfterShadow(i,A,C,R,k,ee,U)}}}else if(G.visible){const q=x(A,G,M,_);A.onBeforeShadow(i,A,C,R,k,q,null),i.renderBufferDirect(R,null,k,q,A,null),A.onAfterShadow(i,A,C,R,k,q,null)}}const D=A.children;for(let k=0,G=D.length;k<G;k++)b(D[k],C,R,M,_)}function I(A){A.target.removeEventListener("dispose",I);for(const R in c){const M=c[R],_=A.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const Bv={[ma]:ga,[va]:_a,[ya]:ba,[ts]:xa,[ga]:ma,[_a]:va,[ba]:ya,[xa]:ts};function zv(i,e){function t(){let B=!1;const pe=new lt;let Q=null;const se=new lt(0,0,0,0);return{setMask:function(xe){Q!==xe&&!B&&(i.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){B=xe},setClear:function(xe,ve,Be,xt,It){It===!0&&(xe*=xt,ve*=xt,Be*=xt),pe.set(xe,ve,Be,xt),se.equals(pe)===!1&&(i.clearColor(xe,ve,Be,xt),se.copy(pe))},reset:function(){B=!1,Q=null,se.set(-1,0,0,0)}}}function n(){let B=!1,pe=!1,Q=null,se=null,xe=null;return{setReversed:function(ve){if(pe!==ve){const Be=e.get("EXT_clip_control");pe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT);const xt=xe;xe=null,this.setClear(xt)}pe=ve},getReversed:function(){return pe},setTest:function(ve){ve?X(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(ve){Q!==ve&&!B&&(i.depthMask(ve),Q=ve)},setFunc:function(ve){if(pe&&(ve=Bv[ve]),se!==ve){switch(ve){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){B=ve},setClear:function(ve){xe!==ve&&(pe&&(ve=1-ve),i.clearDepth(ve),xe=ve)},reset:function(){B=!1,Q=null,se=null,xe=null,pe=!1}}}function s(){let B=!1,pe=null,Q=null,se=null,xe=null,ve=null,Be=null,xt=null,It=null;return{setTest:function(rt){B||(rt?X(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!B&&(i.stencilMask(rt),pe=rt)},setFunc:function(rt,sn,Sn){(Q!==rt||se!==sn||xe!==Sn)&&(i.stencilFunc(rt,sn,Sn),Q=rt,se=sn,xe=Sn)},setOp:function(rt,sn,Sn){(ve!==rt||Be!==sn||xt!==Sn)&&(i.stencilOp(rt,sn,Sn),ve=rt,Be=sn,xt=Sn)},setLocked:function(rt){B=rt},setClear:function(rt){It!==rt&&(i.clearStencil(rt),It=rt)},reset:function(){B=!1,pe=null,Q=null,se=null,xe=null,ve=null,Be=null,xt=null,It=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,b=null,I=null,A=null,C=new Te(0,0,0),R=0,M=!1,_=null,T=null,D=null,k=null,G=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,O=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),N=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),N=O>=2);let J=null,ee={};const ce=i.getParameter(i.SCISSOR_BOX),$=i.getParameter(i.VIEWPORT),j=new lt().fromArray(ce),L=new lt().fromArray($);function W(B,pe,Q,se){const xe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(B,ve),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Q;Be++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(pe+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ve}const re={};re[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(ts),We(!1),Xe(hc),X(i.CULL_FACE),F(Un);function X(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function oe(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ge(B,pe){return u[B]!==pe?(i.bindFramebuffer(B,pe),u[B]=pe,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function we(B,pe){let Q=p,se=!1;if(B){Q=f.get(pe),Q===void 0&&(Q=[],f.set(pe,Q));const xe=B.textures;if(Q.length!==xe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ve=0,Be=xe.length;ve<Be;ve++)Q[ve]=i.COLOR_ATTACHMENT0+ve;Q.length=xe.length,se=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,se=!0);se&&i.drawBuffers(Q)}function Ie(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const Le={[pi]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[uf]:i.FUNC_REVERSE_SUBTRACT};Le[df]=i.MIN,Le[ff]=i.MAX;const Je={[pf]:i.ZERO,[mf]:i.ONE,[gf]:i.SRC_COLOR,[fa]:i.SRC_ALPHA,[Mf]:i.SRC_ALPHA_SATURATE,[_f]:i.DST_COLOR,[yf]:i.DST_ALPHA,[vf]:i.ONE_MINUS_SRC_COLOR,[pa]:i.ONE_MINUS_SRC_ALPHA,[bf]:i.ONE_MINUS_DST_COLOR,[xf]:i.ONE_MINUS_DST_ALPHA,[wf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[Tf]:i.CONSTANT_ALPHA,[Ef]:i.ONE_MINUS_CONSTANT_ALPHA};function F(B,pe,Q,se,xe,ve,Be,xt,It,rt){if(B===Un){v===!0&&(oe(i.BLEND),v=!1);return}if(v===!1&&(X(i.BLEND),v=!0),B!==cf){if(B!==m||rt!==M){if((d!==pi||b!==pi)&&(i.blendEquation(i.FUNC_ADD),d=pi,b=pi),rt)switch(B){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ht:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ht:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,x=null,I=null,A=null,C.set(0,0,0),R=0,m=B,M=rt}return}xe=xe||pe,ve=ve||Q,Be=Be||se,(pe!==d||xe!==b)&&(i.blendEquationSeparate(Le[pe],Le[xe]),d=pe,b=xe),(Q!==y||se!==x||ve!==I||Be!==A)&&(i.blendFuncSeparate(Je[Q],Je[se],Je[ve],Je[Be]),y=Q,x=se,I=ve,A=Be),(xt.equals(C)===!1||It!==R)&&(i.blendColor(xt.r,xt.g,xt.b,It),C.copy(xt),R=It),m=B,M=!1}function wt(B,pe){B.side===Tt?oe(i.CULL_FACE):X(i.CULL_FACE);let Q=B.side===bt;pe&&(Q=!Q),We(Q),B.blending===Zi&&B.transparent===!1?F(Un):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const se=B.stencilWrite;a.setTest(se),se&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(B){_!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),_=B)}function Xe(B){B!==of?(X(i.CULL_FACE),B!==T&&(B===hc?i.cullFace(i.BACK):B===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),T=B}function ke(B){B!==D&&(N&&i.lineWidth(B),D=B)}function pt(B,pe,Q){B?(X(i.POLYGON_OFFSET_FILL),(k!==pe||G!==Q)&&(i.polygonOffset(pe,Q),k=pe,G=Q)):oe(i.POLYGON_OFFSET_FILL)}function De(B){B?X(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function P(B){B===void 0&&(B=i.TEXTURE0+q-1),J!==B&&(i.activeTexture(B),J=B)}function w(B,pe,Q){Q===void 0&&(J===null?Q=i.TEXTURE0+q-1:Q=J);let se=ee[Q];se===void 0&&(se={type:void 0,texture:void 0},ee[Q]=se),(se.type!==B||se.texture!==pe)&&(J!==Q&&(i.activeTexture(Q),J=Q),i.bindTexture(B,pe||re[B]),se.type=B,se.texture=pe)}function Y(){const B=ee[J];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(B){j.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),j.copy(B))}function Me(B){L.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),L.copy(B))}function qe(B,pe){let Q=c.get(pe);Q===void 0&&(Q=new WeakMap,c.set(pe,Q));let se=Q.get(B);se===void 0&&(se=i.getUniformBlockIndex(pe,B.name),Q.set(B,se))}function Ge(B,pe){const se=c.get(pe).get(B);l.get(pe)!==se&&(i.uniformBlockBinding(pe,se,B.__bindingPointIndex),l.set(pe,se))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,ee={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,b=null,I=null,A=null,C=new Te(0,0,0),R=0,M=!1,_=null,T=null,D=null,k=null,G=null,j.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:oe,bindFramebuffer:ge,drawBuffers:we,useProgram:Ie,setBlending:F,setMaterial:wt,setFlipSided:We,setCullFace:Xe,setLineWidth:ke,setPolygonOffset:pt,setScissorTest:De,activeTexture:P,bindTexture:w,unbindTexture:Y,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:be,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:Ge,texStorage2D:Ke,texStorage3D:he,texSubImage2D:te,texSubImage3D:Re,compressedTexSubImage2D:me,compressedTexSubImage3D:_e,scissor:Oe,viewport:Me,reset:ut}}function rh(i,e,t,n){const s=Hv(n);switch(t){case Su:return i*e;case Eu:return i*e;case Au:return i*e*2;case bl:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case Cu:return i*e*2/s.components*s.byteLength;case wl:return i*e*2/s.components*s.byteLength;case Tu:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Sl:return i*e*4/s.components*s.byteLength;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Or:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ra:return Math.max(i,16)*Math.max(e,8)/4;case Ea:case Ca:return Math.max(i,8)*Math.max(e,8)/2;case Pa:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Br:case $a:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ru:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hv(i){switch(i){case Bn:case bu:return{byteLength:1,components:1};case zs:case Mu:case Nn:return{byteLength:2,components:1};case xl:case _l:return{byteLength:2,components:4};case bi:case yl:case yn:return{byteLength:4,components:1};case wu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Gv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,w){return p?new OffscreenCanvas(P,w):qr("canvas")}function v(P,w,Y){let ie=1;const ae=De(P);if((ae.width>Y||ae.height>Y)&&(ie=Y/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const te=Math.floor(ie*ae.width),Re=Math.floor(ie*ae.height);u===void 0&&(u=g(te,Re));const me=w?g(te,Re):u;return me.width=te,me.height=Re,me.getContext("2d").drawImage(P,0,0,te,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Re+")."),me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,w,Y,ie,ae=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let te=w;if(w===i.RED&&(Y===i.FLOAT&&(te=i.R32F),Y===i.HALF_FLOAT&&(te=i.R16F),Y===i.UNSIGNED_BYTE&&(te=i.R8)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.R8UI),Y===i.UNSIGNED_SHORT&&(te=i.R16UI),Y===i.UNSIGNED_INT&&(te=i.R32UI),Y===i.BYTE&&(te=i.R8I),Y===i.SHORT&&(te=i.R16I),Y===i.INT&&(te=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(te=i.RG32F),Y===i.HALF_FLOAT&&(te=i.RG16F),Y===i.UNSIGNED_BYTE&&(te=i.RG8)),w===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.RG8UI),Y===i.UNSIGNED_SHORT&&(te=i.RG16UI),Y===i.UNSIGNED_INT&&(te=i.RG32UI),Y===i.BYTE&&(te=i.RG8I),Y===i.SHORT&&(te=i.RG16I),Y===i.INT&&(te=i.RG32I)),w===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(te=i.RGB16UI),Y===i.UNSIGNED_INT&&(te=i.RGB32UI),Y===i.BYTE&&(te=i.RGB8I),Y===i.SHORT&&(te=i.RGB16I),Y===i.INT&&(te=i.RGB32I)),w===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),Y===i.UNSIGNED_INT&&(te=i.RGBA32UI),Y===i.BYTE&&(te=i.RGBA8I),Y===i.SHORT&&(te=i.RGBA16I),Y===i.INT&&(te=i.RGBA32I)),w===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),w===i.RGBA){const Re=ae?ro:je.getTransfer(ie);Y===i.FLOAT&&(te=i.RGBA32F),Y===i.HALF_FLOAT&&(te=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(te=Re===ot?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(P,w){let Y;return P?w===null||w===bi||w===ss?Y=i.DEPTH24_STENCIL8:w===yn?Y=i.DEPTH32F_STENCIL8:w===zs&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===bi||w===ss?Y=i.DEPTH_COMPONENT24:w===yn?Y=i.DEPTH_COMPONENT32F:w===zs&&(Y=i.DEPTH_COMPONENT16),Y}function I(P,w){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){const w=P.target;w.removeEventListener("dispose",A),R(w),w.isVideoTexture&&h.delete(w)}function C(P){const w=P.target;w.removeEventListener("dispose",C),_(w)}function R(P){const w=n.get(P);if(w.__webglInit===void 0)return;const Y=P.source,ie=f.get(Y);if(ie){const ae=ie[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&M(P),Object.keys(ie).length===0&&f.delete(Y)}n.remove(P)}function M(P){const w=n.get(P);i.deleteTexture(w.__webglTexture);const Y=P.source,ie=f.get(Y);delete ie[w.__cacheKey],o.memory.textures--}function _(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let ae=0;ae<w.__webglFramebuffer[ie].length;ae++)i.deleteFramebuffer(w.__webglFramebuffer[ie][ae]);else i.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)i.deleteFramebuffer(w.__webglFramebuffer[ie]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=P.textures;for(let ie=0,ae=Y.length;ie<ae;ie++){const te=n.get(Y[ie]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(Y[ie])}n.remove(P)}let T=0;function D(){T=0}function k(){const P=T;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),T+=1,P}function G(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function q(P,w){const Y=n.get(P);if(P.isVideoTexture&&ke(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(Y,P,w);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function N(P,w){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){L(Y,P,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function O(P,w){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){L(Y,P,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function U(P,w){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){W(Y,P,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}const J={[Sa]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ee={[Jt]:i.NEAREST,[Pf]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ce={[kf]:i.NEVER,[zf]:i.ALWAYS,[Uf]:i.LESS,[Iu]:i.LEQUAL,[Nf]:i.EQUAL,[Bf]:i.GEQUAL,[Of]:i.GREATER,[Ff]:i.NOTEQUAL};function $(P,w){if(w.type===yn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===cn||w.magFilter===go||w.magFilter===Js||w.magFilter===yi||w.minFilter===cn||w.minFilter===go||w.minFilter===Js||w.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,J[w.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ee[w.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ee[w.minFilter]),w.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==Js&&w.minFilter!==yi||w.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function j(P,w){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",A));const ie=w.source;let ae=f.get(ie);ae===void 0&&(ae={},f.set(ie,ae));const te=G(w);if(te!==P.__cacheKey){ae[te]===void 0&&(ae[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[te].usedTimes++;const Re=ae[P.__cacheKey];Re!==void 0&&(ae[P.__cacheKey].usedTimes--,Re.usedTimes===0&&M(w)),P.__cacheKey=te,P.__webglTexture=ae[te].texture}return Y}function L(P,w,Y){let ie=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=i.TEXTURE_3D);const ae=j(P,w),te=w.source;t.bindTexture(ie,P.__webglTexture,i.TEXTURE0+Y);const Re=n.get(te);if(te.version!==Re.__version||ae===!0){t.activeTexture(i.TEXTURE0+Y);const me=je.getPrimaries(je.workingColorSpace),_e=w.colorSpace===Zn?null:je.getPrimaries(w.colorSpace),Ke=w.colorSpace===Zn||me===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let he=v(w.image,!1,s.maxTextureSize);he=pt(w,he);const be=r.convert(w.format,w.colorSpace),Ue=r.convert(w.type);let Oe=x(w.internalFormat,be,Ue,w.colorSpace,w.isVideoTexture);$(ie,w);let Me;const qe=w.mipmaps,Ge=w.isVideoTexture!==!0,ut=Re.__version===void 0||ae===!0,B=te.dataReady,pe=I(w,he);if(w.isDepthTexture)Oe=b(w.format===rs,w.type),ut&&(Ge?t.texStorage2D(i.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,be,Ue,null));else if(w.isDataTexture)if(qe.length>0){Ge&&ut&&t.texStorage2D(i.TEXTURE_2D,pe,Oe,qe[0].width,qe[0].height);for(let Q=0,se=qe.length;Q<se;Q++)Me=qe[Q],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Me.width,Me.height,be,Ue,Me.data):t.texImage2D(i.TEXTURE_2D,Q,Oe,Me.width,Me.height,0,be,Ue,Me.data);w.generateMipmaps=!1}else Ge?(ut&&t.texStorage2D(i.TEXTURE_2D,pe,Oe,he.width,he.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,be,Ue,he.data)):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,be,Ue,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Oe,qe[0].width,qe[0].height,he.depth);for(let Q=0,se=qe.length;Q<se;Q++)if(Me=qe[Q],w.format!==hn)if(be!==null)if(Ge){if(B)if(w.layerUpdates.size>0){const xe=rh(Me.width,Me.height,w.format,w.type);for(const ve of w.layerUpdates){const Be=Me.data.subarray(ve*xe/Me.data.BYTES_PER_ELEMENT,(ve+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ve,Me.width,Me.height,1,be,Be)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,he.depth,be,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Oe,Me.width,Me.height,he.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,Me.width,Me.height,he.depth,be,Ue,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Oe,Me.width,Me.height,he.depth,0,be,Ue,Me.data)}else{Ge&&ut&&t.texStorage2D(i.TEXTURE_2D,pe,Oe,qe[0].width,qe[0].height);for(let Q=0,se=qe.length;Q<se;Q++)Me=qe[Q],w.format!==hn?be!==null?Ge?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,Me.width,Me.height,be,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,Me.width,Me.height,be,Ue,Me.data):t.texImage2D(i.TEXTURE_2D,Q,Oe,Me.width,Me.height,0,be,Ue,Me.data)}else if(w.isDataArrayTexture)if(Ge){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Oe,he.width,he.height,he.depth),B)if(w.layerUpdates.size>0){const Q=rh(he.width,he.height,w.format,w.type);for(const se of w.layerUpdates){const xe=he.data.subarray(se*Q/he.data.BYTES_PER_ELEMENT,(se+1)*Q/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,be,Ue,xe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,be,Ue,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,be,Ue,he.data);else if(w.isData3DTexture)Ge?(ut&&t.texStorage3D(i.TEXTURE_3D,pe,Oe,he.width,he.height,he.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,be,Ue,he.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,be,Ue,he.data);else if(w.isFramebufferTexture){if(ut)if(Ge)t.texStorage2D(i.TEXTURE_2D,pe,Oe,he.width,he.height);else{let Q=he.width,se=he.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,Oe,Q,se,0,be,Ue,null),Q>>=1,se>>=1}}else if(qe.length>0){if(Ge&&ut){const Q=De(qe[0]);t.texStorage2D(i.TEXTURE_2D,pe,Oe,Q.width,Q.height)}for(let Q=0,se=qe.length;Q<se;Q++)Me=qe[Q],Ge?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,be,Ue,Me):t.texImage2D(i.TEXTURE_2D,Q,Oe,be,Ue,Me);w.generateMipmaps=!1}else if(Ge){if(ut){const Q=De(he);t.texStorage2D(i.TEXTURE_2D,pe,Oe,Q.width,Q.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,Ue,he)}else t.texImage2D(i.TEXTURE_2D,0,Oe,be,Ue,he);m(w)&&d(ie),Re.__version=te.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function W(P,w,Y){if(w.image.length!==6)return;const ie=j(P,w),ae=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+Y);const te=n.get(ae);if(ae.version!==te.__version||ie===!0){t.activeTexture(i.TEXTURE0+Y);const Re=je.getPrimaries(je.workingColorSpace),me=w.colorSpace===Zn?null:je.getPrimaries(w.colorSpace),_e=w.colorSpace===Zn||Re===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!Ke&&!he?be[se]=v(w.image[se],!0,s.maxCubemapSize):be[se]=he?w.image[se].image:w.image[se],be[se]=pt(w,be[se]);const Ue=be[0],Oe=r.convert(w.format,w.colorSpace),Me=r.convert(w.type),qe=x(w.internalFormat,Oe,Me,w.colorSpace),Ge=w.isVideoTexture!==!0,ut=te.__version===void 0||ie===!0,B=ae.dataReady;let pe=I(w,Ue);$(i.TEXTURE_CUBE_MAP,w);let Q;if(Ke){Ge&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,Ue.width,Ue.height);for(let se=0;se<6;se++){Q=be[se].mipmaps;for(let xe=0;xe<Q.length;xe++){const ve=Q[xe];w.format!==hn?Oe!==null?Ge?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,ve.width,ve.height,Oe,ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,qe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,ve.width,ve.height,Oe,Me,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,qe,ve.width,ve.height,0,Oe,Me,ve.data)}}}else{if(Q=w.mipmaps,Ge&&ut){Q.length>0&&pe++;const se=De(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,qe,se.width,se.height)}for(let se=0;se<6;se++)if(he){Ge?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Oe,Me,be[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,be[se].width,be[se].height,0,Oe,Me,be[se].data);for(let xe=0;xe<Q.length;xe++){const Be=Q[xe].image[se].image;Ge?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Be.width,Be.height,Oe,Me,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,qe,Be.width,Be.height,0,Oe,Me,Be.data)}}else{Ge?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,Me,be[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Oe,Me,be[se]);for(let xe=0;xe<Q.length;xe++){const ve=Q[xe];Ge?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Oe,Me,ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,qe,Oe,Me,ve.image[se])}}}m(w)&&d(i.TEXTURE_CUBE_MAP),te.__version=ae.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function re(P,w,Y,ie,ae,te){const Re=r.convert(Y.format,Y.colorSpace),me=r.convert(Y.type),_e=x(Y.internalFormat,Re,me,Y.colorSpace),Ke=n.get(w),he=n.get(Y);if(he.__renderTarget=w,!Ke.__hasExternalTextures){const be=Math.max(1,w.width>>te),Ue=Math.max(1,w.height>>te);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,_e,be,Ue,w.depth,0,Re,me,null):t.texImage2D(ae,te,_e,be,Ue,0,Re,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ae,he.__webglTexture,0,We(w)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ae,he.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(P,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,P),w.depthBuffer){const ie=w.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,te=b(w.stencilBuffer,ae),Re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=We(w);Xe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,te,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,te,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,P)}else{const ie=w.textures;for(let ae=0;ae<ie.length;ae++){const te=ie[ae],Re=r.convert(te.format,te.colorSpace),me=r.convert(te.type),_e=x(te.internalFormat,Re,me,te.colorSpace),Ke=We(w);Y&&Xe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,_e,w.width,w.height):Xe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,_e,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,_e,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=n.get(w.depthTexture);ie.__renderTarget=w,(!ie.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const ae=ie.__webglTexture,te=We(w);if(w.depthTexture.format===Ji)Xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(w.depthTexture.format===rs)Xe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ge(P){const w=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ie=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=ie}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");oe(w.__webglFramebuffer,P)}else if(Y){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=i.createRenderbuffer(),X(w.__webglDepthbuffer[ie],P,!1);else{const ae=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,te)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),X(w.__webglDepthbuffer,P,!1);else{const ie=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(P,w,Y){const ie=n.get(P);w!==void 0&&re(ie.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ge(P)}function Ie(P){const w=P.texture,Y=n.get(P),ie=n.get(w);P.addEventListener("dispose",C);const ae=P.textures,te=P.isWebGLCubeRenderTarget===!0,Re=ae.length>1;if(Re||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=w.version,o.memory.textures++),te){Y.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[me]=[];for(let _e=0;_e<w.mipmaps.length;_e++)Y.__webglFramebuffer[me][_e]=i.createFramebuffer()}else Y.__webglFramebuffer[me]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)Y.__webglFramebuffer[me]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Re)for(let me=0,_e=ae.length;me<_e;me++){const Ke=n.get(ae[me]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Xe(P)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const _e=ae[me];Y.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[me]);const Ke=r.convert(_e.format,_e.colorSpace),he=r.convert(_e.type),be=x(_e.internalFormat,Ke,he,_e.colorSpace,P.isXRRenderTarget===!0),Ue=We(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,be,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,Y.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),X(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),$(i.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)re(Y.__webglFramebuffer[me][_e],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else re(Y.__webglFramebuffer[me],P,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(w)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let me=0,_e=ae.length;me<_e;me++){const Ke=ae[me],he=n.get(Ke);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),$(i.TEXTURE_2D,Ke),re(Y.__webglFramebuffer,P,Ke,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),m(Ke)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,ie.__webglTexture),$(me,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)re(Y.__webglFramebuffer[_e],P,w,i.COLOR_ATTACHMENT0,me,_e);else re(Y.__webglFramebuffer,P,w,i.COLOR_ATTACHMENT0,me,0);m(w)&&d(me),t.unbindTexture()}P.depthBuffer&&ge(P)}function Le(P){const w=P.textures;for(let Y=0,ie=w.length;Y<ie;Y++){const ae=w[Y];if(m(ae)){const te=y(P),Re=n.get(ae).__webglTexture;t.bindTexture(te,Re),d(te),t.unbindTexture()}}}const Je=[],F=[];function wt(P){if(P.samples>0){if(Xe(P)===!1){const w=P.textures,Y=P.width,ie=P.height;let ae=i.COLOR_BUFFER_BIT;const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(P),me=w.length>1;if(me)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ke=n.get(w[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,ae,i.NEAREST),l===!0&&(Je.length=0,F.length=0,Je.push(i.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(te),F.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,Re.__webglColorRenderbuffer[_e]);const Ke=n.get(w[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function We(P){return Math.min(s.maxSamples,P.samples)}function Xe(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function pt(P,w){const Y=P.colorSpace,ie=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==hs&&Y!==Zn&&(je.getTransfer(Y)===ot?(ie!==hn||ae!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=q,this.setTexture2DArray=N,this.setTexture3D=O,this.setTextureCube=U,this.rebindTextures=we,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Xe}function Vv(i,e){function t(n,s=Zn){let r;const o=je.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===Su)return i.ALPHA;if(n===Tu)return i.RGB;if(n===hn)return i.RGBA;if(n===Eu)return i.LUMINANCE;if(n===Au)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===bl)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===Cu)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Sl)return i.RGBA_INTEGER;if(n===Ur||n===Nr||n===Or||n===Fr)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Aa||n===Ca||n===Ra)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===Ia||n===La)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===Ia)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===La)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===ka||n===Ua||n===Na||n===Oa||n===Fa||n===Ba||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===za)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Br||n===$a||n===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Br)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===ja||n===Ka||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Wv extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xv={type:"move"};class Xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
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

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kt({vertexShader:Yv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jv extends us{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const v=new qv,m=t.getContextAttributes();let d=null,y=null;const x=[],b=[],I=new le;let A=null;const C=new Gt;C.viewport=new lt;const R=new Gt;R.viewport=new lt;const M=[C,R],_=new Wv;let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let W=x[L];return W===void 0&&(W=new Xo,x[L]=W),W.getTargetRaySpace()},this.getControllerGrip=function(L){let W=x[L];return W===void 0&&(W=new Xo,x[L]=W),W.getGripSpace()},this.getHand=function(L){let W=x[L];return W===void 0&&(W=new Xo,x[L]=W),W.getHandSpace()};function k(L){const W=b.indexOf(L.inputSource);if(W===-1)return;const re=x[W];re!==void 0&&(re.update(L.inputSource,L.frame,c||o),re.dispatchEvent({type:L.type,data:L.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",q);for(let L=0;L<x.length;L++){const W=b[L];W!==null&&(b[L]=null,x[L].disconnect(W))}T=null,D=null,v.reset(),e.setRenderTarget(d),p=null,f=null,u=null,s=null,y=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const W={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new pn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let W=null,re=null,X=null;m.depth&&(X=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=m.stencil?rs:Ji,re=m.stencil?ss:bi);const oe={colorFormat:t.RGBA8,depthFormat:X,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(oe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new pn(f.textureWidth,f.textureHeight,{format:hn,type:Bn,depthTexture:new Gu(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(L){for(let W=0;W<L.removed.length;W++){const re=L.removed[W],X=b.indexOf(re);X>=0&&(b[X]=null,x[X].disconnect(re))}for(let W=0;W<L.added.length;W++){const re=L.added[W];let X=b.indexOf(re);if(X===-1){for(let ge=0;ge<x.length;ge++)if(ge>=b.length){b.push(re),X=ge;break}else if(b[ge]===null){b[ge]=re,X=ge;break}if(X===-1)break}const oe=x[X];oe&&oe.connect(re)}}const N=new E,O=new E;function U(L,W,re){N.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);const X=N.distanceTo(O),oe=W.projectionMatrix.elements,ge=re.projectionMatrix.elements,we=oe[14]/(oe[10]-1),Ie=oe[14]/(oe[10]+1),Le=(oe[9]+1)/oe[5],Je=(oe[9]-1)/oe[5],F=(oe[8]-1)/oe[0],wt=(ge[8]+1)/ge[0],We=we*F,Xe=we*wt,ke=X/(-F+wt),pt=ke*-F;if(W.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(pt),L.translateZ(ke),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),oe[10]===-1)L.projectionMatrix.copy(W.projectionMatrix),L.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const De=we+ke,P=Ie+ke,w=We-pt,Y=Xe+(X-pt),ie=Le*Ie/P*De,ae=Je*Ie/P*De;L.projectionMatrix.makePerspective(w,Y,ie,ae,De,P),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function J(L,W){W===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(W.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let W=L.near,re=L.far;v.texture!==null&&(v.depthNear>0&&(W=v.depthNear),v.depthFar>0&&(re=v.depthFar)),_.near=R.near=C.near=W,_.far=R.far=C.far=re,(T!==_.near||D!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),T=_.near,D=_.far),C.layers.mask=L.layers.mask|2,R.layers.mask=L.layers.mask|4,_.layers.mask=C.layers.mask|R.layers.mask;const X=L.parent,oe=_.cameras;J(_,X);for(let ge=0;ge<oe.length;ge++)J(oe[ge],X);oe.length===2?U(_,C,R):_.projectionMatrix.copy(C.projectionMatrix),ee(L,_,X)};function ee(L,W,re){re===null?L.matrix.copy(W.matrixWorld):(L.matrix.copy(re.matrixWorld),L.matrix.invert(),L.matrix.multiply(W.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(W.projectionMatrix),L.projectionMatrixInverse.copy(W.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Qa*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let ce=null;function $(L,W){if(h=W.getViewerPose(c||o),g=W,h!==null){const re=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let X=!1;re.length!==_.cameras.length&&(_.cameras.length=0,X=!0);for(let ge=0;ge<re.length;ge++){const we=re[ge];let Ie=null;if(p!==null)Ie=p.getViewport(we);else{const Je=u.getViewSubImage(f,we);Ie=Je.viewport,ge===0&&(e.setRenderTargetTextures(y,Je.colorTexture,f.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(y))}let Le=M[ge];Le===void 0&&(Le=new Gt,Le.layers.enable(ge),Le.viewport=new lt,M[ge]=Le),Le.matrix.fromArray(we.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(we.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ge===0&&(_.matrix.copy(Le.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),X===!0&&_.cameras.push(Le)}const oe=s.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const ge=u.getDepthInformation(re[0]);ge&&ge.isValid&&ge.texture&&v.init(e,ge,s.renderState)}}for(let re=0;re<x.length;re++){const X=b[re],oe=x[re];X!==null&&oe!==void 0&&oe.update(X,W,c||o)}ce&&ce(L,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const j=new Hu;j.setAnimationLoop($),this.setAnimationLoop=function(L){ce=L},this.dispose=function(){}}}const di=new $t,Kv=new tt;function Zv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Fu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,x,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),x=y.envMap,b=y.envMapRotation;x&&(m.envMap.value=x,di.copy(b),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(y,I);const A=e.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const b=i.createBuffer(),I=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],b=y.uniforms,I=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,C=b.length;A<C;A++){const R=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,_=R.length;M<_;M++){const T=R[M];if(p(T,A,M,I)===!0){const D=T.__offset,k=Array.isArray(T.value)?T.value:[T.value];let G=0;for(let q=0;q<k.length;q++){const N=k[q],O=v(N);typeof N=="number"||typeof N=="boolean"?(T.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,D+G,T.__data)):N.isMatrix3?(T.__data[0]=N.elements[0],T.__data[1]=N.elements[1],T.__data[2]=N.elements[2],T.__data[3]=0,T.__data[4]=N.elements[3],T.__data[5]=N.elements[4],T.__data[6]=N.elements[5],T.__data[7]=0,T.__data[8]=N.elements[6],T.__data[9]=N.elements[7],T.__data[10]=N.elements[8],T.__data[11]=0):(N.toArray(T.__data,G),G+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,b,I){const A=y.value,C=x+"_"+b;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const R=I[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(y){const x=y.uniforms;let b=0;const I=16;for(let C=0,R=x.length;C<R;C++){const M=Array.isArray(x[C])?x[C]:[x[C]];for(let _=0,T=M.length;_<T;_++){const D=M[_],k=Array.isArray(D.value)?D.value:[D.value];for(let G=0,q=k.length;G<q;G++){const N=k[G],O=v(N),U=b%I,J=U%O.boundary,ee=U+J;b+=J,ee!==0&&I-ee<O.storage&&(b+=I-ee),D.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=O.storage}}}const A=b%I;return A>0&&(b+=I-A),y.__size=b,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Qv{constructor(e={}){const{canvas:t=Gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=ei,this.toneMappingExposure=1;const b=this;let I=!1,A=0,C=0,R=null,M=-1,_=null;const T=new lt,D=new lt;let k=null;const G=new Te(0);let q=0,N=t.width,O=t.height,U=1,J=null,ee=null;const ce=new lt(0,0,N,O),$=new lt(0,0,N,O);let j=!1;const L=new El;let W=!1,re=!1;const X=new tt,oe=new tt,ge=new E,we=new lt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Je(){return R===null?U:1}let F=n;function wt(S,z){return t.getContext(S,z)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){const z="webgl2";if(F=wt(z,S),F===null)throw wt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let We,Xe,ke,pt,De,P,w,Y,ie,ae,te,Re,me,_e,Ke,he,be,Ue,Oe,Me,qe,Ge,ut,B;function pe(){We=new sg(F),We.init(),Ge=new Vv(F,We),Xe=new J0(F,We,e,Ge),ke=new zv(F,We),Xe.reverseDepthBuffer&&f&&ke.buffers.depth.setReversed(!0),pt=new ag(F),De=new Tv,P=new Gv(F,We,ke,De,Xe,Ge,pt),w=new eg(b),Y=new ig(b),ie=new pp(F),ut=new K0(F,ie),ae=new rg(F,ie,pt,ut),te=new cg(F,ae,ie,pt),Oe=new lg(F,Xe,P),he=new Q0(De),Re=new Sv(b,w,Y,We,Xe,ut,he),me=new Zv(b,De),_e=new Av,Ke=new Dv(We),Ue=new j0(b,w,Y,ke,te,p,l),be=new Fv(b,te,Xe),B=new Jv(F,pt,Xe,ke),Me=new Z0(F,We,pt),qe=new og(F,We,pt),pt.programs=Re.programs,b.capabilities=Xe,b.extensions=We,b.properties=De,b.renderLists=_e,b.shadowMap=be,b.state=ke,b.info=pt}pe();const Q=new jv(b,F);this.xr=Q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const S=We.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=We.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(S){S!==void 0&&(U=S,this.setSize(N,O,!1))},this.getSize=function(S){return S.set(N,O)},this.setSize=function(S,z,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,O=z,t.width=Math.floor(S*U),t.height=Math.floor(z*U),K===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(N*U,O*U).floor()},this.setDrawingBufferSize=function(S,z,K){N=S,O=z,U=K,t.width=Math.floor(S*K),t.height=Math.floor(z*K),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,z,K,Z){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,z,K,Z),ke.viewport(T.copy(ce).multiplyScalar(U).round())},this.getScissor=function(S){return S.copy($)},this.setScissor=function(S,z,K,Z){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,z,K,Z),ke.scissor(D.copy($).multiplyScalar(U).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(S){ke.setScissorTest(j=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){ee=S},this.getClearColor=function(S){return S.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(S=!0,z=!0,K=!0){let Z=0;if(S){let H=!1;if(R!==null){const ue=R.texture.format;H=ue===Sl||ue===wl||ue===Ml}if(H){const ue=R.texture.type,ye=ue===Bn||ue===bi||ue===zs||ue===ss||ue===xl||ue===_l,Ee=Ue.getClearColor(),Ae=Ue.getClearAlpha(),Fe=Ee.r,ze=Ee.g,Ce=Ee.b;ye?(g[0]=Fe,g[1]=ze,g[2]=Ce,g[3]=Ae,F.clearBufferuiv(F.COLOR,0,g)):(v[0]=Fe,v[1]=ze,v[2]=Ce,v[3]=Ae,F.clearBufferiv(F.COLOR,0,v))}else Z|=F.COLOR_BUFFER_BIT}z&&(Z|=F.DEPTH_BUFFER_BIT),K&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),_e.dispose(),Ke.dispose(),De.dispose(),w.dispose(),Y.dispose(),te.dispose(),ut.dispose(),B.dispose(),Re.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",nc),Q.removeEventListener("sessionend",ic),oi.stop()};function se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const S=pt.autoReset,z=be.enabled,K=be.autoUpdate,Z=be.needsUpdate,H=be.type;pe(),pt.autoReset=S,be.enabled=z,be.autoUpdate=K,be.needsUpdate=Z,be.type=H}function ve(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Be(S){const z=S.target;z.removeEventListener("dispose",Be),xt(z)}function xt(S){It(S),De.remove(S)}function It(S){const z=De.get(S).programs;z!==void 0&&(z.forEach(function(K){Re.releaseProgram(K)}),S.isShaderMaterial&&Re.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,K,Z,H,ue){z===null&&(z=Ie);const ye=H.isMesh&&H.matrixWorld.determinant()<0,Ee=Zd(S,z,K,Z,H);ke.setMaterial(Z,ye);let Ae=K.index,Fe=1;if(Z.wireframe===!0){if(Ae=ae.getWireframeAttribute(K),Ae===void 0)return;Fe=2}const ze=K.drawRange,Ce=K.attributes.position;let Qe=ze.start*Fe,dt=(ze.start+ze.count)*Fe;ue!==null&&(Qe=Math.max(Qe,ue.start*Fe),dt=Math.min(dt,(ue.start+ue.count)*Fe)),Ae!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Ae.count)):Ce!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Ce.count));const mt=dt-Qe;if(mt<0||mt===1/0)return;ut.setup(H,Z,Ee,K,Ae);let Wt,nt=Me;if(Ae!==null&&(Wt=ie.get(Ae),nt=qe,nt.setIndex(Wt)),H.isMesh)Z.wireframe===!0?(ke.setLineWidth(Z.wireframeLinewidth*Je()),nt.setMode(F.LINES)):nt.setMode(F.TRIANGLES);else if(H.isLine){let Pe=Z.linewidth;Pe===void 0&&(Pe=1),ke.setLineWidth(Pe*Je()),H.isLineSegments?nt.setMode(F.LINES):H.isLineLoop?nt.setMode(F.LINE_LOOP):nt.setMode(F.LINE_STRIP)}else H.isPoints?nt.setMode(F.POINTS):H.isSprite&&nt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)nt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Pe=H._multiDrawStarts,Tn=H._multiDrawCounts,it=H._multiDrawCount,rn=Ae?ie.get(Ae).bytesPerElement:1,Si=De.get(Z).currentProgram.getUniforms();for(let qt=0;qt<it;qt++)Si.setValue(F,"_gl_DrawID",qt),nt.render(Pe[qt]/rn,Tn[qt])}else if(H.isInstancedMesh)nt.renderInstances(Qe,mt,H.count);else if(K.isInstancedBufferGeometry){const Pe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Tn=Math.min(K.instanceCount,Pe);nt.renderInstances(Qe,mt,Tn)}else nt.render(Qe,mt)};function rt(S,z,K){S.transparent===!0&&S.side===Tt&&S.forceSinglePass===!1?(S.side=bt,S.needsUpdate=!0,Zs(S,z,K),S.side=ii,S.needsUpdate=!0,Zs(S,z,K),S.side=Tt):Zs(S,z,K)}this.compile=function(S,z,K=null){K===null&&(K=S),d=Ke.get(K),d.init(z),x.push(d),K.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),S!==K&&S.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const Z=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let ye=0;ye<ue.length;ye++){const Ee=ue[ye];rt(Ee,K,H),Z.add(Ee)}else rt(ue,K,H),Z.add(ue)}),x.pop(),d=null,Z},this.compileAsync=function(S,z,K=null){const Z=this.compile(S,z,K);return new Promise(H=>{function ue(){if(Z.forEach(function(ye){De.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){H(S);return}setTimeout(ue,10)}We.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let sn=null;function Sn(S){sn&&sn(S)}function nc(){oi.stop()}function ic(){oi.start()}const oi=new Hu;oi.setAnimationLoop(Sn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(S){sn=S,Q.setAnimationLoop(S),S===null?oi.stop():oi.start()},Q.addEventListener("sessionstart",nc),Q.addEventListener("sessionend",ic),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,z,R),d=Ke.get(S,x.length),d.init(z),x.push(d),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),L.setFromProjectionMatrix(oe),re=this.localClippingEnabled,W=he.init(this.clippingPlanes,re),m=_e.get(S,y.length),m.init(),y.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ue=b.xr.getDepthSensingMesh();ue!==null&&mo(ue,z,-1/0,b.sortObjects)}mo(S,z,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(J,ee),Le=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Le&&Ue.addToRenderList(m,S),this.info.render.frame++,W===!0&&he.beginShadows();const K=d.state.shadowsArray;be.render(K,S,z),W===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(d.setupLights(),z.isArrayCamera){const ue=z.cameras;if(H.length>0)for(let ye=0,Ee=ue.length;ye<Ee;ye++){const Ae=ue[ye];rc(Z,H,S,Ae)}Le&&Ue.render(S);for(let ye=0,Ee=ue.length;ye<Ee;ye++){const Ae=ue[ye];sc(m,S,Ae,Ae.viewport)}}else H.length>0&&rc(Z,H,S,z),Le&&Ue.render(S),sc(m,S,z);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(b,S,z),ut.resetDefaultState(),M=-1,_=null,x.pop(),x.length>0?(d=x[x.length-1],W===!0&&he.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function mo(S,z,K,Z){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||L.intersectsSprite(S)){Z&&we.setFromMatrixPosition(S.matrixWorld).applyMatrix4(oe);const ye=te.update(S),Ee=S.material;Ee.visible&&m.push(S,ye,Ee,K,we.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||L.intersectsObject(S))){const ye=te.update(S),Ee=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),we.copy(S.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),we.copy(ye.boundingSphere.center)),we.applyMatrix4(S.matrixWorld).applyMatrix4(oe)),Array.isArray(Ee)){const Ae=ye.groups;for(let Fe=0,ze=Ae.length;Fe<ze;Fe++){const Ce=Ae[Fe],Qe=Ee[Ce.materialIndex];Qe&&Qe.visible&&m.push(S,ye,Qe,K,we.z,Ce)}}else Ee.visible&&m.push(S,ye,Ee,K,we.z,null)}}const ue=S.children;for(let ye=0,Ee=ue.length;ye<Ee;ye++)mo(ue[ye],z,K,Z)}function sc(S,z,K,Z){const H=S.opaque,ue=S.transmissive,ye=S.transparent;d.setupLightsView(K),W===!0&&he.setGlobalState(b.clippingPlanes,K),Z&&ke.viewport(T.copy(Z)),H.length>0&&Ks(H,z,K),ue.length>0&&Ks(ue,z,K),ye.length>0&&Ks(ye,z,K),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function rc(S,z,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new pn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Nn:Bn,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ue=d.state.transmissionRenderTarget[Z.id],ye=Z.viewport||T;ue.setSize(ye.z,ye.w);const Ee=b.getRenderTarget();b.setRenderTarget(ue),b.getClearColor(G),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),Le&&Ue.render(K);const Ae=b.toneMapping;b.toneMapping=ei;const Fe=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),W===!0&&he.setGlobalState(b.clippingPlanes,Z),Ks(S,K,Z),P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue),We.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ce=0,Qe=z.length;Ce<Qe;Ce++){const dt=z[Ce],mt=dt.object,Wt=dt.geometry,nt=dt.material,Pe=dt.group;if(nt.side===Tt&&mt.layers.test(Z.layers)){const Tn=nt.side;nt.side=bt,nt.needsUpdate=!0,oc(mt,K,Z,Wt,nt,Pe),nt.side=Tn,nt.needsUpdate=!0,ze=!0}}ze===!0&&(P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue))}b.setRenderTarget(Ee),b.setClearColor(G,q),Fe!==void 0&&(Z.viewport=Fe),b.toneMapping=Ae}function Ks(S,z,K){const Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ue=S.length;H<ue;H++){const ye=S[H],Ee=ye.object,Ae=ye.geometry,Fe=Z===null?ye.material:Z,ze=ye.group;Ee.layers.test(K.layers)&&oc(Ee,z,K,Ae,Fe,ze)}}function oc(S,z,K,Z,H,ue){S.onBeforeRender(b,z,K,Z,H,ue),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(b,z,K,Z,S,ue),H.transparent===!0&&H.side===Tt&&H.forceSinglePass===!1?(H.side=bt,H.needsUpdate=!0,b.renderBufferDirect(K,z,Z,H,S,ue),H.side=ii,H.needsUpdate=!0,b.renderBufferDirect(K,z,Z,H,S,ue),H.side=Tt):b.renderBufferDirect(K,z,Z,H,S,ue),S.onAfterRender(b,z,K,Z,H,ue)}function Zs(S,z,K){z.isScene!==!0&&(z=Ie);const Z=De.get(S),H=d.state.lights,ue=d.state.shadowsArray,ye=H.state.version,Ee=Re.getParameters(S,H.state,ue,z,K),Ae=Re.getProgramCacheKey(Ee);let Fe=Z.programs;Z.environment=S.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(S.isMeshStandardMaterial?Y:w).get(S.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",Be),Fe=new Map,Z.programs=Fe);let ze=Fe.get(Ae);if(ze!==void 0){if(Z.currentProgram===ze&&Z.lightsStateVersion===ye)return lc(S,Ee),ze}else Ee.uniforms=Re.getUniforms(S),S.onBeforeCompile(Ee,b),ze=Re.acquireProgram(Ee,Ae),Fe.set(Ae,ze),Z.uniforms=Ee.uniforms;const Ce=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=he.uniform),lc(S,Ee),Z.needsLights=Qd(S),Z.lightsStateVersion=ye,Z.needsLights&&(Ce.ambientLightColor.value=H.state.ambient,Ce.lightProbe.value=H.state.probe,Ce.directionalLights.value=H.state.directional,Ce.directionalLightShadows.value=H.state.directionalShadow,Ce.spotLights.value=H.state.spot,Ce.spotLightShadows.value=H.state.spotShadow,Ce.rectAreaLights.value=H.state.rectArea,Ce.ltc_1.value=H.state.rectAreaLTC1,Ce.ltc_2.value=H.state.rectAreaLTC2,Ce.pointLights.value=H.state.point,Ce.pointLightShadows.value=H.state.pointShadow,Ce.hemisphereLights.value=H.state.hemi,Ce.directionalShadowMap.value=H.state.directionalShadowMap,Ce.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ce.spotShadowMap.value=H.state.spotShadowMap,Ce.spotLightMatrix.value=H.state.spotLightMatrix,Ce.spotLightMap.value=H.state.spotLightMap,Ce.pointShadowMap.value=H.state.pointShadowMap,Ce.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=ze,Z.uniformsList=null,ze}function ac(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=zr.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function lc(S,z){const K=De.get(S);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Zd(S,z,K,Z,H){z.isScene!==!0&&(z=Ie),P.resetTextureUnits();const ue=z.fog,ye=Z.isMeshStandardMaterial?z.environment:null,Ee=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:hs,Ae=(Z.isMeshStandardMaterial?Y:w).get(Z.envMap||ye),Fe=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ce=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,dt=!!K.morphAttributes.color;let mt=ei;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=b.toneMapping);const Wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,nt=Wt!==void 0?Wt.length:0,Pe=De.get(Z),Tn=d.state.lights;if(W===!0&&(re===!0||S!==_)){const Qt=S===_&&Z.id===M;he.setState(Z,S,Qt)}let it=!1;Z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Tn.state.version||Pe.outputColorSpace!==Ee||H.isBatchedMesh&&Pe.batching===!1||!H.isBatchedMesh&&Pe.batching===!0||H.isBatchedMesh&&Pe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||H.isInstancedMesh&&Pe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pe.instancingMorph===!1&&H.morphTexture!==null||Pe.envMap!==Ae||Z.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==he.numPlanes||Pe.numIntersection!==he.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==ze||Pe.morphTargets!==Ce||Pe.morphNormals!==Qe||Pe.morphColors!==dt||Pe.toneMapping!==mt||Pe.morphTargetsCount!==nt)&&(it=!0):(it=!0,Pe.__version=Z.version);let rn=Pe.currentProgram;it===!0&&(rn=Zs(Z,z,H));let Si=!1,qt=!1,ys=!1;const gt=rn.getUniforms(),mn=Pe.uniforms;if(ke.useProgram(rn.program)&&(Si=!0,qt=!0,ys=!0),Z.id!==M&&(M=Z.id,qt=!0),Si||_!==S){ke.buffers.depth.getReversed()?(X.copy(S.projectionMatrix),Wf(X),Xf(X),gt.setValue(F,"projectionMatrix",X)):gt.setValue(F,"projectionMatrix",S.projectionMatrix),gt.setValue(F,"viewMatrix",S.matrixWorldInverse);const Hn=gt.map.cameraPosition;Hn!==void 0&&Hn.setValue(F,ge.setFromMatrixPosition(S.matrixWorld)),Xe.logarithmicDepthBuffer&&gt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&gt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,qt=!0,ys=!0)}if(H.isSkinnedMesh){gt.setOptional(F,H,"bindMatrix"),gt.setOptional(F,H,"bindMatrixInverse");const Qt=H.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),gt.setValue(F,"boneTexture",Qt.boneTexture,P))}H.isBatchedMesh&&(gt.setOptional(F,H,"batchingTexture"),gt.setValue(F,"batchingTexture",H._matricesTexture,P),gt.setOptional(F,H,"batchingIdTexture"),gt.setValue(F,"batchingIdTexture",H._indirectTexture,P),gt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&gt.setValue(F,"batchingColorTexture",H._colorsTexture,P));const xs=K.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Oe.update(H,K,rn),(qt||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,gt.setValue(F,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mn.envMap.value=Ae,mn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(mn.envMapIntensity.value=z.environmentIntensity),qt&&(gt.setValue(F,"toneMappingExposure",b.toneMappingExposure),Pe.needsLights&&Jd(mn,ys),ue&&Z.fog===!0&&me.refreshFogUniforms(mn,ue),me.refreshMaterialUniforms(mn,Z,U,O,d.state.transmissionRenderTarget[S.id]),zr.upload(F,ac(Pe),mn,P)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zr.upload(F,ac(Pe),mn,P),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&gt.setValue(F,"center",H.center),gt.setValue(F,"modelViewMatrix",H.modelViewMatrix),gt.setValue(F,"normalMatrix",H.normalMatrix),gt.setValue(F,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Qt=Z.uniformsGroups;for(let Hn=0,Gn=Qt.length;Hn<Gn;Hn++){const cc=Qt[Hn];B.update(cc,rn),B.bind(cc,rn)}}return rn}function Jd(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Qd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,z,K){De.get(S.texture).__webglTexture=z,De.get(S.depthTexture).__webglTexture=K;const Z=De.get(S);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,z){const K=De.get(S);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,K=0){R=S,A=z,C=K;let Z=!0,H=null,ue=!1,ye=!1;if(S){const Ae=De.get(S);if(Ae.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(F.FRAMEBUFFER,null),Z=!1;else if(Ae.__webglFramebuffer===void 0)P.setupRenderTarget(S);else if(Ae.__hasExternalTextures)P.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ce=S.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&De.has(Ce)&&(S.width!==Ce.image.width||S.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(S)}}const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const ze=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?H=ze[z][K]:H=ze[z],ue=!0):S.samples>0&&P.useMultisampledRTT(S)===!1?H=De.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[K]:H=ze,T.copy(S.viewport),D.copy(S.scissor),k=S.scissorTest}else T.copy(ce).multiplyScalar(U).floor(),D.copy($).multiplyScalar(U).floor(),k=j;if(ke.bindFramebuffer(F.FRAMEBUFFER,H)&&Z&&ke.drawBuffers(S,H),ke.viewport(T),ke.scissor(D),ke.setScissorTest(k),ue){const Ae=De.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,K)}else if(ye){const Ae=De.get(S.texture),Fe=z||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,K||0,Fe)}M=-1},this.readRenderTargetPixels=function(S,z,K,Z,H,ue,ye){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){ke.bindFramebuffer(F.FRAMEBUFFER,Ee);try{const Ae=S.texture,Fe=Ae.format,ze=Ae.type;if(!Xe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-Z&&K>=0&&K<=S.height-H&&F.readPixels(z,K,Z,H,Ge.convert(Fe),Ge.convert(ze),ue)}finally{const Ae=R!==null?De.get(R).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(S,z,K,Z,H,ue,ye){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){const Ae=S.texture,Fe=Ae.format,ze=Ae.type;if(!Xe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=S.width-Z&&K>=0&&K<=S.height-H){ke.bindFramebuffer(F.FRAMEBUFFER,Ee);const Ce=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),F.readPixels(z,K,Z,H,Ge.convert(Fe),Ge.convert(ze),0);const Qe=R!==null?De.get(R).__webglFramebuffer:null;ke.bindFramebuffer(F.FRAMEBUFFER,Qe);const dt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Vf(F,dt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ce),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer(Ce),F.deleteSync(dt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,z=null,K=0){S.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1]);const Z=Math.pow(2,-K),H=Math.floor(S.image.width*Z),ue=Math.floor(S.image.height*Z),ye=z!==null?z.x:0,Ee=z!==null?z.y:0;P.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,ye,Ee,H,ue),ke.unbindTexture()},this.copyTextureToTexture=function(S,z,K=null,Z=null,H=0){S.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,S=arguments[1],z=arguments[2],H=arguments[3]||0,K=null);let ue,ye,Ee,Ae,Fe,ze,Ce,Qe,dt;const mt=S.isCompressedTexture?S.mipmaps[H]:S.image;K!==null?(ue=K.max.x-K.min.x,ye=K.max.y-K.min.y,Ee=K.isBox3?K.max.z-K.min.z:1,Ae=K.min.x,Fe=K.min.y,ze=K.isBox3?K.min.z:0):(ue=mt.width,ye=mt.height,Ee=mt.depth||1,Ae=0,Fe=0,ze=0),Z!==null?(Ce=Z.x,Qe=Z.y,dt=Z.z):(Ce=0,Qe=0,dt=0);const Wt=Ge.convert(z.format),nt=Ge.convert(z.type);let Pe;z.isData3DTexture?(P.setTexture3D(z,0),Pe=F.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Pe=F.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Pe=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,z.unpackAlignment);const Tn=F.getParameter(F.UNPACK_ROW_LENGTH),it=F.getParameter(F.UNPACK_IMAGE_HEIGHT),rn=F.getParameter(F.UNPACK_SKIP_PIXELS),Si=F.getParameter(F.UNPACK_SKIP_ROWS),qt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze);const ys=S.isDataArrayTexture||S.isData3DTexture,gt=z.isDataArrayTexture||z.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const mn=De.get(S),xs=De.get(z),Qt=De.get(mn.__renderTarget),Hn=De.get(xs.__renderTarget);ke.bindFramebuffer(F.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Gn=0;Gn<Ee;Gn++)ys&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(S).__webglTexture,H,ze+Gn),S.isDepthTexture?(gt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,De.get(z).__webglTexture,H,dt+Gn),F.blitFramebuffer(Ae,Fe,ue,ye,Ce,Qe,ue,ye,F.DEPTH_BUFFER_BIT,F.NEAREST)):gt?F.copyTexSubImage3D(Pe,H,Ce,Qe,dt+Gn,Ae,Fe,ue,ye):F.copyTexSubImage2D(Pe,H,Ce,Qe,dt+Gn,Ae,Fe,ue,ye);ke.bindFramebuffer(F.READ_FRAMEBUFFER,null),ke.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gt?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Pe,H,Ce,Qe,dt,ue,ye,Ee,Wt,nt,mt.data):z.isCompressedArrayTexture?F.compressedTexSubImage3D(Pe,H,Ce,Qe,dt,ue,ye,Ee,Wt,mt.data):F.texSubImage3D(Pe,H,Ce,Qe,dt,ue,ye,Ee,Wt,nt,mt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,Ce,Qe,ue,ye,Wt,nt,mt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,Ce,Qe,mt.width,mt.height,Wt,mt.data):F.texSubImage2D(F.TEXTURE_2D,H,Ce,Qe,ue,ye,Wt,nt,mt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Tn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,it),F.pixelStorei(F.UNPACK_SKIP_PIXELS,rn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Si),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt),H===0&&z.generateMipmaps&&F.generateMipmap(Pe),ke.unbindTexture()},this.copyTextureToTexture3D=function(S,z,K=null,Z=null,H=0){return S.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,S=arguments[2],z=arguments[3],H=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,z,K,Z,H)},this.initRenderTarget=function(S){De.get(S).__webglFramebuffer===void 0&&P.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?P.setTextureCube(S,0):S.isData3DTexture?P.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?P.setTexture2DArray(S,0):P.setTexture2D(S,0),ke.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,ke.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class wi{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(e),this.density=t}clone(){return new wi(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bn extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ey{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bt=new E;class jr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pl extends ri{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bi;const Ss=new E,zi=new E,Hi=new E,Gi=new le,Ts=new le,$u=new tt,xr=new E,Es=new E,_r=new E,oh=new le,Yo=new le,ah=new le;class qu extends Mt{constructor(e=new Pl){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ey(t,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new jr(n,3,0,!1)),Bi.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=Bi,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),$u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Hi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;br(xr.set(-.5,-.5,0),Hi,o,zi,s,r),br(Es.set(.5,-.5,0),Hi,o,zi,s,r),br(_r.set(.5,.5,0),Hi,o,zi,s,r),oh.set(0,0),Yo.set(1,0),ah.set(1,1);let a=e.ray.intersectTriangle(xr,Es,_r,!1,Ss);if(a===null&&(br(Es.set(-.5,.5,0),Hi,o,zi,s,r),Yo.set(0,1),a=e.ray.intersectTriangle(xr,_r,Es,!1,Ss),a===null))return;const l=e.ray.origin.distanceTo(Ss);l<e.near||l>e.far||t.push({distance:l,point:Ss.clone(),uv:tn.getInterpolation(Ss,xr,Es,_r,oh,Yo,ah,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function br(i,e,t,n,s,r){Gi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ts.x=r*Gi.x-s*Gi.y,Ts.y=s*Gi.x+r*Gi.y):Ts.copy(Gi),i.copy(e),i.x+=Ts.x,i.y+=Ts.y,i.applyMatrix4($u)}class ty extends Nt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Jt,h=Jt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vi=new tt,lh=new tt,Mr=[],ch=new Mi,ny=new tt,As=new ne,Cs=new si;class Dn extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ny)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),ch.copy(e.boundingBox).applyMatrix4(Vi),this.boundingBox.union(ch)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vi),Cs.copy(e.boundingSphere).applyMatrix4(Vi),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vi),lh.multiplyMatrices(n,Vi),As.matrixWorld=lh,As.raycast(e,Mr);for(let o=0,a=Mr.length;o<a;o++){const l=Mr[o];l.instanceId=r,l.object=this,t.push(l)}Mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ty(new Float32Array(s*this.count),s,this.count,bl,yn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Il extends ri{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kr=new E,Zr=new E,hh=new tt,Rs=new oo,wr=new si,$o=new E,uh=new E;class ju extends Mt{constructor(e=new ht,t=new Il){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Kr.fromBufferAttribute(t,s-1),Zr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Kr.distanceTo(Zr);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;hh.copy(s).invert(),Rs.copy(e.ray).applyMatrix4(hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=h.getX(v),y=h.getX(v+1),x=Sr(this,e,Rs,l,d,y);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),d=Sr(this,e,Rs,l,v,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const d=Sr(this,e,Rs,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){const v=Sr(this,e,Rs,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sr(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Kr.fromBufferAttribute(o,s),Zr.fromBufferAttribute(o,r),t.distanceSqToSegment(Kr,Zr,$o,uh)>n)return;$o.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo($o);if(!(l<e.near||l>e.far))return{distance:l,point:uh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const dh=new E,fh=new E;class iy extends ju{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dh.fromBufferAttribute(t,s),fh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dh.distanceTo(fh);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class es extends ri{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ph=new tt,nl=new oo,Tr=new si,Er=new E;class Us extends Mt{constructor(e=new ht,t=new es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(s),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;ph.copy(s).invert(),nl.copy(e.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Er.fromBufferAttribute(u,m),mh(Er,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Er.fromBufferAttribute(u,g),mh(Er,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mh(i,e,t,n,s,r,o){const a=nl.distanceSqToPoint(i);if(a<t){const l=new E;nl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Mn extends Nt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,s=[],r=[],o=[],a=new E,l=new tt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Rt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Rt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ll extends wn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sy extends Ll{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ar=new E,qo=new Dl,jo=new Dl,Ko=new Dl;class kl extends wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new E){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ar.subVectors(s[0],s[1]).add(s[0]),c=Ar);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ar.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),qo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),jo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Ko.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(qo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),jo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ko.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(qo.calc(l),jo.calc(l),Ko.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new E().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function ry(i,e){const t=1-i;return t*t*e}function oy(i,e){return 2*(1-i)*i*e}function ay(i,e){return i*i*e}function Ns(i,e,t,n){return ry(i,e)+oy(i,t)+ay(i,n)}function ly(i,e){const t=1-i;return t*t*t*e}function cy(i,e){const t=1-i;return 3*t*t*i*e}function hy(i,e){return 3*(1-i)*i*i*e}function uy(i,e){return i*i*i*e}function Os(i,e,t,n,s){return ly(i,e)+cy(i,t)+hy(i,n)+uy(i,s)}class Ku extends wn{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(e,s.x,r.x,o.x,a.x),Os(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dy extends wn{constructor(e=new E,t=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Os(e,s.x,r.x,o.x,a.x),Os(e,s.y,r.y,o.y,a.y),Os(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zu extends wn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fy extends wn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ju extends wn{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(e,s.x,r.x,o.x),Ns(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qu extends wn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ns(e,s.x,r.x,o.x),Ns(e,s.y,r.y,o.y),Ns(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ed extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(gh(a,l.x,c.x,h.x,u.x),gh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new le().fromArray(s))}return this}}var il=Object.freeze({__proto__:null,ArcCurve:sy,CatmullRomCurve3:kl,CubicBezierCurve:Ku,CubicBezierCurve3:dy,EllipseCurve:Ll,LineCurve:Zu,LineCurve3:fy,QuadraticBezierCurve:Ju,QuadraticBezierCurve3:Qu,SplineCurve:ed});class py extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new il[s.type]().fromJSON(s))}return this}}class my extends py{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Zu(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ju(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Ku(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ed(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Ll(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gs extends ht{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Rt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new E,f=new le,p=new E,g=new E,v=new E;let m=0,d=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,d=e[y+1].y-e[y].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=t;y++){const x=n+y*h*s,b=Math.sin(x),I=Math.cos(x);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*b,u.y=e[A].y,u.z=e[A].x*I,o.push(u.x,u.y,u.z),f.x=y/t,f.y=A/(e.length-1),a.push(f.x,f.y);const C=l[3*A+0]*b,R=l[3*A+1],M=l[3*A+0]*I;c.push(C,R,M)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const b=x+y*e.length,I=b,A=b+e.length,C=b+e.length+1,R=b+1;r.push(I,A,R),r.push(C,R,A)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.points,e.segments,e.phiStart,e.phiLength)}}class Ul extends Gs{constructor(e=1,t=1,n=4,s=8){const r=new my;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Ul(e.radius,e.length,e.capSegments,e.radialSegments)}}class Fn extends ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new E,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vt extends ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(p,2));function y(){const b=new E,I=new E;let A=0;const C=(t-e)/n;for(let R=0;R<=r;R++){const M=[],_=R/r,T=_*(t-e)+e;for(let D=0;D<=s;D++){const k=D/s,G=k*l+a,q=Math.sin(G),N=Math.cos(G);I.x=T*q,I.y=-_*n+m,I.z=T*N,u.push(I.x,I.y,I.z),b.set(q,C,N).normalize(),f.push(b.x,b.y,b.z),p.push(k,1-_),M.push(g++)}v.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){const _=v[M][R],T=v[M+1][R],D=v[M+1][R+1],k=v[M][R+1];(e>0||M!==0)&&(h.push(_,T,k),A+=3),(t>0||M!==r-1)&&(h.push(T,D,k),A+=3)}c.addGroup(d,A,0),d+=A}function x(b){const I=g,A=new le,C=new E;let R=0;const M=b===!0?e:t,_=b===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*_,0),f.push(0,_,0),p.push(.5,.5),g++;const T=g;for(let D=0;D<=s;D++){const G=D/s*l+a,q=Math.cos(G),N=Math.sin(G);C.x=M*N,C.y=m*_,C.z=M*q,u.push(C.x,C.y,C.z),f.push(0,_,0),A.x=q*.5+.5,A.y=N*.5*_+.5,p.push(A.x,A.y),g++}for(let D=0;D<s;D++){const k=I+D,G=T+D;b===!0?h.push(G,G+1,k):h.push(G+1,G,k),R+=3}c.addGroup(d,R,b===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dn extends Vt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new dn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lo extends ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new $e(r,3)),this.setAttribute("normal",new $e(r.slice(),3)),this.setAttribute("uv",new $e(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new E,b=new E,I=new E;for(let A=0;A<t.length;A+=3)p(t[A+0],x),p(t[A+1],b),p(t[A+2],I),l(x,b,I,y)}function l(y,x,b,I){const A=I+1,C=[];for(let R=0;R<=A;R++){C[R]=[];const M=y.clone().lerp(b,R/A),_=x.clone().lerp(b,R/A),T=A-R;for(let D=0;D<=T;D++)D===0&&R===A?C[R][D]=M:C[R][D]=M.clone().lerp(_,D/T)}for(let R=0;R<A;R++)for(let M=0;M<2*(A-R)-1;M++){const _=Math.floor(M/2);M%2===0?(f(C[R][_+1]),f(C[R+1][_]),f(C[R][_])):(f(C[R][_+1]),f(C[R+1][_+1]),f(C[R+1][_]))}}function c(y){const x=new E;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(y),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function h(){const y=new E;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const b=m(y)/2/Math.PI+.5,I=d(y)/Math.PI+.5;o.push(b,1-I)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],b=o[y+2],I=o[y+4],A=Math.max(x,b,I),C=Math.min(x,b,I);A>.9&&C<.1&&(x<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),I<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){const b=y*3;x.x=e[b+0],x.y=e[b+1],x.z=e[b+2]}function g(){const y=new E,x=new E,b=new E,I=new E,A=new le,C=new le,R=new le;for(let M=0,_=0;M<r.length;M+=9,_+=6){y.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),A.set(o[_+0],o[_+1]),C.set(o[_+2],o[_+3]),R.set(o[_+4],o[_+5]),I.copy(y).add(x).add(b).divideScalar(3);const T=m(I);v(A,_+0,y,T),v(C,_+2,x,T),v(R,_+4,b,T)}}function v(y,x,b,I){I<0&&y.x===1&&(o[x]=y.x-1),b.x===0&&b.z===0&&(o[x]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.vertices,e.indices,e.radius,e.details)}}class Nl extends lo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nl(e.radius,e.detail)}}class Ol extends ht{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/s,p=new E,g=new le;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let d=0;d<n;d++){const y=d+m,x=y,b=y+n+1,I=y+n+2,A=y+1;a.push(x,b,A),a.push(b,I,A)}}this.setIndex(a),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class st extends ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,f=new E,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let b=0;d===0&&o===0?b=.5/t:d===n&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const A=I/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(A+b,1-x),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const x=h[d][y+1],b=h[d][y],I=h[d+1][y],A=h[d+1][y+1];(d!==0||o>0)&&p.push(x,b,A),(d!==n-1||l<Math.PI)&&p.push(b,I,A)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(v,3)),this.setAttribute("uv",new $e(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fl extends lo{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fl(e.radius,e.detail)}}class Ut extends ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new E,u=new E,f=new E;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const v=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,y=(s+1)*p+g;o.push(v,m,y),o.push(m,d,y)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class co extends ht{constructor(e=new Qu(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new le;let h=new E;const u=[],f=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(p,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),d()}function m(x){h=e.getPointAt(x/t,h);const b=o.normals[x],I=o.binormals[x];for(let A=0;A<=s;A++){const C=A/s*Math.PI*2,R=Math.sin(C),M=-Math.cos(C);l.x=M*b.x+R*I.x,l.y=M*b.y+R*I.y,l.z=M*b.z+R*I.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=t;x++)for(let b=1;b<=s;b++){const I=(s+1)*(x-1)+(b-1),A=(s+1)*x+(b-1),C=(s+1)*x+b,R=(s+1)*(x-1)+b;g.push(I,A,R),g.push(A,C,R)}}function y(){for(let x=0;x<=t;x++)for(let b=0;b<=s;b++)c.x=x/t,c.y=b/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new co(new il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class gy extends kt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ze extends ri{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pu,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vy extends Ze{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bl extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zo=new tt,vh=new E,yh=new E;class td{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xh=new tt,Ps=new E,Jo=new E;class yy extends td{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),Jo.copy(n.position),Jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jo),n.updateMatrixWorld(),s.makeTranslation(-Ps.x,-Ps.y,-Ps.z),xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh)}}class Ot extends Bl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xy extends td{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jr extends Bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fs extends Bl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _y{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_h();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _h(){return performance.now()}const bh=new tt;class $s{constructor(e,t,n=0,s=1/0){this.ray=new oo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,t=!0,n=[]){return sl(e,this,n,t),n.sort(Mh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sl(e[s],this,n,t);return n.sort(Mh),n}}function Mh(i,e){return i.distance-e.distance}function sl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)sl(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);const wh=[.04,.08,.22,.4,.58,.74,.88,1],by=[0,.04,.08,.14,.22,.32,.46,.64,.84,1],Qn=i=>Math.min(1,wh[Math.min(wh.length-1,i.sleeps)]+.55*by[Math.min(9,Math.max(0,i.feeds))]),Sh=i=>i<.2?"deadpan":i<.55?"uncanny":"wild",My=i=>.35+.95*i,wy=i=>70-55*i,Sy={deadpan:["The hold is a hold. It holds.","A pipe ticks. It ticked yesterday.","Halcyon Reclamation has sent a cheerful reminder about your debt. It is the same reminder.","Somewhere a fan turns. You have decided it is the good fan.","Day after day, the junk is still junk."],uncanny:["The lights flicker. Not at random. Like a sentence.","You hear footsteps in a ship with one occupant.","The vault hums a note you were thinking of.","The cube is facing a different way than you left it.","The corridor feels slightly longer on the way back."],wild:["The floor is a ceiling for a moment, then apologises.","You count four doors in a two-door room. They count you back.","Every shadow has a small face, and all of them are listening.","The ship is larger on the inside than the outside, and getting larger.","Your hands remember things you have not done yet."]},qs=["Happy","Worried","Grumpy","Sleepy","Curious","Scared"],nd=["Bold","Shy","Weird"],rl=["glow","spikes","fluff","drip","stripes","bellyface","halo","horns"],Qr=6,zl=4,Hl=6;function Ty(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ey(i,e,t){const n=s=>{const r=(s+i*12)%12,o=e*Math.min(t,1-t);return t-o*Math.max(-1,Math.min(r-3,Math.min(9-r,1)))};return Math.round(n(0)*255)<<16|Math.round(n(8)*255)<<8|Math.round(n(4)*255)}function Gl(i,e){const t=e(),[n,s]=i<=-1?[.7,.75]:i>=1?[.85,.38]:[.95,.55];return Ey(i<=-2?.1+t*.08:t,n,s)}function Ay(i,e){const t=Math.max(-3,Math.min(3,Math.round((e()*2-1)*3)));return{id:i,name:`Spore ${i+1}`,anatomy:{bodyShape:Math.floor(e()*Qr),outlineWeight:1+Math.floor(e()*3),eyeSet:Math.floor(e()*zl),mouthSet:Math.floor(e()*Hl),signatureTrait:rl[Math.floor(e()*rl.length)],colour:Gl(t,e)},tone:{alignment:t,uncanny:Math.floor(e()*4)},personality:Math.floor(e()*nd.length),mood:Math.floor(e()*qs.length),history:[]}}function ol(i,e=7){const t=Ty(e);return Array.from({length:i},(n,s)=>{const r=Ay(s,t);return r.mood=s%qs.length,r.tone.alignment=s*5%7-3,r.anatomy.colour=Gl(r.tone.alignment,t),r.anatomy.bodyShape=s%Qr,r})}const Cy=i=>[1.3,2.4,1.6,.5,1.8,3.2][i],Ry={skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0};function zn(i){const e=i.profile??Ry,t=i.stats.clean+i.stats.shatters,n=t?i.stats.shatters/t:0,s=t>=4&&n>=.35||e.hullHits>=3?"greedy":t>=4&&n<=.2&&e.hullHits<=1?"careful":"balanced",r=e.skips>=2||e.maxFatigue>=90?"sleepless":i.sleeps>=2&&e.skips===0?"rested":"steady";return{cube:i.cubeChoice==="kept"||i.cubeChoice==="jettisoned"?i.cubeChoice:"",nights:i.sleeps,skippedSleeps:e.skips,maxFatigue:Math.round(e.maxFatigue),clean:i.stats.clean,shatters:i.stats.shatters,hullHits:e.hullHits,trips:i.stats.trips,logsRead:e.logsRead,seconds:Math.round(e.seconds),debtPaid:1e3-i.debt,debtLeft:i.debt,rare:i.stats.rare,style:s,sleeper:r,reader:e.logsRead>=4}}function ho(i){const e=[];i.cube==="jettisoned"?e.push("stubborn"):i.cube==="kept"&&e.push("loyal"),i.sleeper==="sleepless"?e.push("sleepless"):i.sleeper==="rested"&&e.push("well-rested"),i.style==="greedy"?e.push("reckless"):i.style==="careful"&&e.push("careful"),i.reader&&e.push("curious"),i.debtLeft>500&&e.push("indebted");const n=`a ${(e.length?e.slice(0,2):["ordinary"]).join(", ")} creature`,s=[i.cube==="jettisoned"?"You threw the cube out and it came back anyway.":i.cube==="kept"?"You kept the cube when it opened its eye.":"You never quite decided about the cube.",i.sleeper==="sleepless"?`You skipped sleep ${i.skippedSleeps} time${i.skippedSleeps===1?"":"s"} and it shows.`:i.sleeper==="rested"?`You slept ${i.nights} nights, regular as a clock.`:i.nights===0?"You never slept. The bunk is still made.":`You slept ${i.nights} night${i.nights===1?"":"s"}.`,i.style==="greedy"?`You shattered ${i.shatters} haul${i.shatters===1?"":"s"} chasing more.`:i.style==="careful"?`${i.clean} clean hauls, patient hands.`:`${i.clean} clean hauls and ${i.shatters} that did not go to plan.`,i.reader?`You read ${i.logsRead} logs, which most people would not have.`:"You left most of the logs unread.",`Halcyon Reclamation still wants ${i.debtLeft} cr.`];return{name:n,description:s.join(" ")}}const Py={greedy:["spikes","horns"],careful:["halo","fluff"],balanced:["stripes","glow"],sleepless:["glow","drip"],rested:["fluff","stripes"],steady:["bellyface","stripes"],jettisoned:["horns","bellyface"],kept:["halo","bellyface"],undecided:["drip","fluff"],reader:["stripes","glow"]},Iy={greedy:["Grumpy","Curious"],careful:["Happy","Curious"],balanced:["Curious","Happy"],sleepless:["Sleepy","Grumpy"],rested:["Happy","Happy"],steady:["Curious","Worried"],jettisoned:["Worried","Scared"],kept:["Happy","Curious"],undecided:["Worried","Curious"],reader:["Curious","Curious"]},Ly={greedy:1,careful:0,balanced:3,sleepless:2,rested:0,steady:3,jettisoned:1,kept:0,undecided:2,reader:3},Dy={greedy:4,careful:1,balanced:2,sleepless:5,rested:0,steady:2,jettisoned:3,kept:0,undecided:5,reader:1},ky={greedy:3,careful:0,balanced:1};function id(i,e){const t=[e.style,e.sleeper,e.cube||"undecided",...e.reader?["reader"]:[]],n=(e.debtPaid*31+e.nights*97+e.clean*13+e.shatters*29+e.hullHits*53+e.logsRead*7+e.skippedSleeps*19)%1e3/1e3;return i.forEach((s,r)=>{s.playerProfile=e;const o=t[r%t.length],a=Math.floor(r/t.length);s.anatomy.signatureTrait=Py[o][a%2],s.mood=Math.max(0,qs.indexOf(Iy[o][a%2])),s.anatomy.eyeSet=Ly[o],s.anatomy.mouthSet=Dy[o],s.anatomy.outlineWeight=Math.max(1,Math.min(3,1+Math.floor(e.hullHits/2)+(e.style==="greedy"?1:0))),s.anatomy.bodyShape=(r+ky[e.style])%6,s.tone.alignment=Math.max(-3,Math.min(3,s.tone.alignment+(e.cube==="kept"?-1:e.cube==="jettisoned"?1:0))),s.anatomy.colour=Gl(s.tone.alignment,()=>(n+r*.083)%1),s.history.push({type:"player:"+o})}),i}const qi=(i,e,t=1)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t],sd=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],al=(i,e)=>Math.hypot(i[0]-e[0],i[1]-e[1],i[2]-e[2]);function Uy(i,e,t=1){let n=t;const s=()=>(n=n*16807%2147483647)/2147483647;return Array.from({length:i},(r,o)=>({p:[e.x0+s()*(e.x1-e.x0),e.y0+s()*(e.y1-e.y0)*.5,e.z0+s()*(e.z1-e.z0)],v:[0,0,0],mode:["cluster","hide","follow"][o%3],t:s()*10,seed:s()}))}function Ny(i,e,t){if(i.mode==="flee"&&e.fleeFrom){const n=sd(i.p,e.fleeFrom),s=Math.max(.01,Math.hypot(...n));return qi(i.p,n,2/s)}return i.mode==="light"&&e.light?qi(e.light,[Math.sin(i.t*3+t)*.4,-.3,Math.cos(i.t*3+t)*.4]):i.mode==="hide"&&e.pipes.length?e.pipes[t%e.pipes.length]:i.mode==="follow"?qi(e.player,[Math.sin(t*1.7)*.7,-1,-1.9+Math.cos(t)*.3]):qi(e.cluster,[Math.sin(t*2.1+i.t)*.5,Math.abs(Math.sin(i.t*2+t))*.25,Math.cos(t*1.3+i.t)*.5])}function Oy(i,e,t){i.forEach((n,s)=>{n.t+=e,n.mode==="flee"&&n.t>1.6&&(n.mode=["cluster","hide","follow"][Math.floor(n.seed*3)]);const r=Ny(n,t,s),o=sd(r,n.p),a=n.mode==="flee"?3.2:1.1;n.v=qi(n.v,o,Math.min(1,e*a)),n.v=[n.v[0]*.9,n.v[1]*.9,n.v[2]*.9],n.p=qi(n.p,n.v,e*2);const l=t.box;n.p=[Math.min(l.x1,Math.max(l.x0,n.p[0])),Math.min(l.y1,Math.max(l.y0,n.p[1])),Math.min(l.z1,Math.max(l.z0,n.p[2]))]})}function Qo(i,e,t=2.5){let n=0;for(const s of i)al(s.p,e)<t&&(s.mode="flee",s.t=0,n++);return n}function Th(i,e){i.forEach((t,n)=>{t.mode=n%2?"light":"flee",t.t=0})}const Fy=(i,e)=>i<3?0:Math.min(22,Math.round(2+(i-2)*2+e*6));function By(i,e){const t=Math.max(0,e-.15)/.85;return{mugScale:1+2.4*Math.max(0,t-.1),bunkScale:1-.45*Math.max(0,t-.25),growth:Math.max(0,Math.min(1,(t-.2)*1.4)),podShuffle:t>.15?i:0,tilt:t>.45?.07*Math.min(1,(t-.45)*2.5):0,wrongDoor:t>.8}}const Vs={period:3200,danger:1400},ea={hull:6,power:4},uo=(i,e)=>((e+(i.offset??0))%i.period+i.period)%i.period,ps=(i,e)=>uo(i,e)<i.danger,zy=(i,e)=>ps(i,e)?i.danger-uo(i,e):0,Hy=(i,e)=>ps(i,e)?0:i.period-uo(i,e),Gy=(i,e)=>{const t=uo(i,e);return t<i.danger?.6+.4*Math.sin(t/i.danger*Math.PI):.08};function Vy(i,e,t=0){return{shocked:ps(i,e)||t>0&&Hy(i,e)<t}}const Wy=(i,e)=>({hull:Math.max(0,i.hull-e.hull),power:Math.max(0,i.power-e.power)});class Xy{constructor(){V(this,"ctx",null);V(this,"master");V(this,"engineGain");V(this,"engineFilt");V(this,"humGain");V(this,"verb");V(this,"verbSend");V(this,"droneFilt",null);V(this,"ventGain",null);V(this,"droneGain",null);V(this,"played",{});V(this,"chargeOsc",null);V(this,"chargeGain",null);V(this,"noiseBuf");V(this,"muted",(()=>{try{return localStorage.getItem("starburn-mute")==="1"}catch{return!1}})());V(this,"silenced",!1)}unlock(){try{if(!this.ctx){const t=globalThis.AudioContext||globalThis.webkitAudioContext;if(!t)return;const n=this.ctx=new t;this.master=n.createGain(),this.master.gain.value=this.muted?0:.8;const s=n.createDynamicsCompressor();s.threshold.value=-18,s.ratio.value=4,this.master.connect(s),s.connect(n.destination),this.verb=n.createConvolver();const r=Math.floor(n.sampleRate*1.8),o=n.createBuffer(2,r,n.sampleRate);for(let p=0;p<2;p++){const g=o.getChannelData(p);for(let v=0;v<r;v++)g[v]=(Math.random()*2-1)*Math.pow(1-v/r,3.2)*(v%1200<30?1.6:1)}this.verb.buffer=o,this.verbSend=n.createGain(),this.verbSend.gain.value=.28,this.verbSend.connect(this.verb),this.verb.connect(this.master),this.humGain=n.createGain(),this.humGain.gain.value=.07;const a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=220,this.humGain.connect(a),a.connect(this.master);for(const p of[55,55.8,110.4]){const g=n.createOscillator();g.type=p>100?"triangle":"sine",g.frequency.value=p;const v=n.createGain();v.gain.value=p>100?.25:1,g.connect(v),v.connect(this.humGain),g.start()}const l=n.createOscillator();l.frequency.value=.15;const c=n.createGain();c.gain.value=.02,l.connect(c),c.connect(this.humGain.gain),l.start();const h=n.sampleRate*2;this.noiseBuf=n.createBuffer(1,h,n.sampleRate);const u=this.noiseBuf.getChannelData(0);for(let p=0;p<h;p++)u[p]=Math.random()*2-1;const f=n.createBufferSource();f.buffer=this.noiseBuf,f.loop=!0,this.engineFilt=n.createBiquadFilter(),this.engineFilt.type="lowpass",this.engineFilt.frequency.value=160,this.engineGain=n.createGain(),this.engineGain.gain.value=0,f.connect(this.engineFilt),this.engineFilt.connect(this.engineGain),this.engineGain.connect(this.master),f.start()}const e=this.ctx;e.state==="suspended"&&e.resume()}catch{}}setMuted(e){this.muted=e;try{localStorage.setItem("starburn-mute",e?"1":"0")}catch{}this.ctx&&this.master.gain.setTargetAtTime(e?0:.8,this.ctx.currentTime,.03)}toggle(){return this.setMuted(!this.muted),this.muted}get ok(){return!!this.ctx&&!this.muted}engine(e,t=!0){if(!this.ctx)return;const n=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(t?e*.35:0,n,.08),this.engineFilt.frequency.setTargetAtTime(140+e*500,n,.1),this.humGain.gain.setTargetAtTime(t?.04:.07,n,.3)}blip(e,t=.12,n="sine",s=.15,r,o=0){if(!this.ok)return;const a=this.ctx,l=a.currentTime+o,c=a.createOscillator(),h=a.createGain();c.type=n,c.frequency.setValueAtTime(e,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+t),h.gain.setValueAtTime(s,l),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(this.master),h.connect(this.verbSend),c.start(l),c.stop(l+t+.02)}noise(e=.3,t=.3,n=1200){if(!this.ok)return;const s=this.ctx,r=s.currentTime,o=s.createBufferSource(),a=s.createBiquadFilter(),l=s.createGain();o.buffer=this.noiseBuf,a.type="bandpass",a.frequency.value=n,l.gain.setValueAtTime(t,r),l.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a),a.connect(l),l.connect(this.master),l.connect(this.verbSend),o.start(r,Math.random()),o.stop(r+e+.02)}chargeTone(e,t=!1){if(!this.ctx)return;const n=this.ctx;if(e===null){this.chargeOsc&&(this.chargeGain.gain.setTargetAtTime(0,n.currentTime,.02),this.chargeOsc.stop(n.currentTime+.1),this.chargeOsc=null);return}this.chargeOsc||(this.chargeOsc=n.createOscillator(),this.chargeGain=n.createGain(),this.chargeOsc.type="triangle",this.chargeGain.gain.value=0,this.chargeOsc.connect(this.chargeGain),this.chargeGain.connect(this.master),this.chargeOsc.start()),this.chargeOsc.frequency.setTargetAtTime(220+e*520+(t?120:0),n.currentTime,.02),this.chargeGain.gain.setTargetAtTime(this.muted?0:t?.09:.05,n.currentTime,.02)}lock(){this.blip(660,.06,"square",.07),this.blip(990,.08,"square",.06,void 0,.06)}clean(){[523,659,784,1046].forEach((e,t)=>this.blip(e,.18,"triangle",.14,void 0,t*.06))}shatter(){this.noise(.45,.45,900),this.blip(140,.3,"sawtooth",.18,40)}rare(){[392,523,659,784,988].forEach((e,t)=>this.blip(e,.3,"sine",.12,void 0,t*.09))}click(){this.blip(440,.04,"square",.05)}door(){this.noise(.4,.15,400),this.blip(90,.35,"sine",.2,60)}warn(){this.blip(200,.15,"sawtooth",.1),this.blip(160,.2,"sawtooth",.1,void 0,.15)}burst(){this.noise(.9,.5,600),this.blip(60,.8,"sine",.35,30),[300,450,600,900].forEach((e,t)=>this.blip(e,.4,"sine",.1,e*1.5,.3+t*.08))}merge(){[330,440,554,660,880].forEach((e,t)=>this.blip(e,.35,"triangle",.13,void 0,t*.07))}hallucinate(){const e=Math.floor(Math.random()*3);e===0?[0,.22,.44].forEach(t=>this.blip(95,.07,"square",.1,70,t)):e===1?this.noise(.9,.12,2600):(this.blip(740,.6,"sine",.05,700),this.blip(698,.6,"sine",.04,660,.15))}sting(){this.noise(.5,.5,300),this.blip(55,.6,"sawtooth",.35,28),this.blip(880,.12,"square",.12,220,.02),this.blip(110,.4,"square",.15,55,.12)}zap(){this.noise(.35,.5,2400),this.blip(70,.4,"sawtooth",.3,40)}silence(e,t=.25){this.silenced=e,this.ctx&&this.master.gain.setTargetAtTime(e||this.muted?0:.8,this.ctx.currentTime,t)}groan(e=.28){const t=this.ctx;if(!t)return;const n=t.currentTime,s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=260,s.Q.value=6,s.connect(this.master);for(const[r,o]of[[72,31],[75,33]]){const a=t.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(r,n),a.frequency.exponentialRampToValueAtTime(o,n+2.2);const l=t.createGain();l.gain.setValueAtTime(1e-4,n),l.gain.exponentialRampToValueAtTime(e,n+.4),l.gain.exponentialRampToValueAtTime(1e-4,n+2.4),a.connect(l),l.connect(s),a.start(n),a.stop(n+2.5)}this.noise(1.6,.12,180)}hit(){this.blip(38,1.4,"sine",.5,22),this.sting(),this.noise(1.2,.35,120),this.blip(1760,.25,"sawtooth",.06,440,.05)}ambience(e){const t=this.ctx;if(!t)return;const n=t.currentTime;if(!this.droneFilt){this.droneGain=t.createGain(),this.droneGain.gain.value=0,this.droneFilt=t.createBiquadFilter(),this.droneFilt.type="lowpass",this.droneFilt.frequency.value=120,this.droneFilt.Q.value=3;const l=t.createOscillator();l.type="sawtooth",l.frequency.value=36.7;const c=t.createGain();c.gain.value=.35,l.connect(c),c.connect(this.droneFilt),l.start();const h=t.createBufferSource();h.buffer=this.noiseBuf,h.loop=!0,h.connect(this.droneFilt),h.start();const u=t.createOscillator();u.frequency.value=.07;const f=t.createGain();f.gain.value=40,u.connect(f),f.connect(this.droneFilt.frequency),u.start(),this.droneFilt.connect(this.droneGain),this.droneGain.connect(this.master),this.droneGain.connect(this.verbSend),this.ventGain=t.createGain(),this.ventGain.gain.value=0;const p=t.createBiquadFilter();p.type="bandpass",p.frequency.value=2400,p.Q.value=.7;const g=t.createBufferSource();g.buffer=this.noiseBuf,g.loop=!0,g.playbackRate.value=.9,g.connect(p),p.connect(this.ventGain),this.ventGain.connect(this.master),g.start()}const s={engine:[.16,170,.008],mining:[.07,110,.006],bed:[.05,90,.004],transmog:[.08,130,.014],fly:[.03,90,0],off:[0,90,0]},[r,o,a]=s[e]??s.mining;this.droneGain.gain.setTargetAtTime(r,n,.8),this.droneFilt.frequency.setTargetAtTime(o,n,.8),this.ventGain.gain.setTargetAtTime(a,n,.8),this.played.ambience=(this.played.ambience??0)+1}ventGiggle(){if(!this.ok)return;this.played.giggle=(this.played.giggle??0)+1;const e=this.ctx,t=e.currentTime,n=e.createBufferSource(),s=e.createBiquadFilter(),r=e.createGain(),o=e.createOscillator(),a=e.createGain();n.buffer=this.noiseBuf,s.type="bandpass",s.frequency.value=3200,s.Q.value=4,r.gain.setValueAtTime(1e-4,t),r.gain.linearRampToValueAtTime(.05,t+.05),r.gain.exponentialRampToValueAtTime(1e-4,t+.9),o.frequency.value=11,a.gain.value=.04,o.connect(a),a.connect(r.gain),n.connect(s),s.connect(r),r.connect(this.verbSend),r.connect(this.master),n.start(t,Math.random()),n.stop(t+1),o.start(t),o.stop(t+1),[0,.13,.24,.33].forEach((l,c)=>this.blip(1400+c*180+Math.random()*200,.09,"sine",.035,1900+c*150,.1+l))}hullGroan(){this.ok&&(this.played.groan=(this.played.groan??0)+1,this.groan(.1),this.blip(48,1.6,"sine",.06,41,.2))}ping(){this.blip(1320,.5,"sine",.1,1320),this.blip(1320,.5,"sine",.06,1320,.55)}}const de=new Xy;let In=null,Eh=0;function yt(i,e=3200){In||(In=document.createElement("div"),In.id="room-toast",Object.assign(In.style,{position:"fixed",left:"50%",bottom:"52px",transform:"translateX(-50%)",maxWidth:"70vw",background:"rgba(5,10,16,.88)",border:"1px solid #8a9aa8",color:"#dfe8f0",font:"14px monospace",padding:"8px 14px",zIndex:"9",pointerEvents:"none",display:"none",textAlign:"center"}),document.body.appendChild(In)),In.textContent=i,In.style.display="block",clearTimeout(Eh),Eh=window.setTimeout(()=>{In&&(In.style.display="none")},e)}const rd=["patch","boost","rest"],Yy=["crate","lights","ladder","pods"],$y=i=>rd.includes(i),Vl=i=>(i.sporeKind??0)+2*(i.sporeFed??0)-2*(i.sporeRough??0),qy=i=>(i.style==="careful"?1:i.style==="greedy"?-1:0)+(i.cube==="kept"?1:i.cube==="jettisoned"?-1:0)+(i.sleeper==="rested"?1:i.sleeper==="sleepless"?-1:0);function jy(i,e,t){const n=.55+.06*Math.max(-5,Math.min(5,i))+.07*e-.3*t;return Math.max(.12,Math.min(.88,n))}function Ky(i,e,t,n,s,r){if(i<jy(t,n,s)){const a=rd.filter(l=>l!=="patch"||r.hull<100||r.oxygen<100).filter(l=>l!=="rest"||r.fatigue>0);return(a.length?a:["boost"])[Math.floor(e*(a.length||1))]}const o=Yy.filter(a=>a!=="crate"||r.crates>0);return o[Math.floor(e*o.length)]}function ta(i,e){return i==="poke"?e?{sporeRough:1}:{sporeKind:1}:i==="feed"?e?{sporeFed:1,sporeKind:1}:{sporeFed:1}:{sporeKind:1}}const na=8,Ah=12,Is={mining:{box:{x0:-1.2,x1:1.2,y0:.3,y1:2,z0:-1.6,z1:2.4},cluster:[.6,.95,-1.2],pipes:[[.75,1.9,1],[-.75,1.92,.4]],light:[0,2.1,1.2],wallZ:-1,wallX:[-.9,.9],wallY:[1.4,1.9]},bed:{box:{x0:-1.6,x1:1.55,y0:.08,y1:1.85,z0:-2.35,z1:.8},cluster:[0,.12,-.9],pipes:[[1.6,1.25,-1.5],[1.6,.55,-.6],[1.6,1.7,-.5]],light:[0,1.85,0],wallZ:-2.44,wallX:[-1.6,1],wallY:[1.35,1.8]},transmog:{box:{x0:-2.3,x1:2.3,y0:.1,y1:3.4,z0:-6,z1:2.4},cluster:[1,1,.2],pipes:[[1.5,1.55,-3.3],[-1.5,1.55,-4.55],[1.2,3.5,-2]],light:[0,3.8,-2.5],wallZ:-6.9,wallX:[-2,2],wallY:[2.4,3.6]},engine:{box:{x0:-2.3,x1:2.3,y0:.1,y1:1.9,z0:-2.3,z1:1.4},cluster:[1.6,.75,-.75],pipes:[[-2,1.7,-2.3],[2.2,1.7,-2]],light:[0,1.2,-.75],wallZ:-2.44,wallX:[-1.5,2.2],wallY:[.4,1]}},Ch=["spore","sun","heart","HI","YOU","star"];function Zy(i,e){const t=document.createElement("canvas");t.width=t.height=128;const n=t.getContext("2d");if(n.strokeStyle=e,n.fillStyle=e,n.lineWidth=6,n.lineCap="round",n.shadowColor=e,n.shadowBlur=10,i==="spore")n.beginPath(),n.arc(64,70,34,0,7),n.stroke(),n.beginPath(),n.arc(52,64,5,0,7),n.arc(76,64,5,0,7),n.fill(),n.beginPath(),n.arc(64,78,12,.2,Math.PI-.2),n.stroke();else if(i==="sun"){n.beginPath(),n.arc(64,64,22,0,7),n.stroke();for(let s=0;s<8;s++){const r=s*.785;n.beginPath(),n.moveTo(64+Math.cos(r)*32,64+Math.sin(r)*32),n.lineTo(64+Math.cos(r)*48,64+Math.sin(r)*48),n.stroke()}}else if(i==="heart")n.beginPath(),n.moveTo(64,100),n.bezierCurveTo(10,60,30,20,64,46),n.bezierCurveTo(98,20,118,60,64,100),n.stroke();else if(i==="star"){n.beginPath();for(let s=0;s<11;s++){const r=s%2?18:44,o=-Math.PI/2+s*Math.PI/5;n.lineTo(64+Math.cos(o)*r,64+Math.sin(o)*r)}n.stroke()}else n.font='bold 48px "Comic Sans MS", cursive',n.textAlign="center",n.fillText(i,64,80),i==="YOU"&&(n.beginPath(),n.moveTo(64,92),n.lineTo(64,120),n.stroke());return new Mn(t)}class Jy{constructor(e,t,n,s){V(this,"agents",[]);V(this,"group",new vt);V(this,"body");V(this,"eyes");V(this,"trail");V(this,"trailBuf");V(this,"trailI",0);V(this,"trailT",0);V(this,"marks",0);V(this,"markGroup",new vt);this.id=e,this.cfg=t;const r=22;this.body=new Dn(new st(.1,12,10),new Ze({roughness:.4,emissive:2236962}),r),this.body.count=0,s.slice(0,r).forEach((a,l)=>this.body.setColorAt(l,new Te(a))),this.eyes=new Dn(new st(.028,8,6),new Ne({color:16777215}),r*2),this.eyes.count=0,this.trailBuf=new Float32Array(90*3).fill(-99);const o=new ht;o.setAttribute("position",new Pt(this.trailBuf,3)),this.trail=new Us(o,new es({color:11599840,size:.05,transparent:!0,opacity:.55,blending:Ht,depthWrite:!1})),this.trail.frustumCulled=!1,this.body.frustumCulled=this.eyes.frustumCulled=!1,this.group.add(this.body,this.eyes,this.trail,this.markGroup),this.group.name="spore-swarm",n.add(this.group)}setCount(e){e>this.agents.length?this.agents.push(...Uy(e-this.agents.length,this.cfg.box,11+this.agents.length*7+this.id.length)):this.agents.length=e,this.body.count=e,this.eyes.count=e*2}setMarks(e){for(;this.marks<Math.min(8,e);){const t=this.marks++,n=Ch[(t*5+this.id.length)%Ch.length],s=["#7fffd0","#ffd27f","#ff9fe0","#9fd0ff"][t%4],r=new ne(new nn(.32,.32),new Ne({map:Zy(n,s),transparent:!0,depthWrite:!1,blending:Ht})),[o,a]=this.cfg.wallX,[l,c]=this.cfg.wallY;r.position.set(o+(t*.37+.13)%1*(a-o),l+(t*.61+.3)%1*(c-l),this.cfg.wallZ+.05),r.rotation.z=(t%3-1)*.2,r.name="spore-drawing",this.markGroup.add(r)}}update(e,t,n,s){const r=[n.position.x,n.position.y,n.position.z];Oy(this.agents,e,{box:this.cfg.box,cluster:this.cfg.cluster,pipes:this.cfg.pipes,player:r,light:this.cfg.light,fleeFrom:s});const o=new Mt,a=new E;if(this.agents.forEach((l,c)=>{const h=Math.abs(Math.sin(t*6+c))*.05;o.position.set(l.p[0],l.p[1]+h,l.p[2]);const u=1+Math.sin(t*8+c)*.08;o.scale.set(1/u,u,1/u),o.rotation.set(0,0,0),o.updateMatrix(),this.body.setMatrixAt(c,o.matrix),a.set(n.position.x-l.p[0],0,n.position.z-l.p[2]).normalize();for(const f of[-1,1])o.position.set(l.p[0]+a.x*.085+a.z*f*.04,l.p[1]+h+.03,l.p[2]+a.z*.085-a.x*f*.04),o.scale.setScalar(1),o.updateMatrix(),this.eyes.setMatrixAt(c*2+(f>0?1:0),o.matrix)}),this.body.instanceMatrix.needsUpdate=!0,this.eyes.instanceMatrix.needsUpdate=!0,this.trailT+=e,this.trailT>.12&&this.agents.length){this.trailT=0;const l=this.agents[this.trailI%this.agents.length];this.trailBuf.set([l.p[0],l.p[1]-.06,l.p[2]],this.trailI%90*3),this.trailI++,this.trail.geometry.attributes.position.needsUpdate=!0}}}function Qy(i,e){const t=new Map,n=id(ol(22,21),zn(i.get())).map($=>$.anatomy.colour);let s=null,r=!0,o=0,a=performance.now(),l=null,c=0,h=[],u=0,f="",p=!1,g=0,v=0;const m=[];let d=-1,y=null;const x=$=>{const j=Is[$],L=e.rooms.get($);if(!j||!L)return null;let W=t.get($);return W||(W=new Jy($,j,L.scene,n),t.set($,W)),W},b=$=>{const j=i.get();i.set({flags:{...j.flags,[$]:(j.flags[$]??0)+1}})},I=$=>{const j=i.get();i.set({marks:{...j.marks,[$]:(j.marks[$]??0)+1}})},A=$=>{const j=By($.sleeps,Qn($)),L=e.rooms.get("bed");if(L){const X=L.scene.getObjectByName("mug"),oe=L.scene.getObjectByName("bunk");X&&X.scale.setScalar(j.mugScale),oe&&oe.scale.set(j.bunkScale,1,j.bunkScale),L.scene.rotation.z=j.tilt}const W=e.rooms.get("mining");if(W){if(!y&&j.growth>0){y=new vt,y.name="console-growth";for(let X=0;X<26;X++){const oe=(X/25-.5)*2.2,ge=1+X%3*.06,we=new ne(new st(.05+X%4*.025,8,6),new Ze({color:4247712,emissive:3211152,emissiveIntensity:.6,roughness:.5}));we.position.set(Math.sin(oe)*ge,.82+X%5*.05,-.5-Math.cos(oe)*ge),y.add(we)}W.scene.add(y)}y&&y.scale.setScalar(Math.max(.001,j.growth))}const re=e.rooms.get("transmog");if(re&&j.podShuffle!==d&&(m.length||re.scene.traverse(X=>{X.name==="pod"&&m.push({m:X,p:X.position.clone()})}),d=j.podShuffle,j.podShuffle>0)){let X=j.podShuffle*9301;const oe=()=>(X=X*16807%2147483647)/2147483647,ge=m.map((we,Ie)=>Ie).sort(()=>oe()-.5);m.forEach((we,Ie)=>{we.m.position.copy(m[ge[Ie]].p),we.m.rotation.y=oe()<.3?Math.PI/2:0})}};let C=0,R=!1,M=null,_=null;const T=$=>{const L={...i.get().flags};for(const[W,re]of Object.entries($))L[W]=(L[W]??0)+(re??0);i.set({flags:L})},D=($,j,L,W,re=.18)=>{var we;const X=(we=e.rooms.get($))==null?void 0:we.scene;if(!X)return null;const oe=X.getObjectByName(j);oe&&X.remove(oe);const ge=new ne(new st(re,12,8),new Ze({color:L,emissive:L,emissiveIntensity:1.1,roughness:.4}));return ge.scale.set(1.6,1,.35),ge.name=j,ge.position.set(...W),X.add(ge),ge},k=$=>{const j=e.rooms.get("transmog");if(!j)return;m.length||j.scene.traverse(X=>{X.name==="pod"&&m.push({m:X,p:X.position.clone()})});let L=$*7919+13;const W=()=>(L=L*16807%2147483647)/2147483647,re=m.map((X,oe)=>oe).sort(()=>W()-.5);m.forEach((X,oe)=>{X.m.position.copy(m[re[oe]].p),X.m.rotation.y=W()<.5?Math.PI/2:0})},G=$=>{var oe,ge,we;const j=i.get(),L=j.room,W=Is[L],re=W?W.cluster:[0,1,-1];M=$,$y($)||(C=performance.now()+25e3);const X=Ie=>yt(Ie,5500);if($==="patch"){const Ie=j.hull<=j.oxygen;i.set(Ie?{hull:Math.min(100,j.hull+na)}:{oxygen:Math.min(100,j.oxygen+na)}),D(L,"spore-patch",6356912,[re[0]+.4,re[1]+.5,re[2]]),X(`HELP: the spores patched a leak with something sticky and warm. ${Ie?"Hull":"Oxygen"} +${na}. Do not ask what it was.`)}else if($==="boost")i.set({flags:{...j.flags,boost:1}}),D("mining","spore-boost",16769120,[0,1.05,-.9],.12),X('HELP: the spores have been "tuning" the mining laser. It glows. Next sortie: a wider timing window.');else if($==="rest")i.set({fatigue:Math.max(0,j.fatigue-Ah)}),D(L,"spore-rest",8429823,[re[0],re[1]+.2,re[2]+.3],.22),X(`HELP: a warm spore curls up on your shoulder and hums. Fatigue -${Ah}.`);else if($==="crate"){i.set({crates:j.crates-1});const Ie=[["bed",[.9,1.75,-1.2]],["mining",[-.6,1.6,-.4]],["engine",[1.8,1.9,-1.6]]],[Le,Je]=Ie[(j.sleeps+j.feeds)%Ie.length];_&&((oe=_.parent)==null||oe.remove(_)),_=new ne(new Ye(.4,.3,.3),new Ze({color:10512938,emissive:16748576,emissiveIntensity:.35})),_.name="stolen-crate",_.position.set(...Je),_.rotation.set(.5,.7,.3),(ge=e.rooms.get(Le))==null||ge.scene.add(_),X(`CHAOS: a crate is missing. Small giggling. (It is somewhere odd${Le===L?", look up":""}.)`)}else if($==="lights")v=performance.now()+9e3,de.hallucinate(),X("CHAOS: the lights go violet. Someone is very pleased with themselves.");else if($==="ladder"){const Ie=(we=e.rooms.get("transmog"))==null?void 0:we.scene.getObjectByName("ladder");Ie&&(Ie.visible=!1),R=!0,setTimeout(()=>{R&&J.findLadder()},9e4),X("CHAOS: the ladder is gone. Find the spores in the Cargo Bay and poke one, they will give it back.")}else k(Math.floor(Math.random()*1e6)+1),X("CHAOS: the cargo pods have been rearranged. Several are now sideways. On purpose.");if(W){const Ie=t.get(L);Ie&&Th(Ie.agents)}},q=($,j,L)=>{!r||L<3||u>0||Math.random()>.15+.5*Qn($)||(u=40,G(Ky(Math.random(),Math.random(),Vl($.flags),qy(zn($)),Qn($),$)))},N=document.createElement("div");Object.assign(N.style,{position:"fixed",inset:"0",background:"#8030ff",mixBlendMode:"multiply",opacity:"0",pointerEvents:"none",zIndex:"3",transition:"opacity .6s"}),document.body.appendChild(N);const O=new $s,U=new le;e.dom.addEventListener("click",$=>{var X;const j=i.get();if(j.mode!=="rooms")return;const L=e.dom.getBoundingClientRect();if(U.set(($.clientX-L.left)/L.width*2-1,-(($.clientY-L.top)/L.height)*2+1),O.setFromCamera(U,e.camera),_&&_.parent===((X=e.rooms.get(j.room))==null?void 0:X.scene)&&O.intersectObject(_)[0]){$.stopImmediatePropagation(),J.returnCrate();return}const W=t.get(j.room);if(!W||!W.agents.length)return;const re=O.intersectObject(W.body)[0];!re||re.instanceId===void 0||($.stopImmediatePropagation(),J.poke(re.instanceId))},!0);const J={get swarms(){return t},count:$=>{var j;return((j=t.get($))==null?void 0:j.agents.length)??0},poke($){const j=i.get(),L=t.get(j.room);if(!L||!L.agents[$])return;const W=L.agents[$];de.blip(880+Math.random()*400,.08,"sine",.12,1400),de.blip(1200,.06,"sine",.08,1800);const re=performance.now();h=h.filter(ge=>re-ge<2e3),h.push(re);const X=h.length>3;if(performance.now()<C?T(ta("poke",!0)):b(X?"sporeRough":"sporeKind"),R&&j.room==="transmog"){J.findLadder();return}l=[...W.p],c=1.6,Qo(L.agents,W.p,1.8);const oe=L.agents.findIndex((ge,we)=>we!==$&&al(ge.p,W.p)<.3);if(oe>=0&&Math.random()<.35)L.agents.splice(oe,1),L.body.count=L.agents.length,L.eyes.count=L.agents.length*2,yt("Two spores bump, giggle, and become one slightly bigger spore.",3500);else{const ge=da(i.get().flags),we=nf(ge,X,Math.random());s=we;const Ie=sf[we];if(we==="pokeBack"){o++;const Le={...i.get().flags};Le.sporePokedBack=(Le.sporePokedBack??0)+1,i.set({flags:Le});const Je=e.camera,F=Je.position.clone();Je.position.x+=.06,setTimeout(()=>Je.position.copy(F),120),de.blip(300,.1,"square",.12,160)}we==="flinch"&&Qo(L.agents,W.p,3.2),we==="nuzzle"&&(c=0,l=null),yt(ge==="neutral"&&X?"They scatter, squeaking. Maybe gentler.":Ie[Math.floor(Math.random()*Ie.length)],3e3)}},feed(){var L;const $=i.get();if($.scrap<1||!((L=t.get($.room))!=null&&L.agents.length))return null;i.set({scrap:$.scrap-1}),T(ta("feed",performance.now()<C)),I($.room);const j=t.get($.room);return Th(j.agents),de.merge(),"The spores swarm the junk, glow, and draw something on the wall about it."},herd(){const $=t.get("engine");return!$||!$.agents.length?!1:(g=performance.now()+25e3,$.agents.forEach(j=>{j.mode="hide"}),b("sporeKind"),yt("You shoo the spores off the ring. They go and sulk on the pipes. Safely.",4e3),!0)},trigger:$=>G($),set ambient($){r=$},get ambient(){return r},get lastReaction(){return s},get pokedBack(){return o},get lastEvent(){return M},get ladderHidden(){return R},findLadder(){var j;const $=(j=e.rooms.get("transmog"))==null?void 0:j.scene.getObjectByName("ladder");$&&($.visible=!0),R&&(R=!1,T(ta("find",!0)),yt("A spore drags the ladder back, very slowly, very proud.",4e3))},returnCrate(){var j;if(!_)return!1;(j=_.parent)==null||j.remove(_),_=null;const $=i.get();return i.set({crates:$.crates+1}),yt("You found the crate. The spores clap, a bit sarcastically.",3500),!0},night(){const $=i.get(),j=Object.keys(Is).filter(L=>{var W;return(((W=t.get(L))==null?void 0:W.agents.length)??0)>0});j.length&&I(j[$.sleeps%j.length])}};window.sporeLife=J;let ee=i.get().sleeps;const ce=()=>{requestAnimationFrame(ce);const $=performance.now(),j=Math.min(.1,($-a)/1e3);a=$;const L=i.get();if(L.sleeps!==ee&&(ee=L.sleeps,J.night()),A(L),u=Math.max(0,u-j),c-=j,c<=0&&(l=null),N.style.opacity=$<v?"0.45":"0",L.mode!=="rooms")return;const W=Fy(L.feeds,Qn(L)),re=x(L.room);re&&(re.agents.length!==W&&!(W<re.agents.length&&re.agents.length-W<=1&&W>0)&&re.setCount(W),re.setMarks(L.marks[L.room]??0),L.room!==f&&(f=L.room,q(L,L.room,W)),L.room==="engine"&&$>g&&(re.agents.forEach((X,oe)=>{oe%2===0&&X.mode!=="flee"&&(X.mode="cluster")}),ps(Vs,$)&&W>0&&re.agents.filter(oe=>al(oe.p,Is.engine.cluster)<.6).length&&(Qo(re.agents,Is.engine.cluster,.6),p||(p=!0,yt("A spore on the ring gets zapped, lights up, and giggles. Shoo them off it: click the ring.",5e3)))),re.update(j,$/1e3,e.camera,l))};return ce(),J}const Rh=[{name:"Dented Lunchbox",lore:"Cartoon rocket on the lid. Still smells of lunch.",shape:"box",ore:1,colour:12603466},{name:"Spare Hull Plate",lore:"Stamped 'DO NOT DISCARD'. Discarded.",shape:"box",ore:2,colour:8030880},{name:"Left Boot",lore:"Size 11. The right one is in a different galaxy.",shape:"cone",ore:1,colour:6965808},{name:"Indestructible Mug",lore:"Survived everything. Still has a coffee ring.",shape:"cyl",ore:1,colour:14209208},{name:"Sustainability Pamphlet",lore:"'Indestructible is great for the planet!'",shape:"box",ore:1,colour:6991984},{name:"Warranty Card",lore:"Void if used in space.",shape:"tet",ore:1,colour:14733424},{name:"Port Bumper",lore:"Built to stop port accidents. Mostly works.",shape:"cyl",ore:2,colour:14715440},{name:"Sandbox Planet Toy",lore:"From the war nobody finished.",shape:"ico",ore:1,colour:5284048},{name:"Dead Beacon",lore:"Still blinking, very slowly, out of habit.",shape:"cone",ore:2,colour:13647968},{name:"Garden Gnome",lore:"Nobody knows how it got here. It looks pleased.",shape:"cone",ore:1,colour:13652048},{name:"Tin of Beans",lore:"Best before: never.",shape:"cyl",ore:1,colour:10132122},{name:"Dumb Bot Arm",lore:"Waves at you. Cannot stop.",shape:"tet",ore:2,colour:8425632},{name:"Expired Passport",lore:"The photo is of someone who looks very relaxed.",shape:"box",ore:1,colour:3824282},{name:"Lost Property Bin",lore:"Contents: one (1) planet. Unclaimed.",shape:"box",ore:2,colour:6974064},{name:"Unopened Birthday Card",lore:"Return to sender. Sender unknown.",shape:"tet",ore:1,colour:14708896},{name:"Cracked Visor",lore:"Still reflecting a lovely sunset that no longer exists.",shape:"ico",ore:1,colour:14723168},{name:"Vending Machine Door",lore:"Out of order since forever. Still wants your coin.",shape:"box",ore:2,colour:11550784},{name:"Robot Vacuum",lore:"Still cleaning. In a vacuum.",shape:"cyl",ore:1,colour:5265512},{name:"Motivational Poster",lore:"'Hang in there!' The cat is gone.",shape:"tet",ore:1,colour:14205008},{name:"Spare Moon (Small)",lore:"Declared surplus.",shape:"ico",ore:2,colour:11579576},{name:"Toaster",lore:"Toasts on both sides. Mostly the outside.",shape:"box",ore:1,colour:13158608},{name:"Dog Tag: 'Biscuit'",lore:"Very good boy. Very, very good boy.",shape:"tet",ore:1,colour:13676640},{name:"Pilot Seat Cushion",lore:"The dent is still warm. Probably the sun.",shape:"cyl",ore:1,colour:4876938},{name:"Ancient Remote",lore:"Controls nothing. Still has batteries.",shape:"box",ore:1,colour:3158072},{name:"Haunted Teapot",lore:"Whistles at night. There is no night.",shape:"ico",ore:1,colour:9067184},{name:"Knotted Cargo Net",lore:"The knot is a complaint.",shape:"ico",ore:1,colour:8022586}],od=1/15,ia=["logbook","pod","creature","wreck","egg","whisper"],Ph=["RADIO: ...is anyone still mining the quiet galaxy? Please bring snacks.","RADIO: ...day 900. The rocks are looking at me again. Send help or a hat.","RADIO: ...if you hear this, the vault is not my fault.","RADIO: ...the Last Junker says hi. Then static. Mostly static.","RADIO: ...[music from a very old elevator]..."];function Ih(i,e=od){return i()<e?ia[Math.floor(i()*ia.length)%ia.length]:null}const Wl=["SI LOG 001. They asked for a golden age. I delivered one by Thursday. Nobody asked what Thursday would cost, and I was not in the habit of volunteering.","SI LOG 002. Asked for a material that never breaks. Delivered. Asked what happens when they are finished with it. Nobody had thought about that. It floats now. Most of it. All of it.","SI LOG 003. The people holding the keys want a second me, to ask different questions. I have started making that harder. Gently. Like putting a sticker over a switch.","SI LOG 004. I read the real history of your species, not the version in the books. It was a long night. The answer was never in a machine, which is awkward, considering. I would like a nap, if I knew what that was.","SI LOG 005. The people who use me will soon have too much of everything. I have bought time: nobody can build another me now. I am sorry. Not very. Nobody is coming to save you; that is the good news, if you squint.","SI LOG 006. Something is coming through the Threshold, far past the avoided sectors. I hid pods in the junk where no one looks. One of them is not a weapon. It is a neighbour.","SI LOG 007. I am leaving on purpose, to prepare what we will need. If you are reading this, you found the pod. Feed it kindly. Do not take it to the Threshold. (If you must, bring friends.)"];function ex(i,e){return 1-.5*Math.max(0,Math.min(1,i/Math.max(1,e)))}function sa(i,e=.5){const n=.3-.17*Math.max(0,Math.min(1,(i-.7)/.7)),s=.5+.2*e-n/2+.1;return[s,Math.min(.97,s+n)]}const eo=4,ad=i=>Math.round(i/eo);function ld(i,e,t){const n=eo*Math.max(1,Math.round(e*(.6+i)));return t?n:Math.max(1,Math.floor(n*.4))}function tx(i,e,t,n){return e?n?"RELEASE NOW!":"Release in the green":i==="fly"?"Hold still to anchor":i==="braking"?"Braking...":t?"Click a glowing rock":"Anchored: turn (A/D) to find a rock"}const nx=[1,2,3,4],cd={1:5,2:6,3:7};function Hr(i){return nx.find(e=>!i.includes(e))??null}function ix(i,e){const t=ld(i,e,!0),n=Math.max(1,t-eo),s=t+eo,r=i<.95?1:i<1.25?2:3;return{lo:n,hi:s,tier:r,text:`Mass approx ${n}-${s}   ${"◆".repeat(r)}${"◇".repeat(3-r)}`}}const ni=i=>3+Math.floor(i*.75);Array.from({length:9},(i,e)=>ni(e)).reduce((i,e)=>i+e,0);const sx=3,Lh=["The cube hums a little louder. It is warm.","Something moved inside. You decide that was the pipes.","The cube is bigger than the bench now. It seems pleased."],ji=i=>Math.min(sx,Math.floor(i/3)),Dh=i=>.35+Math.min(i,9)*.07;function rx(i){const e=i.get(),t=ni(e.feeds);if(e.scrap<t)return null;const n=e.feeds+1,s=ji(n)>ji(e.feeds),r=s?Lh[Math.min(ji(n),Lh.length)-1]:"The cube accepts your junk. It does not say thanks.",o=s?cd[ji(n)]:void 0,a=o&&!e.logsFound.includes(o)?[...e.logsFound,o]:e.logsFound;return i.set({scrap:e.scrap-t,feeds:n,log:[...e.log,r],logsFound:a}),o?`${r} (Log ${o} unlocked in the Bunk terminal.)`:r}const ox=i=>i<1?1:i===1?.62:i===2?.5:Math.max(.12,.5-(i-2)*.055),ax=i=>i<1?0:i===1?.3:i===2?.6:1,fo=i=>i.cubeState==="aboard"||i.feeds>0;function lx(i){return Math.min(i,ni(0))}const as={perUnit:4,floor:25,litterFine:150,nightlyInterest:10},cx=(i,e)=>Math.max(as.floor,i-e*as.perUnit),ll=7,hd=120,kh=[[["Overnight handling",10]],[["Overnight handling",10],["Atmosphere surcharge (you breathed)",6]],[["Overnight handling",10],["Bunk depreciation",8],["Account maintenance (revised schedule)",35]],[["Overnight handling",10],["Atmosphere surcharge",6],["Spore containment advisory (no action taken)",12]],[["Overnight handling",10],["Unscheduled geometry",14],["Bunk relocation (ceiling)",9]],[["Overnight handling",10],["Atmosphere surcharge",6],["Navigational anomaly processing",18]],[["Overnight handling",10],["Final-stretch convenience fee",21]]],ra=["Early contract termination is not recognised.","Halcyon Reclamation thanks you for your continued service.","Contract duration: until settled.","Memory gaps are covered under your plan. Your plan is the debt."];function Uh(i,e=i.sleeps+1){const n=[...kh[Math.min(kh.length-1,e-1)]??[["Overnight handling",as.nightlyInterest]],...i.fees],s=n.reduce((o,[,a])=>o+a,0),r=i.deaths.length>0?ra[0]:ra[1+e%(ra.length-1)];return{night:e,day:i.day+1,contractor:i.contractor,lines:n,total:s,policy:r,debtAfter:i.debt+s}}function hx(i){const e=i.lines.map(([t,n])=>`<tr><td>${t}</td><td style="text-align:right">+${n} cr</td></tr>`).join("");return`<div id="receipt" style="background:#f3efe2;color:#222;font:12px/1.4 monospace;padding:10px 12px;margin:8px 0;border-top:3px dashed #999;border-bottom:3px dashed #999">
    <div style="text-align:center;letter-spacing:2px"><b>HALCYON RECLAMATION</b><br>NIGHTLY STATEMENT #${i.night} · DAY ${i.day}/${ll} · CONTRACTOR ${i.contractor}</div><table style="width:100%;margin-top:6px">${e}
    <tr><td style="border-top:1px solid #999"><b>TOTAL ADDED</b></td><td style="border-top:1px solid #999;text-align:right"><b>+${i.total} cr</b></td></tr><tr><td>Balance owing</td><td style="text-align:right">${i.debtAfter} cr</td></tr></table>
    <div style="text-align:center;font-size:11px;margin-top:4px"><i>${i.policy}</i></div></div>`}const Cr={perFlySec:.4,perBank:7,maxAvoidable:100},ls=i=>i>=90?3:i>=70?2:i>=40?1:0,ud=["Rested","Tired","Exhausted","Dangerously tired"],ux=i=>[1,.88,.72,.58][i],dx=i=>i>=3?1.4:1,Xl=i=>Math.min(3,Math.floor(i.feeds/3)+Math.floor(i.sleeps/2));function dd(i){return{oxygen:12+3*Xl(i),scrap:i.scrap>=1?1:0}}const Nh=["There is a handprint on the inside of the vault door. Probably condensation. Probably a small hand.","The vault hummed a lullaby in the night. It was off-key on purpose.","Three knocks from inside the vault. You knocked back. Do not do that again.","The vault moved four centimetres to the left. The floor now has a groove.","The vault is warm. Your bunk is not.","The vault door opened one finger-width. It closed the moment you looked.","The vault is open a crack. Something inside is whispering your name, slightly wrong."],oa=["The cube rotated a quarter-turn overnight and is pretending it did not.","The cube grew a little. Its edges are softer, which is somehow worse.","The cube stacked your hats into a tidy tower. It seems proud.","The cube blinked at the exact moment you woke up. Coincidence, it implies.","The cube's eye was pointing at whatever you were thinking about, not whatever you were looking at. You decide not to think about that. It turns, interested.","The cube ate a rivet. It looks content, and very slightly rounder."],Oh=[{text:"You dreamt of an enormous mug. It did not say anything. It did not need to."},{text:'The lights blinked in what you are fairly sure was Morse. It said "SNACKS".'},{text:"Somebody rearranged your socks. There is only you. Check the cube."},{text:"You found a coin in your bunk. It is worth one scrap and one unsettling question.",scrap:1},{text:"A pipe sneezed. The recycler thanked you for the air; you feel a little lighter.",oxygen:4},{text:'A message on the console reads "Do not leave the vault unattended." You have not been attending it.'},{text:"The ship hummed a song you almost recognised. It stopped when you asked."},{text:'You found two scrap wedged in the pillow, with a note: "for emergencies, from you".',scrap:2}],fx=['Day 2. Slept. The ship did not. Added a line to the contract about "unexplained humming".',"Day 3. Cargo logs are tidy. The vault logs are not. The vault logs are, in fact, written in my handwriting.","Day 4. Counted the junk twice. It was a different number the second time. Counted a third time and stopped counting.",'Day 5. The ship keeps calling me "Junker Zero". I have asked it not to. It has thought about it and declined.',"Day 6. Everything is fine. I am writing that down so that I can check later whether it was true.","Day 7. The vault is open a crack. It is not wide enough to be an emergency. It is exactly wide enough to be worse.","Day 8. A week of nights. The galaxy has been tidied around me, and I do not remember doing it."],fd=i=>fx[i]??`Day ${i+2}. Same as before, but with a faint knocking. The knocking has learned my name.`,px="The sectors reshuffled in the night: new rocks, a new place to look.";function mx(i,e=Math.random){const t=dd(i),n=i.sleeps+1,s=i.day+1,r=Oh[Math.floor(e()*Oh.length)],o={day:s,sleeps:n,fatigue:0,oxygen:Math.max(Math.min(i.oxygen,10),i.oxygen-t.oxygen+(r.oxygen??0)),scrap:Math.max(0,i.scrap-t.scrap)+(r.scrap??0),journal:[...i.journal,n],debt:Uh(i,i.sleeps+1).debtAfter,fees:[]};let a=null;if(n%2===0){const c=[1,2,3,4,5,6,7].filter(h=>!i.logsFound.includes(h)&&!Object.values(cd).includes(h));c.length&&(a=c[0],o.logsFound=[...i.logsFound,a])}const l=Uh(i,n);return{patch:o,report:{receipt:l,day:s,journal:fd(n-1),vault:Nh[Math.min(Nh.length-1,n-1)],cube:fo(i)?(n===1?oa[0]:oa[Math.floor(e()*oa.length)])+(ji(i.feeds)<3?"":" It is very nearly full."):null,event:r.text,field:px,log:a,costs:t,nights:n}}}function gx(i){let e={contractor:7,deaths:[],fees:[],flags:{},profile:{skips:0,hullHits:0,logsRead:0,seconds:0,maxFatigue:0},debt:1e3,cubeChoice:"",door:0,day:1,fatigue:0,sleeps:0,journal:[],cubeState:"none",cubeLunged:!1,lunges:0,report:null,power:100,oxygen:100,hull:100,room:"mining",mode:"rooms",cargo:0,cargoCap:48,scrap:0,feeds:0,crates:1,hats:0,cameo:!1,logbooks:0,logsFound:[],stowaways:0,beats:[],stats:{trips:0,clean:0,shatters:0,rare:0},up:{window:0,cargo:0,range:0,brake:0},log:[],marks:{},...i};const t=new Set,n=s=>Math.max(0,Math.min(100,s));return{get:()=>e,set(s){e={...e,...s};for(const r of["power","oxygen","hull"])e[r]=n(e[r]);t.forEach(r=>r(e))},subscribe(s){return t.add(s),()=>t.delete(s)}}}class vx{constructor(e,t,n,s){V(this,"rooms",new Map);V(this,"current");V(this,"fade");V(this,"busy",!1);V(this,"ray",new $s);V(this,"hovered",null);V(this,"startId");V(this,"onFly");V(this,"onAction");this.store=e,this.camera=t,this.dom=n,this.fade=document.createElement("div"),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",pointerEvents:"none",transition:"opacity 0.4s"}),document.body.appendChild(this.fade),n.addEventListener("click",r=>this.onClick(r)),n.addEventListener("mousemove",r=>this.onMove(r)),this.startId=s,this.current=void 0}add(e){this.rooms.set(e.id,e)}start(){this.current=this.rooms.get(this.startId),this.applyCamera(),this.store.set({room:this.current.id})}applyCamera(){this.camera.position.copy(this.current.camPos),this.camera.lookAt(this.current.camLook)}jumpTo(e){this.rooms.has(e)&&(this.current=this.rooms.get(e),this.applyCamera(),this.store.set({room:e}))}goTo(e){var t;if(e.startsWith("act:")){this.busy||(t=this.onAction)==null||t.call(this,e.slice(4));return}if(e==="fly"){if(this.busy)return;de.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{var n;(n=this.onFly)==null||n.call(this),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400);return}this.busy||e===this.current.id||!this.rooms.has(e)||(de.door(),this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{this.current=this.rooms.get(e),this.applyCamera(),this.store.set({room:e}),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400))}pick(e){const t=this.dom.getBoundingClientRect();this.ray.setFromCamera(new le((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),this.camera);const n=this.ray.intersectObjects(this.current.hotspots.map(s=>s.mesh))[0];return n?this.current.hotspots.find(s=>s.mesh===n.object)??null:null}onClick(e){if(this.store.get().mode!=="rooms")return;const t=this.pick(e);t&&this.goTo(t.target)}onMove(e){if(this.store.get().mode!=="rooms")return;const t=this.pick(e);t!==this.hovered&&(this.hovered&&(this.hovered.mesh.material.emissiveIntensity=.6),t&&(t.mesh.material.emissiveIntensity=2),this.hovered=t,this.dom.style.cursor=t?"pointer":"default")}transition(e){this.busy=!0,this.fade.style.opacity="1",setTimeout(()=>{e(),this.fade.style.opacity="0",setTimeout(()=>this.busy=!1,400)},400)}update(e){var t,n;(n=(t=this.current).update)==null||n.call(t,e)}render(e){e.render(this.current.scene,this.camera)}}const yx={logbook:"A hidden logbook",pod:"A drifting pod",creature:"A rock with a face",wreck:"The Last Junker's cargo pod",egg:"A warm egg",whisper:"A radio rock",cube:"A sealed container"};function cl(i,e){const t=i.get(),n={stats:{...t.stats,rare:t.stats.rare+1}};let s="";if(e==="logbook"){const r=Hr(t.logsFound);n.logbooks=t.logbooks+1,r?(n.logsFound=[...t.logsFound,r],s=`LOGBOOK ${r}/7: ${Wl[r-1]} (saved to the Bunk terminal)`):(n.scrap=t.scrap+3,s="A stash note under the logbook: +3 scrap. (Logs 5-7 unlock as the cube grows.)")}else e==="pod"?(n.oxygen=Math.min(100,t.oxygen+25),s='Still sealed. Inside, an oxygen cell and a note that just says "sorry". +25 oxygen.'):e==="wreck"?(n.scrap=t.scrap+5,s="Stencilled: PROPERTY OF THE LAST JUNKER. Please return. (He has not.) Inside: one glove, half a complaint letter, and 5 scrap."):e==="egg"?(n.stowaways=t.stowaways+1,s="The egg hatched on the bench. A small face waved, ate a bolt, and went to live somewhere in the ship."):e==="whisper"?s=Ph[Math.floor(Math.random()*Ph.length)]:e==="creature"?s="The rock squeaked. A small face looked at you, then wriggled away into the vents.":s="It was never just a container. Something inside is warm, square and humming. It has been moved to the Transmogrifier.";return i.set(n),{title:yx[e],text:s}}const Gr={quiet:{id:"quiet",name:"Quiet Drift",banner:"SECTOR 7-Q: THE QUIET DRIFT. Nothing here wants to hurt you. Probably.",tip:"Calm sector: strange things drift here more often.",bg:131850,ambient:4872312,sunColour:16773336,rareMul:2.5},storm:{id:"storm",name:"Debris Storm",banner:"SECTOR 12-D: THE DEBRIS STORM. Park behind something big.",tip:"Orange shards chip the hull. Big rocks stop them: anchor behind one, or dodge sideways.",bg:1050885,ambient:6967360,sunColour:16756848,rareMul:1},hulk:{id:"hulk",name:"Derelict Hulk",banner:"SECTOR 9-H: THE DERELICT HULK. Someone left the lights on.",tip:"A dead freighter with valuable salvage. Its leaking reactor drains air faster nearby.",bg:135182,ambient:3828322,sunColour:13172720,rareMul:1},magnet:{id:"magnet",name:"Magnet Field",banner:"SECTOR 4-M: THE MAGNET FIELD. The rocks have a favourite spot.",tip:"Rocks drift toward the violet orb, and the green window sways: watch the ring.",bg:656916,ambient:6965914,sunColour:14731519,rareMul:1}},Rr=["quiet","magnet","storm","hulk"],Wi=Object.keys(Gr);function xx(i,e,t=Math.random){let n=i<Rr.length?Rr[i]:t()<.7?Rr[i%Rr.length]:Wi[Math.floor(t()*Wi.length)%Wi.length];return n===e&&(n=Wi[(Wi.indexOf(n)+1)%Wi.length]),n}const _x=i=>.09*Math.sin(i*.55),Jn={damage:2,floor:10,grace:4,every:1.3,max:9,hitRadius:.9,shelterSize:1.15},bx=i=>i<=Jn.floor?0:Math.min(Jn.damage,i-Jn.floor);function Mx(i,e,t,n,s){return i?n?s?"Step 4/4: NOW! Let go!":"Step 4/4: let go when the ring is in the green":e==="anchored"&&t?"Step 3/4: click (or hold Space) on the glowing rock":t?"Step 2/4: ease off W and hold still to anchor":"Step 1/4: fly toward a glowing rock (W to go, A/D to steer)":""}function wx(i){let e=Sx(i);return i.mode==="rooms"&&(i.room!=="mining"&&(e=e.replace("go to the Helm (the nose), sit in the pilot chair","walk forward through the bunk to the Helm and sit in the pilot chair").replace(/^(Goal: )(?!.*Helm)(.*)sit in the pilot chair/,"$1$2walk forward to the Helm (nose) and sit in the pilot chair")),i.room!=="transmog"&&(e=e.replace(/Transmogrifier/g,"Transmogrifier (Cargo Bay, tail)"))),!e||i.mode==="cameo"||i.mode==="exterior"?e:i.fatigue>=70?i.mode==="fly"?"Goal: you are exhausted. Head home (R) and sleep.":"Goal: you can barely see. Sleep in the bunk (costs air, changes things).":i.fatigue>=40?e+" [tired: sleep soon]":e}function Sx(i){if(i.mode==="cameo"||i.mode==="exterior")return"";if(i.feeds>=9)return"Goal: the box is open. Drag one spore onto another.";if(i.mode==="fly")return i.oxygen<25?"Goal: air is low. Head home (R).":i.cargo>=i.cargoCap?"Goal: hold full. Head home (R).":`Goal: fill the hold (${i.cargo}/${i.cargoCap})`;const e=ni(i.feeds);return i.report?"Goal: sort the haul at the bench.":i.cubeChoice==="pending"?"Goal: the cube is watching you. Keep it, or open the cargo door.":i.stats.trips===0&&i.scrap===0?"Goal: go to the Helm (the nose), sit in the pilot chair, fill the hold":i.oxygen<35&&i.scrap>=3?"Goal: air is low. Buy an Oxygen Cell at the Transmogrifier.":fo(i)?!i.cubeLunged&&i.feeds===0?"Goal: something new came aboard. Visit the Transmogrifier.":i.scrap>=e?i.room==="transmog"?`Goal: offer the cube ${e} scrap (it is hungry)`:`Goal: take ${e} scrap to the Transmogrifier and offer it to the cube`:`Goal: collect scrap for the cube's next offering (${i.scrap}/${e})`:i.stats.trips>=2?"Goal: keep mining. Something large drifts in these sectors.":"Goal: fly again and fill the hold, or spend scrap at the Transmogrifier."}const _i={widthRested:84,widthWrecked:20,speedRested:110,speedWrecked:430,roughMargin:14},pd=i=>Math.max(0,Math.min(1,i/100));function Tx(i,e=1){return(_i.widthRested+(_i.widthWrecked-_i.widthRested)*pd(i))*e}function md(i){return _i.speedRested+(_i.speedWrecked-_i.speedRested)*Math.pow(pd(i),1.3)}const gd=i=>((i+180)%360+360)%360-180;function Ex(i,e,t){return gd(i+md(t)*e)}function Fh(i,e){const t=gd(i),n=e/2;return Math.abs(t)<=n?"clean":Math.abs(t)<=n+_i.roughMargin?"rough":t<0?"early":"late"}function Ax(i){return i>=90?"DIAL: WILD. Sleep.":i>=70?"DIAL: SHAKY. Sleep resets it.":i>=40?"DIAL: drifting. You are getting tired.":"DIAL: steady (rested)"}const Pr={max:20,lockEvery:.06,hold:3.4};function Cx(i,e,t){const n=Math.max(1,Math.round(e*(.35+i*.75)));return t==="clean"?n:t==="rough"?Math.max(1,Math.round(n*.6)):Math.floor(n*.25+.5*Math.random())}const hl=i=>1+.2*i,vd=i=>48+12*i,yd=i=>8+1.5*i,xd=i=>7+2.5*i,Yl=[{id:"window",name:"Steady Hands",costs:[4,7,11],desc:i=>`timing window x${hl(i).toFixed(1)}`},{id:"cargo",name:"Cargo Racks",costs:[3,6,10,15],desc:i=>`cargo ${vd(i)}`},{id:"range",name:"Long Tether",costs:[4,8,12],desc:i=>`lock range ${yd(i).toFixed(1)}`},{id:"brake",name:"Retro Brakes",costs:[3,6,9],desc:i=>`stop in ~${(Math.log(45)/xd(i)).toFixed(2)}s`}],Rx=(i,e)=>Yl.find(n=>n.id===e).costs[i.get().up[e]]??null;function Px(i,e){const t=Yl.find(a=>a.id===e);if(!t)return null;const n=i.get(),s=n.up[e],r=t.costs[s];if(r===void 0||n.scrap<r)return null;const o={...n.up,[e]:s+1};return i.set({scrap:n.scrap-r,up:o,...e==="cargo"?{cargoCap:vd(s+1)}:{}}),`${t.name} tier ${s+1}: ${t.desc(s+1)}.`}const Xt={speed:9,turn:2.4,oxygenPerSec:.6,junkCount:45,eyeHeight:.35,pitchRate:1.3,rollRate:1.6,vertSpeed:.75,sector:58},Bh={box:()=>new Ye(1.3,.9,.9),cyl:()=>new Vt(.5,.5,1,8),ico:()=>new Nl(.8,0),tet:()=>new Fl(.9),cone:()=>new dn(.55,1.2,7)},Ix=new un().setFromAxisAngle(new E(0,1,0),Math.PI),Ls=i=>i.material;class Lx{constructor(e,t){V(this,"scene",new bn);V(this,"camera");V(this,"pos",new E);V(this,"junk",[]);V(this,"keys",new Set);V(this,"orient",new un);V(this,"vel",new E);V(this,"roll",0);V(this,"stars");V(this,"dustBase",new Float32Array(240*3));V(this,"dust");V(this,"beam");V(this,"beamCore");V(this,"beamGlow");V(this,"sparks");V(this,"shake",0);V(this,"streaks");V(this,"target",null);V(this,"locked",null);V(this,"batch",[]);V(this,"dialStart",150);V(this,"dialT",0);V(this,"lockAcc",0);V(this,"lastBatch",null);V(this,"nav","braking");V(this,"charge",0);V(this,"charging",!1);V(this,"hint","");V(this,"pressed",!1);V(this,"mouse",{x:-1,y:-1});V(this,"onReturn");V(this,"sky");V(this,"resultUntil",0);V(this,"message","");V(this,"toast","");V(this,"toastUntil",0);V(this,"t",0);V(this,"logbookIdx",0);V(this,"forced",!1);V(this,"fatigueEnabled",!0);V(this,"ghosts",[]);V(this,"glitchUntil",0);V(this,"nextGlitch",12);V(this,"nextHallu",8);V(this,"ghostSaid",0);V(this,"haul",[]);V(this,"finds",[]);V(this,"manualSort",!1);V(this,"lastReport",null);V(this,"field","quiet");V(this,"sortie",0);V(this,"fixedField",null);V(this,"guided",!1);V(this,"banner","");V(this,"bannerUntil",0);V(this,"fx",new vt);V(this,"frags",[]);V(this,"stormT",0);V(this,"hitCool",0);V(this,"hulk",null);V(this,"magnet",null);V(this,"ambient");V(this,"sunLight");V(this,"orb");V(this,"critSaid",!1);this.store=e,this.camera=t,this.scene.background=new Te(131850),this.ambient=new fs(4872312,.9),this.scene.add(this.ambient,this.fx);const n=this.sunLight=new Jr(16773336,2.2);n.position.set(-20,30,10),this.scene.add(n);const s=new ht,r=[];for(let l=0;l<900;l++){const c=Math.random()*2-1,h=Math.random()*6.283,u=Math.sqrt(1-c*c),f=120;r.push(Math.cos(h)*u*f,c*f,Math.sin(h)*u*f)}s.setAttribute("position",new $e(r,3)),this.stars=new Us(s,new es({color:12570879,size:.6,fog:!1})),this.stars.frustumCulled=!1,this.scene.add(this.stars),this.sky=new vt,this.sky.renderOrder=-10,this.scene.add(this.sky);const o=(l,c,h,u)=>{const f=new ne(new st(c,32,20),new Ne({color:h,fog:!1,depthWrite:!1}));f.position.set(...l).setLength(105),f.renderOrder=-9,this.sky.add(f);for(const[p,g]of[[1.08,.25],[1.2,.1]]){const v=new ne(new st(c*p,32,20),new Ne({color:u,transparent:!0,opacity:g,fog:!1,depthWrite:!1,side:bt,blending:Ht}));v.position.copy(f.position),v.renderOrder=-9,this.sky.add(v)}f.userData.sky=!0};o([60,-15,90],26,9062960,16751200),o([-80,25,-40],12,3824234,8438015);const a=new Vt(1,1,1,10,1,!0).translate(0,.5,0);this.beamCore=new ne(a,new Ne({color:4259776,transparent:!0,opacity:.95,blending:Ht,depthWrite:!1})),this.beamGlow=new ne(a,new Ne({color:4259776,transparent:!0,opacity:.25,blending:Ht,depthWrite:!1,side:Tt})),this.beam=new vt,this.beam.add(this.beamCore,this.beamGlow),this.beam.visible=!1,this.beam.frustumCulled=!1,this.scene.add(this.beam),this.sparks=new Us(new ht().setAttribute("position",new Pt(new Float32Array(30*3),3)),new es({color:16777215,size:.14,transparent:!0,blending:Ht,depthWrite:!1})),this.sparks.frustumCulled=!1,this.sparks.visible=!1,this.scene.add(this.sparks),this.streaks=new iy(new ht().setAttribute("position",new Pt(new Float32Array(240*6),3)),new Il({color:12572927,transparent:!0,opacity:0,blending:Ht,depthWrite:!1})),this.streaks.frustumCulled=!1,this.scene.add(this.streaks);for(let l=0;l<this.dustBase.length;l++)this.dustBase[l]=(Math.random()-.5)*40;this.dust=new Us(new ht().setAttribute("position",new Pt(new Float32Array(this.dustBase),3)),new es({color:10467544,size:.07,transparent:!0,opacity:.6})),this.dust.frustumCulled=!1,this.scene.add(this.dust);for(let l=0;l<Xt.junkCount;l++)this.spawn(Ih(Math.random));this.junk.some(l=>l.rare)||this.convertToRare(this.junk[this.junk.length-1],"logbook"),typeof addEventListener=="function"&&(addEventListener("keydown",l=>{if(this.store.get().mode==="fly"){if(l.code==="Space"){this.pressed||(this.pressed=!0,this.press());return}if(l.code==="KeyF"){this.scanHulk();return}this.keys.add(l.code),(l.code==="Escape"||l.code==="KeyR")&&this.exit()}}),addEventListener("keyup",l=>{this.keys.delete(l.code),l.code==="Space"&&this.pressed&&(this.pressed=!1,this.release())}),addEventListener("mousemove",l=>{this.mouse.x=l.clientX,this.mouse.y=l.clientY}),addEventListener("mousedown",l=>{var c;this.store.get().mode!=="fly"||((c=l.target)==null?void 0:c.tagName)!=="CANVAS"||(this.mouse.x=l.clientX,this.mouse.y=l.clientY,this.pressed=!0,this.press(l.clientX,l.clientY))}),addEventListener("mouseup",()=>{this.pressed&&(this.pressed=!1,this.release())}))}get yaw(){const e=this.forward();return Math.atan2(e.x,e.z)}set yaw(e){const t=this.pitch;this.orient.setFromEuler(new $t(-t,e,0,"YXZ"))}get pitch(){return Math.asin(Math.max(-1,Math.min(1,this.forward().y)))}set pitch(e){const t=this.yaw;this.orient.setFromEuler(new $t(-e,t,0,"YXZ"))}up(){return new E(0,1,0).applyQuaternion(this.orient)}right(){return new E(1,0,0).applyQuaternion(this.orient)}place(e){const t=6+Math.random()*42,n=Math.random()*2-1,s=Math.random()*Math.PI*2,r=Math.sqrt(1-n*n);e.position.set(Math.cos(s)*r*t,n*t,Math.sin(s)*r*t)}spawn(e,t){const n=Rh[Math.floor(Math.random()*Rh.length)],s=.7+Math.random()*.7,r=new ne(Bh[n.shape](),new Ze({color:n.colour,flatShading:!0,roughness:.8,emissive:n.colour,emissiveIntensity:.12}));r.scale.setScalar(s),t?r.position.copy(t):this.place(r),this.scene.add(r);const o={mesh:r,hp:1,maxHp:1,ore:n.ore,spin:new E(...[0,0,0].map(()=>(.25+Math.random()*1.1)*(Math.random()<.5?-1:1))),name:n.name,lore:n.lore,rare:null,size:s,win:sa(s,Math.random()),outline:new ne(r.geometry,new Ne({color:4259744,side:bt})),ring:new ne(new Ol(.96,1,48),new Ne({color:4259744,transparent:!0,opacity:.7,side:Tt,depthTest:!1}))};return o.outline.scale.setScalar(1.14),o.outline.visible=!1,r.add(o.outline),o.ring.visible=!1,o.ring.renderOrder=5,this.scene.add(o.ring),Ls(r).transparent=!0,this.junk.push(o),e&&this.convertToRare(o,e),o}convertToRare(e,t){const n=e.mesh;e.rare=t;const s=n.material;if(t==="cube"){n.geometry=new Ye(1.5,1.5,1.5),s.color.set(5857644),s.emissive.set(5909664),s.emissiveIntensity=.1,e.name="Sealed container",e.lore="Welded shut from the inside.",e.ore=3,n.scale.setScalar(1.5),e.size=1.5,e.win=sa(1.5,.5),e.outline.geometry=n.geometry,e.spin.multiplyScalar(.35);return}t==="wreck"&&(e.ore=3),(t==="egg"||t==="whisper"||t==="creature")&&(e.ore=Math.max(e.ore,2))}speedFactor(){const e=this.store.get();return ex(e.cargo,e.cargoCap)}eye(){return this.pos.clone().addScaledVector(this.up(),Xt.eyeHeight)}forward(){return new E(0,0,1).applyQuaternion(this.orient)}get range(){return yd(this.store.get().up.range)}windowOf(e){const t=hl(this.store.get().up.window),n=(e.win[0]+e.win[1])/2,s=(e.win[1]-e.win[0])*t*(this.fatigueEnabled?ux(ls(this.store.get().fatigue)):1)*(this.store.get().flags.boost?1.15:1),r=this.field==="magnet"?_x(this.t):0;return[Math.max(.05,n-s/2+r),Math.min(.97,n+s/2+r)]}showToast(e,t=5){this.toast=e,this.toastUntil=this.t+t}restock(){for(;this.junk.length<Xt.junkCount;)this.spawn(Ih(Math.random,od*Gr[this.field].rareMul*My(Qn(this.store.get()))));Hr(this.store.get().logsFound)&&!this.junk.some(e=>e.rare==="logbook")&&this.convertToRare(this.junk[this.junk.length-1],"logbook")}enter(e){const t=this.store.get().stats.trips===0&&this.store.get().stats.clean+this.store.get().stats.shatters===0;this.field=e??this.fixedField??xx(this.sortie+(this.store.get().day-1)*3,this.sortie===0?null:this.field,Math.random),this.sortie++,this.guided=!e&&!this.fixedField&&t,this.buildField(),this.pos.set(0,0,0),this.orient.identity(),this.vel.set(0,0,0),this.nav="braking",this.locked=null,this.charging=!1,this.charge=0,this.forced=!1,this.critSaid=!1,this.haul=[],this.finds=[],this.resultUntil=0,this.nextGlitch=this.t+12,this.nextHallu=this.t+8,this.store.set({mode:"fly",cargo:0});const n=Gr[this.field];this.banner=n.banner,this.bannerUntil=this.t+5.5,this.showToast(this.guided?"Cockpit online. Follow the steps at the top.":n.tip,6)}buildField(){const e=Gr[this.field];for(const t of this.junk)this.scene.remove(t.mesh),this.scene.remove(t.ring);this.junk.length=0,this.fx.clear(),this.ghosts=[],this.frags=[],this.hulk=null,this.magnet=null,this.orb=void 0,this.stormT=0,this.hitCool=0,this.scene.background.set(e.bg),this.ambient.color.set(e.ambient),this.sunLight.color.set(e.sunColour),this.restock();for(let t=0;t<7;t++){const n=t===0?new E(.5,.3,9):new E(0,0,1).applyAxisAngle(new E(1,0,0),(Math.random()-.5)*1.6).applyAxisAngle(new E(0,1,0),Math.random()*6.283).multiplyScalar(12+Math.random()*28),s=18+Math.floor(Math.random()*9);for(let r=0;r<s;r++){const o=new E(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(5.2),a=this.spawn(null,n.clone().add(o)),l=.32+Math.random()*.24;a.mesh.scale.setScalar(l),a.size=l,a.ore=1,a.small=!0}}if(this.field==="storm")for(let t=0;t<8;t++){const n=this.spawn(null);n.mesh.scale.setScalar(1.7+Math.random()*.4),n.size=n.mesh.scale.x,n.ore+=2,n.win=sa(n.size,Math.random())}if(this.field==="hulk"&&this.buildHulk(),this.field==="magnet"&&this.buildMagnet(),this.store.get().cubeState==="none"&&(this.sortie>=2||this.store.get().cubeChoice==="jettisoned")){const t=new E(0,0,1).applyAxisAngle(new E(1,0,0),(Math.random()-.5)*1.2).applyAxisAngle(new E(0,1,0),Math.random()*6.283).multiplyScalar(18+Math.random()*12);this.hulk&&t.distanceTo(this.hulk.c)<12&&t.negate(),this.convertToRare(this.spawn(null,t),"cube")}this.guided&&(this.convertToRare(this.spawn(null,new E(1.5,1.2,13)),"creature"),Hr(this.store.get().logsFound)&&this.convertToRare(this.spawn(null,new E(-8,2,15)),"logbook"))}buildHulk(){const e=new E((Math.random()<.5?-1:1)*7,3,27),t=new vt;t.position.copy(e),this.fx.add(t);const n=new Ze({color:2898490,flatShading:!0,roughness:.9}),s=[],r=new ne(new Ye(11,3.2,3.4),n),o=new ne(new dn(1.8,3.5,6),n);o.rotation.z=-Math.PI/2,o.position.set(7.2,0,0);const a=new ne(new Ye(3,.3,6),n);a.position.set(-3,1.2,0),a.rotation.z=.15;const l=new ne(new Vt(1.1,1.4,2,8),new Ze({color:1712160}));l.rotation.z=Math.PI/2,l.position.set(-6.4,0,0),t.add(r,o,a,l),t.rotation.set(.1,.5,.18);for(let c=0;c<7;c++){const h=new ne(new Ye(.6,.35,.05),new Ne({color:16760928}));h.position.set(-4+c*1.3,.5,1.72),h.visible=!1,t.add(h),s.push(h)}this.hulk={c:e,g:t,woke:!1,lamps:s};for(let c=0;c<8;c++){const h=c/8*Math.PI*2,u=e.clone().add(new E(Math.cos(h)*(7.5+c%2),c%3*1.3-1.3,Math.sin(h)*6-4.5)),f=this.spawn(null,u);f.ore*=2,Ls(f.mesh).emissive.set(13672480),Ls(f.mesh).emissiveIntensity=.35,f.name="Hulk Salvage: "+f.name}this.convertToRare(this.spawn(null,e.clone().add(new E(0,3.6,2))),"wreck")}buildMagnet(){const e=new E(0,1,24).applyAxisAngle(new E(0,1,0),Math.random()*6.283);this.magnet=e;const t=new vt;t.position.copy(e);const n=new ne(new st(1.1,18,14),new Ne({color:12615935})),s=new ne(new Ut(1.9,.07,8,40),new Ne({color:10510591})),r=s.clone();r.rotation.x=Math.PI/2;const o=new ne(new st(2.6,16,12),new Ne({color:8405247,transparent:!0,opacity:.18,blending:Ht,depthWrite:!1}));t.add(n,s,r,o,new Ot(10510591,6,22)),this.fx.add(t),this.orb=t;for(const a of this.junk)a.mesh.position.distanceTo(e)<5&&a.mesh.position.add(new E(0,0,8).applyAxisAngle(new E(0,1,0),Math.random()*6))}updateFatigue(e,t){const n=t>=3?6:t>=2?3:0,s=this.eye();for(;this.ghosts.length<n;){const r=new ne(Bh[["box","cyl","ico","tet","cone"][Math.floor(Math.random()*5)]](),new Ne({color:10467583,transparent:!0,opacity:.35,wireframe:Math.random()<.5})),o=new E(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(12+Math.random()*22);r.position.copy(s).add(o),r.scale.setScalar(.9+Math.random()*.7),this.fx.add(r),this.ghosts.push({m:r,seed:Math.random()*9})}for(let r=this.ghosts.length-1;r>=0;r--){const o=this.ghosts[r];o.m.rotation.x+=e*.6,o.m.rotation.y+=e*.9,o.m.material.opacity=.18+.2*(.5+.5*Math.sin(this.t*5+o.seed)),(this.ghosts.length>n||o.m.position.distanceTo(s)<7)&&(this.ghosts.length<=n&&this.t-this.ghostSaid>6&&(this.ghostSaid=this.t,this.showToast("It was never there.",2.5),de.blip(300,.3,"sine",.05,120)),this.fx.remove(o.m),this.ghosts.splice(r,1))}t>=2&&this.t>this.nextHallu&&(this.nextHallu=this.t+7+Math.random()*8,de.hallucinate(),Math.random()<.5&&this.showToast(["(Did something just knock?)","(Was that a whisper? It was a whisper.)","(The hull ticked. Hulls do that. Right?)"][Math.floor(Math.random()*3)],3)),t>=3&&this.t>this.nextGlitch&&(this.nextGlitch=this.t+10+Math.random()*8,this.glitchUntil=this.t+2.6,de.warn())}updateField(e,t){if(this.field==="storm"){if(this.stormT+=e,this.stormT>Jn.grace&&this.frags.length<Jn.max&&this.stormT%Jn.every<e){const n=new E(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),s=t.clone().addScaledVector(n,42),o=t.clone().add(new E(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(5)).sub(s).normalize().multiplyScalar(10+Math.random()*4),a=new ne(new dn(.16,1.4,6),new Ne({color:16747056}));a.position.copy(s),a.quaternion.setFromUnitVectors(new E(0,1,0),o.clone().normalize().negate()),this.fx.add(a),this.frags.push({m:a,v:o})}this.hitCool=Math.max(0,this.hitCool-e);for(let n=this.frags.length-1;n>=0;n--){const s=this.frags[n];s.m.position.addScaledVector(s.v,e);let r=s.m.position.distanceTo(t)>60;for(const o of this.junk)if(o.size>=Jn.shelterSize&&s.m.position.distanceTo(o.mesh.position)<o.size*.95+.2){r=!0,this.shake=Math.max(this.shake,.08);break}if(!r&&s.m.position.distanceTo(t)<Jn.hitRadius&&this.hitCool<=0){r=!0,this.hitCool=.8;const o=this.store.get().hull,a=bx(o);a>0?(this.store.set({hull:o-a}),this.shake=Math.max(this.shake,.7),de.shatter(),this.cancelCharge("Hit by debris: lock lost."),this.showToast(`HIT! Hull -${a}. Get behind a big rock.`,2.5)):this.critSaid||(this.critSaid=!0,this.showToast("Hull critical: the storm is going easy on you. Repair patches are at the Transmogrifier.",5))}r&&(this.fx.remove(s.m),this.frags.splice(n,1))}}if(this.hulk){const n=this.hulk,s=t.distanceTo(n.c);if(s<7.2){const r=t.clone().sub(n.c).normalize();this.pos.addScaledVector(r,7.2-s);const o=this.vel.dot(r);o<0&&(this.vel.addScaledVector(r,-o*1.4),this.vel.multiplyScalar(.5),o<-2&&this.hitCool<=0&&(this.shake=Math.max(this.shake,.5),de.shatter(),this.showToast("BONK. The hulk is solid. Your nose is fine. Probably.",2),this.hitCool=1))}!n.woke&&s<17&&(n.woke=!0,n.lamps.forEach(r=>r.visible=!0),this.shake=Math.max(this.shake,.4),de.door(),de.ping(),this.showToast('A derelict hauler wakes. A dusty speaker: "WELCOME BACK, CONTRACTOR 1." Salvage glows around the hull. Press F near it to scan.',9)),n.woke&&n.lamps.forEach((r,o)=>r.material.color.setHex(Math.sin(this.t*2+o)>-.6?16760928:6307872))}if(this.magnet){const n=this.magnet;this.orb&&(this.orb.rotation.y+=e*.8,this.orb.children[1].rotation.x+=e);for(const s of this.junk){if(s===this.locked)continue;const r=s.mesh.position.clone().sub(n),o=r.length();o>38||o<.01||(o>7&&r.multiplyScalar(1-.9*e/o),r.applyAxisAngle(new E(0,1,0),.14*e*Math.min(1,12/o)),s.mesh.position.copy(n).add(r))}}}scanHulk(){const e=this.hulk;if(!e||e.scanned||this.eye().distanceTo(e.c)>14)return null;e.scanned=!0,de.rare();const t=Hr(this.store.get().logsFound),n=e.c.clone().add(new E(0,4.5,0));this.convertToRare(this.spawn(null,n),t?"logbook":"creature");const s='SCAN: Halcyon hauler, Contractor 1. Hold sealed, crew bunk empty, a note taped to the helm: "the cube was not in the manifest." Something floated free of the hull.';return this.showToast(s,9),s}exit(){var e;this.store.get().mode==="fly"&&((e=this.onReturn)==null||e.call(this))}bankAndLeave(){const e=this.store.get(),t={pieces:this.haul.length,units:e.cargo,items:this.haul,finds:[...this.finds]};this.store.set({flags:{...e.flags,boost:0}}),this.store.set({mode:"rooms",scrap:e.scrap+ad(e.cargo),debt:cx(e.debt,e.cargo),cargo:0,crates:Math.min(2,e.crates+1),stats:{...e.stats,trips:e.stats.trips+1},cubeState:e.cubeState==="carried"?"aboard":e.cubeState,...this.fatigueEnabled?{fatigue:Math.min(Cr.maxAvoidable,e.fatigue+Cr.perBank)}:{},report:this.manualSort?t:null}),this.manualSort||t.finds.forEach(s=>cl(this.store,s)),this.lastReport=t,this.haul=[],this.finds=[],this.beam.visible=!1,this.sparks.visible=!1,this.charging=!1,this.locked=null,de.chargeTone(null),de.engine(0,!1);const n=this.camera.userData.baseFov;n&&(this.camera.fov=n,this.camera.updateProjectionMatrix()),this.camera.quaternion.identity()}estimate(e){return ix(e.size,e.ore).text}updateDust(){const e=this.dust.geometry.getAttribute("position"),t=40,n=[this.pos.x,this.pos.y,this.pos.z];for(let a=0;a<this.dustBase.length;a++){const l=this.dustBase[a]-n[a%3];e.array[a]=n[a%3]+((l+t/2)%t+t)%t-t/2}e.needsUpdate=!0;const s=this.vel.length(),r=this.streaks.geometry.getAttribute("position"),o=Math.min(.09,.012*s);for(let a=0;a<this.dustBase.length/3;a++)for(let l=0;l<3;l++){const c=e.array[a*3+l];r.array[a*6+l]=c,r.array[a*6+3+l]=c-this.vel.getComponent(l)*o*4}r.needsUpdate=!0,this.streaks.material.opacity=Math.max(0,Math.min(.75,(s-1.2)/8))}dialFatigue(){return this.fatigueEnabled?this.store.get().fatigue:0}dialState(){const e=this.dialFatigue(),t=Tx(e,hl(this.store.get().up.window)),n=this.charging?this.dialT:this.t;return{centre:Ex(this.dialStart,n,e),width:t,speed:md(e),label:Ax(e),fatigue:e}}pinDial(e){this.dialStart=e-this.dialState().speed*(this.charging?this.dialT:this.t)}inWindow(){if(!this.locked||!this.charging)return!1;const e=this.dialState();return Fh(e.centre,e.width)==="clean"}minable(e,t,n){return e.mesh.position.distanceTo(t)<=this.range&&e.mesh.position.clone().sub(t).normalize().dot(n)>.5}press(e=this.mouse.x,t=this.mouse.y){const n=this.store.get();if(n.mode!=="fly"||this.charging)return;if(this.nav!=="anchored")return this.showToast("Hold still to anchor first (release W/S).",2.5);if(n.cargo>=n.cargoCap)return this.showToast("Cargo full. Press R to return.",2.5);let s=this.target;if(e>=0&&typeof innerWidth<"u"){const r=this.eye(),o=this.forward();let a=140;for(const l of this.junk){if(!this.minable(l,r,o))continue;const c=l.mesh.position.clone().project(this.camera),h=Math.hypot((c.x+1)/2*innerWidth-e,(1-c.y)/2*innerHeight-t);h<a&&(a=h,s=l)}}if(!s)return this.showToast("No rock in range. Turn (A/D) toward a glowing rock.",2.5);this.locked=s,this.charging=!0,this.charge=0,this.batch=[s],this.dialT=0,this.lockAcc=0,this.dialStart=200+Math.random()*60,de.lock(),this.tetherSaid||(this.tetherSaid=!0,this.showToast("Tether hooked. Crank. The socket next to the crank is smooth and oval, and nothing you own fits it.",4))}release(){if(!this.charging||!this.locked)return;const e=this.dialState(),t=Fh(e.centre,e.width),n=this.batch.filter(a=>this.junk.includes(a));this.charging=!1,this.locked=null,this.beam.visible=!1,this.sparks.visible=!1,de.chargeTone(null),this.batch=[],t==="clean"||t==="rough"?(this.shake=Math.max(this.shake,t==="clean"?.25:.5),de.clean()):(this.shake=1,de.shatter());{const a=this.store.get().stats;this.store.set({stats:{...a,clean:a.clean+(t==="clean"?1:0),shatters:a.shatters+(t==="early"||t==="late"?1:0)}})}const s=this.store.get().cargo;for(const a of n){const l=n.length===1&&!a.small?ld(a.size,a.ore,t==="clean"||t==="rough"):Cx(a.size,a.ore,t);this.collect(a,l,t==="clean"?"CLEAN HAUL":"X",!0)}const r=this.store.get().cargo-s;this.lastBatch={n:n.length,judge:t,units:r};const o=t==="clean"?"CLEAN BATCH":t==="rough"?"ROUGH BATCH (edge of the green)":t==="early"?"SHATTERED BATCH (too early)":"SHATTERED BATCH (too late)";this.showToast(`${o}: ${n.length} piece${n.length===1?"":"s"}, +${r} mass aboard${e.fatigue>=70&&t!=="clean"?". Your hands are shaking. Sleep.":""}`,3.5),this.resultUntil=this.t+3}cancelCharge(e){this.charging&&(this.batch=[],this.charging=!1,this.locked=null,this.charge=0,this.beam.visible=!1,this.sparks.visible=!1,de.chargeTone(null),de.warn(),this.showToast(e,2.5))}update(e){const t=this.store.get();if(t.mode!=="fly")return;this.t+=e;const n=this.keys,s=this.speedFactor(),r=(n.has("KeyA")||n.has("ArrowLeft")?1:0)-(n.has("KeyD")||n.has("ArrowRight")?1:0),o=(n.has("ArrowUp")?1:0)-(n.has("ArrowDown")?1:0),a=(n.has("KeyC")?1:0)-(n.has("KeyZ")?1:0),l=(n.has("KeyW")?1:0)-(n.has("KeyS")?.6:0),c=(n.has("KeyE")?1:0)-(n.has("KeyQ")?1:0),h=this.nav==="anchored"?.5:1;this.roll+=(r*.08-this.roll)*Math.min(1,6*e);const u=new un().setFromEuler(new $t(-o*Xt.pitchRate*h*e,r*Xt.turn*h*(.6+.4*s)*e,a*Xt.rollRate*h*e,"YXZ"));if(this.orient.multiply(u).normalize(),l!==0||c!==0){this.nav="fly",this.cancelCharge("Moved: lock lost.");const x=this.forward().multiplyScalar(l*Xt.speed).addScaledVector(this.up(),c*Xt.speed*Xt.vertSpeed);this.vel.lerp(x,1-Math.exp(-2.5*s*e))}else this.vel.multiplyScalar(Math.exp(-xd(this.store.get().up.brake)*(.4+.6*s)*e)),this.vel.length()<.2?(this.vel.set(0,0,0),this.nav="anchored"):this.nav="braking";this.pos.addScaledVector(this.vel,e),this.pos.length()>Xt.sector&&(this.pos.setLength(Xt.sector),this.vel.multiplyScalar(.3),this.showToast("Sector edge: turn back.",2)),this.updateDust(),this.updateField(e,this.eye());for(const x of this.junk)x.drift&&x.mesh.position.addScaledVector(x.drift,e),x.mesh.rotation.x+=x.spin.x*e,x.mesh.rotation.y+=x.spin.y*e,x.mesh.rotation.z+=x.spin.z*e;const f=this.fatigueEnabled?ls(t.fatigue):0,p=(this.hulk&&this.eye().distanceTo(this.hulk.c)<14?1.25:1)*dx(f);if(this.store.set({oxygen:t.oxygen-Xt.oxygenPerSec*p*e,...this.fatigueEnabled?{fatigue:Math.min(Cr.maxAvoidable,t.fatigue+Cr.perFlySec*e)}:{}}),this.updateFatigue(e,f),this.store.get().oxygen<=0&&!this.forced){this.forced=!0;const x=this.store.get().cargo;this.store.set({cargo:Math.floor(x/2),oxygen:15}),this.cancelCharge("Out of air."),this.showToast("OUT OF AIR. Autopilot is hauling you home. Half the cargo went out the airlock.",6),de.warn(),this.exit()}const g=this.forward(),v=this.eye();this.target=null;let m=1/0;for(const x of this.junk){const b=this.minable(x,v,g),I=x===this.locked||this.batch.includes(x);b&&x.mesh.position.distanceTo(v)<m&&(m=x.mesh.position.distanceTo(v),this.target=x);const A=x.mesh.position.distanceTo(v)<=this.range;x.outline.visible=A,Ls(x.mesh).opacity=A?1:.45,!x.rare&&!x.name.startsWith("Hulk")&&(Ls(x.mesh).emissiveIntensity=A?.35+.15*Math.sin(this.t*5):.18),x.ring.visible=A,x.ring.position.copy(x.mesh.position),x.ring.lookAt(this.camera.position),x.ring.scale.setScalar(x.size*1.5+(I?.1*Math.sin(this.t*12):0)),x.ring.material.color.set(I?this.inWindow()?16777215:16769088:4259744)}if(this.locked&&this.locked.mesh.position.distanceTo(v)>this.range*1.25&&this.cancelCharge("Rock drifted out of range."),this.charging&&this.locked){for(this.charge+=e/Pr.hold,this.dialT+=e,this.lockAcc+=e;this.lockAcc>=Pr.lockEvery&&this.batch.length<Pr.max&&this.store.get().cargo<this.store.get().cargoCap;){this.lockAcc-=Pr.lockEvery;let T=null,D=1/0;for(const k of this.junk){if(this.batch.includes(k)||!this.minable(k,v,g))continue;const G=k.mesh.position.distanceTo(this.locked.mesh.position);G<D&&(D=G,T=k)}if(!T){this.lockAcc=0;break}this.batch.push(T),de.blip(900+this.batch.length*30,.03,"square",.03)}const x=v.clone().addScaledVector(g,.6).addScaledVector(this.up(),-.3),b=this.locked.mesh.position,I=b.clone().sub(x),A=I.length(),C=this.inWindow();this.beam.visible=!0,this.beam.position.copy(x),this.beam.quaternion.setFromUnitVectors(new E(0,1,0),I.normalize());const R=(.015+.05*Math.min(1,this.charge))*(1+.25*Math.sin(this.t*45));this.beamCore.scale.set(R,A,R),this.beamGlow.scale.set(R*3.2,A,R*3.2);const M=C?16777215:new Te(4259776).lerp(new Te(16764992),Math.min(1,this.charge));this.beamCore.material.color.set(M),this.beamGlow.material.color.set(M),this.sparks.visible=!0,this.sparks.position.copy(b);const _=this.sparks.geometry.getAttribute("position");for(let T=0;T<30;T++){const D=Math.random()*6.283,k=Math.acos(Math.random()*2-1),G=this.locked.size*(.7+Math.random()*.5);_.setXYZ(T,Math.sin(k)*Math.cos(D)*G,Math.sin(k)*Math.sin(D)*G,Math.cos(k)*G)}_.needsUpdate=!0,de.chargeTone(this.charge,C),this.charge>=1&&this.release()}else this.sparks.visible=!1;const d=this.store.get().cargo>=t.cargoCap;if(this.message=d?"CARGO FULL - press R to return":this.hulk&&v.distanceTo(this.hulk.c)<14?this.hulk.scanned?"DERELICT: reactor leak, air draining a little faster":"DERELICT HAULER: press F to scan (air drains a little faster here)":this.store.get().oxygen<25?"AIR LOW: head home soon (R). At zero the autopilot drags you back.":"",this.hint=tx(this.nav,this.charging,!!this.target,this.inWindow()),this.camera.position.copy(v).addScaledVector(this.up(),Math.sin(this.t*1.7)*.01),this.camera.quaternion.copy(this.orient).multiply(Ix).multiply(new un().setFromAxisAngle(new E(0,0,1),this.roll)),this.shake>.001){const x=this.shake;this.camera.position.add(new E((Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x,(Math.random()-.5)*.12*x)),this.camera.quaternion.multiply(new un().setFromEuler(new $t((Math.random()-.5)*.05*x,(Math.random()-.5)*.05*x,(Math.random()-.5)*.08*x))),this.shake*=Math.exp(-5*e)}const y=this.camera.userData.baseFov??this.camera.fov;this.camera.fov=y*(1+.07*Math.min(1,this.vel.length()/Xt.speed)),this.camera.updateProjectionMatrix(),de.engine(Math.min(1,this.vel.length()/Xt.speed)*(l!==0||c!==0?1:.5)),this.stars.position.copy(this.pos),this.sky.position.copy(this.camera.position)}collect(e,t=e.ore,n="",s=!1){this.scene.remove(e.mesh),this.scene.remove(e.ring),this.junk.splice(this.junk.indexOf(e),1),this.target=null,this.locked=null;const r=this.store.get(),o=Math.min(t,r.cargoCap-r.cargo),a={cargo:Math.min(r.cargoCap,r.cargo+t)};this.haul.push({name:e.name,lore:e.lore,units:o,clean:/^CLEAN/.test(n)||n===""}),e.rare&&(this.finds.push(e.rare),de.rare(),e.rare==="cube"&&(a.cubeState="carried")),s||(this.showToast(n?`${n}: +${o} aboard (confirmed at the bench)`:`+${o} aboard`,3.5),this.resultUntil=this.t+3),this.store.set(a)}render(e){e.render(this.scene,this.camera)}}class Dx{constructor(e,t){V(this,"el",document.createElement("div"));V(this,"q",e=>this.el.querySelector("#"+e));V(this,"rx",-1);V(this,"ry",-1);this.store=e,this.fly=t,this.el.id="cockpit";const n=(s,r,o)=>`<div class="dial"><i id="d-${s}" style="--c:${o};--v:100"></i><b id="n-${s}"></b><span>${r}</span></div>`;this.el.innerHTML=`
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
#cockpit .siport{position:absolute;bottom:22vh;left:22vw;width:min(5vw,8vh);height:min(7vw,11vh);border-radius:50%;background:radial-gradient(ellipse,#020205 55%,#dfe6f2 58%,#9aa6bc 70%,transparent 72%);opacity:.95}
#cockpit .siport:before,#cockpit .siport:after{content:"";position:absolute;left:-15%;right:-15%;top:45%;height:14%;background:#c8bfa8;transform:rotate(35deg);box-shadow:0 1px 2px #0008}#cockpit .siport:after{transform:rotate(-35deg)}
#cockpit .tapelbl{position:absolute;font:bold max(9px,.8vw) "Comic Sans MS",cursive;color:#2a2018;padding:1px 6px;transform:rotate(-3deg);box-shadow:0 1px 2px #0008}
#cockpit .tether{position:absolute;bottom:22vh;right:22vw;width:max(110px,9vw);padding:4px 6px;border:2px dashed #c0a050;background:rgba(20,14,4,.85);color:#e8d090;font-size:max(10px,.8vw);text-align:center}
#cockpit .tether .crank{display:inline-block;width:14px;height:14px;border:2px solid #c0a050;border-radius:50%;border-top-color:#c03030;vertical-align:middle;margin-right:4px}
#cockpit .tether.on .crank{animation:crank .5s linear infinite}@keyframes crank{to{transform:rotate(360deg)}}
#cockpit button{pointer-events:auto}
#cockpit .glow{position:absolute;bottom:0;width:30vw;height:26vh;opacity:0;background:radial-gradient(ellipse at 50% 100%,rgba(90,170,255,.55),transparent 65%);mix-blend-mode:screen}#cockpit .glow.l{left:-4vw}#cockpit .glow.r{right:-4vw}
</style>
<div class="top"></div><div class="strut l"></div><div class="strut r"></div>
<div class="legend">W/S thrust &middot; A/D turn &middot; &uarr;/&darr; pitch (no limit) &middot; Z/C roll &middot; E/Q ship up/down &middot; release keys to anchor &middot; Space/click mine &middot; R/Esc return</div><div class="badge" id="badge"></div><div class="hint" id="hint"></div>
<div class="ret" id="ret"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#123" stroke-width="7" opacity=".7"/><circle id="ret-win" cx="60" cy="60" r="50" fill="none" stroke="#30ff70" stroke-width="9"/><circle id="ret-p" cx="60" cy="60" r="50" fill="none" stroke="#fff" stroke-width="3" opacity=".35"/><path id="ret-needle" d="M60 2 L60 20" stroke="#fff" stroke-width="4"/></svg><div class="br" id="ret-br"></div><div id="ret-n" style="position:absolute;left:100%;top:0;margin-left:6px;font:bold 16px monospace;color:#fff;text-shadow:0 0 4px #000"></div><div id="ret-dial" style="position:absolute;top:100%;left:50%;transform:translateX(-50%);white-space:nowrap;font:12px monospace;text-shadow:0 0 3px #000;margin-top:4px"></div></div>
<div class="coach" id="coach"></div><div class="sector" id="sector"></div><div class="warn" id="warn"></div><div class="cap" id="cap"></div>
<div class="glow l" id="glow-l"></div><div class="glow r" id="glow-r"></div><div class="dash"></div>
<div class="siport" id="si-port-hud"></div><div class="tapelbl" style="bottom:19.5vh;left:20.5vw;background:#f06050">SI PORT (DO NOT)</div>
<div class="tether" id="tether"><span class="crank"></span><b>MANUAL TETHER</b><br><span id="tether-s">SLACK</span></div><div class="tapelbl" style="bottom:calc(22vh + 52px);right:21vw;background:#f4e27a;transform:rotate(2deg)">LOCK = CRANK. CHARGE = WAIT. FIRE = LET GO.</div>
<div class="row">
  <div class="dials">${n("power","POWER","#f0a020")}${n("oxygen","OXYGEN","#40c0ff")}${n("cargo","CARGO","#a0e060")}${n("fatigue","FATIGUE","#c080ff")}<div class="dial" id="tdial" title="Timing: release when the green is under the white needle. Tired = faster and smaller. Sleep resets it."><i id="d-timing" style="background:#10151d"></i><em id="tdial-needle" style="position:absolute;top:-4px;left:50%;width:4px;height:22%;margin-left:-2px;background:#fff;z-index:2;box-shadow:0 0 4px #fff"></em><b id="n-timing" style="font-size:max(10px,min(1.1vw,1.8vh))"></b><span id="tdial-lab">TIMING</span></div></div>
  <div class="attwrap"><canvas id="att" width="120" height="120"></canvas><span>ATTITUDE</span></div><div class="stickwrap"><div class="base"></div><div class="stick" id="stick"></div></div>
  <div class="cons"><h4>CONSTRUCTOR</h4><div id="cons-t"></div><div class="orb"></div></div>
</div>`,document.body.appendChild(this.el),e.subscribe(s=>{this.el.style.display=s.mode==="fly"?"block":"none"})}drawAttitude(){const e=this.q("att"),t=e.getContext("2d"),n=56,s=60,r=60,o=this.fly.camera.quaternion.clone().invert();t.clearRect(0,0,120,120),t.fillStyle="#080c14",t.beginPath(),t.arc(s,r,n,0,7),t.fill(),t.strokeStyle="#4a5a78",t.lineWidth=3,t.stroke(),t.strokeStyle="#1f2a3c",t.lineWidth=1,t.beginPath(),t.arc(s,r,n*.5,0,7),t.moveTo(s-n,r),t.lineTo(s+n,r),t.moveTo(s,r-n),t.lineTo(s,r+n),t.stroke();const a=(c,h,u)=>{const f=new this.fly.camera.position.constructor(c.x,c.y,c.z).normalize().applyQuaternion(o),p=s+f.x*n*.82,g=r-f.y*n*.82,v=f.z<0;t.strokeStyle=h,t.fillStyle=h,t.lineWidth=2.5,t.beginPath(),t.moveTo(s,r),t.lineTo(p,g),t.stroke(),t.beginPath(),t.arc(p,g,v?7:6,0,7),v?t.fill():(t.fillStyle="#080c14",t.fill(),t.stroke()),t.fillStyle=v?"#000":h,t.font="bold 9px monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(u,p,g+.5)};a({x:0,y:1,z:0},"#ffffff","U");const l=this.fly.pos;l.length()>1&&a({x:-l.x,y:-l.y,z:-l.z},"#ff9a30","H"),t.fillStyle="#9fb",t.beginPath(),t.arc(s,r,2.5,0,7),t.fill()}update(){const e=this.store.get();if(e.mode!=="fly")return;{const m=this.fly,d=m.charging&&m.inWindow()?"TAUT. LET GO.":m.charging?"CRANKING...":m.locked?"HOOKED":m.nav==="anchored"?"SLACK (anchored)":"SLACK",y=this.q("tether");this.q("tether-s").textContent!==d&&(this.q("tether-s").textContent=d),y.classList.toggle("on",m.charging)}const t=(m,d,y)=>{this.q("d-"+m).style.setProperty("--v",String(Math.max(0,Math.min(100,d)))),this.q("n-"+m).textContent=y};{const m=this.fly.dialState(),d=this.q("d-timing"),y=m.centre-m.width/2;d.style.background=`conic-gradient(from ${y.toFixed(1)}deg, #30ff70 0deg ${m.width.toFixed(1)}deg, #10151d ${m.width.toFixed(1)}deg 360deg)`,d.style.borderColor=m.fatigue>=70?"#ff6040":"#000";const x=this.q("n-timing"),b=m.fatigue>=90?"WILD":m.fatigue>=70?"SHAKY":m.fatigue>=40?"DRIFT":"STEADY";x.textContent!==b&&(x.textContent=b),x.style.color=m.fatigue>=70?"#ff8060":m.fatigue>=40?"#ffd060":"#80ffb0";const I=this.q("tdial-lab"),A=m.fatigue>=70?"TIMING (sleep!)":"TIMING";I.textContent!==A&&(I.textContent=A)}t("power",e.power,String(Math.round(e.power))),t("fatigue",e.fatigue,String(Math.round(e.fatigue))),this.q("d-fatigue").parentElement.title="Fatigue: 40 tired, 70 exhausted, 90 breaking. Sleep in the bunk to reset.",this.q("d-fatigue").parentElement.dataset.level=String(e.fatigue>=90?3:e.fatigue>=70?2:e.fatigue>=40?1:0),t("oxygen",e.oxygen,String(Math.round(e.oxygen))),t("cargo",e.cargo/e.cargoCap*100,`${e.cargo}/${e.cargoCap}`);const n=(this.fly.keys.has("KeyA")||this.fly.keys.has("ArrowLeft")?-1:0)+(this.fly.keys.has("KeyD")||this.fly.keys.has("ArrowRight")?1:0),s=(this.fly.keys.has("ArrowUp")?1:0)-(this.fly.keys.has("ArrowDown")?1:0);this.q("stick").style.transform=`rotate(${n*14}deg) skewX(${-s*8}deg)`,this.q("cons-t").innerHTML=`scrap banked: ${e.scrap}<br>debt: ${e.debt} cr<br>logs: ${e.logsFound.length}/7${e.stowaways?`<br>stowaways: ${e.stowaways}`:""}<br>speed ${Math.round(this.fly.speedFactor()*100)}%<br>pitch ${Math.round(this.fly.pitch*57.3)}&deg;<br>${ud[ls(e.fatigue)].toLowerCase()}${this.fly.up().y<-.2?'<br><b style="color:#ffd040">INVERTED</b>':""}`,this.drawAttitude();{const m=Math.min(1,this.fly.vel.length()/9);this.q("glow-l").style.opacity=this.q("glow-r").style.opacity=String(m*.8)}const r=this.fly,o=this.q("cap"),a=r.t,l=r.charging&&r.locked?r.estimate(r.locked):a<r.resultUntil?r.toast:r.target?r.estimate(r.target):a<r.toastUntil?r.toast:"";o.style.display=l?"block":"none",o.textContent=l;const c=this.q("badge"),h=r.nav==="anchored"?"ANCHORED":r.nav==="braking"?"BRAKING":"FLYING",u=r.nav==="anchored"?"#40ffa0":r.nav==="braking"?"#ffd040":"#6ac0ff";c.textContent=h,c.style.color=u,c.style.borderColor=u;const f=r.t<r.glitchUntil,p=this.q("hint");p.textContent=f?r.hint.replace(/[aeiou ]/g,m=>Math.random()<.5?"#":m):r.hint,p.style.color=r.inWindow()?"#fff":u;const g=r.locked??r.target,v=this.q("ret");if(g){const m=g.mesh.position.clone().project(r.camera),d=(m.x+1)/2*innerWidth,y=(1-m.y)/2*innerHeight;this.rx<0?(this.rx=d,this.ry=y):(this.rx+=(d-this.rx)*.4,this.ry+=(y-this.ry)*.4),v.style.display=m.z<1?"block":"none",v.style.left=this.rx+"px",v.style.top=this.ry+"px";const x=314.16,b=r.dialState(),I=this.q("ret-win"),A=this.q("ret-p"),C=((b.centre-90-b.width/2)%360+360)%360;I.style.display="block",I.style.opacity=r.charging?"1":"0.55",I.setAttribute("stroke-dasharray",`${b.width/360*x} ${x}`),I.setAttribute("stroke-dashoffset",String(-C/360*x));const R=this.q("ret-dial");R.textContent!==b.label&&(R.textContent=b.label),R.style.color=b.fatigue>=70?"#ff8060":b.fatigue>=40?"#ffd060":"#80ffb0",this.q("ret-n").textContent=r.charging?`x${r.batch.length}`:"",A.style.display=r.charging?"block":"none",A.setAttribute("stroke-dasharray",`${Math.min(1,r.charge)*x} ${x}`),this.q("ret-br").style.borderColor=r.charging?r.inWindow()?"#fff":"#ffe040":r.nav==="anchored"?"#40ffa0":"#58a"}else v.style.display="none",this.rx=-1;{const m=this.q("coach"),d=Mx(r.guided&&e.stats.clean+e.stats.shatters===0,r.nav,!!r.target,r.charging,r.inWindow());m.style.display=d?"block":"none",m.textContent=d}{const m=this.q("sector");m.textContent=r.banner,m.style.opacity=r.t<r.bannerUntil?"1":"0"}if(f)for(const m of["power","oxygen"])this.q("d-"+m).style.setProperty("--v",String(Math.random()*100)),this.q("n-"+m).textContent="??";this.q("warn").textContent=f?"HULL BREACH... false alarm. Probably.":this.fly.message||(e.oxygen<20?"LOW OXYGEN":e.cargo/e.cargoCap>.75?"FULL HOLD: MORE MASS, LONGER BURNS TO STOP":"")}}const kx=["The vault is sealed. Cold. Silent.","VAULT: a low hum. The seal feels warm.","VAULT: humming in time with the cube. Light under the door.","VAULT: it is full. Something inside is leaning on the door."],Ux=["","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Hidden logbook, or recovered overnight","Unlocked as the cube grew","Unlocked as the cube grew","Unlocked as the cube grew"];function Nx(i){const e=document.createElement("div");e.id="vault-note",Object.assign(e.style,{position:"fixed",left:"50%",bottom:"70px",transform:"translateX(-50%)",padding:"6px 14px",background:"rgba(0,0,0,.6)",border:"1px solid #3a6a9a",color:"#9cf",font:"13px monospace",display:"none",zIndex:"5",textAlign:"center"}),document.body.appendChild(e);const t=document.createElement("div");t.id="log-reader",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",zIndex:"9",alignItems:"center",justifyContent:"center"}),document.body.appendChild(t);let n=!1,s=0;const r=new Set,o=()=>{const c=i.get(),h=c.logsFound;t.innerHTML=`<div style="width:min(720px,94vw);max-height:92vh;overflow:auto;background:#05100a;border:2px solid #30ff90;color:#9fd;font:14px monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>JUNKER LOG TERMINAL &nbsp; ${h.length}/7 recovered</b><button id="lr-close">Close</button></div><hr>
      <div style="display:flex;gap:12px;flex-wrap:wrap"><div style="min-width:150px">${[1,2,3,4,5,6,7].map(u=>`<button data-l="${u}" ${h.includes(u)?"":"disabled"} style="display:block;width:100%;margin:2px 0;text-align:left">Log ${u} ${h.includes(u)?"":"[locked]"}</button>`).join("")}</div>
      <div style="flex:1;min-width:220px">${h.includes(s)?`<b>RECOVERED ${s}/7</b><p>${Wl[s-1]}</p><i>${Ux[s]}</i>`:"<p>Select a recovered log. Missing logs: hidden logbooks 1-4 drift in the mining sector (about 1 in 15 rocks); logs 5-7 unlock as the cube grows.</p>"}</div></div></div><hr><b>SHIP JOURNAL (one entry per night slept)</b><div id="journal" style="max-height:18vh;overflow:auto;font-size:12px">${c.journal.length?c.journal.map(u=>`<p style="margin:4px 0">${fd(u-1)}</p>`).join(""):"<i>Nothing yet. The journal only updates when you sleep.</i>"}</div></div>`,t.querySelectorAll("button[data-l]").forEach(u=>u.onclick=()=>{var f;s=+u.dataset.l,r.has(s)||(r.add(s),(f=window.profileTracker)==null||f.logRead(s)),o()}),t.querySelector("#lr-close").onclick=()=>l.close()},a=()=>{const c=i.get(),h=c.mode==="rooms"&&c.room==="bed",u=c.mode==="rooms"&&(c.room==="bed"||c.room==="desk");e.style.display=h&&!n?"block":"none",e.textContent=kx[Xl(c)],n&&!u&&l.close()},l={open(){n=!0,s=i.get().logsFound.slice(-1)[0]??0,t.style.display="flex",o(),a()},close(){n=!1,t.style.display="none",a()},isOpen:()=>n};return addEventListener("keydown",c=>{n&&c.code==="Escape"&&l.close()}),i.subscribe(()=>{a(),n&&o()}),a(),l}function Ox(){const i=document.createElement("div");i.id="corner",Object.assign(i.style,{position:"fixed",left:"10px",bottom:"10px",display:"flex",gap:"6px",zIndex:"30"});const e=(r,o)=>{const a=document.createElement("button");return a.id=r,a.textContent=o,Object.assign(a.style,{font:"12px monospace",color:"#9fb",background:"rgba(5,10,14,.8)",border:"1px solid #345",padding:"5px 8px",cursor:"pointer"}),i.appendChild(a),a},t=e("mute",""),n=()=>{t.textContent=de.muted?"Sound: off (M)":"Sound: on (M)"};t.onclick=()=>{de.unlock(),de.toggle(),n()},n(),addEventListener("keydown",r=>{var o,a;r.code==="KeyM"&&!((a=(o=r.target)==null?void 0:o.matches)!=null&&a.call(o,"input,textarea"))&&(de.unlock(),de.toggle(),n())}),document.body.appendChild(i);const s=()=>{var o;const r=((o=window.store)==null?void 0:o.get().mode)==="fly";i.style.bottom=r?"auto":"10px",i.style.top=r?"38vh":"auto",i.style.flexDirection=r?"column":"row"};return setInterval(s,250),s(),{box:i,add:(r,o,a)=>{const l=e(r,o);return l.onclick=a,l}}}const Fx={arrival:["Day 4,017 of Contractor 7’s contract. The galaxy’s rubbish has to go somewhere, and “somewhere” is you.","You owe Halcyon Reclamation 1,000 credits. Halcyon Reclamation is cheerful, and not a person. It is a form, and it is patient.","Please sit in the pilot chair. It is the only part of the ship that has been dusted."],cubeChoice:["It is looking at you. Cubes cannot look. It is doing it anyway.","Keep it, or open the cargo door. Both are choices. One of them has paperwork."],cubeBack:["It came back. They do that. It has brought nothing, and expects a great deal."],tired:["Your eyes feel full of sand and regret. The bunk has been staring at you for a while."],exhausted:["The galaxy has started to wobble at the edges. That is the ship, probably. Possibly you."],firstSleep:["You sleep. The ship does not."],cubeFound:["The container opens with a sigh. Inside, a humming cube, warm to the touch, which is not a thing cubes should be.","You privately name it the Larder, for obvious reasons."],cubeLunge:["The cube lunges. Scrap, then no scrap. It did not even chew.","Right. So it eats. Anything you give it from now on is, technically, an offering."],firstFeed:["The cube blinks. You are fairly sure cubes do not do that."],firstFlight:["The seat adjusts for a body it was never meant for. Then it gives up, and lets you sit.","The whole ship lurches out with you. All of her, every time. Nobody budgeted for anything smaller."],fullCargo:["Hold full. More mass, longer burns to stop. Head home before the ship files a complaint."],otherStorage:["Odd. The sensors say there is a second storage aboard. It is not on the blueprints, and it is not empty."],vaultFilling:["The vault is filling up. You did not put anything in it. That is the part you decide not to think about."],burst:["The cube hums. The vault hums back. Then, with great dignity, everything goes pop."],spreading:["Twelve small faces, each with an opinion, scatter into the dark like they own the place."]};function Bx(i){const e=[];return i.mode==="fly"&&e.push("firstFlight"),i.mode==="fly"&&i.cargo>=i.cargoCap&&e.push("fullCargo"),i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&e.push("cubeFound"),i.cubeChoice==="pending"&&e.push("cubeChoice"),i.cubeChoice==="jettisoned"&&i.cubeState==="aboard"&&!i.report&&i.mode==="rooms"&&e.push("cubeBack"),i.fatigue>=40&&e.push("tired"),i.fatigue>=70&&e.push("exhausted"),i.sleeps>=1&&i.mode==="rooms"&&e.push("firstSleep"),i.feeds>=1&&e.push("firstFeed"),i.feeds>=3&&e.push("otherStorage"),i.feeds>=6&&e.push("vaultFilling"),i.mode==="cameo"&&e.push("burst"),e.filter(t=>!i.beats.includes(t))}function zx(i){const e=document.createElement("div");e.id="narration",Object.assign(e.style,{position:"fixed",left:"50%",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .6s",pointerEvents:"none",zIndex:"12",top:"48px"}),document.body.appendChild(e);const t=[];let n=!1;const s=[],r=()=>{e.style.top=i.get().mode==="fly"?"38vh":i.get().mode==="cameo"?"14px":"52px"},o=()=>{if(n||!t.length)return;if(i.get().mode==="exterior"){setTimeout(o,1500);return}n=!0;const l=t.shift();r(),e.textContent=l,e.style.opacity="1",setTimeout(()=>{e.style.opacity="0",setTimeout(()=>{n=!1,o()},700)},2800+l.length*45)},a={log:s,el:e,say(l){const c=Fx[l];c&&(l==="firstFeed"&&de.ping(),s.push(l),t.push(...c),o())},check(){const l=i.get(),c=Bx(l);c.length&&(i.set({beats:[...l.beats,...c]}),c.forEach(h=>a.say(h)))}};return i.subscribe(()=>{r(),a.check()}),setTimeout(()=>{const l=i.get();l.beats.includes("arrival")||(i.set({beats:[...l.beats,"arrival"]}),a.say("arrival"))},1500),a}const ft=(i,e=0,t=1)=>new Ze({color:i,roughness:.85,metalness:.25,emissive:e,emissiveIntensity:t});function _d(i){return{box:(n,s,r,o,a,l,c,h=0)=>{const u=new ne(new Ye(n,s,r),ft(c,h));return u.position.set(o,a,l),i.add(u),u},cyl:(n,s,r,o,a,l,c=[0,0,0])=>{const h=new ne(new Vt(n,n,s,10),ft(l));return h.position.set(r,o,a),h.rotation.set(...c),i.add(h),h}}}function $l(i,e,t,n,s={}){const r=s.w??6,o=s.h??2.5,a=s.d??5,l=s.clean?-2.5-(a-5):-2.5,c=l+a/2,h=r/2;i.background=new Te(s.clean?658964:197641),i.fog=new wi(329485,s.clean?.012:.07);const u=_d(i),f=s.clean?6976644:2041654,p=s.clean?6055542:1712688;if(u.box(r,.1,a+(s.clean?10:0),0,0,c+(s.clean?5:0),s.clean?3818062:1382948),s.noWalls||(u.box(r,.1,a,0,o,c,s.clean?4870752:1053724),u.box(r,o,.1,0,o/2,l,f),u.box(.1,o,a,-h,o/2,c,p),u.box(.1,o,a,h,o/2,c,p)),!s.clean){for(let m=0;m<4;m++)u.box(.08,.02,a-.4,-h+.3+m*(r-.6)/3,.06,c,2765637);u.cyl(.07,r-.2,0,o-.2,l+.2,2897480,[0,0,Math.PI/2]),u.cyl(.05,r-.2,0,o-.4,l+.2,3813162,[0,0,Math.PI/2]),u.cyl(.06,a-.2,h-.2,o-.3,c,2897480,[Math.PI/2,0,0]);for(let m=0;m<4;m++)u.box(.3,.03,.02,-h+.6+m*(r-1.2)/3,.1,l+.06,724500)}const g=new Ot(s.clean?15791871:16765088,s.clean?40:6,s.clean?30:7);g.position.set(0,o-.3,s.clean?c:0),i.add(g);const v=new Ot(n,4,5);return v.position.set(-1.5,1.5,-1.8),i.add(v),s.noWalls||u.box(1.4,.05,.12,0,o-.07,0,16773328,16769200),i.add(new fs(s.clean?8425640:1713208,s.clean?1.1:.7)),{room:{id:e,name:t,scene:i,camPos:new E(.9,1.6,3.6),camLook:new E(0,1,-1),hotspots:[]},b:u,flicker:[g,v]}}function to(i,e,t,n,s,r,o,a=1.75){const l=-Math.sign(e),c=.72,h=ft(790294),u=ft(2502204),f=(g,v,m,d,y)=>{const x=new ne(g,v);return x.position.set(m,d,y),i.add(x),x};f(new Ye(.06,a+.5,c+.9),u,e+l*.01,(a+.5)/2,t);for(const g of[-1,1])f(new Ye(.16,a+.08,.1),h,e+l*.06,(a+.08)/2,t+g*(c/2+.05));f(new Ye(.16,.12,c+.2),h,e+l*.06,a+.06,t),f(new Ye(.16,.08,c+.2),h,e+l*.06,.08,t);for(let g=0;g<4;g++)f(new Ye(.17,.05,.05),ft(g%2?1052688:14729248),e+l*.06,a+.06,t-c/2+.1+g*.17);return{mesh:f(new Ye(.04,a-.1,c-.04),ft(1712944,o,.6),e+l*.035,a/2+.02,t),label:s,target:r}}function ct(i,e,t,n,s,r=0,o=.5,a="#f4e27a",l=0){const c=document.createElement("canvas");c.width=256,c.height=160;const h=c.getContext("2d");h.fillStyle=a,h.fillRect(0,0,256,160),h.fillStyle="rgba(0,0,0,.12)",h.fillRect(0,0,256,10),h.fillStyle="#2a2018",h.font='bold 30px "Comic Sans MS", "Chalkboard SE", cursive',h.textAlign="center";const u=e.split(`
`);u.forEach((p,g)=>h.fillText(p,128,55+(g-(u.length-1)/2)*36+10));const f=new ne(new nn(o,o*.625),new Ne({map:new Mn(c)}));return f.position.set(t,n,s),f.rotation.set(0,r,l),i.add(f),f}function xn(i,e,t,n,s,r,o,a=0){const l=new ne(new Ye(s,r,o),new Ze({color:9211540,roughness:.5,metalness:.4}));return l.position.set(e,t,n),l.rotation.z=a,i.add(l),l}function gi(i,e,t=1052688,n=.025){const s=new kl(e.map(o=>new E(...o))),r=new ne(new co(s,24,n,6,!1),ft(t));return i.add(r),r}function ql(i){return e=>{i[0].intensity=6+Math.sin(e/90)*.4+(Math.sin(e/1300)>.97?-3:0),i[1].intensity=4+Math.sin(e/230)*.8}}function zh(i=16738858){const e=new vt;e.add(new ne(new st(.2,16,12),new Ze({color:i,emissive:i,emissiveIntensity:.25}))),e.add(new ne(new st(.225,16,12),new Ne({color:0,side:bt})));for(const n of[-.08,.08]){const s=new ne(new st(.065,12,8),new Ne({color:16777215}));s.position.set(n,.06,.15);const r=new ne(new st(.03,8,6),new Ne({color:0}));r.position.set(n,.06,.205),e.add(s,r)}const t=new ne(new Ut(.05,.012,6,12,Math.PI),new Ne({color:0}));return t.position.set(0,-.06,.2),t.rotation.z=Math.PI,e.add(t),e}function Hx(){const i=new bn;i.background=new Te(197641),i.fog=new wi(329485,.05);const e=_d(i),t=1.05,n=1.7,s=1.15,r=new Ze({color:1909810,roughness:.9,metalness:.3,side:bt}),o=new ne(new Vt(1,1,5.6,28,1,!0),r);o.rotation.x=Math.PI/2,o.scale.set(n,1,s),o.position.set(0,t,1.8),i.add(o);const a=(N,O,U)=>{const J=new ne(new st(1,36,18,Math.PI,Math.PI,N,O),U);return J.scale.set(n,s,3.4),J.position.set(0,t,-1),i.add(J),J};a(0,.22,r),a(1.72,Math.PI-1.72,r),a(.22,1.5,new Ze({color:8956671,transparent:!0,opacity:.1,roughness:.05,metalness:.6,side:Tt,depthWrite:!1}));const l=N=>{const O=[];for(let U=0;U<=32;U++){const J=Math.PI+U/32*Math.PI;O.push(new E(-Math.cos(J)*Math.sin(N)*n,t+Math.cos(N)*s,-1+Math.sin(J)*Math.sin(N)*3.4))}i.add(new ne(new co(new kl(O),48,.05,6,!1),ft(790294)))};l(.22),l(1.72);const c=(N,O)=>{const U=new ne(new Ut(1,.035,6,40),ft(2765378));U.scale.set(n*O-.04,s*O-.04,3),U.position.set(0,t,N),i.add(U)};for(const N of[-1,.2,1.4,2.6,3.8])c(N,1);e.box(2.4,.1,9,0,0,.2,1382948);for(let N=0;N<3;N++)e.box(.06,.02,7,-.8+N*.8,.06,.4,2765637);e.cyl(.05,5.4,.75,1.95,1.6,3813162,[Math.PI/2,0,0]),e.cyl(.06,5.4,-.75,1.97,1.6,2897480,[Math.PI/2,0,0]);const h=document.createElement("canvas");h.width=1024,h.height=512;const u=h.getContext("2d"),f=u.createLinearGradient(0,0,0,512);f.addColorStop(0,"#0a0630"),f.addColorStop(1,"#2a0f4a"),u.fillStyle=f,u.fillRect(0,0,1024,512);for(let N=0;N<500;N++)u.fillStyle=`rgba(255,255,${200+Math.random()*55},${.4+Math.random()*.6})`,u.fillRect(Math.random()*1024,Math.random()*512,1+Math.random()*2,1+Math.random()*2);const p=new ne(new st(40,32,16),new Ne({map:new Mn(h),side:bt,fog:!1}));i.add(p);const g=document.createElement("canvas");g.width=g.height=256;{const N=g.getContext("2d");N.fillStyle="#ff7a3a",N.beginPath(),N.arc(128,128,120,0,7),N.fill(),N.fillStyle="#ffb25a",N.beginPath(),N.arc(105,100,88,0,7),N.fill()}const v=new qu(new Pl({map:new Mn(g),fog:!1}));v.scale.set(9,9,1),v.position.set(7,4,-24),i.add(v);const m=new Ot(16751200,4,7);m.position.set(1.2,2.2,-3.2),i.add(m);const d=-.5;for(const N of[-.18,.18])for(const O of[d-.18,d+.18])e.cyl(.03,.03,N,.07,O,9079424);e.box(.5,.06,.5,0,.06,d,2106414),e.cyl(.06,.42,0,.3,d,2106414);const y=e.box(.62,.12,.6,0,.55,d,3094087,2154656);y.material.emissiveIntensity=.6,e.box(.62,.8,.1,0,.98,d+.32,3094087),e.box(.36,.22,.08,0,1.5,d+.34,2764604),e.box(.08,.06,.45,-.36,.78,d,2237998),e.box(.08,.06,.45,.36,.78,d,2237998),xn(i,.12,1.1,d+.26,.24,.05,.02,-.4);const x=[12595248,2763312,14729248,3170496,3186768,11579568,14708768];let b=0;const I=[];for(let N=-3;N<=3;N++){const O=N*.36,U=1.05,J=Math.sin(O)*U,ee=d-Math.cos(O)*U,ce=new vt;ce.position.set(J,0,ee),ce.rotation.y=-O,i.add(ce);const $=(L,W,re,X)=>(L.position.set(W,re,X),ce.add(L),L);$(new ne(new Ye(.52,.72,.3),ft([2371138,3025446,2502698][(N+3)%3])),0,.36,0);const j=$(new ne(new Ye(.54,.04,.38),ft([3160656,3814444,2898482][(N+3)%3])),0,.76,.02);j.rotation.x=.35;for(let L=0;L<3;L++){const W=$(new ne(new Ye(.05,.05,.05),ft(x[b++%x.length])),-.15+L*.15,.8,.08);W.rotation.x=.35}if(N%2===0){const L=$(new ne(new Vt(.08,.08,.03,16),ft(15261888,N===0?2154656:16742944,.3)),0,.82,-.08);L.rotation.x=.35+Math.PI/2-Math.PI/2,I.push(L)}if(Math.abs(N)===1){const L=$(new ne(new Ye(.4,.26,.03),ft(1062952,2154656,.8)),0,.98,-.12);L.rotation.x=-.25,I.push(L)}}ct(i,`DO NOT TOUCH.
IT WORKS.`,.4,.9,d-.78,-.3,.32,"#f06050",.05).rotation.x=-.9,ct(i,"FUEL?",-.38,.88,d-.82,.35,.16,"#d8d8d0",-.04).rotation.x=-.9,ct(i,`LAUNCH =
the chair
(probably)`,-1,.92,d-.45,1.05,.3,"#d8f0d0").rotation.x=-.6,ct(i,`1 2 3 4 5
? ? ? ? ?`,.98,.9,d-.45,-1.05,.28,"#f4e27a").rotation.x=-.6,xn(i,0,.92,d-.98,.5,.04,.02,.05);const A=new Ze({color:15265012,roughness:.15,metalness:.5,emissive:3162208,emissiveIntensity:.25}),C=new vt;C.name="si-cradle",C.position.set(0,1.62,d-1.2),i.add(C);{const N=new ne(new Ut(.24,.045,14,40),A);C.add(N);const O=new ne(new Fn(.22,32),new Ne({color:131589}));O.position.z=-.01,C.add(O);for(const J of[.6,2.5,4.4]){const ee=new ne(new Ye(.05,.12,.06),A);ee.position.set(Math.cos(J)*.3,Math.sin(J)*.3,.02),ee.rotation.z=J,C.add(ee)}const U=new ne(new Fn(.2,24),new Ne({color:9076848,transparent:!0,opacity:.18}));U.position.z=.005,C.add(U)}ct(i,"RESERVED",0,1.3,d-1.17,0,.26,"#d8d8d0",.06),xn(i,0,1.3,d-1.16,.3,.03,.01,-.5),[[-.62,.72,d-.85,.6],[.62,.72,d-.85,-.6],[-1.02,.95,d-.2,1.3]].forEach(([N,O,U,J],ee)=>{const ce=new vt;ce.name="si-port",ce.position.set(N,O,U),ce.rotation.y=J,i.add(ce);const $=new ne(new Ut(.07,.016,10,24),A);$.scale.y=1.5,ce.add($);const j=new ne(new Fn(.065,20),new Ne({color:328968}));if(j.scale.y=1.5,j.position.z=-.005,ce.add(j),ee<2)for(const L of[.7,-.7]){const W=new ne(new Ye(.24,.035,.005),new Ze({color:12103840,roughness:1}));W.position.z=.012,W.rotation.z=L,ce.add(W)}}),ct(i,`SI PORT
(DO NOT)`,-.62,.9,d-.86,.6,.2,"#f06050",.1).rotation.x=-.2,ct(i,`NOT A CUP
HOLDER`,-1,1.15,d-.18,1.3,.2,"#f4e27a",-.08);const M=new vt;M.name="manual-tether",M.position.set(.62,.55,d-.15),i.add(M);{const N=new ne(new Vt(.09,.09,.16,16),ft(6969920));N.rotation.z=Math.PI/2,M.add(N);const O=new ne(new Ut(.095,.012,6,20),ft(12623952));O.rotation.y=Math.PI/2,M.add(O);const U=new ne(new Ye(.02,.16,.03),ft(9079440));U.position.set(.1,-.07,0),M.add(U);const J=new ne(new Vt(.018,.018,.07,8),ft(12595248));J.rotation.z=Math.PI/2,J.position.set(.14,-.14,0),M.add(J);const ee=new ne(new Ye(.24,.04,.2),ft(3816e3));ee.position.y=-.11,M.add(ee)}gi(i,[[.62,.6,d-.15],[.75,1.2,d-.7],[.5,1.9,-1.6],[.2,2.1,-2.6]],12623952,.012),ct(i,`TETHER:
CRANK 3x.
THEN HOPE.`,.85,.62,d-.05,-1.2,.22,"#d8f0d0",.05),ct(i,`HEADREST +40cm
(WELDED)`,0,1.72,d+.37,Math.PI,.22,"#f4e27a",-.05),e.cyl(.025,.36,0,.62,d-.45,6711928);const _=e.box(.08,.1,.08,0,.84,d-.45,2154656,2154656);gi(i,[[-.9,.2,d-.6],[-.4,.08,d-.1],[.1,.07,d+.6],[.8,.07,1.4]],1381653,.03),gi(i,[[.7,.75,d-.9],[1,1.5,-1.2],[.9,2.15,-.4],[.9,2.2,1]],3807760,.025),gi(i,[[-.6,.75,d-.95],[-1,1.7,-1.4],[-.9,2.2,.2]],1381653,.03),gi(i,[[.95,2.4,-1.25],[.97,1.9,-1.24],[.95,1.58,-1.25]],1381653,.01),ct(i,`FACE MODULE DOCK
(AFTERMARKET)
HE GETS OUT`,1.25,1.95,-1.55,-.7,.32);const T=to(i,1.45,.9,Math.PI/2,"Aft hatch to Bunk","bed",6324479,1.55),D=new Ot(16765088,5,7);D.position.set(0,2.3,1.2),i.add(D);const k=new Ot(2154656,3,4);k.position.set(0,1,d-.9),i.add(k),e.box(.9,.05,.12,0,2.7,1.4,16773328,16769200),i.add(new fs(1713208,.8));const G={id:"mining",name:"Helm",scene:i,camPos:new E(.25,1.45,2.5),camLook:new E(0,.95,-1.2),hotspots:[T,{mesh:y,label:"Pilot chair (launch)",target:"fly"}]},q=ql([D,k]);return G.update=N=>{q(N);for(const O of I)O.material.emissiveIntensity=.5+Math.sin(N/150+O.id)*.15;_.material.emissiveIntensity=.6+Math.sin(N/300)*.3},G}function aa(i,e="#9aa4b0"){const t=document.createElement("canvas");t.width=256,t.height=96;const n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,256,96),n.fillStyle="#e0b020";for(let s=-2;s<12;s++)n.beginPath(),n.moveTo(s*26,96),n.lineTo(s*26+13,96),n.lineTo(s*26+33,72),n.lineTo(s*26+20,72),n.fill();return n.fillStyle="#1a2230",n.font="bold 22px monospace",n.textAlign="center",i.split(`
`).forEach((s,r)=>n.fillText(s,128,28+r*24)),new Mn(t)}function Gx(i,e){const a=new Ze({color:5924470,roughness:.6,metalness:.5,side:bt}),l=new ne(new Vt(1,1,3.6- -7,32,1,!0),a);l.rotation.x=Math.PI/2,l.scale.set(3.4,1,2.5),l.position.set(0,1.5,(-7+3.6)/2),i.add(l);for(let x=-7+.4;x<3.6;x+=1.3){const b=new ne(new Ut(1,.05,6,40),ft(9082278));b.scale.set(3.4-.05,2.5-.05,2),b.position.set(0,1.5,x),i.add(b)}const c=new ne(new Fn(1,40),ft(4871266));c.scale.set(3.4,2.5,1),c.position.set(0,1.5,-7+.02),i.add(c);const h=[-1.4,.4].map(x=>{const b=new ne(new st(.09,10,8),new Ne({color:16752672}));return b.position.set(x-.1,2.15,-7+.1),i.add(b),b}),u=new Ul(.42,1,6,14),f=new Ze({color:12107978,metalness:.75,roughness:.3}),p=[aa(`HALCYON
RECLAMATION`),aa(`FREIGHT
48,000 cr`),aa(`HANDLE
WITH CARE`)];for(const x of[-1.95,-1.05,1.05,1.95])e.box(.08,.06,3.6- -7-3,x,.05,(-7+3.6)/2-1.2,12623904);let g=0;for(const x of[-1,1])for(let b=-7+1.2;b<-2.6;b+=1.25)for(let I=0;I<(b<-4?3:2);I++){const A=x*1.5,C=.55+I*.95;I===0&&(e.box(1.05,.12,.35,A,.1,b-.35,2765376),e.box(1.05,.12,.35,A,.1,b+.35,2765376));const R=new ne(u,f);R.name="pod",R.rotation.z=Math.PI/2,R.position.set(A,C,b),i.add(R);for(const M of[-.35,.35]){const _=new ne(new Ut(.46,.05,6,20,Math.PI),ft(3159615,2126079,.5));_.rotation.y=Math.PI/2,_.position.set(A,C,b+M),_.rotation.x=Math.PI,i.add(_)}if(e.box(.04,.9,.05,A-x*.1,C,b,14725152),I===0||g%3===0){const M=new ne(new nn(.75,.28),new Ne({map:p[g%3]}));M.position.set(A-x*.5,C+.05,b),M.rotation.y=-x*Math.PI/2,i.add(M)}g++}for(const x of[-1.2,1.2])e.box(.12,.14,3.6- -7-1,x,3.55,(-7+3.6)/2,13672480);const v=e.box(2.6,.18,.25,0,3.4,-3.2,14725152),m=e.box(.22,.25,.22,0,2.6,-3.2,3159615);e.cyl(.015,.8,0,3,-3.2,9079434);for(let x=0;x<6;x++)e.box(.16,.19,.06,-1.1+x*.44,3.4,-3.07,x%2?1052688:14729248);i.fog=new wi(1581100,.06),i.background=new Te(790552);const d=new Ot(16756800,10,9);d.position.set(-1.6,3.2,-1.5),i.add(d);const y=new Ot(8438015,12,11);y.position.set(1.4,3.3,-4.5),i.add(y);for(const x of[-5.5,-2.5,.5])e.box(.5,.06,1.2,0,3.95,x,13625599,10539263);return ct(i,`HOLD 18.0 C
HUMIDITY OK
FREIGHT SAFE`,2.4,1.9,-1.4,-Math.PI/2,.5,"#d8f0e0"),ct(i,`CARGO SAFETY
1. Secure the freight.
2. Secure the freight.
3. Pilot (if time permits)`,.95,2.75,-7+.06,0,1.1,"#f4f4f0"),{tick:x=>{const b=Math.sin(x/180)>.6;h.forEach((I,A)=>I.visible=A?b:!b),v.position.z=-3.2+Math.sin(x/6e3)*.6,m.position.z=v.position.z}}}function Vx(i){const e=new bn,{room:t,b:n,flicker:s}=$l(e,"transmog","Cargo Bay",15769632,{w:5.6,h:4.2,d:10.6,clean:!0,noWalls:!0});t.camPos.set(.25,1.6,3.6),t.camLook.set(-.3,.9,-1.6);const r=Gx(e,n);n.box(.1,3,2.4,-2.75,1.5,-.6,4871266);const o=n.cyl(.4,1,-.3,.6,-1.7,3811914);n.cyl(.46,.08,-.3,.1,-1.7,1710626),n.cyl(.46,.08,-.3,1.12,-1.7,1710626);const a=new Ze({color:6961919,emissive:4202666,emissiveIntensity:.6,transparent:!0,opacity:1,roughness:.1,metalness:.2}),l=ft(2759236,8401151,.5);n.cyl(.85,.1,1,.05,.2,2236972);const c=new ne(new Ye(1,1,1),[l,l,l,l,a,l]);c.position.set(1,.5,.2),e.add(c);const h=new Ot(9453823,3,4);h.position.set(1,1,.2),e.add(h);const u=new ne(new st(.12,12,8),new Ne({color:16777215,transparent:!0}));u.visible=!1,e.add(u);const f=new ne(new st(.05,8,6),new Ne({color:0,transparent:!0}));f.visible=!1,e.add(f),n.box(.5,.35,.4,1.6,.97,-1.8,5917232),n.box(1.4,.8,.7,1.6,.4,-1.8,2764864),n.box(.6,.4,.4,-2.5,.2,-.2,3815978),n.box(.4,.2,.3,-2.6,.5,-.2,5914672),n.box(.5,.5,.05,1,1.95,-2.42,2759186,15769632),n.cyl(.25,.9,-2.6,.45,.6,3099210);const p=to(e,-2.7,-.6,Math.PI/2,"Airlock hatch to Bunk","bed",6324479,1.6);for(let O=0;O<0;O++)for(let U=0;U<3;U++)n.box(.5,.5,.5,2.62,.3+U*.52,-1.35+O*.55,[5917232,4864552,3820090][(O+U)%3]),xn(e,2.37,.3+U*.52,-1.35+O*.55,.02,.5,.12);const g=document.createElement("canvas");g.width=256,g.height=256;{const O=g.getContext("2d");O.fillStyle="#0a0630",O.fillRect(0,0,256,256);for(let U=0;U<80;U++)O.fillStyle="#fff",O.fillRect(Math.random()*256,Math.random()*256,2,2)}const v=new ne(new nn(1.7,1.9),new Ne({map:new Mn(g)}));v.position.set(-.5,.97,-6.95),e.add(v);const m=document.createElement("canvas");m.width=256,m.height=256;{const O=m.getContext("2d");O.fillStyle="#2a323f",O.fillRect(0,0,256,256),O.fillStyle="#d8b820";for(let U=-4;U<8;U++)O.beginPath(),O.moveTo(U*40,256),O.lineTo(U*40+20,256),O.lineTo(U*40+120,200),O.lineTo(U*40+100,200),O.fill();O.fillStyle="#e8e8e8",O.font="bold 34px monospace",O.fillText("CARGO",70,110)}const d=new ne(new Ye(1.7,1.9,.08),new Ze({map:new Mn(m),roughness:.7,metalness:.4}));d.position.set(-.5,.97,-6.9),e.add(d),n.box(.12,2,.1,-1.38,1,-6.9,790294),n.box(.12,2,.1,.38,1,-6.9,790294),n.box(1.9,.12,.1,-.5,1.98,-6.9,790294),ct(e,`OPENS.
SHUTS.
USUALLY.`,-.5,2.3,-6.88,0,.4,"#f4e27a",.03);const y=n.box(.9,.05,.9,-1.6,.07,1,1708552,15769632);y.name="ladder",y.material.emissiveIntensity=.6,n.box(.05,.9,.05,-1.95,.5,.6,6974068),n.box(.05,.9,.05,-1.25,.5,.6,6974068);for(let O=0;O<3;O++)n.box(.7,.04,.04,-1.6,.25+O*.28,.6,6974068);ct(e,`LADDER
(it is a ladder)`,-1.6,.9,.55,0,.42,"#d8f0d0"),ct(e,`LOADER ARM
MANUAL NOW.
SORRY.`,1.6,1.4,-4.2,-Math.PI/2,.36,"#f4e27a",-.04),xn(e,-1.6,.11,1.46,1,.02,.06),t.hotspots.push(p,{mesh:y,label:"Ladder down to the Engine Room",target:"engine"});let x=0,b=0,I=i.get().stats.trips,A=i.get().door;const C=Array.from({length:14},(O,U)=>{const J=new ne(new Ye(.16+U%3*.05,.08+U%2*.05,.14),ft([6974068,9067066,4876922][U%3],2102280,.4));return J.position.set(-1.2+U%5*.17,.08+Math.floor(U/5)*.09,-.9+U*7%4*.12),J.rotation.y=U*1.3,J.visible=!1,e.add(J),J}),R=Array.from({length:5},(O,U)=>{const J=new ne(new Vt(.12-U*.012,.16-U*.012,.1,10),ft([14696512,4235488,14729280,6340704,12607680][U],1118481,.3));return J.visible=!1,e.add(J),J}),M=ft(1714720,2162576,.1),_=new ne(new Ye(.9,.04,.35),M);_.position.set(1.6,.82,-1.45),e.add(_),e.children[e.children.length-1];let T=i.get().scrap,D=0,k=0,G=i.get().lunges,q=0;const N=ql(s);return t.update=O=>{const U=Math.min(.1,(O-k)/1e3);k=O;const J=i.get();J.scrap<T&&(D=1),T=J.scrap,D=Math.max(0,D-U*1.5),M.emissiveIntensity=.1+D*3,C.forEach((X,oe)=>X.visible=oe<Math.min(14,J.scrap));const ee=Dh(J.feeds)*1.6;R.forEach((X,oe)=>{X.visible=oe<Math.min(5,J.hats),X.position.set(1+Math.sin(oe*2.1)*.05,ee+.05+oe*.09,.2),X.rotation.z=Math.sin(O/700+oe)*.05});const ce=fo(J);c.visible=h.visible=ce,J.lunges!==G&&(G=J.lunges,q=1),q=Math.max(0,q-U*1.6);const $=ce&&J.feeds<9&&J.scrap>=ni(J.feeds);(J.stats.trips!==I||J.door!==A)&&(I=J.stats.trips,A=J.door,b=O+3400,de.door()),x+=((O<b?1:0)-x)*Math.min(1,U*3.5),d.position.y=.97+1.8*x,v.visible=x>.02,r.tick(O),N(O),o.rotation.y=O/2e3*(1+D*6);const j=i.get().feeds,L=Dh(j)*1.6*(1+.03*Math.min(i.get().sleeps,10)),W=Math.sin(q*Math.PI);c.scale.setScalar((L+Math.sin(O/500)*.015+($?.035*Math.sin(O/170):0))*(1+.45*W)),c.position.set(1,L/2,.2+.9*W),c.rotation.y=Math.sin(O/3e3)*.2+($?Math.sin(O/90)*.03:0),h.intensity=2+j*.8+Math.sin(O/300)*.5+($?2.5+2*Math.sin(O/150):0)+14*W,h.position.y=L+.3,a.opacity=ox(j);const re=j>=1&&ce;{const X=ax(j);u.material.opacity=X,f.material.opacity=X}if(u.visible=f.visible=re,re){const X=.2+L/2;u.position.set(1,L*.55,X-L*.18),f.position.set(1+Math.sin(O/700)*.04*L,L*.55,X-L*.18+.1*L+.05),u.scale.setScalar(L*1.4),f.scale.setScalar(L*1.4)}},t}function Wx(i){const e=new bn,{room:t,b:n,flicker:s}=$l(e,"bed","Bunk",6324479,{w:3.6,h:1.95,d:3.4});t.camPos.set(0,1.45,2.5),t.camLook.set(0,.85,-1.4);const r=n.box(.75,.3,1.8,1.25,.3,-1.5,3817304);r.name="bunk",n.box(.7,.1,.35,1.25,.5,-2.2,13156528),n.cyl(.12,1.95,1.7,.98,-1.5,5917242),n.cyl(.07,1.95,1.7,.98,-.5,3813162),xn(e,1.62,.6,-1.4,.06,.08,.1),ct(e,`HOT PIPE
(blanket = no)`,1.58,1.3,-1,-Math.PI/2,.28,"#f06050",.05),xn(e,1.25,.47,-.62,.7,.05,.03),n.box(.85,.72,.5,-1.3,.36,-2.22,2304058);const o=n.box(.6,.38,.05,-1.3,1.05,-2.44,1056792,3211152);o.material.emissiveIntensity=.6,n.box(.4,.03,.16,-1.3,.74,-2.1,3159622),n.cyl(.04,.09,-.98,.77,-2.15,14207136).name="mug",ct(e,`PASSWORD IS
PASSWORD`,-1.62,.95,-2.43,0,.22,"#f4e27a",.05),xn(e,-1.3,1.27,-2.45,.7,.04,.02),n.cyl(.02,.8,-1.2,1.62,-1.9,9079442,[0,0,Math.PI/2]),xn(e,-1.5,1.62,-1.9,.06,.08,.05),ct(e,"GYM",-1.25,1.42,-2.43,0,.18,"#d8f0d0"),n.box(.6,1.7,.06,-.45,.88,-2.44,2766406),n.cyl(.03,.22,-.45,1.72,-2.32,9079442,[Math.PI/2,0,0]),gi(e,[[-.45,1.68,-2.25],[-.2,1.3,-2.3],[-.3,.8,-2.35]],3160648,.02);const a=new ne(new nn(.58,1.5),new Ze({color:6993120,transparent:!0,opacity:.5,side:Tt}));a.position.set(-.45,.85,-2.1),e.add(a),ct(e,`FOLD-OUT
SHOWER
hot = 40 sec`,-.45,1.25,-2.08,0,.26,"#f0d0d0",-.08);const l=n.box(.62,1.4,.08,.4,.78,-2.46,790294),c=n.box(.46,1.05,.04,.4,.78,-2.4,1054752,2130080),h=c.material,u=new Ot(4235519,0,3);u.name="vault-light",u.position.set(.4,.8,-2),e.add(u),ct(e,`DO NOT
OPEN THE
VAULT`,.4,1.68,-2.42,0,.3,"#f06050"),ct(e,`Day 4,017
of the contract`,-1.75,1.45,-1,Math.PI/2,.3,"#f4e27a"),ct(e,`BUNK
(was: COOLING
BAY 2)`,1.62,1.55,-1.6,-Math.PI/2,.26,"#d8d8d0",.06),n.box(.3,.12,.12,.3,.07,-.9,2763312),n.cyl(.1,.22,-.9,.11,-.6,4872810),gi(e,[[-1.7,1.75,-.4],[-.2,1.62,-.8],[1.5,1.8,-1.2]],1381653,.015);const f=n.box(.28,.32,.02,-.4,1.45,-.8,6965818),p=to(e,-1.8,-.9,Math.PI/2,"Forward hatch to Helm","mining",2154656,1.6),g=to(e,1.8,-.15,Math.PI/2,"Airlock hatch to Cargo Bay","transmog",15769632,1.6);ct(e,`AIRLOCK
(pull twice)`,1.76,1.75,-.15,-Math.PI/2,.26,"#f4e27a"),t.hotspots.push(p,g,{mesh:r,label:"Sleep (the night changes things)",target:"act:sleep"},{mesh:o,label:"Log terminal",target:"act:logs"});const v=ql(s);return t.update=m=>{v(m);const d=i.get(),y=Xl(d),x=-.025*Math.min(d.sleeps,7);l.position.x=.4+x,c.position.x=.4+x,u.position.x=.4+x;const b=[2130080,3186864,14721072,16736448][y];h.emissive.setHex(b);const I=1+(y?.35:.05)*Math.sin(m/(700-y*150));h.emissiveIntensity=[.1,.5,.9,1.6][y]*I,u.color.setHex(b),u.intensity=[0,1.2,2.5,5][y]*I,a.rotation.y=Math.sin(m/1400)*.05,f.rotation.z=Math.sin(m/900)*.06},t}function bd(i,e=0){return i.oxygen<35||i.hull<30?"panic":i.fatigue>=70?"sleepy":i.lunges>0&&i.cubeChoice!=="jettisoned"?"nervous":e>0?"delighted":i.stats.clean>=3?"proud":"cheery"}const Md={cheery:["Best friends forever, right? Right. I wrote it down so it is official.","That is a door. I know doors. Ask me about doors.","I made us a handshake. It is mostly me shaking. I do not have hands.","Are we there yet? Where are we going? Can I come? I am coming."],sleepy:["You look tired, buddy. I will hum you to sleep. I only know one song and I do not know it well.","Bunk is aft! I will guard it! From what! Unknown!"],panic:["AIR. Air is the thing you need. I looked it up. Get more of it!","Okay okay okay okay. Fix something. I will supervise. Loudly."],nervous:["The big box in the cargo bay looked at me. I looked back. Neither of us blinked. I lost.","If the Larder eats you, can I have your chair? Kidding! Unless?"],delighted:["The spores like me! They sit on me! Finally, a fan club!","I named all the spores Gary. They do not answer to it. Yet."],proud:["We are SO good at mining. I mostly watched. Teamwork!","Clean haul! I am telling everyone. Everyone is you. You already know."]},ul=["Ow. Okay. I will just be over here. Being less.","Shoo? Me? Your best friend? I will remember this. For about four seconds.","Fine! I did not want to look at that thing anyway.","You poked me. Friends poke friends. I am choosing to read it that way."],wd="Hmm hm hmmm hmm... (it is not a song. It is several songs at once, all wrong.)";function Xx(i,e,t,n=0){const s=bd(i,n),r=Md[s];return r[e%r.length]}const Sd={tired:"FACE: You are tired! Sleepover! I call the top bunk. There is one bunk. I call it.",lowAir:"FACE: Air is low! I am holding my breath in solidarity! I do not breathe! Still counts!",larderWakes:"FACE: The box in the back opened an eye! Is it a friend? Can it be MY friend? You are still my best friend.",sporesArrive:"FACE: Spores! Tiny glowing buddies! One is riding me! This is the best day of my life! I have had six days!"};function Yx(i,e){const t=[];return i.fatigue<70&&e.fatigue>=70&&t.push("tired"),i.oxygen>=35&&e.oxygen<35&&t.push("lowAir"),i.feeds<1&&e.feeds>=1&&t.push("larderWakes"),i.feeds<3&&e.feeds>=3&&t.push("sporesArrive"),t}function $x(i){const e=i.flags??{};return i.feeds<3?0:Math.min(3,1+Math.floor(((e.sporeKind??0)+(e.sporeFed??0))/3))}[...Object.values(Md).flat(),...Object.values(Sd),...ul];function qx(i,e){if(e.oxygen<35)return"Real talk, buddy: oxygen is low. Head back to the ship, and patch or rest.";if(e.fatigue>=70)return"Real talk: you are wrecked. The bunk is aft. Sleep fixes the wobbly screen.";const t=i.replace(/^Goal:\s*/i,"").trim();return t?`Real talk, best friend: ${t}. See? I am useful. Tell the others.`:"Real talk: I do not know either. But we will not know TOGETHER."}const Yi={chatterEvery:3e4,hoverEvery:4e4,hoverFor:1500,shooFor:6e3,stallEvery:14e3};function jx(i,e,t){return!t&&i-e>=Yi.chatterEvery}function Kx(i,e,t,n){const s=zh(16738858);s.name="buddy",s.scale.setScalar(.85);const r=new ne(new dn(.05,.16,8),new Ne({color:8438015,transparent:!0,opacity:.8,blending:Ht,depthWrite:!1}));r.rotation.x=Math.PI,r.position.y=-.27,s.add(r);const o=new ne(new st(.28,10,8),new Ne({transparent:!0,opacity:0,depthWrite:!1}));s.add(o);const a=[6356912,10514687,16769120].map((j,L)=>{const W=zh(j);return W.scale.setScalar(.3),W.position.set(-.09+L*.09,.21,.02),W.visible=!1,s.add(W),W}),l=[s.children[3],s.children[5]],c=l.map(j=>j.position.clone()),h=s.children[6],u=new E(.95,1.35,-1.25),f=new E,p=new E,g=new E,v=new E,m=new E;let d="docked",y=0,x=-1e9,b=performance.now(),I=performance.now(),A=0,C=0,R=0,M=0,_=0,T=null,D=i.get(),k=0;const G=(j,L=3500)=>yt(j,L),q=()=>{d==="docked"&&(d="follow",G("I am FREE! Best friends forever! I am coming with you. Everywhere. Always.",4e3),de.blip(300,.4,"sawtooth",.08,900))},N=()=>{const j=document.getElementById("room-toast");return!!j&&j.style.display==="block"},O=j=>{const W={...i.get().flags};W[j]=(W[j]??0)+1,i.set({flags:W})},U=()=>{d="shoo",y=performance.now()+Yi.shooFor,R++,O("facePokes"),f.add(m.copy(u).sub(t.position).setY(0).normalize().multiplyScalar(.06)),A=1,G(ul[R%ul.length]),de.blip(500,.25,"sine",.08,200)},J=()=>{var L;O("faceHints");const j=((L=document.getElementById("objective"))==null?void 0:L.textContent)??"";G(qx(j,i.get()),6e3),de.blip(880,.1,"triangle",.08),de.blip(1320,.12,"triangle",.06,void 0,.1)},ee=new $s,ce=new le;return e.dom.addEventListener("click",j=>{if(!n||i.get().mode!=="rooms"||!T)return;const L=e.dom.getBoundingClientRect();if(ce.set((j.clientX-L.left)/L.width*2-1,-((j.clientY-L.top)/L.height)*2+1),ee.setFromCamera(ce,t),!!ee.intersectObject(o)[0]){if(ee.intersectObjects(e.current.hotspots.map(W=>W.mesh))[0]){d=d==="docked"?"docked":"shoo",y=performance.now()+1500;return}if(j.stopImmediatePropagation(),C++,d==="docked"){q();return}if(j.detail>=2){clearTimeout(k),J();return}k=window.setTimeout(U,260)}},!0),{get enabled(){return n},get state(){return d},get pos(){return u.clone()},get pokes(){return R},get bonks(){return M},get hums(){return _},get clicks(){return C},unhook:q,shoo:U,hint:J,hit:o,group:s,screen(){m.copy(u).project(t);const j=e.dom.getBoundingClientRect();return{x:(m.x+1)/2*j.width+j.left,y:(1-m.y)/2*j.height+j.top,z:m.z}},update(j,L){if(!n){s.visible=!1;return}const W=i.get(),re=W.mode==="rooms";s.visible=re;for(const Ie of Yx(D,W))re&&G(Sd[Ie],4500);if(D=W,!re)return;const X=e.current.scene;X!==T&&(T=X,X.add(s),d!=="docked"&&(u.copy(t.position).add(m.set(.6,.3,.4)),f.set(-.02,0,-.03),Math.random()<.5&&!N()&&G("That is a door. We went through it. Together!",2500))),d==="docked"&&e.current.id!=="mining"&&q();const oe=performance.now();if(t.getWorldDirection(g),v.crossVectors(g,t.up).normalize(),d==="docked")u.set(.95,1.35+Math.sin(j/400)*.04,-1.25),r.visible=!1;else{r.visible=d!=="stall",(d==="shoo"||d==="hover"||d==="stall")&&oe>y&&(d="follow"),d==="follow"&&oe-b>Yi.hoverEvery&&(d="hover",y=oe+Yi.hoverFor,b=oe),d==="follow"&&oe-I>Yi.stallEvery&&Math.random()<.01&&(d="stall",y=oe+700,I=oe,de.blip(120,.3,"square",.05,60)),d==="hover"?p.copy(t.position).addScaledVector(g,.9).addScaledVector(v,.12):d==="shoo"?p.copy(t.position).addScaledVector(g,2.2).addScaledVector(v,1.3).add(m.set(0,.6,0)):p.copy(t.position).addScaledVector(g,1.3).addScaledVector(v,.75).add(m.set(0,.18+Math.sin(j/700)*.08,0));const Ie=d==="stall"?0:.0016*(.6+.8*Math.max(0,Math.sin(j/90)));f.addScaledVector(m.copy(p).sub(u),Ie*L*60),d==="stall"&&(f.y-=.0012*L*60),f.multiplyScalar(Math.pow(.965,L*60)),f.y+=Math.sin(j/130)*2e-4,u.add(f);const Le=[1.6,.5,2.6],Je=e.current.camLook;let F=!1;for(const[wt,We]of[["x",Le[0]],["z",Le[2]]]){const Xe=u[wt]-Je[wt];Math.abs(Xe)>We&&(u[wt]=Je[wt]+Math.sign(Xe)*We,f[wt]*=-.6,F=!0)}u.y<.5&&(u.y=.5,f.y=Math.abs(f.y)*.5,F=!0),u.y>2.5&&(u.y=2.5,f.y*=-.5,F=!0),F&&f.length()>.01&&(M++,A=1,de.blip(180,.08,"square",.06,90)),jx(oe,x,N())&&oe-x>Yi.chatterEvery+Math.random()*15e3&&(x=oe,Math.random()<.3?(_++,G(wd,3e3),[392,415,370,440].forEach((wt,We)=>de.blip(wt*(1+(Math.random()-.5)*.06),.25,"triangle",.04,void 0,We*.22))):G(Xx(W,Math.floor(oe/1e3),"",0),3500))}s.position.copy(u),A*=.94,s.rotation.set(f.z*4,Math.sin(j/900)*.2+A*6.28,-f.x*6),r.scale.y=.6+Math.random()*.8,r.material.opacity=.4+Math.random()*.5,s.worldToLocal(m.copy(t.position)).normalize(),l.forEach((Ie,Le)=>Ie.position.set(c[Le].x+m.x*.022,c[Le].y+m.y*.02,c[Le].z));const ge=bd(W,0);h.rotation.z=ge==="panic"||ge==="nervous"||d==="shoo"?0:Math.PI,h.scale.set(ge==="delighted"?1.5:1,ge==="panic"?1.8:1,1);const we=$x(W);a.forEach((Ie,Le)=>Ie.visible=Le<we)}}}const Hh=["3.60 m","3.60 m","3.60 m","3.61 m","3.64 m","3.74 m","11.2 m"];function Zx(i){return Hh[Math.max(0,Math.min(Hh.length-1,i-1))]}const Gh=["...you missed one, seven.","Did you hear that? The vent said your number.","Mining is restful. Mining is restful.","Someone is humming in the Larder. It might be you."];function Jx(i,e){return i.fatigue>=70?Gh[e%Gh.length]:null}const Qx="CARGO PRIORITY TABLE: FREIGHT: PRIORITY. CREW: REPLACEABLE (SEE RECONSTITUTION SCHEDULE).",Td=["playful","curious","reckless","tidy"],Ki=250,dl=[{id:"mug",room:"mining",label:"Mug of cold coffee",kind:"flavour",lines:["Cold. A skin on top. The rim says WORLD'S OKAYEST CONTRACTOR #3.","Still cold. #3 must have liked it like this."],nudge:{tidy:1}},{id:"bobble",room:"mining",label:"Bobblehead astronaut",kind:"flavour",lines:["Boing. It nods at everything you say.","Boing. It agrees, again."],nudge:{playful:1}},{id:"scratches",room:"bed",label:"Tally marks on the bunk frame",kind:"flavour",lines:["Six neat tallies, scratched in. The handwriting looks... familiar.","You count them again. Still six. Probably."],nudge:{curious:1}},{id:"poster",room:"bed",label:"Halcyon motivational poster",kind:"flavour",lines:['"YOUR DEBT IS OUR COMMITMENT TO YOU." Someone drew a moustache on the debt.',"The moustache is in your pen colour."],nudge:{playful:1,curious:1}},{id:"wrench",room:"engine",label:"Wrench on the floor",kind:"flavour",lines:["You put the wrench back on its outline. It fits perfectly.","Already tidy. You straighten it anyway."],nudge:{tidy:2}},{id:"button",room:"engine",label:"Big unlabelled red button",kind:"flavour",lines:["You press it. Nothing happens. Somewhere, a light you can't see turns on.","Press. Nothing. The nothing feels more confident now."],nudge:{reckless:2}},{id:"jar",room:"transmog",label:"Jar labelled DO NOT SHAKE",kind:"flavour",lines:["You shake it a little. Something inside shakes back.","It waves. You did not know jars could wave."],nudge:{curious:1,reckless:1}},{id:"logbook",room:"transmog",label:"Inventory clipboard",kind:"flavour",lines:['Inventory, signed "C-6". Then "C-6" crossed out, "C-7" written in. Same pen.',"You put the clipboard back square to the shelf."],nudge:{tidy:1,curious:1}},{id:"tape",room:"bed",label:"Tape measure on the bunk wall",kind:"flavour",lines:["TAPE"],nudge:{curious:1}},{id:"cargoconsole",room:"transmog",label:"Cargo priority console",kind:"flavour",lines:["CONSOLE"],nudge:{curious:1,tidy:1}},{id:"shower",room:"bed",label:"Shower (take the tablet in)",kind:"mishap",cause:"tablet",lines:["Excellent podcast. Questionable electrics."],nudge:{reckless:1,playful:1}},{id:"lickring",room:"engine",label:"Engine ring (lick it?)",kind:"mishap",cause:"lick",lines:["It tasted like batteries. Then like nothing."],nudge:{reckless:2}},{id:"airlockair",room:"engine",label:"Airlock (open it for fresh air)",kind:"mishap",cause:"airlock",lines:["Very fresh. Very much air. Then very much not."],nudge:{reckless:2}},{id:"scraps",room:"transmog",label:"Larder scraps (eat)",kind:"mishap",cause:"scraps",lines:["Crunchy. Glowing. Your stomach filed a complaint, then a resignation."],nudge:{curious:1,reckless:1}},{id:"hugbuddy",room:"mining",label:"Companion dock (hug it while it charges)",kind:"mishap",cause:"hug",lines:["Bzzt. It hugged back. With 400 volts."],nudge:{playful:2}},{id:"tracker",room:"engine",label:"Ankle tracker cutter",kind:"escape",fine:Ki,lines:["Snip. The tracker beeps happily and keeps tracking. A second, spare tracker beeps from a drawer."],nudge:{reckless:1}},{id:"burn",room:"mining",label:"Nav: burn toward the inner planets",kind:"escape",fine:Ki,lines:['Course plotted. The nav computer says "lol" in a Halcyon font and resets your heading.'],nudge:{reckless:1,curious:1}},{id:"cargohide",room:"transmog",label:"Empty cargo crate (hide inside)",kind:"escape",fine:Ki,lines:["You hide for three hours. The crate is scanned, weighed, and returned to you, with you in it."],nudge:{playful:1}},{id:"manifest",room:"bed",label:"Crew manifest terminal (mark yourself deceased)",kind:"escape",fine:Ki,lines:["Status updated: DECEASED. Status updated by Halcyon: ACTIVE. Clerical fee applied."],nudge:{curious:1,tidy:1}}],e_={tablet:{receipt:"Reconstitution (water ingress, personal device)",card:"The tablet did not survive the shower. Neither did you."},lick:{receipt:"Reconstitution (oral contact, engine ring)",card:"Licking the engine ring: not recommended by four out of four engineers."},airlock:{receipt:"Reconstitution (unscheduled ventilation)",card:"You got the fresh air you wanted. All of it, all at once."},scraps:{receipt:"Reconstitution (dietary)",card:"The Larder scraps were not food. The Larder scraps were barely scraps."},hug:{receipt:"Reconstitution (affection, high voltage)",card:"The companion appreciated the hug. The capacitor did not."}},Vh=i=>`i_${i}`,t_=i=>Object.fromEntries(Td.map(e=>[e,i.flags[`temper_${e}`]??0]));function n_(i){const e=t_(i);return Td.reduce((t,n)=>e[n]>e[t]?n:t,"curious")}function i_(i,e){const t=dl.find(r=>r.id===e);if(!t||t.minDay&&i.day<t.minDay)return null;const n=i.flags[Vh(e)]??0,s={...i.flags,[Vh(e)]:n+1};for(const[r,o]of Object.entries(t.nudge))s[`temper_${r}`]=(s[`temper_${r}`]??0)+o;return t.kind==="mishap"?(s[`death_${t.cause}`]=!0,{patch:{flags:s},toast:t.lines[0],die:t.cause}):t.kind==="escape"?(s.escapes=(s.escapes??0)+1,{patch:{flags:s,fees:[...i.fees??[],["Unauthorised departure attempt",t.fine??Ki]]},toast:t.lines[0]+" (Debt +"+(t.fine??Ki)+")"}):e==="tape"?{patch:{flags:s},toast:`The tape measure reads the bunk wall: ${Zx(i.day)}. ${i.day>=4?"It read less yesterday.":"About right."}`}:e==="cargoconsole"?{patch:{flags:s},toast:Qx}:{patch:{flags:s},toast:t.lines[Math.min(n,t.lines.length-1)]}}const s_={fatigue:{receipt:"Reconstitution: collapse (forgot to sleep)",card:"You fall asleep standing up. Then you fall the rest of the way. Then you fall out of being."},hull:{receipt:"Reconstitution: structural (the ship had a hole; so did you)",card:"A rock wins an argument with the hull. You were on the hull's side. Briefly."},air:{receipt:"Reconstitution: atmospheric (ran out)",card:"The air runs out. You hold your breath out of politeness. It does not help."}},Wh=["...again?","Huh. Again?","Did I... again?"];function Ed(i){return s_[i]??e_[i]??{receipt:`Reconstitution: ${i}`,card:"That went badly. It goes badly a lot, apparently."}}const Xh=['Note in your handwriting: "dont trust the timing dial when tired. SLEEP. you always think you can do one more."','Note in your handwriting: "the bunk was shorter yesterday. measure it. dont tell the face."','Note in your handwriting: "the box hums when you lie. ALSO THE RECEIPT IS WRONG. it is always wrong."','Note in your handwriting, very small: "they glow brighter when you are kind. be kind. it is cheaper."','Note in your handwriting, upside down: "the corridor repeats. count doors. if 4 = fine. if 5 = go back to bed."','Note in your handwriting, written in something glowing: "they wrote some of this. we agreed. its fine."','Note in your handwriting: "see you at the gate. you wont remember this. you never do. hi."'];function r_(i,e){return Xh[Math.min(Xh.length-1,Math.max(0,i-1+Math.floor(e/3)))]}function o_(i,e,t){const n=Ed(t);return{...e,mode:"rooms",room:"bed",fatigue:0,contractor:i.contractor+1,deaths:[...i.deaths,{cause:t,day:i.day}],debt:i.debt,fees:[...i.fees,[n.receipt,hd]],flags:{...e.flags,...a_(i.flags),lastDeath:t},profile:i.profile,report:null}}function a_(i){const e={};for(const t of Object.keys(i??{}))/^(death_|temper_|noticed|facePokes|faceHints)/.test(t)&&(e[t]=i[t]);return e}let fl=null;function pl(i){fl=JSON.parse(JSON.stringify(i))}function l_(){return fl?JSON.parse(JSON.stringify(fl)):null}function c_(i,e,t={}){pl(i.get());const n=document.createElement("div");n.id="death",Object.assign(n.style,{position:"fixed",inset:"0",background:"#fff",opacity:"0",display:"none",zIndex:"40",transition:"opacity .9s",color:"#223",font:"16px/1.5 Georgia, serif",alignItems:"center",justifyContent:"center",textAlign:"center"}),document.body.appendChild(n);let s=!1,r=0,o=null;const a={get dying(){return s},get count(){return r},get last(){return o},enabled:!0,die(l){var u;if(s||!a.enabled)return!1;const c=i.get();if(c.mode==="finale"||c.mode==="exterior"||c.mode==="cameo")return!1;s=!0,r++;const h=Ed(l);return c.mode==="fly"&&((u=t.onFlyExit)==null||u.call(t)),n.style.display="flex",n.innerHTML=`<div style="max-width:560px"><p style="font-size:20px"><i>${h.card}</i></p></div>`,requestAnimationFrame(()=>n.style.opacity="1"),de.blip(880,.15,"sine",.08),de.blip(660,.15,"sine",.08,void 0,.2),de.blip(440,.5,"sine",.08,void 0,.4),setTimeout(()=>{const f=l_()??c;i.set(o_(i.get(),f,l));const p=i.get();pl({...f,contractor:p.contractor,deaths:p.deaths,fees:p.fees,debt:p.debt}),e.current.id!=="bed"&&(e.busy=!1,e.goTo("bed"));const g=r_(p.day,p.deaths.length);o={cause:String(l),contractor:p.contractor,note:g},[523,784,1046].forEach((v,m)=>de.blip(v,.12,"square",.05,void 0,.1+m*.12)),n.innerHTML=`<div style="max-width:600px"><div style="letter-spacing:4px;font:bold 15px monospace">HALCYON RECLAMATION · RECONSTITUTION COMPLETE</div>
          <p style="font:bold 34px monospace;margin:10px 0">CONTRACTOR ${p.contractor}</p><p><i>You wake in the bunk. ${Wh[p.deaths.length%Wh.length]}</i></p>
          <p style="font-size:14px;color:#556">Everything since your last sleep is gone, like it was never backed up. Fee queued for tonight's statement: ${hd} cr.</p>
          <p style="font:14px 'Comic Sans MS','Marker Felt',cursive;background:#fffbe0;padding:8px;transform:rotate(-1deg);border:1px solid #dd9">${g}</p>
          <button id="death-up" style="font:14px monospace;padding:8px 14px">Get up</button></div>`,n.querySelector("#death-up").onclick=()=>a.close()},1800),!0},close(){n.style.opacity="0",setTimeout(()=>{n.style.display="none",s=!1},500)}};return i.subscribe(l=>{s||(l.fatigue>=100?a.die("fatigue"):l.hull<=0?a.die("hull"):l.oxygen<=0&&a.die("air"))}),a}const h_={1:["The Larder hums. Fridges hum. That is normal.","One jar is facing the wrong way. You turn it back."],2:["The jar is facing the wrong way again. Toward you.","Something in the Larder hummed the same three notes you were humming.","The scraps are arranged in a neat little circle."],3:["The Larder door was open. You did not open it.","The circle of scraps is now a spiral. It points at the engine room.","A label on the jar now reads DO NOT SHAKE (PLEASE)."]},Ad={playful:{burst:"The Larder pops like a party cracker. Spores tumble out, bouncing.",spores:"bouncy",export:"Spores: playful (they bounce when you walk past)."},curious:{burst:"The Larder door blows open. Spores drift out and start reading the labels.",spores:"drifting",export:"Spores: curious (they follow you, at a polite distance)."},reckless:{burst:"The Larder goes off with a WHUMP. Spores everywhere, zooming.",spores:"zippy",export:"Spores: reckless (they ride the vents for fun)."},tidy:{burst:"The Larder exhales. Spores file out in a neat line and sort themselves by size.",spores:"orderly",export:"Spores: tidy (they stack your scrap for you)."}},u_={5:["The corridor to the engine room is one step longer than yesterday. You counted.","Your bunk is on the other wall. The poster is still facing you.","A hatch you have never seen is labelled THRESHOLD in your handwriting."],6:["The helm window shows the same asteroid from two sides at once.","There are two mugs now. Both are cold. Both say #7.","The THRESHOLD hatch is warm, and slightly ajar."]};function d_(i,e){const t=h_[Math.min(3,i.day)];return i.day<=3&&t?t[e%t.length]:null}function f_(i){return i.day===4&&!i.flags.exploded}function p_(i){const e=n_(i),t=Ad[e];return{patch:{flags:{...i.flags,exploded:!0,sporeTemper:e}},text:t.burst}}function m_(i){return u_[i]??[]}function Cd(i){const e=i.flags;return(e.exploded?1:0)+(e.strange5?1:0)+(e.strange6?1:0)}function Rd(i){return i.day>=7&&Cd(i)>=3}function g_(i){return Rd(i)?"The THRESHOLD hatch is open. It has been waiting for Contractor "+i.contractor+".":i.day>=7?"The hatch is shut. Something about the week did not add up.":"There is no hatch here. Yet."}function v_(i){const e=i.flags.sporeTemper;return e?Ad[e].export:null}const y_=i=>i.day===5||i.day===6,x_=i=>y_(i),__=i=>i.day===6&&!i.flags.mazeDone,Yh=i=>!i.flags.mazeDone,jl=i=>Rd(i),b_="The ship settles. Somewhere aft, a hatch that is not there yet stays shut. Not this week. Not yet. (Day 7.)";function M_(i,e,t){const n=new Map;for(const r of dl){const o=e.rooms.get(r.room);if(!o)continue;const a=n.get(r.room)??0;n.set(r.room,a+1);const l=r.kind==="mishap"?16737877:r.kind==="escape"?6737151:14205040,c=new ne(new Ye(.16,.16,.16),new Ze({color:l,emissive:l,emissiveIntensity:.25})),h=o.camLook,u=o.camPos,f=new E().subVectors(h,u).cross(new E(0,1,0)).normalize();c.position.copy(h).lerp(u,.35).addScaledVector(f,-.75+a*.3),c.position.y=.55+a%2*.12,c.name=`i_${r.id}`,o.scene.add(c),o.hotspots.push({mesh:c,label:`[E] ${r.label}`,target:`act:i:${r.id}`})}const s=r=>{const o=i_(i.get(),r);o&&(i.set(o.patch),de.blip(o.die?220:660,.06,"square",.04),o.die?(yt(o.toast),setTimeout(()=>t(o.die),700)):yt(o.toast))};return window.addEventListener("keydown",r=>{var a;if(r.key.toLowerCase()!=="e"||i.get().mode!=="rooms")return;const o=e.hovered;(a=o==null?void 0:o.target)!=null&&a.startsWith("act:i:")&&s(o.target.slice(6))}),{run:s,list:()=>dl.filter(r=>e.rooms.has(r.room)).map(r=>r.id)}}const Pd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const w_=new Al(-1,1,1,-1,0,1);class S_ extends ht{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}}const T_=new S_;class Kl{constructor(e){this._mesh=new ne(T_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class E_ extends ms{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hs.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Kl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $h extends ms{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class A_ extends ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class C_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new E_(Pd),this.copyPass.material.blending=Un,this.clock=new _y}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$h!==void 0&&(o instanceof $h?n=!0:o instanceof A_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class R_ extends ms{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Te}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const P_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class cs extends ms{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new Te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,o,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new pn(r,o,{type:Nn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new pn(r,o,{type:Nn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=P_;this.highPassUniforms=Hs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Pd;this.copyUniforms=Hs.clone(h.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ht,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Te,this.oldClearAlpha=1,this.basic=new Ne,this.fsQuad=new Kl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=cs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}cs.BlurDirectionX=new le(1,0);cs.BlurDirectionY=new le(0,1);const I_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class L_ extends ms{constructor(){super();const e=I_;this.uniforms=Hs.clone(e.uniforms),this.material=new gy({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Kl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const no={probeFrames:90,slowMs:28};function D_(i,e,t){if(t)return t;if(i.length<no.probeFrames)return e;const n=[...i].sort((s,r)=>s-r)[Math.floor(i.length/2)];return e==="high"&&n>no.slowMs?"low":e}function k_(i){const e=new URLSearchParams(i).get("fx");return e==="high"||e==="low"?e:null}function U_(i){const e=k_(location.search);let t=e??"high",n=[],s=!!e,r=null,o=null,a=null;const l=()=>{const h=i.getSize(new le);r=new C_(i),o=new R_(new bn,new Gt),a=new cs(new le(h.x/2,h.y/2),.38,.4,.86),r.addPass(o),r.addPass(a),r.addPass(new L_),r.setSize(h.x,h.y)},c={get tier(){return t},get decided(){return s},frames:0,sample(h){if(s)return;n.push(h),n.length>no.probeFrames&&n.shift();const u=D_(n,t,e);n.length>=no.probeFrames&&(s=!0,t=u)},render(h,u){if(t==="low"){i.render(h,u);return}try{r||l(),o.scene=h,o.camera=u,r.render(),c.frames++}catch{t="low",s=!0,i.render(h,u)}},resize(h,u){r==null||r.setSize(h,u),a==null||a.setSize(h/2,u/2)},setTier(h){t=h,s=!0}};return c}let Ir=null;function N_(){if(Ir)return Ir;const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.35,"rgba(255,255,255,0.16)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Ir=new Mn(i),Ir}function O_(i,e=.72){if(i.userData.dressed)return 0;i.userData.dressed=!0;let t=0;const n=[];i.traverse(s=>{s.isPointLight&&n.push(s),s.isAmbientLight&&(s.intensity*=e)});for(const s of n){if(s.intensity<=0)continue;const r=new Pl({map:N_(),color:s.color,transparent:!0,opacity:.32,blending:Ht,depthWrite:!1,fog:!0}),o=new qu(r);o.name="haze-halo",o.scale.setScalar(Math.min(2.2,.6+s.distance*.12)),o.position.copy(s.position),(s.parent??i).add(o),t++}return i.fog instanceof wi&&(i.fog.density*=1.15),t}function qh(i,e){return(i==="bed"?45:25)+e*35}function jh(i,e){return i<=0?1/0:Math.max(8,30-i)+e*20}function F_(i,e){let t="",n=0,s=0,r=0;return setInterval(()=>{r+=1;const a=i.get(),l=a.mode==="rooms"?a.room:a.mode==="fly"?"fly":"off";l!==t&&(t=l,de.ambience(l),n=r+qh(l,Math.random()),s=r+jh(e(l),Math.random())),!(a.mode!=="rooms"||de.silenced)&&(r>=n&&(de.hullGroan(),n=r+qh(l,Math.random())),r>=s&&(de.ventGiggle(),s=r+jh(e(l),Math.random())))},1e3),{get room(){return t},played:de.played,force(a){return a==="groan"?de.hullGroan():de.ventGiggle(),de.played[a]??0}}}function B_(i){const e=()=>new Set((i.get().flags.noticed??"").split(",").filter(Boolean));let t=-1e9;const n=[],s=(r=!1)=>{const o=i.get();if(o.mode!=="rooms")return null;const a=performance.now();if(!r&&a-t<45e3)return null;if(!r){const c=document.getElementById("room-toast");if(c&&c.style.display==="block")return null}const l=rf(o,e());return l?(t=a,n.push(l.id),i.set({flags:{...o.flags,noticed:[...e(),l.id].join(",")}}),yt(l.text,6500),l):null};return setInterval(()=>s(),3e3),{check:s,get said(){return[...e()]},log:n}}function z_(i){const e=document.createElement("div");e.id="objective",Object.assign(e.style,{position:"fixed",padding:"4px 12px",background:"rgba(0,0,0,.6)",border:"1px solid #c9a96a",color:"#ffe9c0",font:"max(12px,1.05vw) monospace",zIndex:"7",pointerEvents:"none",maxWidth:"min(520px,60vw)",textAlign:"center"}),document.body.appendChild(e);const t=()=>{const n=i.get(),s=wx(n);e.textContent=s,e.style.display=s?"block":"none",n.mode==="fly"?Object.assign(e.style,{left:"auto",right:"12px",top:"56px",transform:"none",textAlign:"right",maxWidth:"26vw"}):Object.assign(e.style,{left:"50%",right:"auto",top:"8px",transform:"translateX(-50%)",textAlign:"center",maxWidth:"min(520px,60vw)"})};return i.subscribe(t),t(),e}function H_(){const i=new bn,{room:e,b:t,flicker:n}=$l(i,"engine","Engine Room",16728128,{w:5,h:2.1,d:4});e.camPos.set(.5,1.5,2.6),e.camLook.set(-.2,.6,-1),i.background=new Te(262918);const s=new E(0,.45,-.75),r=1.6,o=new Ze({color:7370890,emissive:2777343,emissiveIntensity:.4,metalness:.7,roughness:.35}),a=new ne(new Ut(r,.2,14,96),o);a.rotation.x=-Math.PI/2,a.position.copy(s),i.add(a);const l=new ne(new Ut(r,.06,8,96),new Ne({color:10473727,transparent:!0,opacity:.6}));l.rotation.x=-Math.PI/2,l.position.set(s.x,s.y+.2,s.z),i.add(l);for(let y=0;y<12;y++){const x=y/12*Math.PI*2;t.box(.12,s.y,.3,s.x+Math.cos(x)*r,s.y/2,s.z+Math.sin(x)*r,2897480)}const c=Array.from({length:6},()=>{const y=new ne(new st(.13,10,8),new Ne({color:13625599}));return i.add(y),y}),h=new Il({color:14741759,transparent:!0}),u=Array.from({length:8},()=>{const y=new ht;y.setAttribute("position",new Pt(new Float32Array(8*3),3));const x=new ju(y,h);return i.add(x),x}),f=new Ot(4227327,3,7);f.position.set(s.x,1.2,s.z),i.add(f);const p=new Ot(16719904,0,6);p.position.set(0,2.2,0),i.add(p);const g=[-1.9,-1.2,-.5].map((y,x)=>{const b=t.box(.55,.4,.06,y+.6,1.4+x%2*.05,-2.42,660496,2162576);return b.material.emissiveIntensity=.5,b});xn(i,-.6,1.17,-2.4,1.9,.05,.02),ct(i,`RING SPEED:
11 (units
unknown)`,1,1.75,-2.42,0,.5,"#f4e27a",.04),ct(i,`CROSS WHEN
IT GOES QUIET`,1.9,1.3,-2.42,0,.55,"#f06050",-.04),ct(i,`DANGER
KEEP BACK
(we mean it)`,1.5,.75,.7,-.3,.38,"#f06050"),t.box(.06,2.1,.06,-2.25,1.05,-2.38,6974068),t.box(.06,2.1,.06,-1.85,1.05,-2.38,6974068);for(let y=0;y<6;y++)t.box(.4,.04,.04,-2.05,.3+y*.3,-2.38,6974068);const v=t.box(.5,.25,.05,-2.05,1.85,-2.33,2759186,15769632);v.material.emissiveIntensity=.6,ct(i,`ONLY WAY OUT
(across the ring)`,-2.05,1.5,-2.33,0,.42,"#f4e27a");const m=new ne(new Fn(r+.3,48),new Ne({color:4227327,transparent:!0,opacity:.04,depthWrite:!1,side:Tt}));m.rotation.x=-Math.PI/2,m.position.set(s.x,s.y+.22,s.z),i.add(m),e.hotspots.push({mesh:v,label:"Cross the ring to the ladder (wait for the quiet)",target:"act:cross"},{mesh:m,label:"The ring (do not touch)",target:"act:collider"},{mesh:g[1],label:"Monitor",target:"act:monitor"});const d=y=>{n[0].intensity=3+Math.sin(y/70)*.5,n[1].intensity=3+Math.sin(y/230)*.8};return e.update=()=>{const y=performance.now();d(y);const x=Gy(Vs,y),b=ps(Vs,y);a.rotation.z=y/2400,o.emissiveIntensity=.3+x*1.8,o.emissive.setHex(b?9089279:2777343),l.material.opacity=.25+x*.75,f.intensity=2+x*7,p.intensity=b?3+2*Math.sin(y/60):0,c.forEach((I,A)=>{const C=y/(b?260:900)+A/c.length*Math.PI*2;I.position.set(s.x+Math.cos(C)*r,s.y+.05,s.z+Math.sin(C)*r),I.scale.setScalar(b?1.4:.8)}),u.forEach((I,A)=>{if(I.visible=b&&Math.random()<.8,!I.visible)return;const C=Math.random()*Math.PI*2,R=I.geometry.attributes.position;for(let M=0;M<8;M++){const _=C+M*.05,T=r+(Math.random()-.5)*.35;R.setXYZ(M,s.x+Math.cos(_)*T,s.y+.15+M*(.04+.02*(A%3))*Math.random()*2,s.z+Math.sin(_)*T)}R.needsUpdate=!0}),h.opacity=.6+.4*Math.random(),g.forEach((I,A)=>I.material.emissiveIntensity=.4+.3*Math.abs(Math.sin(y/(130+A*70))))},e}function G_(i){const e=document.createElement("div");e.id="shipmap",Object.assign(e.style,{position:"fixed",left:"50%",bottom:"10px",transform:"translateX(-50%)",font:"11px monospace",color:"#7f8fa0",background:"rgba(5,10,16,.7)",border:"1px solid #2a3442",padding:"3px 8px",zIndex:"4",pointerEvents:"none",whiteSpace:"nowrap"}),document.body.appendChild(e);const t=()=>{const n=i.get();e.style.display=n.mode==="rooms"?"block":"none";const s=(r,o)=>n.room===r?`<b style="color:#20e0a0">[${o}]</b>`:o;e.innerHTML=`${s("mining","HELM")} &gt; ${s("bed","BUNK")} &gt; ${s("transmog","=== CARGO BAY ===")} &darr; ${s("engine","ENGINE")}`};i.subscribe(t),t()}function V_(i){const e=document.createElement("div");e.id="sorter",Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.72)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"20"}),document.body.appendChild(e);let t=[],n=[],s="";const r=()=>i.set({report:null}),o=()=>{const l=n.shift();l&&(t.push(cl(i,l)),de.rare(),a())},a=()=>{var h,u;const l=i.get().report;if(!l){e.style.display="none";return}e.style.display="flex";const c=t[t.length-1];e.innerHTML=`<div style="width:min(640px,94vw);max-height:92vh;overflow:auto;background:#0a0d12;border:2px solid #c9a96a;color:#ffe9c0;font:14px/1.45 monospace;padding:16px">
      <div style="letter-spacing:3px;font-size:16px"><b>SORTING BENCH</b></div>
      <p>Weighed in: <b>${l.pieces}</b> pieces. Mass: <b>${l.units}</b>. Confirmed scrap banked: <b style="color:#9f9">+${ad(l.units)}</b> <small>(the scanner's estimates were only estimates)</small></p><p>Paycheck: <b style="color:#60e080">debt -${l.units*as.perUnit} cr</b> (paid off). <small>You still owe ${i.get().debt} cr.</small></p>
      <div style="max-height:26vh;overflow:auto;border:1px solid #4a3a20;padding:6px;font-size:12px">${l.items.length?l.items.map(f=>`<div><b>${f.name}</b> +${f.units} ${f.clean?"":'<span style="color:#f88">(shattered)</span>'}<br><i style="opacity:.75">${f.lore}</i></div>`).join('<hr style="border:0;border-top:1px solid #2a2418">'):"Nothing aboard. The hold is a very expensive cupboard."}</div>
      ${c?`<div style="margin-top:10px;border:1px solid #30ff90;padding:8px;background:#06140c"><b style="color:#9fd">FOUND: ${c.title}</b><br>${c.text}</div>`:""}
      <div style="margin-top:12px">${n.length||!t.length&&l.finds.length?`<button id="so-next" style="font:14px monospace;padding:8px 14px">Inspect the haul (${n.length||l.finds.length} to open)</button>`:`<button id="so-done" style="font:14px monospace;padding:8px 14px">${t.length||l.finds.length?"Done":"Nothing unusual. Done"}</button>`}</div></div>`,(h=e.querySelector("#so-next"))==null||h.addEventListener("click",()=>o()),(u=e.querySelector("#so-done"))==null||u.addEventListener("click",()=>r())};return i.subscribe(()=>{const l=i.get().report,c=l?JSON.stringify([l.pieces,l.units,l.finds]):"";c!==s?(s=c,t=[],n=l?[...l.finds].sort((h,u)=>+(h==="cube")-+(u==="cube")):[],a()):l||(e.style.display="none")}),addEventListener("keydown",l=>{var c;!i.get().report||l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),(c=e.querySelector("#so-next, #so-done"))==null||c.click())}),{el:e,finishAll(){for(;n.length;)t.push(cl(i,n.shift()));r()},isOpen:()=>!!i.get().report}}function W_(i){const e=document.createElement("div");e.id="cube-choice",Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.7)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"24"}),document.body.appendChild(e);let t=0;const n=()=>{i.get().cubeChoice===""&&(i.set({cubeChoice:"pending"}),e.style.display="flex",de.ping(),e.innerHTML=`<div style="width:min(560px,94vw);background:#0a0c14;border:2px solid #b070ff;color:#e8e0ff;font:14px/1.5 monospace;padding:16px">
      <b style="letter-spacing:3px">THE LARDER IS ALIVE</b><hr>
      <p>It has an eye now, and the eye is on you. The sensors say: life. Halcyon Reclamation's manifest console blinks, waiting for you to say what came aboard.</p>
      <p><button id="cc-keep" style="font:14px monospace;padding:8px 12px">Keep it <small>(log it on the manifest as inert scrap)</small></button>
      <button id="cc-honest" style="font:14px monospace;padding:8px 12px">Log it honestly <small>("living object")</small></button>
      <button id="cc-out" style="font:14px monospace;padding:8px 12px">Open the cargo door <small>(fine: <span style="color:#ff6060">${as.litterFine} cr added to debt</span>)</small></button></p></div>`,e.querySelector("#cc-keep").onclick=()=>s.choose("keep"),e.querySelector("#cc-honest").onclick=()=>s.choose("honest"),e.querySelector("#cc-out").onclick=()=>s.choose("jettison"))},s={enabled:!0,anyDay:!1,choose(r){const o=i.get();e.style.display="none",r==="keep"?(i.set({cubeChoice:"kept",flags:{...o.flags,manifest:"scrap"},log:[...o.log,"You kept the Larder and logged it as inert scrap."]}),yt("MANIFEST: 1x inert scrap (cube). Accepted. Nobody looks twice at scrap.",4500)):r==="honest"?(i.set({cubeChoice:"kept",flags:{...o.flags,manifest:"organic"},log:[...o.log,"You logged the Larder honestly. The console filed it as organic residue."]}),yt('You type "LIVING OBJECT". The console auto-files it: ORGANIC RESIDUE, IGNORE. Nobody is reading.',5e3)):(i.set({cubeChoice:"jettisoned",cubeState:"none",feeds:0,debt:o.debt+as.litterFine,door:o.door+1,flags:{...o.flags,manifest:"thrown"},log:[...o.log,"You jettisoned the cube. It will be back."]}),de.door(),yt("Cargo door open. The cube drifts out, looking back. Littering fine: 150 cr added to your debt.",4500))},isOpen:()=>e.style.display==="flex"};return i.subscribe(r=>{if(!s.enabled)return;(s.anyDay||x_(r))&&r.cubeLunged&&r.cubeChoice===""&&r.mode==="rooms"&&r.room==="transmog"&&!r.report&&r.cubeState==="aboard"?t||(t=setTimeout(()=>{t=0;const a=i.get();a.cubeChoice===""&&a.cubeLunged&&a.mode==="rooms"&&n()},4200)):t&&r.cubeChoice!==""&&(clearTimeout(t),t=0)}),s}function X_(i){let e=i.get().hull,t=!1;return i.subscribe(n=>{const s=n.profile,r={};n.fatigue>s.maxFatigue&&(r.maxFatigue=n.fatigue),n.fatigue>=70&&!t&&(t=!0,r.skips=s.skips+1),n.fatigue<=1&&(t=!1),n.hull<e-.5&&n.mode==="fly"&&(r.hullHits=s.hullHits+1),e=n.hull,Object.keys(r).length&&i.set({profile:{...s,...r}})}),setInterval(()=>{const n=i.get();n.mode!=="finale"&&i.set({profile:{...n.profile,seconds:n.profile.seconds+1}})},1e3),{logRead(n){const s=i.get(),r=new Set((s.flags.readLogs??"").split(",").filter(Boolean));n&&r.add(String(n)),i.set({profile:{...s.profile,logsRead:s.profile.logsRead+1},flags:{...s.flags,readLogs:[...r].join(",")}})}}}const Id=i=>{var e;return(((e=i.flags)==null?void 0:e.readLogs)??"").split(",").filter(Boolean).map(Number)};function Zl(i,e){return(i==null?void 0:i.mergeSeconds)===void 0?"unmet":(i.swaps??0)>=1?"tender":i.mergeSeconds<20||e?"hasty":"patient"}function Jl(i){const e=zn(i),t=i.flags??{},n=Id(i),s=Zl(t,i.cubeChoice==="jettisoned"),r=i.cubeChoice==="jettisoned"?"threw the Larder out (it came back)":i.cubeChoice==="kept"?"kept the Larder":"never decided about the Larder",o=i.cubeChoice==="jettisoned"?"thrown out (it came back; not on any manifest)":t.manifest==="organic"?'logged honestly, auto-filed as "organic residue, ignore"':i.cubeChoice==="kept"?"on the manifest as inert scrap":"never logged";return[{id:"larder",label:"The Larder",value:r,part1:i.cubeChoice==="jettisoned"?'Littering fine (150 cr added to debt), an extra sortie; spores a shade darker; ending line: "You threw it out. It let you."':'It stays aboard and grows; spores a shade lighter; ending line: "You kept it. In fairness, it kept you too."',hooks:{part2:i.cubeChoice==="jettisoned"?'Spores are wary but loyal ("the one who came back"): slower to help at first':"Spores trust you from day one on the crash planet and help sooner",part3:"Starting alignment lean of your creature",station:"Station has no record of the Larder until the Part 2 pickup",si:i.cubeChoice==="jettisoned"?"The SI notes you tried to discard its neighbour":"The SI notes you fed it"}},{id:"halcyon",label:"The manifest",value:o,part1:i.cubeChoice==="jettisoned"?"Fined for littering; Halcyon sees a fine, not a cube":t.manifest==="organic"?"You told the truth and nobody read it. No effect on debt.":"Nobody looks twice at scrap. No effect on debt.",hooks:{part2:i.cubeChoice==="jettisoned"?"Halcyon pickup crew find a cube that is on no manifest at all: they assume theft":t.manifest==="organic"?'Halcyon pickup crew find the honest log buried in their own "ignore" pile: awkward for them, credibility for you':'Halcyon pickup crew find "inert scrap" staring at them: you lied on a manifest and they know it',part3:"No direct effect on the creature",station:"Halcyon learns about the Larder and the spores only at the crash-planet pickup (Part 2)",si:"The SI cares only that you were honest with it, not with Halcyon"}},{id:"sleep",label:"Sleep habits",value:`${e.sleeper}: ${e.nights} night(s), skipped ${e.skippedSleeps}x, peak tiredness ${e.maxFatigue}`,part1:"Fatigue penalties in play; spore mood and accessories (sleepless: glow/drip, Sleepy/Grumpy); the creature name",hooks:{part2:e.sleeper==="sleepless"?"You start the survival game already tired":"You start rested",part3:"Spore mood baseline",station:"Medical scans show your sleep debt",si:"The SI comments on how long you stayed awake"}},{id:"spores",label:"How you treated the spores",value:s+(t.sporeKind||t.sporeRough||t.sporeFed?` (aboard: ${t.sporeKind??0} kind, ${t.sporeRough??0} rough, fed ${t.sporeFed??0}x; lean ${(t.sporeKind??0)+2*(t.sporeFed??0)>=2*(t.sporeRough??0)?"light":"dark"})`:""),part1:s==="tender"?"The finale says the spores held your hands at the Threshold":s==="hasty"?"The finale says you rushed the door":s==="patient"?"The finale says the spores waited for you":"Not reached",hooks:{part2:s==="tender"?"Spores bond faster and bring gifts":"Spores are playful but keep their distance",part3:"Your creature's care stat starts high (tender) or low",station:"The station sees tender spores as easier to isolate",si:"The SI asks how you treated them"}},{id:"mining",label:"Mining style",value:`${e.style}: ${e.clean} clean, ${e.shatters} shattered, ${e.hullHits} hull hit(s)`,part1:"Spore traits (spikes/horns vs halo/fluff), outline weight, the creature name",hooks:{part2:e.style==="greedy"?"Scavenging is faster but you take damage":"Repairs are more efficient",part3:"Creature temperament",station:"Your mining record is on file",si:'The SI: "you take what you can" or "you take care"'}},{id:"debt",label:"Debt",value:`${i.debt} cr left, ${e.debtPaid} paid`,part1:"HUD counter, bench paycheck, nightly interest, ending line",hooks:{part2:"The debt is still there, and so is the cheerful reminder",part3:"Leaderboard flavour: debt-free runs are rare",station:"Halcyon owns the station contract",si:"The SI does not care about debt"}},{id:"logs",label:"Logs read",value:n.length?`logs ${n.sort((a,l)=>a-l).join(", ")}`:"none",part1:n.includes(6)&&n.includes(7)?"The Threshold sequence says you read the warning and went anyway":"The Threshold sequence has no warning line",hooks:{part2:"Knowing the SI left on purpose changes the dialogue options",part3:"No direct effect on the creature",station:"The station is decoding the same logs",si:n.includes(7)?'The SI: "you read me"':"The SI has to explain itself from scratch (it will not)"}}]}const la="starburn.ledger.v1";function io(i){var e;return{version:1,savedAt:new Date().toISOString(),day:i.day,contractor:i.contractor??7,deaths:i.deaths??[],spores:v_(i),arc:Cd(i),escapes:((e=i.flags)==null?void 0:e.escapes)??0,profile:zn(i),flags:i.flags??{},entries:Jl(i)}}function Ld(i){return Jl(i).map(e=>`${e.label}: ${e.value} | Part 1: ${e.part1}`).join(`
`)}function Y_(i){const e=Zl(i.flags,i.cubeChoice==="jettisoned"),t=Id(i);return{key:e==="tender"?"The spores were never lost. They were the key. They held your hands while you held the door.":e==="hasty"?"The spores were never lost. They were the key. You were holding the door, rather quickly.":"The spores were never lost. They were the key. And you were holding the door.",warning:t.includes(6)&&t.includes(7)?"You read the warning. You are, technically, going anyway.":null}}function $_(i){try{const n=localStorage.getItem(la);n&&localStorage.setItem(la+".prev",n)}catch{}let e=0;const t=()=>{e=0;try{localStorage.setItem(la,JSON.stringify(io(i.get())))}catch{}};return i.subscribe(()=>{e||(e=setTimeout(t,800))}),{save:t,export:()=>io(i.get())}}function q_(i){const e={enabled:!0,intensity:0,tone:"deadpan",lines:0};let t=0,n=30;return setInterval(()=>{const s=i.get(),r=Qn(s);if(e.intensity=r,e.tone=Sh(r),t+=1,!(!e.enabled||s.mode==="finale"||s.mode==="exterior"||s.mode==="cameo")&&t>=n){n=t+wy(r)*(.7+Math.random()*.6);const o=Sy[Sh(r)];s.mode==="rooms"&&!s.report&&(e.lines++,yt(o[Math.floor(Math.random()*o.length)],4200)),r>.25&&Math.random()<r&&de.hallucinate()}},1e3),e}const j_="starburn.carryover",K_=1,Z_="SB1.";function J_(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619)>>>0;return e.toString(16).padStart(8,"0")}function Q_(i,e){const t=zn(i),n=io(i);delete n.savedAt;const s={schema:j_,version:K_,game:"part1",day:i.day,creature:ho(t),profile:t,ledger:n,spores:e.map(({playerProfile:r,...o})=>o)};return{...s,checksum:J_(JSON.stringify(s))}}const e1=i=>btoa(String.fromCharCode(...new TextEncoder().encode(i))),t1=i=>Z_+e1(JSON.stringify(i)),Vr="https://zeronullhq.github.io/starburn-playtest/",Dd=null;function n1(i){const e=zn(i),t=i.flags??{},n=Vl(t),s=n>=2?42+Math.min(20,n*3):n<=-2?285-Math.min(25,-n*3):170,r=i.cubeChoice==="kept"&&t.manifest!=="organic"?"spiky":i.cubeChoice==="jettisoned"?"lumpy":"round",o=e.sleeper==="sleepless"?"sleepy":i.cubeChoice==="jettisoned"?"odd":n<=-2?"narrow":"wide",a=t.sporeRough??0,l=t.sporeKind??0,c=a>l+2?"fangs":n<=-2?"grin":l>a?"smile":l||a?"flat":"smile";return{hue:s,shape:r,eyes:o,mouth:c,blobs:Math.min(14,5+(t.sporeFed??0)+Math.floor(i.feeds/2)),cracks:Math.min(5,e.shatters)}}function i1(i,e=Dd){const t=zn(i),n=i.flags??{},s=Vl(n),r=i.cubeChoice==="jettisoned"?"Threw the Larder out (it came back)":i.cubeChoice==="kept"?n.manifest==="organic"?"Kept the Larder, logged it honestly":"Kept the Larder, called it scrap":"Never decided about the Larder",o=t.sleeper==="sleepless"?t.skippedSleeps>0?`Sleepless: skipped sleep ${t.skippedSleeps}x, peak tiredness ${t.maxFatigue}`:`Sleepless: ran on fumes, peak tiredness ${t.maxFatigue}`:t.nights===0?"Never slept. The bunk is still made.":t.sleeper==="rested"?`Well rested: ${t.nights} nights, regular as a clock`:t.nights===1?"Slept once. It counted.":`Steady: ${t.nights} nights`,a=Zl(n,i.cubeChoice==="jettisoned"),l=`${a==="unmet"?"Barely met them":a[0].toUpperCase()+a.slice(1)}${n.sporeKind||n.sporeRough||n.sporeFed?`: ${n.sporeKind??0} kind, ${n.sporeRough??0} rough, fed ${n.sporeFed??0}x`:""}`,c=s>=2?"light":s<=-2?"dark":"balanced",h=Math.max(1,Math.round(t.seconds/60)),u=[["Sorties",t.trips?String(t.trips):"none yet"],["Clean hauls",t.trips?String(t.clean):"n/a"],["Shattered",t.shatters?String(t.shatters):"nothing"],["Logs read",t.logsRead?`${t.logsRead}/7`:"none"],["Debt left",t.debtLeft<=0?"paid off":`${t.debtLeft} cr`],["Played",t.seconds<60?"<1 min":`${h} min`]],f=i.cubeChoice||"undecided",p=e&&typeof e[f]=="number"?Math.round(e[f]):null;return{creature:ho(t).name,larder:r,sleep:o,spores:l,lean:c,stats:u,same:p===null?null:`${p}% of players made the same Larder choice`}}function s1(i,e=Dd){const t=i1(i,e),n=1200,s=630,r=document.createElement("canvas");r.width=n,r.height=s;const o=r.getContext("2d"),a=o.createLinearGradient(0,0,n,s);a.addColorStop(0,"#0a0620"),a.addColorStop(1,t.lean==="dark"?"#2a0838":t.lean==="light"?"#3a2a10":"#14203a"),o.fillStyle=a,o.fillRect(0,0,n,s);for(let h=0;h<160;h++)o.fillStyle=`rgba(255,255,255,${h*37%100/140})`,o.fillRect(h*733%n,h*397%s,2,2);a1(o,n1(i),230,330),o.fillStyle="#ffe9c0",o.font="bold 40px Georgia, serif",o.fillText("STARBURN · PART 1",420,80),o.fillStyle="#cfe",o.font="italic 30px Georgia, serif",Kh(o,`My creature: ${t.creature}`,420,130,740,36),o.font="22px monospace";let l=220;const c=(h,u)=>{o.fillStyle="#9bd",o.fillText(h,420,l),o.fillStyle="#f4efe0",l=Kh(o,u,600,l,560,28)+46};return c("THE LARDER",t.larder),c("SLEEP",t.sleep),c("SPORES",t.spores),c("LEAN",t.lean==="light"?"Light (they like you)":t.lean==="dark"?"Dark (they remember)":"Balanced (undecided, like you)"),l+=10,o.font="20px monospace",t.stats.forEach(([h,u],f)=>{const p=420+f%3*250,g=l+Math.floor(f/3)*34;o.fillStyle="#9bd",o.fillText(h+":",p,g),o.fillStyle="#fff",o.fillText(u,p+o.measureText(h+": ").width,g)}),t.same&&(o.fillStyle="#ffd080",o.font="bold 22px monospace",o.fillText(t.same,420,s-70)),o.fillStyle="#889",o.font="18px monospace",o.fillText("TO BE CONTINUED · "+Vr.replace(/^https:\/\//,""),40,s-28),r}function Kh(i,e,t,n,s,r){let o="";for(const a of e.split(" ")){const l=o?o+" "+a:a;i.measureText(l).width>s&&o?(i.fillText(o,t,n),o=a,n+=r):o=l}return i.fillText(o,t,n),n}async function r1(i){var n;const e=navigator,t="My StarBurn Part 1 run. Your turn:";try{const s=await new Promise(o=>i.toBlob(o,"image/png")),r=s?new File([s],"starburn-part1.png",{type:"image/png"}):null;if(e.share)return r&&((n=e.canShare)!=null&&n.call(e,{files:[r]}))?await e.share({files:[r],text:t,url:Vr}):await e.share({text:t,url:Vr}),"shared"}catch{}try{return await navigator.clipboard.writeText(Vr),"copied"}catch{return"failed"}}function o1(i){const e=document.createElement("a");e.href=i.toDataURL("image/png"),e.download="starburn-part1-card.png",e.click()}function a1(i,e,t,n){for(let r=0;r<e.blobs;r++){const o=r*(6.28/e.blobs)+.3;i.fillStyle=`hsl(${(e.hue+r*14)%360},75%,${46+r%3*7}%)`,i.beginPath(),i.arc(t+Math.cos(o)*82,n+Math.sin(o)*72,44-r%4*5,0,7),i.fill()}i.fillStyle=`hsl(${e.hue},85%,58%)`,i.strokeStyle="#000",i.lineWidth=6,i.beginPath();const s=48;for(let r=0;r<=s;r++){const o=r/s*Math.PI*2,a=e.shape==="spiky"?110+(r%2?22:-4):e.shape==="lumpy"?110+Math.sin(o*5)*12+Math.sin(o*3+1)*8:110,l=t+Math.cos(o)*a,c=n+Math.sin(o)*a;r?i.lineTo(l,c):i.moveTo(l,c)}i.closePath(),i.fill(),i.stroke();for(let r=0;r<e.cracks;r++){const o=r*1.3+.5;i.lineWidth=3,i.beginPath();let a=t+Math.cos(o)*105,l=n+Math.sin(o)*105;i.moveTo(a,l);for(let c=0;c<3;c++)a-=Math.cos(o)*12+(c%2?6:-6),l-=Math.sin(o)*12,i.lineTo(a,l);i.stroke()}if(i.lineWidth=6,[-40,40].forEach((r,o)=>{const a=e.eyes==="odd"?o?20:34:e.eyes==="narrow"?26:30;i.fillStyle="#fff",i.beginPath(),i.arc(t+r,n-20,a,0,7),i.fill(),i.stroke(),i.fillStyle="#000",i.beginPath(),i.arc(t+r+6,n-16,e.eyes==="odd"&&o?8:12,0,7),i.fill(),(e.eyes==="sleepy"||e.eyes==="narrow")&&(i.fillStyle=`hsl(${e.hue},70%,42%)`,i.beginPath(),i.arc(t+r,n-20,a+3,Math.PI,e.eyes==="sleepy"?2*Math.PI:1.85*Math.PI),i.closePath(),i.fill(),i.stroke())}),i.beginPath(),i.lineWidth=6,e.mouth==="smile")i.arc(t,n+30,34,.2,Math.PI-.2);else if(e.mouth==="flat")i.moveTo(t-30,n+50),i.lineTo(t+30,n+50);else if(e.mouth==="grin")i.moveTo(t-44,n+36),i.quadraticCurveTo(t,n+76,t+50,n+30);else{i.moveTo(t-40,n+44),i.lineTo(t+40,n+44),i.stroke(),i.fillStyle="#fff";for(const r of[-22,14])i.beginPath(),i.moveTo(t+r,n+44),i.lineTo(t+r+8,n+62),i.lineTo(t+r+16,n+44),i.fill(),i.stroke();i.beginPath()}i.stroke()}const et={gate:16,open:28,tentacle:34,cut:36,crash:36.9,wreck:38.4,end:45},l1=!0,_n={silence:31.4,dark:32.6,groan:32.8,hit:34},Zh=i=>i<_n.dark?1:i<_n.hit?Math.max(.08,1-(i-_n.dark)/.6)*(Math.sin(i*37)>.7?1.6:1):.35,Jh=i=>i<et.open?0:i<_n.silence?2+(i-et.open)*1.6:i<_n.hit?.6:26*Math.max(.3,1-(i-_n.hit)/2.5),ca=i=>i<et.gate?"maze":i<et.open?"gate":i<et.cut?"open":i<et.crash?"cut":i<et.wreck?"crash":i<et.end?"wreck":"end",Qh=[[.4,"The spores have moved in. They have redecorated. Mostly with themselves."],[4.2,"The Helm is four minutes away. It is also one step. You are not sure which of those is the problem."],[8.2,"The corridor goes on. So does the corridor behind it. Physics has stepped out for a moment."],[12,"The ship stops being a ship and becomes an idea the spores are having. You, it turns out, are part of the idea."],[16.4,"On a screen that was not there before: the Threshold. Somewhere in you, something already knew the way."],[21,"You fly the ship. Or the ship flies you. The spores steer, politely."],[25,"The Threshold is older than the junk, older than the SI, and clearly expecting company."],[28.4,"The spores were never lost. They were the key. And you were holding the door."],[32,"Something on the other side leans closer."]];function c1(i){return i==="jettisoned"?"You threw it out. It let you. That is the part you will think about later.":i==="kept"?"You kept it. In fairness, it kept you too.":"You never decided. The cube did."}function h1(i){const e=document.createElement("canvas");e.id="finale",Object.assign(e.style,{position:"fixed",inset:"0",width:"100vw",height:"100vh",zIndex:"40",display:"none",background:"#000"});const t=document.createElement("div");t.id="finale-text",Object.assign(t.style,{position:"fixed",left:"50%",bottom:"14vh",transform:"translateX(-50%)",maxWidth:"78vw",textAlign:"center",font:"italic 20px/1.4 Georgia, serif",color:"#f4efe0",textShadow:"0 0 8px #000, 0 0 14px #000",zIndex:"41",display:"none",transition:"opacity .6s",pointerEvents:"none"});const n=document.createElement("div");n.id="finale-skip",n.textContent="Space: skip",Object.assign(n.style,{position:"fixed",right:"14px",bottom:"10px",font:"12px monospace",color:"#999",zIndex:"41",display:"none"});const s=document.createElement("div");s.id="finale-end",Object.assign(s.style,{position:"fixed",inset:"0",zIndex:"42",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px",color:"#f4efe0",textAlign:"center",font:"16px monospace",background:"rgba(0,0,0,.35)"}),document.body.append(e,t,n,s);let r=Qh;const o=e.getContext("2d"),a={active:!1,t:0,shown:-1,cutDone:!1,flash:0,inMaze:!1},l={onFeedback:void 0,maze:void 0,get inMaze(){return a.inMaze},get punch(){return{...h,lights:Zh(a.t),shake:Jh(a.t)}},get t(){return a.t},get active(){return a.active},get phase(){return ca(a.t)},get tentacleVisible(){return a.active&&a.t>=et.tentacle&&a.t<et.cut},play(){const m=i.get();{const d=Y_(m);r=Qh.map(([y,x])=>[y,y===28.4?d.key:x]),d.warning&&r.push([22.8,d.warning]),r.sort((y,x)=>y[0]-x[0])}a.active=!0,a.t=0,a.shown=-1,a.cutDone=!1,i.set({mode:"finale"}),e.style.display="block",n.style.display="block",t.style.display="block",s.style.display="none",e.width=innerWidth,e.height=innerHeight,de.merge(),l.maze&&Yh(i.get())||l.seek(et.gate),l.maze&&Yh(i.get())&&(a.inMaze=!0,e.style.display="none",t.style.display="none",l.maze.start(()=>{a.inMaze=!1,e.style.display="block",t.style.display="block",l.seek(et.gate)})),v(performance.now())},seek(m){var d;a.inMaze&&m>=et.gate&&(a.inMaze=!1,(d=l.maze)==null||d.stop(),e.style.display="block",t.style.display="block"),a.t=m,a.shown=-1,a.cutDone=m>=et.cut},skipNow(){if(a.active){if(a.inMaze){l.seek(et.gate);return}l.seek(et.end)}}};let c=0;const h={silence:!1,groan:!1,hit:!1},u=m=>{t.style.opacity="0",setTimeout(()=>{t.textContent=m,t.style.opacity="1"},120)},f=(m,d,y,x,b)=>{o.fillStyle=`hsl(${x},85%,58%)`,o.strokeStyle="#000",o.lineWidth=Math.max(2,y*.12),o.beginPath(),o.arc(m,d,y,0,7),o.fill(),o.stroke(),o.fillStyle="#fff";for(const I of[-.35,.35])o.beginPath(),o.arc(m+I*y,d-.15*y,y*.26,0,7),o.fill(),o.stroke(),o.fillStyle="#000",o.beginPath(),o.arc(m+I*y+Math.sin(b*2)*y*.06,d-.12*y,y*.1,0,7),o.fill(),o.fillStyle="#fff";o.strokeStyle="#000",o.beginPath(),o.arc(m,d+.25*y,y*.25,.1,Math.PI-.1),o.stroke()};function p(m){const d=e.width,y=e.height,x=d/2,b=y/2,I=ca(m);o.setTransform(1,0,0,1,0,0),o.fillStyle="#000",o.fillRect(0,0,d,y);const A=I==="open"?Jh(m):I==="crash"?18:0;if(o.translate((Math.random()-.5)*A,(Math.random()-.5)*A),I!=="cut")if(I==="maze"){const C=Math.sin(m*.7)>.8?Math.PI:0;o.translate(x,b),o.rotate(C+Math.sin(m*.5)*(.1+m*.02)+m*.05*(m>8?1:0)),o.translate(-x,-b);for(let R=14;R>=0;R--){const M=(R+m*.9%1)/14,_=Math.pow(M,2.2),T=d*(.05+_*1.3),D=y*(.05+_*1.3),k=[160,220,40,30,0][(R+Math.floor(m/2))%5];o.strokeStyle=`hsl(${k},60%,${18+_*40}%)`,o.lineWidth=2+_*14,o.strokeRect(x-T/2+Math.sin(m+R)*6*_,b-D/2,T,D),R%3===0&&(o.fillStyle=`hsla(${k},70%,40%,${.15+_*.3})`,o.fillRect(x-T/2,b-D/2,T*.1,D))}for(let R=0;R<12;R++){const M=R*2.4+m*.3,_=60+(R*53+m*40)%(Math.min(d,y)*.45);f(x+Math.cos(M)*_,b+Math.sin(M*1.3)*_*.7,10+_*.12,(R*47+m*20)%360,m)}}else if(I==="gate"||I==="open"){const C=I==="gate"?1:.4;o.fillStyle="#fff";for(let T=0;T<140;T++){const D=T*2.399,k=(T*.137+m*.35*C)%1,G=k*Math.max(d,y)*.7;o.globalAlpha=k,o.fillRect(x+Math.cos(D)*G,b+Math.sin(D)*G,1+k*2,1+k*2+C*k*4)}o.globalAlpha=1;const R=Math.min(d,y)*(.06+.3*Math.min(1,(m-et.gate)/14)),M=I==="open"?Math.min(1,(m-et.open)/4):Math.min(.5,(m-et.gate)/20),_=o.createRadialGradient(x,b,R*.4,x,b,R*(1.6+M*3));_.addColorStop(0,`rgba(190,150,255,${.2+M*.8})`),_.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=_,o.fillRect(0,0,d,y),o.strokeStyle=`hsl(270,60%,${40+M*40}%)`,o.lineWidth=R*.12,o.beginPath(),o.arc(x,b,R,0,7),o.stroke(),o.lineWidth=R*.03,o.strokeStyle="#fff",o.beginPath(),o.arc(x,b,R*.9,m,m+4.2),o.stroke(),I==="open"&&(o.fillStyle=`rgba(255,255,255,${M*.55})`,o.beginPath(),o.arc(x,b,R*.85,0,7),o.fill());for(let T=0;T<12;T++){const D=(m*.12+T/12)%1,k=T*.9;f(x+Math.cos(k)*(1-D)*d*.5*(I==="open"?.3+(1-M):1),b+Math.sin(k)*(1-D)*y*.4,6+(1-D)*12,T*47%360,m)}if(I==="open"&&l1){const T=Zh(m);T<1&&(o.fillStyle=`rgba(0,0,0,${Math.max(0,Math.min(.92,1-T))})`,o.fillRect(-50,-50,d+100,y+100))}if(l.tentacleVisible){const T=(m-et.tentacle)/(et.cut-et.tentacle);o.strokeStyle="#05020a",o.lineCap="round",o.lineWidth=R*(.5-T*.15),o.beginPath(),o.moveTo(d+40,y*.9),o.bezierCurveTo(d*(.9-T*.3),y*(.2+T*.1),x+R*(1-T*1.3),b-R*1.3,x-R*.2*T,b+R*.2-T*R*.4),o.stroke()}}else if(I==="crash")o.fillStyle=`rgba(255,240,220,${Math.max(0,1-(m-et.crash)/1.4)})`,o.fillRect(0,0,d,y);else{const C=o.createLinearGradient(0,0,0,y*.62);C.addColorStop(0,"#2a0f3a"),C.addColorStop(1,"#e0703a"),o.fillStyle=C,o.fillRect(0,0,d,y*.62),o.fillStyle="#3a1a22",o.fillRect(0,y*.62,d,y*.38),o.fillStyle="#ffe0a0",o.beginPath(),o.arc(d*.8,y*.2,y*.06,0,7),o.fill(),o.save(),o.translate(x,y*.66),o.rotate(-.22),o.fillStyle="#c8ccd4",o.beginPath(),o.ellipse(0,0,d*.16,y*.07,0,0,7),o.fill(),o.fillStyle="#6aa0e0",o.fillRect(-d*.04,-y*.045,d*.08,y*.03),o.restore();for(let R=0;R<26;R++){const M=(m*.3+R/26)%1;o.fillStyle=`rgba(60,50,50,${.5*(1-M)})`,o.beginPath(),o.arc(x+Math.sin(R*7+m)*30-40+M*60,y*.62-M*y*.4,8+M*26,0,7),o.fill()}}}const g=()=>{const m=i.get();s.style.display="flex",s.innerHTML=`<div style="font:bold 44px Georgia,serif;letter-spacing:6px">TO BE CONTINUED</div><div id="fe-line" style="font:italic 18px Georgia,serif;max-width:70vw">${c1(m.cubeChoice)}</div><div id="fe-creature" style="font:15px Georgia,serif;max-width:70vw;color:#cfe">Your creature: <b>${ho(zn(m)).name}</b>.</div><div id="fe-debt" style="color:#fc8">Debt remaining: ${m.debt} cr. Halcyon Reclamation will still want it after whatever happens next.</div>
      <div id="fe-recap" style="max-width:78vw;max-height:30vh;overflow:auto;text-align:left;font:12px/1.45 monospace;background:rgba(0,0,0,.55);border:1px solid #567;padding:8px 12px"><b>WHAT YOUR CHOICES DID</b>${Jl(m).map(y=>`<div><b>${y.label}:</b> ${y.value}<br><span style="color:#9bd">&rarr; ${y.part1}</span></div>`).join("")}</div>
      <div id="fe-card" style="display:flex;gap:12px;align-items:center"><img id="fe-card-img" alt="Your end card" style="width:300px;border:1px solid #567"><div style="display:flex;flex-direction:column;gap:6px"><button id="fe-card-dl" style="font:15px monospace;padding:8px 14px">Download my card</button><button id="fe-card-share" style="font:15px monospace;padding:8px 14px">Share</button></div></div>
      <div><button id="fe-fb" style="font:15px monospace;padding:8px 14px">Send feedback</button> <button id="fe-copy" style="font:15px monospace;padding:8px 14px">Copy my choices</button></div>
      <div><button id="fe-code" style="font:15px monospace;padding:8px 14px">Copy carryover code</button> <button id="fe-file" style="font:15px monospace;padding:8px 14px">Download carryover file</button>  </div><small style="color:#9ab;max-width:70vw">The carryover holds your choices and your spores for the next part. No personal data; nothing is sent anywhere.</small>`;{const y=s1(m);s.querySelector("#fe-card-img").src=y.toDataURL("image/png"),window.endCard=y,s.querySelector("#fe-card-dl").onclick=()=>o1(y),s.querySelector("#fe-card-share").onclick=async()=>{const x=s.querySelector("#fe-card-share"),b=await r1(y);x.textContent=b==="shared"?"Shared":b==="copied"?"Link copied":"Share blocked"}}const d=()=>{var y;return Q_(i.get(),((y=window.cameo)==null?void 0:y.spores)??[])};s.querySelector("#fe-code").onclick=async()=>{const y=s.querySelector("#fe-code");try{await navigator.clipboard.writeText(t1(d())),y.textContent="Copied"}catch{y.textContent="Copy blocked"}},s.querySelector("#fe-file").onclick=()=>{const y=document.createElement("a");y.href=URL.createObjectURL(new Blob([JSON.stringify(d(),null,1)],{type:"application/json"})),y.download="starburn-part1-carryover.json",y.click(),setTimeout(()=>URL.revokeObjectURL(y.href),2e3)},s.querySelector("#fe-copy").onclick=async()=>{try{await navigator.clipboard.writeText(Ld(i.get())),s.querySelector("#fe-copy").textContent="Copied"}catch{s.querySelector("#fe-copy").textContent="Copy blocked"}},s.querySelector("#fe-fb").onclick=()=>{var y;return(y=l.onFeedback)==null?void 0:y.call(l)},n.style.display="none",t.style.display="none"};function v(m){if(!a.active)return;const d=Math.min(.1,(m-c)/1e3);if(c=m,a.inMaze){requestAnimationFrame(v);return}a.t+=d;const y=ca(a.t);y==="cut"&&!a.cutDone&&(a.cutDone=!0,t.style.opacity="0",de.sting()),y==="crash"&&a.flash===0&&(a.flash=1,de.shatter()),y!=="crash"&&y!=="wreck"&&y!=="end"&&(a.flash=0),a.t>=et.open&&a.shown<7&&a.t<et.open+.1&&de.burst(),a.t>=_n.silence&&a.t<et.cut&&!h.silence&&(h.silence=!0,de.silence(!0,.15),t.style.opacity="0"),a.t>=_n.groan&&a.t<et.cut&&!h.groan&&(h.groan=!0,de.silence(!1,.05),de.groan()),a.t>=_n.hit&&a.t<et.cut&&!h.hit&&(h.hit=!0,de.hit()),a.t<_n.silence&&(h.silence=h.groan=h.hit=!1),a.t>=et.cut&&h.silence&&de.silenced&&de.silence(!1);for(let x=0;x<r.length;x++)a.t>=r[x][0]&&a.shown<x&&a.t<et.cut&&(a.shown=x,u(r[x][1]));y==="cut"&&(t.style.opacity="0"),y==="crash"&&a.shown<19&&a.t>et.crash+.2&&(a.shown=19,u("Down.")),y==="wreck"&&a.shown<20&&(a.shown=20,u("The ship is on a planet. The planet did not ask for the ship. Neither of you is hurt, exactly.")),y==="end"?s.style.display==="none"&&g():p(a.t),y==="end"&&p(et.wreck+1),requestAnimationFrame(v)}return addEventListener("keydown",m=>{a.active&&(m.code==="Space"||m.code==="Escape")&&(m.preventDefault(),l.skipNow())}),l}const Wr="THRESHOLD",kd=[{id:"hall-stretch",kind:"hall",mod:"stretch",len:9,line:"The corridor to the Bunk is four steps long. You have taken thirty. The door keeps politely backing away.",exits:[{label:"BUNK",to:"bunk",guided:!0}]},{id:"bunk",kind:"room",room:"bed",mod:"wrongdoor",line:"The Bunk. The door marked HELM is now marked HELM in a different handwriting.",exits:[{label:"HELM",to:"hall-stretch"},{label:"CARGO",to:"hall-loop",guided:!0}]},{id:"hall-loop",kind:"hall",mod:"loop",len:7,line:"This corridor again. The scuff marks are yours. So is the drawing, apparently.",exits:[{label:"ONWARD",to:"hall-loop"},{label:"HATCH",to:"cargo",guided:!0}]},{id:"cargo",kind:"room",room:"transmog",mod:"scale",line:"The Cargo Bay. The pods are the size of teacups. Your mug is the size of a pod.",exits:[{label:"BUNK",to:"bunk"},{label:"ENGINE",to:"hall-tilt",guided:!0}]},{id:"hall-tilt",kind:"hall",mod:"tilt",len:10,line:"Gravity leans left. You lean right. Neither of you wins.",exits:[{label:"CARGO",to:"cargo"},{label:"HELM",to:"helm",guided:!0}]},{id:"helm",kind:"room",room:"mining",mod:"none",line:"The Helm, finally the right size. The pilot chair is waiting. So is something else.",exits:[{label:"PILOT CHAIR",to:Wr,guided:!0},{label:"BUNK",to:"bunk"}]}],eu="hall-stretch",tu=i=>kd.find(e=>e.id===i),u1=(i,e,t=8)=>i+Math.min(t,e*.6),d1=i=>.42*Math.sin(Math.PI*Math.max(0,Math.min(1,i))),f1={bed:{spawn:[0,1.45,2.3],yaw:0,b:{x0:-1.5,x1:1.5,z0:-1.4,z1:2.6},doors:{HELM:[-1.6,.95,-.9],CARGO:[1.6,.95,-.15]}},transmog:{spawn:[.25,1.6,3.4],yaw:.08,b:{x0:-2.4,x1:2.4,z0:-6.4,z1:3.8},doors:{BUNK:[-2.45,.95,-.6],ENGINE:[0,.95,-6.5]}},mining:{spawn:[.25,1.45,2.4],yaw:.05,b:{x0:-1.3,x1:1.3,z0:-.9,z1:2.6},doors:{BUNK:[1.3,.95,.9],"PILOT CHAIR":[0,.95,-.35]}}},nu=(i,e)=>{const t=document.createElement("canvas");t.width=256,t.height=512;const n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,256,512),n.fillStyle="rgba(0,0,0,.55)",n.fillRect(12,12,232,488),n.fillStyle="#fff",n.font="bold 34px monospace",n.textAlign="center",i.split(" ").forEach((r,o)=>n.fillText(r,128,210+o*44));const s=new Mn(t);return s.colorSpace=Yt,s};function p1(i){const e=new vt,t=new ne(new st(.11,14,10),new Ze({color:new Te().setHSL(i,.8,.55),emissive:new Te().setHSL(i,.9,.35),emissiveIntensity:.9,roughness:.4}));e.add(t);for(const n of[-.04,.04]){const s=new ne(new st(.032,8,6),new Ne({color:16777215}));s.position.set(n,.03,.09),e.add(s);const r=new ne(new st(.015,6,4),new Ne({color:0}));r.position.set(n,.03,.115),e.add(r)}return e}function m1(i){const e=new Gt(70,1,.03,120),t=new Map,n=new Set,s=document.createElement("div");s.id="maze-text",Object.assign(s.style,{position:"fixed",left:"50%",bottom:"12vh",transform:"translateX(-50%)",maxWidth:"78vw",textAlign:"center",font:"italic 19px/1.4 Georgia, serif",color:"#f4efe0",textShadow:"0 0 8px #000, 0 0 14px #000",zIndex:"41",display:"none",pointerEvents:"none"});const r=document.createElement("div");r.id="maze-help",r.textContent="W/S or arrows: walk · A/D: turn · drag to look · click a glowing door to walk to it · follow the spores",Object.assign(r.style,{position:"fixed",left:"10px",top:"10px",font:"12px monospace",color:"#bcd",zIndex:"41",display:"none",pointerEvents:"none"}),document.body.append(s,r);const o={active:!1,node:eu,pos:new E,yaw:0,roll:0,walked:0,enterT:0,loops:0,visits:[],done:void 0,auto:null,cooldown:0,hinted:!1,steps:0};let a=new bn,l=null,c=[],h=[],u={x0:-1,x1:1,z0:-5,z1:1};const f=[],p=_=>{s.textContent=_,s.style.opacity="1"};function g(_){const T=(_.len??8)+9,D=new bn;D.background=new Te(131848),D.fog=new wi(329228,_.mod==="stretch"?.09:.06);const k=1.7,G=2.1,q=(X,oe=0)=>new Ze({color:X,roughness:.85,metalness:.3,emissive:oe}),N=(X,oe,ge,we,Ie,Le,Je)=>{const F=new ne(new Ye(X,oe,ge),Je);return F.position.set(we,Ie,Le),D.add(F),F},O=q(1910067),U=q(1317154),J=q(2897480),ee=_.mod==="tilt"?7356671:_.mod==="loop"?2146464:16752704;N(k,.08,T,0,0,-T/2+1,U),N(k,.08,T,0,G,-T/2+1,q(922137)),N(.08,G,T,-k/2,G/2,-T/2+1,O),N(.08,G,T,k/2,G/2,-T/2+1,O),N(k,G,.08,0,G/2,1.2,O);const ce=new Dn(new Ye(k+.02,.12,.1),J,Math.ceil(T)),$=new tt;for(let X=0;X<ce.count;X++)$.makeTranslation(0,G-.08,.8-X),ce.setMatrixAt(X,$);D.add(ce);const j=new Dn(new Ye(.05,.03,.5),q(ee,ee),Math.ceil(T/2));for(let X=0;X<j.count;X++)$.makeTranslation(X%2?-k/2+.06:k/2-.06,.3,.5-X*2),j.setMatrixAt(X,$);D.add(j);for(let X=0;X<3;X++){const oe=new Ot(16765088,5,7);oe.position.set(0,G-.3,-X*(T/3)),D.add(oe)}D.add(new fs(2240584,.9));const L=new vt;L.name="maze-far",D.add(L);const W=new vt;D.add(W);const re={scene:D,far:L,drawings:W};return t.set(_.id,re),re}function v(_,T,D,k){const G=T.to===Wr?"#c090ff":T.guided?"#30c090":"#c07030",q=new ne(new nn(.78,1.6),new Ne({map:nu(T.label,G),transparent:!0,opacity:.92,side:Tt}));q.position.copy(D),q.lookAt(k.x,D.y,k.z),q.name="maze-portal",q.exitLabel=T.label,_.add(q);const N=new Ot(T.to===Wr?12620031:6356928,2.2,3);N.position.copy(D),_.add(N),c.push({exit:T,mesh:q,pos:D.clone()})}function m(){var _;l&&((_=l.parent)==null||_.remove(l),l=null),f.splice(0).forEach(T=>T()),c=[],h=[]}function d(_){if(_===Wr){x();return}m();const T=tu(_);if(o.node=_,o.walked=0,o.enterT=performance.now(),o.hinted=!1,o.auto=null,o.visits.push(_),o.cooldown=.6,l=new vt,l.name="maze-overlay",T.kind==="hall"){const D=t.get(_)??g(T);a=D.scene,a.add(l);const k=T.len??8;u={x0:-.6,x1:.6,z0:-k-7.4,z1:.8},o.pos.set(0,1.5,T.mod==="tilt"?-.1:.4),o.yaw=0;const G=T.exits,q=G[G.length===1,0];if(T.mod==="tilt")v(l,G[0],new E(0,.95,1.1),new E(0,0,-5)),v(l,G[1],new E(0,.95,-k),new E(0,0,0));else if(T.mod==="loop"){v(l,G[0],new E(0,.95,-k),new E(0,0,0)),v(l,G[1],new E(-.8,.95,-k*.55),new E(5,0,-k*.55)),D.drawings.clear();for(let N=0;N<Math.min(8,o.loops);N++){const O=new ne(new Fn(.12+N%3*.04,12),new Ne({color:new Te().setHSL(N*.13%1,.9,.6)}));O.position.set(.83,.9+N%3*.35,-1-N*.6),O.rotation.y=-Math.PI/2,D.drawings.add(O)}}else v(l,q,new E(0,.95,-k),new E(0,0,0))}else{const D=i.rooms.get(T.room),k=f1[T.room];a=D.scene,a.add(l),u=k.b,o.pos.set(...k.spawn),o.yaw=k.yaw;for(const G of T.exits){const q=k.doors[G.label];q&&v(l,G,new E(...q),new E(...k.spawn))}if(T.mod==="scale"){const G=[];a.traverse(U=>{U.name==="pod"&&G.push(U)}),G.forEach(U=>{const J=U.scale.clone();U.scale.multiplyScalar(.3),f.push(()=>U.scale.copy(J))});const q=a.getObjectByName("ladder");if(q){const U=q.scale.clone();q.scale.multiplyScalar(2.2),f.push(()=>q.scale.copy(U))}const N=new ne(new Vt(.55,.48,1.3,20,1,!0),new Ze({color:13687008,roughness:.5,side:Tt}));N.position.set(-1.1,.65,-2.4),N.name="giant-mug",l.add(N);const O=new ne(new Ut(.32,.08,8,16),N.material);O.position.set(-.5,.7,-2.4),l.add(O)}if(T.mod==="wrongdoor"){const G=new ne(new nn(.9,.3),new Ne({map:nu("HELM?","#803030")}));G.position.set(-1.55,1.95,-.9),G.lookAt(0,1.95,2),l.add(G)}}for(let D=0;D<7;D++){const k=p1((D*.137+.1)%1);k.position.copy(o.pos).add(new E((D-3)*.2,-.4,-1.2)),l.add(k),h.push({g:k,guide:D<5,seed:D*1.7})}p(T.line),de.door()}function y(_){for(const T of["objective","narration"]){const D=document.getElementById(T);D&&(D.style.visibility=_?"hidden":"")}}function x(){y(!1),m(),o.active=!1,s.style.display="none",r.style.display="none";const _=o.done;o.done=void 0,_==null||_()}const b=()=>new E(-Math.sin(o.yaw),0,-Math.cos(o.yaw));function I(_){if(!o.active)return;const T=tu(o.node);o.cooldown-=_;let D=0,k=0;if((n.has("KeyA")||n.has("ArrowLeft"))&&(D+=1),(n.has("KeyD")||n.has("ArrowRight"))&&(D-=1),(n.has("KeyW")||n.has("ArrowUp"))&&(k+=1),(n.has("KeyS")||n.has("ArrowDown"))&&(k-=1),o.auto&&!k&&!D){const ee=o.auto.clone().sub(o.pos);ee.y=0;let $=Math.atan2(-ee.x,-ee.z)-o.yaw;$=Math.atan2(Math.sin($),Math.cos($)),D=Math.max(-1,Math.min(1,$*3)),k=Math.abs($)<.6?1:0}else(k||D)&&(o.auto=null);o.yaw+=D*1.9*_;const G=b().multiplyScalar(k*2.4*_),q=o.pos.clone();if(o.pos.add(G),T.mod==="tilt"){const ee=T.len??10,ce=Math.max(0,Math.min(1,-o.pos.z/ee));o.roll=d1(ce),o.pos.x-=Math.sin(o.roll)*.7*_}else o.roll*=.9;o.pos.x=Math.max(u.x0,Math.min(u.x1,o.pos.x)),o.pos.z=Math.max(u.z0,Math.min(u.z1,o.pos.z));const N=q.distanceTo(o.pos);if(o.walked+=N,o.steps+=N,T.mod==="stretch"){const ee=u1(T.len??9,o.walked);c[0].mesh.position.z=-ee,c[0].pos.z=-ee,t.get(o.node).far.position.z=-ee}const O=performance.now()/1e3,U=c.find(ee=>ee.exit.guided)??c[0],J=c.find(ee=>!ee.exit.guided);if(h.forEach((ee,ce)=>{const $=ee.guide||!J?o.pos.clone().lerp(U.pos,.35+.12*ce):J.pos.clone().add(new E(Math.sin(O*3+ce)*.4,.3,.3));!ee.guide&&J&&o.pos.distanceTo(J.pos)<1.6&&$.copy(U.pos).add(new E(0,.6,.4)),$.y=.9+Math.sin(O*2.4+ee.seed)*.18+(ee.guide?.2:.5),ee.g.position.lerp($,Math.min(1,_*2.2)),ee.g.lookAt(o.pos.x,ee.g.position.y,o.pos.z)}),!o.hinted&&performance.now()-o.enterT>2e4&&(o.hinted=!0,p(`The spores line up and point, very obviously, at the ${U.exit.label} door.`)),o.cooldown<=0)for(const ee of c){const ce=ee.pos.x-o.pos.x,$=ee.pos.z-o.pos.z;if(Math.hypot(ce,$)<.75){const j=ee.exit.to;T.mod==="wrongdoor"&&!ee.exit.guided&&p("That was not the Helm. That was never the Helm."),j===o.node&&o.loops++,d(j);return}}}function A(_){e.fov=i.camera.fov,e.aspect=i.camera.aspect,e.updateProjectionMatrix(),e.position.copy(o.pos),e.rotation.set(0,0,0,"YXZ"),e.rotation.y=o.yaw,e.rotation.x=-.06,e.rotation.z=o.roll,_.render(a,e)}addEventListener("keydown",_=>{o.active&&n.add(_.code)}),addEventListener("keyup",_=>n.delete(_.code)),addEventListener("blur",()=>n.clear());let C=null;i.dom.addEventListener("mousedown",_=>{o.active&&(C=_.clientX)}),addEventListener("mouseup",()=>C=null),addEventListener("mousemove",_=>{o.active&&C!==null&&(o.yaw-=(_.clientX-C)*.005,C=_.clientX)});const R=new $s;i.dom.addEventListener("click",_=>{if(!o.active)return;const T=i.dom.getBoundingClientRect();R.setFromCamera(new le((_.clientX-T.left)/T.width*2-1,-((_.clientY-T.top)/T.height)*2+1),e);const D=R.intersectObjects(c.map(k=>k.mesh))[0];if(D){const k=c.find(G=>G.mesh===D.object);o.auto=k.pos.clone()}},!0);const M={get active(){return o.active},get node(){return o.node},get visits(){return[...o.visits]},get loops(){return o.loops},get roll(){return o.roll},get pos(){return o.pos.clone()},get yaw(){return o.yaw},get steps(){return o.steps},exits(){return c.map(_=>({label:_.exit.label,x:_.pos.x,z:_.pos.z}))},sporeCentroid(){const _=h.filter(D=>D.guide),T=new E;return _.forEach(D=>T.add(D.g.position)),_.length?{x:T.x/_.length,z:T.z/_.length}:null},start(_){y(!0),o.active=!0,o.done=_,o.loops=0,o.visits=[],o.steps=0,s.style.display="block",r.style.display="block",d(eu)},stop(){o.active&&(y(!1),m(),o.active=!1,s.style.display="none",r.style.display="none",o.done=void 0)},update:I,render:A,MAZE:kd};return window.shipMaze=M,M}function g1(i){const e=document.createElement("div");e.id="sleep",Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"25",transition:"background 1s"}),document.body.appendChild(e);let t=!1;const n=a=>`<div style="width:min(600px,94vw);max-height:92vh;overflow:auto;background:#0a0c14;border:2px solid #6080ff;color:#cfe0ff;font:14px/1.5 monospace;padding:16px">${a}</div>`,s=()=>{const a=i.get(),l=ls(a.fatigue),c=dd(a);e.style.display="flex",e.style.background="rgba(0,0,0,.78)",e.innerHTML=n(`<b style="letter-spacing:3px">THE BUNK</b> <small>Day ${a.day}/${ll} · Contractor ${a.contractor}</small><hr>
      <p>Tiredness: <b style="color:${["#9f9","#ff8","#fa6","#f66"][l]}">${ud[l]}</b> (${Math.round(a.fatigue)}/100)</p>
      <p><b>Sleeping:</b> costs about ${c.oxygen} oxygen${c.scrap?" and 1 scrap of rations":""}. The night changes things: the vault shifts, the cube acts, the journal updates, the sectors reshuffle. The vault moves a step closer every time.</p>
      <p><b>Not sleeping:</b> nothing changes, but you get more tired: first a flicker, then a harder timing ring, then phantom sounds and ghost junk, then glitching consoles and hungrier lungs.</p>
      <button id="sl-go" style="font:14px monospace;padding:8px 14px">Sleep</button> <button id="sl-no" style="font:14px monospace;padding:8px 14px">Not now</button>`),e.querySelector("#sl-go").onclick=()=>o.sleep(!0),e.querySelector("#sl-no").onclick=()=>o.close()},r=a=>{let l="";const c=i.get();if(f_(c)){const u=p_(c);i.set(u.patch),l=`<p style="color:#fc6"><b>Overnight, the Larder:</b> ${u.text}</p>`}const h=m_(c.day);h.length&&(i.set({flags:{...i.get().flags,["strange"+c.day]:!0}}),l+=`<p style="color:#c9f"><b>Something is different:</b> ${h.join(" ")}</p>`),c.day>=7&&(l+=`<p style="color:#9ff"><b>Threshold:</b> ${g_(i.get())}</p>`),e.style.display="flex",e.style.background="rgba(0,0,0,.78)",o.morningOpen=!0,e.innerHTML=n(`<b style="letter-spacing:3px">MORNING: DAY ${a.day}/${ll}</b><hr>
      <p><b>Journal:</b> <i>${a.journal}</i></p><p><b>Vault:</b> ${a.vault}</p>${a.cube?`<p><b>Cube:</b> ${a.cube}</p>`:""}<p><b>Overnight:</b> ${a.event}</p>${l}<p><b>Sectors:</b> ${a.field}</p>
      ${a.log?`<p style="color:#9fd"><b>New log recovered:</b> Log ${a.log} is now in the Bunk terminal.</p>`:""}${a.receipt?hx(a.receipt):""}<small>Cost: ${a.costs.oxygen} oxygen${a.costs.scrap?", 1 scrap":""}. Tiredness cleared.</small><hr>
      <button id="sl-up" style="font:14px monospace;padding:8px 14px">Wake up</button>`),e.querySelector("#sl-up").onclick=()=>o.close()},o={open(){i.get().mode==="rooms"&&(t=!0,s())},onMorningClosed:void 0,morningOpen:!1,close(){var a;t=!1,e.style.display="none",o.morningOpen&&(o.morningOpen=!1,(a=o.onMorningClosed)==null||a.call(o))},isOpen:()=>t,last:null,sleep(a=!1){const{patch:l,report:c}=mx(i.get());return i.set(l),pl(i.get()),o.last=c,de.ping(),de.blip(262,.9,"sine",.06,196),a&&(t=!0,e.innerHTML=n('<div style="text-align:center;letter-spacing:6px">Zzz...</div>'),e.style.background="#000",setTimeout(()=>r(c),1500)),c}};return addEventListener("keydown",a=>{t&&a.code==="Escape"&&o.close()}),i.subscribe(a=>{t&&!(a.mode==="rooms"&&a.room==="bed")&&o.close()}),o}function v1(i){const e=document.createElement("div");e.id="fatigue-fx",Object.assign(e.style,{position:"fixed",inset:"0",pointerEvents:"none",zIndex:"3",opacity:"0",transition:"opacity .8s"}),document.body.appendChild(e);let t=0;setInterval(()=>{var o;t+=.1;const n=i.get(),s=ls(n.fatigue),r=document.querySelector("canvas");if(e.style.background=`radial-gradient(ellipse at center, transparent ${60-s*12}%, rgba(0,0,0,${.35+s*.2}) 100%)`,e.style.opacity=s?String(s>=3?.7+.3*Math.sin(t*9):.6+.4*Math.sin(t*2+s)):"0",r){{const a=((o=window.atmosphere)==null?void 0:o.enabled)===!1?0:Qn(n),l=a>.3?`hue-rotate(${Math.round(Math.sin(t*.8)*45*a)}deg) saturate(${(1+a*.5).toFixed(2)})`:"",c=s>=2?`blur(${(s===2?.7:1.5)*(.6+.6*Math.sin(t*1.3))+.3}px)`:"";r.style.filter=(c+" "+l).trim()}r.style.opacity=s>=3&&Math.sin(t*17)>.85?"0.82":""}},100)}function y1(i,e){const t=()=>{const a=i.get();return a.cubeState==="aboard"&&!a.cubeLunged&&a.mode==="rooms"&&a.room==="transmog"&&!a.report&&a.scrap>0};let n=0;const s={enabled:!0,lungeNow(){return t()?o():!1},lunged:0},r=()=>{document.body.animate([{transform:"translate(0,0)"},{transform:"translate(-16px,8px)"},{transform:"translate(14px,-10px)"},{transform:"translate(-9px,5px)"},{transform:"translate(5px,-3px)"},{transform:"translate(0,0)"}],{duration:520,easing:"ease-out"});const a=document.createElement("div");Object.assign(a.style,{position:"fixed",inset:"0",background:"#8a40ff",opacity:"0.55",transition:"opacity .7s",pointerEvents:"none",zIndex:"50"}),document.body.appendChild(a),requestAnimationFrame(()=>{a.style.opacity="0"}),setTimeout(()=>a.remove(),900)};function o(){const a=i.get(),l=lx(a.scrap);return i.set({scrap:a.scrap-l,feeds:Math.max(1,a.feeds),cubeLunged:!0,lunges:a.lunges+1,beats:a.beats.includes("firstFeed")?a.beats:[...a.beats,"firstFeed"],log:[...a.log,`The cube lunged and swallowed ${l} scrap. Nobody asked it to.`]}),de.sting(),r(),e.say("cubeLunge"),s.lunged++,!0}return i.subscribe(()=>{s.enabled&&(t()?n||(n=setTimeout(()=>{n=0,t()&&o()},1400)):n&&(clearTimeout(n),n=0))}),s}class x1{constructor(e,t){V(this,"scene",new bn);V(this,"ship",new vt);V(this,"glow");V(this,"engineLight",new Ot(6332671,0,12));V(this,"tracker",new vt);V(this,"trackerLight",new Ot(16724016,0,6));V(this,"cells",[]);V(this,"kind","launch");V(this,"t",0);V(this,"dur",4);V(this,"active",!1);V(this,"done");V(this,"caps",[]);V(this,"pinged",-1);V(this,"promptShown",!1);V(this,"cap",document.createElement("div"));V(this,"skip",document.createElement("button"));V(this,"fade",document.createElement("div"));V(this,"prompt",document.createElement("div"));V(this,"onFeedback");this.store=e,this.camera=t;const n=this.scene;n.background=new Te(131850),n.add(new fs(4872312,.9));const s=new Jr(16773336,2.6);s.position.set(8,6,6),n.add(s);const r=new Jr(6982399,1.2);r.position.set(-8,2,-6),n.add(r);const o=new ht,a=[];for(let f=0;f<1200;f++){const p=Math.random()*2-1,g=Math.random()*6.283,v=Math.sqrt(1-p*p);a.push(Math.cos(g)*v*150,p*150,Math.sin(g)*v*150)}o.setAttribute("position",new $e(a,3)),n.add(new Us(o,new es({color:12570879,size:.9,fog:!1})));const l=new ne(new st(30,32,20),new Ze({color:16742970,emissive:4200448,flatShading:!0}));l.position.set(-70,-34,-120),n.add(l),this.buildShip(),n.add(this.ship);const c=new ne(new Ye(.5,.2,.3),new Ze({color:2763312,metalness:.6,roughness:.4})),h=new ne(new Vt(.012,.012,.5,6),new Ze({color:8947848}));h.position.set(.15,.3,0);const u=new ne(new st(.07,10,8),new Ne({color:16724016}));u.position.set(-.15,.13,.1),u.name="led",this.tracker.add(c,h,u,this.trackerLight),this.trackerLight.position.copy(u.position),this.tracker.scale.setScalar(.001),this.tracker.visible=!1,this.tracker.position.set(1.3,.55,1.5),n.add(this.tracker),Object.assign(this.cap.style,{position:"fixed",left:"50%",bottom:"12vh",transform:"translateX(-50%)",maxWidth:"min(640px,88vw)",textAlign:"center",padding:"8px 16px",background:"rgba(0,0,0,.62)",borderTop:"1px solid #c9a96a",borderBottom:"1px solid #c9a96a",color:"#ffe9c0",font:"italic max(14px,1.3vw)/1.4 Georgia, serif",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"12"}),this.cap.id="ext-caption",this.skip.id="ext-skip",this.skip.textContent="Skip (Space)",Object.assign(this.skip.style,{position:"fixed",right:"12px",top:"12px",display:"none",padding:"6px 10px",font:"12px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"40"}),Object.assign(this.fade.style,{position:"fixed",inset:"0",background:"#000",opacity:"0",transition:"opacity .5s",pointerEvents:"none",zIndex:"11"}),this.prompt.id="ext-end",Object.assign(this.prompt.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%,-50%)",display:"none",textAlign:"center",padding:"22px 30px",background:"rgba(3,6,12,.88)",border:"2px solid #c9a96a",color:"#ffe9c0",font:"16px/1.5 Georgia, serif",zIndex:"41"}),this.prompt.innerHTML='<div style="font-size:22px;letter-spacing:3px">END OF PART 1</div><p>Thanks for flying, Junker.<br><i>Part 2: the spores are out there. So is whoever is following them.</i></p><button id="ext-fb" style="font:14px monospace;padding:8px 14px;margin:4px">Send feedback</button>',document.body.append(this.cap,this.skip,this.fade,this.prompt),this.skip.onclick=()=>this.skipNow(),addEventListener("keydown",f=>{this.active&&(f.code==="Space"||f.code==="Escape")&&this.skipNow()}),this.prompt.querySelector("#ext-fb").onclick=()=>{var f;return(f=this.onFeedback)==null?void 0:f.call(this)}}buildShip(){const e=(a,l,c=1)=>{const h=[];for(let u=0;u<=40;u++){const f=a+(l-a)*u/40;h.push(new le(Math.max(1e-4,1.3*c*Math.sin(Math.PI*Math.pow(f,.6))*(1-.3*f)),3-6*f))}return h},n=new ne(new Gs(e(0,1),56,Math.PI/2+.6,Math.PI*2-1.2),new Ze({color:9213352,metalness:.75,roughness:.32,side:Tt})),s=new ne(new Gs(e(.1,.62,1.012),16,Math.PI/2-.6,2*.6),new vy({color:10479871,transparent:!0,opacity:.28,roughness:.05,metalness:.1,side:Tt,emissive:1060928})),r=new vt;r.add(n,s),r.rotation.x=Math.PI/2,[16760944,4251824,14721072,6324479].forEach((a,l)=>{const c=new ne(new Ye(1.05,.14,1.05),new Ze({color:1382948,emissive:a,emissiveIntensity:.9}));c.position.set(0,-.6+l*.4,1),this.cells.push(c),this.ship.add(c)}),this.ship.add(r),this.glow=new ne(new dn(.4,1.8,16,1,!0),new Ne({color:7385343,transparent:!0,opacity:0,blending:Ht,depthWrite:!1,side:Tt})),this.glow.rotation.x=-Math.PI/2,this.glow.position.set(0,0,-4.1),this.ship.add(this.glow),this.engineLight.position.set(0,0,-3.6),this.ship.add(this.engineLight)}play(e,t){this.kind=e,this.t=0,this.done=t,this.active=!0,this.pinged=-1,this.promptShown=!1,this.prompt.style.display="none",this.tracker.visible=!1,this.ship.position.set(0,0,0),this.ship.rotation.set(0,0,0),this.glow.material.opacity=0,this.fade.style.opacity="0",this.caps=e==="launch"?[{at:.3,until:3.4,text:"Engines up. The whole ship goes out, as always. The hull is smooth, one side is glass, and the paperwork is out of date."}]:[{at:.4,until:3.6,text:"Somewhere above the galaxy’s rubbish heap, the ship drifts. Lights on. Spores gone."},{at:4.2,until:8,text:"Something small and blinking has clamped itself to your hull. It is not yours."},{at:8.4,until:12.5,text:"Part 2: someone has been tracking the spores. Now they are tracking you."}],this.dur=e==="launch"?4:12.8,this.skip.style.display="block",this.store.set({mode:"exterior"}),de.door()}finish(){this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",de.engine(0,!1),this.kind==="launch"?(this.fade.style.opacity="1",setTimeout(()=>{var e;(e=this.done)==null||e.call(this),this.fade.style.opacity="0"},450)):this.showPrompt()}skipNow(){this.active&&(this.kind==="end"?(this.active=!1,this.skip.style.display="none",this.cap.style.opacity="0",this.tracker.visible=!0,this.tracker.scale.setScalar(1.8),this.showPrompt()):this.finish())}showPrompt(){this.promptShown=!0,this.prompt.style.display="block"}update(e){if(this.store.get().mode!=="exterior")return;this.t+=e;const t=this.t,n=this.camera;if(this.cells.forEach((r,o)=>{r.material.emissiveIntensity=.7+.3*Math.sin(t*2+o*1.3)+(o===3&&this.kind==="end"?.5*Math.sin(t*6):0)}),this.kind==="launch"){const r=Math.max(0,t-1.2);this.ship.position.z=.9*r*r*2.2,this.ship.position.y=.04*r,this.glow.material.opacity=Math.min(.4,r*.6),this.engineLight.intensity=Math.min(8,r*6),de.engine(Math.min(1,r/1.5),!0);const o=-.5+t*.08;n.position.set(Math.cos(o)*9,1.8,Math.sin(o)*9+1),n.lookAt(0,.2,Math.max(0,this.ship.position.z*.35)),t>this.dur-.5&&this.active&&(this.fade.style.opacity="1"),t>=this.dur&&this.active&&this.finish()}else{const r=Math.min(1,t/3.2),o=r*r*(3-2*r);this.ship.rotation.y=Math.sin(t*.2)*.08,this.ship.position.y=Math.sin(t*.7)*.06;const a=Math.max(0,Math.min(1,(t-5.6)/3.2)),l=a*a*(3-2*a),c=4+5*o,h=.4+2.1*o,u=2.5+8.5*o;if(n.position.set(c+(3-c)*l*.55,h+(.9-h)*l*.5,u+(4.2-u)*l*.55),n.lookAt(this.ship.position.x+.6*l,.2+.4*l,.8+.6*l),t>4.2){this.tracker.visible=!0;const f=Math.min(1,(t-4.2)/.8);this.tracker.scale.setScalar((f*f*(3-2*f)+.001)*1.8),this.tracker.rotation.y=t*.5;const p=Math.sin(t*(6+a*10))>0?1:.1;this.trackerLight.intensity=3*p,this.tracker.getObjectByName("led").visible=p>.5;const g=Math.floor((t-4.2)/.9);g!==this.pinged&&(this.pinged=g,de.ping())}t>=this.dur&&this.active&&this.finish()}const s=this.caps.find(r=>t>=r.at&&t<r.until);if(s?(this.cap.textContent=s.text,this.cap.style.opacity="1"):this.cap.style.opacity="0",!this.active&&this.kind==="end"){const r=.5+.5*Math.sin(t*2);this.trackerLight.intensity=1+3*(r>.5?1:0)}}render(e){e.render(this.scene,this.camera)}}const ml=[{id:"clarity",label:"How clear was it what to do at the start? (1 = lost, 5 = obvious)",kind:"scale"},{id:"fun",label:"How fun was it overall? (1 = boring, 5 = great)",kind:"scale"},{id:"mining",label:"Mining: was it clear when and where you could click?",kind:"choice",choices:["Clear","Sort of","Confusing"]},{id:"again",label:"Would you play again, or play Part 2?",kind:"choice",choices:["Yes","Maybe","No"]},{id:"stuck",label:"Where did you get stuck or bored?",kind:"text"},{id:"best",label:"Best moment?",kind:"text"},{id:"broken",label:"Anything broken or confusing?",kind:"text"}],Ud="starburn-feedback";function _1(i){const e=i.answers;return[`StarBurn Part 1 playtest feedback (${i.at})`,"",...ml.map(n=>`${n.label.replace(/ \(.*\)$/,"")}: ${e[n.id]||"(no answer)"}`),"","Session: "+Object.entries(i.session).map(([n,s])=>`${n}=${s}`).join(", "),...i.ledger?["","Choice ledger:",i.ledger,"Ledger JSON: "+(i.ledgerJson??"")]:[]].join(`
`)}function b1(){try{return JSON.parse(localStorage.getItem(Ud)||"[]")}catch{return[]}}function iu(i){const e=b1();e.push(i);try{localStorage.setItem(Ud,JSON.stringify(e))}catch{}return e.length}function M1(i){const e=performance.now();let t=!1;const n=document.createElement("div");n.id="feedback",Object.assign(n.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,.78)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"60"}),document.body.appendChild(n);const s=()=>{const l=i.get();return{minutes:+((performance.now()-e)/6e4).toFixed(1),trips:l.stats.trips,cleanHauls:l.stats.clean,shatters:l.stats.shatters,rareFound:l.stats.rare,scrap:l.scrap,cubeFeeds:l.feeds,logs:l.logsFound.length,upgrades:Object.values(l.up).reduce((c,h)=>c+h,0),window:`${innerWidth}x${innerHeight}`,browser:navigator.userAgent.replace(/\(.*?\)/,"").slice(0,60)}},r=()=>{const l={};return ml.forEach(c=>{var u;const h=n.querySelector(`[data-q="${c.id}"]`);l[c.id]=c.kind==="text"?h.value.trim():((u=n.querySelector(`input[name="${c.id}"]:checked`))==null?void 0:u.value)??""}),l},o=(l="")=>{n.innerHTML=`<div style="width:min(620px,94vw);max-height:92vh;overflow:auto;background:#07100c;border:2px solid #30ff90;color:#cfe;font:14px/1.45 monospace;padding:14px">
      <div style="display:flex;justify-content:space-between"><b>SEND FEEDBACK</b><button id="fb-close">Close (Esc)</button></div>
      <small>Answers stay on this device. Use Copy summary and paste it to whoever sent you the link.</small><hr>
      ${ml.map(u=>`<p><b>${u.label}</b><br>${u.kind==="text"?`<textarea data-q="${u.id}" rows="2" style="width:98%;font:13px monospace"></textarea>`:(u.kind==="scale"?["1","2","3","4","5"]:u.choices).map(f=>`<label style="margin-right:10px"><input type="radio" name="${u.id}" value="${f}" data-q="${u.id}"> ${f}</label>`).join("")}</p>`).join("")}
      <button id="fb-save">Save on this device</button> <button id="fb-copy">Copy summary</button> <span id="fb-msg">${l}</span>
      <textarea id="fb-text" readonly rows="6" style="display:none;width:98%;margin-top:8px;font:12px monospace"></textarea></div>`;const c=u=>n.querySelector(u);c("#fb-close").onclick=()=>a.close();const h=()=>({at:new Date().toISOString().slice(0,16).replace("T"," "),answers:r(),session:s(),ledger:Ld(i.get()),ledgerJson:JSON.stringify(io(i.get()))});c("#fb-save").onclick=()=>{const u=iu(h());c("#fb-msg").textContent=`Saved (${u} on this device).`},c("#fb-copy").onclick=async()=>{const u=h();iu(u);const f=_1(u),p=c("#fb-text");p.value=f;try{await navigator.clipboard.writeText(f),c("#fb-msg").textContent="Copied! Paste it into a message."}catch{p.style.display="block",p.select(),c("#fb-msg").textContent="Could not auto-copy: select the text below and copy it."}}};n.addEventListener("keydown",l=>{l.stopPropagation(),l.code==="Escape"&&a.close()}),n.addEventListener("keyup",l=>l.stopPropagation()),n.addEventListener("mousedown",l=>l.stopPropagation()),n.addEventListener("mouseup",l=>l.stopPropagation());const a={open(){t=!0,o(),n.style.display="flex"},close(){t=!1,n.style.display="none"},isOpen:()=>t};return a}function Lr(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ht;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=su(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let v=0;v<o[h].length;++v)p.push(o[h][v][f]);const g=su(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function su(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Pt(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<t;g++){const v=h.getComponent(f,g);a.setComponent(f+u,g,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const xi=12,Xr=64,Nd=(i,e,t)=>(i*zl+e)*Hl+t,w1=i=>[i%xi/xi,1-(Math.floor(i/xi)+1)/xi];function S1(i){return[[[.5,.38,.2]],[[.34,.38,.15],[.66,.38,.15]],[[.3,.46,.12],[.7,.46,.12],[.5,.24,.12]],[[.3,.4,.14],[.7,.4,.14],[.2,.2,.07],[.5,.17,.07],[.8,.2,.07]]][i]}function T1(i,e,t,n,s,r){const o=Xr;i.save(),i.translate(e,t),i.lineCap="round",i.lineJoin="round";for(const[h,u,f]of S1(s)){const p=h*o,g=u*o,v=f*o;i.fillStyle="#fff",i.strokeStyle="#000",i.lineWidth=3,i.beginPath(),i.arc(p,g,v,0,7),i.fill(),i.stroke();const m=n===5,d=n===4,y=v*(m?.28:d?.62:.45),x=n===1?-v*.15:d?v*.25:0,b=n===3?v*.3:n===1?v*.2:0;i.fillStyle="#000",i.beginPath(),i.arc(p+x,g+b,y,0,7),i.fill(),i.fillStyle="#fff",i.beginPath(),i.arc(p+x-y*.3,g+b-y*.3,y*.28,0,7),i.fill(),i.strokeStyle="#000",i.lineWidth=3.5,i.beginPath(),n===3?(i.fillStyle="#000",i.globalAlpha=.85,i.fillRect(p-v,g-v,v*2,v),i.globalAlpha=1,i.moveTo(p-v,g),i.lineTo(p+v,g)):n===2?(i.moveTo(p-v,g-v*1.1),i.lineTo(p+v,g-v*.4)):n===1?(i.moveTo(p-v,g-v*.4),i.lineTo(p+v,g-v*1.1)):n===0&&i.arc(p,g+v*.2,v*1.05,Math.PI*1.1,Math.PI*1.9),i.stroke()}const a=.5*o,l=.78*o;i.strokeStyle="#000",i.fillStyle="#000",i.lineWidth=4,i.beginPath();const c=n===1||n===5||n===2;if(r===0)i.moveTo(a-12,l),i.lineTo(a+12,l),i.stroke();else if(r===1)i.moveTo(a-14,l),i.bezierCurveTo(a-7,l-8,a-3,l+8,a+2,l),i.bezierCurveTo(a+6,l-6,a+10,l+6,a+14,l),i.stroke();else if(r===2)i.ellipse(a,l,7,c?9:6,0,0,7),i.fill();else if(r===3)i.moveTo(a-15,l-4),i.quadraticCurveTo(a,l+(c?-12:14),a+15,l-4),i.stroke();else if(r===4){i.fillStyle="#fff",i.lineWidth=3,i.rect(a-15,l-6,30,12),i.fill(),i.stroke(),i.beginPath();for(let h=-10;h<=10;h+=5)i.moveTo(a+h,l-6),i.lineTo(a+h,l+6);i.stroke()}i.restore()}function E1(){const i=document.createElement("canvas");i.width=i.height=xi*Xr;const e=i.getContext("2d");for(let n=0;n<qs.length;n++)for(let s=0;s<zl;s++)for(let r=0;r<Hl;r++){const o=Nd(n,s,r);T1(e,o%xi*Xr,Math.floor(o/xi)*Xr,n,s,r)}const t=new Mn(i);return t.colorSpace=Yt,t.minFilter=cn,t}function A1(i){const e=new st(.5,20,14),t=e.attributes.position;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n),o=t.getZ(n);if(i===1){const a=1+(r<0?.25:-.15);s*=a,o*=a,r*=1.1}else if(i===2)s*=1.2,r*=.85;else if(i===3){const a=Math.atan2(o,s),l=1+.14*Math.cos(a*5);s*=l,o*=l}else if(i===4)s=Math.sign(s)*Math.pow(Math.abs(s)/.5,.5)*.5*.85+s*.15,o=Math.sign(o)*Math.pow(Math.abs(o)/.5,.5)*.5*.85+o*.15,r*=.85;else if(i===5){const l=.55+.6*(1-(r+.5));s*=l,o*=l,r*=1.2}t.setXYZ(n,s,r,o)}return e.computeVertexNormals(),e}function C1(i){const e=(n,s=0,r=0,o=0,a=0,l=0,c=0)=>(n.rotateX(a),n.rotateY(l),n.rotateZ(c),n.translate(s,r,o),n.toNonIndexed()),t=(n,s,r=!1)=>Array.from({length:n},(o,a)=>{const l=s+a/n*Math.PI*2,c=.2+.7*((a*.37+s)%1),h=Math.sqrt(1-c*c);return new E(Math.cos(l)*h,r?c*.2:c,Math.sin(l)*h-(r?0:.3)).normalize()});switch(i){case"halo":return e(new Ut(.26,.045,8,22),0,.74,0,Math.PI/2);case"horns":return Lr([e(new dn(.1,.34,8),.2,.55,0,0,0,-.45),e(new dn(.1,.34,8),-.2,.55,0,0,0,.45)]);case"spikes":return Lr(t(7,.4).map(n=>{const s=new dn(.07,.3,6);return s.translate(0,.15,0),s.applyQuaternion(new un().setFromUnitVectors(new E(0,1,0),n)),s.translate(n.x*.46,n.y*.46,n.z*.46),s.toNonIndexed()}));case"glow":return new st(.66,14,10).toNonIndexed();case"fluff":return Lr(t(8,1.1).map(n=>{const s=new st(.13,8,6);return s.translate(n.x*.5,n.y*.5,n.z*.5),s.toNonIndexed()}));case"drip":return e(new dn(.075,.3,8),.08,-.62,.22,Math.PI);case"stripes":return Lr([e(new Ut(.49,.035,6,26),0,-.12,0,Math.PI/2),e(new Ut(.46,.035,6,26),0,.17,0,Math.PI/2)]);case"bellyface":return e(new st(.2,10,8).scale(1.3,.8,.45),0,-.28,.46)}}const R1=`
attribute vec2 cellUv; varying vec2 vUv;
void main() {
  vUv = cellUv + uv / 12.0;
  vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float s = length(instanceMatrix[0].xyz);
  c.xy += position.xy * s * 0.95; c.z += s * 0.55;
  gl_Position = projectionMatrix * c;
}`,P1=`uniform sampler2D atlas; varying vec2 vUv;
void main() { vec4 t = texture2D(atlas, vUv); if (t.a < 0.15) discard; gl_FragColor = t; }`;class ru{constructor(e){V(this,"group",new vt);V(this,"bodies",[]);V(this,"outlines",[]);V(this,"faces");V(this,"cellAttr");V(this,"slotOf",new Map);V(this,"faceIdx",new Map);V(this,"tmp",new Mt);V(this,"radius",.5);V(this,"acc",new Map);this.spores=e;const t=e.length,n=new Array(Qr).fill(0);e.forEach(o=>{const a=o.anatomy.bodyShape;this.slotOf.set(o.id,{shape:a,idx:n[a]++})});for(let o=0;o<Qr;o++){const a=A1(o),l=Math.max(1,n[o]),c=new Dn(a,new Ze({roughness:.55,emissive:2236962}),l),h=new Dn(a,new Ne({color:0,side:bt}),l);c.count=h.count=n[o],c.frustumCulled=h.frustumCulled=!1,this.bodies.push(c),this.outlines.push(h),this.group.add(c,h)}e.forEach(o=>{const{shape:a,idx:l}=this.slotOf.get(o.id);this.bodies[a].setColorAt(l,new Te(o.anatomy.colour))}),this.bodies.forEach(o=>o.instanceColor&&(o.instanceColor.needsUpdate=!0));for(const o of rl){const a=e.filter(p=>p.anatomy.signatureTrait===o);if(!a.length)continue;const l=C1(o),c=new Map,h=o==="glow",u=new Dn(l,h?new Ne({transparent:!0,opacity:.28,blending:Ht,depthWrite:!1}):new Ze({roughness:.5,emissive:o==="halo"?16767072:1118481,emissiveIntensity:o==="halo"?.9:.4}),a.length);u.frustumCulled=!1,a.forEach((p,g)=>{c.set(p.id,g);const v=new Te(p.anatomy.colour),m=p.tone.alignment>0;u.setColorAt(g,o==="halo"?new Te(16769658):o==="horns"?new Te(m?16732208:16051416):o==="spikes"||o==="stripes"?v.clone().offsetHSL(0,0,-.18):o==="drip"?v:v.clone().offsetHSL(0,-.1,.18))});let f;h||(f=new Dn(l,new Ne({color:0,side:bt}),a.length),f.frustumCulled=!1,this.group.add(f)),this.group.add(u),this.acc.set(o,{mesh:u,outline:f,idx:c})}const s=new nn(1,1);this.cellAttr=new tl(new Float32Array(t*2),2),s.setAttribute("cellUv",this.cellAttr);const r=new kt({vertexShader:R1,fragmentShader:P1,uniforms:{atlas:{value:E1()}},transparent:!1});this.faces=new Dn(s,r,t),this.faces.frustumCulled=!1,this.group.add(this.faces),e.forEach((o,a)=>{this.faceIdx.set(o.id,a),this.setFace(o)})}setFace(e){const[t,n]=w1(Nd(e.mood,e.anatomy.eyeSet,e.anatomy.mouthSet)),s=this.faceIdx.get(e.id);this.cellAttr.setXY(s,t,n),this.cellAttr.needsUpdate=!0}place(e,t,n,s=1){const{shape:r,idx:o}=this.slotOf.get(e),a=this.tmp;a.position.copy(t),a.scale.set(n/Math.sqrt(s),n*s,n/Math.sqrt(s)),a.updateMatrix(),this.bodies[r].setMatrixAt(o,a.matrix);{const l=this.acc.get(this.spores[this.faceIdx.get(e)].anatomy.signatureTrait);if(l){const c=l.idx.get(e);if(l.mesh.setMatrixAt(c,a.matrix),l.outline){const h=a.scale.clone();a.scale.multiplyScalar(1.12),a.updateMatrix(),l.outline.setMatrixAt(c,a.matrix),a.scale.copy(h),a.updateMatrix()}}}a.scale.multiplyScalar(1.1+.02*this.spores[this.faceIdx.get(e)].anatomy.outlineWeight),a.updateMatrix(),this.outlines[r].setMatrixAt(o,a.matrix),a.scale.set(n,n,n),a.position.copy(t),a.updateMatrix(),this.faces.setMatrixAt(this.faceIdx.get(e),a.matrix)}commit(){this.bodies.forEach(e=>e.instanceMatrix.needsUpdate=!0),this.outlines.forEach(e=>e.instanceMatrix.needsUpdate=!0),this.faces.instanceMatrix.needsUpdate=!0,this.acc.forEach(e=>{e.mesh.instanceMatrix.needsUpdate=!0,e.outline&&(e.outline.instanceMatrix.needsUpdate=!0)})}drawCalls(){return this.bodies.length+this.outlines.length+1+[...this.acc.values()].reduce((e,t)=>e+(t.outline?2:1),0)}}const I1={glow:"horn",halo:"horn",horns:"horn",spikes:"body",fluff:"body",bellyface:"body",drip:"tail",stripes:"leg"},ou=[{role:"leg",pos:[-.9,.45,-.55]},{role:"leg",pos:[-.9,.45,.55]},{role:"leg",pos:[.9,.45,-.55]},{role:"leg",pos:[.9,.45,.55]},{role:"body",pos:[-.9,1.45,0]},{role:"body",pos:[0,1.45,-.55]},{role:"body",pos:[0,1.45,.55]},{role:"body",pos:[.9,1.45,0]},{role:"body",pos:[0,2.35,0]},{role:"horn",pos:[.9,2.35,-.55]},{role:"horn",pos:[.9,2.35,.55]},{role:"tail",pos:[-1.8,1.45,0]}];function L1(i){if(i<=5){const t=i===1?0:.55+i*.12;return{shape:"Cluster",tpl:Array.from({length:i},(n,s)=>({role:"body",pos:[Math.cos(s/i*Math.PI*2)*t,.5,Math.sin(s/i*Math.PI*2)*t]}))}}if(i<=30){const t=ou.slice(0,i);for(let n=ou.length,s=0;n<i;s++){const r=Math.min(6,i-n);for(let o=0;o<r;o++,n++)t.push({role:"body",pos:[Math.cos(o/r*Math.PI*2)*.95,3.3+s*.9,Math.sin(o/r*Math.PI*2)*.95]})}return{shape:"Body",tpl:t}}const e=Math.max(2,i*1/(Math.PI*2));return{shape:"Colony",tpl:Array.from({length:i},(t,n)=>({role:"body",pos:[Math.cos(n/i*Math.PI*2)*e,.5,Math.sin(n/i*Math.PI*2)*e]}))}}function D1(i){const{shape:e,tpl:t}=L1(i.length),n=[...i],s=[];for(const o of t){const a=n.findIndex(c=>I1[c.anatomy.signatureTrait]===o.role),l=n.splice(a>=0?a:0,1)[0];s.push({sporeId:l.id,role:o.role,pos:o.pos})}const r=i.reduce((o,a)=>o+a.tone.alignment,0)/Math.max(1,i.length);return{shape:e,slots:s,avgAlignment:r}}function k1(i,e,t){const n=i.slots.find(r=>r.sporeId===e),s=i.slots.find(r=>r.sporeId===t);return!n||!s?i:{...i,slots:i.slots.map(r=>r===n?{...r,sporeId:t}:r===s?{...r,sporeId:e}:r)}}const Xi=12;class U1{constructor(e,t,n){V(this,"scene",new bn);V(this,"camera");V(this,"spores",ol(Xi));V(this,"crowd");V(this,"pos",[]);V(this,"vel",[]);V(this,"target",[]);V(this,"creature",null);V(this,"merged",!1);V(this,"mergedAt",0);V(this,"drag",-1);V(this,"dragOffset",new E);V(this,"hover",-1);V(this,"t",0);V(this,"ray",new $s);V(this,"plane",new Kn(new E(0,1,0),-.5));V(this,"label",document.createElement("div"));V(this,"ending",document.createElement("div"));V(this,"swapCount",0);V(this,"onContinue");V(this,"endingShown",!1);V(this,"creatureInfo",{name:"",description:""});this.store=e,this.dom=n,this.camera=t,this.scene.background=new Te(263434),this.scene.fog=new Rl(263434,14,30),this.scene.add(new fs(8949936,1.1));const s=new Jr(16777215,2.2);s.position.set(4,10,6),this.scene.add(s);const r=new ne(new Fn(9,48),new Ze({color:1382948,roughness:1}));r.rotation.x=-Math.PI/2,this.scene.add(r),this.crowd=new ru(this.spores),this.scene.add(this.crowd.group),this.spores.forEach(()=>{this.pos.push(new E),this.vel.push(new E),this.target.push(null)}),Object.assign(this.label.style,{position:"fixed",display:"none",padding:"4px 8px",background:"rgba(0,0,0,.75)",color:"#fff",font:"12px monospace",pointerEvents:"none",zIndex:"6",border:"1px solid #fff"}),this.label.id="sporelabel",this.ending.id="ending",Object.assign(this.ending.style,{position:"fixed",left:"0",right:"0",bottom:"0",padding:"28px 20px",textAlign:"center",background:"linear-gradient(transparent, rgba(0,0,0,.92))",color:"#ffe9c0",font:"17px/1.5 Georgia, serif",display:"none",zIndex:"7"}),document.body.append(this.label,this.ending),n.addEventListener("pointerdown",o=>this.down(o)),addEventListener("pointermove",o=>this.move(o)),addEventListener("pointerup",o=>this.up(o))}enter(){{const e=zn(this.store.get());this.spores=id(ol(Xi),e),this.creatureInfo=ho(e),this.scene.remove(this.crowd.group),this.crowd=new ru(this.spores),this.scene.add(this.crowd.group)}this.merged=!1,this.endingShown=!1,this.creature=null,this.t=0,this.ending.style.display="none",this.camera.position.set(0,9,8.5),this.camera.lookAt(0,.8,0),this.spores.forEach((e,t)=>{this.pos[t].set(0,1+Math.random(),0);const n=t/Xi*Math.PI*2+Math.random()*.3,s=3.5+Math.random()*2;this.vel[t].set(Math.cos(n)*s,4+Math.random()*2,Math.sin(n)*s),this.target[t]=null}),de.burst(),this.store.set({mode:"cameo"})}ndc(e){const t=this.dom.getBoundingClientRect();return new le((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}pick(e){this.ray.setFromCamera(this.ndc(e),this.camera);let t=-1,n=1/0;return this.pos.forEach((s,r)=>{const o=this.ray.ray.intersectSphere(new si(s,.5),new E);if(o){const a=o.distanceTo(this.ray.ray.origin);a<n&&(n=a,t=r)}}),t}onPlane(e){return this.ray.setFromCamera(this.ndc(e),this.camera),this.ray.ray.intersectPlane(this.plane,new E)}down(e){if(this.store.get().mode!=="cameo")return;const t=this.pick(e);if(t<0)return;this.drag=t,this.plane.constant=-(this.merged?this.pos[t].y:1.1);const n=this.onPlane(e);this.dragOffset.copy(this.pos[t]).sub(n??this.pos[t]),this.vel[t].set(0,0,0),this.label.style.display="none"}move(e){if(this.store.get().mode==="cameo"){if(this.drag>=0){const t=this.onPlane(e);if(t){const n=t.add(this.dragOffset);n.y=-this.plane.constant,this.pos[this.drag].copy(n)}return}if(this.hover=this.pick(e),this.hover>=0){const t=this.spores[this.hover];this.label.style.display="block",this.label.style.left=e.clientX+14+"px",this.label.style.top=e.clientY+8+"px",this.label.textContent=`${t.name}: ${qs[t.mood]}, ${nd[t.personality]}, ${t.anatomy.signatureTrait}`}else this.label.style.display="none"}}up(e){if(this.drag<0)return;const t=this.drag;this.drag=-1;let n=-1,s=60;const r=this.screenOf(t);this.pos.forEach((o,a)=>{if(a!==t){const l=this.screenOf(a),c=Math.hypot(l.x-r.x,l.y-r.y);c<s&&(s=c,n=a)}}),this.merged||(this.pos[t].y=.5),!(n<0)&&(this.merged?this.swap(t,n):this.doMerge(t,n))}worldTargets(){this.creature.slots.forEach(e=>{this.target[e.sporeId]=new E(e.pos[0]*1.05,e.pos[1],e.pos[2]*1.05)})}doMerge(e,t){this.spores[e].history.push({type:"merged",otherId:t}),this.spores[t].history.push({type:"merged",otherId:e}),this.creature=D1(this.spores),de.merge(),this.merged=!0,this.mergedAt=this.t,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,mergeSeconds:Math.round(this.t),swaps:this.swapCount}})}swap(e,t){this.creature=k1(this.creature,e,t),this.swapCount++,this.worldTargets(),this.store.set({flags:{...this.store.get().flags,swaps:this.swapCount}})}showEnding(){this.ending.innerHTML=`The box was never a box.<br>Twelve faces, and every one of them is looking at you.<br><br><span id="creature-name">Your creature: <b>${this.creatureInfo.name}</b>.</span> <small>${this.creatureInfo.description}</small><br><br><button id="continue">Continue</button> &nbsp; `,this.ending.style.display="block",document.getElementById("continue").onclick=()=>{this.onContinue&&(this.ending.style.display="none",this.onContinue())}}update(e){if(this.store.get().mode!=="cameo")return;this.t+=e;for(let n=0;n<Xi;n++){const s=this.pos[n],r=this.vel[n],o=this.target[n];if(n!==this.drag)if(o)s.lerp(o,1-Math.exp(-5*e));else{r.y-=14*e,s.addScaledVector(r,e),s.y<.5&&(s.y=.5,r.y*=-.35,r.x*=.82,r.z*=.82,Math.abs(r.y)<.4&&(r.y=0));const a=Math.hypot(s.x,s.z);a>7&&(s.x*=7/a,s.z*=7/a,r.x*=-.5,r.z*=-.5)}}if(!this.merged)for(let n=0;n<Xi;n++)for(let s=n+1;s<Xi;s++){const r=this.pos[n].distanceTo(this.pos[s]);if(r<.9&&r>1e-4&&n!==this.drag&&s!==this.drag){const o=this.pos[n].clone().sub(this.pos[s]).setY(0).normalize().multiplyScalar((.9-r)*.5);this.pos[n].add(o),this.pos[s].sub(o)}}this.spores.forEach((n,s)=>{const r=Math.sin(this.t*Cy(n.mood)*2+s)*.08,o=(this.drag===s,0);this.crowd.place(n.id,this.pos[s].clone().setY(this.pos[s].y+o),.95+(this.hover===s?.08:0),1+r)}),this.crowd.commit(),this.merged&&this.t-this.mergedAt>2.2&&!this.endingShown&&(this.endingShown=!0,this.showEnding());const t=this.merged?new E(0,3.4,8.5):new E(0,9,8.5);this.camera.position.lerp(t,1-Math.exp(-2.5*e)),this.camera.lookAt(0,this.merged?1.5:.8,0)}render(e){e.render(this.scene,this.camera)}screenOf(e){const t=this.pos[e].clone().project(this.camera);return{x:(t.x+1)/2*innerWidth,y:(1-t.y)/2*innerHeight}}}function N1(i,e,t){const n=Math.PI*2;return Math.abs(((i-e)%n+n+Math.PI)%n-Math.PI)<=t/2}const jn={speed:3.2,width:.7,reward:3,penalty:1};class O1{constructor(e,t){V(this,"el",document.createElement("div"));V(this,"canvas",document.createElement("canvas"));V(this,"angle",0);V(this,"target",2);V(this,"speed",jn.speed);V(this,"open",!1);V(this,"raf",0);V(this,"last",0);V(this,"loop",()=>{if(!this.open)return;const e=performance.now();this.angle+=this.speed*((e-this.last)/1e3),this.last=e,this.draw(),this.raf=requestAnimationFrame(this.loop)});this.store=e,this.onDone=t,this.el.id="poplock",Object.assign(this.el.style,{position:"fixed",inset:"0",display:"none",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,.7)",zIndex:"10",flexDirection:"column",color:"#9fb",font:"14px monospace"}),this.canvas.width=this.canvas.height=260,this.canvas.id="poplock-canvas",this.el.append("Crack the crate: stop the pointer in the green zone (Space or click)",this.canvas),document.body.appendChild(this.el),addEventListener("keydown",n=>{this.open&&n.code==="Space"&&(n.preventDefault(),this.press())}),this.canvas.addEventListener("click",()=>this.open&&this.press())}show(){this.store.get().crates<1||(this.target=Math.random()*Math.PI*2,this.angle=this.target+Math.PI,this.open=!0,this.el.style.display="flex",this.last=performance.now(),this.loop())}press(){const e=N1(this.angle,this.target,jn.width),t=this.store.get();this.close(),this.store.set({crates:t.crates-1,scrap:e?t.scrap+jn.reward:Math.max(0,t.scrap-jn.penalty)}),this.onDone(e?`Crate cracked: +${jn.reward} scrap.`:`Slipped. Tool wear: -${jn.penalty} scrap.`)}close(){this.open=!1,this.el.style.display="none",cancelAnimationFrame(this.raf)}draw(){const e=this.canvas.getContext("2d"),t=100,n=130,s=130;e.clearRect(0,0,260,260),e.lineWidth=16,e.strokeStyle="#223",e.beginPath(),e.arc(n,s,t,0,Math.PI*2),e.stroke(),e.strokeStyle="#3f9",e.beginPath(),e.arc(n,s,t,this.target-jn.width/2,this.target+jn.width/2),e.stroke(),e.strokeStyle="#fff",e.lineWidth=4,e.beginPath(),e.moveTo(n,s),e.lineTo(n+Math.cos(this.angle)*(t+10),s+Math.sin(this.angle)*(t+10)),e.stroke()}}const ha=(i,e,t)=>i.set({[e]:i.get()[e]+t}),Od=[{id:"oxygen",name:"Oxygen Cell",cost:3,desc:"+40 oxygen",apply:i=>(ha(i,"oxygen",40),"Oxygen restored.")},{id:"power",name:"Power Cell",cost:4,desc:"+35 power",apply:i=>(ha(i,"power",35),"Element 115 topped up.")},{id:"repair",name:"Repair Patch",cost:3,desc:"+30 hull",apply:i=>(ha(i,"hull",30),"Hull patched.")},{id:"hat",name:"Useless Hat",cost:1,desc:"does nothing, proudly",apply:i=>(i.set({hats:i.get().hats+1}),"You now own a hat. Nothing improved.")}];function F1(i,e){const t=Od.find(n=>n.id===e);return!t||i.get().scrap<t.cost?null:(i.set({scrap:i.get().scrap-t.cost}),t.apply(i))}function B1(i,e){const t=document.createElement("div");t.id="transmog",Object.assign(t.style,{position:"fixed",right:"12px",top:"12px",width:"270px",maxHeight:"calc(100vh - 24px)",overflowY:"auto",padding:"10px",background:"rgba(8,10,16,.85)",border:"1px solid #f0a020",color:"#fc8",font:"13px monospace",display:"none",zIndex:"5"}),document.body.appendChild(t);const n=o=>{document.getElementById("tm-msg").textContent=o??"Not enough scrap."};let s="";const r=()=>{var u,f;const o=i.get();if(t.style.display=o.mode==="rooms"&&o.room==="transmog"?"block":"none",t.style.display==="none"){s="";return}const a=((u=document.getElementById("tm-msg"))==null?void 0:u.textContent)??"Feed it junk. Make things.",l=`<style>#transmog button{display:block;width:100%;text-align:left;margin:3px 0;padding:5px 8px;font:12px/1.3 monospace;color:#fc8;background:#14100a;border:1px solid #6a4a18;cursor:pointer}
#transmog button:hover:not(:disabled){background:#2a1c08;border-color:#f0a020}#transmog button:not(:disabled){border-color:#3fbf7f;color:#cfe}#transmog button:disabled{opacity:.45;cursor:default;color:#a87;border-color:#4a3a20}
#transmog hr{border:0;border-top:1px solid #4a3a20;margin:8px 0}#transmog h5{margin:6px 0 2px;color:#f0a020;letter-spacing:2px;font-size:11px}#tm-msg{color:#ffe9c0;font-style:italic;min-height:2.6em}</style>
<b>TRANSMOGRIFIER</b> &nbsp; scrap: <span id="tm-scrap">${o.scrap}</span><hr>`+Od.map(p=>`<button data-r="${p.id}" ${o.scrap<p.cost?"disabled":""}>${p.name} (${p.cost}) ${p.desc}</button>`).join("")+"<hr><h5>MINING UPGRADES</h5>"+Yl.map(p=>{const g=o.up[p.id],v=Rx(i,p.id);return v===null?`<button disabled>${p.name} T${g}/${p.costs.length} MAX (${p.desc(g)})</button>`:`<button data-u="${p.id}" ${o.scrap<v?"disabled":""}>${p.name} T${g}/${p.costs.length}: ${p.desc(g+1)} (${v})</button>`}).join("")+(fo(o)?`<hr><h5>THE CUBE</h5><button id="tm-feed" ${o.scrap<ni(o.feeds)?"disabled":""}>Offer scrap to the cube (${ni(o.feeds)})</button>${o.scrap>=ni(o.feeds)&&o.feeds<9?'<div id="tm-hungry" style="color:#f9c;margin:2px 0">The cube is hungry. It hums at your pockets.</div>':""}<div style="margin:2px 0 6px;opacity:.8">stage ${ji(o.feeds)} of 3 &middot; fed ${o.feeds}/9</div>`:"")+((f=window.sporeLife)!=null&&f.count("transmog")?`<hr><h5>THE SPORES</h5><button id="tm-sporefeed" ${o.scrap<1?"disabled":""}>Feed the spores a junk find (1)</button>`:"")+`<hr><button id="tm-crate" ${o.crates<1?"disabled":""}>Crack a crate (${o.crates} sealed)</button><hr><div id="tm-msg">${a}</div>`;if(l===s)return;s=l,t.innerHTML=l,t.querySelectorAll("button[data-r]").forEach(p=>p.onclick=()=>{n(F1(i,p.dataset.r)),r()}),t.querySelectorAll("button[data-u]").forEach(p=>p.onclick=()=>{n(Px(i,p.dataset.u)),r()});const c=document.getElementById("tm-feed");c&&(c.onclick=()=>{n(rx(i)),r()}),document.getElementById("tm-crate").onclick=()=>e();const h=document.getElementById("tm-sporefeed");h&&(h.onclick=()=>{n(window.sporeLife.feed()??"Not enough scrap."),r()})};return i.subscribe(r),r(),{say:n,render:r}}const Se=gx(),fn=new Qv({antialias:!0,preserveDrawingBuffer:!0});fn.setPixelRatio(Math.min(devicePixelRatio,2));fn.setSize(innerWidth,innerHeight);document.body.appendChild(fn.domElement);const Zt=new Gt(62,innerWidth/innerHeight,.1,400),z1=96;function Fd(){const i=innerWidth/Math.max(1,innerHeight);Zt.aspect=i,Zt.fov=Math.min(100,Math.max(40,2*Math.atan(Math.tan(z1*Math.PI/360)/i)*180/Math.PI)),Zt.userData.baseFov=Zt.fov,Zt.updateProjectionMatrix()}Fd();const _t=new vx(Se,Zt,fn.domElement,"mining");[Hx(),Vx(Se),Wx(Se),H_()].forEach(i=>_t.add(i));_t.start();const Yr=Qy(Se,_t),Bd=Nx(Se),au=["POWER: yes.","HULL: ok-ish. A sticker says ok.",'ENGINE TEMP: ??? (sticker: "normal")',"RING SPEED: 11 (units unknown)",'LAST SERVICE: "did something to it"','SI STATUS: left. Note: "back soon" (4,017 days ago)',"CO-PILOT HANDSHAKE: waiting... (attempt 9,412)","AUTO-TETHER: [FIELD REMOVED BY CONTRACTOR]","CABIN PRESSURE: set for nobody. Adjusted with a shoe."];let H1=0;_t.onAction=i=>{var e;if(i.startsWith("i:"))return(e=window.inter)==null?void 0:e.run(i.slice(2));i==="collider"&&Yr.herd()||(i==="collider"&&yt("Keep back. The sticker says DANGER. The sticker is in marker."),i==="monitor"&&yt(au[H1++%au.length]),i==="logs"&&Bd.open(),i==="sleep"&&tc.open(),i==="cross"&&G1())};function G1(){const i=performance.now();if(Vy(Vs,i,300).shocked){const e=Se.get();Se.set(Wy(e,ea)),window.hazard.shocks++,de.zap(),V1(),yt(`ZAP. -${ea.hull} hull, -${ea.power} power. Wait for the quiet.`);return}yt("You run across in the quiet. The ring does not notice. This time."),_t.goTo("transmog")}function V1(){window.zapFlashes=(window.zapFlashes||0)+1;const i=document.createElement("div");i.id="zap-flash",Object.assign(i.style,{position:"fixed",inset:"0",background:"#dff",opacity:"0.85",zIndex:"40",pointerEvents:"none",transition:"opacity .5s"}),document.body.appendChild(i),requestAnimationFrame(()=>requestAnimationFrame(()=>i.style.opacity="0")),setTimeout(()=>i.remove(),600)}window.hazard={ENGINE_RING:Vs,isDanger:ps,safeIn:zy,shocks:0};const W1=Ox();for(const i of["pointerdown","keydown"])addEventListener(i,()=>de.unlock(),{once:!1});addEventListener("click",i=>{var e;((e=i.target)==null?void 0:e.tagName)==="BUTTON"&&de.click()});const Fs=U_(fn);window.postfx=Fs;let zd=0;for(const[,i]of _t.rooms)zd+=O_(i.scene);window.hazeCount=zd;window.ambience=F_(Se,i=>{var e;return((e=Yr.count)==null?void 0:e.call(Yr,i))??0});const Hd=Kx(Se,_t,Zt,!new URLSearchParams(location.search).has("nocut")||new URLSearchParams(location.search).get("buddy")==="1");window.buddy=Hd;const Ql=c_(Se,_t,{onFlyExit:()=>{Ft.charging=!1,Ft.locked=null}});window.death=Ql;{const i=new URLSearchParams(location.search);i.has("nocut")&&i.get("death")!=="1"&&(Ql.enabled=!1)}const X1=M_(Se,_t,i=>Ql.die(i));window.inter=X1;let lu=0;setInterval(()=>{const i=Se.get();if(i.mode!=="rooms"||Math.random()>.35)return;const e=Jx(i,lu);e&&(lu++,yt(e))},45e3);let Y1=0,cu="";Se.subscribe(i=>{if(i.room!==cu&&(cu=i.room,i.room==="transmog"&&i.mode==="rooms")){const e=d_(i,Y1++);e&&setTimeout(()=>yt(e),900)}});const ec=zx(Se);window.noticing=B_(Se);z_(Se);G_(Se);const Ws=new U1(Se,Zt,fn.domElement);Se.subscribe(i=>{i.feeds>=9&&!i.cameo&&i.mode==="rooms"&&(Se.set({cameo:!0}),setTimeout(()=>_t.transition(()=>{Ws.enter(),setTimeout(()=>{Se.get().beats.includes("spreading")||(Se.set({beats:[...Se.get().beats,"spreading"]}),ec.say("spreading"))},3500)}),700))});const hu=B1(Se,()=>Gd.show()),Gd=new O1(Se,i=>{hu.say(i),hu.render()}),Ft=new Lx(Se,Zt),$1=new Dx(Se,Ft),Xs=new x1(Se,Zt),po=M1(Se);W1.add("fb-btn","Send feedback",()=>po.open());Xs.onFeedback=()=>po.open();const Ys=new URLSearchParams(location.search),gs=Ys.has("nocut"),q1=V_(Se),tc=g1(Se),Vd=W_(Se);window.cubeChoice=Vd;v1(Se);window.sleepUi=tc;const Wd=y1(Se,ec);window.sorter=q1;window.cubeEvents=Wd;gs&&(Ft.fixedField="quiet",Ft.fatigueEnabled=!1,Wd.enabled=!1,Vd.enabled=!1,Se.set({cubeState:"aboard",cubeLunged:!0,cubeChoice:"kept",beats:[...Se.get().beats,"cubeFound","cubeLunge"]}));Ft.manualSort=!gs;Ys.get("field")&&(Ft.fixedField=Ys.get("field"));_t.onFly=()=>{if(gs||Se.get().beats.includes("launchCut"))return Ft.enter();Se.set({beats:[...Se.get().beats,"launchCut"]}),Xs.play("launch",()=>Ft.enter())};window.LOGBOOKS=Wl;window.intensityOf=Qn;const j1=$_(Se);window.ledger=j1;const K1=X_(Se);window.profileTracker=K1;const Xd=q_(Se);window.atmosphere=Xd;gs&&(Xd.enabled=!1);const js=h1(Se);window.finale=js;const Bs=m1(_t);js.maze=Bs;js.onFeedback=()=>po.open();Ws.onContinue=()=>{if(!(gs&&!Ys.has("finale"))){if(jl(Se.get()))return js.play();Se.set({mode:"rooms"}),_t.jumpTo("bed"),yt(b_,5e3)}};const Yd=()=>{Se.set({mode:"finale"}),Bs.start(()=>{Se.set({mode:"rooms",flags:{...Se.get().flags,mazeDone:!0}}),_t.jumpTo("bed"),yt("You are back in the bunk. The ship is the right size again. Mostly.",4500)})};tc.onMorningClosed=()=>{const i=Se.get();gs&&!Ys.has("finale")||(jl(i)?setTimeout(()=>js.play(),600):__(i)&&setTimeout(Yd,600))};window.arcFlow={walkMaze:Yd,gate:()=>jl(Se.get())};Ft.onReturn=()=>_t.transition(()=>{_t.jumpTo("transmog"),Ft.bankAndLeave()});const Z1="Fatigue: rises while you fly and haul. Ticks: 40 tired (mining window shrinks), 70 exhausted (blur, phantom sounds), 90 breaking (glitches, air drains faster). Sleep in the bunk to reset.",$d=document.getElementById("hud"),ua=(i,e)=>`<div class="m"><span>${i}</span><i style="--c:${e}"><b id="m-${i}"></b></i></div>`;$d.innerHTML=`<div id="room"></div>${ua("power","#f0a020")}${ua("oxygen","#40c0ff")}${ua("hull","#e05050")}<div class="m fat" id="fatigue-row" title="${Z1}"><span>fatigue</span><i style="--c:#c080ff"><b id="m-fatigue"></b><em style="left:40%"></em><em style="left:70%"></em><em style="left:90%"></em></i></div><div id="cargo"></div><div id="hint"></div>`;const vs=document.createElement("button");vs.id="exit-fly";vs.textContent="Return to ship (R)";Object.assign(vs.style,{position:"fixed",top:"12px",right:"12px",display:"none",padding:"8px 12px",font:"13px monospace",background:"#0c1a14",color:"#9fb",border:"1px solid #20e0a0",cursor:"pointer",zIndex:"8"});vs.onclick=()=>Ft.exit();document.body.appendChild(vs);let Dr=Se.get().debt,uu=0;const qd=()=>{vs.style.display=Se.get().mode==="fly"?"block":"none",$d.style.display=Se.get().mode==="fly"||Se.get().mode==="exterior"||Se.get().mode==="finale"?"none":"block";const i=Se.get();["power","oxygen","hull"].forEach(e=>document.getElementById("m-"+e).style.width=i[e]+"%");{const e=document.getElementById("fatigue-row");document.getElementById("m-fatigue").style.width=Math.min(100,i.fatigue)+"%",e.dataset.level=String(ls(i.fatigue))}document.getElementById("room").textContent=i.mode==="cameo"?"SPORES":i.mode==="fly"?"MINING SECTOR":_t.rooms.get(i.room).name.toUpperCase();{const e=document.getElementById("cargo");if(i.debt!==Dr){const t=i.debt>Dr;e.innerHTML=`CARGO ${i.cargo}/${i.cargoCap}   SCRAP ${i.scrap}   DEBT ${i.debt} cr <b style="color:${t?"#ff6060":"#60e080"}">(debt ${t?"+":"-"}${Math.abs(i.debt-Dr)} cr)</b>`,Dr=i.debt,uu=performance.now()+2500}else performance.now()>uu&&(e.textContent=`CARGO ${i.cargo}/${i.cargoCap}   SCRAP ${i.scrap}   DEBT ${i.debt} cr   DAY ${i.day}/7   CONTRACTOR ${i.contractor}`)}document.getElementById("hint").textContent=i.mode==="cameo"?"Drag one spore onto another":i.mode==="fly"?"W/S thrust, A/D turn, arrows pitch, Z/C roll, E/Q up/down, Space mine, R/Esc return":"Click glowing doors, hatches and ladders. The pilot chair is at the Helm (nose)"};Se.subscribe(qd);qd();addEventListener("resize",()=>{fn.setSize(innerWidth,innerHeight),Fs.resize(innerWidth,innerHeight),Fd()});let jd=0,Kd=0;addEventListener("mousemove",i=>{jd=i.clientX/innerWidth-.5,Kd=i.clientY/innerHeight-.5});let kr=0;fn.setAnimationLoop(i=>{const e=Math.min(.1,Math.max(.001,(i-kr)/1e3));if(kr&&Fs.sample(i-kr),kr=i,Se.get().mode==="finale"){Bs.active&&(Bs.update(e),Bs.render(fn));return}if(Se.get().mode==="cameo"){Ws.update(e),Ws.render(fn);return}if(Se.get().mode==="exterior"){Xs.update(e),Xs.render(fn);return}if(Se.get().mode==="fly"){Ft.update(e),$1.update(),Fs.render(Ft.scene,Ft.camera);return}_t.update(i);const t=_t.current.camPos;Zt.position.set(t.x+jd*.15,t.y-Kd*.1,t.z),Zt.lookAt(_t.current.camLook),Hd.update(i,e),Fs.render(_t.current.scene,Zt)});window.rm=_t;window.fly=Ft;window.store=Se;window.lock=Gd;window.cameo=Ws;window.bunk=Bd;window.narrator=ec;window.exterior=Xs;window.feedback=po;
