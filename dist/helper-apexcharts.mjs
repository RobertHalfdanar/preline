var e={d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};
/*
 * @version: 2.6.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
function s(e,t){const{title:s,mode:a,valuePrefix:l="$",isValueDivided:r=!0,valuePostfix:n="",hasTextLabel:o=!1,invertGroup:i=!1,labelDivider:d="",wrapperClasses:p="ms-0.5 mb-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700",wrapperExtClasses:c="",seriesClasses:x="text-[12px]",seriesExtClasses:u="",titleClasses:$="font-semibold !text-sm !bg-white !border-gray-200 text-gray-800 rounded-t-lg dark:!bg-neutral-800 dark:!border-neutral-700 dark:text-neutral-200",titleExtClasses:g="",markerClasses:h="!w-2.5 !h-2.5 !me-1.5",markerExtClasses:v="!rounded-sm",valueClasses:b="!font-medium text-gray-500 !ms-auto dark:text-neutral-400",valueExtClasses:m="",labelClasses:k="text-gray-500 dark:text-neutral-400",labelExtClasses:y=""}=t,{dataPointIndex:w}=e,{colors:f}=e.ctx.opts,C=e.ctx.opts.series;let E="";return C.forEach(((t,s)=>{const a=e.series[s][w]||("object"!=typeof C[s].data[w]?C[s].data[w]:e.series[s][w]),p=C[s].name,c=i?{left:`${o?p:""}${d}`,right:`${l}${a>=1e3&&r?a/1e3+"k":a}${n}`}:{left:`${l}${a>=1e3&&r?a/1e3+"k":a}${n}`,right:`${o?p:""}${d}`},$=`<span class="apexcharts-tooltip-text-y-label ${k} ${y}">${c.left}</span>`;E+=`<div class="apexcharts-tooltip-series-group !flex ${o?"!justify-between":""} order-${s+1} ${x} ${u}">\n      <span class="flex items-center">\n        <span class="apexcharts-tooltip-marker ${h} ${v}" style="background: ${f[s]}"></span>\n        <div class="apexcharts-tooltip-text">\n          <div class="apexcharts-tooltip-y-group !py-0.5">\n            <span class="apexcharts-tooltip-text-y-value ${b} ${m}">${c.right}</span>\n          </div>\n        </div>\n      </span>\n      ${$}\n    </div>`})),`<div class="${"dark"===a?"dark ":""}${p} ${c}">\n    <div class="apexcharts-tooltip-title ${$} ${g}">${s}</div>\n    ${E}\n  </div>`}function a(e,t){const{dataPointIndex:s}=e,{categories:a}=e.ctx.opts.xaxis,{colors:l}=e.ctx.opts,r=e.ctx.opts.series,{title:n,mode:o,valuePrefix:i="$",isValueDivided:d=!0,valuePostfix:p="",hasCategory:c=!0,hasTextLabel:x=!1,labelDivider:u="",wrapperClasses:$="ms-0.5 mb-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700",wrapperExtClasses:g="",seriesClasses:h="!justify-between w-full text-[12px]",seriesExtClasses:v="",titleClasses:b="flex justify-between font-semibold !text-sm !bg-white !border-gray-200 text-gray-800 rounded-t-lg dark:!bg-neutral-800 dark:!border-neutral-700 dark:text-neutral-200",titleExtClasses:m="",markerClasses:k="!w-2.5 !h-2.5 !me-1.5",markerExtClasses:y="!rounded-sm",valueClasses:w="!font-medium text-gray-500 !ms-auto dark:text-neutral-400",valueExtClasses:f="",labelClasses:C="text-gray-500 dark:text-neutral-400 ms-2",labelExtClasses:E=""}=t;let j="";const P=r[0].data[s],T=r[1].data[s],D=a[s].split(" "),q=c?`${D[0]}${D[1]?" ":""}${D[1]?D[1].slice(0,3):""}`:"",L=P>T,z=P/T==1,I=z?0:P/T*100,O=L?'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>':'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>';return r.forEach(((t,a)=>{const n=e.series[a][s]||("object"!=typeof r[a].data[s]?r[a].data[s]:e.series[a][s]),o=r[a].name,c=r[a].altValue||null,$=`<span class="apexcharts-tooltip-text-y-label ${C} ${E}">${q} ${o||""}</span>`,g=c||`<span class="apexcharts-tooltip-text-y-value ${w} ${f}">${i}${n>=1e3&&d?n/1e3+"k":n}${p}${u}</span>`;j+=`<div class="apexcharts-tooltip-series-group ${h} !flex order-${a+1} ${v}">\n      <span class="flex items-center">\n        <span class="apexcharts-tooltip-marker ${k} ${y}" style="background: ${l[a]}"></span>\n        <div class="apexcharts-tooltip-text">\n          <div class="apexcharts-tooltip-y-group !py-0.5">\n            ${g}\n          </div>\n        </div>\n      </span>\n      ${x?$:""}\n    </div>`})),`<div class="${"dark"===o?"dark ":""}${$} ${g}">\n    <div class="apexcharts-tooltip-title ${b} ${m}">\n      <span>${n}</span>\n      <span class="flex items-center gap-x-1 ${z?"":L?"text-green-600":"text-red-600"} ms-2">\n        ${z?"":O}\n        <span class="inline-block text-sm">\n          ${I.toFixed(1)}%\n        </span>\n      </span>\n    </div>\n    ${j}\n  </div>`}function l(e,t){const{dataPointIndex:s}=e,{categories:a}=e.ctx.opts.xaxis,{colors:l}=e.ctx.opts,r=e.ctx.opts.series,{title:n,mode:o,valuePrefix:i="$",isValueDivided:d=!0,valuePostfix:p="",hasCategory:c=!0,hasTextLabel:x=!1,labelDivider:u="",wrapperClasses:$="ms-0.5 mb-2 bg-white border border-gray-200 text-gray-800 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700",wrapperExtClasses:g="",seriesClasses:h="!justify-between w-full text-[12px]",seriesExtClasses:v="",titleClasses:b="flex justify-between font-semibold !text-sm !bg-white !border-gray-200 text-gray-800 rounded-t-lg dark:!bg-neutral-800 dark:!border-neutral-700 dark:text-neutral-200",titleExtClasses:m="",markerClasses:k="!w-2.5 !h-2.5 !me-1.5",markerExtClasses:y="!rounded-sm",valueClasses:w="!font-medium text-gray-500 !ms-auto dark:text-neutral-400",valueExtClasses:f="",labelClasses:C="text-gray-500 dark:text-neutral-400 ms-2",labelExtClasses:E=""}=t;let j="";const P=r[0].data[s],T=r[1].data[s],D=a[s].split(" "),q=c?`${D[0]}${D[1]?" ":""}${D[1]?D[1].slice(0,3):""}`:"",L=P>T,z=P/T==1,I=z?0:P/T*100,O=L?'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>':'<svg class="inline-block size-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" /></svg>';return r.forEach(((t,a)=>{const n=e.series[a][s]||("object"!=typeof r[a].data[s]?r[a].data[s]:e.series[a][s]),o=r[a].name,c=`<span class="apexcharts-tooltip-text-y-label ${C} ${E}">${i}${n>=1e3&&d?n/1e3+"k":n}${p}</span>`;j+=`<div class="apexcharts-tooltip-series-group !flex ${h} order-${a+1} ${v}">\n      <span class="flex items-center">\n        <span class="apexcharts-tooltip-marker ${k} ${y}" style="background: ${l[a]}"></span>\n        <div class="apexcharts-tooltip-text text-[12px]">\n          <div class="apexcharts-tooltip-y-group !py-0.5">\n            <span class="apexcharts-tooltip-text-y-value ${w} ${f}">${q} ${o||""}${u}</span>\n          </div>\n        </div>\n      </span>\n      ${x?c:""}\n    </div>`})),`<div class="${"dark"===o?"dark ":""}${$} ${g}">\n    <div class="apexcharts-tooltip-title ${b} ${m}">\n      <span>${n}</span>\n      <span class="flex items-center gap-x-1 ${z?"":L?"text-green-600":"text-red-600"} ms-2">\n        ${z?"":O}\n        <span class="inline-block text-sm">\n          ${I.toFixed(1)}%\n        </span>\n      </span>\n    </div>\n    ${j}\n  </div>`}function r({series:e,seriesIndex:t,w:s},a){const{globals:l}=s,{colors:r}=l;return`<div class="apexcharts-tooltip-series-group" style="background-color: ${r[t]}; display: block;">\n    <div class="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">\n      <div class="apexcharts-tooltip-y-group" style="color: ${a[t]}">\n        <span class="apexcharts-tooltip-text-y-label">${l.labels[t]}: </span>\n        <span class="apexcharts-tooltip-text-y-value">${e[t]}</span>\n      </div>\n    </div>\n  </div>`}function n(e,t,s,a){const l=document.querySelector(e);let r=null;if(!l)return!1;const n=l.closest('[role="tabpanel"]');let o=null;Array.from(document.querySelector("html").classList).forEach((e=>{["dark","light","default"].includes(e)&&(o=e)}));const i=(e=o||localStorage.getItem("hs_theme"))=>window._.merge(t(e),"dark"===e?a:s);return l&&(r=new ApexCharts(l,i()),r.render(),window.addEventListener("on-hs-appearance-change",(e=>r.updateOptions(i(e.detail)))),n&&n.addEventListener("on-hs-appearance-change",(e=>r.updateOptions(i(e.detail))))),r}e.d(t,{Jw:()=>n,TE:()=>r,jD:()=>a,qH:()=>s,qc:()=>l});var o=t.Jw,i=t.qH,d=t.jD,p=t.qc,c=t.TE;export{o as buildChart,i as buildTooltip,d as buildTooltipCompareTwo,p as buildTooltipCompareTwoAlt,c as buildTooltipForDonut};