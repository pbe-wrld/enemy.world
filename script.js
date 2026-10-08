document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SMOOTH NAVIGATION
  ========================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =========================
     MEMBER SEARCH + FILTER
  ========================= */

  const searchInput = document.getElementById("memberSearch");
  const filterButtons = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".member-card");
  const groups = document.querySelectorAll(".member-group");
  const resultCount = document.getElementById("resultCount");

  let currentFilter = "all";

  function updateMembers() {

    const search =
      searchInput.value
        .trim()
        .toLowerCase();

    let visible = 0;

    cards.forEach(card => {

      const name =
        card.dataset.name.toLowerCase();

      const role =
        card.dataset.role.toLowerCase();

      const group =
        card.closest(".member-group").dataset.group;

      const matchesSearch =
        name.includes(search) ||
        role.includes(search);

      const matchesFilter =
        currentFilter === "all" ||
        currentFilter === group;

      const show =
        matchesSearch && matchesFilter;

      card.classList.toggle("hidden", !show);

      if (show) {
        visible++;
      }

    });


    groups.forEach(group => {

      const visibleCards =
        group.querySelectorAll(
          ".member-card:not(.hidden)"
        );

      group.classList.toggle(
        "hidden",
        visibleCards.length === 0
      );

    });


    resultCount.textContent =
      `${visible} MEMBER${visible === 1 ? "" : "S"}`;

  }


  searchInput.addEventListener(
    "input",
    updateMembers
  );


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


  /* =========================
     MEMBER MODAL
  ========================= */

  const modal =
    document.getElementById("memberModal");

  const modalClose =
    document.getElementById("modalClose");

  const modalAvatar =
    document.getElementById("modalAvatar");

  const modalName =
    document.getElementById("modalName");

  const modalRole =
    document.getElementById("modalRole");


  cards.forEach(card => {

    card.addEventListener("click", () => {

      const name =
        card.querySelector(".member-name strong").textContent;

      const avatar =
        card.querySelector(".avatar").textContent;

      const role =
        card.dataset.role;

      modalName.textContent = name;
      modalAvatar.textContent = avatar;
      modalRole.textContent = role;

      modal.classList.add("open");

    });

  });


  function closeModal() {
    modal.classList.remove("open");
  }


  modalClose.addEventListener(
    "click",
    closeModal
  );


  modal.addEventListener("click", event => {

    if (event.target === modal) {
      closeModal();
    }

  });


  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeModal();
    }

  });


  /* =========================
     INITIAL STATE
  ========================= */

  updateMembers();

});
