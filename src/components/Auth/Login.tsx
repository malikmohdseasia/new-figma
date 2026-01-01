import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "react-toastify";

const Login = ({ setModalShow }:any) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;
    return strength;
  };

  const handleEmailChange = (value:any) => {
    setEmail(value);

    if (!value) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!emailRegex.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
    } else {
      setErrors((prev) => {
        const { email, ...rest }:any = prev;
        return rest;
      });
    }
  };

  const handlePasswordChange = (value:any) => {
    setPassword(value);

    if (!value) {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required",
      }));
    } else if (value.length < 8) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 8 characters",
      }));
    } else if (!/[A-Z]/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must include one uppercase letter",
      }));
    } else if (!/[0-9]/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must include one number",
      }));
    } else if (!/[@$!%*?&]/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        password: "Password must include one special symbol (@$!%*?&)",
      }));
    } else {
      setErrors((prev) => {
        const { password, ...rest }:any = prev;
        return rest;
      });
    }
  };

  const validateForm = () => {
    const err = {};

    if (!email) err.email = "Email is required";
    else if (!emailRegex.test(email))
      err.email = "Invalid email address";

    if (!password) err.password = "Password is required";
    else if (!passwordRegex.test(password))
      err.password =
        "Password must be at least 8 characters and include uppercase, number & symbol";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!validateForm()) return;

    toast.success("Successfully Login!");

    localStorage.setItem(
      "userEmail",
      JSON.stringify({ email: email })
    );

    navigate("/dashboard");
    setModalShow(false);
  };

  const strength = getPasswordStrength();
  const passwordBarItems = [1, 2, 3, 4];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] px-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
        <h2 className="text-3xl font-bold text-white text-center">
          Sign In
        </h2>
        <p className="text-center text-white/70 mt-2">
          Welcome back, we missed you
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="relative">
            <Mail
              className="absolute left-4 top-3.5 text-white/60"
              size={18}
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className="w-full bg-white/10 text-white placeholder-white/50
                         px-11 py-3 rounded-xl border border-white/30
                         focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            {errors.email && (
              <p className="text-red-300 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div className="relative">
            <Lock
              className="absolute left-4 top-3.5 text-white/60"
              size={18}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                handlePasswordChange(e.target.value)
              }
              className="w-full bg-white/10 text-white placeholder-white/50
                         px-11 py-3 rounded-xl border border-white/30
                         focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-white/60"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

            <div className="flex gap-1 mt-2">
              {passwordBarItems.map((lvl) => (
                <span
                  key={lvl}
                  className={`h-1 flex-1 rounded-full ${
                    strength >= lvl
                      ? lvl <= 2
                        ? "bg-red-400"
                        : lvl === 3
                        ? "bg-yellow-400"
                        : "bg-green-400"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            {errors.password && (
              <p className="text-red-300 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-indigo-700
                       font-bold text-lg hover:scale-[1.02]
                       transition-all duration-300 shadow-lg cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/70 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
