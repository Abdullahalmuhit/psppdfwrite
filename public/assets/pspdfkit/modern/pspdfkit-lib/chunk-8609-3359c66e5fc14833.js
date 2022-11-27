/*!
 * PSPDFKit for Web 0.0.0-dev (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2022 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(globalThis.webpackChunkPSPDFKit=globalThis.webpackChunkPSPDFKit||[]).push([[8609],{88609:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>K});var s=a(49477),n=a(80614),o=a(70545),l=a(46525),r=a(73940),i=a(78509),c=a(24956),d=a(35369),m=a(33502),u=a(11706),g=a(67294),p=a(94184),f=a.n(p),v=a(2316),P=a(49332),y=a(96456),h=a(15435),b=a(65827),I=a(8891),k=a(22122),w=a(88594);const E=g.memo((e=>{let{items:t,builtInItems:s,moveDialog:n,CSS_HACK:{components:{ToolbarButtonComponent:o},styles:l}}=e;return t.map(((e,t)=>{const r=s.find((t=>t.type===e.type));if("spacer"===e.type)return g.createElement("div",{style:{flex:1},className:e.className,key:`spacer-${t}`});if("move"===e.type&&r)return g.createElement("div",{key:r.type,className:l.moveButtonContainer},g.createElement(o,(0,k.Z)({},r,{icon:a(72303),className:f()(r.className,e.className),onPress:e=>{r&&r.onPress&&r.onPress(e)}})),n);if(r){const s=(0,w.zW)(r.type);return g.createElement(o,(0,k.Z)({},r,{key:r.type||t,icon:a(33720)(`./${s}.svg`),onPress:e=>{r&&r.onPress&&r.onPress(e)},className:f()(r.className,e.className)}))}if("custom"===e.type&&e.node){const{type:a,...s}=e;return g.createElement(I.Z,(0,k.Z)({},s,{onPress:t=>e.onPress&&e.onPress(t,e.id),key:e.id||t}))}return g.createElement(o,(0,k.Z)({},e,{key:r&&r.type||t,onPress:t=>e.onPress&&e.onPress(t,e.id)}))}))})),N=g.memo((e=>{let{items:t,builtInItems:s,CSS_HACK:{components:{ToolbarDropdownGroupComponent:n,ToolbarButtonComponent:o},styles:l},frameWindow:r}=e;const i=t.map((e=>{let{item:t,index:a}=e;const n=s.find((e=>e.type===t.type));return n?{index:a,item:{...n,className:f()(n.className,t.className),onPress:e=>{n.onPress&&n.onPress(e)}}}:{item:t,index:a}}));return i.length>0&&g.createElement(g.Fragment,null,g.createElement("div",{style:{flex:1},key:"spacer-responsive"}),g.createElement(n,{icon:{type:"more",size:{width:20,height:20}},items:i,discreteDropdown:!0,caretDirection:"down",role:"menu",ItemComponent:e=>{let{item:t,isSelectedItem:n,state:r,itemComponentProps:i}=e;const c=!n&&s.find((e=>e.type===t.item.type));if(n)return null;const d=c&&c.type?(0,w.zW)(c.type):"";return t.item.node?g.createElement(I.Z,(0,k.Z)({},t.item,{onPress:t.item.onPress?e=>t.item.onPress(e,t.id):void 0,key:t.item.id||t.index})):g.createElement(o,(0,k.Z)({},t.item,{role:"menuitem",className:f()(t.item.className,l.toolbar.dropdownButton,"Focused"===r&&l.toolbar["dropdownButton"+r]),icon:c?a(33720)(`./${d}.svg`):t.item.icon,itemComponentProps:i}))},onSelect:(e,t)=>{const{onPress:a,disabled:s}=t.item;s||a&&a(e)},noInitialSelection:!0,frameWindow:r}))}));var x,C,D=a(46232);const S=new m.$u({width:n.zA,height:n._2}),M=e=>{const{styles:t,formatMessage:s,movePreview:n}=e;return g.createElement("div",{style:{width:e.width,height:e.height},className:f()(t.importedDocument,{[t.importedDocumentMovePreview]:n})},g.createElement("div",{className:t.importedDocumentIconCircle},g.createElement(y.Z,{src:a(42900)})),g.createElement("span",{className:t.importedDocumentInfo},s(R.documentMergedHere)))},z=(e,t,a,s)=>{const n=t.flatten();let l=e.map((e=>({type:"page",page:e,rotation:0,label:e.pageLabel})));const r=e=>{const t=e.dupeOf||e.label;let a=0;for(const e of l)"dupeOf"in e&&null!=e.dupeOf&&e.dupeOf===t&&null!=e.dupeNumber&&e.dupeNumber>a&&(a=e.dupeNumber);return a+1};let i=0;for(const e of n)switch(e.type){case"addPage":{let t;null!=e.afterPageIndex?t=e.afterPageIndex+1:((0,D.k)(null!=e.beforePageIndex),t=e.beforePageIndex),++i,l=l.insert(t,{type:"newPage",label:`${a(R.newPage)} ${i}`,rotation:0,size:new m.$u({width:e.pageWidth,height:e.pageHeight})});break}case"removePages":{const t=e.pageIndexes.map((e=>l.get(e)));for(const e of t){(0,D.k)(null!=e);const t=l.indexOf(e);l=l.delete(t)}break}case"rotatePages":for(const t of e.pageIndexes){const a=l.get(t);let s,n;(0,D.k)(null!=a),(0,D.k)("page"===a.type||"newPage"===a.type);const r=a.rotation;if(n=90===e.rotateBy?270===r?0:r+e.rotateBy:90===r?0:180===r?90:270===r?180:r+e.rotateBy,(0,D.k)(0===n||90===n||180===n||270===n),"page"===a.type)s={...a,rotation:n};else{if("newPage"!==a.type)throw new o.p2("Rotation is not allowed on imported documents");s={...a,rotation:n}}l=l.set(t,s)}break;case"duplicatePages":{const t=e.pageIndexes.map((e=>l.get(e)));for(const e of t){(0,D.k)(null!=e),(0,D.k)("page"===e.type);const t=r(e),a=e.dupeOf||e.label,s=l.indexOf(e);l=l.insert(s+1,Object.assign({},e,{label:`${a} (${t})`,dupeOf:a,dupeNumber:t}))}break}case"movePages":{const t=e.pageIndexes;if(1===t.length){const a=t[0];let s;null!=e.beforePageIndex?s=e.beforePageIndex:((0,D.k)(null!=e.afterPageIndex),s=e.afterPageIndex+1);const n=l.get(a);(0,D.k)(null!=n);const o=l.get(s),r=l.size;l=l.delete(a),s===r?l=l.push(n):0===s?l=l.unshift(n):((0,D.k)(null!=o),l=l.insert(l.indexOf(o),n))}else{const a=t.slice().sort();if(null!=e.beforePageIndex){(0,D.k)(0===e.beforePageIndex);const t=a.map((e=>l.get(e))).reverse();for(const e of t)(0,D.k)(null!=e),l=l.delete(l.indexOf(e)),l=l.unshift(e)}else{(0,D.k)(null!=e.afterPageIndex);const t=l.get(e.afterPageIndex);(0,D.k)(null!=t);const s=a.map((e=>l.get(e))).reverse();for(const e of s)(0,D.k)(null!=e),l=l.delete(l.indexOf(e)),l=l.insert(l.indexOf(t)+1,e)}}break}case"importDocument":{let t,a;if("beforePageIndex"in e&&null!=e.beforePageIndex?t=e.beforePageIndex:((0,D.k)("afterPageIndex"in e&&null!=e.afterPageIndex),t=e.afterPageIndex+1),"string"==typeof e.document){const t=e.document;(0,D.k)(s.has(t)),a=s.get(t,"Imported Document")}else(0,D.k)("string"==typeof e.document.name),a=e.document.name;l=l.insert(t,{type:"importedDocument",label:a});break}case"keepPages":case"applyInstantJson":case"applyXfdf":case"flattenAnnotations":case"performOcr":case"setPageLabel":case"applyRedactions":case"updateMetadata":case"cropPages":throw Error("Unknown document operation");default:(0,o.Rz)(e.type)}return l},A=e=>{const{pages:t,style:a,styles:s,previewCount:n}=e;return g.createElement("div",{className:s.movePreview},g.createElement("div",{className:f()(s.movePreviewPages,{[s.movePreviewPagesLoose]:"loose"===a})},t),g.createElement("div",{className:s.movePreviewCount},n||t.length))},K=(0,i.XN)((e=>{const{onCancel:t,pages:i,dispatch:p,backend:k,frameWindow:w,intl:{formatMessage:K},onDialog:T,footerItems:B,toolbarItems:L}=e,O=g.useMemo((()=>B.toJS()),[B]),F=g.useMemo((()=>L.toJS()),[L]),{styles:H}=e.CSS_HACK,[Z,_]=g.useState((0,d.D5)()),[W,$]=g.useState((0,d.aV)()),[V,U]=g.useState(0),G=W.slice(0,W.size-V),X=z(e.pages,G,K,Z),[Y,J]=g.useState((0,d.l4)()),[j,q]=g.useState(!1),[Q,ee]=g.useState(!1),te=g.useRef(null),ae=g.useRef(null),[se,ne]=g.useState(!1),[oe,le]=g.useState(""),re=g.useCallback((()=>{const e=ae.current;null!=e&&(se&&e.ownerDocument.activeElement!==e?e.focus():se||e.ownerDocument.activeElement!==e||e.blur())}),[se]),ie=g.useCallback((e=>{ne(e),re(),T(e)}),[T,re]);g.useEffect((()=>{re()}),[re]);const ce=g.useCallback((e=>{$(G.push(e)),U(0)}),[G]),de=g.useRef(!0);g.useLayoutEffect((()=>()=>{de.current&&(de.current=!1)}),[]);const me=g.useCallback((()=>{const e=i.get(0),t=e?e.pageSize:S,a={type:"addPage",backgroundColor:m.Il.WHITE,pageWidth:t.width,pageHeight:t.height,rotateBy:0};1===Y.size?a.afterPageIndex=Y.first():a.beforePageIndex=0,ce(a),J(Y.clear())}),[i,Y,ce]),ue=g.useCallback((()=>{ce({type:"removePages",pageIndexes:Y.toArray()}),J(Y.clear())}),[ce,Y]),ge=g.useCallback((()=>{ce({type:"duplicatePages",pageIndexes:Y.toArray()}),J(Y.clear())}),[ce,Y]),pe=g.useCallback((()=>{ce({type:"rotatePages",pageIndexes:Y.toArray(),rotateBy:270})}),[ce,Y]),fe=g.useCallback((()=>{ce({type:"rotatePages",pageIndexes:Y.toArray(),rotateBy:90})}),[ce,Y]),ve=g.useCallback((()=>{ie(!se)}),[se,ie]),Pe=g.useCallback((e=>{const t=e.target.value;let a=t;const s=parseInt(t,10);isNaN(s)||(a=Math.min(Math.max(s,0),X.size).toString()),le(a)}),[X.size]),ye=parseInt(oe,10),he=g.useCallback((e=>{let t;return 1===e.size||null==e.sort().find((e=>{let a=!1;return null!=t&&(a=e!==t+1),t=e,a}))}),[]),be=g.useCallback(((e,t)=>{const a=null!=t?t:Y,s=he(a);return!(a.includes(e-1)||0===e&&s&&a.includes(0)||s&&a.sort().first()===e)}),[Y,he]),Ie=!isNaN(ye)&&be(ye),ke=g.useCallback(((e,t)=>{const a=null!=t?t:Y,s=e-1;ce({type:"movePages",pageIndexes:a.toArray(),...0===e?{beforePageIndex:0}:{afterPageIndex:s}});let n=(0,d.l4)(),o=0;0!==e&&(o=s+1,a.forEach((e=>{e<s&&--o})));let l=o;a.forEach((()=>{n=n.add(l),++l})),J(n)}),[Y,ce,J]),we=g.useCallback((e=>{e.preventDefault(),Ie&&(ke(ye),ie(!1))}),[Ie,ye,ie,ke]),Ee=g.useCallback((e=>{const t=e.target;if(!se||t.classList.contains(H.moveToolbarButton))return;const a=te.current;(0,D.k)(null!=a),a.contains(t)||ie(!1)}),[se,ie,H.moveToolbarButton]),Ne=g.useCallback((()=>{const e=Y.sort().toList().map((e=>({type:"movePages",pageIndexes:[e],beforePageIndex:e-1})));ce(e),J((0,d.l4)(Y.toArray().map((e=>e-1))))}),[ce,Y]),xe=g.useCallback((()=>{const e=Y.sort().toList().map((e=>({type:"movePages",pageIndexes:[e],afterPageIndex:e+1})));ce(e),J((0,d.l4)(Y.toArray().map((e=>e+1))))}),[ce,Y]),Ce=g.useCallback((()=>{J(Y.clear()),U(V+1)}),[Y,V]),De=g.useCallback((()=>{J(Y.clear()),U(V-1)}),[Y,V]),Se=g.useCallback((async()=>{const e={};1===Y.size?e.afterPageIndex=Y.first():e.beforePageIndex=0;{const t=document.createElement("input");t.type="file",t.accept="application/pdf",t.onclick=e=>{(0,D.k)(e.target instanceof HTMLInputElement),e.target.value=""},t.onchange=t=>{var a;if((0,D.k)(t.target instanceof HTMLInputElement),0===(null===(a=t.target.files)||void 0===a?void 0:a.length))return;let s=G;for(const a of t.target.files){if("string"!=typeof a.name||0===a.name.length)return;if("application/pdf"!==a.type)return void(0,o.wp)("The uploaded file must be a PDF.");if(-1!==X.findIndex((e=>"importedDocument"===e.type&&e.label===a.name)))return;s=s.push({type:"importDocument",treatImportedDocumentAsOnePage:!0,document:a,...e})}$(s),U(0),J(Y.clear())},t.click()}}),[Y,Z,ce,G,X]),Me=g.useCallback((()=>{J(X.keySeq().toSet())}),[X,J]),ze=g.useCallback((()=>{J(Y.clear())}),[Y,J]),Ae=g.useCallback((e=>{Y.has(e)?J(Y.delete(e)):J(Y.add(e))}),[Y,J]),Ke=g.useCallback((()=>{t()}),[t]),Re=g.useCallback((()=>{q(!0),p((0,l.b_)(G.flatten().toArray(),(()=>{de.current&&q(!1)}),(e=>{throw de.current&&q(!1),e})))}),[p,G]),Te=g.useCallback((async()=>{q(!0);try{const e=await k.exportPDFWithOperations(G.flatten().toArray().map(u.kg));(0,c.cR)(e,w)}catch(e){throw e}finally{de.current&&q(!1)}}),[k,G,w]),Be=(e,t,a,n)=>{const l=X.get(e);let r;switch((0,D.k)(null!=l),l.type){case"page":r=g.createElement(s.Z,{key:`page-${l.label}`,page:l.page,size:t,maxSize:a,rotation:l.rotation});break;case"newPage":{const{rotatedWidth:e,rotatedHeight:n}=(0,s.X)(l.size,l.rotation,t,a);r=g.createElement("div",{key:`newPage-${l.label}`,className:H.newPage,style:{width:e,height:n}});break}case"importedDocument":{const{containerWidth:e,containerHeight:o}=(0,s.X)(S,0,t,a);r=g.createElement(M,{width:e,height:o,movePreview:n,key:`importedDoc-${l.label}`,styles:H,formatMessage:K});break}default:r=g.createElement(g.Fragment,null),(0,o.Rz)(l.type)}return{item:r,label:l.label,props:"page"===l.type?{"data-original-page-index":l.page.pageIndex}:{}}},Le=Y.size>0&&Y.size!==X.size&&!j,Oe=Y.size>0&&void 0===Y.find((e=>{const t=X.get(e);return(0,D.k)(null!=t),"page"!==t.type&&"newPage"!==t.type})),Fe=Y.size>0&&void 0===Y.find((e=>{const t=X.get(e);return(0,D.k)(null!=t),"page"!==t.type})),He=!Y.isEmpty()&&Y.size!==X.size&&!j,Ze=!Y.isEmpty()&&!Y.includes(0),_e=!Y.isEmpty()&&!Y.includes(X.size-1),We=V<W.size,$e=V>0,Ve=Y.size<X.size&&!j,Ue=!Y.isEmpty()&&!j,Ge=g.useRef(null),Xe=g.useRef(!1);g.useLayoutEffect((()=>{const e=Ge.current;if(null==e)return;Xe.current||(e.focus(),Xe.current=!0);const t=e=>{if(null!=document.activeElement&&"INPUT"===document.activeElement.tagName)return;if(j)return;const t=e.key.toLowerCase(),a=e.metaKey||e.ctrlKey,s=a&&!e.shiftKey&&!e.altKey,n=e.altKey&&!a&&!e.shiftKey,o=!a&&!e.shiftKey&&!e.altKey;if(e.altKey&&e.shiftKey&&!a&&"arrowleft"===t&&Oe)pe();else if(e.altKey&&e.shiftKey&&!a&&"arrowright"===t&&Oe)fe();else if(n&&"arrowleft"===t&&Ze)Ne();else if(n&&"arrowright"===t&&_e)xe();else if(a&&e.shiftKey&&!e.altKey&&"z"===t&&$e)De();else if(s&&"z"===t&&We)Ce();else if(s&&"a"===t&&Ve)Me();else if(s&&"d"===t&&Ue)ze();else if(o&&"n"===t)me();else if(o&&"d"===t&&Le)ue();else if(o&&"c"===t&&Fe)ge();else if(o&&"l"===t&&Oe)pe();else if(o&&"r"===t&&Oe)fe();else if(o&&"m"===t&&He)ie(!0);else{if(!o||"i"!==t)return;Se()}e.preventDefault()};return e.addEventListener("keydown",t),()=>{e.removeEventListener("keydown",t)}}),[Fe,He,Ze,_e,$e,Le,Oe,Ve,Ue,We,me,ge,Se,Ne,xe,De,ue,pe,fe,Me,ze,Ce,j,ie]);const Ye=H.toolbar.toolbarButton,Je=[{type:"add",onPress:me,className:Ye,disabled:j,children:K(R.newPage)},{type:"remove",onPress:ue,className:Ye,disabled:!Le,children:K(R.removePage)},{type:"duplicate",onPress:ge,className:Ye,children:K(R.duplicatePage),disabled:!Fe||j},{type:"rotate-left",onPress:pe,className:Ye,children:K(R.rotatePageLeft),disabled:!Oe||j},{type:"rotate-right",onPress:fe,className:Ye,children:K(R.rotatePageRight),disabled:!Oe||j},{type:"move",onPress:ve,className:f()(Ye,H.moveToolbarButton),children:K(R.openMoveDialog),disabled:!He},{type:"move-left",onPress:Ne,className:H.toolbar.toolbarButton,children:K(R.moveBefore),disabled:!Ze||j},{type:"move-right",onPress:xe,className:Ye,children:K(R.moveAfter),disabled:!_e||j},{type:"import-document",onPress:Se,className:Ye,children:K(R.mergeDocument),disabled:j},{type:"spacer"},{type:"undo",onPress:Ce,className:Ye,children:K(v.Z.undo),disabled:!We||j},{type:"redo",onPress:De,className:Ye,children:K(v.Z.redo),disabled:!$e||j},{type:"select-all",onPress:Me,className:Ye,children:K(R.selectAll),disabled:!Ve},{type:"select-none",onPress:ze,className:Ye,children:K(R.selectNone),disabled:!Ue}],[je,qe]=g.useState(Number.POSITIVE_INFINITY),[Qe,et]=g.useMemo((()=>je===Number.POSITIVE_INFINITY?[F,[]]:[F.slice(0,je),F.slice(je).filter((e=>"spacer"!==e.type)).map(((e,t)=>({index:t,item:{...e,dropdownGroup:"documentEditor"}})))]),[F,je]),[tt,at]=g.useState(new m.$u),st=g.useCallback((e=>{at((t=>(t.width!==e.width&&qe(Number.POSITIVE_INFINITY),new m.$u({width:e.width,height:e.height}))))}),[at,qe]),nt=g.useRef(null);g.useLayoutEffect((()=>{const e=nt.current;if(!e||0===tt.width)return;const t=e.children;if(t.length===je)return;const a=e.ownerDocument.defaultView.getComputedStyle(e);let s=44+(parseInt(a.getPropertyValue("padding-left"))||0)+(parseInt(a.getPropertyValue("padding-right"))||0);const o=[].findIndex.call(t,((e,t)=>"spacer"!==F[t].type&&(s+=e.clientWidth,s>tt.width)));qe(-1===o?Number.POSITIVE_INFINITY:o);e.ownerDocument.defaultView.innerWidth>=n.Fg?ee(!0):ee(!1)}),[tt,je,qe,F]);const ot=g.useCallback((e=>{"Escape"===e.key&&se&&(ie(!1),e.stopPropagation())}),[se,ie]),lt=g.useMemo((()=>null!=Qe.find((e=>"move"===e.type))),[Qe]),rt=g.createElement("div",{className:f()(H.moveDialog,{[H.moveDialogShown]:se,[H.moveDialogDetached]:!lt},"PSPDFKit-DocumentEditor-MoveDialog"),ref:te},g.createElement("form",{onSubmit:we,className:H.moveDialogForm},g.createElement("span",{className:H.moveDialogFormLabel},K(R.insertAfterPage)),g.createElement("input",{className:H.moveDialogFormInput,type:"number",min:"0",max:X.size,value:oe,onChange:Pe,ref:ae}),g.createElement(r.zx,{type:"submit",className:H.moveDialogMoveButton,disabled:!Ie},K(R.move))),g.createElement("div",{className:H.moveDialogHint},g.createElement("p",{className:H.moveDialogHintText},K(R.docEditorMoveBeginningHint)))),it=g.useCallback(((e,t)=>{const a=(0,d.l4)(e);be(t,a)&&ke(t,a)}),[ke,be]);let ct;const dt=se&&!isNaN(ye);if(dt){const e=Y.toList().sort().map((e=>Be(e,160,160,!0).item)).toArray(),t=g.createElement(A,{pages:e,style:"straight",styles:H});dt&&(ct=0===ye?{previewContent:t,pageIndex:0,position:"left"}:{previewContent:t,pageIndex:ye-1,position:"right"},Ie||(ct.disabled=!0))}const mt=g.useMemo((()=>({cancel:{element:g.createElement(r.zx,null,K(v.Z.cancel)),onPress:Ke},"selected-pages":{element:g.createElement("div",null,g.createElement("div",{className:H.pagesSelectedIcon},g.createElement(y.Z,{src:a(17233)})),K(R.pagesSelected,{arg0:Y.size})),className:f()({[H.pagesSelectedIndicator]:!0,[H.pagesSelectedIndicatorShown]:Y.size>0})},spacer:{element:x||(x=g.createElement("div",null)),className:H.spacer},"loading-indicator":{element:C||(C=g.createElement(h.Z,null)),hide:!j},"save-as":{element:g.createElement(r.zx,null,K(v.Z.saveAs)),onPress:Te,disabled:j},save:{element:g.createElement(r.zx,{primary:!0},K(v.Z.save)),disabled:G.isEmpty()||j,onPress:Re}})),[H,K,Ke,Te,Re,j,G,R,Y]),ut=g.useMemo((()=>O.map(((e,t)=>{const{onPress:a,className:s,type:n,node:o,id:l}=e;if((0,D.k)(n),"custom"===n)return o?g.createElement(I.Z,{className:s,onPress:a?e=>a(e,l):void 0,key:l||t,node:o}):null;{const e=mt[n];return e.hide?null:g.cloneElement(e.element,{onClick:t=>{e.onPress&&e.onPress(t)},key:n,disabled:e.disabled,className:f()(e.className,s)})}}))),[O,mt]);return g.createElement("div",{className:f()(H.docEditor,"PSPDFKit-DocumentEditor"),onClick:Ee,onKeyDown:ot,tabIndex:"-1",ref:Ge},g.createElement("div",{className:f()(H.toolbar.root,H.toolbarRoot,"PSPDFKit-DocumentEditor-Toolbar"),style:{flex:0}},g.createElement("div",{ref:nt,className:H.toolbarContainer},g.createElement(E,{items:Qe,builtInItems:Je,moveDialog:rt,CSS_HACK:e.CSS_HACK})),g.createElement(N,{builtInItems:Je,items:et,CSS_HACK:e.CSS_HACK,frameWindow:w})),g.createElement("div",{className:H.pagesView},g.createElement(b.Z,{onResize:st}),!lt&&rt,g.createElement("div",{className:f()(H.pagesGrid,{[H.pagesGridLargeThumbnails]:Q})},g.createElement(P.Z,{canInsert:(e,t)=>be(t,(0,d.l4)(e)),totalItems:X.size,width:tt.width,height:tt.height,itemScale:e.scale,renderItemCallback:Be,renderDragPreviewCallback:(e,t,a,s)=>{const n=(0,d.aV)(e).filter((e=>e!==t)).sort().push(t).slice(-5).map((e=>Be(e,a,s,!0).item)).toArray();return g.createElement(A,{pages:n,style:"straight",styles:H,previewCount:e.length})},onItemPress:Ae,selectedItemIndexes:Y,cssPrefix:"PSPDFKit-DocumentEditor",moveCursor:null!=ct?ct:void 0,onItemsMove:se?void 0:it}))),g.createElement("div",{className:f()(H.bottomBar,"PSPDFKit-DocumentEditor-Footer")},ut))})),R=(0,i.vU)({newPage:{id:"newPage",defaultMessage:"New Page",description:"Add new page"},removePage:{id:"removePage",defaultMessage:"Remove Page",description:"Remove page"},duplicatePage:{id:"duplicatePage",defaultMessage:"Duplicate Page",description:"Duplicate page"},rotatePageLeft:{id:"rotatePageLeft",defaultMessage:"Rotate Page Left",description:"Rotate Page Left"},rotatePageRight:{id:"rotatePageRight",defaultMessage:"Rotate Page Right",description:"Rotate Page Right"},mergeDocument:{id:"mergeDocument",defaultMessage:"Merge Document",description:"Merge Document"},selectAll:{id:"selectAll",defaultMessage:"Select All",description:"Select All Pages"},selectNone:{id:"selectNone",defaultMessage:"Select None",description:"Deselect All Pages"},openMoveDialog:{id:"openMoveDialog",defaultMessage:"Move…",description:"Open dialog for moving pages to specific location in the document"},move:{id:"move",defaultMessage:"Move",description:"Move pages to specific location in the document"},moveBefore:{id:"moveBefore",defaultMessage:"Move Before",description:"Move page before previous one"},moveAfter:{id:"moveAfter",defaultMessage:"Move After",description:"Move page after next one"},documentMergedHere:{id:"documentMergedHere",defaultMessage:"Document will be merged here",description:"Placeholder for the imported document"},pagesSelected:{id:"pagesSelected",defaultMessage:"{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",description:"Number of pages selected."},insertAfterPage:{id:"insertAfterPage",defaultMessage:"Insert after page",description:"Move selected pages after designated page index."},docEditorMoveBeginningHint:{id:"docEditorMoveBeginningHint",defaultMessage:"Type “0” to move selected pages to the beginning of the document.",description:"Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor."}})},33720:(e,t,a)=>{var s={"./add.svg":14809,"./duplicate.svg":89950,"./extract.svg":61030,"./help.svg":19774,"./importDocument.svg":42900,"./move.svg":72303,"./moveLeft.svg":40020,"./moveRight.svg":46716,"./multiplePages.svg":17233,"./redo.svg":68433,"./remove.svg":89316,"./rotateLeft.svg":10003,"./rotateRight.svg":17756,"./selectAll.svg":56070,"./selectNone.svg":48767,"./undo.svg":16751};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id=33720}}]);