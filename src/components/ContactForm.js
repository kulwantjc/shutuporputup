
import React, { Component } from "react"
import swal from 'sweetalert';

class ContactFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            company: '',

        };
    }

    handleFormSubmit = e => {
        e.preventDefault();
        fetch('http://192.168.0.54:1338/contactus', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: this.state.name,
                email: this.state.email,
                message: this.state.message,
                company: this.state.company
            })

        })
            .then(response => response.json(console.log("responseresponse", response)))

            .then(data => {
                if (data.success === true) {
                    swal({
                        title: "Done!",
                        text: "Email send admin",
                        icon: "success",
                        timer: 3000,
                        button: false
                    })
                    this.setState({ name: "", email: "", message: "", company: "" })
                }
            }
            )
            .catch(error => console.log(error))

    }
    render() {
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
                                            <p className="text-uppercase text-center" style={{ width: '100%', color: '#000 !important' }}>Get notified at launch!</p>
                                            <div className="col-lg-12">
                                                <form className="row contact_form"
                                                >
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control form-control-sm"
                                                                style={{ borderRadius: "10px" }}
                                                                required="required"
                                                                placeholder="Enter Your Name"
                                                                value={this.state.name}
                                                                onChange={e => this.setState({ name: e.target.value })}
                                                            />

                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm"
                                                                style={{ borderRadius: "10px" }}
                                                                required="required"
                                                                placeholder="Enter Your Company "
                                                                value={this.state.company}
                                                                onChange={e =>
                                                                    this.setState({ company: e.target.value })
                                                                }
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control form-control-sm"
                                                                style={{ borderRadius: "10px" }}
                                                                required="required"
                                                                placeholder="Enter Email Address"
                                                                value={this.state.email}
                                                                onChange={e =>
                                                                    this.setState({ email: e.target.value })
                                                                }
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                className="form-control form-control-sm"
                                                                style={{ borderRadius: "10px" }}
                                                                required="required"
                                                                rows="5"
                                                                placeholder="Enter Message"
                                                                value={this.state.message}
                                                                onChange={e =>
                                                                    this.setState({ message: e.target.value })
                                                                }
                                                            >

                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button
                                                            style={{ color: "#000" }}
                                                            type="submit"
                                                            value="submit"

                                                            className="primary-btn banner-btn"
                                                            onClick={e => this.handleFormSubmit(e)}
                                                        >
                                                            Send
                                                      </button><span />
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
                                {/* <div class="modal-footer justify-content-end">
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    <button type="button" data-dismiss="modal" class="btn btn-outline-muted">Close</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}
export default ContactFrom;