const state = {
  mode: "campaign",
  tab: "strategy",
};

const data = {
  campaign: {
    heroKicker: "Campaign mode",
    title: "春季新品增长战役",
    description:
      "把一句“下个月推新品，想把种草和转化都做起来”的需求，收敛成结构化 brief、渠道策略、预算场景、物料矩阵和复盘闭环。",
    status: "Planned",
    confidence: "中可信",
    owner: "Growth Lead",
    chips: ["8 周执行", "目标 800 条线索", "小红书 + 抖音 + 私域"],
    memoryStrength: "High fit",
    memoryCounts: { brand: 12, performance: 18, response: 4 },
    memoryTags: ["品牌语气", "新品 launch 案例", "小红书种草胜率", "抖音 CPA 历史", "私域承接 SOP"],
    initiatives: [
      {
        type: "Campaign",
        status: "Planned",
        title: "春季新品增长战役",
        note: "目标 800 条线索，预算建议 14.6 万",
      },
      {
        type: "Always-on",
        status: "Active",
        title: "4 月内容节奏包",
        note: "每周 4 条固定栏目内容和私域推送",
      },
      {
        type: "Response",
        status: "Watch",
        title: "微博舆情监测",
        note: "已设定统一口径，等待进一步动作",
      },
    ],
    chat: [
      { role: "user", text: "我们下个月要推一款新品，预算希望控制在 15 万以内，重点做小红书和抖音，最好能兼顾私域承接。" },
      { role: "ai", text: "我会先把这次需求收敛成 campaign brief。当前已识别目标是新品推广与线索获取，渠道优先级为种草 + 转化。还缺目标人群、线索目标和时间周期。" },
      { role: "user", text: "目标人群是 25 到 35 岁城市女性，期望 8 周跑到 800 条有效线索。" },
    ],
    briefCompleteness: "Brief 完整度 89%",
    brief: [
      ["Type", "Campaign"],
      ["Goal", "新品曝光 + 线索转化"],
      ["Audience", "25 到 35 岁城市女性"],
      ["Timing", "8 周"],
      ["Budget", "上限 15 万"],
      ["KPI", "800 条有效线索"],
      ["Constraints", "品牌调性不能过度促销化"],
    ],
    timeline: [
      ["Draft", "创建 Initiative，对话转 brief", "done"],
      ["Scoping", "补齐受众、渠道、KPI 和预算上限", "done"],
      ["Planned", "产出策略、预算场景、物料矩阵", "current"],
      ["Approved", "确认执行版预算和主张", "pending"],
      ["In execution", "进入内容生产与分发", "pending"],
      ["Review", "复盘并筛选可写回记忆", "pending"],
    ],
    approvals: ["确认 brief 与 KPI", "确认推荐预算与可接受上限", "确认主张和首批素材方向", "确认哪些结论可以写回长期记忆"],
    tabs: {
      strategy: {
        leftTitle: "Strategy frame",
        leftText:
          "系统把 conversation 收敛成结构化对象，而不是只输出一段策划文案。当前策略会由种草内容建立认知，抖音承接转化，私域负责留资后跟进。",
        bulletTitle: "核心策略对象",
        bullets: [
          "核心洞察：用户愿意为“真实体验感 + 安心感”买单，不愿被标准广告说服。",
          "信息支柱：真实场景、专业背书、价格价值比。",
          "渠道分工：小红书负责种草，抖音负责测试和放量，私域负责承接与转化。",
        ],
        rightCards: [
          {
            title: "Execution phases",
            items: [
              ["Week 1-2", "首轮概念验证和素材测试"],
              ["Week 3-5", "扩充高互动钩子，进入稳定投放"],
              ["Week 6-8", "放量与私域联动转化"],
            ],
          },
          {
            title: "Success metrics",
            items: [
              ["线索成本", "控制在 180 元以内"],
              ["种草互动率", "图文互动率 5% 以上"],
              ["私域承接", "24 小时内完成首触达"],
            ],
          },
        ],
      },
      budget: {
        cards: [
          {
            name: "Conservative",
            total: "¥118,000",
            detail: "最小可执行预算",
            lines: [
              ["Production", "¥22,000"],
              ["Media", "¥63,000"],
              ["Distribution", "¥18,000"],
              ["Contingency", "¥15,000"],
            ],
          },
          {
            name: "Recommended",
            total: "¥146,000",
            detail: "平衡效果与风险",
            lines: [
              ["Production", "¥28,000"],
              ["Media", "¥84,000"],
              ["Distribution", "¥20,000"],
              ["Contingency", "¥14,000"],
            ],
            recommended: true,
          },
          {
            name: "Aggressive",
            total: "¥198,000",
            detail: "适合放量和达人协同",
            lines: [
              ["Production", "¥38,000"],
              ["Media", "¥118,000"],
              ["Distribution", "¥24,000"],
              ["Contingency", "¥18,000"],
            ],
          },
        ],
        stats: [
          ["Confidence", "中可信", "已有同类客户历史和渠道 benchmark"],
          ["Primary basis", "历史 CPA + 新品 benchmark", "小红书种草和抖音转化历史已纳入"],
          ["Budget trigger", "渠道 / 素材 / KPI 变化", "变化时只更新 forecast，不覆盖已批准预算"],
        ],
        assumptions: [
          "抖音信息流前两周只花 20% 测试预算，再根据 CPA 达标情况扩量。",
          "小红书内容主要承担低成本点击和信任建立，不直接背最终成交目标。",
          "私域承接转化率按历史均值估算，若客服 SLA 下滑则 forecast 自动降级。",
        ],
      },
      assets: {
        title: "Asset matrix",
        intro:
          "同一个 strategy 之下，系统输出的是物料矩阵而不是零散文案。每份物料都知道自己服务哪个渠道、哪个目的、处于什么状态。",
        assets: [
          ["小红书图文 01", "种草", "真实体验向开箱结构，待审"],
          ["抖音视频脚本 02", "测试", "3 秒痛点切入版本，草稿"],
          ["私域欢迎话术", "承接", "留资后 10 分钟自动首触达，已确认"],
          ["Landing Page 首屏", "转化", "信息主张与 FAQ 同步，设计中"],
        ],
        support: [
          ["Versioning", "所有资产都绑定当前 strategy 与 budget 版本"],
          ["Approval", "未审批资产不会被标记为可发布"],
          ["Reuse", "高表现资产会进入 always-on 素材池"],
        ],
      },
      distribution: {
        channels: [
          {
            name: "小红书",
            role: "种草与信任建立",
            text: "用体验内容和口碑式表达打前站，积累低成本点击和搜索意图。",
            budget: "¥20,000",
            metric: "收藏率 / 点击率",
          },
          {
            name: "抖音",
            role: "测试与放量",
            text: "承接转化目标，先跑 3 套钩子和 2 套落地页，再按 CPA 扩量。",
            budget: "¥84,000",
            metric: "CTR / CPA",
          },
          {
            name: "私域",
            role: "承接与跟进",
            text: "根据线索来源自动匹配话术和节奏，推动预约和二次转化。",
            budget: "¥12,000",
            metric: "首响时长 / 留资转化率",
          },
        ],
        notes: [
          "Distribution plan 不是建议发哪里，而是说明每个渠道承担什么任务。",
          "如果某渠道被移除，系统会触发 budget soft recalc 并提示目标是否需要重设。",
        ],
      },
      review: {
        recap: [
          ["What worked", "真实体验型内容的点击成本更低，私域承接后咨询率提升明显。"],
          ["What failed", "高承诺广告化标题虽然 CTR 高，但落地页转化率更差。"],
          ["Budget variance", "实际花费比 forecast 低 6%，主要因为测试阶段提前淘汰了低表现素材。"],
        ],
        writebacks: [
          "可写回 Brand Memory：用户更认可“真实体验 + 专业背书”的组合表达。",
          "可写回 Performance Memory：抖音前 3 秒必须场景化，否则 CPA 明显偏高。",
          "不建议写回：这次短期优惠机制的高转化，不足以证明它是长期品牌策略。",
        ],
      },
    },
  },
  always_on: {
    heroKicker: "Always-on mode",
    title: "四月日常运营节奏包",
    description:
      "用于承接周更栏目、社媒运营和私域维护。结构比 campaign 轻，但依然保留 brief、资产、分发、预算包和轻复盘。",
    status: "Active",
    confidence: "高可信",
    owner: "Content Manager",
    chips: ["滚动按月", "每周 4 条内容", "社媒 + 私域持续联动"],
    memoryStrength: "Very high fit",
    memoryCounts: { brand: 12, performance: 24, response: 4 },
    memoryTags: ["栏目模板", "高互动话题", "周更节奏", "品牌禁忌词", "私域转化话术"],
    initiatives: [
      {
        type: "Always-on",
        status: "Active",
        title: "四月日常运营节奏包",
        note: "固定栏目、节奏化分发、预算按月管理",
      },
      {
        type: "Campaign",
        status: "Planned",
        title: "春季新品增长战役",
        note: "已完成 brief 与预算场景",
      },
      {
        type: "Response",
        status: "Watch",
        title: "微博舆情监测",
        note: "口径已准备，等待进一步升级",
      },
    ],
    chat: [
      { role: "user", text: "我们四月份需要固定更新品牌栏目，每周 4 条内容，小红书、公众号和私域都要有节奏，预算别做太重。" },
      { role: "ai", text: "我会把它创建成 always-on initiative。重点不是完整战役，而是栏目计划、资产复用、分发节奏和月度预算包。" },
      { role: "user", text: "可以，优先做品牌教育和轻转化，不希望每天都在硬卖货。" },
    ],
    briefCompleteness: "Brief 完整度 92%",
    brief: [
      ["Type", "Always-on"],
      ["Goal", "稳定输出与持续种草"],
      ["Audience", "新关注用户 + 已有私域用户"],
      ["Timing", "按月滚动"],
      ["Budget", "月度预算包"],
      ["KPI", "内容完成率 / 互动率 / 私域触达"],
      ["Constraints", "不能高频硬广，优先品牌教育"],
    ],
    timeline: [
      ["Draft", "定义月度目标和内容主题", "done"],
      ["Scoping", "明确栏目、频次和渠道", "done"],
      ["Planned", "输出内容矩阵和预算包", "done"],
      ["Approved", "确认当月排期和素材方向", "current"],
      ["In execution", "按周迭代更新", "pending"],
      ["Review", "月度轻复盘和素材沉淀", "pending"],
    ],
    approvals: ["确认栏目框架与频率", "确认月度预算包", "确认禁止触碰的话术边界"],
    tabs: {
      strategy: {
        leftTitle: "Operating system",
        leftText:
          "Always-on 模式更强调稳定节奏，而不是一次性大 campaign。系统会把品牌表达、栏目模板和历史高表现内容优先调出来。",
        bulletTitle: "本月内容支柱",
        bullets: [
          "品牌教育：让用户逐步理解品牌差异，而不是单次强转化。",
          "真实场景：围绕用户使用场景建立连续性内容。",
          "轻转化承接：在私域中完成温和转化，而不是社媒直接压单。",
        ],
        rightCards: [
          {
            title: "Weekly rhythm",
            items: [
              ["Monday", "品牌观点栏目"],
              ["Wednesday", "场景向图文或短视频"],
              ["Friday", "FAQ 或用户反馈内容"],
              ["Weekend", "私域精选与互动回流"],
            ],
          },
          {
            title: "Success metrics",
            items: [
              ["内容完成率", "100% 按排期交付"],
              ["互动稳定性", "周波动小于 15%"],
              ["资产复用率", "至少 30% 资产可二次加工"],
            ],
          },
        ],
      },
      budget: {
        cards: [
          {
            name: "Light",
            total: "¥28,000 / 月",
            detail: "维持稳定更新",
            lines: [
              ["Production", "¥18,000"],
              ["Distribution", "¥4,000"],
              ["Operation", "¥4,000"],
              ["Contingency", "¥2,000"],
            ],
          },
          {
            name: "Recommended",
            total: "¥42,000 / 月",
            detail: "兼顾栏目与测试",
            lines: [
              ["Production", "¥24,000"],
              ["Distribution", "¥7,000"],
              ["Operation", "¥7,000"],
              ["Contingency", "¥4,000"],
            ],
            recommended: true,
          },
          {
            name: "Expanded",
            total: "¥65,000 / 月",
            detail: "加上达人试水和内容放大",
            lines: [
              ["Production", "¥33,000"],
              ["Distribution", "¥14,000"],
              ["Operation", "¥11,000"],
              ["Contingency", "¥7,000"],
            ],
          },
        ],
        stats: [
          ["Confidence", "高可信", "栏目制内容和月度预算稳定，历史参考足够"],
          ["Primary basis", "历史月度执行数据", "更偏预算包而不是一次性媒体预算"],
          ["Budget trigger", "栏目数量 / 渠道增加", "新增栏目时更新月度包，不影响其他对象"],
        ],
        assumptions: [
          "预算不是完整 media plan，而是按月管理的内容和运营包。",
          "优先复用已有资产，复用率越高，当月 production 成本越低。",
          "若新增平台，系统会自动提高 contingency 并降低预算置信度。",
        ],
      },
      assets: {
        title: "Content cadence matrix",
        intro:
          "Always-on 模式里，资产的价值在于模板和复用。系统会持续沉淀可复用结构，而不是每次都从零写。",
        assets: [
          ["品牌观点栏目", "教育", "每周一固定结构，已模板化"],
          ["场景图文套件", "种草", "同一主题拆成图文和短视频双版本"],
          ["私域精选摘要", "承接", "每周末回流内容，待审"],
          ["用户反馈卡片", "信任", "从高质量评论中提炼，草稿"],
        ],
        support: [
          ["Versioning", "模板和单条内容分开管理"],
          ["Approval", "栏目模板批准后可批量生成新内容"],
          ["Reuse", "高表现内容可自动推荐进入下月节奏包"],
        ],
      },
      distribution: {
        channels: [
          {
            name: "小红书",
            role: "内容持续种草",
            text: "保持固定栏目存在感，稳定积累兴趣和搜索。",
            budget: "¥10,000",
            metric: "互动率 / 收藏率",
          },
          {
            name: "公众号",
            role: "深度教育",
            text: "用长文解释品牌方法论和案例，让内容具备沉淀价值。",
            budget: "¥8,000",
            metric: "完读率 / 分享率",
          },
          {
            name: "私域",
            role: "回流和轻转化",
            text: "把公开内容回流到私域，用低压方式推动下一步互动。",
            budget: "¥7,000",
            metric: "触达率 / 点击率",
          },
        ],
        notes: [
          "Always-on 更强调节奏协同，不追求每个渠道都独立背强结果。",
          "如果某周内容缺口过大，系统会优先推荐资产复用而不是盲目新增预算。",
        ],
      },
      review: {
        recap: [
          ["What worked", "固定栏目让用户预期更明确，互动波动显著下降。"],
          ["What failed", "过度追热点会打乱品牌统一表达，且复用价值低。"],
          ["Budget variance", "由于资产复用率高于预期，production 实际节省 12%。"],
        ],
        writebacks: [
          "可写回 Brand Memory：用户更接受“教育型 + 场景型”内容组合。",
          "可写回 Performance Memory：周末私域精选的点击率高于工作日群发。",
          "不建议写回：某一篇热点内容的偶然爆发，不足以改写长期栏目策略。",
        ],
      },
    },
  },
  response: {
    heroKicker: "Response mode",
    title: "微博突发舆情响应",
    description:
      "用于承接突发事件、危机口径、热点借势和应急内容。流程更短，但人工确认点更重，预算更多体现响应成本而不是完整投放预算。",
    status: "Watch",
    confidence: "探索性预算",
    owner: "Brand Ops",
    chips: ["48 小时窗口", "高风险口径", "声明 + FAQ + 客服同步"],
    memoryStrength: "Rule-first",
    memoryCounts: { brand: 10, performance: 9, response: 11 },
    memoryTags: ["危机禁忌词", "官方声明格式", "客服同步口径", "舆情升级阈值", "审批名单"],
    initiatives: [
      {
        type: "Response",
        status: "Watch",
        title: "微博突发舆情响应",
        note: "已进入监测，等待是否升级对外声明",
      },
      {
        type: "Campaign",
        status: "Planned",
        title: "春季新品增长战役",
        note: "主策略与预算场景已完成",
      },
      {
        type: "Always-on",
        status: "Active",
        title: "四月日常运营节奏包",
        note: "栏目内容按周更新中",
      },
    ],
    chat: [
      { role: "user", text: "今天微博上有用户集中质疑我们的成分描述，客服已经收到问询，想先统一口径并准备一版可能的公开回应。" },
      { role: "ai", text: "我会创建 response initiative。优先级是事件判断、风险分级、统一口径、声明草案和客服 FAQ，同步保留是否需要投放压负面情绪的成本评估。" },
      { role: "user", text: "可以，先不要公开发声明，但内部需要 2 小时内拿出可审的版本。" },
    ],
    briefCompleteness: "Brief 完整度 86%",
    brief: [
      ["Type", "Response"],
      ["Goal", "统一口径并准备外部回应"],
      ["Audience", "现有客户 / 围观用户 / 客服团队"],
      ["Timing", "2 小时内初版"],
      ["Budget", "按响应成本评估"],
      ["Risk", "高"],
      ["Constraints", "未经审批不能对外发布"],
    ],
    timeline: [
      ["Draft", "识别事件并创建 response", "done"],
      ["Scoping", "判断风险等级和影响范围", "done"],
      ["Planned", "生成口径、FAQ、声明草案", "current"],
      ["Approved", "法务 / 品牌负责人审批", "pending"],
      ["In execution", "同步客服和外部动作", "pending"],
      ["Review", "复盘响应效率和舆情变化", "pending"],
    ],
    approvals: ["确认风险等级", "确认对外口径与声明", "确认是否需要额外投放或 KOL 协助", "确认可写回的危机处理规则"],
    tabs: {
      strategy: {
        leftTitle: "Response frame",
        leftText:
          "Response 模式不是完整 campaign，而是高时效工作台。系统会优先调取规则、审批人和官方口径，而不是直接铺开创意。",
        bulletTitle: "当前建议动作",
        bullets: [
          "先统一内部口径，禁止客服自由发挥。",
          "准备公开声明草案，但在风险确认前不主动发出。",
          "同步 FAQ 和升级阈值，一旦负面扩散超过阈值再进入公开回应或媒介动作。",
        ],
        rightCards: [
          {
            title: "Risk watch",
            items: [
              ["2 hours", "完成内部口径和 FAQ"],
              ["6 hours", "监测讨论量和情绪走势"],
              ["24 hours", "决定是否公开回应或引导说明"],
            ],
          },
          {
            title: "Success metrics",
            items: [
              ["一致性", "客服与公域口径不冲突"],
              ["时效", "2 小时内拿到可审稿"],
              ["风险控制", "避免二次误导和扩散"],
            ],
          },
        ],
      },
      budget: {
        cards: [
          {
            name: "Internal only",
            total: "¥8,000",
            detail: "只做内部响应和 FAQ",
            lines: [
              ["Operation", "¥3,000"],
              ["Production", "¥2,000"],
              ["Monitoring", "¥1,000"],
              ["Contingency", "¥2,000"],
            ],
          },
          {
            name: "Recommended",
            total: "¥18,000",
            detail: "含声明设计和客服培训",
            lines: [
              ["Operation", "¥6,000"],
              ["Production", "¥4,000"],
              ["Monitoring", "¥3,000"],
              ["Contingency", "¥5,000"],
            ],
            recommended: true,
          },
          {
            name: "Escalated",
            total: "¥46,000",
            detail: "含必要媒介与额外资源",
            lines: [
              ["Operation", "¥10,000"],
              ["Production", "¥7,000"],
              ["Distribution", "¥18,000"],
              ["Contingency", "¥11,000"],
            ],
          },
        ],
        stats: [
          ["Confidence", "探索性预算", "response 成本依赖事件走向，不宜伪装成精准预算"],
          ["Primary basis", "响应模板 + 历史事件", "以规则和资源调用成本为主"],
          ["Budget trigger", "舆情升级 / 法务要求", "一旦升级为公开回应，进入 hard recalc"],
        ],
        assumptions: [
          "预算本质是 response cost estimate，而不是传统 media budget。",
          "若事件在 6 小时内降温，可维持内部处理，不启动扩散性动作。",
          "若需要投放或第三方发声，需重新审批并提高 contingency。",
        ],
      },
      assets: {
        title: "Response output set",
        intro:
          "在 response 模式下，FAQ、声明、客服话术比创意物料更重要。系统会按优先级生成最能降低风险的资产。",
        assets: [
          ["客服 FAQ", "内部同步", "15 个高频问题，已确认"],
          ["官方声明草案", "对外预备", "待法务审阅"],
          ["微博回应短版", "公开回复", "未启用"],
          ["创始人口径备忘", "内部使用", "草稿"],
        ],
        support: [
          ["Versioning", "所有口径改动必须留版本"],
          ["Approval", "未批准内容不能对外使用"],
          ["Reuse", "仅规则与流程可复用，不直接复用事件结论"],
        ],
      },
      distribution: {
        channels: [
          {
            name: "客服",
            role: "第一响应面",
            text: "先统一内部话术，确保最先接触用户的团队不制造新风险。",
            budget: "¥3,000",
            metric: "响应一致性 / 首次解决率",
          },
          {
            name: "微博公域",
            role: "必要时公开回应",
            text: "只在达到阈值时启用，避免无意义放大事件。",
            budget: "¥0 - ¥18,000",
            metric: "负面讨论量 / 情绪变化",
          },
          {
            name: "私域",
            role: "重点客户安抚",
            text: "向核心用户提供更完整解释，避免误解扩散到高价值关系。",
            budget: "¥4,000",
            metric: "重点用户流失率",
          },
        ],
        notes: [
          "Response 模式的分发不是追求覆盖，而是最小必要动作和风险控制。",
          "如果事件升级，分发计划会从内部同步切到公开回应，并要求人工重新批准。",
        ],
      },
      review: {
        recap: [
          ["What worked", "统一客服话术后，公域新增误解明显下降。"],
          ["What failed", "个别未经同步的回复造成二次讨论，说明审批与分发边界还不够清晰。"],
          ["Budget variance", "最终只执行了内部响应版本，实际花费远低于升级版预算。"],
        ],
        writebacks: [
          "可写回 Brand Memory：公开口径中必须避免绝对化描述。",
          "可写回 Performance Memory：客服 FAQ 提前同步能显著降低舆情扩散。",
          "不建议写回：单次事件中的用户情绪判断，不应当长期固化为品牌判断。",
        ],
      },
    },
  },
};

