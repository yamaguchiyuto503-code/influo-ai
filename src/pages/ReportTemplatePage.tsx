import './ReportTemplatePage.css'

const contents = [
  { index: '01', title: '总体监测概况', page: '01' },
  { index: '02', title: '异常情况', page: '02' },
  { index: '03', title: '转播方异常情况', page: '03' },
  { index: '04', title: '盗播情况', page: '04' },
]

const summaryStats = [
  { label: '监测比赛场次', value: '54', unit: '场' },
  { label: '有效视频回收', value: '47', unit: '场' },
  { label: '转播异常案例', value: '9', unit: '例' },
  { label: '疑似盗播线索', value: '12', unit: '条' },
]

const overviewHighlights = [
  '本期监测覆盖江苏省城市足球联赛重点场次，已完成主流转播主体与平台侧视频回收。',
  '样本中转播异常主要集中在未按时开播、入口失效及中途信号中断三个方向。',
  '疑似盗播内容以短视频直播切片和聚合转载为主，扩散速度快于图文转载链路。',
]

const overviewTableRows = [
  ['央视网', '宿迁 vs 南京', '严重违规', '赛事实录号画面长期替代正式转播信号'],
  ['新华日报抖音号', '徐州 vs 泰州', '严重违规', '直播画面未做版权规避处理'],
  ['人民日记客户端', '宿迁 vs 南京', '未按时开播', '原定开赛后 19 分钟才出现直播入口'],
  ['现代快报微博号', '淮安 vs 扬州', '入口异常', '跳转页无有效播放组件'],
  ['淮海晚报抖音号', '淮安 vs 扬州', '严重违规', '直播后被多个账号继续转载扩散'],
]

const anomalyMetrics = [
  { label: '严重违规', value: '6', detail: '含疑似未经授权转播与明显版权规避缺失' },
  { label: '未按时开播', value: '3', detail: '集中出现在赛前预告与正式直播切换阶段' },
  { label: '疑似盗播', value: '12', detail: '以切片搬运、聚合站转载和伴随解说形式出现' },
]

const anomalySummary = [
  {
    title: '问题分布',
    body: '异常案例主要集中在短视频平台和新闻客户端。前者问题表现为直播管理粗放，后者则更多出现在直播入口配置与开播时序上。',
  },
  {
    title: '传播风险',
    body: '盗播类内容在比赛进行期间扩散更快，若未及时留痕并联动平台处理，容易形成二次转载与搜索聚合结果残留。',
  },
  {
    title: '处置建议',
    body: '建议建立赛前账号配置复核、赛中问题即时留痕、赛后复盘归档的三段式监测机制，提高问题闭环效率。',
  },
]

const broadcasterRows = [
  ['央视网', '宿迁 vs 南京', '严重违规', '直播信号与官方授权画面不一致，画面中存在明显替代素材'],
  ['新华日报抖音号', '徐州 vs 泰州', '严重违规', '整场直播未设置版权风险规避，评论区出现转载引流信息'],
  ['人民日记客户端', '宿迁 vs 南京', '未按时开播', '赛前页面已创建，但开赛后较长时间未提供有效直播入口'],
  ['现代快报微博号', '淮安 vs 扬州', '入口异常', '落地页展示正常，但播放器区域为空白'],
  ['江苏观察视频号', '常州 vs 南通', '信号中断', '直播进行 26 分钟后中断，未见及时恢复提示'],
]

const broadcasterNotes = [
  '赛前页与正式开播页之间的配置衔接仍是转播异常高发点。',
  '短视频平台账号存在授权说明缺失、直播标题表述不规范等问题。',
  '建议在每轮比赛前增加一次平台入口巡检，并保留账号级白名单台账。',
]

const piracyStats = [
  { label: '短视频账号搬运', value: '7' },
  { label: '聚合站点转载', value: '3' },
  { label: '社群分发线索', value: '2' },
]

