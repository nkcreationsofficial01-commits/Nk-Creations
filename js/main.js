/**
 * NK CREATIONS — LUXURY DESIGN STUDIO INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Base Portfolio Project Data with All Real Works Under Thumbnails
  const defaultPortfolioData = {
    'thumb-vizag': {
      title: 'Vizag Beach Vlog — "Unexpected Date"',
      category: 'thumbnails',
      categoryLabel: 'YouTube Thumbnail',
      software: ['Adobe Photoshop', 'Lightroom'],
      desc: 'High-CTR YouTube travel vlog thumbnail featuring vibrant beach aesthetic, cutout glow lighting, and bold cinematic text.',
      aspect: 'wide',
      image: 'img/thumb-vizag-vlog.jpg',
      type: 'image'
    },
    'thumb-cyber': {
      title: '"Password Hacked ?" Cyber Security Tech',
      category: 'thumbnails',
      categoryLabel: 'Tech YouTube Thumbnail',
      software: ['Adobe Photoshop'],
      desc: 'High-impact hacker theme thumbnail with glowing blue digital circuitry, dark hooded silhouette, and bold contrast typography.',
      aspect: 'wide',
      image: 'img/thumb-cyber-hacked.jpg',
      type: 'image'
    },
    'thumb-generative-ai': {
      title: 'Generative AI Workshop — Siddhartha Institute',
      category: 'thumbnails',
      categoryLabel: 'AI Workshop Thumbnail & Poster',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'Futuristic event poster & digital banner designed for Siddhartha Institute of Technology & Sciences Generative AI Workshop.',
      aspect: 'wide',
      image: 'img/thumb-generative-ai.jpg',
      type: 'image'
    },
    'thumb-brainstorm-battle': {
      title: 'Brainstorm Battle 2026 — SITS Event',
      category: 'thumbnails',
      categoryLabel: 'Event Banner & Poster',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'High-energy 3D robotics and tech battle event poster designed for Brainstorm Battle 2026 at SITS Campus.',
      aspect: 'wide',
      image: 'img/thumb-brainstorm-battle.jpg',
      type: 'image'
    },
    'thumb-tirumala': {
      title: 'తిరుమలలో మా యాత్ర — Tirumala Travel Vlog',
      category: 'thumbnails',
      categoryLabel: 'Telugu Travel Thumbnail',
      software: ['Adobe Photoshop', 'Lightroom'],
      desc: 'Cultural travel vlog thumbnail for Tirumala Temple Pilgrimage with Telugu typography, HDR temple backdrop, and vivid traditional colors.',
      aspect: 'wide',
      image: 'img/thumb-tirumala-yatra.jpg',
      type: 'image'
    },
    'thumb-big-data': {
      title: 'Big Data Analytics Skill Builder — SITS',
      category: 'thumbnails',
      categoryLabel: 'Workshop Banner & Thumbnail',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'High-tech Big Data Analytics skill builder workshop poster and digital banner for Siddhartha Institute of Technology & Sciences.',
      aspect: 'wide',
      image: 'img/thumb-big-data.png',
      type: 'image'
    },
    'thumb-python-fullstack': {
      title: 'Python Full Stack Workshop — SITS',
      category: 'thumbnails',
      categoryLabel: 'Workshop Banner & Thumbnail',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'Hands-on Python Full Stack Workshop banner featuring 3D Python emblem, cute mascot bot, and modern tech backdrop.',
      aspect: 'wide',
      image: 'img/thumb-python-fullstack.png',
      type: 'image'
    },
    'thumb-graduation-ceremony': {
      title: 'Graduation Ceremony 2026 — SITS',
      category: 'thumbnails',
      categoryLabel: 'Ceremony Banner & Poster',
      software: ['Adobe Photoshop', 'Lightroom'],
      desc: 'Official Siddhartha Institute Graduation Ceremony 2026 banner "Celebrating Excellence, Honouring Success" with campus architecture and floating graduation caps.',
      aspect: 'wide',
      image: 'img/thumb-graduation-ceremony.jpg',
      type: 'image'
    },
    'brand-nk': {
      title: 'NK Creations Luxury Official Brand Identity',
      category: 'branding',
      categoryLabel: 'Brand Identity',
      software: ['Adobe Illustrator', 'Photoshop'],
      desc: 'Official emblem mark and gold-plated circular luxury branding for NK Creations studio.',
      aspect: 'regular',
      image: 'img/logo.jpg',
      type: 'image'
    },
    'poster-lumiere': {
      title: 'Lumiere Rose Elegance Luxury Perfume Poster',
      category: 'posters',
      categoryLabel: 'Luxury Advertising Poster',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'High-end cosmetics and luxury fragrance product poster featuring floating pink rose petals, diamond cut bottle cap, and elegant typography.',
      aspect: 'wide',
      image: 'img/poster-lumiere-rose.png',
      type: 'image'
    },
    'poster-coffee': {
      title: 'Special Coffee Freshly Brewed Commercial Poster',
      category: 'posters',
      categoryLabel: 'Beverage Advertising Poster',
      software: ['Adobe Photoshop'],
      desc: 'Dynamic, rich cafe advertisement poster with flying coffee beans, creamy splash wave, and warm barista aesthetic.',
      aspect: 'wide',
      image: 'img/poster-special-coffee.jpg',
      type: 'image'
    },
    'poster-growth': {
      title: 'Your Growth Starts Here — Strategy Poster',
      category: 'posters',
      categoryLabel: 'Corporate Strategy Poster',
      software: ['Adobe Photoshop'],
      desc: 'Motivational business leadership and growth poster featuring glowing neon chess king piece, ascending bar steps, and social handle integration.',
      aspect: 'wide',
      image: 'img/poster-growth-chess.jpg',
      type: 'image'
    },
    'poster-mamaearth': {
      title: 'Naturally Glow — Mamaearth Skincare Campaign',
      category: 'posters',
      categoryLabel: 'E-commerce Product Poster',
      software: ['Adobe Photoshop'],
      desc: 'Bright, organic skincare social advertisement poster showcasing Ubtan Face Wash and Vitamin C Serum on wooden pedestal with turmeric roots.',
      aspect: 'wide',
      image: 'img/poster-mamaearth-skincare.jpg',
      type: 'image'
    },
    'poster-orange-juice': {
      title: 'Fresh Orange Juice Splash Commercial Poster',
      category: 'posters',
      categoryLabel: 'Beverage Product Poster',
      software: ['Adobe Photoshop'],
      desc: 'Refreshing beverage advertisement poster with vibrant liquid splash spiral, ripe orange slices, and modern podium setup.',
      aspect: 'wide',
      image: 'img/poster-orange-juice.png',
      type: 'image'
    },
    'poster-dancing': {
      title: 'Dancing Perspective Typography Poster',
      category: 'posters',
      categoryLabel: 'Graphic Design Poster',
      software: ['Adobe Photoshop'],
      desc: 'Creative perspective 3D depth typography poster with dynamic dancing model cutout and purple gradient backdrop.',
      aspect: 'wide',
      image: 'img/poster-dancing-typography.png',
      type: 'image'
    },
    'poster-porsche': {
      title: 'GT3RS Porsche 911 Automotive Poster',
      category: 'posters',
      categoryLabel: 'Automotive Poster Design',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'High-octane yellow Porsche 911 GT3RS automotive showcase poster with multi-panel detail callouts and bold typography.',
      aspect: 'wide',
      image: 'img/poster-porsche-911.jpg',
      type: 'image'
    },
    'poster-biryani': {
      title: 'Chicken Biryani Restaurant Offer Poster',
      category: 'posters',
      categoryLabel: 'Food & Beverage Poster',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'Mouth-watering chicken biryani commercial food poster with flying ingredients, yellow recipe background, and 30% discount badge.',
      aspect: 'wide',
      image: 'img/poster-chicken-biryani.jpg',
      type: 'image'
    },
    'poster-chennai': {
      title: 'చెన్నై లవ్ స్టోరీ — Chennai Love Story Poster',
      category: 'posters',
      categoryLabel: 'Movie / Series Poster',
      software: ['Adobe Photoshop', 'Lightroom'],
      desc: 'Cinematic romantic drama film poster with moody rainy window backdrop, lush indoor greenery, and Telugu title typography.',
      aspect: 'wide',
      image: 'img/poster-chennai-love-story.jpg',
      type: 'image'
    },
    'poster-rakhi': {
      title: 'Happy Raksha Bandhan Festive Greeting Poster',
      category: 'posters',
      categoryLabel: 'Festive Greeting Poster',
      software: ['Adobe Photoshop', 'Illustrator'],
      desc: 'Luxury royal blue festive greeting poster featuring ornate gold gemstone Rakhi, traditional sweets, pooja thali, and gold foil calligraphy.',
      aspect: 'wide',
      image: 'img/poster-raksha-bandhan.jpg',
      type: 'image'
    },
    'reel-cinematic': {
      title: 'Cinematic Color Grading & Speed Ramp Reel',
      category: 'reels',
      categoryLabel: 'Instagram Reel Edit',
      software: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
      desc: 'High-impact vertical Instagram Reel featuring cinematic teal & orange color grade, seamless whip pans, and punchy audio beat sync.',
      aspect: 'wide',
      image: 'img/service-video-editing.png',
      reelUrl: 'https://www.instagram.com/nkcreationsofficial/reels/',
      type: 'reel'
    },
    'reel-motion': {
      title: 'Kinetic 3D Typography & Motion Hooks',
      category: 'reels',
      categoryLabel: 'Viral Hook Motion Reel',
      software: ['After Effects', 'Premiere Pro'],
      desc: 'Ultra-retention vertical video with 3D text tracking, glowing neon accents, and sound design engineered for viral social engagement.',
      aspect: 'wide',
      image: 'img/thumb-cyber-hacked.jpg',
      reelUrl: 'https://www.instagram.com/nkcreationsofficial/reels/',
      type: 'reel'
    },
    'reel-designer-work': {
      title: 'Graphic Designer Work — Product Reel',
      category: 'reels',
      categoryLabel: 'Creative Designer Reel',
      software: ['Adobe Premiere Pro', 'After Effects'],
      desc: 'A creative designer reel showcasing the transformation of a graphic design concept into a professional product advertisement, featuring a Limca-inspired poster with clean visuals and refreshing green aesthetics.',
      aspect: 'wide',
      image: 'img/reel-chocomint.png',
      reelUrl: 'https://www.instagram.com/reel/DcJMKhUhXLF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      type: 'reel'
    },
    'reel-automotive': {
      title: 'Supercar Sound Design & Glitch Transitions',
      category: 'reels',
      categoryLabel: 'Automotive Reel Edit',
      software: ['Premiere Pro', 'After Effects'],
      desc: 'Adrenaline-fueled automotive vertical edit with custom exhaust audio design, bass drops, and high-velocity speed ramps.',
      aspect: 'wide',
      image: 'img/poster-porsche-911.jpg',
      reelUrl: 'https://www.instagram.com/nkcreationsofficial/reels/',
      type: 'reel'
    }
  };

  // Merge default data with user custom uploads from LocalStorage
  let customProjects = [];
  try {
    customProjects = JSON.parse(localStorage.getItem('nk_custom_projects')) || [];
  } catch (e) {
    customProjects = [];
  }

  const portfolioData = { ...defaultPortfolioData };
  customProjects.forEach(cp => {
    portfolioData[cp.id] = cp;
  });

  // Inject custom uploaded projects into the Portfolio Grid in HTML
  const portfolioContainer = document.getElementById('portfolioContainer');
  if (portfolioContainer && customProjects.length > 0) {
    customProjects.forEach(cp => {
      const cardEl = document.createElement('div');
      cardEl.className = `portfolio-card ${cp.aspect || 'regular'}`;
      cardEl.dataset.id = cp.id;
      cardEl.dataset.category = cp.category;

      const mediaHtml = (cp.mediaType === 'video' || cp.type === 'video')
        ? `<video src="${cp.image}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover;"></video>`
        : `<img src="${cp.image}" alt="${cp.title}" style="width:100%; height:100%; object-fit:cover;">`;

      cardEl.innerHTML = `
        <div class="portfolio-thumbnail">
          <div class="portfolio-artwork-canvas">
            ${mediaHtml}
          </div>
          <div class="portfolio-quick-view-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div class="portfolio-card-overlay">
            <span class="portfolio-overlay-tag">${cp.categoryLabel}</span>
            <h3 class="portfolio-overlay-title">${cp.title}</h3>
            <div class="portfolio-overlay-software">
              ${cp.software.map(s => `<span class="software-tag">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `;

      portfolioContainer.prepend(cardEl);
    });
  }

  // 2. Artwork Renderers for Lightbox Modal
  const generateArtworkSVG = (itemKey, type, customImgUrl) => {
    const cleanKey = itemKey.replace('modal-', '');
    const item = portfolioData[cleanKey] || portfolioData[itemKey];
    const imgSrc = customImgUrl || (item && item.image);

    if (imgSrc) {
      return `
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#000; overflow:hidden; padding:10px;">
          <img src="${imgSrc}" alt="Project Artwork" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:8px;">
        </div>
      `;
    }

    switch (type) {
      case 'poster':
        return `
          <svg viewBox="0 0 400 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#070707;">
            <defs>
              <linearGradient id="goldGrad-${itemKey}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#8A5A00" />
                <stop offset="50%" stop-color="#D4A017" />
                <stop offset="80%" stop-color="#F5C542" />
                <stop offset="100%" stop-color="#FFF0A6" />
              </linearGradient>
              <radialGradient id="radialGlow-${itemKey}" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#F5C542" stop-opacity="0.45"/>
                <stop offset="50%" stop-color="#D4A017" stop-opacity="0.15"/>
                <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
              </radialGradient>
            </defs>
            <rect width="400" height="500" fill="#070707"/>
            <circle cx="200" cy="200" r="180" fill="url(#radialGlow-${itemKey})"/>
            <polygon points="200,60 330,320 70,320" fill="none" stroke="url(#goldGrad-${itemKey})" stroke-width="2" opacity="0.6"/>
            <polygon points="200,340 310,120 90,120" fill="none" stroke="#C8C8C8" stroke-width="1.5" opacity="0.3"/>
            <circle cx="200" cy="200" r="85" fill="#0e0e0e" stroke="url(#goldGrad-${itemKey})" stroke-width="2.5"/>
            <text x="200" y="195" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="url(#goldGrad-${itemKey})" text-anchor="middle">NK</text>
            <text x="200" y="222" font-family="'Poppins', sans-serif" font-weight="600" font-size="10" fill="#C8C8C8" letter-spacing="4" text-anchor="middle">CREATIVE</text>
            <text x="200" y="390" font-family="'Poppins', sans-serif" font-weight="800" font-size="22" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">POWERFUL VISUALS</text>
            <text x="200" y="420" font-family="'Inter', sans-serif" font-weight="500" font-size="11" fill="url(#goldGrad-${itemKey})" text-anchor="middle" letter-spacing="3">LIMITED EDITION • 2026</text>
            <rect x="25" y="25" width="60" height="18" rx="4" fill="rgba(212,160,23,0.15)" stroke="url(#goldGrad-${itemKey})" stroke-width="0.8"/>
            <text x="55" y="37" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#F5C542" text-anchor="middle">POSTER</text>
            <line x1="30" y1="460" x2="370" y2="460" stroke="#222" stroke-width="1"/>
            <text x="35" y="478" font-family="'Inter', sans-serif" font-size="9" fill="#777">NK CREATIONS STUDIO</text>
            <text x="365" y="478" font-family="'Inter', sans-serif" font-size="9" fill="#D4A017" text-anchor="end">4K MASTER ARTWORK</text>
          </svg>
        `;
      case 'thumbnail':
        return `
          <svg viewBox="0 0 500 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#080808;">
            <defs>
              <linearGradient id="glowThumb-${itemKey}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#D4A017" />
                <stop offset="100%" stop-color="#F5C542" />
              </linearGradient>
            </defs>
            <rect width="500" height="280" fill="#080808"/>
            <rect x="0" y="0" width="280" height="280" fill="#0a0a0a"/>
            <circle cx="400" cy="140" r="160" fill="#D4A017" opacity="0.12"/>
            <circle cx="100" cy="140" r="140" fill="#8A5A00" opacity="0.1"/>
            <rect x="30" y="45" width="220" height="42" rx="8" fill="#D4A017"/>
            <text x="45" y="74" font-family="'Poppins', sans-serif" font-weight="900" font-size="20" fill="#000000">10X YOUR GROWTH</text>
            <text x="30" y="130" font-family="'Poppins', sans-serif" font-weight="900" font-size="36" fill="#FFFFFF">VIRAL SECRET</text>
            <text x="30" y="172" font-family="'Poppins', sans-serif" font-weight="800" font-size="30" fill="url(#glowThumb-${itemKey})">REVEALED ⚡</text>
            <rect x="30" y="210" width="130" height="28" rx="6" fill="#141414" stroke="#D4A017" stroke-width="1.2"/>
            <text x="95" y="228" font-family="'Inter', sans-serif" font-weight="700" font-size="11" fill="#FFFFFF" text-anchor="middle">★ CTR BOOSTER</text>
            <circle cx="390" cy="140" r="90" fill="#111" stroke="url(#glowThumb-${itemKey})" stroke-width="3"/>
            <text x="390" y="135" font-family="'Poppins', sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" text-anchor="middle">100K+</text>
            <text x="390" y="160" font-family="'Inter', sans-serif" font-weight="600" font-size="12" fill="#D4A017" text-anchor="middle">VIEWS IN 24H</text>
          </svg>
        `;
      case 'video':
        return `
          <svg viewBox="0 0 360 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090909;">
            <defs>
              <linearGradient id="vidGrad-${itemKey}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#181818"/>
                <stop offset="60%" stop-color="#0b0b0b"/>
                <stop offset="100%" stop-color="#020202"/>
              </linearGradient>
            </defs>
            <rect width="360" height="480" fill="url(#vidGrad-${itemKey})"/>
            <circle cx="180" cy="210" r="70" fill="#111" stroke="#D4A017" stroke-width="2"/>
            <polygon points="172,192 196,210 172,228" fill="#F5C542"/>
            <rect x="25" y="25" width="80" height="24" rx="12" fill="rgba(255,0,0,0.85)"/>
            <circle cx="40" cy="37" r="4" fill="#FFFFFF"/>
            <text x="70" y="41" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#FFFFFF" text-anchor="middle">REEL 4K</text>
            <g fill="#D4A017" opacity="0.7">
              <rect x="130" y="320" width="6" height="24" rx="3"/>
              <rect x="142" y="305" width="6" height="42" rx="3"/>
              <rect x="154" y="295" width="6" height="58" rx="3"/>
              <rect x="166" y="315" width="6" height="30" rx="3"/>
              <rect x="178" y="290" width="6" height="68" rx="3"/>
              <rect x="190" y="308" width="6" height="46" rx="3"/>
              <rect x="202" y="318" width="6" height="28" rx="3"/>
              <rect x="214" y="300" width="6" height="52" rx="3"/>
              <rect x="226" y="322" width="6" height="20" rx="3"/>
            </g>
            <text x="180" y="390" font-family="'Poppins', sans-serif" font-weight="800" font-size="18" fill="#FFFFFF" text-anchor="middle">CINEMATIC EDIT</text>
            <text x="180" y="414" font-family="'Inter', sans-serif" font-weight="500" font-size="11" fill="#C8C8C8" text-anchor="middle">Sound Design • Color Grade • Speed Ramp</text>
          </svg>
        `;
      case 'carousel':
      case 'social':
        return `
          <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#0a0a0a;">
            <defs>
              <linearGradient id="socGrad-${itemKey}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#D4A017"/>
                <stop offset="100%" stop-color="#F5C542"/>
              </linearGradient>
            </defs>
            <rect width="400" height="400" fill="#0c0c0c"/>
            <rect x="20" y="20" width="360" height="360" rx="16" fill="#121212" stroke="rgba(212,160,23,0.3)" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="14" fill="#D4A017"/>
            <text x="50" y="55" font-family="'Poppins', sans-serif" font-weight="800" font-size="11" fill="#000" text-anchor="middle">NK</text>
            <text x="74" y="48" font-family="'Poppins', sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">NK Creations</text>
            <text x="74" y="61" font-family="'Inter', sans-serif" font-size="9" fill="#888">@nkcreations.design</text>
            <rect x="300" y="42" width="60" height="20" rx="10" fill="#1e1e1e"/>
            <text x="330" y="55" font-family="'Inter', sans-serif" font-weight="600" font-size="9" fill="#F5C542" text-anchor="middle">SWIPE ➔</text>
            <text x="50" y="130" font-family="'Poppins', sans-serif" font-weight="800" font-size="24" fill="#FFFFFF">How To 10x Your</text>
            <text x="50" y="165" font-family="'Poppins', sans-serif" font-weight="900" font-size="28" fill="url(#socGrad-${itemKey})">Social Engagement</text>
            <rect x="50" y="195" width="300" height="110" rx="10" fill="#181818" stroke="#252525"/>
            <text x="70" y="230" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="#FFFFFF">1. High-Contrast Typography</text>
            <text x="70" y="255" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="#FFFFFF">2. Seamless Carousel Loops</text>
            <text x="70" y="280" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="#FFFFFF">3. Gold Accent Call-to-Actions</text>
            <circle cx="180" cy="345" r="4" fill="#D4A017"/>
            <circle cx="195" cy="345" r="3" fill="#444"/>
            <circle cx="210" cy="345" r="3" fill="#444"/>
            <circle cx="225" cy="345" r="3" fill="#444"/>
          </svg>
        `;
      case 'branding':
      default:
        return `
          <div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#070707; padding:20px; position:relative; overflow:hidden;">
            <div style="position:relative; width:180px; height:180px; display:flex; align-items:center; justify-content:center;">
              <img src="img/logo.jpg" alt="NK Creations Official Brand" style="width:100%; height:100%; object-fit:contain; border-radius:50%; box-shadow: 0 0 40px rgba(212,160,23,0.35); border: 2px solid rgba(212,160,23,0.7);">
            </div>
            <div style="margin-top:16px; text-align:center;">
              <h4 style="font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:800; color:#FFFFFF; margin-bottom:2px; letter-spacing:1px;">NK CREATIONS</h4>
              <p style="font-family:'Inter',sans-serif; font-size:0.75rem; color:#D4A017; font-weight:600; letter-spacing:2px; text-transform:uppercase;">Luxury Studio Brand Identity</p>
            </div>
          </div>
        `;
    }
  };

  // 3. Inject Artworks into default Portfolio Cards
  const renderAllCardArtworks = () => {
    document.querySelectorAll('.portfolio-card').forEach(card => {
      const id = card.dataset.id;
      const data = portfolioData[id];
      if (data && !data.image) {
        const canvasContainer = card.querySelector('.portfolio-artwork-canvas');
        if (canvasContainer && !canvasContainer.querySelector('img, video')) {
          canvasContainer.innerHTML = generateArtworkSVG(id, data.type);
        }
      }
    });
  };
  renderAllCardArtworks();

  // Also render hero showcase artwork featuring official logo
  const heroArt = document.querySelector('.showcase-mockup-art-container');
  if (heroArt) {
    heroArt.innerHTML = `
      <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:radial-gradient(circle, rgba(212,160,23,0.15) 0%, #050505 70%); position:relative; overflow:hidden; padding:24px;">
        <img src="img/logo.jpg" alt="NK Creations Official Logo" style="max-width:82%; max-height:82%; object-fit:contain; border-radius:50%; box-shadow: 0 0 50px rgba(212,160,23,0.45); border: 2px solid rgba(245,197,66,0.6); transition:transform 0.5s ease;">
      </div>
    `;
  }

  // 4. Portfolio Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter.toLowerCase();
      const currentCards = document.querySelectorAll('.portfolio-card');

      currentCards.forEach(card => {
        const categories = card.dataset.category.toLowerCase().split(/\s+/);
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // 5. Portfolio Lightbox Modal Management
  const modalBackdrop = document.getElementById('projectModal');
  const modalMedia = document.getElementById('modalMedia');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalSoftware = document.getElementById('modalSoftware');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  const openProjectModal = (projectId) => {
    const data = portfolioData[projectId];
    if (!data) return;

    modalTag.textContent = data.categoryLabel;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Set Software Badges
    modalSoftware.innerHTML = data.software
      .map(s => `<span class="modal-software-badge">${s}</span>`)
      .join('');

    // Generate artwork
    if (data.mediaType === 'video' || data.type === 'video') {
      modalMedia.innerHTML = `
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#000; overflow:hidden; padding:12px;">
          <video src="${data.image}" controls autoplay playsinline style="max-width:100%; max-height:100%; object-fit:contain; border-radius:8px; box-shadow:0 8px 30px rgba(0,0,0,0.8);"></video>
        </div>
      `;
    } else if (data.image) {
      modalMedia.innerHTML = `
        <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:#000; overflow:hidden; padding:12px;">
          <img src="${data.image}" alt="${data.title}" style="max-width:100%; max-height:100%; object-fit:contain; border-radius:8px; box-shadow:0 8px 30px rgba(0,0,0,0.8);">
        </div>
      `;
    } else {
      modalMedia.innerHTML = generateArtworkSVG(projectId, data.type);
    }

    if (data.reelUrl) {
      modalInquireBtn.href = data.reelUrl;
      modalInquireBtn.target = '_blank';
      modalInquireBtn.innerHTML = `<span>▶️ Watch Reel on Instagram</span>`;
      modalInquireBtn.onclick = null;
    } else {
      modalInquireBtn.href = `#contact`;
      modalInquireBtn.target = '_self';
      modalInquireBtn.innerHTML = `<span>Inquire Similar Project</span>`;
      modalInquireBtn.onclick = () => {
        closeProjectModal();
        const chip = document.querySelector(`input[name="project_type"][value*="${data.category}"]`);
        if (chip) chip.checked = true;
      };
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  // Attach click listener for all cards (including dynamic ones)
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.portfolio-card');
    if (card) {
      const id = card.dataset.id;
      openProjectModal(id);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // 6. Navigation Bar Blur on Scroll & Active Link Tracking
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navList = document.getElementById('navLinksList');

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      if (navList.classList.contains('active')) {
        mobileToggle.innerHTML = '✕';
      } else {
        mobileToggle.innerHTML = '☰';
      }
    });

    navList.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // 8. Working Contact Form Handler (FormSubmit AJAX + WhatsApp Redirect + Local Storage Inbox)
  const contactForm = document.getElementById('contactForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');
  const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

  const showToast = (message) => {
    if (!toastNotice) return;
    toastText.innerHTML = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 6000);
  };

  if (contactForm) {
    const dispatchInquiry = (channel) => {
      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const message = document.getElementById('clientMessage').value.trim();
      const selectedType = document.querySelector('input[name="project_type"]:checked')?.value || 'Graphic Design';

      if (!name || !email) {
        showToast('⚠️ Please enter your Name and Email address.');
        document.getElementById('clientName').focus();
        return false;
      }

      // 1. Save locally to Admin Panel Leads Inbox
      const newInquiry = {
        name,
        email,
        projectType: selectedType,
        message: message || 'Direct inquiry via ' + channel,
        date: new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      };

      try {
        const storedInquiries = JSON.parse(localStorage.getItem('nk_inquiries')) || [];
        storedInquiries.unshift(newInquiry);
        localStorage.setItem('nk_inquiries', JSON.stringify(storedInquiries));
      } catch (err) {
        console.error('Storage error', err);
      }

      const subjectText = `New Project Inquiry from ${name} [${selectedType}]`;
      const emailBody = `Hi NK Creations,\n\nI would like to discuss a project with you:\n\n• Name: ${name}\n• Email: ${email}\n• Project Type: ${selectedType}\n• Message / Details:\n${message || 'N/A'}\n\nLooking forward to hearing from you!`;

      if (channel === 'gmail') {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nkcreationsofficial01@gmail.com&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailBody)}`;
        const mailtoUrl = `mailto:nkcreationsofficial01@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(emailBody)}`;
        
        const win = window.open(gmailUrl, '_blank');
        if (!win || win.closed || typeof win.closed === 'undefined') {
          window.location.href = mailtoUrl;
        }
        showToast(`✉️ <strong>Opening Gmail!</strong> Composing message directly to <strong>nkcreationsofficial01@gmail.com</strong>...`);
      } else if (channel === 'whatsapp') {
        const waText = `Hi NK Creations! My name is ${name} (${email}).\nI'm interested in *${selectedType}*.\n\nDetails: ${message || 'I would like to discuss a new project.'}`;
        const waUrl = `https://wa.me/917995480604?text=${encodeURIComponent(waText)}`;
        window.open(waUrl, '_blank');
        showToast(`💬 <strong>Opening WhatsApp!</strong> Connecting directly to <strong>+91 7995480604</strong>...`);
      }
      return true;
    };

    const gmailBtn = document.getElementById('sendViaGmailBtn');
    const waBtn = document.getElementById('sendViaWhatsAppBtn');

    if (gmailBtn) {
      gmailBtn.addEventListener('click', () => dispatchInquiry('gmail'));
    }

    if (waBtn) {
      waBtn.addEventListener('click', () => dispatchInquiry('whatsapp'));
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      dispatchInquiry('gmail');
    });
  }
});
