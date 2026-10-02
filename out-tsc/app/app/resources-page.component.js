import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RESOURCE_CATEGORIES, RESOURCE_THEMES, RESOURCE_TYPES, RESOURCE_YEARS, RESOURCES, filterResources } from './resources.data';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/ressources", a0];
const _forTrack0 = ($index, $item) => $item.id;
function ResourcesPageComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 1)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
    i0.ɵɵtext(4, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 7);
    i0.ɵɵtext(8, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 6);
    i0.ɵɵtext(10, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "section", 9)(14, "p", 10);
    i0.ɵɵelement(15, "span", 11);
    i0.ɵɵtext(16, "Aper\u00E7u documentaire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 12);
    i0.ɵɵtext(18, "Ressource conceptuelle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "h1", 13);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 14)(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "p", 15);
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 16)(31, "span", 17);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div")(34, "strong");
    i0.ɵɵtext(35, "Aper\u00E7u de d\u00E9monstration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p");
    i0.ɵɵtext(37, "Cette ressource est un contenu fictif destin\u00E9 \u00E0 illustrer le futur centre documentaire. Aucun fichier t\u00E9l\u00E9chargeable n\u2019est associ\u00E9 \u00E0 cet aper\u00E7u.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "a", 18)(39, "span", 6);
    i0.ɵɵtext(40, "\u2190");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(41, " Retour au centre documentaire");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const resource_r1 = ctx;
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(resource_r1.title);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(resource_r1.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(resource_r1.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(resource_r1.year);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(resource_r1.metadata);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(resource_r1.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(resource_r1.type.slice(0, 1));
} }
function ResourcesPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "main", 1)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
    i0.ɵɵtext(4, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 7);
    i0.ɵɵtext(8, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 6);
    i0.ɵɵtext(10, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span", 8);
    i0.ɵɵtext(12, "Ressource");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "section", 19)(14, "p", 10);
    i0.ɵɵelement(15, "span", 11);
    i0.ɵɵtext(16, "Centre documentaire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h1", 13);
    i0.ɵɵtext(18, "Cette ressource n\u2019est pas disponible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p", 15);
    i0.ɵɵtext(20, "Le lien demand\u00E9 ne correspond \u00E0 aucun contenu de d\u00E9monstration.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 18)(22, "span", 6);
    i0.ɵɵtext(23, "\u2190");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Retour aux ressources");
    i0.ɵɵelementEnd()()()();
} }
function ResourcesPageComponent_Conditional_3_For_35_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function ResourcesPageComponent_Conditional_3_For_35_Template_button_click_0_listener() { const category_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectCategory(category_r5.id)); });
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 33);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("selected", ctx_r2.selectedCategory === category_r5.id);
    i0.ɵɵattribute("aria-pressed", ctx_r2.selectedCategory === category_r5.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r5.number);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r5.description);
} }
function ResourcesPageComponent_Conditional_3_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r6);
} }
function ResourcesPageComponent_Conditional_3_For_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", year_r7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(year_r7);
} }
function ResourcesPageComponent_Conditional_3_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const theme_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", theme_r8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(theme_r8);
} }
function ResourcesPageComponent_Conditional_3_Conditional_75_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 51)(1, "div", 52)(2, "span", 53);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 54);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 55);
    i0.ɵɵelement(7, "i")(8, "i")(9, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "span", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 57)(12, "div", 58)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 59);
    i0.ɵɵtext(16, "Exemple conceptuel");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "h3");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 60)(22, "span", 61);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "a", 62);
    i0.ɵɵtext(25, "Consulter la ressource ");
    i0.ɵɵelementStart(26, "span", 6);
    i0.ɵɵtext(27, "\u2192");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const resource_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-type", resource_r9.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(resource_r9.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(resource_r9.year);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(resource_r9.year);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(resource_r9.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(resource_r9.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(resource_r9.metadata);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, resource_r9.id));
} }
function ResourcesPageComponent_Conditional_3_Conditional_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵrepeaterCreate(1, ResourcesPageComponent_Conditional_3_Conditional_75_For_2_Template, 28, 10, "article", 51, i0.ɵɵcomponentInstance().trackResource, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.filteredResources);
} }
function ResourcesPageComponent_Conditional_3_Conditional_76_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48)(1, "span", 63);
    i0.ɵɵtext(2, "\u2014");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Aucune ressource ne correspond \u00E0 votre recherche.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Modifiez vos crit\u00E8res ou r\u00E9initialisez les filtres pour afficher le fonds documentaire.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 64);
    i0.ɵɵlistener("click", function ResourcesPageComponent_Conditional_3_Conditional_76_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.resetFilters()); });
    i0.ɵɵtext(8, "R\u00E9initialiser les filtres");
    i0.ɵɵelementEnd()();
} }
function ResourcesPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "main", 2)(1, "div", 3)(2, "nav", 4)(3, "a", 5);
    i0.ɵɵtext(4, "Accueil");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 6);
    i0.ɵɵtext(6, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 8);
    i0.ɵɵtext(8, "Ressources");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "section", 20)(10, "p", 10);
    i0.ɵɵelement(11, "span", 11);
    i0.ɵɵtext(12, "Centre documentaire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h1", 21);
    i0.ɵɵtext(14, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16, "Retrouvez les publications, guides, cadres normatifs, ressources de formation et sites de r\u00E9f\u00E9rence li\u00E9s \u00E0 MEDISAFE 2.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "section", 22)(18, "label", 23);
    i0.ɵɵtext(19, "Rechercher une ressource");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(21, "svg", 25);
    i0.ɵɵelement(22, "circle", 26)(23, "path", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "input", 28);
    i0.ɵɵlistener("input", function ResourcesPageComponent_Conditional_3_Template_input_input_24_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setSearchTerm($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "section", 29)(26, "nav", 30)(27, "button", 31);
    i0.ɵɵlistener("click", function ResourcesPageComponent_Conditional_3_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectCategory("all")); });
    i0.ɵɵelementStart(28, "span", 32);
    i0.ɵɵtext(29, "\u2014");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "strong");
    i0.ɵɵtext(31, "Toutes les ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span", 33);
    i0.ɵɵtext(33, "Voir le fonds documentaire");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(34, ResourcesPageComponent_Conditional_3_For_35_Template, 7, 6, "button", 34, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "section", 35)(37, "h2", 36);
    i0.ɵɵtext(38, "Filtrer par");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "div", 37)(40, "label");
    i0.ɵɵtext(41, "Type ");
    i0.ɵɵelementStart(42, "select", 38);
    i0.ɵɵlistener("change", function ResourcesPageComponent_Conditional_3_Template_select_change_42_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setType($event)); });
    i0.ɵɵelementStart(43, "option", 39);
    i0.ɵɵtext(44, "Tous les types");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(45, ResourcesPageComponent_Conditional_3_For_46_Template, 2, 2, "option", 40, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "label");
    i0.ɵɵtext(48, "Ann\u00E9e ");
    i0.ɵɵelementStart(49, "select", 38);
    i0.ɵɵlistener("change", function ResourcesPageComponent_Conditional_3_Template_select_change_49_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setYear($event)); });
    i0.ɵɵelementStart(50, "option", 39);
    i0.ɵɵtext(51, "Toutes les ann\u00E9es");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(52, ResourcesPageComponent_Conditional_3_For_53_Template, 2, 2, "option", 40, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "label");
    i0.ɵɵtext(55, "Th\u00E9matique ");
    i0.ɵɵelementStart(56, "select", 38);
    i0.ɵɵlistener("change", function ResourcesPageComponent_Conditional_3_Template_select_change_56_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setTheme($event)); });
    i0.ɵɵelementStart(57, "option", 39);
    i0.ɵɵtext(58, "Toutes les th\u00E9matiques");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(59, ResourcesPageComponent_Conditional_3_For_60_Template, 2, 2, "option", 40, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "button", 41);
    i0.ɵɵlistener("click", function ResourcesPageComponent_Conditional_3_Template_button_click_61_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.resetFilters()); });
    i0.ɵɵtext(62, "R\u00E9initialiser");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(63, "section", 42)(64, "div", 43)(65, "div")(66, "p", 10);
    i0.ɵɵelement(67, "span", 11);
    i0.ɵɵtext(68, "Le fonds documentaire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "h2", 44);
    i0.ɵɵtext(70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "p", 45);
    i0.ɵɵtext(72, "D\u00E9couvrez les publications et documents de r\u00E9f\u00E9rence disponibles dans le cadre du projet.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "span", 46);
    i0.ɵɵtext(74);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(75, ResourcesPageComponent_Conditional_3_Conditional_75_Template, 3, 0, "div", 47)(76, ResourcesPageComponent_Conditional_3_Conditional_76_Template, 9, 0, "div", 48);
    i0.ɵɵelementStart(77, "p", 49);
    i0.ɵɵtext(78, "Contenus fictifs pr\u00E9sent\u00E9s \u00E0 titre de d\u00E9monstration.");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(24);
    i0.ɵɵproperty("value", ctx_r2.searchTerm);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("selected", ctx_r2.selectedCategory === "all");
    i0.ɵɵattribute("aria-pressed", ctx_r2.selectedCategory === "all");
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r2.categories);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("value", ctx_r2.selectedType);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.types);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.selectedYear);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.years);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r2.selectedTheme);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r2.themes);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r2.activeCategoryTitle);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r2.filteredResources.length, " ressource", ctx_r2.filteredResources.length === 1 ? "" : "s");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.filteredResources.length ? 75 : 76);
} }
export class ResourcesPageComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.categories = RESOURCE_CATEGORIES;
        this.types = RESOURCE_TYPES;
        this.years = RESOURCE_YEARS;
        this.themes = RESOURCE_THEMES;
        this.resources = RESOURCES;
        this.resourceId = this.route.snapshot.paramMap.get('id');
        this.selectedResource = this.resources.find((resource) => resource.id === this.resourceId);
        this.isUnknownResource = this.resourceId !== null && this.selectedResource === undefined;
        this.searchTerm = '';
        this.selectedCategory = 'publications';
        this.selectedType = 'all';
        this.selectedYear = 'all';
        this.selectedTheme = 'all';
    }
    get filteredResources() {
        return filterResources(this.resources, {
            category: this.selectedCategory,
            query: this.searchTerm,
            type: this.selectedType,
            year: this.selectedYear,
            theme: this.selectedTheme
        });
    }
    get activeCategoryTitle() {
        return this.selectedCategory === 'all'
            ? 'Toutes les ressources'
            : this.categories.find((category) => category.id === this.selectedCategory)?.title ?? 'Toutes les ressources';
    }
    setSearchTerm(event) {
        this.searchTerm = event.target.value;
    }
    setType(event) {
        this.selectedType = event.target.value;
    }
    setYear(event) {
        this.selectedYear = event.target.value;
    }
    setTheme(event) {
        this.selectedTheme = event.target.value;
    }
    selectCategory(category) {
        this.selectedCategory = category;
    }
    resetFilters() {
        this.searchTerm = '';
        this.selectedCategory = 'all';
        this.selectedType = 'all';
        this.selectedYear = 'all';
        this.selectedTheme = 'all';
    }
    trackResource(_index, resource) {
        return resource.id;
    }
    static { this.ɵfac = function ResourcesPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ResourcesPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResourcesPageComponent, selectors: [["app-resources-page"]], decls: 5, vars: 1, consts: [["activeSection", "resources"], [1, "resources-page", "detail-page"], [1, "resources-page"], [1, "container"], ["aria-label", "Fil d\u2019Ariane", 1, "breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], ["routerLink", "/ressources"], ["aria-current", "page"], ["aria-labelledby", "detail-title", 1, "detail-intro"], [1, "eyebrow"], [1, "eyebrow-line"], [1, "concept-note"], ["id", "detail-title"], [1, "detail-meta"], [1, "detail-description"], [1, "document-placeholder"], ["aria-hidden", "true", 1, "document-glyph"], ["routerLink", "/ressources", 1, "back-link"], ["aria-labelledby", "detail-title", 1, "detail-intro", "not-found"], ["aria-labelledby", "resources-title", 1, "resources-intro"], ["id", "resources-title"], ["aria-labelledby", "search-label", 1, "search-section"], ["id", "search-label", "for", "resource-search"], [1, "search-field"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["cx", "10.8", "cy", "10.8", "r", "6.5"], ["d", "m16 16 4.5 4.5"], ["id", "resource-search", "type", "search", "placeholder", "Rechercher par titre, mot-cl\u00E9...", "autocomplete", "off", 3, "input", "value"], ["aria-label", "Cat\u00E9gories de ressources", 1, "category-section"], ["aria-label", "Filtrer par cat\u00E9gorie", 1, "category-nav"], ["type", "button", 1, "category-option", "all-option", 3, "click"], [1, "category-number"], [1, "category-description"], ["type", "button", 1, "category-option", 3, "selected"], ["aria-labelledby", "filters-title", 1, "filter-section"], ["id", "filters-title"], [1, "filter-controls"], [3, "change", "value"], ["value", "all"], [3, "value"], ["type", "button", 1, "reset-inline", 3, "click"], ["aria-labelledby", "results-title", "aria-live", "polite", 1, "resource-results"], [1, "results-heading"], ["id", "results-title"], [1, "results-intro"], [1, "result-count"], [1, "resource-grid"], [1, "empty-state"], [1, "content-note"], ["type", "button", 1, "category-option", 3, "click"], [1, "resource-card"], [1, "document-cover"], [1, "document-type"], [1, "document-year"], ["aria-hidden", "true", 1, "document-lines"], ["aria-hidden", "true", 1, "document-fold"], [1, "resource-card-body"], [1, "card-meta"], [1, "concept-label"], [1, "resource-card-bottom"], [1, "file-meta"], [3, "routerLink"], ["aria-hidden", "true", 1, "empty-mark"], ["type", "button", 1, "reset-button", 3, "click"]], template: function ResourcesPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-site-header", 0);
            i0.ɵɵconditionalCreate(1, ResourcesPageComponent_Conditional_1_Template, 42, 7, "main", 1)(2, ResourcesPageComponent_Conditional_2_Template, 25, 0, "main", 1)(3, ResourcesPageComponent_Conditional_3_Template, 79, 11, "main", 2);
            i0.ɵɵelement(4, "app-site-footer");
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_0_0 = ctx.selectedResource) ? 1 : ctx.isUnknownResource ? 2 : 3, tmp_0_0);
        } }, dependencies: [CommonModule, RouterLink, SiteHeaderComponent, SiteFooterComponent], styles: ["[_nghost-%COMP%] { display: block; --navy: #123454; --blue: #1f567b; --ink: #182b3a; --muted: #667782; --paper: #f4f6f5; --line: #d9e0e1; --accent: #c5a46b; }\n.container[_ngcontent-%COMP%] { width: min(1200px, calc(100% - 96px)); margin-inline: auto; }\na[_ngcontent-%COMP%] { color: inherit; text-decoration: none; }\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { font: inherit; }\n[_ngcontent-%COMP%]:where(a, button, input, select):focus-visible { outline: 2px solid #a7834e; outline-offset: 3px; }\n.resources-page[_ngcontent-%COMP%] { padding: 29px 0 91px; background: #fff; }\n.breadcrumb[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #75838c; font-size: 11px; }\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { transition: color .2s; }.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: var(--blue); }.breadcrumb[_ngcontent-%COMP%]   [aria-current='page'][_ngcontent-%COMP%] { color: #344e5e; }\n.resources-intro[_ngcontent-%COMP%] { max-width: 850px; padding: 39px 0 43px; }\n.eyebrow[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 11px; margin: 0 0 17px; color: #547088; font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }\n.eyebrow-line[_ngcontent-%COMP%] { display: inline-block; width: 25px; height: 1px; background: var(--accent); }\n.resources-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .detail-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: 0; color: var(--navy); font: 500 clamp(48px, 5.2vw, 64px)/1.08 'Manrope', sans-serif; letter-spacing: -.055em; }\n.resources-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child { max-width: 770px; margin: 17px 0 0; color: #596d7a; font-size: 17px; line-height: 1.65; }\n.search-section[_ngcontent-%COMP%] { padding: 22px 28px 26px; border: 1px solid #d9e0e1; border-left: 2px solid var(--accent); background: #f4f6f5; }\n.search-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: block; margin-bottom: 11px; color: #334c5d; font-size: 12px; font-weight: 700; }\n.search-field[_ngcontent-%COMP%] { position: relative; }\n.search-field[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] { position: absolute; top: 50%; left: 15px; width: 20px; height: 20px; transform: translateY(-50%); fill: none; stroke: #69808e; stroke-width: 1.5; }\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; height: 51px; padding: 0 17px 0 48px; border: 1px solid #cfd9dc; border-radius: 0; background: #fff; color: var(--ink); font-size: 14px; }\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder { color: #8a969d; opacity: 1; }\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus { border-color: #7893a2; outline: 2px solid rgba(31,86,123,.14); outline-offset: 0; }\n.category-section[_ngcontent-%COMP%] { margin-top: 37px; }\n.category-nav[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }\n.category-option[_ngcontent-%COMP%] { position: relative; display: flex; min-height: 108px; flex-direction: column; align-items: flex-start; justify-content: center; gap: 5px; padding: 15px 17px; border: 0; border-right: 1px solid var(--line); border-radius: 0; background: transparent; color: var(--ink); text-align: left; cursor: pointer; transition: background .18s, color .18s; }\n.category-option[_ngcontent-%COMP%]:last-child { border-right: 0; }\n.category-option[_ngcontent-%COMP%]:hover, .category-option.selected[_ngcontent-%COMP%] { background: #f1f4f3; }\n.category-option.selected[_ngcontent-%COMP%]::before { position: absolute; top: -1px; right: 0; left: 0; height: 2px; background: var(--accent); content: ''; }\n.category-number[_ngcontent-%COMP%] { color: #9a7f50; font-size: 9px; font-weight: 700; letter-spacing: .12em; }\n.category-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--navy); font: 600 13px/1.35 'Manrope', sans-serif; }\n.category-description[_ngcontent-%COMP%] { color: #71808a; font-size: 10px; line-height: 1.4; }\n.filter-section[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 31px; padding: 21px 0 25px; border-bottom: 1px solid var(--line); }\n.filter-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { flex: 0 0 auto; margin: 0; color: #405867; font: 700 11px 'DM Sans', sans-serif; letter-spacing: .09em; text-transform: uppercase; }\n.filter-controls[_ngcontent-%COMP%] { display: grid; width: 100%; grid-template-columns: repeat(3, minmax(130px, 1fr)) auto; gap: 14px; align-items: end; }\n.filter-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 7px; color: #63747e; font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }\n.filter-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { width: 100%; height: 40px; padding: 0 32px 0 11px; border: 1px solid #d4dddf; border-radius: 0; background: #fff; color: #334b5c; font-size: 12px; font-weight: 400; letter-spacing: 0; text-transform: none; cursor: pointer; }\n.reset-inline[_ngcontent-%COMP%] { height: 40px; padding: 0 7px; border: 0; background: transparent; color: var(--blue); font-size: 11px; text-decoration: underline; text-decoration-color: #b6c3c9; text-underline-offset: 4px; cursor: pointer; }\n.reset-inline[_ngcontent-%COMP%]:hover { color: #8c7043; text-decoration-color: var(--accent); }\n.resource-results[_ngcontent-%COMP%] { padding-top: 47px; }\n.results-heading[_ngcontent-%COMP%] { display: flex; align-items: flex-end; justify-content: space-between; gap: 25px; margin-bottom: 25px; }\n.results-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] { margin-bottom: 11px; }\n.results-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { margin: 0; color: var(--navy); font: 500 clamp(29px, 3vw, 38px)/1.2 'Manrope', sans-serif; letter-spacing: -.04em; }\n.results-intro[_ngcontent-%COMP%] { margin: 9px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6; }\n.result-count[_ngcontent-%COMP%] { flex: 0 0 auto; padding-bottom: 5px; color: #6e7e88; font-size: 11px; }\n.resource-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 19px; }\n.resource-card[_ngcontent-%COMP%] { display: flex; min-width: 0; min-height: 385px; flex-direction: column; border: 1px solid #d7dfe1; border-top: 2px solid #c5a46b; background: #fff; transition: border-color .2s, background .2s; }\n.resource-card[_ngcontent-%COMP%]:hover { border-color: #aabac1; background: #fdfefe; }\n.document-cover[_ngcontent-%COMP%] { position: relative; display: flex; height: 126px; flex: 0 0 126px; flex-direction: column; justify-content: space-between; padding: 17px 19px; overflow: hidden; border-bottom: 1px solid #e0e6e7; background: #f1f4f3; color: var(--navy); }\n.document-cover[_ngcontent-%COMP%]::before { position: absolute; right: 0; bottom: 0; width: 82px; height: 82px; border-top: 1px solid #d1dcdf; border-left: 1px solid #d1dcdf; background: rgba(255,255,255,.38); content: ''; }\n.document-type[_ngcontent-%COMP%] { position: relative; z-index: 1; color: #617782; font-size: 9px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }\n.document-year[_ngcontent-%COMP%] { position: relative; z-index: 1; color: #214865; font: 500 36px/1 'Manrope', sans-serif; letter-spacing: -.06em; }\n.document-lines[_ngcontent-%COMP%] { position: absolute; right: 21px; bottom: 22px; display: flex; width: 43px; flex-direction: column; gap: 7px; }\n.document-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { width: 100%; border-top: 1px solid #aebfc6; }.document-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) { width: 75%; }.document-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) { width: 88%; }\n.document-fold[_ngcontent-%COMP%] { position: absolute; top: 0; right: 0; width: 28px; height: 28px; background: linear-gradient(45deg, transparent 49%, #dbe3e5 50%); }\n.resource-card-body[_ngcontent-%COMP%] { display: flex; flex: 1; flex-direction: column; padding: 17px 19px 17px; }\n.card-meta[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #7d8991; font-size: 10px; }\n.concept-label[_ngcontent-%COMP%] { color: #987b4c; font-size: 8px; letter-spacing: .07em; text-transform: uppercase; }\n.resource-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 12px 0 8px; color: var(--navy); font: 600 19px/1.35 'Manrope', sans-serif; letter-spacing: -.025em; }\n.resource-card-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { margin: 0; color: #60717d; font-size: 12px; line-height: 1.65; }\n.resource-card-bottom[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: flex-start; gap: 13px; margin-top: auto; padding-top: 19px; }\n.file-meta[_ngcontent-%COMP%] { color: #7d8991; font-size: 10px; }\n.resource-card-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: 9px; color: var(--blue); font-size: 11px; font-weight: 700; text-decoration: underline; text-decoration-color: #c6d0d3; text-underline-offset: 5px; transition: color .18s, text-decoration-color .18s; }\n.resource-card-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: #8c7043; text-decoration-color: var(--accent); }\n.resource-card-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 15px; }\n.empty-state[_ngcontent-%COMP%] { display: flex; min-height: 260px; flex-direction: column; align-items: center; justify-content: center; padding: 30px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); text-align: center; }\n.empty-mark[_ngcontent-%COMP%] { color: var(--accent); font: 500 29px 'Manrope', sans-serif; }\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 13px 0 5px; color: var(--navy); font: 500 21px/1.35 'Manrope', sans-serif; }\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 430px; margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6; }\n.reset-button[_ngcontent-%COMP%] { margin-top: 18px; padding: 11px 15px; border: 1px solid #b6c4ca; border-radius: 0; background: #fff; color: var(--blue); font-size: 11px; font-weight: 700; cursor: pointer; }\n.reset-button[_ngcontent-%COMP%]:hover { border-color: var(--accent); color: #8c7043; }\n.content-note[_ngcontent-%COMP%] { margin: 22px 0 0; color: #829099; font-size: 10px; }\n.detail-page[_ngcontent-%COMP%] { min-height: 620px; }\n.detail-intro[_ngcontent-%COMP%] { position: relative; max-width: 800px; padding: 47px 0 72px; }\n.detail-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { max-width: 760px; font-size: clamp(38px, 4.5vw, 54px); }\n.concept-note[_ngcontent-%COMP%] { display: inline-block; margin: 0 0 16px; color: #987b4c; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }\n.detail-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 10px 20px; margin-top: 21px; color: #6c7d87; font-size: 11px; }\n.detail-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] { padding-left: 18px; border-left: 1px solid var(--line); }\n.detail-description[_ngcontent-%COMP%] { max-width: 620px; margin: 20px 0 28px; color: #566c79; font-size: 16px; line-height: 1.7; }\n.document-placeholder[_ngcontent-%COMP%] { display: flex; gap: 17px; align-items: flex-start; padding: 21px; border: 1px solid var(--line); border-left: 2px solid var(--accent); background: #f4f6f5; }\n.document-glyph[_ngcontent-%COMP%] { display: grid; width: 42px; height: 52px; flex: 0 0 42px; place-items: center; border: 1px solid #bccbd0; color: var(--blue); font: 500 20px 'Manrope', sans-serif; }\n.document-placeholder[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--navy); font: 600 14px 'Manrope', sans-serif; }\n.document-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.6; }\n.back-link[_ngcontent-%COMP%] { display: inline-flex; gap: 10px; align-items: center; margin-top: 25px; color: var(--blue); font-size: 12px; font-weight: 700; }\n.back-link[_ngcontent-%COMP%]:hover { color: #8c7043; }.back-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 16px; }\n.not-found[_ngcontent-%COMP%] { padding-top: 65px; }\n@media (max-width: 900px) {\n  .container[_ngcontent-%COMP%] { width: min(100% - 56px, 760px); }\n  .resources-page[_ngcontent-%COMP%] { padding-bottom: 72px; }\n  .resources-intro[_ngcontent-%COMP%] { padding: 31px 0 35px; }\n  .resources-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 56px; }\n  .resources-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child { font-size: 16px; }\n  .category-nav[_ngcontent-%COMP%] { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n  .category-option[_ngcontent-%COMP%]:nth-child(3) { border-right: 0; }\n  .category-option[_ngcontent-%COMP%]:nth-child(n+4) { border-top: 1px solid var(--line); }\n  .category-option[_ngcontent-%COMP%] { min-height: 98px; }\n  .filter-section[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; gap: 13px; }\n  .filter-controls[_ngcontent-%COMP%] { grid-template-columns: repeat(3, minmax(0, 1fr)) auto; }\n  .resource-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n@media (max-width: 640px) {\n  .container[_ngcontent-%COMP%] { width: calc(100% - 40px); }\n  .resources-page[_ngcontent-%COMP%] { padding: 22px 0 58px; }\n  .breadcrumb[_ngcontent-%COMP%] { gap: 8px; font-size: 10px; }\n  .resources-intro[_ngcontent-%COMP%] { padding: 29px 0 29px; }\n  .resources-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 46px; }\n  .resources-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-child { margin-top: 13px; font-size: 15px; line-height: 1.6; }\n  .eyebrow[_ngcontent-%COMP%] { margin-bottom: 14px; font-size: 9px; }\n  .search-section[_ngcontent-%COMP%] { padding: 18px 15px 19px; }\n  .search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { height: 48px; font-size: 13px; }\n  .category-section[_ngcontent-%COMP%] { margin-top: 27px; }\n  .category-nav[_ngcontent-%COMP%] { display: flex; gap: 0; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: thin; }\n  .category-option[_ngcontent-%COMP%] { min-width: 205px; min-height: 93px; flex: 0 0 205px; border-top: 0 !important; border-right: 1px solid var(--line); }\n  .category-option[_ngcontent-%COMP%]:last-child { border-right: 0; }\n  .filter-section[_ngcontent-%COMP%] { gap: 13px; padding: 19px 0 21px; }\n  .filter-controls[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 12px; }\n  .filter-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { gap: 6px; }\n  .filter-controls[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { height: 42px; }\n  .reset-inline[_ngcontent-%COMP%] { justify-self: start; }\n  .resource-results[_ngcontent-%COMP%] { padding-top: 34px; }\n  .results-heading[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; gap: 9px; margin-bottom: 18px; }\n  .results-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 30px; }\n  .results-intro[_ngcontent-%COMP%] { font-size: 12px; }\n  .resource-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 14px; }\n  .resource-card[_ngcontent-%COMP%] { min-height: 0; }\n  .document-cover[_ngcontent-%COMP%] { height: 112px; flex-basis: 112px; }\n  .document-year[_ngcontent-%COMP%] { font-size: 32px; }\n  .resource-card-body[_ngcontent-%COMP%] { min-height: 220px; padding: 16px; }\n  .resource-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 18px; }\n  .resource-card-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] { font-size: 12px; }\n  .empty-state[_ngcontent-%COMP%] { min-height: 240px; padding-inline: 12px; }\n  .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { font-size: 19px; }\n  .detail-page[_ngcontent-%COMP%] { min-height: 560px; }\n  .detail-intro[_ngcontent-%COMP%] { padding: 38px 0 53px; }\n  .detail-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 37px; }\n  .detail-description[_ngcontent-%COMP%] { font-size: 15px; }\n  .document-placeholder[_ngcontent-%COMP%] { padding: 16px; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourcesPageComponent, [{
        type: Component,
        args: [{ selector: 'app-resources-page', standalone: true, imports: [CommonModule, RouterLink, SiteHeaderComponent, SiteFooterComponent], template: "<app-site-header activeSection=\"resources\"></app-site-header>\n\n@if (selectedResource; as resource) {\n  <main class=\"resources-page detail-page\">\n    <div class=\"container\">\n      <nav class=\"breadcrumb\" aria-label=\"Fil d\u2019Ariane\">\n        <a routerLink=\"/\">Accueil</a><span aria-hidden=\"true\">/</span><a routerLink=\"/ressources\">Ressources</a><span aria-hidden=\"true\">/</span><span aria-current=\"page\">{{ resource.title }}</span>\n      </nav>\n      <section class=\"detail-intro\" aria-labelledby=\"detail-title\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Aper\u00E7u documentaire</p>\n        <span class=\"concept-note\">Ressource conceptuelle</span>\n        <h1 id=\"detail-title\">{{ resource.title }}</h1>\n        <div class=\"detail-meta\"><span>{{ resource.type }}</span><span>{{ resource.year }}</span><span>{{ resource.metadata }}</span></div>\n        <p class=\"detail-description\">{{ resource.description }}</p>\n        <div class=\"document-placeholder\"><span class=\"document-glyph\" aria-hidden=\"true\">{{ resource.type.slice(0, 1) }}</span><div><strong>Aper\u00E7u de d\u00E9monstration</strong><p>Cette ressource est un contenu fictif destin\u00E9 \u00E0 illustrer le futur centre documentaire. Aucun fichier t\u00E9l\u00E9chargeable n\u2019est associ\u00E9 \u00E0 cet aper\u00E7u.</p></div></div>\n        <a class=\"back-link\" routerLink=\"/ressources\"><span aria-hidden=\"true\">\u2190</span> Retour au centre documentaire</a>\n      </section>\n    </div>\n  </main>\n} @else if (isUnknownResource) {\n  <main class=\"resources-page detail-page\">\n    <div class=\"container\">\n      <nav class=\"breadcrumb\" aria-label=\"Fil d\u2019Ariane\"><a routerLink=\"/\">Accueil</a><span aria-hidden=\"true\">/</span><a routerLink=\"/ressources\">Ressources</a><span aria-hidden=\"true\">/</span><span aria-current=\"page\">Ressource</span></nav>\n      <section class=\"detail-intro not-found\" aria-labelledby=\"detail-title\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Centre documentaire</p>\n        <h1 id=\"detail-title\">Cette ressource n\u2019est pas disponible</h1>\n        <p class=\"detail-description\">Le lien demand\u00E9 ne correspond \u00E0 aucun contenu de d\u00E9monstration.</p>\n        <a class=\"back-link\" routerLink=\"/ressources\"><span aria-hidden=\"true\">\u2190</span> Retour aux ressources</a>\n      </section>\n    </div>\n  </main>\n} @else {\n  <main class=\"resources-page\">\n    <div class=\"container\">\n      <nav class=\"breadcrumb\" aria-label=\"Fil d\u2019Ariane\"><a routerLink=\"/\">Accueil</a><span aria-hidden=\"true\">/</span><span aria-current=\"page\">Ressources</span></nav>\n      <section class=\"resources-intro\" aria-labelledby=\"resources-title\">\n        <p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Centre documentaire</p>\n        <h1 id=\"resources-title\">Ressources</h1>\n        <p>Retrouvez les publications, guides, cadres normatifs, ressources de formation et sites de r\u00E9f\u00E9rence li\u00E9s \u00E0 MEDISAFE 2.</p>\n      </section>\n\n      <section class=\"search-section\" aria-labelledby=\"search-label\">\n        <label id=\"search-label\" for=\"resource-search\">Rechercher une ressource</label>\n        <div class=\"search-field\">\n          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"10.8\" cy=\"10.8\" r=\"6.5\"></circle><path d=\"m16 16 4.5 4.5\"></path></svg>\n          <input id=\"resource-search\" type=\"search\" placeholder=\"Rechercher par titre, mot-cl\u00E9...\" [value]=\"searchTerm\" (input)=\"setSearchTerm($event)\" autocomplete=\"off\">\n        </div>\n      </section>\n\n      <section class=\"category-section\" aria-label=\"Cat\u00E9gories de ressources\">\n        <nav class=\"category-nav\" aria-label=\"Filtrer par cat\u00E9gorie\">\n          <button type=\"button\" class=\"category-option all-option\" [class.selected]=\"selectedCategory === 'all'\" [attr.aria-pressed]=\"selectedCategory === 'all'\" (click)=\"selectCategory('all')\">\n            <span class=\"category-number\">\u2014</span><strong>Toutes les ressources</strong><span class=\"category-description\">Voir le fonds documentaire</span>\n          </button>\n          @for (category of categories; track category.id) {\n            <button type=\"button\" class=\"category-option\" [class.selected]=\"selectedCategory === category.id\" [attr.aria-pressed]=\"selectedCategory === category.id\" (click)=\"selectCategory(category.id)\">\n              <span class=\"category-number\">{{ category.number }}</span><strong>{{ category.title }}</strong><span class=\"category-description\">{{ category.description }}</span>\n            </button>\n          }\n        </nav>\n      </section>\n\n      <section class=\"filter-section\" aria-labelledby=\"filters-title\">\n        <h2 id=\"filters-title\">Filtrer par</h2>\n        <div class=\"filter-controls\">\n          <label>Type\n            <select [value]=\"selectedType\" (change)=\"setType($event)\">\n              <option value=\"all\">Tous les types</option>\n              @for (type of types; track type) { <option [value]=\"type\">{{ type }}</option> }\n            </select>\n          </label>\n          <label>Ann\u00E9e\n            <select [value]=\"selectedYear\" (change)=\"setYear($event)\">\n              <option value=\"all\">Toutes les ann\u00E9es</option>\n              @for (year of years; track year) { <option [value]=\"year\">{{ year }}</option> }\n            </select>\n          </label>\n          <label>Th\u00E9matique\n            <select [value]=\"selectedTheme\" (change)=\"setTheme($event)\">\n              <option value=\"all\">Toutes les th\u00E9matiques</option>\n              @for (theme of themes; track theme) { <option [value]=\"theme\">{{ theme }}</option> }\n            </select>\n          </label>\n          <button class=\"reset-inline\" type=\"button\" (click)=\"resetFilters()\">R\u00E9initialiser</button>\n        </div>\n      </section>\n\n      <section class=\"resource-results\" aria-labelledby=\"results-title\" aria-live=\"polite\">\n        <div class=\"results-heading\">\n          <div><p class=\"eyebrow\"><span class=\"eyebrow-line\"></span>Le fonds documentaire</p><h2 id=\"results-title\">{{ activeCategoryTitle }}</h2><p class=\"results-intro\">D\u00E9couvrez les publications et documents de r\u00E9f\u00E9rence disponibles dans le cadre du projet.</p></div>\n          <span class=\"result-count\">{{ filteredResources.length }} ressource{{ filteredResources.length === 1 ? '' : 's' }}</span>\n        </div>\n        @if (filteredResources.length) {\n          <div class=\"resource-grid\">\n            @for (resource of filteredResources; track trackResource($index, resource)) {\n              <article class=\"resource-card\">\n                <div class=\"document-cover\" [attr.data-type]=\"resource.type\">\n                  <span class=\"document-type\">{{ resource.type }}</span>\n                  <span class=\"document-year\">{{ resource.year }}</span>\n                  <span class=\"document-lines\" aria-hidden=\"true\"><i></i><i></i><i></i></span>\n                  <span class=\"document-fold\" aria-hidden=\"true\"></span>\n                </div>\n                <div class=\"resource-card-body\">\n                  <div class=\"card-meta\"><span>{{ resource.year }}</span><span class=\"concept-label\">Exemple conceptuel</span></div>\n                  <h3>{{ resource.title }}</h3>\n                  <p>{{ resource.description }}</p>\n                  <div class=\"resource-card-bottom\"><span class=\"file-meta\">{{ resource.metadata }}</span><a [routerLink]=\"['/ressources', resource.id]\">Consulter la ressource <span aria-hidden=\"true\">\u2192</span></a></div>\n                </div>\n              </article>\n            }\n          </div>\n        } @else {\n          <div class=\"empty-state\">\n            <span class=\"empty-mark\" aria-hidden=\"true\">\u2014</span>\n            <h3>Aucune ressource ne correspond \u00E0 votre recherche.</h3>\n            <p>Modifiez vos crit\u00E8res ou r\u00E9initialisez les filtres pour afficher le fonds documentaire.</p>\n            <button class=\"reset-button\" type=\"button\" (click)=\"resetFilters()\">R\u00E9initialiser les filtres</button>\n          </div>\n        }\n        <p class=\"content-note\">Contenus fictifs pr\u00E9sent\u00E9s \u00E0 titre de d\u00E9monstration.</p>\n      </section>\n    </div>\n  </main>\n}\n\n<app-site-footer></app-site-footer>\n", styles: [":host { display: block; --navy: #123454; --blue: #1f567b; --ink: #182b3a; --muted: #667782; --paper: #f4f6f5; --line: #d9e0e1; --accent: #c5a46b; }\n.container { width: min(1200px, calc(100% - 96px)); margin-inline: auto; }\na { color: inherit; text-decoration: none; }\nbutton, input, select { font: inherit; }\n:where(a, button, input, select):focus-visible { outline: 2px solid #a7834e; outline-offset: 3px; }\n.resources-page { padding: 29px 0 91px; background: #fff; }\n.breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; color: #75838c; font-size: 11px; }\n.breadcrumb a { transition: color .2s; }.breadcrumb a:hover { color: var(--blue); }.breadcrumb [aria-current='page'] { color: #344e5e; }\n.resources-intro { max-width: 850px; padding: 39px 0 43px; }\n.eyebrow { display: flex; align-items: center; gap: 11px; margin: 0 0 17px; color: #547088; font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; }\n.eyebrow-line { display: inline-block; width: 25px; height: 1px; background: var(--accent); }\n.resources-intro h1, .detail-intro h1 { margin: 0; color: var(--navy); font: 500 clamp(48px, 5.2vw, 64px)/1.08 'Manrope', sans-serif; letter-spacing: -.055em; }\n.resources-intro > p:last-child { max-width: 770px; margin: 17px 0 0; color: #596d7a; font-size: 17px; line-height: 1.65; }\n.search-section { padding: 22px 28px 26px; border: 1px solid #d9e0e1; border-left: 2px solid var(--accent); background: #f4f6f5; }\n.search-section label { display: block; margin-bottom: 11px; color: #334c5d; font-size: 12px; font-weight: 700; }\n.search-field { position: relative; }\n.search-field svg { position: absolute; top: 50%; left: 15px; width: 20px; height: 20px; transform: translateY(-50%); fill: none; stroke: #69808e; stroke-width: 1.5; }\n.search-field input { width: 100%; height: 51px; padding: 0 17px 0 48px; border: 1px solid #cfd9dc; border-radius: 0; background: #fff; color: var(--ink); font-size: 14px; }\n.search-field input::placeholder { color: #8a969d; opacity: 1; }\n.search-field input:focus { border-color: #7893a2; outline: 2px solid rgba(31,86,123,.14); outline-offset: 0; }\n.category-section { margin-top: 37px; }\n.category-nav { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }\n.category-option { position: relative; display: flex; min-height: 108px; flex-direction: column; align-items: flex-start; justify-content: center; gap: 5px; padding: 15px 17px; border: 0; border-right: 1px solid var(--line); border-radius: 0; background: transparent; color: var(--ink); text-align: left; cursor: pointer; transition: background .18s, color .18s; }\n.category-option:last-child { border-right: 0; }\n.category-option:hover, .category-option.selected { background: #f1f4f3; }\n.category-option.selected::before { position: absolute; top: -1px; right: 0; left: 0; height: 2px; background: var(--accent); content: ''; }\n.category-number { color: #9a7f50; font-size: 9px; font-weight: 700; letter-spacing: .12em; }\n.category-option strong { color: var(--navy); font: 600 13px/1.35 'Manrope', sans-serif; }\n.category-description { color: #71808a; font-size: 10px; line-height: 1.4; }\n.filter-section { display: flex; align-items: center; gap: 31px; padding: 21px 0 25px; border-bottom: 1px solid var(--line); }\n.filter-section h2 { flex: 0 0 auto; margin: 0; color: #405867; font: 700 11px 'DM Sans', sans-serif; letter-spacing: .09em; text-transform: uppercase; }\n.filter-controls { display: grid; width: 100%; grid-template-columns: repeat(3, minmax(130px, 1fr)) auto; gap: 14px; align-items: end; }\n.filter-controls label { display: flex; flex-direction: column; gap: 7px; color: #63747e; font-size: 10px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }\n.filter-controls select { width: 100%; height: 40px; padding: 0 32px 0 11px; border: 1px solid #d4dddf; border-radius: 0; background: #fff; color: #334b5c; font-size: 12px; font-weight: 400; letter-spacing: 0; text-transform: none; cursor: pointer; }\n.reset-inline { height: 40px; padding: 0 7px; border: 0; background: transparent; color: var(--blue); font-size: 11px; text-decoration: underline; text-decoration-color: #b6c3c9; text-underline-offset: 4px; cursor: pointer; }\n.reset-inline:hover { color: #8c7043; text-decoration-color: var(--accent); }\n.resource-results { padding-top: 47px; }\n.results-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 25px; margin-bottom: 25px; }\n.results-heading .eyebrow { margin-bottom: 11px; }\n.results-heading h2 { margin: 0; color: var(--navy); font: 500 clamp(29px, 3vw, 38px)/1.2 'Manrope', sans-serif; letter-spacing: -.04em; }\n.results-intro { margin: 9px 0 0; color: var(--muted); font-size: 13px; line-height: 1.6; }\n.result-count { flex: 0 0 auto; padding-bottom: 5px; color: #6e7e88; font-size: 11px; }\n.resource-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 19px; }\n.resource-card { display: flex; min-width: 0; min-height: 385px; flex-direction: column; border: 1px solid #d7dfe1; border-top: 2px solid #c5a46b; background: #fff; transition: border-color .2s, background .2s; }\n.resource-card:hover { border-color: #aabac1; background: #fdfefe; }\n.document-cover { position: relative; display: flex; height: 126px; flex: 0 0 126px; flex-direction: column; justify-content: space-between; padding: 17px 19px; overflow: hidden; border-bottom: 1px solid #e0e6e7; background: #f1f4f3; color: var(--navy); }\n.document-cover::before { position: absolute; right: 0; bottom: 0; width: 82px; height: 82px; border-top: 1px solid #d1dcdf; border-left: 1px solid #d1dcdf; background: rgba(255,255,255,.38); content: ''; }\n.document-type { position: relative; z-index: 1; color: #617782; font-size: 9px; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }\n.document-year { position: relative; z-index: 1; color: #214865; font: 500 36px/1 'Manrope', sans-serif; letter-spacing: -.06em; }\n.document-lines { position: absolute; right: 21px; bottom: 22px; display: flex; width: 43px; flex-direction: column; gap: 7px; }\n.document-lines i { width: 100%; border-top: 1px solid #aebfc6; }.document-lines i:nth-child(2) { width: 75%; }.document-lines i:nth-child(3) { width: 88%; }\n.document-fold { position: absolute; top: 0; right: 0; width: 28px; height: 28px; background: linear-gradient(45deg, transparent 49%, #dbe3e5 50%); }\n.resource-card-body { display: flex; flex: 1; flex-direction: column; padding: 17px 19px 17px; }\n.card-meta { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #7d8991; font-size: 10px; }\n.concept-label { color: #987b4c; font-size: 8px; letter-spacing: .07em; text-transform: uppercase; }\n.resource-card h3 { margin: 12px 0 8px; color: var(--navy); font: 600 19px/1.35 'Manrope', sans-serif; letter-spacing: -.025em; }\n.resource-card-body > p { margin: 0; color: #60717d; font-size: 12px; line-height: 1.65; }\n.resource-card-bottom { display: flex; flex-direction: column; align-items: flex-start; gap: 13px; margin-top: auto; padding-top: 19px; }\n.file-meta { color: #7d8991; font-size: 10px; }\n.resource-card-bottom a { display: inline-flex; align-items: center; gap: 9px; color: var(--blue); font-size: 11px; font-weight: 700; text-decoration: underline; text-decoration-color: #c6d0d3; text-underline-offset: 5px; transition: color .18s, text-decoration-color .18s; }\n.resource-card-bottom a:hover { color: #8c7043; text-decoration-color: var(--accent); }\n.resource-card-bottom a span { font-size: 15px; }\n.empty-state { display: flex; min-height: 260px; flex-direction: column; align-items: center; justify-content: center; padding: 30px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); text-align: center; }\n.empty-mark { color: var(--accent); font: 500 29px 'Manrope', sans-serif; }\n.empty-state h3 { margin: 13px 0 5px; color: var(--navy); font: 500 21px/1.35 'Manrope', sans-serif; }\n.empty-state p { max-width: 430px; margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6; }\n.reset-button { margin-top: 18px; padding: 11px 15px; border: 1px solid #b6c4ca; border-radius: 0; background: #fff; color: var(--blue); font-size: 11px; font-weight: 700; cursor: pointer; }\n.reset-button:hover { border-color: var(--accent); color: #8c7043; }\n.content-note { margin: 22px 0 0; color: #829099; font-size: 10px; }\n.detail-page { min-height: 620px; }\n.detail-intro { position: relative; max-width: 800px; padding: 47px 0 72px; }\n.detail-intro h1 { max-width: 760px; font-size: clamp(38px, 4.5vw, 54px); }\n.concept-note { display: inline-block; margin: 0 0 16px; color: #987b4c; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }\n.detail-meta { display: flex; flex-wrap: wrap; gap: 10px 20px; margin-top: 21px; color: #6c7d87; font-size: 11px; }\n.detail-meta span + span { padding-left: 18px; border-left: 1px solid var(--line); }\n.detail-description { max-width: 620px; margin: 20px 0 28px; color: #566c79; font-size: 16px; line-height: 1.7; }\n.document-placeholder { display: flex; gap: 17px; align-items: flex-start; padding: 21px; border: 1px solid var(--line); border-left: 2px solid var(--accent); background: #f4f6f5; }\n.document-glyph { display: grid; width: 42px; height: 52px; flex: 0 0 42px; place-items: center; border: 1px solid #bccbd0; color: var(--blue); font: 500 20px 'Manrope', sans-serif; }\n.document-placeholder strong { color: var(--navy); font: 600 14px 'Manrope', sans-serif; }\n.document-placeholder p { margin: 6px 0 0; color: var(--muted); font-size: 12px; line-height: 1.6; }\n.back-link { display: inline-flex; gap: 10px; align-items: center; margin-top: 25px; color: var(--blue); font-size: 12px; font-weight: 700; }\n.back-link:hover { color: #8c7043; }.back-link span { font-size: 16px; }\n.not-found { padding-top: 65px; }\n@media (max-width: 900px) {\n  .container { width: min(100% - 56px, 760px); }\n  .resources-page { padding-bottom: 72px; }\n  .resources-intro { padding: 31px 0 35px; }\n  .resources-intro h1 { font-size: 56px; }\n  .resources-intro > p:last-child { font-size: 16px; }\n  .category-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n  .category-option:nth-child(3) { border-right: 0; }\n  .category-option:nth-child(n+4) { border-top: 1px solid var(--line); }\n  .category-option { min-height: 98px; }\n  .filter-section { align-items: flex-start; flex-direction: column; gap: 13px; }\n  .filter-controls { grid-template-columns: repeat(3, minmax(0, 1fr)) auto; }\n  .resource-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }\n}\n@media (max-width: 640px) {\n  .container { width: calc(100% - 40px); }\n  .resources-page { padding: 22px 0 58px; }\n  .breadcrumb { gap: 8px; font-size: 10px; }\n  .resources-intro { padding: 29px 0 29px; }\n  .resources-intro h1 { font-size: 46px; }\n  .resources-intro > p:last-child { margin-top: 13px; font-size: 15px; line-height: 1.6; }\n  .eyebrow { margin-bottom: 14px; font-size: 9px; }\n  .search-section { padding: 18px 15px 19px; }\n  .search-field input { height: 48px; font-size: 13px; }\n  .category-section { margin-top: 27px; }\n  .category-nav { display: flex; gap: 0; overflow-x: auto; overscroll-behavior-x: contain; scrollbar-width: thin; }\n  .category-option { min-width: 205px; min-height: 93px; flex: 0 0 205px; border-top: 0 !important; border-right: 1px solid var(--line); }\n  .category-option:last-child { border-right: 0; }\n  .filter-section { gap: 13px; padding: 19px 0 21px; }\n  .filter-controls { grid-template-columns: 1fr; gap: 12px; }\n  .filter-controls label { gap: 6px; }\n  .filter-controls select { height: 42px; }\n  .reset-inline { justify-self: start; }\n  .resource-results { padding-top: 34px; }\n  .results-heading { align-items: flex-start; flex-direction: column; gap: 9px; margin-bottom: 18px; }\n  .results-heading h2 { font-size: 30px; }\n  .results-intro { font-size: 12px; }\n  .resource-grid { grid-template-columns: 1fr; gap: 14px; }\n  .resource-card { min-height: 0; }\n  .document-cover { height: 112px; flex-basis: 112px; }\n  .document-year { font-size: 32px; }\n  .resource-card-body { min-height: 220px; padding: 16px; }\n  .resource-card h3 { font-size: 18px; }\n  .resource-card-body > p { font-size: 12px; }\n  .empty-state { min-height: 240px; padding-inline: 12px; }\n  .empty-state h3 { font-size: 19px; }\n  .detail-page { min-height: 560px; }\n  .detail-intro { padding: 38px 0 53px; }\n  .detail-intro h1 { font-size: 37px; }\n  .detail-description { font-size: 15px; }\n  .document-placeholder { padding: 16px; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResourcesPageComponent, { className: "ResourcesPageComponent", filePath: "src/app/resources-page.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=resources-page.component.js.map