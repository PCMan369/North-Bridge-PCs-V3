
// ADD NEW PCs HERE
// Change status to 'sold' to move it automatically.

const builds=[
{
title:"Ryzen 5 5500 + RTX 2070 Super",
image:"images/hero-build.jpg",
ram:"16GB DDR4",
storage:"512GB NVMe SSD",
fps:["Fortnite: 200+ FPS","War Thunder: 180+ FPS","Minecraft: 300+ FPS"],
price:"$650",
status:"sold"
},

{
title:"Ryzen 5 3600 + GTX 1660 Ti",
image:"images/1660ti.jpg",
ram:"16GB DDR4",
storage:"500GB SSD",
fps:[
"Fortnite: 160+ FPS",
"War Thunder: 120+ FPS",
"Minecraft: 250+ FPS"
],
price:"$550",
status:"available"
}
];

function card(build){
return `<div class="card">
<img src="${build.image}" style="width:100%">
<h3>${build.title}</h3>
<p>${build.ram}</p>
<p>${build.storage}</p>
<ul>${build.fps.map(f=>`<li>${f}</li>`).join("")}</ul>
<p>${build.price}</p>
<p>${build.status}</p>
<p><small>Performance varies based on settings.</small></p>
</div>`;
}

document.addEventListener("DOMContentLoaded",()=>{
const featured=document.getElementById("featured-builds");
if(featured){
const avail=builds.filter(b=>b.status==="available").slice(0,3);
featured.innerHTML=avail.length?avail.map(card).join(""):"No systems currently available. Custom builds are still available.";
}
const a=document.getElementById("available-builds");
const s=document.getElementById("sold-builds");
if(a)a.innerHTML=builds.filter(b=>b.status==="available").map(card).join("");
if(s)s.innerHTML=builds.filter(b=>b.status==="sold").map(card).join("");
});
