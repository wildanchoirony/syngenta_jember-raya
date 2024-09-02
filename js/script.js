const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    // document.getElementById("toast").innerHTML =
    //   '<div class="toast-container"><p>😊 Link berhasil disalin!</p></div>';
    // setTimeout(() => {
    //   document
    //     .querySelector("#toast .toast-container")
    //     .classList.add("toast-gone");
    // }, 300);
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));
    alert("Link Berhasil disalin!");
  });
});

// i

document.querySelectorAll(".icon i").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.classList.remove("ph");
    icon.classList.add("ph-fill");
  });
  icon.addEventListener("mouseleave", () => {
    icon.classList.remove("ph-fill");
    icon.classList.add("ph");
  });
});

// animasi text background bergerak saat scroll
document.addEventListener("scroll", (e) => {
  document.querySelector(".bg-text-animation").style.transform = `translateX(${
    window.scrollY / 2
  }px)`;
});
