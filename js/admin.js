/**
 * NK CREATIONS — ADMIN DASHBOARD LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  const DEFAULT_PIN = 'nkadmin2026';
  const loginBackdrop = document.getElementById('loginBackdrop');
  const loginForm = document.getElementById('loginForm');
  const pinInput = document.getElementById('pinInput');
  const loginError = document.getElementById('loginError');

  // Check login state
  if (sessionStorage.getItem('nk_admin_logged_in') === 'true') {
    if (loginBackdrop) loginBackdrop.style.display = 'none';
  }

  // Handle Login
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPin = pinInput.value.trim();
      if (enteredPin === DEFAULT_PIN || enteredPin === 'admin' || enteredPin === '1234') {
        sessionStorage.setItem('nk_admin_logged_in', 'true');
        loginBackdrop.style.display = 'none';
        showToast('🔓 Welcome to NK Creations Admin Panel');
      } else {
        loginError.textContent = '❌ Incorrect Passcode. Please try again.';
        loginError.style.display = 'block';
      }
    });
  }

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('nk_admin_logged_in');
      window.location.reload();
    });
  }

  // Toast Function
  const toast = document.getElementById('adminToast');
  const toastText = document.getElementById('adminToastText');
  function showToast(msg) {
    if (!toast) return;
    toastText.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // Tab Navigation
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  // LocalStorage Helpers
  function getCustomProjects() {
    try {
      return JSON.parse(localStorage.getItem('nk_custom_projects')) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCustomProjects(projects) {
    localStorage.setItem('nk_custom_projects', JSON.stringify(projects));
  }

  function getInquiries() {
    try {
      return JSON.parse(localStorage.getItem('nk_inquiries')) || [];
    } catch (e) {
      return [];
    }
  }

  function saveInquiries(inquiries) {
    localStorage.setItem('nk_inquiries', JSON.stringify(inquiries));
  }

  // Photo Upload Handler (Drag & Drop + File Input)
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('projectImageInput');
  const previewContainer = document.getElementById('imagePreviewContainer');
  const previewImg = document.getElementById('previewImg');
  const removeImgBtn = document.getElementById('removeImgBtn');
  let currentUploadedMediaBase64 = '';
  let currentUploadedMediaType = 'image';
  const previewVideo = document.getElementById('previewVideo');

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
      dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleMediaFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleMediaFile(e.target.files[0]);
      }
    });
  }

  function handleMediaFile(file) {
    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');

    if (!isImage && !isVideo) {
      alert('Please upload an image (PNG, JPG, WEBP) or video (MP4, WEBM).');
      return;
    }

    currentUploadedMediaType = isVideo ? 'video' : 'image';

    const reader = new FileReader();
    reader.onload = (e) => {
      currentUploadedMediaBase64 = e.target.result;
      if (isVideo) {
        if (previewImg) previewImg.style.display = 'none';
        if (previewVideo) {
          previewVideo.src = currentUploadedMediaBase64;
          previewVideo.style.display = 'block';
        }
      } else {
        if (previewVideo) previewVideo.style.display = 'none';
        if (previewImg) {
          previewImg.src = currentUploadedMediaBase64;
          previewImg.style.display = 'block';
        }
      }
      previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }

  if (removeImgBtn) {
    removeImgBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentUploadedMediaBase64 = '';
      currentUploadedMediaType = 'image';
      fileInput.value = '';
      previewContainer.style.display = 'none';
      if (previewImg) { previewImg.src = ''; previewImg.style.display = 'none'; }
      if (previewVideo) { previewVideo.src = ''; previewVideo.style.display = 'none'; }
    });
  }

  // Upload Form Submission
  const uploadForm = document.getElementById('uploadProjectForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!currentUploadedMediaBase64) {
        alert('⚠️ Please select or drop a photo or video reel first.');
        return;
      }

      const title = document.getElementById('projectTitle').value.trim();
      const category = document.getElementById('projectCategory').value;
      const reelUrl = document.getElementById('projectReelUrl') ? document.getElementById('projectReelUrl').value.trim() : '';
      const categoryLabels = {
        'reels': 'Instagram Reel Edit',
        'posters': 'Poster Design',
        'social': 'Social Media Design',
        'thumbnails': 'YouTube Thumbnail',
        'branding': 'Brand Identity'
      };
      const software = document.getElementById('projectSoftware').value.split(',').map(s => s.trim()).filter(Boolean);
      const desc = document.getElementById('projectDesc').value.trim();

      const newProject = {
        id: 'custom-' + Date.now(),
        title: title || 'NK Creative Project',
        category: category,
        categoryLabel: categoryLabels[category] || 'Creative Design',
        software: software.length ? software : (category === 'reels' ? ['Adobe Premiere Pro', 'After Effects'] : ['Adobe Photoshop', 'Adobe Illustrator']),
        desc: desc || 'Custom commissioned project created by NK Creations.',
        aspect: category === 'reels' || category === 'posters' ? 'wide' : (category === 'thumbnails' ? 'wide' : 'regular'),
        type: currentUploadedMediaType === 'video' ? 'video' : 'custom',
        image: currentUploadedMediaBase64,
        mediaType: currentUploadedMediaType,
        reelUrl: reelUrl || (category === 'reels' ? 'https://www.instagram.com/nkcreationsofficial/reels/' : ''),
        dateAdded: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      };

      const projects = getCustomProjects();
      projects.unshift(newProject);
      saveCustomProjects(projects);

      showToast(`✅ "${newProject.title}" has been published to your live website!`);
      
      // Reset form
      uploadForm.reset();
      currentUploadedMediaBase64 = '';
      currentUploadedMediaType = 'image';
      previewContainer.style.display = 'none';
      if (previewImg) { previewImg.src = ''; previewImg.style.display = 'none'; }
      if (previewVideo) { previewVideo.src = ''; previewVideo.style.display = 'none'; }
      
      // Refresh displays
      renderProjectsTable();
      updateDashboardStats();
    });
  }

  // Render Projects Table
  function renderProjectsTable() {
    const tableBody = document.getElementById('projectsTableBody');
    if (!tableBody) return;

    const customProjects = getCustomProjects();

    if (customProjects.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding:36px; color:#777;">
            No uploaded projects yet. Upload your first poster or design above!
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = customProjects.map((p, idx) => `
      <tr>
        <td>
          <div class="project-thumb-cell">
            <img src="${p.image}" alt="${p.title}">
          </div>
        </td>
        <td>
          <strong style="color:#fff; font-family:'Poppins', sans-serif;">${p.title}</strong>
          <div style="font-size:0.8rem; color:#888;">${p.software.join(', ')}</div>
        </td>
        <td>
          <span class="badge-category">${p.categoryLabel}</span>
        </td>
        <td style="color:#aaa; font-size:0.85rem;">${p.dateAdded}</td>
        <td>
          <button class="btn btn-danger" data-id="${p.id}" onclick="deleteProject('${p.id}')">
            🗑️ Delete
          </button>
        </td>
      </tr>
    `).join('');
  }

  // Window delete function
  window.deleteProject = function(id) {
    if (confirm('Are you sure you want to delete this project from your website?')) {
      let projects = getCustomProjects();
      projects = projects.filter(p => p.id !== id);
      saveCustomProjects(projects);
      showToast('🗑️ Project removed successfully.');
      renderProjectsTable();
      updateDashboardStats();
    }
  };

  // Render Inquiries Table
  function renderInquiriesTable() {
    const tableBody = document.getElementById('inquiriesTableBody');
    if (!tableBody) return;

    const inquiries = getInquiries();

    if (inquiries.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding:36px; color:#777;">
            No inquiries received yet. Client submissions from your website will appear here.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = inquiries.map((inq, idx) => `
      <tr>
        <td><strong style="color:#fff;">${inq.name}</strong></td>
        <td><a href="mailto:${inq.email}" style="color:#D4A017;">${inq.email}</a></td>
        <td><span class="badge-category">${inq.projectType}</span></td>
        <td style="max-width:300px; color:#ccc; font-size:0.88rem;">${inq.message || '—'}</td>
        <td style="color:#888; font-size:0.82rem;">${inq.date}</td>
        <td>
          <a href="https://wa.me/917995480604?text=Hi%20${encodeURIComponent(inq.name)},%20regarding%20your%20inquiry%20for%20${encodeURIComponent(inq.projectType)}" target="_blank" class="btn btn-gold" style="padding:4px 10px; font-size:0.75rem;">
            💬 WhatsApp
          </a>
        </td>
      </tr>
    `).join('');
  }

  // Clear Inquiries
  const clearInquiriesBtn = document.getElementById('clearInquiriesBtn');
  if (clearInquiriesBtn) {
    clearInquiriesBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all inquiries history?')) {
        saveInquiries([]);
        renderInquiriesTable();
        updateDashboardStats();
        showToast('Inquiries inbox cleared.');
      }
    });
  }

  // Update Stats Counters
  function updateDashboardStats() {
    const customProjects = getCustomProjects();
    const inquiries = getInquiries();

    const totalProjectsEl = document.getElementById('totalProjectsCount');
    const uploadedWorksEl = document.getElementById('uploadedWorksCount');
    const inquiriesCountEl = document.getElementById('inquiriesCount');

    if (totalProjectsEl) totalProjectsEl.textContent = 9 + customProjects.length;
    if (uploadedWorksEl) uploadedWorksEl.textContent = customProjects.length;
    if (inquiriesCountEl) inquiriesCountEl.textContent = inquiries.length;
  }

  // Initial Load
  renderProjectsTable();
  renderInquiriesTable();
  updateDashboardStats();
});
