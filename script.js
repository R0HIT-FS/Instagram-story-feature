var arr = [
    {
        dp:"https://images.unsplash.com/photo-1597834777623-acd73456aca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80",
        story:"https://images.unsplash.com/photo-1597834777623-acd73456aca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1604323840993-31ba40161d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story:"https://images.unsplash.com/photo-1604323840993-31ba40161d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1675777235202-d6123910929d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        story:"https://plus.unsplash.com/premium_photo-1675777235202-d6123910929d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1534830049-05cccd270ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1882&q=80",
        story:"https://images.unsplash.com/photo-1534830049-05cccd270ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1882&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1608788985372-cc240a27e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story:"https://images.unsplash.com/photo-1608788985372-cc240a27e269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    }
];
var clutter="";
arr.forEach(function(elem,idx){
   clutter += `<div class="story">
                    <img id=${idx} src="${elem.dp}" alt="">
                </div>`
})
var stories =document.querySelector(".stories")
stories.innerHTML=clutter;
stories.addEventListener("click",function(dets){
    document.querySelector(".fullscreen").style.display="block"
    document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    document.querySelector(".fullscreen").style.zIndex=99;
    setTimeout(() => {
        document.querySelector(".fullscreen").style.display="none"
    }, 2000);
});