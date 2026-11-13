# 题库编辑说明

题目在 `assets/questions/pretest.js`、`preservatives.js`、`antioxidants.js`。学习目标、计时和目标状态阈值在 `assets/objectives.js`。现有题干、选项、答案与题数已原样迁移；新增的只是选项反馈、提示和目标归属。

## 怎样换题

每个题库有两部分：`questions` 存每一道小题；`blocks` 把共享一个产品或情境的小题放在一起。章节测验目前各有 6 个区块、10 道计分小题。首次尝试按数据顺序展示；重试打乱区块及选项，区块内的小题保留原顺序。

- 改问题、选项、正确答案、分值、提示和反馈：编辑对应 `questions` 条目。
- 改产品、情境文字或同一情境包含的小题：编辑对应 `blocks` 条目。`intro` 和 `product.presentationHTML` 是原页面迁移的展示内容，也在题库里；若更换产品，需一起更新。新产品可以只填结构化字段，不必提供 `presentationHTML`。
- 在已有正文小节增加练习：新增题目，并在 `blocks` 中填写该小节的 `section` 和题目的 `questionIds`。页面自动生成，无需增加 HTML 占位。
- 修改章节测验数量：增减 `set: 'chapter-check'` 的区块；开始页题数、分数和导航自动更新。
- `originalPage` 仅用于核对本轮迁移，新的题目不必填写。换题后需同步调整旧题迁移检查，不能把新题当成迁移遗漏。

`id` 必须唯一，使用字母、数字及连字符。文字改变但考查内容不变可以保留 ID；正式换题时使用新 ID，并提升存储版本，避免把旧答案或成绩解释成新题表现。

## 主要字段

| 字段 | 用途 |
| --- | --- |
| `set` | `pretest`、`inline`、`review`、`label-practice`、`new-food`、`chapter-check`。分级提示仅在 `label-practice` 出现。 |
| `section` | 对应正文小节的锚点。两章正文的现有锚点见 `objectives.js` 的 `sections`。章测使用 `exam-active`。 |
| `objective` | 小题的主要学习目标，如 P3 或 A2。复合题在每个子题上填写。结果按这个归属计分，不重复计算同一分值。 |
| `type` | `single`、`multi`、`match`、`short-text`、`label-select`、`two-tier`、`scenario`。 |
| `stem`、`points` | 题干与满分。题干可使用简单的本地编写 HTML；不要放入用户输入或外部脚本。 |
| `options` | 选项的 `id`、`text`、`correct`、`feedback`。每个选项都应说明自己的判断依据。 |
| `acceptedAnswers` | 简答题接受的字符串；忽略大小写、首尾空格、多余空白和句末句号。`answerDisplay` 可单独设置标准答案的显示方式。 |
| `tokens` | 配料选择题的成分按钮：`id`、`text`、`correct`、`note`。含逗号的括号内容仍是一个 token（成分片段），不会自动拆分。 |
| `parts` / `task` | 两段式题目在 `parts` 放子题；情境题用 `scenario` 描述情境，`task` 放单选或两段式题目。子题分开计分。 |
| `hints` | 依次显示的提示。先引导看哪里，再引导怎样比较；练习答案仍由学习者选择。 |
| `review` | `href` 指向实际教学小节，`label` 为学习者能读懂的链接文字。 |
| `product` | 可放在小题或区块上：名称、图片、替代文字、`ingredientsText` 完整转录、来源及 `fictional`。虚构标签自动标明，真实包装的看不清部分要如实说明。 |

多选和配料选择：得分为 `(选对数 − 选错数) ÷ 正确选项数 × 分值`，最低为零；完整选对才标为 Correct。两段式和情境题的总分为子题之和。`match` 使用下拉选择，多组匹配可以放在同一区块中。

`dev-question-types.html` 是不进入导航的测试页，展示三个新题型。示例明确标记 Demo，使用虚构内容，不计入前测或章节成绩。

## 目标与记录

目标区块在章节开头、测验开始页及结果页共用同一份文字。默认不计时；将章节的 `timeLimitSeconds` 改成秒数可启用计时。`thresholds` 默认 Secure ≥ 80%、Developing ≥ 50%，其余为 Not yet。没有分配题目的目标显示 Not assessed，不据此判断学习者不会。

目标文字按 2026-11-14 用户定稿更新。P4 指不同防腐作用的区分，储存说明归入 P5；A3 指辅助成分和易混名称。现有题目的主要目标及回看小节已同步对应，题干、答案和分值保持不变。当前抗氧化剂章测覆盖 A1–A4，A5 没有单独计分题，仍显示 Not assessed。

- `label-notes-course-v2`：长期本地进度。章节成绩保留 `first`、`latest`；首页显示 `first`。练习保留当前选择及首次、最近反馈记录。
- `label-notes-check-{章名}-v3`：当前标签页的测验答案、顺序和所在题目；刷新沿用本次顺序。
- `label-notes-active-check-v2`：同一标签页的测验导航锁。结束测验后恢复课程笔记。
- 小题记录含 `objective`、`firstCorrect`、`elapsedMs`；练习另记 `hintsUsed`、`confidence`。把握度为可选项，未选择时提交记录为 `null`，不阻止检查答案。用时是页面可见时分配给当前题目的操作时间，不是精确的认知投入量。练习从进入答题区开始计时。

数据只保存在当前浏览器，没有上传。旧版本键未删除，新版本不读取旧答案。产品来源和现有重复使用情况见 [PRODUCTS_USED.md](PRODUCTS_USED.md)。
