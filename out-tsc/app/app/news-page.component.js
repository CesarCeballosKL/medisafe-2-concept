import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EVENT_ITEMS, FEATURED_NEWS, NEWS_ITEMS } from './news.data';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/actualites", a0];
const _c1 = a0 => ["/actualites/evenements", a0];
const _forTrack0 = ($index, $item) => $item.id;
function NewsPageComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 1)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
    i0.ɵɵtext(4, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 7);
    i0.ɵɵtext(8, "Actualit\u00E9s & \u00E9v\u00E9nements");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 6);
    i0.ɵɵtext(10, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "article", 9)(14, "p", 10);
    i0.ɵɵelement(15, "span", 11);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 12);
    i0.ɵɵtext(18, "Contenu conceptuel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "h1");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p", 13);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 14);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 15)(26, "strong");
    i0.ɵɵtext(27, "Aper\u00E7u \u00E9ditorial");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p");
    i0.ɵɵtext(29, "Cette page illustre la pr\u00E9sentation d\u2019une actualit\u00E9 dans le futur site MEDISAFE 2. Son contenu est fictif et pr\u00E9sent\u00E9 \u00E0 titre de d\u00E9monstration.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "a", 16)(31, "span", 6);
    i0.ɵɵtext(32, "\u2190");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(33, " Toutes les actualit\u00E9s");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const article_r1 = ctx;
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(article_r1.title);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(article_r1.category);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(article_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(article_r1.dateLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(article_r1.description);
} }
function NewsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 1)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
    i0.ɵɵtext(4, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 7);
    i0.ɵɵtext(8, "Actualit\u00E9s & \u00E9v\u00E9nements");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 6);
    i0.ɵɵtext(10, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12, "Agenda");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "article", 9)(14, "p", 10);
    i0.ɵɵelement(15, "span", 11);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 12);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "h1");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "p", 13);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p", 14);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 15)(26, "strong");
    i0.ɵɵtext(27, "Agenda de d\u00E9monstration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p");
    i0.ɵɵtext(29, "Les informations affich\u00E9es sont conceptuelles. Aucun \u00E9v\u00E9nement ni date n\u2019est confirm\u00E9.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "a", 16)(31, "span", 6);
    i0.ɵɵtext(32, "\u2190");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(33, " Retour \u00E0 l\u2019agenda");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const event_r2 = ctx;
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate(event_r2.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00C9v\u00E9nement conceptuel \u00B7 ", event_r2.dateLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r2.location);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r2.description);
} }
function NewsPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 1)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
    i0.ɵɵtext(4, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 7);
    i0.ɵɵtext(8, "Actualit\u00E9s & \u00E9v\u00E9nements");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 6);
    i0.ɵɵtext(10, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12, "Contenu");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "article", 9)(14, "p", 10);
    i0.ɵɵelement(15, "span", 11);
    i0.ɵɵtext(16, "Suivre le projet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h1");
    i0.ɵɵtext(18, "Ce contenu n\u2019est pas disponible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 14);
    i0.ɵɵtext(20, "Le lien demand\u00E9 ne correspond \u00E0 aucun contenu de d\u00E9monstration.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 16)(22, "span", 6);
    i0.ɵɵtext(23, "\u2190");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Retour aux actualit\u00E9s");
    i0.ɵɵelementEnd()()()();
} }
function NewsPageComponent_Conditional_4_For_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32)(1, "div", 42)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 43);
    i0.ɵɵtext(11, "Lire l\u2019actualit\u00E9 ");
    i0.ɵɵelementStart(12, "span", 6);
    i0.ɵɵtext(13, "\u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const article_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, article_r3.id));
    i0.ɵɵattribute("aria-label", "Lire l\u2019actualit\u00E9 : " + article_r3.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(article_r3.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(article_r3.dateLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(article_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(article_r3.description);
} }
function NewsPageComponent_Conditional_4_For_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 37)(1, "div", 44)(2, "span", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 46);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p", 47);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 43);
    i0.ɵɵtext(13, "D\u00E9couvrir l\u2019\u00E9v\u00E9nement ");
    i0.ɵɵelementStart(14, "span", 6);
    i0.ɵɵtext(15, "\u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const event_r4 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(7, _c1, event_r4.id));
    i0.ɵɵattribute("aria-label", "D\u00E9couvrir l\u2019\u00E9v\u00E9nement : " + event_r4.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(event_r4.dateLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r4.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r4.location);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(event_r4.description);
} }
function NewsPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 2)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
    i0.ɵɵtext(4, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 8);
    i0.ɵɵtext(8, "Actualit\u00E9s & \u00E9v\u00E9nements");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "section", 17)(10, "p", 10);
    i0.ɵɵelement(11, "span", 11);
    i0.ɵɵtext(12, "Suivre le projet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h1", 18);
    i0.ɵɵtext(14, "Actualit\u00E9s ");
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "& \u00E9v\u00E9nements");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵtext(18, "Suivez les actualit\u00E9s, les activit\u00E9s et les \u00E9v\u00E9nements du projet MEDISAFE 2.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "section", 19)(20, "div", 20);
    i0.ɵɵelement(21, "img", 21);
    i0.ɵɵelementStart(22, "span", 22);
    i0.ɵɵtext(23, "Visuel de concept");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "article", 23)(25, "p", 10);
    i0.ɵɵelement(26, "span", 11);
    i0.ɵɵtext(27, "Actualit\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span", 12);
    i0.ɵɵtext(29, "Contenu conceptuel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "h2", 24);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "p", 25);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "a", 26);
    i0.ɵɵtext(35, "Lire l\u2019actualit\u00E9 ");
    i0.ɵɵelementStart(36, "span", 6);
    i0.ɵɵtext(37, "\u2192");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(38, "section", 27)(39, "div", 28)(40, "div")(41, "p", 10);
    i0.ɵɵelement(42, "span", 11);
    i0.ɵɵtext(43, "Actualit\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "h2", 29);
    i0.ɵɵtext(45, "Les derni\u00E8res actualit\u00E9s");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "p", 30);
    i0.ɵɵtext(47, "Exemples \u00E9ditoriaux conceptuels");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div", 31);
    i0.ɵɵrepeaterCreate(49, NewsPageComponent_Conditional_4_For_50_Template, 14, 8, "a", 32, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p", 33);
    i0.ɵɵtext(52, "Les contenus et dates pr\u00E9sent\u00E9s sont fictifs et servent uniquement \u00E0 illustrer le concept.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "section", 34)(54, "div", 3)(55, "div", 28)(56, "div")(57, "p", 10);
    i0.ɵɵelement(58, "span", 11);
    i0.ɵɵtext(59, "Agenda");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "h2", 35);
    i0.ɵɵtext(61, "Prochains \u00E9v\u00E9nements");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "p", 30);
    i0.ɵɵtext(63, "Rendez-vous conceptuels \u00B7 dates \u00E0 venir");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div", 36);
    i0.ɵɵrepeaterCreate(65, NewsPageComponent_Conditional_4_For_66_Template, 16, 9, "a", 37, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "p", 33);
    i0.ɵɵtext(68, "Agenda de d\u00E9monstration : aucun \u00E9v\u00E9nement n\u2019est confirm\u00E9.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(69, "section", 38)(70, "div", 39)(71, "div")(72, "p", 10);
    i0.ɵɵelement(73, "span", 11);
    i0.ɵɵtext(74, "MEDISAFE 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "h2", 40);
    i0.ɵɵtext(76, "Rester inform\u00E9 sur le projet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "p");
    i0.ɵɵtext(78, "Retrouvez r\u00E9guli\u00E8rement les actualit\u00E9s, ressources et \u00E9v\u00E9nements li\u00E9s \u00E0 MEDISAFE 2.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(79, "a", 41);
    i0.ɵɵtext(80, "Explorer les ressources ");
    i0.ɵɵelementStart(81, "span", 6);
    i0.ɵɵtext(82, "\u2192");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(31);
    i0.ɵɵtextInterpolate(ctx_r4.featuredNews.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.featuredNews.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(3, _c0, ctx_r4.featuredNews.id));
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r4.newsItems);
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(ctx_r4.eventItems);
} }
export class NewsPageComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.featuredNews = FEATURED_NEWS;
        this.newsItems = NEWS_ITEMS;
        this.eventItems = EVENT_ITEMS;
    }
    get selectedNews() {
        const id = this.route.snapshot.paramMap.get('id');
        return this.isEventRoute || !id ? undefined : [FEATURED_NEWS, ...NEWS_ITEMS].find(item => item.id === id);
    }
    get selectedEvent() {
        const id = this.route.snapshot.paramMap.get('id');
        return this.isEventRoute && id ? EVENT_ITEMS.find(item => item.id === id) : undefined;
    }
    get isEventRoute() {
        return this.route.snapshot.url.some(segment => segment.path === 'evenements');
    }
    get isUnknownItem() {
        return this.route.snapshot.paramMap.has('id') && !this.selectedNews && !this.selectedEvent;
    }
    static { this.ɵfac = function NewsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NewsPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewsPageComponent, selectors: [["app-news-page"]], decls: 6, vars: 1, consts: [["activeSection", "news"], [1, "news-page", "detail-page"], [1, "news-page"], [1, "container"], ["aria-label", "Fil d\u2019Ariane", 1, "breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], ["routerLink", "/actualites"], ["aria-current", "page"], [1, "detail-content"], [1, "eyebrow"], [1, "eyebrow-line"], [1, "concept-note"], [1, "detail-meta"], [1, "detail-description"], [1, "placeholder-note"], ["routerLink", "/actualites", 1, "text-link"], ["aria-labelledby", "news-title", 1, "page-intro"], ["id", "news-title"], ["aria-labelledby", "featured-title", 1, "featured"], [1, "featured-image-wrap"], ["src", "/assets/medisafe-hero.png", "alt", "Environnement professionnel li\u00E9 \u00E0 la sant\u00E9 et \u00E0 la s\u00E9curit\u00E9 des m\u00E9dicaments", 1, "featured-image"], [1, "image-caption"], [1, "featured-copy"], ["id", "featured-title"], [1, "featured-description"], [1, "text-link", 3, "routerLink"], ["aria-labelledby", "latest-title", 1, "news-section"], [1, "section-heading"], ["id", "latest-title"], [1, "section-note"], [1, "news-grid"], [1, "news-item", 3, "routerLink"], [1, "content-note"], ["aria-labelledby", "events-title", 1, "events-band"], ["id", "events-title"], [1, "events-grid"], [1, "event-item", 3, "routerLink"], ["aria-labelledby", "closing-title", 1, "closing-cta"], [1, "container", "closing-inner"], ["id", "closing-title"], ["routerLink", "/ressources", 1, "cta-link"], [1, "item-meta"], [1, "text-link"], [1, "event-meta"], [1, "event-date"], [1, "event-location"], [1, "event-description"]], template: function NewsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-site-header", 0);
            i0.ɵɵconditionalCreate(1, NewsPageComponent_Conditional_1_Template, 34, 5, "main", 1)(2, NewsPageComponent_Conditional_2_Template, 34, 5, "main", 1)(3, NewsPageComponent_Conditional_3_Template, 25, 0, "main", 1)(4, NewsPageComponent_Conditional_4_Template, 83, 5, "main", 2);
            i0.ɵɵelement(5, "app-site-footer");
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_0_0 = ctx.selectedNews) ? 1 : (tmp_0_0 = ctx.selectedEvent) ? 2 : ctx.isUnknownItem ? 3 : 4, tmp_0_0);
        } }, dependencies: [RouterLink, SiteHeaderComponent, SiteFooterComponent], styles: ["[_nghost-%COMP%] { display: block; --navy: #123454; --blue: #1f567b; --ink: #182b3a; --muted: #667782; --paper: #f4f6f5; --line: #d9e0e1; --accent: #c5a46b; }\n.container[_ngcontent-%COMP%] { width: min(1200px, calc(100% - 96px)); margin-inline: auto; }\na[_ngcontent-%COMP%] { color: inherit; text-decoration: none; }\n[_ngcontent-%COMP%]:where(a, button):focus-visible { outline: 2px solid #a7834e; outline-offset: 4px; }\n.news-page[_ngcontent-%COMP%] { padding-top: 29px; background: #fff; }\n.breadcrumb[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #75838c; font-size: 11px; }\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { transition: color .18s; }.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--blue); }.breadcrumb[_ngcontent-%COMP%]   [aria-current='page'][_ngcontent-%COMP%] { color: #344e5e; }\n.page-intro[_ngcontent-%COMP%] { max-width: 850px; padding: 39px 0 45px; }\n.eyebrow[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 11px; margin: 0 0 17px; color: #547088; font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }\n.eyebrow-line[_ngcontent-%COMP%] { display: inline-block; width: 25px; height: 1px; flex: 0 0 25px; background: var(--accent); }\n.page-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { max-width: 850px; margin: 0; color: var(--navy); font: 500 clamp(48px, 5.2vw, 64px)/1.08 'Manrope', sans-serif; letter-spacing: -.055em; }\n.page-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { white-space: nowrap; }\n.page-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child { max-width: 770px; margin: 17px 0 0; color: #596d7a; font-size: 17px; line-height: 1.65; }\n.featured[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1.18fr) minmax(340px, .82fr); min-height: 397px; margin-bottom: 83px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }\n.featured-image-wrap[_ngcontent-%COMP%] { position: relative; min-height: 397px; overflow: hidden; background: #e8eeef; }\n.featured-image[_ngcontent-%COMP%] { display: block; width: 100%; height: 100%; min-height: 397px; object-fit: cover; object-position: center; transition: transform .5s ease; }\n.featured-image-wrap[_ngcontent-%COMP%]:hover   .featured-image[_ngcontent-%COMP%] { transform: scale(1.015); }\n.image-caption[_ngcontent-%COMP%] { position: absolute; right: 14px; bottom: 14px; padding: 7px 9px; background: rgba(18,52,84,.84); color: #fff; font-size: 9px; letter-spacing: .08em; text-transform: uppercase; }\n.featured-copy[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: 43px clamp(28px, 4.5vw, 64px); }\n.featured-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { margin-bottom: 17px; }\n.concept-note[_ngcontent-%COMP%] { display: block; margin-bottom: 10px; color: #987b4c; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }\n.featured-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { max-width: 480px; margin: 0; color: var(--navy); font: 500 clamp(28px, 3vw, 38px)/1.24 'Manrope', sans-serif; letter-spacing: -.04em; }\n.featured-description[_ngcontent-%COMP%] { max-width: 430px; margin: 17px 0 25px; color: #60717d; font-size: 14px; line-height: 1.7; }\n.text-link[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: 9px; color: var(--blue); font-size: 12px; font-weight: 700; text-decoration: underline; text-decoration-color: #c6d0d3; text-underline-offset: 5px; transition: color .18s, text-decoration-color .18s; }\n.text-link[_ngcontent-%COMP%]:hover { color: #8c7043; text-decoration-color: var(--accent); }\n.text-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 16px; }\n.news-section[_ngcontent-%COMP%] { padding-bottom: 76px; }\n.section-heading[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; gap: 25px; margin-bottom: 26px; }\n.section-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { margin-bottom: 11px; }\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: var(--navy); font: 500 clamp(31px, 3.2vw, 40px)/1.2 'Manrope', sans-serif; letter-spacing: -.04em; }\n.section-note[_ngcontent-%COMP%] { margin: 0 0 5px; color: #7b8990; font-size: 11px; }\n.news-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }\n.news-item[_ngcontent-%COMP%] { display: flex; min-width: 0; min-height: 250px; flex-direction: column; align-items: flex-start; padding: 22px 23px 21px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; transition: background .18s; }\n.news-item[_ngcontent-%COMP%]:hover { background: #f8faf9; }\n.item-meta[_ngcontent-%COMP%] { display: flex; width: 100%; justify-content: space-between; gap: 12px; color: #70818a; font-size: 9px; }\n.item-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child { color: #597287; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }\n.news-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 19px 0 9px; color: var(--navy); font: 600 20px/1.36 'Manrope', sans-serif; letter-spacing: -.025em; }\n.news-item[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { margin: 0 0 19px; color: #637580; font-size: 12px; line-height: 1.65; }\n.news-item[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] { margin-top: auto; font-size: 11px; }\n.content-note[_ngcontent-%COMP%] { margin: 17px 0 0; color: #829099; font-size: 10px; }\n.events-band[_ngcontent-%COMP%] { padding: 56px 0 55px; background: #f3f6f5; border-top: 1px solid #e2e8e7; border-bottom: 1px solid #e2e8e7; }\n.events-band[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] { margin-bottom: 24px; }\n.events-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid #d4dfe0; border-left: 1px solid #d4dfe0; }\n.event-item[_ngcontent-%COMP%] { display: flex; min-width: 0; min-height: 258px; flex-direction: column; align-items: flex-start; padding: 21px 22px; border-right: 1px solid #d4dfe0; border-bottom: 1px solid #d4dfe0; background: rgba(255,255,255,.54); transition: background .18s; }\n.event-item[_ngcontent-%COMP%]:hover { background: #fff; }\n.event-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 15px; color: #70818a; font-size: 9px; text-transform: uppercase; letter-spacing: .08em; }\n.event-date[_ngcontent-%COMP%] { color: #96794b; font-weight: 700; }\n.event-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 19px 0 8px; color: var(--navy); font: 600 20px/1.36 'Manrope', sans-serif; letter-spacing: -.025em; }\n.event-location[_ngcontent-%COMP%] { margin: 0; color: #3f6278; font-size: 11px; font-weight: 600; }\n.event-description[_ngcontent-%COMP%] { margin: 12px 0 17px; color: #637580; font-size: 12px; line-height: 1.65; }\n.event-item[_ngcontent-%COMP%]   .text-link[_ngcontent-%COMP%] { margin-top: auto; font-size: 11px; }\n.closing-cta[_ngcontent-%COMP%] { padding: 58px 0 65px; }\n.closing-inner[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; gap: 34px; }\n.closing-inner[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { margin-bottom: 11px; }\n.closing-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: var(--navy); font: 500 clamp(30px, 3.2vw, 39px)/1.2 'Manrope', sans-serif; letter-spacing: -.04em; }\n.closing-inner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child { max-width: 650px; margin: 11px 0 0; color: #60717d; font-size: 14px; line-height: 1.65; }\n.cta-link[_ngcontent-%COMP%] { display: inline-flex; min-height: 48px; flex: 0 0 auto; align-items: center; justify-content: center; gap: 22px; padding: 0 17px; border: 1px solid #aebfc6; color: var(--blue); font-size: 12px; font-weight: 700; transition: border-color .18s, color .18s, background .18s; }\n.cta-link[_ngcontent-%COMP%]:hover { border-color: var(--accent); background: #faf9f6; color: #8c7043; }\n.cta-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 16px; }\n.detail-page[_ngcontent-%COMP%] { min-height: 590px; }\n.detail-content[_ngcontent-%COMP%] { max-width: 800px; padding: 52px 0 78px; }\n.detail-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { max-width: 760px; margin: 0; color: var(--navy); font: 500 clamp(40px, 4.5vw, 56px)/1.12 'Manrope', sans-serif; letter-spacing: -.05em; }\n.detail-meta[_ngcontent-%COMP%] { margin: 18px 0 0; color: #6c7d87; font-size: 11px; }\n.detail-description[_ngcontent-%COMP%] { max-width: 630px; margin: 20px 0 27px; color: #566c79; font-size: 16px; line-height: 1.7; }\n.placeholder-note[_ngcontent-%COMP%] { padding: 20px 22px; border: 1px solid var(--line); border-left: 2px solid var(--accent); background: var(--paper); }\n.placeholder-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--navy); font: 600 14px 'Manrope', sans-serif; }\n.placeholder-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.6; }\n.detail-content[_ngcontent-%COMP%]    > .text-link[_ngcontent-%COMP%] { margin-top: 25px; }\n@media (max-width: 900px) {\n  .container[_ngcontent-%COMP%] { width: min(100% - 56px, 760px); }\n  .featured[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 1fr) minmax(300px, .9fr); min-height: 350px; margin-bottom: 66px; }\n  .featured-image-wrap[_ngcontent-%COMP%], .featured-image[_ngcontent-%COMP%] { min-height: 350px; }\n  .featured-copy[_ngcontent-%COMP%] { padding: 32px 28px; }\n  .featured-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 30px; }\n  .news-grid[_ngcontent-%COMP%], .events-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .news-item[_ngcontent-%COMP%], .event-item[_ngcontent-%COMP%] { min-height: 240px; }\n}\n@media (max-width: 620px) {\n  .container[_ngcontent-%COMP%] { width: calc(100% - 40px); }\n  .news-page[_ngcontent-%COMP%] { padding-top: 22px; }\n  .page-intro[_ngcontent-%COMP%] { padding: 31px 0 31px; }\n  .eyebrow[_ngcontent-%COMP%] { margin-bottom: 14px; font-size: 9px; }\n  .page-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: clamp(41px, 12vw, 53px); line-height: 1.04; }\n  .page-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { white-space: normal; }\n  .page-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child { margin-top: 13px; font-size: 15px; line-height: 1.6; }\n  .featured[_ngcontent-%COMP%] { display: flex; flex-direction: column; margin-bottom: 56px; }\n  .featured-image-wrap[_ngcontent-%COMP%], .featured-image[_ngcontent-%COMP%] { height: 245px; min-height: 245px; }\n  .featured-copy[_ngcontent-%COMP%] { padding: 26px 0 30px; }\n  .featured-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { margin-bottom: 13px; }\n  .featured-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { max-width: 440px; font-size: 29px; }\n  .featured-description[_ngcontent-%COMP%] { margin: 12px 0 18px; font-size: 13px; }\n  .news-section[_ngcontent-%COMP%] { padding-bottom: 53px; }\n  .section-heading[_ngcontent-%COMP%] { display: block; margin-bottom: 21px; }\n  .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 30px; }\n  .section-note[_ngcontent-%COMP%] { margin-top: 9px; }\n  .news-grid[_ngcontent-%COMP%], .events-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .news-item[_ngcontent-%COMP%], .event-item[_ngcontent-%COMP%] { min-height: 0; padding: 20px; }\n  .news-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .event-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin-top: 15px; font-size: 19px; }\n  .news-item[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { margin-bottom: 17px; }\n  .events-band[_ngcontent-%COMP%] { padding: 41px 0 40px; }\n  .closing-cta[_ngcontent-%COMP%] { padding: 43px 0 48px; }\n  .closing-inner[_ngcontent-%COMP%] { display: block; }\n  .closing-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 30px; }\n  .closing-inner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child { font-size: 13px; }\n  .cta-link[_ngcontent-%COMP%] { margin-top: 20px; }\n  .detail-content[_ngcontent-%COMP%] { padding: 37px 0 58px; }\n  .detail-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 38px; }\n  .detail-description[_ngcontent-%COMP%] { font-size: 14px; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewsPageComponent, [{
        type: Component,
        args: [{ selector: 'app-news-page', standalone: true, imports: [RouterLink, SiteHeaderComponent, SiteFooterComponent], template: "<app-site-header activeSection=\"news\"></app-site-header>\n\n@if (selectedNews; as article) {\n  <main class=\"news-page detail-page\">\n    <div class=\"container\">\n      <nav class=\"breadcrumb\" aria-label=\"Fil d\u2019Ariane\">\n        <a routerLink=\"/\">Accueil</a><span aria-hidden=\"true\">/</span><a routerLink=\"/actualites\">Actualit\u00E9s &amp; \u00E9v\u00E9nements</a><span aria-hidden=\"true\">/</span><span aria-current=\"page\">{{ article.title }}</span>\n      </nav>\n      <article class=\"detail-content\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>{{ article.category }}</p>\n        <span class=\"concept-note\">Contenu conceptuel</span>\n        <h1>{{ article.title }}</h1>\n        <p class=\"detail-meta\">{{ article.dateLabel }}</p>\n        <p class=\"detail-description\">{{ article.description }}</p>\n        <div class=\"placeholder-note\"><strong>Aper\u00E7u \u00E9ditorial</strong><p>Cette page illustre la pr\u00E9sentation d\u2019une actualit\u00E9 dans le futur site MEDISAFE 2. Son contenu est fictif et pr\u00E9sent\u00E9 \u00E0 titre de d\u00E9monstration.</p></div>\n        <a class=\"text-link\" routerLink=\"/actualites\"><span aria-hidden=\"true\">\u2190</span> Toutes les actualit\u00E9s</a>\n      </article>\n    </div>\n  </main>\n} @else if (selectedEvent; as event) {\n  <main class=\"news-page detail-page\">\n    <div class=\"container\">\n      <nav class=\"breadcrumb\" aria-label=\"Fil d\u2019Ariane\">\n        <a routerLink=\"/\">Accueil</a><span aria-hidden=\"true\">/</span><a routerLink=\"/actualites\">Actualit\u00E9s &amp; \u00E9v\u00E9nements</a><span aria-hidden=\"true\">/</span><span aria-current=\"page\">Agenda</span>\n      </nav>\n      <article class=\"detail-content\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>{{ event.type }}</p>\n        <span class=\"concept-note\">\u00C9v\u00E9nement conceptuel \u00B7 {{ event.dateLabel }}</span>\n        <h1>{{ event.title }}</h1>\n        <p class=\"detail-meta\">{{ event.location }}</p>\n        <p class=\"detail-description\">{{ event.description }}</p>\n        <div class=\"placeholder-note\"><strong>Agenda de d\u00E9monstration</strong><p>Les informations affich\u00E9es sont conceptuelles. Aucun \u00E9v\u00E9nement ni date n\u2019est confirm\u00E9.</p></div>\n        <a class=\"text-link\" routerLink=\"/actualites\"><span aria-hidden=\"true\">\u2190</span> Retour \u00E0 l\u2019agenda</a>\n      </article>\n    </div>\n  </main>\n} @else if (isUnknownItem) {\n  <main class=\"news-page detail-page\">\n    <div class=\"container\">\n      <nav class=\"breadcrumb\" aria-label=\"Fil d\u2019Ariane\"><a routerLink=\"/\">Accueil</a><span aria-hidden=\"true\">/</span><a routerLink=\"/actualites\">Actualit\u00E9s &amp; \u00E9v\u00E9nements</a><span aria-hidden=\"true\">/</span><span aria-current=\"page\">Contenu</span></nav>\n      <article class=\"detail-content\"><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Suivre le projet</p><h1>Ce contenu n\u2019est pas disponible</h1><p class=\"detail-description\">Le lien demand\u00E9 ne correspond \u00E0 aucun contenu de d\u00E9monstration.</p><a class=\"text-link\" routerLink=\"/actualites\"><span aria-hidden=\"true\">\u2190</span> Retour aux actualit\u00E9s</a></article>\n    </div>\n  </main>\n} @else {\n  <main class=\"news-page\">\n    <div class=\"container\">\n      <nav class=\"breadcrumb\" aria-label=\"Fil d\u2019Ariane\"><a routerLink=\"/\">Accueil</a><span aria-hidden=\"true\">/</span><span aria-current=\"page\">Actualit\u00E9s &amp; \u00E9v\u00E9nements</span></nav>\n\n      <section class=\"page-intro\" aria-labelledby=\"news-title\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Suivre le projet</p>\n        <h1 id=\"news-title\">Actualit\u00E9s <span>&amp; \u00E9v\u00E9nements</span></h1>\n        <p>Suivez les actualit\u00E9s, les activit\u00E9s et les \u00E9v\u00E9nements du projet MEDISAFE 2.</p>\n      </section>\n\n      <section class=\"featured\" aria-labelledby=\"featured-title\">\n        <div class=\"featured-image-wrap\">\n          <img src=\"/assets/medisafe-hero.png\" alt=\"Environnement professionnel li\u00E9 \u00E0 la sant\u00E9 et \u00E0 la s\u00E9curit\u00E9 des m\u00E9dicaments\" class=\"featured-image\">\n          <span class=\"image-caption\">Visuel de concept</span>\n        </div>\n        <article class=\"featured-copy\">\n          <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Actualit\u00E9</p>\n          <span class=\"concept-note\">Contenu conceptuel</span>\n          <h2 id=\"featured-title\">{{ featuredNews.title }}</h2>\n          <p class=\"featured-description\">{{ featuredNews.description }}</p>\n          <a class=\"text-link\" [routerLink]=\"['/actualites', featuredNews.id]\">Lire l\u2019actualit\u00E9 <span aria-hidden=\"true\">\u2192</span></a>\n        </article>\n      </section>\n\n      <section class=\"news-section\" aria-labelledby=\"latest-title\">\n        <div class=\"section-heading\">\n          <div><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Actualit\u00E9s</p><h2 id=\"latest-title\">Les derni\u00E8res actualit\u00E9s</h2></div>\n          <p class=\"section-note\">Exemples \u00E9ditoriaux conceptuels</p>\n        </div>\n        <div class=\"news-grid\">\n          @for (article of newsItems; track article.id) {\n            <a class=\"news-item\" [routerLink]=\"['/actualites', article.id]\" [attr.aria-label]=\"'Lire l\u2019actualit\u00E9 : ' + article.title\">\n              <div class=\"item-meta\"><span>{{ article.category }}</span><span>{{ article.dateLabel }}</span></div>\n              <h3>{{ article.title }}</h3>\n              <p>{{ article.description }}</p>\n              <span class=\"text-link\">Lire l\u2019actualit\u00E9 <span aria-hidden=\"true\">\u2192</span></span>\n            </a>\n          }\n        </div>\n        <p class=\"content-note\">Les contenus et dates pr\u00E9sent\u00E9s sont fictifs et servent uniquement \u00E0 illustrer le concept.</p>\n      </section>\n    </div>\n\n    <section class=\"events-band\" aria-labelledby=\"events-title\">\n      <div class=\"container\">\n        <div class=\"section-heading\">\n          <div><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Agenda</p><h2 id=\"events-title\">Prochains \u00E9v\u00E9nements</h2></div>\n          <p class=\"section-note\">Rendez-vous conceptuels \u00B7 dates \u00E0 venir</p>\n        </div>\n        <div class=\"events-grid\">\n          @for (event of eventItems; track event.id) {\n            <a class=\"event-item\" [routerLink]=\"['/actualites/evenements', event.id]\" [attr.aria-label]=\"'D\u00E9couvrir l\u2019\u00E9v\u00E9nement : ' + event.title\">\n              <div class=\"event-meta\"><span class=\"event-date\">{{ event.dateLabel }}</span><span>{{ event.type }}</span></div>\n              <h3>{{ event.title }}</h3>\n              <p class=\"event-location\">{{ event.location }}</p>\n              <p class=\"event-description\">{{ event.description }}</p>\n              <span class=\"text-link\">D\u00E9couvrir l\u2019\u00E9v\u00E9nement <span aria-hidden=\"true\">\u2192</span></span>\n            </a>\n          }\n        </div>\n        <p class=\"content-note\">Agenda de d\u00E9monstration : aucun \u00E9v\u00E9nement n\u2019est confirm\u00E9.</p>\n      </div>\n    </section>\n\n    <section class=\"closing-cta\" aria-labelledby=\"closing-title\">\n      <div class=\"container closing-inner\">\n        <div><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>MEDISAFE 2</p><h2 id=\"closing-title\">Rester inform\u00E9 sur le projet</h2><p>Retrouvez r\u00E9guli\u00E8rement les actualit\u00E9s, ressources et \u00E9v\u00E9nements li\u00E9s \u00E0 MEDISAFE 2.</p></div>\n        <a class=\"cta-link\" routerLink=\"/ressources\">Explorer les ressources <span aria-hidden=\"true\">\u2192</span></a>\n      </div>\n    </section>\n  </main>\n}\n\n<app-site-footer></app-site-footer>\n", styles: [":host { display: block; --navy: #123454; --blue: #1f567b; --ink: #182b3a; --muted: #667782; --paper: #f4f6f5; --line: #d9e0e1; --accent: #c5a46b; }\n.container { width: min(1200px, calc(100% - 96px)); margin-inline: auto; }\na { color: inherit; text-decoration: none; }\n:where(a, button):focus-visible { outline: 2px solid #a7834e; outline-offset: 4px; }\n.news-page { padding-top: 29px; background: #fff; }\n.breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #75838c; font-size: 11px; }\n.breadcrumb a { transition: color .18s; }.breadcrumb a:hover { color: var(--blue); }.breadcrumb [aria-current='page'] { color: #344e5e; }\n.page-intro { max-width: 850px; padding: 39px 0 45px; }\n.eyebrow { display: flex; align-items: center; gap: 11px; margin: 0 0 17px; color: #547088; font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }\n.eyebrow-line { display: inline-block; width: 25px; height: 1px; flex: 0 0 25px; background: var(--accent); }\n.page-intro h1 { max-width: 850px; margin: 0; color: var(--navy); font: 500 clamp(48px, 5.2vw, 64px)/1.08 'Manrope', sans-serif; letter-spacing: -.055em; }\n.page-intro h1 span { white-space: nowrap; }\n.page-intro > p:last-child { max-width: 770px; margin: 17px 0 0; color: #596d7a; font-size: 17px; line-height: 1.65; }\n.featured { display: grid; grid-template-columns: minmax(0, 1.18fr) minmax(340px, .82fr); min-height: 397px; margin-bottom: 83px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }\n.featured-image-wrap { position: relative; min-height: 397px; overflow: hidden; background: #e8eeef; }\n.featured-image { display: block; width: 100%; height: 100%; min-height: 397px; object-fit: cover; object-position: center; transition: transform .5s ease; }\n.featured-image-wrap:hover .featured-image { transform: scale(1.015); }\n.image-caption { position: absolute; right: 14px; bottom: 14px; padding: 7px 9px; background: rgba(18,52,84,.84); color: #fff; font-size: 9px; letter-spacing: .08em; text-transform: uppercase; }\n.featured-copy { display: flex; flex-direction: column; align-items: flex-start; justify-content: center; padding: 43px clamp(28px, 4.5vw, 64px); }\n.featured-copy .eyebrow { margin-bottom: 17px; }\n.concept-note { display: block; margin-bottom: 10px; color: #987b4c; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }\n.featured-copy h2 { max-width: 480px; margin: 0; color: var(--navy); font: 500 clamp(28px, 3vw, 38px)/1.24 'Manrope', sans-serif; letter-spacing: -.04em; }\n.featured-description { max-width: 430px; margin: 17px 0 25px; color: #60717d; font-size: 14px; line-height: 1.7; }\n.text-link { display: inline-flex; align-items: center; gap: 9px; color: var(--blue); font-size: 12px; font-weight: 700; text-decoration: underline; text-decoration-color: #c6d0d3; text-underline-offset: 5px; transition: color .18s, text-decoration-color .18s; }\n.text-link:hover { color: #8c7043; text-decoration-color: var(--accent); }\n.text-link span { font-size: 16px; }\n.news-section { padding-bottom: 76px; }\n.section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 25px; margin-bottom: 26px; }\n.section-heading .eyebrow { margin-bottom: 11px; }\n.section-heading h2 { margin: 0; color: var(--navy); font: 500 clamp(31px, 3.2vw, 40px)/1.2 'Manrope', sans-serif; letter-spacing: -.04em; }\n.section-note { margin: 0 0 5px; color: #7b8990; font-size: 11px; }\n.news-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }\n.news-item { display: flex; min-width: 0; min-height: 250px; flex-direction: column; align-items: flex-start; padding: 22px 23px 21px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; transition: background .18s; }\n.news-item:hover { background: #f8faf9; }\n.item-meta { display: flex; width: 100%; justify-content: space-between; gap: 12px; color: #70818a; font-size: 9px; }\n.item-meta span:first-child { color: #597287; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }\n.news-item h3 { margin: 19px 0 9px; color: var(--navy); font: 600 20px/1.36 'Manrope', sans-serif; letter-spacing: -.025em; }\n.news-item > p { margin: 0 0 19px; color: #637580; font-size: 12px; line-height: 1.65; }\n.news-item .text-link { margin-top: auto; font-size: 11px; }\n.content-note { margin: 17px 0 0; color: #829099; font-size: 10px; }\n.events-band { padding: 56px 0 55px; background: #f3f6f5; border-top: 1px solid #e2e8e7; border-bottom: 1px solid #e2e8e7; }\n.events-band .section-heading { margin-bottom: 24px; }\n.events-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid #d4dfe0; border-left: 1px solid #d4dfe0; }\n.event-item { display: flex; min-width: 0; min-height: 258px; flex-direction: column; align-items: flex-start; padding: 21px 22px; border-right: 1px solid #d4dfe0; border-bottom: 1px solid #d4dfe0; background: rgba(255,255,255,.54); transition: background .18s; }\n.event-item:hover { background: #fff; }\n.event-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 15px; color: #70818a; font-size: 9px; text-transform: uppercase; letter-spacing: .08em; }\n.event-date { color: #96794b; font-weight: 700; }\n.event-item h3 { margin: 19px 0 8px; color: var(--navy); font: 600 20px/1.36 'Manrope', sans-serif; letter-spacing: -.025em; }\n.event-location { margin: 0; color: #3f6278; font-size: 11px; font-weight: 600; }\n.event-description { margin: 12px 0 17px; color: #637580; font-size: 12px; line-height: 1.65; }\n.event-item .text-link { margin-top: auto; font-size: 11px; }\n.closing-cta { padding: 58px 0 65px; }\n.closing-inner { display: flex; align-items: flex-end; justify-content: space-between; gap: 34px; }\n.closing-inner .eyebrow { margin-bottom: 11px; }\n.closing-inner h2 { margin: 0; color: var(--navy); font: 500 clamp(30px, 3.2vw, 39px)/1.2 'Manrope', sans-serif; letter-spacing: -.04em; }\n.closing-inner > div > p:last-child { max-width: 650px; margin: 11px 0 0; color: #60717d; font-size: 14px; line-height: 1.65; }\n.cta-link { display: inline-flex; min-height: 48px; flex: 0 0 auto; align-items: center; justify-content: center; gap: 22px; padding: 0 17px; border: 1px solid #aebfc6; color: var(--blue); font-size: 12px; font-weight: 700; transition: border-color .18s, color .18s, background .18s; }\n.cta-link:hover { border-color: var(--accent); background: #faf9f6; color: #8c7043; }\n.cta-link span { font-size: 16px; }\n.detail-page { min-height: 590px; }\n.detail-content { max-width: 800px; padding: 52px 0 78px; }\n.detail-content h1 { max-width: 760px; margin: 0; color: var(--navy); font: 500 clamp(40px, 4.5vw, 56px)/1.12 'Manrope', sans-serif; letter-spacing: -.05em; }\n.detail-meta { margin: 18px 0 0; color: #6c7d87; font-size: 11px; }\n.detail-description { max-width: 630px; margin: 20px 0 27px; color: #566c79; font-size: 16px; line-height: 1.7; }\n.placeholder-note { padding: 20px 22px; border: 1px solid var(--line); border-left: 2px solid var(--accent); background: var(--paper); }\n.placeholder-note strong { color: var(--navy); font: 600 14px 'Manrope', sans-serif; }\n.placeholder-note p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.6; }\n.detail-content > .text-link { margin-top: 25px; }\n@media (max-width: 900px) {\n  .container { width: min(100% - 56px, 760px); }\n  .featured { grid-template-columns: minmax(0, 1fr) minmax(300px, .9fr); min-height: 350px; margin-bottom: 66px; }\n  .featured-image-wrap, .featured-image { min-height: 350px; }\n  .featured-copy { padding: 32px 28px; }\n  .featured-copy h2 { font-size: 30px; }\n  .news-grid, .events-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n  .news-item, .event-item { min-height: 240px; }\n}\n@media (max-width: 620px) {\n  .container { width: calc(100% - 40px); }\n  .news-page { padding-top: 22px; }\n  .page-intro { padding: 31px 0 31px; }\n  .eyebrow { margin-bottom: 14px; font-size: 9px; }\n  .page-intro h1 { font-size: clamp(41px, 12vw, 53px); line-height: 1.04; }\n  .page-intro h1 span { white-space: normal; }\n  .page-intro > p:last-child { margin-top: 13px; font-size: 15px; line-height: 1.6; }\n  .featured { display: flex; flex-direction: column; margin-bottom: 56px; }\n  .featured-image-wrap, .featured-image { height: 245px; min-height: 245px; }\n  .featured-copy { padding: 26px 0 30px; }\n  .featured-copy .eyebrow { margin-bottom: 13px; }\n  .featured-copy h2 { max-width: 440px; font-size: 29px; }\n  .featured-description { margin: 12px 0 18px; font-size: 13px; }\n  .news-section { padding-bottom: 53px; }\n  .section-heading { display: block; margin-bottom: 21px; }\n  .section-heading h2 { font-size: 30px; }\n  .section-note { margin-top: 9px; }\n  .news-grid, .events-grid { grid-template-columns: 1fr; }\n  .news-item, .event-item { min-height: 0; padding: 20px; }\n  .news-item h3, .event-item h3 { margin-top: 15px; font-size: 19px; }\n  .news-item > p { margin-bottom: 17px; }\n  .events-band { padding: 41px 0 40px; }\n  .closing-cta { padding: 43px 0 48px; }\n  .closing-inner { display: block; }\n  .closing-inner h2 { font-size: 30px; }\n  .closing-inner > div > p:last-child { font-size: 13px; }\n  .cta-link { margin-top: 20px; }\n  .detail-content { padding: 37px 0 58px; }\n  .detail-content h1 { font-size: 38px; }\n  .detail-description { font-size: 14px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NewsPageComponent, { className: "NewsPageComponent", filePath: "src/app/news-page.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=news-page.component.js.map