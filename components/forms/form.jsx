import { Component } from "react";
import Link from "next/link";
import Image from "next/image";

export class UserForm extends Component {
  state = {
    step: 1,
    name: "",
    number: "",
    email: "",
    budget: "",
    services: "",
    message: "",
    isSubmitting: false,
    submissionError: null,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

handleFinalSubmit = () => {
  const {
    name,
    email,
    number,
    budget,
    services,
    message,
  } = this.state;

  this.setState({ isSubmitting: true, error: null });

  fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      number,
      budget,
      services,
      message,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
      this.setState({ step: 4 }); // ✅ Show thank-you
    })
    .catch((error) => {
      console.error('Error:', error);
      this.setState({ submissionError: error.message, isSubmitting: false });
    });
};



  render() {
    const { step, isSubmitting, submissionError } = this.state;
    const values = { ...this.state };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleFinalSubmit={this.handleFinalSubmit}
            isSubmitting={isSubmitting}
            error={submissionError}
            values={values}
          />
        );

      case 4:
        return (
          <div className="section">
            <div className="container has-text-centered">
              <h1 className="title">Thank You!</h1>
              <p>We've received your submission.</p>
              <button
                className="button is-link mt-5"
                onClick={() =>
                  this.setState({
                    step: 1,
                    name: "",
                    email: "",
                    budget: "",
                    number: "",
                    message: "",
                    services: "",
                  })
                }
              >
                Start New Submission
              </button>
            </div>
          </div>
        );

      default:
        return <div>Form Error</div>;
    }
  }
}

export class FormUserDetails extends Component {
  formatBudgetInput = (value) => {
    return value.replace(/[^\d.,]/g, "");
  };

  formatPhoneInput = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    return match
      ? !match[2]
        ? match[1]
        : `(${match[1]}) ${match[2]}` + (match[3] ? `-${match[3]}` : "")
      : value;
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <div className="column is-8 ">
          <br />

          <h1 className="contact-title">Questions?</h1>
          <h1 className="contact-subtitle">Let's Talk Design.</h1>
          <h1 className="contact-p">I'd Love To Hear From You</h1>
          <p className="" style={{ fontSize: 0.7 + "rem" }}>
            Please Fill Out The Form Below
          </p>
        </div>
        <section className="section is-small">
          <div className="columns">
            <div className="column is-6 ">
              <input
                type="hidden"
                name="form-name"
                value="Initialize Contact Form"
              />
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    onChange={handleChange("name")}
                    defaultValue={values.name}
                    margin="normal"
                  />
                </div>
              </div>

              <input type="hidden" name="bot-field" />

