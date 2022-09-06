document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".animation-trigger.hero").forEach((trigger) => {
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".background-dealer")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-black")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-monitor:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-gadgets:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-desk:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-player")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-chair:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-player-throwing-effect")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-1")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-2")
              .forEach((target) => target.classList.remove("active"));
          }
          console.log("hero");
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
      }
    ).observe(trigger);
  });
  document.querySelectorAll(".animation-trigger.collect").forEach((trigger) => {
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".background-dealer:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-dealer-black")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-monitor:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-gadgets:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-desk:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-player")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-chair")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-effect")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-1")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-2")
              .forEach((target) => target.classList.remove("active"));
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
      }
    ).observe(trigger);
  });
  document.querySelectorAll(".animation-trigger.trade").forEach((trigger) => {
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".background-dealer")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-black:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-monitor")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-gadgets")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-desk:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-player:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-chair")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-effect")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-1")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-2")
              .forEach((target) => target.classList.remove("active"));
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
      }
    ).observe(trigger);
  });
  document.querySelectorAll(".animation-trigger.upgrade").forEach((trigger) => {
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".background-dealer")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-black")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-monitor")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-gadgets")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-desk")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-chair")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-effect")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-1")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-player-throwing-card-2")
              .forEach((target) => target.classList.remove("active"));
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
      }
    ).observe(trigger);
  });
  document.querySelectorAll(".animation-trigger.battle").forEach((trigger) => {
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document
              .querySelectorAll(".background-dealer")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-black")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-monitor")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-gadgets")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-desk:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-player")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(".background-dealer-hooded:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-player-throwing:not(.active)")
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(".background-chair")
              .forEach((target) => target.classList.remove("active"));
            document
              .querySelectorAll(
                ".background-player-throwing-effect:not(.active)"
              )
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(
                ".background-player-throwing-card-1:not(.active)"
              )
              .forEach((target) => target.classList.add("active"));
            document
              .querySelectorAll(
                ".background-player-throwing-card-2:not(.active)"
              )
              .forEach((target) => target.classList.add("active"));
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px",
      }
    ).observe(trigger);
  });
});
