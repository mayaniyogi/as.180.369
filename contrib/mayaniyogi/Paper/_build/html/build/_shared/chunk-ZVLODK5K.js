import{c as o}from"/dockervm24/ed921311-9af1-11ef-8c58-5254001d4703/proxy/3000/build/_shared/chunk-2NH4LW52.js";var u=o((i,n)=>{n.exports=t;t.displayName="systemd";t.aliases=[];function t(s){(function(a){var r={pattern:/^[;#].*/m,greedy:!0},e=/"(?:[^\r\n"\\]|\\(?:[^\r]|\r\n?))*"(?!\S)/.source;a.languages.systemd={comment:r,section:{pattern:/^\[[^\n\r\[\]]*\](?=[ \t]*$)/m,greedy:!0,inside:{punctuation:/^\[|\]$/,"section-name":{pattern:/[\s\S]+/,alias:"selector"}}},key:{pattern:/^[^\s=]+(?=[ \t]*=)/m,greedy:!0,alias:"attr-name"},value:{pattern:RegExp(/(=[ \t]*(?!\s))/.source+"(?:"+e+`|(?=[^"\r
]))(?:`+(/[^\s\\]/.source+'|[ 	]+(?:(?![ 	"])|'+e+")|"+/\\[\r\n]+(?:[#;].*[\r\n]+)*(?![#;])/.source)+")*"),lookbehind:!0,greedy:!0,alias:"attr-value",inside:{comment:r,quoted:{pattern:RegExp(/(^|\s)/.source+e),lookbehind:!0,greedy:!0},punctuation:/\\$/m,boolean:{pattern:/^(?:false|no|off|on|true|yes)$/,greedy:!0}}},punctuation:/=/}})(s)}});export{u as a};