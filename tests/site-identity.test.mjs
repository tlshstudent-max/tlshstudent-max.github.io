import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('the hostname homepage exposes one coherent brand identity without JavaScript', async () => {
    const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const items = blocks.flatMap(block => block['@graph'] || [block]);
    const websites = items.filter(item => item['@type'] === 'WebSite');
    assert.equal(websites.length, 1);
    const website = websites[0], organization = items.find(item => item['@type'] === 'Organization');
    const page = items.find(item => item['@type'] === 'WebPage');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
    assert.equal(new URL(canonical).pathname, '/');
    assert.equal(website.url, canonical);
    assert.equal(website['@id'], canonical + '#website');
    assert.equal(website.name, '斗六高中學生會');
    assert.equal(website.publisher['@id'], organization['@id']);
    assert.equal(organization.url, canonical);
    assert.equal(page.isPartOf['@id'], website['@id']);
    assert.equal(page.about['@id'], organization['@id']);
    assert.equal(html.match(/<meta property="og:site_name" content="([^"]+)"/)[1], website.name);
    const body = html.slice(html.indexOf('<body>')).replace(/<[^>]*>/g, '');
    assert.ok(body.includes(website.name), 'the preferred name is visible to readers');
    assert.ok(website.alternateName.includes('斗中學生會'));
    assert.ok(!html.includes('content="GitHub"'));
});
