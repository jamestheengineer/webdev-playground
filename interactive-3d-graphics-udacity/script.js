const renderer = new THREE.WebGLRenderer({antialias: true});
invalidation.then(() => renderer.dispose());
renderer.setSize(width, height);
renderer.setPixelRatio(devicePixelRatio);
while (true) {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  yield renderer.domElement;
}