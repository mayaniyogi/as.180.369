import"/dockervm24/ed921311-9af1-11ef-8c58-5254001d4703/proxy/3000/build/_shared/chunk-2NH4LW52.js";var c=/((?<before>[\s\S]*?)\s+){0,1}\^\^\^(\s+(?<after>[\s\S]*)){0,1}/,g={name:"card",alias:["grid-item-card"],arg:{type:"myst",doc:"The title of the card, usually shown as bolded text at the top of the card."},options:{url:{type:String,alias:["link"],doc:"Turns the card into a link, can be internal or external."},header:{type:"myst",doc:"Adds a header to the card."},footer:{type:"myst",doc:"Adds a footer to the card."}},body:{type:"myst",required:!0,doc:"Main body content of the card."},run(o){let{url:s,header:t,footer:r}=o.options||{},e,a,n;if(t||r)e=t?[{type:"paragraph",children:t}]:[],a=o.body,n=r?[{type:"paragraph",children:r}]:[];else{let[i,p]=f(o.body);e=p.length?i:[];let h=p.length?p:i;[a,n]=y(h)}let l=[];return e.length&&l.push({type:"header",children:e}),o.arg&&l.push({type:"cardTitle",children:o.arg}),l.push(...a),n.length&&l.push({type:"footer",children:n}),[{type:"card",url:s,children:l}]}};function d(o){var s;let t=[],r=[],e=!1;return(s=o.children)===null||s===void 0||s.forEach(n=>{var l;if(e){r.push(n);return}if(n.type!=="text"||!n.value){t.push(n);return}let i=n.value,p=c.exec(i);if(!p){t.push(n);return}e=!0;let{before:h,after:u}=(l=p.groups)!==null&&l!==void 0?l:{};h&&t.push({type:"text",value:h}),u&&r.push({type:"text",value:u})}),{before:t.length?{...o,children:t}:null,after:r.length?{...o,children:r}:null,post:e}}function f(o){let s=[],t=[],r=!1;return o.forEach(e=>{if(r)t.push(e);else if(e.type!=="paragraph")s.push(e);else{let a=d(e),{before:n,after:l}=a;r=a.post,n&&s.push(n),l&&t.push(l)}}),[s,t]}function y(o){let s=[],t=[],r=!1;return o.forEach(e=>{r?t.push(e):e.type!=="blockBreak"?s.push(e):r=!0}),[s,t]}export{g as cardDirective,d as splitParagraphNode};