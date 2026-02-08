@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

body {
  @apply bg-white text-slate-900;
}

section {
  @apply py-12 sm:py-16;
}

.container-base {
  @apply mx-auto w-full max-w-5xl px-5 sm:px-8;
}

.card {
  @apply rounded-2xl border border-slate-200 bg-white p-6 shadow-sm;
}

.label {
  @apply text-sm font-medium text-slate-700;
}

.input {
  @apply mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200;
}

.textarea {
  @apply mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200;
}

.select {
  @apply mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200;
}

.button {
  @apply inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800;
}

.small-note {
  @apply text-xs text-slate-500;
}
