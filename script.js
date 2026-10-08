document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("memberSearch");
  const filterButtons = document.querySelectorAll(".filter");
  const memberCards = document.querySelectorAll(".member-card");
  const memberGroups = document.querySelectorAll(".member-group");
  const resultCount = document.getElementById("resultCount");

  let currentFilter = "all";


  function updateMembers() {

    const searchValue = searchInput.value
      .toLowerCase()
      .trim();

    let visibleCount = 0;


    memberCards.forEach(card => {

      const group = card.closest(".member-group");

      if (!group) return;

      const groupType = group.dataset.group;

      const text = card.innerText
        .toLowerCase();

      const matchesSearch =
        text.includes(searchValue);

      const matchesFilter =
        currentFilter === "all" ||
        groupType === currentFilter;

      const shouldShow =
        matchesSearch && matchesFilter;


      if (shouldShow) {

        card.classList.remove("hidden");

        visibleCount++;

      } else {

        card.classList.add("hidden");

      }

    });


    memberGroups.forEach(group => {

      const visibleCards =
        group.querySelectorAll(
          ".member-card:not(.hidden)"
        );

      if (visibleCards.length === 0) {

        group.classList.add("hidden");

      } else {

        group.classList.remove("hidden");

      }

    });


    resultCount.textContent =
      `${visibleCount} member${visibleCount === 1 ? "" : "s"} shown`;
  }


  if (searchInput) {

    searchInput.addEventListener(
      "input",
      updateMembers
    );

  }


  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      currentFilter =
        button.dataset.filter;

      updateMembers();

    });

  });


  /*
    Smooth scrolling.
    Keeps the browser's normal scrolling enabled.
  */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  updateMembers();

});
