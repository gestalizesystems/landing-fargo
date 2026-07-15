/**
 * main.js
 * Interações principais da landing page Fargo: navegação, tabs de produtos,
 * accordion de FAQ, slider de depoimentos, modal de produto, newsletter e
 * botão voltar ao topo. Módulos independentes, inicializados no DOMContentLoaded.
 */

(function () {
  "use strict";

  /* ---------- Dados dos produtos (usados pelo modal "Saiba Mais") ---------- */
  const PRODUCTS = {
    "adultos-caes": {
      name: "Fargo Premium Adultos",
      flavor: "Carne, frango e batata-doce",
      image: "assets/images/kibble-dog-adulto.webp",
      desc: "Alimento completo para cães adultos de todos os portes, formulado com proteínas nobres, ômega 3 e 6 e taurina para apoiar a saúde do dia a dia.",
      benefits: ["Pele e pelos saudáveis", "Trato urinário saudável", "Excelente digestibilidade", "Condroitina e glicosamina para ossos e articulações"],
    },
    "filhotes-caes": {
      name: "Fargo Premium Filhotes",
      flavor: "Carne e cereais",
      image: "assets/images/kibble-dog-filhote.webp",
      desc: "Nutrição completa para o crescimento saudável do filhote, com proteínas, ferro e cálcio para músculos e ossos fortes desde os primeiros meses.",
      benefits: ["Imunidade fortalecida", "Músculos e ossos fortes", "Saúde bucal", "Digestão saudável"],
    },
    "pequeno-porte-caes": {
      name: "Fargo Premium Especial Pequeno Porte",
      flavor: "Carne, frango e batata-doce",
      image: "assets/images/kibble-dog-pequeno.webp",
      desc: "Fórmula especial desenvolvida para cães de pequeno porte, com grãos selecionados que auxiliam a saúde bucal e reduzem o odor nas fezes.",
      benefits: ["Pele e pelos saudáveis", "Menor odor nas fezes", "Ossos e articulações saudáveis", "Livre de corantes"],
    },
    "blend-dog": {
      name: "Blend Dog Premium",
      flavor: "Carne e cereais",
      image: "assets/images/kibble-dog-blend.webp",
      desc: "Fórmula 100% natural para dias cheios de aventuras, com extrato de yucca, ação anti-tártaro e ômega 3 e 6 para mais brilho na pelagem.",
      benefits: ["Digestão saudável", "Menos odor nas fezes", "Saúde bucal (anti-tártaro)", "Pelagem com mais brilho"],
    },
    "blend-dog-todos-portes": {
      name: "Blend Dog Todos os Portes",
      flavor: "Carne e cereais · 18% proteína",
      image: "assets/images/kibble-dog-blend-portes.webp",
      desc: "Para dias cheios de aventuras: fórmula pensada para cães adultos de todos os portes, com ação anti-tártaro e ômega 3 e 6.",
      benefits: ["Digestão saudável", "Menos odor nas fezes", "Saúde bucal (anti-tártaro)", "Pelagem com mais brilho"],
    },
    "gatos-salmao": {
      name: "Fargo Premium Adultos",
      flavor: "Salmão",
      image: "assets/images/kibble-cat-salmao.webp",
      desc: "Nutrição completa para gatos adultos com salmão selecionado, rico em ômega 3, 6 e taurina para pele, pelos e trato urinário saudáveis.",
      benefits: ["Pele e pelos saudáveis", "Trato urinário saudável", "Excelente digestibilidade", "Menor odor nas fezes"],
    },
    "gatos-adultos": {
      name: "Fargo Premium Adultos",
      flavor: "Carne, frango e cereais",
      image: "assets/images/kibble-cat-adulto.webp",
      desc: "Alimento completo e equilibrado para gatos adultos, com proteínas nobres para músculos fortes e excelente digestibilidade.",
      benefits: ["Músculos e ossos fortes", "Imunidade fortalecida", "Saúde bucal", "Pele e pelos saudáveis"],
    },
    "gatos-peixe": {
      name: "Fargo Premium Adultos",
      flavor: "Peixe e cereais",
      image: "assets/images/kibble-cat-peixe.webp",
      desc: "Fórmula à base de peixe com grãos selecionados, ideal para a saúde bucal e o brilho da pelagem dos gatos adultos.",
      benefits: ["Pele e pelos saudáveis", "Saúde bucal", "Excelente digestibilidade", "Rico em ômega 3 e 6"],
    },
    "gatos-castrados": {
      name: "Fargo Premium Castrados",
      flavor: "Carne, frango e peixe",
      image: "assets/images/kibble-cat-castrado.webp",
      desc: "Desenvolvida para as necessidades específicas de gatos castrados, com controle de peso e imunidade fortalecida.",
      benefits: ["Trato urinário saudável", "Imunidade fortalecida", "Excelente digestibilidade", "Menor odor nas fezes"],
    },
    "sache-dog-cordeiro": {
      name: "Sachê Cordeiro ao Molho",
      flavor: "Cães Adultos · 100g",
      image: "assets/images/pouch-dog-cordeiro.webp",
      desc: "Elaborado com carnes selecionadas, cozido a vapor e sem aromatizantes artificiais.",
      benefits: ["Ingredientes naturais", "Ótima digestibilidade", "Sem transgênicos", "Super palatável"],
    },
    "sache-dog-carne": {
      name: "Sachê Carne ao Molho",
      flavor: "Cães Adultos · 100g",
      image: "assets/images/pouch-dog-carne.webp",
      desc: "Ingredientes naturais e alta palatabilidade para o dia a dia do seu cão, cozido a vapor.",
      benefits: ["Ingredientes naturais", "Ótima digestibilidade", "Sem transgênicos", "Super palatável"],
    },
    "sache-dog-frango": {
      name: "Sachê Frango ao Molho",
      flavor: "Cães Adultos · 100g",
      image: "assets/images/pouch-dog-frango.webp",
      desc: "Saboroso e nutritivo, sem transgênicos, conservantes ou aromatizantes artificiais.",
      benefits: ["Ingredientes naturais", "Ótima digestibilidade", "Sem transgênicos", "Super palatável"],
    },
    "sache-cat-salmao": {
      name: "Sachê Salmão ao Molho",
      flavor: "Gatos Castrados · 85g",
      image: "assets/images/pouch-cat-salmao.webp",
      desc: "Auxilia na hidratação, elaborado por nutricionistas e veterinários com ingredientes naturais.",
      benefits: ["Auxilia na hidratação", "Ingredientes naturais", "Sem transgênicos", "Super palatável"],
    },
    "sache-cat-frango": {
      name: "Sachê Frango ao Molho",
      flavor: "Gatos Adultos · 85g",
      image: "assets/images/pouch-cat-frango.webp",
      desc: "Elaborado por nutricionistas e veterinários, com ingredientes naturais e sabor irresistível.",
      benefits: ["Auxilia na hidratação", "Ingredientes naturais", "Sem transgênicos", "Super palatável"],
    },
    "sache-cat-carne": {
      name: "Sachê Carne ao Molho",
      flavor: "Gatos Castrados · 85g",
      image: "assets/images/pouch-cat-carne.webp",
      desc: "Formulado para as necessidades específicas de gatos castrados, cozido a vapor.",
      benefits: ["Auxilia na hidratação", "Ingredientes naturais", "Sem transgênicos", "Super palatável"],
    },
    "can-dog-carne": {
      name: "Enlatado Paté Sabor Carne",
      flavor: "Cães Adultos · 290g",
      image: "assets/images/can-dog-carne.webp",
      desc: "Paté cozido a vapor, com fórmula fechada e sem aromatizantes artificiais.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Alta palatabilidade"],
    },
    "can-dog-filhote-carne": {
      name: "Enlatado Paté Sabor Carne",
      flavor: "Cães Filhotes · 290g",
      image: "assets/images/can-dog-filhote-carne.webp",
      desc: "Nutrição completa para o crescimento saudável do filhote, cozido a vapor.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Alta palatabilidade"],
    },
    "can-dog-frango": {
      name: "Enlatado Paté Sabor Frango",
      flavor: "Cães Adultos · 290g",
      image: "assets/images/can-dog-frango.webp",
      desc: "Paté cozido a vapor, com fórmula fechada e sem aromatizantes artificiais.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Alta palatabilidade"],
    },
    "can-dog-figado": {
      name: "Enlatado Paté Sabor Fígado",
      flavor: "Cães Adultos · 290g",
      image: "assets/images/can-dog-figado.webp",
      desc: "Paté cozido a vapor, com fórmula fechada e sem aromatizantes artificiais.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Alta palatabilidade"],
    },
    "can-cat-frango": {
      name: "Enlatado Paté Sabor Frango",
      flavor: "Gatos Adultos · 290g",
      image: "assets/images/can-cat-frango.webp",
      desc: "Fórmula fechada, desenvolvida para gatos adultos de todas as raças.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Para todas as raças"],
    },
    "can-cat-carne": {
      name: "Enlatado Paté Sabor Carne",
      flavor: "Gatos Adultos · 290g",
      image: "assets/images/can-cat-carne.webp",
      desc: "Fórmula fechada, desenvolvida para gatos adultos de todas as raças.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Para todas as raças"],
    },
    "can-cat-figado": {
      name: "Enlatado Paté Sabor Fígado",
      flavor: "Gatos Adultos · 290g",
      image: "assets/images/can-cat-figado.webp",
      desc: "Fórmula fechada, desenvolvida para gatos adultos de todas as raças.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Para todas as raças"],
    },
    "can-cat-peixe": {
      name: "Enlatado Paté Sabor Peixe",
      flavor: "Gatos Adultos · 290g",
      image: "assets/images/can-cat-peixe.webp",
      desc: "Fórmula fechada, desenvolvida para gatos adultos de todas as raças.",
      benefits: ["Fórmula fechada", "Cozido a vapor", "Sem aromatizantes artificiais", "Para todas as raças"],
    },
    "litter-tradicional": {
      name: "Granulado Higiênico Tradicional",
      flavor: "4kg · Clássico",
      image: "assets/images/litter-tradicional.webp",
      desc: "100% natural, sem resíduos químicos, com torrões firmes e instantâneos que facilitam a limpeza.",
      benefits: ["100% natural", "Máxima absorção", "Maior controle de odores", "Torrões firmes e instantâneos"],
    },
    "litter-fino": {
      name: "Granulado Higiênico Fino",
      flavor: "4kg · Grãos finos",
      image: "assets/images/litter-fino.webp",
      desc: "100% natural, sem resíduos químicos, com torrões firmes e instantâneos que facilitam a limpeza.",
      benefits: ["100% natural", "Máxima absorção", "Maior controle de odores", "Torrões firmes e instantâneos"],
    },
    "litter-perfumado": {
      name: "Granulado Higiênico Perfumado",
      flavor: "4kg · Fragrância floral",
      image: "assets/images/litter-perfumado.webp",
      desc: "100% natural, com fragrância floral, torrões firmes e instantâneos que facilitam a limpeza.",
      benefits: ["100% natural", "Máxima absorção", "Maior controle de odores", "Fragrância floral"],
    },
    "litter-fino-perfumado": {
      name: "Granulado Higiênico Fino Perfumado",
      flavor: "4kg · Grãos finos + fragrância floral",
      image: "assets/images/litter-fino-perfumado.webp",
      desc: "100% natural, com grãos finos e fragrância floral, torrões firmes e instantâneos.",
      benefits: ["100% natural", "Máxima absorção", "Maior controle de odores", "Fragrância floral"],
    },
  };

  /* ---------- Navegação mobile ---------- */
  function initNav() {
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const closeBtn = document.querySelector("[data-nav-close]");
    if (!nav || !toggle) return;

    function openNav() {
      nav.classList.add("is-open");
      toggle.classList.add("is-active");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", () => {
      nav.classList.contains("is-open") ? closeNav() : openNav();
    });

    closeBtn?.addEventListener("click", closeNav);

    nav.querySelectorAll("[data-nav-link]").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) closeNav();
    });
  }

  /* ---------- Header com fundo ao rolar ---------- */
  function initHeaderScroll() {
    const header = document.querySelector("[data-header]");
    if (!header) return;

    function update() {
      header.classList.toggle("header--scrolled", window.scrollY > 40);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- Tabs da linha de produtos (Cães / Gatos) ---------- */
  function initProductTabs() {
    const buttons = document.querySelectorAll("[data-tab]");
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;

        buttons.forEach((b) => {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", b === btn ? "true" : "false");
        });

        document.querySelectorAll("[data-panel]").forEach((panel) => {
          const isMatch = panel.dataset.panel === target;
          panel.classList.toggle("is-active", isMatch);
          panel.hidden = !isMatch;
        });
      });
    });
  }

  /* ---------- Accordion do FAQ ---------- */
  function initFaqAccordion() {
    const items = document.querySelectorAll("[data-faq-item]");
    if (!items.length) return;

    items.forEach((item) => {
      const toggle = item.querySelector("[data-faq-toggle]");
      toggle.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        item.classList.toggle("is-open", !isOpen);
        toggle.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  }

  /* ---------- Slider de depoimentos ---------- */
  function initTestimonialSlider() {
    const track = document.querySelector("[data-slider-track]");
    const dotsWrap = document.querySelector("[data-slider-dots]");
    const prevBtn = document.querySelector("[data-slider-prev]");
    const nextBtn = document.querySelector("[data-slider-next]");
    if (!track || !dotsWrap) return;

    const slides = Array.from(track.querySelectorAll("[data-slide]"));
    let current = 0;
    let autoplayTimer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider__dot";
      dot.setAttribute("aria-label", `Ir para depoimento ${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function render() {
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((dot, i) => dot.classList.toggle("is-active", i === current));
    }

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      render();
    }

    function next() {
      goTo(current + 1);
    }

    function prev() {
      goTo(current - 1);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(next, 6000);
    }

    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
    }

    nextBtn?.addEventListener("click", () => {
      next();
      startAutoplay();
    });
    prevBtn?.addEventListener("click", () => {
      prev();
      startAutoplay();
    });

    const slider = document.querySelector(".testimonial-slider");
    slider?.addEventListener("mouseenter", stopAutoplay);
    slider?.addEventListener("mouseleave", startAutoplay);

    render();
    startAutoplay();
  }

  /* ---------- Modal de produto ---------- */
  function initProductModal() {
    const modal = document.querySelector("[data-modal]");
    if (!modal) return;

    const image = modal.querySelector("[data-modal-image]");
    const title = modal.querySelector("[data-modal-title]");
    const flavor = modal.querySelector("[data-modal-flavor]");
    const desc = modal.querySelector("[data-modal-desc]");
    const benefitsList = modal.querySelector("[data-modal-benefits]");
    let lastFocused = null;

    function openModal(productId) {
      const product = PRODUCTS[productId];
      if (!product) return;

      image.src = product.image;
      image.alt = `Embalagem ${product.name}, sabor ${product.flavor}`;
      title.textContent = product.name;
      flavor.textContent = product.flavor;
      desc.textContent = product.desc;

      benefitsList.innerHTML = "";
      product.benefits.forEach((benefit) => {
        const li = document.createElement("li");
        li.innerHTML = `<svg width="18" height="18"><use href="#icon-check"></use></svg>${benefit}`;
        benefitsList.appendChild(li);
      });

      lastFocused = document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      modal.querySelector(".modal__close")?.focus();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      lastFocused?.focus();
    }

    document.querySelectorAll("[data-product-open]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(btn.dataset.productOpen));
    });

    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  /* ---------- Formulário de newsletter (sem backend) ---------- */
  function initNewsletterForm() {
    const form = document.querySelector("[data-newsletter-form]");
    if (!form) return;

    const status = document.querySelector("[data-newsletter-status]");
    const input = form.querySelector("input[type='email']");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!input.value || !input.validity.valid) {
        status.textContent = "Informe um e-mail válido.";
        return;
      }

      status.textContent = `Obrigado! Em breve novidades no e-mail ${input.value}.`;
      form.reset();
    });
  }

  /* ---------- Botão voltar ao topo ---------- */
  function initBackToTop() {
    const btn = document.querySelector("[data-back-to-top]");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      () => {
        btn.classList.toggle("is-visible", window.scrollY > 600);
      },
      { passive: true }
    );

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Ano corrente no rodapé ---------- */
  function initFooterYear() {
    const el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initHeaderScroll();
    initProductTabs();
    initFaqAccordion();
    initTestimonialSlider();
    initProductModal();
    initNewsletterForm();
    initBackToTop();
    initFooterYear();
  });
})();
