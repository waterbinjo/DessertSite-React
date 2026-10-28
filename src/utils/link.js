// 버튼 이동하고 애니메이션 주기
const link = () => {
  const lis = document.querySelectorAll(".header_nav ul li a");

  lis.forEach(function (li) {
    li.addEventListener("click", function (e) {
      e.preventDefault(); // #의 기본 기능 차단

      const $href = document.querySelector(li.getAttribute("href"));
      $href.scrollIntoView({ behavior: "smooth" });
    });
  });
};

export default link;
