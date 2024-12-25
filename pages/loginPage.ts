import { Page } from 'playwright';
import 'dotenv/config';
export class LoginPage {
  private page: Page;
  private usernameInput = 'input[data-test="username"]';
  private passwordInput = 'input[data-test="password"]';
  private loginButton = 'input[data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto(process.env.BASE_URL as string);
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}