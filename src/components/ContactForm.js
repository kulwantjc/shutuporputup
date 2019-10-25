
import React from "react"
import swal from 'sweetalert';

import { withFormik } from 'formik';
import { object as yupObject, string as yupString } from 'yup';

const ContactFrom = props => {
    const Style = {
        color: 'red',
        fontSize: '12px',
        textAlign: "left",
        padding: "0px 15px"
    };
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,

    } = props;

    return (
        <>
            <div className="modal form-model" id="email-p1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Get notified at launch!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-left">


                            <form onSubmit={handleSubmit}>
                                <div className="d-flex">
                                    <input
                                        type="text"
                                        name="firstName" c
                                        className="text"
                                        placeholder="First Name"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ padding: '8px 12px' }}
                                    />
                                    <br></br>
                                    {errors.firstName && touched.firstName && (<div id="feedback"
                                        style={Style}>{errors.firstName}</div>)}

                                    <input type="text"
                                        name="lastName"
                                        className="text"
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                    />
                                    <br></br>
                                    {errors.lastName && touched.lastName && (<div id="feedback"
                                        style={Style}>{errors.lastName}</div>)}


                                </div>
                                <input type="email"
                                    name="email"
                                    className="text"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}

                                />

                                {errors.email && touched.email && (<div id="feedback"
                                    style={Style}>{errors.email}</div>)}

                                <input type="text"
                                    name="company"
                                    className="text"
                                    placeholder="Company Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.company}

                                />
                                {errors.company && touched.company && (<div id="feedback"
                                    style={Style}>{errors.company}</div>)}

                                <input type="submit"
                                    name="submit"
                                    className="btn submit"
                                    value="submit"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const PostReviewFormFormik = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        firstName: '',
        lastName: '',
        company: '',
        email: ''
    }),

    validationSchema: yupObject().shape({
        firstName: yupString()
            .min(4, 'Please enter less than 4 characters')
            .max(20, 'Please enter no more than 25 characters')
            .required('Please enter your first name'),

        lastName: yupString()
            .min(4, 'Please enter less than 4 characters')
            .max(20, 'Please enter no more than 25 characters')
            .required('Please enter your Last name'),

        email: yupString()
            .email('Please enter a valid email')
            .required('Please enter an email'),

        company: yupString()
            .min(10, 'Please enter no less than 10   characters')
            .max(25, 'Please enter no more than 25 characters')
            .required('Please enter a company name'),



    }),

    handleSubmit: (values, { setSubmitting, resetForm }) => {
        console.log("values123456789", values);
        setTimeout(() => {
            fetch('http://192.168.0.54:1338/contactus', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(response => response.json(console.log("responseresponse", response)))

                .then(data => {
                    if (data.success === true) {
                        swal({
                            title: "Done!",
                            text: "Email sent admin",
                            icon: "success",
                            timer: 1000,
                            button: false,


                        })
                        //setState({ name: "", email: "", message: "", company: "" })
                    }
                    if (data.message) {
                        swal('Mail Not  sent');
                        //this.props.resetPutVehicle();
                    }
                }
                )
                .catch(error => console.log(error))
            //alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);

        }, 2000);
    },

    displayName: 'BasicForm',
})(ContactFrom);

export default PostReviewFormFormik;      