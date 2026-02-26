# Grafnaut

[![License: AGPL-3.0-only](https://img.shields.io/badge/license-AGPL--3.0--only-blue.svg)](LICENSE)
[![Base: Grafana 12.3.3](https://img.shields.io/badge/base-Grafana%2012.3.3-1F60C4)](https://github.com/grafana/grafana)

Grafnaut 是基于开源 Grafana `12.3.3` 深度定制的可视化平台，面向焦化自动化控制和远程运维场景。

## 项目定位

Grafnaut 当前聚焦以下职责：

1. 通过可组合仪表盘全屏展示关键设备与程序运行状态。
2. 提供统一日志查看与检索能力。
3. 提供统一告警规则、通知与处理能力。
4. 向后台发送控制指令（规划中，尚未完成）。

## 功能状态

| 能力模块     | 状态   | 说明                           |
| ------------ | ------ | ------------------------------ |
| 仪表盘与大屏 | 已支持 | 支持多数据源、变量、全屏展示   |
| 日志         | 已支持 | 支持日志查询与关联分析         |
| 告警         | 已支持 | 支持规则、通知策略与历史查看   |
| 控制指令下发 | 规划中 | 将补齐权限、审计、执行回执链路 |

## 快速开始

开始前请确保你具备以下环境：

- Go（版本要求以 `go.mod` 为准）。
- Node.js（推荐使用 `.nvmrc` 指定版本）。
- Corepack（用于 Yarn）。

安装依赖：

```sh
corepack enable
yarn install --immutable
make deps-go
```

启动开发环境：

```sh
# 终端 1：后端（自动重载）
make run

# 终端 2：前端（热更新）
make run-frontend
```

默认访问地址通常为 `http://localhost:3000`。

## 常用命令

```sh
# 构建前后端
make build

# 运行全部测试
make test

# 前端 lint
yarn lint

# 提取 i18n 词条
make i18n-extract
```

## 目录说明

为了降低上手门槛，建议先聚焦“核心目录”，其余目录可在需要时再学习或精简。

### 核心目录（建议优先掌握）

| 目录 | 作用 | 当前阶段建议 |
| --- | --- | --- |
| `public/` | 前端主工程（页面、组件、路由、i18n 词条，包含 `public/locales`） | 必看 |
| `pkg/` | 后端主工程（API、服务、业务逻辑） | 必看 |
| `conf/` | 默认配置、示例配置、运行参数 | 必看 |
| `packages/` | 共享前端包和 UI 组件（如 `grafana-ui`） | 建议看 |
| `Makefile` | 常用构建、运行、测试命令入口 | 必看 |
| `README.md` | 项目总览和协作入口 | 必看 |

### 业务开发常用目录（按需掌握）

| 目录 | 作用 | 说明 |
| --- | --- | --- |
| `public/app/features/` | 业务功能模块（仪表盘、日志、告警等） | 你们日常改动最频繁的位置 |
| `public/locales/` | 多语言资源（`en-US`、`zh-Hans`） | 品牌与中文体验优化重点 |
| `pkg/services/` | 后端服务拆分模块 | 适合逐模块学习 |
| `devenv/` | 本地依赖服务与开发环境脚本 | 接入外部系统时常用 |
| `scripts/` | 构建、检查、自动化脚本 | 出现重复操作时再看 |

### 可暂时忽略的目录（非核心）

| 目录 | 作用 | 是否可后置 |
| --- | --- | --- |
| `e2e/`, `e2e-playwright/` | 端到端测试 | 可后置 |
| `packaging/` | 打包与发行相关文件 | 可后置 |
| `apps/`, `kinds/`, `kindsv2/` | API 资源模型与代码生成相关 | 可后置 |
| `hack/`, `tools/` | 内部辅助工具与开发脚本 | 可后置 |
| `grafana-mixin/` | 监控规则与看板模板（上游生态） | 可后置 |
| `docs/` | 文档与静态资源 | 可后置 |

### 推荐学习顺序

1. `README.md` + `Makefile`（先跑起来）。
2. `conf/`（先搞清运行配置）。
3. `public/`（先能改页面和中文文案）。
4. `pkg/`（再进入后端逻辑）。
5. `packages/`（最后补共享组件与底层能力）。

## 与上游的关系

- 本项目基于 Grafana OSS `12.3.3` 进行定制开发。
- 定制重点包括品牌替换、中文本地化增强、业务场景适配。
- 请在升级上游版本前评估定制差异与兼容性影响。

## 贡献指南

欢迎通过 Issue 和 Pull Request 参与改进。

- 贡献流程：参阅 [CONTRIBUTING.md](CONTRIBUTING.md)。
- 开发指南：参阅 [contribute/developer-guide.md](contribute/developer-guide.md)。
- 行为准则：参阅 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)。

提交前建议至少执行：

```sh
yarn lint
make test
```

## 安全与支持

- 安全策略：参阅 [SECURITY.md](SECURITY.md)。
- 支持说明：参阅 [SUPPORT.md](SUPPORT.md)。

## 许可证

本项目使用 [AGPL-3.0-only](LICENSE) 许可证发布。许可证例外与补充条款参阅 [LICENSING.md](LICENSING.md)。
