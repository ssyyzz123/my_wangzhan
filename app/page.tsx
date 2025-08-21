export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 bg-white">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600" />
            <span className="font-semibold">链安 · 参赛前台</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">产品特点</a>
            <a href="#video" className="hover:text-slate-900">演示视频</a>
            <a href="#awards" className="hover:text-slate-900">奖项亮点</a>
            <a href="#contact" className="hover:text-slate-900">联系</a>
          </nav>
          <a
            href="#video"
            className="px-4 py-2 rounded-2xl text-white bg-slate-900 hover:bg-slate-800 text-sm"
          >立即演示</a>
        </div>
      </header>

      {/* 首屏 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-20 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              参赛演示 · 前台模板
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
              链上风控与监测平台 · 60 秒看懂
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              实时监测、智能预警、合规审计、数据可视化一站式呈现。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#video" className="px-4 py-2 rounded-2xl bg-slate-900 text-white text-sm">观看演示</a>
              <a href="#features" className="px-4 py-2 rounded-2xl border border-slate-300 text-sm">了解特点</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div><span className="text-2xl font-semibold text-slate-900">10+</span><br/>合作机构</div>
              <div><span className="text-2xl font-semibold text-slate-900">99.9%</span><br/>可用性</div>
              <div><span className="text-2xl font-semibold text-slate-900 align-top">&lt;3s</span><br/>告警延迟</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-xl">
              {/* 把 src 改成你的文件名，比如 /mydemo.mp4 */}
              <video controls poster="/屏幕截图 2025-08-21 150434.png" className="w-full h-full object-cover">
                <source src="/1.mp4" type="video/mp4" />
                您的浏览器不支持 video 标签。
              </video>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-3 text-sm border border-slate-200">
              实时漏洞情报 · 风险分级
            </div>
          </div>
        </div>
      </section>

      {/* 特点 */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">产品特点</h2>
        <p className="text-slate-600 mt-2">为评委快速呈现 3 个核心卖点。</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            ["链上威胁监测","实时追踪异常交易、合约风险，自动告警。"],
            ["一键演示流程","标准化 Demo 脚本可重复演示，降低出错率。"],
            ["协同与分享","演示数据与结果链接可分享，方便复核。"],
          ].map(([title,desc])=>(
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-sm text-slate-600 mt-2">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 list-disc pl-5">
                <li>图表可视化 / 导出</li>
                <li>API / SDK 集成</li>
                <li>权限与审计</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 演示视频区 */}
      <section id="video" className="bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">60 秒核心能力演示</h2>
            <p className="mt-3 text-slate-300">接入数据 → 风险识别 → 告警处置 → 报告导出。</p>
            <div className="mt-6 flex gap-3">
              <a href="/1.mp4" className="px-4 py-2 rounded-2xl bg-white text-slate-900 text-sm">下载演示</a>
              <a href="#contact" className="px-4 py-2 rounded-2xl border border-white/30 text-white text-sm">获取脚本</a>
            </div>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <video controls className="w-full h-full object-cover">
              <source src="/1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* 奖项亮点 */}
      <section id="awards" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">奖项亮点 & 评审关注</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["创新性","可落地性","社会价值"].map((t)=>(
            <div key={t} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="font-semibold mb-2">{t}</div>
              <p className="text-sm text-slate-600">用 2–3 句说明你的亮点和对比优势。</p>
            </div>
          ))}
        </div>
      </section>

      {/* 联系 */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">获取演示 / 合作咨询</h2>
          <p className="mt-2 text-slate-300">留下邮箱，我们会发送详细材料。</p>
          <form className="mt-6 flex flex-col md:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="你的邮箱"
              className="w-full md:flex-1 rounded-2xl px-4 py-3 text-slate-900 bg-white border border-white/20 focus:outline-none"
            />
            <button className="px-4 py-3 rounded-2xl bg-white text-slate-900">提交</button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} 链安 · 参赛演示站点
      </footer>
    </main>
  );
}
