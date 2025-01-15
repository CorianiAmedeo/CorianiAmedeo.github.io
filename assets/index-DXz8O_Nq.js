(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="172",$c=0,Zo=1,Kc=2,Yl=1,Zc=2,qn=3,fi=0,on=1,jn=2,ci=0,tr=1,Jo=2,Qo=3,el=4,Jc=5,Ai=100,Qc=101,eu=102,tu=103,nu=104,iu=200,ru=201,su=202,au=203,Ta=204,ba=205,ou=206,lu=207,cu=208,uu=209,fu=210,hu=211,du=212,pu=213,mu=214,Aa=0,wa=1,Ra=2,rr=3,Ca=4,Pa=5,La=6,Da=7,ql=0,gu=1,_u=2,ui=0,vu=1,xu=2,Mu=3,yu=4,Su=5,Eu=6,Tu=7,jl=300,sr=301,ar=302,Ua=303,Ia=304,Ps=306,Fa=1e3,Ri=1001,Na=1002,Tn=1003,bu=1004,Jr=1005,Un=1006,js=1007,Ci=1008,Jn=1009,$l=1010,Kl=1011,Cr=1012,po=1013,Li=1014,$n=1015,Pr=1016,mo=1017,go=1018,or=1020,Zl=35902,Jl=1021,Ql=1022,En=1023,ec=1024,tc=1025,nr=1026,lr=1027,nc=1028,_o=1029,ic=1030,vo=1031,xo=1033,Ms=33776,ys=33777,Ss=33778,Es=33779,Oa=35840,Ba=35841,za=35842,Ha=35843,Va=36196,Ga=37492,ka=37496,Wa=37808,Xa=37809,Ya=37810,qa=37811,ja=37812,$a=37813,Ka=37814,Za=37815,Ja=37816,Qa=37817,eo=37818,to=37819,no=37820,io=37821,Ts=36492,ro=36494,so=36495,rc=36283,ao=36284,oo=36285,lo=36286,Au=3200,wu=3201,Ru=0,Cu=1,li="",gn="srgb",cr="srgb-linear",As="linear",Ut="srgb",zi=7680,tl=519,Pu=512,Lu=513,Du=514,sc=515,Uu=516,Iu=517,Fu=518,Nu=519,nl=35044,il="300 es",Kn=2e3,ws=2001;class fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,co=180/Math.PI;function Lr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function Ks(i,e,t){return(1-t)*i+t*e}function Er(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(e=0,t=0){Ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,r,a,l,c,d,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,p)}set(e,t,n,r,a,l,c,d,p){const g=this.elements;return g[0]=e,g[1]=r,g[2]=c,g[3]=t,g[4]=a,g[5]=d,g[6]=n,g[7]=l,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],d=n[6],p=n[1],g=n[4],v=n[7],_=n[2],f=n[5],A=n[8],R=r[0],M=r[3],m=r[6],O=r[1],I=r[4],D=r[7],Y=r[2],F=r[5],B=r[8];return a[0]=l*R+c*O+d*Y,a[3]=l*M+c*I+d*F,a[6]=l*m+c*D+d*B,a[1]=p*R+g*O+v*Y,a[4]=p*M+g*I+v*F,a[7]=p*m+g*D+v*B,a[2]=_*R+f*O+A*Y,a[5]=_*M+f*I+A*F,a[8]=_*m+f*D+A*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],p=e[7],g=e[8];return t*l*g-t*c*p-n*a*g+n*c*d+r*a*p-r*l*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],p=e[7],g=e[8],v=g*l-c*p,_=c*d-g*a,f=p*a-l*d,A=t*v+n*_+r*f;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(r*p-g*n)*R,e[2]=(c*n-r*l)*R,e[3]=_*R,e[4]=(g*t-r*d)*R,e[5]=(r*a-c*t)*R,e[6]=f*R,e[7]=(n*d-p*t)*R,e[8]=(l*t-n*a)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const d=Math.cos(a),p=Math.sin(a);return this.set(n*d,n*p,-n*(d*l+p*c)+l+e,-r*p,r*d,-r*(-p*l+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Zs.makeScale(e,t)),this}rotate(e){return this.premultiply(Zs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zs=new ft;function ac(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bu(){const i=Rs("canvas");return i.style.display="block",i}const rl={};function Qi(i){i in rl||(rl[i]=!0,console.warn(i))}function zu(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Hu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Vu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sl=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),al=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gu(){const i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Ut&&(r.r=Zn(r.r),r.g=Zn(r.g),r.b=Zn(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Ut&&(r.r=ir(r.r),r.g=ir(r.g),r.b=ir(r.b))),r},fromWorkingColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},toWorkingColorSpace:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===li?As:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:e,whitePoint:n,transfer:As,toXYZ:sl,fromXYZ:al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:sl,fromXYZ:al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const Rt=Gu();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hi===void 0&&(Hi=Rs("canvas")),Hi.width=e.width,Hi.height=e.height;const n=Hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Zn(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wu=0;class oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Js(r[l].image)):a.push(Js(r[l]))}else a=Js(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Js(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ku.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class ln extends fr{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=Ri,r=Ri,a=Un,l=Ci,c=En,d=Jn,p=ln.DEFAULT_ANISOTROPY,g=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Lr(),this.name="",this.source=new oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=d,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=jl;ln.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,p=d[0],g=d[4],v=d[8],_=d[1],f=d[5],A=d[9],R=d[2],M=d[6],m=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-R)<.01&&Math.abs(A-M)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+R)<.1&&Math.abs(A+M)<.1&&Math.abs(p+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(p+1)/2,D=(f+1)/2,Y=(m+1)/2,F=(g+_)/4,B=(v+R)/4,j=(A+M)/4;return I>D&&I>Y?I<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(I),r=F/n,a=B/n):D>Y?D<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(D),n=F/r,a=j/r):Y<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(Y),n=B/a,r=j/a),this.set(n,r,a,t),this}let O=Math.sqrt((M-A)*(M-A)+(v-R)*(v-R)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(M-A)/O,this.y=(v-R)/O,this.z=(_-g)/O,this.w=Math.acos((p+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends fr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ln(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Yu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lc extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qu extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let d=n[r+0],p=n[r+1],g=n[r+2],v=n[r+3];const _=a[l+0],f=a[l+1],A=a[l+2],R=a[l+3];if(c===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(c===1){e[t+0]=_,e[t+1]=f,e[t+2]=A,e[t+3]=R;return}if(v!==R||d!==_||p!==f||g!==A){let M=1-c;const m=d*_+p*f+g*A+v*R,O=m>=0?1:-1,I=1-m*m;if(I>Number.EPSILON){const Y=Math.sqrt(I),F=Math.atan2(Y,m*O);M=Math.sin(M*F)/Y,c=Math.sin(c*F)/Y}const D=c*O;if(d=d*M+_*D,p=p*M+f*D,g=g*M+A*D,v=v*M+R*D,M===1-c){const Y=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=Y,p*=Y,g*=Y,v*=Y}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],d=n[r+1],p=n[r+2],g=n[r+3],v=a[l],_=a[l+1],f=a[l+2],A=a[l+3];return e[t]=c*A+g*v+d*f-p*_,e[t+1]=d*A+g*_+p*v-c*f,e[t+2]=p*A+g*f+c*_-d*v,e[t+3]=g*A-c*v-d*_-p*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,d=Math.sin,p=c(n/2),g=c(r/2),v=c(a/2),_=d(n/2),f=d(r/2),A=d(a/2);switch(l){case"XYZ":this._x=_*g*v+p*f*A,this._y=p*f*v-_*g*A,this._z=p*g*A+_*f*v,this._w=p*g*v-_*f*A;break;case"YXZ":this._x=_*g*v+p*f*A,this._y=p*f*v-_*g*A,this._z=p*g*A-_*f*v,this._w=p*g*v+_*f*A;break;case"ZXY":this._x=_*g*v-p*f*A,this._y=p*f*v+_*g*A,this._z=p*g*A+_*f*v,this._w=p*g*v-_*f*A;break;case"ZYX":this._x=_*g*v-p*f*A,this._y=p*f*v+_*g*A,this._z=p*g*A-_*f*v,this._w=p*g*v+_*f*A;break;case"YZX":this._x=_*g*v+p*f*A,this._y=p*f*v+_*g*A,this._z=p*g*A-_*f*v,this._w=p*g*v-_*f*A;break;case"XZY":this._x=_*g*v-p*f*A,this._y=p*f*v-_*g*A,this._z=p*g*A+_*f*v,this._w=p*g*v+_*f*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],d=t[9],p=t[2],g=t[6],v=t[10],_=n+c+v;if(_>0){const f=.5/Math.sqrt(_+1);this._w=.25/f,this._x=(g-d)*f,this._y=(a-p)*f,this._z=(l-r)*f}else if(n>c&&n>v){const f=2*Math.sqrt(1+n-c-v);this._w=(g-d)/f,this._x=.25*f,this._y=(r+l)/f,this._z=(a+p)/f}else if(c>v){const f=2*Math.sqrt(1+c-n-v);this._w=(a-p)/f,this._x=(r+l)/f,this._y=.25*f,this._z=(d+g)/f}else{const f=2*Math.sqrt(1+v-n-c);this._w=(l-r)/f,this._x=(a+p)/f,this._y=(d+g)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,d=t._y,p=t._z,g=t._w;return this._x=n*g+l*c+r*p-a*d,this._y=r*g+l*d+a*c-n*p,this._z=a*g+l*p+n*d-r*c,this._w=l*g-n*c-r*d-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const f=1-t;return this._w=f*l+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,c),v=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=l*v+this._w*_,this._x=n*v+this._x*_,this._y=r*v+this._y*_,this._z=a*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,n=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ol.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,d=e.w,p=2*(l*r-c*n),g=2*(c*t-a*r),v=2*(a*n-l*t);return this.x=t+d*p+l*v-c*g,this.y=n+d*g+c*p-a*v,this.z=r+d*v+a*g-l*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*l-n*d,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new ie,ol=new Dr;class Ur{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,xn):xn.fromBufferAttribute(a,l),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),es.subVectors(this.max,Tr),Vi.subVectors(e.a,Tr),Gi.subVectors(e.b,Tr),ki.subVectors(e.c,Tr),ni.subVectors(Gi,Vi),ii.subVectors(ki,Gi),vi.subVectors(Vi,ki);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!ea(t,Vi,Gi,ki,es)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,Vi,Gi,ki,es))?!1:(ts.crossVectors(ni,ii),t=[ts.x,ts.y,ts.z],ea(t,Vi,Gi,ki,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],xn=new ie,Qr=new Ur,Vi=new ie,Gi=new ie,ki=new ie,ni=new ie,ii=new ie,vi=new ie,Tr=new ie,es=new ie,ts=new ie,xi=new ie;function ea(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){xi.fromArray(i,a);const c=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),d=e.dot(xi),p=t.dot(xi),g=n.dot(xi);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>c)return!1}return!0}const ju=new Ur,br=new ie,ta=new ie;class Mo{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ju.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(br,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(ta)),this.expandByPoint(br.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new ie,na=new ie,ns=new ie,ri=new ie,ia=new ie,is=new ie,ra=new ie;class $u{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){na.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(na);const a=e.distanceTo(t)*.5,l=-this.direction.dot(ns),c=ri.dot(this.direction),d=-ri.dot(ns),p=ri.lengthSq(),g=Math.abs(1-l*l);let v,_,f,A;if(g>0)if(v=l*d-c,_=l*c-d,A=a*g,v>=0)if(_>=-A)if(_<=A){const R=1/g;v*=R,_*=R,f=v*(v+l*_+2*c)+_*(l*v+_+2*d)+p}else _=a,v=Math.max(0,-(l*_+c)),f=-v*v+_*(_+2*d)+p;else _=-a,v=Math.max(0,-(l*_+c)),f=-v*v+_*(_+2*d)+p;else _<=-A?(v=Math.max(0,-(-l*a+c)),_=v>0?-a:Math.min(Math.max(-a,-d),a),f=-v*v+_*(_+2*d)+p):_<=A?(v=0,_=Math.min(Math.max(-a,-d),a),f=_*(_+2*d)+p):(v=Math.max(0,-(l*a+c)),_=v>0?a:Math.min(Math.max(-a,-d),a),f=-v*v+_*(_+2*d)+p);else _=l>0?-a:a,v=Math.max(0,-(l*_+c)),f=-v*v+_*(_+2*d)+p;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(na).addScaledVector(ns,_),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,d=n+l;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(n=(e.min.x-_.x)*p,r=(e.max.x-_.x)*p):(n=(e.max.x-_.x)*p,r=(e.min.x-_.x)*p),g>=0?(a=(e.min.y-_.y)*g,l=(e.max.y-_.y)*g):(a=(e.max.y-_.y)*g,l=(e.min.y-_.y)*g),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),v>=0?(c=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(c=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,a){ia.subVectors(t,e),is.subVectors(n,e),ra.crossVectors(ia,is);let l=this.direction.dot(ra),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;ri.subVectors(this.origin,e);const d=c*this.direction.dot(is.crossVectors(ri,is));if(d<0)return null;const p=c*this.direction.dot(ia.cross(ri));if(p<0||d+p>l)return null;const g=-c*ri.dot(ra);return g<0?null:this.at(g/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,n,r,a,l,c,d,p,g,v,_,f,A,R,M){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,d,p,g,v,_,f,A,R,M)}set(e,t,n,r,a,l,c,d,p,g,v,_,f,A,R,M){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=c,m[13]=d,m[2]=p,m[6]=g,m[10]=v,m[14]=_,m[3]=f,m[7]=A,m[11]=R,m[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Wi.setFromMatrixColumn(e,0).length(),a=1/Wi.setFromMatrixColumn(e,1).length(),l=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),d=Math.cos(r),p=Math.sin(r),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const _=l*g,f=l*v,A=c*g,R=c*v;t[0]=d*g,t[4]=-d*v,t[8]=p,t[1]=f+A*p,t[5]=_-R*p,t[9]=-c*d,t[2]=R-_*p,t[6]=A+f*p,t[10]=l*d}else if(e.order==="YXZ"){const _=d*g,f=d*v,A=p*g,R=p*v;t[0]=_+R*c,t[4]=A*c-f,t[8]=l*p,t[1]=l*v,t[5]=l*g,t[9]=-c,t[2]=f*c-A,t[6]=R+_*c,t[10]=l*d}else if(e.order==="ZXY"){const _=d*g,f=d*v,A=p*g,R=p*v;t[0]=_-R*c,t[4]=-l*v,t[8]=A+f*c,t[1]=f+A*c,t[5]=l*g,t[9]=R-_*c,t[2]=-l*p,t[6]=c,t[10]=l*d}else if(e.order==="ZYX"){const _=l*g,f=l*v,A=c*g,R=c*v;t[0]=d*g,t[4]=A*p-f,t[8]=_*p+R,t[1]=d*v,t[5]=R*p+_,t[9]=f*p-A,t[2]=-p,t[6]=c*d,t[10]=l*d}else if(e.order==="YZX"){const _=l*d,f=l*p,A=c*d,R=c*p;t[0]=d*g,t[4]=R-_*v,t[8]=A*v+f,t[1]=v,t[5]=l*g,t[9]=-c*g,t[2]=-p*g,t[6]=f*v+A,t[10]=_-R*v}else if(e.order==="XZY"){const _=l*d,f=l*p,A=c*d,R=c*p;t[0]=d*g,t[4]=-v,t[8]=p*g,t[1]=_*v+R,t[5]=l*g,t[9]=f*v-A,t[2]=A*v-f,t[6]=c*g,t[10]=R*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ku,e,Zu)}lookAt(e,t,n){const r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),si.crossVectors(n,fn),si.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),si.crossVectors(n,fn)),si.normalize(),rs.crossVectors(fn,si),r[0]=si.x,r[4]=rs.x,r[8]=fn.x,r[1]=si.y,r[5]=rs.y,r[9]=fn.y,r[2]=si.z,r[6]=rs.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],d=n[8],p=n[12],g=n[1],v=n[5],_=n[9],f=n[13],A=n[2],R=n[6],M=n[10],m=n[14],O=n[3],I=n[7],D=n[11],Y=n[15],F=r[0],B=r[4],j=r[8],P=r[12],w=r[1],H=r[5],te=r[9],Q=r[13],ue=r[2],de=r[6],ce=r[10],oe=r[14],se=r[3],xe=r[7],_e=r[11],Fe=r[15];return a[0]=l*F+c*w+d*ue+p*se,a[4]=l*B+c*H+d*de+p*xe,a[8]=l*j+c*te+d*ce+p*_e,a[12]=l*P+c*Q+d*oe+p*Fe,a[1]=g*F+v*w+_*ue+f*se,a[5]=g*B+v*H+_*de+f*xe,a[9]=g*j+v*te+_*ce+f*_e,a[13]=g*P+v*Q+_*oe+f*Fe,a[2]=A*F+R*w+M*ue+m*se,a[6]=A*B+R*H+M*de+m*xe,a[10]=A*j+R*te+M*ce+m*_e,a[14]=A*P+R*Q+M*oe+m*Fe,a[3]=O*F+I*w+D*ue+Y*se,a[7]=O*B+I*H+D*de+Y*xe,a[11]=O*j+I*te+D*ce+Y*_e,a[15]=O*P+I*Q+D*oe+Y*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],d=e[9],p=e[13],g=e[2],v=e[6],_=e[10],f=e[14],A=e[3],R=e[7],M=e[11],m=e[15];return A*(+a*d*v-r*p*v-a*c*_+n*p*_+r*c*f-n*d*f)+R*(+t*d*f-t*p*_+a*l*_-r*l*f+r*p*g-a*d*g)+M*(+t*p*v-t*c*f-a*l*v+n*l*f+a*c*g-n*p*g)+m*(-r*c*g-t*d*v+t*c*_+r*l*v-n*l*_+n*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],d=e[6],p=e[7],g=e[8],v=e[9],_=e[10],f=e[11],A=e[12],R=e[13],M=e[14],m=e[15],O=v*M*p-R*_*p+R*d*f-c*M*f-v*d*m+c*_*m,I=A*_*p-g*M*p-A*d*f+l*M*f+g*d*m-l*_*m,D=g*R*p-A*v*p+A*c*f-l*R*f-g*c*m+l*v*m,Y=A*v*d-g*R*d-A*c*_+l*R*_+g*c*M-l*v*M,F=t*O+n*I+r*D+a*Y;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/F;return e[0]=O*B,e[1]=(R*_*a-v*M*a-R*r*f+n*M*f+v*r*m-n*_*m)*B,e[2]=(c*M*a-R*d*a+R*r*p-n*M*p-c*r*m+n*d*m)*B,e[3]=(v*d*a-c*_*a-v*r*p+n*_*p+c*r*f-n*d*f)*B,e[4]=I*B,e[5]=(g*M*a-A*_*a+A*r*f-t*M*f-g*r*m+t*_*m)*B,e[6]=(A*d*a-l*M*a-A*r*p+t*M*p+l*r*m-t*d*m)*B,e[7]=(l*_*a-g*d*a+g*r*p-t*_*p-l*r*f+t*d*f)*B,e[8]=D*B,e[9]=(A*v*a-g*R*a-A*n*f+t*R*f+g*n*m-t*v*m)*B,e[10]=(l*R*a-A*c*a+A*n*p-t*R*p-l*n*m+t*c*m)*B,e[11]=(g*c*a-l*v*a-g*n*p+t*v*p+l*n*f-t*c*f)*B,e[12]=Y*B,e[13]=(g*R*r-A*v*r+A*n*_-t*R*_-g*n*M+t*v*M)*B,e[14]=(A*c*r-l*R*r-A*n*d+t*R*d+l*n*M-t*c*M)*B,e[15]=(l*v*r-g*c*r+g*n*d-t*v*d-l*n*_+t*c*_)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,d=e.z,p=a*l,g=a*c;return this.set(p*l+n,p*c-r*d,p*d+r*c,0,p*c+r*d,g*c+n,g*d-r*l,0,p*d-r*c,g*d+r*l,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,d=t._w,p=a+a,g=l+l,v=c+c,_=a*p,f=a*g,A=a*v,R=l*g,M=l*v,m=c*v,O=d*p,I=d*g,D=d*v,Y=n.x,F=n.y,B=n.z;return r[0]=(1-(R+m))*Y,r[1]=(f+D)*Y,r[2]=(A-I)*Y,r[3]=0,r[4]=(f-D)*F,r[5]=(1-(_+m))*F,r[6]=(M+O)*F,r[7]=0,r[8]=(A+I)*B,r[9]=(M-O)*B,r[10]=(1-(_+R))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Wi.set(r[0],r[1],r[2]).length();const l=Wi.set(r[4],r[5],r[6]).length(),c=Wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const p=1/a,g=1/l,v=1/c;return Mn.elements[0]*=p,Mn.elements[1]*=p,Mn.elements[2]*=p,Mn.elements[4]*=g,Mn.elements[5]*=g,Mn.elements[6]*=g,Mn.elements[8]*=v,Mn.elements[9]*=v,Mn.elements[10]*=v,t.setFromRotationMatrix(Mn),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,l,c=Kn){const d=this.elements,p=2*a/(t-e),g=2*a/(n-r),v=(t+e)/(t-e),_=(n+r)/(n-r);let f,A;if(c===Kn)f=-(l+a)/(l-a),A=-2*l*a/(l-a);else if(c===ws)f=-l/(l-a),A=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=p,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=f,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=Kn){const d=this.elements,p=1/(t-e),g=1/(n-r),v=1/(l-a),_=(t+e)*p,f=(n+r)*g;let A,R;if(c===Kn)A=(l+a)*v,R=-2*v;else if(c===ws)A=a*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-f,d[2]=0,d[6]=0,d[10]=R,d[14]=-A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Wi=new ie,Mn=new Gt,Ku=new ie(0,0,0),Zu=new ie(1,1,1),si=new ie,rs=new ie,fn=new ie,ll=new Gt,cl=new Dr;class Qn{constructor(e=0,t=0,n=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],d=r[1],p=r[5],g=r[9],v=r[2],_=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,f),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,f),this._z=Math.atan2(-l,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,f),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,p));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-g,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ju=0;const ul=new ie,Xi=new Dr,Wn=new Gt,ss=new ie,Ar=new ie,Qu=new ie,ef=new Dr,fl=new ie(1,0,0),hl=new ie(0,1,0),dl=new ie(0,0,1),pl={type:"added"},tf={type:"removed"},Yi={type:"childadded",child:null},sa={type:"childremoved",child:null};class dn extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new ie,t=new Qn,n=new Dr,r=new ie(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ss.copy(e):ss.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ar,ss,this.up):Wn.lookAt(ss,Ar,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,p=this.material.length;d<p;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=l(e.geometries),d=l(e.materials),p=l(e.textures),g=l(e.images),v=l(e.shapes),_=l(e.skeletons),f=l(e.animations),A=l(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),p.length>0&&(n.textures=p),g.length>0&&(n.images=g),v.length>0&&(n.shapes=v),_.length>0&&(n.skeletons=_),f.length>0&&(n.animations=f),A.length>0&&(n.nodes=A)}return n.object=r,n;function l(c){const d=[];for(const p in c){const g=c[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dn.DEFAULT_UP=new ie(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new ie,Xn=new ie,aa=new ie,Yn=new ie,qi=new ie,ji=new ie,ml=new ie,oa=new ie,la=new ie,ca=new ie,ua=new Ht,fa=new Ht,ha=new Ht;class Sn{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),yn.subVectors(e,t),r.cross(yn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){yn.subVectors(r,t),Xn.subVectors(n,t),aa.subVectors(e,t);const l=yn.dot(yn),c=yn.dot(Xn),d=yn.dot(aa),p=Xn.dot(Xn),g=Xn.dot(aa),v=l*p-c*c;if(v===0)return a.set(0,0,0),null;const _=1/v,f=(p*d-c*g)*_,A=(l*g-c*d)*_;return a.set(1-f-A,A,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,r,a,l,c,d){return this.getBarycoord(e,t,n,r,Yn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Yn.x),d.addScaledVector(l,Yn.y),d.addScaledVector(c,Yn.z),d)}static getInterpolatedAttribute(e,t,n,r,a,l){return ua.setScalar(0),fa.setScalar(0),ha.setScalar(0),ua.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,n),ha.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(ua,a.x),l.addScaledVector(fa,a.y),l.addScaledVector(ha,a.z),l}static isFrontFacing(e,t,n,r){return yn.subVectors(n,t),Xn.subVectors(e,t),yn.cross(Xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),yn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;qi.subVectors(r,n),ji.subVectors(a,n),oa.subVectors(e,n);const d=qi.dot(oa),p=ji.dot(oa);if(d<=0&&p<=0)return t.copy(n);la.subVectors(e,r);const g=qi.dot(la),v=ji.dot(la);if(g>=0&&v<=g)return t.copy(r);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0)return l=d/(d-g),t.copy(n).addScaledVector(qi,l);ca.subVectors(e,a);const f=qi.dot(ca),A=ji.dot(ca);if(A>=0&&f<=A)return t.copy(a);const R=f*p-d*A;if(R<=0&&p>=0&&A<=0)return c=p/(p-A),t.copy(n).addScaledVector(ji,c);const M=g*A-f*v;if(M<=0&&v-g>=0&&f-A>=0)return ml.subVectors(a,r),c=(v-g)/(v-g+(f-A)),t.copy(r).addScaledVector(ml,c);const m=1/(M+R+_);return l=R*m,c=_*m,t.copy(n).addScaledVector(qi,l).addScaledVector(ji,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},as={h:0,s:0,l:0};function da(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class It{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=Ou(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=da(l,a,e+1/3),this.g=da(l,a,e),this.b=da(l,a,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=gn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Rt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Mt(Qt.r*255,0,255))*65536+Math.round(Mt(Qt.g*255,0,255))*256+Math.round(Mt(Qt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,a=Qt.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let d,p;const g=(c+l)/2;if(c===l)d=0,p=0;else{const v=l-c;switch(p=g<=.5?v/(l+c):v/(2-l-c),l){case n:d=(r-a)/v+(r<a?6:0);break;case r:d=(a-n)/v+2;break;case a:d=(n-r)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=gn){Rt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(as);const n=Ks(ai.h,as.h,t),r=Ks(ai.s,as.s,t),a=Ks(ai.l,as.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new It;It.NAMES=uc;let nf=0;class Ls extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=tr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=ba,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yo extends Ls{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ie,os=new Ft;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),a=an(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nl&&(e.usage=this.usage),e}}class fc extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hc extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pi extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rf=0;const mn=new Gt,pa=new dn,$i=new ie,hn=new Ur,wr=new Ur,$t=new ie;class Ui extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ac(e)?hc:fc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ft().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Pi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];hn.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];wr.setFromBufferAttribute(c),this.morphTargetsRelative?($t.addVectors(hn.min,wr.min),hn.expandByPoint($t),$t.addVectors(hn.max,wr.max),hn.expandByPoint($t)):(hn.expandByPoint(wr.min),hn.expandByPoint(wr.max))}hn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)$t.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared($t));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],d=this.morphTargetsRelative;for(let p=0,g=c.count;p<g;p++)$t.fromBufferAttribute(c,p),d&&($i.fromBufferAttribute(e,p),$t.add($i)),r=Math.max(r,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),c=[],d=[];for(let j=0;j<n.count;j++)c[j]=new ie,d[j]=new ie;const p=new ie,g=new ie,v=new ie,_=new Ft,f=new Ft,A=new Ft,R=new ie,M=new ie;function m(j,P,w){p.fromBufferAttribute(n,j),g.fromBufferAttribute(n,P),v.fromBufferAttribute(n,w),_.fromBufferAttribute(a,j),f.fromBufferAttribute(a,P),A.fromBufferAttribute(a,w),g.sub(p),v.sub(p),f.sub(_),A.sub(_);const H=1/(f.x*A.y-A.x*f.y);isFinite(H)&&(R.copy(g).multiplyScalar(A.y).addScaledVector(v,-f.y).multiplyScalar(H),M.copy(v).multiplyScalar(f.x).addScaledVector(g,-A.x).multiplyScalar(H),c[j].add(R),c[P].add(R),c[w].add(R),d[j].add(M),d[P].add(M),d[w].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let j=0,P=O.length;j<P;++j){const w=O[j],H=w.start,te=w.count;for(let Q=H,ue=H+te;Q<ue;Q+=3)m(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const I=new ie,D=new ie,Y=new ie,F=new ie;function B(j){Y.fromBufferAttribute(r,j),F.copy(Y);const P=c[j];I.copy(P),I.sub(Y.multiplyScalar(Y.dot(P))).normalize(),D.crossVectors(F,P);const H=D.dot(d[j])<0?-1:1;l.setXYZW(j,I.x,I.y,I.z,H)}for(let j=0,P=O.length;j<P;++j){const w=O[j],H=w.start,te=w.count;for(let Q=H,ue=H+te;Q<ue;Q+=3)B(e.getX(Q+0)),B(e.getX(Q+1)),B(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,f=n.count;_<f;_++)n.setXYZ(_,0,0,0);const r=new ie,a=new ie,l=new ie,c=new ie,d=new ie,p=new ie,g=new ie,v=new ie;if(e)for(let _=0,f=e.count;_<f;_+=3){const A=e.getX(_+0),R=e.getX(_+1),M=e.getX(_+2);r.fromBufferAttribute(t,A),a.fromBufferAttribute(t,R),l.fromBufferAttribute(t,M),g.subVectors(l,a),v.subVectors(r,a),g.cross(v),c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,R),p.fromBufferAttribute(n,M),c.add(g),d.add(g),p.add(g),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(R,d.x,d.y,d.z),n.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,f=t.count;_<f;_+=3)r.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),l.fromBufferAttribute(t,_+2),g.subVectors(l,a),v.subVectors(r,a),g.cross(v),n.setXYZ(_+0,g.x,g.y,g.z),n.setXYZ(_+1,g.x,g.y,g.z),n.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(c,d){const p=c.array,g=c.itemSize,v=c.normalized,_=new p.constructor(d.length*g);let f=0,A=0;for(let R=0,M=d.length;R<M;R++){c.isInterleavedBufferAttribute?f=d[R]*c.data.stride+c.offset:f=d[R]*g;for(let m=0;m<g;m++)_[A++]=p[f++]}return new Fn(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ui,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],p=e(d,n);t.setAttribute(c,p)}const a=this.morphAttributes;for(const c in a){const d=[],p=a[c];for(let g=0,v=p.length;g<v;g++){const _=p[g],f=e(_,n);d.push(f)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,d=l.length;c<d;c++){const p=l[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const p=n[d];e.data.attributes[d]=p.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const f=p[v];g.push(f.toJSON(e.data))}g.length>0&&(r[d]=g,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],v=a[p];for(let _=0,f=v.length;_<f;_++)g.push(v[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let p=0,g=l.length;p<g;p++){const v=l[p];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new Gt,Mi=new $u,ls=new Mo,_l=new ie,cs=new ie,us=new ie,fs=new ie,ma=new ie,hs=new ie,vl=new ie,ds=new ie;class In extends dn{constructor(e=new Ui,t=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){hs.set(0,0,0);for(let d=0,p=a.length;d<p;d++){const g=c[d],v=a[d];g!==0&&(ma.fromBufferAttribute(v,e),l?hs.addScaledVector(ma,g):hs.addScaledVector(ma.sub(t),g))}t.add(hs)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(a),Mi.copy(e.ray).recast(e.near),!(ls.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(ls,_l)===null||Mi.origin.distanceToSquared(_l)>(e.far-e.near)**2))&&(gl.copy(a).invert(),Mi.copy(e.ray).applyMatrix4(gl),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,d=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,_=a.groups,f=a.drawRange;if(c!==null)if(Array.isArray(l))for(let A=0,R=_.length;A<R;A++){const M=_[A],m=l[M.materialIndex],O=Math.max(M.start,f.start),I=Math.min(c.count,Math.min(M.start+M.count,f.start+f.count));for(let D=O,Y=I;D<Y;D+=3){const F=c.getX(D),B=c.getX(D+1),j=c.getX(D+2);r=ps(this,m,e,n,p,g,v,F,B,j),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{const A=Math.max(0,f.start),R=Math.min(c.count,f.start+f.count);for(let M=A,m=R;M<m;M+=3){const O=c.getX(M),I=c.getX(M+1),D=c.getX(M+2);r=ps(this,l,e,n,p,g,v,O,I,D),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(l))for(let A=0,R=_.length;A<R;A++){const M=_[A],m=l[M.materialIndex],O=Math.max(M.start,f.start),I=Math.min(d.count,Math.min(M.start+M.count,f.start+f.count));for(let D=O,Y=I;D<Y;D+=3){const F=D,B=D+1,j=D+2;r=ps(this,m,e,n,p,g,v,F,B,j),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{const A=Math.max(0,f.start),R=Math.min(d.count,f.start+f.count);for(let M=A,m=R;M<m;M+=3){const O=M,I=M+1,D=M+2;r=ps(this,l,e,n,p,g,v,O,I,D),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}}}function sf(i,e,t,n,r,a,l,c){let d;if(e.side===on?d=n.intersectTriangle(l,a,r,!0,c):d=n.intersectTriangle(r,a,l,e.side===fi,c),d===null)return null;ds.copy(c),ds.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(ds);return p<t.near||p>t.far?null:{distance:p,point:ds.clone(),object:i}}function ps(i,e,t,n,r,a,l,c,d,p){i.getVertexPosition(c,cs),i.getVertexPosition(d,us),i.getVertexPosition(p,fs);const g=sf(i,e,t,n,cs,us,fs,vl);if(g){const v=new ie;Sn.getBarycoord(vl,cs,us,fs,v),r&&(g.uv=Sn.getInterpolatedAttribute(r,c,d,p,v,new Ft)),a&&(g.uv1=Sn.getInterpolatedAttribute(a,c,d,p,v,new Ft)),l&&(g.normal=Sn.getInterpolatedAttribute(l,c,d,p,v,new ie),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const _={a:c,b:d,c:p,normal:new ie,materialIndex:0};Sn.getNormal(cs,us,fs,_.normal),g.face=_,g.barycoord=v}return g}class hr extends Ui{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const d=[],p=[],g=[],v=[];let _=0,f=0;A("z","y","x",-1,-1,n,t,e,l,a,0),A("z","y","x",1,-1,n,t,-e,l,a,1),A("x","z","y",1,1,e,n,t,r,l,2),A("x","z","y",1,-1,e,n,-t,r,l,3),A("x","y","z",1,-1,e,t,n,r,a,4),A("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new Pi(p,3)),this.setAttribute("normal",new Pi(g,3)),this.setAttribute("uv",new Pi(v,2));function A(R,M,m,O,I,D,Y,F,B,j,P){const w=D/B,H=Y/j,te=D/2,Q=Y/2,ue=F/2,de=B+1,ce=j+1;let oe=0,se=0;const xe=new ie;for(let _e=0;_e<ce;_e++){const Fe=_e*H-Q;for(let nt=0;nt<de;nt++){const We=nt*w-te;xe[R]=We*O,xe[M]=Fe*I,xe[m]=ue,p.push(xe.x,xe.y,xe.z),xe[R]=0,xe[M]=0,xe[m]=F>0?1:-1,g.push(xe.x,xe.y,xe.z),v.push(nt/B),v.push(1-_e/j),oe+=1}}for(let _e=0;_e<j;_e++)for(let Fe=0;Fe<B;Fe++){const nt=_+Fe+de*_e,We=_+Fe+de*(_e+1),ee=_+(Fe+1)+de*(_e+1),E=_+(Fe+1)+de*_e;d.push(nt,We,E),d.push(We,ee,E),se+=6}c.addGroup(f,se,P),f+=se,_+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ur(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function nn(i){const e={};for(let t=0;t<i.length;t++){const n=ur(i[t]);for(const r in n)e[r]=n[r]}return e}function af(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function dc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const of={clone:ur,merge:nn};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ls{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ur(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pc extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new ie,xl=new Ft,Ml=new Ft;class _n extends pc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,xl,Ml),t.subVectors(Ml,xl)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,p=l.fullHeight;a+=l.offsetX*r/d,t-=l.offsetY*n/p,r*=l.width/d,n*=l.height/p}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Zi=1;class uf extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Ki,Zi,e,t);r.layers=this.layers,this.add(r);const a=new _n(Ki,Zi,e,t);a.layers=this.layers,this.add(a);const l=new _n(Ki,Zi,e,t);l.layers=this.layers,this.add(l);const c=new _n(Ki,Zi,e,t);c.layers=this.layers,this.add(c);const d=new _n(Ki,Zi,e,t);d.layers=this.layers,this.add(d);const p=new _n(Ki,Zi,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,d]=t;for(const p of t)this.remove(p);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,d,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,p),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,r),e.render(t,g),e.setRenderTarget(v,_,f),e.xr.enabled=A,n.texture.needsPMREMUpdate=!0}}class mc extends ln{constructor(e,t,n,r,a,l,c,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,r,a,l,c,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ff extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new mc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hr(5,5,5),a=new hi({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ci});a.uniforms.tEquirect.value=t;const l=new In(r,a),c=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Un),new uf(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}class hf extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ga=new ie,df=new ie,pf=new ft;class Ti{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ga.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pf.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Mo,ms=new ie;class gc{constructor(e=new Ti,t=new Ti,n=new Ti,r=new Ti,a=new Ti,l=new Ti){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],d=r[3],p=r[4],g=r[5],v=r[6],_=r[7],f=r[8],A=r[9],R=r[10],M=r[11],m=r[12],O=r[13],I=r[14],D=r[15];if(n[0].setComponents(d-a,_-p,M-f,D-m).normalize(),n[1].setComponents(d+a,_+p,M+f,D+m).normalize(),n[2].setComponents(d+l,_+g,M+A,D+O).normalize(),n[3].setComponents(d-l,_-g,M-A,D-O).normalize(),n[4].setComponents(d-c,_-v,M-R,D-I).normalize(),t===Kn)n[5].setComponents(d+c,_+v,M+R,D+I).normalize();else if(t===ws)n[5].setComponents(c,v,R,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ms.x=r.normal.x>0?e.max.x:e.min.x,ms.y=r.normal.y>0?e.max.y:e.min.y,ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gs extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class _c extends ln{constructor(e,t,n,r,a,l,c,d,p,g=nr){if(g!==nr&&g!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===nr&&(n=Li),n===void 0&&g===lr&&(n=or),super(null,r,a,l,c,d,g,n,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Tn,this.minFilter=d!==void 0?d:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ds extends Ui{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),d=Math.floor(r),p=c+1,g=d+1,v=e/c,_=t/d,f=[],A=[],R=[],M=[];for(let m=0;m<g;m++){const O=m*_-l;for(let I=0;I<p;I++){const D=I*v-a;A.push(D,-O,0),R.push(0,0,1),M.push(I/c),M.push(1-m/d)}}for(let m=0;m<d;m++)for(let O=0;O<c;O++){const I=O+p*m,D=O+p*(m+1),Y=O+1+p*(m+1),F=O+1+p*m;f.push(I,D,F),f.push(D,Y,F)}this.setIndex(f),this.setAttribute("position",new Pi(A,3)),this.setAttribute("normal",new Pi(R,3)),this.setAttribute("uv",new Pi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class mf extends Ls{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gf extends Ls{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _f extends pc{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,l=a+p*this.view.width,c-=g*this.view.offsetY,d=c-g*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vf extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function yl(i,e,t,n){const r=xf(n);switch(t){case Jl:return i*e;case ec:return i*e;case tc:return i*e*2;case nc:return i*e/r.components*r.byteLength;case _o:return i*e/r.components*r.byteLength;case ic:return i*e*2/r.components*r.byteLength;case vo:return i*e*2/r.components*r.byteLength;case Ql:return i*e*3/r.components*r.byteLength;case En:return i*e*4/r.components*r.byteLength;case xo:return i*e*4/r.components*r.byteLength;case Ms:case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(e,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(e,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ts:case ro:case so:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rc:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oo:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xf(i){switch(i){case Jn:case $l:return{byteLength:1,components:1};case Cr:case Kl:case Pr:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Li:case po:case $n:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vc(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Mf(i){const e=new WeakMap;function t(c,d){const p=c.array,g=c.usage,v=p.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,p,g),c.onUploadCallback();let f;if(p instanceof Float32Array)f=i.FLOAT;else if(p instanceof Uint16Array)c.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)f=i.SHORT;else if(p instanceof Uint32Array)f=i.UNSIGNED_INT;else if(p instanceof Int32Array)f=i.INT;else if(p instanceof Int8Array)f=i.BYTE;else if(p instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:f,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,d,p){const g=d.array,v=d.updateRanges;if(i.bindBuffer(p,c),v.length===0)i.bufferSubData(p,0,g);else{v.sort((f,A)=>f.start-A.start);let _=0;for(let f=1;f<v.length;f++){const A=v[_],R=v[f];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++_,v[_]=R)}v.length=_+1;for(let f=0,A=v.length;f<A;f++){const R=v[f];i.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function l(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const g=e.get(c);(!g||g.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const p=e.get(c);if(p===void 0)e.set(c,t(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(p.buffer,c,d),p.version=c.version}}return{get:r,remove:a,update:l}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,If=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,th=`#ifdef USE_ENVMAP
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
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ah=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lh=`#ifdef USE_GRADIENTMAP
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
}`,ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hh=`uniform bool receiveShadow;
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
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vh=`PhysicalMaterial material;
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
#endif`,xh=`struct PhysicalMaterial {
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
}`,Mh=`
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
#endif`,yh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Th=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ah=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ph=`#if defined( USE_POINTS_UV )
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
#endif`,Lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ih=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nh=`#ifdef USE_MORPHTARGETS
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
#endif`,Oh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kh=`#ifdef USE_NORMALMAP
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
#endif`,Wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$h=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,id=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sd=`float getShadowMask() {
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
}`,ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,od=`#ifdef USE_SKINNING
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
#endif`,ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cd=`#ifdef USE_SKINNING
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
#endif`,ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pd=`#ifdef USE_TRANSMISSION
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
#endif`,md=`#ifdef USE_TRANSMISSION
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
#endif`,gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Md=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yd=`uniform sampler2D t2D;
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
}`,Sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ed=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`#include <common>
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
}`,wd=`#if DEPTH_PACKING == 3200
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
}`,Rd=`#define DISTANCE
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
}`,Cd=`#define DISTANCE
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ld=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dd=`uniform float scale;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,Id=`#include <common>
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Nd=`#define LAMBERT
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
}`,Od=`#define LAMBERT
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
}`,Bd=`#define MATCAP
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
}`,zd=`#define MATCAP
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
}`,Hd=`#define NORMAL
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
}`,Vd=`#define NORMAL
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
}`,Gd=`#define PHONG
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
}`,kd=`#define PHONG
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
}`,Wd=`#define STANDARD
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
}`,Xd=`#define STANDARD
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
}`,Yd=`#define TOON
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
}`,qd=`#define TOON
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
}`,jd=`uniform float size;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Kd=`#include <common>
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
}`,Zd=`uniform vec3 color;
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
}`,Jd=`uniform float rotation;
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
}`,Qd=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:yf,alphahash_pars_fragment:Sf,alphamap_fragment:Ef,alphamap_pars_fragment:Tf,alphatest_fragment:bf,alphatest_pars_fragment:Af,aomap_fragment:wf,aomap_pars_fragment:Rf,batching_pars_vertex:Cf,batching_vertex:Pf,begin_vertex:Lf,beginnormal_vertex:Df,bsdfs:Uf,iridescence_fragment:If,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:zf,color_fragment:Hf,color_pars_fragment:Vf,color_pars_vertex:Gf,color_vertex:kf,common:Wf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:qf,displacementmap_vertex:jf,emissivemap_fragment:$f,emissivemap_pars_fragment:Kf,colorspace_fragment:Zf,colorspace_pars_fragment:Jf,envmap_fragment:Qf,envmap_common_pars_fragment:eh,envmap_pars_fragment:th,envmap_pars_vertex:nh,envmap_physical_pars_fragment:dh,envmap_vertex:ih,fog_vertex:rh,fog_pars_vertex:sh,fog_fragment:ah,fog_pars_fragment:oh,gradientmap_pars_fragment:lh,lightmap_pars_fragment:ch,lights_lambert_fragment:uh,lights_lambert_pars_fragment:fh,lights_pars_begin:hh,lights_toon_fragment:ph,lights_toon_pars_fragment:mh,lights_phong_fragment:gh,lights_phong_pars_fragment:_h,lights_physical_fragment:vh,lights_physical_pars_fragment:xh,lights_fragment_begin:Mh,lights_fragment_maps:yh,lights_fragment_end:Sh,logdepthbuf_fragment:Eh,logdepthbuf_pars_fragment:Th,logdepthbuf_pars_vertex:bh,logdepthbuf_vertex:Ah,map_fragment:wh,map_pars_fragment:Rh,map_particle_fragment:Ch,map_particle_pars_fragment:Ph,metalnessmap_fragment:Lh,metalnessmap_pars_fragment:Dh,morphinstance_vertex:Uh,morphcolor_vertex:Ih,morphnormal_vertex:Fh,morphtarget_pars_vertex:Nh,morphtarget_vertex:Oh,normal_fragment_begin:Bh,normal_fragment_maps:zh,normal_pars_fragment:Hh,normal_pars_vertex:Vh,normal_vertex:Gh,normalmap_pars_fragment:kh,clearcoat_normal_fragment_begin:Wh,clearcoat_normal_fragment_maps:Xh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:qh,opaque_fragment:jh,packing:$h,premultiplied_alpha_fragment:Kh,project_vertex:Zh,dithering_fragment:Jh,dithering_pars_fragment:Qh,roughnessmap_fragment:ed,roughnessmap_pars_fragment:td,shadowmap_pars_fragment:nd,shadowmap_pars_vertex:id,shadowmap_vertex:rd,shadowmask_pars_fragment:sd,skinbase_vertex:ad,skinning_pars_vertex:od,skinning_vertex:ld,skinnormal_vertex:cd,specularmap_fragment:ud,specularmap_pars_fragment:fd,tonemapping_fragment:hd,tonemapping_pars_fragment:dd,transmission_fragment:pd,transmission_pars_fragment:md,uv_pars_fragment:gd,uv_pars_vertex:_d,uv_vertex:vd,worldpos_vertex:xd,background_vert:Md,background_frag:yd,backgroundCube_vert:Sd,backgroundCube_frag:Ed,cube_vert:Td,cube_frag:bd,depth_vert:Ad,depth_frag:wd,distanceRGBA_vert:Rd,distanceRGBA_frag:Cd,equirect_vert:Pd,equirect_frag:Ld,linedashed_vert:Dd,linedashed_frag:Ud,meshbasic_vert:Id,meshbasic_frag:Fd,meshlambert_vert:Nd,meshlambert_frag:Od,meshmatcap_vert:Bd,meshmatcap_frag:zd,meshnormal_vert:Hd,meshnormal_frag:Vd,meshphong_vert:Gd,meshphong_frag:kd,meshphysical_vert:Wd,meshphysical_frag:Xd,meshtoon_vert:Yd,meshtoon_frag:qd,points_vert:jd,points_frag:$d,shadow_vert:Kd,shadow_frag:Zd,sprite_vert:Jd,sprite_frag:Qd},Ce={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Dn={basic:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new It(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:nn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:nn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:nn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new It(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:nn([Ce.points,Ce.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:nn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:nn([Ce.common,Ce.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:nn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:nn([Ce.sprite,Ce.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:nn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:nn([Ce.lights,Ce.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Dn.physical={uniforms:nn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const _s={r:0,b:0,g:0},Si=new Qn,ep=new Gt;function tp(i,e,t,n,r,a,l){const c=new It(0);let d=a===!0?0:1,p,g,v=null,_=0,f=null;function A(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?t:e).get(D)),D}function R(I){let D=!1;const Y=A(I);Y===null?m(c,d):Y&&Y.isColor&&(m(Y,1),D=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(I,D){const Y=A(D);Y&&(Y.isCubeTexture||Y.mapping===Ps)?(g===void 0&&(g=new In(new hr(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:ur(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Si.copy(D.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,Y.isCubeTexture&&Y.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),g.material.uniforms.envMap.value=Y,g.material.uniforms.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(Si)),g.material.toneMapped=Rt.getTransfer(Y.colorSpace)!==Ut,(v!==Y||_!==Y.version||f!==i.toneMapping)&&(g.material.needsUpdate=!0,v=Y,_=Y.version,f=i.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):Y&&Y.isTexture&&(p===void 0&&(p=new In(new Ds(2,2),new hi({name:"BackgroundMaterial",uniforms:ur(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=Y,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(Y.colorSpace)!==Ut,Y.matrixAutoUpdate===!0&&Y.updateMatrix(),p.material.uniforms.uvTransform.value.copy(Y.matrix),(v!==Y||_!==Y.version||f!==i.toneMapping)&&(p.material.needsUpdate=!0,v=Y,_=Y.version,f=i.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function m(I,D){I.getRGB(_s,dc(i)),n.buffers.color.setClear(_s.r,_s.g,_s.b,D,l)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(I,D=1){c.set(I),d=D,m(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,m(c,d)},render:R,addToRenderList:M,dispose:O}}function np(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=_(null);let a=r,l=!1;function c(w,H,te,Q,ue){let de=!1;const ce=v(Q,te,H);a!==ce&&(a=ce,p(a.object)),de=f(w,Q,te,ue),de&&A(w,Q,te,ue),ue!==null&&e.update(ue,i.ELEMENT_ARRAY_BUFFER),(de||l)&&(l=!1,D(w,H,te,Q),ue!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return i.createVertexArray()}function p(w){return i.bindVertexArray(w)}function g(w){return i.deleteVertexArray(w)}function v(w,H,te){const Q=te.wireframe===!0;let ue=n[w.id];ue===void 0&&(ue={},n[w.id]=ue);let de=ue[H.id];de===void 0&&(de={},ue[H.id]=de);let ce=de[Q];return ce===void 0&&(ce=_(d()),de[Q]=ce),ce}function _(w){const H=[],te=[],Q=[];for(let ue=0;ue<t;ue++)H[ue]=0,te[ue]=0,Q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:te,attributeDivisors:Q,object:w,attributes:{},index:null}}function f(w,H,te,Q){const ue=a.attributes,de=H.attributes;let ce=0;const oe=te.getAttributes();for(const se in oe)if(oe[se].location>=0){const _e=ue[se];let Fe=de[se];if(Fe===void 0&&(se==="instanceMatrix"&&w.instanceMatrix&&(Fe=w.instanceMatrix),se==="instanceColor"&&w.instanceColor&&(Fe=w.instanceColor)),_e===void 0||_e.attribute!==Fe||Fe&&_e.data!==Fe.data)return!0;ce++}return a.attributesNum!==ce||a.index!==Q}function A(w,H,te,Q){const ue={},de=H.attributes;let ce=0;const oe=te.getAttributes();for(const se in oe)if(oe[se].location>=0){let _e=de[se];_e===void 0&&(se==="instanceMatrix"&&w.instanceMatrix&&(_e=w.instanceMatrix),se==="instanceColor"&&w.instanceColor&&(_e=w.instanceColor));const Fe={};Fe.attribute=_e,_e&&_e.data&&(Fe.data=_e.data),ue[se]=Fe,ce++}a.attributes=ue,a.attributesNum=ce,a.index=Q}function R(){const w=a.newAttributes;for(let H=0,te=w.length;H<te;H++)w[H]=0}function M(w){m(w,0)}function m(w,H){const te=a.newAttributes,Q=a.enabledAttributes,ue=a.attributeDivisors;te[w]=1,Q[w]===0&&(i.enableVertexAttribArray(w),Q[w]=1),ue[w]!==H&&(i.vertexAttribDivisor(w,H),ue[w]=H)}function O(){const w=a.newAttributes,H=a.enabledAttributes;for(let te=0,Q=H.length;te<Q;te++)H[te]!==w[te]&&(i.disableVertexAttribArray(te),H[te]=0)}function I(w,H,te,Q,ue,de,ce){ce===!0?i.vertexAttribIPointer(w,H,te,ue,de):i.vertexAttribPointer(w,H,te,Q,ue,de)}function D(w,H,te,Q){R();const ue=Q.attributes,de=te.getAttributes(),ce=H.defaultAttributeValues;for(const oe in de){const se=de[oe];if(se.location>=0){let xe=ue[oe];if(xe===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor)),xe!==void 0){const _e=xe.normalized,Fe=xe.itemSize,nt=e.get(xe);if(nt===void 0)continue;const We=nt.buffer,ee=nt.type,E=nt.bytesPerElement,h=ee===i.INT||ee===i.UNSIGNED_INT||xe.gpuType===po;if(xe.isInterleavedBufferAttribute){const y=xe.data,N=y.stride,W=xe.offset;if(y.isInstancedInterleavedBuffer){for(let ne=0;ne<se.locationSize;ne++)m(se.location+ne,y.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=y.meshPerAttribute*y.count)}else for(let ne=0;ne<se.locationSize;ne++)M(se.location+ne);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ne=0;ne<se.locationSize;ne++)I(se.location+ne,Fe/se.locationSize,ee,_e,N*E,(W+Fe/se.locationSize*ne)*E,h)}else{if(xe.isInstancedBufferAttribute){for(let y=0;y<se.locationSize;y++)m(se.location+y,xe.meshPerAttribute);w.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let y=0;y<se.locationSize;y++)M(se.location+y);i.bindBuffer(i.ARRAY_BUFFER,We);for(let y=0;y<se.locationSize;y++)I(se.location+y,Fe/se.locationSize,ee,_e,Fe*E,Fe/se.locationSize*y*E,h)}}else if(ce!==void 0){const _e=ce[oe];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(se.location,_e);break;case 3:i.vertexAttrib3fv(se.location,_e);break;case 4:i.vertexAttrib4fv(se.location,_e);break;default:i.vertexAttrib1fv(se.location,_e)}}}}O()}function Y(){j();for(const w in n){const H=n[w];for(const te in H){const Q=H[te];for(const ue in Q)g(Q[ue].object),delete Q[ue];delete H[te]}delete n[w]}}function F(w){if(n[w.id]===void 0)return;const H=n[w.id];for(const te in H){const Q=H[te];for(const ue in Q)g(Q[ue].object),delete Q[ue];delete H[te]}delete n[w.id]}function B(w){for(const H in n){const te=n[H];if(te[w.id]===void 0)continue;const Q=te[w.id];for(const ue in Q)g(Q[ue].object),delete Q[ue];delete te[w.id]}}function j(){P(),l=!0,a!==r&&(a=r,p(a.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:j,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:F,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:M,disableUnusedAttributes:O}}function ip(i,e,t){let n;function r(p){n=p}function a(p,g){i.drawArrays(n,p,g),t.update(g,n,1)}function l(p,g,v){v!==0&&(i.drawArraysInstanced(n,p,g,v),t.update(g,n,v))}function c(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,p,0,g,0,v);let f=0;for(let A=0;A<v;A++)f+=g[A];t.update(f,n,1)}function d(p,g,v,_){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let A=0;A<p.length;A++)l(p[A],g[A],_[A]);else{f.multiDrawArraysInstancedWEBGL(n,p,0,g,0,_,0,v);let A=0;for(let R=0;R<v;R++)A+=g[R]*_[R];t.update(A,n,1)}}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function rp(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(B){return!(B!==En&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(B){const j=B===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Jn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==$n&&!j)}function d(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),O=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Y=A>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:c,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:f,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:M,maxAttributes:m,maxVertexUniforms:O,maxVaryings:I,maxFragmentUniforms:D,vertexTextures:Y,maxSamples:F}}function sp(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Ti,c=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const f=v.length!==0||_||n!==0||r;return r=_,n=v.length,f},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,f){const A=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,m=i.get(v);if(!r||A===null||A.length===0||a&&!M)a?g(null):p();else{const O=a?0:n,I=O*4;let D=m.clippingState||null;d.value=D,D=g(A,_,I,f);for(let Y=0;Y!==I;++Y)D[Y]=t[Y];m.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=O}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(v,_,f,A){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=d.value,A!==!0||M===null){const m=f+R*4,O=_.matrixWorldInverse;c.getNormalMatrix(O),(M===null||M.length<m)&&(M=new Float32Array(m));for(let I=0,D=f;I!==R;++I,D+=4)l.copy(v[I]).applyMatrix4(O,c),l.normal.toArray(M,D),M[D+3]=l.constant}d.value=M,d.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function ap(i){let e=new WeakMap;function t(l,c){return c===Ua?l.mapping=sr:c===Ia&&(l.mapping=ar),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===Ua||c===Ia)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const p=new ff(d.height);return p.fromEquirectangularTexture(i,l),e.set(l,p),l.addEventListener("dispose",r),t(p.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const er=4,Sl=[.125,.215,.35,.446,.526,.582],wi=20,_a=new _f,El=new It;let va=null,xa=0,Ma=0,ya=!1;const bi=(1+Math.sqrt(5))/2,Ji=1/bi,Tl=[new ie(-bi,Ji,0),new ie(bi,Ji,0),new ie(-Ji,0,bi),new ie(Ji,0,bi),new ie(0,bi,-Ji),new ie(0,bi,Ji),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,xa,Ma),this._renderer.xr.enabled=ya,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Pr,format:En,colorSpace:cr,depthBuffer:!1},r=Al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=op(a)),this._blurMaterial=lp(a,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,n,r){const c=new _n(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(El),g.toneMapping=ui,g.autoClear=!1;const f=new yo({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),A=new In(new hr,f);let R=!1;const M=e.background;M?M.isColor&&(f.color.copy(M),e.background=null,R=!0):(f.color.copy(El),R=!0);for(let m=0;m<6;m++){const O=m%3;O===0?(c.up.set(0,d[m],0),c.lookAt(p[m],0,0)):O===1?(c.up.set(0,0,d[m]),c.lookAt(0,p[m],0)):(c.up.set(0,d[m],0),c.lookAt(0,0,p[m]));const I=this._cubeSize;vs(r,O*I,m>2?I:0,I,I),g.setRenderTarget(r),R&&g.render(A,c),g.render(e,c)}A.geometry.dispose(),A.material.dispose(),g.toneMapping=_,g.autoClear=v,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===sr||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new In(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;vs(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,_a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const l=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Tl[(r-a-1)%Tl.length];this._blur(e,a-1,a,l,c)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const d=this._renderer,p=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new In(this._lodPlanes[r],p),_=p.uniforms,f=this._sizeLods[n]-1,A=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*wi-1),R=a/A,M=isFinite(a)?1+Math.floor(g*R):wi;M>wi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${wi}`);const m=[];let O=0;for(let B=0;B<wi;++B){const j=B/R,P=Math.exp(-j*j/2);m.push(P),B===0?O+=P:B<M&&(O+=2*P)}for(let B=0;B<m.length;B++)m[B]=m[B]/O;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=m,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:I}=this;_.dTheta.value=A,_.mipInt.value=I-n;const D=this._sizeLods[r],Y=3*D*(r>I-er?r-I+er:0),F=4*(this._cubeSize-D);vs(t,Y,F,3*D,2*D),d.setRenderTarget(t),d.render(v,_a)}}function op(i){const e=[],t=[],n=[];let r=i;const a=i-er+1+Sl.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);t.push(c);let d=1/c;l>i-er?d=Sl[l-i+er-1]:l===0&&(d=0),n.push(d);const p=1/(c-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],f=6,A=6,R=3,M=2,m=1,O=new Float32Array(R*A*f),I=new Float32Array(M*A*f),D=new Float32Array(m*A*f);for(let F=0;F<f;F++){const B=F%3*2/3-1,j=F>2?0:-1,P=[B,j,0,B+2/3,j,0,B+2/3,j+1,0,B,j,0,B+2/3,j+1,0,B,j+1,0];O.set(P,R*A*F),I.set(_,M*A*F);const w=[F,F,F,F,F,F];D.set(w,m*A*F)}const Y=new Ui;Y.setAttribute("position",new Fn(O,R)),Y.setAttribute("uv",new Fn(I,M)),Y.setAttribute("faceIndex",new Fn(D,m)),e.push(Y),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Al(i,e,t){const n=new Di(i,e,t);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lp(i,e,t){const n=new Float32Array(wi),r=new ie(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:So(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wl(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:So(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Rl(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:So(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function So(){return`

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
	`}function cp(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,p=d===Ua||d===Ia,g=d===sr||d===ar;if(p||g){let v=e.get(c);const _=v!==void 0?v.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new bl(i)),v=p?t.fromEquirectangular(c,v):t.fromCubemap(c,v),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),v.texture;if(v!==void 0)return v.texture;{const f=c.image;return p&&f&&f.height>0||g&&f&&r(f)?(t===null&&(t=new bl(i)),v=p?t.fromEquirectangular(c):t.fromCubemap(c),v.texture.pmremVersion=c.pmremVersion,e.set(c,v),c.addEventListener("dispose",a),v.texture):null}}}return c}function r(c){let d=0;const p=6;for(let g=0;g<p;g++)c[g]!==void 0&&d++;return d===p}function a(c){const d=c.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function up(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fp(i,e,t,n){const r={},a=new WeakMap;function l(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const A in _.attributes)e.remove(_.attributes[A]);_.removeEventListener("dispose",l),delete r[_.id];const f=a.get(_);f&&(e.remove(f),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(v,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,t.memory.geometries++),_}function d(v){const _=v.attributes;for(const f in _)e.update(_[f],i.ARRAY_BUFFER)}function p(v){const _=[],f=v.index,A=v.attributes.position;let R=0;if(f!==null){const O=f.array;R=f.version;for(let I=0,D=O.length;I<D;I+=3){const Y=O[I+0],F=O[I+1],B=O[I+2];_.push(Y,F,F,B,B,Y)}}else if(A!==void 0){const O=A.array;R=A.version;for(let I=0,D=O.length/3-1;I<D;I+=3){const Y=I+0,F=I+1,B=I+2;_.push(Y,F,F,B,B,Y)}}else return;const M=new(ac(_)?hc:fc)(_,1);M.version=R;const m=a.get(v);m&&e.remove(m),a.set(v,M)}function g(v){const _=a.get(v);if(_){const f=v.index;f!==null&&_.version<f.version&&p(v)}else p(v);return a.get(v)}return{get:c,update:d,getWireframeAttribute:g}}function hp(i,e,t){let n;function r(_){n=_}let a,l;function c(_){a=_.type,l=_.bytesPerElement}function d(_,f){i.drawElements(n,f,a,_*l),t.update(f,n,1)}function p(_,f,A){A!==0&&(i.drawElementsInstanced(n,f,a,_*l,A),t.update(f,n,A))}function g(_,f,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,_,0,A);let M=0;for(let m=0;m<A;m++)M+=f[m];t.update(M,n,1)}function v(_,f,A,R){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let m=0;m<_.length;m++)p(_[m]/l,f[m],R[m]);else{M.multiDrawElementsInstancedWEBGL(n,f,0,a,_,0,R,0,A);let m=0;for(let O=0;O<A;O++)m+=f[O]*R[O];t.update(m,n,1)}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function dp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pp(i,e,t){const n=new WeakMap,r=new Ht;function a(l,c,d){const p=l.morphTargetInfluences,g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let _=n.get(c);if(_===void 0||_.count!==v){let w=function(){j.dispose(),n.delete(c),c.removeEventListener("dispose",w)};var f=w;_!==void 0&&_.texture.dispose();const A=c.morphAttributes.position!==void 0,R=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],O=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let D=0;A===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let Y=c.attributes.position.count*D,F=1;Y>e.maxTextureSize&&(F=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const B=new Float32Array(Y*F*4*v),j=new lc(B,Y,F,v);j.type=$n,j.needsUpdate=!0;const P=D*4;for(let H=0;H<v;H++){const te=m[H],Q=O[H],ue=I[H],de=Y*F*4*H;for(let ce=0;ce<te.count;ce++){const oe=ce*P;A===!0&&(r.fromBufferAttribute(te,ce),B[de+oe+0]=r.x,B[de+oe+1]=r.y,B[de+oe+2]=r.z,B[de+oe+3]=0),R===!0&&(r.fromBufferAttribute(Q,ce),B[de+oe+4]=r.x,B[de+oe+5]=r.y,B[de+oe+6]=r.z,B[de+oe+7]=0),M===!0&&(r.fromBufferAttribute(ue,ce),B[de+oe+8]=r.x,B[de+oe+9]=r.y,B[de+oe+10]=r.z,B[de+oe+11]=ue.itemSize===4?r.w:1)}}_={count:v,texture:j,size:new Ft(Y,F)},n.set(c,_),c.addEventListener("dispose",w)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const R=c.morphTargetsRelative?1:1-A;d.getUniforms().setValue(i,"morphTargetBaseInfluence",R),d.getUniforms().setValue(i,"morphTargetInfluences",p)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:a}}function mp(i,e,t,n){let r=new WeakMap;function a(d){const p=n.render.frame,g=d.geometry,v=e.get(d,g);if(r.get(v)!==p&&(e.update(v),r.set(v,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==p&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const _=d.skeleton;r.get(_)!==p&&(_.update(),r.set(_,p))}return v}function l(){r=new WeakMap}function c(d){const p=d.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:l}}const xc=new ln,Cl=new _c(1,1),Mc=new lc,yc=new qu,Sc=new mc,Pl=[],Ll=[],Dl=new Float32Array(16),Ul=new Float32Array(9),Il=new Float32Array(4);function dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Pl[r];if(a===void 0&&(a=new Float32Array(r),Pl[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Us(i,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Mp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),Xt(t,n)}}function yp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Ul.set(n),i.uniformMatrix3fv(this.addr,!1,Ul),Xt(t,n)}}function Sp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),Xt(t,n)}}function Ep(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=sc,a=Cl):a=xc,t.setTexture2D(e||a,r)}function Dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||yc,r)}function Up(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Sc,r)}function Ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Mc,r)}function Fp(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return yp;case 35676:return Sp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return bp;case 35669:case 35673:return Ap;case 5125:return wp;case 36294:return Rp;case 36295:return Cp;case 36296:return Pp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Ip}}function Np(i,e){i.uniform1fv(this.addr,e)}function Op(i,e){const t=dr(e,this.size,2);i.uniform2fv(this.addr,t)}function Bp(i,e){const t=dr(e,this.size,3);i.uniform3fv(this.addr,t)}function zp(i,e){const t=dr(e,this.size,4);i.uniform4fv(this.addr,t)}function Hp(i,e){const t=dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vp(i,e){const t=dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gp(i,e){const t=dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function kp(i,e){i.uniform1iv(this.addr,e)}function Wp(i,e){i.uniform2iv(this.addr,e)}function Xp(i,e){i.uniform3iv(this.addr,e)}function Yp(i,e){i.uniform4iv(this.addr,e)}function qp(i,e){i.uniform1uiv(this.addr,e)}function jp(i,e){i.uniform2uiv(this.addr,e)}function $p(i,e){i.uniform3uiv(this.addr,e)}function Kp(i,e){i.uniform4uiv(this.addr,e)}function Zp(i,e,t){const n=this.cache,r=e.length,a=Us(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||xc,a[l])}function Jp(i,e,t){const n=this.cache,r=e.length,a=Us(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||yc,a[l])}function Qp(i,e,t){const n=this.cache,r=e.length,a=Us(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Sc,a[l])}function em(i,e,t){const n=this.cache,r=e.length,a=Us(t,r);Wt(n,a)||(i.uniform1iv(this.addr,a),Xt(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Mc,a[l])}function tm(i){switch(i){case 5126:return Np;case 35664:return Op;case 35665:return Bp;case 35666:return zp;case 35674:return Hp;case 35675:return Vp;case 35676:return Gp;case 5124:case 35670:return kp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return Yp;case 5125:return qp;case 36294:return jp;case 36295:return $p;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Zp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}class nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fp(t.type)}}class im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tm(t.type)}}class rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Fl(i,e){i.seq.push(e),i.map[e.id]=e}function sm(i,e,t){const n=i.name,r=n.length;for(Sa.lastIndex=0;;){const a=Sa.exec(n),l=Sa.lastIndex;let c=a[1];const d=a[2]==="]",p=a[3];if(d&&(c=c|0),p===void 0||p==="["&&l+2===r){Fl(t,p===void 0?new nm(c,i,e):new im(c,i,e));break}else{let v=t.map[c];v===void 0&&(v=new rm(c),Fl(t,v)),t=v}}}class bs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);sm(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const am=37297;let om=0;function lm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Ol=new ft;function cm(i){Rt._getMatrix(Ol,Rt.workingColorSpace,i);const e=`mat3( ${Ol.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case As:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+lm(i.getShaderSource(e),l)}else return r}function um(i,e){const t=cm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fm(i,e){let t;switch(e){case vu:t="Linear";break;case xu:t="Reinhard";break;case Mu:t="Cineon";break;case yu:t="ACESFilmic";break;case Eu:t="AgX";break;case Tu:t="Neutral";break;case Su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new ie;function hm(){Rt.getLuminanceCoefficients(xs);const i=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function pm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function Rr(i){return i!==""}function zl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function uo(i){return i.replace(gm,vm)}const _m=new Map;function vm(i,e){let t=ht[e];if(t===void 0){const n=_m.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uo(t)}const xm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(xm,Mm)}function Mm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Gl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ym(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Sm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case ar:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Em(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Tm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case gu:e="ENVMAP_BLENDING_MIX";break;case _u:e="ENVMAP_BLENDING_ADD";break}return e}function bm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Am(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const d=ym(t),p=Sm(t),g=Em(t),v=Tm(t),_=bm(t),f=dm(t),A=pm(a),R=r.createProgram();let M,m,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Rr).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(Rr).join(`
`),m.length>0&&(m+=`
`)):(M=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),m=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?ht.tonemapping_pars_fragment:"",t.toneMapping!==ui?fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,um("linearToOutputTexel",t.outputColorSpace),hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),l=uo(l),l=zl(l,t),l=Hl(l,t),c=uo(c),c=zl(c,t),c=Hl(c,t),l=Vl(l),c=Vl(c),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const I=O+M+l,D=O+m+c,Y=Nl(r,r.VERTEX_SHADER,I),F=Nl(r,r.FRAGMENT_SHADER,D);r.attachShader(R,Y),r.attachShader(R,F),t.index0AttributeName!==void 0?r.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(R,0,"position"),r.linkProgram(R);function B(H){if(i.debug.checkShaderErrors){const te=r.getProgramInfoLog(R).trim(),Q=r.getShaderInfoLog(Y).trim(),ue=r.getShaderInfoLog(F).trim();let de=!0,ce=!0;if(r.getProgramParameter(R,r.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,R,Y,F);else{const oe=Bl(r,Y,"vertex"),se=Bl(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(R,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+te+`
`+oe+`
`+se)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Q===""||ue==="")&&(ce=!1);ce&&(H.diagnostics={runnable:de,programLog:te,vertexShader:{log:Q,prefix:M},fragmentShader:{log:ue,prefix:m}})}r.deleteShader(Y),r.deleteShader(F),j=new bs(r,R),P=mm(r,R)}let j;this.getUniforms=function(){return j===void 0&&B(this),j};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(R,am)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=om++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=F,this}let wm=0;class Rm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cm(e),t.set(e,n)),n}}class Cm{constructor(e){this.id=wm++,this.code=e,this.usedTimes=0}}function Pm(i,e,t,n,r,a,l){const c=new cc,d=new Rm,p=new Set,g=[],v=r.logarithmicDepthBuffer,_=r.vertexTextures;let f=r.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(P){return p.add(P),P===0?"uv":`uv${P}`}function M(P,w,H,te,Q){const ue=te.fog,de=Q.geometry,ce=P.isMeshStandardMaterial?te.environment:null,oe=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),se=oe&&oe.mapping===Ps?oe.image.height:null,xe=A[P.type];P.precision!==null&&(f=r.getMaxPrecision(P.precision),f!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",f,"instead."));const _e=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Fe=_e!==void 0?_e.length:0;let nt=0;de.morphAttributes.position!==void 0&&(nt=1),de.morphAttributes.normal!==void 0&&(nt=2),de.morphAttributes.color!==void 0&&(nt=3);let We,ee,E,h;if(xe){const Et=Dn[xe];We=Et.vertexShader,ee=Et.fragmentShader}else We=P.vertexShader,ee=P.fragmentShader,d.update(P),E=d.getVertexShaderID(P),h=d.getFragmentShaderID(P);const y=i.getRenderTarget(),N=i.state.buffers.depth.getReversed(),W=Q.isInstancedMesh===!0,ne=Q.isBatchedMesh===!0,he=!!P.map,Te=!!P.matcap,Ye=!!oe,U=!!P.aoMap,at=!!P.lightMap,Qe=!!P.bumpMap,et=!!P.normalMap,Pe=!!P.displacementMap,yt=!!P.emissiveMap,He=!!P.metalnessMap,L=!!P.roughnessMap,S=P.anisotropy>0,K=P.clearcoat>0,fe=P.dispersion>0,me=P.iridescence>0,le=P.sheen>0,Xe=P.transmission>0,Ee=S&&!!P.anisotropyMap,Ve=K&&!!P.clearcoatMap,mt=K&&!!P.clearcoatNormalMap,ye=K&&!!P.clearcoatRoughnessMap,Ge=me&&!!P.iridescenceMap,Ze=me&&!!P.iridescenceThicknessMap,it=le&&!!P.sheenColorMap,Le=le&&!!P.sheenRoughnessMap,dt=!!P.specularMap,ot=!!P.specularColorMap,Lt=!!P.specularIntensityMap,V=Xe&&!!P.transmissionMap,Re=Xe&&!!P.thicknessMap,ae=!!P.gradientMap,pe=!!P.alphaMap,Ue=P.alphaTest>0,De=!!P.alphaHash,st=!!P.extensions;let qe=ui;P.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(qe=i.toneMapping);const Yt={shaderID:xe,shaderType:P.type,shaderName:P.name,vertexShader:We,fragmentShader:ee,defines:P.defines,customVertexShaderID:E,customFragmentShaderID:h,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:f,batching:ne,batchingColor:ne&&Q._colorsTexture!==null,instancing:W,instancingColor:W&&Q.instanceColor!==null,instancingMorph:W&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:y===null?i.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:cr,alphaToCoverage:!!P.alphaToCoverage,map:he,matcap:Te,envMap:Ye,envMapMode:Ye&&oe.mapping,envMapCubeUVHeight:se,aoMap:U,lightMap:at,bumpMap:Qe,normalMap:et,displacementMap:_&&Pe,emissiveMap:yt,normalMapObjectSpace:et&&P.normalMapType===Cu,normalMapTangentSpace:et&&P.normalMapType===Ru,metalnessMap:He,roughnessMap:L,anisotropy:S,anisotropyMap:Ee,clearcoat:K,clearcoatMap:Ve,clearcoatNormalMap:mt,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:me,iridescenceMap:Ge,iridescenceThicknessMap:Ze,sheen:le,sheenColorMap:it,sheenRoughnessMap:Le,specularMap:dt,specularColorMap:ot,specularIntensityMap:Lt,transmission:Xe,transmissionMap:V,thicknessMap:Re,gradientMap:ae,opaque:P.transparent===!1&&P.blending===tr&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ue,alphaHash:De,combine:P.combine,mapUv:he&&R(P.map.channel),aoMapUv:U&&R(P.aoMap.channel),lightMapUv:at&&R(P.lightMap.channel),bumpMapUv:Qe&&R(P.bumpMap.channel),normalMapUv:et&&R(P.normalMap.channel),displacementMapUv:Pe&&R(P.displacementMap.channel),emissiveMapUv:yt&&R(P.emissiveMap.channel),metalnessMapUv:He&&R(P.metalnessMap.channel),roughnessMapUv:L&&R(P.roughnessMap.channel),anisotropyMapUv:Ee&&R(P.anisotropyMap.channel),clearcoatMapUv:Ve&&R(P.clearcoatMap.channel),clearcoatNormalMapUv:mt&&R(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&R(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&R(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&R(P.iridescenceThicknessMap.channel),sheenColorMapUv:it&&R(P.sheenColorMap.channel),sheenRoughnessMapUv:Le&&R(P.sheenRoughnessMap.channel),specularMapUv:dt&&R(P.specularMap.channel),specularColorMapUv:ot&&R(P.specularColorMap.channel),specularIntensityMapUv:Lt&&R(P.specularIntensityMap.channel),transmissionMapUv:V&&R(P.transmissionMap.channel),thicknessMapUv:Re&&R(P.thicknessMap.channel),alphaMapUv:pe&&R(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(et||S),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(he||pe),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:N,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:nt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:qe,decodeVideoTexture:he&&P.map.isVideoTexture===!0&&Rt.getTransfer(P.map.colorSpace)===Ut,decodeVideoTextureEmissive:yt&&P.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(P.emissiveMap.colorSpace)===Ut,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===jn,flipSided:P.side===on,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function m(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)w.push(H),w.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(O(w,P),I(w,P),w.push(i.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function O(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function I(P,w){c.disableAll(),w.supportsVertexTextures&&c.enable(0),w.instancing&&c.enable(1),w.instancingColor&&c.enable(2),w.instancingMorph&&c.enable(3),w.matcap&&c.enable(4),w.envMap&&c.enable(5),w.normalMapObjectSpace&&c.enable(6),w.normalMapTangentSpace&&c.enable(7),w.clearcoat&&c.enable(8),w.iridescence&&c.enable(9),w.alphaTest&&c.enable(10),w.vertexColors&&c.enable(11),w.vertexAlphas&&c.enable(12),w.vertexUv1s&&c.enable(13),w.vertexUv2s&&c.enable(14),w.vertexUv3s&&c.enable(15),w.vertexTangents&&c.enable(16),w.anisotropy&&c.enable(17),w.alphaHash&&c.enable(18),w.batching&&c.enable(19),w.dispersion&&c.enable(20),w.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),w.fog&&c.enable(0),w.useFog&&c.enable(1),w.flatShading&&c.enable(2),w.logarithmicDepthBuffer&&c.enable(3),w.reverseDepthBuffer&&c.enable(4),w.skinning&&c.enable(5),w.morphTargets&&c.enable(6),w.morphNormals&&c.enable(7),w.morphColors&&c.enable(8),w.premultipliedAlpha&&c.enable(9),w.shadowMapEnabled&&c.enable(10),w.doubleSided&&c.enable(11),w.flipSided&&c.enable(12),w.useDepthPacking&&c.enable(13),w.dithering&&c.enable(14),w.transmission&&c.enable(15),w.sheen&&c.enable(16),w.opaque&&c.enable(17),w.pointsUvs&&c.enable(18),w.decodeVideoTexture&&c.enable(19),w.decodeVideoTextureEmissive&&c.enable(20),w.alphaToCoverage&&c.enable(21),P.push(c.mask)}function D(P){const w=A[P.type];let H;if(w){const te=Dn[w];H=of.clone(te.uniforms)}else H=P.uniforms;return H}function Y(P,w){let H;for(let te=0,Q=g.length;te<Q;te++){const ue=g[te];if(ue.cacheKey===w){H=ue,++H.usedTimes;break}}return H===void 0&&(H=new Am(i,w,P,a),g.push(H)),H}function F(P){if(--P.usedTimes===0){const w=g.indexOf(P);g[w]=g[g.length-1],g.pop(),P.destroy()}}function B(P){d.remove(P)}function j(){d.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:D,acquireProgram:Y,releaseProgram:F,releaseShaderCache:B,programs:g,dispose:j}}function Lm(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function r(l,c,d){i.get(l)[c]=d}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Dm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(v,_,f,A,R,M){let m=i[e];return m===void 0?(m={id:v.id,object:v,geometry:_,material:f,groupOrder:A,renderOrder:v.renderOrder,z:R,group:M},i[e]=m):(m.id=v.id,m.object=v,m.geometry=_,m.material=f,m.groupOrder=A,m.renderOrder=v.renderOrder,m.z=R,m.group=M),e++,m}function c(v,_,f,A,R,M){const m=l(v,_,f,A,R,M);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function d(v,_,f,A,R,M){const m=l(v,_,f,A,R,M);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function p(v,_){t.length>1&&t.sort(v||Dm),n.length>1&&n.sort(_||kl),r.length>1&&r.sort(_||kl)}function g(){for(let v=e,_=i.length;v<_;v++){const f=i[v];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:d,finish:g,sort:p}}function Um(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new Wl,i.set(n,[l])):r>=a.length?(l=new Wl,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Im(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new It};break;case"SpotLight":t={position:new ie,direction:new ie,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function Fm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Nm=0;function Om(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bm(i){const e=new Im,t=Fm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)n.probe.push(new ie);const r=new ie,a=new Gt,l=new Gt;function c(p){let g=0,v=0,_=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,A=0,R=0,M=0,m=0,O=0,I=0,D=0,Y=0,F=0,B=0;p.sort(Om);for(let P=0,w=p.length;P<w;P++){const H=p[P],te=H.color,Q=H.intensity,ue=H.distance,de=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=te.r*Q,v+=te.g*Q,_+=te.b*Q;else if(H.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(H.sh.coefficients[ce],Q);B++}else if(H.isDirectionalLight){const ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const oe=H.shadow,se=t.get(H);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,n.directionalShadow[f]=se,n.directionalShadowMap[f]=de,n.directionalShadowMatrix[f]=H.shadow.matrix,O++}n.directional[f]=ce,f++}else if(H.isSpotLight){const ce=e.get(H);ce.position.setFromMatrixPosition(H.matrixWorld),ce.color.copy(te).multiplyScalar(Q),ce.distance=ue,ce.coneCos=Math.cos(H.angle),ce.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ce.decay=H.decay,n.spot[R]=ce;const oe=H.shadow;if(H.map&&(n.spotLightMap[Y]=H.map,Y++,oe.updateMatrices(H),H.castShadow&&F++),n.spotLightMatrix[R]=oe.matrix,H.castShadow){const se=t.get(H);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,n.spotShadow[R]=se,n.spotShadowMap[R]=de,D++}R++}else if(H.isRectAreaLight){const ce=e.get(H);ce.color.copy(te).multiplyScalar(Q),ce.halfWidth.set(H.width*.5,0,0),ce.halfHeight.set(0,H.height*.5,0),n.rectArea[M]=ce,M++}else if(H.isPointLight){const ce=e.get(H);if(ce.color.copy(H.color).multiplyScalar(H.intensity),ce.distance=H.distance,ce.decay=H.decay,H.castShadow){const oe=H.shadow,se=t.get(H);se.shadowIntensity=oe.intensity,se.shadowBias=oe.bias,se.shadowNormalBias=oe.normalBias,se.shadowRadius=oe.radius,se.shadowMapSize=oe.mapSize,se.shadowCameraNear=oe.camera.near,se.shadowCameraFar=oe.camera.far,n.pointShadow[A]=se,n.pointShadowMap[A]=de,n.pointShadowMatrix[A]=H.shadow.matrix,I++}n.point[A]=ce,A++}else if(H.isHemisphereLight){const ce=e.get(H);ce.skyColor.copy(H.color).multiplyScalar(Q),ce.groundColor.copy(H.groundColor).multiplyScalar(Q),n.hemi[m]=ce,m++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=g,n.ambient[1]=v,n.ambient[2]=_;const j=n.hash;(j.directionalLength!==f||j.pointLength!==A||j.spotLength!==R||j.rectAreaLength!==M||j.hemiLength!==m||j.numDirectionalShadows!==O||j.numPointShadows!==I||j.numSpotShadows!==D||j.numSpotMaps!==Y||j.numLightProbes!==B)&&(n.directional.length=f,n.spot.length=R,n.rectArea.length=M,n.point.length=A,n.hemi.length=m,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.pointShadow.length=I,n.pointShadowMap.length=I,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=O,n.pointShadowMatrix.length=I,n.spotLightMatrix.length=D+Y-F,n.spotLightMap.length=Y,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=B,j.directionalLength=f,j.pointLength=A,j.spotLength=R,j.rectAreaLength=M,j.hemiLength=m,j.numDirectionalShadows=O,j.numPointShadows=I,j.numSpotShadows=D,j.numSpotMaps=Y,j.numLightProbes=B,n.version=Nm++)}function d(p,g){let v=0,_=0,f=0,A=0,R=0;const M=g.matrixWorldInverse;for(let m=0,O=p.length;m<O;m++){const I=p[m];if(I.isDirectionalLight){const D=n.directional[v];D.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(M),v++}else if(I.isSpotLight){const D=n.spot[f];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(M),f++}else if(I.isRectAreaLight){const D=n.rectArea[A];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(M),l.identity(),a.copy(I.matrixWorld),a.premultiply(M),l.extractRotation(a),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(l),D.halfHeight.applyMatrix4(l),A++}else if(I.isPointLight){const D=n.point[_];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(M),_++}else if(I.isHemisphereLight){const D=n.hemi[R];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:c,setupView:d,state:n}}function Xl(i){const e=new Bm(i),t=[],n=[];function r(g){p.camera=g,t.length=0,n.length=0}function a(g){t.push(g)}function l(g){n.push(g)}function c(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:l}}function zm(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new Xl(i),e.set(r,[c])):a>=l.length?(c=new Xl(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vm=`uniform sampler2D shadow_pass;
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
}`;function Gm(i,e,t){let n=new gc;const r=new Ft,a=new Ft,l=new Ht,c=new mf({depthPacking:wu}),d=new gf,p={},g=t.maxTextureSize,v={[fi]:on,[on]:fi,[jn]:jn},_=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Hm,fragmentShader:Vm}),f=_.clone();f.defines.HORIZONTAL_PASS=1;const A=new Ui;A.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new In(A,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let m=this.type;this.render=function(F,B,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const P=i.getRenderTarget(),w=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),te=i.state;te.setBlending(ci),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Q=m!==qn&&this.type===qn,ue=m===qn&&this.type!==qn;for(let de=0,ce=F.length;de<ce;de++){const oe=F[de],se=oe.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;r.copy(se.mapSize);const xe=se.getFrameExtents();if(r.multiply(xe),a.copy(se.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(a.x=Math.floor(g/xe.x),r.x=a.x*xe.x,se.mapSize.x=a.x),r.y>g&&(a.y=Math.floor(g/xe.y),r.y=a.y*xe.y,se.mapSize.y=a.y)),se.map===null||Q===!0||ue===!0){const Fe=this.type!==qn?{minFilter:Tn,magFilter:Tn}:{};se.map!==null&&se.map.dispose(),se.map=new Di(r.x,r.y,Fe),se.map.texture.name=oe.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();const _e=se.getViewportCount();for(let Fe=0;Fe<_e;Fe++){const nt=se.getViewport(Fe);l.set(a.x*nt.x,a.y*nt.y,a.x*nt.z,a.y*nt.w),te.viewport(l),se.updateMatrices(oe,Fe),n=se.getFrustum(),D(B,j,se.camera,oe,this.type)}se.isPointLightShadow!==!0&&this.type===qn&&O(se,j),se.needsUpdate=!1}m=this.type,M.needsUpdate=!1,i.setRenderTarget(P,w,H)};function O(F,B){const j=e.update(R);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,f.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,f.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Di(r.x,r.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(B,null,j,_,R,null),f.uniforms.shadow_pass.value=F.mapPass.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(B,null,j,f,R,null)}function I(F,B,j,P){let w=null;const H=j.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)w=H;else if(w=j.isPointLight===!0?d:c,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const te=w.uuid,Q=B.uuid;let ue=p[te];ue===void 0&&(ue={},p[te]=ue);let de=ue[Q];de===void 0&&(de=w.clone(),ue[Q]=de,B.addEventListener("dispose",Y)),w=de}if(w.visible=B.visible,w.wireframe=B.wireframe,P===qn?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:v[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=i.properties.get(w);te.light=j}return w}function D(F,B,j,P,w){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===qn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),ue=F.material;if(Array.isArray(ue)){const de=Q.groups;for(let ce=0,oe=de.length;ce<oe;ce++){const se=de[ce],xe=ue[se.materialIndex];if(xe&&xe.visible){const _e=I(F,xe,P,w);F.onBeforeShadow(i,F,B,j,Q,_e,se),i.renderBufferDirect(j,null,Q,_e,F,se),F.onAfterShadow(i,F,B,j,Q,_e,se)}}}else if(ue.visible){const de=I(F,ue,P,w);F.onBeforeShadow(i,F,B,j,Q,de,null),i.renderBufferDirect(j,null,Q,de,F,null),F.onAfterShadow(i,F,B,j,Q,de,null)}}const te=F.children;for(let Q=0,ue=te.length;Q<ue;Q++)D(te[Q],B,j,P,w)}function Y(F){F.target.removeEventListener("dispose",Y);for(const j in p){const P=p[j],w=F.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const km={[Aa]:wa,[Ra]:La,[Ca]:Da,[rr]:Pa,[wa]:Aa,[La]:Ra,[Da]:Ca,[Pa]:rr};function Wm(i,e){function t(){let V=!1;const Re=new Ht;let ae=null;const pe=new Ht(0,0,0,0);return{setMask:function(Ue){ae!==Ue&&!V&&(i.colorMask(Ue,Ue,Ue,Ue),ae=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,De,st,qe,Yt){Yt===!0&&(Ue*=qe,De*=qe,st*=qe),Re.set(Ue,De,st,qe),pe.equals(Re)===!1&&(i.clearColor(Ue,De,st,qe),pe.copy(Re))},reset:function(){V=!1,ae=null,pe.set(-1,0,0,0)}}}function n(){let V=!1,Re=!1,ae=null,pe=null,Ue=null;return{setReversed:function(De){if(Re!==De){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const qe=Ue;Ue=null,this.setClear(qe)}Re=De},getReversed:function(){return Re},setTest:function(De){De?y(i.DEPTH_TEST):N(i.DEPTH_TEST)},setMask:function(De){ae!==De&&!V&&(i.depthMask(De),ae=De)},setFunc:function(De){if(Re&&(De=km[De]),pe!==De){switch(De){case Aa:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case La:i.depthFunc(i.GREATER);break;case Da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=De}},setLocked:function(De){V=De},setClear:function(De){Ue!==De&&(Re&&(De=1-De),i.clearDepth(De),Ue=De)},reset:function(){V=!1,ae=null,pe=null,Ue=null,Re=!1}}}function r(){let V=!1,Re=null,ae=null,pe=null,Ue=null,De=null,st=null,qe=null,Yt=null;return{setTest:function(Et){V||(Et?y(i.STENCIL_TEST):N(i.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!V&&(i.stencilMask(Et),Re=Et)},setFunc:function(Et,rn,sn){(ae!==Et||pe!==rn||Ue!==sn)&&(i.stencilFunc(Et,rn,sn),ae=Et,pe=rn,Ue=sn)},setOp:function(Et,rn,sn){(De!==Et||st!==rn||qe!==sn)&&(i.stencilOp(Et,rn,sn),De=Et,st=rn,qe=sn)},setLocked:function(Et){V=Et},setClear:function(Et){Yt!==Et&&(i.clearStencil(Et),Yt=Et)},reset:function(){V=!1,Re=null,ae=null,pe=null,Ue=null,De=null,st=null,qe=null,Yt=null}}}const a=new t,l=new n,c=new r,d=new WeakMap,p=new WeakMap;let g={},v={},_=new WeakMap,f=[],A=null,R=!1,M=null,m=null,O=null,I=null,D=null,Y=null,F=null,B=new It(0,0,0),j=0,P=!1,w=null,H=null,te=null,Q=null,ue=null;const de=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,oe=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(se)[1]),ce=oe>=1):se.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),ce=oe>=2);let xe=null,_e={};const Fe=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),We=new Ht().fromArray(Fe),ee=new Ht().fromArray(nt);function E(V,Re,ae,pe){const Ue=new Uint8Array(4),De=i.createTexture();i.bindTexture(V,De),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<ae;st++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Re+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return De}const h={};h[i.TEXTURE_2D]=E(i.TEXTURE_2D,i.TEXTURE_2D,1),h[i.TEXTURE_CUBE_MAP]=E(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),h[i.TEXTURE_2D_ARRAY]=E(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),h[i.TEXTURE_3D]=E(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),y(i.DEPTH_TEST),l.setFunc(rr),Qe(!1),et(Zo),y(i.CULL_FACE),U(ci);function y(V){g[V]!==!0&&(i.enable(V),g[V]=!0)}function N(V){g[V]!==!1&&(i.disable(V),g[V]=!1)}function W(V,Re){return v[V]!==Re?(i.bindFramebuffer(V,Re),v[V]=Re,V===i.DRAW_FRAMEBUFFER&&(v[i.FRAMEBUFFER]=Re),V===i.FRAMEBUFFER&&(v[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function ne(V,Re){let ae=f,pe=!1;if(V){ae=_.get(Re),ae===void 0&&(ae=[],_.set(Re,ae));const Ue=V.textures;if(ae.length!==Ue.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let De=0,st=Ue.length;De<st;De++)ae[De]=i.COLOR_ATTACHMENT0+De;ae.length=Ue.length,pe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ae)}function he(V){return A!==V?(i.useProgram(V),A=V,!0):!1}const Te={[Ai]:i.FUNC_ADD,[Qc]:i.FUNC_SUBTRACT,[eu]:i.FUNC_REVERSE_SUBTRACT};Te[tu]=i.MIN,Te[nu]=i.MAX;const Ye={[iu]:i.ZERO,[ru]:i.ONE,[su]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[cu]:i.DST_COLOR,[ou]:i.DST_ALPHA,[au]:i.ONE_MINUS_SRC_COLOR,[ba]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[du]:i.ONE_MINUS_CONSTANT_COLOR,[pu]:i.CONSTANT_ALPHA,[mu]:i.ONE_MINUS_CONSTANT_ALPHA};function U(V,Re,ae,pe,Ue,De,st,qe,Yt,Et){if(V===ci){R===!0&&(N(i.BLEND),R=!1);return}if(R===!1&&(y(i.BLEND),R=!0),V!==Jc){if(V!==M||Et!==P){if((m!==Ai||D!==Ai)&&(i.blendEquation(i.FUNC_ADD),m=Ai,D=Ai),Et)switch(V){case tr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFunc(i.ONE,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case tr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}O=null,I=null,Y=null,F=null,B.set(0,0,0),j=0,M=V,P=Et}return}Ue=Ue||Re,De=De||ae,st=st||pe,(Re!==m||Ue!==D)&&(i.blendEquationSeparate(Te[Re],Te[Ue]),m=Re,D=Ue),(ae!==O||pe!==I||De!==Y||st!==F)&&(i.blendFuncSeparate(Ye[ae],Ye[pe],Ye[De],Ye[st]),O=ae,I=pe,Y=De,F=st),(qe.equals(B)===!1||Yt!==j)&&(i.blendColor(qe.r,qe.g,qe.b,Yt),B.copy(qe),j=Yt),M=V,P=!1}function at(V,Re){V.side===jn?N(i.CULL_FACE):y(i.CULL_FACE);let ae=V.side===on;Re&&(ae=!ae),Qe(ae),V.blending===tr&&V.transparent===!1?U(ci):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),a.setMask(V.colorWrite);const pe=V.stencilWrite;c.setTest(pe),pe&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),yt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?y(i.SAMPLE_ALPHA_TO_COVERAGE):N(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(V){w!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),w=V)}function et(V){V!==$c?(y(i.CULL_FACE),V!==H&&(V===Zo?i.cullFace(i.BACK):V===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):N(i.CULL_FACE),H=V}function Pe(V){V!==te&&(ce&&i.lineWidth(V),te=V)}function yt(V,Re,ae){V?(y(i.POLYGON_OFFSET_FILL),(Q!==Re||ue!==ae)&&(i.polygonOffset(Re,ae),Q=Re,ue=ae)):N(i.POLYGON_OFFSET_FILL)}function He(V){V?y(i.SCISSOR_TEST):N(i.SCISSOR_TEST)}function L(V){V===void 0&&(V=i.TEXTURE0+de-1),xe!==V&&(i.activeTexture(V),xe=V)}function S(V,Re,ae){ae===void 0&&(xe===null?ae=i.TEXTURE0+de-1:ae=xe);let pe=_e[ae];pe===void 0&&(pe={type:void 0,texture:void 0},_e[ae]=pe),(pe.type!==V||pe.texture!==Re)&&(xe!==ae&&(i.activeTexture(ae),xe=ae),i.bindTexture(V,Re||h[V]),pe.type=V,pe.texture=Re)}function K(){const V=_e[xe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(V){We.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),We.copy(V))}function Le(V){ee.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),ee.copy(V))}function dt(V,Re){let ae=p.get(Re);ae===void 0&&(ae=new WeakMap,p.set(Re,ae));let pe=ae.get(V);pe===void 0&&(pe=i.getUniformBlockIndex(Re,V.name),ae.set(V,pe))}function ot(V,Re){const pe=p.get(Re).get(V);d.get(Re)!==pe&&(i.uniformBlockBinding(Re,pe,V.__bindingPointIndex),d.set(Re,pe))}function Lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),g={},xe=null,_e={},v={},_=new WeakMap,f=[],A=null,R=!1,M=null,m=null,O=null,I=null,D=null,Y=null,F=null,B=new It(0,0,0),j=0,P=!1,w=null,H=null,te=null,Q=null,ue=null,We.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:y,disable:N,bindFramebuffer:W,drawBuffers:ne,useProgram:he,setBlending:U,setMaterial:at,setFlipSided:Qe,setCullFace:et,setLineWidth:Pe,setPolygonOffset:yt,setScissorTest:He,activeTexture:L,bindTexture:S,unbindTexture:K,compressedTexImage2D:fe,compressedTexImage3D:me,texImage2D:Ge,texImage3D:Ze,updateUBOMapping:dt,uniformBlockBinding:ot,texStorage2D:mt,texStorage3D:ye,texSubImage2D:le,texSubImage3D:Xe,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Ve,scissor:it,viewport:Le,reset:Lt}}function Xm(i,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ft,g=new WeakMap;let v;const _=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(L,S){return f?new OffscreenCanvas(L,S):Rs("canvas")}function R(L,S,K){let fe=1;const me=He(L);if((me.width>K||me.height>K)&&(fe=K/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const le=Math.floor(fe*me.width),Xe=Math.floor(fe*me.height);v===void 0&&(v=A(le,Xe));const Ee=S?A(le,Xe):v;return Ee.width=le,Ee.height=Xe,Ee.getContext("2d").drawImage(L,0,0,le,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+le+"x"+Xe+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function M(L){return L.generateMipmaps}function m(L){i.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(L,S,K,fe,me=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le=S;if(S===i.RED&&(K===i.FLOAT&&(le=i.R32F),K===i.HALF_FLOAT&&(le=i.R16F),K===i.UNSIGNED_BYTE&&(le=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(le=i.R8UI),K===i.UNSIGNED_SHORT&&(le=i.R16UI),K===i.UNSIGNED_INT&&(le=i.R32UI),K===i.BYTE&&(le=i.R8I),K===i.SHORT&&(le=i.R16I),K===i.INT&&(le=i.R32I)),S===i.RG&&(K===i.FLOAT&&(le=i.RG32F),K===i.HALF_FLOAT&&(le=i.RG16F),K===i.UNSIGNED_BYTE&&(le=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(le=i.RG8UI),K===i.UNSIGNED_SHORT&&(le=i.RG16UI),K===i.UNSIGNED_INT&&(le=i.RG32UI),K===i.BYTE&&(le=i.RG8I),K===i.SHORT&&(le=i.RG16I),K===i.INT&&(le=i.RG32I)),S===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(le=i.RGB8UI),K===i.UNSIGNED_SHORT&&(le=i.RGB16UI),K===i.UNSIGNED_INT&&(le=i.RGB32UI),K===i.BYTE&&(le=i.RGB8I),K===i.SHORT&&(le=i.RGB16I),K===i.INT&&(le=i.RGB32I)),S===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),K===i.UNSIGNED_INT&&(le=i.RGBA32UI),K===i.BYTE&&(le=i.RGBA8I),K===i.SHORT&&(le=i.RGBA16I),K===i.INT&&(le=i.RGBA32I)),S===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),S===i.RGBA){const Xe=me?As:Rt.getTransfer(fe);K===i.FLOAT&&(le=i.RGBA32F),K===i.HALF_FLOAT&&(le=i.RGBA16F),K===i.UNSIGNED_BYTE&&(le=Xe===Ut?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function D(L,S){let K;return L?S===null||S===Li||S===or?K=i.DEPTH24_STENCIL8:S===$n?K=i.DEPTH32F_STENCIL8:S===Cr&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Li||S===or?K=i.DEPTH_COMPONENT24:S===$n?K=i.DEPTH_COMPONENT32F:S===Cr&&(K=i.DEPTH_COMPONENT16),K}function Y(L,S){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function F(L){const S=L.target;S.removeEventListener("dispose",F),j(S),S.isVideoTexture&&g.delete(S)}function B(L){const S=L.target;S.removeEventListener("dispose",B),w(S)}function j(L){const S=n.get(L);if(S.__webglInit===void 0)return;const K=L.source,fe=_.get(K);if(fe){const me=fe[S.__cacheKey];me.usedTimes--,me.usedTimes===0&&P(L),Object.keys(fe).length===0&&_.delete(K)}n.remove(L)}function P(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const K=L.source,fe=_.get(K);delete fe[S.__cacheKey],l.memory.textures--}function w(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(S.__webglFramebuffer[fe]))for(let me=0;me<S.__webglFramebuffer[fe].length;me++)i.deleteFramebuffer(S.__webglFramebuffer[fe][me]);else i.deleteFramebuffer(S.__webglFramebuffer[fe]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[fe])}else{if(Array.isArray(S.__webglFramebuffer))for(let fe=0;fe<S.__webglFramebuffer.length;fe++)i.deleteFramebuffer(S.__webglFramebuffer[fe]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let fe=0;fe<S.__webglColorRenderbuffer.length;fe++)S.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[fe]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=L.textures;for(let fe=0,me=K.length;fe<me;fe++){const le=n.get(K[fe]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),l.memory.textures--),n.remove(K[fe])}n.remove(L)}let H=0;function te(){H=0}function Q(){const L=H;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),H+=1,L}function ue(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function de(L,S){const K=n.get(L);if(L.isVideoTexture&&Pe(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(K,L,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function ce(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ee(K,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function oe(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ee(K,L,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function se(L,S){const K=n.get(L);if(L.version>0&&K.__version!==L.version){E(K,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}const xe={[Fa]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},_e={[Tn]:i.NEAREST,[bu]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},Fe={[Pu]:i.NEVER,[Nu]:i.ALWAYS,[Lu]:i.LESS,[sc]:i.LEQUAL,[Du]:i.EQUAL,[Fu]:i.GEQUAL,[Uu]:i.GREATER,[Iu]:i.NOTEQUAL};function nt(L,S){if(S.type===$n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===js||S.magFilter===Jr||S.magFilter===Ci||S.minFilter===Un||S.minFilter===js||S.minFilter===Jr||S.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,xe[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,xe[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,xe[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,_e[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==Jr&&S.minFilter!==Ci||S.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function We(L,S){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",F));const fe=S.source;let me=_.get(fe);me===void 0&&(me={},_.set(fe,me));const le=ue(S);if(le!==L.__cacheKey){me[le]===void 0&&(me[le]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,K=!0),me[le].usedTimes++;const Xe=me[L.__cacheKey];Xe!==void 0&&(me[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(S)),L.__cacheKey=le,L.__webglTexture=me[le].texture}return K}function ee(L,S,K){let fe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(fe=i.TEXTURE_3D);const me=We(L,S),le=S.source;t.bindTexture(fe,L.__webglTexture,i.TEXTURE0+K);const Xe=n.get(le);if(le.version!==Xe.__version||me===!0){t.activeTexture(i.TEXTURE0+K);const Ee=Rt.getPrimaries(Rt.workingColorSpace),Ve=S.colorSpace===li?null:Rt.getPrimaries(S.colorSpace),mt=S.colorSpace===li||Ee===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let ye=R(S.image,!1,r.maxTextureSize);ye=yt(S,ye);const Ge=a.convert(S.format,S.colorSpace),Ze=a.convert(S.type);let it=I(S.internalFormat,Ge,Ze,S.colorSpace,S.isVideoTexture);nt(fe,S);let Le;const dt=S.mipmaps,ot=S.isVideoTexture!==!0,Lt=Xe.__version===void 0||me===!0,V=le.dataReady,Re=Y(S,ye);if(S.isDepthTexture)it=D(S.format===lr,S.type),Lt&&(ot?t.texStorage2D(i.TEXTURE_2D,1,it,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,it,ye.width,ye.height,0,Ge,Ze,null));else if(S.isDataTexture)if(dt.length>0){ot&&Lt&&t.texStorage2D(i.TEXTURE_2D,Re,it,dt[0].width,dt[0].height);for(let ae=0,pe=dt.length;ae<pe;ae++)Le=dt[ae],ot?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Le.width,Le.height,Ge,Ze,Le.data):t.texImage2D(i.TEXTURE_2D,ae,it,Le.width,Le.height,0,Ge,Ze,Le.data);S.generateMipmaps=!1}else ot?(Lt&&t.texStorage2D(i.TEXTURE_2D,Re,it,ye.width,ye.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Ge,Ze,ye.data)):t.texImage2D(i.TEXTURE_2D,0,it,ye.width,ye.height,0,Ge,Ze,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ot&&Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,it,dt[0].width,dt[0].height,ye.depth);for(let ae=0,pe=dt.length;ae<pe;ae++)if(Le=dt[ae],S.format!==En)if(Ge!==null)if(ot){if(V)if(S.layerUpdates.size>0){const Ue=yl(Le.width,Le.height,S.format,S.type);for(const De of S.layerUpdates){const st=Le.data.subarray(De*Ue/Le.data.BYTES_PER_ELEMENT,(De+1)*Ue/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,De,Le.width,Le.height,1,Ge,st)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Le.width,Le.height,ye.depth,Ge,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,it,Le.width,Le.height,ye.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Le.width,Le.height,ye.depth,Ge,Ze,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,it,Le.width,Le.height,ye.depth,0,Ge,Ze,Le.data)}else{ot&&Lt&&t.texStorage2D(i.TEXTURE_2D,Re,it,dt[0].width,dt[0].height);for(let ae=0,pe=dt.length;ae<pe;ae++)Le=dt[ae],S.format!==En?Ge!==null?ot?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Le.width,Le.height,Ge,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,it,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Le.width,Le.height,Ge,Ze,Le.data):t.texImage2D(i.TEXTURE_2D,ae,it,Le.width,Le.height,0,Ge,Ze,Le.data)}else if(S.isDataArrayTexture)if(ot){if(Lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,it,ye.width,ye.height,ye.depth),V)if(S.layerUpdates.size>0){const ae=yl(ye.width,ye.height,S.format,S.type);for(const pe of S.layerUpdates){const Ue=ye.data.subarray(pe*ae/ye.data.BYTES_PER_ELEMENT,(pe+1)*ae/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,ye.width,ye.height,1,Ge,Ze,Ue)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ge,Ze,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,ye.width,ye.height,ye.depth,0,Ge,Ze,ye.data);else if(S.isData3DTexture)ot?(Lt&&t.texStorage3D(i.TEXTURE_3D,Re,it,ye.width,ye.height,ye.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ge,Ze,ye.data)):t.texImage3D(i.TEXTURE_3D,0,it,ye.width,ye.height,ye.depth,0,Ge,Ze,ye.data);else if(S.isFramebufferTexture){if(Lt)if(ot)t.texStorage2D(i.TEXTURE_2D,Re,it,ye.width,ye.height);else{let ae=ye.width,pe=ye.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,it,ae,pe,0,Ge,Ze,null),ae>>=1,pe>>=1}}else if(dt.length>0){if(ot&&Lt){const ae=He(dt[0]);t.texStorage2D(i.TEXTURE_2D,Re,it,ae.width,ae.height)}for(let ae=0,pe=dt.length;ae<pe;ae++)Le=dt[ae],ot?V&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ge,Ze,Le):t.texImage2D(i.TEXTURE_2D,ae,it,Ge,Ze,Le);S.generateMipmaps=!1}else if(ot){if(Lt){const ae=He(ye);t.texStorage2D(i.TEXTURE_2D,Re,it,ae.width,ae.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Ze,ye)}else t.texImage2D(i.TEXTURE_2D,0,it,Ge,Ze,ye);M(S)&&m(fe),Xe.__version=le.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function E(L,S,K){if(S.image.length!==6)return;const fe=We(L,S),me=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const le=n.get(me);if(me.version!==le.__version||fe===!0){t.activeTexture(i.TEXTURE0+K);const Xe=Rt.getPrimaries(Rt.workingColorSpace),Ee=S.colorSpace===li?null:Rt.getPrimaries(S.colorSpace),Ve=S.colorSpace===li||Xe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const mt=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,Ge=[];for(let pe=0;pe<6;pe++)!mt&&!ye?Ge[pe]=R(S.image[pe],!0,r.maxCubemapSize):Ge[pe]=ye?S.image[pe].image:S.image[pe],Ge[pe]=yt(S,Ge[pe]);const Ze=Ge[0],it=a.convert(S.format,S.colorSpace),Le=a.convert(S.type),dt=I(S.internalFormat,it,Le,S.colorSpace),ot=S.isVideoTexture!==!0,Lt=le.__version===void 0||fe===!0,V=me.dataReady;let Re=Y(S,Ze);nt(i.TEXTURE_CUBE_MAP,S);let ae;if(mt){ot&&Lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,dt,Ze.width,Ze.height);for(let pe=0;pe<6;pe++){ae=Ge[pe].mipmaps;for(let Ue=0;Ue<ae.length;Ue++){const De=ae[Ue];S.format!==En?it!==null?ot?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,De.width,De.height,it,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,dt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,De.width,De.height,it,Le,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,dt,De.width,De.height,0,it,Le,De.data)}}}else{if(ae=S.mipmaps,ot&&Lt){ae.length>0&&Re++;const pe=He(Ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,dt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ye){ot?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ge[pe].width,Ge[pe].height,it,Le,Ge[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,Ge[pe].width,Ge[pe].height,0,it,Le,Ge[pe].data);for(let Ue=0;Ue<ae.length;Ue++){const st=ae[Ue].image[pe].image;ot?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,st.width,st.height,it,Le,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,dt,st.width,st.height,0,it,Le,st.data)}}else{ot?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,it,Le,Ge[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,dt,it,Le,Ge[pe]);for(let Ue=0;Ue<ae.length;Ue++){const De=ae[Ue];ot?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,it,Le,De.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,dt,it,Le,De.image[pe])}}}M(S)&&m(i.TEXTURE_CUBE_MAP),le.__version=me.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function h(L,S,K,fe,me,le){const Xe=a.convert(K.format,K.colorSpace),Ee=a.convert(K.type),Ve=I(K.internalFormat,Xe,Ee,K.colorSpace),mt=n.get(S),ye=n.get(K);if(ye.__renderTarget=S,!mt.__hasExternalTextures){const Ge=Math.max(1,S.width>>le),Ze=Math.max(1,S.height>>le);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,le,Ve,Ge,Ze,S.depth,0,Xe,Ee,null):t.texImage2D(me,le,Ve,Ge,Ze,0,Xe,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),et(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,me,ye.__webglTexture,0,Qe(S)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,me,ye.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function y(L,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const fe=S.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,le=D(S.stencilBuffer,me),Xe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=Qe(S);et(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,le,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,le,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,le,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,L)}else{const fe=S.textures;for(let me=0;me<fe.length;me++){const le=fe[me],Xe=a.convert(le.format,le.colorSpace),Ee=a.convert(le.type),Ve=I(le.internalFormat,Xe,Ee,le.colorSpace),mt=Qe(S);K&&et(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Ve,S.width,S.height):et(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function N(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=n.get(S.depthTexture);fe.__renderTarget=S,(!fe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),de(S.depthTexture,0);const me=fe.__webglTexture,le=Qe(S);if(S.depthTexture.format===nr)et(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(S.depthTexture.format===lr)et(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function W(L){const S=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),fe){const me=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),S.__depthDisposeCallback=me}S.__boundDepthTexture=fe}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");N(S.__webglFramebuffer,L)}else if(K){S.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[fe]),S.__webglDepthbuffer[fe]===void 0)S.__webglDepthbuffer[fe]=i.createRenderbuffer(),y(S.__webglDepthbuffer[fe],L,!1);else{const me=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=S.__webglDepthbuffer[fe];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),y(S.__webglDepthbuffer,L,!1);else{const fe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(L,S,K){const fe=n.get(L);S!==void 0&&h(fe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&W(L)}function he(L){const S=L.texture,K=n.get(L),fe=n.get(S);L.addEventListener("dispose",B);const me=L.textures,le=L.isWebGLCubeRenderTarget===!0,Xe=me.length>1;if(Xe||(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=S.version,l.memory.textures++),le){K.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[Ee]=[];for(let Ve=0;Ve<S.mipmaps.length;Ve++)K.__webglFramebuffer[Ee][Ve]=i.createFramebuffer()}else K.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)K.__webglFramebuffer[Ee]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let Ee=0,Ve=me.length;Ee<Ve;Ee++){const mt=n.get(me[Ee]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),l.memory.textures++)}if(L.samples>0&&et(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ee=0;Ee<me.length;Ee++){const Ve=me[Ee];K.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Ee]);const mt=a.convert(Ve.format,Ve.colorSpace),ye=a.convert(Ve.type),Ge=I(Ve.internalFormat,mt,ye,Ve.colorSpace,L.isXRRenderTarget===!0),Ze=Qe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Ge,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,K.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),y(K.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),nt(i.TEXTURE_CUBE_MAP,S);for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)h(K.__webglFramebuffer[Ee][Ve],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ve);else h(K.__webglFramebuffer[Ee],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);M(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ee=0,Ve=me.length;Ee<Ve;Ee++){const mt=me[Ee],ye=n.get(mt);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),nt(i.TEXTURE_2D,mt),h(K.__webglFramebuffer,L,mt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),M(mt)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,fe.__webglTexture),nt(Ee,S),S.mipmaps&&S.mipmaps.length>0)for(let Ve=0;Ve<S.mipmaps.length;Ve++)h(K.__webglFramebuffer[Ve],L,S,i.COLOR_ATTACHMENT0,Ee,Ve);else h(K.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,Ee,0);M(S)&&m(Ee),t.unbindTexture()}L.depthBuffer&&W(L)}function Te(L){const S=L.textures;for(let K=0,fe=S.length;K<fe;K++){const me=S[K];if(M(me)){const le=O(L),Xe=n.get(me).__webglTexture;t.bindTexture(le,Xe),m(le),t.unbindTexture()}}}const Ye=[],U=[];function at(L){if(L.samples>0){if(et(L)===!1){const S=L.textures,K=L.width,fe=L.height;let me=i.COLOR_BUFFER_BIT;const le=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=n.get(L),Ee=S.length>1;if(Ee)for(let Ve=0;Ve<S.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ve=0;Ve<S.length;Ve++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ve]);const mt=n.get(S[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,K,fe,0,0,K,fe,me,i.NEAREST),d===!0&&(Ye.length=0,U.length=0,Ye.push(i.COLOR_ATTACHMENT0+Ve),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ye.push(le),U.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ve=0;Ve<S.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ve]);const mt=n.get(S[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Qe(L){return Math.min(r.maxSamples,L.samples)}function et(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(L){const S=l.render.frame;g.get(L)!==S&&(g.set(L,S),L.update())}function yt(L,S){const K=L.colorSpace,fe=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==cr&&K!==li&&(Rt.getTransfer(K)===Ut?(fe!==En||me!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=te,this.setTexture2D=de,this.setTexture2DArray=ce,this.setTexture3D=oe,this.setTextureCube=se,this.rebindTextures=ne,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=h,this.useMultisampledRTT=et}function Ym(i,e){function t(n,r=li){let a;const l=Rt.getTransfer(r);if(n===Jn)return i.UNSIGNED_BYTE;if(n===mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return i.BYTE;if(n===Kl)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===po)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Pr)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===En)return i.RGBA;if(n===ec)return i.LUMINANCE;if(n===tc)return i.LUMINANCE_ALPHA;if(n===nr)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===nc)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===ic)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===xo)return i.RGBA_INTEGER;if(n===Ms||n===ys||n===Ss||n===Es)if(l===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ms)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ms)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ss)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===Ha)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Oa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===ka)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Va||n===Ga)return l===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ka)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===Ya||n===qa||n===ja||n===$a||n===Ka||n===Za||n===Ja||n===Qa||n===eo||n===to||n===no||n===io)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Wa)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return l===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===ro||n===so)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ts)return l===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===ao||n===oo||n===lo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ts)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ao)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const qm={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){l=!0;for(const R of e.hand.values()){const M=t.getJointPose(R,n),m=this._getHandJoint(p,R);M!==null&&(m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=M.radius),m.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),f=.02,A=.005;p.inputState.pinching&&_>f+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=f-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`;class Km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ln,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hi({vertexShader:jm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zm extends fr{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",d=1,p=null,g=null,v=null,_=null,f=null,A=null;const R=new Km,M=t.getContextAttributes();let m=null,O=null;const I=[],D=[],Y=new Ft;let F=null;const B=new _n;B.viewport=new Ht;const j=new _n;j.viewport=new Ht;const P=[B,j],w=new vf;let H=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let E=I[ee];return E===void 0&&(E=new Ea,I[ee]=E),E.getTargetRaySpace()},this.getControllerGrip=function(ee){let E=I[ee];return E===void 0&&(E=new Ea,I[ee]=E),E.getGripSpace()},this.getHand=function(ee){let E=I[ee];return E===void 0&&(E=new Ea,I[ee]=E),E.getHandSpace()};function Q(ee){const E=D.indexOf(ee.inputSource);if(E===-1)return;const h=I[E];h!==void 0&&(h.update(ee.inputSource,ee.frame,p||l),h.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ue(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",ue),r.removeEventListener("inputsourceschange",de);for(let ee=0;ee<I.length;ee++){const E=D[ee];E!==null&&(D[ee]=null,I[ee].disconnect(E))}H=null,te=null,R.reset(),e.setRenderTarget(m),f=null,_=null,v=null,r=null,O=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(Y.width,Y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){c=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||l},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return _!==null?_:f},this.getBinding=function(){return v},this.getFrame=function(){return A},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",ue),r.addEventListener("inputsourceschange",de),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Y),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let h=null,y=null,N=null;M.depth&&(N=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,h=M.stencil?lr:nr,y=M.stencil?or:Li);const W={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:a};v=new XRWebGLBinding(r,t),_=v.createProjectionLayer(W),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new Di(_.textureWidth,_.textureHeight,{format:En,type:Jn,depthTexture:new _c(_.textureWidth,_.textureHeight,y,void 0,void 0,void 0,void 0,void 0,void 0,h),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const h={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,h),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),O=new Di(f.framebufferWidth,f.framebufferHeight,{format:En,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}O.isXRRenderTarget=!0,this.setFoveation(d),p=null,l=await r.requestReferenceSpace(c),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function de(ee){for(let E=0;E<ee.removed.length;E++){const h=ee.removed[E],y=D.indexOf(h);y>=0&&(D[y]=null,I[y].disconnect(h))}for(let E=0;E<ee.added.length;E++){const h=ee.added[E];let y=D.indexOf(h);if(y===-1){for(let W=0;W<I.length;W++)if(W>=D.length){D.push(h),y=W;break}else if(D[W]===null){D[W]=h,y=W;break}if(y===-1)break}const N=I[y];N&&N.connect(h)}}const ce=new ie,oe=new ie;function se(ee,E,h){ce.setFromMatrixPosition(E.matrixWorld),oe.setFromMatrixPosition(h.matrixWorld);const y=ce.distanceTo(oe),N=E.projectionMatrix.elements,W=h.projectionMatrix.elements,ne=N[14]/(N[10]-1),he=N[14]/(N[10]+1),Te=(N[9]+1)/N[5],Ye=(N[9]-1)/N[5],U=(N[8]-1)/N[0],at=(W[8]+1)/W[0],Qe=ne*U,et=ne*at,Pe=y/(-U+at),yt=Pe*-U;if(E.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(yt),ee.translateZ(Pe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),N[10]===-1)ee.projectionMatrix.copy(E.projectionMatrix),ee.projectionMatrixInverse.copy(E.projectionMatrixInverse);else{const He=ne+Pe,L=he+Pe,S=Qe-yt,K=et+(y-yt),fe=Te*he/L*He,me=Ye*he/L*He;ee.projectionMatrix.makePerspective(S,K,fe,me,He,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function xe(ee,E){E===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(E.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let E=ee.near,h=ee.far;R.texture!==null&&(R.depthNear>0&&(E=R.depthNear),R.depthFar>0&&(h=R.depthFar)),w.near=j.near=B.near=E,w.far=j.far=B.far=h,(H!==w.near||te!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),H=w.near,te=w.far),B.layers.mask=ee.layers.mask|2,j.layers.mask=ee.layers.mask|4,w.layers.mask=B.layers.mask|j.layers.mask;const y=ee.parent,N=w.cameras;xe(w,y);for(let W=0;W<N.length;W++)xe(N[W],y);N.length===2?se(w,B,j):w.projectionMatrix.copy(B.projectionMatrix),_e(ee,w,y)};function _e(ee,E,h){h===null?ee.matrix.copy(E.matrixWorld):(ee.matrix.copy(h.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(E.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(E.projectionMatrix),ee.projectionMatrixInverse.copy(E.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=co*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&f===null))return d},this.setFoveation=function(ee){d=ee,_!==null&&(_.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let Fe=null;function nt(ee,E){if(g=E.getViewerPose(p||l),A=E,g!==null){const h=g.views;f!==null&&(e.setRenderTargetFramebuffer(O,f.framebuffer),e.setRenderTarget(O));let y=!1;h.length!==w.cameras.length&&(w.cameras.length=0,y=!0);for(let W=0;W<h.length;W++){const ne=h[W];let he=null;if(f!==null)he=f.getViewport(ne);else{const Ye=v.getViewSubImage(_,ne);he=Ye.viewport,W===0&&(e.setRenderTargetTextures(O,Ye.colorTexture,_.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(O))}let Te=P[W];Te===void 0&&(Te=new _n,Te.layers.enable(W),Te.viewport=new Ht,P[W]=Te),Te.matrix.fromArray(ne.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(ne.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(he.x,he.y,he.width,he.height),W===0&&(w.matrix.copy(Te.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),y===!0&&w.cameras.push(Te)}const N=r.enabledFeatures;if(N&&N.includes("depth-sensing")){const W=v.getDepthInformation(h[0]);W&&W.isValid&&W.texture&&R.init(e,W,r.renderState)}}for(let h=0;h<I.length;h++){const y=D[h],N=I[h];y!==null&&N!==void 0&&N.update(y,E,p||l)}Fe&&Fe(ee,E),E.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:E}),A=null}const We=new vc;We.setAnimationLoop(nt),this.setAnimationLoop=function(ee){Fe=ee},this.dispose=function(){}}}const Ei=new Qn,Jm=new Gt;function Qm(i,e){function t(M,m){M.matrixAutoUpdate===!0&&M.updateMatrix(),m.value.copy(M.matrix)}function n(M,m){m.color.getRGB(M.fogColor.value,dc(i)),m.isFog?(M.fogNear.value=m.near,M.fogFar.value=m.far):m.isFogExp2&&(M.fogDensity.value=m.density)}function r(M,m,O,I,D){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(M,m):m.isMeshToonMaterial?(a(M,m),v(M,m)):m.isMeshPhongMaterial?(a(M,m),g(M,m)):m.isMeshStandardMaterial?(a(M,m),_(M,m),m.isMeshPhysicalMaterial&&f(M,m,D)):m.isMeshMatcapMaterial?(a(M,m),A(M,m)):m.isMeshDepthMaterial?a(M,m):m.isMeshDistanceMaterial?(a(M,m),R(M,m)):m.isMeshNormalMaterial?a(M,m):m.isLineBasicMaterial?(l(M,m),m.isLineDashedMaterial&&c(M,m)):m.isPointsMaterial?d(M,m,O,I):m.isSpriteMaterial?p(M,m):m.isShadowMaterial?(M.color.value.copy(m.color),M.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(M,m){M.opacity.value=m.opacity,m.color&&M.diffuse.value.copy(m.color),m.emissive&&M.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(M.map.value=m.map,t(m.map,M.mapTransform)),m.alphaMap&&(M.alphaMap.value=m.alphaMap,t(m.alphaMap,M.alphaMapTransform)),m.bumpMap&&(M.bumpMap.value=m.bumpMap,t(m.bumpMap,M.bumpMapTransform),M.bumpScale.value=m.bumpScale,m.side===on&&(M.bumpScale.value*=-1)),m.normalMap&&(M.normalMap.value=m.normalMap,t(m.normalMap,M.normalMapTransform),M.normalScale.value.copy(m.normalScale),m.side===on&&M.normalScale.value.negate()),m.displacementMap&&(M.displacementMap.value=m.displacementMap,t(m.displacementMap,M.displacementMapTransform),M.displacementScale.value=m.displacementScale,M.displacementBias.value=m.displacementBias),m.emissiveMap&&(M.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,M.emissiveMapTransform)),m.specularMap&&(M.specularMap.value=m.specularMap,t(m.specularMap,M.specularMapTransform)),m.alphaTest>0&&(M.alphaTest.value=m.alphaTest);const O=e.get(m),I=O.envMap,D=O.envMapRotation;I&&(M.envMap.value=I,Ei.copy(D),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),M.envMapRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Ei)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=m.reflectivity,M.ior.value=m.ior,M.refractionRatio.value=m.refractionRatio),m.lightMap&&(M.lightMap.value=m.lightMap,M.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,M.lightMapTransform)),m.aoMap&&(M.aoMap.value=m.aoMap,M.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,M.aoMapTransform))}function l(M,m){M.diffuse.value.copy(m.color),M.opacity.value=m.opacity,m.map&&(M.map.value=m.map,t(m.map,M.mapTransform))}function c(M,m){M.dashSize.value=m.dashSize,M.totalSize.value=m.dashSize+m.gapSize,M.scale.value=m.scale}function d(M,m,O,I){M.diffuse.value.copy(m.color),M.opacity.value=m.opacity,M.size.value=m.size*O,M.scale.value=I*.5,m.map&&(M.map.value=m.map,t(m.map,M.uvTransform)),m.alphaMap&&(M.alphaMap.value=m.alphaMap,t(m.alphaMap,M.alphaMapTransform)),m.alphaTest>0&&(M.alphaTest.value=m.alphaTest)}function p(M,m){M.diffuse.value.copy(m.color),M.opacity.value=m.opacity,M.rotation.value=m.rotation,m.map&&(M.map.value=m.map,t(m.map,M.mapTransform)),m.alphaMap&&(M.alphaMap.value=m.alphaMap,t(m.alphaMap,M.alphaMapTransform)),m.alphaTest>0&&(M.alphaTest.value=m.alphaTest)}function g(M,m){M.specular.value.copy(m.specular),M.shininess.value=Math.max(m.shininess,1e-4)}function v(M,m){m.gradientMap&&(M.gradientMap.value=m.gradientMap)}function _(M,m){M.metalness.value=m.metalness,m.metalnessMap&&(M.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,M.metalnessMapTransform)),M.roughness.value=m.roughness,m.roughnessMap&&(M.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,M.roughnessMapTransform)),m.envMap&&(M.envMapIntensity.value=m.envMapIntensity)}function f(M,m,O){M.ior.value=m.ior,m.sheen>0&&(M.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),M.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(M.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,M.sheenColorMapTransform)),m.sheenRoughnessMap&&(M.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,M.sheenRoughnessMapTransform))),m.clearcoat>0&&(M.clearcoat.value=m.clearcoat,M.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(M.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,M.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(M.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&M.clearcoatNormalScale.value.negate())),m.dispersion>0&&(M.dispersion.value=m.dispersion),m.iridescence>0&&(M.iridescence.value=m.iridescence,M.iridescenceIOR.value=m.iridescenceIOR,M.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(M.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,M.iridescenceMapTransform)),m.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),m.transmission>0&&(M.transmission.value=m.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),m.transmissionMap&&(M.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,M.transmissionMapTransform)),M.thickness.value=m.thickness,m.thicknessMap&&(M.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=m.attenuationDistance,M.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(M.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(M.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=m.specularIntensity,M.specularColor.value.copy(m.specularColor),m.specularColorMap&&(M.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,M.specularColorMapTransform)),m.specularIntensityMap&&(M.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,m){m.matcap&&(M.matcap.value=m.matcap)}function R(M,m){const O=e.get(m).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eg(i,e,t,n){let r={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(O,I){const D=I.program;n.uniformBlockBinding(O,D)}function p(O,I){let D=r[O.id];D===void 0&&(A(O),D=g(O),r[O.id]=D,O.addEventListener("dispose",M));const Y=I.program;n.updateUBOMapping(O,Y);const F=e.render.frame;a[O.id]!==F&&(_(O),a[O.id]=F)}function g(O){const I=v();O.__bindingPointIndex=I;const D=i.createBuffer(),Y=O.__size,F=O.usage;return i.bindBuffer(i.UNIFORM_BUFFER,D),i.bufferData(i.UNIFORM_BUFFER,Y,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,D),D}function v(){for(let O=0;O<c;O++)if(l.indexOf(O)===-1)return l.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const I=r[O.id],D=O.uniforms,Y=O.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let F=0,B=D.length;F<B;F++){const j=Array.isArray(D[F])?D[F]:[D[F]];for(let P=0,w=j.length;P<w;P++){const H=j[P];if(f(H,F,P,Y)===!0){const te=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let de=0;de<Q.length;de++){const ce=Q[de],oe=R(ce);typeof ce=="number"||typeof ce=="boolean"?(H.__data[0]=ce,i.bufferSubData(i.UNIFORM_BUFFER,te+ue,H.__data)):ce.isMatrix3?(H.__data[0]=ce.elements[0],H.__data[1]=ce.elements[1],H.__data[2]=ce.elements[2],H.__data[3]=0,H.__data[4]=ce.elements[3],H.__data[5]=ce.elements[4],H.__data[6]=ce.elements[5],H.__data[7]=0,H.__data[8]=ce.elements[6],H.__data[9]=ce.elements[7],H.__data[10]=ce.elements[8],H.__data[11]=0):(ce.toArray(H.__data,ue),ue+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(O,I,D,Y){const F=O.value,B=I+"_"+D;if(Y[B]===void 0)return typeof F=="number"||typeof F=="boolean"?Y[B]=F:Y[B]=F.clone(),!0;{const j=Y[B];if(typeof F=="number"||typeof F=="boolean"){if(j!==F)return Y[B]=F,!0}else if(j.equals(F)===!1)return j.copy(F),!0}return!1}function A(O){const I=O.uniforms;let D=0;const Y=16;for(let B=0,j=I.length;B<j;B++){const P=Array.isArray(I[B])?I[B]:[I[B]];for(let w=0,H=P.length;w<H;w++){const te=P[w],Q=Array.isArray(te.value)?te.value:[te.value];for(let ue=0,de=Q.length;ue<de;ue++){const ce=Q[ue],oe=R(ce),se=D%Y,xe=se%oe.boundary,_e=se+xe;D+=xe,_e!==0&&Y-_e<oe.storage&&(D+=Y-_e),te.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=D,D+=oe.storage}}}const F=D%Y;return F>0&&(D+=Y-F),O.__size=D,O.__cache={},this}function R(O){const I={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(I.boundary=4,I.storage=4):O.isVector2?(I.boundary=8,I.storage=8):O.isVector3||O.isColor?(I.boundary=16,I.storage=12):O.isVector4?(I.boundary=16,I.storage=16):O.isMatrix3?(I.boundary=48,I.storage=48):O.isMatrix4?(I.boundary=64,I.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),I}function M(O){const I=O.target;I.removeEventListener("dispose",M);const D=l.indexOf(I.__bindingPointIndex);l.splice(D,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete a[I.id]}function m(){for(const O in r)i.deleteBuffer(r[O]);l=[],r={},a={}}return{bind:d,update:p,dispose:m}}class tg{constructor(e={}){const{canvas:t=Bu(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=l;const A=new Uint32Array(4),R=new Int32Array(4);let M=null,m=null;const O=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=ui,this.toneMappingExposure=1;const D=this;let Y=!1,F=0,B=0,j=null,P=-1,w=null;const H=new Ht,te=new Ht;let Q=null;const ue=new It(0);let de=0,ce=t.width,oe=t.height,se=1,xe=null,_e=null;const Fe=new Ht(0,0,ce,oe),nt=new Ht(0,0,ce,oe);let We=!1;const ee=new gc;let E=!1,h=!1;this.transmissionResolutionScale=1;const y=new Gt,N=new Gt,W=new ie,ne=new Ht,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function Ye(){return j===null?se:1}let U=n;function at(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",De,!1),U===null){const k="webgl2";if(U=at(k,T),U===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Qe,et,Pe,yt,He,L,S,K,fe,me,le,Xe,Ee,Ve,mt,ye,Ge,Ze,it,Le,dt,ot,Lt,V;function Re(){Qe=new up(U),Qe.init(),ot=new Ym(U,Qe),et=new rp(U,Qe,e,ot),Pe=new Wm(U,Qe),et.reverseDepthBuffer&&_&&Pe.buffers.depth.setReversed(!0),yt=new dp(U),He=new Lm,L=new Xm(U,Qe,Pe,He,et,ot,yt),S=new ap(D),K=new cp(D),fe=new Mf(U),Lt=new np(U,fe),me=new fp(U,fe,yt,Lt),le=new mp(U,me,fe,yt),it=new pp(U,et,L),ye=new sp(He),Xe=new Pm(D,S,K,Qe,et,Lt,ye),Ee=new Qm(D,He),Ve=new Um,mt=new zm(Qe),Ze=new tp(D,S,K,Pe,le,f,d),Ge=new Gm(D,le,et),V=new eg(U,yt,et,Pe),Le=new ip(U,Qe,yt),dt=new hp(U,Qe,yt),yt.programs=Xe.programs,D.capabilities=et,D.extensions=Qe,D.properties=He,D.renderLists=Ve,D.shadowMap=Ge,D.state=Pe,D.info=yt}Re();const ae=new Zm(D,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(ce,oe,!1))},this.getSize=function(T){return T.set(ce,oe)},this.setSize=function(T,k,Z=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=T,oe=k,t.width=Math.floor(T*se),t.height=Math.floor(k*se),Z===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(ce*se,oe*se).floor()},this.setDrawingBufferSize=function(T,k,Z){ce=T,oe=k,se=Z,t.width=Math.floor(T*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(Fe)},this.setViewport=function(T,k,Z,J){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,k,Z,J),Pe.viewport(H.copy(Fe).multiplyScalar(se).round())},this.getScissor=function(T){return T.copy(nt)},this.setScissor=function(T,k,Z,J){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,k,Z,J),Pe.scissor(te.copy(nt).multiplyScalar(se).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){Pe.setScissorTest(We=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){_e=T},this.getClearColor=function(T){return T.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(T=!0,k=!0,Z=!0){let J=0;if(T){let X=!1;if(j!==null){const ve=j.texture.format;X=ve===xo||ve===vo||ve===_o}if(X){const ve=j.texture.type,Ae=ve===Jn||ve===Li||ve===Cr||ve===or||ve===mo||ve===go,Oe=Ze.getClearColor(),ke=Ze.getClearAlpha(),rt=Oe.r,tt=Oe.g,$e=Oe.b;Ae?(A[0]=rt,A[1]=tt,A[2]=$e,A[3]=ke,U.clearBufferuiv(U.COLOR,0,A)):(R[0]=rt,R[1]=tt,R[2]=$e,R[3]=ke,U.clearBufferiv(U.COLOR,0,R))}else J|=U.COLOR_BUFFER_BIT}k&&(J|=U.DEPTH_BUFFER_BIT),Z&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ze.dispose(),Ve.dispose(),mt.dispose(),He.dispose(),S.dispose(),K.dispose(),le.dispose(),Lt.dispose(),V.dispose(),Xe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ir),ae.removeEventListener("sessionend",ei),bn.stop()};function pe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const T=yt.autoReset,k=Ge.enabled,Z=Ge.autoUpdate,J=Ge.needsUpdate,X=Ge.type;Re(),yt.autoReset=T,Ge.enabled=k,Ge.autoUpdate=Z,Ge.needsUpdate=J,Ge.type=X}function De(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const k=T.target;k.removeEventListener("dispose",st),qe(k)}function qe(T){Yt(T),He.remove(T)}function Yt(T){const k=He.get(T).programs;k!==void 0&&(k.forEach(function(Z){Xe.releaseProgram(Z)}),T.isShaderMaterial&&Xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Z,J,X,ve){k===null&&(k=he);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,Oe=Fi(T,k,Z,J,X);Pe.setMaterial(J,Ae);let ke=Z.index,rt=1;if(J.wireframe===!0){if(ke=me.getWireframeAttribute(Z),ke===void 0)return;rt=2}const tt=Z.drawRange,$e=Z.attributes.position;let ut=tt.start*rt,gt=(tt.start+tt.count)*rt;ve!==null&&(ut=Math.max(ut,ve.start*rt),gt=Math.min(gt,(ve.start+ve.count)*rt)),ke!==null?(ut=Math.max(ut,0),gt=Math.min(gt,ke.count)):$e!=null&&(ut=Math.max(ut,0),gt=Math.min(gt,$e.count));const Ot=gt-ut;if(Ot<0||Ot===1/0)return;Lt.setup(X,J,Oe,Z,ke);let Dt,lt=Le;if(ke!==null&&(Dt=fe.get(ke),lt=dt,lt.setIndex(Dt)),X.isMesh)J.wireframe===!0?(Pe.setLineWidth(J.wireframeLinewidth*Ye()),lt.setMode(U.LINES)):lt.setMode(U.TRIANGLES);else if(X.isLine){let Je=J.linewidth;Je===void 0&&(Je=1),Pe.setLineWidth(Je*Ye()),X.isLineSegments?lt.setMode(U.LINES):X.isLineLoop?lt.setMode(U.LINE_LOOP):lt.setMode(U.LINE_STRIP)}else X.isPoints?lt.setMode(U.POINTS):X.isSprite&&lt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)lt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))lt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Je=X._multiDrawStarts,zt=X._multiDrawCounts,Tt=X._multiDrawCount,Bt=ke?fe.get(ke).bytesPerElement:1,cn=He.get(J).currentProgram.getUniforms();for(let Ke=0;Ke<Tt;Ke++)cn.setValue(U,"_gl_DrawID",Ke),lt.render(Je[Ke]/Bt,zt[Ke])}else if(X.isInstancedMesh)lt.renderInstances(ut,Ot,X.count);else if(Z.isInstancedBufferGeometry){const Je=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,zt=Math.min(Z.instanceCount,Je);lt.renderInstances(ut,Ot,zt)}else lt.render(ut,Ot)};function Et(T,k,Z){T.transparent===!0&&T.side===jn&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,Nn(T,k,Z),T.side=fi,T.needsUpdate=!0,Nn(T,k,Z),T.side=jn):Nn(T,k,Z)}this.compile=function(T,k,Z=null){Z===null&&(Z=T),m=mt.get(Z),m.init(k),I.push(m),Z.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),T!==Z&&T.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights();const J=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ve=X.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Oe=ve[Ae];Et(Oe,Z,X),J.add(Oe)}else Et(ve,Z,X),J.add(ve)}),I.pop(),m=null,J},this.compileAsync=function(T,k,Z=null){const J=this.compile(T,k,Z);return new Promise(X=>{function ve(){if(J.forEach(function(Ae){He.get(Ae).currentProgram.isReady()&&J.delete(Ae)}),J.size===0){X(T);return}setTimeout(ve,10)}Qe.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let rn=null;function sn(T){rn&&rn(T)}function Ir(){bn.stop()}function ei(){bn.start()}const bn=new vc;bn.setAnimationLoop(sn),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(T){rn=T,ae.setAnimationLoop(T),T===null?bn.stop():bn.start()},ae.addEventListener("sessionstart",Ir),ae.addEventListener("sessionend",ei),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(k),k=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,k,j),m=mt.get(T,I.length),m.init(k),I.push(m),N.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee.setFromProjectionMatrix(N),h=this.localClippingEnabled,E=ye.init(this.clippingPlanes,h),M=Ve.get(T,O.length),M.init(),O.push(M),ae.enabled===!0&&ae.isPresenting===!0){const ve=D.xr.getDepthSensingMesh();ve!==null&&Ie(ve,k,-1/0,D.sortObjects)}Ie(T,k,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(xe,_e),Te=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Te&&Ze.addToRenderList(M,T),this.info.render.frame++,E===!0&&ye.beginShadows();const Z=m.state.shadowsArray;Ge.render(Z,T,k),E===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=M.opaque,X=M.transmissive;if(m.setupLights(),k.isArrayCamera){const ve=k.cameras;if(X.length>0)for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++){const ke=ve[Ae];An(J,X,T,ke)}Te&&Ze.render(T);for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++){const ke=ve[Ae];Ii(M,T,ke,ke.viewport)}}else X.length>0&&An(J,X,T,k),Te&&Ze.render(T),Ii(M,T,k);j!==null&&B===0&&(L.updateMultisampleRenderTarget(j),L.updateRenderTargetMipmap(j)),T.isScene===!0&&T.onAfterRender(D,T,k),Lt.resetDefaultState(),P=-1,w=null,I.pop(),I.length>0?(m=I[I.length-1],E===!0&&ye.setGlobalState(D.clippingPlanes,m.state.camera)):m=null,O.pop(),O.length>0?M=O[O.length-1]:M=null};function Ie(T,k,Z,J){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ee.intersectsSprite(T)){J&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(N);const Ae=le.update(T),Oe=T.material;Oe.visible&&M.push(T,Ae,Oe,Z,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ee.intersectsObject(T))){const Ae=le.update(T),Oe=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ne.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ne.copy(Ae.boundingSphere.center)),ne.applyMatrix4(T.matrixWorld).applyMatrix4(N)),Array.isArray(Oe)){const ke=Ae.groups;for(let rt=0,tt=ke.length;rt<tt;rt++){const $e=ke[rt],ut=Oe[$e.materialIndex];ut&&ut.visible&&M.push(T,Ae,ut,Z,ne.z,$e)}}else Oe.visible&&M.push(T,Ae,Oe,Z,ne.z,null)}}const ve=T.children;for(let Ae=0,Oe=ve.length;Ae<Oe;Ae++)Ie(ve[Ae],k,Z,J)}function Ii(T,k,Z,J){const X=T.opaque,ve=T.transmissive,Ae=T.transparent;m.setupLightsView(Z),E===!0&&ye.setGlobalState(D.clippingPlanes,Z),J&&Pe.viewport(H.copy(J)),X.length>0&&di(X,k,Z),ve.length>0&&di(ve,k,Z),Ae.length>0&&di(Ae,k,Z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function An(T,k,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Di(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Pr:Jn,minFilter:Ci,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const ve=m.state.transmissionRenderTarget[J.id],Ae=J.viewport||H;ve.setSize(Ae.z*D.transmissionResolutionScale,Ae.w*D.transmissionResolutionScale);const Oe=D.getRenderTarget();D.setRenderTarget(ve),D.getClearColor(ue),de=D.getClearAlpha(),de<1&&D.setClearColor(16777215,.5),D.clear(),Te&&Ze.render(Z);const ke=D.toneMapping;D.toneMapping=ui;const rt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),E===!0&&ye.setGlobalState(D.clippingPlanes,J),di(T,Z,J),L.updateMultisampleRenderTarget(ve),L.updateRenderTargetMipmap(ve),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let $e=0,ut=k.length;$e<ut;$e++){const gt=k[$e],Ot=gt.object,Dt=gt.geometry,lt=gt.material,Je=gt.group;if(lt.side===jn&&Ot.layers.test(J.layers)){const zt=lt.side;lt.side=on,lt.needsUpdate=!0,pr(Ot,Z,J,Dt,lt,Je),lt.side=zt,lt.needsUpdate=!0,tt=!0}}tt===!0&&(L.updateMultisampleRenderTarget(ve),L.updateRenderTargetMipmap(ve))}D.setRenderTarget(Oe),D.setClearColor(ue,de),rt!==void 0&&(J.viewport=rt),D.toneMapping=ke}function di(T,k,Z){const J=k.isScene===!0?k.overrideMaterial:null;for(let X=0,ve=T.length;X<ve;X++){const Ae=T[X],Oe=Ae.object,ke=Ae.geometry,rt=J===null?Ae.material:J,tt=Ae.group;Oe.layers.test(Z.layers)&&pr(Oe,k,Z,ke,rt,tt)}}function pr(T,k,Z,J,X,ve){T.onBeforeRender(D,k,Z,J,X,ve),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(D,k,Z,J,T,ve),X.transparent===!0&&X.side===jn&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,D.renderBufferDirect(Z,k,J,X,T,ve),X.side=fi,X.needsUpdate=!0,D.renderBufferDirect(Z,k,J,X,T,ve),X.side=jn):D.renderBufferDirect(Z,k,J,X,T,ve),T.onAfterRender(D,k,Z,J,X,ve)}function Nn(T,k,Z){k.isScene!==!0&&(k=he);const J=He.get(T),X=m.state.lights,ve=m.state.shadowsArray,Ae=X.state.version,Oe=Xe.getParameters(T,X.state,ve,k,Z),ke=Xe.getProgramCacheKey(Oe);let rt=J.programs;J.environment=T.isMeshStandardMaterial?k.environment:null,J.fog=k.fog,J.envMap=(T.isMeshStandardMaterial?K:S).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,rt===void 0&&(T.addEventListener("dispose",st),rt=new Map,J.programs=rt);let tt=rt.get(ke);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Ae)return gr(T,Oe),tt}else Oe.uniforms=Xe.getUniforms(T),T.onBeforeCompile(Oe,D),tt=Xe.acquireProgram(Oe,ke),rt.set(ke,tt),J.uniforms=Oe.uniforms;const $e=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=ye.uniform),gr(T,Oe),J.needsLights=Fs(T),J.lightsStateVersion=Ae,J.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function mr(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=bs.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function gr(T,k){const Z=He.get(T);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Fi(T,k,Z,J,X){k.isScene!==!0&&(k=he),L.resetTextureUnits();const ve=k.fog,Ae=J.isMeshStandardMaterial?k.environment:null,Oe=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:cr,ke=(J.isMeshStandardMaterial?K:S).get(J.envMap||Ae),rt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!Z.morphAttributes.position,ut=!!Z.morphAttributes.normal,gt=!!Z.morphAttributes.color;let Ot=ui;J.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=D.toneMapping);const Dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,lt=Dt!==void 0?Dt.length:0,Je=He.get(J),zt=m.state.lights;if(E===!0&&(h===!0||T!==w)){const qt=T===w&&J.id===P;ye.setState(J,T,qt)}let Tt=!1;J.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==zt.state.version||Je.outputColorSpace!==Oe||X.isBatchedMesh&&Je.batching===!1||!X.isBatchedMesh&&Je.batching===!0||X.isBatchedMesh&&Je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Je.instancing===!1||!X.isInstancedMesh&&Je.instancing===!0||X.isSkinnedMesh&&Je.skinning===!1||!X.isSkinnedMesh&&Je.skinning===!0||X.isInstancedMesh&&Je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Je.instancingMorph===!1&&X.morphTexture!==null||Je.envMap!==ke||J.fog===!0&&Je.fog!==ve||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ye.numPlanes||Je.numIntersection!==ye.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==tt||Je.morphTargets!==$e||Je.morphNormals!==ut||Je.morphColors!==gt||Je.toneMapping!==Ot||Je.morphTargetsCount!==lt)&&(Tt=!0):(Tt=!0,Je.__version=J.version);let Bt=Je.currentProgram;Tt===!0&&(Bt=Nn(J,k,X));let cn=!1,Ke=!1,Kt=!1;const xt=Bt.getUniforms(),en=Je.uniforms;if(Pe.useProgram(Bt.program)&&(cn=!0,Ke=!0,Kt=!0),J.id!==P&&(P=J.id,Ke=!0),cn||w!==T){Pe.buffers.depth.getReversed()?(y.copy(T.projectionMatrix),Hu(y),Vu(y),xt.setValue(U,"projectionMatrix",y)):xt.setValue(U,"projectionMatrix",T.projectionMatrix),xt.setValue(U,"viewMatrix",T.matrixWorldInverse);const pt=xt.map.cameraPosition;pt!==void 0&&pt.setValue(U,W.setFromMatrixPosition(T.matrixWorld)),et.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&xt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,Ke=!0,Kt=!0)}if(X.isSkinnedMesh){xt.setOptional(U,X,"bindMatrix"),xt.setOptional(U,X,"bindMatrixInverse");const qt=X.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),xt.setValue(U,"boneTexture",qt.boneTexture,L))}X.isBatchedMesh&&(xt.setOptional(U,X,"batchingTexture"),xt.setValue(U,"batchingTexture",X._matricesTexture,L),xt.setOptional(U,X,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",X._indirectTexture,L),xt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",X._colorsTexture,L));const tn=Z.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&it.update(X,Z,Bt),(Ke||Je.receiveShadow!==X.receiveShadow)&&(Je.receiveShadow=X.receiveShadow,xt.setValue(U,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(en.envMap.value=ke,en.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),Ke&&(xt.setValue(U,"toneMappingExposure",D.toneMappingExposure),Je.needsLights&&Fr(en,Kt),ve&&J.fog===!0&&Ee.refreshFogUniforms(en,ve),Ee.refreshMaterialUniforms(en,J,se,oe,m.state.transmissionRenderTarget[T.id]),bs.upload(U,mr(Je),en,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(bs.upload(U,mr(Je),en,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&xt.setValue(U,"center",X.center),xt.setValue(U,"modelViewMatrix",X.modelViewMatrix),xt.setValue(U,"normalMatrix",X.normalMatrix),xt.setValue(U,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const qt=J.uniformsGroups;for(let pt=0,On=qt.length;pt<On;pt++){const vn=qt[pt];V.update(vn,Bt),V.bind(vn,Bt)}}return Bt}function Fr(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Fs(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,k,Z){He.get(T.texture).__webglTexture=k,He.get(T.depthTexture).__webglTexture=Z;const J=He.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||Qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const Z=He.get(T);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};const wn=U.createFramebuffer();this.setRenderTarget=function(T,k=0,Z=0){j=T,F=k,B=Z;let J=!0,X=null,ve=!1,Ae=!1;if(T){const ke=He.get(T);if(ke.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(U.FRAMEBUFFER,null),J=!1;else if(ke.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if(ke.__hasExternalTextures)L.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(ke.__boundDepthTexture!==$e){if($e!==null&&He.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const rt=T.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ae=!0);const tt=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[k])?X=tt[k][Z]:X=tt[k],ve=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?X=He.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[Z]:X=tt,H.copy(T.viewport),te.copy(T.scissor),Q=T.scissorTest}else H.copy(Fe).multiplyScalar(se).floor(),te.copy(nt).multiplyScalar(se).floor(),Q=We;if(Z!==0&&(X=wn),Pe.bindFramebuffer(U.FRAMEBUFFER,X)&&J&&Pe.drawBuffers(T,X),Pe.viewport(H),Pe.scissor(te),Pe.setScissorTest(Q),ve){const ke=He.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,ke.__webglTexture,Z)}else if(Ae){const ke=He.get(T.texture),rt=k;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.__webglTexture,Z,rt)}else if(T!==null&&Z!==0){const ke=He.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ke.__webglTexture,Z)}P=-1},this.readRenderTargetPixels=function(T,k,Z,J,X,ve,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){Pe.bindFramebuffer(U.FRAMEBUFFER,Oe);try{const ke=T.texture,rt=ke.format,tt=ke.type;if(!et.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-J&&Z>=0&&Z<=T.height-X&&U.readPixels(k,Z,J,X,ot.convert(rt),ot.convert(tt),ve)}finally{const ke=j!==null?He.get(j).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,k,Z,J,X,ve,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Oe=Oe[Ae]),Oe){const ke=T.texture,rt=ke.format,tt=ke.type;if(!et.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-J&&Z>=0&&Z<=T.height-X){Pe.bindFramebuffer(U.FRAMEBUFFER,Oe);const $e=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.bufferData(U.PIXEL_PACK_BUFFER,ve.byteLength,U.STREAM_READ),U.readPixels(k,Z,J,X,ot.convert(rt),ot.convert(tt),0);const ut=j!==null?He.get(j).__webglFramebuffer:null;Pe.bindFramebuffer(U.FRAMEBUFFER,ut);const gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zu(U,gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,$e),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ve),U.deleteBuffer($e),U.deleteSync(gt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,Z=0){T.isTexture!==!0&&(Qi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const J=Math.pow(2,-Z),X=Math.floor(T.image.width*J),ve=Math.floor(T.image.height*J),Ae=k!==null?k.x:0,Oe=k!==null?k.y:0;L.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Ae,Oe,X,ve),Pe.unbindTexture()};const Nr=U.createFramebuffer(),Ns=U.createFramebuffer();this.copyTextureToTexture=function(T,k,Z=null,J=null,X=0,ve=null){T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,T=arguments[1],k=arguments[2],ve=arguments[3]||0,Z=null),ve===null&&(X!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=X,X=0):ve=0);let Ae,Oe,ke,rt,tt,$e,ut,gt,Ot;const Dt=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(Z!==null)Ae=Z.max.x-Z.min.x,Oe=Z.max.y-Z.min.y,ke=Z.isBox3?Z.max.z-Z.min.z:1,rt=Z.min.x,tt=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{const tn=Math.pow(2,-X);Ae=Math.floor(Dt.width*tn),Oe=Math.floor(Dt.height*tn),T.isDataArrayTexture?ke=Dt.depth:T.isData3DTexture?ke=Math.floor(Dt.depth*tn):ke=1,rt=0,tt=0,$e=0}J!==null?(ut=J.x,gt=J.y,Ot=J.z):(ut=0,gt=0,Ot=0);const lt=ot.convert(k.format),Je=ot.convert(k.type);let zt;k.isData3DTexture?(L.setTexture3D(k,0),zt=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),zt=U.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),zt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const Tt=U.getParameter(U.UNPACK_ROW_LENGTH),Bt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),cn=U.getParameter(U.UNPACK_SKIP_PIXELS),Ke=U.getParameter(U.UNPACK_SKIP_ROWS),Kt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Dt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,tt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,$e);const xt=T.isDataArrayTexture||T.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const tn=He.get(T),qt=He.get(k),pt=He.get(tn.__renderTarget),On=He.get(qt.__renderTarget);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,pt.__webglFramebuffer),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let vn=0;vn<ke;vn++)xt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.get(T).__webglTexture,X,$e+vn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.get(k).__webglTexture,ve,Ot+vn)),U.blitFramebuffer(rt,tt,Ae,Oe,ut,gt,Ae,Oe,U.DEPTH_BUFFER_BIT,U.NEAREST);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||He.has(T)){const tn=He.get(T),qt=He.get(k);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,Nr),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ns);for(let pt=0;pt<ke;pt++)xt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tn.__webglTexture,X,$e+pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tn.__webglTexture,X),en?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,ve,Ot+pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,qt.__webglTexture,ve),X!==0?U.blitFramebuffer(rt,tt,Ae,Oe,ut,gt,Ae,Oe,U.COLOR_BUFFER_BIT,U.NEAREST):en?U.copyTexSubImage3D(zt,ve,ut,gt,Ot+pt,rt,tt,Ae,Oe):U.copyTexSubImage2D(zt,ve,ut,gt,rt,tt,Ae,Oe);Pe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else en?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(zt,ve,ut,gt,Ot,Ae,Oe,ke,lt,Je,Dt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(zt,ve,ut,gt,Ot,Ae,Oe,ke,lt,Dt.data):U.texSubImage3D(zt,ve,ut,gt,Ot,Ae,Oe,ke,lt,Je,Dt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ve,ut,gt,Ae,Oe,lt,Je,Dt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ve,ut,gt,Dt.width,Dt.height,lt,Dt.data):U.texSubImage2D(U.TEXTURE_2D,ve,ut,gt,Ae,Oe,lt,Je,Dt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Tt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Bt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Kt),ve===0&&k.generateMipmaps&&U.generateMipmap(zt),Pe.unbindTexture()},this.copyTextureToTexture3D=function(T,k,Z=null,J=null,X=0){return T.isTexture!==!0&&(Qi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,T=arguments[2],k=arguments[3],X=arguments[4]||0),Qi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,Z,J,X)},this.initRenderTarget=function(T){He.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){F=0,B=0,j=null,Pe.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}var ng=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ec={exports:{}};(function(i,e){(function(n,r){i.exports=r()})(ng,()=>(()=>{var t=[,(l,c,d)=>{d.r(c),d.d(c,{default:()=>g});var p=(()=>{var v=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return function(_={}){var f=_,A,R;f.ready=new Promise((s,o)=>{A=s,R=o});function M(){function s(z){const $=x;u=o=0,x=new Map,$.forEach(re=>{try{re(z)}catch(q){console.error(q)}}),this.ob(),b&&b.Tb()}let o=0,u=0,x=new Map,b=null,C=null;this.requestAnimationFrame=function(z){o||(o=requestAnimationFrame(s.bind(this)));const $=++u;return x.set($,z),$},this.cancelAnimationFrame=function(z){x.delete(z),o&&x.size==0&&(cancelAnimationFrame(o),o=0)},this.Rb=function(z){C&&(document.body.remove(C),C=null),z||(C=document.createElement("div"),C.style.backgroundColor="black",C.style.position="fixed",C.style.right=0,C.style.top=0,C.style.color="white",C.style.padding="4px",C.innerHTML="RIVE FPS",z=function($){C.innerHTML="RIVE FPS "+$.toFixed(1)},document.body.appendChild(C)),b=new function(){let $=0,re=0;this.Tb=function(){var q=performance.now();re?(++$,q-=re,1e3<q&&(z(1e3*$/q),$=re=0)):(re=q,$=0)}}},this.Ob=function(){C&&(document.body.remove(C),C=null),b=null},this.ob=function(){}}function m(s){console.assert(!0);const o=new Map;let u=-1/0;this.push=function(x){return x=x+((1<<s)-1)>>s,o.has(x)&&clearTimeout(o.get(x)),o.set(x,setTimeout(function(){o.delete(x),o.length==0?u=-1/0:x==u&&(u=Math.max(...o.keys()),console.assert(u<x))},1e3)),u=Math.max(x,u),u<<s}}const O=f.onRuntimeInitialized;f.onRuntimeInitialized=function(){O&&O();let s=f.decodeAudio;f.decodeAudio=function(b,C){b=s(b),C(b)};let o=f.decodeFont;f.decodeFont=function(b,C){b=o(b),C(b)};const u=f.FileAssetLoader;f.ptrToAsset=b=>{let C=f.ptrToFileAsset(b);return C.isImage?f.ptrToImageAsset(b):C.isFont?f.ptrToFontAsset(b):C.isAudio?f.ptrToAudioAsset(b):C},f.CustomFileAssetLoader=u.extend("CustomFileAssetLoader",{__construct:function({loadContents:b}){this.__parent.__construct.call(this),this.Gb=b},loadContents:function(b,C){return b=f.ptrToAsset(b),this.Gb(b,C)}}),f.CDNFileAssetLoader=u.extend("CDNFileAssetLoader",{__construct:function(){this.__parent.__construct.call(this)},loadContents:function(b){let C=f.ptrToAsset(b);return b=C.cdnUuid,b===""?!1:(function(z,$){var re=new XMLHttpRequest;re.responseType="arraybuffer",re.onreadystatechange=function(){re.readyState==4&&re.status==200&&$(re)},re.open("GET",z,!0),re.send(null)}(C.cdnBaseUrl+"/"+b,z=>{C.decode(new Uint8Array(z.response))}),!0)}}),f.FallbackFileAssetLoader=u.extend("FallbackFileAssetLoader",{__construct:function(){this.__parent.__construct.call(this),this.kb=[]},addLoader:function(b){this.kb.push(b)},loadContents:function(b,C){for(let z of this.kb)if(z.loadContents(b,C))return!0;return!1}});let x=f.computeAlignment;f.computeAlignment=function(b,C,z,$,re=1){return x.call(this,b,C,z,$,re)}};const I="createConicGradient createImageData createLinearGradient createPattern createRadialGradient getContextAttributes getImageData getLineDash getTransform isContextLost isPointInPath isPointInStroke measureText".split(" "),D=new function(){function s(){if(!o){let Ct=function(Ne,wt,Nt){if(wt=we.createShader(wt),we.shaderSource(wt,Nt),we.compileShader(wt),Nt=we.getShaderInfoLog(wt),0<(Nt||"").length)throw Nt;we.attachShader(Ne,wt)};var je=Ct,G=document.createElement("canvas"),Me={alpha:1,depth:0,stencil:0,antialias:0,premultipliedAlpha:1,preserveDrawingBuffer:0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:0,enableExtensionsByDefault:1,explicitSwapControl:1,renderViaOffscreenBackBuffer:1};let we;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){if(we=G.getContext("webgl",Me),u=1,!we)return console.log("No WebGL support. Image mesh will not be drawn."),!1}else if(we=G.getContext("webgl2",Me))u=2;else if(we=G.getContext("webgl",Me))u=1;else return console.log("No WebGL support. Image mesh will not be drawn."),!1;if(we=new Proxy(we,{get(Ne,wt){if(Ne.isContextLost()){if(re||(console.error("Cannot render the mesh because the GL Context was lost. Tried to invoke ",wt),re=!0),typeof Ne[wt]=="function")return function(){}}else return typeof Ne[wt]=="function"?function(...Nt){return Ne[wt].apply(Ne,Nt)}:Ne[wt]},set(Ne,wt,Nt){if(Ne.isContextLost())re||(console.error("Cannot render the mesh because the GL Context was lost. Tried to set property "+wt),re=!0);else return Ne[wt]=Nt,!0}}),x=Math.min(we.getParameter(we.MAX_RENDERBUFFER_SIZE),we.getParameter(we.MAX_TEXTURE_SIZE)),G=we.createProgram(),Ct(G,we.VERTEX_SHADER,`attribute vec2 vertex;
                attribute vec2 uv;
                uniform vec4 mat;
                uniform vec2 translate;
                varying vec2 st;
                void main() {
                    st = uv;
                    gl_Position = vec4(mat2(mat) * vertex + translate, 0, 1);
                }`),Ct(G,we.FRAGMENT_SHADER,`precision highp float;
                uniform sampler2D image;
                varying vec2 st;
                void main() {
                    gl_FragColor = texture2D(image, st);
                }`),we.bindAttribLocation(G,0,"vertex"),we.bindAttribLocation(G,1,"uv"),we.linkProgram(G),Me=we.getProgramInfoLog(G),0<(Me||"").trim().length)throw Me;b=we.getUniformLocation(G,"mat"),C=we.getUniformLocation(G,"translate"),we.useProgram(G),we.bindBuffer(we.ARRAY_BUFFER,we.createBuffer()),we.enableVertexAttribArray(0),we.enableVertexAttribArray(1),we.bindBuffer(we.ELEMENT_ARRAY_BUFFER,we.createBuffer()),we.uniform1i(we.getUniformLocation(G,"image"),0),we.pixelStorei(we.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),o=we}return!0}let o=null,u=0,x=0,b=null,C=null,z=0,$=0,re=!1;s(),this.hc=function(){return s(),x},this.Mb=function(G){o.deleteTexture&&o.deleteTexture(G)},this.Lb=function(G){if(!s())return null;const Me=o.createTexture();return Me?(o.bindTexture(o.TEXTURE_2D,Me),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,G),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.LINEAR),u==2?(o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR_MIPMAP_LINEAR),o.generateMipmap(o.TEXTURE_2D)):o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),Me):null};const q=new m(8),Se=new m(8),be=new m(10),Be=new m(10);this.Qb=function(G,Me,je,we,Ct){if(s()){var Ne=q.push(G),wt=Se.push(Me);if(o.canvas){(o.canvas.width!=Ne||o.canvas.height!=wt)&&(o.canvas.width=Ne,o.canvas.height=wt),o.viewport(0,wt-Me,G,Me),o.disable(o.SCISSOR_TEST),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT),o.enable(o.SCISSOR_TEST),je.sort((St,Pn)=>Pn.wb-St.wb),Ne=be.push(we),z!=Ne&&(o.bufferData(o.ARRAY_BUFFER,8*Ne,o.DYNAMIC_DRAW),z=Ne),Ne=0;for(var Nt of je)o.bufferSubData(o.ARRAY_BUFFER,Ne,Nt.Ta),Ne+=4*Nt.Ta.length;console.assert(Ne==4*we);for(var Cn of je)o.bufferSubData(o.ARRAY_BUFFER,Ne,Cn.Db),Ne+=4*Cn.Db.length;console.assert(Ne==8*we),Ne=Be.push(Ct),$!=Ne&&(o.bufferData(o.ELEMENT_ARRAY_BUFFER,2*Ne,o.DYNAMIC_DRAW),$=Ne),Nt=0;for(var mi of je)o.bufferSubData(o.ELEMENT_ARRAY_BUFFER,Nt,mi.indices),Nt+=2*mi.indices.length;console.assert(Nt==2*Ct),mi=0,Cn=!0,Ne=Nt=0;for(const St of je){St.image.Ka!=mi&&(o.bindTexture(o.TEXTURE_2D,St.image.Ja||null),mi=St.image.Ka),St.mc?(o.scissor(St.Ya,wt-St.Za-St.jb,St.Ac,St.jb),Cn=!0):Cn&&(o.scissor(0,wt-Me,G,Me),Cn=!1),je=2/G;const Pn=-2/Me;o.uniform4f(b,St.ha[0]*je*St.Ba,St.ha[1]*Pn*St.Ca,St.ha[2]*je*St.Ba,St.ha[3]*Pn*St.Ca),o.uniform2f(C,St.ha[4]*je*St.Ba+je*(St.Ya-St.ic*St.Ba)-1,St.ha[5]*Pn*St.Ca+Pn*(St.Za-St.jc*St.Ca)+1),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,Ne),o.vertexAttribPointer(1,2,o.FLOAT,!1,0,Ne+4*we),o.drawElements(o.TRIANGLES,St.indices.length,o.UNSIGNED_SHORT,Nt),Ne+=4*St.Ta.length,Nt+=2*St.indices.length}console.assert(Ne==4*we),console.assert(Nt==2*Ct)}}},this.canvas=function(){return s()&&o.canvas}},Y=f.onRuntimeInitialized;f.onRuntimeInitialized=function(){function s(ge){switch(ge){case q.srcOver:return"source-over";case q.screen:return"screen";case q.overlay:return"overlay";case q.darken:return"darken";case q.lighten:return"lighten";case q.colorDodge:return"color-dodge";case q.colorBurn:return"color-burn";case q.hardLight:return"hard-light";case q.softLight:return"soft-light";case q.difference:return"difference";case q.exclusion:return"exclusion";case q.multiply:return"multiply";case q.hue:return"hue";case q.saturation:return"saturation";case q.color:return"color";case q.luminosity:return"luminosity"}}function o(ge){return"rgba("+((16711680&ge)>>>16)+","+((65280&ge)>>>8)+","+((255&ge)>>>0)+","+((4278190080&ge)>>>24)/255+")"}function u(){0<wt.length&&(D.Qb(Ne.drawWidth(),Ne.drawHeight(),wt,Nt,Cn),wt=[],Cn=Nt=0,Ne.reset(512,512));for(const ge of Ct){for(const ze of ge.H)ze();ge.H=[]}Ct.clear()}Y&&Y();var x=f.RenderPaintStyle;const b=f.RenderPath,C=f.RenderPaint,z=f.Renderer,$=f.StrokeCap,re=f.StrokeJoin,q=f.BlendMode,Se=x.fill,be=x.stroke,Be=f.FillRule.evenOdd;let G=1;var Me=f.RenderImage.extend("CanvasRenderImage",{__construct:function({la:ge,xa:ze}={}){this.__parent.__construct.call(this),this.Ka=G,G=G+1&2147483647||1,this.la=ge,this.xa=ze},__destruct:function(){this.Ja&&(D.Mb(this.Ja),URL.revokeObjectURL(this.Wa)),this.__parent.__destruct.call(this)},decode:function(ge){var ze=this;ze.xa&&ze.xa(ze);var _t=new Image;ze.Wa=URL.createObjectURL(new Blob([ge],{type:"image/png"})),_t.onload=function(){ze.Fb=_t,ze.Ja=D.Lb(_t),ze.size(_t.width,_t.height),ze.la&&ze.la(ze)},_t.src=ze.Wa}}),je=b.extend("CanvasRenderPath",{__construct:function(){this.__parent.__construct.call(this),this.T=new Path2D},rewind:function(){this.T=new Path2D},addPath:function(ge,ze,_t,vt,ct,bt,At){var Pt=this.T,pn=Pt.addPath;ge=ge.T;const kt=new DOMMatrix;kt.a=ze,kt.b=_t,kt.c=vt,kt.d=ct,kt.e=bt,kt.f=At,pn.call(Pt,ge,kt)},fillRule:function(ge){this.Va=ge},moveTo:function(ge,ze){this.T.moveTo(ge,ze)},lineTo:function(ge,ze){this.T.lineTo(ge,ze)},cubicTo:function(ge,ze,_t,vt,ct,bt){this.T.bezierCurveTo(ge,ze,_t,vt,ct,bt)},close:function(){this.T.closePath()}}),we=C.extend("CanvasRenderPaint",{color:function(ge){this.Xa=o(ge)},thickness:function(ge){this.Ib=ge},join:function(ge){switch(ge){case re.miter:this.Ia="miter";break;case re.round:this.Ia="round";break;case re.bevel:this.Ia="bevel"}},cap:function(ge){switch(ge){case $.butt:this.Ha="butt";break;case $.round:this.Ha="round";break;case $.square:this.Ha="square"}},style:function(ge){this.Hb=ge},blendMode:function(ge){this.Eb=s(ge)},clearGradient:function(){this.ja=null},linearGradient:function(ge,ze,_t,vt){this.ja={yb:ge,zb:ze,bb:_t,cb:vt,Ra:[]}},radialGradient:function(ge,ze,_t,vt){this.ja={yb:ge,zb:ze,bb:_t,cb:vt,Ra:[],ec:!0}},addStop:function(ge,ze){this.ja.Ra.push({color:ge,stop:ze})},completeGradient:function(){},draw:function(ge,ze,_t){let vt=this.Hb;var ct=this.Xa,bt=this.ja;if(ge.globalCompositeOperation=this.Eb,bt!=null){ct=bt.yb;var At=bt.zb;const pn=bt.bb;var Pt=bt.cb;const kt=bt.Ra;bt.ec?(bt=pn-ct,Pt-=At,ct=ge.createRadialGradient(ct,At,0,ct,At,Math.sqrt(bt*bt+Pt*Pt))):ct=ge.createLinearGradient(ct,At,pn,Pt);for(let Ln=0,jt=kt.length;Ln<jt;Ln++)At=kt[Ln],ct.addColorStop(At.stop,o(At.color));this.Xa=ct,this.ja=null}switch(vt){case be:ge.strokeStyle=ct,ge.lineWidth=this.Ib,ge.lineCap=this.Ha,ge.lineJoin=this.Ia,ge.stroke(ze);break;case Se:ge.fillStyle=ct,ge.fill(ze,_t)}}});const Ct=new Set;let Ne=null,wt=[],Nt=0,Cn=0;var mi=f.CanvasRenderer=z.extend("Renderer",{__construct:function(ge){this.__parent.__construct.call(this),this.S=[1,0,0,1,0,0],this.C=ge.getContext("2d"),this.Ua=ge,this.H=[]},save:function(){this.S.push(...this.S.slice(this.S.length-6)),this.H.push(this.C.save.bind(this.C))},restore:function(){const ge=this.S.length-6;if(6>ge)throw"restore() called without matching save().";this.S.splice(ge),this.H.push(this.C.restore.bind(this.C))},transform:function(ge,ze,_t,vt,ct,bt){const At=this.S,Pt=At.length-6;At.splice(Pt,6,At[Pt]*ge+At[Pt+2]*ze,At[Pt+1]*ge+At[Pt+3]*ze,At[Pt]*_t+At[Pt+2]*vt,At[Pt+1]*_t+At[Pt+3]*vt,At[Pt]*ct+At[Pt+2]*bt+At[Pt+4],At[Pt+1]*ct+At[Pt+3]*bt+At[Pt+5]),this.H.push(this.C.transform.bind(this.C,ge,ze,_t,vt,ct,bt))},rotate:function(ge){const ze=Math.sin(ge);ge=Math.cos(ge),this.transform(ge,ze,-ze,ge,0,0)},_drawPath:function(ge,ze){this.H.push(ze.draw.bind(ze,this.C,ge.T,ge.Va===Be?"evenodd":"nonzero"))},_drawRiveImage:function(ge,ze,_t){var vt=ge.Fb;if(vt){var ct=this.C,bt=s(ze);this.H.push(function(){ct.globalCompositeOperation=bt,ct.globalAlpha=_t,ct.drawImage(vt,0,0),ct.globalAlpha=1})}},_getMatrix:function(ge){const ze=this.S,_t=ze.length-6;for(let vt=0;6>vt;++vt)ge[vt]=ze[_t+vt]},_drawImageMesh:function(ge,ze,_t,vt,ct,bt,At,Pt,pn,kt){var Ln=this.C.canvas.width,jt=this.C.canvas.height;const Yo=pn-At,qo=kt-Pt;At=Math.max(At,0),Pt=Math.max(Pt,0),pn=Math.min(pn,Ln),kt=Math.min(kt,jt);const yr=pn-At,Sr=kt-Pt;if(console.assert(yr<=Math.min(Yo,Ln)),console.assert(Sr<=Math.min(qo,jt)),!(0>=yr||0>=Sr)){pn=yr<Yo||Sr<qo,Ln=kt=1;var gi=Math.ceil(yr*kt),_i=Math.ceil(Sr*Ln);jt=D.hc(),gi>jt&&(kt*=jt/gi,gi=jt),_i>jt&&(Ln*=jt/_i,_i=jt),Ne||(Ne=new f.DynamicRectanizer(jt),Ne.reset(512,512)),jt=Ne.addRect(gi,_i),0>jt&&(u(),Ct.add(this),jt=Ne.addRect(gi,_i),console.assert(0<=jt));var jo=jt&65535,$o=jt>>16;wt.push({ha:this.S.slice(this.S.length-6),image:ge,Ya:jo,Za:$o,ic:At,jc:Pt,Ac:gi,jb:_i,Ba:kt,Ca:Ln,Ta:new Float32Array(vt),Db:new Float32Array(ct),indices:new Uint16Array(bt),mc:pn,wb:ge.Ka<<1|(pn?1:0)}),Nt+=vt.length,Cn+=bt.length;var Bi=this.C,jc=s(ze);this.H.push(function(){Bi.save(),Bi.resetTransform(),Bi.globalCompositeOperation=jc,Bi.globalAlpha=_t;const Ko=D.canvas();Ko&&Bi.drawImage(Ko,jo,$o,gi,_i,At,Pt,yr,Sr),Bi.restore()})}},_clipPath:function(ge){this.H.push(this.C.clip.bind(this.C,ge.T,ge.Va===Be?"evenodd":"nonzero"))},clear:function(){Ct.add(this),this.H.push(this.C.clearRect.bind(this.C,0,0,this.Ua.width,this.Ua.height))},flush:function(){},translate:function(ge,ze){this.transform(1,0,0,1,ge,ze)}});f.makeRenderer=function(ge){const ze=new mi(ge),_t=ze.C;return new Proxy(ze,{get(vt,ct){if(typeof vt[ct]=="function")return function(...bt){return vt[ct].apply(vt,bt)};if(typeof _t[ct]=="function"){if(-1<I.indexOf(ct))throw Error("RiveException: Method call to '"+ct+"()' is not allowed, as the renderer cannot immediately pass through the return                 values of any canvas 2d context methods.");return function(...bt){ze.H.push(_t[ct].bind(_t,...bt))}}return vt[ct]},set(vt,ct,bt){if(ct in _t)return ze.H.push(()=>{_t[ct]=bt}),!0}})},f.decodeImage=function(ge,ze){new Me({la:ze}).decode(ge)},f.renderFactory={makeRenderPaint:function(){return new we},makeRenderPath:function(){return new je},makeRenderImage:function(){let ge=Pn;return new Me({xa:()=>{ge.total++},la:()=>{if(ge.loaded++,ge.loaded===ge.total){const ze=ge.ready;ze&&(ze(),ge.ready=null)}}})}};let St=f.load,Pn=null;f.load=function(ge,ze,_t=!0){const vt=new f.FallbackFileAssetLoader;return ze!==void 0&&vt.addLoader(ze),_t&&(ze=new f.CDNFileAssetLoader,vt.addLoader(ze)),new Promise(function(ct){let bt=null;Pn={total:0,loaded:0,ready:function(){ct(bt)}},bt=St(ge,vt),Pn.total==0&&ct(bt)})};let qc=f.RendererWrapper.prototype.align;f.RendererWrapper.prototype.align=function(ge,ze,_t,vt,ct=1){qc.call(this,ge,ze,_t,vt,ct)},x=new M,f.requestAnimationFrame=x.requestAnimationFrame.bind(x),f.cancelAnimationFrame=x.cancelAnimationFrame.bind(x),f.enableFPSCounter=x.Rb.bind(x),f.disableFPSCounter=x.Ob,x.ob=u,f.resolveAnimationFrame=u,f.cleanup=function(){Ne&&Ne.delete()}};var F=Object.assign({},f),B="./this.program",j=typeof window=="object",P=typeof importScripts=="function",w="",H,te;(j||P)&&(P?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),v&&(w=v),w.indexOf("blob:")!==0?w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1):w="",P&&(te=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),H=(s,o,u)=>{var x=new XMLHttpRequest;x.open("GET",s,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?o(x.response):u()},x.onerror=u,x.send(null)});var Q=f.print||console.log.bind(console),ue=f.printErr||console.error.bind(console);Object.assign(f,F),F=null,f.thisProgram&&(B=f.thisProgram);var de;f.wasmBinary&&(de=f.wasmBinary),f.noExitRuntime,typeof WebAssembly!="object"&&at("no native wasm support detected");var ce,oe,se=!1,xe,_e,Fe,nt,We,ee,E,h;function y(){var s=ce.buffer;f.HEAP8=xe=new Int8Array(s),f.HEAP16=Fe=new Int16Array(s),f.HEAP32=We=new Int32Array(s),f.HEAPU8=_e=new Uint8Array(s),f.HEAPU16=nt=new Uint16Array(s),f.HEAPU32=ee=new Uint32Array(s),f.HEAPF32=E=new Float32Array(s),f.HEAPF64=h=new Float64Array(s)}var N,W=[],ne=[],he=[];function Te(){var s=f.preRun.shift();W.unshift(s)}var Ye=0,U=null;function at(s){throw f.onAbort&&f.onAbort(s),s="Aborted("+s+")",ue(s),se=!0,s=new WebAssembly.RuntimeError(s+". Build with -sASSERTIONS for more info."),R(s),s}function Qe(s){return s.startsWith("data:application/octet-stream;base64,")}var et;if(et="canvas_advanced.wasm",!Qe(et)){var Pe=et;et=f.locateFile?f.locateFile(Pe,w):w+Pe}function yt(s){if(s==et&&de)return new Uint8Array(de);if(te)return te(s);throw"both async and sync fetching of the wasm failed"}function He(s){if(!de&&(j||P)){if(typeof fetch=="function"&&!s.startsWith("file://"))return fetch(s,{credentials:"same-origin"}).then(o=>{if(!o.ok)throw"failed to load wasm binary file at '"+s+"'";return o.arrayBuffer()}).catch(()=>yt(s));if(H)return new Promise((o,u)=>{H(s,x=>o(new Uint8Array(x)),u)})}return Promise.resolve().then(()=>yt(s))}function L(s,o,u){return He(s).then(x=>WebAssembly.instantiate(x,o)).then(x=>x).then(u,x=>{ue("failed to asynchronously prepare wasm: "+x),at(x)})}function S(s,o){var u=et;return de||typeof WebAssembly.instantiateStreaming!="function"||Qe(u)||u.startsWith("file://")||typeof fetch!="function"?L(u,s,o):fetch(u,{credentials:"same-origin"}).then(x=>WebAssembly.instantiateStreaming(x,s).then(o,function(b){return ue("wasm streaming compile failed: "+b),ue("falling back to ArrayBuffer instantiation"),L(u,s,o)}))}var K,fe,me={445532:(s,o,u,x,b)=>{if(typeof window>"u"||(window.AudioContext||window.webkitAudioContext)===void 0)return 0;if(typeof window.h>"u"){window.h={Aa:0},window.h.I={},window.h.I.ya=s,window.h.I.capture=o,window.h.I.La=u,window.h.ga={},window.h.ga.stopped=x,window.h.ga.xb=b;let C=window.h;C.D=[],C.yc=function(z){for(var $=0;$<C.D.length;++$)if(C.D[$]==null)return C.D[$]=z,$;return C.D.push(z),C.D.length-1},C.Cb=function(z){for(C.D[z]=null;0<C.D.length&&C.D[C.D.length-1]==null;)C.D.pop()},C.Sc=function(z){for(var $=0;$<C.D.length;++$)if(C.D[$]==z)return C.Cb($)},C.ra=function(z){return C.D[z]},C.Bb=["touchend","click"],C.unlock=function(){for(var z=0;z<C.D.length;++z){var $=C.D[z];$!=null&&$.J!=null&&$.state===C.ga.xb&&$.J.resume().then(()=>{Ho($.pb)},re=>{console.error("Failed to resume audiocontext",re)})}C.Bb.map(function(re){document.removeEventListener(re,C.unlock,!0)})},C.Bb.map(function(z){document.addEventListener(z,C.unlock,!0)})}return window.h.Aa+=1,1},447710:()=>{typeof window.h<"u"&&(--window.h.Aa,window.h.Aa===0&&delete window.h)},447874:()=>navigator.mediaDevices!==void 0&&navigator.mediaDevices.getUserMedia!==void 0,447978:()=>{try{var s=new(window.AudioContext||window.webkitAudioContext),o=s.sampleRate;return s.close(),o}catch{return 0}},448149:(s,o,u,x,b,C)=>{if(typeof window.h>"u")return-1;var z={},$={};return s==window.h.I.ya&&u!=0&&($.sampleRate=u),z.J=new(window.AudioContext||window.webkitAudioContext)($),z.J.suspend(),z.state=window.h.ga.stopped,u=0,s!=window.h.I.ya&&(u=o),z.Z=z.J.createScriptProcessor(x,u,o),z.Z.onaudioprocess=function(re){if((z.sa==null||z.sa.length==0)&&(z.sa=new Float32Array(E.buffer,b,x*o)),s==window.h.I.capture||s==window.h.I.La){for(var q=0;q<o;q+=1)for(var Se=re.inputBuffer.getChannelData(q),be=z.sa,Be=0;Be<x;Be+=1)be[Be*o+q]=Se[Be];Vo(C,x,b)}if(s==window.h.I.ya||s==window.h.I.La)for(Go(C,x,b),q=0;q<re.outputBuffer.numberOfChannels;++q)for(Se=re.outputBuffer.getChannelData(q),be=z.sa,Be=0;Be<x;Be+=1)Se[Be]=be[Be*o+q];else for(q=0;q<re.outputBuffer.numberOfChannels;++q)re.outputBuffer.getChannelData(q).fill(0)},s!=window.h.I.capture&&s!=window.h.I.La||navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(function(re){z.Da=z.J.createMediaStreamSource(re),z.Da.connect(z.Z),z.Z.connect(z.J.destination)}).catch(function(re){console.log("Failed to get user media: "+re)}),s==window.h.I.ya&&z.Z.connect(z.J.destination),z.pb=C,window.h.yc(z)},451026:s=>window.h.ra(s).J.sampleRate,451099:s=>{s=window.h.ra(s),s.Z!==void 0&&(s.Z.onaudioprocess=function(){},s.Z.disconnect(),s.Z=void 0),s.Da!==void 0&&(s.Da.disconnect(),s.Da=void 0),s.J.close(),s.J=void 0,s.pb=void 0},451499:s=>{window.h.Cb(s)},451549:s=>{s=window.h.ra(s),s.J.resume(),s.state=window.h.ga.xb},451688:s=>{s=window.h.ra(s),s.J.suspend(),s.state=window.h.ga.stopped}},le=s=>{for(;0<s.length;)s.shift()(f)},Xe=(s,o)=>{for(var u=0,x=s.length-1;0<=x;x--){var b=s[x];b==="."?s.splice(x,1):b===".."?(s.splice(x,1),u++):u&&(s.splice(x,1),u--)}if(o)for(;u;u--)s.unshift("..");return s},Ee=s=>{var o=s.charAt(0)==="/",u=s.substr(-1)==="/";return(s=Xe(s.split("/").filter(x=>!!x),!o).join("/"))||o||(s="."),s&&u&&(s+="/"),(o?"/":"")+s},Ve=s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(s).slice(1);return s=o[0],o=o[1],!s&&!o?".":(o&&(o=o.substr(0,o.length-1)),s+o)},mt=s=>{if(s==="/")return"/";s=Ee(s),s=s.replace(/\/$/,"");var o=s.lastIndexOf("/");return o===-1?s:s.substr(o+1)},ye=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return s=>crypto.getRandomValues(s);at("initRandomDevice")},Ge=s=>(Ge=ye())(s);function Ze(){for(var s="",o=!1,u=arguments.length-1;-1<=u&&!o;u--){if(o=0<=u?arguments[u]:"/",typeof o!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!o)return"";s=o+"/"+s,o=o.charAt(0)==="/"}return s=Xe(s.split("/").filter(x=>!!x),!o).join("/"),(o?"/":"")+s||"."}var it=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Le=(s,o,u)=>{var x=o+u;for(u=o;s[u]&&!(u>=x);)++u;if(16<u-o&&s.buffer&&it)return it.decode(s.subarray(o,u));for(x="";o<u;){var b=s[o++];if(b&128){var C=s[o++]&63;if((b&224)==192)x+=String.fromCharCode((b&31)<<6|C);else{var z=s[o++]&63;b=(b&240)==224?(b&15)<<12|C<<6|z:(b&7)<<18|C<<12|z<<6|s[o++]&63,65536>b?x+=String.fromCharCode(b):(b-=65536,x+=String.fromCharCode(55296|b>>10,56320|b&1023))}}else x+=String.fromCharCode(b)}return x},dt=[],ot=s=>{for(var o=0,u=0;u<s.length;++u){var x=s.charCodeAt(u);127>=x?o++:2047>=x?o+=2:55296<=x&&57343>=x?(o+=4,++u):o+=3}return o},Lt=(s,o,u,x)=>{if(!(0<x))return 0;var b=u;x=u+x-1;for(var C=0;C<s.length;++C){var z=s.charCodeAt(C);if(55296<=z&&57343>=z){var $=s.charCodeAt(++C);z=65536+((z&1023)<<10)|$&1023}if(127>=z){if(u>=x)break;o[u++]=z}else{if(2047>=z){if(u+1>=x)break;o[u++]=192|z>>6}else{if(65535>=z){if(u+2>=x)break;o[u++]=224|z>>12}else{if(u+3>=x)break;o[u++]=240|z>>18,o[u++]=128|z>>12&63}o[u++]=128|z>>6&63}o[u++]=128|z&63}}return o[u]=0,u-b};function V(s,o){var u=Array(ot(s)+1);return s=Lt(s,u,0,u.length),o&&(u.length=s),u}var Re=[];function ae(s,o){Re[s]={input:[],F:[],V:o},T(s,pe)}var pe={open:function(s){var o=Re[s.node.za];if(!o)throw new Ie(43);s.s=o,s.seekable=!1},close:function(s){s.s.V.qa(s.s)},qa:function(s){s.s.V.qa(s.s)},read:function(s,o,u,x){if(!s.s||!s.s.V.ib)throw new Ie(60);for(var b=0,C=0;C<x;C++){try{var z=s.s.V.ib(s.s)}catch{throw new Ie(29)}if(z===void 0&&b===0)throw new Ie(6);if(z==null)break;b++,o[u+C]=z}return b&&(s.node.timestamp=Date.now()),b},write:function(s,o,u,x){if(!s.s||!s.s.V.Oa)throw new Ie(60);try{for(var b=0;b<x;b++)s.s.V.Oa(s.s,o[u+b])}catch{throw new Ie(29)}return x&&(s.node.timestamp=Date.now()),b}},Ue={ib:function(){e:{if(!dt.length){var s=null;if(typeof window<"u"&&typeof window.prompt=="function"?(s=window.prompt("Input: "),s!==null&&(s+=`
`)):typeof readline=="function"&&(s=readline(),s!==null&&(s+=`
`)),!s){s=null;break e}dt=V(s,!0)}s=dt.shift()}return s},Oa:function(s,o){o===null||o===10?(Q(Le(s.F,0)),s.F=[]):o!=0&&s.F.push(o)},qa:function(s){s.F&&0<s.F.length&&(Q(Le(s.F,0)),s.F=[])},bc:function(){return{Fc:25856,Hc:5,Ec:191,Gc:35387,Dc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},cc:function(){return 0},dc:function(){return[24,80]}},De={Oa:function(s,o){o===null||o===10?(ue(Le(s.F,0)),s.F=[]):o!=0&&s.F.push(o)},qa:function(s){s.F&&0<s.F.length&&(ue(Le(s.F,0)),s.F=[])}};function st(s,o){var u=s.j?s.j.length:0;u>=o||(o=Math.max(o,u*(1048576>u?2:1.125)>>>0),u!=0&&(o=Math.max(o,256)),u=s.j,s.j=new Uint8Array(o),0<s.v&&s.j.set(u.subarray(0,s.v),0))}var qe={O:null,U(){return qe.createNode(null,"/",16895,0)},createNode(s,o,u,x){if((u&61440)===24576||(u&61440)===4096)throw new Ie(63);return qe.O||(qe.O={dir:{node:{Y:qe.l.Y,P:qe.l.P,ka:qe.l.ka,va:qe.l.va,ub:qe.l.ub,Ab:qe.l.Ab,vb:qe.l.vb,sb:qe.l.sb,Ea:qe.l.Ea},stream:{ba:qe.m.ba}},file:{node:{Y:qe.l.Y,P:qe.l.P},stream:{ba:qe.m.ba,read:qe.m.read,write:qe.m.write,pa:qe.m.pa,lb:qe.m.lb,nb:qe.m.nb}},link:{node:{Y:qe.l.Y,P:qe.l.P,ma:qe.l.ma},stream:{}},$a:{node:{Y:qe.l.Y,P:qe.l.P},stream:Ns}}),u=mr(s,o,u,x),(u.mode&61440)===16384?(u.l=qe.O.dir.node,u.m=qe.O.dir.stream,u.j={}):(u.mode&61440)===32768?(u.l=qe.O.file.node,u.m=qe.O.file.stream,u.v=0,u.j=null):(u.mode&61440)===40960?(u.l=qe.O.link.node,u.m=qe.O.link.stream):(u.mode&61440)===8192&&(u.l=qe.O.$a.node,u.m=qe.O.$a.stream),u.timestamp=Date.now(),s&&(s.j[o]=u,s.timestamp=u.timestamp),u},Kc(s){return s.j?s.j.subarray?s.j.subarray(0,s.v):new Uint8Array(s.j):new Uint8Array(0)},l:{Y(s){var o={};return o.Jc=(s.mode&61440)===8192?s.id:1,o.Mc=s.id,o.mode=s.mode,o.Oc=1,o.uid=0,o.Lc=0,o.za=s.za,(s.mode&61440)===16384?o.size=4096:(s.mode&61440)===32768?o.size=s.v:(s.mode&61440)===40960?o.size=s.link.length:o.size=0,o.Bc=new Date(s.timestamp),o.Nc=new Date(s.timestamp),o.Ic=new Date(s.timestamp),o.Jb=4096,o.Cc=Math.ceil(o.size/o.Jb),o},P(s,o){if(o.mode!==void 0&&(s.mode=o.mode),o.timestamp!==void 0&&(s.timestamp=o.timestamp),o.size!==void 0&&(o=o.size,s.v!=o))if(o==0)s.j=null,s.v=0;else{var u=s.j;s.j=new Uint8Array(o),u&&s.j.set(u.subarray(0,Math.min(o,s.v))),s.v=o}},ka(){throw Ii[44]},va(s,o,u,x){return qe.createNode(s,o,u,x)},ub(s,o,u){if((s.mode&61440)===16384){try{var x=Nn(o,u)}catch{}if(x)for(var b in x.j)throw new Ie(55)}delete s.parent.j[s.name],s.parent.timestamp=Date.now(),s.name=u,o.j[u]=s,o.timestamp=s.parent.timestamp,s.parent=o},Ab(s,o){delete s.j[o],s.timestamp=Date.now()},vb(s,o){var u=Nn(s,o),x;for(x in u.j)throw new Ie(55);delete s.j[o],s.timestamp=Date.now()},sb(s){var o=[".",".."],u;for(u in s.j)s.j.hasOwnProperty(u)&&o.push(u);return o},Ea(s,o,u){return s=qe.createNode(s,o,41471,0),s.link=u,s},ma(s){if((s.mode&61440)!==40960)throw new Ie(28);return s.link}},m:{read(s,o,u,x,b){var C=s.node.j;if(b>=s.node.v)return 0;if(s=Math.min(s.node.v-b,x),8<s&&C.subarray)o.set(C.subarray(b,b+s),u);else for(x=0;x<s;x++)o[u+x]=C[b+x];return s},write(s,o,u,x,b,C){if(o.buffer===xe.buffer&&(C=!1),!x)return 0;if(s=s.node,s.timestamp=Date.now(),o.subarray&&(!s.j||s.j.subarray)){if(C)return s.j=o.subarray(u,u+x),s.v=x;if(s.v===0&&b===0)return s.j=o.slice(u,u+x),s.v=x;if(b+x<=s.v)return s.j.set(o.subarray(u,u+x),b),x}if(st(s,b+x),s.j.subarray&&o.subarray)s.j.set(o.subarray(u,u+x),b);else for(C=0;C<x;C++)s.j[b+C]=o[u+C];return s.v=Math.max(s.v,b+x),x},ba(s,o,u){if(u===1?o+=s.position:u===2&&(s.node.mode&61440)===32768&&(o+=s.node.v),0>o)throw new Ie(28);return o},pa(s,o,u){st(s.node,o+u),s.node.v=Math.max(s.node.v,o+u)},lb(s,o,u,x,b){if((s.node.mode&61440)!==32768)throw new Ie(43);if(s=s.node.j,b&2||s.buffer!==xe.buffer){if((0<u||u+o<s.length)&&(s.subarray?s=s.subarray(u,u+o):s=Array.prototype.slice.call(s,u,u+o)),u=!0,at(),o=void 0,!o)throw new Ie(48);xe.set(s,o)}else u=!1,o=s.byteOffset;return{o,M:u}},nb(s,o,u,x){return qe.m.write(s,o,0,x,u,!1),0}}};function Yt(s,o){var u=0;return s&&(u|=365),o&&(u|=146),u}var Et=null,rn={},sn=[],Ir=1,ei=null,bn=!0,Ie=null,Ii={},An=(s,o={})=>{if(s=Ze(s),!s)return{path:"",node:null};if(o=Object.assign({gb:!0,Qa:0},o),8<o.Qa)throw new Ie(32);s=s.split("/").filter(z=>!!z);for(var u=Et,x="/",b=0;b<s.length;b++){var C=b===s.length-1;if(C&&o.parent)break;if(u=Nn(u,s[b]),x=Ee(x+"/"+s[b]),u.wa&&(!C||C&&o.gb)&&(u=u.wa.root),!C||o.fb){for(C=0;(u.mode&61440)===40960;)if(u=ve(x),x=Ze(Ve(x),u),u=An(x,{Qa:o.Qa+1}).node,40<C++)throw new Ie(32)}}return{path:x,node:u}},di=s=>{for(var o;;){if(s===s.parent)return s=s.U.mb,o?s[s.length-1]!=="/"?`${s}/${o}`:s+o:s;o=o?`${s.name}/${o}`:s.name,s=s.parent}},pr=(s,o)=>{for(var u=0,x=0;x<o.length;x++)u=(u<<5)-u+o.charCodeAt(x)|0;return(s+u>>>0)%ei.length},Nn=(s,o)=>{var u;if(u=(u=Fi(s,"x"))?u:s.l.ka?0:2)throw new Ie(u,s);for(u=ei[pr(s.id,o)];u;u=u.lc){var x=u.name;if(u.parent.id===s.id&&x===o)return u}return s.l.ka(s,o)},mr=(s,o,u,x)=>(s=new Oo(s,o,u,x),o=pr(s.parent.id,s.name),s.lc=ei[o],ei[o]=s),gr=s=>{var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},Fi=(s,o)=>{if(bn)return 0;if(!o.includes("r")||s.mode&292){if(o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73))return 2}else return 2;return 0},Fr=(s,o)=>{try{return Nn(s,o),20}catch{}return Fi(s,"wx")},Fs=()=>{for(var s=0;4096>=s;s++)if(!sn[s])return s;throw new Ie(33)},wn=s=>{if(s=sn[s],!s)throw new Ie(8);return s},Nr=(s,o=-1)=>(gt||(gt=function(){this.h={}},gt.prototype={},Object.defineProperties(gt.prototype,{object:{get(){return this.node},set(u){this.node=u}},flags:{get(){return this.h.flags},set(u){this.h.flags=u}},position:{get(){return this.h.position},set(u){this.h.position=u}}})),s=Object.assign(new gt,s),o==-1&&(o=Fs()),s.X=o,sn[o]=s),Ns={open:s=>{s.m=rn[s.node.za].m,s.m.open&&s.m.open(s)},ba:()=>{throw new Ie(70)}},T=(s,o)=>{rn[s]={m:o}},k=(s,o)=>{var u=o==="/",x=!o;if(u&&Et)throw new Ie(10);if(!u&&!x){var b=An(o,{gb:!1});if(o=b.path,b=b.node,b.wa)throw new Ie(10);if((b.mode&61440)!==16384)throw new Ie(54)}o={type:s,Qc:{},mb:o,kc:[]},s=s.U(o),s.U=o,o.root=s,u?Et=s:b&&(b.wa=o,b.U&&b.U.kc.push(o))},Z=(s,o,u)=>{var x=An(s,{parent:!0}).node;if(s=mt(s),!s||s==="."||s==="..")throw new Ie(28);var b=Fr(x,s);if(b)throw new Ie(b);if(!x.l.va)throw new Ie(63);return x.l.va(x,s,o,u)},J=(s,o,u)=>{typeof u>"u"&&(u=o,o=438),Z(s,o|8192,u)},X=(s,o)=>{if(!Ze(s))throw new Ie(44);var u=An(o,{parent:!0}).node;if(!u)throw new Ie(44);o=mt(o);var x=Fr(u,o);if(x)throw new Ie(x);if(!u.l.Ea)throw new Ie(63);u.l.Ea(u,o,s)},ve=s=>{if(s=An(s).node,!s)throw new Ie(44);if(!s.l.ma)throw new Ie(28);return Ze(di(s.parent),s.l.ma(s))},Ae=(s,o,u)=>{if(s==="")throw new Ie(44);if(typeof o=="string"){var x={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[o];if(typeof x>"u")throw Error(`Unknown file open mode: ${o}`);o=x}if(u=o&64?(typeof u>"u"?438:u)&4095|32768:0,typeof s=="object")var b=s;else{s=Ee(s);try{b=An(s,{fb:!(o&131072)}).node}catch{}}if(x=!1,o&64)if(b){if(o&128)throw new Ie(20)}else b=Z(s,u,0),x=!0;if(!b)throw new Ie(44);if((b.mode&61440)===8192&&(o&=-513),o&65536&&(b.mode&61440)!==16384)throw new Ie(54);if(!x&&(u=b?(b.mode&61440)===40960?32:(b.mode&61440)===16384&&(gr(o)!=="r"||o&512)?31:Fi(b,gr(o)):44))throw new Ie(u);if(o&512&&!x){if(u=b,u=typeof u=="string"?An(u,{fb:!0}).node:u,!u.l.P)throw new Ie(63);if((u.mode&61440)===16384)throw new Ie(31);if((u.mode&61440)!==32768)throw new Ie(28);if(x=Fi(u,"w"))throw new Ie(x);u.l.P(u,{size:0,timestamp:Date.now()})}return o&=-131713,b=Nr({node:b,path:di(b),flags:o,seekable:!0,position:0,m:b.m,zc:[],error:!1}),b.m.open&&b.m.open(b),!f.logReadFiles||o&1||(Ot||(Ot={}),s in Ot||(Ot[s]=1)),b},Oe=(s,o,u)=>{if(s.X===null)throw new Ie(8);if(!s.seekable||!s.m.ba)throw new Ie(70);if(u!=0&&u!=1&&u!=2)throw new Ie(28);s.position=s.m.ba(s,o,u),s.zc=[]},ke=()=>{Ie||(Ie=function(s,o){this.name="ErrnoError",this.node=o,this.pc=function(u){this.aa=u},this.pc(s),this.message="FS error"},Ie.prototype=Error(),Ie.prototype.constructor=Ie,[44].forEach(s=>{Ii[s]=new Ie(s),Ii[s].stack="<generic error, no stack>"}))},rt,tt=(s,o,u)=>{s=Ee("/dev/"+s);var x=Yt(!!o,!!u);$e||($e=64);var b=$e++<<8|0;T(b,{open:C=>{C.seekable=!1},close:()=>{u&&u.buffer&&u.buffer.length&&u(10)},read:(C,z,$,re)=>{for(var q=0,Se=0;Se<re;Se++){try{var be=o()}catch{throw new Ie(29)}if(be===void 0&&q===0)throw new Ie(6);if(be==null)break;q++,z[$+Se]=be}return q&&(C.node.timestamp=Date.now()),q},write:(C,z,$,re)=>{for(var q=0;q<re;q++)try{u(z[$+q])}catch{throw new Ie(29)}return re&&(C.node.timestamp=Date.now()),q}}),J(s,x,b)},$e,ut={},gt,Ot,Dt=void 0;function lt(){return Dt+=4,We[Dt-4>>2]}function Je(s){if(s===void 0)return"_unknown";s=s.replace(/[^a-zA-Z0-9_]/g,"$");var o=s.charCodeAt(0);return 48<=o&&57>=o?`_${s}`:s}function zt(s,o){return s=Je(s),{[s]:function(){return o.apply(this,arguments)}}[s]}function Tt(){this.M=[void 0],this.hb=[]}var Bt=new Tt,cn=void 0;function Ke(s){throw new cn(s)}var Kt=s=>(s||Ke("Cannot use deleted val. handle = "+s),Bt.get(s).value),xt=s=>{switch(s){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Bt.pa({tb:1,value:s})}};function en(s){var o=Error,u=zt(s,function(x){this.name=s,this.message=x,x=Error(x).stack,x!==void 0&&(this.stack=this.toString()+`
`+x.replace(/^Error(:[^\n]*)?\n/,""))});return u.prototype=Object.create(o.prototype),u.prototype.constructor=u,u.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},u}var tn=void 0,qt=void 0;function pt(s){for(var o="";_e[s];)o+=qt[_e[s++]];return o}var On=[];function vn(){for(;On.length;){var s=On.pop();s.g.fa=!1,s.delete()}}var _r=void 0,Bn={};function Os(s,o){for(o===void 0&&Ke("ptr should not be undefined");s.A;)o=s.na(o),s=s.A;return o}var pi={};function Eo(s){s=Wo(s);var o=pt(s);return Vn(s),o}function vr(s,o){var u=pi[s];return u===void 0&&Ke(o+" has unknown type "+Eo(s)),u}function Or(){}var Bs=!1;function To(s){--s.count.value,s.count.value===0&&(s.G?s.L.W(s.G):s.u.i.W(s.o))}function bo(s,o,u){return o===u?s:u.A===void 0?null:(s=bo(s,o,u.A),s===null?null:u.Pb(s))}var Ao={};function wc(s,o){return o=Os(s,o),Bn[o]}var wo=void 0;function Br(s){throw new wo(s)}function zr(s,o){return o.u&&o.o||Br("makeClassHandle requires ptr and ptrType"),!!o.L!=!!o.G&&Br("Both smartPtrType and smartPtr must be specified"),o.count={value:1},Ni(Object.create(s,{g:{value:o}}))}function Ni(s){return typeof FinalizationRegistry>"u"?(Ni=o=>o,s):(Bs=new FinalizationRegistry(o=>{To(o.g)}),Ni=o=>{var u=o.g;return u.G&&Bs.register(o,{g:u},o),o},Or=o=>{Bs.unregister(o)},Ni(s))}var Hr={};function xr(s){for(;s.length;){var o=s.pop();s.pop()(o)}}function Mr(s){return this.fromWireType(We[s>>2])}var Oi={},Vr={};function un(s,o,u){function x($){$=u($),$.length!==s.length&&Br("Mismatched type converter count");for(var re=0;re<s.length;++re)Rn(s[re],$[re])}s.forEach(function($){Vr[$]=o});var b=Array(o.length),C=[],z=0;o.forEach(($,re)=>{pi.hasOwnProperty($)?b[re]=pi[$]:(C.push($),Oi.hasOwnProperty($)||(Oi[$]=[]),Oi[$].push(()=>{b[re]=pi[$],++z,z===C.length&&x(b)}))}),C.length===0&&x(b)}function Gr(s){switch(s){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError(`Unknown type size: ${s}`)}}function Rc(s,o,u={}){var x=o.name;if(s||Ke(`type "${x}" must have a positive integer typeid pointer`),pi.hasOwnProperty(s)){if(u.$b)return;Ke(`Cannot register type '${x}' twice`)}pi[s]=o,delete Vr[s],Oi.hasOwnProperty(s)&&(o=Oi[s],delete Oi[s],o.forEach(b=>b()))}function Rn(s,o,u={}){if(!("argPackAdvance"in o))throw new TypeError("registerType registeredInstance requires argPackAdvance");Rc(s,o,u)}function zs(s){Ke(s.g.u.i.name+" instance already deleted")}function ti(){}function Hs(s,o,u){if(s[o].B===void 0){var x=s[o];s[o]=function(){return s[o].B.hasOwnProperty(arguments.length)||Ke(`Function '${u}' called with an invalid number of arguments (${arguments.length}) - expects one of (${s[o].B})!`),s[o].B[arguments.length].apply(this,arguments)},s[o].B=[],s[o].B[x.ea]=x}}function Vs(s,o,u){f.hasOwnProperty(s)?((u===void 0||f[s].B!==void 0&&f[s].B[u]!==void 0)&&Ke(`Cannot register public name '${s}' twice`),Hs(f,s,s),f.hasOwnProperty(u)&&Ke(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),f[s].B[u]=o):(f[s]=o,u!==void 0&&(f[s].Pc=u))}function Cc(s,o,u,x,b,C,z,$){this.name=s,this.constructor=o,this.N=u,this.W=x,this.A=b,this.Ub=C,this.na=z,this.Pb=$,this.qb=[]}function kr(s,o,u){for(;o!==u;)o.na||Ke(`Expected null or instance of ${u.name}, got an instance of ${o.name}`),s=o.na(s),o=o.A;return s}function Pc(s,o){return o===null?(this.Na&&Ke(`null is not a valid ${this.name}`),0):(o.g||Ke(`Cannot pass "${ks(o)}" as a ${this.name}`),o.g.o||Ke(`Cannot pass deleted object as a pointer of type ${this.name}`),kr(o.g.o,o.g.u.i,this.i))}function Lc(s,o){if(o===null){if(this.Na&&Ke(`null is not a valid ${this.name}`),this.ua){var u=this.Pa();return s!==null&&s.push(this.W,u),u}return 0}if(o.g||Ke(`Cannot pass "${ks(o)}" as a ${this.name}`),o.g.o||Ke(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.ta&&o.g.u.ta&&Ke(`Cannot convert argument of type ${o.g.L?o.g.L.name:o.g.u.name} to parameter type ${this.name}`),u=kr(o.g.o,o.g.u.i,this.i),this.ua)switch(o.g.G===void 0&&Ke("Passing raw pointer to smart pointer is illegal"),this.tc){case 0:o.g.L===this?u=o.g.G:Ke(`Cannot convert argument of type ${o.g.L?o.g.L.name:o.g.u.name} to parameter type ${this.name}`);break;case 1:u=o.g.G;break;case 2:if(o.g.L===this)u=o.g.G;else{var x=o.clone();u=this.oc(u,xt(function(){x.delete()})),s!==null&&s.push(this.W,u)}break;default:Ke("Unsupporting sharing policy")}return u}function Dc(s,o){return o===null?(this.Na&&Ke(`null is not a valid ${this.name}`),0):(o.g||Ke(`Cannot pass "${ks(o)}" as a ${this.name}`),o.g.o||Ke(`Cannot pass deleted object as a pointer of type ${this.name}`),o.g.u.ta&&Ke(`Cannot convert argument of type ${o.g.u.name} to parameter type ${this.name}`),kr(o.g.o,o.g.u.i,this.i))}function zn(s,o,u,x){this.name=s,this.i=o,this.Na=u,this.ta=x,this.ua=!1,this.W=this.oc=this.Pa=this.rb=this.tc=this.nc=void 0,o.A!==void 0?this.toWireType=Lc:(this.toWireType=x?Pc:Dc,this.K=null)}function Ro(s,o,u){f.hasOwnProperty(s)||Br("Replacing nonexistant public symbol"),f[s].B!==void 0&&u!==void 0?f[s].B[u]=o:(f[s]=o,f[s].ea=u)}var Wr=[],Co=s=>{var o=Wr[s];return o||(s>=Wr.length&&(Wr.length=s+1),Wr[s]=o=N.get(s)),o},Uc=(s,o)=>{var u=[];return function(){if(u.length=0,Object.assign(u,arguments),s.includes("j")){var x=f["dynCall_"+s];x=u.length?x.apply(null,[o].concat(u)):x.call(null,o)}else x=Co(o).apply(null,u);return x}};function Zt(s,o){s=pt(s);var u=s.includes("j")?Uc(s,o):Co(o);return typeof u!="function"&&Ke(`unknown function pointer with signature ${s}: ${o}`),u}var Po=void 0;function Hn(s,o){function u(C){b[C]||pi[C]||(Vr[C]?Vr[C].forEach(u):(x.push(C),b[C]=!0))}var x=[],b={};throw o.forEach(u),new Po(`${s}: `+x.map(Eo).join([", "]))}function Xr(s,o,u,x,b){var C=o.length;2>C&&Ke("argTypes array size mismatch! Must at least get return value and 'this' types!");var z=o[1]!==null&&u!==null,$=!1;for(u=1;u<o.length;++u)if(o[u]!==null&&o[u].K===void 0){$=!0;break}var re=o[0].name!=="void",q=C-2,Se=Array(q),be=[],Be=[];return function(){if(arguments.length!==q&&Ke(`function ${s} called with ${arguments.length} arguments, expected ${q} args!`),Be.length=0,be.length=z?2:1,be[0]=b,z){var G=o[1].toWireType(Be,this);be[1]=G}for(var Me=0;Me<q;++Me)Se[Me]=o[Me+2].toWireType(Be,arguments[Me]),be.push(Se[Me]);if(Me=x.apply(null,be),$)xr(Be);else for(var je=z?1:2;je<o.length;je++){var we=je===1?G:Se[je-2];o[je].K!==null&&o[je].K(we)}return G=re?o[0].fromWireType(Me):void 0,G}}function Yr(s,o){for(var u=[],x=0;x<s;x++)u.push(ee[o+4*x>>2]);return u}function Lo(s,o,u){return s instanceof Object||Ke(`${u} with invalid "this": ${s}`),s instanceof o.i.constructor||Ke(`${u} incompatible with "this" of type ${s.constructor.name}`),s.g.o||Ke(`cannot call emscripten binding method ${u} on deleted object`),kr(s.g.o,s.g.u.i,o.i)}function Gs(s){s>=Bt.h&&--Bt.get(s).tb===0&&Bt.Zb(s)}function Ic(s,o,u){switch(o){case 0:return function(x){return this.fromWireType((u?xe:_e)[x])};case 1:return function(x){return this.fromWireType((u?Fe:nt)[x>>1])};case 2:return function(x){return this.fromWireType((u?We:ee)[x>>2])};default:throw new TypeError("Unknown integer type: "+s)}}function ks(s){if(s===null)return"null";var o=typeof s;return o==="object"||o==="array"||o==="function"?s.toString():""+s}function Fc(s,o){switch(o){case 2:return function(u){return this.fromWireType(E[u>>2])};case 3:return function(u){return this.fromWireType(h[u>>3])};default:throw new TypeError("Unknown float type: "+s)}}function Nc(s,o,u){switch(o){case 0:return u?function(x){return xe[x]}:function(x){return _e[x]};case 1:return u?function(x){return Fe[x>>1]}:function(x){return nt[x>>1]};case 2:return u?function(x){return We[x>>2]}:function(x){return ee[x>>2]};default:throw new TypeError("Unknown integer type: "+s)}}var Do=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Oc=(s,o)=>{for(var u=s>>1,x=u+o/2;!(u>=x)&&nt[u];)++u;if(u<<=1,32<u-s&&Do)return Do.decode(_e.subarray(s,u));for(u="",x=0;!(x>=o/2);++x){var b=Fe[s+2*x>>1];if(b==0)break;u+=String.fromCharCode(b)}return u},Bc=(s,o,u)=>{if(u===void 0&&(u=2147483647),2>u)return 0;u-=2;var x=o;u=u<2*s.length?u/2:s.length;for(var b=0;b<u;++b)Fe[o>>1]=s.charCodeAt(b),o+=2;return Fe[o>>1]=0,o-x},zc=s=>2*s.length,Hc=(s,o)=>{for(var u=0,x="";!(u>=o/4);){var b=We[s+4*u>>2];if(b==0)break;++u,65536<=b?(b-=65536,x+=String.fromCharCode(55296|b>>10,56320|b&1023)):x+=String.fromCharCode(b)}return x},Vc=(s,o,u)=>{if(u===void 0&&(u=2147483647),4>u)return 0;var x=o;u=x+u-4;for(var b=0;b<s.length;++b){var C=s.charCodeAt(b);if(55296<=C&&57343>=C){var z=s.charCodeAt(++b);C=65536+((C&1023)<<10)|z&1023}if(We[o>>2]=C,o+=4,o+4>u)break}return We[o>>2]=0,o-x},Gc=s=>{for(var o=0,u=0;u<s.length;++u){var x=s.charCodeAt(u);55296<=x&&57343>=x&&++u,o+=4}return o},kc={};function qr(s){var o=kc[s];return o===void 0?pt(s):o}var jr=[];function Wc(s){var o=jr.length;return jr.push(s),o}function Xc(s,o){for(var u=Array(s),x=0;x<s;++x)u[x]=vr(ee[o+4*x>>2],"parameter "+x);return u}var Uo=[],Ws=[],Xs={},Io=()=>{if(!Ys){var s={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:B||"./this.program"},o;for(o in Xs)Xs[o]===void 0?delete s[o]:s[o]=Xs[o];var u=[];for(o in s)u.push(`${o}=${s[o]}`);Ys=u}return Ys},Ys,$r=s=>s%4===0&&(s%100!==0||s%400===0),Fo=[31,29,31,30,31,30,31,31,30,31,30,31],No=[31,28,31,30,31,30,31,31,30,31,30,31],Yc=(s,o,u,x)=>{function b(G,Me,je){for(G=typeof G=="number"?G.toString():G||"";G.length<Me;)G=je[0]+G;return G}function C(G,Me){return b(G,Me,"0")}function z(G,Me){function je(Ct){return 0>Ct?-1:0<Ct?1:0}var we;return(we=je(G.getFullYear()-Me.getFullYear()))===0&&(we=je(G.getMonth()-Me.getMonth()))===0&&(we=je(G.getDate()-Me.getDate())),we}function $(G){switch(G.getDay()){case 0:return new Date(G.getFullYear()-1,11,29);case 1:return G;case 2:return new Date(G.getFullYear(),0,3);case 3:return new Date(G.getFullYear(),0,2);case 4:return new Date(G.getFullYear(),0,1);case 5:return new Date(G.getFullYear()-1,11,31);case 6:return new Date(G.getFullYear()-1,11,30)}}function re(G){var Me=G.ca;for(G=new Date(new Date(G.da+1900,0,1).getTime());0<Me;){var je=G.getMonth(),we=($r(G.getFullYear())?Fo:No)[je];if(Me>we-G.getDate())Me-=we-G.getDate()+1,G.setDate(1),11>je?G.setMonth(je+1):(G.setMonth(0),G.setFullYear(G.getFullYear()+1));else{G.setDate(G.getDate()+Me);break}}return je=new Date(G.getFullYear()+1,0,4),Me=$(new Date(G.getFullYear(),0,4)),je=$(je),0>=z(Me,G)?0>=z(je,G)?G.getFullYear()+1:G.getFullYear():G.getFullYear()-1}var q=We[x+40>>2];x={wc:We[x>>2],vc:We[x+4>>2],Fa:We[x+8>>2],Sa:We[x+12>>2],Ga:We[x+16>>2],da:We[x+20>>2],R:We[x+24>>2],ca:We[x+28>>2],Rc:We[x+32>>2],uc:We[x+36>>2],xc:q&&q?Le(_e,q):""},u=u?Le(_e,u):"",q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var Se in q)u=u.replace(new RegExp(Se,"g"),q[Se]);var be="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Be="January February March April May June July August September October November December".split(" ");q={"%a":G=>be[G.R].substring(0,3),"%A":G=>be[G.R],"%b":G=>Be[G.Ga].substring(0,3),"%B":G=>Be[G.Ga],"%C":G=>C((G.da+1900)/100|0,2),"%d":G=>C(G.Sa,2),"%e":G=>b(G.Sa,2," "),"%g":G=>re(G).toString().substring(2),"%G":G=>re(G),"%H":G=>C(G.Fa,2),"%I":G=>(G=G.Fa,G==0?G=12:12<G&&(G-=12),C(G,2)),"%j":G=>{for(var Me=0,je=0;je<=G.Ga-1;Me+=($r(G.da+1900)?Fo:No)[je++]);return C(G.Sa+Me,3)},"%m":G=>C(G.Ga+1,2),"%M":G=>C(G.vc,2),"%n":()=>`
`,"%p":G=>0<=G.Fa&&12>G.Fa?"AM":"PM","%S":G=>C(G.wc,2),"%t":()=>"	","%u":G=>G.R||7,"%U":G=>C(Math.floor((G.ca+7-G.R)/7),2),"%V":G=>{var Me=Math.floor((G.ca+7-(G.R+6)%7)/7);if(2>=(G.R+371-G.ca-2)%7&&Me++,Me)Me==53&&(je=(G.R+371-G.ca)%7,je==4||je==3&&$r(G.da)||(Me=1));else{Me=52;var je=(G.R+7-G.ca-1)%7;(je==4||je==5&&$r(G.da%400-1))&&Me++}return C(Me,2)},"%w":G=>G.R,"%W":G=>C(Math.floor((G.ca+7-(G.R+6)%7)/7),2),"%y":G=>(G.da+1900).toString().substring(2),"%Y":G=>G.da+1900,"%z":G=>{G=G.uc;var Me=0<=G;return G=Math.abs(G)/60,(Me?"+":"-")+("0000"+(G/60*100+G%60)).slice(-4)},"%Z":G=>G.xc,"%%":()=>"%"},u=u.replace(/%%/g,"\0\0");for(Se in q)u.includes(Se)&&(u=u.replace(new RegExp(Se,"g"),q[Se](x)));return u=u.replace(/\0\0/g,"%"),Se=V(u,!1),Se.length>o?0:(xe.set(Se,s),Se.length-1)};function Oo(s,o,u,x){s||(s=this),this.parent=s,this.U=s.U,this.wa=null,this.id=Ir++,this.name=o,this.mode=u,this.l={},this.m={},this.za=x}Object.defineProperties(Oo.prototype,{read:{get:function(){return(this.mode&365)===365},set:function(s){s?this.mode|=365:this.mode&=-366}},write:{get:function(){return(this.mode&146)===146},set:function(s){s?this.mode|=146:this.mode&=-147}}}),ke(),ei=Array(4096),k(qe,"/"),Z("/tmp",16895,0),Z("/home",16895,0),Z("/home/web_user",16895,0),(()=>{Z("/dev",16895,0),T(259,{read:()=>0,write:(x,b,C,z)=>z}),J("/dev/null",259),ae(1280,Ue),ae(1536,De),J("/dev/tty",1280),J("/dev/tty1",1536);var s=new Uint8Array(1024),o=0,u=()=>(o===0&&(o=Ge(s).byteLength),s[--o]);tt("random",u),tt("urandom",u),Z("/dev/shm",16895,0),Z("/dev/shm/tmp",16895,0)})(),(()=>{Z("/proc",16895,0);var s=Z("/proc/self",16895,0);Z("/proc/self/fd",16895,0),k({U:()=>{var o=mr(s,"fd",16895,73);return o.l={ka:(u,x)=>{var b=wn(+x);return u={parent:null,U:{mb:"fake"},l:{ma:()=>b.path}},u.parent=u}},o}},"/proc/self/fd")})(),Object.assign(Tt.prototype,{get(s){return this.M[s]},has(s){return this.M[s]!==void 0},pa(s){var o=this.hb.pop()||this.M.length;return this.M[o]=s,o},Zb(s){this.M[s]=void 0,this.hb.push(s)}}),cn=f.BindingError=class extends Error{constructor(s){super(s),this.name="BindingError"}},Bt.M.push({value:void 0},{value:null},{value:!0},{value:!1}),Bt.h=Bt.M.length,f.count_emval_handles=function(){for(var s=0,o=Bt.h;o<Bt.M.length;++o)Bt.M[o]!==void 0&&++s;return s},tn=f.PureVirtualError=en("PureVirtualError");for(var Bo=Array(256),Kr=0;256>Kr;++Kr)Bo[Kr]=String.fromCharCode(Kr);qt=Bo,f.getInheritedInstanceCount=function(){return Object.keys(Bn).length},f.getLiveInheritedInstances=function(){var s=[],o;for(o in Bn)Bn.hasOwnProperty(o)&&s.push(Bn[o]);return s},f.flushPendingDeletes=vn,f.setDelayFunction=function(s){_r=s,On.length&&_r&&_r(vn)},wo=f.InternalError=class extends Error{constructor(s){super(s),this.name="InternalError"}},ti.prototype.isAliasOf=function(s){if(!(this instanceof ti&&s instanceof ti))return!1;var o=this.g.u.i,u=this.g.o,x=s.g.u.i;for(s=s.g.o;o.A;)u=o.na(u),o=o.A;for(;x.A;)s=x.na(s),x=x.A;return o===x&&u===s},ti.prototype.clone=function(){if(this.g.o||zs(this),this.g.ia)return this.g.count.value+=1,this;var s=Ni,o=Object,u=o.create,x=Object.getPrototypeOf(this),b=this.g;return s=s(u.call(o,x,{g:{value:{count:b.count,fa:b.fa,ia:b.ia,o:b.o,u:b.u,G:b.G,L:b.L}}})),s.g.count.value+=1,s.g.fa=!1,s},ti.prototype.delete=function(){this.g.o||zs(this),this.g.fa&&!this.g.ia&&Ke("Object already scheduled for deletion"),Or(this),To(this.g),this.g.ia||(this.g.G=void 0,this.g.o=void 0)},ti.prototype.isDeleted=function(){return!this.g.o},ti.prototype.deleteLater=function(){return this.g.o||zs(this),this.g.fa&&!this.g.ia&&Ke("Object already scheduled for deletion"),On.push(this),On.length===1&&_r&&_r(vn),this.g.fa=!0,this},zn.prototype.Vb=function(s){return this.rb&&(s=this.rb(s)),s},zn.prototype.ab=function(s){this.W&&this.W(s)},zn.prototype.argPackAdvance=8,zn.prototype.readValueFromPointer=Mr,zn.prototype.deleteObject=function(s){s!==null&&s.delete()},zn.prototype.fromWireType=function(s){function o(){return this.ua?zr(this.i.N,{u:this.nc,o:u,L:this,G:s}):zr(this.i.N,{u:this,o:s})}var u=this.Vb(s);if(!u)return this.ab(s),null;var x=wc(this.i,u);if(x!==void 0)return x.g.count.value===0?(x.g.o=u,x.g.G=s,x.clone()):(x=x.clone(),this.ab(s),x);if(x=this.i.Ub(u),x=Ao[x],!x)return o.call(this);x=this.ta?x.Kb:x.pointerType;var b=bo(u,this.i,x.i);return b===null?o.call(this):this.ua?zr(x.i.N,{u:x,o:b,L:this,G:s}):zr(x.i.N,{u:x,o:b})},Po=f.UnboundTypeError=en("UnboundTypeError");var zo={__syscall_fcntl64:function(s,o,u){Dt=u;try{var x=wn(s);switch(o){case 0:var b=lt();return 0>b?-28:Nr(x,b).X;case 1:case 2:return 0;case 3:return x.flags;case 4:return b=lt(),x.flags|=b,0;case 5:return b=lt(),Fe[b+0>>1]=2,0;case 6:case 7:return 0;case 16:case 8:return-28;case 9:return We[ko()>>2]=28,-1;default:return-28}}catch(C){if(typeof ut>"u"||C.name!=="ErrnoError")throw C;return-C.aa}},__syscall_ioctl:function(s,o,u){Dt=u;try{var x=wn(s);switch(o){case 21509:return x.s?0:-59;case 21505:if(!x.s)return-59;if(x.s.V.bc){o=[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var b=lt();We[b>>2]=25856,We[b+4>>2]=5,We[b+8>>2]=191,We[b+12>>2]=35387;for(var C=0;32>C;C++)xe[b+C+17>>0]=o[C]||0}return 0;case 21510:case 21511:case 21512:return x.s?0:-59;case 21506:case 21507:case 21508:if(!x.s)return-59;if(x.s.V.cc)for(b=lt(),o=[],C=0;32>C;C++)o.push(xe[b+C+17>>0]);return 0;case 21519:return x.s?(b=lt(),We[b>>2]=0):-59;case 21520:return x.s?-28:-59;case 21531:if(b=lt(),!x.m.ac)throw new Ie(59);return x.m.ac(x,o,b);case 21523:return x.s?(x.s.V.dc&&(C=[24,80],b=lt(),Fe[b>>1]=C[0],Fe[b+2>>1]=C[1]),0):-59;case 21524:return x.s?0:-59;case 21515:return x.s?0:-59;default:return-28}}catch(z){if(typeof ut>"u"||z.name!=="ErrnoError")throw z;return-z.aa}},__syscall_openat:function(s,o,u,x){Dt=x;try{o=o?Le(_e,o):"";var b=o;if(b.charAt(0)==="/")o=b;else{var C=s===-100?"/":wn(s).path;if(b.length==0)throw new Ie(44);o=Ee(C+"/"+b)}var z=x?lt():0;return Ae(o,u,z).X}catch($){if(typeof ut>"u"||$.name!=="ErrnoError")throw $;return-$.aa}},_embind_create_inheriting_constructor:function(s,o,u){s=pt(s),o=vr(o,"wrapper"),u=Kt(u);var x=[].slice,b=o.i,C=b.N,z=b.A.N,$=b.A.constructor;s=zt(s,function(){b.A.qb.forEach((function(q){if(this[q]===z[q])throw new tn(`Pure virtual function ${q} must be implemented in JavaScript`)}).bind(this)),Object.defineProperty(this,"__parent",{value:C}),this.__construct.apply(this,x.call(arguments))}),C.__construct=function(){this===C&&Ke("Pass correct 'this' to __construct");var q=$.implement.apply(void 0,[this].concat(x.call(arguments)));Or(q);var Se=q.g;q.notifyOnDestruction(),Se.ia=!0,Object.defineProperties(this,{g:{value:Se}}),Ni(this),q=Se.o,q=Os(b,q),Bn.hasOwnProperty(q)?Ke(`Tried to register registered instance: ${q}`):Bn[q]=this},C.__destruct=function(){this===C&&Ke("Pass correct 'this' to __destruct"),Or(this);var q=this.g.o;q=Os(b,q),Bn.hasOwnProperty(q)?delete Bn[q]:Ke(`Tried to unregister unregistered instance: ${q}`)},s.prototype=Object.create(C);for(var re in u)s.prototype[re]=u[re];return xt(s)},_embind_finalize_value_object:function(s){var o=Hr[s];delete Hr[s];var u=o.Pa,x=o.W,b=o.eb,C=b.map(z=>z.Yb).concat(b.map(z=>z.rc));un([s],C,z=>{var $={};return b.forEach((re,q)=>{var Se=z[q],be=re.Wb,Be=re.Xb,G=z[q+b.length],Me=re.qc,je=re.sc;$[re.Sb]={read:we=>Se.fromWireType(be(Be,we)),write:(we,Ct)=>{var Ne=[];Me(je,we,G.toWireType(Ne,Ct)),xr(Ne)}}}),[{name:o.name,fromWireType:function(re){var q={},Se;for(Se in $)q[Se]=$[Se].read(re);return x(re),q},toWireType:function(re,q){for(var Se in $)if(!(Se in q))throw new TypeError(`Missing field: "${Se}"`);var be=u();for(Se in $)$[Se].write(be,q[Se]);return re!==null&&re.push(x,be),be},argPackAdvance:8,readValueFromPointer:Mr,K:x}]})},_embind_register_bigint:function(){},_embind_register_bool:function(s,o,u,x,b){var C=Gr(u);o=pt(o),Rn(s,{name:o,fromWireType:function(z){return!!z},toWireType:function(z,$){return $?x:b},argPackAdvance:8,readValueFromPointer:function(z){if(u===1)var $=xe;else if(u===2)$=Fe;else if(u===4)$=We;else throw new TypeError("Unknown boolean type size: "+o);return this.fromWireType($[z>>C])},K:null})},_embind_register_class:function(s,o,u,x,b,C,z,$,re,q,Se,be,Be){Se=pt(Se),C=Zt(b,C),$&&($=Zt(z,$)),q&&(q=Zt(re,q)),Be=Zt(be,Be);var G=Je(Se);Vs(G,function(){Hn(`Cannot construct ${Se} due to unbound types`,[x])}),un([s,o,u],x?[x]:[],function(Me){if(Me=Me[0],x)var je=Me.i,we=je.N;else we=ti.prototype;Me=zt(G,function(){if(Object.getPrototypeOf(this)!==Ct)throw new cn("Use 'new' to construct "+Se);if(Ne.$===void 0)throw new cn(Se+" has no accessible constructor");var Nt=Ne.$[arguments.length];if(Nt===void 0)throw new cn(`Tried to invoke ctor of ${Se} with invalid number of parameters (${arguments.length}) - expected (${Object.keys(Ne.$).toString()}) parameters instead!`);return Nt.apply(this,arguments)});var Ct=Object.create(we,{constructor:{value:Me}});Me.prototype=Ct;var Ne=new Cc(Se,Me,Ct,Be,je,C,$,q);Ne.A&&(Ne.A.oa===void 0&&(Ne.A.oa=[]),Ne.A.oa.push(Ne)),je=new zn(Se,Ne,!0,!1),we=new zn(Se+"*",Ne,!1,!1);var wt=new zn(Se+" const*",Ne,!1,!0);return Ao[s]={pointerType:we,Kb:wt},Ro(G,Me),[je,we,wt]})},_embind_register_class_class_function:function(s,o,u,x,b,C,z){var $=Yr(u,x);o=pt(o),C=Zt(b,C),un([],[s],function(re){function q(){Hn(`Cannot call ${Se} due to unbound types`,$)}re=re[0];var Se=`${re.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]);var be=re.i.constructor;return be[o]===void 0?(q.ea=u-1,be[o]=q):(Hs(be,o,Se),be[o].B[u-1]=q),un([],$,function(Be){if(Be=Xr(Se,[Be[0],null].concat(Be.slice(1)),null,C,z),be[o].B===void 0?(Be.ea=u-1,be[o]=Be):be[o].B[u-1]=Be,re.i.oa)for(const G of re.i.oa)G.constructor.hasOwnProperty(o)||(G.constructor[o]=Be);return[]}),[]})},_embind_register_class_class_property:function(s,o,u,x,b,C,z,$){o=pt(o),C=Zt(b,C),un([],[s],function(re){re=re[0];var q=`${re.name}.${o}`,Se={get(){Hn(`Cannot access ${q} due to unbound types`,[u])},enumerable:!0,configurable:!0};return Se.set=$?()=>{Hn(`Cannot access ${q} due to unbound types`,[u])}:()=>{Ke(`${q} is a read-only property`)},Object.defineProperty(re.i.constructor,o,Se),un([],[u],function(be){be=be[0];var Be={get(){return be.fromWireType(C(x))},enumerable:!0};return $&&($=Zt(z,$),Be.set=G=>{var Me=[];$(x,be.toWireType(Me,G)),xr(Me)}),Object.defineProperty(re.i.constructor,o,Be),[]}),[]})},_embind_register_class_constructor:function(s,o,u,x,b,C){var z=Yr(o,u);b=Zt(x,b),un([],[s],function($){$=$[0];var re=`constructor ${$.name}`;if($.i.$===void 0&&($.i.$=[]),$.i.$[o-1]!==void 0)throw new cn(`Cannot register multiple constructors with identical number of parameters (${o-1}) for class '${$.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return $.i.$[o-1]=()=>{Hn(`Cannot construct ${$.name} due to unbound types`,z)},un([],z,function(q){return q.splice(1,0,null),$.i.$[o-1]=Xr(re,q,null,b,C),[]}),[]})},_embind_register_class_function:function(s,o,u,x,b,C,z,$){var re=Yr(u,x);o=pt(o),C=Zt(b,C),un([],[s],function(q){function Se(){Hn(`Cannot call ${be} due to unbound types`,re)}q=q[0];var be=`${q.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]),$&&q.i.qb.push(o);var Be=q.i.N,G=Be[o];return G===void 0||G.B===void 0&&G.className!==q.name&&G.ea===u-2?(Se.ea=u-2,Se.className=q.name,Be[o]=Se):(Hs(Be,o,be),Be[o].B[u-2]=Se),un([],re,function(Me){return Me=Xr(be,Me,q,C,z),Be[o].B===void 0?(Me.ea=u-2,Be[o]=Me):Be[o].B[u-2]=Me,[]}),[]})},_embind_register_class_property:function(s,o,u,x,b,C,z,$,re,q){o=pt(o),b=Zt(x,b),un([],[s],function(Se){Se=Se[0];var be=`${Se.name}.${o}`,Be={get(){Hn(`Cannot access ${be} due to unbound types`,[u,z])},enumerable:!0,configurable:!0};return Be.set=re?()=>{Hn(`Cannot access ${be} due to unbound types`,[u,z])}:()=>{Ke(be+" is a read-only property")},Object.defineProperty(Se.i.N,o,Be),un([],re?[u,z]:[u],function(G){var Me=G[0],je={get(){var Ct=Lo(this,Se,be+" getter");return Me.fromWireType(b(C,Ct))},enumerable:!0};if(re){re=Zt($,re);var we=G[1];je.set=function(Ct){var Ne=Lo(this,Se,be+" setter"),wt=[];re(q,Ne,we.toWireType(wt,Ct)),xr(wt)}}return Object.defineProperty(Se.i.N,o,je),[]}),[]})},_embind_register_emval:function(s,o){o=pt(o),Rn(s,{name:o,fromWireType:function(u){var x=Kt(u);return Gs(u),x},toWireType:function(u,x){return xt(x)},argPackAdvance:8,readValueFromPointer:Mr,K:null})},_embind_register_enum:function(s,o,u,x){function b(){}u=Gr(u),o=pt(o),b.values={},Rn(s,{name:o,constructor:b,fromWireType:function(C){return this.constructor.values[C]},toWireType:function(C,z){return z.value},argPackAdvance:8,readValueFromPointer:Ic(o,u,x),K:null}),Vs(o,b)},_embind_register_enum_value:function(s,o,u){var x=vr(s,"enum");o=pt(o),s=x.constructor,x=Object.create(x.constructor.prototype,{value:{value:u},constructor:{value:zt(`${x.name}_${o}`,function(){})}}),s.values[u]=x,s[o]=x},_embind_register_float:function(s,o,u){u=Gr(u),o=pt(o),Rn(s,{name:o,fromWireType:function(x){return x},toWireType:function(x,b){return b},argPackAdvance:8,readValueFromPointer:Fc(o,u),K:null})},_embind_register_function:function(s,o,u,x,b,C){var z=Yr(o,u);s=pt(s),b=Zt(x,b),Vs(s,function(){Hn(`Cannot call ${s} due to unbound types`,z)},o-1),un([],z,function($){return Ro(s,Xr(s,[$[0],null].concat($.slice(1)),null,b,C),o-1),[]})},_embind_register_integer:function(s,o,u,x,b){o=pt(o),b===-1&&(b=4294967295),b=Gr(u);var C=$=>$;if(x===0){var z=32-8*u;C=$=>$<<z>>>z}u=o.includes("unsigned")?function($,re){return re>>>0}:function($,re){return re},Rn(s,{name:o,fromWireType:C,toWireType:u,argPackAdvance:8,readValueFromPointer:Nc(o,b,x!==0),K:null})},_embind_register_memory_view:function(s,o,u){function x(C){C>>=2;var z=ee;return new b(z.buffer,z[C+1],z[C])}var b=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][o];u=pt(u),Rn(s,{name:u,fromWireType:x,argPackAdvance:8,readValueFromPointer:x},{$b:!0})},_embind_register_std_string:function(s,o){o=pt(o);var u=o==="std::string";Rn(s,{name:o,fromWireType:function(x){var b=ee[x>>2],C=x+4;if(u)for(var z=C,$=0;$<=b;++$){var re=C+$;if($==b||_e[re]==0){if(z=z?Le(_e,z,re-z):"",q===void 0)var q=z;else q+="\0",q+=z;z=re+1}}else{for(q=Array(b),$=0;$<b;++$)q[$]=String.fromCharCode(_e[C+$]);q=q.join("")}return Vn(x),q},toWireType:function(x,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var C=typeof b=="string";C||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||Ke("Cannot pass non-string to std::string");var z=u&&C?ot(b):b.length,$=qs(4+z+1),re=$+4;if(ee[$>>2]=z,u&&C)Lt(b,_e,re,z+1);else if(C)for(C=0;C<z;++C){var q=b.charCodeAt(C);255<q&&(Vn(re),Ke("String has UTF-16 code units that do not fit in 8 bits")),_e[re+C]=q}else for(C=0;C<z;++C)_e[re+C]=b[C];return x!==null&&x.push(Vn,$),$},argPackAdvance:8,readValueFromPointer:Mr,K:function(x){Vn(x)}})},_embind_register_std_wstring:function(s,o,u){if(u=pt(u),o===2)var x=Oc,b=Bc,C=zc,z=()=>nt,$=1;else o===4&&(x=Hc,b=Vc,C=Gc,z=()=>ee,$=2);Rn(s,{name:u,fromWireType:function(re){for(var q=ee[re>>2],Se=z(),be,Be=re+4,G=0;G<=q;++G){var Me=re+4+G*o;(G==q||Se[Me>>$]==0)&&(Be=x(Be,Me-Be),be===void 0?be=Be:(be+="\0",be+=Be),Be=Me+o)}return Vn(re),be},toWireType:function(re,q){typeof q!="string"&&Ke(`Cannot pass non-string to C++ string type ${u}`);var Se=C(q),be=qs(4+Se+o);return ee[be>>2]=Se>>$,b(q,be+4,Se+o),re!==null&&re.push(Vn,be),be},argPackAdvance:8,readValueFromPointer:Mr,K:function(re){Vn(re)}})},_embind_register_value_object:function(s,o,u,x,b,C){Hr[s]={name:pt(o),Pa:Zt(u,x),W:Zt(b,C),eb:[]}},_embind_register_value_object_field:function(s,o,u,x,b,C,z,$,re,q){Hr[s].eb.push({Sb:pt(o),Yb:u,Wb:Zt(x,b),Xb:C,rc:z,qc:Zt($,re),sc:q})},_embind_register_void:function(s,o){o=pt(o),Rn(s,{fc:!0,name:o,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},_emscripten_get_now_is_monotonic:()=>!0,_emval_as:function(s,o,u){s=Kt(s),o=vr(o,"emval::as");var x=[],b=xt(x);return ee[u>>2]=b,o.toWireType(x,s)},_emval_call_method:function(s,o,u,x,b){s=jr[s],o=Kt(o),u=qr(u);var C=[];return ee[x>>2]=xt(C),s(o,u,C,b)},_emval_call_void_method:function(s,o,u,x){s=jr[s],o=Kt(o),u=qr(u),s(o,u,null,x)},_emval_decref:Gs,_emval_get_method_caller:function(s,o){var u=Xc(s,o),x=u[0];o=x.name+"_$"+u.slice(1).map(function(z){return z.name}).join("_")+"$";var b=Uo[o];if(b!==void 0)return b;var C=Array(s-1);return b=Wc((z,$,re,q)=>{for(var Se=0,be=0;be<s-1;++be)C[be]=u[be+1].readValueFromPointer(q+Se),Se+=u[be+1].argPackAdvance;for(z=z[$].apply(z,C),be=0;be<s-1;++be)u[be+1].Nb&&u[be+1].Nb(C[be]);if(!x.fc)return x.toWireType(re,z)}),Uo[o]=b},_emval_get_module_property:function(s){return s=qr(s),xt(f[s])},_emval_get_property:function(s,o){return s=Kt(s),o=Kt(o),xt(s[o])},_emval_incref:function(s){4<s&&(Bt.get(s).tb+=1)},_emval_new_cstring:function(s){return xt(qr(s))},_emval_new_object:function(){return xt({})},_emval_run_destructors:function(s){var o=Kt(s);xr(o),Gs(s)},_emval_set_property:function(s,o,u){s=Kt(s),o=Kt(o),u=Kt(u),s[o]=u},_emval_take_value:function(s,o){return s=vr(s,"_emval_take_value"),s=s.readValueFromPointer(o),xt(s)},abort:()=>{at("")},emscripten_asm_const_int:(s,o,u)=>{Ws.length=0;var x;for(u>>=2;x=_e[o++];)u+=x!=105&u,Ws.push(x==105?We[u]:h[u++>>1]),++u;return me[s].apply(null,Ws)},emscripten_date_now:function(){return Date.now()},emscripten_get_now:()=>performance.now(),emscripten_memcpy_big:(s,o,u)=>_e.copyWithin(s,o,o+u),emscripten_resize_heap:s=>{var o=_e.length;if(s>>>=0,2147483648<s)return!1;for(var u=1;4>=u;u*=2){var x=o*(1+.2/u);x=Math.min(x,s+100663296);var b=Math;x=Math.max(s,x);e:{b=b.min.call(b,2147483648,x+(65536-x%65536)%65536)-ce.buffer.byteLength+65535>>>16;try{ce.grow(b),y();var C=1;break e}catch{}C=void 0}if(C)return!0}return!1},environ_get:(s,o)=>{var u=0;return Io().forEach(function(x,b){var C=o+u;for(b=ee[s+4*b>>2]=C,C=0;C<x.length;++C)xe[b++>>0]=x.charCodeAt(C);xe[b>>0]=0,u+=x.length+1}),0},environ_sizes_get:(s,o)=>{var u=Io();ee[s>>2]=u.length;var x=0;return u.forEach(function(b){x+=b.length+1}),ee[o>>2]=x,0},fd_close:function(s){try{var o=wn(s);if(o.X===null)throw new Ie(8);o.Ma&&(o.Ma=null);try{o.m.close&&o.m.close(o)}catch(u){throw u}finally{sn[o.X]=null}return o.X=null,0}catch(u){if(typeof ut>"u"||u.name!=="ErrnoError")throw u;return u.aa}},fd_read:function(s,o,u,x){try{e:{var b=wn(s);s=o;for(var C,z=o=0;z<u;z++){var $=ee[s>>2],re=ee[s+4>>2];s+=8;var q=b,Se=$,be=re,Be=C,G=xe;if(0>be||0>Be)throw new Ie(28);if(q.X===null)throw new Ie(8);if((q.flags&2097155)===1)throw new Ie(8);if((q.node.mode&61440)===16384)throw new Ie(31);if(!q.m.read)throw new Ie(28);var Me=typeof Be<"u";if(!Me)Be=q.position;else if(!q.seekable)throw new Ie(70);var je=q.m.read(q,G,Se,be,Be);Me||(q.position+=je);var we=je;if(0>we){var Ct=-1;break e}if(o+=we,we<re)break;typeof C<"u"&&(C+=we)}Ct=o}return ee[x>>2]=Ct,0}catch(Ne){if(typeof ut>"u"||Ne.name!=="ErrnoError")throw Ne;return Ne.aa}},fd_seek:function(s,o,u,x,b){o=u+2097152>>>0<4194305-!!o?(o>>>0)+4294967296*u:NaN;try{if(isNaN(o))return 61;var C=wn(s);return Oe(C,o,x),fe=[C.position>>>0,(K=C.position,1<=+Math.abs(K)?0<K?+Math.floor(K/4294967296)>>>0:~~+Math.ceil((K-+(~~K>>>0))/4294967296)>>>0:0)],We[b>>2]=fe[0],We[b+4>>2]=fe[1],C.Ma&&o===0&&x===0&&(C.Ma=null),0}catch(z){if(typeof ut>"u"||z.name!=="ErrnoError")throw z;return z.aa}},fd_write:function(s,o,u,x){try{e:{var b=wn(s);s=o;for(var C,z=o=0;z<u;z++){var $=ee[s>>2],re=ee[s+4>>2];s+=8;var q=b,Se=$,be=re,Be=C,G=xe;if(0>be||0>Be)throw new Ie(28);if(q.X===null)throw new Ie(8);if(!(q.flags&2097155))throw new Ie(8);if((q.node.mode&61440)===16384)throw new Ie(31);if(!q.m.write)throw new Ie(28);q.seekable&&q.flags&1024&&Oe(q,0,2);var Me=typeof Be<"u";if(!Me)Be=q.position;else if(!q.seekable)throw new Ie(70);var je=q.m.write(q,G,Se,be,Be,void 0);Me||(q.position+=je);var we=je;if(0>we){var Ct=-1;break e}o+=we,typeof C<"u"&&(C+=we)}Ct=o}return ee[x>>2]=Ct,0}catch(Ne){if(typeof ut>"u"||Ne.name!=="ErrnoError")throw Ne;return Ne.aa}},strftime_l:(s,o,u,x)=>Yc(s,o,u,x)};(function(){function s(u){if(oe=u=u.exports,ce=oe.memory,y(),N=oe.__indirect_function_table,ne.unshift(oe.__wasm_call_ctors),Ye--,f.monitorRunDependencies&&f.monitorRunDependencies(Ye),Ye==0&&U){var x=U;U=null,x()}return u}var o={env:zo,wasi_snapshot_preview1:zo};if(Ye++,f.monitorRunDependencies&&f.monitorRunDependencies(Ye),f.instantiateWasm)try{return f.instantiateWasm(o,s)}catch(u){ue("Module.instantiateWasm callback failed with error: "+u),R(u)}return S(o,function(u){s(u.instance)}).catch(R),{}})();var Vn=s=>(Vn=oe.free)(s),qs=s=>(qs=oe.malloc)(s),Ho=f._ma_device__on_notification_unlocked=s=>(Ho=f._ma_device__on_notification_unlocked=oe.ma_device__on_notification_unlocked)(s);f._ma_malloc_emscripten=(s,o)=>(f._ma_malloc_emscripten=oe.ma_malloc_emscripten)(s,o),f._ma_free_emscripten=(s,o)=>(f._ma_free_emscripten=oe.ma_free_emscripten)(s,o);var Vo=f._ma_device_process_pcm_frames_capture__webaudio=(s,o,u)=>(Vo=f._ma_device_process_pcm_frames_capture__webaudio=oe.ma_device_process_pcm_frames_capture__webaudio)(s,o,u),Go=f._ma_device_process_pcm_frames_playback__webaudio=(s,o,u)=>(Go=f._ma_device_process_pcm_frames_playback__webaudio=oe.ma_device_process_pcm_frames_playback__webaudio)(s,o,u),ko=()=>(ko=oe.__errno_location)(),Wo=s=>(Wo=oe.__getTypeName)(s);f.__embind_initialize_bindings=()=>(f.__embind_initialize_bindings=oe._embind_initialize_bindings)(),f.dynCall_iiji=(s,o,u,x,b)=>(f.dynCall_iiji=oe.dynCall_iiji)(s,o,u,x,b),f.dynCall_jiji=(s,o,u,x,b)=>(f.dynCall_jiji=oe.dynCall_jiji)(s,o,u,x,b),f.dynCall_iiiji=(s,o,u,x,b,C)=>(f.dynCall_iiiji=oe.dynCall_iiiji)(s,o,u,x,b,C),f.dynCall_iij=(s,o,u,x)=>(f.dynCall_iij=oe.dynCall_iij)(s,o,u,x),f.dynCall_jii=(s,o,u)=>(f.dynCall_jii=oe.dynCall_jii)(s,o,u),f.dynCall_viijii=(s,o,u,x,b,C,z)=>(f.dynCall_viijii=oe.dynCall_viijii)(s,o,u,x,b,C,z),f.dynCall_iiiiij=(s,o,u,x,b,C,z)=>(f.dynCall_iiiiij=oe.dynCall_iiiiij)(s,o,u,x,b,C,z),f.dynCall_iiiiijj=(s,o,u,x,b,C,z,$,re)=>(f.dynCall_iiiiijj=oe.dynCall_iiiiijj)(s,o,u,x,b,C,z,$,re),f.dynCall_iiiiiijj=(s,o,u,x,b,C,z,$,re,q)=>(f.dynCall_iiiiiijj=oe.dynCall_iiiiiijj)(s,o,u,x,b,C,z,$,re,q);var Zr;U=function s(){Zr||Xo(),Zr||(U=s)};function Xo(){function s(){if(!Zr&&(Zr=!0,f.calledRun=!0,!se)){if(f.noFSInit||rt||(rt=!0,ke(),f.stdin=f.stdin,f.stdout=f.stdout,f.stderr=f.stderr,f.stdin?tt("stdin",f.stdin):X("/dev/tty","/dev/stdin"),f.stdout?tt("stdout",null,f.stdout):X("/dev/tty","/dev/stdout"),f.stderr?tt("stderr",null,f.stderr):X("/dev/tty1","/dev/stderr"),Ae("/dev/stdin",0),Ae("/dev/stdout",1),Ae("/dev/stderr",1)),bn=!1,le(ne),A(f),f.onRuntimeInitialized&&f.onRuntimeInitialized(),f.postRun)for(typeof f.postRun=="function"&&(f.postRun=[f.postRun]);f.postRun.length;){var o=f.postRun.shift();he.unshift(o)}le(he)}}if(!(0<Ye)){if(f.preRun)for(typeof f.preRun=="function"&&(f.preRun=[f.preRun]);f.preRun.length;)Te();le(W),0<Ye||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1),s()},1)):s())}}if(f.preInit)for(typeof f.preInit=="function"&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();return Xo(),_.ready}})();const g=p},l=>{l.exports=JSON.parse(`{"name":"@rive-app/canvas","version":"2.25.4","description":"Rive's canvas based web api.","main":"rive.js","homepage":"https://rive.app","repository":{"type":"git","url":"https://github.com/rive-app/rive-wasm/tree/master/js"},"keywords":["rive","animation"],"author":"Rive","contributors":["Luigi Rosso <luigi@rive.app> (https://rive.app)","Maxwell Talbot <max@rive.app> (https://rive.app)","Arthur Vivian <arthur@rive.app> (https://rive.app)","Umberto Sonnino <umberto@rive.app> (https://rive.app)","Matthew Sullivan <matt.j.sullivan@gmail.com> (mailto:matt.j.sullivan@gmail.com)"],"license":"MIT","files":["rive.js","rive.js.map","rive.wasm","rive_fallback.wasm","rive.d.ts","rive_advanced.mjs.d.ts"],"typings":"rive.d.ts","dependencies":{},"browser":{"fs":false,"path":false}}`)},(l,c,d)=>{d.r(c),d.d(c,{Animation:()=>p.Animation});var p=d(4)},(l,c,d)=>{d.r(c),d.d(c,{Animation:()=>p});var p=function(){function g(v,_,f,A){this.animation=v,this.artboard=_,this.playing=A,this.loopCount=0,this.scrubTo=null,this.instance=new f.LinearAnimationInstance(v,_)}return Object.defineProperty(g.prototype,"name",{get:function(){return this.animation.name},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"time",{get:function(){return this.instance.time},set:function(v){this.instance.time=v},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"loopValue",{get:function(){return this.animation.loopValue},enumerable:!1,configurable:!0}),Object.defineProperty(g.prototype,"needsScrub",{get:function(){return this.scrubTo!==null},enumerable:!1,configurable:!0}),g.prototype.advance=function(v){this.scrubTo===null?this.instance.advance(v):(this.instance.time=0,this.instance.advance(this.scrubTo),this.scrubTo=null)},g.prototype.apply=function(v){this.instance.apply(v)},g.prototype.cleanup=function(){this.instance.delete()},g}()},(l,c,d)=>{d.r(c),d.d(c,{BLANK_URL:()=>g.BLANK_URL,registerTouchInteractions:()=>p.registerTouchInteractions,sanitizeUrl:()=>g.sanitizeUrl});var p=d(6),g=d(7)},(l,c,d)=>{d.r(c),d.d(c,{registerTouchInteractions:()=>v});var p=void 0,g=function(_,f){var A,R;return["touchstart","touchmove"].indexOf(_.type)>-1&&(!((A=_.touches)===null||A===void 0)&&A.length)?(f||_.preventDefault(),{clientX:_.touches[0].clientX,clientY:_.touches[0].clientY}):_.type==="touchend"&&(!((R=_.changedTouches)===null||R===void 0)&&R.length)?{clientX:_.changedTouches[0].clientX,clientY:_.changedTouches[0].clientY}:{clientX:_.clientX,clientY:_.clientY}},v=function(_){var f=_.canvas,A=_.artboard,R=_.stateMachines,M=R===void 0?[]:R,m=_.renderer,O=_.rive,I=_.fit,D=_.alignment,Y=_.isTouchScrollEnabled,F=Y===void 0?!1:Y,B=_.layoutScaleFactor,j=B===void 0?1:B;if(!f||!M.length||!m||!O||!A||typeof window>"u")return null;var P=null,w=!1,H=function(Q){if(w&&Q instanceof MouseEvent){Q.type=="mouseup"&&(w=!1);return}w=F&&Q.type==="touchend"&&P==="touchstart",P=Q.type;var ue=Q.currentTarget.getBoundingClientRect(),de=g(Q,F),ce=de.clientX,oe=de.clientY;if(!(!ce&&!oe)){var se=ce-ue.left,xe=oe-ue.top,_e=O.computeAlignment(I,D,{minX:0,minY:0,maxX:ue.width,maxY:ue.height},A.bounds,j),Fe=new O.Mat2D;_e.invert(Fe);var nt=new O.Vec2D(se,xe),We=O.mapXY(Fe,nt),ee=We.x(),E=We.y();switch(We.delete(),Fe.delete(),nt.delete(),_e.delete(),Q.type){case"mouseout":for(var h=0,y=M;h<y.length;h++){var N=y[h];N.pointerMove(ee,E)}break;case"touchmove":case"mouseover":case"mousemove":{for(var W=0,ne=M;W<ne.length;W++){var N=ne[W];N.pointerMove(ee,E)}break}case"touchstart":case"mousedown":{for(var he=0,Te=M;he<Te.length;he++){var N=Te[he];N.pointerDown(ee,E)}break}case"touchend":case"mouseup":{for(var Ye=0,U=M;Ye<U.length;Ye++){var N=U[Ye];N.pointerUp(ee,E)}break}}}},te=H.bind(p);return f.addEventListener("mouseover",te),f.addEventListener("mouseout",te),f.addEventListener("mousemove",te),f.addEventListener("mousedown",te),f.addEventListener("mouseup",te),f.addEventListener("touchmove",te,{passive:F}),f.addEventListener("touchstart",te,{passive:F}),f.addEventListener("touchend",te),function(){f.removeEventListener("mouseover",te),f.removeEventListener("mouseout",te),f.removeEventListener("mousemove",te),f.removeEventListener("mousedown",te),f.removeEventListener("mouseup",te),f.removeEventListener("touchmove",te),f.removeEventListener("touchstart",te),f.removeEventListener("touchend",te)}}},(l,c,d)=>{d.r(c),d.d(c,{BLANK_URL:()=>R,sanitizeUrl:()=>O});var p=/^([^\w]*)(javascript|data|vbscript)/im,g=/&#(\w+)(^\w|;)?/g,v=/&(newline|tab);/gi,_=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,f=/^.+(:|&colon;)/gim,A=[".","/"],R="about:blank";function M(I){return A.indexOf(I[0])>-1}function m(I){var D=I.replace(_,"");return D.replace(g,function(Y,F){return String.fromCharCode(F)})}function O(I){if(!I)return R;var D=m(I).replace(v,"").replace(_,"").trim();if(!D)return R;if(M(D))return D;var Y=D.match(f);if(!Y)return D;var F=Y[0];return p.test(F)?R:D}}],n={};function r(l){var c=n[l];if(c!==void 0)return c.exports;var d=n[l]={exports:{}};return t[l](d,d.exports,r),d.exports}r.d=(l,c)=>{for(var d in c)r.o(c,d)&&!r.o(l,d)&&Object.defineProperty(l,d,{enumerable:!0,get:c[d]})},r.o=(l,c)=>Object.prototype.hasOwnProperty.call(l,c),r.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};return(()=>{r.r(a),r.d(a,{Alignment:()=>A,EventType:()=>F,Fit:()=>f,Layout:()=>R,LoopType:()=>B,Rive:()=>se,RiveEventType:()=>I,RiveFile:()=>oe,RuntimeLoader:()=>M,StateMachineInput:()=>O,StateMachineInputType:()=>m,Testing:()=>Fe,decodeAudio:()=>nt,decodeFont:()=>ee,decodeImage:()=>We});var l=r(1),c=r(2),d=r(3),p=r(5),g=function(){var E=function(h,y){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(N,W){N.__proto__=W}||function(N,W){for(var ne in W)Object.prototype.hasOwnProperty.call(W,ne)&&(N[ne]=W[ne])},E(h,y)};return function(h,y){if(typeof y!="function"&&y!==null)throw new TypeError("Class extends value "+String(y)+" is not a constructor or null");E(h,y);function N(){this.constructor=h}h.prototype=y===null?Object.create(y):(N.prototype=y.prototype,new N)}}(),v=function(E,h,y,N){function W(ne){return ne instanceof y?ne:new y(function(he){he(ne)})}return new(y||(y=Promise))(function(ne,he){function Te(at){try{U(N.next(at))}catch(Qe){he(Qe)}}function Ye(at){try{U(N.throw(at))}catch(Qe){he(Qe)}}function U(at){at.done?ne(at.value):W(at.value).then(Te,Ye)}U((N=N.apply(E,h||[])).next())})},_=function(E,h){var y={label:0,sent:function(){if(ne[0]&1)throw ne[1];return ne[1]},trys:[],ops:[]},N,W,ne,he=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return he.next=Te(0),he.throw=Te(1),he.return=Te(2),typeof Symbol=="function"&&(he[Symbol.iterator]=function(){return this}),he;function Te(U){return function(at){return Ye([U,at])}}function Ye(U){if(N)throw new TypeError("Generator is already executing.");for(;he&&(he=0,U[0]&&(y=0)),y;)try{if(N=1,W&&(ne=U[0]&2?W.return:U[0]?W.throw||((ne=W.return)&&ne.call(W),0):W.next)&&!(ne=ne.call(W,U[1])).done)return ne;switch(W=0,ne&&(U=[U[0]&2,ne.value]),U[0]){case 0:case 1:ne=U;break;case 4:return y.label++,{value:U[1],done:!1};case 5:y.label++,W=U[1],U=[0];continue;case 7:U=y.ops.pop(),y.trys.pop();continue;default:if(ne=y.trys,!(ne=ne.length>0&&ne[ne.length-1])&&(U[0]===6||U[0]===2)){y=0;continue}if(U[0]===3&&(!ne||U[1]>ne[0]&&U[1]<ne[3])){y.label=U[1];break}if(U[0]===6&&y.label<ne[1]){y.label=ne[1],ne=U;break}if(ne&&y.label<ne[2]){y.label=ne[2],y.ops.push(U);break}ne[2]&&y.ops.pop(),y.trys.pop();continue}U=h.call(E,y)}catch(at){U=[6,at],W=0}finally{N=ne=0}if(U[0]&5)throw U[1];return{value:U[0]?U[1]:void 0,done:!0}}},f;(function(E){E.Cover="cover",E.Contain="contain",E.Fill="fill",E.FitWidth="fitWidth",E.FitHeight="fitHeight",E.None="none",E.ScaleDown="scaleDown",E.Layout="layout"})(f||(f={}));var A;(function(E){E.Center="center",E.TopLeft="topLeft",E.TopCenter="topCenter",E.TopRight="topRight",E.CenterLeft="centerLeft",E.CenterRight="centerRight",E.BottomLeft="bottomLeft",E.BottomCenter="bottomCenter",E.BottomRight="bottomRight"})(A||(A={}));var R=function(){function E(h){var y,N,W,ne,he,Te,Ye;this.fit=(y=h==null?void 0:h.fit)!==null&&y!==void 0?y:f.Contain,this.alignment=(N=h==null?void 0:h.alignment)!==null&&N!==void 0?N:A.Center,this.layoutScaleFactor=(W=h==null?void 0:h.layoutScaleFactor)!==null&&W!==void 0?W:1,this.minX=(ne=h==null?void 0:h.minX)!==null&&ne!==void 0?ne:0,this.minY=(he=h==null?void 0:h.minY)!==null&&he!==void 0?he:0,this.maxX=(Te=h==null?void 0:h.maxX)!==null&&Te!==void 0?Te:0,this.maxY=(Ye=h==null?void 0:h.maxY)!==null&&Ye!==void 0?Ye:0}return E.new=function(h){var y=h.fit,N=h.alignment,W=h.minX,ne=h.minY,he=h.maxX,Te=h.maxY;return console.warn("This function is deprecated: please use `new Layout({})` instead"),new E({fit:y,alignment:N,minX:W,minY:ne,maxX:he,maxY:Te})},E.prototype.copyWith=function(h){var y=h.fit,N=h.alignment,W=h.layoutScaleFactor,ne=h.minX,he=h.minY,Te=h.maxX,Ye=h.maxY;return new E({fit:y??this.fit,alignment:N??this.alignment,layoutScaleFactor:W??this.layoutScaleFactor,minX:ne??this.minX,minY:he??this.minY,maxX:Te??this.maxX,maxY:Ye??this.maxY})},E.prototype.runtimeFit=function(h){if(this.cachedRuntimeFit)return this.cachedRuntimeFit;var y;return this.fit===f.Cover?y=h.Fit.cover:this.fit===f.Contain?y=h.Fit.contain:this.fit===f.Fill?y=h.Fit.fill:this.fit===f.FitWidth?y=h.Fit.fitWidth:this.fit===f.FitHeight?y=h.Fit.fitHeight:this.fit===f.ScaleDown?y=h.Fit.scaleDown:this.fit===f.Layout?y=h.Fit.layout:y=h.Fit.none,this.cachedRuntimeFit=y,y},E.prototype.runtimeAlignment=function(h){if(this.cachedRuntimeAlignment)return this.cachedRuntimeAlignment;var y;return this.alignment===A.TopLeft?y=h.Alignment.topLeft:this.alignment===A.TopCenter?y=h.Alignment.topCenter:this.alignment===A.TopRight?y=h.Alignment.topRight:this.alignment===A.CenterLeft?y=h.Alignment.centerLeft:this.alignment===A.CenterRight?y=h.Alignment.centerRight:this.alignment===A.BottomLeft?y=h.Alignment.bottomLeft:this.alignment===A.BottomCenter?y=h.Alignment.bottomCenter:this.alignment===A.BottomRight?y=h.Alignment.bottomRight:y=h.Alignment.center,this.cachedRuntimeAlignment=y,y},E}(),M=function(){function E(){}return E.loadRuntime=function(){l.default({locateFile:function(){return E.wasmURL}}).then(function(h){var y;for(E.runtime=h;E.callBackQueue.length>0;)(y=E.callBackQueue.shift())===null||y===void 0||y(E.runtime)}).catch(function(h){var y={message:(h==null?void 0:h.message)||"Unknown error",type:(h==null?void 0:h.name)||"Error",wasmError:h instanceof WebAssembly.CompileError||h instanceof WebAssembly.RuntimeError,originalError:h};console.debug("Rive WASM load error details:",y);var N="https://cdn.jsdelivr.net/npm/".concat(c.name,"@").concat(c.version,"/rive_fallback.wasm");if(E.wasmURL.toLowerCase()!==N)console.warn("Failed to load WASM from ".concat(E.wasmURL," (").concat(y.message,"), trying jsdelivr as a backup")),E.setWasmUrl(N),E.loadRuntime();else{var W=["Could not load Rive WASM file from ".concat(E.wasmURL," or ").concat(N,"."),"Possible reasons:","- Network connection is down","- WebAssembly is not supported in this environment","- The WASM file is corrupted or incompatible",`
Error details:`,"- Type: ".concat(y.type),"- Message: ".concat(y.message),"- WebAssembly-specific error: ".concat(y.wasmError),`
To resolve, you may need to:`,"1. Check your network connection","2. Set a new WASM source via RuntimeLoader.setWasmUrl()","3. Call RuntimeLoader.loadRuntime() again"].join(`
`);console.error(W)}})},E.getInstance=function(h){E.isLoading||(E.isLoading=!0,E.loadRuntime()),E.runtime?h(E.runtime):E.callBackQueue.push(h)},E.awaitInstance=function(){return new Promise(function(h){return E.getInstance(function(y){return h(y)})})},E.setWasmUrl=function(h){E.wasmURL=h},E.getWasmUrl=function(){return E.wasmURL},E.isLoading=!1,E.callBackQueue=[],E.wasmURL="https://unpkg.com/".concat(c.name,"@").concat(c.version,"/rive.wasm"),E}(),m;(function(E){E[E.Number=56]="Number",E[E.Trigger=58]="Trigger",E[E.Boolean=59]="Boolean"})(m||(m={}));var O=function(){function E(h,y){this.type=h,this.runtimeInput=y}return Object.defineProperty(E.prototype,"name",{get:function(){return this.runtimeInput.name},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"value",{get:function(){return this.runtimeInput.value},set:function(h){this.runtimeInput.value=h},enumerable:!1,configurable:!0}),E.prototype.fire=function(){this.type===m.Trigger&&this.runtimeInput.fire()},E.prototype.delete=function(){this.runtimeInput=null},E}(),I;(function(E){E[E.General=128]="General",E[E.OpenUrl=131]="OpenUrl"})(I||(I={}));var D=function(){function E(h,y,N,W){this.stateMachine=h,this.playing=N,this.artboard=W,this.inputs=[],this.instance=new y.StateMachineInstance(h,W),this.initInputs(y)}return Object.defineProperty(E.prototype,"name",{get:function(){return this.stateMachine.name},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"statesChanged",{get:function(){for(var h=[],y=0;y<this.instance.stateChangedCount();y++)h.push(this.instance.stateChangedNameByIndex(y));return h},enumerable:!1,configurable:!0}),E.prototype.advance=function(h){this.instance.advance(h)},E.prototype.advanceAndApply=function(h){this.instance.advanceAndApply(h)},E.prototype.reportedEventCount=function(){return this.instance.reportedEventCount()},E.prototype.reportedEventAt=function(h){return this.instance.reportedEventAt(h)},E.prototype.initInputs=function(h){for(var y=0;y<this.instance.inputCount();y++){var N=this.instance.input(y);this.inputs.push(this.mapRuntimeInput(N,h))}},E.prototype.mapRuntimeInput=function(h,y){if(h.type===y.SMIInput.bool)return new O(m.Boolean,h.asBool());if(h.type===y.SMIInput.number)return new O(m.Number,h.asNumber());if(h.type===y.SMIInput.trigger)return new O(m.Trigger,h.asTrigger())},E.prototype.cleanup=function(){this.inputs.forEach(function(h){h.delete()}),this.inputs.length=0,this.instance.delete()},E}(),Y=function(){function E(h,y,N,W,ne){W===void 0&&(W=[]),ne===void 0&&(ne=[]),this.runtime=h,this.artboard=y,this.eventManager=N,this.animations=W,this.stateMachines=ne}return E.prototype.add=function(h,y,N){if(N===void 0&&(N=!0),h=_e(h),h.length===0)this.animations.forEach(function(Pe){return Pe.playing=y}),this.stateMachines.forEach(function(Pe){return Pe.playing=y});else for(var W=this.animations.map(function(Pe){return Pe.name}),ne=this.stateMachines.map(function(Pe){return Pe.name}),he=0;he<h.length;he++){var Te=W.indexOf(h[he]),Ye=ne.indexOf(h[he]);if(Te>=0||Ye>=0)Te>=0?this.animations[Te].playing=y:this.stateMachines[Ye].playing=y;else{var U=this.artboard.animationByName(h[he]);if(U){var at=new d.Animation(U,this.artboard,this.runtime,y);at.advance(0),at.apply(1),this.animations.push(at)}else{var Qe=this.artboard.stateMachineByName(h[he]);if(Qe){var et=new D(Qe,this.runtime,y,this.artboard);this.stateMachines.push(et)}}}}return N&&(y?this.eventManager.fire({type:F.Play,data:this.playing}):this.eventManager.fire({type:F.Pause,data:this.paused})),y?this.playing:this.paused},E.prototype.initLinearAnimations=function(h,y){for(var N=this.animations.map(function(Ye){return Ye.name}),W=0;W<h.length;W++){var ne=N.indexOf(h[W]);if(ne>=0)this.animations[ne].playing=y;else{var he=this.artboard.animationByName(h[W]);if(he){var Te=new d.Animation(he,this.artboard,this.runtime,y);Te.advance(0),Te.apply(1),this.animations.push(Te)}}}},E.prototype.initStateMachines=function(h,y){for(var N=this.stateMachines.map(function(Ye){return Ye.name}),W=0;W<h.length;W++){var ne=N.indexOf(h[W]);if(ne>=0)this.stateMachines[ne].playing=y;else{var he=this.artboard.stateMachineByName(h[W]);if(he){var Te=new D(he,this.runtime,y,this.artboard);this.stateMachines.push(Te)}else this.initLinearAnimations([h[W]],y)}}},E.prototype.play=function(h){return this.add(h,!0)},E.prototype.pause=function(h){return this.add(h,!1)},E.prototype.scrub=function(h,y){var N=this.animations.filter(function(W){return h.includes(W.name)});return N.forEach(function(W){return W.scrubTo=y}),N.map(function(W){return W.name})},Object.defineProperty(E.prototype,"playing",{get:function(){return this.animations.filter(function(h){return h.playing}).map(function(h){return h.name}).concat(this.stateMachines.filter(function(h){return h.playing}).map(function(h){return h.name}))},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"paused",{get:function(){return this.animations.filter(function(h){return!h.playing}).map(function(h){return h.name}).concat(this.stateMachines.filter(function(h){return!h.playing}).map(function(h){return h.name}))},enumerable:!1,configurable:!0}),E.prototype.stop=function(h){var y=this;h=_e(h);var N=[];if(h.length===0)N=this.animations.map(function(he){return he.name}).concat(this.stateMachines.map(function(he){return he.name})),this.animations.forEach(function(he){return he.cleanup()}),this.stateMachines.forEach(function(he){return he.cleanup()}),this.animations.splice(0,this.animations.length),this.stateMachines.splice(0,this.stateMachines.length);else{var W=this.animations.filter(function(he){return h.includes(he.name)});W.forEach(function(he){he.cleanup(),y.animations.splice(y.animations.indexOf(he),1)});var ne=this.stateMachines.filter(function(he){return h.includes(he.name)});ne.forEach(function(he){he.cleanup(),y.stateMachines.splice(y.stateMachines.indexOf(he),1)}),N=W.map(function(he){return he.name}).concat(ne.map(function(he){return he.name}))}return this.eventManager.fire({type:F.Stop,data:N}),N},Object.defineProperty(E.prototype,"isPlaying",{get:function(){return this.animations.reduce(function(h,y){return h||y.playing},!1)||this.stateMachines.reduce(function(h,y){return h||y.playing},!1)},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"isPaused",{get:function(){return!this.isPlaying&&(this.animations.length>0||this.stateMachines.length>0)},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"isStopped",{get:function(){return this.animations.length===0&&this.stateMachines.length===0},enumerable:!1,configurable:!0}),E.prototype.atLeastOne=function(h,y){y===void 0&&(y=!0);var N;return this.animations.length===0&&this.stateMachines.length===0&&(this.artboard.animationCount()>0?this.add([N=this.artboard.animationByIndex(0).name],h,y):this.artboard.stateMachineCount()>0&&this.add([N=this.artboard.stateMachineByIndex(0).name],h,y)),N},E.prototype.handleLooping=function(){for(var h=0,y=this.animations.filter(function(W){return W.playing});h<y.length;h++){var N=y[h];N.loopValue===0&&N.loopCount?(N.loopCount=0,this.stop(N.name)):N.loopValue===1&&N.loopCount?(this.eventManager.fire({type:F.Loop,data:{animation:N.name,type:B.Loop}}),N.loopCount=0):N.loopValue===2&&N.loopCount>1&&(this.eventManager.fire({type:F.Loop,data:{animation:N.name,type:B.PingPong}}),N.loopCount=0)}},E.prototype.handleStateChanges=function(){for(var h=[],y=0,N=this.stateMachines.filter(function(ne){return ne.playing});y<N.length;y++){var W=N[y];h.push.apply(h,W.statesChanged)}h.length>0&&this.eventManager.fire({type:F.StateChange,data:h})},E.prototype.handleAdvancing=function(h){this.eventManager.fire({type:F.Advance,data:h})},E}(),F;(function(E){E.Load="load",E.LoadError="loaderror",E.Play="play",E.Pause="pause",E.Stop="stop",E.Loop="loop",E.Draw="draw",E.Advance="advance",E.StateChange="statechange",E.RiveEvent="riveevent",E.AudioStatusChange="audiostatuschange"})(F||(F={}));var B;(function(E){E.OneShot="oneshot",E.Loop="loop",E.PingPong="pingpong"})(B||(B={}));var j=function(){function E(h){h===void 0&&(h=[]),this.listeners=h}return E.prototype.getListeners=function(h){return this.listeners.filter(function(y){return y.type===h})},E.prototype.add=function(h){this.listeners.includes(h)||this.listeners.push(h)},E.prototype.remove=function(h){for(var y=0;y<this.listeners.length;y++){var N=this.listeners[y];if(N.type===h.type&&N.callback===h.callback){this.listeners.splice(y,1);break}}},E.prototype.removeAll=function(h){var y=this;h?this.listeners.filter(function(N){return N.type===h}).forEach(function(N){return y.remove(N)}):this.listeners.splice(0,this.listeners.length)},E.prototype.fire=function(h){var y=this.getListeners(h.type);y.forEach(function(N){return N.callback(h)})},E}(),P=function(){function E(h){this.eventManager=h,this.queue=[]}return E.prototype.add=function(h){this.queue.push(h)},E.prototype.process=function(){for(;this.queue.length>0;){var h=this.queue.shift();h!=null&&h.action&&h.action(),h!=null&&h.event&&this.eventManager.fire(h.event)}},E}(),w;(function(E){E[E.AVAILABLE=0]="AVAILABLE",E[E.UNAVAILABLE=1]="UNAVAILABLE"})(w||(w={}));var H=function(E){g(h,E);function h(){var y=E!==null&&E.apply(this,arguments)||this;return y._started=!1,y._enabled=!1,y._status=w.UNAVAILABLE,y}return h.prototype.delay=function(y){return v(this,void 0,void 0,function(){return _(this,function(N){return[2,new Promise(function(W){return setTimeout(W,y)})]})})},h.prototype.timeout=function(){return v(this,void 0,void 0,function(){return _(this,function(y){return[2,new Promise(function(N,W){return setTimeout(W,50)})]})})},h.prototype.reportToListeners=function(){this.fire({type:F.AudioStatusChange}),this.removeAll()},h.prototype.enableAudio=function(){return v(this,void 0,void 0,function(){return _(this,function(y){return this._enabled||(this._enabled=!0,this._status=w.AVAILABLE,this.reportToListeners()),[2]})})},h.prototype.testAudio=function(){return v(this,void 0,void 0,function(){return _(this,function(y){switch(y.label){case 0:if(!(this._status===w.UNAVAILABLE&&this._audioContext!==null))return[3,4];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.race([this._audioContext.resume(),this.timeout()])];case 2:return y.sent(),this.enableAudio(),[3,4];case 3:return y.sent(),[3,4];case 4:return[2]}})})},h.prototype._establishAudio=function(){return v(this,void 0,void 0,function(){return _(this,function(y){switch(y.label){case 0:return this._started?[3,5]:(this._started=!0,typeof window>"u"?(this.enableAudio(),[3,5]):[3,1]);case 1:this._audioContext=new AudioContext,this.listenForUserAction(),y.label=2;case 2:return this._status!==w.UNAVAILABLE?[3,5]:[4,this.testAudio()];case 3:return y.sent(),[4,this.delay(1e3)];case 4:return y.sent(),[3,2];case 5:return[2]}})})},h.prototype.listenForUserAction=function(){var y=this,N=function(){return v(y,void 0,void 0,function(){return _(this,function(W){return this.enableAudio(),[2]})})};document.addEventListener("pointerdown",N,{once:!0})},h.prototype.establishAudio=function(){return v(this,void 0,void 0,function(){return _(this,function(y){return this._establishAudio(),[2]})})},Object.defineProperty(h.prototype,"systemVolume",{get:function(){return this._status===w.UNAVAILABLE?(this.testAudio(),0):1},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"status",{get:function(){return this._status},enumerable:!1,configurable:!0}),h}(j),te=new H,Q=function(){function E(){}return E.prototype.observe=function(){},E.prototype.unobserve=function(){},E.prototype.disconnect=function(){},E}(),ue=globalThis.ResizeObserver||Q,de=function(){function E(){var h=this;this._elementsMap=new Map,this._onObservedEntry=function(y){var N=h._elementsMap.get(y.target);N!==null?N.onResize(y.target.clientWidth==0||y.target.clientHeight==0):h._resizeObserver.unobserve(y.target)},this._onObserved=function(y){y.forEach(h._onObservedEntry)},this._resizeObserver=new ue(this._onObserved)}return E.prototype.add=function(h,y){var N={onResize:y,element:h};return this._elementsMap.set(h,N),this._resizeObserver.observe(h),N},E.prototype.remove=function(h){this._resizeObserver.unobserve(h.element),this._elementsMap.delete(h.element)},E}(),ce=new de,oe=function(){function E(h){this.enableRiveAssetCDN=!0,this.referenceCount=0,this.src=h.src,this.buffer=h.buffer,h.assetLoader&&(this.assetLoader=h.assetLoader),this.enableRiveAssetCDN=typeof h.enableRiveAssetCDN=="boolean"?h.enableRiveAssetCDN:!0,this.eventManager=new j,h.onLoad&&this.on(F.Load,h.onLoad),h.onLoadError&&this.on(F.LoadError,h.onLoadError)}return E.prototype.initData=function(){return v(this,void 0,void 0,function(){var h,y,N;return _(this,function(W){switch(W.label){case 0:return this.src?(h=this,[4,xe(this.src)]):[3,2];case 1:h.buffer=W.sent(),W.label=2;case 2:return this.assetLoader&&(y=new this.runtime.CustomFileAssetLoader({loadContents:this.assetLoader})),N=this,[4,this.runtime.load(new Uint8Array(this.buffer),y,this.enableRiveAssetCDN)];case 3:if(N.file=W.sent(),this.file!==null)this.eventManager.fire({type:F.Load,data:this});else throw this.eventManager.fire({type:F.LoadError,data:null}),new Error(E.fileLoadErrorMessage);return[2]}})})},E.prototype.init=function(){return v(this,void 0,void 0,function(){var h;return _(this,function(y){switch(y.label){case 0:if(!this.src&&!this.buffer)throw new Error(E.missingErrorMessage);return h=this,[4,M.awaitInstance()];case 1:return h.runtime=y.sent(),[4,this.initData()];case 2:return y.sent(),[2]}})})},E.prototype.on=function(h,y){this.eventManager.add({type:h,callback:y})},E.prototype.off=function(h,y){this.eventManager.remove({type:h,callback:y})},E.prototype.cleanup=function(){var h;this.referenceCount-=1,this.referenceCount<=0&&(this.removeAllRiveEventListeners(),(h=this.file)===null||h===void 0||h.delete())},E.prototype.removeAllRiveEventListeners=function(h){this.eventManager.removeAll(h)},E.prototype.getInstance=function(){if(this.file!==null)return this.referenceCount+=1,this.file},E.missingErrorMessage="Rive source file or data buffer required",E.fileLoadErrorMessage="The file failed to load",E}(),se=function(){function E(h){var y=this,N;this.loaded=!1,this._observed=null,this.readyForPlaying=!1,this.artboard=null,this.eventCleanup=null,this.shouldDisableRiveListeners=!1,this.automaticallyHandleEvents=!1,this.enableRiveAssetCDN=!0,this._volume=1,this._artboardWidth=void 0,this._artboardHeight=void 0,this._devicePixelRatioUsed=1,this._hasZeroSize=!1,this._audioEventListener=null,this.durations=[],this.frameTimes=[],this.frameCount=0,this.isTouchScrollEnabled=!1,this.onCanvasResize=function(W){y._hasZeroSize=W,(!y._layout.maxX||!y._layout.maxY)&&y.resizeToCanvas()},this.renderSecondTimer=0,this.canvas=h.canvas,h.canvas.constructor===HTMLCanvasElement&&(this._observed=ce.add(this.canvas,this.onCanvasResize)),this.src=h.src,this.buffer=h.buffer,this.riveFile=h.riveFile,this.layout=(N=h.layout)!==null&&N!==void 0?N:new R,this.shouldDisableRiveListeners=!!h.shouldDisableRiveListeners,this.isTouchScrollEnabled=!!h.isTouchScrollEnabled,this.automaticallyHandleEvents=!!h.automaticallyHandleEvents,this.enableRiveAssetCDN=h.enableRiveAssetCDN===void 0?!0:h.enableRiveAssetCDN,this.eventManager=new j,h.onLoad&&this.on(F.Load,h.onLoad),h.onLoadError&&this.on(F.LoadError,h.onLoadError),h.onPlay&&this.on(F.Play,h.onPlay),h.onPause&&this.on(F.Pause,h.onPause),h.onStop&&this.on(F.Stop,h.onStop),h.onLoop&&this.on(F.Loop,h.onLoop),h.onStateChange&&this.on(F.StateChange,h.onStateChange),h.onAdvance&&this.on(F.Advance,h.onAdvance),h.onload&&!h.onLoad&&this.on(F.Load,h.onload),h.onloaderror&&!h.onLoadError&&this.on(F.LoadError,h.onloaderror),h.onplay&&!h.onPlay&&this.on(F.Play,h.onplay),h.onpause&&!h.onPause&&this.on(F.Pause,h.onpause),h.onstop&&!h.onStop&&this.on(F.Stop,h.onstop),h.onloop&&!h.onLoop&&this.on(F.Loop,h.onloop),h.onstatechange&&!h.onStateChange&&this.on(F.StateChange,h.onstatechange),h.assetLoader&&(this.assetLoader=h.assetLoader),this.taskQueue=new P(this.eventManager),this.init({src:this.src,buffer:this.buffer,riveFile:this.riveFile,autoplay:h.autoplay,animations:h.animations,stateMachines:h.stateMachines,artboard:h.artboard,useOffscreenRenderer:h.useOffscreenRenderer})}return E.new=function(h){return console.warn("This function is deprecated: please use `new Rive({})` instead"),new E(h)},E.prototype.onSystemAudioChanged=function(){this.volume=this._volume},E.prototype.init=function(h){var y=this,N=h.src,W=h.buffer,ne=h.riveFile,he=h.animations,Te=h.stateMachines,Ye=h.artboard,U=h.autoplay,at=U===void 0?!1:U,Qe=h.useOffscreenRenderer,et=Qe===void 0?!1:Qe;if(this.src=N,this.buffer=W,this.riveFile=ne,!this.src&&!this.buffer&&!this.riveFile)throw new Error(E.missingErrorMessage);var Pe=_e(he),yt=_e(Te);this.loaded=!1,this.readyForPlaying=!1,M.awaitInstance().then(function(He){y.runtime=He,y.removeRiveListeners(),y.deleteRiveRenderer(),y.renderer=y.runtime.makeRenderer(y.canvas,et),y.canvas.width||y.canvas.height||y.resizeDrawingSurfaceToCanvas(),y.initData(Ye,Pe,yt,at).then(function(){return y.setupRiveListeners()}).catch(function(L){console.error(L)})}).catch(function(He){console.error(He)})},E.prototype.setupRiveListeners=function(h){var y=this;if(this.eventCleanup&&this.eventCleanup(),!this.shouldDisableRiveListeners){var N=(this.animator.stateMachines||[]).filter(function(ne){return ne.playing&&y.runtime.hasListeners(ne.instance)}).map(function(ne){return ne.instance}),W=this.isTouchScrollEnabled;h&&"isTouchScrollEnabled"in h&&(W=h.isTouchScrollEnabled),this.eventCleanup=(0,p.registerTouchInteractions)({canvas:this.canvas,artboard:this.artboard,stateMachines:N,renderer:this.renderer,rive:this.runtime,fit:this._layout.runtimeFit(this.runtime),alignment:this._layout.runtimeAlignment(this.runtime),isTouchScrollEnabled:W,layoutScaleFactor:this._layout.layoutScaleFactor})}},E.prototype.removeRiveListeners=function(){this.eventCleanup&&(this.eventCleanup(),this.eventCleanup=null)},E.prototype.initializeAudio=function(){var h=this,y;te.status==w.UNAVAILABLE&&!((y=this.artboard)===null||y===void 0)&&y.hasAudio&&this._audioEventListener===null&&(this._audioEventListener={type:F.AudioStatusChange,callback:function(){return h.onSystemAudioChanged()}},te.add(this._audioEventListener),te.establishAudio())},E.prototype.initArtboardSize=function(){this.artboard&&(this._artboardWidth=this.artboard.width=this._artboardWidth||this.artboard.width,this._artboardHeight=this.artboard.height=this._artboardHeight||this.artboard.height)},E.prototype.initData=function(h,y,N,W){return v(this,void 0,void 0,function(){var ne,he;return _(this,function(Te){switch(Te.label){case 0:return Te.trys.push([0,3,,4]),this.riveFile!=null?[3,2]:(this.riveFile=new oe({src:this.src,buffer:this.buffer,enableRiveAssetCDN:this.enableRiveAssetCDN,assetLoader:this.assetLoader}),[4,this.riveFile.init()]);case 1:Te.sent(),Te.label=2;case 2:return this.file=this.riveFile.getInstance(),this.initArtboard(h,y,N,W),this.initArtboardSize(),this.initializeAudio(),this.loaded=!0,this.eventManager.fire({type:F.Load,data:(he=this.src)!==null&&he!==void 0?he:"buffer"}),this.readyForPlaying=!0,this.taskQueue.process(),this.drawFrame(),[2,Promise.resolve()];case 3:return Te.sent(),ne="Problem loading file; may be corrupt!",console.warn(ne),this.eventManager.fire({type:F.LoadError,data:ne}),[2,Promise.reject(ne)];case 4:return[2]}})})},E.prototype.initArtboard=function(h,y,N,W){if(this.file){var ne=h?this.file.artboardByName(h):this.file.defaultArtboard();if(!ne){var he="Invalid artboard name or no default artboard";console.warn(he),this.eventManager.fire({type:F.LoadError,data:he});return}if(this.artboard=ne,ne.volume=this._volume*te.systemVolume,this.artboard.animationCount()<1){var he="Artboard has no animations";throw this.eventManager.fire({type:F.LoadError,data:he}),he}this.animator=new Y(this.runtime,this.artboard,this.eventManager);var Te;y.length>0||N.length>0?(Te=y.concat(N),this.animator.initLinearAnimations(y,W),this.animator.initStateMachines(N,W)):Te=[this.animator.atLeastOne(W,!1)],this.taskQueue.add({event:{type:W?F.Play:F.Pause,data:Te}})}},E.prototype.drawFrame=function(){this.startRendering()},E.prototype.draw=function(h,y){this.frameRequestId=null;var N=performance.now();this.lastRenderTime||(this.lastRenderTime=h),this.renderSecondTimer+=h-this.lastRenderTime,this.renderSecondTimer>5e3&&(this.renderSecondTimer=0,y==null||y());var W=(h-this.lastRenderTime)/1e3;this.lastRenderTime=h;for(var ne=this.animator.animations.filter(function(Ee){return Ee.playing||Ee.needsScrub}).sort(function(Ee){return Ee.needsScrub?-1:1}),he=0,Te=ne;he<Te.length;he++){var Ye=Te[he];Ye.advance(W),Ye.instance.didLoop&&(Ye.loopCount+=1),Ye.apply(1)}for(var U=this.animator.stateMachines.filter(function(Ee){return Ee.playing}),at=0,Qe=U;at<Qe.length;at++){var et=Qe[at],Pe=et.reportedEventCount();if(Pe)for(var yt=0;yt<Pe;yt++){var He=et.reportedEventAt(yt);if(He)if(He.type===I.OpenUrl){if(this.eventManager.fire({type:F.RiveEvent,data:He}),this.automaticallyHandleEvents){var L=document.createElement("a"),S=He,K=S.url,fe=S.target,me=(0,p.sanitizeUrl)(K);K&&L.setAttribute("href",me),fe&&L.setAttribute("target",fe),me&&me!==p.BLANK_URL&&L.click()}}else this.eventManager.fire({type:F.RiveEvent,data:He})}et.advanceAndApply(W)}this.animator.stateMachines.length==0&&this.artboard.advance(W);var le=this.renderer;le.clear(),le.save(),this.alignRenderer(),this._hasZeroSize||this.artboard.draw(le),le.restore(),le.flush(),this.animator.handleLooping(),this.animator.handleStateChanges(),this.animator.handleAdvancing(W),this.frameCount++;var Xe=performance.now();for(this.frameTimes.push(Xe),this.durations.push(Xe-N);this.frameTimes[0]<=Xe-1e3;)this.frameTimes.shift(),this.durations.shift();this.animator.isPlaying?this.startRendering():this.animator.isPaused?this.lastRenderTime=0:this.animator.isStopped&&(this.lastRenderTime=0)},E.prototype.alignRenderer=function(){var h=this,y=h.renderer,N=h.runtime,W=h._layout,ne=h.artboard;y.align(W.runtimeFit(N),W.runtimeAlignment(N),{minX:W.minX,minY:W.minY,maxX:W.maxX,maxY:W.maxY},ne.bounds,this._devicePixelRatioUsed*W.layoutScaleFactor)},Object.defineProperty(E.prototype,"fps",{get:function(){return this.durations.length},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"frameTime",{get:function(){return this.durations.length===0?0:(this.durations.reduce(function(h,y){return h+y},0)/this.durations.length).toFixed(4)},enumerable:!1,configurable:!0}),E.prototype.cleanup=function(){var h;this.stopRendering(),this.cleanupInstances(),this._observed!==null&&ce.remove(this._observed),this.removeRiveListeners(),(h=this.riveFile)===null||h===void 0||h.cleanup(),this.riveFile=null,this.file=null,this.deleteRiveRenderer(),this._audioEventListener!==null&&(te.remove(this._audioEventListener),this._audioEventListener=null)},E.prototype.deleteRiveRenderer=function(){var h;(h=this.renderer)===null||h===void 0||h.delete(),this.renderer=null},E.prototype.cleanupInstances=function(){this.eventCleanup!==null&&this.eventCleanup(),this.stop(),this.artboard&&(this.artboard.delete(),this.artboard=null)},E.prototype.retrieveTextRun=function(h){var y;if(!h){console.warn("No text run name provided");return}if(!this.artboard){console.warn("Tried to access text run, but the Artboard is null");return}var N=this.artboard.textRun(h);if(!N){console.warn("Could not access a text run with name '".concat(h,"' in the '").concat((y=this.artboard)===null||y===void 0?void 0:y.name,"' Artboard. Note that you must rename a text run node in the Rive editor to make it queryable at runtime."));return}return N},E.prototype.getTextRunValue=function(h){var y=this.retrieveTextRun(h);return y?y.text:void 0},E.prototype.setTextRunValue=function(h,y){var N=this.retrieveTextRun(h);N&&(N.text=y)},E.prototype.play=function(h,y){var N=this;if(h=_e(h),!this.readyForPlaying){this.taskQueue.add({action:function(){return N.play(h,y)}});return}this.animator.play(h),this.eventCleanup&&this.eventCleanup(),this.setupRiveListeners(),this.startRendering()},E.prototype.pause=function(h){var y=this;if(h=_e(h),!this.readyForPlaying){this.taskQueue.add({action:function(){return y.pause(h)}});return}this.eventCleanup&&this.eventCleanup(),this.animator.pause(h)},E.prototype.scrub=function(h,y){var N=this;if(h=_e(h),!this.readyForPlaying){this.taskQueue.add({action:function(){return N.scrub(h,y)}});return}this.animator.scrub(h,y||0),this.drawFrame()},E.prototype.stop=function(h){var y=this;if(h=_e(h),!this.readyForPlaying){this.taskQueue.add({action:function(){return y.stop(h)}});return}this.animator&&this.animator.stop(h),this.eventCleanup&&this.eventCleanup()},E.prototype.reset=function(h){var y,N=h==null?void 0:h.artboard,W=_e(h==null?void 0:h.animations),ne=_e(h==null?void 0:h.stateMachines),he=(y=h==null?void 0:h.autoplay)!==null&&y!==void 0?y:!1;this.cleanupInstances(),this.initArtboard(N,W,ne,he),this.taskQueue.process()},E.prototype.load=function(h){this.file=null,this.stop(),this.init(h)},Object.defineProperty(E.prototype,"layout",{get:function(){return this._layout},set:function(h){this._layout=h,(!h.maxX||!h.maxY)&&this.resizeToCanvas(),this.loaded&&!this.animator.isPlaying&&this.drawFrame()},enumerable:!1,configurable:!0}),E.prototype.resizeToCanvas=function(){this._layout=this.layout.copyWith({minX:0,minY:0,maxX:this.canvas.width,maxY:this.canvas.height})},E.prototype.resizeDrawingSurfaceToCanvas=function(h){if(this.canvas instanceof HTMLCanvasElement&&window){var y=this.canvas.getBoundingClientRect(),N=y.width,W=y.height,ne=h||window.devicePixelRatio||1;if(this.devicePixelRatioUsed=ne,this.canvas.width=ne*N,this.canvas.height=ne*W,this.startRendering(),this.resizeToCanvas(),this.layout.fit===f.Layout){var he=this._layout.layoutScaleFactor;this.artboard.width=N/he,this.artboard.height=W/he}}},Object.defineProperty(E.prototype,"source",{get:function(){return this.src},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"activeArtboard",{get:function(){return this.artboard?this.artboard.name:""},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"animationNames",{get:function(){if(!this.loaded||!this.artboard)return[];for(var h=[],y=0;y<this.artboard.animationCount();y++)h.push(this.artboard.animationByIndex(y).name);return h},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"stateMachineNames",{get:function(){if(!this.loaded||!this.artboard)return[];for(var h=[],y=0;y<this.artboard.stateMachineCount();y++)h.push(this.artboard.stateMachineByIndex(y).name);return h},enumerable:!1,configurable:!0}),E.prototype.stateMachineInputs=function(h){if(this.loaded){var y=this.animator.stateMachines.find(function(N){return N.name===h});return y==null?void 0:y.inputs}},E.prototype.retrieveInputAtPath=function(h,y){if(!h){console.warn("No input name provided for path '".concat(y,"'"));return}if(!this.artboard){console.warn("Tried to access input: '".concat(h,"', at path: '").concat(y,"', but the Artboard is null"));return}var N=this.artboard.inputByPath(h,y);if(!N){console.warn("Could not access an input with name: '".concat(h,"', at path:'").concat(y,"'"));return}return N},E.prototype.setBooleanStateAtPath=function(h,y,N){var W=this.retrieveInputAtPath(h,N);W&&(W.type===m.Boolean?W.asBool().value=y:console.warn("Input with name: '".concat(h,"', at path:'").concat(N,"' is not a boolean")))},E.prototype.setNumberStateAtPath=function(h,y,N){var W=this.retrieveInputAtPath(h,N);W&&(W.type===m.Number?W.asNumber().value=y:console.warn("Input with name: '".concat(h,"', at path:'").concat(N,"' is not a number")))},E.prototype.fireStateAtPath=function(h,y){var N=this.retrieveInputAtPath(h,y);N&&(N.type===m.Trigger?N.asTrigger().fire():console.warn("Input with name: '".concat(h,"', at path:'").concat(y,"' is not a trigger")))},E.prototype.retrieveTextAtPath=function(h,y){if(!h){console.warn("No text name provided for path '".concat(y,"'"));return}if(!y){console.warn("No path provided for text '".concat(h,"'"));return}if(!this.artboard){console.warn("Tried to access text: '".concat(h,"', at path: '").concat(y,"', but the Artboard is null"));return}var N=this.artboard.textByPath(h,y);if(!N){console.warn("Could not access text with name: '".concat(h,"', at path:'").concat(y,"'"));return}return N},E.prototype.getTextRunValueAtPath=function(h,y){var N=this.retrieveTextAtPath(h,y);if(!N){console.warn("Could not get text with name: '".concat(h,"', at path:'").concat(y,"'"));return}return N.text},E.prototype.setTextRunValueAtPath=function(h,y,N){var W=this.retrieveTextAtPath(h,N);if(!W){console.warn("Could not set text with name: '".concat(h,"', at path:'").concat(N,"'"));return}W.text=y},Object.defineProperty(E.prototype,"playingStateMachineNames",{get:function(){return this.loaded?this.animator.stateMachines.filter(function(h){return h.playing}).map(function(h){return h.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"playingAnimationNames",{get:function(){return this.loaded?this.animator.animations.filter(function(h){return h.playing}).map(function(h){return h.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"pausedAnimationNames",{get:function(){return this.loaded?this.animator.animations.filter(function(h){return!h.playing}).map(function(h){return h.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"pausedStateMachineNames",{get:function(){return this.loaded?this.animator.stateMachines.filter(function(h){return!h.playing}).map(function(h){return h.name}):[]},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"isPlaying",{get:function(){return this.animator.isPlaying},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"isPaused",{get:function(){return this.animator.isPaused},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"isStopped",{get:function(){return this.animator.isStopped},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"bounds",{get:function(){return this.artboard?this.artboard.bounds:void 0},enumerable:!1,configurable:!0}),E.prototype.on=function(h,y){this.eventManager.add({type:h,callback:y})},E.prototype.off=function(h,y){this.eventManager.remove({type:h,callback:y})},E.prototype.unsubscribe=function(h,y){console.warn("This function is deprecated: please use `off()` instead."),this.off(h,y)},E.prototype.removeAllRiveEventListeners=function(h){this.eventManager.removeAll(h)},E.prototype.unsubscribeAll=function(h){console.warn("This function is deprecated: please use `removeAllRiveEventListeners()` instead."),this.removeAllRiveEventListeners(h)},E.prototype.stopRendering=function(){this.loaded&&this.frameRequestId&&(this.runtime.cancelAnimationFrame?this.runtime.cancelAnimationFrame(this.frameRequestId):cancelAnimationFrame(this.frameRequestId),this.frameRequestId=null)},E.prototype.startRendering=function(){this.loaded&&this.artboard&&!this.frameRequestId&&(this.runtime.requestAnimationFrame?this.frameRequestId=this.runtime.requestAnimationFrame(this.draw.bind(this)):this.frameRequestId=requestAnimationFrame(this.draw.bind(this)))},E.prototype.enableFPSCounter=function(h){this.runtime.enableFPSCounter(h)},E.prototype.disableFPSCounter=function(){this.runtime.disableFPSCounter()},Object.defineProperty(E.prototype,"contents",{get:function(){if(this.loaded){for(var h={artboards:[]},y=0;y<this.file.artboardCount();y++){for(var N=this.file.artboardByIndex(y),W={name:N.name,animations:[],stateMachines:[]},ne=0;ne<N.animationCount();ne++){var he=N.animationByIndex(ne);W.animations.push(he.name)}for(var Te=0;Te<N.stateMachineCount();Te++){for(var Ye=N.stateMachineByIndex(Te),U=Ye.name,at=new this.runtime.StateMachineInstance(Ye,N),Qe=[],et=0;et<at.inputCount();et++){var Pe=at.input(et);Qe.push({name:Pe.name,type:Pe.type})}W.stateMachines.push({name:U,inputs:Qe})}h.artboards.push(W)}return h}},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"volume",{get:function(){return this.artboard&&this.artboard.volume!==this._volume&&(this._volume=this.artboard.volume),this._volume},set:function(h){this._volume=h,this.artboard&&(this.artboard.volume=h*te.systemVolume)},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"artboardWidth",{get:function(){var h;return this.artboard?this.artboard.width:(h=this._artboardWidth)!==null&&h!==void 0?h:0},set:function(h){this._artboardWidth=h,this.artboard&&(this.artboard.width=h)},enumerable:!1,configurable:!0}),Object.defineProperty(E.prototype,"artboardHeight",{get:function(){var h;return this.artboard?this.artboard.height:(h=this._artboardHeight)!==null&&h!==void 0?h:0},set:function(h){this._artboardHeight=h,this.artboard&&(this.artboard.height=h)},enumerable:!1,configurable:!0}),E.prototype.resetArtboardSize=function(){this.artboard?(this.artboard.resetArtboardSize(),this._artboardWidth=this.artboard.width,this._artboardHeight=this.artboard.height):(this._artboardWidth=void 0,this._artboardHeight=void 0)},Object.defineProperty(E.prototype,"devicePixelRatioUsed",{get:function(){return this._devicePixelRatioUsed},set:function(h){this._devicePixelRatioUsed=h},enumerable:!1,configurable:!0}),E.missingErrorMessage="Rive source file or data buffer required",E}(),xe=function(E){return v(void 0,void 0,void 0,function(){var h,y,N;return _(this,function(W){switch(W.label){case 0:return h=new Request(E),[4,fetch(h)];case 1:return y=W.sent(),[4,y.arrayBuffer()];case 2:return N=W.sent(),[2,N]}})})},_e=function(E){return typeof E=="string"?[E]:E instanceof Array?E:[]},Fe={EventManager:j,TaskQueueManager:P},nt=function(E){return new Promise(function(h){return M.getInstance(function(y){y.decodeAudio(E,h)})})},We=function(E){return new Promise(function(h){return M.getInstance(function(y){y.decodeImage(E,h)})})},ee=function(E){return new Promise(function(h){return M.getInstance(function(y){y.decodeFont(E,h)})})}})(),a})())})(Ec);var Cs=Ec.exports;const Tc=new hf,bc=new _n(75,window.innerWidth/window.innerHeight,.1,1e3),Is=new tg({alpha:!0});Is.setSize(window.innerWidth,window.innerHeight);Is.setAnimationLoop(sg);document.body.appendChild(Is.domElement);const ig=new hr(1,1,1),rg=new yo({color:16773120}),fo=new In(ig,rg);Tc.add(fo);bc.position.z=5;function sg(){fo.rotation.x+=.01,fo.rotation.y+=.01,Is.render(Tc,bc)}const Ac=new Cs.Rive({src:"/dwtd_-_electrical_wire.riv",canvas:document.getElementById("canvas"),autoplay:!0,automaticallyHandleEvents:!0,artboard:"Run",stateMachines:"Game machine",onLoad:()=>{Ac.resizeDrawingSurfaceToCanvas()}});function ag(i){const e=i.data,t=e.properties;if(e.type===Cs.RiveEventType.General){console.log("Event name",e.name);try{console.log("Rating",t.rating),console.log("Message",t.message)}catch{console.log("error")}}else e.type===Cs.RiveEventType.OpenUrl?(console.log("Event name",e.name),window.open(e.url)):console.log("test")}Ac.on(Cs.EventType.RiveEvent,ag);console.log("Prova");
