/*
  PUBLIC ENEMY
  Single-page GitHub Pages website.

  IMPORTANT:
  Put your local image files inside /assets and change the values in SITE_IMAGES below.
  The Discord CDN links for profile pictures are included as fallbacks, but local files
  are recommended because CDN links can expire.
*/

const SITE_IMAGES = {
  // PAGE 1 — replace these 3 with the actual files from your first-page design.
  homeBackground: "assets/page1-background.jpg",
  homeLeftLogo: "assets/page1-left-logo.png",
  homeRightLogo: "assets/page1-right-logo.png",

  // Small logo shown in the top-left navigation.
  topLogo: "assets/top-logo.png",

  // PAGE 2 — supplied by you.
  profilesBackground: "https://media.discordapp.net/attachments/1526941627418152970/1557767413427077221/514a7627-c5b5-41e3-92fd-9ec3d049c128.png?ex=6ac8ff75&is=6ac7adf5&hm=769401969d0eac1d9c521bfced64b87842062c4294c5a282efcc1512fe0bb1d9&=&format=webp&quality=lossless",
  profilesLogo: "https://media.discordapp.net/attachments/1526941627418152970/1557767273060769843/76ad6af0-17eb-44c1-a397-e8f1ef65d410.png?ex=6ac8ff53&is=6ac7add3&hm=840d36170c886f17c120bec0582bd5fbbe72da5d4eaa42c2f4902640e0e7b1cc&=&format=webp&quality=lossless&width=768&height=768",

  // PAGE 3 — supplied by you.
  aboutRightLogo: "https://media.discordapp.net/attachments/1487874155255824536/1491674563090841730/bf8efb77-3c3a-47ea-85bc-bef41c9cc69d.png?ex=6ac87eb1&is=6ac72d31&hm=f670d9eeac914328ef4f692c7c14e719c850ead7ff59a055dbf3c3d5a5603702&=&format=webp&quality=lossless&width=768&height=736",
  aboutLeftLogo: "https://media.discordapp.net/attachments/1526941627418152970/1557768137397764137/970b56a1-3b6e-42ec-bbf6-4e0c5e78fc1c.png?ex=6ac90021&is=6ac7aea1&hm=c6be64479e30d15c2a5a2970c9893352c5e9f8a3529454bbf31b2acad50995fb&=&format=webp&quality=lossless&width=768&height=768"
};

