import { LaunchOptions,chromium,firefox,webkit } from "@playwright/test";

// const options: LaunchOptions = {
//     headless:!true
// }

const headlessMode = process.env.npm_config_HEAD === "false"?false:true;

const options: LaunchOptions = {
    headless: headlessMode
}

export const invokeBrowser= ()=>{
    const browserType= process.env.npm_config_BROWSER || 'chromium';
    switch (browserType) {
        case 'chromium':
            return chromium.launch(options);
        case 'firefox':
            return firefox.launch(options);
        case 'webkit':
            return webkit.launch(options);
        default:
            throw new Error(`Unsupported browser type: ${browserType}`);
    }
}