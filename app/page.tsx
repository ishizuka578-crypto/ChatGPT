"use client";

import { useFormState } from "react-dom";
import { submitContact, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

export default function HomePage() {
  const [state, formAction] = useFormState(submitContact, initialState);

  return (
    <main className="bg-white">
      <section className="border-b border-slate-100">
        <div className="container-base space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Scout-First Recruiting Support
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            採用に手が回らない小規模企業のための「スカウト特化型・採用代行」
          </h1>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            10〜50名規模の現場に合わせて、スカウト文面の設計から送信運用、反応率の改善、初期対応の整理までを伴走します。
            採用が止まる理由を短時間で可視化し、必要な打ち手だけに集中します。
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "スカウトが止まると応募が途切れる",
              "担当が兼務で運用が続かない",
              "候補者対応が後回しになる",
            ].map((item) => (
              <div key={item} className="card text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            対象：10〜50名規模／製造業・IT・アニメ/声優・人材
          </p>
        </div>
      </section>

      <section>
        <div className="container-base grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">悩み</h2>
            <ul className="space-y-3 text-slate-600">
              <li>・スカウトの工数がなく、出したい時に出せない</li>
              <li>・担当が兼務で優先順位が落ちる</li>
              <li>・運用が止まると採用が止まる</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">原因</h2>
            <ul className="space-y-3 text-slate-600">
              <li>・スカウト文面が属人的で再現性がない</li>
              <li>・送信数と反応率の管理ができていない</li>
              <li>・初期対応のフローが曖昧</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-base space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">提供内容</h2>
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              "スカウト文面設計",
              "送信運用の代行",
              "反応率の分析・改善",
              "初期対応の整理",
            ].map((item) => (
              <div key={item} className="card text-sm text-slate-600">
                {item}
              </div>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              "魔法の求人は作りません",
              "放置丸投げはしません",
              "大企業向けの複雑設計はしません",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-500">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-base grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">料金</h2>
            <p className="text-lg text-slate-700">月額〜30万円（税別、調整あり）</p>
            <p className="text-sm text-slate-500">
              採用人数・媒体数・対応工数に応じて設計します。必要最低限から始められます。
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">対応業種</h2>
            <ul className="space-y-3 text-slate-600">
              <li>・製造業</li>
              <li>・IT</li>
              <li>・アニメ/声優</li>
              <li>・人材</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="container-base space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              『なぜ今、採用が止まっているのか30分で整理（無料）』
            </h2>
            <p className="text-sm text-slate-200">
              営業トークなし。無理なら無理と言います。現状を整理し、必要なアクションだけ共有します。
            </p>
          </div>
          <form action={formAction} className="grid gap-4 text-left" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                お名前
                <input
                  className="input text-slate-900"
                  name="name"
                  required
                  autoComplete="name"
                />
                {state.fieldErrors?.name && (
                  <span className="mt-1 block text-xs text-rose-200">
                    {state.fieldErrors.name}
                  </span>
                )}
              </label>
              <label className="text-sm">
                会社名
                <input
                  className="input text-slate-900"
                  name="company"
                  required
                  autoComplete="organization"
                />
                {state.fieldErrors?.company && (
                  <span className="mt-1 block text-xs text-rose-200">
                    {state.fieldErrors.company}
                  </span>
                )}
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm">
                メールアドレス
                <input
                  className="input text-slate-900"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                />
                {state.fieldErrors?.email && (
                  <span className="mt-1 block text-xs text-rose-200">
                    {state.fieldErrors.email}
                  </span>
                )}
              </label>
              <label className="text-sm">
                電話番号（任意）
                <input
                  className="input text-slate-900"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                />
              </label>
            </div>

            <label className="text-sm">
              業種
              <select className="select text-slate-900" name="industry" required>
                <option value="">選択してください</option>
                <option value="製造業">製造業</option>
                <option value="IT">IT</option>
                <option value="アニメ/声優">アニメ/声優</option>
                <option value="人材">人材</option>
                <option value="その他">その他</option>
              </select>
              {state.fieldErrors?.industry && (
                <span className="mt-1 block text-xs text-rose-200">
                  {state.fieldErrors.industry}
                </span>
              )}
            </label>

            <label className="text-sm">
              お問い合わせ内容
              <textarea
                className="textarea text-slate-900"
                name="message"
                rows={4}
                required
              />
              {state.fieldErrors?.message && (
                <span className="mt-1 block text-xs text-rose-200">
                  {state.fieldErrors.message}
                </span>
              )}
            </label>

            <button className="button" type="submit">
              無料で30分整理する
            </button>

            {state.status === "success" && (
              <p className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white">
                {state.message}
              </p>
            )}
            {state.status === "error" && state.message && (
              <p className="rounded-xl bg-rose-500/20 px-4 py-3 text-sm text-rose-100">
                {state.message}
              </p>
            )}
            <p className="text-xs text-slate-300">
              送信前に内容を確認の上、個人情報は目的外利用いたしません。
            </p>
          </form>
        </div>
      </section>

      <section>
        <div className="container-base space-y-6">
          <h2 className="text-2xl font-semibold text-slate-900">FAQ</h2>
          <div className="space-y-4">
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                何から依頼できますか？
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                スカウトのみのご依頼から可能です。現状の課題に合わせて必要な範囲だけ設計します。
              </p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                どの媒体に対応していますか？
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                一般的な求人媒体やスカウトサービスに対応しています。媒体固有の運用は個別にご相談ください。
              </p>
            </details>
            <details className="card">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                いつから開始できますか？
              </summary>
              <p className="mt-3 text-sm text-slate-600">
                最短1〜2週間で着手可能です。現状の情報共有や媒体の準備状況に応じて調整します。
              </p>
            </details>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-8">
        <div className="container-base text-xs text-slate-500">
          守秘義務を遵守し、個人情報はお問い合わせ対応のみに利用します。
        </div>
      </footer>
    </main>
  );
}