const tabButtons = document.getElementById("tabButtons");
const modeSwitch = document.getElementById("modeSwitch");

modeSwitch.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  state.tab = "strategy";
  render();
});

tabButtons.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  state.tab = button.dataset.tab;
  renderTabs();
  syncActiveStates();
});

function render() {
  const current = data[state.mode];

  document.getElementById("heroKicker").textContent = current.heroKicker;
  document.getElementById("heroTitle").textContent = current.title;
  document.getElementById("heroDescription").textContent = current.description;
  document.getElementById("heroStatus").textContent = current.status;
  document.getElementById("heroConfidence").textContent = current.confidence;
  document.getElementById("heroOwner").textContent = current.owner;
  document.getElementById("briefCompleteness").textContent = current.briefCompleteness;
  document.getElementById("memoryStrength").textContent = current.memoryStrength;
  document.getElementById("brandMemoryCount").textContent = current.memoryCounts.brand;
  document.getElementById("performanceMemoryCount").textContent = current.memoryCounts.performance;
  document.getElementById("responseMemoryCount").textContent = current.memoryCounts.response;

  document.getElementById("heroChips").innerHTML = current.chips
    .map((chip) => `<span class="hero-chip">${chip}</span>`)
    .join("");

  document.getElementById("memoryTags").innerHTML = current.memoryTags
    .map((tag) => `<li>${tag}</li>`)
    .join("");

  renderInitiatives(current.initiatives);
  renderChat(current.chat);
  renderBrief(current.brief);
  renderTimeline(current.timeline);
  renderApprovals(current.approvals);
  renderTabs();
  syncActiveStates();
}

