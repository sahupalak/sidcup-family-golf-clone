  var cursor = document.querySelector("#cursor")
  var blur = document.querySelector("#cursor-blur")
  document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+30 +"px" 
    cursor.style.top = dets.y+"px" 
    blur.style.left = dets.x -170 +"px" 
    blur.style.top = dets.y -190 +"px" 
    
  })

  var h4all =document.querySelectorAll("#nav h4")
  h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    cursor.style.scale = 3
    cursor.style.border = "1px solid #fff"
    cursor.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
    cursor.style.border = "0px solid #95CC1E"
    cursor.style.backgroundColor = "#95CC1E"
  })

  })  

  gsap.to("#nav",{
    // height:"110px",
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
     trigger:"#nav",
     scroller:"body",
     markers:true,
     start:"top -20%",
     end:"top -10%",
     scrub:1
    }
  })

  gsap.from("#main",{
    backgroundColor: "#000000c9",
      scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top-80%",
        scrub:2
     }
  })
gsap.from("#aboutus img,#aboutus-in",{
  y:90,
  opacity:0,
  duration:0.5,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#aboutus",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 65%",
    scrub:1
  }
})

// gsap.from(".card",{
//   scale:0.9,
//   opacity:0,
//   duration:1,
//   stagger:0.1,
//   scrollTrigger:{
//     trigger:".card",
//     scroller:"body",
//     // markers:true,
//     start:"top 70%",
//     end:"top 65%",
//     scrub:1
//   }
// })

gsap.from("#col-1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#col-1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:" top 45%",
    scrub:1
  }
})


gsap.from("#col-2",{
  y:50,
  x:50,
  scrollTrigger:{
    trigger:"#col-2",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 45%",
    scrub:1
  }
})

gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1 ",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 70%",
    scrub:4
  }
})
