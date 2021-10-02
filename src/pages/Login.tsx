import { Helmet } from "react-helmet-async";

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to view your account." />
        <link rel="canonical" href="/login" />
      </Helmet>
      <h1>This is the Login page.</h1>
    </>
  );
}
