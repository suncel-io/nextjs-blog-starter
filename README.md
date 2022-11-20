<p align="center">
    <img alt="Suncel" src="https://assets.suncel.io/61bf5e233c962a862faf209f/ryNwB-meta-suncel-general.png" width="300" />
</p>
<h1 align="center">
  Suncel NextJS Blog Starter
</h1>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📖 **Documentation**

Have a look to our [documentation](https://docs.suncel.io)

## 🎉 **Starter features**

The starter includes all the configuration required by Suncel(admin, preview, page render, etc...). You just need to update your API keys in the .env

it will includes Tailwind CSS.

On top of that, you have a Block example and a wrapper of the rich text with some style that you are free to modify.

## 🛠️ **Suncel Setup**

### Account

- Create your Suncel account [here](https://app.suncel.io/signup)
- Create a project

### API Keys

- After creating an account, head over to the project settings you created earlier.
- Go to the API section, grab your Keys.
- At the root of the project, create a .env file
- Insert your API Keys in the .env of your project (NEXT_PUBLIC_SUNCEL_KEY=... and SUNCEL_REVALIDATE_SECRET=...)

### Ready to go

- [Create your blocks](https://docs.suncel.io/developer/blocks/create-block) in react.
- Access the admin via /admin
- Build your pages with the page builder

### Header, Footer, Last Articles

- Header: In your admin panel, create the Global Header, copy the ID of the global and replace in your code all the occurrences of REPLACE_BY_HEADER_GLOBAL_ID by your ID
- Footer: In your admin panel, create the Global Footer, copy the ID of the global and replace in your code all the occurrences of REPLACE_BY_FOOTER_GLOBAL_ID by your ID
- Last Articles: In your admin panel, in the pages section, create the blog folder that will contain all your articles, click on it, copy the ID of the folder from te url and replace in your code all the occurrences of REPLACE_BY_BLOG_FOLDER_ID by your ID

### **📧 Contact**

Whether you'd like to discuss about this starter template or simply say "hello", I'd love to hear from you.

Email: **[dev@suncel.io](mailto:dev@suncel.io)**