const piracyRows = [
  ['短视频直播账号', '比赛实时切片', '高', '以即时比分解说或伴随画中画形式出现，传播速度快'],
  ['聚合资讯站点', '赛事实时页面嵌入', '中', '通过外链播放器聚合转载，易在搜索结果页暴露'],
  ['个人社媒账号', '完整录像回放', '中', '赛后 2 小时内出现完整录像搬运链接'],
  ['讨论群与社群渠道', '录屏二次分发', '低', '传播范围有限，但隐蔽性较高，需配合截图留存'],
]

const piracyActions = [
  '优先锁定比赛进行中的高扩散盗播线索，缩短赛中反馈与下架时间。',
  '对已识别的聚合站点与高频转载账号建立持续观察名单，防止反复出现。',
  '保留时间戳、账号页、播放页和搜索结果页的完整截图，便于后续平台申诉与复核。',
]

function InfluoLockup({ muted = false }: { muted?: boolean }) {
  return (
    <div className={`report-influo-lockup${muted ? ' report-influo-lockup--muted' : ''}`}>
      <img src="/influo-logo-horizontal.svg" alt="influo AI" />
    </div>
  )
}

function CoverProducerBrand() {
  return (
    <div className="report-cover__producer">
      <span className="report-cover__producer-label">制作单位</span>
      <div className="report-cover__producer-brand">
        <div className="report-cover__producer-main">
          <img src="/influo-logo-horizontal.svg" alt="influo AI" className="report-cover__producer-image" />
        </div>

        <div className="report-cover__producer-subbrand">
          <span className="report-cover__producer-subbrand-label">旗下赛事监测品牌</span>
          <div className="report-cover__producer-subbrand-mark">
            <img src="/influo-subbrand-logo.png" alt="StreamHound" />
            <span>StreamHound</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReportTopline({ section, title }: { section: string; title: string }) {
  return (
    <div className="report-page__topline">
      <header className="report-header report-header--content">
        <span className="report-header__section">{section}</span>
        <h2>{title}</h2>
      </header>
      <InfluoLockup muted />
    </div>
  )
}

function ReportFooter({ label, page }: { label: string; page: string }) {
  return (
    <footer className="report-footer">
      <span>{label}</span>
      <span className="report-footer__rule" aria-hidden="true" />
      <span className="report-footer__page">{page}</span>
    </footer>
  )
}

export default function ReportTemplatePage() {
  return (
    <main className="report-template">
      <div className="report-toolbar">
        <div>
          <p className="report-toolbar__title">苏超监测报告模板</p>
          <p className="report-toolbar__hint">A4 竖版预览、打印导出 PDF 与后续周报迭代均基于此页完成。</p>
        </div>
        <button className="report-toolbar__button" onClick={() => window.print()}>
          打印 / 导出 PDF
        </button>
      </div>

      <div className="report-stack">
        <section className="report-page report-page--cover">
          <div className="report-page__inner">
            <div className="report-cover__logos">
              <div className="report-cover__brand-block">
                <span className="report-cover__producer-label">委托单位</span>
                <div className="report-cover__brand-main">
                  <img
                    src="/client-logo-horizontal.png"
                    alt="江苏体育休闲频道"
                    className="report-cover__logo"
                  />
                </div>
              </div>
              <CoverProducerBrand />
            </div>

            <div className="report-cover__content">
              <span className="report-cover__eyebrow">赛事传播监测专报</span>
              <div className="report-cover__title-wrap">
                <span className="report-cover__bar" aria-hidden="true" />
                <div>
                  <h1 className="report-cover__title">苏超监测报告</h1>
                  <p className="report-cover__subtitle">赛事转播监测与风险情况报告</p>
                </div>
              </div>

              <dl className="report-cover__meta">
                <div>
                  <dt>监测日期</dt>
                  <dd>2026 年 4 月 18 日</dd>
                </div>
                <div>
                  <dt>监测对象</dt>
                  <dd>江苏省城市足球联赛</dd>
                </div>
                <div>
                  <dt>制作单位</dt>
                  <dd>Influo AI</dd>
                </div>
              </dl>
            </div>

            <div className="report-cover__summary">
              {summaryStats.slice(0, 3).map((stat) => (
                <div className="report-cover__summary-item" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>
                    {stat.value}
                    <small>{stat.unit}</small>
                  </strong>
                </div>
              ))}
            </div>

            <aside className="report-cover__aside">
              <div className="report-cover__aside-card">
                <span className="report-cover__aside-label">本期重点</span>
                <p>本期重点关注转播合规性、开播时序稳定性以及疑似盗播内容扩散情况。</p>
              </div>
            </aside>

            <div className="report-cover__footer">
              <span>江苏体育休闲频道专项监测模板</span>
              <span>用于内部审阅与 PDF 交付</span>
            </div>

            <div className="report-mark report-mark--cover" aria-hidden="true">
              <img src="/client-logo-mark.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="report-page">
          <div className="report-page__inner">
            <div className="report-page__topline">
              <header className="report-header">
                <span className="report-header__section">目录</span>
                <h2>目录</h2>
              </header>
              <InfluoLockup muted />
            </div>

            <div className="report-toc">
              <div className="report-toc__list">
                {contents.map((item) => (
                  <div className="report-toc__row" key={item.title}>
                    <span className="report-toc__index">{item.index}</span>
                    <span className="report-toc__title">{item.title}</span>
                    <span className="report-toc__leader" />
                    <span className="report-toc__page">{item.page}</span>
                  </div>
                ))}
              </div>

              <aside className="report-toc__aside">
                <span className="report-kicker">结构说明</span>
                <p>目录维持一级章节表达，避免二级目录过细造成版面零碎，便于正式导出时快速导航。</p>
                <ul>
                  <li>正文首页从 `01` 开始计页</li>
                  <li>封面与目录页不单独显示页码</li>
                  <li>异常情况拆为总览页与两个独立内容页</li>
                </ul>
              </aside>
            </div>

            <div className="report-mark report-mark--toc" aria-hidden="true">
              <img src="/client-logo-mark.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="report-page">
          <div className="report-page__inner">
            <ReportTopline section="01" title="总体监测概况" />

            <p className="report-intro">
              本期监测覆盖江苏省城市足球联赛重点转播场次，围绕视频回收效率、转播合规情况、
              平台开播稳定性及疑似盗播扩散进行统一留痕。当前模板页使用示意数据，以便后续直接
              替换成正式周报内容。
            </p>

            <div className="report-stats">
              {summaryStats.map((stat) => (
                <article className="report-stat" key={stat.label}>
                  <span className="report-stat__label">{stat.label}</span>
                  <strong>
                    {stat.value}
                    <small>{stat.unit}</small>
                  </strong>
                </article>
              ))}
            </div>

            <div className="report-overview-grid">
              <section className="report-panel">
                <span className="report-kicker">监测摘要</span>
                <ul className="report-bullet-list">
                  {overviewHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="report-panel report-panel--accent">
                <span className="report-kicker">结论判断</span>
                <p className="report-panel__text">
                  总体来看，视频回收率保持在可接受区间，但异常问题已经从单纯的转播质量问题，
                  延伸到赛中入口体验与赛后盗播扩散两个层面，建议将异常留痕和平台处置同步推进。
                </p>
              </section>
            </div>

            <div className="report-table-wrap">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>序号</th>
                    <th>转播主体</th>
                    <th>转播场次</th>
                    <th>问题类型</th>
                    <th>备注说明</th>
                  </tr>
                </thead>
                <tbody>
                  {overviewTableRows.map((row, index) => (
                    <tr key={`${row[0]}-${index}`}>
                      <td>{String(index + 1).padStart(2, '0')}</td>
                      {row.map((cell) => (
                        <td key={`${cell}-${index}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ReportFooter label="总体监测概况" page="01" />

            <div className="report-mark report-mark--content" aria-hidden="true">
              <img src="/logo.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="report-page">
          <div className="report-page__inner">
            <ReportTopline section="02" title="异常情况" />

            <p className="report-intro">
              本页作为异常情况总览，先汇总本期监测中最重要的问题类别与风险判断，再在后续页分别
              展开转播方异常情况与盗播情况。这样的结构更适合固定周报模板长期沉淀。
            </p>

            <div className="report-metric-grid">
              {anomalyMetrics.map((metric) => (
                <article className="report-metric" key={metric.label}>
                  <span className="report-metric__label">{metric.label}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.detail}</p>
                </article>
              ))}
            </div>

            <div className="report-section-grid report-section-grid--stacked">
              {anomalySummary.map((item) => (
                <article className="report-risk-card" key={item.title}>
                  <span className="report-kicker">总览</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <section className="report-panel report-panel--full">
              <span className="report-kicker">本期建议动作</span>
              <div className="report-actions">
                <div>
                  <h3>赛前</h3>
                  <p>对重点账号直播配置、授权说明与入口链路进行抽检，减少开赛初期异常。</p>
                </div>
                <div>
                  <h3>赛中</h3>
                  <p>遇到重大异常时同步进行截图留痕与问题分级，保证处理信息可直接外发。</p>
                </div>
                <div>
                  <h3>赛后</h3>
                  <p>将盗播高频账号与站点沉淀为持续观察清单，为下一轮赛事提供监测依据。</p>
                </div>
              </div>
            </section>

            <ReportFooter label="异常情况" page="02" />

            <div className="report-mark report-mark--content" aria-hidden="true">
              <img src="/logo.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="report-page">
          <div className="report-page__inner">
            <ReportTopline section="03" title="转播方异常情况" />

            <p className="report-intro">
              转播方异常主要集中在直播入口配置不稳定、开播时序延迟以及版权处理规范不一致等问题。
              下面以重点案例样张形式展示当前内容排版方式。
            </p>

            <div className="report-table-wrap">
              <table className="report-table report-table--compact">
                <thead>
                  <tr>
                    <th>转播主体</th>
                    <th>对应场次</th>
                    <th>异常类型</th>
                    <th>监测说明</th>
                  </tr>
                </thead>
                <tbody>
                  {broadcasterRows.map((row, index) => (
                    <tr key={`${row[0]}-${index}`}>
                      {row.map((cell) => (
                        <td key={`${cell}-${index}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="report-note-grid">
              <section className="report-note">
                <h3>共性观察</h3>
                <ul>
                  {broadcasterNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="report-note report-note--accent">
                <h3>模板用途</h3>
                <ul>
                  <li>正式版可在本页插入截图证据，并与表格逐条对应。</li>
                  <li>如单轮案例较多，可继续拆成两页并保持同样页脚系统。</li>
                  <li>异常级别与备注说明建议保持固定字段，方便后续周度横向对比。</li>
                </ul>
              </section>
            </div>

            <ReportFooter label="转播方异常情况" page="03" />

            <div className="report-mark report-mark--content" aria-hidden="true">
              <img src="/logo.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="report-page">
          <div className="report-page__inner">
            <ReportTopline section="04" title="盗播情况" />

            <div className="report-piracy-top">
              <p className="report-intro">
                盗播线索主要来自短视频平台的实时切片、聚合站点嵌入式转载及赛后完整录像搬运。
                本页重点展示线索统计、传播特征与建议动作，便于后续替换成真实案例。
              </p>

              <div className="report-mini-stats">
                {piracyStats.map((item) => (
                  <article className="report-mini-stat" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div className="report-table-wrap">
              <table className="report-table report-table--compact">
                <thead>
                  <tr>
                    <th>线索来源</th>
                    <th>内容形态</th>
                    <th>风险等级</th>
                    <th>传播特征</th>
                  </tr>
                </thead>
                <tbody>
                  {piracyRows.map((row, index) => (
                    <tr key={`${row[0]}-${index}`}>
                      {row.map((cell) => (
                        <td key={`${cell}-${index}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <section className="report-panel report-panel--full">
              <span className="report-kicker">建议动作</span>
              <ul className="report-bullet-list">
                {piracyActions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <ReportFooter label="盗播情况" page="04" />

            <div className="report-mark report-mark--content" aria-hidden="true">
              <img src="/logo.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
