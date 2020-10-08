
import { assert } from "console";
import { Step } from "gauge-ts";
import { launch } from 'puppeteer'


export default class StepImplementation {

  @Step("sportsnaviにアクセスする")
  public async accessSportsNaviTopPage() {
    await access("https://sports.yahoo.co.jp/")
  }
}

async function access(url: string): Promise<void> {
  const browser = await launch(
    { 
        headless: false
    }
  );
  const page = await browser.newPage();
  await page.goto(url)
  const headersCount = await page.$$eval('#h_nav .clearfix > li', headers => headers.length);
  console.log(headersCount)
  await browser.close();
}
