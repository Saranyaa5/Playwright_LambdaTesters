import { Page } from '@playwright/test';
import { Logger } from 'winston';
import HeaderPage from '../pages/HeaderPage';
import RegisterPage from '../pages/registrationPage';

export const pageFixture = {
    page: undefined as Page | undefined,  // Remove @ts-ignore and make it optional
    logger: undefined as Logger | undefined,
    headerPage: undefined as HeaderPage | undefined,
    registerPage: undefined as RegisterPage | undefined
};

