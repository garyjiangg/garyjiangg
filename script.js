// Content for each section with a slideshow
const pages = {
  home: `
      <p>A work in progress...</p>
  `,
  drawings: `
      <section class="gallery-container">
          <img id="slideImage" src="images/Ephemera.jpg" alt="Drawing 1">
          <p id="caption">Title of Drawing 1</p>
      </section>

      <div class=".bottom-nav">
    <button class="prev" onclick="changeSlide(-1)">&#x2329;</button>
    <button class="next" onclick="changeSlide(1)">&#x232A;</button>
      </div>

  `,
  paintings: `
      <section class="gallery-container">
          <img id="slideImage" src="painting1.jpg" alt="Painting 1">
          <p id="caption">Title of Painting 1</p>
      </section>

      <div class=".bottom-nav">
          <button class="prev" onclick="changeSlide(-1)">&#x2329;</button>
          <button class="next" onclick="changeSlide(1)">&#x232A;</button>
      </div>
  `,
  sculptures: `
      <section class="gallery-container">
          <img id="slideImage" src="sculpture1.jpg" alt="Sculpture 1">
          <p id="caption">Title of Sculpture 1</p>
      </section>

      <div class=".bottom-nav">
          <button class="prev" onclick="changeSlide(-1)">&#x2329;</button>
          <button class="next" onclick="changeSlide(1)">&#x232A;</button>
      </div>
  `
  ,
  Ceramics: `
      <section class="gallery-container">
          <img id="slideImage" src="ceramics1.jpg" alt="Sculpture 1">
          <p id="caption">Title of Ceramics 1</p>
      </section>

      <div class=".bottom-nav">
          <button class="prev" onclick="changeSlide(-1)">&#x2329;</button>
          <button class="next" onclick="changeSlide(1)">&#x232A;</button>
      </div>
  `
  ,
  about: `
    <section class="about-container">
        <p class="bio">
        Memory is fragile, layered, and elusive. It surfaces unexpectedly—an echo of a moment, vivid for an instant before dissolving. My process is one of repetition and release. Threading, interweaving, and suspending the fibers, I enter a state of emptiness—where thought dissolves, and intuition takes over. Some days, the placement of each string feels deliberate, governed by an unseen logic of recollection. Other times, the work unfolds organically, guided by waves of memories that drift in and out.
        </p>
        <p class="bio">
        This act of threading is more than construction; it is an excavation. I seek to give form to something tangible—memories that linger beneath the skin, woven into the body, impossible to articulate but ever-present. Through process, labor, and repetition, I attempt to materialize what is otherwise ephemeral: how memory knots, frays, and sketches across time. 
        </p>
    </section>
  `
};

// Image data for each section
const slides = {
  drawings: [
    { src: "images/Untitled_Charcoal_figure.jpg", 
    caption: "<em>Untitled</em>, 2023, 35\" x 19\", Charcoal, Plaster, and Gesso on Paper"
   },
      { src: "images/Ephemera.jpg",
       caption: "<em>Ephemera</em>, 2025, 19\" x 35\", Charcoal, Plaster, and Gesso on Paper"
    },
      { src: "images/Untitled_Charcoal.jpg", 
      caption: "<em>Untitled</em>, 2025, 19\" x 105\", Charcoal, Plaster, and Gesso on Paper" 
    },
    { src: "images/Gratitude.jpg", 
      caption: "<em>Gratitude</em>, 2025, 19\" x 105\", Charcoal, Plaster, and Gesso on Paper" 
    }
  ],
  paintings: [
      { src: "images/Self.jpg", 
      caption: "<em>Untitled</em>, 2023, 24\" x 30\", Oil on Canvas"
    },
      { src: "images/Shelf_I.jpg", 
      caption: "<em>Shelf I</em>, 2025, 32\" x 64\", Oil on Canvas" 
    },
    { src: "images/Shelf_II.jpg", 
      caption: "<em>Shelf II</em>, 2025, 32\" x 64\", Oil on Canvas" 
    },
    { src: "images/Shelf_III.jpg", 
    caption: "<em>Shelf III</em>, 2025, 32\" x 64\", Oil on Canvas" 
  }
  ],
  sculptures: [
      { src: "images/Shelf_IV.jpg", caption: "<em>Shelf IV</em>, 2025, 32\" x 5\" x 64\", Yellow Yarn and Wood" 
    },
      { src: "images/String.jpg", caption: "<em>Untitled</em>, 2025, 87\" x 72\" x 117\", Red Thread " 
    },
    { src: "images/Cardinality.jpg", caption: "<em>Cardinality</em>, 2025, 64\" x 2.5\" x 32\", Red and Black Thread and Wood " 
  }
  ],
  Ceramics: [
    { src: "images/Untitled_Ceramic_2024.jpg",
      caption: `<em>Untitled</em>, 2024, 3.3\" x 1.75\" x 2.5\", Ceramic`
    },
    
      { src: "images/Take-Out.jpg", caption: "<em>Take-Out</em>, 2025, 9\" x 1\" x 14\", Ceramic " 
    }
  ]

};

// Function to load content dynamically with fade effect
function loadContent(page) {
  const content = document.getElementById("content");

  content.classList.add("fade-out");

  setTimeout(() => {
      content.innerHTML = pages[page]; // Update content
      content.classList.remove("fade-out"); // Remove fade-out

      // 
      setTimeout(() => {
          content.classList.add("fade-in"); // Fade in new content
      }, 50);

      // 
      if (slides[page]) {
          setupSlideshow(page);
      }
  }, 500); 
}



function setupSlideshow(page) {
  let currentIndex = 0;
  const slideImage = document.getElementById("slideImage");
  const caption = document.getElementById("caption");

  if (!slideImage || !caption) {
      console.error("Slideshow elements not found.");
      return;
  }

  // 
  slideImage.src = slides[page][currentIndex].src;
  caption.innerHTML = slides[page][currentIndex].caption;

  window.changeSlide = function (direction) {
      // Step 1: Apply fade-out effect
      slideImage.classList.add("fade-out");
      caption.classList.add("fade-out");

      setTimeout(() => {
          // Step 2: Change image and caption after fade-out completes
          currentIndex += direction;

          // Wrap around when reaching the end
          if (currentIndex < 0) {
              currentIndex = slides[page].length - 1;
          } else if (currentIndex >= slides[page].length) {
              currentIndex = 0;
          }

          slideImage.src = slides[page][currentIndex].src;
          caption.innerHTML = slides[page][currentIndex].caption;

          // Step 3: Wait briefly, then apply fade-in
          setTimeout(() => {
              slideImage.classList.remove("fade-out");
              slideImage.classList.add("fade-in");

              caption.classList.remove("fade-out");
              caption.classList.add("fade-in");
          }, 50);
      }, 500); //  Match this to the CSS transition duration
  };
}



