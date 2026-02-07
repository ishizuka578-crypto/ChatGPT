"use server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const industry = String(formData.get("industry") || "").trim();
  const message = String(formData.get("message") || "").trim();

  const fieldErrors: Record<string, string> = {};

  if (!name) fieldErrors.name = "お名前は必須です。";
  if (!company) fieldErrors.company = "会社名は必須です。";
  if (!email) fieldErrors.email = "メールアドレスは必須です。";
  if (email && !emailRegex.test(email)) {
    fieldErrors.email = "メールアドレスの形式が正しくありません。";
  }
  if (!industry) fieldErrors.industry = "業種を選択してください。";
  if (!message) fieldErrors.message = "お問い合わせ内容は必須です。";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "入力内容をご確認ください。",
      fieldErrors,
    };
  }

  // TODO: Replace with email delivery / Slack notification.
  console.log("[contact]", {
    name,
    company,
    email,
    phone,
    industry,
    message,
  });

  return {
    status: "success",
    message: "送信ありがとうございます。内容を確認の上、1〜2営業日以内にご連絡します。",
  };
}
