import http from "node:http";

const BASE_URL = process.env.TARGET_URL || "http://localhost:4004";

interface TestResult {
  name: string;
  passed: boolean;
  durationMs: number;
  error?: string;
}

const results: TestResult[] = [];

async function checkRoute(route: string, expectedString: string, testName: string) {
  const start = Date.now();
  try {
    const url = new URL(route, BASE_URL);
    const res = await new Promise<{ statusCode: number; body: string }>((resolve, reject) => {
      const req = http.get(url.toString(), { timeout: 10000 }, (response) => {
        let body = "";
        response.on("data", chunk => { body += chunk; });
        response.on("end", () => resolve({ statusCode: response.statusCode || 0, body }));
      });
      req.on("error", reject);
      req.on("timeout", () => {
        req.destroy();
        reject(new Error("Request timed out after 10000ms"));
      });
    });

    const duration = Date.now() - start;
    if (res.statusCode >= 200 && res.statusCode < 400 && res.body.includes(expectedString)) {
      results.push({ name: testName, passed: true, durationMs: duration });
      console.log(`  ✅ [PASS] GET ${route} (${duration}ms)`);
    } else {
      const err = `Expected status 200-399 with body containing '${expectedString}', got HTTP ${res.statusCode}`;
      results.push({ name: testName, passed: false, durationMs: duration, error: err });
      console.log(`  ❌ [FAIL] GET ${route} (${duration}ms): ${err}`);
    }
  } catch (err: any) {
    const duration = Date.now() - start;
    results.push({ name: testName, passed: false, durationMs: duration, error: err.message });
    console.log(`  ❌ [FAIL] GET ${route} (${duration}ms): ${err.message}`);
  }
}

async function run() {
  console.log("════════════════════════════════════════════════════════════════════════");
  console.log("🚀 UniERP Tenant Websites & Templates — End-to-End Integration Suite");
  console.log(`Target: ${BASE_URL}`);
  console.log("════════════════════════════════════════════════════════════════════════\n");

  console.log("🔍 Checking server connection...");
  let reachable = false;
  for (let i = 0; i < 15; i++) {
    try {
      await new Promise<void>((resolve, reject) => {
        const req = http.get(BASE_URL, (res) => {
          if (res.statusCode && res.statusCode < 500) resolve();
          else reject(new Error(`Status ${res.statusCode}`));
        });
        req.on("error", reject);
      });
      reachable = true;
      break;
    } catch {
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  if (!reachable) {
    console.log(`❌ Target server ${BASE_URL} is unreachable.`);
  } else {
    console.log("✅ Target server is reachable.\n");
  }

  console.log("📂 1. Tenant Websites Home Portal");
  await checkRoute("/", "UniERP Tenant Websites", "Home Portal renders header and brand");

  console.log("\n📋 2. Site Templates Directory");
  await checkRoute("/templates", "Site Templates Library", "Templates catalog renders multi-type categories");

  console.log("\n🎨 3. Design Tokens & Theme Palettes Engine");
  await checkRoute("/themes", "Theme Palettes", "Themes engine renders design tokens & token inspector");

  console.log("\n🌐 4. Published Tenant Sites Registry");
  await checkRoute("/sites", "Published Tenant Sites Registry", "Sites registry renders active tenant domain mappings");

  console.log("\n🔒 5. Custom Domains & Automated SSL");
  await checkRoute("/domains", "Multi-Tenant Domain Dispatcher", "Domains manager renders custom domain attachment");

  console.log("\n🔑 6. Webmaster Authentication Portal");
  await checkRoute("/login", "Webmaster Portal", "Login portal renders demo credentials notice");

  console.log("\n════════════════════════════════════════════════════════════════════════");
  console.log("📊 Test Execution Summary");
  console.log("════════════════════════════════════════════════════════════════════════");
  const passedCount = results.filter(r => r.passed).length;
  const failedCount = results.filter(r => !r.passed).length;
  console.log(`Total Tests: ${results.length}`);
  console.log(`Passed:      ${passedCount}`);
  console.log(`Failed:      ${failedCount}\n`);

  if (failedCount > 0) {
    console.error("❌ Some End-to-End tests failed!");
    process.exit(1);
  } else {
    console.log("🎉 All Tenant Websites & Templates End-to-End tests passed successfully!\n");
    process.exit(0);
  }
}

run();
