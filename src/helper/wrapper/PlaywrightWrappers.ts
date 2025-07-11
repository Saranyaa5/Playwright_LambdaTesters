import { Locator,Page,expect } from "@playwright/test";

export default class PlaywrightWrapper{
    constructor(private page:Page){}
    
    async goto(url:string){
        await this.page.goto(url,{
            waitUntil: "domcontentloaded",
        });
    }

    async waitAndClick(locator: string | Locator){
        const element=typeof locator==="string"? this.page.locator(locator):locator;
        await element.waitFor({state: "visible"});
        await element.click();
    }

    async waitUntilClickable(locator: string | Locator, maxRetries = 5, delay = 500) {
    const element = typeof locator === "string" ? this.page.locator(locator) : locator;

    await element.waitFor({ state: 'visible' });

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            await expect(element).toBeEnabled({ timeout: delay });
            await element.click();
            return; 
        } catch (error) {
            if (attempt === maxRetries) {
                throw new Error(`Element not clickable after ${maxRetries} attempts: ${error}`);
            }
            await this.page.waitForTimeout(delay);
        }
    }
}


    async navigateTo(link:string | Locator){
        const element=typeof link === "string"? this.page.locator(link):link;

        await Promise.all([
            this.page.waitForNavigation({waitUntil: "load"}),
            element.click()
        ])

    }

    async waitforsometime(time: number){
        await this.page.waitForTimeout(time);   
    }
    
    async fill(selector: string, value: string) {
        await this.page.waitForSelector(selector);
        await this.page.fill(selector, value);
    }
}

