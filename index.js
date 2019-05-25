import { TweenMax } from "gsap"

document.addEventListener("mousemove", e => {
  TweenMax.set(document.body, { perspective: e.x })
})

Array.from({ length: 30 })
  .map(() => document.createElement("div"))
  .forEach(item => {
    item.setAttribute("class", "box")
    document.body.appendChild(item)

    TweenMax.set(item, { rotationY: "30" })
  })
