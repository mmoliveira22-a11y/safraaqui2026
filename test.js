const { chromium } = require('playwright');
const path = require('path');

async function testSafraaqui() {
    console.log('🧪 Iniciando testes do Safraaqui...\n');

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const errors = [];

    // Captura erros de console (filtra erros conhecidos do Mapbox)
    page.on('console', msg => {
        if (msg.type() === 'error') {
            const text = msg.text();
            // Filtra erros esperados do Mapbox (token de placeholder)
            if (!text.includes('401') && 
                !text.includes('Erro no mapa') && 
                !text.includes('Mapbox') &&
                !text.includes('access token')) {
                errors.push(`Console Error: ${text}`);
            }
        }
    });

    page.on('pageerror', error => {
        errors.push(`Page Error: ${error.message}`);
    });

    try {
        // Testa Landing Page
        console.log('📄 Testando Landing Page...');
        const indexPath = path.join(__dirname, 'index.html');
        await page.goto(`file://${indexPath}`);
        await page.waitForLoadState('networkidle');
        
        const title = await page.title();
        console.log(`   Título: ${title}`);
        
        const heroTitle = await page.textContent('h1');
        console.log(`   Título Hero: ${heroTitle.substring(0, 50)}...`);
        
        // Verifica elementos principais
        const hasCTAButtons = await page.locator('.hero-cta').isVisible();
        console.log(`   Botões CTA: ${hasCTAButtons ? '✅' : '❌'}`);
        
        const hasFeatures = await page.locator('.features-grid').isVisible();
        console.log(`   Features Section: ${hasFeatures ? '✅' : '❌'}`);

        // Testa Dashboard do Produtor
        console.log('\n📄 Testando Dashboard do Produtor...');
        const prodPath = path.join(__dirname, 'dashboard-produtor.html');
        await page.goto(`file://${prodPath}`);
        await page.waitForLoadState('networkidle');
        
        const prodTitle = await page.title();
        console.log(`   Título: ${prodTitle}`);
        
        const hasSidebar = await page.locator('.sidebar').isVisible();
        console.log(`   Sidebar: ${hasSidebar ? '✅' : '❌'}`);
        
        const hasMap = await page.locator('.map-container').isVisible();
        console.log(`   Mapa: ${hasMap ? '✅' : '❌'}`);
        
        const hasStats = await page.locator('#dashboard-section .stats-grid').first().isVisible();
        console.log(`   Stats Grid: ${hasStats ? '✅' : '❌'}`);

        // Testa Dashboard do Prestador
        console.log('\n📄 Testando Dashboard do Prestador...');
        const presPath = path.join(__dirname, 'dashboard-prestador.html');
        await page.goto(`file://${presPath}`);
        await page.waitForLoadState('networkidle');
        
        const presTitle = await page.title();
        console.log(`   Título: ${presTitle}`);
        
        const hasJobs = await page.locator('.jobs-list').isVisible();
        console.log(`   Lista de Jobs: ${hasJobs ? '✅' : '❌'}`);
        
        const hasRoutes = await page.locator('.route-optimization').isVisible();
        console.log(`   Otimização de Rotas: ${hasRoutes ? '✅' : '❌'}`);

        // Testa CSS
        console.log('\n📄 Testando CSS...');
        const cssPath = path.join(__dirname, 'css', 'styles.css');
        await page.goto(`file://${cssPath}`);
        const cssContent = await page.textContent('body');
        console.log(`   CSS carregado: ${cssContent.length > 100 ? '✅' : '❌'} (${cssContent.length} chars)`);

        // Testa JavaScript
        console.log('\n📄 Testando JavaScript...');
        const jsPath = path.join(__dirname, 'js', 'app.js');
        await page.goto(`file://${jsPath}`);
        const jsContent = await page.textContent('body');
        console.log(`   app.js: ${jsContent.length > 500 ? '✅' : '❌'} (${jsContent.length} chars)`);

        // Relatório de erros
        console.log('\n📊 Relatório de Erros:');
        if (errors.length === 0) {
            console.log('   Nenhum erro encontrado! ✅');
        } else {
            errors.forEach(err => console.log(`   ❌ ${err}`));
        }

    } catch (error) {
        console.error('\n❌ Erro durante os testes:', error.message);
    } finally {
        await browser.close();
        console.log('\n✨ Testes concluídos!');
    }
}

testSafraaqui();