function renderInitiatives(items) {
  const template = document.getElementById("initiativeItemTemplate");
  const list = document.getElementById("initiativeList");

  list.innerHTML = "";
  items.forEach((item, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.classList.toggle("is-active", index === 0);
    node.querySelector(".initiative-type").textContent = item.type;
    node.querySelector(".initiative-status").textContent = item.status;
    node.querySelector(".initiative-title").textContent = item.title;
    node.querySelector(".initiative-note").textContent = item.note;
    list.appendChild(node);
  });
}

function renderChat(messages) {
  document.getElementById("chatColumn").innerHTML = messages
    .map(
      (message) =>
        `<div class="chat-bubble ${message.role}">${message.text}</div>`
    )
    .join("");
}

function renderBrief(items) {
  document.getElementById("briefColumn").innerHTML = `
    <div class="brief-grid">
      ${items
        .map(
          ([label, value]) => `
            <div class="brief-item">
              <strong>${label}</strong>
              <span>${value}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTimeline(steps) {
  document.getElementById("timeline").innerHTML = steps
    .map(
      ([name, note, status]) => `
        <div class="timeline-step ${status === "done" ? "is-done" : ""} ${status === "current" ? "is-current" : ""}">
          <span class="timeline-dot"></span>
          <div>
            <div class="timeline-name">${name}</div>
            <div class="timeline-note">${note}</div>
          </div>
          <span class="section-meta">${status === "done" ? "done" : status === "current" ? "current" : "next"}</span>
        </div>
      `
    )
    .join("");
}

function renderApprovals(items) {
  document.getElementById("approvalList").innerHTML = items
    .map((item) => `<li>${item}</li>`)
    .join("");
}

function renderTabs() {
  const current = data[state.mode].tabs[state.tab];
  const container = document.getElementById("tabContent");

  if (state.tab === "strategy") {
    container.innerHTML = `
      <div class="content-grid">
        <div class="stack">
          <div class="card">
            <h4>${current.leftTitle}</h4>
            <p>${current.leftText}</p>
          </div>
          <div class="card">
            <h4>${current.bulletTitle}</h4>
            <ul class="bullet-list">
              ${current.bullets.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </div>
        <div class="stack">
          ${current.rightCards
            .map(
              (card) => `
                <div class="card">
                  <h4>${card.title}</h4>
                  <ul class="metric-list">
                    ${card.items
                      .map(
                        ([name, value]) => `
                          <li>
                            <strong>${name}</strong>
                            <span>${value}</span>
                          </li>
                        `
                      )
                      .join("")}
                  </ul>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `;
    return;
  }

  if (state.tab === "budget") {
    container.innerHTML = `
      <div class="budget-strip">
        ${current.cards
          .map(
            (card) => `
              <div class="budget-card ${card.recommended ? "recommended" : ""}">
                <span>${card.name}</span>
                <strong>${card.total}</strong>
                <p>${card.detail}</p>
                <div class="budget-lines">
                  ${card.lines
                    .map(
                      ([name, value]) => `
                        <div class="budget-line">
                          <span>${name}</span>
                          <strong>${value}</strong>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="mini-stat-grid">
        ${current.stats
          .map(
            ([name, value, note]) => `
              <div class="mini-stat">
                <span>${name}</span>
                <strong>${value}</strong>
                <p>${note}</p>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="card">
        <h4>Key assumptions</h4>
        <ul class="bullet-list">
          ${current.assumptions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
    return;
  }

  if (state.tab === "assets") {
    container.innerHTML = `
      <div class="content-grid">
        <div class="stack">
          <div class="card">
            <h4>${current.title}</h4>
            <p>${current.intro}</p>
          </div>
          <div class="card">
            <h4>Assets</h4>
            <ul class="asset-list">
              ${current.assets
                .map(
                  ([name, purpose, detail]) => `
                    <li>
                      <strong>${name}</strong>
                      <span>${purpose} · ${detail}</span>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </div>
        </div>
        <div class="stack">
          <div class="card">
            <h4>System rules</h4>
            <ul class="metric-list">
              ${current.support
                .map(
                  ([name, detail]) => `
                    <li>
                      <strong>${name}</strong>
                      <span>${detail}</span>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (state.tab === "distribution") {
    container.innerHTML = `
      <div class="distribution-grid">
        ${current.channels
          .map(
            (channel) => `
              <div class="channel-card">
                <h4>${channel.name}</h4>
                <span class="section-meta">${channel.role}</span>
                <p>${channel.text}</p>
                <div class="channel-meta">
                  <div>
                    <span>Budget</span>
                    <strong>${channel.budget}</strong>
                  </div>
                  <div>
                    <span>Metric</span>
                    <strong>${channel.metric}</strong>
                  </div>
                </div>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="card">
        <h4>Distribution notes</h4>
        <ul class="bullet-list">
          ${current.notes.map((note) => `<li>${note}</li>`).join("")}
        </ul>
      </div>
    `;
    return;
  }

  if (state.tab === "review") {
    container.innerHTML = `
      <div class="content-grid">
        <div class="card">
          <h4>Retrospective snapshot</h4>
          <ul class="review-list">
            ${current.recap
              .map(
                ([name, value]) => `
                  <li>
                    <strong>${name}</strong>
                    <span>${value}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>
        <div class="card">
          <h4>Memory writeback candidates</h4>
          <ul class="bullet-list">
            ${current.writebacks.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }
}

function syncActiveStates() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === state.tab);
  });
}

render();
