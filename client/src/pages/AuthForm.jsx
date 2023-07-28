import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/FormItems";

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

export default function AuthForm() {
  return (
    <section className="container mx-auto grid place-content-center py-32 text-[#161616]">
      <div className="w-[40rem] space-y-6">
        <h1 className="text-4xl font-bold text-center">
          Sign in to your account
        </h1>
        <Formik
          initialValues={initialLoginValues}
          validationSchema={loginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
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
            <button
              type="submit"
              className="bg-[#FF8C38] w-full rounded-md py-3 text-base font-bold text-white place-self-center hover:outline outline-2 outline-[#FF8C38] transition"
            >
              Sign in
            </button>
            <p className="text-base font-semibold cursor-pointer text-center">
              Don&apos;t have an account?{" "}
              <span className="text-[#FF8C38] font-bold">Create one now</span>
            </p>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
