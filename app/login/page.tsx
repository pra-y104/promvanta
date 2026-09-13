export default function LoginPage() {
  return (
    <main>
      <h1>Welcome to PROMVANTA</h1>
      <form>
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
