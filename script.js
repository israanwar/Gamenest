const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");
const moodButtons = document.querySelectorAll(".mood-option");
const moodKicker = document.querySelector("#mood-kicker");
const moodTitle = document.querySelector("#mood-title-copy");
const moodCopy = document.querySelector("#mood-copy");

const moodContent = {
  santai: {
    kicker: "Main santai",
    title: "Masuk untuk menikmati permainan, bukan membuktikan apa-apa.",
    copy: "Ruang yang baik memberi jalan ringan untuk menemukan sesi yang sesuai ritme, tanpa mengubah setiap pertemuan menjadi kompetisi.",
  },
  tim: {
    kicker: "Cari tim",
    title: "Temukan orang yang ingin bermain ke arah yang sama.",
    copy: "Konteks yang jelas membantu pemain memahami gaya komunikasi, tujuan sesi, dan ekspektasi sebelum mereka memilih untuk bergabung.",
  },
  komunitas: {
    kicker: "Ikuti komunitas",
    title: "Beri ruang untuk kembali pada orang yang terasa cocok.",
    copy: "Komunitas bertahan bukan hanya karena permainan yang sama, tetapi karena orang dapat mengenali ruang yang nyaman untuk tumbuh bersama.",
  },
};

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "Tutup" : "Menu";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
});

moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = moodContent[button.dataset.mood];
    moodButtons.forEach((choice) => {
      choice.classList.toggle("is-active", choice === button);
      choice.setAttribute("aria-pressed", String(choice === button));
    });
    moodKicker.textContent = content.kicker;
    moodTitle.textContent = content.title;
    moodCopy.textContent = content.copy;
  });
});
