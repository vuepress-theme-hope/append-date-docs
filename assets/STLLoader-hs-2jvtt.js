import{Loader as z,FileLoader as I,BufferGeometry as H,Color as P,BufferAttribute as G,Vector3 as _,Float32BufferAttribute as N}from"./three.module-kp_GDmMT.js";class O extends z{constructor(h){super(h)}load(h,T,v,y){const S=this,x=new I(this.manager);x.setPath(this.path),x.setResponseType("arraybuffer"),x.setRequestHeader(this.requestHeader),x.setWithCredentials(this.withCredentials),x.load(h,function(D){try{T(S.parse(D))}catch(A){y?y(A):console.error(A),S.manager.itemError(h)}},v,y)}parse(h){function T(t){const e=new DataView(t),o=32/8*3+32/8*3*3+16/8,a=e.getUint32(80,!0);if(80+32/8+a*o===e.byteLength)return!0;const i=[115,111,108,105,100];for(let s=0;s<5;s++)if(v(i,e,s))return!1;return!0}function v(t,e,o){for(let a=0,f=t.length;a<f;a++)if(t[a]!==e.getUint8(o+a))return!1;return!0}function y(t){const e=new DataView(t),o=e.getUint32(80,!0);let a,f,i,s=!1,m,b,C,U,L;for(let n=0;n<70;n++)e.getUint32(n,!1)==1129270351&&e.getUint8(n+4)==82&&e.getUint8(n+5)==61&&(s=!0,m=new Float32Array(o*3*3),b=e.getUint8(n+6)/255,C=e.getUint8(n+7)/255,U=e.getUint8(n+8)/255,L=e.getUint8(n+9)/255);const g=84,r=12*4+2,c=new H,p=new Float32Array(o*3*3),d=new Float32Array(o*3*3),w=new P;for(let n=0;n<o;n++){const F=g+n*r,V=e.getFloat32(F,!0),B=e.getFloat32(F+4,!0),R=e.getFloat32(F+8,!0);if(s){const l=e.getUint16(F+48,!0);l&32768?(a=b,f=C,i=U):(a=(l&31)/31,f=(l>>5&31)/31,i=(l>>10&31)/31)}for(let l=1;l<=3;l++){const E=F+l*12,u=n*3*3+(l-1)*3;p[u]=e.getFloat32(E,!0),p[u+1]=e.getFloat32(E+4,!0),p[u+2]=e.getFloat32(E+8,!0),d[u]=V,d[u+1]=B,d[u+2]=R,s&&(w.set(a,f,i).convertSRGBToLinear(),m[u]=w.r,m[u+1]=w.g,m[u+2]=w.b)}}return c.setAttribute("position",new G(p,3)),c.setAttribute("normal",new G(d,3)),s&&(c.setAttribute("color",new G(m,3)),c.hasColors=!0,c.alpha=L),c}function S(t){const e=new H,o=/solid([\s\S]*?)endsolid/g,a=/facet([\s\S]*?)endfacet/g,f=/solid\s(.+)/;let i=0;const s=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+s+s+s,"g"),b=new RegExp("normal"+s+s+s,"g"),C=[],U=[],L=[],g=new _;let r,c=0,p=0,d=0;for(;(r=o.exec(t))!==null;){p=d;const w=r[0],n=(r=f.exec(w))!==null?r[1]:"";for(L.push(n);(r=a.exec(w))!==null;){let B=0,R=0;const l=r[0];for(;(r=b.exec(l))!==null;)g.x=parseFloat(r[1]),g.y=parseFloat(r[2]),g.z=parseFloat(r[3]),R++;for(;(r=m.exec(l))!==null;)C.push(parseFloat(r[1]),parseFloat(r[2]),parseFloat(r[3])),U.push(g.x,g.y,g.z),B++,d++;R!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+i),B!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+i),i++}const F=p,V=d-p;e.userData.groupNames=L,e.addGroup(F,V,c),c++}return e.setAttribute("position",new N(C,3)),e.setAttribute("normal",new N(U,3)),e}function x(t){return typeof t!="string"?new TextDecoder().decode(t):t}function D(t){if(typeof t=="string"){const e=new Uint8Array(t.length);for(let o=0;o<t.length;o++)e[o]=t.charCodeAt(o)&255;return e.buffer||e}else return t}const A=D(h);return T(A)?y(A):S(x(h))}}export{O as STLLoader};
