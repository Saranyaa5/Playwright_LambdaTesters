import { Given, When, Then} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
let browser: Browser;

Given('the user is on the homepage', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
When('the user clicks on My Account.', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 When('clicks the register button', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 When('the user should see the registration page', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

 
When('agrees to the Privacy Policy', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
 When('submits the registration form', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

Then('the user should see {string} for {string}', async function (string, string2) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

When('the user enters {string}, {string}, {string}, {string}, {string} and {string}', async function (string, string2, string3, string4, string5, string6) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });

Then('the user should see {string}', async function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });