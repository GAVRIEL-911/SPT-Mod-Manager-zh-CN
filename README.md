# SPT Mod Manager – Multi-Language Edition

A multi-language build of [Nevek20/SPT_Mod_Manager](https://github.com/Nevek20/SPT_Mod_Manager) **v0.5.3**.

A dedicated mod manager for **Single Player Tarkov (SPT)** with support for browsing and installing mods from Forge, enabling/disabling, conflict checks, list import/export, and more. The UI is fully localized; language is selected from a compact dropdown instead of crowding the main toolbar with extra buttons.

> ⚠️ Unofficial redistribution. All rights to the original project belong to its author. This repository only provides multi-language UI support and a portable build for convenience. Not affiliated with the original author, the SPT team, or Battlestate Games.

---

## Supported Languages

| Code | Language | Coverage |
|------|----------|----------|
| **zh-CN** | 简体中文 (Simplified Chinese) | Full (default) |
| **en** | English | Full |
| **pt-BR** | Português (Brasil) | Full |
| **ru** | Русский | Full |
| **fr** | Français | Full |
| **ja** | 日本語 | Full |
| **de** | Deutsch | Full |

Language is changed from the **dropdown in the top-right corner** (click the current language short label, e.g. **中** / **EN** / **RU**). The choice is saved and restored on the next launch.

---

## Features

- **Seven UI languages** with a settings-style dropdown (no more side-by-side language buttons on the main page)
- **Full UI localization** for every supported language: buttons, toasts, filters, Forge search, conflict checks, bulk actions, and more
- **Forge integration**: browse, search, one-click install, and update checks
- Unified management of **client / server / hybrid** mods
- Conflict detection, mod list export/import, and bulk operations
- Based on upstream **v0.5.3** (browsing fixes and related improvements included)
- **Portable**: extract and run, no installer required

Upstream feature set (installation, organization, reliability, Forge catalogue) is unchanged. See the [original README](https://github.com/Nevek20/SPT_Mod_Manager/blob/main/README.md) for the full list.

---

## Quick Start

1. Go to [Releases](../../releases) and download the latest `SPT-Mod-Manager-*-win-x64.zip`
2. Extract it to any folder
3. Double-click **`SPT Mod Manager.exe`**
4. Select your SPT instance folder and start managing mods

On first launch the default language is **Simplified Chinese**. Switch at any time via the top-right language dropdown.

If Windows SmartScreen shows **"Windows protected your PC"**, choose **More info** → **Run anyway**. This is expected for unsigned indie builds and does not mean the app is malicious.

---

## Screenshots

Not at the moment...

---

## Relationship to the Original Project

| Item | Details |
|------|---------|
| Upstream | [Nevek20/SPT_Mod_Manager](https://github.com/Nevek20/SPT_Mod_Manager) |
| Original author | TioEmir / Nevek20 |
| Base version | **v0.5.3** |
| Changes in this repo | Multi-language i18n (`zh-CN` / `en` / `pt-BR` / `ru` / `fr` / `ja` / `de`), language **dropdown** instead of main-page toggle buttons, Simplified Chinese as default |
| Business logic | **Unchanged** — only i18n and language UI were extended |

This localization does **not** modify install, enable/disable, Forge matching, or other core behaviour.

---

## Build from Source

```bash
git clone https://github.com/YOUR_USERNAME/SPT-Mod-Manager-zh-CN.git
cd SPT-Mod-Manager-zh-CN
npm install
npm run electron:dev    # development
npm run electron:build  # package Windows build
```

Requirements: Node.js 18+, Windows (or a cross-compile setup with electron-builder).

Portable output is typically under `release/` as a zip / unpacked folder containing `SPT Mod Manager.exe`.

---

## License

MIT — same as the upstream project. See [LICENSE](LICENSE).

---

## Credits

- Original project: [Nevek20/SPT_Mod_Manager](https://github.com/Nevek20/SPT_Mod_Manager) by TioEmir
- Multi-language edition & Chinese localization maintained independently for community convenience
