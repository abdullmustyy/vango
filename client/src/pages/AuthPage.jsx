import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/FormItems";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../state/authSlice";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address.").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const initialLoginValues = {
  email: "",
  password: "",
};

export default function AuthPage() {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(values, { setSubmitting }) {
    dispatch(setError(null));
    loginUser(values)
      .then((data) => {
        console.log(JSON.stringify(data, null, 2));
        localStorage.setItem("isLoggedIn", true);
        navigate(location.state?.from || "/", {
          replace: true,
        });
      })
      .catch((err) => {
        dispatch(setError(err.message));
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  return (
    <section className="container mx-auto grid place-content-center py-24 text-[#161616]">
      <div className="w-[40rem] space-y-6">
        {location.state?.message && (
          <h3 className="text-base text-center text-red-600 font-semibold">
            {location.state?.message}
          </h3>
        )}
        <h1 className="text-4xl font-bold text-center">
          Sign in to your account
        </h1>
        <Formik
          initialValues={initialLoginValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
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
                {isSubmitting ? "Signing" : "Sign"} in
              </button>
              <p className="text-base font-semibold cursor-pointer text-center">
                Don&apos;t have an account?{" "}
                <span className="text-[#FF8C38] font-bold">Create one now</span>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
