"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (result?.error) {
      setError("E-posta veya şifre hatalı.");
      setLoading(false);
    } else {
      // Session'dan rolü al
      const res = await fetch("/api/auth/session");
      const session = await res.json();
      const role = session?.user?.role;

      if (role === "admin") router.push("/admin");
      else if (role === "superadmin") router.push("/super-admin");
      else if (role === "tedarikci") router.push("/tedarikci-panel");
      else if (role === "alici") router.push("/panelim/siparislerim");
      else router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-warm-200 p-8">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">MT</span>
            </div>
            <h1 className="text-2xl font-bold text-warm-900">Giriş Yap</h1>
            <p className="text-warm-500 text-sm mt-1">MobiTedarik hesabınıza giriş yapın</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">E-posta</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="ornek@firma.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-warm-700 mb-1">Şifre</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-3 rounded-lg border border-warm-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors font-semibold disabled:opacity-50"
            >
              {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-warm-200">
            <p className="text-xs text-warm-400 text-center mb-3">Demo hesaplar:</p>
            <div className="space-y-2 text-xs text-warm-500 bg-warm-50 rounded-xl p-4">
              <p><strong>Alıcı:</strong> ali@mobitech.com / demo1234</p>
              <p><strong>Tedarikçi:</strong> info@mdfplus.com / demo1234</p>
              <p><strong>Admin:</strong> admin@mobitedarik.com / admin1234</p>
              <p><strong>🔧 Super Admin:</strong> super@mobitedarik.com / super1234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
