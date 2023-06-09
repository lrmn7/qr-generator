# Simple QR Generator

![qr-generator](https://res.cloudinary.com/lrmn/image/upload/v1686208787/lrmn.dev/qrcode_ylp5sv.png)

This is just a quick mini project of a QR Generator. The live demo can be accessed at [qr-generator](https://qr-generator.is-a.fun/)

## ⚡ What's included here?

- Toolings for linting, formatting, and conventions configured.
  `eslint`, `prettier`, `husky`, & `lint-staged.`
- The ESLint config is bundled in [`eslint-config-lrmn`](https://www.npmjs.com/package/eslint-config-lrmn)
- ✨Basic responsive layout configuration (through Tailwind CSS)
- 📜Basic `standard-version` to generate Changelog, you can run `npx standard-version --skip.bump --skip.commit --skip.tag`
- SEO Optimization (using next-SEO)
- Now using Next.js 13 with Rust Compiler Minification enabled (you can disable it at next.config.js)

## How to use it?

- Open [qr-generator](https://qr-generator.is-a.fun/)
- Write the string or url that you want to generate as QR Code
- You can select the QR Code style
- If you want it, you also can download the QR Code
- You also can generate the QR Code by passing the query param using `qr_value`, for example `https://qr-generator.is-a.fun/?qr_value=https://google.com`, the default QR Value will be changed to `https://google.com`
- It's better to use the link shortener to shorten the QR Value url if the QR Value input is more than 30 characters.

## References

- [Tailwind CSS Official Docs](https://tailwindcss.com/)
- [html-to-image library](https://www.npmjs.com/package/html-to-image)

## Support me

- 👉 🇮🇩 [Trakteer](https://trakteer.id/lrmn) free access
- 👉 🌍 [BuyMeACoffe](https://www.buymeacoffee.com/lrmn)
- 👉 🌍 [Ko-Fi](https://ko-fi.com/lrmn7)

---

Copyright © 2020 by [L RMN](https://is-a.fun/)
