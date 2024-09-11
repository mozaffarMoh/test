import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import './globals.css'

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const isArabic = locale == "ar";

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
