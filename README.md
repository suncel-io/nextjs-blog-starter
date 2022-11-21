<p align="center">
    <img alt="Suncel" src="https://assets.suncel.io/61bf5e233c962a862faf209f/ryNwB-meta-suncel-general.png" width="300" />
</p>
<h1 align="center">
  Suncel NextJS Blog Starter
</h1>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). <br/>
Access the [DEMO](https://blog-starter-one-sigma.vercel.app/).

## 📖 **Documentation**

Have a look to our [documentation](https://docs.suncel.io)

## 🎉 **Starter features**

The starter includes all the configuration required by Suncel(admin, preview, page render, etc...). You just need to update your API keys in the .env

it will includes Tailwind CSS.

On top of that, you have a Block example and a wrapper of the rich text with some style that you are free to modify.

## 🛠️ **Suncel Setup**

### Account

- Create your Suncel account [here](https://app.suncel.io/signup) (you can create a free plan with no time limit)
- Create a project

### API Keys

- After creating an account, head over to the project settings you created earlier.
- Go to the API section, grab your Keys.
- At the root of the project, rename the .env.example file by .env 
- Insert your API Keys in the .env of your project (NEXT_PUBLIC_SUNCEL_KEY=... and SUNCEL_REVALIDATE_SECRET=...). You can find these keys on app.suncel.io (Project &rarr;  )

### Ready to go

- npm run dev, then access the admin via  /admin and login with the same id/pwd you have on app.suncel.io
- In the left menu, go to Globals and create a global of type Header. Add a logo and a link (link+label).
- Copy the id of the Header created in Globals (button "Copy Id") and replace in the code REPLACE_BY_HEADER_GLOBAL_ID by your header ID
- Do the same for the footer with a Global type 'Footer', and in the code, replace REPLACE_BY_FOOTER_GLOBAL_ID by your footer ID

### Create your first page and add Blocks
- create a page and you can now add your blocks, save and publish your page
- [Create your blocks](https://docs.suncel.io/developer/blocks/create-block) in react.
- Check our [Youtube Channel](https://www.youtube.com/@suncel) to see some examples of how to create Blocks

### Last Articles
- In your admin panel, in the pages section, create a **blog** folder that will contain all your articles, click on it, copy the ID of the folder from the url and replace in your code all the occurrences of REPLACE_BY_BLOG_FOLDER_ID by your ID

### **📧 Contact**

Whether you'd like to discuss about this starter template or simply say "hello", I'd love to hear from you.

Email: **[dev@suncel.io](mailto:dev@suncel.io)**
