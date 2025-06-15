# FinnhubApp Setup Instructions

Welcome! Follow the steps below to get the project up and running on your local machine.

---

## 1. Create a `.env` file

In the **root directory** of the project, create a file named `.env` and add the following environment variables:

```env
AUTH0_DOMAIN=dev-k5y61bbt5mkrcof4.us.auth0.com
AUTH0_CLIENT_ID=Z0PmgAYjSUWpa2tmjymIKb4hpM7lzWfg
AUTH0_APPLICATION_ID=com.finnhubapp
FINNHUB_API_KEY=d16qlfpr01qkv5jcnhr0d16qlfpr01qkv5jcnhrg
```

---

## 2. Install dependencies

To install the required packages, run the following command from the project root:

```bash
npm install --force
```

> Alternatively, you can use:
>
> ```bash
> npm install --legacy-peer-deps
> ```

---

## 3. Run the application

Once dependencies are installed, run the app using your preferred method (e.g., Expo or React Native CLI).

---

## 4. Login credentials

After launching the app, use the following test credentials to sign in:

- **Email:** `geovanny_paiz@hotmail.com`
- **Password:** `Finnhub123!`

---

If you encounter any issues, make sure you have the correct versions of Node and npm installed, and that your development environment is properly configured.