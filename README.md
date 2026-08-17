# SPT Mod Manager – Simplified Chinese Edition

A fully localized **Simplified Chinese** build of [Nevek20/SPT_Mod_Manager](https://github.com/Nevek20/SPT_Mod_Manager) **v0.5.2**.

A dedicated mod manager for **Single Player Tarkov (SPT)** with support for browsing/installing mods from Forge, enabling/disabling, conflict checks, list import/export, and more. Both the UI and backend messages are translated into Chinese.

> ⚠️ Unofficial redistribution. All rights to the original project belong to its author. This repository only provides Chinese UI translation and a portable build for the convenience of Chinese-speaking users.

---

## Features

- **Full Simplified Chinese UI**: buttons, toasts, filters, Forge search, conflict checks, bulk actions, and more
- **Backend messages in Chinese**: install / remove / enable / disable feedback is also localized
- **Three-language switch**: toggle **中 / EN / PT** in the top-right corner (defaults to Chinese)
- **Forge integration**: browse, search, one-click install, and update checks
- Unified management of **client / server / hybrid** mods
- Conflict detection, mod list export/import, and bulk operations
- **Portable**: extract and run, no installer required

---

## Quick Start

1. Go to [Releases](../../releases) and download the latest `SPT-Mod-Manager-x.x.x-win-x64.zip`
2. Extract it to any folder
3. Double-click **`SPT Mod Manager.exe`**
4. Select your SPT instance folder and start managing mods

The default language on first launch is **Simplified Chinese**. You can switch languages at any time via the top-right toggle.

---

## Screenshots

Not at the moment...

---

## Relationship to the Original Project

| Item | Details |
|------|---------|
| Upstream | [Nevek20/SPT_Mod_Manager](https://github.com/Nevek20/SPT_Mod_Manager) |
| Original author | TioEmir / Nevek20 |
| Changes in this repo | Added `zh-CN` locale, Chinese as default language, language toggle button, Chinese backend message support |
| Base version | v0.5.2 |

This localization **does not modify** the original business logic. Only i18n-related code was extended.

---

## Build from Source

```bash
git clone https://github.com/YOUR_USERNAME/SPT-Mod-Manager-zh-CN.git
cd SPT-Mod-Manager-zh-CN
npm install
npm run electron:dev    # development
npm run electron:build  # package Windows portable build
