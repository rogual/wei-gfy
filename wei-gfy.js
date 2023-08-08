var code = `
class EnvironmentIntegrity {
  constructor() {
    var enc = new TextEncoder();
    this.attestationToken = enc.encode(this.encode());
  }

  encode() {
    return "Go fuck yourselves.";
  }

  toJSON() {
    return encode();
  }
};

window.navigator.getEnvironmentIntegrity = () => Promise.resolve(new EnvironmentIntegrity());
`;

var e = document.createElement('script');
e.textContent = code;
document.head.appendChild(e);
