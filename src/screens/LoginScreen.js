import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions";
import { useEffect } from "react";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import { NavLink } from "react-router-dom";

const LoginScreen = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/user-profile");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <main id="main" class="main">
      <section class="section">
        <div class="row">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-12 d-flex flex-column align-items-center justify-content-center">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">
                      Login to Your Account
                    </h5>
                    <p class="text-center small">
                      Enter your email & password to login
                    </p>
                  </div>

                  <form
                    class="row g-3 needs-validation"
                    novalidate
                    onSubmit={handleSubmit(submitForm)}
                  >
                    {error && <Error>{error}</Error>}

                    <div class="col-12">
                      <label for="email" class="form-label">
                        Email
                      </label>
                      <div class="input-group has-validation">
                        <input
                          type="text"
                          name="email"
                          class="form-control"
                          id="email"
                          {...register("email")}
                          required
                        />
                        <div class="invalid-feedback">
                          Please enter your email.
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="password" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="password"
                        {...register("password")}
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="remember"
                          value="true"
                          id="rememberMe"
                        />
                        <label class="form-check-label" for="rememberMe">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary w-100"
                        disabled={loading}
                      >
                        {loading ? <Spinner /> : "Login"}
                      </button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">
                        Don't have account?{" "}
                        <NavLink to="/register">Create an account</NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginScreen;
