/* ════════════════════════════════════════════════════
   hero3d.js — Three.js 3D Hero: Icosahedron + Torus
   Responds to mouse movement. Runs only on home page.
   ════════════════════════════════════════════════════ */

window.YASH = window.YASH || {};

YASH.hero3d = (function () {

  let renderer, scene, camera, ico, torus, particles;
  let mouseX = 0, mouseY = 0;
  let animId = null;
  let initialized = false;

  function init() {
    if (initialized) return;
    if (typeof THREE === 'undefined') {
      /* Three.js not yet loaded — retry */
      setTimeout(init, 200);
      return;
    }

    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    /* Renderer */
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* Scene + Camera */
    scene  = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 5;

    /* ── Icosahedron wireframe ── */
    const icoGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x1D9E75,
      wireframe: true,
      opacity: 0.32,
      transparent: true,
    });
    ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.set(2.8, 0, 0);
    scene.add(ico);

    /* ── Orbiting torus ring ── */
    const torusGeo = new THREE.TorusGeometry(2.5, 0.012, 12, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x1D9E75,
      opacity: 0.18,
      transparent: true,
    });
    torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(2.8, 0, 0);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    /* ── Floating particles ── */
    const pCount = 140;
    const pPos   = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i++) {
      pPos[i] = (Math.random() - 0.5) * 16;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x1D9E75,
      size: 0.024,
      opacity: 0.45,
      transparent: true,
    });
    particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    /* ── Second subtle ring (tilted) ── */
    const ring2Geo = new THREE.TorusGeometry(3.2, 0.008, 8, 60);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x1D9E75,
      opacity: 0.08,
      transparent: true,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.position.set(2.8, 0, 0);
    ring2.rotation.x = -Math.PI / 6;
    ring2.rotation.y = Math.PI / 8;
    scene.add(ring2);

    /* Mouse tracking */
    document.addEventListener('mousemove', e => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    /* Resize */
    resize();
    window.addEventListener('resize', resize);

    initialized = true;
    animate(0);
  }

  function resize() {
    const heroEl = document.getElementById('hero');
    if (!heroEl || !renderer) return;
    const w = heroEl.clientWidth;
    const h = heroEl.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  let t = 0;

  function animate(ts) {
    animId = requestAnimationFrame(animate);
    t += 0.005;

    if (ico) {
      ico.rotation.x += 0.003 + mouseY * 0.002;
      ico.rotation.y += 0.005 + mouseX * 0.002;
      ico.position.y  = Math.sin(t) * 0.18;
    }

    if (torus) {
      torus.rotation.z += 0.004;
      torus.rotation.x  = Math.PI / 4 + mouseY * 0.12;
      torus.rotation.y  = mouseX * 0.12;
    }

    if (particles) {
      particles.rotation.y += 0.0005;
    }

    renderer.render(scene, camera);
  }

  function destroy() {
    if (animId) cancelAnimationFrame(animId);
    animId = null;
  }

  return { init, destroy };
})();
