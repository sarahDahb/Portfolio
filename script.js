(() => {
  const projects = [
    {
      id: "law",
      category: "fullstack",
      categoryLabel: "Full-Stack & Web Apps",
      title: "Law Office Management System — Al-Mizan",
      shortDescription: "A legal ERP with multimodal AI assistance, case summaries, court-date alerts, tenant-aware roles, and certified PDF generation.",
      description: "A legal ERP system with multimodal AI for text, audio, and image analysis, case summarization, and Egyptian law queries; automated court-date alerts; role-based access control; and an automated certified legal PDF generator.",
      role: "Full-Stack Developer",
      stack: ["Laravel", "PHP", "OpenAI API", "MySQL", "Tailwind CSS", "DomPDF"],
      artLabel: "Al-Mizan · Case management",
      artTitle: "A clearer view of every case.",
      color: "#F0F4FA",
      accent: "#315B9A",
      soft: "#E8EFF9",
      images: [
        { src: "Al-Mizan/GeminiGeneratedImageyw6lvyw6lvyw6lvy.png", title: "Al-Mizan project overview", alt: "Al-Mizan law office management system project introduction" },
        { src: "Al-Mizan/Screenshot-137.png", title: "Dashboard", alt: "Al-Mizan legal management dashboard" },
        { src: "Al-Mizan/Screenshot-138.png", title: "Case management", alt: "Al-Mizan case management screen" },
        { src: "Al-Mizan/Screenshot-139.png", title: "Client management", alt: "Al-Mizan client management screen" },
        { src: "Al-Mizan/Screenshot-140.png", title: "Appointments", alt: "Al-Mizan appointments and sessions screen" },
        { src: "Al-Mizan/Screenshot-141.png", title: "Documents", alt: "Al-Mizan document management screen" },
        { src: "Al-Mizan/Screenshot-142.png", title: "Legal library", alt: "Al-Mizan legal library screen" },
        { src: "Al-Mizan/Screenshot-143.png", title: "Lawyer profile", alt: "Al-Mizan lawyer profile and contact information screen" },
        { src: "Al-Mizan/Screenshot-136.png", title: "Sign in", alt: "Al-Mizan account sign-in screen" },
        { src: "Al-Mizan/Screenshot-2026-08-09-154231.png", title: "Dashboard overview", alt: "Al-Mizan system dashboard overview" },
        { src: "Al-Mizan/Screenshot-2026-08-09-154309.png", title: "Lawyer account", alt: "Al-Mizan lawyer account details screen" }
      ]
    },
    {
      id: "flight",
      category: "fullstack",
      categoryLabel: "Full-Stack & Web Apps",
      title: "Not Just a Flight — Flight Booking System",
      shortDescription: "A flight-booking experience with live search, dynamic filtering, and responsive, dependency-free interactions.",
      description: "An online travel agency interface with flight search, real-time filtering, DOM interactions, and fast performance without external JavaScript dependencies.",
      role: "Frontend Developer",
      stack: ["HTML5", "CSS3", "Vanilla JavaScript (ES6)"],
      artLabel: "Not Just a Flight",
      artTitle: "Your next destination, closer.",
      color: "#EFF6FF",
      accent: "#2563EB",
      soft: "#DBEAFE",
      images: [
        {
          src: "Not Just a Flight — Flight Booking System/GeminiGeneratedImagewwmgmjwwmgmjwwmg.jpg",
          title: "Not Just a Flight — project concept",
          alt: "Travel agency project artwork for Not Just a Flight, featuring travel destinations"
        },
        {
          src: "Not Just a Flight — Flight Booking System/screencapture-file-C-Users-AHMED-EID-Desktop-index-html-2026-02-27-153653.png",
          title: "Flight booking website preview",
          alt: "Full-page screenshot of the Not Just a Flight booking website"
        }
      ]
    },
    {
      id: "gym",
      category: "fullstack",
      categoryLabel: "Full-Stack & Web Apps",
      title: "Hulk Gym Website",
      shortDescription: "A responsive fitness website with class schedules, membership booking, and confident athletic branding.",
      description: "A responsive fitness center website with modern class schedules, membership booking, and athletic branding.",
      role: "Frontend Developer",
      stack: ["HTML", "CSS", "JavaScript"],
      artLabel: "Hulk Gym · Train with purpose",
      artTitle: "Stronger starts here.",
      color: "#F5F2F0",
      accent: "#991B1B",
      soft: "#FEE2E2",
      images: [
        {
          src: "Hulk Gym Website/GeminiGeneratedImagek75996k75996k759.jpg",
          title: "Hulk Gym — website hero",
          alt: "Hulk Gym fitness website hero with green accents and gym branding"
        },
        {
          src: "Hulk Gym Website/جيم.png",
          title: "Hulk Gym — full website",
          alt: "Full-page screenshot of the Hulk Gym website, including programs, trainers, and membership plans"
        }
      ]
    },
    {
      id: "softheaven",
      category: "wordpress",
      categoryLabel: "WordPress & E-Commerce",
      title: "Soft Heaven Furniture Store",
      shortDescription: "A high-performance furniture store with product-catalog filtering and streamlined checkout.",
      description: "A furniture e-commerce experience with product catalog filtering, custom styling, and a streamlined WooCommerce checkout flow.",
      role: "WordPress / WooCommerce Developer",
      stack: ["WordPress", "WooCommerce", "Custom CSS"],
      artLabel: "Soft Heaven · Thoughtful living",
      artTitle: "Comfort, considered.",
      color: "#F3F1EC",
      accent: "#766A54",
      soft: "#E7E1D7",
      images: [
        {
          src: "Soft Heaven Furniture Store/GeminiGeneratedImageon6xydon6xydon6x.jpg",
          title: "Soft Heaven — store concept",
          alt: "Soft Heaven furniture store concept featuring a modern living room"
        },
        {
          src: "Soft Heaven Furniture Store/screencapture-dev-soft-heaven-pantheonsite-io-2026-04-23-101435.png",
          title: "Soft Heaven — homepage",
          alt: "Full-page screenshot of the Soft Heaven furniture store homepage"
        },
        {
          src: "Soft Heaven Furniture Store/screencapture-dev-soft-heaven-pantheonsite-io-shop-2-2026-04-23-101454.png",
          title: "Soft Heaven — shop",
          alt: "Soft Heaven furniture shop product catalog page"
        },
        {
          src: "Soft Heaven Furniture Store/screencapture-dev-soft-heaven-pantheonsite-io-cart-2026-04-23-101525.png",
          title: "Soft Heaven — shopping cart",
          alt: "Soft Heaven online store shopping cart page"
        },
        {
          src: "Soft Heaven Furniture Store/screencapture-dev-soft-heaven-pantheonsite-io-my-account-2-2026-04-23-101510.png",
          title: "Soft Heaven — customer account",
          alt: "Soft Heaven online store customer account page"
        }
      ]
    },
    {
      id: "aureum",
      category: "landing",
      categoryLabel: "Landing Pages",
      title: "Aureum Jewelry Store",
      shortDescription: "A refined, responsive landing page for a luxury gold and jewelry brand.",
      description: "An elegant, responsive landing page for high-end gold and jewelry branding.",
      role: "UI & Frontend Developer",
      stack: ["HTML5", "CSS3", "Responsive Design"],
      artLabel: "Aureum · Fine jewelry",
      artTitle: "A lasting glow.",
      color: "#F5F1E8",
      accent: "#89764E",
      soft: "#EEE6D4",
      images: [
        {
          src: "Aureum Jewelry Store/GeminiGeneratedImage1txsci1txsci1txs.jpg",
          title: "Aureum — jewelry store concept",
          alt: "Aureum luxury jewelry store concept with a gold-toned visual identity"
        },
        {
          src: "Aureum Jewelry Store/1001422356.png",
          title: "Aureum — online store",
          alt: "Aureum jewelry website with product collections and a responsive storefront"
        }
      ]
    },
    {
      id: "pinkoven",
      category: "landing",
      categoryLabel: "Landing Pages",
      title: "Pink Oven Bakery",
      shortDescription: "A warm bakery landing page with appetizing visual storytelling and clear calls to action.",
      description: "An engaging, visually appetizing boutique bakery landing page with clear calls to action.",
      role: "UI & Frontend Developer",
      stack: ["HTML5", "CSS3", "JavaScript"],
      artLabel: "Pink Oven · Fresh from the oven",
      artTitle: "Made with a little love.",
      color: "#FAF0F1",
      accent: "#9F4157",
      soft: "#FCE4E8",
      images: [
        {
          src: "pink oven/GeminiGeneratedImagetllbqqtllbqqtllb.jpg",
          title: "Pink Oven — bakery concept",
          alt: "Pink Oven bakery concept with a soft pink brand identity and bakery storefront"
        },
        {
          src: "pink oven/1001401558.jpg",
          title: "Pink Oven — website",
          alt: "Pink Oven bakery landing page featuring the bakery, specialties, and product highlights"
        }
      ]
    },
    {
      id: "school",
      category: "landing",
      categoryLabel: "Landing Pages",
      title: "Sara's School",
      shortDescription: "An academic landing page showcasing curricula, enrollment, and school activities.",
      description: "An academic portal landing page highlighting curricula, student enrollment, and school activities.",
      role: "Web Designer & Developer",
      stack: ["HTML5", "CSS3"],
      artLabel: "Sara's School · Learn and grow",
      artTitle: "A bright start to a bright future.",
      color: "#EFF5F3",
      accent: "#326C62",
      soft: "#E0EEE8",
      images: [
        {
          src: "sara school/GeminiGeneratedImagerkdi0vrkdi0vrkdi.jpg",
          title: "Sara's School — website concept",
          alt: "Sara's School website concept showing the educational landing page on desktop and mobile"
        },
        {
          src: "sara school/1001401554.jpg",
          title: "Sara's School — website",
          alt: "Sara's School landing page featuring school information, programs, and contact details"
        }
      ]
    },
    {
      id: "kids",
      category: "landing",
      categoryLabel: "Landing Pages",
      title: "World of Fun — Kids Movies",
      shortDescription: "A playful, high-energy landing page for animated movies and kids' entertainment.",
      description: "A playful, high-energy entertainment landing page tailored for animated movies and children's content.",
      role: "Frontend Developer",
      stack: ["HTML", "CSS", "JavaScript"],
      artLabel: "World of Fun · Movies and more",
      artTitle: "Pick your next adventure!",
      color: "#F2F0FA",
      accent: "#54458A",
      soft: "#E9E5F6",
      images: [
        {
          src: "kids movie/GeminiGeneratedImage1tdnlh1tdnlh1tdn.jpg",
          title: "World of Fun — kids' movie concept",
          alt: "Colorful World of Fun kids' movie website concept with a playful animated entertainment theme"
        },
        {
          src: "kids movie/1001401601.jpg",
          title: "World of Fun — movie listings",
          alt: "World of Fun kids' movie page with featured movies, search, and movie listings"
        }
      ]
    }
  ];

  const generalImages = [
    {
      src: "Images/Sara-Hossam-Dahb.jpeg",
      title: "Sara Hossam Dahb",
      alt: "Portrait of Sara Hossam Dahb",
      description: "Personal profile photo"
    }
  ];

  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);

  function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "card project-card";
    card.dataset.category = project.category;
    card.dataset.project = project.id;
    card.innerHTML = `
      <button class="project-open" type="button" aria-label="View ${escapeHtml(project.title)} project details">
        <div class="project-art" style="--art-bg:${project.color};--art-accent:${project.accent};--art-soft:${project.soft}">
          ${project.images?.length
            ? `<img class="project-cover" src="${escapeHtml(project.images[0].src)}" alt="${escapeHtml(project.images[0].alt)}" loading="lazy">`
            : `<div class="art-window">
                <p class="art-kicker">${escapeHtml(project.artLabel)}</p>
                <h3 class="art-title">${escapeHtml(project.artTitle)}</h3>
                <div class="art-decoration" aria-hidden="true"><span></span><span></span><span></span></div>
              </div>`}
          ${project.images?.length ? `<span class="image-count-badge">${project.images.length} images</span>` : ""}
        </div>
        <div class="project-copy">
          <p class="project-overline">${escapeHtml(project.categoryLabel)}</p>
          <h3 class="project-title">${escapeHtml(project.title)}</h3>
          <p class="project-description">${escapeHtml(project.shortDescription)}</p>
          <div class="project-tags">${project.stack.slice(0, 3).map(item => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>
          <span class="text-link">View project details <span aria-hidden="true">→</span></span>
        </div>
      </button>`;
    return card;
  }

  function setupProjects() {
    const grid = document.querySelector("[data-project-grid]");
    if (!grid) return;

    const isFeatured = grid.dataset.projectGrid === "featured";
    const visibleProjects = isFeatured ? projects.slice(0, 3) : projects;
    visibleProjects.forEach(project => grid.append(createProjectCard(project)));

    grid.addEventListener("click", event => {
      const button = event.target.closest(".project-open");
      if (!button) return;
      const card = button.closest("[data-project]");
      const project = projects.find(item => item.id === card.dataset.project);
      if (project) openProjectModal(project, button);
    });

    if (isFeatured) return;

    const cards = [...grid.querySelectorAll(".project-card")];
    const count = document.querySelector("[data-project-count]");
    document.querySelectorAll("[data-project-filter]").forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.dataset.projectFilter;
        document.querySelectorAll("[data-project-filter]").forEach(option => {
          const active = option === button;
          option.classList.toggle("active", active);
          option.setAttribute("aria-pressed", String(active));
        });
        let visibleCount = 0;
        cards.forEach(card => {
          const visible = filter === "all" || card.dataset.category === filter;
          card.hidden = !visible;
          if (visible) visibleCount++;
        });
        if (count) count.textContent = `${String(visibleCount).padStart(2, "0")} ${visibleCount === 1 ? "project" : "projects"}`;
      });
    });

  }

  function openProjectModal(project, trigger) {
    const modal = document.querySelector("[data-project-modal]");
    if (!modal) return;
    const previousFocus = trigger;
    modal.querySelector("[data-modal-category]").textContent = `${project.categoryLabel} · ${project.artLabel}`;
    modal.querySelector("[data-modal-title]").textContent = project.title;
    modal.querySelector("[data-modal-description]").textContent = project.description;
    modal.querySelector("[data-modal-role]").textContent = project.role;
    const stack = modal.querySelector("[data-modal-stack]");
    stack.replaceChildren(...project.stack.map(item => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = item;
      return tag;
    }));
    setupProjectImages(modal, project.images || []);
    modal.hidden = false;
    document.body.classList.add("menu-visible");
    const close = modal.querySelector("[data-modal-close]");
    close.focus();

    const dismiss = event => {
      if (event.type === "keydown" && event.key !== "Escape") return;
      if (event.type === "click" && event.target !== modal && !event.target.closest("[data-modal-close]")) return;
      modal.hidden = true;
      document.body.classList.remove("menu-visible");
      document.removeEventListener("keydown", dismiss);
      modal.removeEventListener("click", dismiss);
      previousFocus.focus();
    };
    document.addEventListener("keydown", dismiss);
    modal.addEventListener("click", dismiss);
  }

  function setupProjectImages(modal, images) {
    const gallery = modal.querySelector("[data-project-images]");
    if (!gallery) return;
    gallery.hidden = images.length === 0;
    if (!images.length) return;

    const image = gallery.querySelector("[data-project-image]");
    const caption = gallery.querySelector("[data-project-image-caption]");
    const counter = gallery.querySelector("[data-project-image-counter]");
    const thumbnails = gallery.querySelector("[data-project-thumbnails]");
    let activeIndex = 0;

    function showImage(index) {
      activeIndex = (index + images.length) % images.length;
      const current = images[activeIndex];
      image.src = current.src;
      image.alt = current.alt;
      caption.textContent = current.title;
      counter.textContent = `${activeIndex + 1} / ${images.length}`;
      [...thumbnails.children].forEach((button, buttonIndex) => {
        button.classList.toggle("active", buttonIndex === activeIndex);
        button.setAttribute("aria-current", String(buttonIndex === activeIndex));
      });
    }

    thumbnails.replaceChildren(...images.map((item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "project-thumbnail";
      button.setAttribute("aria-label", `Show image ${index + 1}: ${item.title}`);
      button.innerHTML = `<img src="${escapeHtml(item.src)}" alt="" loading="lazy">`;
      button.addEventListener("click", () => showImage(index));
      return button;
    }));
    gallery.querySelector("[data-project-image-prev]").onclick = () => showImage(activeIndex - 1);
    gallery.querySelector("[data-project-image-next]").onclick = () => showImage(activeIndex + 1);
    showImage(0);
    gallery.dataset.imageCount = String(images.length);
  }

  function setupImageGallery() {
    const grid = document.querySelector("[data-gallery-grid]");
    if (!grid) return;
    const items = [
      ...projects.flatMap(project => (project.images || []).map(image => ({
        ...image,
        kind: "project",
        project: project.title
      }))),
      ...generalImages.map(image => ({ ...image, kind: "general", project: "" }))
    ];
    const viewer = document.querySelector("[data-image-viewer]");
    const viewerImage = viewer.querySelector("[data-viewer-image]");
    const viewerTitle = viewer.querySelector("[data-viewer-title]");
    const viewerInfo = viewer.querySelector("[data-viewer-info]");
    const viewerCounter = viewer.querySelector("[data-viewer-counter]");
    let activeIndex = 0;
    let focusedTrigger = null;
    let visibleItems = items;

    function renderFilter(filter) {
      visibleItems = items.filter(item => filter === "all" || item.kind === filter);
      grid.replaceChildren(...visibleItems.map((item, displayIndex) => {
        const card = document.createElement("article");
        card.className = "card gallery-card reveal visible";
        const label = item.kind === "project" ? `Project · ${item.project}` : "General photo";
        card.innerHTML = `
          <button type="button" class="gallery-open" data-image-index="${displayIndex}" aria-label="View ${escapeHtml(item.title)}">
            <img class="${item.src.includes("screencapture-") ? "gallery-image--screenshot" : ""}" src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy">
            <span class="gallery-copy"><span class="gallery-label">${escapeHtml(label)}</span><strong>${escapeHtml(item.title)}</strong></span>
          </button>`;
        return card;
      }));
      const count = document.querySelector("[data-gallery-count]");
      if (count) count.textContent = `${String(visibleItems.length).padStart(2, "0")} ${visibleItems.length === 1 ? "image" : "images"}`;
    }

    function showImage(index) {
      activeIndex = (index + visibleItems.length) % visibleItems.length;
      const item = visibleItems[activeIndex];
      viewerImage.src = item.src;
      viewerImage.alt = item.alt;
      viewerTitle.textContent = item.title;
      viewerInfo.textContent = item.kind === "project" ? item.project : item.description;
      viewerCounter.textContent = `${activeIndex + 1} / ${visibleItems.length}`;
    }

    function closeViewer() {
      if (viewer.hidden) return;
      viewer.hidden = true;
      document.body.classList.remove("menu-visible");
      document.removeEventListener("keydown", handleViewerKeydown);
      focusedTrigger?.focus();
    }

    function handleViewerKeydown(event) {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowRight") showImage(activeIndex + 1);
      if (event.key === "ArrowLeft") showImage(activeIndex - 1);
    }

    grid.addEventListener("click", event => {
      const button = event.target.closest("[data-image-index]");
      if (!button) return;
      focusedTrigger = button;
      showImage(Number(button.dataset.imageIndex));
      viewer.hidden = false;
      document.body.classList.add("menu-visible");
      viewer.querySelector("[data-viewer-close]").focus();
      document.addEventListener("keydown", handleViewerKeydown);
    });
    viewer.querySelector("[data-viewer-close]").addEventListener("click", closeViewer);
    viewer.querySelector("[data-viewer-prev]").addEventListener("click", () => showImage(activeIndex - 1));
    viewer.querySelector("[data-viewer-next]").addEventListener("click", () => showImage(activeIndex + 1));
    viewer.addEventListener("click", event => { if (event.target === viewer) closeViewer(); });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && viewer.hidden) return;
      if (event.key === "Escape" && !viewer.hidden) closeViewer();
    });

    document.querySelectorAll("[data-gallery-filter]").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-gallery-filter]").forEach(option => {
          const active = option === button;
          option.classList.toggle("active", active);
          option.setAttribute("aria-pressed", String(active));
        });
        renderFilter(button.dataset.galleryFilter);
      });
    });
    renderFilter("all");
  }

  function setupNavigation() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-nav-links]");
    const page = document.body.dataset.page;
    if (!menu) return;

    menu.querySelectorAll("[data-page-link]").forEach(link => {
      if (link.dataset.pageLink === page) link.setAttribute("aria-current", "page");
    });

    if (!toggle) return;
    const closeMenu = () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-visible");
    };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      document.body.classList.toggle("menu-visible", open);
    });
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });
  }

  function setupContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const fields = [...form.querySelectorAll("[data-validate]")];
    const status = form.querySelector("[data-form-status]");

    function validate(field) {
      const error = form.querySelector(`#${field.id}-error`);
      const minimum = field.name === "name" ? 2 : field.name === "message" ? 10 : 1;
      const valid = field.checkValidity() && field.value.trim().length >= minimum;
      field.setAttribute("aria-invalid", String(!valid));
      error.textContent = valid ? "" : field.dataset.errorMessage;
      return valid;
    }

    fields.forEach(field => field.addEventListener("input", () => {
      validate(field);
      status.textContent = "The form will open a new email draft after validation.";
      status.className = "form-status";
    }));

    form.addEventListener("submit", event => {
      event.preventDefault();
      const valid = fields.map(validate).every(Boolean);
      if (!valid) {
        status.textContent = "Please correct the highlighted fields.";
        status.className = "form-status error";
        fields.find(field => field.getAttribute("aria-invalid") === "true")?.focus();
        return;
      }

      const formData = new FormData(form);
      const subject = `Portfolio inquiry from ${formData.get("name").trim()}`;
      const body = [
        `Name: ${formData.get("name").trim()}`,
        `Email: ${formData.get("email").trim()}`,
        "",
        formData.get("message").trim()
      ].join("\n");
      status.textContent = "Opening your email app with the message ready to send.";
      status.className = "form-status success";
      window.location.href = `mailto:hossamsara084@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    elements.forEach(element => observer.observe(element));
  }

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });
  setupNavigation();
  setupProjects();
  setupImageGallery();
  setupContactForm();
  setupReveal();
})();
