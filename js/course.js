document.addEventListener("DOMContentLoaded", function () {
  const courses = [
    {
      title: "Neoh Yong’s Course The 1%ers Trade Club Elite",
      description:
        "500+ video lessons, daily trade breakdowns, exclusive Zoom mentorship sessions.",
      price: 1599,
      oldPrice: 6000,
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Andrea Unger – Bundle 5 Courses",
      description:
        "Includes 5 complete trading courses by Andrea Unger for professional traders.",
      price: 4499,
      oldPrice: 80000,
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Dr. Gary Dayton All Courses Collection – 24 Courses",
      description:
        "Gary Dayton’s full library — 24 advanced psychology and trading performance courses.",
      price: 24999,
      oldPrice: 250000,
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Star Trader Course – The Emperor Trader Course",
      description: "Basic to advanced crash course — HD lifetime access.",
      price: 199,
      oldPrice: 4000,
      image: "https://via.placeholder.com/80",
    },
    {
      title: "Jay Pelle Course Trading Secrets Elite + Indicator Course",
      description:
        "Elite trading package with Discord videos and lifetime access.",
      price: 1499,
      oldPrice: 34000,
      image: "https://via.placeholder.com/80",
    },
  ];

  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  function filterCourses() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      searchResults.style.display = "none";
      return;
    }

    const filtered = courses.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query)
    );

    renderDropdown(filtered, query);
  }

  function renderDropdown(list, query) {
    searchResults.innerHTML = "";
    if (list.length === 0) {
      searchResults.innerHTML = `<div class="list-group-item text-center text-muted">No results found</div>`;
      searchResults.style.display = "block";
      return;
    }

    list.forEach((course) => {
      const highlightTitle = course.title.replace(
        new RegExp(query, "gi"),
        (match) => `<strong class="text-primary">${match}</strong>`
      );

      const item = `
        <a href="course-detail.html?name=${encodeURIComponent(course.title)}" 
           class="list-group-item list-group-item-action d-flex align-items-start">
          <img src="${course.image}" alt="${
        course.title
      }" class="me-3 rounded" width="60" height="60">
          <div class="flex-grow-1">
            <h6 class="mb-1">${highlightTitle}</h6>
            <p class="mb-1 small text-muted">${course.description.slice(
              0,
              80
            )}...</p>
            <div>
              <span class="fw-bold text-success">₹${course.price.toLocaleString()}</span>
              <small class="text-muted text-decoration-line-through ms-2">₹${course.oldPrice.toLocaleString()}</small>
              <span class="badge bg-success float-end">Sale!</span>
            </div>
          </div>
        </a>
      `;
      searchResults.insertAdjacentHTML("beforeend", item);
    });

    searchResults.style.display = "block";
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = "none";
    }
  });

  // Live filter
  searchInput.addEventListener("input", filterCourses);
});
