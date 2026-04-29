# Influo AI 官网

Influo AI 官网与产品展示站点，基于 Vite、React、TypeScript 和 Tailwind CSS 构建。

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认本地预览地址：

```text
http://localhost:5173/
```

## 构建

```bash
npm run build
```

构建产物会生成在 `dist/` 目录。该目录属于生成物，不提交到 Git。

## 线上部署

适合部署到 Vercel、Netlify、Cloudflare Pages 或静态服务器。常用配置：

```text
Framework: Vite
Build command: npm run build
Output directory: dist
```

## 项目结构

```text
src/
  components/   通用组件
  pages/        Vite 路由页面
  app/          旧 Next 原型页面
public/         静态资源
demo/           概念 Demo
```

## 常用命令

```bash
npm run dev      # 本地开发
npm run build    # 类型检查并构建
npm run preview  # 预览 dist 构建产物
```
