
import { defineConfig, devices } from '@playwright/test';

const config=({

testDir:"./tests",
timeout: 90*1000,
expect:
{
timeout:5000

},


reporter:"html",

use:
{
  browserName:'chromium',
  screenshot: 'on'  /// 'on', 'only-on-failure','off'
 


},

});

module.exports=config


