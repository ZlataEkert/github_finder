class Github {
  constructor() {
    this.client_id = 'c0ba447afa7e94ad44f1';
    this.client_secret = '462b1d3922a5dedfe54cc35107db124961819b11';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}