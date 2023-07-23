import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // the response json is automatically parsed to
    // `error.data`, you also have access to the status
    return (
      <section>
        <h1>{error.status}</h1>
        <h2>{error.data.message}</h2>
        <pre>
          {error.status}: {error.data.statusText}
        </pre>
      </section>
    );
  }

  // rethrow to let the parent error boundary handle it
  // when it's not a special case for this route
  throw error;

  //   return (
  //     <section>
  //       <h1>Oops! A &quot;{status}&quot; error</h1>
  //     </section>
  //   );
}
