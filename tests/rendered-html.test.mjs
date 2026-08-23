import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the heritage thesis site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Palacio Hacienda Quilpué \| Almendra Zuleta Díaz<\/title>/);
  assert.match(html, /Palacio Hacienda Quilpué/);
  assert.match(html, /Almendra Zuleta Díaz/);
  assert.match(html, /Magíster en Patrimonio/);
  assert.match(html, /Imágenes históricas del palacio/);
  assert.match(html, /\/archive\/hero-palacio-1915\.jpg/);
  assert.match(html, /href="#archivo-fachada"/);
  assert.match(html, /class="lightbox"/);
  assert.match(html, /\/archive\/logo-uv\.png/);
  assert.match(html, /Línea de tiempo/);
  assert.match(html, /<details class="timeline-card"/);
  assert.match(html, /Iniciar recorrido patrimonial/);
  assert.match(html, /Patrimonio y memoria territorial/);
  assert.match(html, /Juana Ross Edwards: biografía patrimonial/);
  assert.match(html, /Biografía y memoria social/);
  assert.match(html, /Hallazgos principales/);
  assert.match(html, /Arquitectura y poder hacendal/);
  assert.match(html, /Ruina como documento patrimonial/);
  assert.match(html, /href="#saber-mas"/);
  assert.match(html, /¿Quieres saber más\?/);
  assert.match(html, /Construcción y proyecto arquitectónico/);
  assert.match(html, /Hacienda, producción y trabajo/);
  assert.match(html, /Filantropía y crisis sanitaria/);
  assert.doesNotMatch(html, /Ejes de valoración|Valor arquitectónico|Valor memorial/);
  assert.match(html, /Estado actual de las ruinas/);
  assert.match(html, /1886-1888/);
  assert.match(html, /Epidemia del cólera/);
  assert.match(html, /suntuosidad, jardines y sociabilidad aristocrática/);
  assert.match(html, /Fachada frontal/);
  assert.match(html, /Acceso y vida comunitaria/);
  assert.match(html, /Retrato infantil/);
  assert.doesNotMatch(html, /Comenzar el recorrido|¿Qué es patrimonio\?|Infancias en el palacio|lujo, jardines/);
  assert.doesNotMatch(html, /Parte delantera/);
  assert.match(html, /institutional-footer/);
  assert.match(html, /Magíster en Patrimonio · Universidad de Valparaíso/);
  assert.match(html, /Diseño y desarrollo web: Fernando Aros/);
  assert.doesNotMatch(html, /Fuentes y créditos|Material de trabajo|href="#fuentes"/);
  assert.match(html, /og:image" content="\/og\.png"/);

  assert.ok(
    html.indexOf("Juana Ross Edwards: biografía patrimonial") <
      html.indexOf("Patrimonio y memoria territorial"),
    "Juana Ross biography should appear before the conceptual heritage section",
  );
  assert.ok(
    html.indexOf("¿Quieres saber más?") < html.indexOf("Hallazgos principales"),
    "Expanded reading should appear before the final findings section",
  );
});

test("removes starter preview artifacts from final site", async () => {
  const [page, layout, packageJson, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview|react-loading-skeleton/);
  assert.doesNotMatch(page, /heritageValues|Ejes de valoración/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(css, /sites-skeleton|loading skeleton/i);
  assert.match(css, /grid-auto-flow:\s*column/);

  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
