// import { Builder, By, Capabilities, Key, until, WebDriver } from 'selenium-webdriver'
// const capabilities: Capabilities = Capabilities.chrome()
// capabilities.set('chromeOptions', {
//   args: [
    
//     '--disable-gpu',
//     '--window-size=1024,768'
//   ],
//   w3c: false
// })

// async function search(query: string): Promise<void> {
//   const driver: WebDriver = await new Builder()
//     .withCapabilities(capabilities)
//     .build()
//   try {
//     await driver.get('https://initial.inc/')
//     await driver
//       .wait(until.elementLocated(By.name('q')), 5000)
//       .sendKeys(query, Key.RETURN)
//     const result: string = await driver
//       .wait(until.elementLocated(By.className('badge')), 5000)
//       .getText()
//     console.log(`${query}: ${result}`)
//   } catch(e) {
//     console.log(e)
//   } finally {
//     driver && await driver.quit()
//   }
// }

// search('selenium')