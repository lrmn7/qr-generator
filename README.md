# Simple QR Generator

![qr-generator](https://cdn.discordapp.com/attachments/1091192083852828744/1108784874548121640/Screenshot_2023-05-18_at_22-55-04_QR_Generator.png)

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
