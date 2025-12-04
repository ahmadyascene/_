onmessage=({data:[S,C,n,dl]})=>{
  const L=[[0]],
    cd=r=>{const D=[];
      for (const {P} of r.slice(1)) for (const [d] of P)
        if (!D.includes(d)) D.push(d);
      return D.length;},
    c=(S,i=0,l=[])=>{
      if (i+1==S.length) L:for (const s of S[i]) {const r=[0], P=[];
        l:for (const cs of l.concat(s)) {
          for (const p of cs.P) if (P.includes(p))
            if (C.slice(0,n).includes(cs.c)) continue L; else continue l;
          r.push(cs); r[0]+=cs.u; for (const p of cs.P) P.push(p);}
        if (dl=='most credits/courses') {
          if ((r.length-1)*(r[0]||1)==(L[0].length-1)*(L[0][0]||1)) L.push(r);
          else if ((r.length-1)*(r[0]||1)>(L[0].length-1)*(L[0][0]||1)) {
            L.length=0; L.push(r);}}
        else {if (cd(r)==cd(L[0])) L.push(r);
          else if (cd(r)<(cd(L[0])||7)) {L.length=0; L.push(r);}}}
      else for (const s of S[i]) c(S,i+1,l.concat(s));};
  let N=1, I=0, bc=0;
  async function b(S,i=0) {
    if (i==I) for (const s of S[i]) {postMessage(bc/N*100+'%');
      if (bc) await new Promise(t=>setTimeout(t)); c(S.toSpliced(i,1,[s])); bc++;}
    else for (const s of S[i]) await b(S.toSpliced(i,1,[s]),i+1);};
  for (let i=S.length; i;) {N*=S[--i].length; if (N>1e5&&!I) {I=i; N=S[i].length;}}
  if (!I) N=S[0].length;
  b(S).then(()=>postMessage(L));}
