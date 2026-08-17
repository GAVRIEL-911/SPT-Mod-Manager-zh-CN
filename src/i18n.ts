export type Lang = "pt-BR" | "en" | "zh-CN";

type Dict = Record<string, string>;

/**
 * Textos estáticos da UI (botões, rótulos, cabeçalhos, tooltips, placeholders).
 * Chave em dot-notation por seção, pra facilitar achar/organizar.
 * Use {var} dentro do texto pra interpolar valores via t(key, { var: valor }).
 * 已添加简体中文 (zh-CN) 支持。
 */
const pt: Dict = {

  "toast.instanceConfigured": "Instância configurada.",
  "toast.folderSelectFailed": "Não foi possível selecionar a pasta.",
  "toast.sourceFailed": "Não consegui falar com essa fonte. Continuo na anterior.",
  "toast.dropInvalidFile": "Solte um arquivo .zip, .7z ou .rar pra instalar.",
  "toast.confirmRemove": 'Remover "{name}" permanentemente?',
  "toast.selectUpdatedFile": "Selecione o arquivo atualizado do mod (.zip / .7z / .rar)...",
  "toast.noConflictsFound": "Nenhum conflito óbvio encontrado.",
  "toast.conflictsFound": "{count} possível(is) conflito(s) encontrado(s).",
  "toast.enterSptVersion": "Informe a versão do SPT antes de verificar.",
  "toast.forgeUpdateCheckFailed": "Falha ao verificar atualizações.",
  "toast.forgeAllUpToDate": "Tudo atualizado (ou não encontrado no Forge).",
  "toast.forgeUpdatesAvailable": "{count} atualização(ões) disponível(is).",
  "toast.forgeSearchFailed": "Falha ao buscar mods na Forge.",
  "toast.confirmRemoveBulk": "Remover {count} mod(s) permanentemente?",
  "toast.bulkProcessed": "{done}/{total} mod(s) processado(s).",

  "empty.selectFolder": "Selecione a pasta da sua instância SPT pra começar.",
  "empty.selectFolderButton": "Selecionar pasta da instância",
  "empty.downloadModsButton": "Baixar mods (sp-mod.com)",
  "dropOverlay.text": "Solte o(s) arquivo(s) .zip / .7z / .rar aqui pra instalar",

  "header.browseForge": "Buscar mods (Forge)",
  "header.browseForgeTitle": "Buscar e instalar mods direto do catálogo da Forge",
  "header.openHub": "Baixar mods",
  "header.openHubTitle": "Abrir sp-mod.com no navegador",
  "header.changeInstance": "Trocar instância",
  "header.changeInstanceTitle": "Selecionar outra instância SPT",
  "header.installButton": "Instalar mod (.zip / .7z / .rar)",
  "header.installButtonTitle": "Escolher um .zip, .7z ou .rar pra instalar",
  "header.installing": "Instalando...",
  "header.splitInstance": "Client: {client}  •  Server: {server}",

  "summary.total": "mod(s) instalado(s)",
  "summary.active": "Ativos:",
  "summary.disabled": "Desativados:",
  "summary.versionTooltip":
    "Lido de SPT_Data/Server/configs/core.json — a partir do SPT 4.0 esse arquivo só guarda a versão compatível do jogo, não a versão do SPT em si",
  "summary.validInstance": "Instância válida",
  "summary.validInstanceTitle": "A pasta selecionada passou na validação de instância SPT",

  "filters.searchPlaceholder": "Pesquisar mod pelo nome...",
  "filters.statusFilterTitle": "Filtrar por status",
  "filters.statusAll": "Ativos e desativados",
  "filters.statusEnabled": "Só ativos",
  "filters.statusDisabled": "Só desativados",
  "filters.originFilterTitle": "Filtrar por origem",
  "filters.originAll": "Qualquer origem",
  "filters.originManual": "Instalados manualmente",
  "filters.originManager": "Instalados pelo Manager",
  "filters.sortFieldTitle": "Ordenar por",
  "filters.sortByName": "Ordenar por Nome",
  "filters.sortByStatus": "Ordenar por Status",
  "filters.sortByOrigin": "Ordenar por Origem",
  "filters.sortByInstalledAt": "Ordenar por Data de instalação",
  "filters.sortByForge": "Ordenar por Status na Forge",
  "filters.sortDirectionTitle": "Inverter direção da ordenação",
  "filters.sortAsc": "↑ Crescente",
  "filters.sortDesc": "↓ Decrescente",
  "filters.sortAZ": "↑ A-Z",
  "filters.sortZA": "↓ Z-A",
  "filters.sortOldestFirst": "↑ Mais antigos primeiro",
  "filters.sortNewestFirst": "↓ Mais recentes primeiro",
  "filters.selectAllVisible": "Selecionar todos (visíveis)",
  "filters.selectAllVisibleTitle": "Selecionar todos os mods visíveis com os filtros atuais",
  "filters.clearSelection": "Limpar seleção",
  "filters.exportList": "Exportar lista",
  "filters.exportListTitle": "Salvar a lista atual de mods num arquivo JSON",
  "filters.importCompare": "Importar / Comparar",
  "filters.importCompareTitle": "Comparar a instância atual com uma lista exportada antes",
  "filters.checkConflicts": "Verificar conflitos",
  "filters.checkingConflicts": "Verificando...",
  "filters.checkConflictsTitle": "Procura DLLs duplicadas entre client mods e nomes duplicados entre server mods",
  "filters.sptVersionTitle": "Versão do SPT usada na checagem de atualizações da Forge — a lista vem direto da Forge",
  "filters.sptVersionPlaceholder": "selecione a versão do SPT...",
  "filters.sptVersionNotListed": "(não listada na Forge)",
  "filters.forgeCheckTitle": "Consulta a API pública da Forge (sp-mod.com) por atualizações dos mods instalados",
  "filters.forgeChecking": "Consultando Forge...",
  "filters.forgeCheckingProgress": "Consultando Forge... ({done}/{total})",
  "filters.forgeCheckButton": "Verificar atualizações (Forge)",

  "hint.forgeLastChecked": "Última verificação da Forge: {date}",

  "compare.title": "Comparação com a lista importada",
  "compare.identical": "As duas listas são idênticas.",
  "compare.missing": "Faltando aqui ({count}):",
  "compare.extra": "A mais aqui, fora da lista importada ({count}):",
  "compare.note":
    "Faltando aqui vira uma oferta de baixar automaticamente da Forge (por nome) — o que não for encontrado assim ainda precisa de instalação manual, já que o app não guarda os arquivos originais dos mods.",

  "conflicts.title": "Verificação de conflitos",
  "conflicts.appearsIn": "aparece em:",
  "conflicts.nameLabel": "Nome",
  "conflicts.sameModTwice": "O mesmo mod está instalado em duas pastas:",
  "conflicts.declaredInMultiple": "declarado em mais de uma pasta:",
  "conflicts.note": "Checagem no nível de arquivo — sinaliza sobreposição, não garante incompatibilidade de verdade.",

  "forge.checkTitle": "Verificação de atualizações (Forge)",
  "forge.updatesAvailable": "Atualizações disponíveis:",
  "forge.updateNow": "Atualizar",
  "forge.updating": "Atualizando...",
  "forge.blockedTitle": "Atualizações bloqueadas (quebrariam dependência):",
  "forge.incompatibleTitle": "Incompatíveis com essa versão do SPT:",
  "forge.infoOnlyTitle": "Sem versão local pra comparar (mostrando o que a Forge tem):",
  "forge.infoHasVersion": "Forge tem v{version}",
  "forge.allUpToDateDetailed": "Todos os mods identificados no Forge estão atualizados.",
  "forge.unmatchedPrefix": "Não encontrados no Forge (busca por nome):",
  "forge.skippedByBudget": "{count} mod(s) não foram consultados: o limite de requisições da Forge foi atingido. Rode a verificação de novo pra completar — o que já foi resolvido fica em cache e não é consultado outra vez.",
  "forge.matchNote":
    "Casamento com o catálogo da Forge é por nome — pode não achar mods com nome muito genérico ou que não estão listados lá.",

  "bulk.selectedCount": "{count} selecionado(s)",
  "bulk.enable": "Habilitar",
  "bulk.disable": "Desabilitar",
  "bulk.remove": "Remover",
  "bulk.cancelSelection": "Cancelar seleção",

  "noResults.text": "Nenhum mod bate com os filtros/busca atuais.",
  "noResults.clearFilters": "Limpar filtros",

  "common.close": "Fechar",

  "browse.title": "Buscar mods no Forge",
  "browse.searchPlaceholder": "Pesquisar por nome, slug ou descrição...",
  "browse.categoryFilterTitle": "Filtrar por categoria",
  "browse.allCategories": "Todas as categorias",
  "browse.sourceTitle": "De qual site buscar e baixar mods",
  "browse.sourceNote": "A fonte escolhida também é usada na checagem de atualizações.",
  "browse.installed": "Instalado",
  "browse.installedWithVersion": "Instalado v{version}",
  "browse.installedTitle": "Este mod já está na sua instância",
  "browse.reinstallButton": "Reinstalar",
  "browse.compatibleOnlyTitle": "Usa a versão do SPT selecionada nos filtros principais",
  "browse.compatibleOnlyLabel": "Só compatíveis com {version}",
  "browse.selectVersionPlaceholder": "(selecione a versão do SPT)",
  "browse.searching": "Buscando...",
  "browse.searchButton": "Buscar",
  "browse.noResults": "Nenhum mod encontrado com esses filtros.",
  "browse.viewOnForgeTitle": "Ver no Forge (abre no navegador)",
  "browse.fikaCompatibleTitle": "Tem versão compatível com Fika",
  "browse.byAuthor": "por {author}",
  "browse.downloadsLabel": "downloads",
  "browse.chooseVersionTitle": "Escolher a versão a instalar",
  "browse.installing": "Instalando...",
  "browse.installButton": "Instalar",
  "browse.noVersionPublished": '"{name}" não tem nenhuma versão publicada pra instalar.',
  "browse.noVersionPublishedShort": "Sem versão publicada",
  "browse.prevPage": "← Anterior",
  "browse.pageOf": "Página {page} de {lastPage}",
  "browse.nextPage": "Próxima →",
  "browse.installNote":
    'A instalação baixa o arquivo direto da Forge e usa o mesmo instalador do botão "Instalar mod" — inclusive a detecção de client/server mod e o registro no Manager.',

  "confirm.title": "Estrutura de arquivo incomum",
  "confirm.descriptionPrefix": "Não encontrei nenhuma DLL,",
  "confirm.descriptionMid": "ou pasta",
  "confirm.descriptionSuffix":
    "reconhecível nesse arquivo. Isso pode ser um mod empacotado de um jeito diferente do normal, ou o arquivo errado. Isto é o que tem na raiz do arquivo:",
  "confirm.emptyArchive": "(arquivo vazio)",
  "confirm.explanation":
    'Se você reconhece isso como um mod válido, "Continuar" copia tudo que está listado acima direto pra raiz da sua instância SPT (do mesmo jeito que os mods reconhecidos automaticamente), e registra como um item que dá pra remover depois. Se você não reconhece, é mais seguro abortar.',
  "confirm.abort": "Abortar",
  "confirm.proceed": "Continuar mesmo assim",

  "modlist.emptyCategory": "Nenhum mod nessa categoria.",
  "modlist.checkboxTitle": "Clique para selecionar, Shift+Clique para selecionar um intervalo",
  "modlist.renameTitle": "{name} (duplo-clique pra renomear)",
  "modlist.statusActive": "Ativo",
  "modlist.statusDisabled": "Desativado",
  "modlist.forgeUpdateAvailableTitle": "Nova versão disponível na Forge",
  "modlist.forgeUpdateAvailable": "Forge: v{version} disponível",
  "modlist.forgeBlockedTitle": "Tem atualização na Forge, mas instalar quebraria a dependência de outro mod",
  "modlist.forgeBlocked": "Forge: atualização bloqueada",
  "modlist.forgeIncompatibleTitle":
    "A versão instalada não é compatível com a versão do SPT informada na última checagem",
  "modlist.forgeIncompatible": "Forge: incompatível",
  "modlist.forgeInfoTitle":
    "Sem versão local legível pra comparar (mod sem package.json, ex: mods .dll) — essa é a versão mais recente conhecida na Forge",
  "modlist.forgeInfo": "Forge: v{version}",
  "modlist.orphanTitle": "Arquivos soltos rastreados por manifesto (sem pasta própria) — só dá pra remover",
  "modlist.orphan": "Órfão",
  "modlist.sptIncompatible": "SPT incompatível",
  "modlist.sptIncompatibleTitle": "O próprio mod declara suportar SPT {declared}, que não bate com a versão selecionada. Lido da DLL do mod, sem consultar a internet.",
  "modlist.packagePart": "Pacote de {count} partes",
  "modlist.packagePartFiltered": "{shown} de {count} partes",
  "modlist.expandParts": "Mostrar as partes deste mod",
  "modlist.collapseParts": "Esconder as partes deste mod",
  "typeFilter.all": "Todos",
  "typeFilter.server": "Server",
  "typeFilter.client": "Client",
  "typeFilter.hybrid": "Híbrido",
  "typeFilter.unknown": "Desconhecido",
  "modlist.packageTooltip": "Este mod vem em partes que funcionam juntas. Habilitar ou desabilitar uma alterna todas. Outras partes: {others}",
  "modlist.packageTooltipInferred": "Detectado automaticamente como partes do mesmo mod (mesmo nome de pasta dos dois lados). Habilitar ou desabilitar uma alterna todas. Outras partes: {others}",
  "modlist.actionsTitle": "Ações",
  "modlist.openFolder": "Abrir pasta",
  "modlist.rename": "Renomear",
  "modlist.reinstall": "Reinstalar",

  "queue.waiting": "Na fila...",
  "queue.installing": "Instalando...",
  "queue.done": "Concluído",
  "queue.failed": "Falhou",
  "queue.noFilePath": "Caminho do arquivo não disponível.",

  "restore.confirmDownload": "Encontrei {count} mod(s) faltando na lista importada. Baixar automaticamente da Forge?",
  "restore.allInstalled": "{count} mod(s) instalado(s) com sucesso.",
  "restore.partialInstalled": "{installed} instalado(s); não encontrado(s) ou falhou(aram) na Forge: {notFound}",
  "restore.confirmDisable": "{count} mod(s) instalado(s) não estão na lista importada. Desativar esses mods?",
  "restore.disabledCount": "{count} mod(s) desativado(s).",
  "restore.lookingUp": "Procurando os mods na Forge...",
  "restore.lookingUpCount": "Procurando na Forge... ({done}/{total})",
  "restore.installingProgress": "Instalando mods... ({done}/{total})",
  "restore.andMore": " e mais {count}",

  "update.available": "Nova versão do Mod Manager disponível: v{latest} (você está na v{current}).",
  "update.download": "Baixar na Forge",
  "update.viewChangelog": "Changelog",
  "update.dismiss": "Agora não"
};

