export default function SignupPage() {
  return (
    <main>
      <h1>Create your PROMVANTA account</h1>
      <form>
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
}
