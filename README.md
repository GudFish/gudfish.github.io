# Haoyu Liu — Academic Homepage

A minimal academic website built with Jekyll and hosted on GitHub Pages.

- **About** (`/`): biography, research interests, education, shark avatar, and contact links.
- **Research** (`/research/`): underwater robot system design and development (VURAM).
- **Publications** (`/publications/`): papers.
- **Blog** (`/blog/`): original Chinese posts, with search and tag filters. Existing post URLs are preserved.

## 修改论文信息与 GitHub 链接

编辑 `_data/publications.yml`。每篇论文的 `github` 目前为空：

```yaml
github: ""
```

将它替换为完整仓库地址，例如：

```yaml
github: "https://github.com/GudFish/your-repository"
```

保存后，主页和 Publications 页面上的 “Code · coming soon” 会自动变为可点击的 GitHub 链接，无需修改模板。

同一文件中可修改 `title`、`authors`、`venue`、`abstract`、`citation`、`paper` 和 `doi`。`abstract` 当前为英文摘要概述，页面有明确标注；可替换为自己的完整摘要。图像为概念示意图，并非论文原图；将真实论文附图放入 `images/research/`，修改 `image`、`image_alt`、`image_caption` 即可。

## 修改个人资料

- `_config.yml` 的 `author`：邮箱、GitHub、Google Scholar、实验室链接。
- `index.html`：英文简介、教育经历与研究兴趣。
- `research.html`：研究方向介绍。
- `images/shark.png`：主页使用的鲨鱼头像。
- `style.scss`：全站样式（含手机与打印布局）。

## 博客

所有 `_posts/` 文件保持原样，正文、原始标题、分类标签和永久链接未改动。新文章仍按 Jekyll 的 `YYYY-MM-DD-title.md` 方式添加。`toc: true` 显示可折叠目录，`comments: true` 保留现有评论功能。文章公式继续使用 MathJax，代码继续使用 Rouge 高亮。

## Local development

Requires Ruby 2.7+ and Bundler (Ruby 3.x recommended):

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. For a production build:

```sh
bundle exec jekyll build
```

GitHub Pages continues to build this repository using its Jekyll support; no migration to another hosting service is needed.