const en: Dict = {
  "toast.instanceConfigured": "Instance configured.",
  "toast.folderSelectFailed": "Couldn't select the folder.",
  "toast.sourceFailed": "Couldn't reach that source. Staying on the previous one.",
  "toast.dropInvalidFile": "Drop a .zip, .7z, or .rar file to install.",
  "toast.confirmRemove": 'Permanently remove "{name}"?',
  "toast.selectUpdatedFile": "Select the mod's updated file (.zip / .7z / .rar)...",
  "toast.noConflictsFound": "No obvious conflicts found.",
  "toast.conflictsFound": "{count} possible conflict(s) found.",
  "toast.enterSptVersion": "Enter the SPT version before checking.",
  "toast.forgeUpdateCheckFailed": "Failed to check for updates.",
  "toast.forgeAllUpToDate": "Everything up to date (or not found on Forge).",
  "toast.forgeUpdatesAvailable": "{count} update(s) available.",
  "toast.forgeSearchFailed": "Failed to search mods on Forge.",
  "toast.confirmRemoveBulk": "Permanently remove {count} mod(s)?",
  "toast.bulkProcessed": "{done}/{total} mod(s) processed.",

  "empty.selectFolder": "Select your SPT instance folder to get started.",
  "empty.selectFolderButton": "Select instance folder",
  "empty.downloadModsButton": "Download mods (sp-mod.com)",
  "dropOverlay.text": "Drop the .zip / .7z / .rar file(s) here to install",

  "header.browseForge": "Browse mods (Forge)",
  "header.browseForgeTitle": "Search and install mods straight from Forge's catalogue",
  "header.openHub": "Download mods",
  "header.openHubTitle": "Open sp-mod.com in the browser",
  "header.changeInstance": "Change instance",
  "header.changeInstanceTitle": "Select a different SPT instance",
  "header.installButton": "Install mod (.zip / .7z / .rar)",
  "header.installButtonTitle": "Choose a .zip, .7z, or .rar to install",
  "header.installing": "Installing...",
  "header.splitInstance": "Client: {client}  •  Server: {server}",

  "summary.total": "mod(s) installed",
  "summary.active": "Active:",
  "summary.disabled": "Disabled:",
  "summary.versionTooltip":
    "Read from SPT_Data/Server/configs/core.json — starting with SPT 4.0 this file only stores the compatible game version, not the SPT version itself",
  "summary.validInstance": "Valid instance",
  "summary.validInstanceTitle": "The selected folder passed SPT instance validation",

  "filters.searchPlaceholder": "Search mod by name...",
  "filters.statusFilterTitle": "Filter by status",
  "filters.statusAll": "Active and disabled",
  "filters.statusEnabled": "Active only",
  "filters.statusDisabled": "Disabled only",
  "filters.originFilterTitle": "Filter by origin",
  "filters.originAll": "Any origin",
  "filters.originManual": "Installed manually",
  "filters.originManager": "Installed by the Manager",
  "filters.sortFieldTitle": "Sort by",
  "filters.sortByName": "Sort by Name",
  "filters.sortByStatus": "Sort by Status",
  "filters.sortByOrigin": "Sort by Origin",
  "filters.sortByInstalledAt": "Sort by Install date",
  "filters.sortByForge": "Sort by Forge status",
  "filters.sortDirectionTitle": "Reverse sort direction",
  "filters.sortAsc": "↑ Ascending",
  "filters.sortDesc": "↓ Descending",
  "filters.sortAZ": "↑ A-Z",
  "filters.sortZA": "↓ Z-A",
  "filters.sortOldestFirst": "↑ Oldest first",
  "filters.sortNewestFirst": "↓ Newest first",
  "filters.selectAllVisible": "Select all (visible)",
  "filters.selectAllVisibleTitle": "Select every mod visible with the current filters",
  "filters.clearSelection": "Clear selection",
  "filters.exportList": "Export list",
  "filters.exportListTitle": "Save the current mod list to a JSON file",
  "filters.importCompare": "Import / Compare",
  "filters.importCompareTitle": "Compare the current instance against a previously exported list",
  "filters.checkConflicts": "Check conflicts",
  "filters.checkingConflicts": "Checking...",
  "filters.checkConflictsTitle":
    "Looks for duplicate DLLs between client mods and duplicate names between server mods",
  "filters.sptVersionTitle": "SPT version used when checking for Forge updates — the list comes straight from Forge",
  "filters.sptVersionPlaceholder": "select the SPT version...",
  "filters.sptVersionNotListed": "(not listed on Forge)",
  "filters.forgeCheckTitle": "Queries Forge's public API (sp-mod.com) for updates to installed mods",
  "filters.forgeChecking": "Checking Forge...",
  "filters.forgeCheckingProgress": "Checking Forge... ({done}/{total})",
  "filters.forgeCheckButton": "Check for updates (Forge)",

  "hint.forgeLastChecked": "Last checked on Forge: {date}",

  "compare.title": "Comparison with imported list",
  "compare.identical": "Both lists are identical.",
  "compare.missing": "Missing here ({count}):",
  "compare.extra": "Extra here, not in the imported list ({count}):",
  "compare.note":
    "Anything missing here comes with an offer to download it automatically from Forge (matched by name) — whatever it can't find that way still needs a manual install, since the app doesn't keep the mods' original files.",

  "conflicts.title": "Conflict check",
  "conflicts.appearsIn": "appears in:",
  "conflicts.nameLabel": "Name",
  "conflicts.sameModTwice": "The same mod is installed in two folders:",
  "conflicts.declaredInMultiple": "declared in more than one folder:",
  "conflicts.note": "File-level check — it flags overlap, it doesn't guarantee an actual incompatibility.",

  "forge.checkTitle": "Update check (Forge)",
  "forge.updatesAvailable": "Updates available:",
  "forge.updateNow": "Update",
  "forge.updating": "Updating...",
  "forge.blockedTitle": "Blocked updates (would break a dependency):",
  "forge.incompatibleTitle": "Incompatible with this SPT version:",
  "forge.infoOnlyTitle": "No local version to compare (showing what Forge has):",
  "forge.infoHasVersion": "Forge has v{version}",
  "forge.allUpToDateDetailed": "Every mod identified on Forge is up to date.",
  "forge.unmatchedPrefix": "Not found on Forge (matched by name):",
  "forge.skippedByBudget": "{count} mod(s) weren't checked: Forge's request limit was reached. Run the check again to finish — whatever was already resolved is cached and won't be looked up again.",
  "forge.matchNote":
    "Matching against Forge's catalogue is done by name — it may not find mods with a very generic name, or ones not listed there.",

  "bulk.selectedCount": "{count} selected",
  "bulk.enable": "Enable",
  "bulk.disable": "Disable",
  "bulk.remove": "Remove",
  "bulk.cancelSelection": "Cancel selection",

  "noResults.text": "No mod matches the current filters/search.",
  "noResults.clearFilters": "Clear filters",

  "common.close": "Close",

  "browse.title": "Search Forge mods",
  "browse.searchPlaceholder": "Search by name, slug, or description...",
  "browse.categoryFilterTitle": "Filter by category",
  "browse.allCategories": "All categories",
  "browse.sourceTitle": "Which site to search and download mods from",
  "browse.sourceNote": "The selected source is also used when checking for updates.",
  "browse.installed": "Installed",
  "browse.installedWithVersion": "Installed v{version}",
  "browse.installedTitle": "This mod is already in your instance",
  "browse.reinstallButton": "Reinstall",
  "browse.compatibleOnlyTitle": "Uses the SPT version selected in the main filters",
  "browse.compatibleOnlyLabel": "Only compatible with {version}",
  "browse.selectVersionPlaceholder": "(select the SPT version)",
  "browse.searching": "Searching...",
  "browse.searchButton": "Search",
  "browse.noResults": "No mods found with these filters.",
  "browse.viewOnForgeTitle": "View on Forge (opens in browser)",
  "browse.fikaCompatibleTitle": "Has a Fika-compatible version",
  "browse.byAuthor": "by {author}",
  "browse.downloadsLabel": "downloads",
  "browse.chooseVersionTitle": "Choose the version to install",
  "browse.installing": "Installing...",
  "browse.installButton": "Install",
  "browse.noVersionPublished": '"{name}" has no published version to install.',
  "browse.noVersionPublishedShort": "No version published",
  "browse.prevPage": "← Previous",
  "browse.pageOf": "Page {page} of {lastPage}",
  "browse.nextPage": "Next →",
  "browse.installNote":
    'Installing downloads the file straight from Forge and runs it through the same installer as the "Install mod" button — including client/server mod detection and registering it with the Manager.',

  "confirm.title": "Unusual file structure",
  "confirm.descriptionPrefix": "I couldn't find any DLL,",
  "confirm.descriptionMid": "or a",
  "confirm.descriptionSuffix":
    "folder in this file. This could be a mod packaged in an unusual way, or the wrong file. Here's what's in the root of the file:",
  "confirm.emptyArchive": "(empty archive)",
  "confirm.explanation":
    'If you recognize this as a valid mod, "Continue anyway" copies everything listed above straight into your SPT instance root (the same way auto-detected mods are installed), and registers it as an item you can remove later. If you don\'t recognize it, aborting is safer.',
  "confirm.abort": "Abort",
  "confirm.proceed": "Continue anyway",

  "modlist.emptyCategory": "No mods in this category.",
  "modlist.checkboxTitle": "Click to select, Shift+Click to select a range",
  "modlist.renameTitle": "{name} (double-click to rename)",
  "modlist.statusActive": "Active",
  "modlist.statusDisabled": "Disabled",
  "modlist.forgeUpdateAvailableTitle": "New version available on Forge",
  "modlist.forgeUpdateAvailable": "Forge: v{version} available",
  "modlist.forgeBlockedTitle": "Has an update on Forge, but installing it would break another mod's dependency",
  "modlist.forgeBlocked": "Forge: update blocked",
  "modlist.forgeIncompatibleTitle":
    "The installed version isn't compatible with the SPT version entered in the last check",
  "modlist.forgeIncompatible": "Forge: incompatible",
  "modlist.forgeInfoTitle":
    "No readable local version to compare (mod without package.json, e.g. .dll-only mods) — this is the latest version known on Forge",
  "modlist.forgeInfo": "Forge: v{version}",
  "modlist.orphanTitle": "Loose files tracked by manifest (no folder of its own) — can only be removed",
  "modlist.orphan": "Orphan",
  "modlist.sptIncompatible": "SPT mismatch",
  "modlist.sptIncompatibleTitle": "The mod itself declares support for SPT {declared}, which doesn't match your selected version. Read from the mod's DLL, no internet needed.",
  "modlist.packagePart": "{count}-part package",
  "modlist.packagePartFiltered": "{shown} of {count} parts",
  "modlist.expandParts": "Show this mod's parts",
  "modlist.collapseParts": "Hide this mod's parts",
  "typeFilter.all": "All",
  "typeFilter.server": "Server",
  "typeFilter.client": "Client",
  "typeFilter.hybrid": "Hybrid",
  "typeFilter.unknown": "Unknown",
  "modlist.packageTooltip": "This mod comes in parts that work together. Enabling or disabling one switches them all. Other parts: {others}",
  "modlist.packageTooltipInferred": "Detected automatically as parts of the same mod (same folder name on both sides). Enabling or disabling one switches them all. Other parts: {others}",
  "modlist.actionsTitle": "Actions",
  "modlist.openFolder": "Open folder",
  "modlist.rename": "Rename",
  "modlist.reinstall": "Reinstall",

  "queue.waiting": "Waiting...",
  "queue.installing": "Installing...",
  "queue.done": "Done",
  "queue.failed": "Failed",
  "queue.noFilePath": "File path not available.",

  "restore.confirmDownload": "Found {count} missing mod(s) from the imported list. Download them automatically from Forge?",
  "restore.allInstalled": "{count} mod(s) installed successfully.",
  "restore.partialInstalled": "{installed} installed; not found or failed on Forge: {notFound}",
  "restore.confirmDisable": "{count} installed mod(s) aren't in the imported list. Disable those mods?",
  "restore.disabledCount": "{count} mod(s) disabled.",
  "restore.lookingUp": "Looking the mods up on Forge...",
  "restore.lookingUpCount": "Looking up on Forge... ({done}/{total})",
  "restore.installingProgress": "Installing mods... ({done}/{total})",
  "restore.andMore": " and {count} more",

  "update.available": "New Mod Manager version available: v{latest} (you're on v{current}).",
  "update.download": "Download on Forge",
  "update.viewChangelog": "Changelog",
  "update.dismiss": "Not now"
};

