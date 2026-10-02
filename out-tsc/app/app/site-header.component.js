import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
export class SiteHeaderComponent {
    constructor() {
        this.activeSection = 'home';
        this.menuOpen = false;
    }
    closeMenu() {
        this.menuOpen = false;
    }
    static { this.ɵfac = function SiteHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SiteHeaderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SiteHeaderComponent, selectors: [["app-site-header"]], inputs: { activeSection: "activeSection" }, decls: 43, vars: 12, consts: [[1, "site-header"], [1, "topline"], [1, "container", "topline-inner"], ["aria-label", "Langue", 1, "language"], ["href", "#", "lang", "fr", 1, "active"], ["href", "#", "lang", "en"], [1, "nav-wrap"], [1, "container", "nav-inner"], ["href", "/#accueil", "aria-label", "MEDISAFE 2, accueil", 1, "brand"], ["aria-hidden", "true", 1, "brand-mark"], [1, "brand-name"], ["type", "button", "aria-label", "Ouvrir le menu", 1, "menu-toggle", 3, "click"], ["aria-label", "Navigation principale", 1, "main-nav"], ["routerLink", "/projet", 3, "click"], ["routerLink", "/ressources", 3, "click"], ["routerLink", "/actualites", 3, "click"], ["href", "/#contact", 3, "click"], [1, "mobile-language"]], template: function SiteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "span");
            i0.ɵɵtext(4, "Projet r\u00E9gional de coop\u00E9ration \u00B7 Afrique");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3)(6, "a", 4);
            i0.ɵɵtext(7, "FR");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "span");
            i0.ɵɵelementStart(9, "a", 5);
            i0.ɵɵtext(10, "EN");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(11, "div", 6)(12, "div", 7)(13, "a", 8)(14, "span", 9);
            i0.ɵɵelement(15, "i")(16, "i")(17, "i");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span", 10);
            i0.ɵɵtext(19, "MEDISAFE ");
            i0.ɵɵelementStart(20, "b");
            i0.ɵɵtext(21, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "small");
            i0.ɵɵtext(23, "COOP\u00C9RATION R\u00C9GIONALE");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "button", 11);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_button_click_24_listener() { return ctx.menuOpen = !ctx.menuOpen; });
            i0.ɵɵelement(25, "span")(26, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "nav", 12)(28, "a", 13);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_a_click_28_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(29, "Le projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "a", 14);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_a_click_30_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(31, "Ressources");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "a", 15);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_a_click_32_listener() { return ctx.closeMenu(); });
            i0.ɵɵtext(33, "Actualit\u00E9s & \u00E9v\u00E9nements");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "a", 16);
            i0.ɵɵlistener("click", function SiteHeaderComponent_Template_a_click_34_listener() { return ctx.menuOpen = false; });
            i0.ɵɵtext(35, "Nous contacter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 17)(37, "a", 4);
            i0.ɵɵtext(38, "FR");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "span");
            i0.ɵɵtext(40, "\u00B7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "a", 5);
            i0.ɵɵtext(42, "EN");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(24);
            i0.ɵɵattribute("aria-expanded", ctx.menuOpen);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("open", ctx.menuOpen);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-current", ctx.activeSection === "project");
            i0.ɵɵattribute("aria-current", ctx.activeSection === "project" ? "page" : null);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("is-current", ctx.activeSection === "resources");
            i0.ɵɵattribute("aria-current", ctx.activeSection === "resources" ? "page" : null);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("is-current", ctx.activeSection === "news");
            i0.ɵɵattribute("aria-current", ctx.activeSection === "news" ? "page" : null);
        } }, dependencies: [RouterLink], styles: ["[_nghost-%COMP%] { display: block; position: relative; z-index: 5; }\n.container[_ngcontent-%COMP%] { width: min(1200px, calc(100% - 96px)); margin-inline: auto; }\n.site-header[_ngcontent-%COMP%] { background: #fff; }\n.topline[_ngcontent-%COMP%] { height: 34px; background: #123454; color: rgba(255,255,255,.76); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }\n.topline-inner[_ngcontent-%COMP%] { height: 100%; display: flex; align-items: center; justify-content: space-between; }\n.language[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 9px; font-size: 10px; letter-spacing: .12em; }\n.language[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { height: 10px; border-left: 1px solid currentColor; opacity: .5; }\n.language[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active) { opacity: .56; }\n.language[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] { color: #fff; font-weight: 700; }\na[_ngcontent-%COMP%] { color: inherit; text-decoration: none; }\n.nav-wrap[_ngcontent-%COMP%] { border-bottom: 1px solid #edf0f0; }\n.nav-inner[_ngcontent-%COMP%] { height: 83px; display: flex; align-items: center; justify-content: space-between; }\n.brand[_ngcontent-%COMP%] { display: inline-flex; gap: 11px; align-items: center; color: #123454; }\n.brand-mark[_ngcontent-%COMP%] { width: 30px; height: 29px; position: relative; display: flex; align-items: flex-end; gap: 3px; border-left: 1.5px solid #1f567b; border-bottom: 1.5px solid #1f567b; padding: 0 0 3px 4px; }\n.brand-mark[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { display: block; width: 5px; background: #1f567b; opacity: .9; }.brand-mark[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) { height: 10px; }.brand-mark[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) { height: 17px; }.brand-mark[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) { height: 24px; }\n.brand-name[_ngcontent-%COMP%] { font: 800 17px/1 'Manrope', sans-serif; letter-spacing: -.04em; }.brand-name[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { color: #c5a46b; font-weight: 600; }.brand-name[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; margin-top: 5px; color: #788691; font: 600 8px/1 'DM Sans', sans-serif; letter-spacing: .17em; }\n.main-nav[_ngcontent-%COMP%] { display: flex; align-items: center; gap: clamp(22px, 3.1vw, 48px); font-size: 12px; color: #334b5c; }\n.main-nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] { position: relative; transition: color .2s; }.main-nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main-nav[_ngcontent-%COMP%]    > a.is-current[_ngcontent-%COMP%] { color: #123454; }\n.main-nav[_ngcontent-%COMP%]    > a.is-current[_ngcontent-%COMP%]::after { position: absolute; right: 0; bottom: -9px; left: 0; height: 1px; background: #c5a46b; content: ''; }\n.mobile-language[_ngcontent-%COMP%], .menu-toggle[_ngcontent-%COMP%] { display: none; }\n[_ngcontent-%COMP%]:where(a, button):focus-visible { outline: 2px solid #a7834e; outline-offset: 4px; }\n@media (max-width: 900px) {\n  .container[_ngcontent-%COMP%] { width: min(100% - 56px, 760px); }\n  .nav-inner[_ngcontent-%COMP%] { height: 75px; }\n  .main-nav[_ngcontent-%COMP%] { gap: 17px; font-size: 11px; }\n}\n@media (max-width: 640px) {\n  .container[_ngcontent-%COMP%] { width: calc(100% - 40px); }\n  .topline[_ngcontent-%COMP%] { height: 30px; font-size: 8px; }\n  .topline-inner[_ngcontent-%COMP%] { justify-content: flex-end; }\n  .topline-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] { display: none; }\n  .nav-inner[_ngcontent-%COMP%] { height: 68px; }\n  .brand-name[_ngcontent-%COMP%] { font-size: 16px; }\n  .menu-toggle[_ngcontent-%COMP%] { display: flex; width: 40px; height: 40px; flex-direction: column; justify-content: center; gap: 6px; align-items: flex-end; border: 0; background: transparent; color: #123454; cursor: pointer; }\n  .menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; width: 22px; border-top: 1px solid currentColor; transition: width .2s; }\n  .menu-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child { width: 15px; }\n  .menu-toggle[aria-expanded='true'][_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child { width: 22px; }\n  .main-nav[_ngcontent-%COMP%] { position: absolute; display: none; top: 98px; left: 0; right: 0; padding: 12px 20px 25px; flex-direction: column; align-items: stretch; gap: 0; background: #fff; border-bottom: 1px solid #d9e0e1; box-shadow: 0 12px 22px rgba(18,52,84,.08); }\n  .main-nav.open[_ngcontent-%COMP%] { display: flex; }\n  .main-nav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] { padding: 15px 0; border-bottom: 1px solid #edf0f0; font-size: 13px; }\n  .main-nav[_ngcontent-%COMP%]    > a.is-current[_ngcontent-%COMP%]::after { display: none; }\n  .mobile-language[_ngcontent-%COMP%] { display: flex; gap: 10px; padding-top: 18px; color: #123454; font-size: 10px; letter-spacing: .1em; }\n  .mobile-language[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] { font-weight: 700; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SiteHeaderComponent, [{
        type: Component,
        args: [{ selector: 'app-site-header', standalone: true, imports: [RouterLink], template: "<header class=\"site-header\">\n  <div class=\"topline\">\n    <div class=\"container topline-inner\">\n      <span>Projet r\u00E9gional de coop\u00E9ration \u00B7 Afrique</span>\n      <div class=\"language\" aria-label=\"Langue\"><a class=\"active\" href=\"#\" lang=\"fr\">FR</a><span></span><a href=\"#\" lang=\"en\">EN</a></div>\n    </div>\n  </div>\n  <div class=\"nav-wrap\">\n    <div class=\"container nav-inner\">\n      <a class=\"brand\" href=\"/#accueil\" aria-label=\"MEDISAFE 2, accueil\">\n        <span class=\"brand-mark\" aria-hidden=\"true\"><i></i><i></i><i></i></span>\n        <span class=\"brand-name\">MEDISAFE <b>2</b><small>COOP\u00C9RATION R\u00C9GIONALE</small></span>\n      </a>\n      <button class=\"menu-toggle\" type=\"button\" (click)=\"menuOpen = !menuOpen\" [attr.aria-expanded]=\"menuOpen\" aria-label=\"Ouvrir le menu\">\n        <span></span><span></span>\n      </button>\n      <nav class=\"main-nav\" [class.open]=\"menuOpen\" aria-label=\"Navigation principale\">\n        <a routerLink=\"/projet\" (click)=\"closeMenu()\" [class.is-current]=\"activeSection === 'project'\" [attr.aria-current]=\"activeSection === 'project' ? 'page' : null\">Le projet</a>\n        <a routerLink=\"/ressources\" (click)=\"closeMenu()\" [class.is-current]=\"activeSection === 'resources'\" [attr.aria-current]=\"activeSection === 'resources' ? 'page' : null\">Ressources</a>\n        <a routerLink=\"/actualites\" (click)=\"closeMenu()\" [class.is-current]=\"activeSection === 'news'\" [attr.aria-current]=\"activeSection === 'news' ? 'page' : null\">Actualit\u00E9s & \u00E9v\u00E9nements</a>\n        <a href=\"/#contact\" (click)=\"menuOpen = false\">Nous contacter</a>\n        <div class=\"mobile-language\"><a class=\"active\" href=\"#\" lang=\"fr\">FR</a><span>\u00B7</span><a href=\"#\" lang=\"en\">EN</a></div>\n      </nav>\n    </div>\n  </div>\n</header>\n", styles: [":host { display: block; position: relative; z-index: 5; }\n.container { width: min(1200px, calc(100% - 96px)); margin-inline: auto; }\n.site-header { background: #fff; }\n.topline { height: 34px; background: #123454; color: rgba(255,255,255,.76); font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }\n.topline-inner { height: 100%; display: flex; align-items: center; justify-content: space-between; }\n.language { display: flex; align-items: center; gap: 9px; font-size: 10px; letter-spacing: .12em; }\n.language span { height: 10px; border-left: 1px solid currentColor; opacity: .5; }\n.language a:not(.active) { opacity: .56; }\n.language .active { color: #fff; font-weight: 700; }\na { color: inherit; text-decoration: none; }\n.nav-wrap { border-bottom: 1px solid #edf0f0; }\n.nav-inner { height: 83px; display: flex; align-items: center; justify-content: space-between; }\n.brand { display: inline-flex; gap: 11px; align-items: center; color: #123454; }\n.brand-mark { width: 30px; height: 29px; position: relative; display: flex; align-items: flex-end; gap: 3px; border-left: 1.5px solid #1f567b; border-bottom: 1.5px solid #1f567b; padding: 0 0 3px 4px; }\n.brand-mark i { display: block; width: 5px; background: #1f567b; opacity: .9; }.brand-mark i:nth-child(1) { height: 10px; }.brand-mark i:nth-child(2) { height: 17px; }.brand-mark i:nth-child(3) { height: 24px; }\n.brand-name { font: 800 17px/1 'Manrope', sans-serif; letter-spacing: -.04em; }.brand-name b { color: #c5a46b; font-weight: 600; }.brand-name small { display: block; margin-top: 5px; color: #788691; font: 600 8px/1 'DM Sans', sans-serif; letter-spacing: .17em; }\n.main-nav { display: flex; align-items: center; gap: clamp(22px, 3.1vw, 48px); font-size: 12px; color: #334b5c; }\n.main-nav > a { position: relative; transition: color .2s; }.main-nav > a:hover, .main-nav > a.is-current { color: #123454; }\n.main-nav > a.is-current::after { position: absolute; right: 0; bottom: -9px; left: 0; height: 1px; background: #c5a46b; content: ''; }\n.mobile-language, .menu-toggle { display: none; }\n:where(a, button):focus-visible { outline: 2px solid #a7834e; outline-offset: 4px; }\n@media (max-width: 900px) {\n  .container { width: min(100% - 56px, 760px); }\n  .nav-inner { height: 75px; }\n  .main-nav { gap: 17px; font-size: 11px; }\n}\n@media (max-width: 640px) {\n  .container { width: calc(100% - 40px); }\n  .topline { height: 30px; font-size: 8px; }\n  .topline-inner { justify-content: flex-end; }\n  .topline-inner > span { display: none; }\n  .nav-inner { height: 68px; }\n  .brand-name { font-size: 16px; }\n  .menu-toggle { display: flex; width: 40px; height: 40px; flex-direction: column; justify-content: center; gap: 6px; align-items: flex-end; border: 0; background: transparent; color: #123454; cursor: pointer; }\n  .menu-toggle span { display: block; width: 22px; border-top: 1px solid currentColor; transition: width .2s; }\n  .menu-toggle span:last-child { width: 15px; }\n  .menu-toggle[aria-expanded='true'] span:last-child { width: 22px; }\n  .main-nav { position: absolute; display: none; top: 98px; left: 0; right: 0; padding: 12px 20px 25px; flex-direction: column; align-items: stretch; gap: 0; background: #fff; border-bottom: 1px solid #d9e0e1; box-shadow: 0 12px 22px rgba(18,52,84,.08); }\n  .main-nav.open { display: flex; }\n  .main-nav > a { padding: 15px 0; border-bottom: 1px solid #edf0f0; font-size: 13px; }\n  .main-nav > a.is-current::after { display: none; }\n  .mobile-language { display: flex; gap: 10px; padding-top: 18px; color: #123454; font-size: 10px; letter-spacing: .1em; }\n  .mobile-language .active { font-weight: 700; }\n}\n"] }]
    }], null, { activeSection: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SiteHeaderComponent, { className: "SiteHeaderComponent", filePath: "src/app/site-header.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=site-header.component.js.map