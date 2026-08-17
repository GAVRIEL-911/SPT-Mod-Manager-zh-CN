# SPT Mod Manager 简体中文版

基于 [Nevek20/SPT_Mod_Manager](https://github.com/Nevek20/SPT_Mod_Manager) **v0.5.2** 的完整简体中文汉化版。

专为 **Single Player Tarkov (SPT)** 设计的模组管理器，支持从 Forge 浏览/安装模组、启用/禁用、冲突检查、列表导入导出等，界面与后端提示均已汉化。

> ⚠️ 非官方二次分发。原项目版权归原作者所有，本仓库仅提供中文界面翻译与便携构建，方便中文用户使用。

---

## 功能特点

- **完整简体中文界面**：按钮、提示、筛选、Forge 搜索、冲突检查、批量操作等全部汉化
- **后端消息同步中文**：安装/删除/启用/禁用等操作反馈也会显示中文
- **三语切换**：右上角可随时切换 **中 / EN / PT**（默认中文）
- **Forge 集成**：浏览、搜索、一键安装、检查更新
- **客户端 / 服务端 / 混合模组** 统一管理
- **冲突检测**、模组列表导出/导入、批量操作
- **绿色便携**：解压即用，无需安装

---

## 快速开始

1. 前往 [Releases](../../releases) 下载最新 `SPT-Mod-Manager-x.x.x-win-x64.zip`
2. 解压到任意文件夹
3. 双击运行 **`SPT Mod Manager.exe`**
4. 选择你的 SPT 实例文件夹即可开始使用

首次启动默认语言为 **简体中文**，可在右上角切换。

---

## 截图

暂时还没有...

---

## 与原版的关系

| 项目 | 说明 |
|------|------|
| 原项目 | [Nevek20/SPT_Mod_Manager](https://github.com/Nevek20/SPT_Mod_Manager) |
| 原作者 | TioEmir / Nevek20 |
| 本仓库改动 | 增加 `zh-CN` 语言包、默认中文、语言切换按钮、后端消息中文支持 |
| 版本基准 | v0.5.2 |

本汉化**未修改**原有业务逻辑，仅扩展国际化（i18n）相关代码。

---

## 自行构建

```bash
git clone https://github.com/你的用户名/SPT-Mod-Manager-zh-CN.git
cd SPT-Mod-Manager-zh-CN
npm install
npm run electron:dev    # 开发运行
npm run electron:build  # 打包 Windows 便携版