const zh: Dict = {
  "toast.instanceConfigured": "实例已配置。",
  "toast.folderSelectFailed": "无法选择文件夹。",
  "toast.sourceFailed": "无法连接该源，继续使用上一个。",
  "toast.dropInvalidFile": "请拖放 .zip、.7z 或 .rar 文件进行安装。",
  "toast.confirmRemove": '确定永久删除 "{name}"？',
  "toast.selectUpdatedFile": "请选择模组的更新文件（.zip / .7z / .rar）...",
  "toast.noConflictsFound": "未发现明显冲突。",
  "toast.conflictsFound": "发现 {count} 个可能的冲突。",
  "toast.enterSptVersion": "请先输入 SPT 版本再检查。",
  "toast.forgeUpdateCheckFailed": "检查更新失败。",
  "toast.forgeAllUpToDate": "全部已是最新（或未在 Forge 上找到）。",
  "toast.forgeUpdatesAvailable": "有 {count} 个可用更新。",
  "toast.forgeSearchFailed": "在 Forge 上搜索模组失败。",
  "toast.confirmRemoveBulk": "确定永久删除 {count} 个模组？",
  "toast.bulkProcessed": "已处理 {done}/{total} 个模组。",
  "empty.selectFolder": "请选择你的 SPT 实例文件夹以开始。",
  "empty.selectFolderButton": "选择实例文件夹",
  "empty.downloadModsButton": "下载模组（sp-mod.com）",
  "dropOverlay.text": "将 .zip / .7z / .rar 文件拖放到此处安装",
  "header.browseForge": "浏览模组（Forge）",
  "header.browseForgeTitle": "直接从 Forge 目录搜索并安装模组",
  "header.openHub": "下载模组",
  "header.openHubTitle": "在浏览器中打开 sp-mod.com",
  "header.changeInstance": "切换实例",
  "header.changeInstanceTitle": "选择另一个 SPT 实例",
  "header.installButton": "安装模组（.zip / .7z / .rar）",
  "header.installButtonTitle": "选择一个 .zip、.7z 或 .rar 进行安装",
  "header.installing": "正在安装...",
  "header.splitInstance": "客户端：{client}  •  服务端：{server}",
  "summary.total": "个已安装模组",
  "summary.active": "已启用：",
  "summary.disabled": "已禁用：",
  "summary.versionTooltip": "读取自 SPT_Data/Server/configs/core.json — 从 SPT 4.0 起，该文件只存储兼容的游戏版本，不再存储 SPT 版本本身",
  "summary.validInstance": "有效实例",
  "summary.validInstanceTitle": "所选文件夹已通过 SPT 实例验证",
  "filters.searchPlaceholder": "按名称搜索模组...",
  "filters.statusFilterTitle": "按状态筛选",
  "filters.statusAll": "已启用和已禁用",
  "filters.statusEnabled": "仅已启用",
  "filters.statusDisabled": "仅已禁用",
  "filters.originFilterTitle": "按来源筛选",
  "filters.originAll": "任意来源",
  "filters.originManual": "手动安装",
  "filters.originManager": "由管理器安装",
  "filters.sortFieldTitle": "排序方式",
  "filters.sortByName": "按名称排序",
  "filters.sortByStatus": "按状态排序",
  "filters.sortByOrigin": "按来源排序",
  "filters.sortByInstalledAt": "按安装日期排序",
  "filters.sortByForge": "按 Forge 状态排序",
  "filters.sortDirectionTitle": "反转排序方向",
  "filters.sortAsc": "↑ 升序",
  "filters.sortDesc": "↓ 降序",
  "filters.sortAZ": "↑ A-Z",
  "filters.sortZA": "↓ Z-A",
  "filters.sortOldestFirst": "↑ 最旧优先",
  "filters.sortNewestFirst": "↓ 最新优先",
  "filters.selectAllVisible": "全选（可见）",
  "filters.selectAllVisibleTitle": "选择当前筛选条件下所有可见模组",
  "filters.clearSelection": "清除选择",
  "filters.exportList": "导出列表",
  "filters.exportListTitle": "将当前模组列表保存为 JSON 文件",
  "filters.importCompare": "导入 / 比较",
  "filters.importCompareTitle": "将当前实例与之前导出的列表进行比较",
  "filters.checkConflicts": "检查冲突",
  "filters.checkingConflicts": "正在检查...",
  "filters.checkConflictsTitle": "检查客户端模组中重复的 DLL，以及服务端模组中重复的名称",
  "filters.sptVersionTitle": "用于 Forge 更新检查的 SPT 版本 — 列表直接来自 Forge",
  "filters.sptVersionPlaceholder": "选择 SPT 版本...",
  "filters.sptVersionNotListed": "（未在 Forge 中列出）",
  "filters.forgeCheckTitle": "查询 Forge 公共 API（sp-mod.com）以检查已安装模组的更新",
  "filters.forgeChecking": "正在查询 Forge...",
  "filters.forgeCheckingProgress": "正在查询 Forge...（{done}/{total}）",
  "filters.forgeCheckButton": "检查更新（Forge）",
  "hint.forgeLastChecked": "上次 Forge 检查：{date}",
  "compare.title": "与导入列表的比较",
  "compare.identical": "两个列表完全相同。",
  "compare.missing": "此处缺少（{count}）：",
  "compare.extra": "此处多余（不在导入列表中，{count}）：",
  "compare.note": "缺少的模组会提供从 Forge 按名称自动下载的选项 — 无法匹配的仍需手动安装，因为应用不会保留模组的原始文件。",
  "conflicts.title": "冲突检查",
  "conflicts.appearsIn": "出现在：",
  "conflicts.nameLabel": "名称：",
  "conflicts.sameModTwice": "同一模组出现两次",
  "conflicts.declaredInMultiple": "在多个文件夹中声明了相同名称",
  "conflicts.note": "重复的 DLL 名称可能在运行时导致冲突。服务端模组名称重复通常表示文件夹结构有问题。",
  "forge.checkTitle": "Forge 更新检查",
  "forge.updatesAvailable": "可用更新：",
  "forge.updateNow": "立即更新",
  "forge.updating": "正在更新...",
  "forge.blockedTitle": "被阻止的更新（会破坏依赖）：",
  "forge.incompatibleTitle": "与此 SPT 版本不兼容：",
  "forge.infoOnlyTitle": "无本地版本可比较（显示 Forge 上的版本）：",
  "forge.infoHasVersion": "Forge 有 v{version}",
  "forge.allUpToDateDetailed": "所有在 Forge 上匹配到的模组都是最新的。",
  "forge.unmatchedPrefix": "未在 Forge 上找到（按名称匹配）：",
  "forge.skippedByBudget": "{count} 个模组未检查：已达到 Forge 请求限制。请再次运行检查以完成 — 已解析的结果已缓存，不会再次查询。",
  "forge.matchNote": "与 Forge 目录的匹配是按名称进行的 — 名称过于通用或未在目录中列出的模组可能无法找到。",
  "bulk.selectedCount": "已选择 {count} 个",
  "bulk.enable": "启用",
  "bulk.disable": "禁用",
  "bulk.remove": "删除",
  "bulk.cancelSelection": "取消选择",
  "noResults.text": "没有符合当前筛选/搜索条件的模组。",
  "noResults.clearFilters": "清除筛选",
  "common.close": "关闭",
  "browse.title": "搜索 Forge 模组",
  "browse.searchPlaceholder": "按名称、slug 或描述搜索...",
  "browse.categoryFilterTitle": "按分类筛选",
  "browse.allCategories": "全部分类",
  "browse.sourceTitle": "用于搜索和下载模组的站点",
  "browse.sourceNote": "所选源也会用于检查更新。",
  "browse.installed": "已安装",
  "browse.installedWithVersion": "已安装 v{version}",
  "browse.installedTitle": "此模组已在你的实例中",
  "browse.reinstallButton": "重新安装",
  "browse.compatibleOnlyTitle": "使用主筛选器中选择的 SPT 版本",
  "browse.compatibleOnlyLabel": "仅兼容 {version}",
  "browse.selectVersionPlaceholder": "（选择 SPT 版本）",
  "browse.searching": "正在搜索...",
  "browse.searchButton": "搜索",
  "browse.noResults": "未找到符合这些条件的模组。",
  "browse.viewOnForgeTitle": "在 Forge 上查看（在浏览器中打开）",
  "browse.fikaCompatibleTitle": "有兼容 Fika 的版本",
  "browse.byAuthor": "作者 {author}",
  "browse.downloadsLabel": "次下载",
  "browse.chooseVersionTitle": "选择要安装的版本",
  "browse.installing": "正在安装...",
  "browse.installButton": "安装",
  "browse.noVersionPublished": '"{name}" 没有可安装的已发布版本。',
  "browse.noVersionPublishedShort": "无已发布版本",
  "browse.prevPage": "上一页",
  "browse.pageOf": "第 {page} / {total} 页",
  "browse.nextPage": "下一页",
  "browse.installNote": "安装会下载所选版本并使用与手动安装相同的安装器。",
  "confirm.title": "确认安装",
  "confirm.descriptionPrefix": "压缩包结构不标准。",
  "confirm.descriptionMid": "根目录内容：",
  "confirm.descriptionSuffix": "是否仍要继续安装？",
  "confirm.emptyArchive": "（压缩包为空或无法列出内容）",
  "confirm.explanation": "未检测到典型的模组结构（无 DLL、无 package.json、无 user/ 或 BepInEx/ 文件夹）。请确认这是你想安装的内容。",
  "confirm.abort": "取消",
  "confirm.proceed": "继续安装",
  "modlist.emptyCategory": "此分类中没有模组。",
  "modlist.checkboxTitle": "选择此模组",
  "modlist.renameTitle": "重命名显示名称（不影响实际文件夹）",
  "modlist.statusActive": "已启用",
  "modlist.statusDisabled": "已禁用",
  "modlist.forgeUpdateAvailableTitle": "Forge 上有可用更新",
  "modlist.forgeUpdateAvailable": "有更新",
  "modlist.forgeBlockedTitle": "更新被依赖冲突阻止",
  "modlist.forgeBlocked": "更新被阻止",
  "modlist.forgeIncompatibleTitle": "与当前 SPT 版本不兼容",
  "modlist.forgeIncompatible": "不兼容",
  "modlist.forgeInfoTitle": "无本地版本可比较",
  "modlist.forgeInfo": "Forge：v{version}",
  "modlist.orphanTitle": "由清单跟踪的散落文件（没有自己的文件夹）— 只能删除",
  "modlist.orphan": "孤立",
  "modlist.sptIncompatible": "SPT 不匹配",
  "modlist.sptIncompatibleTitle": "模组自身声明支持 SPT {declared}，与你选择的版本不匹配。从模组 DLL 读取，无需联网。",
  "modlist.packagePart": "{count} 部分包",
  "modlist.packagePartFiltered": "{shown} / {count} 部分",
  "modlist.expandParts": "显示此模组的各部分",
  "modlist.collapseParts": "隐藏此模组的各部分",
  "typeFilter.all": "全部",
  "typeFilter.server": "服务端",
  "typeFilter.client": "客户端",
  "typeFilter.hybrid": "混合",
  "typeFilter.unknown": "未知",
  "modlist.packageTooltip": "此模组由多个协同工作的部分组成。启用或禁用其中一个会切换全部。其他部分：{others}",
  "modlist.packageTooltipInferred": "已自动检测为同一模组的各部分（两侧文件夹名称相同）。启用或禁用其中一个会切换全部。其他部分：{others}",
  "modlist.actionsTitle": "操作",
  "modlist.openFolder": "打开文件夹",
  "modlist.rename": "重命名",
  "modlist.reinstall": "重新安装",
  "queue.waiting": "等待中...",
  "queue.installing": "正在安装...",
  "queue.done": "完成",
  "queue.failed": "失败",
  "queue.noFilePath": "文件路径不可用。",
  "restore.confirmDownload": "从导入列表中发现 {count} 个缺失模组。是否从 Forge 自动下载？",
  "restore.allInstalled": "成功安装了 {count} 个模组。",
  "restore.partialInstalled": "已安装 {installed} 个；在 Forge 上未找到或失败：{notFound}",
  "restore.confirmDisable": "有 {count} 个已安装模组不在导入列表中。是否禁用这些模组？",
  "restore.disabledCount": "已禁用 {count} 个模组。",
  "restore.lookingUp": "正在 Forge 上查找模组...",
  "restore.lookingUpCount": "正在 Forge 上查找...（{done}/{total}）",
  "restore.installingProgress": "正在安装模组...（{done}/{total}）",
  "restore.andMore": " 以及其他 {count} 个",
  "update.available": "有新版模组管理器可用：v{latest}（当前 v{current}）。",
  "update.download": "在 Forge 上下载",
  "update.viewChangelog": "更新日志",
  "update.dismiss": "暂时不",
};

