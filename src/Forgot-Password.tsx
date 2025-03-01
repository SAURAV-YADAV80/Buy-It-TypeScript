import { Link } from 'react-router-dom';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from './Input';

interface ForgotPasswordFormValues {
  email: string;
}

function ForgotPassword() {
  const initialValues: ForgotPasswordFormValues = {
    email: '',
  };

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const resetPassword = (values: ForgotPasswordFormValues, actions: FormikHelpers<ForgotPasswordFormValues>) => {
    console.log("sending password reset request to", values.email);
    actions.setSubmitting(false);
  };

  return (
    <div className='flex items-center justify-center w-full bg-gray-200 p-4'>
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white p-6 sm:p-8 md:p-10 rounded-md shadow-lg border border-red-200">
        <Formik
          initialValues={initialValues}
          onSubmit={resetPassword}
          validationSchema={schema}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <Input
                  type='email'
                  name='email'
                  id='email'
                  label='Email'
                  placeholder='Enter email'
                  required 
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-500 text-white rounded-md p-3 hover:bg-red-600 transition-colors"
              >
                Reset
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center text-sm">
          Remember your password? <Link to={`/LogIn`} className="text-red-500 hover:underline">Log In.</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;