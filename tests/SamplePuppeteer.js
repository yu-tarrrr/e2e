"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const capabilities = selenium_webdriver_1.Capabilities.chrome();
capabilities.set('chromeOptions', {
    args: [
        '--disable-gpu',
        '--window-size=1024,768'
    ],
    w3c: false
});
function search(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const driver = yield new selenium_webdriver_1.Builder()
            .withCapabilities(capabilities)
            .build();
        try {
            yield driver.get('https://initial.inc/');
            yield driver
                .wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.name('q')), 5000)
                .sendKeys(query, selenium_webdriver_1.Key.RETURN);
            const result = yield driver
                .wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.className('badge')), 5000)
                .getText();
            console.log(`${query}: ${result}`);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            driver && (yield driver.quit());
        }
    });
}
search('selenium');
