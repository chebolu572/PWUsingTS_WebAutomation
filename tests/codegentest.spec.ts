import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://demo.blaze.com/');
  await page.getByRole('button', { name: 'Go Back' }).click();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dgoogle%26oq%3Dgoogle%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDM2MzhqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D3ye9aN2NIra64-EPjrOJoQg&q=EgR0MjvJGN_P9MUGIjA9HaatAhst5A8Z6LDkB-tfWjO9_NFNpcn-mTDnaOwCidl2a_o3o-loxDSPke6De70yAVJaAUM');
});