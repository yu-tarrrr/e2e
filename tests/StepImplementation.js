"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const gauge_ts_1 = require("gauge-ts");
const selenium_webdriver_1 = require("selenium-webdriver");
class StepImplementation {
    accessInitialTopPage() {
        search("https://qiita.com/");
        // search("https://initial.inc/")
        // strictEqual(driver.getTitle, "google")
    }
}
__decorate([
    gauge_ts_1.Step("INITIALにアクセスする"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StepImplementation.prototype, "accessInitialTopPage", null);
exports.default = StepImplementation;
const capabilities = selenium_webdriver_1.Capabilities.chrome();
capabilities.set('chromeOptions', {
    args: [
        // '--headless',
        '--disable-gpu',
        '--window-size=1024,768'
    ],
    w3c: false
});
function search(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const driver = yield new selenium_webdriver_1.Builder()
            .withCapabilities(capabilities)
            .build();
        try {
            yield driver.get(url);
            const res = yield driver
                .wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.className('css-pwxsmp')), 5000)
                .getText();
            console.log(`${res}`);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            driver && (yield driver.quit());
        }
    });
}
