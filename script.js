function previewImage(event, id) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById(`preview-${id}`).src = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

function connectWallet() {
  console.log('Connect Wallet Clicked');
  // TODO: Web3 wallet connection logic
}

function disconnectWallet() {
  console.log('Disconnect Wallet Clicked');
  // TODO: Wallet disconnection logic
}

function applyMemories() {
  const memories = [];
  for (let i = 1; i <= 4; i++) {
    const imgSrc = document.getElementById(`preview-${i}`).src;
    const text = document.getElementById(`memory-${i}`).value;
    memories.push({ image: imgSrc, memory: text });
  }
  console.log('Memories applied:', memories);
  // TODO: handle mint logic with tokenURI generation
}