export const DICTIONARIES: Record<Lang, Dict> = { "pt-BR": pt, en, "zh-CN": zh };

export function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  let str = DICTIONARIES[lang]?.[key] ?? DICTIONARIES["pt-BR"][key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      str = str.split(`{${k}}`).join(String(v));
    }
  }
  return str;
}

/**
 * O backend (processo main / modManager.ts) sempre responde em português —
 * ele não sabe em qual idioma a UI está. Em vez de reescrever todas as ~50
 * mensagens do backend pra retornar códigos (grande refatoração, mais risco
 * de reintroduzir bug nas partes que acabamos de corrigir), a gente traduz
 * aqui na hora de exibir, casando contra o conjunto conhecido de mensagens.
 * Se uma mensagem nova não bater com nenhuma regra, mostra o texto original
 * (em português) em vez de quebrar — é um degrade aceitável.
 * 支持 en 与 zh-CN。
 */
interface BackendMessageRule {
  pattern: RegExp;
  /** Returns translation for the given lang (en or zh-CN). */
  tr: (m: RegExpMatchArray, lang: Lang) => string;
}

const BACKEND_MESSAGE_RULES: BackendMessageRule[] = [
  // --- Mensagens fixas (sem parte dinâmica) ---
  { pattern: /^Nenhuma instância SPT configurada\.$/, tr: (_, lang) => lang === "zh-CN" ? "未配置 SPT 实例。" : "No SPT instance configured." },
  { pattern: /^Cancelado\.$/, tr: (_, lang) => lang === "zh-CN" ? "已取消。" : "Cancelled." },
  { pattern: /^Pasta aberta\.$/, tr: (_, lang) => lang === "zh-CN" ? "文件夹已打开。" : "Folder opened." },
  { pattern: /^Nome restaurado pro original\.$/, tr: (_, lang) => lang === "zh-CN" ? "名称已恢复为原始名称。" : "Name restored to original." },
  { pattern: /^Nome atualizado\.$/, tr: (_, lang) => lang === "zh-CN" ? "名称已更新。" : "Name updated." },
  {
    pattern: /^Estrutura de arquivo incomum: não encontrei DLL, package\.json nem pasta user\/BepInEx\.$/,
    tr: (_, lang) => lang === "zh-CN" ? "文件结构异常：未找到 DLL、package.json 或 user/BepInEx 文件夹。" : "Unusual file structure: found no DLL, package.json, or user/BepInEx folder."
  },
  { pattern: /^Mod instalado e verificado \(estrutura completa detectada\)\.$/, tr: (_, lang) => lang === "zh-CN" ? "模组已安装并验证（检测到完整结构）。" : "Mod installed and verified (full structure detected)." },
  { pattern: /^Caminho temporário inválido\.$/, tr: (_, lang) => lang === "zh-CN" ? "临时路径无效。" : "Invalid temporary path." },
  {
    pattern: /^A extração temporária não existe mais — tente instalar o arquivo de novo\.$/,
    tr: (_, lang) => lang === "zh-CN" ? "临时解压已不存在 — 请重新尝试安装该文件。" : "The temporary extraction no longer exists — try installing the file again."
  },
  { pattern: /^Instalação cancelada\.$/, tr: (_, lang) => lang === "zh-CN" ? "安装已取消。" : "Installation cancelled." },
  {
    pattern: /^Esse item é um arquivo do próprio SPT \(não é um mod\) e não pode ser alternado\.$/,
    tr: (_, lang) => lang === "zh-CN" ? "此项目是 SPT 自带文件（不是模组），无法切换启用状态。" : "This item is one of SPT's own files (not a mod) and can't be toggled."
  },
  {
    pattern: /^Esse item é um arquivo do próprio SPT \(não é um mod\) e não pode ser removido pelo Manager\.$/,
    tr: (_, lang) => lang === "zh-CN" ? "此项目是 SPT 自带文件（不是模组），无法由管理器删除。" : "This item is one of SPT's own files (not a mod) and can't be removed by the Manager."
  },
  { pattern: /^Mod desabilitado\.$/, tr: (_, lang) => lang === "zh-CN" ? "模组已禁用。" : "Mod disabled." },
  {
    pattern: /^Mod desabilitado \((\d+) partes do pacote\)\.$/,
    tr: (m, lang) => lang === "zh-CN" ? `模组已禁用（共 ${m[1]} 个包部分）。` : `Mod disabled (${m[1]} package parts).`
  },
  {
    pattern: /^Mod habilitado \((\d+) partes do pacote\)\.$/,
    tr: (m, lang) => lang === "zh-CN" ? `模组已启用（共 ${m[1]} 个包部分）。` : `Mod enabled (${m[1]} package parts).`
  },
  {
    pattern: /^Mod desabilitado \(e (\d+) patcher\(s\) junto\)\.$/,
    tr: (m, lang) => lang === "zh-CN" ? `模组已禁用（同时处理了 ${m[1]} 个 patcher）。` : `Mod disabled (along with ${m[1]} patcher(s)).`
  },
  {
    pattern: /^Mod habilitado \(e (\d+) patcher\(s\) junto\)\.$/,
    tr: (m, lang) => lang === "zh-CN" ? `模组已启用（同时处理了 ${m[1]} 个 patcher）。` : `Mod enabled (along with ${m[1]} patcher(s)).`
  },
  { pattern: /^Mod habilitado\.$/, tr: (_, lang) => lang === "zh-CN" ? "模组已启用。" : "Mod enabled." },
  { pattern: /^Entrada removida da lista \(nenhum arquivo rastreado\)\.$/, tr: (_, lang) => lang === "zh-CN" ? "已从列表中移除（无跟踪文件）。" : "Entry removed from the list (no tracked files)." },
  { pattern: /^Mod removido\.$/, tr: (_, lang) => lang === "zh-CN" ? "模组已删除。" : "Mod removed." },
  {
    pattern: /^Mod instalado\. (\d+) arquivo\(s\) do núcleo do SPT vieram no pacote e foram ignorados, pra não quebrar a instalação\.$/,
    tr: (m, lang) => lang === "zh-CN"
      ? `模组已安装。包中的 ${m[1]} 个 SPT 核心文件已被跳过，以免破坏安装。`
      : `Mod installed. ${m[1]} SPT core file(s) shipped inside the package were skipped, to avoid breaking the installation.`
  },
  {
    pattern: /^Mod removido \(e (\d+) arquivo\(s\) que vieram junto\)\.$/,
    tr: (m, lang) => lang === "zh-CN"
      ? `模组已删除（同时删除了随附的 ${m[1]} 个文件）。`
      : `Mod removed (along with ${m[1]} file(s) that came with it).`
  },
  { pattern: /^Pasta de server mods não existe\.$/, tr: (_, lang) => lang === "zh-CN" ? "服务端模组文件夹不存在。" : "Server mods folder doesn't exist." },
  { pattern: /^Ordem de carregamento atualizada\.$/, tr: (_, lang) => lang === "zh-CN" ? "加载顺序已更新。" : "Load order updated." },
  { pattern: /^Falha ao verificar atualizações\.$/, tr: (_, lang) => lang === "zh-CN" ? "检查更新失败。" : "Failed to check for updates." },
  { pattern: /^Falha ao buscar mods na Forge\.$/, tr: (_, lang) => lang === "zh-CN" ? "在 Forge 上搜索模组失败。" : "Failed to search mods on Forge." },
  {
    pattern: /^Esse arquivo não parece uma lista de mods exportada por este app\.$/,
    tr: (_, lang) => lang === "zh-CN" ? "此文件看起来不像是由本应用导出的模组列表。" : "This file doesn't look like a mod list exported by this app."
  },
  {
    pattern: /^Não achei uma instância SPT nessa pasta nem nas subpastas diretas dela\. Selecione a pasta que tem o SPT\.Server\.exe\.$/,
    tr: (_, lang) => lang === "zh-CN"
      ? "在该文件夹及其直接子文件夹中未找到 SPT 实例。请选择包含 SPT.Server.exe 的文件夹。"
      : "Couldn't find an SPT instance in that folder or its direct subfolders. Select the folder that has SPT.Server.exe."
  },
  { pattern: /^Nenhum conflito óbvio encontrado\.$/, tr: (_, lang) => lang === "zh-CN" ? "未发现明显冲突。" : "No obvious conflicts found." },
  { pattern: /^Informe a versão do SPT antes de verificar atualizações\.$/, tr: (_, lang) => lang === "zh-CN" ? "请先输入 SPT 版本再检查更新。" : "Enter the SPT version before checking for updates." },

  // --- Mensagens com parte dinâmica ---
  {
    pattern: /^Instalação incompleta: arquivo não confirmado no destino \((.+)\)\.$/,
    tr: (m, lang) => lang === "zh-CN" ? `安装不完整：目标位置未确认文件（${m[1]}）。` : `Incomplete installation: file not confirmed at destination (${m[1]}).`
  },
  {
    pattern: /^Mod "(.+)" instalado e verificado como (server mod|client mod)\.$/,
    tr: (m, lang) => {
      if (lang === "zh-CN") {
        const kind = m[2] === "server mod" ? "服务端模组" : "客户端模组";
        return `模组 "${m[1]}" 已安装并验证为${kind}。`;
      }
      return `Mod "${m[1]}" installed and verified as a ${m[2] === "server mod" ? "server mod" : "client mod"}.`;
    }
  },
  { pattern: /^Erro ao instalar: (.+)$/, tr: (m, lang) => {
      const nested = translateBackendMessage(m[1], lang);
      return lang === "zh-CN" ? `安装出错：${nested}` : `Error installing: ${nested}`;
    }
  },
  { pattern: /^(\d+) arquivo\(s\) órfão\(s\) removido\(s\)\.$/, tr: (m, lang) => lang === "zh-CN" ? `已删除 ${m[1]} 个孤立文件。` : `${m[1]} orphan file(s) removed.` },
  { pattern: /^Arquivo\/pasta do mod não encontrado: (.+)$/, tr: (m, lang) => lang === "zh-CN" ? `未找到模组文件/文件夹：${m[1]}` : `Mod file/folder not found: ${m[1]}` },
  { pattern: /^Mod não encontrado: (.+)$/, tr: (m, lang) => lang === "zh-CN" ? `未找到模组：${m[1]}` : `Mod not found: ${m[1]}` },
  { pattern: /^Não foi possível baixar o mod da Forge \(HTTP (\d+)\)\.$/, tr: (m, lang) => lang === "zh-CN" ? `无法从 Forge 下载模组（HTTP ${m[1]}）。` : `Couldn't download the mod from Forge (HTTP ${m[1]}).` },
  { pattern: /^Falha ao baixar\/instalar da Forge: (.+)$/, tr: (m, lang) => lang === "zh-CN" ? `从 Forge 下载/安装失败：${m[1]}` : `Failed to download/install from Forge: ${m[1]}` },
  { pattern: /^Instância encontrada automaticamente em: (.+)$/, tr: (m, lang) => lang === "zh-CN" ? `已自动找到实例：${m[1]}` : `Instance automatically found at: ${m[1]}` },
  {
    pattern: /^Instância dividida detectada — client em "(.+)", server em "(.+)"\.$/,
    tr: (m, lang) => lang === "zh-CN" ? `检测到分离实例 — 客户端在 "${m[1]}"，服务端在 "${m[2]}"。` : `Split instance detected — client at "${m[1]}", server at "${m[2]}".`
  },
  { pattern: /^Arquivo "(.+)" não é \.zip, \.7z nem \.rar\.$/, tr: (m, lang) => lang === "zh-CN" ? `文件 "${m[1]}" 不是 .zip、.7z 或 .rar。` : `File "${m[1]}" isn't .zip, .7z, or .rar.` },
  { pattern: /^Caminho do mod não encontrado: (.+)$/, tr: (m, lang) => lang === "zh-CN" ? `未找到模组路径：${m[1]}` : `Mod path not found: ${m[1]}` },
  { pattern: /^Lista exportada com (\d+) mod\(s\) para (.+)\.$/, tr: (m, lang) => lang === "zh-CN" ? `已导出包含 ${m[1]} 个模组的列表到 ${m[2]}。` : `List exported with ${m[1]} mod(s) to ${m[2]}.` },
  { pattern: /^Comparado com (\d+) mod\(s\) da lista importada\.$/, tr: (m, lang) => lang === "zh-CN" ? `已与导入列表中的 ${m[1]} 个模组进行比较。` : `Compared against ${m[1]} mod(s) from the imported list.` },
  { pattern: /^Erro ao ler o arquivo: (.+)$/, tr: (m, lang) => lang === "zh-CN" ? `读取文件出错：${m[1]}` : `Error reading the file: ${m[1]}` },
  { pattern: /^Não foi possível consultar o Forge: (.+)$/, tr: (m, lang) => lang === "zh-CN" ? `无法查询 Forge：${m[1]}` : `Couldn't reach Forge: ${m[1]}` },
  { pattern: /^Forge respondeu (\d+)$/, tr: (m, lang) => lang === "zh-CN" ? `Forge 返回 ${m[1]}` : `Forge responded ${m[1]}` },
  {
    pattern: /^Arquivo rejeitado por segurança: entrada suspeita no \.(7z|rar|zip) \("(.+)"\)\.$/,
    tr: (m, lang) => lang === "zh-CN" ? `出于安全原因拒绝文件：.${m[1]} 中存在可疑条目（"${m[2]}"）。` : `File rejected for security reasons: suspicious entry in the .${m[1]} ("${m[2]}").`
  }
];

export function translateBackendMessage(msg: string | undefined | null, lang: Lang): string {
  if (!msg) return msg ?? "";
  if (lang === "pt-BR") return msg;
  for (const rule of BACKEND_MESSAGE_RULES) {
    const match = msg.match(rule.pattern);
    if (match) return rule.tr(match, lang);
  }
  return msg; // sem regra — melhor mostrar em PT do que quebrar a mensagem
}
