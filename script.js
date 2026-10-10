/* =========================================================
   SCRIPT.JS — COMPLETE UPDATED VERSION

   এই ফাইলের কাজ:
   ১) Website Configuration
   ২) Mobile Menu
   ৩) Outside Click করলে Menu বন্ধ
   ৪) Dropdown Menu
   ৫) Typing Animation
   ৬) Hero Slider + Touch Swipe
   ৭) Page Routing / Back Button
   ৮) Custom PDF.js Reader
   ৯) Gallery Lightbox
   ১০) Prayer Times — Home Page Only
   ১১) GitHub Pages Home Detection
   ========================================================= */


/* =========================================================
   00. PDF.JS LIBRARY LOAD
   ========================================================= */

const mtePdfJsLoader = document.createElement("script");

mtePdfJsLoader.src =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";

mtePdfJsLoader.onload = function () {
  if (typeof mteStartPdfSystem === "function") {
    mteStartPdfSystem();
  }
};

document.head.appendChild(mtePdfJsLoader);


/* =========================================================
   01. WEBSITE CONFIGURATION
   ========================================================= */

const MTE_CONFIG = {

  logo:
    "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-16%20at%209.58.56%20PM.jpeg",

  profileImage:
    "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/01638816760.jpg",

  teacherName:
    "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",

  subtitle:
    "ওয়েব ডেভেলপার | ওয়েব ডিজাইনার | এম এস ওয়ার্ড এক্সপার্ট | শিক্ষানুরাগী | শিক্ষক | লেখক | ইমাম",


  /* =========================================================
     BOOKS
     ========================================================= */

  books: [

    {
      title: "প্রশ্নোত্তরে এসো সহজ পদ্ধতিতে তাজবীদ ও সিফাত শিখি",
      author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
      cover:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Fainal-%20font%20side.jpg",
      pdf:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/A5%20size.pdf"
    },

    {
      title: "শিশুদের সহজ নূরাণী কায়দা",
      author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
      cover:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/KAYDA%20NEW%20COVER%20PAGE.jpg",
      pdf:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Kayda%20.pdf"
    },

    {
      title: "হৃদয়ের ঠিকানা জান্নাত",
      author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
      cover:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-17%20at%204.48.08%20PM%20(2).jpeg",
      pdf:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Paradise%20The%20Destination%20of%20the%20Heart.pdf"
    },

    {
      title: "হৃদয়ের ঠিকানা জান্নাত",
      author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
      cover:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-17%20at%204.48.08%20PM%20(2).jpeg",
      pdf:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Paradise%20The%20Destination%20of%20the%20Heart.pdf"
    },

    {
      title: "হৃদয়ের ঠিকানা জান্নাত",
      author: "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
      cover:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/WhatsApp%20Image%202026-09-17%20at%204.48.08%20PM%20(2).jpeg",
      pdf:
        "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Paradise%20The%20Destination%20of%20the%20Heart.pdf"
    }

  ],


  bookCover:
    "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Fainal-%20font%20side.jpg",


  typingTexts: [
    "আবু ত্বহা মোহাম্মাদ সাইফুল ইসলাম",
    "মাদ্রাসা শিক্ষক",
    "ইসলামিক লেখক",
    "ওয়েব ডেভলপার",
    "ইনচার্জ"
  ],


  phone: "+8801638816760",

  whatsapp: "+8801638816760",

  email: "Si1993.sm@email.com",

  facebook:
    "https://www.facebook.com/Abu.twahaa.saiful.Islam.760",

  address:
    "94 Kazi Alauddin Road, Najir Bazar, Dhaka-1000",


  sliderImages: [

    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1800&q=82",

    "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1800&q=82",

    "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/images%20(2).jpg"

  ],


  pdfDemo:
    "https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/A5%20size.pdf"

};


/* =========================================================
   ROUTES — START
   ========================================================= */

const mteRoutes = {

  home: "হোম",
  about: "আমার সম্পর্কে",

  // শিক্ষা
  notes: "ক্লাস নোট",
  courses: "অনলাইন কোর্স",
  quran: "কুরআন শিক্ষা",
  tajweed: "তাজবীদ",
  hifz: "হিফজ",

  // রিসোর্স
  books: "ইসলামিক বই",
  library: "PDF লাইব্রেরি",
  "student-zone": "শিক্ষার্থীদের রিসোর্স",
  syllabus: "সিলেবাস",
  routine: "রুটিন",
  results: "ফলাফল",
  notices: "নোটিশ",
  videos: "ভিডিও ক্লাস",

  // কুরআন
  alquran: "আল কুরআনুল কারীম",

  // দোয়া ও মাসায়েল
  "doya-o-jikir": "দোয়া ও যিকির",
  masayel: "মাসায়েল",

  // অন্যান্য
  blog: "ব্লগ",
  khutbah: "খুতবা",
  "jumuah-khutbah": "জুমআর খুতবাহ",
  "nikah-khutbah": "বিবাহের খুতবাহ",
  gallery: "গ্যালারি",
  contact: "যোগাযোগ"

};

/* =========================================================
   ROUTES — END
   ========================================================= */

/* =========================================================
   BASIC DOM ELEMENTS
   ========================================================= */

const mteMain = document.getElementById("mteMain");


if (document.getElementById("mteBrandLogo")) {
  document.getElementById("mteBrandLogo").src = MTE_CONFIG.logo;
}

if (document.getElementById("mteBrandName")) {
  document.getElementById("mteBrandName").textContent =
    MTE_CONFIG.teacherName;
}

if (document.getElementById("mteBrandSub")) {
  document.getElementById("mteBrandSub").textContent =
    MTE_CONFIG.subtitle;
}

if (document.getElementById("mteFooterName")) {
  document.getElementById("mteFooterName").textContent =
    MTE_CONFIG.teacherName;
}

if (document.getElementById("mteFooterName2")) {
  document.getElementById("mteFooterName2").textContent =
    MTE_CONFIG.teacherName;
}

if (document.getElementById("mteYear")) {
  document.getElementById("mteYear").textContent =
    new Date().getFullYear();
}


/* =========================================================
   02. MOBILE MENU
   ========================================================= */

const mteNav = document.getElementById("mteNav");
const mteMenuToggle = document.getElementById("mteMenuToggle");


function mteCloseMenu() {

  if (mteNav) {
    mteNav.classList.remove("mte-menu-open");
  }

  if (mteMenuToggle) {
    mteMenuToggle.textContent = "☰";
    mteMenuToggle.setAttribute("aria-expanded", "false");
  }

  document
    .querySelectorAll(".mte-dropdown")
    .forEach(function (d) {
      d.classList.remove("mte-open");
    });

}


if (mteMenuToggle && mteNav) {

  mteMenuToggle.addEventListener("click", function (e) {

    e.stopPropagation();

    const open =
      mteNav.classList.toggle("mte-menu-open");

    mteMenuToggle.textContent =
      open ? "×" : "☰";

    mteMenuToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

  });

}


document.addEventListener("click", function (e) {

  if (!mteNav || !mteMenuToggle) return;

  if (
    !mteNav.contains(e.target) &&
    !mteMenuToggle.contains(e.target)
  ) {
    mteCloseMenu();
  }

});


document
  .querySelectorAll(".mte-drop-btn")
  .forEach(function (btn) {

    btn.addEventListener("click", function (e) {

      e.stopPropagation();

      const parent =
        btn.closest(".mte-dropdown");

      document
        .querySelectorAll(".mte-dropdown")
        .forEach(function (d) {

          if (d !== parent) {
            d.classList.remove("mte-open");
          }

        });

      if (parent) {
        parent.classList.toggle("mte-open");
      }

    });

  });


window.addEventListener("resize", function () {

  if (window.innerWidth > 900) {
    mteCloseMenu();
  }

});


/* =========================================================
   03. TYPING ANIMATION
   ========================================================= */

let mteTypingTimer;


function mteStartTyping() {

  const el =
    document.getElementById("mteTypingText");

  if (
    !el ||
    !MTE_CONFIG.typingTexts ||
    !MTE_CONFIG.typingTexts.length
  ) {
    return;
  }

  clearTimeout(mteTypingTimer);

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;


  function tick() {

    const current =
      MTE_CONFIG.typingTexts[textIndex];

    el.textContent =
      deleting
        ? current.slice(0, charIndex--)
        : current.slice(0, charIndex++);


    if (
      !deleting &&
      charIndex > current.length
    ) {

      deleting = true;

      mteTypingTimer =
        setTimeout(tick, 1500);

      return;
    }


    if (
      deleting &&
      charIndex < 0
    ) {

      deleting = false;
      charIndex = 0;

      textIndex =
        (textIndex + 1) %
        MTE_CONFIG.typingTexts.length;

      mteTypingTimer =
        setTimeout(tick, 350);

      return;
    }


    mteTypingTimer =
      setTimeout(
        tick,
        deleting ? 45 : 80
      );

  }


  tick();

}


/* =========================================================
   04. HERO SLIDER
   ========================================================= */

let mteSlideIndex = 0;
let mteSlideTimer;


function mteBuildSlider() {

  const slides =
    MTE_CONFIG.sliderImages
      .map(function (img, i) {

        return `
          <div
            class="mte-slide ${i === 0 ? "mte-active" : ""}"
            style="background-image:url('${img}')">
          </div>
        `;

      })
      .join("");


  const dots =
    MTE_CONFIG.sliderImages
      .map(function (_, i) {

        return `
          <button
            class="mte-dot ${i === 0 ? "mte-active" : ""}"
            type="button"
            data-slide="${i}"
            aria-label="স্লাইড ${i + 1}">
          </button>
        `;

      })
      .join("");


  return `

    <section
      class="mte-hero"
      id="mteHeroSlider">

      ${slides}

      <div class="mte-container mte-hero-content">

        <div class="mte-hero-copy">

          <div class="mte-typing-line">

            <span id="mteTypingText"></span>

            <span class="mte-typing-cursor">
              |
            </span>

          </div>


          <h1 class="mte-hero-title">
            কুরআন ও ইসলামিক শিক্ষার সুন্দর পথচলা 
          </h1>


          <p class="mte-hero-text">
            জ্ঞান, আমল ও উত্তম চরিত্র গঠনের মাধ্যমে
            সুন্দর সমাজ নির্মাণ। শিক্ষার্থীদের জন্য সহজ,
            সুন্দর ও প্রয়োজনীয় ইসলামিক শিক্ষা ও রিসোর্স।
          </p>


          <div class="mte-actions">

            <a
              class="mte-btn mte-btn-primary"
              href="#about"
              data-mte-route>
              আমার সম্পর্কে
            </a>


            <a
              class="mte-btn mte-btn-light"
              href="#courses"
              data-mte-route>
              শিক্ষা শুরু করুন
            </a>

          </div>

        </div>

      </div>


      <button
        class="mte-slider-control mte-slider-prev"
        id="mtePrev"
        type="button"
        aria-label="আগের স্লাইড">
        ‹
      </button>


      <button
        class="mte-slider-control mte-slider-next"
        id="mteNext"
        type="button"
        aria-label="পরের স্লাইড">
        ›
      </button>


      <div class="mte-slider-dots">
        ${dots}
      </div>

    </section>

  `;

}


function mteInitSlider() {

  const slides =
    Array.from(
      document.querySelectorAll(".mte-slide")
    );

  const dots =
    Array.from(
      document.querySelectorAll(".mte-dot")
    );


  if (!slides.length) return;


  function show(index) {

    mteSlideIndex =
      (index + slides.length) %
      slides.length;

    slides.forEach(function (s, i) {

      s.classList.toggle(
        "mte-active",
        i === mteSlideIndex
      );

    });


    dots.forEach(function (d, i) {

      d.classList.toggle(
        "mte-active",
        i === mteSlideIndex
      );

    });

  }


  function next() {
    show(mteSlideIndex + 1);
  }


  function prev() {
    show(mteSlideIndex - 1);
  }


  function restart() {

    clearInterval(mteSlideTimer);

    mteSlideTimer =
      setInterval(next, 5000);

  }


  const nextButton =
    document.getElementById("mteNext");

  const prevButton =
    document.getElementById("mtePrev");


  if (nextButton) {

    nextButton.onclick = function () {
      next();
      restart();
    };

  }


  if (prevButton) {

    prevButton.onclick = function () {
      prev();
      restart();
    };

  }


  dots.forEach(function (d) {

    d.onclick = function () {

      show(
        Number(d.dataset.slide)
      );

      restart();

    };

  });


  let startX = 0;

  const hero =
    document.getElementById("mteHeroSlider");


  if (hero) {

    hero.addEventListener(
      "touchstart",
      function (e) {

        startX =
          e.changedTouches[0].clientX;

      },
      { passive: true }
    );


    hero.addEventListener(
      "touchend",
      function (e) {

        const diff =
          e.changedTouches[0].clientX -
          startX;


        if (Math.abs(diff) > 45) {

          if (diff < 0) {
            next();
          } else {
            prev();
          }

          restart();

        }

      },
      { passive: true }
    );

  }


  restart();

}


/* =========================================================
   05. PAGE CONTENT
   ========================================================= */

function mtePage(title, desc, content) {

  return `

    <section class="mte-page">

      <div class="mte-page-head">

        <div class="mte-container">

          <h1>${title}</h1>

          <p>${desc}</p>

          <button
            class="mte-btn mte-btn-light mte-back"
            type="button"
            onclick="mteBack()">
            ← ফিরে যান
          </button>

        </div>

      </div>

      ${content}

    </section>

  `;

}


/* =========================================================
   HOME PAGE
   ========================================================= */

function mteHome() {

  return `

  ${mteBuildSlider()}


  <section class="mte-section">

    <div class="mte-container mte-profile">

      <img
        class="mte-profile-img"
        src="${MTE_CONFIG.profileImage}"
        alt="${MTE_CONFIG.teacherName}"
        loading="lazy">


      <div>

        <div class="mte-section-kicker">
          সংক্ষিপ্ত পরিচিতি
        </div>

        <h2 class="mte-profile-title">
          ${MTE_CONFIG.teacherName}
        </h2>

        <p>
          <strong>
            ${MTE_CONFIG.subtitle}
          </strong>
        </p>

        <p>
          শিক্ষার্থীদের কুরআন, তাজবীদ, হিফজ
          ও প্রয়োজনীয় ইসলামিক শিক্ষা সহজভাবে শেখানো
          এবং পড়াশোনার জন্য প্রয়োজনীয় রিসোর্স
          এক জায়গায় পৌঁছে দেওয়ার একটি ব্যক্তিগত
          শিক্ষামূলক উদ্যোগ।
        </p>


        <ul class="mte-points">

          <li>কুরআন ও তাজবীদ শিক্ষা</li>
          <li>হিফজ ও নাজেরা সহায়তা</li>
          <li>ক্লাস নোট ও PDF রিসোর্স</li>
          <li>শিক্ষার্থীদের রুটিন ও ফলাফল</li>

        </ul>


        <a
          class="mte-btn mte-btn-primary"
          href="#about"
          data-mte-route>
          বিস্তারিত জানুন
        </a>

      </div>

    </div>

  </section>


<section class="mte-section mte-section-soft mte-notice-section">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          গুরুত্বপূর্ণ নোটিশ
        </div>

        <h2 class="mte-section-title">
          সর্বশেষ আপডেট
        </h2>

      </div>


      <div class="mte-notice">

        <strong>
          নতুন ক্লাস নোট প্রকাশিত হয়েছে
        </strong>

        <small>
          শিক্ষার্থীরা রিসোর্স বিভাগ থেকে দেখতে পারবেন।
        </small>

      </div>


      <div class="mte-notice">

        <strong>
          অনলাইন কুরআন শিক্ষা কোর্সে ভর্তি চলছে
        </strong>

        <small>
          বিস্তারিত কোর্স পেজে দেখুন।
        </small>

      </div>


      <div class="mte-notice">

        <strong>
          পরবর্তী পরীক্ষার রুটিন শীঘ্রই প্রকাশিত হবে
        </strong>

        <small>
          নোটিশ বোর্ড অনুসরণ করুন।
        </small>

      </div>


      <a
        class="mte-link"
        href="#notices"
        data-mte-route>
        সব নোটিশ দেখুন →
      </a>

    </div>

  </section>


  <section class="mte-section">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          শিক্ষা
        </div>

        <h2 class="mte-section-title">
          শিক্ষার্থীদের জন্য শেখার সুযোগ
        </h2>

      </div>


      <div class="mte-grid">

        <article class="mte-card">

          <div class="mte-card-icon">📖</div>

          <h3 class="mte-card-title">
            কুরআন শিক্ষা
          </h3>

          <p class="mte-card-text">
            সঠিক উচ্চারণ ও নিয়ম মেনে কুরআন
            শেখার সহায়ক রিসোর্স।
          </p>

          <a
            class="mte-link"
            href="#quran"
            data-mte-route>
            দেখুন →
          </a>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">🎧</div>

          <h3 class="mte-card-title">
            তাজবীদ
          </h3>

          <p class="mte-card-text">
            তাজবীদের প্রয়োজনীয় বিষয়গুলো
            ধাপে ধাপে শেখার ব্যবস্থা।
          </p>

          <a
            class="mte-link"
            href="#tajweed"
            data-mte-route>
            দেখুন →
          </a>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">🌙</div>

          <h3 class="mte-card-title">
            হিফজ
          </h3>

          <p class="mte-card-text">
            হিফজের পরিকল্পনা, পুনরাবৃত্তি
            ও নিয়মিত পড়াশোনার সহায়তা।
          </p>

          <a
            class="mte-link"
            href="#hifz"
            data-mte-route>
            দেখুন →
          </a>

        </article>

      </div>

    </div>

  </section>


<section class="mte-section mte-class-note-section">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          ক্লাস নোট
        </div>

        <h2 class="mte-section-title">
          সাম্প্রতিক পড়াশোনার রিসোর্স
        </h2>

      </div>


      <div class="mte-grid">

        <article class="mte-card">

          <div class="mte-card-icon">📝</div>

          <h3 class="mte-card-title">
            নাজেরা ও কুরআন
          </h3>

          <p class="mte-card-text">
            ডেমো ক্লাস নোট ও অনুশীলন।
          </p>

          <a
            class="mte-link"
            href="#notes"
            data-mte-route>
            নোট দেখুন →
          </a>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">✍️</div>

          <h3 class="mte-card-title">
            তাজবীদ নোট
          </h3>

          <p class="mte-card-text">
            মাখরাজ ও প্রয়োজনীয় তাজবীদ নিয়ম।
          </p>

          <a
            class="mte-link"
            href="#notes"
            data-mte-route>
            নোট দেখুন →
          </a>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">📚</div>

          <h3 class="mte-card-title">
            হিফজ পরিকল্পনা
          </h3>

          <p class="mte-card-text">
            দৈনিক সবক ও আমুখতা/দাওর ব্যবস্থাপনার ডেমো।
          </p>

          <a
            class="mte-link"
            href="#notes"
            data-mte-route>
            সব নোট →
          </a>

        </article>

      </div>

    </div>

  </section>


  <section class="mte-section mte-book-section">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          ইসলামিক বই
        </div>

        <h2 class="mte-section-title">
          PDF বই পড়ুন
        </h2>

        <p class="mte-section-desc">
          বইটি ওয়েবসাইটের ভেতরেই Custom PDF Reader-এ খুলবে।
        </p>

      </div>


      <div class="mte-grid">

        ${MTE_CONFIG.books.map(function (book) {

          return `

            <article class="mte-card mte-book-card">

              <img
                class="mte-book-cover"
                src="${book.cover}"
                alt="${book.title}"
                loading="lazy">

              <h3 class="mte-card-title">
                ${book.title}
              </h3>

              <p class="mte-card-text">
                লেখক: ${book.author}
              </p>

              <button
                class="mte-btn mte-btn-primary"
                type="button"
                onclick="mteOpenPdf('${book.pdf}','${book.title}')">
                📖 বইটি পড়ুন
              </button>

            </article>

          `;

        }).join("")}


        <article class="mte-card">

          <div class="mte-card-icon">
            📚
          </div>

          <h3 class="mte-card-title">
            PDF লাইব্রেরি
          </h3>

          <p class="mte-card-text">
            বিভিন্ন ইসলামিক ও শিক্ষামূলক PDF
            এক জায়গায় সাজানো যাবে।
          </p>

          <a
            class="mte-btn mte-btn-primary"
            href="#library"
            data-mte-route>
            লাইব্রেরি খুলুন
          </a>

        </article>

      </div>

    </div>

  </section>

  ${mteBuildDuaHomeSection()}

  <!-- =====================================================
       আজকের আমল
       ===================================================== -->

  <section class="mte-section mte-section-soft mte-amol-section">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          আজকের আমল
        </div>

        <h2 class="mte-section-title">
          আজকের কিছু গুরুত্বপূর্ণ আমল
        </h2>

        <p class="mte-section-desc">
          প্রতিদিনের জীবনে আল্লাহর স্মরণ ও নেক আমলকে
          আরও সুন্দরভাবে ধরে রাখার চেষ্টা করি।
        </p>

      </div>


      <div class="mte-grid">

        <article class="mte-card">

          <div class="mte-card-icon">📖</div>

          <h3 class="mte-card-title">
            কুরআন তিলাওয়াত
          </h3>

          <p class="mte-card-text">
            প্রতিদিন কিছু সময় কুরআন তিলাওয়াত করুন
            এবং আয়াতগুলোর অর্থ বোঝার চেষ্টা করুন।
          </p>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">🤲</div>

          <h3 class="mte-card-title">
            যিকির ও দোয়া
          </h3>

          <p class="mte-card-text">
            সকাল-সন্ধ্যার মাসনূন যিকির ও দোয়া পড়ুন
            এবং নিয়মিত আল্লাহকে স্মরণ করুন।
          </p>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">🕌</div>

          <h3 class="mte-card-title">
            পাঁচ ওয়াক্ত নামাজ
          </h3>

          <p class="mte-card-text">
            পাঁচ ওয়াক্ত নামাজ সময়মতো আদায় করার
            চেষ্টা করুন এবং নামাজে মনোযোগী থাকুন।
          </p>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">❤️</div>

          <h3 class="mte-card-title">
            সদকা ও ভালো কাজ
          </h3>

          <p class="mte-card-text">
            সামর্থ্য অনুযায়ী সদকা করুন এবং আজ অন্তত
            একজন মানুষের উপকার করার চেষ্টা করুন।
          </p>

        </article>

      </div>


      <div style="text-align:center;margin-top:25px;">

        <p style="font-weight:600;">
          🌿 আজকের নিয়ত — আল্লাহর সন্তুষ্টির জন্য
          একটি ভালো কাজ করব।
        </p>

      </div>

    </div>

  </section>


  <!-- =====================================================
       VIDEO
       ===================================================== -->

  <section class="mte-section mte-section-soft">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          ভিডিও ক্লাস
        </div>

        <h2 class="mte-section-title">
          শেখার ভিডিও
        </h2>

      </div>


      <div class="mte-grid">

        <article class="mte-card">

          <div class="mte-video">

            <iframe
              src=""
              title="ডেমো ভিডিও ক্লাস"
              loading="lazy"
              allowfullscreen>
            </iframe>

          </div>

          <h3 class="mte-card-title">
            ডেমো ভিডিও ক্লাস
          </h3>

        </article>

      </div>

    </div>

  </section>


  <!-- =====================================================
       STUDENT ZONE
       ===================================================== -->

 <section class="mte-section mte-student-zone-section">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          শিক্ষার্থী জোন
        </div>

        <h2 class="mte-section-title">
          পড়াশোনার প্রয়োজনীয় সবকিছু
        </h2>

      </div>


      <div class="mte-grid">

        <article class="mte-card">

          <div class="mte-card-icon">
            🗓️
          </div>

          <h3 class="mte-card-title">
            রুটিন
          </h3>

          <p class="mte-card-text">
            ক্লাস ও পরীক্ষার রুটিন।
          </p>

          <a
            class="mte-link"
            href="#routine"
            data-mte-route>
            দেখুন →
          </a>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">
            📋
          </div>

          <h3 class="mte-card-title">
            সিলেবাস
          </h3>

          <p class="mte-card-text">
            বিষয়ভিত্তিক সিলেবাস ও প্রস্তুতি।
          </p>

          <a
            class="mte-link"
            href="#syllabus"
            data-mte-route>
            দেখুন →
          </a>

        </article>


        <article class="mte-card">

          <div class="mte-card-icon">
            🏆
          </div>

          <h3 class="mte-card-title">
            ফলাফল
          </h3>

          <p class="mte-card-text">
            ডেমো পরীক্ষার ফলাফল ও অগ্রগতি।
          </p>

          <a
            class="mte-link"
            href="#results"
            data-mte-route>
            দেখুন →
          </a>

        </article>

      </div>

    </div>

  </section>


  <!-- =====================================================
       GALLERY
       ===================================================== -->

  <section class="mte-section mte-section-soft">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          গ্যালারি
        </div>

        <h2 class="mte-section-title">
          শিক্ষামূলক মুহূর্ত
        </h2>

      </div>


      <div class="mte-gallery">

        <button
          class="mte-gallery-item"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=85')">

          <img
            src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80"
            alt="ইসলামিক শিক্ষা"
            loading="lazy">

        </button>


        <button
          class="mte-gallery-item"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1200&q=85')">

          <img
            src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=600&q=80"
            alt="কুরআন শিক্ষা"
            loading="lazy">

        </button>


        <button
          class="mte-gallery-item"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1200&q=85')">

          <img
            src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=600&q=80"
            alt="ইসলামিক বই"
            loading="lazy">

        </button>


        <button
          class="mte-gallery-item"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=85')">

          <img
            src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=600&q=80"
            alt="শিক্ষা"
            loading="lazy">

        </button>

      </div>


      <div style="text-align:center;margin-top:20px">

        <a
          class="mte-btn mte-btn-primary"
          href="#gallery"
          data-mte-route>
          সম্পূর্ণ গ্যালারি
        </a>

      </div>

    </div>

  </section>


  <!-- =====================================================
       CONTACT
       ===================================================== -->

<section class="mte-section mte-contact-section">

    <div class="mte-container">

      <div class="mte-section-head">

        <div class="mte-section-kicker">
          যোগাযোগ
        </div>

        <h2 class="mte-section-title">
          শিক্ষা ও যোগাযোগ
        </h2>

        <p class="mte-section-desc">
          প্রশ্ন, কোর্স বা শিক্ষার্থীদের বিষয়ে যোগাযোগ করতে
          নিচের পেজটি ব্যবহার করুন।
        </p>

      </div>


      <div style="text-align:center">

        <a
          class="mte-btn mte-btn-primary"
          href="#contact"
          data-mte-route>
          যোগাযোগ করুন →
        </a>

      </div>

    </div>

  </section>

  `;
}

function mteBuildDuaHomeSection() {
  return `
    <!-- দোয়া ও যিকির — Home Section -->
    <section class="mte-dua-home-section" id="home-dua">

      <div class="mte-dua-section-header">

        <span class="mte-dua-section-badge">
          🤲 আমল ও ইবাদত
        </span>

        <h2>দোয়া ও যিকির</h2>

        <p>
          প্রতিদিনের প্রয়োজনীয় দোয়া ও যিকির শিখুন,
          অর্থ বুঝে আমল করুন এবং আল্লাহর নৈকট্য
          অর্জনের চেষ্টা করুন।
        </p>

      </div>


      <div class="mte-dua-home-grid">

        <!-- সকাল-সন্ধ্যার দোয়া -->
        <div class="mte-dua-home-card">

          <div class="mte-dua-card-icon">
            🌅
          </div>

          <div class="mte-dua-card-content">
            <h3>সকাল-সন্ধ্যার দোয়া</h3>

            <p>
              সকাল ও সন্ধ্যায় পাঠযোগ্য গুরুত্বপূর্ণ
              দোয়া ও যিকির।
            </p>
          </div>

        </div>


        <!-- নামাজের দোয়া -->
        <div class="mte-dua-home-card">

          <div class="mte-dua-card-icon">
            🕌
          </div>

          <div class="mte-dua-card-content">
            <h3>নামাজের দোয়া</h3>

            <p>
              নামাজের আগে-পরে এবং নামাজের বিভিন্ন
              সময়ে পাঠযোগ্য দোয়া।
            </p>
          </div>

        </div>


        <!-- খাওয়া-দাওয়ার দোয়া -->
        <div class="mte-dua-home-card">

          <div class="mte-dua-card-icon">
            🍽️
          </div>

          <div class="mte-dua-card-content">
            <h3>খাওয়া-দাওয়ার দোয়া</h3>

            <p>
              খাবার গ্রহণ ও শেষ করার সময়ের
              প্রয়োজনীয় মাসনূন দোয়া।
            </p>
          </div>

        </div>


        <!-- দৈনন্দিন জীবনের দোয়া -->
        <div class="mte-dua-home-card">

          <div class="mte-dua-card-icon">
            🏠
          </div>

          <div class="mte-dua-card-content">
            <h3>দৈনন্দিন জীবনের দোয়া</h3>

            <p>
              ঘর থেকে বের হওয়া, ঘরে প্রবেশসহ
              প্রতিদিনের প্রয়োজনীয় দোয়া।
            </p>
          </div>

        </div>

      </div>


      <!-- সব দোয়া দেখুন -->
      <div class="mte-dua-view-all">

        <a href="#dua" data-mte-route>
          <span>📖</span>
          সব দোয়া দেখুন
          <span class="arrow">→</span>
        </a>

      </div>

    </section>
  `;
}

/* =========================================================
   AL-QURAN — STANDALONE ROUTED PAGE
   ========================================================= */
function mteAlQuranPage() {
  return `

<div class="mte-quran-page">


<!-- =====================================================
     HERO
===================================================== -->

<header class="quran-hero">

    <img
        src="https://images.unsplash.com/photo-1564769625905-50b8e4d3a6b8?auto=format&fit=crop&w=1800&q=85"
        alt="Islamic Mosque">

    <div class="quran-hero-content">

        <div class="arabic-title">
            الْقُرْآنُ الْكَرِيمُ
        </div>

        <div class="hero-line"></div>

        <h1>
            কুরআন শরীফ
        </h1>

        <p>
            পড়ুন, বুঝুন এবং জীবনে বাস্তবায়ন করুন
        </p>

    </div>

</header>


<!-- =====================================================
     MAIN
===================================================== -->

<main class="quran-container">


    <div class="quran-heading">

        <h2>
            <span class="islamic-symbol">✦</span>
            কুরআন মাজীদ
            <span class="islamic-symbol">✦</span>
        </h2>

        <p>
            অনলাইনে সহজে কুরআন শরীফ পড়ুন
        </p>

    </div>


    <!-- =================================================
         OPTIONS
    ================================================== -->

    <div class="quran-options">


        <div class="quran-option">

            <div class="quran-icon">
                <i class="fa-solid fa-book-quran"></i>
            </div>

            <h3>
                কুরআন পড়ুন
            </h3>

            <p>
                শুরু থেকে কুরআন মাজীদ পড়া শুরু করুন।
            </p>

            <button
                class="quran-main-btn"
                onclick="openReader(1)"
            >

                <i class="fa-solid fa-book-open"></i>
                পড়া শুরু করুন

            </button>

        </div>


        <div class="quran-option">

            <div class="quran-icon">
                <i class="fa-solid fa-layer-group"></i>
            </div>

            <h3>
                পারা নির্বাচন করুন
            </h3>

            <p>
                ৩০টি পারার মধ্য থেকে আপনার প্রয়োজনীয় পারা নির্বাচন করুন।
            </p>

            <button
                class="quran-main-btn"
                onclick="togglePara()"
            >

                <i class="fa-solid fa-list"></i>
                পারা দেখুন

            </button>

        </div>


        <div class="quran-option">

            <div class="quran-icon">
                <i class="fa-solid fa-location-crosshairs"></i>
            </div>

            <h3>
                নির্দিষ্ট স্থানে যান
            </h3>

            <p>
                পারা নির্বাচন করে সরাসরি সেই পারার পৃষ্ঠা বেছে নিন।
            </p>

            <button
                class="quran-main-btn"
                onclick="toggleGoto()"
            >

                <i class="fa-solid fa-arrow-right"></i>
                নির্দিষ্ট স্থানে যান

            </button>

        </div>

    </div>


    <!-- =================================================
         PARA SECTION
    ================================================== -->

    <section
        id="paraSection"
        class="para-section"
    >

        <div class="para-title">

            <h2>
                <i class="fa-solid fa-book-quran"></i>
                পারা নির্বাচন করুন
            </h2>

            <p>
                আপনার পছন্দের পারায় ক্লিক করুন
            </p>

        </div>

        <div
            id="paraGrid"
            class="para-grid"
        ></div>

    </section>


    <!-- =================================================
         GOTO SECTION
    ================================================== -->

    <section
        id="gotoSection"
        class="goto-section"
    >

        <div class="para-title">

            <h2>
                <i class="fa-solid fa-location-dot"></i>
                নির্দিষ্ট স্থানে যান
            </h2>

            <p>
                প্রথমে পারা নির্বাচন করুন, তারপর পৃষ্ঠা নির্বাচন করুন
            </p>

        </div>


        <!-- PARA -->

        <div class="para-select-box">

            <label for="paraSelect">
                📚 পারা নির্বাচন করুন
            </label>

            <select id="paraSelect">

                <option value="">
                    -- পারা নির্বাচন করুন --
                </option>

            </select>

        </div>


        <!-- PAGE TITLE -->

        <div
            id="pageSelectTitle"
            class="page-select-title"
            style="display:none;"
        >

            📖 পারা
            <span id="selectedParaNumber"></span>
            —
            পৃষ্ঠা নির্বাচন করুন

        </div>


        <!-- PAGE BUTTONS -->

        <div
            id="pageButtons"
            class="page-buttons"
        ></div>

    </section>


    <!-- =================================================
         READER
    ================================================== -->

    <section
        id="readerSection"
        class="reader-section"
    >

        <div class="reader-box">


            <div class="reader-header">

                <div class="reader-title">

                    <i class="fa-solid fa-book-quran"></i>

                    নূরানী হাফেজি কুরআন মাজীদ

                </div>


                <div class="reader-actions">

                    <button
                        class="reader-small-btn"
                        onclick="fitPage()"
                    >

                        <i class="fa-solid fa-expand"></i>
                        ফিট

                    </button>


                    <button
                        class="reader-small-btn"
                        onclick="openFullscreen()"
                    >

                        <i class="fa-solid fa-maximize"></i>
                        Fullscreen

                    </button>

                </div>

            </div>


            <!-- =================================================
                 TOP NAVIGATION
            ================================================== -->

            <div class="page-navigation">


                <button
                    id="firstBtn"
                    class="page-nav-btn"
                    onclick="goFirstPage()"
                >

                    <i class="fa-solid fa-angles-left"></i>
                    শুরুর পৃষ্ঠা

                </button>


                <button
                    id="prevBtn"
                    class="page-nav-btn"
                    onclick="goPreviousPage()"
                >

                    <i class="fa-solid fa-angle-left"></i>
                    আগের পৃষ্ঠা

                </button>


                <div
                    id="pageCounter"
                    class="page-counter"
                >
                    পৃষ্ঠা 1 / 611
                </div>


                <button
                    id="nextBtn"
                    class="page-nav-btn"
                    onclick="goNextPage()"
                >

                    পরের পৃষ্ঠা
                    <i class="fa-solid fa-angle-right"></i>

                </button>


                <button
                    id="lastBtn"
                    class="page-nav-btn"
                    onclick="goLastPage()"
                >

                    শেষের পৃষ্ঠা
                    <i class="fa-solid fa-angles-right"></i>

                </button>

            </div>


            <!-- PDF -->

            <div
                id="pdfArea"
                class="pdf-area"
            >

                <canvas
                    id="pdfCanvas"
                ></canvas>


                <div
                    id="pdfLoading"
                    class="pdf-loading"
                >

                    <i class="fa-solid fa-spinner fa-spin"></i>

                    <div>
                        কুরআন মাজীদ লোড হচ্ছে...
                    </div>

                </div>

            </div>

        </div>

    </section>


    <!-- =================================================
         FOOTER
    ================================================== -->

    <footer class="quran-footer">

        <div class="footer-ornament">
            ❖ ────────────── ❖
        </div>

        <p>
            “যে ব্যক্তি আল্লাহর কিতাবের একটি অক্ষর পাঠ করবে,
            তার জন্য একটি নেকি রয়েছে; আর একটি নেকি দশগুণ করা হয়।”
        </p>

        <small>
            — জামে‘ আত-তিরমিজি: ২৯১০
        </small>

    </footer>


</main>

</div>


<script>

/* =========================================================
   PDF CONFIG
========================================================= */

const PDF_URL =
"https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Imdadia-Hafezi-Quran.pdf";


pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";


/* =========================================================
   PARA MAPPING
========================================================= */

const paraMapping = {

    1:  {start:1,   end:22},
    2:  {start:23,  end:42},
    3:  {start:43,  end:62},
    4:  {start:63,  end:82},
    5:  {start:83,  end:102},
    6:  {start:103, end:122},
    7:  {start:123, end:142},
    8:  {start:143, end:162},
    9:  {start:163, end:182},
    10: {start:183, end:202},
    11: {start:203, end:222},
    12: {start:223, end:242},
    13: {start:243, end:262},
    14: {start:263, end:282},
    15: {start:283, end:302},
    16: {start:303, end:322},
    17: {start:323, end:342},
    18: {start:343, end:362},
    19: {start:363, end:382},
    20: {start:383, end:402},
    21: {start:403, end:422},
    22: {start:423, end:442},
    23: {start:443, end:462},
    24: {start:463, end:482},
    25: {start:483, end:502},
    26: {start:503, end:522},
    27: {start:523, end:542},
    28: {start:543, end:562},
    29: {start:563, end:586},
    30: {start:587, end:611}

};


/* =========================================================
   VARIABLES
========================================================= */

let pdfDoc = null;

let currentPage = 1;

let totalPages = 611;

let currentScale = 1;

let rendering = false;

let pendingPage = null;


/* =========================================================
   DOM
========================================================= */

const canvas =
document.getElementById("pdfCanvas");

const ctx =
canvas.getContext("2d");

const pdfArea =
document.getElementById("pdfArea");

const pdfLoading =
document.getElementById("pdfLoading");

const readerSection =
document.getElementById("readerSection");

const pageCounter =
document.getElementById("pageCounter");

const paraGrid =
document.getElementById("paraGrid");

const paraSelect =
document.getElementById("paraSelect");

const pageButtons =
document.getElementById("pageButtons");

const pageSelectTitle =
document.getElementById("pageSelectTitle");

const selectedParaNumber =
document.getElementById("selectedParaNumber");


/* =========================================================
   CREATE PARA LIST
========================================================= */

for(let i=1;i<=30;i++){

    const mapping =
        paraMapping[i];

    const pageCount =
        mapping.end - mapping.start + 1;


    /* PARA CARD */

    const button =
        document.createElement("button");

    button.className =
        "para-btn";

    button.innerHTML = \`
        <strong>পারা \${i}</strong>
        <span>\${pageCount} পৃষ্ঠা</span>
    \`;


    button.onclick =
        function(){

            openReader(mapping.start);

        };


    paraGrid.appendChild(button);


    /* PARA SELECT */

    const option =
        document.createElement("option");

    option.value =
        i;

    option.textContent =
        \`পারা \${i} — \${pageCount} পৃষ্ঠা\`;

    paraSelect.appendChild(option);

}


/* =========================================================
   PARA SELECT CHANGE
========================================================= */

paraSelect.addEventListener(
    "change",
    function(){

        const para =
            parseInt(this.value);


        pageButtons.innerHTML = "";


        pageSelectTitle.style.display =
            "none";


        if(!para){
            return;
        }


        const mapping =
            paraMapping[para];


        const pageCount =
            mapping.end -
            mapping.start +
            1;


        selectedParaNumber.textContent =
            para;


        pageSelectTitle.style.display =
            "block";


        /*
           নির্বাচিত পারার সব পৃষ্ঠা
           বাটন হিসেবে তৈরি হবে।
        */

        for(
            let page=1;
            page<=pageCount;
            page++
        ){

            const pageButton =
                document.createElement("button");


            pageButton.className =
                "page-choice";


            pageButton.innerHTML = \`
                <i class="fa-regular fa-file-lines"></i>
                পৃষ্ঠা \${page}
            \`;


            pageButton.onclick =
                function(){

                    const pdfPage =
                        mapping.start +
                        page -
                        1;


                    openReader(pdfPage);

                };


            pageButtons.appendChild(
                pageButton
            );

        }

    }
);


/* =========================================================
   LOAD PDF
========================================================= */

async function loadPDF(){

    try{

        pdfLoading.style.display =
            "block";


        pdfDoc =
            await pdfjsLib
                .getDocument({
                    url:PDF_URL,
                    withCredentials:false
                })
                .promise;


        totalPages =
            pdfDoc.numPages;


        pageCounter.textContent =
            \`পৃষ্ঠা \${currentPage} / \${totalPages}\`;


        pdfLoading.style.display =
            "none";


        /*
           PDF সফলভাবে লোড হওয়ার পর
           প্রথম পৃষ্ঠা render।
        */

        renderPage(currentPage);

    }

    catch(error){

        console.error(
            "PDF Load Error:",
            error
        );


        pdfLoading.innerHTML = \`
            <i class="fa-solid fa-triangle-exclamation"></i>

            <div style="margin-top:8px;">
                কুরআন মাজীদ লোড করা যাচ্ছে না।
            </div>

            <small style="display:block;margin-top:5px;opacity:.7;">
                অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।
            </small>
        \`;

        pdfLoading.style.display =
            "block";

    }

}


/* =========================================================
   OPEN READER
========================================================= */

function openReader(page=1){

    readerSection.classList.add("active");


    currentPage =
        Math.max(
            1,
            Math.min(
                page,
                totalPages
            )
        );


    renderPage(currentPage);


    setTimeout(function(){

        readerSection.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    },100);

}


/* =========================================================
   RENDER PAGE
   NO WHITE FLASH
========================================================= */

async function renderPage(pageNumber){

    if(!pdfDoc){
        return;
    }


    /*
       একই সময়ে দুইটি render না চালানো।
    */

    if(rendering){

        pendingPage =
            pageNumber;

        return;

    }


    rendering = true;


    try{

        const page =
            await pdfDoc.getPage(
                pageNumber
            );


        let viewport =
            page.getViewport({
                scale:1
            });


        const availableWidth =
            pdfArea.clientWidth - 40;


        const widthScale =
            availableWidth /
            viewport.width;


        currentScale =
            Math.min(
                widthScale,
                1.8
            );


        viewport =
            page.getViewport({
                scale:currentScale
            });


        /*
           Temporary canvas।
           PDF আগে এখানে পুরো render হবে।
        */

        const tempCanvas =
            document.createElement(
                "canvas"
            );


        const tempContext =
            tempCanvas.getContext(
                "2d"
            );


        tempCanvas.width =
            Math.floor(
                viewport.width
            );


        tempCanvas.height =
            Math.floor(
                viewport.height
            );


        await page.render({

            canvasContext:
                tempContext,

            viewport:
                viewport

        }).promise;


        /*
           নতুন পৃষ্ঠা সম্পূর্ণ তৈরি হওয়ার পর
           মূল canvas-এ বসানো হচ্ছে।
        */

        canvas.width =
            tempCanvas.width;

        canvas.height =
            tempCanvas.height;


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.drawImage(
            tempCanvas,
            0,
            0
        );


        currentPage =
            pageNumber;


        pageCounter.textContent =
            \`পৃষ্ঠা \${currentPage} / \${totalPages}\`;


        updateNavigation();


        rendering = false;


        /*
           মাঝখানে অন্য পৃষ্ঠায় ক্লিক হলে
           সর্বশেষ চাওয়া পৃষ্ঠাটি খুলবে।
        */

        if(pendingPage !== null){

            const nextPage =
                pendingPage;

            pendingPage =
                null;

            renderPage(nextPage);

        }

    }

    catch(error){

        console.error(
            "Page Render Error:",
            error
        );

        rendering = false;

    }

}


/* =========================================================
   FIT PAGE
========================================================= */

async function fitPage(){

    if(!pdfDoc){
        return;
    }


    const page =
        await pdfDoc.getPage(
            currentPage
        );


    const viewport =
        page.getViewport({
            scale:1
        });


    const availableWidth =
        pdfArea.clientWidth - 40;


    const availableHeight =
        window.innerHeight - 250;


    const widthScale =
        availableWidth /
        viewport.width;


    const heightScale =
        availableHeight /
        viewport.height;


    currentScale =
        Math.min(
            widthScale,
            heightScale
        );


    const fittedViewport =
        page.getViewport({
            scale:currentScale
        });


    const tempCanvas =
        document.createElement(
            "canvas"
        );


    const tempContext =
        tempCanvas.getContext(
            "2d"
        );


    tempCanvas.width =
        Math.floor(
            fittedViewport.width
        );


    tempCanvas.height =
        Math.floor(
            fittedViewport.height
        );


    await page.render({

        canvasContext:
            tempContext,

        viewport:
            fittedViewport

    }).promise;


    canvas.width =
        tempCanvas.width;

    canvas.height =
        tempCanvas.height;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.drawImage(
        tempCanvas,
        0,
        0
    );

}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function goFirstPage(){

    if(currentPage > 1){

        renderPage(1);

    }

}


function goPreviousPage(){

    if(currentPage > 1){

        renderPage(
            currentPage - 1
        );

    }

}


function goNextPage(){

    if(currentPage < totalPages){

        renderPage(
            currentPage + 1
        );

    }

}


function goLastPage(){

    if(currentPage < totalPages){

        renderPage(
            totalPages
        );

    }

}


/* =========================================================
   NAVIGATION STATE
========================================================= */

function updateNavigation(){

    document.getElementById(
        "firstBtn"
    ).disabled =
        currentPage <= 1;


    document.getElementById(
        "prevBtn"
    ).disabled =
        currentPage <= 1;


    document.getElementById(
        "nextBtn"
    ).disabled =
        currentPage >= totalPages;


    document.getElementById(
        "lastBtn"
    ).disabled =
        currentPage >= totalPages;

}


/* =========================================================
   PARA SECTION
========================================================= */

function togglePara(){

    const section =
        document.getElementById(
            "paraSection"
        );


    section.classList.toggle(
        "active"
    );


    document.getElementById(
        "gotoSection"
    ).classList.remove(
        "active"
    );


    if(section.classList.contains("active")){

        setTimeout(function(){

            section.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        },100);

    }

}


/* =========================================================
   GOTO SECTION
========================================================= */

function toggleGoto(){

    const section =
        document.getElementById(
            "gotoSection"
        );


    section.classList.toggle(
        "active"
    );


    document.getElementById(
        "paraSection"
    ).classList.remove(
        "active"
    );


    if(section.classList.contains("active")){

        setTimeout(function(){

            section.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        },100);

    }

}


/* =========================================================
   FULLSCREEN
========================================================= */

function openFullscreen(){

    const reader =
        document.querySelector(
            ".reader-box"
        );


    if(!document.fullscreenElement){

        if(reader.requestFullscreen){

            reader.requestFullscreen();

        }

    }
    else{

        if(document.exitFullscreen){

            document.exitFullscreen();

        }

    }

}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    function(event){

        if(
            !readerSection.classList.contains(
                "active"
            )
        ){

            return;

        }


        if(event.key === "ArrowLeft"){

            goPreviousPage();

        }


        if(event.key === "ArrowRight"){

            goNextPage();

        }


        if(event.key === "Home"){

            goFirstPage();

        }


        if(event.key === "End"){

            goLastPage();

        }

    }
);


/* =========================================================
   RESIZE
========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    function(){

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                function(){

                    if(
                        readerSection.classList.contains(
                            "active"
                        ) &&
                        pdfDoc
                    ){

                        fitPage();

                    }

                },
                400
            );

    }
);


/* =========================================================
   START
========================================================= */

loadPDF();

</script>

`;
}

function mteInitAlQuran(){
  if (typeof window.mteAlQuranCleanup === "function") window.mteAlQuranCleanup();
  const quranRoot = document.querySelector("#mteMain .mte-quran-page");
  if (!quranRoot) return;
/* =========================================================
   PDF CONFIG
========================================================= */

const PDF_URL =
"https://ishbkgxmkywxmesxeqfk.supabase.co/storage/v1/object/public/Amar-boi.pdf/Imdadia-Hafezi-Quran.pdf";


pdfjsLib.GlobalWorkerOptions.workerSrc =
"https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";


/* =========================================================
   PARA MAPPING
========================================================= */

const paraMapping = {

    1:  {start:1,   end:22},
    2:  {start:23,  end:42},
    3:  {start:43,  end:62},
    4:  {start:63,  end:82},
    5:  {start:83,  end:102},
    6:  {start:103, end:122},
    7:  {start:123, end:142},
    8:  {start:143, end:162},
    9:  {start:163, end:182},
    10: {start:183, end:202},
    11: {start:203, end:222},
    12: {start:223, end:242},
    13: {start:243, end:262},
    14: {start:263, end:282},
    15: {start:283, end:302},
    16: {start:303, end:322},
    17: {start:323, end:342},
    18: {start:343, end:362},
    19: {start:363, end:382},
    20: {start:383, end:402},
    21: {start:403, end:422},
    22: {start:423, end:442},
    23: {start:443, end:462},
    24: {start:463, end:482},
    25: {start:483, end:502},
    26: {start:503, end:522},
    27: {start:523, end:542},
    28: {start:543, end:562},
    29: {start:563, end:586},
    30: {start:587, end:611}

};


/* =========================================================
   VARIABLES
========================================================= */

let pdfDoc = null;

let currentPage = 1;

let totalPages = 611;

let currentScale = 1;

let rendering = false;

let pendingPage = null;


/* =========================================================
   DOM
========================================================= */

const canvas =
document.getElementById("pdfCanvas");

const ctx =
canvas.getContext("2d");

const pdfArea =
document.getElementById("pdfArea");

const pdfLoading =
document.getElementById("pdfLoading");

const readerSection =
document.getElementById("readerSection");

const pageCounter =
document.getElementById("pageCounter");

const paraGrid =
document.getElementById("paraGrid");

const paraSelect =
document.getElementById("paraSelect");

const pageButtons =
document.getElementById("pageButtons");

const pageSelectTitle =
document.getElementById("pageSelectTitle");

const selectedParaNumber =
document.getElementById("selectedParaNumber");


/* =========================================================
   CREATE PARA LIST
========================================================= */

for(let i=1;i<=30;i++){

    const mapping =
        paraMapping[i];

    const pageCount =
        mapping.end - mapping.start + 1;


    /* PARA CARD */

    const button =
        document.createElement("button");

    button.className =
        "para-btn";

    button.innerHTML = `
        <strong>পারা ${i}</strong>
        <span>${pageCount} পৃষ্ঠা</span>
    `;


    button.onclick =
        function(){

            openReader(mapping.start);

        };


    paraGrid.appendChild(button);


    /* PARA SELECT */

    const option =
        document.createElement("option");

    option.value =
        i;

    option.textContent =
        `পারা ${i} — ${pageCount} পৃষ্ঠা`;

    paraSelect.appendChild(option);

}


/* =========================================================
   PARA SELECT CHANGE
========================================================= */

paraSelect.addEventListener(
    "change",
    function(){

        const para =
            parseInt(this.value);


        pageButtons.innerHTML = "";


        pageSelectTitle.style.display =
            "none";


        if(!para){
            return;
        }


        const mapping =
            paraMapping[para];


        const pageCount =
            mapping.end -
            mapping.start +
            1;


        selectedParaNumber.textContent =
            para;


        pageSelectTitle.style.display =
            "block";


        /*
           নির্বাচিত পারার সব পৃষ্ঠা
           বাটন হিসেবে তৈরি হবে।
        */

        for(
            let page=1;
            page<=pageCount;
            page++
        ){

            const pageButton =
                document.createElement("button");


            pageButton.className =
                "page-choice";


            pageButton.innerHTML = `
                <i class="fa-regular fa-file-lines"></i>
                পৃষ্ঠা ${page}
            `;


            pageButton.onclick =
                function(){

                    const pdfPage =
                        mapping.start +
                        page -
                        1;


                    openReader(pdfPage);

                };


            pageButtons.appendChild(
                pageButton
            );

        }

    }
);


/* =========================================================
   LOAD PDF
========================================================= */

async function loadPDF(){

    try{

        pdfLoading.style.display =
            "block";


        pdfDoc =
            await pdfjsLib
                .getDocument({
                    url:PDF_URL,
                    withCredentials:false
                })
                .promise;


        totalPages =
            pdfDoc.numPages;


        pageCounter.textContent =
            `পৃষ্ঠা ${currentPage} / ${totalPages}`;


        pdfLoading.style.display =
            "none";


        /*
           PDF সফলভাবে লোড হওয়ার পর
           প্রথম পৃষ্ঠা render।
        */

        renderPage(currentPage);

    }

    catch(error){

        console.error(
            "PDF Load Error:",
            error
        );


        pdfLoading.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation"></i>

            <div style="margin-top:8px;">
                কুরআন মাজীদ লোড করা যাচ্ছে না।
            </div>

            <small style="display:block;margin-top:5px;opacity:.7;">
                অনুগ্রহ করে কিছুক্ষণ পর আবার চেষ্টা করুন।
            </small>
        `;

        pdfLoading.style.display =
            "block";

    }

}


/* =========================================================
   OPEN READER
========================================================= */

function openReader(page=1){

    readerSection.classList.add("active");


    currentPage =
        Math.max(
            1,
            Math.min(
                page,
                totalPages
            )
        );


    renderPage(currentPage);


    setTimeout(function(){

        readerSection.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    },100);

}


/* =========================================================
   RENDER PAGE
   NO WHITE FLASH
========================================================= */

async function renderPage(pageNumber){

    if(!pdfDoc){
        return;
    }


    /*
       একই সময়ে দুইটি render না চালানো।
    */

    if(rendering){

        pendingPage =
            pageNumber;

        return;

    }


    rendering = true;


    try{

        const page =
            await pdfDoc.getPage(
                pageNumber
            );


        let viewport =
            page.getViewport({
                scale:1
            });


        const availableWidth =
            pdfArea.clientWidth - 40;


        const widthScale =
            availableWidth /
            viewport.width;


        currentScale =
            Math.min(
                widthScale,
                1.8
            );


        viewport =
            page.getViewport({
                scale:currentScale
            });


        /*
           Temporary canvas।
           PDF আগে এখানে পুরো render হবে।
        */

        const tempCanvas =
            document.createElement(
                "canvas"
            );


        const tempContext =
            tempCanvas.getContext(
                "2d"
            );


        tempCanvas.width =
            Math.floor(
                viewport.width
            );


        tempCanvas.height =
            Math.floor(
                viewport.height
            );


        await page.render({

            canvasContext:
                tempContext,

            viewport:
                viewport

        }).promise;


        /*
           নতুন পৃষ্ঠা সম্পূর্ণ তৈরি হওয়ার পর
           মূল canvas-এ বসানো হচ্ছে।
        */

        canvas.width =
            tempCanvas.width;

        canvas.height =
            tempCanvas.height;


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        ctx.drawImage(
            tempCanvas,
            0,
            0
        );


        currentPage =
            pageNumber;


        pageCounter.textContent =
            `পৃষ্ঠা ${currentPage} / ${totalPages}`;


        updateNavigation();


        rendering = false;


        /*
           মাঝখানে অন্য পৃষ্ঠায় ক্লিক হলে
           সর্বশেষ চাওয়া পৃষ্ঠাটি খুলবে।
        */

        if(pendingPage !== null){

            const nextPage =
                pendingPage;

            pendingPage =
                null;

            renderPage(nextPage);

        }

    }

    catch(error){

        console.error(
            "Page Render Error:",
            error
        );

        rendering = false;

    }

}


/* =========================================================
   FIT PAGE
========================================================= */

async function fitPage(){

    if(!pdfDoc){
        return;
    }


    const page =
        await pdfDoc.getPage(
            currentPage
        );


    const viewport =
        page.getViewport({
            scale:1
        });


    const availableWidth =
        pdfArea.clientWidth - 40;


    const availableHeight =
        window.innerHeight - 250;


    const widthScale =
        availableWidth /
        viewport.width;


    const heightScale =
        availableHeight /
        viewport.height;


    currentScale =
        Math.min(
            widthScale,
            heightScale
        );


    const fittedViewport =
        page.getViewport({
            scale:currentScale
        });


    const tempCanvas =
        document.createElement(
            "canvas"
        );


    const tempContext =
        tempCanvas.getContext(
            "2d"
        );


    tempCanvas.width =
        Math.floor(
            fittedViewport.width
        );


    tempCanvas.height =
        Math.floor(
            fittedViewport.height
        );


    await page.render({

        canvasContext:
            tempContext,

        viewport:
            fittedViewport

    }).promise;


    canvas.width =
        tempCanvas.width;

    canvas.height =
        tempCanvas.height;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.drawImage(
        tempCanvas,
        0,
        0
    );

}


/* =========================================================
   PAGE NAVIGATION
========================================================= */

function goFirstPage(){

    if(currentPage > 1){

        renderPage(1);

    }

}


function goPreviousPage(){

    if(currentPage > 1){

        renderPage(
            currentPage - 1
        );

    }

}


function goNextPage(){

    if(currentPage < totalPages){

        renderPage(
            currentPage + 1
        );

    }

}


function goLastPage(){

    if(currentPage < totalPages){

        renderPage(
            totalPages
        );

    }

}


/* =========================================================
   NAVIGATION STATE
========================================================= */

function updateNavigation(){

    document.getElementById(
        "firstBtn"
    ).disabled =
        currentPage <= 1;


    document.getElementById(
        "prevBtn"
    ).disabled =
        currentPage <= 1;


    document.getElementById(
        "nextBtn"
    ).disabled =
        currentPage >= totalPages;


    document.getElementById(
        "lastBtn"
    ).disabled =
        currentPage >= totalPages;

}


/* =========================================================
   PARA SECTION
========================================================= */

function togglePara(){

    const section =
        document.getElementById(
            "paraSection"
        );


    section.classList.toggle(
        "active"
    );


    document.getElementById(
        "gotoSection"
    ).classList.remove(
        "active"
    );


    if(section.classList.contains("active")){

        setTimeout(function(){

            section.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        },100);

    }

}


/* =========================================================
   GOTO SECTION
========================================================= */

function toggleGoto(){

    const section =
        document.getElementById(
            "gotoSection"
        );


    section.classList.toggle(
        "active"
    );


    document.getElementById(
        "paraSection"
    ).classList.remove(
        "active"
    );


    if(section.classList.contains("active")){

        setTimeout(function(){

            section.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        },100);

    }

}


/* =========================================================
   FULLSCREEN
========================================================= */

function openFullscreen(){

    const reader =
        document.querySelector(
            ".reader-box"
        );


    if(!document.fullscreenElement){

        if(reader.requestFullscreen){

            reader.requestFullscreen();

        }

    }
    else{

        if(document.exitFullscreen){

            document.exitFullscreen();

        }

    }

}


/* =========================================================
   KEYBOARD
========================================================= */

function mteAlQuranKeydownHandler(event){

        if(
            !readerSection.classList.contains(
                "active"
            )
        ){

            return;

        }


        if(event.key === "ArrowLeft"){

            goPreviousPage();

        }


        if(event.key === "ArrowRight"){

            goNextPage();

        }


        if(event.key === "Home"){

            goFirstPage();

        }


        if(event.key === "End"){

            goLastPage();

        }

    }


/* =========================================================
   RESIZE
========================================================= */

let resizeTimer;


function mteAlQuranResizeHandler(){

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                function(){

                    if(
                        readerSection.classList.contains(
                            "active"
                        ) &&
                        pdfDoc
                    ){

                        fitPage();

                    }

                },
                400
            );

    }


/* =========================================================
   START
========================================================= */

  document.addEventListener("keydown", mteAlQuranKeydownHandler);
  window.addEventListener("resize", mteAlQuranResizeHandler);

  window.openReader = openReader;
  window.fitPage = fitPage;
  window.goFirstPage = goFirstPage;
  window.goPreviousPage = goPreviousPage;
  window.goNextPage = goNextPage;
  window.goLastPage = goLastPage;
  window.togglePara = togglePara;
  window.toggleGoto = toggleGoto;
  window.openFullscreen = openFullscreen;

  window.mteAlQuranCleanup = function(){
    document.removeEventListener("keydown", mteAlQuranKeydownHandler);
    window.removeEventListener("resize", mteAlQuranResizeHandler);
  };

  loadPDF();
}

/* =========================================================
   05B. GENERIC PAGE CONTENT
   ========================================================= */

function mteGenericContent(route) {

  const contentMap = {

about: `

<section class="taqwa-about-page">

  <!-- ABOUT HERO -->
  <section class="taqwa-about-hero">

    <div class="taqwa-about-hero-inner">

      <div class="taqwa-about-badge">
        🌿 শিক্ষক পরিচিতি
      </div>

      <h1>
        ${MTE_CONFIG.teacherName}
      </h1>

      <p>
        ${MTE_CONFIG.subtitle}
      </p>

    </div>

  </section>


  <!-- PROFILE -->
  <section class="taqwa-about-profile-section">

    <div class="taqwa-about-container">

      <div class="taqwa-about-profile">

        <div class="taqwa-about-image-box">

          <img
            class="taqwa-about-profile-img"
            src="${MTE_CONFIG.profileImage}"
            alt="${MTE_CONFIG.teacherName}">

        </div>


        <div class="taqwa-about-profile-content">

          <div class="taqwa-about-kicker">
            আমার সম্পর্কে
          </div>

          <h2>
            ${MTE_CONFIG.teacherName}
          </h2>

          <p class="taqwa-about-lead">
            ${MTE_CONFIG.subtitle}
          </p>

          <p>
            শিক্ষা মানুষের জীবনের একটি গুরুত্বপূর্ণ আমানত।
            জ্ঞান অর্জনের পাশাপাশি নৈতিকতা, আদর্শ ও সুন্দর
            চরিত্র গঠনের মাধ্যমে শিক্ষার্থীদের ভবিষ্যৎকে
            সুন্দর ও কল্যাণময় করার লক্ষ্যেই আমার শিক্ষা কার্যক্রম।
          </p>

          <p>
            কুরআন ও ইসলামিক শিক্ষার পাশাপাশি শিক্ষার্থীদের
            নিয়মিত পড়াশোনা, শৃঙ্খলা, দায়িত্ববোধ এবং
            আত্মউন্নয়নের বিষয়ে উৎসাহিত করা আমার
            শিক্ষকতা কার্যক্রমের অন্যতম উদ্দেশ্য।
          </p>

        </div>

      </div>

    </div>

  </section>


  <!-- EDUCATION & EXPERIENCE -->
  <section class="taqwa-about-section taqwa-about-soft">

    <div class="taqwa-about-container">

      <div class="taqwa-about-heading">

        <span>
          পরিচিতি
        </span>

        <h2>
          শিক্ষা ও অভিজ্ঞতা
        </h2>

        <p>
          শিক্ষা, শিক্ষকতা ও ইসলামিক জ্ঞানচর্চার সঙ্গে
          সংশ্লিষ্ট গুরুত্বপূর্ণ বিষয়সমূহ।
        </p>

      </div>


      <div class="taqwa-about-grid">

        <article class="taqwa-about-card">

          <div class="taqwa-about-card-icon">
            📖
          </div>

          <h3>
            ইসলামিক শিক্ষা
          </h3>

          <p>
            কুরআন, তাজবীদ, হিফজ ও প্রয়োজনীয়
            ইসলামিক বিষয় শেখানোর প্রতি গুরুত্ব দেওয়া হয়।
          </p>

        </article>


        <article class="taqwa-about-card">

          <div class="taqwa-about-card-icon">
            🎓
          </div>

          <h3>
            শিক্ষাদান
          </h3>

          <p>
            শিক্ষার্থীদের বয়স, যোগ্যতা ও প্রয়োজন অনুযায়ী
            সহজভাবে পাঠ উপস্থাপনের চেষ্টা করা হয়।
          </p>

        </article>


        <article class="taqwa-about-card">

          <div class="taqwa-about-card-icon">
            🌱
          </div>

          <h3>
            শিক্ষার্থী উন্নয়ন
          </h3>

          <p>
            জ্ঞান অর্জনের পাশাপাশি শৃঙ্খলা, নৈতিকতা ও
            দায়িত্বশীলতা গড়ে তোলার বিষয়ে গুরুত্ব দেওয়া হয়।
          </p>

        </article>

      </div>

    </div>

  </section>


  <!-- TEACHING PHILOSOPHY -->
  <section class="taqwa-about-section">

    <div class="taqwa-about-container">

      <div class="taqwa-about-heading">

        <span>
          শিক্ষকতা দর্শন
        </span>

        <h2>
          জ্ঞান • নৈতিকতা • আদর্শ
        </h2>

      </div>


      <div class="taqwa-about-philosophy">

        <div class="taqwa-about-philosophy-icon">
          🌿
        </div>

        <p>
          একজন শিক্ষার্থীর প্রকৃত উন্নয়ন শুধু পরীক্ষার ফলাফলের
          মধ্যে সীমাবদ্ধ নয়। জ্ঞান, নৈতিকতা, সুন্দর আচরণ,
          দায়িত্ববোধ ও মানবিক মূল্যবোধের সমন্বিত বিকাশই
          একজন শিক্ষার্থীর সুন্দর ভবিষ্যৎ গঠনে সহায়ক।
        </p>

      </div>

    </div>

  </section>


  <!-- ACTIVITIES -->
  <section class="taqwa-about-section taqwa-about-soft">

    <div class="taqwa-about-container">

      <div class="taqwa-about-heading">

        <span>
          কার্যক্রম
        </span>

        <h2>
          যেসব বিষয়ে সহায়তা
        </h2>

      </div>


      <div class="taqwa-about-list">

        <div class="taqwa-about-list-item">
          <span>✓</span>
          <p>কুরআন শিক্ষা ও শুদ্ধ তিলাওয়াত</p>
        </div>

        <div class="taqwa-about-list-item">
          <span>✓</span>
          <p>তাজবীদ ও মাখরাজ শিক্ষা</p>
        </div>

        <div class="taqwa-about-list-item">
          <span>✓</span>
          <p>হিফজুল কুরআন সহায়তা</p>
        </div>

        <div class="taqwa-about-list-item">
          <span>✓</span>
          <p>শিক্ষার্থীদের পড়াশোনার গাইডলাইন</p>
        </div>

        <div class="taqwa-about-list-item">
          <span>✓</span>
          <p>শিক্ষামূলক পরামর্শ ও নিয়মিত অনুশীলন</p>
        </div>

        <div class="taqwa-about-list-item">
          <span>✓</span>
          <p>নৈতিক ও আদর্শিক শিক্ষায় উৎসাহ প্রদান</p>
        </div>

      </div>

    </div>

  </section>


  <!-- MESSAGE -->
  <section class="taqwa-about-message">

    <div class="taqwa-about-container">

      <div class="taqwa-about-message-inner">

        <div class="taqwa-about-message-arabic">
          رَبِّ زِدْنِي عِلْمًا
        </div>

        <h2>
          জ্ঞানের পথে এগিয়ে চলুন
        </h2>

        <p>
          নিয়মিত পড়াশোনা, অনুশীলন ও সঠিক দিকনির্দেশনার
          মাধ্যমে একজন শিক্ষার্থী নিজের সম্ভাবনাকে
          আরও সুন্দরভাবে বিকশিত করতে পারে।
        </p>

      </div>

    </div>

  </section>


  <!-- BACK -->
  <div class="taqwa-about-back">

    <button
      type="button"
      class="mte-btn mte-btn-light mte-back"
      data-mte-route="home"
    >
      ← হোমে ফিরে যান
    </button>

  </div>

</section>

`,
notes: `

<section class="taqwa-notes-page">

  <!-- HERO -->
  <section class="taqwa-notes-hero">

    <div class="taqwa-notes-hero-inner">

      <div class="taqwa-notes-badge">
        📝 পড়াশোনার রিসোর্স
      </div>

      <h1>
        ক্লাস নোট
      </h1>

      <p>
        নিয়মিত পড়াশোনা ও পুনরাবৃত্তির জন্য প্রয়োজনীয়
        নোট ও শিক্ষামূলক রিসোর্স।
      </p>

    </div>

  </section>


  <!-- INTRO -->
  <section class="taqwa-notes-intro">

    <div class="taqwa-notes-container">

      <div class="taqwa-notes-intro-box">

        <div class="taqwa-notes-arabic">
          رَبِّ زِدْنِي عِلْمًا
        </div>

        <h2>
          জ্ঞান অর্জনের পথে নিয়মিত থাকুন
        </h2>

        <p>
          গুরুত্বপূর্ণ বিষয়গুলো সহজে পুনরায় পড়া,
          মনে রাখা এবং পরীক্ষার প্রস্তুতির জন্য
          এই বিভাগে প্রয়োজনীয় ক্লাস নোট সংরক্ষণ করা হবে।
        </p>

      </div>

    </div>

  </section>


  <!-- NOTES -->
  <section class="taqwa-notes-section">

    <div class="taqwa-notes-container">

      <div class="taqwa-notes-heading">

        <span>
          শিক্ষামূলক রিসোর্স
        </span>

        <h2>
          প্রয়োজনীয় ক্লাস নোট
        </h2>

        <p>
          বিষয়ভিত্তিক নোট পড়ুন এবং নিয়মিত অনুশীলন করুন।
        </p>

      </div>


      <div class="taqwa-notes-grid">


        <!-- NOTE 01 -->
        <article class="taqwa-notes-card">

          <div class="taqwa-notes-card-top">

            <div class="taqwa-notes-icon">
              📖
            </div>

            <span class="taqwa-notes-number">
              ০১
            </span>

          </div>

          <h3>
            ক্লাস নোট — ০১
          </h3>

          <p>
            গুরুত্বপূর্ণ পাঠ ও ক্লাসে আলোচিত বিষয়গুলোর
            সংক্ষিপ্ত নোট।
          </p>

          <button
            type="button"
            class="mte-btn mte-btn-primary taqwa-notes-pdf-btn"
            onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'ক্লাস নোট — ০১')">
            📄 PDF পড়ুন
          </button>

        </article>


        <!-- NOTE 02 -->
        <article class="taqwa-notes-card">

          <div class="taqwa-notes-card-top">

            <div class="taqwa-notes-icon">
              🕌
            </div>

            <span class="taqwa-notes-number">
              ০২
            </span>

          </div>

          <h3>
            তাজবীদ নোট
          </h3>

          <p>
            মাখরাজ, সিফাত, মাদ, গুন্নাহসহ
            তাজবীদের প্রয়োজনীয় বিষয়সমূহ।
          </p>

          <button
            type="button"
            class="mte-btn mte-btn-primary taqwa-notes-pdf-btn"
            onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'তাজবীদ নোট')">
            📄 PDF পড়ুন
          </button>

        </article>


        <!-- NOTE 03 -->
        <article class="taqwa-notes-card">

          <div class="taqwa-notes-card-top">

            <div class="taqwa-notes-icon">
              🌿
            </div>

            <span class="taqwa-notes-number">
              ০৩
            </span>

          </div>

          <h3>
            হিফজ নোট
          </h3>

          <p>
            দৈনিক সবক, আমুখতা, দাওর ও
            পুনরাবৃত্তির প্রয়োজনীয় নির্দেশনা।
          </p>

          <button
            type="button"
            class="mte-btn mte-btn-primary taqwa-notes-pdf-btn"
            onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'হিফজ নোট')">
            📄 PDF পড়ুন
          </button>

        </article>


        <!-- NOTE 04 -->
        <article class="taqwa-notes-card">

          <div class="taqwa-notes-card-top">

            <div class="taqwa-notes-icon">
              📚
            </div>

            <span class="taqwa-notes-number">
              ০৪
            </span>

          </div>

          <h3>
            ইসলামিক স্টাডিজ
          </h3>

          <p>
            আকীদাহ, ফিকহ, আখলাক ও প্রয়োজনীয়
            ইসলামিক জ্ঞান বিষয়ক নোট।
          </p>

          <button
            type="button"
            class="mte-btn mte-btn-primary taqwa-notes-pdf-btn"
            onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'ইসলামিক স্টাডিজ')">
            📄 PDF পড়ুন
          </button>

        </article>


        <!-- NOTE 05 -->
        <article class="taqwa-notes-card">

          <div class="taqwa-notes-card-top">

            <div class="taqwa-notes-icon">
              ✍️
            </div>

            <span class="taqwa-notes-number">
              ০৫
            </span>

          </div>

          <h3>
            পরীক্ষার প্রস্তুতি
          </h3>

          <p>
            পরীক্ষার গুরুত্বপূর্ণ প্রশ্ন,
            সংক্ষিপ্ত নোট ও পুনরাবৃত্তির উপকরণ।
          </p>

          <button
            type="button"
            class="mte-btn mte-btn-primary taqwa-notes-pdf-btn"
            onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'পরীক্ষার প্রস্তুতি')">
            📄 PDF পড়ুন
          </button>

        </article>


        <!-- NOTE 06 -->
        <article class="taqwa-notes-card">

          <div class="taqwa-notes-card-top">

            <div class="taqwa-notes-icon">
              💡
            </div>

            <span class="taqwa-notes-number">
              ০৬
            </span>

          </div>

          <h3>
            গুরুত্বপূর্ণ প্রশ্নোত্তর
          </h3>

          <p>
            পড়াশোনার সময় প্রয়োজনীয় গুরুত্বপূর্ণ
            প্রশ্ন ও উত্তর সংরক্ষণ করা হবে।
          </p>

          <button
            type="button"
            class="mte-btn mte-btn-primary taqwa-notes-pdf-btn"
            onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'গুরুত্বপূর্ণ প্রশ্নোত্তর')">
            📄 PDF পড়ুন
          </button>

        </article>

      </div>

    </div>

  </section>


  <!-- STUDY TIPS -->
  <section class="taqwa-notes-tips">

    <div class="taqwa-notes-container">

      <div class="taqwa-notes-heading">

        <span>
          পড়াশোনার কৌশল
        </span>

        <h2>
          নোট ব্যবহারের সহজ পদ্ধতি
        </h2>

      </div>


      <div class="taqwa-notes-tips-grid">

        <div class="taqwa-notes-tip">
          <strong>০১</strong>
          <h3>মনোযোগ দিয়ে পড়ুন</h3>
          <p>
            প্রথমে পুরো নোটটি মনোযোগ দিয়ে পড়ুন।
          </p>
        </div>

        <div class="taqwa-notes-tip">
          <strong>০২</strong>
          <h3>গুরুত্বপূর্ণ বিষয় লিখুন</h3>
          <p>
            প্রয়োজনীয় তথ্য নিজের খাতায় লিখে রাখুন।
          </p>
        </div>

        <div class="taqwa-notes-tip">
          <strong>০৩</strong>
          <h3>নিয়মিত পুনরাবৃত্তি</h3>
          <p>
            নির্দিষ্ট সময় পরপর আগের পড়া বিষয় ঝালাই করুন।
          </p>
        </div>

      </div>

    </div>

  </section>


  <!-- MOTIVATION -->
  <section class="taqwa-notes-motivation">

    <div class="taqwa-notes-motivation-arabic">
      وَقُلْ رَبِّ زِدْنِي عِلْمًا
    </div>

    <h2>
      জ্ঞান অর্জন করুন, নিয়মিত অনুশীলন করুন
    </h2>

    <p>
      আজকের অল্প পড়াই আগামী দিনের বড় প্রস্তুতির ভিত্তি।
    </p>

  </section>


  <!-- BACK -->
  <div class="taqwa-notes-back">

    <button
      type="button"
      class="mte-btn mte-btn-light mte-back"
      data-mte-route="home">
      ← হোমে ফিরে যান
    </button>

  </div>

</section>

`,



courses: `

<section class="taqwa-courses-page">

  <!-- HERO -->
  <section class="taqwa-courses-hero">

    <div class="taqwa-courses-hero-inner">

      <div class="taqwa-courses-badge">
        🎓 শিক্ষা • জ্ঞান • নৈতিকতা
      </div>

      <h1>
        অনলাইন কোর্সসমূহ
      </h1>

      <p>
        কুরআন শিক্ষা, তাজবীদ, হিফজ ও প্রয়োজনীয়
        ইসলামিক জ্ঞান অর্জনের জন্য সাজানো কোর্সসমূহ।
      </p>

    </div>

  </section>


  <!-- INTRO -->
  <section class="taqwa-courses-intro">

    <div class="taqwa-courses-container">

      <div class="taqwa-courses-intro-box">

        <div class="taqwa-courses-arabic">
          وَقُلْ رَبِّ زِدْنِي عِلْمًا
        </div>

        <h2>
          জ্ঞান অর্জনের সুযোগ সবার জন্য
        </h2>

        <p>
          বয়স ও প্রাথমিক জ্ঞানের স্তর অনুযায়ী
          ধাপে ধাপে শেখার উপযোগী কোর্স তৈরি করা হবে।
          নিয়মিত ক্লাস, অনুশীলন ও পুনরাবৃত্তির মাধ্যমে
          শিক্ষার্থীরা নিজেদের দক্ষতা উন্নত করতে পারবে।
        </p>

      </div>

    </div>

  </section>


  <!-- COURSES -->
  <section class="taqwa-courses-section">

    <div class="taqwa-courses-container">

      <div class="taqwa-courses-heading">

        <span>
          আমাদের কোর্স
        </span>

        <h2>
          শেখার জন্য নির্বাচিত কোর্সসমূহ
        </h2>

        <p>
          প্রয়োজন অনুযায়ী কোর্স নির্বাচন করে
          নিয়মিত পড়াশোনা ও অনুশীলন করুন।
        </p>

      </div>


      <div class="taqwa-courses-grid">


        <!-- COURSE 01 -->
        <article class="taqwa-course-card">

          <div class="taqwa-course-top">

            <div class="taqwa-course-icon">
              📖
            </div>

            <span>
              কোর্স ০১
            </span>

          </div>

          <h3>
            অনলাইন কুরআন শিক্ষা
          </h3>

          <p>
            কুরআন মাজীদ শুদ্ধভাবে পড়ার জন্য
            নূরানী কায়দা, মাখরাজ ও প্রয়োজনীয়
            তিলাওয়াতের অনুশীলন।
          </p>

          <ul>
            <li>নূরানী কায়দা</li>
            <li>মাখরাজ শিক্ষা</li>
            <li>শুদ্ধ তিলাওয়াত</li>
            <li>নিয়মিত অনুশীলন</li>
          </ul>

          <div class="taqwa-course-meta">
            <span>👨‍👩‍👧‍👦 শিশু ও বড়দের জন্য</span>
            <span>📚 অনলাইন</span>
          </div>

        </article>


        <!-- COURSE 02 -->
        <article class="taqwa-course-card">

          <div class="taqwa-course-top">

            <div class="taqwa-course-icon">
              🎧
            </div>

            <span>
              কোর্স ০২
            </span>

          </div>

          <h3>
            তাজবীদ কোর্স
          </h3>

          <p>
            কুরআন তিলাওয়াতকে আরও শুদ্ধ ও সুন্দর
            করার জন্য তাজবীদের গুরুত্বপূর্ণ
            নিয়মগুলো ধাপে ধাপে শেখানো হবে।
          </p>

          <ul>
            <li>মাখরাজ</li>
            <li>সিফাত</li>
            <li>মাদ ও গুন্নাহ</li>
            <li>তাজবীদের প্রয়োজনীয় নিয়ম</li>
          </ul>

          <div class="taqwa-course-meta">
            <span>🎓 সকল স্তরের জন্য</span>
            <span>📚 অনলাইন</span>
          </div>

        </article>


        <!-- COURSE 03 -->
        <article class="taqwa-course-card">

          <div class="taqwa-course-top">

            <div class="taqwa-course-icon">
              🌙
            </div>

            <span>
              কোর্স ০৩
            </span>

          </div>

          <h3>
            হিফজুল কুরআন
          </h3>

          <p>
            নিয়মিত সবক, আমুখতা, দাওর ও মাশ্কের
            মাধ্যমে পরিকল্পিতভাবে কুরআন মাজীদ
            মুখস্থ করার সহায়তা।
          </p>

          <ul>
            <li>দৈনিক সবক</li>
            <li>আমুখতা</li>
            <li>দাওর</li>
            <li>মাশ্ক ও পুনরাবৃত্তি</li>
          </ul>

          <div class="taqwa-course-meta">
            <span>📖 হিফজ শিক্ষার্থী</span>
            <span>📚 অনলাইন</span>
          </div>

        </article>


        <!-- COURSE 04 -->
        <article class="taqwa-course-card">

          <div class="taqwa-course-top">

            <div class="taqwa-course-icon">
              🕌
            </div>

            <span>
              কোর্স ০৪
            </span>

          </div>

          <h3>
            ইসলামিক স্টাডিজ
          </h3>

          <p>
            প্রয়োজনীয় ইসলামিক জ্ঞান, আদব-আখলাক,
            দৈনন্দিন জীবনের মাসআলা ও
            ইসলামী জীবনব্যবস্থা সম্পর্কে শিক্ষা।
          </p>

          <ul>
            <li>আকীদাহ</li>
            <li>ফিকহের মৌলিক বিষয়</li>
            <li>আদব ও আখলাক</li>
            <li>দৈনন্দিন প্রয়োজনীয় জ্ঞান</li>
          </ul>

          <div class="taqwa-course-meta">
            <span>🌿 সাধারণ শিক্ষার্থী</span>
            <span>📚 অনলাইন</span>
          </div>

        </article>


        <!-- COURSE 05 -->
        <article class="taqwa-course-card">

          <div class="taqwa-course-top">

            <div class="taqwa-course-icon">
              👦
            </div>

            <span>
              কোর্স ০৫
            </span>

          </div>

          <h3>
            শিশুদের কুরআন শিক্ষা
          </h3>

          <p>
            শিশুদের বয়স ও শেখার ক্ষমতা অনুযায়ী
            সহজ ও আনন্দদায়ক পদ্ধতিতে
            কুরআন শিক্ষার ব্যবস্থা।
          </p>

          <ul>
            <li>আরবি হরফ পরিচিতি</li>
            <li>নূরানী কায়দা</li>
            <li>ছোট সূরা</li>
            <li>দোয়া ও প্রয়োজনীয় শিক্ষা</li>
          </ul>

          <div class="taqwa-course-meta">
            <span>👦 শিশুদের জন্য</span>
            <span>📚 অনলাইন</span>
          </div>

        </article>


        <!-- COURSE 06 -->
        <article class="taqwa-course-card">

          <div class="taqwa-course-top">

            <div class="taqwa-course-icon">
              📝
            </div>

            <span>
              কোর্স ০৬
            </span>

          </div>

          <h3>
            কুরআন পুনরাবৃত্তি
          </h3>

          <p>
            পূর্বে শেখা বা মুখস্থ করা অংশ নিয়মিত
            পুনরাবৃত্তির মাধ্যমে আরও মজবুত
            করার জন্য বিশেষ অনুশীলন।
          </p>

          <ul>
            <li>দৈনিক রিভিশন</li>
            <li>দাওর</li>
            <li>ভুল সংশোধন</li>
            <li>তিলাওয়াত অনুশীলন</li>
          </ul>

          <div class="taqwa-course-meta">
            <span>📖 শিক্ষার্থীদের জন্য</span>
            <span>📚 অনলাইন</span>
          </div>

        </article>

      </div>

    </div>

  </section>


  <!-- LEARNING SYSTEM -->
  <section class="taqwa-courses-system">

    <div class="taqwa-courses-container">

      <div class="taqwa-courses-heading">

        <span>
          শেখার পদ্ধতি
        </span>

        <h2>
          কোর্স পরিচালনার ধাপ
        </h2>

      </div>


      <div class="taqwa-courses-system-grid">

        <div class="taqwa-courses-system-card">

          <strong>০১</strong>

          <div>
            <h3>ভর্তি ও পরিচিতি</h3>
            <p>
              শিক্ষার্থীর প্রয়োজন ও প্রাথমিক
              জ্ঞানের স্তর নির্ধারণ।
            </p>
          </div>

        </div>


        <div class="taqwa-courses-system-card">

          <strong>০২</strong>

          <div>
            <h3>নিয়মিত ক্লাস</h3>
            <p>
              নির্ধারিত সময় অনুযায়ী নিয়মিত
              পাঠ ও অনুশীলন।
            </p>
          </div>

        </div>


        <div class="taqwa-courses-system-card">

          <strong>০৩</strong>

          <div>
            <h3>অনুশীলন</h3>
            <p>
              শেখা বিষয় নিয়মিত অনুশীলন ও
              পুনরাবৃত্তি করা।
            </p>
          </div>

        </div>


        <div class="taqwa-courses-system-card">

          <strong>০৪</strong>

          <div>
            <h3>মূল্যায়ন</h3>
            <p>
              অগ্রগতি পর্যবেক্ষণ ও প্রয়োজন অনুযায়ী
              পরবর্তী নির্দেশনা প্রদান।
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>


  <!-- WHY LEARN -->
  <section class="taqwa-courses-benefits">

    <div class="taqwa-courses-container">

      <div class="taqwa-courses-heading">

        <span>
          বিশেষত্ব
        </span>

        <h2>
          শেখার ক্ষেত্রে আমাদের গুরুত্ব
        </h2>

      </div>


      <div class="taqwa-courses-benefits-grid">

        <div>
          <span>🎯</span>
          <h3>ধাপে ধাপে শিক্ষা</h3>
          <p>
            সহজ থেকে প্রয়োজনীয় পর্যায়ে অগ্রসর হওয়ার ব্যবস্থা।
          </p>
        </div>

        <div>
          <span>👨‍🏫</span>
          <h3>গাইডলাইন</h3>
          <p>
            নিয়মিত পড়াশোনা ও অনুশীলনের জন্য প্রয়োজনীয় দিকনির্দেশনা।
          </p>
        </div>

        <div>
          <span>🔄</span>
          <h3>পুনরাবৃত্তি</h3>
          <p>
            শেখা বিষয় মনে রাখার জন্য নিয়মিত রিভিশন।
          </p>
        </div>

      </div>

    </div>

  </section>


  <!-- CTA -->
  <section class="taqwa-courses-cta">

    <div class="taqwa-courses-cta-inner">

      <div class="taqwa-courses-cta-arabic">
        رَبِّ زِدْنِي عِلْمًا
      </div>

      <h2>
        শেখার যাত্রা শুরু করুন
      </h2>

      <p>
        নিয়মিত শিক্ষা ও অনুশীলনের মাধ্যমে
        নিজের জ্ঞান ও দক্ষতা উন্নত করুন।
      </p>

      <button
        type="button"
        class="mte-btn mte-btn-light"
        data-mte-route="contact">
        📞 যোগাযোগ করুন
      </button>

    </div>

  </section>


  <!-- BACK -->
  <div class="taqwa-courses-back">

    <button
      type="button"
      class="mte-btn mte-btn-light mte-back"
      data-mte-route="home">
      ← হোমে ফিরে যান
    </button>

  </div>

</section>

`,




/* =========================================================
   QURAN EDUCATION PAGE
   ========================================================= */

quran: `

  <section class="taqwa-quran-page">

    <!-- HERO -->
    <div class="taqwa-quran-hero">

      <div class="taqwa-quran-hero-pattern"></div>

      <div class="taqwa-quran-hero-content">

        <div class="taqwa-quran-badge">
          🌿 কুরআন • শিক্ষা • আমল
        </div>

        <h1>
          কুরআন শিক্ষা
        </h1>

        <p>
          নাজেরা, মাখরাজ, তাজবিদ ও শুদ্ধ তিলাওয়াত
          শেখার জন্য প্রয়োজনীয় শিক্ষা ও অনুশীলন।
        </p>

        <div class="taqwa-quran-hero-buttons">

          <a
            href="#quran-lessons"
            class="taqwa-quran-btn primary">
            📖 লেসন শুরু করুন
          </a>

          <a
            href="#quran-resources"
            class="taqwa-quran-btn secondary">
            📚 রিসোর্স দেখুন
          </a>

        </div>

      </div>

    </div>


    <!-- INTRO -->
    <div class="taqwa-quran-intro">

      <span class="taqwa-quran-section-kicker">
        بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
      </span>

      <h2>
        কুরআন শিখি, কুরআন বুঝি,
        কুরআন অনুযায়ী জীবন গড়ি
      </h2>

      <p>
        পবিত্র কুরআন মাজীদ শুদ্ধভাবে পড়ার জন্য
        প্রয়োজনীয় মাখরাজ, তাজবিদ, নাজেরা ও
        তিলাওয়াতের অনুশীলন ধাপে ধাপে শেখার ব্যবস্থা।
      </p>

    </div>


    <!-- LESSONS -->
    <div
      id="quran-lessons"
      class="taqwa-quran-section">

      <div class="taqwa-quran-heading">

        <span>
          📖 শেখার ধাপ
        </span>

        <h2>
          কুরআন শিক্ষার লেসনসমূহ
        </h2>

        <p>
          সহজ থেকে ধাপে ধাপে কুরআন পড়ার
          প্রয়োজনীয় বিষয়গুলো শিখুন।
        </p>

      </div>


      <div class="taqwa-quran-cards">

        <!-- 01 -->
        <article class="taqwa-quran-card">

          <div class="taqwa-quran-card-icon">
            ১
          </div>

          <div class="taqwa-quran-card-content">

            <h3>
              নূরানী কায়দা
            </h3>

            <p>
              আরবি হরফ, হরকত, জযম, তানভীন ও
              প্রাথমিক কুরআন পাঠের নিয়ম শেখা।
            </p>

            <a
              href="#"
              class="taqwa-quran-card-btn">
              লেসন দেখুন →
            </a>

          </div>

        </article>


        <!-- 02 -->
        <article class="taqwa-quran-card">

          <div class="taqwa-quran-card-icon">
            ২
          </div>

          <div class="taqwa-quran-card-content">

            <h3>
              মাখরাজ শিক্ষা
            </h3>

            <p>
              আরবি হরফের সঠিক উচ্চারণস্থান ও
              উচ্চারণের প্রয়োজনীয় নিয়ম অনুশীলন করুন।
            </p>

            <a
              href="#"
              class="taqwa-quran-card-btn">
              লেসন দেখুন →
            </a>

          </div>

        </article>


        <!-- 03 -->
        <article class="taqwa-quran-card">

          <div class="taqwa-quran-card-icon">
            ৩
          </div>

          <div class="taqwa-quran-card-content">

            <h3>
              তাজবিদ শিক্ষা
            </h3>

            <p>
              কুরআন তিলাওয়াতের গুরুত্বপূর্ণ
              তাজবিদের নিয়মগুলো সহজভাবে শেখা ও অনুশীলন।
            </p>

            <a
              href="#"
              class="taqwa-quran-card-btn">
              লেসন দেখুন →
            </a>

          </div>

        </article>


        <!-- 04 -->
        <article class="taqwa-quran-card">

          <div class="taqwa-quran-card-icon">
            ৪
          </div>

          <div class="taqwa-quran-card-content">

            <h3>
              নাজেরা কুরআন
            </h3>

            <p>
              দেখে দেখে কুরআন মাজীদ শুদ্ধভাবে
              পড়ার নিয়মিত অনুশীলন ও পাঠ।
            </p>

            <a
              href="#"
              class="taqwa-quran-card-btn">
              লেসন দেখুন →
            </a>

          </div>

        </article>


        <!-- 05 -->
        <article class="taqwa-quran-card">

          <div class="taqwa-quran-card-icon">
            ৫
          </div>

          <div class="taqwa-quran-card-content">

            <h3>
              শুদ্ধ তিলাওয়াত
            </h3>

            <p>
              আয়াতের সঠিক উচ্চারণ, মাদ, গুন্নাহ
              ও ওয়াকফের নিয়ম অনুশীলন করুন।
            </p>

            <a
              href="#"
              class="taqwa-quran-card-btn">
              লেসন দেখুন →
            </a>

          </div>

        </article>


        <!-- 06 -->
        <article class="taqwa-quran-card">

          <div class="taqwa-quran-card-icon">
            ৬
          </div>

          <div class="taqwa-quran-card-content">

            <h3>
              নিয়মিত অনুশীলন
            </h3>

            <p>
              প্রতিদিনের তিলাওয়াত ও অনুশীলনের মাধ্যমে
              পাঠের দক্ষতা আরও উন্নত করুন।
            </p>

            <a
              href="#"
              class="taqwa-quran-card-btn">
              অনুশীলন দেখুন →
            </a>

          </div>

        </article>

      </div>

    </div>


    <!-- VIDEO -->
    <div class="taqwa-quran-video-section">

      <div class="taqwa-quran-video-text">

        <span class="taqwa-quran-section-kicker">
          🎥 ভিডিও ক্লাস
        </span>

        <h2>
          ভিডিওর মাধ্যমে কুরআন শিক্ষা
        </h2>

        <p>
          কুরআন শিক্ষা, মাখরাজ ও তাজবিদের
          ভিডিও ক্লাস এখানে যুক্ত করা যাবে।
        </p>

        <a
          href="#"
          class="taqwa-quran-video-btn">
          ▶ ভিডিও ক্লাস দেখুন
        </a>

      </div>


      <div class="taqwa-quran-video-box">

        <div class="taqwa-quran-play">
          ▶
        </div>

        <p>
          ভিডিও ক্লাস
        </p>

      </div>

    </div>


    <!-- RESOURCES -->
    <div
      id="quran-resources"
      class="taqwa-quran-section">

      <div class="taqwa-quran-heading">

        <span>
          📚 প্রয়োজনীয় রিসোর্স
        </span>

        <h2>
          ক্লাস নোট ও PDF
        </h2>

        <p>
          কুরআন শিক্ষার জন্য প্রয়োজনীয় নোট,
          PDF ও অন্যান্য শিক্ষামূলক উপকরণ।
        </p>

      </div>


      <div class="taqwa-quran-resource-grid">


        <a
          href="#"
          class="taqwa-quran-resource">

          <div class="taqwa-quran-resource-icon">
            📄
          </div>

          <div>

            <h3>
              মাখরাজ নোট
            </h3>

            <p>
              PDF রিসোর্স
            </p>

          </div>

          <span>
            →
          </span>

        </a>


        <a
          href="#"
          class="taqwa-quran-resource">

          <div class="taqwa-quran-resource-icon">
            📖
          </div>

          <div>

            <h3>
              তাজবিদ নোট
            </h3>

            <p>
              PDF রিসোর্স
            </p>

          </div>

          <span>
            →
          </span>

        </a>


        <a
          href="#"
          class="taqwa-quran-resource">

          <div class="taqwa-quran-resource-icon">
            📚
          </div>

          <div>

            <h3>
              নূরানী কায়দা
            </h3>

            <p>
              শিক্ষা উপকরণ
            </p>

          </div>

          <span>
            →
          </span>

        </a>


        <a
          href="#"
          class="taqwa-quran-resource">

          <div class="taqwa-quran-resource-icon">
            🎧
          </div>

          <div>

            <h3>
              তিলাওয়াত অনুশীলন
            </h3>

            <p>
              অডিও রিসোর্স
            </p>

          </div>

          <span>
            →
          </span>

        </a>

      </div>

    </div>


    <!-- NOTICE -->
    <div class="taqwa-quran-notice">

      <div class="taqwa-quran-notice-icon">
        🌿
      </div>

      <div>

        <h3>
          নিয়মিত অনুশীলন করুন
        </h3>

        <p>
          প্রতিদিন অল্প সময় হলেও কুরআন মাজীদ পড়া
          ও শুদ্ধ তিলাওয়াতের অনুশীলন করার চেষ্টা করুন।
        </p>

      </div>

    </div>


    <!-- ENDING -->
    <div class="taqwa-quran-ending">

      <div class="taqwa-quran-arabic">
        وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
      </div>

      <p>
        কুরআন ধীরে ধীরে ও স্পষ্টভাবে তিলাওয়াত করুন।
      </p>

    </div>

  </section>

`,






tajweed: `
<section class="taqwa-tajweed-book">

  <div class="taqwa-tajweed-book-hero">
    <div class="taqwa-tajweed-book-hero-inner">

      <div class="taqwa-tajweed-book-badge">
        📖 তাজবীদ শিক্ষা
      </div>

      <h1>
        প্রশ্নোত্তরে এসো সহজ পদ্ধতিতে
        তাজবীদ ও সিফাত শিখি
      </h1>

      <p>
        কুরআন মাজীদ শুদ্ধভাবে তিলাওয়াতের জন্য
        তাজবীদ, মাখরাজ ও সিফাতের প্রয়োজনীয়
        বিষয়গুলো সহজ প্রশ্নোত্তর পদ্ধতিতে।
      </p>

      <div class="taqwa-tajweed-book-info">
        <span>✍️ লেখক: আবূ ত্বহা মোহাম্মাদ সাইফুল ইসলাম</span>
        <span>📅 প্রথম প্রকাশ: জানুয়ারি ২০২৫</span>
      </div>

    </div>
  </div>


  <div class="taqwa-tajweed-book-intro">

    <div class="taqwa-tajweed-book-arabic">
      بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
    </div>

    <h2>তাজবীদ শিক্ষা</h2>

    <p>
      কুরআন মাজীদ শুদ্ধ ও সুন্দরভাবে তিলাওয়াত করার জন্য
      তাজবীদের জ্ঞান অর্জন করা অত্যন্ত গুরুত্বপূর্ণ।
    </p>

  </div>


  <div class="taqwa-tajweed-book-details">

    <div class="taqwa-tajweed-detail-card">
      <span>✍️</span>
      <strong>লেখক</strong>
      <p>আবূ ত্বহা মোহাম্মাদ সাইফুল ইসলাম</p>
    </div>

    <div class="taqwa-tajweed-detail-card">
      <span>📅</span>
      <strong>প্রথম প্রকাশ</strong>
      <p>জানুয়ারি ২০২৫</p>
    </div>

    <div class="taqwa-tajweed-detail-card">
      <span>📚</span>
      <strong>বিষয়</strong>
      <p>তাজবীদ ও সিফাত</p>
    </div>

    <div class="taqwa-tajweed-detail-card">
      <span>💰</span>
      <strong>হাদিয়া</strong>
      <p>১৭০/=</p>
    </div>

  </div>


  <div class="taqwa-tajweed-book-section">

    <div class="taqwa-tajweed-book-heading">
      <span>সূচিপত্র</span>
      <h2>তাজবীদ শিক্ষার অধ্যায়সমূহ</h2>
      <p>সহজভাবে ধারাবাহিকভাবে তাজবীদ শেখার জন্য অধ্যায়গুলো সাজানো হয়েছে।</p>
    </div>

    <div class="taqwa-tajweed-toc">

      <a href="#taqwa-tajweed-chapter-1">০১. তাজবীদ</a>
      <a href="#taqwa-tajweed-chapter-2">০২. তাজবীদ শাস্ত্র</a>
      <a href="#taqwa-tajweed-chapter-3">০৩. তাজবীদ জানার মূল রোকন</a>
      <a href="#taqwa-tajweed-chapter-4">০৪. মাখরাজ</a>
      <a href="#taqwa-tajweed-chapter-5">০৫. হরকত</a>
      <a href="#taqwa-tajweed-chapter-6">০৬. জযম অথবা সাকিন</a>
      <a href="#taqwa-tajweed-chapter-7">০৭. তাশদীদ</a>
      <a href="#taqwa-tajweed-chapter-8">০৮. ক্বলক্বলাহ</a>
      <a href="#taqwa-tajweed-chapter-9">০৯. মুরাক্কাব</a>
      <a href="#taqwa-tajweed-chapter-10">১০. মাদের আলোচনা</a>
      <a href="#taqwa-tajweed-chapter-11">১১. মাদ্দে ত্ববায়ী</a>
      <a href="#taqwa-tajweed-chapter-12">১২. মাদ্দে বদল</a>
      <a href="#taqwa-tajweed-chapter-13">১৩. লীনের পরিচয়</a>
      <a href="#taqwa-tajweed-chapter-14">১৪. তিন আলিফ মাদ</a>
      <a href="#taqwa-tajweed-chapter-15">১৫. চার আলিফ মাদ</a>
      <a href="#taqwa-tajweed-chapter-16">১৬. মাদ্দে এওয়াজ</a>
      <a href="#taqwa-tajweed-chapter-17">১৭. মাদের স্তর</a>
      <a href="#taqwa-tajweed-chapter-18">১৮. ওয়াজিব গুন্নাহ</a>
      <a href="#taqwa-tajweed-chapter-19">১৯. নূন সাকিন ও তানবীন</a>
      <a href="#taqwa-tajweed-chapter-20">২০. মীম সাকিন</a>
      <a href="#taqwa-tajweed-chapter-21">২১. আল্লাহ শব্দের লাম</a>
      <a href="#taqwa-tajweed-chapter-22">২২. ر হরফ পুর ও বারিক</a>
      <a href="#taqwa-tajweed-chapter-23">২৩. সিফাতের বিস্তারিত আলোচনা</a>
      <a href="#taqwa-tajweed-chapter-24">২৪. কুরআন তিলাওয়াতের ফায়দা</a>
      <a href="#taqwa-tajweed-chapter-25">২৫. মাশ্ক ও অনুশীলন</a>

    </div>

  </div>


  <!-- অধ্যায় ১ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-1">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০১</span>

    <h2>তাজবীদ</h2>

    <div class="taqwa-tajweed-question">
      <h3>প্রশ্ন: তাজবীদ কী?</h3>
      <p>
        উত্তর: তাজবীদ শব্দের অর্থ সুন্দর করা, সঠিক ও শুদ্ধভাবে
        কুরআন মাজীদ তিলাওয়াত করা।
      </p>
    </div>

    <div class="taqwa-tajweed-note">
      <strong>নোট:</strong>
      কুরআনের প্রতিটি হরফ তার সঠিক মাখরাজ ও সিফাতসহ আদায় করাই
      তাজবীদের গুরুত্বপূর্ণ বিষয়।
    </div>

  </article>


  <!-- অধ্যায় ২ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-2">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০২</span>

    <h2>তাজবীদ শাস্ত্র</h2>

    <div class="taqwa-tajweed-question">
      <h3>প্রশ্ন: তাজবীদ শাস্ত্রের উদ্দেশ্য কী?</h3>
      <p>
        উত্তর: কুরআন মাজীদকে রাসূলুল্লাহ ﷺ-এর শেখানো পদ্ধতিতে
        শুদ্ধভাবে তিলাওয়াত করা।
      </p>
    </div>

  </article>


  <!-- অধ্যায় ৩ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-3">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০৩</span>

    <h2>তাজবীদ জানার মূল রোকন</h2>

    <div class="taqwa-tajweed-points">

      <div>
        <strong>১</strong>
        <p>মাখরাজ সঠিকভাবে জানা।</p>
      </div>

      <div>
        <strong>২</strong>
        <p>হরফের সিফাত জানা।</p>
      </div>

      <div>
        <strong>৩</strong>
        <p>প্রয়োজনীয় তাজবীদের নিয়ম জানা।</p>
      </div>

      <div>
        <strong>৪</strong>
        <p>উস্তাদের কাছে নিয়মিত মাশ্ক করা।</p>
      </div>

    </div>

  </article>


  <!-- অধ্যায় ৪ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-4">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০৪</span>

    <h2>মাখরাজ</h2>

    <p>
      মাখরাজ হলো হরফ উচ্চারণের নির্দিষ্ট স্থান।
      কুরআন মাজীদের হরফগুলো সঠিক স্থান থেকে উচ্চারণ করা জরুরি।
    </p>

    <div class="taqwa-tajweed-makhraj-grid">

      <div>
        <strong>১</strong>
        <h3>জওফ</h3>
        <p>ا و ي</p>
      </div>

      <div>
        <strong>২</strong>
        <h3>হালক</h3>
        <p>ء ه ع ح غ خ</p>
      </div>

      <div>
        <strong>৩</strong>
        <h3>জিহ্বা</h3>
        <p>ل ن ر</p>
      </div>

      <div>
        <strong>৪</strong>
        <h3>দুই ঠোঁট</h3>
        <p>ب م و</p>
      </div>

      <div>
        <strong>৫</strong>
        <h3>নাক</h3>
        <p>غُنَّة</p>
      </div>

    </div>

  </article>


  <!-- অধ্যায় ৫ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-5">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০৫</span>

    <h2>হরকত</h2>

    <p>
      যবর, যের ও পেশকে হরকত বলা হয়। এগুলোর মাধ্যমে হরফের
      উচ্চারণের পরিবর্তন হয়।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      بَ &nbsp;&nbsp; بِ &nbsp;&nbsp; بُ
    </div>

  </article>


  <!-- অধ্যায় ৬ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-6">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০৬</span>

    <h2>জযম অথবা সাকিন</h2>

    <p>
      কোনো হরফের ওপর জযম থাকলে তাকে সাকিন হরফ বলা হয়।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      أَبْ &nbsp;&nbsp; يَكْتُبْ
    </div>

  </article>


  <!-- অধ্যায় ৭ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-7">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০৭</span>

    <h2>তাশদীদ</h2>

    <p>
      তাশদীদযুক্ত হরফ মূলত দুই হরফের সমতুল্য।
      প্রথমটি সাকিন এবং দ্বিতীয়টি হরকতযুক্ত।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      إِنَّ &nbsp;&nbsp; رَبِّ
    </div>

  </article>


  <!-- অধ্যায় ৮ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-8">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০৮</span>

    <h2>ক্বলক্বলাহ</h2>

    <p>
      ق، ط، ب، ج، د — এই পাঁচটি হরফ সাকিন হলে ক্বলক্বলাহ করা হয়।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      قْ &nbsp; طْ &nbsp; بْ &nbsp; جْ &nbsp; دْ
    </div>

  </article>


  <!-- অধ্যায় ৯ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-9">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ০৯</span>

    <h2>মুরাক্কাব</h2>

    <p>
      দুই বা ততোধিক হরফ একত্রিত হয়ে যখন একটি শব্দ তৈরি করে,
      তখন তার উচ্চারণের নিয়ম সঠিকভাবে জানা প্রয়োজন।
    </p>

  </article>


  <!-- অধ্যায় ১০ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-10">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১০</span>

    <h2>মাদের আলোচনা</h2>

    <p>
      মাদ অর্থ টেনে পড়া। কুরআন মাজীদে বিভিন্ন কারণে বিভিন্ন
      পরিমাণে মাদ করা হয়।
    </p>

  </article>


  <!-- অধ্যায় ১১ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-11">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১১</span>

    <h2>মাদ্দে ত্ববায়ী</h2>

    <p>
      স্বাভাবিক মাদকে মাদ্দে ত্ববায়ী বলা হয়।
      এটি সাধারণত দুই হারাকাত পরিমাণ পড়া হয়।
    </p>

  </article>


  <!-- অধ্যায় ১২ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-12">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১২</span>

    <h2>মাদ্দে বদল</h2>

    <p>
      হামযার পরিবর্তনের কারণে যে মাদ সৃষ্টি হয় তাকে
      মাদ্দে বদল বলা হয়।
    </p>

  </article>


  <!-- অধ্যায় ১৩ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-13">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১৩</span>

    <h2>লীনের পরিচয়</h2>

    <p>
      و এবং ي সাকিন হওয়ার আগে যবর থাকলে লীনের হরফ তৈরি হয়।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      خَوْف &nbsp;&nbsp; بَيْت
    </div>

  </article>


  <!-- অধ্যায় ১৪ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-14">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১৪</span>

    <h2>তিন আলিফ মাদ</h2>

    <p>
      নির্দিষ্ট মাদ্দের ক্ষেত্রে দীর্ঘ পরিমাণে মাদ করা হয়।
    </p>

  </article>


  <!-- অধ্যায় ১৫ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-15">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১৫</span>

    <h2>চার আলিফ মাদ</h2>

    <p>
      কিছু বিশেষ মাদের ক্ষেত্রে চার আলিফ পরিমাণ টেনে পড়ার
      নিয়ম পাওয়া যায়।
    </p>

  </article>


  <!-- অধ্যায় ১৬ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-16">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১৬</span>

    <h2>মাদ্দে এওয়াজ</h2>

    <p>
      ওয়াকফের সময় তানবীনে ফাতহা পরিবর্তিত হয়ে যে মাদ হয়,
      তাকে মাদ্দে এওয়াজ বলা হয়।
    </p>

  </article>


  <!-- অধ্যায় ১৭ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-17">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১৭</span>

    <h2>মাদের স্তর</h2>

    <div class="taqwa-tajweed-number-list">

      <div>১. মাদ্দে ত্ববায়ী</div>
      <div>২. মাদ্দে বদল</div>
      <div>৩. মাদ্দে লীন</div>
      <div>৪. মাদ্দে আরিদ</div>
      <div>৫. মাদ্দে মুনফাসিল</div>
      <div>৬. মাদ্দে মুত্তাসিল</div>
      <div>৭. মাদ্দে লাযিম</div>

    </div>

  </article>


  <!-- অধ্যায় ১৮ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-18">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১৮</span>

    <h2>ওয়াজিব গুন্নাহ</h2>

    <p>
      নূন ও মীম মুশাদ্দাদ হলে দুই হারাকাত পরিমাণ গুন্নাহ করা হয়।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      إِنَّ &nbsp;&nbsp; ثُمَّ
    </div>

  </article>


  <!-- অধ্যায় ১৯ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-19">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ১৯</span>

    <h2>নূন সাকিন ও তানবীন</h2>

    <div class="taqwa-tajweed-rule-grid">

      <div>
        <span>নিয়ম ০১</span>
        <h3>ইযহার</h3>
        <p>নির্দিষ্ট হরফের আগে নূন সাকিন ও তানবীন স্পষ্টভাবে পড়া হয়।</p>
      </div>

      <div>
        <span>নিয়ম ০২</span>
        <h3>ইদগাম</h3>
        <p>নির্দিষ্ট হরফের আগে নূন সাকিন ও তানবীন মিশিয়ে পড়া হয়।</p>
      </div>

      <div>
        <span>নিয়ম ০৩</span>
        <h3>ইকলাব</h3>
        <p>ب-এর আগে নূন সাকিন বা তানবীন হলে মীমের ন্যায় পড়া হয়।</p>
      </div>

      <div>
        <span>নিয়ম ০৪</span>
        <h3>ইখফা</h3>
        <p>নির্দিষ্ট হরফের আগে নূন সাকিন ও তানবীন গোপন করে পড়া হয়।</p>
      </div>

    </div>

  </article>


  <!-- অধ্যায় ২০ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-20">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ২০</span>

    <h2>মীম সাকিন</h2>

    <div class="taqwa-tajweed-rule-grid">

      <div>
        <span>নিয়ম ০১</span>
        <h3>ইখফায়ে শাফাবী</h3>
        <p>ب-এর আগে মীম সাকিন হলে ইখফা করা হয়।</p>
      </div>

      <div>
        <span>নিয়ম ০২</span>
        <h3>ইদগামে শাফাবী</h3>
        <p>م-এর আগে মীম সাকিন হলে ইদগাম করা হয়।</p>
      </div>

      <div>
        <span>নিয়ম ০৩</span>
        <h3>ইযহার শাফাবী</h3>
        <p>অন্যান্য হরফের আগে মীম সাকিন স্পষ্টভাবে পড়া হয়।</p>
      </div>

    </div>

  </article>


  <!-- অধ্যায় ২১ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-21">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ২১</span>

    <h2>আল্লাহ শব্দের লাম</h2>

    <p>
      আল্লাহ শব্দের লাম কখন মোটা এবং কখন চিকন করে পড়তে হবে,
      তা পূর্ববর্তী হরকতের ওপর নির্ভর করে।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      اللَّهُ
    </div>

  </article>


  <!-- অধ্যায় ২২ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-22">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ২২</span>

    <h2>ر হরফ পুর ও বারিক</h2>

    <p>
      ر হরফ কখন মোটা এবং কখন চিকন করে পড়তে হবে,
      তার জন্য নির্দিষ্ট তাজবীদের নিয়ম রয়েছে।
    </p>

    <div class="taqwa-tajweed-arabic-example">
      رَ &nbsp;&nbsp; رِ &nbsp;&nbsp; رُ
    </div>

  </article>


  <!-- অধ্যায় ২৩ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-23">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ২৩</span>

    <h2>সিফাতের বিস্তারিত আলোচনা</h2>

    <p>
      হরফের উচ্চারণের সময় যে বিশেষ বৈশিষ্ট্য প্রকাশ পায়,
      তাকে সিফাত বলা হয়।
    </p>

    <div class="taqwa-tajweed-sifat-grid">

      <div>
        <strong>هَمْس</strong>
        <p>শ্বাস প্রবাহিত হওয়া</p>
      </div>

      <div>
        <strong>جَهْر</strong>
        <p>শ্বাস আটকে যাওয়া</p>
      </div>

      <div>
        <strong>شِدَّة</strong>
        <p>শব্দের প্রবাহ বন্ধ হওয়া</p>
      </div>

      <div>
        <strong>رَخَاوَة</strong>
        <p>শব্দ প্রবাহিত হওয়া</p>
      </div>

      <div>
        <strong>اسْتِعْلَاء</strong>
        <p>জিহ্বা উপরের দিকে ওঠা</p>
      </div>

      <div>
        <strong>اسْتِفَال</strong>
        <p>জিহ্বা নিচের দিকে থাকা</p>
      </div>

    </div>

  </article>


  <!-- অধ্যায় ২৪ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-24">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ২৪</span>

    <h2>কুরআন তিলাওয়াতের ফায়দা</h2>

    <div class="taqwa-tajweed-benefit-grid">

      <div>
        <span>📖</span>
        <h3>সওয়াব</h3>
        <p>কুরআন তিলাওয়াতের মাধ্যমে সওয়াব অর্জিত হয়।</p>
      </div>

      <div>
        <span>❤️</span>
        <h3>অন্তরের প্রশান্তি</h3>
        <p>কুরআন মানুষের অন্তরে প্রশান্তি ও সান্ত্বনা দেয়।</p>
      </div>

      <div>
        <span>🌿</span>
        <h3>হেদায়াত</h3>
        <p>কুরআন মানুষের জন্য হেদায়াতের পথনির্দেশ।</p>
      </div>

    </div>

  </article>


  <!-- অধ্যায় ২৫ -->
  <article class="taqwa-tajweed-chapter" id="taqwa-tajweed-chapter-25">

    <span class="taqwa-tajweed-chapter-number">অধ্যায় ২৫</span>

    <h2>মাশ্ক ও অনুশীলন</h2>

    <p>
      তাজবীদ শুধু পড়ে জানলেই যথেষ্ট নয়। সঠিক উচ্চারণের জন্য
      অভিজ্ঞ উস্তাদের কাছে নিয়মিত মাশ্ক ও অনুশীলন করতে হবে।
    </p>

    <div class="taqwa-tajweed-practice">

      <div>
        <span>১</span>
        <p>প্রতিদিন কুরআন তিলাওয়াত করুন।</p>
      </div>

      <div>
        <span>২</span>
        <p>মাখরাজের অনুশীলন করুন।</p>
      </div>

      <div>
        <span>৩</span>
        <p>তাজবীদের নিয়ম প্রয়োগ করুন।</p>
      </div>

      <div>
        <span>৪</span>
        <p>উস্তাদের কাছে ভুল সংশোধন করুন।</p>
      </div>

    </div>

  </article>


  <div class="taqwa-tajweed-final">

    <div class="arabic">
      وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
    </div>

    <h2>শুদ্ধভাবে কুরআন শিখুন</h2>

    <p>
      তাজবীদ শিখুন, নিয়মিত মাশ্ক করুন এবং কুরআন মাজীদ
      সুন্দর ও শুদ্ধভাবে তিলাওয়াত করুন।
    </p>

  </div>


  <div class="taqwa-tajweed-back-area">
    <button
      type="button"
      class="mte-btn mte-btn-light mte-back"
      data-mte-route="home"
    >
      ← হোমে ফিরে যান
    </button>
  </div>

</section>
`,













    
hifz: `

<section class="taqwa-hifz-page">

  <!-- HERO -->
  <div class="taqwa-hifz-hero">
    <div class="taqwa-hifz-hero-inner">

      <div class="taqwa-hifz-badge">
        📖 হিফজুল কুরআন
      </div>

      <h1>
        হিফজুল কুরআন শিক্ষা
      </h1>

      <p>
        নিয়মিত মাশ্ক, সবক, আমুখতা ও দাওরের মাধ্যমে
        কুরআন মাজীদ মুখস্থ করার একটি সুন্দর ও ধারাবাহিক পদ্ধতি।
      </p>

    </div>
  </div>


  <!-- INTRO -->
  <section class="taqwa-hifz-intro">

    <div class="taqwa-hifz-arabic">
      وَ لَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ
    </div>

    <h2>
      হিফজের মূল উদ্দেশ্য
    </h2>

    <p>
      কুরআন মাজীদ শুধু মুখস্থ করাই নয়; বরং শুদ্ধভাবে পড়া,
      নিয়মিত পুনরাবৃত্তি করা এবং জীবনে কুরআনের শিক্ষা বাস্তবায়ন
      করাই হিফজের অন্যতম উদ্দেশ্য।
    </p>

  </section>


  <!-- DAILY SYSTEM -->
  <section class="taqwa-hifz-section">

    <div class="taqwa-hifz-heading">
      <span>হিফজের নিয়ম</span>
      <h2>দৈনিক হিফজ কার্যক্রম</h2>
      <p>
        একজন হাফেজের দৈনন্দিন পড়াশোনাকে কয়েকটি গুরুত্বপূর্ণ
        ধাপে ভাগ করে নেওয়া যায়।
      </p>
    </div>


    <div class="taqwa-hifz-grid">

      <article class="taqwa-hifz-card">

        <div class="taqwa-hifz-card-icon">
          1️⃣
        </div>

        <h3>
          দৈনিক সবক
        </h3>

        <p>
          সামর্থ্য অনুযায়ী নির্ধারিত নতুন অংশ মুখস্থ করা
          এবং উস্তাদের কাছে শুদ্ধভাবে শুনানো।
        </p>

      </article>


      <article class="taqwa-hifz-card">

        <div class="taqwa-hifz-card-icon">
          2️⃣
        </div>

        <h3>
          আমুখতা
        </h3>

        <p>
          পূর্বের মুখস্থ করা সবক নিয়মিত ঝালাই করা,
          যাতে মুখস্থ অংশ শক্ত ও নির্ভুল থাকে।
        </p>

      </article>


      <article class="taqwa-hifz-card">

        <div class="taqwa-hifz-card-icon">
          3️⃣
        </div>

        <h3>
          দাওর
        </h3>

        <p>
          পুরোনো সম্পূর্ণ অংশ নিয়মিত পুনরাবৃত্তি করে
          মুখস্থকে আরও মজবুত করা।
        </p>

      </article>


      <article class="taqwa-hifz-card">

        <div class="taqwa-hifz-card-icon">
          4️⃣
        </div>

        <h3>
          মাশ্ক
        </h3>

        <p>
          মাখরাজ, তাজবীদ ও সঠিক উচ্চারণের মাধ্যমে
          নিয়মিত কুরআন তিলাওয়াতের অনুশীলন।
        </p>

      </article>

    </div>

  </section>


  <!-- IMPORTANT RULES -->
  <section class="taqwa-hifz-section taqwa-hifz-soft">

    <div class="taqwa-hifz-heading">
      <span>গুরুত্বপূর্ণ বিষয়</span>
      <h2>হিফজের জন্য প্রয়োজনীয় অভ্যাস</h2>
    </div>


    <div class="taqwa-hifz-rules">

      <div class="taqwa-hifz-rule">
        <strong>০১</strong>
        <div>
          <h3>নিয়মিত সময়সূচি</h3>
          <p>
            প্রতিদিন নির্দিষ্ট সময়ে হিফজের জন্য সময় রাখা।
          </p>
        </div>
      </div>


      <div class="taqwa-hifz-rule">
        <strong>০২</strong>
        <div>
          <h3>উস্তাদের কাছে শুনানো</h3>
          <p>
            নতুন ও পুরোনো মুখস্থ অংশ নিয়মিত উস্তাদের কাছে শুনানো।
          </p>
        </div>
      </div>


      <div class="taqwa-hifz-rule">
        <strong>০৩</strong>
        <div>
          <h3>পুনরাবৃত্তি</h3>
          <p>
            পূর্বের মুখস্থ অংশ প্রতিদিন পর্যায়ক্রমে পুনরাবৃত্তি করা।
          </p>
        </div>
      </div>


      <div class="taqwa-hifz-rule">
        <strong>০৪</strong>
        <div>
          <h3>শুদ্ধ তিলাওয়াত</h3>
          <p>
            তাজবীদ ও মাখরাজের নিয়ম মেনে কুরআন পড়ার অভ্যাস করা।
          </p>
        </div>
      </div>


      <div class="taqwa-hifz-rule">
        <strong>০৫</strong>
        <div>
          <h3>ধৈর্য ও নিয়মিততা</h3>
          <p>
            ধীরে ধীরে অগ্রসর হয়ে নিয়মিতভাবে হিফজ চালিয়ে যাওয়া।
          </p>
        </div>
      </div>


      <div class="taqwa-hifz-rule">
        <strong>০৬</strong>
        <div>
          <h3>দোয়া</h3>
          <p>
            আল্লাহর কাছে কুরআন শেখা ও মনে রাখার জন্য নিয়মিত দোয়া করা।
          </p>
        </div>
      </div>

    </div>

  </section>


  <!-- DAILY ROUTINE -->
  <section class="taqwa-hifz-section">

    <div class="taqwa-hifz-heading">
      <span>নমুনা পরিকল্পনা</span>
      <h2>দৈনিক হিফজ রুটিন</h2>
    </div>


    <div class="taqwa-hifz-routine">

      <div class="taqwa-hifz-routine-item">
        <span>🌅</span>
        <div>
          <strong>ফজরের পর</strong>
          <p>নতুন সবক মুখস্থ ও প্রস্তুতি</p>
        </div>
      </div>


      <div class="taqwa-hifz-routine-item">
        <span>☀️</span>
        <div>
          <strong>সকাল</strong>
          <p>উস্তাদের কাছে নতুন সবক শুনানো</p>
        </div>
      </div>


      <div class="taqwa-hifz-routine-item">
        <span>🌤️</span>
        <div>
          <strong>দুপুর</strong>
          <p>আমুখতা ও পূর্বের সবক পুনরাবৃত্তি</p>
        </div>
      </div>


      <div class="taqwa-hifz-routine-item">
        <span>🌇</span>
        <div>
          <strong>আসর/মাগরিবের পর</strong>
          <p>দাওর ও পুরোনো মুখস্থ অংশ ঝালাই</p>
        </div>
      </div>


      <div class="taqwa-hifz-routine-item">
        <span>🌙</span>
        <div>
          <strong>এশার পর</strong>
          <p>পরের দিনের সবকের প্রস্তুতি</p>
        </div>
      </div>

    </div>

  </section>


  <!-- BENEFITS -->
  <section class="taqwa-hifz-section taqwa-hifz-soft">

    <div class="taqwa-hifz-heading">
      <span>কুরআনের সঙ্গে সম্পর্ক</span>
      <h2>হিফজের উপকারিতা</h2>
    </div>


    <div class="taqwa-hifz-benefits">

      <div>
        <span>📖</span>
        <h3>কুরআনের সঙ্গে সম্পর্ক</h3>
        <p>
          নিয়মিত কুরআন পড়া ও পুনরাবৃত্তির অভ্যাস তৈরি হয়।
        </p>
      </div>


      <div>
        <span>🧠</span>
        <h3>মুখস্থ শক্তি</h3>
        <p>
          নিয়মিত মুখস্থ ও পুনরাবৃত্তির মাধ্যমে স্মরণশক্তির অনুশীলন হয়।
        </p>
      </div>


      <div>
        <span>🌿</span>
        <h3>আত্মিক উন্নতি</h3>
        <p>
          কুরআনের শিক্ষা বুঝে আমল করার সুযোগ তৈরি হয়।
        </p>
      </div>

    </div>

  </section>


  <!-- MOTIVATION -->
  <section class="taqwa-hifz-motivation">

    <div class="taqwa-hifz-motivation-arabic">
      خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
    </div>

    <h2>
      কুরআন শিখুন, কুরআনের সঙ্গে থাকুন
    </h2>

    <p>
      অল্প অল্প করে নিয়মিত অগ্রসর হওয়াই হিফজের পথে
      দীর্ঘমেয়াদি সফলতার অন্যতম গুরুত্বপূর্ণ অভ্যাস।
    </p>

  </section>


  <!-- BACK -->
  <div class="taqwa-hifz-back">

    <button
      type="button"
      class="mte-btn mte-btn-light mte-back"
      data-mte-route="home"
    >
      ← হোমে ফিরে যান
    </button>

  </div>

</section>

`,
    books: `

      <section class="mte-section">

        <div class="mte-container">

          <div class="mte-grid">

            <article class="mte-card">

              <img
                class="mte-book-cover"
                src="${MTE_CONFIG.bookCover}"
                alt="ইসলামিক বইয়ের কভার">

              <h3 class="mte-card-title">
                আমার বই
              </h3>

              <button
                class="mte-btn mte-btn-primary"
                onclick="mteOpenPdf(MTE_CONFIG.pdfDemo,'আমার বই')">
                বইটি পড়ুন
              </button>

            </article>

          </div>

        </div>

      </section>

    `,


    library: `

      <section class="mte-section">

        <div class="mte-container">

          <div class="mte-section-head">

            <div class="mte-section-kicker">
              PDF LIBRARY
            </div>

            <h2 class="mte-section-title">
              PDF লাইব্রেরি
            </h2>

            <p class="mte-section-desc">
              এখানে আপনার সকল ইসলামিক ও
              শিক্ষামূলক PDF বই পাওয়া যাবে।
            </p>

          </div>


          <div class="mte-grid">

            ${
              MTE_CONFIG.books &&
              MTE_CONFIG.books.length

                ? MTE_CONFIG.books
                    .map(function (book) {

                      return `

                        <article class="mte-card mte-book-card">

                          <img
                            class="mte-book-cover"
                            src="${book.cover}"
                            alt="${book.title}"
                            loading="lazy">

                          <h3 class="mte-card-title">
                            ${book.title}
                          </h3>

                          <p class="mte-card-text">
                            লেখক: ${book.author}
                          </p>

                          <button
                            class="mte-btn mte-btn-primary"
                            type="button"
                            onclick="mteOpenPdf('${book.pdf}','${book.title}')">
                            📖 বইটি পড়ুন
                          </button>

                        </article>

                      `;

                    })
                    .join("")

                : `

                  <div class="mte-empty-note">
                    বর্তমানে কোনো PDF বই যুক্ত করা হয়নি।
                  </div>

                `
            }

          </div>

        </div>

      </section>

    `,


/* =========================================================
   START: STUDENT ZONE ROUTE
   ========================================================= */

"student-zone": `

  <section class="taqwa-student-zone">

    <div class="taqwa-student-zone-inner">

      <!-- HEADER -->
      <div class="taqwa-student-zone-header">

        <span class="taqwa-student-zone-badge">
          🎓 শিক্ষার্থী জোন
        </span>

        <h1>
          পড়াশোনার প্রয়োজনীয় সবকিছু
        </h1>

        <p>
          শিক্ষার্থীদের রুটিন, সিলেবাস, ফলাফল ও প্রয়োজনীয়
          শিক্ষামূলক রিসোর্স এক জায়গায়।
        </p>

        <div class="taqwa-student-zone-arabic">
          رَبِّ زِدْنِي عِلْمًا
        </div>

      </div>


      <!-- STUDENT RESOURCES -->
      <div class="taqwa-student-zone-grid">


        <!-- ROUTINE -->
        <article class="taqwa-student-zone-card">

          <div class="taqwa-student-zone-card-icon">
            📅
          </div>

          <div class="taqwa-student-zone-card-content">

            <h3>
              রুটিন
            </h3>

            <p>
              প্রতিদিনের ক্লাস ও পড়াশোনার সময়সূচী দেখুন।
            </p>

            <a
              class="taqwa-student-zone-link"
              href="#routine"
              data-mte-route="routine">
              রুটিন দেখুন →
            </a>

          </div>

        </article>


        <!-- SYLLABUS -->
        <article class="taqwa-student-zone-card">

          <div class="taqwa-student-zone-card-icon">
            📚
          </div>

          <div class="taqwa-student-zone-card-content">

            <h3>
              সিলেবাস
            </h3>

            <p>
              বিষয়ভিত্তিক সিলেবাস ও পাঠ্যসূচী দেখুন।
            </p>

            <a
              class="taqwa-student-zone-link"
              href="#syllabus"
              data-mte-route="syllabus">
              সিলেবাস দেখুন →
            </a>

          </div>

        </article>


        <!-- RESULT -->
        <article class="taqwa-student-zone-card">

          <div class="taqwa-student-zone-card-icon">
            🏆
          </div>

          <div class="taqwa-student-zone-card-content">

            <h3>
              ফলাফল
            </h3>

            <p>
              পরীক্ষার ফলাফল ও শিক্ষার্থীদের অগ্রগতি দেখুন।
            </p>

            <a
              class="taqwa-student-zone-link"
              href="#results"
              data-mte-route="results">
              ফলাফল দেখুন →
            </a>

          </div>

        </article>


        <!-- HOMEWORK -->
        <article class="taqwa-student-zone-card">

          <div class="taqwa-student-zone-card-icon">
            📝
          </div>

          <div class="taqwa-student-zone-card-content">

            <h3>
              হোমওয়ার্ক
            </h3>

            <p>
              নিয়মিত হোমওয়ার্ক ও অ্যাসাইনমেন্টের তথ্য দেখুন।
            </p>

            <a
              class="taqwa-student-zone-link"
              href="#homework">
              হোমওয়ার্ক দেখুন →
            </a>

          </div>

        </article>


        <!-- LIBRARY -->
        <article class="taqwa-student-zone-card">

          <div class="taqwa-student-zone-card-icon">
            📖
          </div>

          <div class="taqwa-student-zone-card-content">

            <h3>
              PDF লাইব্রেরি
            </h3>

            <p>
              প্রয়োজনীয় বই, PDF ও শিক্ষামূলক উপকরণ পড়ুন।
            </p>

            <a
              class="taqwa-student-zone-link"
              href="#library"
              data-mte-route="library">
              লাইব্রেরি দেখুন →
            </a>

          </div>

        </article>


        <!-- NOTICE -->
        <article class="taqwa-student-zone-card">

          <div class="taqwa-student-zone-card-icon">
            📢
          </div>

          <div class="taqwa-student-zone-card-content">

            <h3>
              নোটিশ
            </h3>

            <p>
              ক্লাস, পরীক্ষা ও গুরুত্বপূর্ণ শিক্ষার্থী নোটিশ দেখুন।
            </p>

            <a
              class="taqwa-student-zone-link"
              href="#notices"
              data-mte-route="notices">
              নোটিশ দেখুন →
            </a>

          </div>

        </article>

      </div>


      <!-- STUDY TIPS -->
      <div class="taqwa-student-zone-tips">

        <div class="taqwa-student-zone-tips-icon">
          🌿
        </div>

        <div class="taqwa-student-zone-tips-content">

          <h2>
            ভালো শিক্ষার্থীর কিছু অভ্যাস
          </h2>

          <div class="taqwa-student-zone-tips-list">

            <span>✓ নিয়মিত পড়াশোনা</span>
            <span>✓ সময়ের সঠিক ব্যবহার</span>
            <span>✓ প্রতিদিনের পড়া প্রতিদিন শেখা</span>
            <span>✓ নিয়মিত পুনরাবৃত্তি</span>

          </div>

        </div>

      </div>


      <!-- MOTIVATION -->
      <div class="taqwa-student-zone-motivation">

        <div>
          وَقُلْ رَبِّ زِدْنِي عِلْمًا
        </div>

        <p>
          “হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।”
        </p>

      </div>


      <!-- BACK HOME -->
      <div class="taqwa-student-zone-back">

        <button
          class="mte-btn mte-btn-light mte-back"
          data-mte-route="home">
          ← হোমে ফিরে যান
        </button>

      </div>

    </div>

  </section>

`,

/* =========================================================
   END: STUDENT ZONE ROUTE
   ========================================================= */


   /* =========================================================
   START: SYLLABUS ROUTE
   ========================================================= */

syllabus: `

  <section class="taqwa-syllabus-page">

    <div class="taqwa-syllabus-container">


      <!-- HEADER -->
      <div class="taqwa-syllabus-header">

        <span class="taqwa-syllabus-badge">
          📚 শিক্ষা • পাঠ্যসূচী • প্রস্তুতি
        </span>

        <h1>
          সিলেবাস
        </h1>

        <p>
          শ্রেণি ও বিষয়ভিত্তিক পাঠ্যসূচী, গুরুত্বপূর্ণ অধ্যায়
          এবং পরীক্ষার প্রস্তুতির নির্দেশনা।
        </p>

        <div class="taqwa-syllabus-arabic">
          وَقُلْ رَبِّ زِدْنِي عِلْمًا
        </div>

      </div>


      <!-- CLASS SELECT -->
      <div class="taqwa-syllabus-section">

        <div class="taqwa-syllabus-section-title">
          <span>🎓</span>
          <h2>শ্রেণিভিত্তিক সিলেবাস</h2>
        </div>


        <div class="taqwa-syllabus-grid">


          <!-- CLASS ১ -->
          <article class="taqwa-syllabus-card">

            <div class="taqwa-syllabus-card-number">
              ০১
            </div>

            <div class="taqwa-syllabus-card-content">

              <h3>
                প্রাথমিক স্তর
              </h3>

              <p>
                প্রথমিক পর্যায়ের শিক্ষার্থীদের জন্য মৌলিক পাঠ্যসূচী।
              </p>

              <ul>
                <li>কুরআন শিক্ষা</li>
                <li>নূরানী কায়দা</li>
                <li>দোয়া ও মাসআলা</li>
                <li>ইসলামিক আদব</li>
              </ul>

            </div>

          </article>


          <!-- CLASS ২ -->
          <article class="taqwa-syllabus-card">

            <div class="taqwa-syllabus-card-number">
              ০২
            </div>

            <div class="taqwa-syllabus-card-content">

              <h3>
                মাধ্যমিক স্তর
              </h3>

              <p>
                নিয়মিত পাঠ ও বিষয়ভিত্তিক জ্ঞান অর্জনের সিলেবাস।
              </p>

              <ul>
                <li>কুরআন ও তাজবীদ</li>
                <li>হাদিস</li>
                <li>আকিদা ও ফিকহ</li>
                <li>ইসলামিক ইতিহাস</li>
              </ul>

            </div>

          </article>


          <!-- CLASS ৩ -->
          <article class="taqwa-syllabus-card">

            <div class="taqwa-syllabus-card-number">
              ০৩
            </div>

            <div class="taqwa-syllabus-card-content">

              <h3>
                উচ্চতর স্তর
              </h3>

              <p>
                উচ্চতর জ্ঞান ও বিষয়ভিত্তিক অধ্যয়নের জন্য পাঠ্যসূচী।
              </p>

              <ul>
                <li>উন্নত তাজবীদ</li>
                <li>হাদিস ও সুন্নাহ</li>
                <li>ফিকহ ও মাসআলা</li>
                <li>ইসলামিক স্টাডিজ</li>
              </ul>

            </div>

          </article>


        </div>

      </div>


      <!-- SUBJECTS -->
      <div class="taqwa-syllabus-section">

        <div class="taqwa-syllabus-section-title">
          <span>📖</span>
          <h2>গুরুত্বপূর্ণ বিষয়সমূহ</h2>
        </div>


        <div class="taqwa-syllabus-subject-grid">


          <div class="taqwa-syllabus-subject">
            <span>📖</span>
            <strong>কুরআন শিক্ষা</strong>
            <small>তিলাওয়াত ও অনুশীলন</small>
          </div>


          <div class="taqwa-syllabus-subject">
            <span>🎙️</span>
            <strong>তাজবীদ</strong>
            <small>শুদ্ধ উচ্চারণ ও নিয়ম</small>
          </div>


          <div class="taqwa-syllabus-subject">
            <span>🕌</span>
            <strong>আকিদা ও ফিকহ</strong>
            <small>মৌলিক ইসলামী জ্ঞান</small>
          </div>


          <div class="taqwa-syllabus-subject">
            <span>📜</span>
            <strong>হাদিস</strong>
            <small>নির্বাচিত হাদিস ও শিক্ষা</small>
          </div>


          <div class="taqwa-syllabus-subject">
            <span>🌙</span>
            <strong>দোয়া ও আমল</strong>
            <small>দৈনন্দিন প্রয়োজনীয় দোয়া</small>
          </div>


          <div class="taqwa-syllabus-subject">
            <span>🌿</span>
            <strong>আখলাক</strong>
            <small>নৈতিকতা ও সুন্দর চরিত্র</small>
          </div>


        </div>

      </div>


      <!-- STUDY PLAN -->
      <div class="taqwa-syllabus-study-plan">

        <div class="taqwa-syllabus-study-icon">
          📝
        </div>

        <div>

          <h2>
            সিলেবাস শেষ করার প্রস্তুতি
          </h2>

          <div class="taqwa-syllabus-study-list">

            <div>
              <b>০১</b>
              প্রতিদিনের পড়া প্রতিদিন শেষ করুন
            </div>

            <div>
              <b>০২</b>
              নিয়মিত পূর্বের পড়া পুনরাবৃত্তি করুন
            </div>

            <div>
              <b>০৩</b>
              গুরুত্বপূর্ণ বিষয় লিখে অনুশীলন করুন
            </div>

            <div>
              <b>০৪</b>
              পরীক্ষার আগে পূর্ণাঙ্গ রিভিশন দিন
            </div>

          </div>

        </div>

      </div>


      <!-- PDF -->
      <div class="taqwa-syllabus-pdf">

        <div class="taqwa-syllabus-pdf-icon">
          📄
        </div>

        <div class="taqwa-syllabus-pdf-content">

          <h2>
            বিস্তারিত সিলেবাস
          </h2>

          <p>
            পূর্ণাঙ্গ সিলেবাস PDF আকারে যুক্ত করা যাবে।
          </p>

          <button
            class="mte-btn mte-btn-primary"
            onclick="mteOpenPdf(MTE_CONFIG.pdfDemo, 'সিলেবাস')">
            📖 সিলেবাস পড়ুন
          </button>

        </div>

      </div>


      <!-- MOTIVATION -->
      <div class="taqwa-syllabus-motivation">

        <div>
          رَبِّ زِدْنِي عِلْمًا
        </div>

        <p>
          জ্ঞান অর্জনের পথে নিয়মিত অধ্যয়ন ও পরিশ্রমই সফলতার ভিত্তি।
        </p>

      </div>


      <!-- BACK -->
      <div class="taqwa-syllabus-back">

        <button
          class="mte-btn mte-btn-light mte-back"
          data-mte-route="home">
          ← হোমে ফিরে যান
        </button>

      </div>


    </div>

  </section>

`,

/* =========================================================
   END: SYLLABUS ROUTE
   ========================================================= */

/* =========================================================
   START: ROUTINE ROUTE
   ========================================================= */

routine: `

  <section class="taqwa-routine-page">

    <div class="taqwa-routine-container">


      <!-- HEADER -->
      <div class="taqwa-routine-header">

        <span class="taqwa-routine-badge">
          📅 শিক্ষা • সময়সূচী • নিয়মিততা
        </span>

        <h1>
          ক্লাস রুটিন
        </h1>

        <p>
          নিয়মিত ক্লাস ও পড়াশোনার জন্য সাপ্তাহিক সময়সূচী।
        </p>

        <div class="taqwa-routine-arabic">
          وَالْعَصْرِ
        </div>

      </div>


      <!-- ROUTINE TABLE -->
      <div class="taqwa-routine-box">

        <div class="taqwa-routine-box-title">
          <span>🗓️</span>
          <h2>সাপ্তাহিক ক্লাস রুটিন</h2>
        </div>


        <div class="taqwa-routine-table-wrap">

          <table class="taqwa-routine-table">

            <thead>

              <tr>
                <th>দিন</th>
                <th>বিষয়</th>
                <th>সময়</th>
                <th>ক্লাস</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>শনিবার</td>
                <td>📖 কুরআন শিক্ষা</td>
                <td>সন্ধ্যা ৭:০০ – ৮:০০</td>
                <td>সকল শিক্ষার্থী</td>
              </tr>

              <tr>
                <td>রবিবার</td>
                <td>🎙️ তাজবীদ</td>
                <td>সন্ধ্যা ৭:০০ – ৮:০০</td>
                <td>সকল শিক্ষার্থী</td>
              </tr>

              <tr>
                <td>সোমবার</td>
                <td>📗 হিফজুল কুরআন</td>
                <td>সন্ধ্যা ৭:০০ – ৮:০০</td>
                <td>হিফজ শিক্ষার্থী</td>
              </tr>

              <tr>
                <td>মঙ্গলবার</td>
                <td>🕌 ইসলামিক স্টাডিজ</td>
                <td>সন্ধ্যা ৭:০০ – ৮:০০</td>
                <td>সকল শিক্ষার্থী</td>
              </tr>

              <tr>
                <td>বুধবার</td>
                <td>📜 হাদিস ও সুন্নাহ</td>
                <td>সন্ধ্যা ৭:০০ – ৮:০০</td>
                <td>নির্ধারিত ব্যাচ</td>
              </tr>

              <tr>
                <td>বৃহস্পতিবার</td>
                <td>📝 অনুশীলন ও পুনরাবৃত্তি</td>
                <td>সন্ধ্যা ৭:০০ – ৮:০০</td>
                <td>সকল শিক্ষার্থী</td>
              </tr>

              <tr>
                <td>শুক্রবার</td>
                <td>🌿 সাপ্তাহিক রিভিশন</td>
                <td>বিকাল ৪:০০ – ৫:০০</td>
                <td>সকল শিক্ষার্থী</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>


      <!-- DAILY STUDY -->
      <div class="taqwa-routine-section">

        <div class="taqwa-routine-section-title">

          <span>📚</span>

          <h2>
            দৈনিক পড়াশোনার সময়সূচী
          </h2>

        </div>


        <div class="taqwa-routine-daily-grid">


          <div class="taqwa-routine-daily-card">

            <span>🌅</span>

            <h3>
              ফজরের পর
            </h3>

            <p>
              কুরআন তিলাওয়াত ও পূর্বের পড়া পুনরাবৃত্তি।
            </p>

          </div>


          <div class="taqwa-routine-daily-card">

            <span>☀️</span>

            <h3>
              সকাল
            </h3>

            <p>
              নতুন পাঠ শেখা ও গুরুত্বপূর্ণ বিষয় অনুশীলন।
            </p>

          </div>


          <div class="taqwa-routine-daily-card">

            <span>🌇</span>

            <h3>
              আসরের পর
            </h3>

            <p>
              হোমওয়ার্ক ও দিনের পড়া প্রস্তুত করা।
            </p>

          </div>


          <div class="taqwa-routine-daily-card">

            <span>🌙</span>

            <h3>
              এশার পর
            </h3>

            <p>
              দিনের পড়া রিভিশন ও পরবর্তী দিনের প্রস্তুতি।
            </p>

          </div>


        </div>

      </div>


      <!-- IMPORTANT RULES -->
      <div class="taqwa-routine-rules">

        <div class="taqwa-routine-rules-icon">
          🌿
        </div>

        <div>

          <h2>
            রুটিন অনুসরণের কিছু পরামর্শ
          </h2>

          <ul>

            <li>
              নির্ধারিত সময়ে ক্লাসে উপস্থিত হওয়ার চেষ্টা করুন।
            </li>

            <li>
              ক্লাসের আগে প্রয়োজনীয় বই ও নোট প্রস্তুত রাখুন।
            </li>

            <li>
              ক্লাস শেষে শেখা বিষয় পুনরায় অনুশীলন করুন।
            </li>

            <li>
              কোনো বিষয় বুঝতে সমস্যা হলে শিক্ষককে জিজ্ঞাসা করুন।
            </li>

            <li>
              নিয়মিততা বজায় রাখুন এবং পড়াশোনায় ধারাবাহিক থাকুন।
            </li>

          </ul>

        </div>

      </div>


      <!-- NOTE -->
      <div class="taqwa-routine-note">

        <strong>
          📌 গুরুত্বপূর্ণ নোট
        </strong>

        <p>
          উপরের সময়সূচীটি বর্তমানে ডেমো হিসেবে দেওয়া হয়েছে।
          প্রয়োজন অনুযায়ী আপনার প্রকৃত ক্লাসের দিন, সময়,
          বিষয় ও ব্যাচের তথ্য এখানে পরিবর্তন করতে পারবেন।
        </p>

      </div>


      <!-- MOTIVATION -->
      <div class="taqwa-routine-motivation">

        <div>
          وَقُلْ رَبِّ زِدْنِي عِلْمًا
        </div>

        <p>
          নিয়মিত পড়াশোনা ও সময়ের সঠিক ব্যবহার একজন শিক্ষার্থীর
          জ্ঞান অর্জনের পথকে সহজ করে।
        </p>

      </div>


      <!-- BACK -->
      <div class="taqwa-routine-back">

        <button
          class="mte-btn mte-btn-light mte-back"
          data-mte-route="home">
          ← হোমে ফিরে যান
        </button>

      </div>


    </div>

  </section>

`,

/* =========================================================
   END: ROUTINE ROUTE
   ========================================================= */


/* =========================================================
   START: RESULTS ROUTE
   ========================================================= */

results: `

  <section class="taqwa-results-page">

    <div class="taqwa-results-container">


      <!-- HEADER -->
      <div class="taqwa-results-header">

        <span class="taqwa-results-badge">
          🏆 শিক্ষা • মূল্যায়ন • অগ্রগতি
        </span>

        <h1>
          পরীক্ষার ফলাফল
        </h1>

        <p>
          শিক্ষার্থীদের বিষয়ভিত্তিক নম্বর, মোট নম্বর,
          গড় ও ফলাফল এখানে দেখা যাবে।
        </p>

        <div class="taqwa-results-arabic">
          وَقُلْ رَبِّ زِدْنِي عِلْمًا
        </div>

      </div>


      <!-- RESULT SEARCH -->
      <div class="taqwa-results-search">

        <div class="taqwa-results-search-title">
          🔎 ফলাফল খুঁজুন
        </div>

        <div class="taqwa-results-search-fields">

          <div class="taqwa-results-field">

            <label>
              শিক্ষাবর্ষ
            </label>

            <select id="taqwa-result-year">

              <option value="">
                শিক্ষাবর্ষ নির্বাচন করুন
              </option>

              <option value="2026">
                ২০২৬
              </option>

              <option value="2025">
                ২০২৫
              </option>

              <option value="2024">
                ২০২৪
              </option>

            </select>

          </div>


          <div class="taqwa-results-field">

            <label>
              শ্রেণি
            </label>

            <select id="taqwa-result-class">

              <option value="">
                শ্রেণি নির্বাচন করুন
              </option>

              <option value="১ম">
                ১ম
              </option>

              <option value="২য়">
                ২য়
              </option>

              <option value="৩য়">
                ৩য়
              </option>

              <option value="৪র্থ">
                ৪র্থ
              </option>

              <option value="৫ম">
                ৫ম
              </option>

            </select>

          </div>


          <div class="taqwa-results-field">

            <label>
              রোল নম্বর
            </label>

            <input
              type="text"
              id="taqwa-result-roll"
              placeholder="রোল নম্বর লিখুন">

          </div>


          <button
            type="button"
            class="taqwa-results-search-btn"
            onclick="taqwaShowResult()">

            ফলাফল দেখুন

          </button>

        </div>

      </div>


      <!-- RESULT CARD -->
      <div
        id="taqwa-result-display"
        class="taqwa-result-display">


        <div class="taqwa-result-student-header">

          <div>

            <span>
              শিক্ষার্থীর ফলাফল
            </span>

            <h2>
              মোঃ আব্দুল্লাহ
            </h2>

          </div>

          <div class="taqwa-result-pass">
            PASS
          </div>

        </div>


        <!-- STUDENT INFO -->
        <div class="taqwa-result-info">

          <div>
            <span>শিক্ষাবর্ষ</span>
            <strong>২০২৬</strong>
          </div>

          <div>
            <span>শ্রেণি</span>
            <strong>৩য়</strong>
          </div>

          <div>
            <span>রোল</span>
            <strong>০১</strong>
          </div>

          <div>
            <span>পরীক্ষা</span>
            <strong>বার্ষিক পরীক্ষা</strong>
          </div>

        </div>


        <!-- MARKS -->
        <div class="taqwa-result-table-wrap">

          <table class="taqwa-result-table">

            <thead>

              <tr>

                <th>
                  বিষয়
                </th>

                <th>
                  পূর্ণমান
                </th>

                <th>
                  প্রাপ্ত নম্বর
                </th>

                <th>
                  গ্রেড
                </th>

              </tr>

            </thead>


            <tbody>

              <tr>
                <td>📖 কুরআন শিক্ষা</td>
                <td>১০০</td>
                <td>৮৫</td>
                <td>A+</td>
              </tr>

              <tr>
                <td>🎙️ তাজবীদ</td>
                <td>১০০</td>
                <td>৮০</td>
                <td>A+</td>
              </tr>

              <tr>
                <td>🕌 আকিদা ও ফিকহ</td>
                <td>১০০</td>
                <td>৭৮</td>
                <td>A</td>
              </tr>

              <tr>
                <td>📜 হাদিস</td>
                <td>১০০</td>
                <td>৮২</td>
                <td>A+</td>
              </tr>

              <tr>
                <td>🌿 আখলাক</td>
                <td>১০০</td>
                <td>৮৮</td>
                <td>A+</td>
              </tr>

            </tbody>

          </table>

        </div>


        <!-- SUMMARY -->
        <div class="taqwa-result-summary">

          <div>
            <span>মোট নম্বর</span>
            <strong>৪১৩ / ৫০০</strong>
          </div>

          <div>
            <span>গড়</span>
            <strong>৮২.৬%</strong>
          </div>

          <div>
            <span>গ্রেড</span>
            <strong>A+</strong>
          </div>

          <div>
            <span>ফলাফল</span>
            <strong class="taqwa-result-success">
              উত্তীর্ণ
            </strong>
          </div>

        </div>


        <!-- REMARK -->
        <div class="taqwa-result-remark">

          <strong>
            📝 মন্তব্য
          </strong>

          <p>
            শিক্ষার্থী নিয়মিত পড়াশোনা ও অনুশীলনের মাধ্যমে
            ভালো ফলাফল করেছে। ধারাবাহিকতা বজায় রাখার পরামর্শ দেওয়া হলো।
          </p>

        </div>


        <!-- PRINT -->
        <div class="taqwa-result-actions">

          <button
            type="button"
            class="taqwa-result-print-btn"
            onclick="window.print()">

            🖨️ ফলাফল প্রিন্ট করুন

          </button>

        </div>


      </div>


      <!-- NOTICE -->
      <div class="taqwa-results-note">

        <strong>
          📌 গুরুত্বপূর্ণ নোট
        </strong>

        <p>
          উপরের ফলাফলটি ডেমো হিসেবে দেওয়া হয়েছে।
          প্রকৃত শিক্ষার্থীদের ফলাফল যুক্ত করার জন্য
          পরবর্তীতে আপনার প্রয়োজন অনুযায়ী ডাটাবেজ বা
          WordPress ভিত্তিক ফলাফল ব্যবস্থা যুক্ত করা যাবে।
        </p>

      </div>


      <!-- MOTIVATION -->
      <div class="taqwa-results-motivation">

        <div>
          رَبِّ زِدْنِي عِلْمًا
        </div>

        <p>
          ফলাফল একটি ধাপ; নিয়মিত শিক্ষা, চরিত্র ও আমলের উন্নতিই
          একজন শিক্ষার্থীর প্রকৃত অগ্রগতি।
        </p>

      </div>


      <!-- BACK -->
      <div class="taqwa-results-back">

        <button
          class="mte-btn mte-btn-light mte-back"
          data-mte-route="home">

          ← হোমে ফিরে যান

        </button>

      </div>


    </div>

  </section>

`,

/* =========================================================
   END: RESULTS ROUTE
   ========================================================= */




    notices: `

      <section class="mte-section">

        <div class="mte-container">

          <div class="mte-notice">

            <strong>
              নতুন ক্লাস নোট প্রকাশিত হয়েছে
            </strong>

            <small>
              ডেমো নোটিশ
            </small>

          </div>


          <div class="mte-notice">

            <strong>
              কোর্সে ভর্তি চলছে
            </strong>

            <small>
              ডেমো নোটিশ
            </small>

          </div>


          <div class="mte-notice">

            <strong>
              পরীক্ষার রুটিন শীঘ্রই
            </strong>

            <small>
              ডেমো নোটিশ
            </small>

          </div>

        </div>

      </section>

    `,


    videos: `

      <section class="mte-section">

        <div class="mte-container">

          <div class="mte-grid">

            <article class="mte-card">

              <div class="mte-video">

                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="ডেমো ভিডিও"
                  allowfullscreen>
                </iframe>

              </div>

              <h3 class="mte-card-title">
                ডেমো ভিডিও ক্লাস
              </h3>

            </article>

          </div>

        </div>

      </section>

    `,

/* =========================================================
   START: TAQWA BLOG PAGE
   Route name: blog
   ========================================================= */

blog: `

  <section class="taqwa-blog">

    <div class="taqwa-blog-inner">

      <!-- PAGE HEADER -->
      <div class="taqwa-blog-header">

        <span class="taqwa-blog-badge">
          🖊️ জ্ঞান • শিক্ষা • চিন্তা
        </span>

        <h1>
          ইসলামিক ব্লগ
        </h1>

        <p>
          কুরআন, হাদিস, ইসলামিক শিক্ষা, শিক্ষার্থীদের পড়াশোনা
          এবং জীবনঘনিষ্ঠ বিভিন্ন বিষয়ে নিয়মিত লেখা ও শিক্ষামূলক
          আলোচনা।
        </p>

        <div class="taqwa-blog-arabic">
          وَقُلْ رَبِّ زِدْنِي عِلْمًا
        </div>

      </div>


      <!-- BLOG GRID -->
      <div class="taqwa-blog-grid">


        <!-- BLOG 01 -->
        <article class="taqwa-blog-card">

          <div class="taqwa-blog-card-icon">
            🖊️
          </div>

          <div class="taqwa-blog-card-body">

            <span class="taqwa-blog-category">
              📖 কুরআন শিক্ষা
            </span>

            <h2>
              কুরআন শিক্ষার গুরুত্ব
            </h2>

            <p>
              একজন মুসলিমের জীবনে কুরআন শিক্ষার গুরুত্ব অপরিসীম।
              কুরআন শুধু তিলাওয়াতের জন্য নয়; বরং জীবনের প্রতিটি
              ক্ষেত্রে সঠিক পথনির্দেশ পাওয়ার জন্য কুরআনকে বুঝে
              শেখা ও আমল করা প্রয়োজন।
            </p>

            <div class="taqwa-blog-meta">
              <span>📅 ইসলামিক শিক্ষা</span>
              <span>📚 কুরআন</span>
            </div>

            <button
              class="taqwa-blog-read"
              type="button"
              onclick="alert('এই ব্লগ পোস্টটি শীঘ্রই প্রকাশ করা হবে।')"
            >
              বিস্তারিত পড়ুন →
            </button>

          </div>

        </article>


        <!-- BLOG 02 -->
        <article class="taqwa-blog-card">

          <div class="taqwa-blog-card-icon">
            📚
          </div>

          <div class="taqwa-blog-card-body">

            <span class="taqwa-blog-category">
              🎓 শিক্ষার্থী
            </span>

            <h2>
              শিক্ষার্থীদের পড়াশোনায় নিয়মিততার গুরুত্ব
            </h2>

            <p>
              সফল শিক্ষাজীবনের জন্য নিয়মিত পড়াশোনা, সময়ের সঠিক
              ব্যবহার এবং প্রতিদিনের পড়া প্রতিদিন শেখার অভ্যাস
              অত্যন্ত গুরুত্বপূর্ণ। ছোট ছোট নিয়মিত প্রচেষ্টাই
              বড় সফলতার ভিত্তি তৈরি করে।
            </p>

            <div class="taqwa-blog-meta">
              <span>📅 শিক্ষার্থী জীবন</span>
              <span>🌿 অধ্যবসায়</span>
            </div>

            <button
              class="taqwa-blog-read"
              type="button"
              onclick="alert('এই ব্লগ পোস্টটি শীঘ্রই প্রকাশ করা হবে।')"
            >
              বিস্তারিত পড়ুন →
            </button>

          </div>

        </article>


        <!-- BLOG 03 -->
        <article class="taqwa-blog-card">

          <div class="taqwa-blog-card-icon">
            🕌
          </div>

          <div class="taqwa-blog-card-body">

            <span class="taqwa-blog-category">
              🌿 ইসলামিক জীবন
            </span>

            <h2>
              একজন শিক্ষার্থীর সুন্দর চরিত্র
            </h2>

            <p>
              জ্ঞান অর্জনের পাশাপাশি একজন শিক্ষার্থীর চরিত্র,
              আখলাক ও নৈতিকতা গঠন করাও অত্যন্ত প্রয়োজন। ভালো
              আচরণ, সত্যবাদিতা, আমানতদারি ও বড়দের সম্মান একজন
              শিক্ষার্থীর জীবনের গুরুত্বপূর্ণ গুণ।
            </p>

            <div class="taqwa-blog-meta">
              <span>📖 আখলাক</span>
              <span>🌱 নৈতিকতা</span>
            </div>

            <button
              class="taqwa-blog-read"
              type="button"
              onclick="alert('এই ব্লগ পোস্টটি শীঘ্রই প্রকাশ করা হবে।')"
            >
              বিস্তারিত পড়ুন →
            </button>

          </div>

        </article>


        <!-- BLOG 04 -->
        <article class="taqwa-blog-card">

          <div class="taqwa-blog-card-icon">
            📖
          </div>

          <div class="taqwa-blog-card-body">

            <span class="taqwa-blog-category">
              🎙️ তাজবীদ
            </span>

            <h2>
              শুদ্ধভাবে কুরআন তিলাওয়াত কেন জরুরি
            </h2>

            <p>
              কুরআন মাজীদ সঠিক উচ্চারণ ও নিয়ম মেনে তিলাওয়াত করা
              অত্যন্ত গুরুত্বপূর্ণ। তাজবীদের মৌলিক নিয়মগুলো
              শেখার মাধ্যমে শিক্ষার্থীরা সুন্দর ও শুদ্ধভাবে
              কুরআন তিলাওয়াতের অভ্যাস গড়ে তুলতে পারে।
            </p>

            <div class="taqwa-blog-meta">
              <span>📚 তাজবীদ</span>
              <span>🕋 তিলাওয়াত</span>
            </div>

            <button
              class="taqwa-blog-read"
              type="button"
              onclick="alert('এই ব্লগ পোস্টটি শীঘ্রই প্রকাশ করা হবে।')"
            >
              বিস্তারিত পড়ুন →
            </button>

          </div>

        </article>


        <!-- BLOG 05 -->
        <article class="taqwa-blog-card">

          <div class="taqwa-blog-card-icon">
            🌙
          </div>

          <div class="taqwa-blog-card-body">

            <span class="taqwa-blog-category">
              🤲 আমল ও দোয়া
            </span>

            <h2>
              প্রতিদিনের ছোট ছোট আমল
            </h2>

            <p>
              একজন মুসলিমের দৈনন্দিন জীবনে ছোট ছোট নেক আমলের
              গুরুত্ব অনেক। নিয়মিত দোয়া, যিকির, কুরআন তিলাওয়াত
              এবং ভালো কাজের মাধ্যমে জীবনকে সুন্দর ও অর্থবহ
              করে তোলা সম্ভব।
            </p>

            <div class="taqwa-blog-meta">
              <span>🤲 দোয়া</span>
              <span>🌙 আমল</span>
            </div>

            <button
              class="taqwa-blog-read"
              type="button"
              onclick="alert('এই ব্লগ পোস্টটি শীঘ্রই প্রকাশ করা হবে।')"
            >
              বিস্তারিত পড়ুন →
            </button>

          </div>

        </article>


        <!-- BLOG 06 -->
        <article class="taqwa-blog-card">

          <div class="taqwa-blog-card-icon">
            💡
          </div>

          <div class="taqwa-blog-card-body">

            <span class="taqwa-blog-category">
              🎓 পড়াশোনা
            </span>

            <h2>
              পরীক্ষার প্রস্তুতি কীভাবে নেবেন
            </h2>

            <p>
              পরীক্ষার ভালো প্রস্তুতির জন্য শেষ মুহূর্তের চাপের
              পরিবর্তে নিয়মিত পড়াশোনা, পুনরাবৃত্তি, গুরুত্বপূর্ণ
              বিষয় নোট করা এবং সময় ভাগ করে পড়ার অভ্যাস তৈরি করা
              প্রয়োজন।
            </p>

            <div class="taqwa-blog-meta">
              <span>📝 পরীক্ষা</span>
              <span>📚 প্রস্তুতি</span>
            </div>

            <button
              class="taqwa-blog-read"
              type="button"
              onclick="alert('এই ব্লগ পোস্টটি শীঘ্রই প্রকাশ করা হবে।')"
            >
              বিস্তারিত পড়ুন →
            </button>

          </div>

        </article>

      </div>


      <!-- BLOG MESSAGE -->
      <div class="taqwa-blog-message">

        <div class="taqwa-blog-message-icon">
          🌿
        </div>

        <div>
          <h2>
            জ্ঞান অর্জন করুন, আমল করুন
          </h2>

          <p>
            উপকারী জ্ঞান মানুষের জীবনকে আলোকিত করে।
            তাই জ্ঞান অর্জনের পাশাপাশি অর্জিত জ্ঞান অনুযায়ী
            আমল করার চেষ্টা করা উচিত।
          </p>
        </div>

      </div>


      <!-- ARABIC QUOTE -->
      <div class="taqwa-blog-quote">

        <div>
          رَبِّ زِدْنِي عِلْمًا
        </div>

        <p>
          “হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।”
        </p>

      </div>


      <!-- BACK BUTTON -->
      <div class="taqwa-blog-back">

        <button
          class="mte-btn mte-btn-light mte-back"
          data-mte-route="home"
        >
          ← হোমে ফিরে যান
        </button>

      </div>

    </div>

  </section>

`,

/* =========================================================
   END: TAQWA BLOG PAGE
   ========================================================= */

/* =========================================================
   START: JUMUAH 1ST KHUTBAH
   জুমার প্রথম খুৎবা
   Route: jumuah-khutbah
   ========================================================= */

"jumuah-khutbah": `

<section class="mte-jumuah-khutbah-page">

  <div class="mte-jumuah-khutbah-card">

    <div class="mte-jumuah-khutbah-icon">
      🕌
    </div>

    <h2>জুমার প্রথম খুৎবা</h2>

    <p class="mte-jumuah-khutbah-intro">
      Jumar 1st Khutbah – জুমার প্রথম খুৎবা
    </p>


    <!-- =========================================
         জুমআর প্রথম খুৎবা — আরবি
         ========================================= -->

    <div class="mte-jumuah-content-section">

      <div class="mte-jumuah-section-title">
        <span>🕌</span>
        <h3>জুমআর খুৎবা আরবি</h3>
      </div>

      <div class="mte-jumuah-arabic">

        <p>
          الحمد لله الذي امتن علي عباده بنبيه المرسل
          صلى الله عليه وسلم وكتابه المنزل، حتى اتسع على
          اهل الافكار طريق الاعتبار بما فيه من القصص والاخبار
          وتضح به سلوك المنهج القويم والصراط المستقيم
          بما فصل فيه من الاحكام، وفرق بين الحلال والحرام،
          ونشهد ان لا اله الا الله وحده لا شريك له،
          ونشهد ان سيدنا ومولانا محمدا عبده ورسوله،
          الذي نزل الفرقان عليه ليكون للعالمين نذيرا،
          صلى الله عليه وسلم وعلى اله واصحابه الذين تذكروا
          بالقران، وذكروا به الناس تذكيرا
        </p>

        <p>
          اما بعد فقد قال رسول الله صلى الله عليه وسلم:
          خيركم من تعلم القران وعلمه
        </p>

        <p>
          وقال عليه الصلاة والسلام:
          يقال لصاحب القران اقرأ وارتق ورتل كما كنت ترتل
          في الدنيا فان منزلتك عند اخر اية تقرؤها
        </p>

        <p>
          وقال عليه الصلاة والسلام:
          ان الذي ليس في جوفه شيء من القران كالبيت الخرب
        </p>

        <p>
          وقال عليه الصلاة والسلام:
          من قرأ حرفا من كتاب الله تعالى فله حسنة
          والحسنة بعشر امثالها
        </p>

        <p>
          وقال عليه الصلاة والسلام:
          من قرأ القران فاستظهره فأحل حلاله وحرم حرامه
          ادخله الله الجنة وشفاعه في عشرة من اهل بيته
          كلهم قد وجبت له النار
        </p>

        <p>
          اعوذ بالله من الشيطان الرجيم
        </p>

        <p>
          فلا اقسم بمواقع النجوم
          وانه لقسم لو تعلمون عظيم
          انه لقران كريم
          في كتاب مكنون
          لا يمسه الا المطهرون
        </p>

      </div>

    </div>


    <!-- =========================================
         কুরআনের আয়াত আলাদা করে
         ========================================= -->

    <div class="mte-jumuah-quran-box">

      <div class="mte-jumuah-quran-label">
        📖 কুরআনের আয়াত
      </div>

      <div class="mte-jumuah-quran-text">

        <p>
          فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ
        </p>

        <p>
          وَإِنَّهُ لَقَسَمٌ لَوْ تَعْلَمُونَ عَظِيمٌ
        </p>

        <p>
          إِنَّهُ لَقُرْآنٌ كَرِيمٌ
        </p>

        <p>
          فِي كِتَابٍ مَكْنُونٍ
        </p>

        <p>
          لَا يَمَسُّهُ إِلَّا الْمُطَهَّرُونَ
        </p>

      </div>

    </div>

  </div>

<!-- =========================================
     জুমার ২য় খুৎবা
     ========================================= -->

<div class="mte-jumuah-second-section">

  <div class="mte-jumuah-second-title">

    <span>🕌</span>

    <div>
      <h3>জুমার ২য় খুৎবা</h3>

      <p>
        الخطبة الأخيرة لجميع خطب الرسالة
      </p>

      <small>
        জুমা, বিবাহ এবং দুই ঈদে এই সানি খুৎবা পড়তে পারেন
      </small>
    </div>

  </div>


  <div class="mte-jumuah-second-arabic">

    <p>
      الْحَمْدُ لِلَّهِ نَسْتَعِينُهُ وَنَسْتَغْفِرُهُ
      وَنَعُوذُ بِاللَّهِ مِنْ شُرُورِ أَنْفُسِنَا
      مَنْ يَهْدِ اللَّهُ فَلَا مُضِلَّ لَهُ
      وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ
      وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ
      وَحْدَهُ لَا شَرِيكَ لَهُ
      وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ
    </p>

    <p>
      أَرْسَلَهُ بِالْحَقِّ بَشِيرًا وَنَذِيرًا
      بَيْنَ يَدَيِ السَّاعَةِ
      مَنْ يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ رَشَدَ
      وَمَنْ يَعْصِهِمَا فَإِنَّهُ لَا يَضُرُّ إِلَّا نَفْسَهُ
      وَلَا يَضُرُّ اللَّهَ شَيْئًا
    </p>

    <p>
      أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ
    </p>

    <p>
      إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ
      يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ
      وَسَلِّمُوا تَسْلِيمًا
    </p>

    <p>
      اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ عَبْدِكَ وَرَسُولِكَ
      وَصَلِّ عَلَى الْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ
      وَالْمُسْلِمِينَ وَالْمُسْلِمَاتِ
      وَبَارِكْ عَلَى مُحَمَّدٍ وَأَزْوَاجِهِ وَذُرِّيَّتِهِ
    </p>

    <p>
      قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ:
      أَرْحَمُ أُمَّتِي بِأُمَّتِي أَبُو بَكْرٍ
      وَأَشَدُّهُمْ فِي أَمْرِ اللَّهِ عُمَرُ
      وَأَصْدَقُهُمْ حَيَاءً عُثْمَانُ
      وَأَقْضَاهُمْ عَلِيٌّ
    </p>

    <p>
      وَفَاطِمَةُ سَيِّدَةُ نِسَاءِ أَهْلِ الْجَنَّةِ
      وَالْحَسَنُ وَالْحُسَيْنُ سَيِّدَا شَبَابِ أَهْلِ الْجَنَّةِ
      وَحَمْزَةُ أَسَدُ اللَّهِ وَأَسَدُ رَسُولِهِ
    </p>

    <p>
      اللَّهُمَّ اغْفِرْ لِلْعَبَّاسِ وَوَلَدِهِ
      مَغْفِرَةً ظَاهِرَةً وَبَاطِنَةً
      لَا تُغَادِرُ ذَنْبًا
    </p>

    <p>
      اللَّهَ اللَّهَ فِي أَصْحَابِي
      لَا تَتَّخِذُوهُمْ غَرَضًا مِنْ بَعْدِي
      فَمَنْ أَحَبَّهُمْ فَبِحُبِّي أَحَبَّهُمْ
      وَمَنْ أَبْغَضَهُمْ فَبِبُغْضِي أَبْغَضَهُمْ
    </p>

    <p>
      وَخَيْرُ أُمَّتِي قَرْنِي
      ثُمَّ الَّذِينَ يَلُونَهُمْ
      ثُمَّ الَّذِينَ يَلُونَهُمْ
    </p>

    <p>
      وَالسُّلْطَانُ ظِلُّ اللَّهِ فِي الْأَرْضِ
      مَنْ أَهَانَ سُلْطَانَ اللَّهِ فِي الْأَرْضِ
      أَهَانَهُ اللَّهُ
    </p>

    <p>
      إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ
      وَإِيتَاءِ ذِي الْقُرْبَى
      وَيَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَالْبَغْيِ
      يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُونَ
    </p>

    <p>
      فَاذْكُرُونِي أَذْكُرْكُمْ
      وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ
    </p>

  </div>

</div>

</section>

`,

/* =========================================================
   END: JUMUAH 1ST KHUTBAH
   ========================================================= */
   


/* =========================================================
   START: NIKAH-KHUTBAH PAGE
   Route: nikah-khutbah
   ========================================================= */

"nikah-khutbah": `

<section class="mte-nikah-khutbah-page">

  <div class="mte-nikah-khutbah-card">

    <div class="mte-nikah-khutbah-icon">
      💍
    </div>

    <h2>বিবাহের খুতবাহ</h2>

    <p class="mte-nikah-khutbah-intro">
      অর্থ ও উচ্চারণসহ বিয়ের সংক্ষিপ্ত খুতবা
    </p>

    <!-- ভূমিকা -->
    <div class="mte-nikah-info-box">

      <p>
        বিয়ে সামাজিক বন্ধন, অনন্য ইবাদত। বিয়ের আকদ বা মূল অনুষ্ঠানের
        অন্যতম গুরুত্বপূর্ণ সুন্নত হলো বিয়ের খুতবা পাঠ করা।
        বর ও কনের ইজাব-কবুলের ঠিক আগে আল্লাহর প্রশংসা ও কুরআনের
        আয়াত-সংবলিত এই খুতবা পাঠের মাধ্যমে একটি নতুন জীবনের
        বরকতময় সূচনা হয়।
      </p>

      <p>
        অনেকেই না জানার কারণে বিয়েতে এই খুতবা পড়েন না।
        তাই এখানে অর্থ ও উচ্চারণসহ সংক্ষিপ্ত একটি বিয়ের খুতবা
        সুন্দরভাবে তুলে ধরা হলো।
      </p>

    </div>


    <!-- =========================
         বিয়ের খুতবা আরবি
         ========================= -->

    <div class="mte-nikah-content-section">

      <div class="mte-nikah-section-title">
        <span>🕋</span>
        <h3>বিয়ের খুতবা আরবি</h3>
      </div>

      <div class="mte-nikah-arabic">

        <p>
          إِنَّ الْحَمْدَ لِلَّهِ نَحْمَدُهُ وَنَسْتَعِينُهُ
          وَنَسْتَغْفِرُهُ وَنُؤْمِنُ بِهِ وَنَتَوَكَّلُ عَلَيْهِ،
          وَنَعُوذُ بِاللَّهِ مِنْ شُرُورِ أَنْفُسِنَا
          وَمِنْ سَيِّئَاتِ أَعْمَالِنَا، مَنْ يَهْدِهِ اللَّهُ
          فَلَا مُضِلَّ لَهُ، وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ،
          وَأَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ
          لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ سَيِّدَنَا وَمَوْلَانَا
          مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، الَّذِي أُرْسِلَ إِلَى
          النَّاسِ كَافَّةً بَشِيرًا وَنَذِيرًا، وَدَاعِيًا إِلَى
          اللَّهِ بِإِذْنِهِ سِرَاجًا وَقَمَرًا مُنِيرًا،
          أَمَّا بَعْدُ فَأَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ
          الرَّجِيمِ، بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
        </p>

        <p>
          يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ
          حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ
          مُسْلِمُونَ
        </p>

        <p>
          وَقَالَ تَعَالَى: يَا أَيُّهَا النَّاسُ اتَّقُوا
          رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ،
          وَخَلَقَ مِنْهَا زَوْجَهَا، وَبَثَّ مِنْهُمَا رِجَالًا
          كَثِيرًا وَنِسَاءً، وَاتَّقُوا اللَّهَ الَّذِي
          تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ، إِنَّ اللَّهَ
          كَانَ عَلَيْكُمْ رَقِيبًا
        </p>

        <p>
          وَقَالَ تَعَالَى: يَا أَيُّهَا الَّذِينَ آمَنُوا
          اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا،
          يُصْلِحْ لَكُمْ أَعْمَالَكُمْ، وَيَغْفِرْ لَكُمْ
          ذُنُوبَكُمْ، وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ
          فَقَدْ فَازَ فَوْزًا عَظِيمًا
        </p>

        <p>
          وَقَالَ رَسُولُ اللَّهِ ﷺ: إِذَا تَزَوَّجَ الْعَبْدُ
          فَقَدِ اسْتَكْمَلَ نِصْفَ الدِّينِ، فَلْيَتَّقِ اللَّهَ
          فِي النِّصْفِ الْبَاقِي
        </p>

        <p>
          وَقَالَ ﷺ: النِّكَاحُ مِنْ سُنَّتِي، فَمَنْ رَغِبَ
          عَنْ سُنَّتِي فَلَيْسَ مِنِّي
        </p>

        <p>
          وَقَالَ ﷺ: تَزَوَّجُوا الْوَدُودَ الْوَلُودَ،
          فَإِنِّي مُكَاثِرٌ بِكُمُ الْأَنْبِيَاءَ يَوْمَ الْقِيَامَةِ
        </p>

      </div>

    </div>


    <!-- =========================
         বাংলা উচ্চারণ
         ========================= -->

    <div class="mte-nikah-content-section">

      <div class="mte-nikah-section-title">
        <span>🔊</span>
        <h3>বিয়ের খুতবার বাংলা উচ্চারণ</h3>
      </div>

      <div class="mte-nikah-pronunciation">

        <p>
          ইন্নাল হামদা লিল্লাহি নাহমাদুহু ওয়া নাস্তা‘ঈনুহু
          ওয়া নাস্তাগফিরুহু ওয়া নু’মিনু বিহি ওয়া নাতাওয়াক্কালু
          আলাইহি। ওয়া না‘ঊজুবিল্লাহি মিন শুরূরি আনফুসিনা
          ওয়া মিন সাইয়িআতি আ‘মালিনা।
        </p>

        <p>
          মাই ইয়াহ্দিহিল্লাহু ফালা মুদিল্লালাহু, ওয়া মাই ইউদলিল
          ফালা হাদিয়ালাহু। ওয়া আশহাদু আল্লা ইলাহা ইল্লাল্লাহু
          ওয়াহদাহু লা শারিকা লাহু, ওয়া আশহাদু আন্না সাইয়িদানা
          ওয়া মাওলানা মুহাম্মাদান আবদুহু ওয়া রাসূলুহু।
        </p>

        <p>
          আল্লাজি উরসিলা ইলান নাসি কাফফাতান বাশীরাঁও ওয়া
          নাযীরাঁও, ওয়া দা‘ইয়ান ইলাল্লাহি বি-ইজনিহি সিরাজাঁও
          ওয়া কামারাম মুনিরা। আম্মা বা‘দ— ফাআ‘ঊজুবিল্লাহি
          মিনাশ শাইত্বানির রাজীম। বিসমিল্লাহির রহমানির রহীম।
        </p>

        <p>
          ইয়া আইয়ুহাল্লাজিনা আমানুত্তাকুল্লাহা হাক্কা তুক্বাতিহি
          ওয়া লা তামূতুন্না ইল্লা ওয়া আনতুম মুসলিমূন।
        </p>

        <p>
          ওয়া কালা তাআলা— ইয়া আইয়ুহান নাসুত্তাকূ রব্বাকুমুল্লাজি
          খলাক্বাকুম মিন নাফসিও ওয়াহিদাহ, ওয়া খলাক্বা মিনহা
          যাওজাহা, ওয়া বাসসা মিনহুমা রিজালান কাসিরাঁও ওয়া নিসা’আ।
        </p>

        <p>
          ওয়া কালা তাআলা— ইয়া আইয়ুহাল্লাজিনা আমানুত্তাকুল্লাহা
          ওয়া কূলূ কাওলান সাদিদা, ইউসলিহ লাকুম আ‘মালাকুম
          ওয়া ইয়াগফির লাকুম যুনূবাকুম, ওয়া মাই ইউতি‘ইল্লাহা
          ওয়া রাসূলাহু ফাক্বাদ ফাজা ফাওযান ‘আজিমা।
        </p>

        <p>
          ওয়া কালা রাসুলুল্লাহি সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম—
          ইযা তাযাওয়াজাল ‘আবদু ফাক্বাদিসতাকমালা নিসফাদ্দিন,
          ফালইয়াত্তাকিল্লাহা ফিন্নিসফিল বাক্বী।
        </p>

        <p>
          ওয়া কালা রাসুলুল্লাহি সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম—
          আন্নিকাহু মিন সুন্নাতি, ফামান রাগিবা ‘আন সুন্নাতি
          ফালাইসা মিন্নি।
        </p>

        <p>
          ওয়া কালা সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম—
          তাযাওয়াজুল ওয়াদূদাল ওয়ালূদ, ফাইন্নি মুকাসিরুম
          বিকুমুল আম্বিয়া’আ ইয়াওমাল ক্বিয়ামাহ।
        </p>

      </div>

    </div>


    <!-- =========================
         বাংলা অর্থ
         ========================= -->

    <div class="mte-nikah-content-section">

      <div class="mte-nikah-section-title">
        <span>📖</span>
        <h3>বিয়ের খুতবার বাংলা অর্থ</h3>
      </div>

      <div class="mte-nikah-meaning">

        <p>
          নিশ্চয়ই প্রশংসা আল্লাহর জন্য। আমরা তাঁর প্রশংসা করছি।
          তাঁর সাহায্য প্রার্থনা করছি এবং তাঁর কাছে ক্ষমা
          প্রার্থনা করছি। আমরা আমাদের নফসের অকল্যাণ থেকে এবং
          আমাদের খারাপ কর্মগুলো থেকে আল্লাহর আশ্রয় প্রার্থনা করছি।
        </p>

        <p>
          আল্লাহ যাকে হেদায়েত করেন, তাকে কেউ বিভ্রান্ত করতে পারে না
          আর আল্লাহ যাকে বিভ্রান্ত করেন, তাকে কেউ হেদায়েত দিতে পারে না।
          আমি সাক্ষ্য দিচ্ছি যে, আল্লাহ ছাড়া কোনো মাবুদ নেই,
          তিনি একক, তাঁর কোনো শরিক নেই এবং মুহাম্মদ ﷺ তাঁর বান্দা
          ও রাসুল।
        </p>

        <p>
          হে মুমিনগণ, তোমরা আল্লাহকে সত্যিকারভাবে ভয় করো এবং
          মুসলিম না হয়ে তোমরা মৃত্যুবরণ করো না।
          (সুরা আলে ইমরান: ১০২)
        </p>

        <p>
          হে মানবজাতি, তোমরা তোমাদের প্রতিপালককে ভয় করো,
          যিনি তোমাদের একটি প্রাণ থেকে সৃষ্টি করেছেন এবং তার
          থেকেই তার জোড়াকে সৃষ্টি করেছেন এবং তাদের থেকে বহু
          নর-নারী ছড়িয়ে দিয়েছেন। ভয় করো, যার নামে তোমরা একে
          অপরের নিকট জিজ্ঞেস করো এবং সতর্ক থাকো রক্তের
          আত্মীয়তার বন্ধন সম্পর্কে। নিশ্চয়ই আল্লাহ তোমাদের
          ওপর তীক্ষ্ণ দৃষ্টি রাখেন।
          (সুরা নিসা: ১)
        </p>

        <p>
          হে মুমিনগণ, আল্লাহকে ভয় করো এবং সত্য কথা বলো।
          তিনি তোমাদের কর্মক্ষেত্র ত্রুটিমুক্ত করবেন এবং
          তোমাদের পাপসমূহ ক্ষমা করবেন। আর যারা আল্লাহ ও তাঁর
          রাসুলের আনুগত্য করে, তারা অবশ্যই মহাসাফল্য অর্জন করে।
          (সুরা আহজাব: ৭০–৭১)
        </p>

        <p>
          নবীজি ﷺ বলেছেন, বান্দা যখন বিয়ে করে, তখন সে তার
          অর্ধেক দ্বীন পূর্ণ করে নেয়। অতএব, তাকে তার উচিত
          অবশিষ্ট অর্ধেক দ্বীনের ব্যাপারে আল্লাহকে ভয় করা।
        </p>

        <p>
          রাসুলুল্লাহ ﷺ বলেছেন, ‘বিয়ে আমার সুন্নত। যে ব্যক্তি
          আমার সুন্নত থেকে মুখ ফিরিয়ে নেয়, সে আমার উম্মতের
          অন্তর্ভুক্ত নয়।’
        </p>

        <p>
          তিনি আরও বলেছেন, ‘তোমরা স্নেহশীলা ও সন্তানপ্রসূ
          নারীদের বিয়ে করো; কেননা, কেয়ামতের দিন আমি তোমাদের
          সংখ্যা নিয়ে গর্ব করব।’
        </p>

      </div>

    </div>


    <!-- =========================
         বিয়েতে খুতবা পড়ার বিধান
         ========================= -->

    <div class="mte-nikah-rules">

      <div class="mte-nikah-section-title">
        <span>ℹ️</span>
        <h3>বিয়েতে খুতবা পড়ার বিধান</h3>
      </div>

      <div class="mte-nikah-rules-content">

        <p>
          মনে রাখার বিষয় হলো, বিয়েতে খুতবা পড়া ওয়াজিব বা
          অপরিহার্য নয়। খুতবা ছাড়াও যদি দুজন সাক্ষীর উপস্থিতিতে
          ইজাব ও কবুল সঠিকভাবে হয়, তবে বিয়ে শুদ্ধ হয়ে যাবে।
          তবে সুন্নতের সওয়াব ও বরকত লাভের জন্য খুতবা পড়া
          উত্তম।
        </p>

        <p>
          বিয়ের খুতবা দাঁড়িয়ে পড়া সুন্নত। তবে কোনো কারণে বসে
          পড়লেও বিয়ের কোনো ক্ষতি হবে না বা কোনো গুনাহ হবে না।
          খুতবার মূল অংশ আরবি হওয়া সুন্নত। পাশাপাশি উপস্থিত
          বর-কনে ও অতিথিদের উপদেশের জন্য মাতৃভাষায় নসিহত করা
          উত্তম।
        </p>

        <p>
          বিয়ে একটি পবিত্র সামাজিক ও ধর্মীয় চুক্তি। এই চুক্তিকে
          নবীজি ﷺ-এর শেখানো পদ্ধতিতে খুতবার মাধ্যমে শুরু করলে
          দাম্পত্যজীবনে বরকত কামনা করা যায়। তাই প্রতিটি বিয়েতেই
          নবীজি ﷺ-এর শেখানো পদ্ধতিতে খুতবা পড়ায় আগ্রহী হওয়া
          উচিত।
        </p>

      </div>

    </div>

  </div>

</section>

`,

/* =========================================================
   END: NIKAH-KHUTBAH PAGE
   ========================================================= */
   


   /* =========================================================
   START: TAQWA ISLAMIC GALLERY — 10 IMAGES
   Route name: gallery
   ========================================================= */

gallery: `

  <section class="taqwa-gallery">

    <div class="taqwa-gallery-inner">


      <!-- =================================================
           PAGE HEADER
           ================================================= -->

      <div class="taqwa-gallery-header">

        <span class="taqwa-gallery-badge">
          🕌 ইসলামিক • কুরআন • ইবাদত
        </span>

        <h1>
          ইসলামিক গ্যালারি
        </h1>

        <p>
          কুরআন, মসজিদ, সালাত, কাবা ও ইসলামী ঐতিহ্যের
          সুন্দর কিছু মুহূর্ত ও দৃশ্য।
        </p>

        <div class="taqwa-gallery-arabic">
          وَقُلْ رَبِّ زِدْنِي عِلْمًا
        </div>

      </div>


      <!-- =================================================
           GALLERY GRID
           ================================================= -->

      <div class="taqwa-gallery-grid">


        <!-- =================================================
             IMAGE 01 — QURAN
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1761406778100-de0254ec6788?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1761406778100-de0254ec6788?auto=format&fit=crop&w=900&q=85"
            alt="মসজিদে কুরআন"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>কুরআন শিক্ষা</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 02 — WHITE MOSQUE
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1574285823801-6174c967e64d?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1574285823801-6174c967e64d?auto=format&fit=crop&w=900&q=85"
            alt="সাদা মসজিদ"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>মসজিদের সৌন্দর্য</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 03 — KAABA
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1744711815074-1f12a88cc5d1?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1744711815074-1f12a88cc5d1?auto=format&fit=crop&w=900&q=85"
            alt="মক্কা ও কাবা শরীফ"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>কাবা শরীফ</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 04 — PRAYER
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1761939998860-6ccd2ed9198d?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1761939998860-6ccd2ed9198d?auto=format&fit=crop&w=900&q=85"
            alt="মসজিদে নামাজ"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>সালাত ও ইবাদত</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 05 — MOSQUE AT DUSK
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1761939998504-f97ca4d301c6?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1761939998504-f97ca4d301c6?auto=format&fit=crop&w=900&q=85"
            alt="সন্ধ্যার মসজিদ"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>মসজিদ ও আযান</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 06 — KAABA NIGHT
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=900&q=85"
            alt="রাতে কাবা শরীফ"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>কাবা ও হারাম শরীফ</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 07 — QURAN READING
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1651309553636-9b1ec1a607ed?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1651309553636-9b1ec1a607ed?auto=format&fit=crop&w=900&q=85"
            alt="কুরআন তিলাওয়াত"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>কুরআন তিলাওয়াত</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 08 — QURAN STUDY
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=85"
            alt="কুরআন অধ্যয়ন"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>কুরআন অধ্যয়ন</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 09 — ISLAMIC BOOK
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1400&q=85')">

          <img
            src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=85"
            alt="ইসলামিক বই"
            loading="lazy">

          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>ইসলামিক জ্ঞান</strong>
          </span>

        </button>


        <!-- =================================================
             IMAGE 10 — ISLAMIC EDUCATION
             ================================================= -->

        <button
          class="taqwa-gallery-item"
          type="button"
          onclick="mteOpenImage('https://images.unsplash.com/photo-1761406778100-de0254ec6788?auto=format&fit=crop&w=900&q=85')">

          <img
            src="https://images.unsplash.com/photo-1761406778100-de0254ec6788?auto=format&fit=crop&w=900&q=85"
            alt="মসজিদে কুরআন"
            loading="lazy">
          <span class="taqwa-gallery-overlay">
            <span>🔍</span>
            <strong>ইসলামিক শিক্ষা</strong>
          </span>

        </button>


      </div>


      <!-- =================================================
           GALLERY INFORMATION
           ================================================= -->

      <div class="taqwa-gallery-info">

        <div class="taqwa-gallery-info-icon">
          🕌
        </div>

        <div>

          <h2>
            ইসলামিক শিক্ষা ও জ্ঞানচর্চা
          </h2>

          <p>
            কুরআন শিক্ষা, তাজবীদ, হিফজ, সালাত ও
            ইসলামী জ্ঞানচর্চার বিভিন্ন ছবি এখানে
            সংরক্ষণ করা যাবে।
          </p>

        </div>

      </div>


      <!-- =================================================
           ISLAMIC QUOTE
           ================================================= -->

      <div class="taqwa-gallery-quote">

        <div>
          رَبِّ زِدْنِي عِلْمًا
        </div>

        <p>
          “হে আমার রব! আমার জ্ঞান বৃদ্ধি করুন।”
        </p>

      </div>


      <!-- =================================================
           BACK HOME
           ================================================= -->

      <div class="taqwa-gallery-back">

        <button
          class="mte-btn mte-btn-light mte-back"
          data-mte-route="home">

          ← হোমে ফিরে যান

        </button>

      </div>


    </div>

  </section>

`,

/* =========================================================
   END: TAQWA ISLAMIC GALLERY — 10 IMAGES
   ========================================================= */
   /* =========================================================
   START: doya-o-jikir
   ========================================================= */
/* =========================================================
     START: doya-o-jikir
     ========================================================= */
  'doya-o-jikir': `
<section class="mte-doya-page">

  <!-- HEADER SECTION -->
<header class="dua-header" style="background:linear-gradient(135deg,#087443,#0c9658); color:#fff; padding:22px 15px; text-align:center; box-shadow:0 3px 15px rgba(0,0,0,.15);">
  <div class="dua-header-icon" style="font-size:42px; line-height:1; margin-bottom:8px;">🤲</div>
  <h1 style="margin:0; font-size:25px; font-weight:700;">ইসলামি দোয়া ও জিকির সূচি</h1>
  <p style="margin:6px 0 0; font-size:14px; opacity:.92;">আল-কুরআন ও সহীহ হাদীসের আলোকে ইসলামী আদব ও দু'আ</p>
</header>

<!-- SEARCH & TOOLBAR SECTION -->
<div class="dua-extra-tools" style="width:min(900px,94%); margin:20px auto 10px; padding:18px; background:#fff; border-radius:18px; box-shadow:0 8px 30px rgba(0,0,0,.07); border:1px solid #e5eee8;">
  
  <div class="dua-search-row" style="display:grid; grid-template-columns:1fr 180px 130px; gap:10px;">
    
    <!-- Search Box -->
    <div class="dua-search-box" style="position:relative;">
      <input type="text" id="duaSearchInput" placeholder="দু'আ, উচ্চারণ বা অর্থ খুঁজুন..." style="width:100%; box-sizing:border-box; padding:14px 45px 14px 16px; border:1px solid #dce8df; border-radius:12px; outline:none; font-size:15px; background:#f8fbf9;">
      <span class="dua-search-icon" style="position:absolute; right:15px; top:50%; transform:translateY(-50%); font-size:19px;">🔍</span>
    </div>

    
    <!-- Filter Select Dropdown -->
    <select id="duaFilterSelect" class="dua-filter-select" style="width:100%; padding:14px 12px; border:1px solid #dce8df; border-radius:12px; background:#f8fbf9; outline:none; font-size:14px;">
      <option value="all">সকল দু'আ (১–৬০)</option>
      <option value="part1">প্রথম অংশ (১–২৯)</option>
      <option value="part2">দ্বিতীয় অংশ (৩০–৬০)</option>
      <option value="favorite">পছন্দের তালিকা ⭐</option>
    </select>

    <!-- Dark Mode Toggle Button -->
    <button id="duaDarkToggle" class="dua-tool-btn dark" style="border:none; border-radius:12px; background:#26352d; color:#fff; padding:12px 14px; cursor:pointer; font-weight:700;">🌙 ডার্ক মোড</button>
  </div>

  <!-- Category Mini Buttons Row -->
  <div class="dua-filter-row" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
    <button class="dua-mini-btn active" data-filter="all" style="border:1px solid #d8e7dd; background:#16864b; color:#fff; padding:8px 13px; border-radius:20px; cursor:pointer; font-size:13px; font-weight:600;">সব বিষয়</button>
    <button class="dua-mini-btn" data-filter="namaz" style="border:1px solid #d8e7dd; background:#f7faf8; color:#235d40; padding:8px 13px; border-radius:20px; cursor:pointer; font-size:13px; font-weight:600;">সালাত ও ওযূ</button>
    <button class="dua-mini-btn" data-filter="daily" style="border:1px solid #d8e7dd; background:#f7faf8; color:#235d40; padding:8px 13px; border-radius:20px; cursor:pointer; font-size:13px; font-weight:600;">দৈনন্দিন জীবন</button>
    <button class="dua-mini-btn" data-filter="fav" style="border:1px solid #d8e7dd; background:#f7faf8; color:#235d40; padding:8px 13px; border-radius:20px; cursor:pointer; font-size:13px; font-weight:600;">পছন্দের দু'আ</button>
    <button type="button" class="dua-mini-btn dua-salat-popup-trigger" data-action="salat-after-dua" style="border:1px solid #d8e7dd; background:#f7faf8; color:#235d40; padding:8px 13px; border-radius:20px; cursor:pointer; font-size:13px; font-weight:600;">🕌 সালাত পরবর্তী দুআ</button>
    </div>

  <!-- Status & Favorite Count Row -->
  <div class="dua-status-row" style="display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:13px; font-size:13px; color:#64756b;">
    <span id="duaCountStatus">মোট ৬০টি দু'আ দেখানো হচ্ছে</span>
    <span id="duaFavCount">পছন্দের দু'আ: ০টি</span>
  </div>

  <!-- Last Read Tracker Box -->
  <div id="duaLastReadBox" class="dua-last-read" style="margin-top:10px; padding:10px 12px; border-radius:10px; background:#f1faf4; color:#17633b; font-size:13px; cursor:pointer; display:none;"></div>

</div>

  <div class="mte-doya-notice">
    <strong>📌 গুরুত্বপূর্ণ কথা</strong>
    <p>বিস্তারিত দোয়া পড়তে তালিকার উপর ক্লিক বা টাচ করুন।</p>
  </div>

<!-- দোয়ার সূচি কন্টেইনার -->
  <div class="mte-doya-list">
    <div id="sectionTitle1" class="dua-section-title" style="display:none;">📖 প্রথম অংশ</div>
    <div id="duaList1"></div>

    <div id="sectionTitle2" class="dua-section-title" style="display:none; margin-top:15px;">📚 দ্বিতীয় অংশ</div>
    <div id="duaList2"></div>
  </div>

  <footer class="mte-doya-footer">
    <p>🌿 প্রতিনিয়ত জিকির ও দোয়ার মাধ্যমে অন্তরকে জীবিত রাখুন।</p>
  </footer>

  <!-- রেফারেন্স স্টাইলের পপআপ মডাল (Popup Modal) -->
  <div class="mte-doya-modal" id="mteDoyaModal" onclick="closeDoyaModalOnOutside(event)">
    <div class="mte-doya-modal-content">
      
      <!-- হেডার বার -->
      <div class="mte-modal-header-bar">
        <div class="mte-modal-header-titles">
          <h2 id="mteModalTitle">১. দোয়ার শিরোনাম</h2>
          <span id="mteModalSubTitle" class="mte-modal-subtitle">বইয়ের পৃষ্ঠা: ১</span>
        </div>
        <button type="button" class="mte-modal-close-btn" onclick="closeDoyaModal()">&#215;</button>
      </div>

      <!-- পপআপ বডি -->
      <div class="mte-doya-modal-body">

        <!-- অ্যাকশন বাটনসমূহ -->
        <div class="mte-modal-action-buttons">
          <button type="button" class="mte-action-btn" onclick="alert('পছন্দের তালিকায় যুক্ত হয়েছে!')">★ পছন্দের তালিকায় যুক্ত করুন</button>
          <button type="button" class="mte-action-btn" onclick="copyDoyaText()">📋 দুআ কপি করুন</button>
        </div>

                <!-- পপআপ হেডার ও ফন্ট চেঞ্জার অংশ -->
<div class="mte-font-box" style="display:flex; align-items:center; gap:8px; margin-bottom:10px; padding:8px; background:#f3f8f5; border-radius:10px;">
  <label for="mteFontSelector" style="font-size:13px; color:#53625a;">🔤 আরবি ফন্ট:</label>
  <select id="mteFontSelector" style="flex:1; padding:6px; border-radius:6px; border:1px solid #cddbd2;">
    <option value="font-amiri">Amiri</option>
    <option value="font-naskh">Noto Naskh Arabic</option>
    <option value="font-scheherazade">Scheherazade New</option>
    <option value="font-lateef">Lateef</option>
    <option value="font-cairo">Cairo</option>
  </select>
</div>


        <!-- ১. দুআর ছবি -->
        <div class="mte-modal-card-box">
          <div class="mte-card-box-header">🖼️ দুআর ছবি</div>
          <div class="mte-card-box-body img-body">
            <img id="mteModalImg" src="" alt="দুআর ছবি" class="mte-doya-modal-img" />
          </div>
        </div>

        <!-- ২. আমল / আদব -->
        <div class="mte-modal-card-box">
          <div class="mte-card-box-header">📖 আমল ও ফজিলত</div>
          <div class="mte-card-box-body" id="mteModalAmal">
            এখানে আমল ও ফজিলতের বর্ণনা থাকবে।
          </div>
        </div>

        <!-- ৩. আরবি দুআ -->
        <div class="mte-modal-card-box">
          <div class="mte-card-box-header">🕌 আরবি দুআ</div>
          <div class="mte-card-box-body mte-doya-arabic" id="mteModalArabic">
            النص العربي هنا
          </div>
        </div>

        <!-- ৪. বাংলা উচ্চারণ -->
        <div class="mte-modal-card-box">
          <div class="mte-card-box-header">🗣️ বাংলা উচ্চারণ</div>
          <div class="mte-card-box-body" id="mteModalPronunciation">
            এখানে বাংলা উচ্চারণ থাকবে।
          </div>
        </div>

        <!-- ৫. বাংলা অর্থ -->
        <div class="mte-modal-card-box">
          <div class="mte-card-box-header">📖 বাংলা অর্থ</div>
          <div class="mte-card-box-body" id="mteModalMeaning">
            এখানে বাংলা অর্থ থাকবে।
          </div>
        </div>



      </div>
    </div>
  </div>

  <!-- সালাত পরবর্তী দুআ: ছবিসহ আলাদা পপআপ -->
  <div class="mte-salat-dua-overlay" id="mteSalatDuaPopup" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="mteSalatDuaTitle">
    <div class="mte-salat-dua-dialog" role="document">
      <button type="button" class="mte-salat-dua-close" data-salat-popup-close aria-label="পপআপ বন্ধ করুন">×</button>
      <div class="mte-salat-dua-picture" role="img" aria-label="মসজিদ, চাঁদ এবং নামাজের জায়নামাজের অলংকারমূলক ছবি">
        <svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs><linearGradient id="mteSalatSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#073d31"/><stop offset="1" stop-color="#159665"/></linearGradient><linearGradient id="mteSalatMat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e6c77b"/><stop offset="1" stop-color="#b98b3b"/></linearGradient></defs>
          <rect width="640" height="300" rx="20" fill="url(#mteSalatSky)"/><circle cx="520" cy="58" r="26" fill="#f6e8b0"/><circle cx="532" cy="48" r="24" fill="#0b6047"/>
          <g fill="#f8e9b7" opacity=".8"><circle cx="86" cy="48" r="2"/><circle cx="145" cy="82" r="2"/><circle cx="238" cy="42" r="2"/><circle cx="420" cy="35" r="2"/><circle cx="576" cy="113" r="2"/></g>
          <g fill="#f1dfaa"><path d="M150 210V124a35 35 0 0 1 70 0v86z"/><path d="M130 210V145h-13v-22h13v-18h12v18h10v22h-10v65z"/><path d="M228 210V145h-12v-22h12v-18h12v18h12v22h-12v65z"/><path d="M264 210V135q56-76 112 0v75z"/><path d="M376 210V124a35 35 0 0 1 70 0v86z"/><path d="M446 210V145h-12v-22h12v-18h12v18h12v22h-12v65z"/></g>
          <g fill="#0b5c43"><rect x="164" y="158" width="14" height="28" rx="7"/><rect x="194" y="158" width="14" height="28" rx="7"/><rect x="291" y="156" width="18" height="54" rx="9"/><rect x="331" y="156" width="18" height="54" rx="9"/><rect x="398" y="158" width="14" height="28" rx="7"/><rect x="428" y="158" width="14" height="28" rx="7"/></g>
          <path d="M0 224Q160 204 320 228T640 220V300H0z" fill="#074a37"/>
          <path d="M205 300l55-64h120l55 64z" fill="url(#mteSalatMat)" stroke="#f9e8b0" stroke-width="3"/><path d="M247 300l34-48h78l34 48" fill="none" stroke="#fff0bd" stroke-width="3"/><path d="M320 260l17 16-17 16-17-16z" fill="#fff0bd"/>
          <text x="320" y="32" fill="#fff6d7" font-size="17" text-anchor="middle" font-family="sans-serif">الصلاة بعد السلام</text>
        </svg>
      </div>
      <h2 id="mteSalatDuaTitle">সালাত পরবর্তী দুআ</h2>
      <p class="mte-salat-dua-note">ফরজ নামাজের পর আল্লাহর জিকির ও দুআ করার কথা স্মরণ করুন।</p>
      <div class="mte-salat-dua-arabic" lang="ar" dir="rtl">أَسْتَغْفِرُ اللَّهَ (ثَلَاثًا)
اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ</div>
      <p class="mte-salat-dua-meaning"><strong>অর্থ:</strong> আমি আল্লাহর কাছে ক্ষমা চাই (তিনবার)। হে আল্লাহ! আপনিই শান্তি, আপনার কাছ থেকেই শান্তি আসে। হে মহিমা ও সম্মানের অধিকারী! আপনি বরকতময়।</p>
      <button type="button" class="mte-salat-dua-done" data-salat-popup-close>বন্ধ করুন</button>
    </div>
  </div>

</section>
`,
/* =========================================================
   END: doya-o-jikir
   ========================================================= */
/* =========================================================
   START: masayel
   ========================================================= */
masayel: `
<section class="mte-masayel-page">

  <header class="mte-masayel-header">
    <span class="mte-masayel-icon">⚖️</span>
    <h1>ইসলামি মাসায়েল</h1>
    <p>পবিত্রতা, নামাজ, রোজা ও দৈনন্দিন জীবনের প্রয়োজনীয় মাসআলা</p>
  </header>

  <div class="mte-masayel-notice">
    <strong>📌 গুরুত্বপূর্ণ কথা</strong>
    <p>
      এখানে প্রাথমিক ধারণার জন্য কিছু সাধারণ মাসআলা দেওয়া হয়েছে।
      ব্যক্তিগত বা জটিল সমস্যার ক্ষেত্রে নির্ভরযোগ্য আলেমের কাছে
      বিস্তারিত জেনে নিন।
    </p>
  </div>

  <div class="mte-masayel-list">

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">পবিত্রতা</span>
      <h2>১. অজুর ফরজ কয়টি?</h2>
      <p>
        হানাফি মাজহাব অনুযায়ী অজুর ফরজ চারটি:
      </p>
      <ol>
        <li>সম্পূর্ণ মুখ ধোয়া।</li>
        <li>দুই হাত কনুইসহ ধোয়া।</li>
        <li>মাথার এক-চতুর্থাংশ মাসেহ করা।</li>
        <li>দুই পা টাখনুসহ ধোয়া।</li>
      </ol>
    </article>

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">পবিত্রতা</span>
      <h2>২. ঘুমালে কি অজু ভাঙে?</h2>
      <p>
        ঘুমের ধরন ও বসার অবস্থার ওপর বিধান নির্ভর করে।
        হানাফি মাজহাবে এমনভাবে গভীর ঘুম হলে, যাতে শরীরের
        নিয়ন্ত্রণ থাকে না, সাধারণত অজু ভেঙে যায়।
        নির্দিষ্ট পরিস্থিতিতে আলেমের কাছে জেনে নিন।
      </p>
    </article>

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">নামাজ</span>
      <h2>৩. পাঁচ ওয়াক্ত নামাজের বিধান কী?</h2>
      <p>
        প্রাপ্তবয়স্ক, সুস্থবুদ্ধিসম্পন্ন মুসলিমের ওপর
        পাঁচ ওয়াক্ত ফরজ নামাজ আদায় করা আবশ্যক।
        ইচ্ছাকৃতভাবে নামাজ ছেড়ে দেওয়া গুরুতর গুনাহ।
      </p>
    </article>

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">নামাজ</span>
      <h2>৪. নামাজে সূরা ফাতিহা পড়ার বিধান</h2>
      <p>
        সূরা ফাতিহা নামাজের গুরুত্বপূর্ণ কিরাআত।
        তবে ইমামের পেছনে কিরাআত পড়ার বিধান মাজহাবভেদে
        ভিন্ন। নিজের অনুসৃত মাজহাব অনুযায়ী নির্ভরযোগ্য
        আলেমের নির্দেশনা অনুসরণ করুন।
      </p>
    </article>

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">রোজা</span>
      <h2>৫. রমজানের রোজার গুরুত্ব</h2>
      <p>
        রমজানের রোজা ইসলামের অন্যতম ফরজ ইবাদত।
        শরিয়তসম্মত ওজর না থাকলে প্রাপ্তবয়স্ক মুসলিমের
        জন্য রমজানের রোজা পালন করা আবশ্যক।
      </p>
    </article>

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">রোজা</span>
      <h2>৬. ভুলে খাবার খেলে কি রোজা ভাঙে?</h2>
      <p>
        রোজা অবস্থায় ভুলে খাওয়া বা পান করার কারণে
        সাধারণভাবে রোজা ভাঙে না। মনে পড়ামাত্র খাওয়া
        বন্ধ করে রোজা পূর্ণ করতে হবে।
      </p>
    </article>

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">দৈনন্দিন জীবন</span>
      <h2>৭. সালামের উত্তর দেওয়ার বিধান</h2>
      <p>
        কেউ সালাম দিলে তার উত্তর দেওয়া ইসলামের গুরুত্বপূর্ণ
        অধিকার। কুরআনের নির্দেশ অনুযায়ী সালামের জবাব
        সমপরিমাণ বা তার চেয়ে উত্তমভাবে দিতে হয়।
      </p>
    </article>

    <article class="mte-masayel-card">
      <span class="mte-masayel-category">দৈনন্দিন জীবন</span>
      <h2>৮. পিতা-মাতার সঙ্গে সদাচরণ</h2>
      <p>
        পিতা-মাতার সঙ্গে সদাচরণ করা, সম্মান করা এবং
        বৈধ ও ন্যায়সংগত বিষয়ে তাঁদের সহযোগিতা করা
        ইসলামে অত্যন্ত গুরুত্বপূর্ণ কর্তব্য।
      </p>
    </article>

  </div>

  <footer class="mte-masayel-footer">
    <p>
      🌿 দ্বীনি বিষয়ে জানুন, বুঝুন এবং নির্ভরযোগ্য
      সূত্রের আলোকে আমল করুন।
    </p>
  </footer>

</section>
`,

/* =========================================================
   END: masayel
   ========================================================= */

   
    contact: `

      <section class="mte-section">

        <div class="mte-container mte-contact-grid">

          <div>

            <div class="mte-section-kicker">
              যোগাযোগ
            </div>

            <h2 class="mte-section-title">
              আমার সাথে যোগাযোগ করুন
            </h2>


            <div
              class="mte-contact-list"
              style="margin-top:20px">

              <div class="mte-contact-item">

                <strong>
                  📱 মোবাইল
                </strong>

                ${MTE_CONFIG.phone}

              </div>


              <div class="mte-contact-item">

                <strong>
                  💬 WhatsApp
                </strong>

                ${MTE_CONFIG.whatsapp}

              </div>


              <div class="mte-contact-item">

                <strong>
                  ✉️ Email
                </strong>

                ${MTE_CONFIG.email}

              </div>


              <div class="mte-contact-item">

                <strong>
                  📍 ঠিকানা
                </strong>

                ${MTE_CONFIG.address}

              </div>

            </div>

          </div>


          <form
            class="mte-form mte-card"
            onsubmit="event.preventDefault();alert('ডেমো ফর্ম — আপনার Email/Form service যুক্ত করতে হবে.')">

            <input
              type="text"
              placeholder="আপনার নাম"
              required>

            <input
              type="email"
              placeholder="আপনার ইমেইল"
              required>

            <textarea
              placeholder="আপনার বার্তা"
              required></textarea>

            <button
              class="mte-btn mte-btn-primary"
              type="submit">
              বার্তা পাঠান
            </button>

          </form>

        </div>

      </section>

    `

  };


  return (
    contentMap[route] ||
    `
      <section class="mte-section">

        <div class="mte-container">

          <div class="mte-empty-note">
            এই পেজের ডেমো কনটেন্ট প্রস্তুত করা হচ্ছে।
          </div>

        </div>

      </section>
    `
  );

}


/* =========================================================
   HOME-ONLY STATIC SECTIONS
   index.html-এ যোগ করা অতিরিক্ত Home sections
   শুধু Home route-এ দেখা যাবে।
   ========================================================= */
function mteSetHomeOnlySections(route) {

  const homeOnly = document.getElementById("mteHomeOnlySections");
  if (!homeOnly) return;

  const isHome = route === "home";

  homeOnly.hidden = !isHome;
  homeOnly.setAttribute("aria-hidden", isHome ? "false" : "true");

}


/* =========================================================
   06. PAGE ROUTING
   ========================================================= */

function mteRender() {

  if (!mteMain) return;


  let route =
    location.hash
      .replace(/^#\/?/, "")
      .split("/")[0]
      .trim();


  route =
    route || "home";


  if (!mteRoutes[route]) {
    route = "home";
  }


  /* Home Page-এর static sections শুধু Home-এ */
  mteSetHomeOnlySections(route);


  /* Stop previous slider timer */
  clearInterval(mteSlideTimer);

  /* Quran page leave করলে তার event listeners বন্ধ করুন */
  if (route !== "alquran" && typeof window.mteAlQuranCleanup === "function") {
    window.mteAlQuranCleanup();
  }


  if (route === "home") {

    mteMain.innerHTML =
      mteHome();

    mteInitSlider();

    mteStartTyping();


    /*
      IMPORTANT:
      Prayer section এখন routing-এর পরে
      নিশ্চিতভাবে আবার তৈরি হবে।
    */

    if (
      typeof window.mtePrayerEnsureHomeSection ===
      "function"
    ) {

      window.mtePrayerEnsureHomeSection();

    }

  } else if (route === "alquran") {

    mteMain.innerHTML = mteAlQuranPage();

    requestAnimationFrame(function () {
      mteInitAlQuran();
    });

  } else {

    mteMain.innerHTML =
      mtePage(
        mteRoutes[route],
        "",
        mteGenericContent(route)
      );

  }


  // দোয়া ও যিকির পেজের HTML route render হওয়ার পর তালিকা ও controls চালু করুন
  if (route === "doya-o-jikir" && typeof window.mteInitDoyaPage === "function") {
    requestAnimationFrame(function () {
      window.mteInitDoyaPage();
    });
  }

  mteCloseMenu();


mteCurrentRoute = route;

mteRestoreScrollPosition(route);


  document.title =
    `${mteRoutes[route]} | ${MTE_CONFIG.teacherName}`;

}

/* =========================================================
   PAGE SCROLL POSITION — BACK BUTTON FIX
   ========================================================= */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const MTE_SCROLL_KEY = "mte_scroll_positions";

let mteScrollPositions = {};

try {
  mteScrollPositions = JSON.parse(
    sessionStorage.getItem(MTE_SCROLL_KEY) || "{}"
  );
} catch (e) {
  mteScrollPositions = {};
}

let mteCurrentRoute = "home";

/* বর্তমান পেজের Scroll Position সংরক্ষণ */
function mteSaveScrollPosition() {
  mteScrollPositions[mteCurrentRoute] =
    window.scrollY || window.pageYOffset || 0;

  try {
    sessionStorage.setItem(
      MTE_SCROLL_KEY,
      JSON.stringify(mteScrollPositions)
    );
  } catch (e) {}
}

/* যে পেজে যাচ্ছেন, তার আগের Scroll Position ফিরিয়ে আনা */
function mteRestoreScrollPosition(route) {
  const savedPosition = Number(
    mteScrollPositions[route] || 0
  );

  let attempts = 0;

  function restore() {
    attempts++;

    const maxScroll =
      Math.max(
        0,
        document.documentElement.scrollHeight -
          window.innerHeight
      );

    /*
      পেজের পুরো content তৈরি হওয়ার আগে Scroll করলে
      Footer-এর দিকে ভুল জায়গায় চলে যেতে পারে।
      তাই content তৈরি হওয়া পর্যন্ত অপেক্ষা করছি।
    */
    if (
      maxScroll >= savedPosition ||
      attempts >= 30
    ) {
      window.scrollTo({
        top: Math.min(savedPosition, maxScroll),
        left: 0,
        behavior: "auto"
      });
      return;
    }

    setTimeout(restore, 50);
  }

  requestAnimationFrame(restore);
}

/* Scroll হওয়ার সময় Position Save */
let mteScrollSaveTimer;

window.addEventListener(
  "scroll",
  function () {
    clearTimeout(mteScrollSaveTimer);

    mteScrollSaveTimer = setTimeout(
      function () {
        mteSaveScrollPosition();
      },
      100
    );
  },
  { passive: true }
);

/* =========================================================
   ROUTE CLICK
   ========================================================= */

document.addEventListener("click", function (e) {

  const link =
    e.target.closest("[data-mte-route]");


  if (!link) return;


  /*
    Hash change event নিজে থেকেই mteRender()
    চালাবে।

    তাই এখানে আলাদা mteRender() না চালানোই
    নিরাপদ।
  */

});


window.addEventListener(
  "hashchange",
  mteRender
);


/* =========================================================
   07. BACK BUTTON
   ========================================================= */

function mteBack() {

  if (history.length > 1) {

    history.back();

  } else {

    location.hash = "#home";

  }

}


/* =========================================================
   08. CUSTOM PDF.JS READER
   ========================================================= */

let mtePdfSystemReady = false;


function mteStartPdfSystem() {

  if (
    mtePdfSystemReady ||
    typeof pdfjsLib === "undefined"
  ) {
    return;
  }


  mtePdfSystemReady = true;


  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

}


const mtePdfModal =
  document.getElementById("mtePdfModal");

const mtePdfCanvas =
  document.getElementById("mtePdfCanvas");

const mtePdfView =
  document.getElementById("mtePdfView");

const mtePdfStatus =
  document.getElementById("mtePdfStatus");

const mtePdfPage =
  document.getElementById("mtePdfPage");

const mtePdfTitle =
  document.getElementById("mtePdfTitle");


let mtePdfDoc = null;
let mtePdfCurrent = 1;
let mtePdfScale = 1.15;
let mtePdfRendering = false;
let mtePdfPending = null;


async function mteOpenPdf(url, title) {

  if (!mtePdfModal) return;


  mtePdfModal.classList.add("mte-show");

  mtePdfModal.setAttribute(
    "aria-hidden",
    "false"
  );


  if (mtePdfTitle) {
    mtePdfTitle.textContent =
      title || "PDF Reader";
  }


  if (mtePdfCanvas) {
    mtePdfCanvas.hidden = true;
  }


  if (mtePdfStatus) {

    mtePdfStatus.hidden = false;

    mtePdfStatus.textContent =
      "PDF লোড হচ্ছে...";

  }


  mtePdfDoc = null;
  mtePdfCurrent = 1;

  document.body.style.overflow = "hidden";


  try {

    if (typeof pdfjsLib === "undefined") {

      await new Promise(
        function (resolve, reject) {

          const started = Date.now();


          const timer =
            setInterval(function () {

              if (
                typeof pdfjsLib !==
                "undefined"
              ) {

                clearInterval(timer);
                resolve();

              }

              else if (
                Date.now() - started >
                10000
              ) {

                clearInterval(timer);

                reject(
                  new Error(
                    "PDF.js load timeout"
                  )
                );

              }

            }, 100);

        }
      );

    }


    mteStartPdfSystem();


    mtePdfDoc =
      await pdfjsLib
        .getDocument({
          url: url,
          withCredentials: false
        })
        .promise;


    if (mtePdfStatus) {
      mtePdfStatus.hidden = true;
    }


    if (mtePdfCanvas) {
      mtePdfCanvas.hidden = false;
    }


    await mteRenderPdfPage(1);


  } catch (err) {

    console.error(err);


    if (mtePdfStatus) {

      mtePdfStatus.hidden = false;

      mtePdfStatus.innerHTML =
        "PDF লোড করা যায়নি।<br>" +
        "<small>" +
        "Supabase PDF হলে Public URL এবং CORS অনুমতি সঠিক আছে কি না দেখুন।" +
        "</small>";

    }


    if (mtePdfCanvas) {
      mtePdfCanvas.hidden = true;
    }

  }

}


async function mteRenderPdfPage(num) {

  if (!mtePdfDoc) return;


  if (mtePdfRendering) {

    mtePdfPending = num;

    return;

  }


  mtePdfRendering = true;


  try {

    const page =
      await mtePdfDoc.getPage(num);


    const viewport =
      page.getViewport({
        scale: mtePdfScale
      });


    const ratio =
      window.devicePixelRatio || 1;


    mtePdfCanvas.width =
      Math.floor(
        viewport.width * ratio
      );


    mtePdfCanvas.height =
      Math.floor(
        viewport.height * ratio
      );


    mtePdfCanvas.style.width =
      viewport.width + "px";


    mtePdfCanvas.style.height =
      viewport.height + "px";


    const ctx =
      mtePdfCanvas.getContext(
        "2d",
        { alpha: false }
      );


    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );


    await page.render({
      canvasContext: ctx,
      viewport: viewport
    }).promise;


    mtePdfCurrent = num;


    if (mtePdfPage) {

      mtePdfPage.textContent =
        `পৃষ্ঠা ${num} / ${mtePdfDoc.numPages}`;

    }


    if (mtePdfView) {
      mtePdfView.scrollTop = 0;
    }


  } finally {

    mtePdfRendering = false;

  }


  if (mtePdfPending !== null) {

    const p =
      mtePdfPending;

    mtePdfPending = null;

    mteRenderPdfPage(p);

  }

}


const pdfPrev =
  document.getElementById("mtePdfPrev");

if (pdfPrev) {

  pdfPrev.onclick = function () {

    if (
      mtePdfDoc &&
      mtePdfCurrent > 1
    ) {

      mteRenderPdfPage(
        mtePdfCurrent - 1
      );

    }

  };

}


const pdfNext =
  document.getElementById("mtePdfNext");

if (pdfNext) {

  pdfNext.onclick = function () {

    if (
      mtePdfDoc &&
      mtePdfCurrent <
      mtePdfDoc.numPages
    ) {

      mteRenderPdfPage(
        mtePdfCurrent + 1
      );

    }

  };

}


const pdfZoomIn =
  document.getElementById("mtePdfZoomIn");

if (pdfZoomIn) {

  pdfZoomIn.onclick = function () {

    mtePdfScale =
      Math.min(
        2.5,
        mtePdfScale + 0.15
      );

    mteRenderPdfPage(
      mtePdfCurrent
    );

  };

}


const pdfZoomOut =
  document.getElementById("mtePdfZoomOut");

if (pdfZoomOut) {

  pdfZoomOut.onclick = function () {

    mtePdfScale =
      Math.max(
        0.55,
        mtePdfScale - 0.15
      );

    mteRenderPdfPage(
      mtePdfCurrent
    );

  };

}


const pdfFit =
  document.getElementById("mtePdfFit");

if (pdfFit) {

  pdfFit.onclick = function () {

    if (!mtePdfDoc || !mtePdfView) {
      return;
    }


    mtePdfDoc
      .getPage(mtePdfCurrent)
      .then(function (page) {

        const base =
          page.getViewport({
            scale: 1
          });


        const available =
          Math.max(
            250,
            mtePdfView.clientWidth - 25
          );


        mtePdfScale =
          Math.max(
            0.55,
            Math.min(
              1.8,
              available / base.width
            )
          );


        mteRenderPdfPage(
          mtePdfCurrent
        );

      });

  };

}


function mteClosePdf() {

  if (!mtePdfModal) return;


  mtePdfModal.classList.remove(
    "mte-show"
  );


  mtePdfModal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow = "";

}


const pdfClose =
  document.getElementById("mtePdfClose");

if (pdfClose) {
  pdfClose.onclick = mteClosePdf;
}


if (mtePdfModal) {

  mtePdfModal.addEventListener(
    "click",
    function (e) {

      if (e.target === mtePdfModal) {
        mteClosePdf();
      }

    }
  );

}


if (mtePdfView) {

  mtePdfView.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    }
  );

}


/* =========================================================
   PDF KEYBOARD
   ========================================================= */

document.addEventListener(
  "keydown",
  function (e) {

    if (
      !mtePdfModal ||
      !mtePdfModal.classList.contains(
        "mte-show"
      )
    ) {
      return;
    }


    if (e.key === "Escape") {

      mteClosePdf();

      return;

    }


    if (
      (e.ctrlKey || e.metaKey) &&
      ["p", "s"].includes(
        e.key.toLowerCase()
      )
    ) {

      e.preventDefault();
      e.stopPropagation();

    }


    if (e.key === "ArrowRight") {

      const next =
        document.getElementById(
          "mtePdfNext"
        );

      if (next) next.click();

    }


    if (e.key === "ArrowLeft") {

      const prev =
        document.getElementById(
          "mtePdfPrev"
        );

      if (prev) prev.click();

    }

  }
);


/* =========================================================
   09. GALLERY LIGHTBOX
   ========================================================= */

function mteOpenImage(src) {

  const image =
    document.getElementById(
      "mteLightboxImg"
    );

  const lightbox =
    document.getElementById(
      "mteLightbox"
    );


  if (image) {
    image.src = src;
  }


  if (lightbox) {
    lightbox.classList.add(
      "mte-show"
    );
  }

}


function mteCloseImage() {

  const lightbox =
    document.getElementById(
      "mteLightbox"
    );


  if (lightbox) {

    lightbox.classList.remove(
      "mte-show"
    );

  }

}


const lightboxClose =
  document.getElementById(
    "mteLightboxClose"
  );

if (lightboxClose) {
  lightboxClose.onclick =
    mteCloseImage;
}


const lightbox =
  document.getElementById(
    "mteLightbox"
  );

if (lightbox) {

  lightbox.addEventListener(
    "click",
    function (e) {

      if (
        e.target.id ===
        "mteLightbox"
      ) {
        mteCloseImage();
      }

    }
  );

}


/* =========================================================
   10. INITIAL RENDER
   ========================================================= */

mteRender();


/* =========================================================
   FOOTER # LINKS
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const links =
      document.querySelectorAll(
        ".site-footer a[href='#']"
      );


    links.forEach(function (link) {

      link.addEventListener(
        "click",
        function (e) {

          e.preventDefault();

        }
      );

    });

  }
);


/* =========================================================
   FOOTER ICON JAVASCRIPT
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const footerLinks =
      document.querySelectorAll(
        ".footer-icon-section a[href='#']"
      );


    footerLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          function (event) {

            event.preventDefault();

          }
        );

      }
    );


    const socialIcons =
      document.querySelectorAll(
        ".footer-social-icons a"
      );


    socialIcons.forEach(
      function (icon) {

        icon.addEventListener(
          "mouseenter",
          function () {

            icon.classList.add(
              "footer-icon-hover"
            );

          }
        );


        icon.addEventListener(
          "mouseleave",
          function () {

            icon.classList.remove(
              "footer-icon-hover"
            );

          }
        );

      }
    );

  }
);


/* =========================================================
   =========================================================
   TAKAM ACADEMY
   PRAYER TIMES
   HOME PAGE ONLY
   =========================================================
   ========================================================= */

(function () {

  "use strict";


  /* =======================================================
     ১. IMPORTANT — GITHUB PAGES HOME DETECTION
     =======================================================

     আগের কোডে শুধু:
       /
       /index.html

     ধরা হচ্ছিল।

     কিন্তু GitHub Pages হলে URL এমন হতে পারে:

       /my-website/
       /takam-academy/

     তাই এখানে project root-ও Home হিসেবে ধরা হবে।
     ======================================================= */

  function isHomePage() {

    /*
      GitHub Pages Hash Routing ব্যবহার করছে।
      তাই pathname নয়, HASH/ROUTE দেখে Home নির্ধারণ করতে হবে।

      #about / #courses / #contact
      = অন্য Page

      #home বা কোনো Hash না থাকা
      = Home
    */

    const hash =
      window.location.hash
        .replace(/^#\/?/, "")
        .split("/")[0]
        .trim()
        .toLowerCase();

    return (
      hash === "" ||
      hash === "home"
    );

  }


  /*
    অন্য code থেকেও ব্যবহার করার জন্য
  */

  window.mtePrayerIsHomePage =
    isHomePage;


  /* =======================================================
     ২. CONFIGURATION
     ======================================================= */

  const MTE_PRAYER_CONFIG = {

    city: "Dhaka",

    country: "Bangladesh",

    timezone: "Asia/Dhaka",

    method: 1,

    /*
      1 = Hanafi
      0 = Shafi'i
    */

    school: 1,

    latitude: null,

    longitude: null,

    api:
      "https://api.aladhan.com/v1/timings"

  };


  /* =======================================================
     ৩. PRAYER INFORMATION
     ======================================================= */

  const MTE_PRAYER_NAMES = {

    Fajr: "ফজর",

    Sunrise: "সূর্যোদয়",

    Dhuhr: "যোহর",

    Asr: "আসর",

    Maghrib: "মাগরিব",

    Isha: "এশা"

  };


  const MTE_PRAYER_ICONS = {

    Fajr: "🌙",

    Sunrise: "🌅",

    Dhuhr: "☀️",

    Asr: "🌤️",

    Maghrib: "🌇",

    Isha: "🌙"

  };


  const MTE_MAIN_PRAYERS = [

    "Fajr",
    "Sunrise",
    "Dhuhr",
    "Asr",
    "Maghrib",
    "Isha"

  ];


  /* =======================================================
     ৪. HIJRI MONTH
     ======================================================= */

  const MTE_HIJRI_MONTHS_BY_NUMBER = {

    1: "মহররম",
    2: "সফর",
    3: "রবিউল আউয়াল",
    4: "রবিউস সানি",
    5: "জুমাদিউল আউয়াল",
    6: "জুমাদিউস সানি",
    7: "রজব",
    8: "শাবান",
    9: "রমজান",
    10: "শাওয়াল",
    11: "জিলকদ",
    12: "জিলহজ"

  };


  const MTE_HIJRI_MONTHS_BY_NAME = {

    "Muharram": "মহররম",
    "Safar": "সফর",

    "Rabi' al-Awwal":
      "রবিউল আউয়াল",

    "Rabi al-Awwal":
      "রবিউল আউয়াল",

    "Rabi' al-Thani":
      "রবিউস সানি",

    "Rabi al-Thani":
      "রবিউস সানি",

    "Rabi' al-Akhir":
      "রবিউস সানি",

    "Rabi al-Akhir":
      "রবিউস সানি",

    "Jumada al-Awwal":
      "জুমাদিউল আউয়াল",

    "Jumada al-Thani":
      "জুমাদিউস সানি",

    "Rajab":
      "রজব",

    "Sha'ban":
      "শাবান",

    "Shaʿban":
      "শাবান",

    "Ramadan":
      "রমজান",

    "Shawwal":
      "শাওয়াল",

    "Dhu al-Qi'dah":
      "জিলকদ",

    "Dhu al-Qidah":
      "জিলকদ",

    "Dhu al-Hijjah":
      "জিলহজ",

    "Dhu al-Hijja":
      "জিলহজ"

  };


  /* =======================================================
     ৫. BANGLA WEEK DAYS
     ======================================================= */

  const MTE_BANGLA_WEEK_DAYS = [

    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার"

  ];


  /* =======================================================
     ৬. BANGLA NUMBER
     ======================================================= */

  function mtePrayerBnNumber(value) {

    const english =
      String(
        value === undefined ||
        value === null
          ? ""
          : value
      );


    const banglaDigits = {

      "0": "০",
      "1": "১",
      "2": "২",
      "3": "৩",
      "4": "৪",
      "5": "৫",
      "6": "৬",
      "7": "৭",
      "8": "৮",
      "9": "৯"

    };


    return english.replace(
      /[0-9]/g,
      function (digit) {
        return banglaDigits[digit];
      }
    );

  }


  /* =======================================================
     ৭. HIJRI MONTH
     ======================================================= */

  function mtePrayerBanglaHijriMonth(
    monthName,
    monthNumber
  ) {

    const number =
      Number(monthNumber);


    if (
      number >= 1 &&
      number <= 12 &&
      MTE_HIJRI_MONTHS_BY_NUMBER[number]
    ) {

      return MTE_HIJRI_MONTHS_BY_NUMBER[
        number
      ];

    }


    const original =
      String(
        monthName || ""
      ).trim();


    if (
      MTE_HIJRI_MONTHS_BY_NAME[
        original
      ]
    ) {

      return MTE_HIJRI_MONTHS_BY_NAME[
        original
      ];

    }


    const normalized =
      original
        .replace(/ʿ/g, "'")
        .replace(/’/g, "'")
        .trim();


    const monthKeys =
      Object.keys(
        MTE_HIJRI_MONTHS_BY_NAME
      );


    for (
      let i = 0;
      i < monthKeys.length;
      i++
    ) {

      const key =
        monthKeys[i]
          .replace(/ʿ/g, "'")
          .replace(/’/g, "'")
          .trim();


      if (
        key.toLowerCase() ===
        normalized.toLowerCase()
      ) {

        return MTE_HIJRI_MONTHS_BY_NAME[
          monthKeys[i]
        ];

      }

    }


    return original || "—";

  }


  /* =======================================================
     ৮. BANGLA SEASON
     ======================================================= */

  function mtePrayerGetBanglaSeason(
    banglaMonth
  ) {

    const seasonMap = {

      "বৈশাখ": {
        name: "গ্রীষ্ম",
        icon: "🌞"
      },

      "জ্যৈষ্ঠ": {
        name: "গ্রীষ্ম",
        icon: "🌞"
      },

      "আষাঢ়": {
        name: "বর্ষা",
        icon: "🌧️"
      },

      "শ্রাবণ": {
        name: "বর্ষা",
        icon: "🌧️"
      },

      "ভাদ্র": {
        name: "শরৎ",
        icon: "☁️"
      },

      "আশ্বিন": {
        name: "শরৎ",
        icon: "☁️"
      },

      "কার্তিক": {
        name: "হেমন্ত",
        icon: "🍂"
      },

      "অগ্রহায়ণ": {
        name: "হেমন্ত",
        icon: "🍂"
      },

      "পৌষ": {
        name: "শীত",
        icon: "❄️"
      },

      "মাঘ": {
        name: "শীত",
        icon: "❄️"
      },

      "ফাল্গুন": {
        name: "বসন্ত",
        icon: "🌸"
      },

      "চৈত্র": {
        name: "বসন্ত",
        icon: "🌸"
      }

    };


    return (
      seasonMap[banglaMonth] ||
      {
        name: "—",
        icon: ""
      }
    );

  }


  /* =======================================================
     ৯. BANGLA DATE
     ======================================================= */

  function mtePrayerGetBanglaDate(
    date
  ) {

    const year =
      date.getFullYear();

    const month =
      date.getMonth();

    const day =
      date.getDate();


    const banglaMonths = [

      "বৈশাখ",
      "জ্যৈষ্ঠ",
      "আষাঢ়",
      "শ্রাবণ",
      "ভাদ্র",
      "আশ্বিন",
      "কার্তিক",
      "অগ্রহায়ণ",
      "পৌষ",
      "মাঘ",
      "ফাল্গুন",
      "চৈত্র"

    ];


    let banglaMonthIndex;
    let banglaYear;
    let startDate;


    if (
      month === 0 &&
      day <= 14
    ) {

      banglaMonthIndex = 8;
      banglaYear = year - 594;
      startDate =
        new Date(
          year - 1,
          11,
          16
        );

    }

    else if (
      (month === 0 && day >= 15) ||
      (month === 1 && day <= 13)
    ) {

      banglaMonthIndex = 9;
      banglaYear = year - 594;
      startDate =
        new Date(
          year,
          0,
          15
        );

    }

    else if (
      (month === 1 && day >= 14) ||
      (month === 2 && day <= 14)
    ) {

      banglaMonthIndex = 10;
      banglaYear = year - 594;
      startDate =
        new Date(
          year,
          1,
          14
        );

    }

    else if (
      (month === 2 && day >= 15) ||
      (month === 3 && day <= 13)
    ) {

      banglaMonthIndex = 11;
      banglaYear = year - 594;
      startDate =
        new Date(
          year,
          2,
          15
        );

    }

    else if (
      (month === 3 && day >= 14) ||
      (month === 4 && day <= 14)
    ) {

      banglaMonthIndex = 0;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          3,
          14
        );

    }

    else if (
      (month === 4 && day >= 15) ||
      (month === 5 && day <= 14)
    ) {

      banglaMonthIndex = 1;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          4,
          15
        );

    }

    else if (
      (month === 5 && day >= 15) ||
      (month === 6 && day <= 15)
    ) {

      banglaMonthIndex = 2;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          5,
          15
        );

    }

    else if (
      (month === 6 && day >= 16) ||
      (month === 7 && day <= 15)
    ) {

      banglaMonthIndex = 3;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          6,
          16
        );

    }

    else if (
      (month === 7 && day >= 16) ||
      (month === 8 && day <= 15)
    ) {

      banglaMonthIndex = 4;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          7,
          16
        );

    }

    else if (
      (month === 8 && day >= 16) ||
      (month === 9 && day <= 15)
    ) {

      banglaMonthIndex = 5;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          8,
          16
        );

    }

    else if (
      (month === 9 && day >= 16) ||
      (month === 10 && day <= 14)
    ) {

      banglaMonthIndex = 6;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          9,
          16
        );

    }

    else if (
      (month === 10 && day >= 15) ||
      (month === 11 && day <= 15)
    ) {

      banglaMonthIndex = 7;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          10,
          15
        );

    }

    else {

      banglaMonthIndex = 8;
      banglaYear = year - 593;
      startDate =
        new Date(
          year,
          11,
          16
        );

    }


    const currentDate =
      new Date(
        year,
        month,
        day
      );


    const difference =
      Math.floor(
        (
          currentDate -
          startDate
        ) /
        (
          1000 *
          60 *
          60 *
          24
        )
      );


    const banglaDay =
      difference + 1;


    const season =
      mtePrayerGetBanglaSeason(
        banglaMonths[
          banglaMonthIndex
        ]
      );


    return {

      day: banglaDay,

      month:
        banglaMonths[
          banglaMonthIndex
        ],

      year: banglaYear,

      season: season.name,

      seasonIcon:
        season.icon

    };

  }


  /* =======================================================
     ১০. DATE FORMAT
     ======================================================= */

  function mtePrayerFormatBanglaDate(
    date
  ) {

    const banglaDate =
      mtePrayerGetBanglaDate(
        date
      );


    const weekday =
      MTE_BANGLA_WEEK_DAYS[
        date.getDay()
      ];


    return (
      weekday +
      ", " +
      mtePrayerBnNumber(
        banglaDate.day
      ) +
      " " +
      banglaDate.month +
      " " +
      mtePrayerBnNumber(
        banglaDate.year
      ) +
      " বঙ্গাব্দ"
    );

  }


  function mtePrayerFormatEnglishDate(
    date
  ) {

    const day =
      date.getDate();

    const month =
      date.toLocaleString(
        "en-US",
        {
          month: "long"
        }
      );

    const year =
      date.getFullYear();


    return (
      day +
      " " +
      month +
      " " +
      year
    );

  }


  /* =======================================================
     ১১. CREATE PRAYER SECTION
     ======================================================= */

  function mtePrayerCreateSection() {

    /*
      Prayer Times-এর HTML এখন index.html-এ স্থায়ীভাবে আছে।
      JavaScript শুধু Home Page-এ section দেখাবে এবং
      অন্য Page-এ লুকিয়ে রাখবে।
    */

    const section =
      document.getElementById("mtePrayerSection");

    if (!section) {
      console.warn("Prayer Times section not found in index.html");
      return;
    }

    const home = isHomePage();

    section.hidden = !home;

    /*
      School button event একবারই attach হবে।
      প্রতি 1 second-এ নতুন event listener তৈরি হবে না।
    */
    if (
      home &&
      section.dataset.eventsAttached !== "true"
    ) {
      mtePrayerAttachSchoolEvents();
      section.dataset.eventsAttached = "true";
    }

  }

  /* =======================================================
     ১২. ENSURE HOME PRAYER SECTION
     ======================================================= */

  function mtePrayerEnsureHomeSection() {

    if (!isHomePage()) {
      return;
    }


    /*
      mteRender() innerHTML পরিবর্তন করার পরে
      requestAnimationFrame ব্যবহার করে section বসানো।
    */

    requestAnimationFrame(
      function () {

        if (!isHomePage()) {
          return;
        }


        mtePrayerCreateSection();


        /*
          Section তৈরি হওয়ার পরে data আগে থেকে
          থাকলে আবার render করে দেওয়া হবে।
        */

        if (MTE_PRAYER_DATA) {

          mtePrayerRenderDates(
            MTE_PRAYER_DATA
          );

          mtePrayerRenderCards(
            MTE_PRAYER_DATA
          );

          mtePrayerUpdateLiveTime();

          mtePrayerUpdateCountdown();

        }

      }
    );

  }


  /*
    Main routing system যেন function-টি ব্যবহার করতে পারে।
  */

  window.mtePrayerEnsureHomeSection =
    mtePrayerEnsureHomeSection;


  /* =======================================================
     ১৩. SCHOOL BUTTON EVENTS
     ======================================================= */

  function mtePrayerAttachSchoolEvents() {

    const btnHanafi =
      document.getElementById(
        "mteBtnHanafi"
      );


    const btnShafii =
      document.getElementById(
        "mteBtnShafii"
      );


    if (
      btnHanafi &&
      btnShafii
    ) {


      btnHanafi.addEventListener(
        "click",
        function () {

          if (
            MTE_PRAYER_CONFIG.school !== 1
          ) {

            MTE_PRAYER_CONFIG.school = 1;

            btnHanafi.classList.add(
              "active"
            );

            btnShafii.classList.remove(
              "active"
            );

            mtePrayerLoad();

          }

        }
      );


      btnShafii.addEventListener(
        "click",
        function () {

          if (
            MTE_PRAYER_CONFIG.school !== 0
          ) {

            MTE_PRAYER_CONFIG.school = 0;

            btnShafii.classList.add(
              "active"
            );

            btnHanafi.classList.remove(
              "active"
            );

            mtePrayerLoad();

          }

        }
      );

    }

  }


  /* =======================================================
     ১৪. GEOLOCATION
     ======================================================= */

  function mtePrayerGetUserLocation() {

    if (
      "geolocation" in navigator
    ) {

      navigator.geolocation.getCurrentPosition(

        function (position) {

          MTE_PRAYER_CONFIG.latitude =
            position.coords.latitude;


          MTE_PRAYER_CONFIG.longitude =
            position.coords.longitude;


          mtePrayerUpdateLocationName(
            position.coords.latitude,
            position.coords.longitude
          );


          mtePrayerLoad();

        },


        function () {

          console.warn(
            "Geolocation fallback to city config."
          );

        }

      );

    }

  }


  async function mtePrayerUpdateLocationName(
    lat,
    lng
  ) {

    try {

      const response =
        await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=bn`
        );


      if (response.ok) {

        const data =
          await response.json();


        const locationText =
          document.getElementById(
            "mtePrayerLocationText"
          );


        if (locationText) {

          const city =
            data.city ||
            data.locality ||
            data.principalSubdivision ||
            "";


          const country =
            data.countryName ||
            "";


          locationText.textContent =
            `${city}${city && country ? ", " : ""}${country}`;

        }

      }

    } catch (e) {

      console.error(
        "Location name fetch error:",
        e
      );

    }

  }


  /* =======================================================
     ১৫. TIME HELPERS
     ======================================================= */

  function mtePrayerTimeToMinutes(
    time
  ) {

    if (!time) return null;


    const clean =
      String(time)
        .split(" ")[0];


    const parts =
      clean.split(":");


    if (parts.length < 2) {
      return null;
    }


    const hours =
      Number(parts[0]);


    const minutes =
      Number(parts[1]);


    if (
      Number.isNaN(hours) ||
      Number.isNaN(minutes)
    ) {

      return null;

    }


    return (
      hours * 60 +
      minutes
    );

  }


  function mtePrayerTimeToDate(
    date,
    time
  ) {

    const minutes =
      mtePrayerTimeToMinutes(
        time
      );


    if (minutes === null) {
      return null;
    }


    const result =
      new Date(date);


    result.setHours(
      Math.floor(minutes / 60),
      minutes % 60,
      0,
      0
    );


    return result;

  }


  function mtePrayerFormatTime(
    time
  ) {

    if (!time) return "—";


    const parts =
      String(time).split(":");


    if (parts.length < 2) {
      return time;
    }


    let hour =
      Number(parts[0]);


    const minute =
      Number(parts[1]);


    if (
      Number.isNaN(hour) ||
      Number.isNaN(minute)
    ) {

      return time;

    }


    const suffix =
      hour >= 12
        ? "PM"
        : "AM";


    hour =
      hour % 12 || 12;


    return (
      mtePrayerBnNumber(
        String(hour).padStart(2, "0")
      ) +
      ":" +
      mtePrayerBnNumber(
        String(minute).padStart(2, "0")
      ) +
      " " +
      suffix
    );

  }


  /* =======================================================
     ১৬. LIVE CLOCK
     ======================================================= */

  function mtePrayerUpdateLiveTime() {

    /*
      অন্য page-এ গেলে DOM element থাকে না।
      তাই সরাসরি return।
    */

    const digitalElement =
      document.getElementById(
        "mtePrayerLiveTime"
      );


    const hourHand =
      document.getElementById(
        "mtePrayerClockHour"
      );


    const minuteHand =
      document.getElementById(
        "mtePrayerClockMinute"
      );


    const secondHand =
      document.getElementById(
        "mtePrayerClockSecond"
      );


    if (
      !digitalElement &&
      !hourHand &&
      !minuteHand &&
      !secondHand
    ) {

      return;

    }


    const now =
      new Date();


    let hours =
      now.getHours();


    const minutes =
      now.getMinutes();


    const seconds =
      now.getSeconds();


    const suffix =
      hours >= 12
        ? "PM"
        : "AM";


    let displayHour =
      hours % 12 || 12;


    if (digitalElement) {

      digitalElement.textContent =

        mtePrayerBnNumber(
          String(displayHour)
            .padStart(2, "0")
        ) +

        ":" +

        mtePrayerBnNumber(
          String(minutes)
            .padStart(2, "0")
        ) +

        ":" +

        mtePrayerBnNumber(
          String(seconds)
            .padStart(2, "0")
        ) +

        " " +

        suffix;

    }


    const hourDegree =
      (
        (displayHour % 12) * 30
      ) +
      (minutes * 0.5);


    const minuteDegree =
      (minutes * 6) +
      (seconds * 0.1);


    const secondDegree =
      seconds * 6;


    if (hourHand) {

      hourHand.style.transform =
        "translateX(-50%) rotate(" +
        hourDegree +
        "deg)";

    }


    if (minuteHand) {

      minuteHand.style.transform =
        "translateX(-50%) rotate(" +
        minuteDegree +
        "deg)";

    }


    if (secondHand) {

      secondHand.style.transform =
        "translateX(-50%) rotate(" +
        secondDegree +
        "deg)";

    }

  }


  /* =======================================================
     ১৭. API DATA
     ======================================================= */

  let MTE_PRAYER_DATA = null;

  let MTE_PRAYER_TOMORROW_DATA = null;


  async function mtePrayerFetchData(
    date
  ) {

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");


    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");


    const year =
      date.getFullYear();


    let url = "";


    if (
      MTE_PRAYER_CONFIG.latitude &&
      MTE_PRAYER_CONFIG.longitude
    ) {

      url =
        MTE_PRAYER_CONFIG.api +
        "/" +
        day +
        "-" +
        month +
        "-" +
        year +
        "?latitude=" +
        MTE_PRAYER_CONFIG.latitude +
        "&longitude=" +
        MTE_PRAYER_CONFIG.longitude +
        "&method=" +
        MTE_PRAYER_CONFIG.method +
        "&school=" +
        MTE_PRAYER_CONFIG.school;

    }

    else {

      url =
        "https://api.aladhan.com/v1/timingsByCity" +
        "?city=" +
        encodeURIComponent(
          MTE_PRAYER_CONFIG.city
        ) +
        "&country=" +
        encodeURIComponent(
          MTE_PRAYER_CONFIG.country
        ) +
        "&method=" +
        MTE_PRAYER_CONFIG.method +
        "&school=" +
        MTE_PRAYER_CONFIG.school +
        "&date=" +
        day +
        "-" +
        month +
        "-" +
        year;

    }


    const response =
      await fetch(url);


    if (!response.ok) {

      throw new Error(
        "Prayer API request failed"
      );

    }


    const json =
      await response.json();


    if (!json.data) {

      throw new Error(
        "Prayer data unavailable"
      );

    }


    return json.data;

  }


  /* =======================================================
     ১৮. RENDER DATE
     ======================================================= */

  function mtePrayerRenderDates(
    data
  ) {

    const now =
      new Date();


    const banglaDate =
      document.getElementById(
        "mtePrayerBanglaDate"
      );


    const banglaSeason =
      document.getElementById(
        "mtePrayerBanglaSeason"
      );


    const englishDate =
      document.getElementById(
        "mtePrayerEnglishDate"
      );


    const hijriDate =
      document.getElementById(
        "mtePrayerHijriDate"
      );


    const banglaDateData =
      mtePrayerGetBanglaDate(
        now
      );


    if (banglaDate) {

      banglaDate.textContent =
        mtePrayerFormatBanglaDate(
          now
        );

    }


    if (banglaSeason) {

      banglaSeason.textContent =
        "ঋতু: " +
        banglaDateData.season +
        " " +
        banglaDateData.seasonIcon;

    }


    if (englishDate) {

      englishDate.textContent =
        mtePrayerFormatEnglishDate(
          now
        );

    }


    if (
      hijriDate &&
      data &&
      data.date &&
      data.date.hijri
    ) {

      const hijri =
        data.date.hijri;


      const monthName =
        hijri.month
          ? (
              hijri.month.en ||
              hijri.month.ar ||
              hijri.month.number
            )
          : "";


      const monthNumber =
        hijri.month
          ? hijri.month.number
          : "";


      const banglaMonth =
        mtePrayerBanglaHijriMonth(
          monthName,
          monthNumber
        );


      hijriDate.textContent =

        mtePrayerBnNumber(
          hijri.day
        ) +

        " " +

        banglaMonth +

        " " +

        mtePrayerBnNumber(
          hijri.year
        ) +

        " হিজরি";

    }

  }


  /* =======================================================
     ১৯. RENDER PRAYER CARDS
     ======================================================= */

  function mtePrayerRenderCards(
    data
  ) {

    const cards =
      document.getElementById(
        "mtePrayerCards"
      );


    if (!cards || !data) {
      return;
    }


    const timings =
      data.timings;


    let html = "";


    MTE_MAIN_PRAYERS.forEach(
      function (prayer) {

        const time =
          timings[prayer];


        html += `

          <div
            class="mte-prayer-card"
            data-prayer="${prayer}">

            <span
              class="mte-prayer-card-icon">
              ${MTE_PRAYER_ICONS[prayer]}
            </span>

            <span
              class="mte-prayer-card-name">
              ${MTE_PRAYER_NAMES[prayer]}
            </span>

            <span
              class="mte-prayer-card-time">
              ${mtePrayerFormatTime(time)}
            </span>

          </div>

        `;

      }
    );


    cards.innerHTML = html;

  }


  /* =======================================================
     ২০. STATE
     ======================================================= */

  function mtePrayerGetState() {

    if (!MTE_PRAYER_DATA) {
      return null;
    }


    const now =
      new Date();


    const today =
      new Date(now);


    const timings =
      MTE_PRAYER_DATA.timings;


    const fajr =
      mtePrayerTimeToDate(
        today,
        timings.Fajr
      );


    const sunrise =
      mtePrayerTimeToDate(
        today,
        timings.Sunrise
      );


    const dhuhr =
      mtePrayerTimeToDate(
        today,
        timings.Dhuhr
      );


    const asr =
      mtePrayerTimeToDate(
        today,
        timings.Asr
      );


    const maghrib =
      mtePrayerTimeToDate(
        today,
        timings.Maghrib
      );


    const isha =
      mtePrayerTimeToDate(
        today,
        timings.Isha
      );


    const prayerTimes = {

      Fajr: fajr,
      Dhuhr: dhuhr,
      Asr: asr,
      Maghrib: maghrib,
      Isha: isha

    };


    let current = null;


    if (
      fajr &&
      sunrise &&
      now >= fajr &&
      now < sunrise
    ) {

      current = "Fajr";

    }

    else if (
      dhuhr &&
      asr &&
      now >= dhuhr &&
      now < asr
    ) {

      current = "Dhuhr";

    }

    else if (
      asr &&
      maghrib &&
      now >= asr &&
      now < maghrib
    ) {

      current = "Asr";

    }

    else if (
      maghrib &&
      isha &&
      now >= maghrib &&
      now < isha
    ) {

      current = "Maghrib";

    }

    else if (
      isha &&
      now >= isha
    ) {

      current = "Isha";

    }


    let next = null;


    for (
      let i = 0;
      i < MTE_MAIN_PRAYERS.length;
      i++
    ) {

      const prayer =
        MTE_MAIN_PRAYERS[i];


      if (
        prayer === "Sunrise"
      ) {
        continue;
      }


      const prayerDate =
        prayerTimes[prayer];


      if (
        prayerDate &&
        prayerDate > now
      ) {

        next = {

          key: prayer,

          name:
            MTE_PRAYER_NAMES[
              prayer
            ],

          date:
            prayerDate

        };


        break;

      }

    }


    if (
      !next &&
      MTE_PRAYER_TOMORROW_DATA
    ) {

      const tomorrow =
        new Date(now);


      tomorrow.setDate(
        tomorrow.getDate() + 1
      );


      const tomorrowFajr =
        mtePrayerTimeToDate(
          tomorrow,
          MTE_PRAYER_TOMORROW_DATA
            .timings
            .Fajr
        );


      if (tomorrowFajr) {

        next = {

          key: "Fajr",

          name: "ফজর",

          date: tomorrowFajr

        };

      }

    }


    return {

      current: current,

      next: next

    };

  }


  /* =======================================================
     ২১. ACTIVE PRAYER
     ======================================================= */

  function mtePrayerUpdateActivePrayer(
    current
  ) {

    const cards =
      document.querySelectorAll(
        "#mtePrayerSection .mte-prayer-card"
      );


    cards.forEach(
      function (card) {

        card.classList.remove(
          "mte-prayer-active"
        );


        if (
          current &&
          card.dataset.prayer ===
          current
        ) {

          card.classList.add(
            "mte-prayer-active"
          );

        }

      }
    );

  }


  /* =======================================================
     ২২. COUNTDOWN
     ======================================================= */

  function mtePrayerUpdateCountdown() {

    const state =
      mtePrayerGetState();


    if (!state) {
      return;
    }


    const currentMessage =
      document.getElementById(
        "mtePrayerCountdownMessage"
      );


    const nextName =
      document.getElementById(
        "mtePrayerNextName"
      );


    const countdownText =
      document.getElementById(
        "mtePrayerCountdownText"
      );


    const hours =
      document.getElementById(
        "mtePrayerHours"
      );


    const minutes =
      document.getElementById(
        "mtePrayerMinutes"
      );


    const seconds =
      document.getElementById(
        "mtePrayerSeconds"
      );


    const nextStartTime =
      document.getElementById(
        "mtePrayerNextStartTime"
      );


    if (currentMessage) {

      currentMessage.textContent =
        state.current
          ? (
              "🕌 বর্তমানে " +
              MTE_PRAYER_NAMES[
                state.current
              ] +
              " নামাজের ওয়াক্ত চলছে"
            )
          : "🕌 বর্তমানে কোনো নামাজের ওয়াক্ত চলছে না";

    }


    if (state.next) {

      if (nextName) {

        nextName.textContent =
          state.next.name;

      }


      if (countdownText) {

        countdownText.textContent =
          state.next.name +
          " ওয়াক্ত শুরু হতে বাকি";

      }


      if (nextStartTime) {

        const time =
          state.next.date;


        let hour =
          time.getHours();


        const minute =
          time.getMinutes();


        const suffix =
          hour >= 12
            ? "PM"
            : "AM";


        hour =
          hour % 12 || 12;


        nextStartTime.textContent =

          state.next.name +
          " ওয়াক্ত শুরু হবে: " +

          mtePrayerBnNumber(
            String(hour)
              .padStart(2, "0")
          ) +

          ":" +

          mtePrayerBnNumber(
            String(minute)
              .padStart(2, "0")
          ) +

          " " +

          suffix;

      }


      const now =
        new Date();


      const difference =
        Math.max(
          0,
          state.next.date - now
        );


      const totalSeconds =
        Math.floor(
          difference / 1000
        );


      const h =
        Math.floor(
          totalSeconds / 3600
        );


      const m =
        Math.floor(
          (totalSeconds % 3600) / 60
        );


      const s =
        totalSeconds % 60;


      if (hours) {

        hours.textContent =
          mtePrayerBnNumber(
            String(h)
              .padStart(2, "0")
          );

      }


      if (minutes) {

        minutes.textContent =
          mtePrayerBnNumber(
            String(m)
              .padStart(2, "0")
          );

      }


      if (seconds) {

        seconds.textContent =
          mtePrayerBnNumber(
            String(s)
              .padStart(2, "0")
          );

      }

    }

  }


  /* =======================================================
     ২৩. LOAD PRAYER DATA
     ======================================================= */

  let mtePrayerLoading = false;


  async function mtePrayerLoad() {

    /*
      Home না হলে API request করার দরকার নেই।
    */

    if (!isHomePage()) {
      return;
    }


    /*
      একই সময়ে একাধিক request আটকানো।
    */

    if (mtePrayerLoading) {
      return;
    }


    mtePrayerLoading = true;


    try {

      /*
        Section আগে নিশ্চিত করা।
      */

      mtePrayerEnsureHomeSection();


      const today =
        new Date();


      const tomorrow =
        new Date(today);


      tomorrow.setDate(
        tomorrow.getDate() + 1
      );


      MTE_PRAYER_DATA =
        await mtePrayerFetchData(
          today
        );


      MTE_PRAYER_TOMORROW_DATA =
        await mtePrayerFetchData(
          tomorrow
        );


      /*
        Render করার সময় যদি user
        অন্য page-এ চলে যায়,
        তখন DOM element না থাকলেও
        কোনো error হবে না।
      */

      if (!isHomePage()) {
        return;
      }


      mtePrayerEnsureHomeSection();


      mtePrayerRenderDates(
        MTE_PRAYER_DATA
      );


      mtePrayerRenderCards(
        MTE_PRAYER_DATA
      );


      mtePrayerUpdateLiveTime();


      mtePrayerUpdateCountdown();


      const state =
        mtePrayerGetState();


      if (state) {

        mtePrayerUpdateActivePrayer(
          state.current
        );

      }


    } catch (error) {

      console.error(
        "Prayer Times Error:",
        error
      );


      const cards =
        document.getElementById(
          "mtePrayerCards"
        );


      if (cards) {

        cards.innerHTML = `

          <div class="mte-prayer-loading">

            নামাজের সময় লোড করা যাচ্ছে না।

            <br>

            <small>
              ইন্টারনেট সংযোগ পরীক্ষা করুন।
            </small>

          </div>

        `;

      }

    } finally {

      mtePrayerLoading = false;

    }

  }


  /* =======================================================
     ২৪. SINGLE GLOBAL TIMER
     ======================================================= */

  let mtePrayerInterval = null;


  function mtePrayerStartTimer() {

    /*
      আগে timer থাকলে নতুন timer তৈরি হবে না।
    */

    if (mtePrayerInterval) {
      return;
    }


    mtePrayerInterval =
      setInterval(
        function () {

          /*
            Home না হলে শুধু DOM update করবে না।
            কিন্তু timer বন্ধও করা হচ্ছে না,
            যাতে Home-এ ফিরে এলে সঙ্গে সঙ্গে কাজ করে।
          */

          if (!isHomePage()) {
            return;
          }


          mtePrayerEnsureHomeSection();


          mtePrayerUpdateLiveTime();


          mtePrayerUpdateCountdown();


          const state =
            mtePrayerGetState();


          if (state) {

            mtePrayerUpdateActivePrayer(
              state.current
            );

          }

        },
        1000
      );

  }


  /* =======================================================
     ২৫. PRAYER INIT
     ======================================================= */

  function mtePrayerInit() {

    /*
      Home হলে section তৈরি হবে।
    */

    if (isHomePage()) {

      mtePrayerCreateSection();

      mtePrayerGetUserLocation();

      mtePrayerLoad();

    }


    /*
      Timer একবারই চালু হবে।
    */

    mtePrayerStartTimer();

  }


  /* =======================================================
     ২৬. ROUTING-এর সাথে PRAYER SYNC
     ======================================================= */

  window.addEventListener(
    "hashchange",
    function () {

      /*
        mteRender() আগে/পরে যেভাবেই চলে,
        একটু পরে prayer section নিশ্চিত করা হবে।
      */

      setTimeout(
        function () {

          /*
            প্রতিটি Page change-এ Prayer section-এর
            visibility ঠিক করা হবে।
          */
          mtePrayerCreateSection();

          if (isHomePage()) {

            /*
              Home-এ ফিরে এলে যদি data থাকে,
              তা আবার দেখানো হবে।
            */

            if (MTE_PRAYER_DATA) {

              mtePrayerRenderDates(
                MTE_PRAYER_DATA
              );

              mtePrayerRenderCards(
                MTE_PRAYER_DATA
              );

              mtePrayerUpdateLiveTime();

              mtePrayerUpdateCountdown();

              const state =
                mtePrayerGetState();


              if (state) {

                mtePrayerUpdateActivePrayer(
                  state.current
                );

              }

            }

          }

        },
        50
      );

    }
  );


  /* =======================================================
     ২৭. START
     ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      mtePrayerInit,
      { once: true }
    );

  } else {

    mtePrayerInit();

  }


})();




/* =========================================================
   1. HOME PAGE ONLY CHECKER
   ========================================================= */

function mteAddedSliderIsHomePage() {
  const hash = window.location.hash
    .replace(/^#\/?/, "")
    .split("/")[0]
    .trim()
    .toLowerCase();

  return hash === "" || hash === "home";
}

function mteFindAddedSliderContainer(element) {
  if (!element) return null;

  let node = element.parentElement;
  let level = 0;

  while (node && node !== document.body && level < 8) {
    const hasSlides = !!node.querySelector(".slider-wrapper .slide");
    if (hasSlides) return node;
    node = node.parentElement;
    level++;
  }

  return element.parentElement && element.parentElement !== document.body
    ? element.parentElement
    : null;
}

function mteAddedSlidersHomeOnly() {
  const show = mteAddedSliderIsHomePage();

  document.querySelectorAll(".slider-wrapper .slide").forEach(function (slide) {
    const container = mteFindAddedSliderContainer(slide);
    if (container) {
      container.hidden = !show;
    }
  });
}

/* =========================================================
   2. MAIN SINGLE SLIDER LOGIC
   ========================================================= */

let currentSlideIndex = 0;
const mteAddedSlides = document.querySelectorAll(".slider-wrapper .slide");
const mteDotsContainer = document.getElementById("imageDotsContainer");
let autoSlideInterval;

// ছবির সংখ্যা গুনে স্বয়ংক্রিয়ভাবে সঠিক সংখ্যক ডট তৈরি করা
function createDynamicDots() {
  if (!mteDotsContainer || !mteAddedSlides.length) return;

  mteDotsContainer.innerHTML = ""; // আগের কোনো ডট থাকলে পরিষ্কার করা

  mteAddedSlides.forEach(function (_, index) {
    const dot = document.createElement("span");
    dot.className = "dot" + (index === 0 ? " active" : "");

    dot.addEventListener("click", function () {
      currentSlide(index);
    });

    mteDotsContainer.appendChild(dot);
  });
}

function showSlide(index) {
  if (!mteAddedSlides.length) return;

  if (index >= mteAddedSlides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = mteAddedSlides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  // সব স্লাইড থেকে active ক্লাস বের করা
  mteAddedSlides.forEach(function (slide) {
    slide.classList.remove("active");
  });

  // সব ডট থেকে active ক্লাস বের করা
  const currentDots = mteDotsContainer ? mteDotsContainer.querySelectorAll(".dot") : [];
  currentDots.forEach(function (dot) {
    dot.classList.remove("active");
  });

  // নির্দিষ্ট স্লাইড ও ডটে active ক্লাস যোগ করা
  if (mteAddedSlides[currentSlideIndex]) {
    mteAddedSlides[currentSlideIndex].classList.add("active");
  }

  if (currentDots[currentSlideIndex]) {
    currentDots[currentSlideIndex].classList.add("active");
  }
}

function moveSlide(step) {
  if (!mteAddedSlides.length) return;
  showSlide(currentSlideIndex + step);
  resetAutoSlide();
}

function currentSlide(index) {
  if (!mteAddedSlides.length) return;
  showSlide(index);
  resetAutoSlide();
}

function startAutoSlide() {
  if (!mteAddedSlides.length) return;
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(function () {
    moveSlide(1);
  }, 4000); // ৪ সেকেন্ড পর পর ঘুরবে
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

/* =========================================================
   3. INITIALIZE SLIDER & ROUTE SYNC
   ========================================================= */

if (mteAddedSlides.length) {
  createDynamicDots(); // স্বয়ংক্রিয় ডট তৈরি
  showSlide(0);
  startAutoSlide();
}

mteAddedSlidersHomeOnly();

window.addEventListener("hashchange", function () {
  mteAddedSlidersHomeOnly();
});





document.addEventListener("DOMContentLoaded", function () {
  /* =========================================================
     BOOK SLIDER — SCOPED VERSION
     শুধুমাত্র .book-slider-এর স্লাইড নিয়ন্ত্রণ করবে।
     Hero/Image Slider-এর সাথে আর conflict করবে না।
     ========================================================= */

  const bookWrapper = document.querySelector(".book-slider-wrapper");
  const bookContainer = document.querySelector(".book-slider-container");
  const bookSlider = document.querySelector(".book-slider");
  const bookSlides = document.querySelectorAll(".book-slider .book-slide");
  const bookDots = document.getElementById("bookDotsContainer");
  const bookPrev = document.querySelector(".book-slider-container .prev-btn");
  const bookNext = document.querySelector(".book-slider-container .next-btn");

  let bookIndex = 0;
  let bookTimer = null;
  let bookTouchStartX = 0;
  let bookTouchStartY = 0;

  if (!bookSlider || !bookSlides.length) return;

  /* Home page checker */
  function isBookHomePage() {
    const hash = window.location.hash.replace(/^#\/?/, "").split("/")[0].trim().toLowerCase();
    return hash === "" || hash === "home";
  }

  function setBookVisibility() {
    if (!bookWrapper) return;

    if (isBookHomePage()) {
      bookWrapper.style.setProperty("display", "block", "important");
      startBookAutoSlide();
    } else {
      bookWrapper.style.setProperty("display", "none", "important");
      stopBookAutoSlide();
    }
  }

  /* Dynamic dots */
  function createBookDots() {
    if (!bookDots) return;

    bookDots.innerHTML = "";

    bookSlides.forEach(function (_, index) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "book-dot" + (index === 0 ? " active" : "");
      dot.setAttribute("aria-label", "বই " + (index + 1));

      dot.addEventListener("click", function () {
        showBookSlide(index);
        restartBookAutoSlide();
      });

      bookDots.appendChild(dot);
    });
  }

  function showBookSlide(index) {
    if (index >= bookSlides.length) {
      bookIndex = 0;
    } else if (index < 0) {
      bookIndex = bookSlides.length - 1;
    } else {
      bookIndex = index;
    }

    bookSlides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === bookIndex);
    });

    const dots = bookDots ? bookDots.querySelectorAll(".book-dot") : [];

    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === bookIndex);
    });
  }

  function moveBookSlide(step) {
    showBookSlide(bookIndex + step);
    restartBookAutoSlide();
  }

  function startBookAutoSlide() {
    stopBookAutoSlide();

    if (!isBookHomePage()) return;

    bookTimer = setInterval(function () {
      showBookSlide(bookIndex + 1);
    }, 4500);
  }

  function stopBookAutoSlide() {
    if (bookTimer) {
      clearInterval(bookTimer);
      bookTimer = null;
    }
  }

  function restartBookAutoSlide() {
    stopBookAutoSlide();
    startBookAutoSlide();
  }

  /* Buttons */
  if (bookPrev) {
    bookPrev.addEventListener("click", function (e) {
      e.preventDefault();
      moveBookSlide(-1);
    });
  }

  if (bookNext) {
    bookNext.addEventListener("click", function (e) {
      e.preventDefault();
      moveBookSlide(1);
    });
  }

  /* Mobile swipe */
  if (bookContainer) {
    bookContainer.addEventListener("touchstart", function (e) {
      if (!e.touches.length) return;

      bookTouchStartX = e.touches[0].clientX;
      bookTouchStartY = e.touches[0].clientY;
      stopBookAutoSlide();
    }, { passive: true });

    bookContainer.addEventListener("touchend", function (e) {
      if (!e.changedTouches.length) {
        startBookAutoSlide();
        return;
      }

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const diffX = endX - bookTouchStartX;
      const diffY = endY - bookTouchStartY;

      /* Horizontal swipe হলে শুধু slider move করবে */
      if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          showBookSlide(bookIndex + 1);
        } else {
          showBookSlide(bookIndex - 1);
        }
      }

      startBookAutoSlide();
    }, { passive: true });

    /* Mouse দিয়ে hover করলে auto-slide pause */
    bookContainer.addEventListener("mouseenter", stopBookAutoSlide);
    bookContainer.addEventListener("mouseleave", startBookAutoSlide);
  }

  /* Route changes */
  window.addEventListener("hashchange", function () {
    setBookVisibility();
  });

  window.addEventListener("popstate", function () {
    setBookVisibility();
  });

  /* Initial */
  createBookDots();
  showBookSlide(0);
  setBookVisibility();
});



/* =====================================================
   ONLINE COURSE SYSTEM
   ===================================================== */

const onlineCourses = {

    tajweed: {
        title: "সহজ পদ্ধতিতে তাজবীদ ও সিফাত",
        description:
            "কুরআন মাজীদ শুদ্ধভাবে পড়ার জন্য প্রয়োজনীয় তাজবীদ ও সিফাত সহজ পদ্ধতিতে শেখানো হবে।",

        modules: [
            "মডিউল ০১ — তাজবীদের পরিচয়",
            "মডিউল ০২ — মাখারিজুল হুরূফ",
            "মডিউল ০৩ — সিফাতুল হুরূফ",
            "মডিউল ০৪ — গুন্নাহ",
            "মডিউল ০৫ — ক্বলকলাহ",
            "মডিউল ০৬ — মীম সাকিন",
            "মডিউল ০৭ — নূন সাকিন ও তানভীন",
            "মডিউল ০৮ — মাদ্দ",
            "মডিউল ০৯ — ওয়াকফ ও ইবতিদা",
            "মডিউল ১০ — অনুশীলন ও সংশোধন"
        ]
    },

    qaida: {
        title: "সহজ পদ্ধতিতে নূরাণী কায়দা",
        description:
            "শিশুদের কুরআন শিক্ষার প্রাথমিক ধাপ হিসেবে নূরাণী কায়দা সহজভাবে শেখানো হবে।",

        modules: [
            "মডিউল ০১ — আরবি হরফ পরিচয়",
            "মডিউল ০২ — হরফের মাখরাজ",
            "মডিউল ০৩ — যবর, যের ও পেশ",
            "মডিউল ০৪ — তানভীন",
            "মডিউল ০৫ — জযম",
            "মডিউল ০৬ — তাশদীদ",
            "মডিউল ০৭ — মাদ্দ",
            "মডিউল ০৮ — মীম সাকিন",
            "মডিউল ০৯ — নূন সাকিন",
            "মডিউল ১০ — কুরআন পড়ার অনুশীলন"
        ]
    },

    dua: {
        title: "প্রয়োজনীয় দোয়া ও মাসআলা",
        description:
            "দৈনন্দিন জীবনের প্রয়োজনীয় দোয়া, মাসআলা ও ইসলামী আদব-কায়দা সম্পর্কে সহজ পাঠ।",

        modules: [
            "মডিউল ০১ — ঈমানের মৌলিক বিষয়",
            "মডিউল ০২ — পবিত্রতার মাসআলা",
            "মডিউল ০৩ — অযুর নিয়ম",
            "মডিউল ০৪ — নামাজের প্রয়োজনীয় মাসআলা",
            "মডিউল ০৫ — খাবারের দোয়া",
            "মডিউল ০৬ — ঘুমানোর দোয়া",
            "মডিউল ০৭ — ঘর থেকে বের হওয়ার দোয়া",
            "মডিউল ০৮ — মসজিদ সম্পর্কিত দোয়া"
        ]
    }
};


function openCourseDetails(courseId) {

    const course = onlineCourses[courseId];

    if (!course) return;

    const title =
        document.getElementById("modalCourseTitle");

    const description =
        document.getElementById("modalCourseDescription");

    const modules =
        document.getElementById("courseModules");

    title.textContent = course.title;

    description.textContent = course.description;

    modules.innerHTML = "";

    course.modules.forEach((module, index) => {

        const item = document.createElement("div");

        item.className = "course-module";

        item.innerHTML =
            "▶ " + module;

        modules.appendChild(item);
    });

    document
        .getElementById("courseModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeCourseDetails() {

    document
        .getElementById("courseModal")
        .classList.remove("show");

    document.body.style.overflow = "";
}


function showPaymentMessage() {

    alert(
        "পেমেন্ট করার পর আপনার নাম, মোবাইল নম্বর এবং Transaction ID প্রদান করুন।"
    );
}


/* Modal-এর বাইরে ক্লিক করলে বন্ধ হবে */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("courseModal");

    if (
        event.target === modal
    ) {
        closeCourseDetails();
    }

});


/* ESC চাপলে বন্ধ */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCourseDetails();
    }

});


/* =========================================================
   HEADER TOUCH + HOME CLICK => SCROLL TO TOP
   ========================================================= */

(function () {
  function mteScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Header-এ টাচ করলে উপরে যাবে, কিন্তু Menu button-এ টাচ করলে
  // শুধু Menu-এর স্বাভাবিক কাজ হবে।
  const header = document.getElementById("mteHeader");

  if (header) {
    header.addEventListener("click", function (e) {
      if (e.target.closest("#mteMenuToggle")) {
        return;
      }

      mteScrollToTop();
    });
  }

  // Menu থেকে Home চাপলে উপরে যাবে।
  document.addEventListener("click", function (e) {
    const homeLink = e.target.closest('a[href="#home"]');

    if (!homeLink) {
      return;
    }

    setTimeout(function () {
      mteScrollToTop();
    }, 50);
  });
})();


// Testimonials Slider Script
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("testiSliderContainer");
  const prevBtn = document.getElementById("testiPrevBtn");
  const nextBtn = document.getElementById("testiNextBtn");
  const dotsContainer = document.getElementById("testiDotsContainer");

  if (!container || !prevBtn || !nextBtn || !dotsContainer) return;

  const cards = container.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  // ডট তৈরি করা
  cards.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("testi-dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => scrollToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".testi-dot");

  function updateDots() {
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  function scrollToSlide(index) {
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;

    currentIndex = index;
    const cardWidth = cards[0].offsetWidth + 20; // 20px gap
    container.scrollTo({
      left: cardWidth * currentIndex,
      behavior: "smooth"
    });
    updateDots();
  }

  nextBtn.addEventListener("click", () => scrollToSlide(currentIndex + 1));
  prevBtn.addEventListener("click", () => scrollToSlide(currentIndex - 1));

  // অটো-স্লাইড (প্রতি ৪ সেকেন্ড পর পর)
  let autoSlide = setInterval(() => scrollToSlide(currentIndex + 1), 4000);

  // মাউস রাখলে অটো-স্লাইড বন্ধ থাকা
  container.addEventListener("mouseenter", () => clearInterval(autoSlide));
  container.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => scrollToSlide(currentIndex + 1), 4000);
  });
});



/* =====================================================
   FAQ — START
   একটি FAQ খুললে অন্য FAQ বন্ধ হবে
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(
    ".faq-section .faq-item"
  );

  faqItems.forEach(function (item) {

    item.addEventListener("toggle", function () {

      if (item.open) {

        faqItems.forEach(function (otherItem) {

          if (otherItem !== item) {
            otherItem.removeAttribute("open");
          }

        });

      }

    });

  });

});

/* =====================================================
   FAQ — END
   ===================================================== */



   /* =====================================================
   COUNTER FULL FADE IN + COUNT UP — START
   ===================================================== */

document.addEventListener("DOMContentLoaded", function(){

  /* ---------------------------------------------
     Counter Section খুঁজে বের করা
     --------------------------------------------- */

  const counterSection =
    document.querySelector(
      ".counter-section"
    );


  /* Section না থাকলে কিছু করবে না */

  if(!counterSection){

    return;

  }


  /* ---------------------------------------------
     সব Counter Number
     --------------------------------------------- */

  const counters =
    counterSection.querySelectorAll(
      ".counter-number"
    );


  /* বাংলা সংখ্যা */

  const banglaDigits =
    "০১২৩৪৫৬৭৮৯";


  /* একবারই Animation হবে */

  let started = false;


  /* ---------------------------------------------
     বাংলা সংখ্যা → ইংরেজি সংখ্যা
     --------------------------------------------- */

  function banglaToEnglish(value){

    return value.replace(
      /[০-৯]/g,
      function(digit){

        return banglaDigits.indexOf(
          digit
        );

      }
    );

  }


  /* ---------------------------------------------
     ইংরেজি সংখ্যা → বাংলা সংখ্যা
     --------------------------------------------- */

  function englishToBangla(value){

    return String(value).replace(
      /\d/g,
      function(digit){

        return banglaDigits[digit];

      }
    );

  }


  /* ---------------------------------------------
     Counter Start
     --------------------------------------------- */

  function startCounter(){


    /* ইতিমধ্যে শুরু হলে আবার করবে না */

    if(started){

      return;

    }


    started = true;


    /* -----------------------------------------
       পুরো Section Fade In
       ----------------------------------------- */

    counterSection.classList.add(
      "counter-section-visible"
    );


    /* -----------------------------------------
       প্রতিটি Number Count Up
       ----------------------------------------- */

    counters.forEach(
      function(counter){


        /* যেমন: ৫০০+ */

        const originalText =
          counter.textContent.trim();


        /* শুধু সংখ্যা নেওয়া */

        const numberOnly =
          originalText.replace(
            /[^\d০-৯]/g,
            ""
          );


        /* Target Number */

        const target =
          parseInt(
            banglaToEnglish(
              numberOnly
            ),
            10
          );


        /* Number না হলে বাদ */

        if(isNaN(target)){

          return;

        }


        /* -------------------------------------
           Count Settings
           ------------------------------------- */

        const duration = 2000;

        const startTime =
          performance.now();


        /* -------------------------------------
           Count Animation
           ------------------------------------- */

        function countUp(currentTime){


          /* কত সময় পার হয়েছে */

          const elapsed =
            currentTime -
            startTime;


          /* Progress */

          const progress =
            Math.min(
              elapsed / duration,
              1
            );


          /* Smooth Ease Out */

          const easeOut =
            1 -
            Math.pow(
              1 - progress,
              3
            );


          /* Current Number */

          const currentNumber =
            Math.floor(
              target * easeOut
            );


          /* বাংলা সংখ্যা দেখানো */

          counter.textContent =
            englishToBangla(
              currentNumber
            ) + "+";


          /* Count শেষ হয়নি */

          if(progress < 1){


            requestAnimationFrame(
              countUp
            );


          }


          /* Count শেষ */

          else{


            counter.textContent =
              englishToBangla(
                target
              ) + "+";


          }

        }


        /* Animation শুরু */

        requestAnimationFrame(
          countUp
        );


      }
    );

  }


  /* ---------------------------------------------
     Scroll Detection
     --------------------------------------------- */

  const observer =
    new IntersectionObserver(

      function(entries){


        entries.forEach(
          function(entry){


            /* Section Screen-এ এসেছে */

            if(
              entry.isIntersecting
            ){


              startCounter();


              /* Observer বন্ধ */

              observer.disconnect();


            }

          }
        );


      },

      {

        /*
         * Section-এর ২৫%
         * Screen-এ এলেই Animation শুরু
         */

        threshold:0.25

      }

    );


  /* Counter Section Observe */

  observer.observe(
    counterSection
  );


});


/* =====================================================
   COUNTER FULL FADE IN + COUNT UP — END
   ===================================================== */


/* =====================================================
   MTE EXTRA FEATURES — JS

   01. Scroll Progress Bar
   03. Smooth Scroll
   08. New Typing Animation
   12. Page Loading Animation

   ===================================================== */


/* =====================================================
   01. SCROLL PROGRESS BAR — START
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    const progressBar =
      document.getElementById(
        "mteScrollProgress"
      );


    if(!progressBar){
      return;
    }


    function updateScrollProgress(){

      const scrollTop =
        window.scrollY || window.pageYOffset;


      const totalHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;


      if(totalHeight<=0){

        progressBar.style.width="0%";

        return;

      }


      let progress =
        (scrollTop / totalHeight) * 100;


      progress =
        Math.max(
          0,
          Math.min(
            progress,
            100
          )
        );


      progressBar.style.width =
        progress + "%";

    }


    window.addEventListener(
      "scroll",
      updateScrollProgress,
      {
        passive:true
      }
    );


    window.addEventListener(
      "resize",
      updateScrollProgress
    );


    updateScrollProgress();

  }
);


/* =====================================================
   SCROLL PROGRESS BAR — END
   ===================================================== */


/* =====================================================
   03. SMOOTH SCROLL — START
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    const links =
      document.querySelectorAll(
        '.mte-site a[href^="#"]'
      );


    links.forEach(
      function(link){

        link.addEventListener(
          "click",
          function(event){

            const targetId =
              this.getAttribute(
                "href"
              );


            if(
              !targetId ||
              targetId === "#"
            ){

              return;

            }


            let target;


            try{

              target =
                document.querySelector(
                  targetId
                );

            }catch(error){

              return;

            }


            if(!target){

              return;

            }


            event.preventDefault();


            target.scrollIntoView({

              behavior:"smooth",

              block:"start"

            });

          }
        );

      }
    );

  }
);


/* =====================================================
   SMOOTH SCROLL — END
   ===================================================== */




/* =====================================================
   12. PAGE LOADER — START
   ===================================================== */

window.addEventListener(
  "load",
  function(){

    const loader =
      document.getElementById(
        "mtePageLoader"
      );


    if(!loader){

      return;

    }


    setTimeout(
      function(){

        loader.classList.add(
          "mte-loader-hidden"
        );


        setTimeout(
          function(){

            loader.style.display="none";

          },
          650
        );


      },
      400
    );

  }
);


/* =====================================================
   PAGE LOADER — END
   ===================================================== */


   /* =====================================================
   NEW TYPING ANIMATION — JS START
   ===================================================== */


/* =========================================================
   mteDoyaData (১ থেকে ৬০ পর্যন্ত ডেটা)
   ========================================================= */
var mteDoyaData = [
 {
    no:1,
    title:"আল্লাহ তা'আলা, ইসলাম ও মুহাম্মদ (ﷺ)-এর প্রতি আদব এবং দু'আ",
    page:"৫",
    icon:"☪️",
    adab:"আল্লাহ তা'আলাকে রব, ইসলামকে দীন এবং মুহাম্মদ (ﷺ)-কে নাবী হিসেবে সন্তুষ্টচিত্তে গ্রহণ করা।",
    arabic:"رَضِيْتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ نَبِيًّا.",
    pronunciation:"রযীতু বিল্লা-হি রব্বা-, ওয়াবিল ইস্লা-মি দীনা-, ওয়াবি মুহাম্মাদিন্ নাবিয়্যা-।",
    meaning:"আমি আল্লাহকে আমার রব বা প্রতিপালক, ইসলামকে আমার দীন এবং মুহাম্মাদ (ﷺ)-কে আমার নাবী হিসেবে সন্তুষ্টচিত্তে গ্রহণ করেছি। (সহীহ মুসলিম- হাঃ ৩৮৬)"
  },
  {
    no:2,
    title:"তাওহীদের আদব ও দু'আ",
    page:"১০",
    icon:"🕋",
    adab:"একমাত্র আল্লাহর ইবাদত করা এবং তাঁর কাছেই সাহায্য চাওয়া।",
    arabic:"إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    pronunciation:"ঈয়্যাকা না'বুদু ওয়া ঈয়্যাকা নাস্তা'ঈন।",
    meaning:"নিশ্চয়ই আমরা আপনারই 'ইবাদত করি, এবং আপনারই নিকট সাহায্য কামনা করি। (সূরা ফাতিহা: ৫)"
  },
  {
    no:3,
    title:"সিজদার আদব ও দু'আ",
    page:"১০",
    icon:"🤲",
    adab:"আল্লাহর সামনে বিনয় ও আনুগত্যের সঙ্গে সিজদা করা।",
    arabic:"سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ.",
    pronunciation:"সাজাদা ওয়াজহিয়া লিল্লাযী খলাক্বাহু, ওয়া শাক্ক্বা সাম্'আহু ওয়া বাসারাহু বিহাওলিহী ওয়াক্যুওয়াতিহী।",
    meaning:"আমার মুখমণ্ডল (সহ আমার সমগ্র দেহ) সিজদায় অবনত সেই মহান সত্তার জন্য যিনি তাকে সৃষ্টি করেছেন এবং তা হতে কর্ণ ও চক্ষু বের করেছেন স্বীয় ইচ্ছা ও শক্তিতে। (আবূ দাউদ- হাঃ ১৪১৪)"
  },
  {
    no:4,
    title:"শিরক বর্জনের আদব ও দু'আ",
    page:"১১",
    icon:"🛡️",
    adab:"জানা ও অজানা সব ধরনের শিরক থেকে আল্লাহর কাছে আশ্রয় চাওয়া।",
    arabic:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ .",
    pronunciation:"আল্ল-হুম্মা ইন্নী আ'ঊযুবিকা আন্ উশ্রিকা বিকা ওয়া আনা আ'লামু ওয়া আস্তাগফিরুকা লিমা- লা- আ'লাম।",
    meaning:"হে আল্লাহ! আমার জানা অবস্থায় তোমার সাথে শিরক করা হ'তে তোমার নিকট আশ্রয় চাচ্ছি। আর অজানা অবস্থায় শির্ক হয়ে গেলে তোমার কাছে ক্ষমা প্রার্থনা করছি। (সহীহ আল জামি'- হাঃ ৩৭৩১)"
  },
  {
    no:5,
    title:"রাসূল (ﷺ)-এর প্রতি আদব ও দু'আ",
    page:"১১",
    icon:"🌙",
    adab:"রাসূলুল্লাহ (ﷺ)-এর প্রতি সম্মান, ভালোবাসা ও সালাত-সালাম পাঠ করা।",
    arabic:"",
    pronunciation:"",
    meaning:"একবার দরূদ পাঠ করলে আল্লাহ তা'আলা দশবার রহমত নাযিল করেন।",
    demo:true
  },
  {
    no:6,
    title:"স্মরণশক্তি বৃদ্ধি পাওয়ার আদব ও দু'আ",
    page:"১২",
    icon:"🧠",
    adab:"জ্ঞান অর্জনে আল্লাহর কাছে সাহায্য চাওয়া।",
    arabic:"رَّبِّ زِدْنِي عِلْمًا",
    pronunciation:"রব্বী যিদনী 'ইল্মা-।",
    meaning:"হে আমার রব! আমাকে অধিক 'ইল্ম (জ্ঞান) দান কর। (সূরা ত্ব-হা: ১১৪)"
  },
  {
    no:7,
    title:"মুখের জড়তা দূরের আদব ও দু'আ",
    page:"১২",
    icon:"🗣️",
    adab:"কথা বলার সময় স্পষ্টতা ও সহজতার জন্য আল্লাহর কাছে সাহায্য চাওয়া।",
    arabic:"رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    pronunciation:"রব্বিশ রহলী সদ্রী ওয়া ইয়াস্সিরলী আম্রী ওয়াহ্লুল 'উক্বদাতাম্ মিল্ লিসা-নী ইয়াফ্ক্বাহূ ক্বাওলী।",
    meaning:"হে আমার রব! আমার বক্ষ প্রশস্ত করে দাও এবং আমার কাজ সহজ করে দাও, আমার জিহ্বা হতে জড়তা দূর করে দাও যাতে তারা আমার কথা বুঝতে পারে। (সূরা ত্ব-হা: ২৫-২৮)"
  },
  {
    no:8,
    title:"পিতা-মাতার প্রতি আদব ও দু'আ",
    page:"১২",
    icon:"👨‍👩‍👦",
    adab:"পিতা-মাতার প্রতি দয়া, সম্মান ও উত্তম আচরণ করা।",
    arabic:"رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا\n\nرَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
    pronunciation:"রব্বির হাম্হুমা- কামা- রব্বায়া-নী সগীরা-।\n\nরব্বানাগ্ ফিরলী ওয়ালিওয়া-লিদাইয়্যা ওয়ালিল্ মু'মিনীনা ইয়াওমা ইয়াক্বূমুল্ হিসা-ব।",
    meaning:"হে আমার রব! তাদের (পিতা-মাতার) দু'জনের প্রতি রহম করুন তেমনভাবে, তারা আমার ছোটকালে যেমনভাবে আমাকে লালন-পালন করেছেন। (সূরা বানী ইসরাঈল: ২৪)\n\nহে আমাদের রব! আমাকে ক্ষমা কর এবং আমার পিতা-মাতা ও সকল মু'মিন-মুসলিমদেরকে কিয়ামাতের দিবসে ক্ষমা কর। (সূরা ইবরাহীম: ৪১)"
  },
  {
    no:9,
    title:"ঘুমানোর আদব ও দু'আ",
    page:"১৩",
    icon:"🌙",
    adab:"ঘুমানোর আগে আল্লাহকে স্মরণ করা।",
    arabic:"اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",
    pronunciation:"আল্ল-হুম্মা বিস্মিকা আমূতু ওয়া আহ্ইয়া-।",
    meaning:"হে আল্লাহ! তোমার নাম নিয়েই আমি ঘুমাতে যাচ্ছি এবং তোমার নাম নিয়েই উঠব। (সহীহুল বুখারী- হাঃ ৬৩২৪)"
  },
  {
    no:10,
    title:"ঘুম হতে জাগার আদব ও দু'আ",
    page:"১৩",
    icon:"🌅",
    adab:"ঘুম থেকে উঠে আল্লাহর প্রশংসা করা।",
    arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    pronunciation:"আল্হাম্দু লিল্লা-হিল্লাযী আহ্ইয়া-না- বা'দা মা- আমা-তানা- ওয়া ইলায়হিন্ নুশূর।",
    meaning:"ঐ আল্লাহরই প্রশংসা, যিনি মৃত্যুর পর আমাদেরকে পুনরায় জীবিত করলেন। আর আমাদের প্রত্যাবর্তন তাঁরই নিকট। (সহীহুল বুখারী- হাঃ ৬৩২৪)"
  },
  {
    no:11,
    title:"পেশাব ও পায়খানায় যাওয়ার আদব ও দু'আ",
    page:"১৪",
    icon:"🚪",
    adab:"শৌচাগারে প্রবেশের আগে আল্লাহর নাম নেওয়া এবং আশ্রয় প্রার্থনা করা।",
    arabic:"بِسْمِ اللهِ - اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ .",
    pronunciation:"বিস্মিল্লা-হি, আল্ল-হুম্মা ইন্নী আ'ঊযুবিকা মিনাল খুবুসি ওয়াল খবা-ইস্।",
    meaning:"হে আল্লাহ! আমি তোমার নামে এবং তোমার কাছে দুষ্ট জিন্ন ও জিন্নী হ'তে আশ্রয় প্রার্থনা করছি। (সহীহুল বুখারী- হাঃ ১৪২)"
  },
  {
    no:12,
    title:"পেশাব ও পায়খানা হতে ফেরার আদব ও দু'আ",
    page:"১৪",
    icon:"🚶",
    adab:"শৌচাগার থেকে বের হয়ে আল্লাহর কাছে ক্ষমা চাওয়া।",
    arabic:"غُفْرَانَكَ",
    pronunciation:"গুফ্রা-নাকা।",
    meaning:"হে আল্লাহ! তুমি আমাকে ক্ষমা কর। (আবূ দাউদ- হাঃ ৩০)"
  },
  {
    no:13,
    title:"কাপড় পরিধানের আদব ও দু'আ",
    page:"১৫",
    icon:"👕",
    adab:"পোশাক পরিধানের সময় আল্লাহর নেয়ামতের শুকরিয়া আদায় করা।",
    arabic:"الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِّنِّي وَلَا قُوَّةٍ.",
    pronunciation:"আল্হাম্দু লিল্লা-হিল্লাযী কাসা-নী হা-যা- ওয়ারাযাক্বানীহি মিন্ গয়রি হাওলিম্ মিন্নী ওয়ালা- ক্যুওয়াহ্।",
    meaning:"যাবতীয় প্রশংসা একমাত্র আল্লাহর জন্য, যিনি আমাকে এই পোশাক পরিয়েছেন এবং আমার শক্তি-সামর্থ্য ব্যতীতই তিনি তা আমাকে দান করেছেন। (আবূ দাউদ- হাঃ ৪০২৩)"
  },
  {
    no:14,
    title:"বাড়ী হতে বের হবার আদব ও দু'আ",
    page:"১৫",
    icon:"🏠",
    adab:"বাড়ি থেকে বের হওয়ার সময় আল্লাহর নাম নেওয়া ও তাঁর ওপর ভরসা করা।",
    arabic:"بِسْمِ اللهِ ، تَوَكَّلْتُ عَلَى اللَّهِ ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ.",
    pronunciation:"বিস্মিল্লা-হি, তাওয়াক্কাল্তু 'আলাল্ল-হি, লা- হাওলা ওয়ালা- ক্যুওয়াতা ইল্লা- বিল্লা-হ।",
    meaning:"আল্লাহর নামে বের হলাম, তাঁর উপর ভরসা করলাম। আর আমার কোন উপায় এবং ক্ষমতা নেই আল্লাহ ব্যতীত। (সহীহ তিরমিযী- হাঃ ২৭২৫)"
  },
  {
    no:15,
    title:"বাড়ীতে প্রবেশের আদব ও দু'আ",
    page:"১৫",
    icon:"🚪",
    adab:"আল্লাহর নাম নিয়ে বাড়িতে প্রবেশ করা।",
    arabic:"بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللهِ خَرَجْنَا، وَعَلَى اللهِ رَبِّنَا تَوَكَّلْنَا .",
    pronunciation:"বিস্মিল্লা-হি ওয়ালাজ্না-, ওয়া বিস্মিল্লা-হি খরাজ্ না-, ওয়া 'আলাল্ল-হি রব্বিনা- তাওয়াক্কাল্না-।",
    meaning:"আমরা আল্লাহর নামে বাড়ীতে প্রবেশ করলাম। আল্লাহর নামে বাড়ী হতে বের হয়েছিলাম। আমরা আমাদের প্রতিপালকের উপর ভরসা রাখি। (আবূ দাউদ- হাঃ ৫০৯৬)"
  },
  {
    no:16,
    title:"খাদ্য গ্রহণ ও পানীয় দ্রব্য পানের আদব ও দু'আ",
    page:"১৬",
    icon:"🍽️",
    adab:"পানাহার শুরুতে আল্লাহর নাম নেওয়া।",
    arabic:"بِسْمِ اللَّهِ\n\nبِسْمِ اللهِ فِي أَوَّلِهِ وَآخِرِهِ.",
    pronunciation:"বিস্মিল্লা-হ।\n\nবিস্মিল্লা-হি ফী আওয়া-লিহী ওয়া আ-খিরিহী",
    meaning:"আল্লাহর নামে পানাহার শুরু করছি।\n\nপানাহারের শুরু ও শেষে আল্লাহর নাম স্মরণ করছি।"
  },
  {
    no:17,
    title:"পানাহার শেষের আদব ও দু'আ",
    page:"১৬",
    icon:"🥛",
    adab:"পানাহার শেষে আল্লাহর প্রশংসা ও শুকরিয়া আদায় করা।",
    arabic:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا ، وَرَزَقَنِيْهِ ، مِنْ غَيْرِ حَوْلٍ مِّنِّي وَلَا قُوَّةٍ.",
    pronunciation:"আল্হাম্দু লিল্লা-হিল্লাযী আত্ব'আমানী হা-যা-, ওয়ারাযাক্বানীহি, মিন্ গয়রি হাওলিম্ মিন্নী ওয়ালা- ক্যুওয়াহ্।",
    meaning:"সকল প্রশংসা সেই আল্লাহর জন্য যিনি আমাকে এ পানাহার করালেন এবং এ রিযিক দান করলেন, যাতে ছিল না আমার পক্ষ থেকে কোন উপায়-উদ্যোগ, ছিল না কোন শক্তি সামর্থ্য। (সহীহ তিরমিযী- হাঃ ২৭৫১)"
  },
  {
    no:18,
    title:"হাঁচির আদব ও দু'আ",
    page:"১৭",
    icon:"🤧",
    adab:"হাঁচি দিলে আল্লাহর প্রশংসা করা এবং শ্রোতার জন্য রহমতের দু'আ করা।",
    arabic:"اَلْحَمْدُ لِلَّهِ\n\nيَرْحَمُكَ اللهُ\n\nيَهْدِيكُمُ اللهُ وَيُصْلِحُ بَالَكُمْ",
    pronunciation:"আলহামদু লিল্লাহ।\n\nইয়ারহামুকাল্লাহ।\n\nইয়াহদীকুমুল্লাহু ওয়া ইউসলিহু বালাকুম।",
    meaning:"হাঁচিদাতা বলবে: আলহামদু লিল্লাহ। শ্রোতা বলবে: ইয়ারহামুকাল্লাহ। হাঁচিদাতা বলবে: ইয়াহদীকুমুল্লাহু ওয়া ইউসলিহু বালাকুম।"
  },
  {
    no:19,
    title:"সালামের আদব ও দু'আ",
    page:"১৮",
    icon:"🤝",
    adab:"মুসলিম ভাইয়ের সঙ্গে সাক্ষাতে সালাম দেওয়া।",
    arabic:"السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ\n\nوَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ.",
    pronunciation:"আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ।\n\nওয়া আলাইকুমুস সালাম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু।",
    meaning:"আপনার ওপর আল্লাহর শান্তি ও রহমত বর্ষিত হোক। জবাব: আপনার ওপরও আল্লাহর শান্তি, রহমত ও বরকত বর্ষিত হোক।"
  },
  {
    no:20,
    title:"মুসাফাহার আদব",
    page:"১৯",
    icon:"🤝",
    adab:"সাক্ষাতের সময় আন্তরিকতার সঙ্গে মুসাফাহা করা।",
    arabic:"",
    pronunciation:"",
    meaning:"",
    demo:true
  },
  {
    no:21,
    title:"যানবাহনে আরোহণের আদব ও দু'আ",
    page:"১৯",
    icon:"🚗",
    adab:"যানবাহনে উঠার সময় আল্লাহর নেয়ামত স্মরণ করা।",
    arabic:"سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ",
    pronunciation:"সুবহানাল্লাযী সাখ্খারা লানা হাযা, ওয়া মা কুন্না লাহু মুকরিনীন, ওয়া ইন্না ইলা রব্বিনা লামুনক্বালিবূন।",
    meaning:"পবিত্র সেই সত্তা, যিনি এটিকে আমাদের জন্য বশীভূত করেছেন; আমরা নিজেরা একে বশীভূত করতে সক্ষম ছিলাম না। আর নিশ্চয়ই আমরা আমাদের রবের কাছেই ফিরে যাব। (সহীহ মুসলিম- হাঃ ১৩৪২)"
  },
  {
    no:22,
    title:"ওযূ করার আদব ও দু'আ",
    page:"১৯",
    icon:"💧",
    adab:"পবিত্রতা অর্জনের সময় নিয়ম মেনে ওযূ করা।",
    arabic:"",
    pronunciation:"",
    meaning:"",
    demo:true
  },
  {
    no:23,
    title:"ওযূ শেষের আদব ও দু'আ",
    page:"২০",
    icon:"💧",
    adab:"ওযূ শেষে কালিমায়ে শাহাদাত পাঠ করা।",
    arabic:"أَشْهَدُ أَنْ لَّا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ .",
    pronunciation:"আশ্হাদু আল্লা- ইলা-হা ইল্লাল্ল-হু ওয়াহ্দাহূ লা- শারীকা লাহূ ওয়া আশ্হাদু আন্না মুহাম্মাদান 'আব্দুহূ ওয়া রাসূলুহ্।",
    meaning:"আমি সাক্ষ্য দিচ্ছি যে, আল্লাহ ব্যতীত কোন মা'বুদ নেই, তিনি একক, তাঁর কোন শরীক নেই এবং আমি আরো সাক্ষ্য দিচ্ছি যে, মুহাম্মাদ (ﷺ) তাঁর বান্দা ও রাসূল। (সহীহ মুসলিম- হাঃ ২৩৪)"
  },
  {
    no:24,
    title:"মসজিদে প্রবেশের আদব ও দু'আ",
    page:"২০",
    icon:"🕌",
    adab:"মসজিদে প্রবেশের সময় আল্লাহর নাম নেওয়া এবং রহমতের দু'আ করা।",
    arabic:"بِسْمِ اللهِ ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُوْلِ اللَّهِ - اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.",
    pronunciation:"বিসমিল্লাহি, ওয়াসসালাতু ওয়াসসালামু আলা রাসূলিল্লাহ। আল্লাহুম্মাফতাহ লী আবওয়াবা রহমাতিক।",
    meaning:"হে আল্লাহ! আমার জন্য আপনার রহমতের দরজাসমূহ খুলে দিন।"
  },
  {
    no:25,
    title:"মসজিদ হতে বের হওয়ার আদব ও দু'আ",
    page:"২১",
    icon:"🕌",
    adab:"মসজিদ থেকে বের হওয়ার সময় আল্লাহর ফযল কামনা করা।",
    arabic:"بِسْمِ اللَّهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ - اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِك.",
    pronunciation:"বিসমিল্লাহি ওয়াসসালাতু ওয়াসসালামু আলা রাসূলিল্লাহ। আল্লাহুম্মা ইন্নী আসআলুকা মিন ফাদলিক।",
    meaning:"হে আল্লাহ! আমি আপনার নিকট আপনার অনুগ্রহ প্রার্থনা করছি।"
  },
  {
    no:26,
    title:"আযানের আদব ও দু'আ",
    page:"২১",
    icon:"📢",
    adab:"আযান মনোযোগ দিয়ে শোনা এবং মুয়াজ্জিনের কথার জবাব দেওয়া।",
    arabic:"اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَّحْمُودًا الَّذِي وَعَدْتَهُ.",
    pronunciation:"আল্লাহুম্মা রব্বা হাযিহিদ দা'ওয়াতিত তাম্মাতি, ওয়াসসালাতিল ক্বায়িমাতি, আতি মুহাম্মাদানিল ওয়াসীলাতা ওয়াল ফাদীলাতা, ওয়াব'আসহু মাক্বামাম মাহমূদানিল্লাযী ওয়া'আদতাহু।",
    meaning:"হে আল্লাহ! এই পরিপূর্ণ আহ্বান ও প্রতিষ্ঠিত সালাতের রব! মুহাম্মাদ (ﷺ)-কে ওসীলা ও ফযীলত দান করুন এবং তাঁকে সেই প্রশংসিত স্থানে অধিষ্ঠিত করুন যার প্রতিশ্রুতি আপনি তাঁকে দিয়েছেন। (সহীহুল বুখারী- হাঃ ৬১৪)"
  },
  {
    no:27,
    title:"আযানের জবাব ও দু'আ",
    page:"২৩",
    icon:"📢",
    adab:"আযানের শব্দগুলোর জবাব দেওয়া এবং আযানের পর দু'আ করা।",
    arabic:"اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَّحْمُودًا الَّذِي وَعَدْتَهُ.",
    pronunciation:"আল্লাহুম্মা রব্বা হাযিহিদ দা'ওয়াতিত তাম্মাতি, ওয়াসসালাতিল ক্বায়িমাতি, আতি মুহাম্মাদানিল ওয়াসীলাতা ওয়াল ফাদীলাতা, ওয়াব'আসহু মাক্বামাম মাহমূদানিল্লাযী ওয়া'আদতাহু।",
    meaning:"আযানের পর রাসূলুল্লাহ (ﷺ)-এর জন্য ওসীলা, ফযীলত ও মাকামে মাহমূদের দু'আ করা। (সহীহুল বুখারী- হাঃ ৬১৪)"
  },
  {
    no:28,
    title:"এক্বামাতের আদব ও জবাব",
    page:"২৩",
    icon:"🕌",
    adab:"ইকামাতের সময় মনোযোগী থাকা এবং যথাযথভাবে জবাব দেওয়া।",
    arabic:"",
    pronunciation:"",
    meaning:"",
    demo:true
  },
  {
    no:29,
    title:"সালাত শুরু করার আদব ও দু'আ",
    page:"২৪",
    icon:"🕋",
    adab:"সালাত শুরু করার সময় বিনয় ও একাগ্রতার সঙ্গে আল্লাহর দিকে মনোনিবেশ করা।",
    arabic:"اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْ خَطَايَايَ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ",
    pronunciation:"আল্লাহুম্মা বা'ইদ বাইনী ওয়া বাইনা খাতায়ায়া কামা বা'আদতা বাইনাল মাশরিক্বি ওয়াল মাগরিব। আল্লাহুম্মা নাক্কিনী মিনাল খাতায়া কামা ইউনাক্কাস সাওবুল আবইয়াদু মিনাদ দানাস। আল্লাহুম্মাগসিল খাতায়ায়া বিল মা-ই ওয়াস সালজি ওয়াল বারাদ।",
    meaning:"হে আল্লাহ! আমার ও আমার পাপসমূহের মধ্যে এমন দূরত্ব সৃষ্টি করুন যেমন পূর্ব ও পশ্চিমের মধ্যে দূরত্ব। আমাকে পাপ থেকে এমনভাবে পবিত্র করুন যেমন সাদা কাপড় ময়লা থেকে পরিষ্কার করা হয়।"
  },
  {
    no:30,
    title:"সূরা ফাতিহা ও অন্য সূরা পাঠের আদব ও দু'আ",
    page:"২৫",
    icon:"📖",
    adab:"কুরআন তিলাওয়াত মনোযোগ ও সম্মানের সঙ্গে করা।",
    arabic:"أَعُوذُ بِاللهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ ، مِنْ هَمْزِهِ وَنَفْخِهِ وَنَفْثِهِ",
    pronunciation:"আ'ঊযু বিল্লাহিস সামীইল আলীমি মিনাশ শাইত্বানির রাজীম, মিন হামযিহী ওয়া নাফখিহী ওয়া নাফসিহী।",
    meaning:"আমি সর্বশ্রোতা, সর্বজ্ঞ আল্লাহর কাছে বিতাড়িত শয়তান থেকে আশ্রয় প্রার্থনা করছি।"
  },
  {
    no:31,
    title:"রুকূ'র আদব ও দু'আ",
    page:"৩১",
    icon:"🕋",
    adab:"রুকূতে আল্লাহর মহত্ত্ব ঘোষণা করা।",
    arabic:"سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    pronunciation:"সুব্হা-না রব্বিয়াল 'আযীম।",
    meaning:"আমার মহান রব পবিত্র।"
  },
  {
    no:32,
    title:"রুকূ' হতে মাথা উঠার আদব ও দু'আ",
    page:"৩১",
    icon:"🙏",
    adab:"রুকূ থেকে উঠার সময় আল্লাহর প্রশংসা করা।",
    arabic:"سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ\n\nرَبَّنَا وَلَكَ الْحَمْدُ ، حَمْدًا كَثِيرًا طَيِّبًا مُّبَارَكًا فِيهِ.",
    pronunciation:"সামি'আল্লাহু লিমান হামিদাহু।\n\nরব্বানা ওয়ালাকাল হামদু, হামদান কাছীরান তয়্যিবান মুবারাকান ফীহি।",
    meaning:"যে আল্লাহর প্রশংসা করে আল্লাহ তার কথা শোনেন। হে আমাদের রব! আপনারই জন্য সমস্ত প্রশংসা—অসংখ্য, পবিত্র ও বরকতময় প্রশংসা।"
  },
  {
    no:33,
    title:"সিজদার আদব ও দু'আ",
    page:"৩২",
    icon:"🤲",
    adab:"সিজদায় আল্লাহর সর্বোচ্চ মহত্ত্ব স্বীকার করা।",
    arabic:"سُبْحَانَ رَبِّيَ الْأَعْلَى",
    pronunciation:"সুব্হা-না রব্বিয়াল আ'লা-।",
    meaning:"আমার সর্বোচ্চ রব পবিত্র।"
  },
  {
    no:34,
    title:"দু' সিজদার মাঝে বসার আদব ও দু'আ",
    page:"৩৩",
    icon:"🧎",
    adab:"দুই সিজদার মাঝে বিনয়ের সঙ্গে আল্লাহর কাছে ক্ষমা ও কল্যাণ চাওয়া।",
    arabic:"اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَعَافِنِي، وَارْزُقْنِي.",
    pronunciation:"আল্লাহুম্মাগফির লী, ওয়ারহামনী, ওয়াহদিনী, ওয়া আফিনী, ওয়ারযুকনী।",
    meaning:"হে আল্লাহ! আমাকে ক্ষমা করুন, আমার প্রতি রহম করুন, আমাকে হিদায়াত দিন, আমাকে নিরাপদ রাখুন এবং আমাকে রিযিক দিন।"
  },
  {
    no:35,
    title:"তাশাহহুদের আদব ও দু'আ",
    page:"৩৩",
    icon:"🕌",
    adab:"শেষ বৈঠকে তাশাহহুদ পাঠ করা।",
    arabic:"التَّحِيَّاتُ لِلَّهِ، وَالصَّلَوَاتُ والطَّيِّبَاتُ السَّلَامُ عَلَى النَّبِيِّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لَّا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.",
    pronunciation:"আত্তাহিয়্যাতু লিল্লাহি ওয়াস সালাওয়াতু ওয়াত তয়্যিবাত। আসসালামু আলাইকা আইয়্যুহান নাবিয়্যু ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহ। আসসালামু আলাইনা ওয়া আলা ইবাদিল্লাহিস সালিহীন। আশহাদু আল্লা ইলাহা ইল্লাল্লাহু ওয়া আশহাদু আন্না মুহাম্মাদান আবদুহু ওয়া রাসূলুহ।",
    meaning:"সমস্ত সম্মান, ইবাদত ও পবিত্র বিষয় আল্লাহর জন্য। নবীর প্রতি শান্তি, রহমত ও বরকত বর্ষিত হোক। আমাদের ও আল্লাহর নেক বান্দাদের ওপর শান্তি বর্ষিত হোক। আমি সাক্ষ্য দিচ্ছি যে আল্লাহ ছাড়া কোনো উপাস্য নেই এবং মুহাম্মাদ (ﷺ) তাঁর বান্দা ও রাসূল।"
  },
  {
    no:36,
    title:"সালাতে দরূদের আদব ও দু'আ",
    page:"৩৪",
    icon:"🌙",
    adab:"রাসূলুল্লাহ (ﷺ)-এর ওপর দরূদ পাঠ করা।",
    arabic:"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَّجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ ، إِنَّكَ حَمِيدٌ مَّجِيدٌ .",
    pronunciation:"আল্লাহুম্মা সাল্লি আলা মুহাম্মাদিওঁ ওয়া আলা আলি মুহাম্মাদ, কামা সাল্লাইতা আলা ইবরাহীমা ওয়া আলা আলি ইবরাহীম, ইন্নাকা হামীদুম মাজীদ। আল্লাহুম্মা বারিক আলা মুহাম্মাদিওঁ ওয়া আলা আলি মুহাম্মাদ, কামা বারাকতা আলা ইবরাহীমা ওয়া আলা আলি ইবরাহীম, ইন্নাকা হামীদুম মাজীদ।",
    meaning:"হে আল্লাহ! মুহাম্মাদ (ﷺ) ও তাঁর পরিবারবর্গের ওপর রহমত বর্ষণ করুন, যেমন ইবরাহীম (আ.) ও তাঁর পরিবারবর্গের ওপর রহমত বর্ষণ করেছেন। নিশ্চয় আপনি প্রশংসিত ও মহিমান্বিত।"
  },
  {
    no:37,
    title:"শেষ বৈঠকের আদব ও দু'আ",
    page:"৩৫",
    icon:"🤲",
    adab:"শেষ বৈঠকে আল্লাহর কাছে ক্ষমা ও রহমত চাওয়া।",
    arabic:"اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِّنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ .",
    pronunciation:"আল্লাহুম্মা ইন্নী যালামতু নাফসী যুলমান কাছীরান, ওয়া লা ইয়াগফিরুয যুনূবা ইল্লা আনতা, ফাগফির লী মাগফিরাتام মিন ইন্দিকা ওয়ারহামনী, ইন্নাকা আনতাল গাফূরুর রহীম।",
    meaning:"হে আল্লাহ! আমি নিজের ওপর অনেক জুলুম করেছি। আপনি ছাড়া কেউ গুনাহ ক্ষমা করতে পারে না। অতএব আপনার পক্ষ থেকে আমাকে ক্ষমা করুন এবং আমার প্রতি রহম করুন।"
  },
  {
    no:38,
    title:"সালাম ফেরানোর আদব ও দু'আ",
    page:"৩৬",
    icon:"👋",
    adab:"সালাত শেষে ডানে ও বামে সালাম ফিরানো।",
    arabic:"السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ",
    pronunciation:"আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ।",
    meaning:"আপনাদের ওপর আল্লাহর শান্তি ও রহমত বর্ষিত হোক।"
  },
  {
    no:39,
    title:"সালামের পর আদব ও দু'আ",
    page:"৩৭",
    icon:"🤲",
    adab:"সালাত শেষে আল্লাহকে স্মরণ করা।",
    arabic:"",
    pronunciation:"",
    meaning:"",
    demo:true
  },
  {
    no:40,
    title:"আয়াতুল কুরসী এর ফযীলত",
    page:"৩৭",
    icon:"📖",
    adab:"আয়াতুল কুরসী পাঠ করা।",
    arabic:"اللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    pronunciation:"আল্লাহু লা ইলাহা ইল্লা হুয়াল হাইয়্যুল কাইয়্যূম। লা তা'খুযুহু সিনাতুওঁ ওয়ালা নাওম। লাহু মা ফিস সামাওয়াতি ওয়া মা ফিল আরদ। মান যাল্লাযী ইয়াশফাউ ইন্দাহু ইল্লা বিইযনিহ। ইয়া'লামু মা বাইনা আইদীহিম ওয়া মা খালফাহুম। ওয়ালা ইউহীতূনা বিশাইইম মিন ইলমিহী ইল্লা বিমা শা'আ। ওয়াসিয়া কুরসিয়্যুহুস সামাওয়াতি ওয়াল আরদ। ওয়ালা ইয়াউদুহু হিফযুহুমা ওয়া হুয়াল আলিয়্যুল আযীম।",
    meaning:"আল্লাহ ছাড়া কোনো উপাস্য নেই। তিনি চিরঞ্জীব, সবকিছুর ধারক ও সংরক্ষক। আয়াতুল কুরসী। (সূরা আল-বাকারা: ২৫৫)"
  },
  {
    no:41,
    title:"বিত্তর সালাতের আদব ও দু'আ",
    page:"৩৮",
    icon:"🌙",
    adab:"বিতর সালাতে কুনূত পাঠ করা।",
    arabic:"اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ إِنَّهُ لَا يَذِلُّ مَن وَّالَيْتَ وَلَا يَعِزُّ مَنْ عَادَيْتَ تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ وَصَلَّى اللهُ عَلَى النَّبِيِّ .",
    pronunciation:"আল্লাহুম্মাহদিনী ফীমান হাদাইতা, ওয়া আফিনী ফীমান আফাইতা, ওয়া তাওয়াল্লানী ফীমান তাওয়াল্লাইতা, ওয়া বারিক লী ফীমা আ'তাইতা, ওয়া ক্বিনী শাররা মা ক্বাদাইতা, ফাইন্নাকা তাক্বদী ওয়ালা ইউক্বদা আলাইকা, ইন্নাহু লা ইয়াযিল্লু মান ওয়ালাইতা, ওয়ালা ইয়াইয্যু মান আদাইতা, তাবারাকতা রব্বানা ওয়া তা'আলাইতা, ওয়া সাল্লাল্লাহু আলান নাবিয়্যি।",
    meaning:"হে আল্লাহ! আপনি যাদের হিদায়াত দিয়েছেন তাদের মধ্যে আমাকে হিদায়াত দিন, যাদের নিরাপত্তা দিয়েছেন তাদের মধ্যে আমাকে নিরাপত্তা দিন এবং যাদের অভিভাবক হয়েছেন তাদের মধ্যে আমাকে অভিভাবকত্ব দিন।"
  },
  {
    no:42,
    title:"জানাযা সালাতের আদব ও দু'আ",
    page:"৩৯",
    icon:"🕊️",
    adab:"মৃত ব্যক্তির জন্য আন্তরিকভাবে ক্ষমা ও রহমতের দু'আ করা।",
    arabic:"اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ وَأَبْدِلْهُ دَارًا خَيْرًا مِّن دَارِهِ وَأَهْلًا خَيْرًا مِّنْ أَهْلِهِ وَزَوْجًا خَيْرًا مِّن زَوْجِهِ وَأَدْخِلْهُ الْجَنَّةَ وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ.",
    pronunciation:"আল্লাহুম্মাগফির লাহু ওয়ারহামহু ওয়া আফিহি ওয়াফু আনহু, ওয়া আকরিম নুযুলাহু, ওয়া ওয়াসসি মুদখালাহু, ওয়াগসিলহু বিল মা-ই ওয়াস সালজি ওয়াল বারাদ, ওয়া নাক্কিহি মিনাল খাতায়া কামা নাক্কাইতাস সাওবাল আবইয়াদা মিনাদ দানাস, ওয়া আবদিলহু দারান খাইরাম মিন দারিহি, ওয়া আহলান খাইরাম মিন আহলিহি, ওয়া যাওজান খাইরাম মিন যাওজিহি, ওয়া আদখিলহুল জান্নাতা ওয়া আ'ইযহু মিন আযাবিল কবরি ওয়া মিন আযাবিন নার।",
    meaning:"হে আল্লাহ! তাকে ক্ষমা করুন, তার প্রতি রহম করুন, তাকে নিরাপদ রাখুন, তাকে মার্জনা করুন এবং তার থাকার স্থান সম্মানিত করুন। তাকে পানি, বরফ ও শিলার পানি দিয়ে ধুয়ে দিন এবং তাকে গুনাহ থেকে পবিত্র করুন।"
  },
  {
    no:43,
    title:"কবর যিয়ারতের আদব ও দু'আ",
    page:"৪১",
    icon:"🪦",
    adab:"কবরবাসীদের সালাম দেওয়া এবং নিজেদের ও তাদের জন্য নিরাপত্তার দু'আ করা।",
    arabic:"السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ وَإِنَّا إِن شَاءَ اللهُ لَلَاحِقُونَ أَسْأَلُ اللهَ لَنَا وَلَكُمُ الْعَافِيَةَ.",
    pronunciation:"আসসালামু আলাইকুম আহলাদ দিয়ারি মিনাল মুমিনীনা ওয়াল মুসলিমীন, ওয়া ইন্না ইন শা-আল্লাহু লালাহিকূন। আসআলুল্লাহা লানা ওয়ালাকুমুল আফিয়াহ।",
    meaning:"হে মুমিন ও মুসলিম কবরবাসীগণ! আপনাদের ওপর শান্তি বর্ষিত হোক। ইনশাআল্লাহ আমরাও আপনাদের সঙ্গে মিলিত হব। আমরা আল্লাহর কাছে আমাদের ও আপনাদের জন্য নিরাপত্তা প্রার্থনা করছি।"
  },
  {
    no:44,
    title:"ঈদের আদব ও দু'আ",
    page:"৪২",
    icon:"🌙",
    adab:"ঈদের দিনে তাকবীর পাঠ করা এবং আল্লাহর প্রশংসা করা।",
    arabic:"اللهُ أَكْبَرُ اللهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ .",
    pronunciation:"আল্লাহু আকবার, আল্লাহু আকবার, লা ইলাহা ইল্লাল্লাহু ওয়াল্লাহু আকবার, আল্লাহু আকবার, ওয়া লিল্লাহিল হামদ।",
    meaning:"আল্লাহ সর্বশ্রেষ্ঠ। আল্লাহ ছাড়া কোনো উপাস্য নেই। আল্লাহ সর্বশ্রেষ্ঠ এবং সমস্ত প্রশংসা আল্লাহর।"
  },
  {
    no:45,
    title:"ঝড়-তুফানে আদব ও দু'আ",
    page:"৪৩",
    icon:"🌪️",
    adab:"ঝড়-তুফানের সময় আল্লাহর কাছে কল্যাণ প্রার্থনা করা এবং অকল্যাণ থেকে আশ্রয় চাওয়া।",
    arabic:"اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا.",
    pronunciation:"আল্লাহুম্মা ইন্নী আসআলুকা খাইরাহা, ওয়া আউযু বিকা মিন শাররিহা।",
    meaning:"হে আল্লাহ! আমি এর কল্যাণ আপনার কাছে প্রার্থনা করছি এবং এর অকল্যাণ থেকে আপনার কাছে আশ্রয় চাই।"
  },
  {
    no:46,
    title:"বৃষ্টি প্রার্থনার আদব ও দু'আ",
    page:"৪৩",
    icon:"🌧️",
    adab:"বৃষ্টির প্রয়োজন হলে আল্লাহর কাছে উপকারী বৃষ্টির প্রার্থনা করা।",
    arabic:"اللَّهُمَّ اسْقِنَا غَيْثًا مُغِيثًا مَرِيئًا مَرِيعًا، نَافِعًا غَيْرَ ضَارٍّ، عَاجِلًا غَيْرَ آجِلٍ.",
    pronunciation:"আল্লাহুম্মাসক্বিনা গাইসান মুগীসান মারীআন মারীআন, নাফিআন গাইরা দাররিন, আজিলান গাইরা আজিল।",
    meaning:"হে আল্লাহ! আমাদেরকে এমন বৃষ্টি দিন যা সাহায্যকারী, উপকারী, ফলপ্রসূ, ক্ষতিহীন এবং দ্রুত আগমনকারী।"
  },
  {
    no:47,
    title:"রোগী দেখার আদব ও দু'আ",
    page:"৪৪",
    icon:"🏥",
    adab:"রোগীর কাছে গিয়ে সান্ত্বনা দেওয়া এবং তার সুস্থতার জন্য দু'আ করা।",
    arabic:"لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللهُ .\n\nأَسْأَلُ اللهَ الْعَظِيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفِيَكَ.",
    pronunciation:"লা বা'সা তহূরুন ইন শা-আল্লাহ।\n\nআসআলুল্লাহাল আযীমা রব্বাল আরশিল আযীমি আন ইয়াশফিয়াক।",
    meaning:"কোনো সমস্যা নেই, ইনশাআল্লাহ এটি পবিত্রতার কারণ হবে।\n\nআমি মহান আল্লাহর কাছে, মহান আরশের রবের কাছে আপনার আরোগ্য প্রার্থনা করছি।"
  },
  {
    no:48,
    title:"বিপদ-মুসীবতে আদব ও দু'আ",
    page:"৪৪",
    icon:"🤲",
    adab:"বিপদে ধৈর্য ধারণ করে আল্লাহর কাছে প্রতিদান ও উত্তম বদলা চাওয়া।",
    arabic:"إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُوْنَ اللَّهُمَّ أَجِرْنِي فِي مُصِيبَتِي، وَاخْلِفْ لِي خَيْرًا مِّنْهَا .",
    pronunciation:"ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন। আল্লাহুম্মা'জুরনী ফী মুসীবতী, ওয়াখলিফ লী খাইরাম মিনহা।",
    meaning:"নিশ্চয়ই আমরা আল্লাহর এবং তাঁর কাছেই ফিরে যাব। হে আল্লাহ! আমার বিপদে আমাকে প্রতিদান দিন এবং এর পরিবর্তে আমাকে উত্তম কিছু দান করুন।"
  },
  {
    no:49,
    title:"নতুন চাঁদ দেখার আদব ও দু'আ",
    page:"৪৫",
    icon:"🌙",
    adab:"নতুন চাঁদ দেখে আল্লাহর কাছে নিরাপত্তা, ঈমান ও কল্যাণ কামনা করা।",
    arabic:"اللهُ أَكْبَرُ اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيْمَانِ، وَالسَّلَامَةِ وَالْإِسْلَامِ ، وَالتَّوْفِيقِ لِمَا تُحِبُّ وَتَرْضَى رَبُّنَا وَرَبُّكَ اللهُ.",
    pronunciation:"আল্লাহু আকবার। আল্লাহুম্মা আহিল্লাহু আলাইনা বিল আমনি ওয়াল ঈমানি, ওয়াস সালামাতি ওয়াল ইসলামি, ওয়াত তাওফীক্বি লিমা তুহিব্বু ওয়া তারদা। রব্বুনা ওয়া রব্বুকাল্লাহ।",
    meaning:"হে আল্লাহ! এই চাঁদকে আমাদের ওপর নিরাপত্তা, ঈমান, শান্তি, ইসলাম এবং আপনি যা ভালোবাসেন ও পছন্দ করেন তার তাওফীকসহ উদিত করুন। আমাদের রব ও তোমার রব আল্লাহ।"
  },
  {
    no:50,
    title:"ক্রোধ দমনের আদব ও দু'আ",
    page:"৪৬",
    icon:"😠",
    adab:"রাগের সময় শয়তান থেকে আল্লাহর কাছে আশ্রয় চাওয়া।",
    arabic:"أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ .",
    pronunciation:"আউযু বিল্লাহি মিনাশ শাইত্বানির রাজীম।",
    meaning:"আমি বিতাড়িত শয়তান থেকে আল্লাহর কাছে আশ্রয় চাই।"
  },
  {
    no:51,
    title:"উপকারীর প্রতি আদব ও দু'আ",
    page:"৪৬",
    icon:"🎁",
    adab:"কেউ উপকার করলে তার জন্য উত্তম প্রতিদানের দু'আ করা।",
    arabic:"جَزَاكَ اللهُ خَيْرًا",
    pronunciation:"জাযাকাল্লাহু খাইরান।",
    meaning:"আল্লাহ আপনাকে উত্তম প্রতিদান দিন।"
  },
  {
    no:52,
    title:"তাওবাহ্ ও ক্ষমা প্রার্থনার আদব এবং দু'আ",
    page:"৪৬",
    icon:"🤲",
    adab:"গুনাহ থেকে তাওবা করে আল্লাহর কাছে ক্ষমা চাওয়া।",
    arabic:"أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
    pronunciation:"আস্তাগফিরুল্লাহাল আযীমাল্লাযী লা ইলাহা ইল্লা হুয়াল হাইয়্যুল কাইয়্যূমু ওয়া আতূবু ইলাইহ।",
    meaning:"আমি মহান আল্লাহর কাছে ক্ষমা প্রার্থনা করছি, যিনি ছাড়া কোনো উপাস্য নেই, তিনি চিরঞ্জীব ও সবকিছুর ধারক; এবং আমি তাঁর কাছে তাওবা করছি।"
  },
  {
    no:53,
    title:"সাইয়্যিদুল ইস্তিগফার বা ক্ষমা প্রার্থনার শ্রেষ্ঠ দু'আ",
    page:"৪৭",
    icon:"🤲",
    adab:"আল্লাহর নেয়ামত স্বীকার করে নিজের গুনাহের জন্য ক্ষমা চাওয়া।",
    arabic:"اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
    pronunciation:"আল্লাহুম্মা আনতা রব্বী লা ইলাহা ইল্লা আনতা, খালাক্বতানী ওয়া আনা আবদুকা, ওয়া আনা আলা আহদিকা ওয়া ওয়াদিকা মাসতাতাতু। আউযু বিকা মিন শাররি মা সানা'তু। আবূউ লাকা বিনি'মাতিকা আলাইয়া, ওয়া আবূউ লাকা বিযাম্বী, ফাগফির লী ফাইন্নাহু লা ইয়াগফিরুয যুনূবা ইল্লা আনতা।",
    meaning:"হে আল্লাহ! আপনি আমার রব। আপনি ছাড়া কোনো উপাস্য নেই। আপনি আমাকে সৃষ্টি করেছেন এবং আমি আপনার বান্দা। আমি আমার সাধ্য অনুযায়ী আপনার অঙ্গীকারে অটল আছি। আমি আমার কৃতকর্মের অনিষ্ট থেকে আপনার কাছে আশ্রয় চাই। আপনার নেয়ামত স্বীকার করছি এবং আমার গুনাহ স্বীকার করছি। অতএব আমাকে ক্ষমা করুন।"
  },
  {
    no:54,
    title:"বিদায় গ্রহণ ও বিদায় দেওয়ার আদব ও দু'আ",
    page:"৪৮",
    icon:"👋",
    adab:"বিদায়ের সময় একে অপরের ঈমান, আমানত ও উত্তম পরিণতির জন্য দু'আ করা।",
    arabic:"أَسْتَوْدِعُكُمُ اللهَ الَّذِي لَا تَضِيعُ وَدَائِعُهُ.\n\nأَسْتَوْدِعُ اللهَ دِينَكَ ، وَأَمَانَتَكَ ، وَخَوَاتِيمَ عَمَلِكَ.",
    pronunciation:"আস্তাওদি'উকুমুল্লাহাল্লাযী লা তাদীউ ওয়াদায়িউহ।\n\nআস্তাওদি'উল্লাহা দীনাকা, ওয়া আমানাতাকা, ওয়া খাওয়াতীমা আমালিক।",
    meaning:"আমি তোমাদের আল্লাহর কাছে সোপর্দ করছি, যার কাছে রাখা আমানত নষ্ট হয় না।\n\nআমি তোমার দীন, আমানত এবং কর্মের পরিণতি আল্লাহর কাছে সোপর্দ করছি।"
  },
  {
    no:55,
    title:"মুসলিম সমাজের প্রতি আদব ও দু'আ",
    page:"৪৯",
    icon:"👥",
    adab:"মুসলিম ভাইদের জন্য ক্ষমা ও অন্তরের পবিত্রতার দু'আ করা।",
    arabic:"رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيْمَانِ وَلَا تَجْعَلْ فِي قُلُوْبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَؤُوفٌ رَّحِيمٌ",
    pronunciation:"রব্বানাগফির লানা ওয়া লি ইখওয়ানিনাল্লাযীনা সাবাকূনা বিল ঈমানি, ওয়ালা তাজআল ফী কুলূবিনা গিল্লাল্লিল্লাযীনা আমানূ, রব্বানা ইন্নাকা রাউফুর রহীম।",
    meaning:"হে আমাদের রব! আমাদের এবং আমাদের সেই ভাইদের ক্ষমা করুন যারা ঈমানের ক্ষেত্রে আমাদের আগে অগ্রসর হয়েছেন। আর যারা ঈমান এনেছে তাদের প্রতি আমাদের অন্তরে কোনো বিদ্বেষ রাখবেন না। হে আমাদের রব! নিশ্চয় আপনি দয়ালু, পরম করুণাময়।"
  },
  {
    no:56,
    title:"আশ্চর্য ও আনন্দঘন মুহূর্তের আদব ও দু'আ",
    page:"৪৯",
    icon:"✨",
    adab:"আশ্চর্য বা আনন্দের সময় আল্লাহর পবিত্রতা, বড়ত্ব ও প্রশংসা প্রকাশ করা।",
    arabic:"سُبْحَانَ اللَّهِ\n\nاَللهُ أَكْبَرُ\n\nاَلْحَمْدُ لِلَّهِ",
    pronunciation:"সুবহানাল্লাহ।\n\nআল্লাহু আকবার।\n\nআলহামদু লিল্লাহ।",
    meaning:"আল্লাহ পবিত্র। আল্লাহ সর্বশ্রেষ্ঠ। সমস্ত প্রশংসা আল্লাহর।"
  },
  {
    no:57,
    title:"মুসলিম হয়ে মৃত্যুবরণের আদব ও দু'আ",
    page:"৫০",
    icon:"🕊️",
    adab:"মুসলিম অবস্থায় মৃত্যু ও নেককারদের সঙ্গে মিলিত হওয়ার জন্য আল্লাহর কাছে প্রার্থনা করা।",
    arabic:"فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ أَنْتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ تَوَفَّنِي مُسْلِمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
    pronunciation:"ফাতিরাস সামাওয়াতি ওয়াল আরদ, আনতা ওয়ালিয়্যী ফিদ্দুনইয়া ওয়াল আখিরাহ, তাওয়াফফানী মুসলিমান ওয়া আলহিকনী বিস সালিহীন।",
    meaning:"হে আসমানসমূহ ও জমিনের স্রষ্টা! আপনি দুনিয়া ও আখিরাতে আমার অভিভাবক। আমাকে মুসলিম অবস্থায় মৃত্যু দিন এবং আমাকে নেককারদের সঙ্গে মিলিত করুন।"
  },
  {
    no:58,
    title:"হালাল রিযিক অর্জনের আদব ও দু'আ",
    page:"৫১",
    icon:"💰",
    adab:"হালাল রিযিকের চেষ্টা করা এবং হারাম থেকে বেঁচে থাকা।",
    arabic:"اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.",
    pronunciation:"আল্লাহুম্মাকফিনী বিহালালিকা আন হারামিক, ওয়া আগনিনী বিফাদলিকা আম্মান সিওয়াক।",
    meaning:"হে আল্লাহ! আপনার হালাল দ্বারা আমাকে আপনার হারাম থেকে বাঁচিয়ে যথেষ্ট করে দিন এবং আপনার অনুগ্রহে আপনাকে ছাড়া অন্য সবার থেকে অমুখাপেক্ষী করে দিন।"
  },
  {
    no:59,
    title:"দুনিয়া ও আখিরাতের আদব এবং দু'আ",
    page:"৫১",
    icon:"🌍",
    adab:"দুনিয়া ও আখিরাতের কল্যাণ একসঙ্গে প্রার্থনা করা।",
    arabic:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    pronunciation:"রব্বানা আতিনা ফিদ্দুনইয়া হাসানাতাওঁ ওয়া ফিল আখিরাতি হাসানাতাওঁ ওয়া ক্বিনা আযাবান নার।",
    meaning:"হে আমাদের রব! আমাদেরকে দুনিয়ায় কল্যাণ দিন এবং আখিরাতেও কল্যাণ দিন এবং আমাদেরকে আগুনের শাস্তি থেকে রক্ষা করুন।"
  },
  {
    no:60,
    title:"মজলিস বা বৈঠক সমাপ্তির আদব ও দু'আ",
    page:"৫২",
    icon:"📚",
    adab:"মজলিস শেষে আল্লাহর প্রশংসা, তাওবা ও ক্ষমা প্রার্থনা করা।",
    arabic:"سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَّا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ .",
    pronunciation:"সুবহানাকাল্লাহুম্মা ওয়া বিহামদিক, আশহাদু আল্লা ইলাহা ইল্লা আনতা, আস্তাগফিরুকা ওয়া আতূবু ইলাইকা।",
    meaning:"হে আল্লাহ! আপনার পবিত্রতা ও প্রশংসা ঘোষণা করছি। আমি সাক্ষ্য দিচ্ছি যে আপনি ছাড়া কোনো উপাস্য নেই। আমি আপনার কাছে ক্ষমা চাই এবং আপনার কাছেই তাওবা করি।"
  }

];

/* =========================================================
   মডাল ওপেন, ক্লোজ এবং কপি ফাংশন
========================================================= */
function openDoyaModal(index) {
  var data = mteDoyaData[index];
  if(!data) return;

  document.getElementById('mteModalTitle').innerText = (data.no || "") + ". " + data.title;
  document.getElementById('mteModalSubTitle').innerText = data.subTitle;
  document.getElementById('mteModalImg').src = data.img;
  document.getElementById('mteModalAmal').innerText = data.amal;
  document.getElementById('mteModalArabic').innerText = data.arabic;
  // প্রতিবার দুআ খুললে বর্তমানে নির্বাচিত আরবি ফন্টটি পুনরায় প্রয়োগ করুন
  if (typeof window.mteApplyArabicFontSelection === 'function') {
    window.mteApplyArabicFontSelection();
  }
  document.getElementById('mteModalPronunciation').innerText = data.pronunciation;
  document.getElementById('mteModalMeaning').innerText = data.meaning;
  
  var modal = document.getElementById('mteDoyaModal');
  if(modal) {
    modal.style.display = 'flex';
    var modalBody = modal.querySelector('.mte-doya-modal-body');
    if(modalBody) modalBody.scrollTop = 0;
  }
}

function closeDoyaModal() {
  var modal = document.getElementById('mteDoyaModal');
  if(modal) modal.style.display = 'none';
}

function closeDoyaModalOnOutside(event) {
  if (event.target.id === 'mteDoyaModal') {
    closeDoyaModal();
  }
}

function copyDoyaText() {
  var title = document.getElementById('mteModalTitle').innerText;
  var arabic = document.getElementById('mteModalArabic').innerText;
  var pronunciation = document.getElementById('mteModalPronunciation').innerText;
  var meaning = document.getElementById('mteModalMeaning').innerText;

  var fullText = title + "\n\n" + "আরবি:\n" + arabic + "\n\n" + "উচ্চারণ:\n" + pronunciation + "\n\n" + "অর্থ:\n" + meaning;

  navigator.clipboard.writeText(fullText).then(function() {
    alert("দুআটি সফলভাবে কপি করা হয়েছে!");
  });
}

(function(){
  "use strict";

  const FAVORITE_KEY = "mte_dua_favorites";
  const LAST_READ_KEY = "mte_dua_last_read";
  const DARK_KEY = "mte_dua_dark_mode";

  let favorites = JSON.parse(localStorage.getItem(FAVORITE_KEY) || "[]");
  let currentFilter = "all";
  let currentCategory = "all";
  let currentSearch = "";

  // সালাত ও ওযূ এবং দৈনন্দিন জীবনের দোয়ার নম্বরসমূহ
  const namazNos = [3,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
  const dailyNos = [1,8,9,10,11,12,13,14,15,16,17,18,19,20,21,45,46,47,48,49,50,51,52,53,54,58,59,60];

  function saveFavorites(){
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
    updateFavCount();
  }

  function updateFavCount(){
    const favCountEl = document.getElementById("duaFavCount");
    if(favCountEl){
      favCountEl.textContent = `পছন্দের দু'আ: ${favorites.length}টি`;
    }
  }

  function isFavorite(no){
    return favorites.includes(no);
  }

  function toggleFavorite(no, e){
    if(e){ e.stopPropagation(); }
    const idx = favorites.indexOf(no);
    if(idx > -1){
      favorites.splice(idx, 1);
    } else {
      favorites.push(no);
    }
    saveFavorites();
    renderAll();
  }

  window.saveLastRead = function(dua){
    localStorage.setItem(LAST_READ_KEY, JSON.stringify({
      no: dua.no,
      title: dua.title,
      page: dua.page
    }));
    loadLastRead();
  };

  function loadLastRead(){
    const box = document.getElementById("duaLastReadBox");
    if(!box) return;
    const data = JSON.parse(localStorage.getItem(LAST_READ_KEY) || "null");
    if(data){
      box.innerHTML = `📌 <b>সর্বশেষ পঠিত:</b> ${data.no}. ${data.title} (পৃষ্ঠা ${data.page})`;
      box.classList.add("show");
      box.style.display = "block";
      box.onclick = () => {
        const found = mteDoyaData.find(d => d.no === data.no);
        if(found && typeof openDoyaModal === "function") {
          // ইনডেক্স খুঁজে বের করে মডাল ওপেন করা
          const idx = mteDoyaData.indexOf(found);
          openDoyaModal(idx);
        }
      };
    } else {
      box.classList.remove("show");
      box.style.display = "none";
    }
  }

  // কার্ড বা লিস্ট রেন্ডার করার ফাংশন
  function renderListCustom(list, targetId){
    const target = document.getElementById(targetId);
    if(!target) return;
    target.innerHTML = "";

    list.forEach(dua => {
      // আসল ইনডেক্স বের করা
      const realIndex = mteDoyaData.indexOf(dua);
      const item = document.createElement("div");
      item.className = "dua-item";
      item.style.cssText = "display:flex; align-items:center; gap:12px; padding:12px 13px; background:#fff; border:1px solid #e2ebe5; border-radius:13px; cursor:pointer; margin-bottom:9px; box-shadow:0 2px 8px rgba(0,0,0,.045);";

      const favActive = isFavorite(dua.no) ? "active" : "";
      const favStar = isFavorite(dua.no) ? "⭐" : "☆";

      item.innerHTML = `
        <div class="dua-item-icon" style="width:43px; height:43px; flex:0 0 43px; display:flex; align-items:center; justify-content:center; border-radius:12px; background:#e9f7ef; font-size:22px;">${dua.icon || '🤲'}</div>
        <div class="dua-item-content" style="flex:1; min-width:0;">
          <div class="dua-item-title" style="color:#26352c; font-size:15px; font-weight:600;">
            <span class="dua-number" style="color:#087443; font-weight:700; margin-right:5px;">${dua.no}.</span>
            ${dua.title}
          </div>
          <div class="dua-page" style="margin-top:3px; color:#77857d; font-size:12px;">📄 পৃষ্ঠা ${dua.page}</div>
        </div>
        <button class="dua-favorite-btn ${favActive}" title="পছন্দের তালিকায় রাখুন" style="border:0; background:transparent; cursor:pointer; font-size:20px; padding:5px 8px; margin-left:auto;">${favStar}</button>
        <div class="dua-arrow" style="color:#087443; font-size:21px;">›</div>
      `;

      item.addEventListener("click", () => {
        if(typeof openDoyaModal === "function") openDoyaModal(realIndex);
      });

      const favBtn = item.querySelector(".dua-favorite-btn");
      favBtn.addEventListener("click", (e) => toggleFavorite(dua.no, e));

      target.appendChild(item);
    });
  }

  // সব ফিল্টার এবং সার্চ কন্ট্রোল করে রেন্ডার করা
  function renderAll(){
    const query = currentSearch.trim().toLowerCase();

    let filtered = mteDoyaData.filter(dua => {
      // ড্রপডাউন ফিল্টার
      if(currentFilter === "part1" && dua.no > 29) return false;
      if(currentFilter === "part2" && dua.no < 30) return false;
      if(currentFilter === "favorite" && !isFavorite(dua.no)) return false;

      // মিনি ক্যাটাগরি ফিল্টার
      if(currentCategory === "namaz" && !namazNos.includes(dua.no)) return false;
      if(currentCategory === "daily" && !dailyNos.includes(dua.no)) return false;
      if(currentCategory === "fav" && !isFavorite(dua.no)) return false;

      // সার্চ কুয়েরি ফিল্টার
      if(query){
        const matchTitle = (dua.title || "").toLowerCase().includes(query);
        const matchPron = (dua.pronunciation || "").toLowerCase().includes(query);
        const matchMeaning = (dua.meaning || "").toLowerCase().includes(query);
        const matchAdab = (dua.adab || "").toLowerCase().includes(query);
        const matchNo = (dua.no + "").includes(query);
        return matchTitle || matchPron || matchMeaning || matchAdab || matchNo;
      }

      return true;
    });

    const part1List = filtered.filter(d => d.no <= 29);
    const part2List = filtered.filter(d => d.no > 29);

    const title1 = document.getElementById("sectionTitle1");
    const title2 = document.getElementById("sectionTitle2");
    const empty = document.getElementById("duaEmptyResult");
    const countStatus = document.getElementById("duaCountStatus");

    renderListCustom(part1List, "duaList1");
    renderListCustom(part2List, "duaList2");

    if(title1) title1.style.display = part1List.length === 0 ? "none" : "flex";
    if(title2) title2.style.display = part2List.length === 0 ? "none" : "flex";
    if(empty) empty.style.display = filtered.length === 0 ? "block" : "none";

    if(countStatus){
      countStatus.textContent = `মোট ${filtered.length}টি দু'আ দেখানো হচ্ছে`;
    }
  }

  // ডার্ক মোড ইনিশিয়ালাইজেশন
  function initDarkMode(){
    const darkToggle = document.getElementById("duaDarkToggle");
    const isDark = localStorage.getItem(DARK_KEY) === "true";

    if(isDark){
      document.body.classList.add("dua-dark-mode", "mte-dark-mode");
      if(darkToggle) darkToggle.textContent = "☀️ লাইট মোড";
    }

    if(darkToggle){
      darkToggle.addEventListener("click", () => {
        const activeDark = document.body.classList.toggle("dua-dark-mode");
        document.body.classList.toggle("mte-dark-mode", activeDark);
        localStorage.setItem(DARK_KEY, activeDark);
        darkToggle.textContent = activeDark ? "☀️ লাইট মোড" : "🌙 ডার্ক মোড";
      });
    }
  }

  // রুট বদলে দোয়া পেজ খুললেও কন্ট্রোলগুলো চালু করার জন্য callable initializer
  function initDoyaPage(){
  // ইভেন্ট লিসেনারসমূহ যুক্ত করা
  const searchInput = document.getElementById("duaSearchInput");
  if(searchInput){
    searchInput.addEventListener("input", function(e){
      currentSearch = e.target.value;
      renderAll();
    });
  }

  const filterSelect = document.getElementById("duaFilterSelect");
  if(filterSelect){
    filterSelect.addEventListener("change", function(e){
      currentFilter = e.target.value;
      renderAll();
    });
  }

  // সালাত পরবর্তী দুআ বাটনটি ফিল্টার নয়—ছবিসহ আলাদা পপআপ খুলবে।
  const salatPopup = document.getElementById("mteSalatDuaPopup");
  const salatTrigger = document.querySelector('[data-action="salat-after-dua"]');
  function closeSalatPopup(){
    if(!salatPopup) return;
    salatPopup.classList.remove("is-open");
    salatPopup.setAttribute("aria-hidden", "true");
    document.body.classList.remove("mte-salat-popup-open");
  }
  if(salatTrigger && salatPopup){
    salatTrigger.addEventListener("click", function(event){
      event.preventDefault();
      event.stopPropagation();
      salatPopup.classList.add("is-open");
      salatPopup.setAttribute("aria-hidden", "false");
      document.body.classList.add("mte-salat-popup-open");
      const closeBtn = salatPopup.querySelector("[data-salat-popup-close]");
      if(closeBtn) closeBtn.focus();
    });
    salatPopup.addEventListener("click", function(event){
      if(event.target === salatPopup || event.target.closest("[data-salat-popup-close]")){
        closeSalatPopup();
      }
    });
    document.addEventListener("keydown", function(event){
      if(event.key === "Escape") closeSalatPopup();
    });
  }

  document.querySelectorAll(".dua-mini-btn:not([data-action='salat-after-dua'])").forEach(btn => {
    btn.addEventListener("click", function(){
      document.querySelectorAll(".dua-mini-btn:not([data-action='salat-after-dua'])").forEach(b => {
        b.classList.remove("active");
        b.style.background = "#f7faf8";
        b.style.color = "#235d40";
      });
      this.classList.add("active");
      this.style.background = "#16864b";
      this.style.color = "#fff";
      currentCategory = this.getAttribute("data-filter");
      renderAll();
    });
  });

  // পেজ লোড সাপেক্ষে রান করা
  updateFavCount();
  loadLastRead();
  initDarkMode();
  renderAll();

  }

  window.mteInitDoyaPage = initDoyaPage;
  initDoyaPage();

})();
function renderListCustom(list, targetId){
    const target = document.getElementById(targetId);
    if(!target) return;
    target.innerHTML = "";

    if(list.length === 0) return;

    list.forEach(dua => {
      const realIndex = mteDoyaData.indexOf(dua);
      const item = document.createElement("article");
      item.className = "mte-doya-card";
      item.style.cssText = "display:flex; align-items:center; gap:12px; padding:14px 16px; background:#fff; border:1px solid #e2ebe5; border-left:5px solid #10854d; border-radius:12px; cursor:pointer; margin-bottom:10px; box-shadow:0 2px 6px rgba(0,0,0,.04); transition:all 0.2s ease;";

      const favActive = isFavorite(dua.no) ? "active" : "";
      const favStar = isFavorite(dua.no) ? "⭐" : "☆";

      item.innerHTML = `
        <div style="width:40px; height:40px; display:flex; align-items:center; justify-content:center; border-radius:10px; background:#e9f7ef; font-size:20px;">${dua.icon || '🤲'}</div>
        <div style="flex:1; min-width:0;">
          <div style="color:#1e293b; font-size:16px; font-weight:600;">
            <span style="color:#087443; font-weight:700; margin-right:6px;">${dua.no}.</span>
            ${dua.title}
          </div>
          <div style="margin-top:3px; color:#64748b; font-size:12px;">📄 ${dua.subTitle || 'বইয়ের পৃষ্ঠা'}</div>
        </div>
        <button class="dua-favorite-btn ${favActive}" style="border:0; background:transparent; cursor:pointer; font-size:20px; padding:5px;">${favStar}</button>
        <div style="color:#087443; font-size:20px;">›</div>
      `;

      // কার্ডে ক্লিক করলে মডাল ওপেন হবে
      item.addEventListener("click", () => {
        if(typeof openDoyaModal === "function") openDoyaModal(realIndex);
      });

      // স্টার বাটনে ক্লিক করলে ফেভারিট হবে
      const favBtn = item.querySelector(".dua-favorite-btn");
      favBtn.addEventListener("click", (e) => toggleFavorite(dua.no, e));

      target.appendChild(item);
    });
  }




/* =========================================================
   Arabic font selector: apply selected font to the Arabic dua text
   ========================================================= */
(function initMteArabicFontSelector(){
  if (window.__mteArabicFontSelectorReady) return;
  window.__mteArabicFontSelectorReady = true;
  var fontClasses = ['font-amiri','font-naskh','font-scheherazade','font-lateef','font-cairo'];
  function applyArabicFont(select) {
    select = select || document.getElementById('mteFontSelector');
    var target = document.getElementById('mteModalArabic');
    if (!target) return;
    target.classList.remove.apply(target.classList, fontClasses);
    var chosen = select && fontClasses.indexOf(select.value) >= 0 ? select.value : 'font-amiri';
    target.classList.add(chosen);
    // গুরুত্বপূর্ণ: inline font-family বসাবেন না; তা class-এর font-কে আটকে দিত।
    target.style.removeProperty('font-family');
  }
  window.mteApplyArabicFontSelection = function(){
    applyArabicFont(document.getElementById('mteFontSelector'));
  };
  document.addEventListener('change', function(event) {
    if (event.target && event.target.id === 'mteFontSelector') applyArabicFont(event.target);
  });
  document.addEventListener('DOMContentLoaded', function() {
    window.mteApplyArabicFontSelection();
  });
  // পেজের স্ক্রিপ্ট DOMContentLoaded-এর পরে লোড হলেও ফন্ট প্রয়োগ হবে
  window.setTimeout(function(){ window.mteApplyArabicFontSelection(); }, 0);
})();
