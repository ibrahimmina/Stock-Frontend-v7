import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import { registerUser } from "../features/auth/authActions";
import { NavLink } from "react-router-dom";

const RegisterScreen = () => {
  const [customError, setCustomError] = useState(null);

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    // redirect authenticated user to profile screen
    if (userInfo) navigate("/user-profile");
    // redirect user to login page if registration was successful
    if (success) navigate("/login");
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.confirmPassword) {
      setCustomError("Password mismatch");
      return;
    }
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase();

    dispatch(registerUser(data));
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
                      Create an Account
                    </h5>
                    <p class="text-center small">
                      Enter your personal details to create account
                    </p>
                  </div>

                  <form
                    class="row g-3 needs-validation"
                    novalidate
                    onSubmit={handleSubmit(submitForm)}
                  >
                    {error && <Error>{error}</Error>}
                    {customError && <Error>{customError}</Error>}
                    <div class="col-12">
                      <label for="userName" class="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="userName"
                        class="form-control"
                        id="userName"
                        {...register("userName")}
                        required
                      />
                      <div class="invalid-feedback">
                        Please, enter your name!
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="email" class="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="email"
                        {...register("email")}
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter a valid Email adddress!
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
                      <label for="confirmPassword" class="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        class="form-control"
                        id="confirmPassword"
                        {...register("confirmPassword")}
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
                          name="terms"
                          type="checkbox"
                          value=""
                          id="acceptTerms"
                          required
                        />
                        <label class="form-check-label" for="acceptTerms">
                          I agree and accept the{" "}
                          <a href="#">terms and conditions</a>
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-primary w-100"
                        disabled={loading}
                      >
                        {loading ? <Spinner /> : "Create Account"}
                      </button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">
                        Already have an account?{" "}
                        <NavLink to="/login">Login</NavLink>
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

export default RegisterScreen;
