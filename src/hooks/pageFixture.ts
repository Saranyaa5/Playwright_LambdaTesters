import { Page } from '@playwright/test';
import { Logger } from 'winston';


export const pageFixture = {
    page: undefined as Page | undefined,  // Remove @ts-ignore and make it optional
    logger: undefined as Logger | undefined,
   
}