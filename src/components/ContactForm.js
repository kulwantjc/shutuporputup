
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
            <div className="mt-5">
                <button type="button" data-toggle="modal" data-target="#exampleModal" className="primary-btn banner-btn">Send Enquiry </button>
                <div id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade" >
                    <div role="document" className="modal-dialog modal-dialog-centered" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '85%' }}>
                        <div className="modal-content">
                            <div className="modal-body">
                                <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">× </span></button>
                                <h2 id="exampleModalLabel" style={{ color: "#007bff" }} className="modal-title mb-3"></h2>
                                <div className="container">
                                    <div className="row">
                                        <p className="text-uppercase text-center" style={{ width: '100%', color: '#000' }}>Get notified at launch!</p>
                                        <div className="col-lg-12">
                                            <form className="row contact_form " onSubmit={handleSubmit} >
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            name="name"
                                                            id="loginFirstName"
                                                            type="text"
                                                            placeholder="Name"
                                                            className="form-control form-control-sm"
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            style={{ padding: '8px 12px' }}
                                                        />
                                                        {errors.name && touched.name && (<div id="feedback"
                                                            style={Style}>{errors.name}</div>)}
                                                    </div>

                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-sm"
                                                            placeholder="Email"
                                                            style={{ padding: '8px 12px' }}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                            name="email"
                                                        />
                                                        {errors.email && touched.email && <div id="feedback" style={Style}>{errors.email}</div>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="Company"
                                                            style={{ padding: '8px 12px' }}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.company}
                                                            name="company"
                                                        />
                                                        {errors.company && touched.company && <div id="feedback" style={Style}>{errors.company}</div>}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea
                                                            type="text"
                                                            style={{ padding: '8px 12px' }}
                                                            className="form-control form-control-sm"
                                                            rows="5"
                                                            placeholder="Message"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.message}
                                                            name="message"
                                                        >
                                                        </textarea>

                                                        {errors.message && touched.message && <div id="feedback" style={Style}>{errors.message}</div>}
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button
                                                        style={{ color: "#000" }}
                                                        type="submit"
                                                        value="submit"
                                                        className="primary-btn banner-btn"
                                                        disabled={isSubmitting}
                                                    >
                                                        Send
                                                      </button>
                                                    <span />

                                                    {/* <Loader /> */}
                                                    {/* <button
                                                            style={{ color: "#000", marginLeft: "15px" }}
                                                            type="button"
                                                            data-dismiss="modal"
                                                            className="primary-btn banner-btn">
                                                            Close
                                                          </button> */}
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        name: '',
        email: '',
        company: '',
        message: ''
    }),


    validationSchema: yupObject().shape({
        name: yupString()
            .min(4, 'Please enter less than 4 characters')
            .max(20, 'Please enter no more than 25 characters')
            .required('Please enter your first name'),

        email: yupString()
            .email('Please enter a valid email')
            .required('Please enter an email'),

        company: yupString()
            .min(10, 'Please enter no less than 10   characters')
            .max(25, 'Please enter no more than 25 characters')
            .required('Please enter a company name'),

        message: yupString()
            .max(250, 'Please enter no more than 250 characters')
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
                            text: "Email send admin",
                            icon: "success",
                            timer: 2000,
                            button: false,


                        })
                        //setState({ name: "", email: "", message: "", company: "" })
                    }
                    if (data.message) {
                        swal('Not Mail has been sent');
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