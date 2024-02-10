const rect = document.querySelector("#rect");

rect.addEventListener("mousemove", (detail) => {
  let rectLocation = rect.getBoundingClientRect();
  let insideRect = Math.trunc(detail.clientX - rectLocation.left);
  if (insideRect < Math.trunc(rectLocation.width / 2)) {
    let redCol = gsap.utils.mapRange(
      0,
      Math.trunc(rectLocation.width / 2),
      255,
      0,
      Math.trunc(insideRect)
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redCol},0,0)`,
      ease: Power4,
    });
  } else {
    let blueCol = gsap.utils.mapRange(
      Math.trunc(rectLocation.width / 2),
      Math.trunc(rectLocation.width),
      0,
      255,
      Math.trunc(insideRect)
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueCol})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", () => {
  gsap.to(rect, {
    backgroundColor: `#ffffff`,
    ease: Power4,
  });
});
