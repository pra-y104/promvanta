export default function ForgotPasswordPage() {
  return (
    <main>
      <h1>Reset your password</h1>
      <form>
        <input type="email" placeholder="Email address" required />
        <button type="submit">Send Reset Instructions</button>
      </form>
    </main>
  );
}
