
import React, { Component } from "react"
import swal from 'sweetalert';

class ContactFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
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
            })
        })
            .then(response => response.json())

            .then(data => {
                if (data.success === true) {
                    swal({
                        title: "Done!",
                        text: "Email send admin",
                        icon: "success",
                        timer: 3000,
                        button: false
                    })
                    this.setState({ name: "", email: "", message: "" })
                }
            }
            )
            .catch(error => console.log(error))

    }
    render() {
        return (
            <>
                <div className="mt-5">

                    <button type="button" data-toggle="modal" data-target="#exampleModal" className="primary-btn banner-btn">Send Inquire </button>

                    <div id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade">
                        <div role="document" className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">× </span></button>
                                    <h2 id="exampleModalLabel" style={{ color: "#007bff" }} className="modal-title mb-3"></h2>
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-12">
                                                <form className="row contact_form"
                                                >
                                                    <div className="col-md-12">

                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                style={{ borderRadius: "10px" }}
                                                                required
                                                                placeholder="Enter your name"
                                                                value={this.state.name}
                                                                onChange={e => this.setState({ name: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                style={{ borderRadius: "10px" }}
                                                                required
                                                                placeholder="Enter email address"
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
                                                                className="form-control"
                                                                style={{ borderRadius: "10px" }}
                                                                required
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
                                                    <div className="col-md-12 text-right">
                                                        <button
                                                            style={{ color: "#000" }}
                                                            type="submit"
                                                            value="submit"
                                                            data-dismiss="modal" aria-label="Close"
                                                            className="primary-btn banner-btn"
                                                            onClick={e => this.handleFormSubmit(e)}
                                                        >
                                                            Send Message
                                                      </button>
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