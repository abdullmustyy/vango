import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { MyTextInput } from "../components/FormItems";
import { setError } from "../state/authSlice";
import { setPageType } from "../state/authSlice";

const authSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address.").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const authValues = {
  email: "",
  password: "",
};

export default function AuthPage() {
  const { error, pageType } = useSelector((state) => state.auth);
  const isSignIn = pageType === "signin";
  const isSignUp = pageType === "signup";
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  async function signUp({ email, password }, resetForm) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        resetForm();
        dispatch(setPageType("signin"));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setError(errorMessage));
      });
  }

  function signIn({ email, password }, resetForm) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        resetForm();
        navigate(location.state?.from || "/", {
          replace: true,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(setError(errorMessage));
      });
  }

  async function handleSubmit(values, { resetForm }) {
    dispatch(setError(null));
    if (isSignIn) signIn(values, resetForm);
    if (isSignUp) signUp(values, resetForm);
  }

  return (
    <section className="container mx-auto md:grid place-content-center py-36 md:px-0 px-4 text-[#161616] select-text">
      <div className="md:w-[40rem] space-y-6">
        {location.state?.message && (
          <h3 className="text-base text-center text-red-600 font-semibold">
            {location.state?.message}
          </h3>
        )}
        <h1 className="md:text-4xl text-2xl font-bold text-center">
          {isSignIn ? "Sign in to your account" : "Create an account"}
        </h1>
        <Formik
          initialValues={authValues}
          validationSchema={authSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, resetForm }) => (
            <Form className="grid gap-4">
              <MyTextInput
                name="email"
                type="email"
                placeholder="Email address"
              />
              <MyTextInput
                name="password"
                type="password"
                placeholder="Password"
              />
              {error && (
                <h3 className="text-base text-center text-red-600 font-semibold">
                  {error}
                </h3>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : null
                } bg-[#FF8C38] w-full rounded-md py-3 text-base font-bold text-white place-self-center hover:outline outline-2 outline-[#FF8C38] transition`}
              >
                {isSubmitting ? "Signing" : "Sign"} {isSignIn ? "In" : "Up"}
              </button>
              <p
                className="text-base font-semibold cursor-pointer text-center"
                onClick={() => {
                  dispatch(setError(null));
                  resetForm();
                  dispatch(setPageType(isSignIn ? "signup" : "signin"));
                }}
              >
                {isSignIn && (
                  <span>
                    Don&apos;t have an account?{" "}
                    <span className="text-[#FF8C38] font-bold">
                      Sign Up here
                    </span>
                  </span>
                )}
                {isSignUp && (
                  <span>
                    Already have an account?{" "}
                    <span className="text-[#FF8C38] font-bold">
                      Sign In here
                    </span>
                  </span>
                )}
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
