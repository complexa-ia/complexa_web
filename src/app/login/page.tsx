"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setLoading(false);
    if (res?.error) {
      setError("Credenciales inválidas");
    } else {
      router.push("/admin");
    }
  };

  const handleGoogle = () => signIn("google", { callbackUrl: "/admin" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e10] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <a href="/" className="text-2xl font-black tracking-tighter text-[#bb00fc] font-headline uppercase drop-shadow-[0_0_8px_rgba(187,0,252,0.4)]">
            Complexa IA
          </a>
          <p className="text-[#adaaad] mt-2 text-sm font-body">Panel de administración</p>
        </div>

        <div className="glass-panel p-8 rounded-xl space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-[#adaaad] font-bold block">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 transition-colors font-body"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-[#adaaad] font-bold block">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-[#262529] border border-[#48474a] focus:border-[#bb00fc] focus:outline-none text-[#fffbfe] rounded px-3 py-2 transition-colors font-body"
              />
            </div>

            {error && <p className="text-[#ff6e84] text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#bb00fc] text-white py-3 font-headline font-bold tracking-widest uppercase hover:shadow-[0_0_30px_rgba(187,0,252,0.4)] transition-all rounded-[20px] disabled:opacity-60"
            >
              {loading ? "Iniciando..." : "Ingresar"}
            </button>
          </form>

          <div className="relative flex items-center gap-4">
            <div className="flex-1 h-px bg-[#48474a]" />
            <span className="text-[#767578] text-xs uppercase tracking-widest">o</span>
            <div className="flex-1 h-px bg-[#48474a]" />
          </div>

          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 bg-[#262529] border border-[#48474a] text-[#fffbfe] py-3 rounded-[20px] font-headline font-bold text-sm tracking-wider hover:border-[#bb00fc] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
              <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2.04a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
              <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"/>
              <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
            </svg>
            Continuar con Google
          </button>
        </div>
      </div>
    </div>
  );
}
