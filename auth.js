document.getElementById('register').onclick = async () => {
  try {
    const publicKey = {
      challenge: new Uint8Array([/*random bytes*/]),
      rp: { name: "Example Corp" },
      user: {
        id: new Uint8Array(16),
        name: "user@example.com",
        displayName: "User Example"
      },
      pubKeyCredParams: [{ alg: -7, type: "public-key" }],
      timeout: 60000,
      attestation: "direct",
    };

    const credential = await navigator.credentials.create({ publicKey });
    console.log('Credential created:', credential);
  } catch (err) {
    console.error(err);
  }
};

document.getElementById('login').onclick = async () => {
  try {
    const publicKey = {
      challenge: new Uint8Array([/*random bytes*/]),
      timeout: 60000,
    };

    const assertion = await navigator.credentials.get({ publicKey });
    console.log('Assertion:', assertion);
  } catch (err) {
    console.error(err);
  }
};
