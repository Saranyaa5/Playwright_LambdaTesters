import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class HeaderPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    private headerPageElements={
        myAccountLink:"//a[@class='icon-left both nav-link dropdown-toggle' and @href='https://ecommerce-playground.lambdatest.io/index.php?route=account/account']",
        
    }
   
    async clickOnMyAccount(){
        return this.base.waitAndClick(this.headerPageElements.myAccountLink);
    }


    async waitformsometime(time: number){
        return this.base.waitforsometime(time);
    }

    async launchUrl(url: string){
        return this.base.goto(url);
    }

}