function setTextFields(data) {
  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.dataset.field;
    if (data[key]) el.textContent = data[key];
  });

  document.title = `${data.name} — Resume`;
  document.querySelector('meta[name="description"]').content =
    `${data.name} — ${data.title}. Personal resume and portfolio.`;
}

function renderAbout(data) {
  const aboutText = document.getElementById("about-text");
  aboutText.innerHTML = data.about
    .trim()
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph.trim()}</p>`)
    .join("");

  const facts = [
    { label: "Role", value: data.title },
    { label: "Location", value: data.location },
    { label: "Email", value: data.email },
  ];

  if (data.phone) {
    facts.push({ label: "Phone", value: data.phone });
  }

  document.getElementById("facts-list").innerHTML = facts
    .map(
      (fact) => `
        <div>
          <dt>${fact.label}</dt>
          <dd>${fact.value}</dd>
        </div>
      `
    )
    .join("");
}

function renderResumeButton(data) {
  // Resume PDF button hidden from portfolio for now.
  // To re-enable, uncomment the block below.
  /*
  if (!data.resumePdf) return;

  const resumeBtn = document.createElement("a");
  resumeBtn.className = "btn btn-ghost";
  resumeBtn.href = data.resumePdf;
  resumeBtn.target = "_blank";
  resumeBtn.rel = "noopener noreferrer";
  resumeBtn.textContent = "View resume (PDF)";

  const heroActions = document.getElementById("hero-actions");
  if (heroActions) heroActions.appendChild(resumeBtn);
  */
}

function renderLinks(data) {
  const heroLinks = document.getElementById("hero-links");
  heroLinks.innerHTML = data.links
    .map(
      (link) => `
        <li>
          <a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>
        </li>
      `
    )
    .join("");

  const contactActions = document.getElementById("contact-actions");
  const contactLinks = [
    { label: `Email ${data.name.split(" ")[0]}`, url: `mailto:${data.email}`, primary: true },
    // Resume PDF link hidden from portfolio for now.
    // To re-enable, uncomment the block below.
    /*
    ...(data.resumePdf
      ? [{ label: "View resume (PDF)", url: data.resumePdf, primary: false, external: true }]
      : []),
    */
    ...data.links.map((link) => ({ label: link.label, url: link.url, primary: false })),
  ];

  contactActions.innerHTML = contactLinks
    .map(
      (link) => `
        <a
          class="btn ${link.primary ? "btn-primary" : "btn-ghost"}"
          href="${link.url}"
          ${link.url.startsWith("http") || link.external ? 'target="_blank" rel="noopener noreferrer"' : ""}
        >
          ${link.label}
        </a>
      `
    )
    .join("");
}

function renderExperience(data) {
  document.getElementById("timeline").innerHTML = data.experience
    .map(
      (job) => `
        <article class="timeline-item reveal">
          <div class="timeline-meta">
            <strong>${job.period}</strong>
            <span>${job.location}</span>
          </div>
          <div class="timeline-content">
            <h3>${job.role}</h3>
            <p class="timeline-company">${job.company}</p>
            <ul>
              ${job.highlights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </article>
      `
    )
    .join("");
}

function renderProjects(data) {
  document.getElementById("project-grid").innerHTML = data.projects
    .map((project) => {
      const links = [];
      if (project.url) links.push(`<a href="${project.url}" target="_blank" rel="noopener noreferrer">Live demo</a>`);
      if (project.repo) links.push(`<a href="${project.repo}" target="_blank" rel="noopener noreferrer">Source code</a>`);

      const imageMarkup = project.image
        ? `<figure class="project-image">
            <img src="${project.image}" alt="${project.imageAlt || project.name}" loading="lazy" />
          </figure>`
        : "";

      return `
        <article class="project-card reveal">
          ${imageMarkup}
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <ul class="tag-list">
            ${project.tags.map((tag) => `<li class="tag">${tag}</li>`).join("")}
          </ul>
          ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
        </article>
      `;
    })
    .join("");
}

function renderSkills(data) {
  document.getElementById("skills-grid").innerHTML = data.skills
    .map(
      (group) => `
        <article class="skill-card reveal">
          <h3>${group.category}</h3>
          <ul>
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderEducation(data) {
  const section = document.querySelector(".education");
  if (!data.education?.length) {
    section.hidden = true;
    return;
  }

  document.getElementById("education-list").innerHTML = data.education
    .map(
      (item) => `
        <article class="education-item reveal">
          <h3>${item.degree}</h3>
          <p class="education-meta">${item.school} · ${item.period}</p>
          ${item.note ? `<p class="education-note">${item.note}</p>` : ""}
        </article>
      `
    )
    .join("");
}

function setupScrollToTop() {
  document.querySelectorAll('a[href="#top"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.getElementById("top")?.focus({ preventScroll: true });
    });
  });
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.getElementById("nav-menu");

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  });

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open", !expanded);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("open");
    });
  });

  setupScrollToTop();
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function init() {
  const data = RESUME;

  setTextFields(data);
  renderAbout(data);
  renderResumeButton(data);
  renderLinks(data);
  renderExperience(data);
  renderProjects(data);
  renderSkills(data);
  renderEducation(data);

  document.getElementById("year").textContent = new Date().getFullYear();

  setupNavigation();
  setupReveal();
}

init();
