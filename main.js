const scene = document.querySelector('a-scene');
scene.addEventListener('arReady', () => console.log('✅ MindAR ready'));
scene.addEventListener('arError', (e) => console.error('❌ AR Error:', e.detail.error));

const target = document.querySelector('[mindar-image-target]');
target.addEventListener('targetFound', () => console.log('🎯 Found! Playing...'));
target.addEventListener('targetLost', () => console.log('👋 Lost!'));
