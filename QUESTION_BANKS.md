# 题库编辑说明

更新：2026-11-14。题目位于 `assets/questions/pretest.js`、`preservatives.js`、`antioxidants.js`。学习目标和维度在 `assets/objectives.js`，保持现有 P1–P5、A1–A5。

## 当前题量

| 内容 | 题组 | 小题 | 总分 |
| --- | ---: | ---: | ---: |
| 购物前测 | 9 | 9 | 9 |
| 第一章随堂练习 | 6 | 9 | 9，独立记录 |
| 第一章正式章测 | 7 | 23 | 21 |
| 第二章随堂练习 | 8 | 8 | 8，独立记录 |
| 第二章章前情境 W1–W4 | 4 | 4 | 不计分 |
| 第二章正式章测 | 7 | 20 | 22 |

小题指可以单独作答和计分的末级题目。两段式中的两问、匹配的每一行、判断表的每一行分别算一小题；多选按钮不单独算一题。

### 正式章测题组

| 第一章 | 小题数 | 分值 |
| --- | ---: | ---: |
| 1 · Ranch dressing：成分、储存、酸度 | 3 | 4 |
| 2 · Yeast-raised bread：选择与理由 | 2 | 2 |
| 3 · Golden raisins：找错与三行判断 | 4 | 4 |
| 4 · 家族名称匹配 | 6 | 3 |
| 5 · Mozzarella：用途片段与标签判断 | 2 | 2 |
| 6 · 虚构热狗标签：结论与两处证据 | 2 | 2 |
| 7 · 生产情境：饮料两问、腊肠两问 | 4 | 4 |

| 第二章 | 小题数 | 分值 |
| --- | ---: | ---: |
| 1 · 维生素 C 相关成分点选 | 1 | 3 |
| 2 · Mashed potatoes：成分分类 | 3 | 3 |
| 3 · Shortening：名称、机制、找错 | 3 | 3 |
| 4 · Granola：两问与四行判断 | 6 | 6 |
| 5 · Beans：EDTA 用途与机制 | 2 | 2 |
| 6 · Peaches / applesauce：双标签对比 | 2 | 2 |
| 7 · 工厂问题匹配 | 3 | 3 |

### 正式章测的目标覆盖

| 目标 | 小题数 | 分值 | 维度 |
| --- | ---: | ---: | --- |
| P1 | 2 | 3 | Reading labels |
| P2 | 6 | 3 | Reading labels |
| P3 | 6 | 6 | Explaining functions |
| P4 | 2 | 2 | Explaining functions |
| P5 | 7 | 7 | Judging claims |
| A1 | 3 | 5 | Reading labels |
| A2 | 4 | 4 | Explaining functions |
| A3 | 6 | 6 | Explaining functions |
| A4 | 3 | 3 | Judging claims |
| A5 | 4 | 4 | Judging claims |

三个维度为结果页主体。第一章维度满分依次为 6、8、7；第二章为 5、10、7。总分和首次成绩在下方以小字显示。前测按本章相关目标筛选，以百分比和题数显示，例如 `Before learning · 50% (1 of 2 questions)`；不据此宣称平行卷增益。

前测中 P1、P2、A1、P3、A2、A3、A5 各有 1 题，P5 有 2 题。章前情境不分配目标，也不进入维度。

## 编辑方式

`questions` 保存题目，`blocks` 按食品或情境组织题组，用 `questionIds` 引用。复合题通过 `parts`、情境题通过 `task` 放子题。

| 字段 | 用途 |
| --- | --- |
| `set` | `pretest`、`label-practice`、`review`、`new-food`、`chapter-check`、`warm-up`。 |
| `section` | 教学小节锚点。章前情境专门位于第一节目标之前，不进入普通练习插槽。 |
| `objective` | 计分小题的主目标。作答时隐藏代码，结果反馈显示；章前情境不填写。 |
| `type` | `single`、`multi`、`match`、`matching`、`short-text`、`label-select`、`two-tier`、`judgment-grid`、`scenario`。 |
| `stem`、`points` | 题干与满分。正式多选题不提示正确答案数量。 |
| `options` | `id`、`text`、`correct`、`feedback`。章前题另有 `recap`，用于回顾首次猜测。 |
| `tokens` | 标签或句子片段。`suffix: ''` 用于成分名和拆开的括号用途之间不加逗号。 |
| `display` | `passage` 呈现句子或证据片段，其他标签题按配料排列。 |
| `maxSelections` | 仅用于明确要求选一项的题。多选证据题不设为 1。 |
| `acceptedAnswers` | 输入题接受的缩写、全称、合写，统一大小写、空格、括号、连字符及句末标点。 |
| `review`、`references` | 原文 `quote`、具体段落 `href`、可读链接 `label`。后者可补充包装原句等。 |
| `product` / `products` | 经核对的配料转录、图片和来源。虚构标签使用 `fictional: true`。 |

第一章 5a 中名字 Natamycin 与用途 `(a Natural Mold Inhibitor)` 分开点选，只有用途片段正确。6b 同时选择 celery 的例外声明及配料项，单选一处有部分分。7 组 nitrite 与 erythorbate 各 1 分。3 组的错句考查“干燥是否阻止后续褐变”。

首次按编写顺序展示。重试保留题组故事顺序，仅打乱允许打乱的选项。配料表和句子顺序不打乱，固定判断选项与前测的“不确定”位置保留。

## 计分与反馈

多选和标签题：`max(0, (选对数 − 选错数) / 正确选项数 × 满分)`，保留两位小数。单选、匹配、输入按题目规则计分；复合题总分是子题之和。

- 随堂练习：点击 Check my answer 后揭晓，附逐选项解释及原文回看，能够返回原题。
- 正式章测：交卷后统一显示作答、答案、得分、目标编号及原文。漏答可定位；刷新恢复作答和两段式展开状态。
- 章前情境：每次选择立即展示全部选项说明和 Find out why 链接。记录首次及最近选择，章测结果底部回顾首次猜测；未作答的情境不会生成猜测回顾。

`Secure ≥ 80%`、`Developing ≥ 50%`，其余为 `Not yet`。未测目标为 `Not assessed`。两章均不限时，随堂和章前记录不并入章测成绩。

## 存储与版本

- 章节题库版本 `20261114-9`；前测内容未变，保留 `20261114-7`，`objectives.js` 的前测版本决定哪些基线记录可用。
- `label-notes-course-v3`：长期本地记录，承接 v2 的成绩、练习和阅读位置，新增 `warmups` 保存首次与最近猜测。
- `label-notes-check-{章名}-v5`：本标签页的测验答案、顺序、展开状态及位置。
- `label-notes-active-check-v4`：本标签页的测验导航状态。
- 新版章测完成时，旧版成绩归入 `history`；新版单独保留 `first` 和 `latest`。不把旧答案带入新版题目，已有前测和学习位置继续有效。

数据仅保存在当前浏览器，没有上传。真实产品配料表本轮保持原样，来源见 [PRODUCTS_USED.md](PRODUCTS_USED.md)。`dev-question-types.html` 是独立演示页，不计入课程成绩。

换题后需同步核对本文件题数、分值和覆盖表，运行 `tests/questions.test.mjs`、`tests/progress.test.mjs` 及相关浏览器流程。
