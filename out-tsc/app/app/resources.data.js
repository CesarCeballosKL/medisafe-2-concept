function normalize(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr');
}
export function filterResources(resources, filters) {
    const term = normalize(filters.query.trim());
    return resources.filter((resource) => {
        const matchesCategory = filters.category === 'all' || resource.categoryIds.includes(filters.category);
        const matchesType = filters.type === 'all' || resource.type === filters.type;
        const matchesYear = filters.year === 'all' || resource.year === filters.year;
        const matchesTheme = filters.theme === 'all' || resource.themes.includes(filters.theme);
        const searchable = normalize([
            resource.title,
            resource.type,
            resource.description,
            resource.year,
            resource.metadata,
            ...resource.themes
        ].join(' '));
        return matchesCategory && matchesType && matchesYear && matchesTheme
            && (!term || searchable.includes(term));
    });
}
export const RESOURCE_CATEGORIES = [
    { id: 'publications', number: '01', title: 'Publications & guides', description: 'Rapports, guides et documents de référence' },
    { id: 'normatif', number: '02', title: 'Cadre normatif', description: 'Textes et repères réglementaires' },
    { id: 'formation', number: '03', title: 'Formation', description: 'Supports et ressources pédagogiques' },
    { id: 'sites', number: '04', title: 'Sites ressources', description: 'Ressources externes et partenaires documentaires' }
];
export const RESOURCE_TYPES = [
    'Rapport', 'Guide', 'Étude', 'Cadre normatif', 'Formation', 'Site ressource'
];
export const RESOURCE_YEARS = ['2026', '2025', '2024'];
export const RESOURCE_THEMES = [
    'Médicaments falsifiés',
    'Cadre réglementaire',
    'Chaîne d’approvisionnement',
    'Application de la loi',
    'Formation'
];
export const RESOURCES = [
    {
        id: 'etat-des-lieux-regional-securite-medicaments',
        categoryIds: ['publications'],
        type: 'Rapport',
        title: 'État des lieux régional sur la sécurité des médicaments',
        year: '2026',
        description: 'Analyse des principaux enjeux et leviers de coopération régionale.',
        metadata: 'PDF · Français',
        themes: ['Médicaments falsifiés', 'Chaîne d’approvisionnement']
    },
    {
        id: 'guide-acteurs-chaine-medicament',
        categoryIds: ['publications'],
        type: 'Guide',
        title: 'Guide pratique pour les acteurs de la chaîne du médicament',
        year: '2026',
        description: 'Repères et recommandations à destination des professionnels.',
        metadata: 'PDF · Français',
        themes: ['Chaîne d’approvisionnement']
    },
    {
        id: 'cooperation-regionale-medicaments-falsifies',
        categoryIds: ['publications'],
        type: 'Étude',
        title: 'Coopération régionale et lutte contre les médicaments falsifiés',
        year: '2025',
        description: 'Étude de référence sur les enjeux de coordination et de prévention.',
        metadata: 'PDF · Français',
        themes: ['Médicaments falsifiés', 'Application de la loi']
    },
    {
        id: 'capacites-acteurs-nationaux',
        categoryIds: ['publications'],
        type: 'Rapport',
        title: 'Renforcer les capacités des acteurs nationaux',
        year: '2026',
        description: 'Principales orientations et ressources pour les acteurs institutionnels.',
        metadata: 'PDF · Français',
        themes: ['Application de la loi', 'Cadre réglementaire']
    },
    {
        id: 'reperes-chaine-approvisionnement',
        categoryIds: ['publications'],
        type: 'Guide',
        title: 'Repères pour sécuriser la chaîne d’approvisionnement',
        year: '2025',
        description: 'Ressources pratiques pour les professionnels concernés.',
        metadata: 'PDF · Français',
        themes: ['Chaîne d’approvisionnement']
    },
    {
        id: 'references-reglementaires-instruments-regionaux',
        categoryIds: ['publications', 'normatif'],
        type: 'Cadre normatif',
        title: 'Références réglementaires et instruments régionaux',
        year: '2026',
        description: 'Textes et références utiles pour comprendre le cadre applicable.',
        metadata: 'Document · Français',
        themes: ['Cadre réglementaire']
    },
    {
        id: 'module-formation-securite-medicament',
        categoryIds: ['formation'],
        type: 'Formation',
        title: 'Module de formation sur la sécurité du médicament',
        year: '2025',
        description: 'Exemple de support pédagogique destiné aux professionnels concernés.',
        metadata: 'Support pédagogique · Français',
        themes: ['Formation', 'Chaîne d’approvisionnement']
    },
    {
        id: 'repertoire-sites-reference',
        categoryIds: ['sites'],
        type: 'Site ressource',
        title: 'Répertoire des sites de référence',
        year: '2024',
        description: 'Exemple d’espace consacré aux ressources externes et documentaires.',
        metadata: 'Lien externe · Français',
        themes: ['Médicaments falsifiés', 'Cadre réglementaire']
    }
];
//# sourceMappingURL=resources.data.js.map