const profiles = [
  {
    name: "Sal",
    rank: "FOUNDER",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557764719694057502/17af53d8eaeb15fe63f7980d72d92b83.jpg?ex=6ac8fcf3&is=6ac7ab73&hm=a5e61a7dea5be696ab4a9a36c4e099edffd9ca8430bfe91d2ad9e15e6f8f5c88&=&format=webp&width=432&height=768",
    description: "A founder focused on keeping the group connected, disciplined, and moving with purpose.",
    quote: "Unity is strongest when everyone knows where they stand."
  },
  {
    name: "Yole",
    rank: "FOUNDER",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557727587126485012/03481C35-38E0-4D0F-8358-E82031B25BBC.png?ex=6ac8da5d&is=6ac788dd&hm=0dbf6e136e183ea6629db3e98ec221244806010376b5f840768443520e5539ef&=&format=webp&quality=lossless",
    description: "Quiet presence, steady mindset, and someone who values the people around them.",
    quote: "Stay solid. Let the noise pass."
  },
  {
    name: "Jinu",
    rank: "FOUNDER",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557726569676542033/61653748-AAEE-45F0-956F-E8DB608080FC.png?ex=6ac8d96b&is=6ac787eb&hm=3b26695de5c0b97bf8701a7d4aff09bb3699202a803803443b794bc2c070418d&=&format=webp&quality=lossless",
    description: "A dependable figure who keeps the standard high without needing to be loud.",
    quote: "Respect is built in the moments nobody sees."
  },
  {
    name: "Toshi",
    rank: "FOUNDER",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557727629287620688/5E4EB083-857E-4199-94FB-51138EA37063.png?ex=6ac8da68&is=6ac788e8&hm=e33cbca299feb417f265f21e3924f8a2f92081baf3dd56a4bf513cc029276b99&=&format=webp&quality=lossless",
    description: "Calm, consistent, and present when the group needs it.",
    quote: "Move with purpose, not for attention."
  },

  {
    name: "Wayne",
    rank: "THREATS",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557726593059782746/E17E0AB0-1BFD-4EA3-83FC-2E9F1D491F27.png?ex=6ac8d970&is=6ac787f0&hm=2d67c4047a283f0ec5d1912b9828cd895e42db8837b74d3fc0b5ca6b69a9a3d9&=&format=webp&quality=lossless",
    description: "A member known for keeping things straightforward and staying composed.",
    quote: "No need to prove what already speaks for itself."
  },
  {
    name: "Johnrey",
    rank: "THREATS",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557726735909392545/DC959A45-5002-411A-9B46-2EFB495269AB.png?ex=6ac8d993&is=6ac78813&hm=8108bcf476d8156108cd4539ab910d2585bf0c740db2b2be545b348ba8d59cb2&=&format=webp&quality=lossless",
    description: "A steady presence with a direct attitude and no interest in unnecessary drama.",
    quote: "Keep it simple. Keep it real."
  },
  {
    name: "Hudas",
    rank: "THREATS",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557726658788589729/79DBF556-3D0E-4C58-A18E-A915C48B8C64.png?ex=6ac8d980&is=6ac78800&hm=ecdb3efb5e41ae90c732812a72073b1ec37b583e064ce5826156eb7482f93c12&=&format=webp&quality=lossless",
    description: "Reserved, observant, and focused on keeping the circle together.",
    quote: "Loyalty doesn't need an audience."
  },
  {
    name: "Tyler",
    rank: "THREATS",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557726890712637541/5AC477F1-6C26-4660-BD00-4516304D73D1.png?ex=6ac8d9b7&is=6ac78837&hm=a5076739547b0889a2d7fdb44eeff0bdb5cd748592cd3e6054b5f6970e511d9f&=&format=webp&quality=lossless",
    description: "A composed personality who brings energy without creating unnecessary chaos.",
    quote: "Presence matters more than volume."
  },
  {
    name: "Tayga",
    rank: "THREATS",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557726969800560780/F45D8056-F53A-42A0-A62B-C6C53EBF9B39.png?ex=6ac8d9ca&is=6ac7884a&hm=51c54941294d971216a8efa53416f33906b2a2d86958190c9f7aef7fb73f2b01&=&format=webp&quality=lossless",
    description: "A quiet contributor who knows when to speak and when to simply be present.",
    quote: "Quiet doesn't mean absent."
  },

  {
    name: "Sainty",
    rank: "ENEMY",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557727457501511700/97EE3E2B-6F11-40DC-957F-87C444C9A479.png?ex=6ac8da3f&is=6ac788bf&hm=ac92b52bd81fb51e59c85f12999c9858c144554bf3d8d24f44c456610306da6a&=&format=webp&quality=lossless",
    description: "Independent and straightforward, with a calm presence that speaks for itself.",
    quote: "Stand where you belong and don't pretend."
  },
  {
    name: "Leb",
    rank: "ENEMY",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557727527806443590/67F5D7F6-8DD6-4BD7-B067-312E9AD17267.png?ex=6ac8da4f&is=6ac788cf&hm=58b44abe82cbffd784b4e76ffe1c4d8cce14b3f4b70a574baec3b0258159d99c&=&format=webp&quality=lossless",
    description: "A familiar face who values consistency, loyalty, and staying genuine.",
    quote: "Real ones don't need introductions."
  },
  {
    name: "Vel",
    rank: "ENEMY",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557765653396717628/8F905E45-A0B7-46EF-B35E-1186C88A6FA3.png?ex=6ac8fdd1&is=6ac7ac51&hm=b1d484b68797fba3a048845ff4c7def43693072e2e4c4dfe70420a1ed158fab1&=&format=webp&quality=lossless",
    description: "Low-key, focused, and comfortable letting actions carry the message.",
    quote: "Less said. More understood."
  },
  {
    name: "Red",
    rank: "ENEMY",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557727235769901106/ECA3A23E-1175-4FAD-94CA-7B88E7F08FF9.png?ex=6ac8da0a&is=6ac7888a&hm=bc0cba6cfa48af0dfa35b4407dac2c90356ae728c4ce653d8ecd5f841422bc6b&=&format=webp&quality=lossless",
    description: "A direct personality who keeps the focus on the people and the bigger picture.",
    quote: "Keep your circle strong."
  },
  {
    name: "Ramon",
    rank: "ENEMY",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557727133827080222/0D4A47DC-E51D-4A52-BE1A-870B133C747D.png?ex=6ac8d9f1&is=6ac78871&hm=ca4800e510ce65f4565b011e8c2e86590d7e4981a37a9a2d6ed15ecb0d1d3122&=&format=webp&quality=lossless",
    description: "Calm and reliable, with a personality that fits naturally into the group.",
    quote: "Loyalty is remembered."
  },
  {
    name: "Garfield",
    rank: "ENEMY",
    image: "https://cdn.discordapp.com/attachments/1526941627418152970/1557766254452805784/C4181C2A-111A-45D7-9764-2F32CD87A5CE.png?ex=6ac8fe60&is=6ac7ace0&hm=c4bc2b84639f9c68e0c314a2efcc6a1fecd7c8481c40a5499744f8e2d07eb622",
    description: "A recognizable presence with a laid-back style and strong sense of belonging.",
    quote: "Stay true to the people beside you."
  },
  {
    name: "Ren",
    rank: "ENEMY",
    image: "https://media.discordapp.net/attachments/1526941627418152970/1557766438087950456/ACC2E6FC-B8FA-46B6-AE8A-26A12E502A04.png?ex=6ac8fe8c&is=6ac7ad0c&hm=a7b949ec891ba14438fc03db299a0f29f3ce6a6b0a3b3b2da42327721af27180&=&format=webp&quality=lossless",
    description: "A quiet member who keeps their identity simple and their presence consistent.",
    quote: "You don't have to be loud to be remembered."
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function setImage(id, source) {
  const element = document.getElementById(id);
  if (!element) return;
  element.src = source;
}

function setBackground(element, source) {
  if (!element) return;
  element.style.backgroundImage = `url("${source}")`;
}

function initializeImages() {
  setImage("top-logo", SITE_IMAGES.topLogo);
  setImage("home-left-logo", SITE_IMAGES.homeLeftLogo);
  setImage("home-right-logo", SITE_IMAGES.homeRightLogo);
  setBackground($(".page-home"), SITE_IMAGES.homeBackground);

  setBackground($(".profiles-background"), SITE_IMAGES.profilesBackground);
  setImage("profiles-logo", SITE_IMAGES.profilesLogo);

  setImage("about-right-logo", SITE_IMAGES.aboutRightLogo);
  setImage("about-left-logo", SITE_IMAGES.aboutLeftLogo);
}

function showPage(pageId) {
  $$(".page").forEach(page => {
    page.classList.toggle("active-page", page.id === pageId);
  });

  $$(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

$$("[data-page]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

function renderProfiles(rank = "FOUNDER") {
  const grid = $("#profile-grid");
  const visible = profiles.filter(profile => profile.rank === rank);

  grid.innerHTML = visible.map((profile, index) => `
    <article class="profile-card" data-index="${profiles.indexOf(profile)}" style="animation-delay:${index * 55}ms">
      <img class="avatar" src="${profile.image}" alt="${profile.name}" loading="lazy">
      <div class="card-info">
        <div class="card-name">${profile.name}</div>
        <div class="card-rank">${profile.rank}</div>
        <div class="dnd">DO NOT DISTURB</div>
      </div>
    </article>
  `).join("");

  $$(".profile-card").forEach(card => {
    card.addEventListener("click", () => {
      const profile = profiles[Number(card.dataset.index)];
      openProfile(profile);
    });
  });
}

$$(".rank-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    $$(".rank-tab").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderProfiles(tab.dataset.rank);
  });
});

function openProfile(profile) {
  $("#modal-avatar").src = profile.image;
  $("#modal-avatar").alt = profile.name;
  $("#modal-name").textContent = profile.name;
  $("#modal-rank").textContent = profile.rank;
  $("#modal-description").textContent = profile.description;
  $("#modal-quote").textContent = `“${profile.quote}”`;

  $("#profile-modal").classList.add("open");
  $("#profile-modal").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProfile() {
  $("#profile-modal").classList.remove("open");
  $("#profile-modal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

$$("[data-close-modal]").forEach(element => {
  element.addEventListener("click", closeProfile);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeProfile();
});

function updateViewerCount() {
  const number = Math.floor(Math.random() * 18) + 1;
  $("#viewer-count").textContent = String(number).padStart(3, "0");
}

window.addEventListener("load", () => {
  initializeImages();
  renderProfiles("FOUNDER");
  updateViewerCount();

  setTimeout(() => {
    $("#site-loader").classList.add("loaded");
  }, 350);
});
