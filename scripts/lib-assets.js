'use strict';

/**
 * Hexo Generator: lib-assets
 *
 * Automatically injects frontend library files (fonts, JS, CSS) from
 * node_modules into the generated site under the /lib/ path.
 * This runs during `hexo generate` / `hexo server` — no separate gulp step needed.
 */

const fs = require('fs');
const path = require('path');

/**
 * Recursively collect all files under `dir`.
 * Returns an array of { src: absolutePath, rel: relativePath }.
 */
function collectFiles(dir, filterFn) {
    const results = [];
    if (!fs.existsSync(dir)) return results;

    function walk(current, relBase) {
        for (const entry of fs.readdirSync(current)) {
            const full = path.join(current, entry);
            const rel  = relBase ? `${relBase}/${entry}` : entry;
            if (fs.statSync(full).isDirectory()) {
                walk(full, rel);
            } else if (!filterFn || filterFn(rel)) {
                results.push({ src: full, rel });
            }
        }
    }

    walk(dir, '');
    return results;
}

hexo.extend.generator.register('lib-assets', function () {
    const themeNM = path.join(this.theme_dir, 'node_modules');
    const rootNM  = path.join(this.base_dir,  'node_modules');

    /** Resolve a package path: prefer theme node_modules, fall back to root. */
    function nm(pkgPath) {
        const t = path.join(themeNM, pkgPath);
        return fs.existsSync(t) ? t : path.join(rootNM, pkgPath);
    }

    const routes = [];

    /** Add a single file to the output. */
    function addFile(src, dest) {
        if (!fs.existsSync(src)) {
            hexo.log.warn('[lib-assets] missing: %s', src);
            return;
        }
        routes.push({ path: dest, data: () => fs.createReadStream(src) });
    }

    /** Add all files in a directory (optionally filtered) to the output. */
    function addDir(srcDir, destDir, filterFn) {
        for (const { src, rel } of collectFiles(srcDir, filterFn)) {
            const captured = src;
            routes.push({
                path: `${destDir}/${rel}`,
                data: () => fs.createReadStream(captured)
            });
        }
    }

    // ── jQuery ────────────────────────────────────────────────────────────────
    addFile(nm('jquery/dist/jquery.min.js'), 'lib/jquery/jquery.min.js');

    // ── Font Awesome ──────────────────────────────────────────────────────────
    addFile(nm('@fortawesome/fontawesome-free/css/all.min.css'),
            'lib/font-awesome/css/all.min.css');
    addDir( nm('@fortawesome/fontawesome-free/webfonts'),
            'lib/font-awesome/webfonts');

    // ── justifiedGallery ─────────────────────────────────────────────────────
    addFile(nm('justifiedGallery/dist/css/justifiedGallery.min.css'),
            'lib/justified-gallery/css/justifiedGallery.min.css');
    addFile(nm('justifiedGallery/dist/js/jquery.justifiedGallery.min.js'),
            'lib/justified-gallery/js/jquery.justifiedGallery.min.js');

    // ── clipboard.js ─────────────────────────────────────────────────────────
    addFile(nm('clipboard/dist/clipboard.min.js'), 'lib/clipboard/clipboard.min.js');

    // ── FiraCode ─────────────────────────────────────────────────────────────
    //    CSS references ./woff2/ and ./woff/ relatively, so keep same structure.
    addFile(nm('firacode/distr/fira_code.css'), 'lib/firacode/fira_code.css');
    addDir( nm('firacode/distr/woff2'), 'lib/firacode/woff2');
    addDir( nm('firacode/distr/woff'),  'lib/firacode/woff');

    // ── Noto Sans SC (weight 400 only) ────────────────────────────────────────
    //    400.css references ./files/noto-sans-sc-*-400-normal.woff2 relatively.
    addFile(nm('@fontsource/noto-sans-sc/400.css'), 'lib/noto-sans-sc/400.css');
    addDir( nm('@fontsource/noto-sans-sc/files'),
            'lib/noto-sans-sc/files',
            (rel) => rel.includes('-400-'));

    // ── hint.css ──────────────────────────────────────────────────────────────
    addFile(nm('hint.css/hint.min.css'), 'lib/hint/hint.min.css');

    return routes;
});

