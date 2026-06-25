import {test,expect} from "@playwright/test"

test("title", async ({page}) => {
 await page.goto("https://oscar2-dev.hsa.gov.sg/Authorization/Login")
let title :string = await page.title();
console.log("Title",title)
 await expect(page).toHaveTitle("Login")
 await page.locator("#Input_UsernameVal2").fill("EB_DEO1");
 await page.locator('#Input_PasswordVal').fill("P@ssw0rd");
 await page.locator('#b6-Button').click();
 let title2 :string = await page.title();
console.log("Title",title2)
await expect(page).toHaveTitle("Login")
await page.getByText("Create EB Investigation-Complaint").click();
await page.locator('#Input_complaint_receive_date2').fill('2026-06-04');
await page.locator('#ddl_complaint_type').selectOption({ index: 2});
await page .locator('#Dropdown5').selectOption({ index: 2});
await page.locator('#Dropdown4').selectOption({ index: 2});
await page.locator('#Input_complaint_date2').fill('2025-06-01');
await page.locator('#Dropdown2').selectOption({ index: 2});
await page.locator('#TextArea_complaint_desc').fill ("Testing sheetal - 2");
await  page.getByText('Save').click();  
await  page.getByText('Proceed').click();
await expect(
 page.getByText('Complaint Information added successfully!')
).toBeVisible();
 await page.waitForTimeout(3000);
//await page.locator("(//button[@type='button'])[13]").click();
await page.getByRole('button', { name: 'Add' }).nth(0).click();
 await page.waitForTimeout(3000);
//await page.locator ("#Dropdown2").selectOption({index: 2});
//await page.locator("#b31-MyDropdown2").selectOption({index:1})
//await page.locator("#b31-MyDropdown2").click();
//await page.getByPlaceholder('Product Classification').fill('Condom');

await page.locator("text=Select").first().click();
await page.getByText("Cybercrime").click();

await page.locator("text=Select Classification").click();
await page.getByText("Cosmetics").click(); // option name
 await page.waitForTimeout(3000);
//await page.getByText("Condom").click();
await  page.getByText('Save').click(); 



})