              <div className="field">
                <label className="label">Number</label>
                <div className="control">
                  <input
                    className="input"
                    type="tel"
                    placeholder="(123) 456-7890"
                    onChange={(e) => {
                      const formattedValue = this.formatPhoneInput(
                        e.target.value
                      );
                      this.props.handleChange("number")({
                        target: { value: formattedValue },
                      });
                    }}
                    defaultValue={this.props.values.number}
                  />
                  <input type="hidden" name="bot-field" />
                  <span className="icon is-small is-left"></span>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                    margin="normal"
                    fullWidth
                  />
                  <span className="icon is-small is-left"></span>
                </div>
              </div>

             
              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <button
                    className="button is-link"
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="column is-1"></div>
            <div className="column is-1">
              <div className="vertical-divider"></div>
            </div>
            <div className="column is-4 has-text-centered">
              <Image 
                src="/images/make-contact.png" 
                alt="Contact illustration"
                width={300}
                height={200}
              />
              <p className="" style={{ color: "#FFF" }}>
                <br />
                Not Sure Where To Start.. <br />
                I've Got You Covered. <br /> <br />
                Check Out This Guide To Learn About New Design Techniques,
                Trends, & More
              </p>
              <div className="mt-2">
                <Link
                  href="/"
                  style={{
                    color: "#FFF",
                    fontFamily: "Nostromo-Black",
                    textShadow:
                      "-1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0)",
                    textDecoration: "underline dashed",
                    textDecorationColor: "#E84834",
                    textDecorationThickness: "1.6px",
                  }}
                >
                  Style Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export class FormPersonalDetails extends Component {
  formatBudgetInput = (value) => {
    return value.replace(/[^\d.,]/g, "");
  };

  formatPhoneInput = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    return match
      ? !match[2]
        ? match[1]
        : `(${match[1]}) ${match[2]}` + (match[3] ? `-${match[3]}` : "")
      : value;
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <div className="column is-8 ">
          <h1 className="contact-title">Questions?</h1>
          <h1 className="contact-subtitle">Let's Talk Design.</h1>
          <h1 className="contact-p">I'd Love To Hear From You</h1>
          <p className="" style={{ fontSize: 0.7 + "rem" }}>
            Please Fill Out The Form Below
          </p>
        </div>
        <section className="section is-small">
          <div className="columns ">
            <div className="column is-6 ">
              <input
                type="hidden"
                name="form-name"
                value="Initialize Contact Form"
              />

              <div className="field">
                <label className="label">Budget</label>
                <div className="control">
                  <input
                    className="input"
                    name="budget"
                    type="text"
                    placeholder="$10,000.00"
                    onChange={(e) => {
                      const formattedValue = this.formatBudgetInput(
                        e.target.value
                      );
                      this.props.handleChange("budget")({
                        target: { value: formattedValue },
                      });
                    }}
                    defaultValue={this.props.values.budget}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Project Type</label>
                <div className="control">
                  <div
                    className="radio"
                    onChange={handleChange("services")}
                    defaultValue={values.services}
                  >
                    <label htmlFor="services">Choose A Service:</label> <br />
                   <select
  name="services"
  id="services"
  onChange={handleChange("services")}
  value={values.services || "none"}
>
  <option value="none">Select A Service</option>
  <option value="general">General Question</option>
  <option value="ux-design">UX Design</option>
  <option value="web-development">Web Development</option>
  <option value="corporate-identity/logo">Corporate Identity/Logo</option>
  <option value="graphic-design">Graphic Design</option>
  <option value="print-design">Print Design</option>
  <option value="typography">Typography</option>
  <option value="seo">Search Engine Optimization</option>
  <option value="marketing">Marketing</option>
</select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="message"
                    onChange={handleChange("message")}
                    defaultValue={values.message}
                    placeholder="Briefly describe any details 
                    about your project needs & goals.
                    I'm here to help!"
                  />
                </div>
              </div>

              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <button
                    className="button is-link is-light"
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >
                    Back
                  </button>
                </div>

                <div className="control">
                  <button
                    className="button is-link"
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="column is-1"></div>
            <div className="column is-1">
              <div className="vertical-divider"></div>
            </div>
            <div className="column is-4 has-text-centered">
              <Image 
                src="/images/make-contact.png" 
                alt="Contact illustration"
                width={300}
                height={200}
              />
              <p className="" style={{ color: "#FFF" }}>
                <br />
                Not Sure Where To Start.. <br />
                I've Got You Covered. <br /> <br />
                Check Out This Guide To Learn About New Design Techniques,
                Trends, & More
              </p>
              <div className="mt-2">
                <Link
                  href="/"
                  style={{
                    color: "#FFF",
                    fontFamily: "Nostromo-Black",
                    textShadow:
                      "-1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0)",
                    textDecoration: "underline dashed",
                    textDecorationColor: "#E84834",
                    textDecorationThickness: "1.6px",
                  }}
                >
                  Style Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export class Confirm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleFinalSubmit();
  };

  render() {
    const {
      values: { name, email, number, budget, services, message },
      prevStep,
      isSubmitting,
      error,
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="form-name" value="Contact Form v1" />
        <div className="d-none">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                value={name}
                readOnly
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                readOnly
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                name="message"
                value={message}
                readOnly
              ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Budget</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="budget"
                value={budget}
                readOnly
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Number</label>
            <div className="control">
              <input
                className="input"
                name="number"
                type="number"
                value={number}
                readOnly
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Service</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="services"
                value={services}
                readOnly
              />
            </div>
          </div>
        </div>

        <section className="section">
          <div className="columns is-centered">
            <div className="column is-6">
              <div className="container">
                <label className="label has-text-centered py-5">
                  Please Confirm
                </label>
<p className="is-size-6">
                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Name</label>
                  </div>
                  <div className="field-body">
                    <div className="field">{name}</div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Email</label>
                  </div>
                  <div className="field-body">
                    <div className="field">{email}</div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Number</label>
                  </div>
                  <div className="field-body">
                    <div className="field">{number}</div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Budget</label>
                  </div>
                  <div className="field-body">
                    <div className="field">{budget}</div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Service</label>
                  </div>
                  <div className="field-body">
                    <div className="field">{services}</div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label">
                    <label className="label">Message</label>
                  </div>
                  <div className="field-body">
                    <div className="field">{message}</div>
                  </div>
                </div>
</p>
                <div className="field is-grouped is-grouped-centered py-5">
                  <div className="control">
                    <button
                      className="button is-link is-light"
                      onClick={(e) => {
                        e.preventDefault();
                        prevStep();
                      }}
                      type="button"
                    >
                      Back
                    </button>
                  </div>

                  <div className="control">
                    <button
                      className={`button is-link ${
                        isSubmitting ? "is-loading" : ""
                      }`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>

                {error && <div className="notification is-danger">{error}</div>}
              </div>
            </div>
          </div>
        </section>
      </form>
    );
  }
}

export default UserForm;