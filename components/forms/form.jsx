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
    service: "none", // Changed from 'services' to 'service' for consistency
    message: "",
    isSubmitting: false,
    submissionError: null,
  };

  nextStep = () => {
    const { step } = this.state;
    // Validate before proceeding
    if (step === 1 && (!this.state.name || !this.state.email || !this.state.number)) {
      this.setState({ submissionError: "Please fill in all required fields" });
      return;
    }
    if (step === 2 && !this.state.service) {
      this.setState({ submissionError: "Please select a service" });
      return;
    }
    this.setState({ step: step + 1, submissionError: null });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1, submissionError: null });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value, submissionError: null });
  };

handleFinalSubmit = async () => {
  this.setState({ 
    isSubmitting: true, 
    submissionError: null 
  });

  try {
    // 1. Data Preparation with Validation
    const submissionData = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      number: this.state.number.replace(/\D/g, ''),
      budget: this.state.budget.replace(/[^\d.]/g, ''),
      service: this.state.service,
      message: this.state.message.trim()
    };

    // Basic validation
    if (!submissionData.name || !submissionData.email) {
      throw new Error('Name and email are required');
    }

    // 2. API Request with Timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    // 3. Response Handling
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || 
        `Server error: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || "Submission failed on server");
    }

    // 4. Success
    this.setState({ step: 4 });

  } catch (error) {
    const errorMessage = error.name === 'AbortError' 
      ? 'Request timed out. Please try again.'
      : error.message;

    this.setState({
      submissionError: `Submission failed: ${errorMessage}`
    });

    console.error('Form submission error:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });

  } finally {
    this.setState({ isSubmitting: false });
  }
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
            error={submissionError}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            error={submissionError}
          />
        );
      case 3:
        return (
          <Confirm
            prevStep={this.prevStep}
            handleFinalSubmit={this.handleFinalSubmit}
            isSubmitting={isSubmitting}
            error={submissionError}
            values={values}
          />
        );
      case 4:
        return <SuccessPage resetForm={() => this.setState({
          step: 1,
          name: "",
          number: "",
          email: "",
          budget: "",
          service: "none",
          message: ""
        })} />;
      default:
        return <div>Form Error</div>;
    }
  }
}

class FormUserDetails extends Component {
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
    const { values, handleChange, error } = this.props;
    return (
      <div className="section">
        <div className="columns">
          <div className="column is-8">
            <h1 className="contact-title">Questions?</h1>
            <h1 className="contact-subtitle">Let's Talk Design.</h1>
            <p className="contact-p">I'd Love To Hear From You</p>
            <p style={{ fontSize: "0.7rem" }}>Please Fill Out The Form Below</p>
          </div>
        </div>
        
        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label">Name*</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter Your Name"
                  value={values.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Phone Number*</label>
              <div className="control">
                <input
                  className="input"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={values.number}
                  onChange={(e) => {
                    const formattedValue = this.formatPhoneInput(e.target.value);
                    handleChange("number")({ target: { value: formattedValue } });
                  }}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email*</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Your Email"
                  value={values.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>
            </div>

            {error && <div className="notification is-danger is-light">{error}</div>}

            <div className="field is-grouped is-grouped-centered mt-5">
              <div className="control">
                <button className="button is-link" onClick={this.continue}>
                  Continue
                </button>
              </div>
            </div>
          </div>

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
            <p style={{ color: "#FFF", marginTop: "1rem" }}>
              Not Sure Where To Start..<br />
              I've Got You Covered.<br /><br />
              Check Out This Guide To Learn About New Design Techniques,
              Trends, & More
            </p>
            <div className="mt-2">
              <Link href="/" className="styled-link">
                Style Guide
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .vertical-divider {
            border-left: 1px solid #ddd;
            height: 100%;
            margin: 0 auto;
          }
          .styled-link {
            color: #FFF;
            font-family: "Nostromo-Black";
            text-shadow: -1px -1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, 1px 1px 0 #000;
            text-decoration: underline dashed #E84834;
            text-decoration-thickness: 1.6px;
          }
        `}</style>
      </div>
    );
  }
}

class FormPersonalDetails extends Component {
  formatBudgetInput = (value) => {
    return value.replace(/[^\d.,]/g, "");
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
    const { values, handleChange, error } = this.props;
    return (
      <div className="section">
        <div className="columns">
          <div className="column is-8">
            <h1 className="contact-title">Questions?</h1>
            <h1 className="contact-subtitle">Let's Talk Design.</h1>
            <p className="contact-p">I'd Love To Hear From You</p>
            <p style={{ fontSize: "0.7rem" }}>Please Fill Out The Form Below</p>
          </div>
        </div>
        
        <div className="columns">
          <div className="column is-6">
            <div className="field">
              <label className="label">Budget (USD)</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="$10,000.00"
                  value={values.budget}
                  onChange={(e) => {
                    const formattedValue = this.formatBudgetInput(e.target.value);
                    handleChange("budget")({ target: { value: formattedValue } });
                  }}
                />
              </div>
            </div>

            <div className="field">
             <label className="label">Choose A Service:</label>
              <div className="control">
                <select
                  className="input"
                  value={values.service}
                  onChange={handleChange("service")}
                  required
                >
                      <option value="none">Select A Service</option>
                      <option value="ux-design">General Question</option>
                      <option value="ux-design">UX Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="corportate-identity/logo">
                        Corporate Identity/Logo
                      </option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="print-design">Print Design</option>
                      <option value="typography">Typography</option>
                      <option value="seo">Search Engine Optimization</option>
                      <option value="marketing">Marketing</option>
                    </select>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Briefly describe your project needs & goals"
                  value={values.message}
                  onChange={handleChange("message")}
                  rows={4}
                />
              </div>
            </div>

            {error && <div className="notification is-danger is-light">{error}</div>}

            <div className="field is-grouped is-grouped-centered mt-5">
              <div className="control">
                <button className="button is-link is-light" onClick={this.back}>
                  Back
                </button>
              </div>
              <div className="control">
                <button className="button is-link" onClick={this.continue}>
                  Continue
                </button>
              </div>
            </div>
          </div>

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
            <p style={{ color: "#FFF", marginTop: "1rem" }}>
              Not Sure Where To Start..<br />
              I've Got You Covered.<br /><br />
              Check Out This Guide To Learn About New Design Techniques,
              Trends, & More
            </p>
            <div className="mt-2">
              <Link href="/" className="styled-link">
                Style Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Confirm extends Component {
  render() {
    const { values, prevStep, handleFinalSubmit, isSubmitting, error } = this.props;
    
    return (
      <div className="section" >
        <div className="columns is-centered">
          <div className="column is-8">
              <div className="contact-box">
                <h1 className="title has-text-centered">Please Confirm Your Details</h1>
                  <div className="content">
                    <p><strong>Name:</strong> {values.name}</p>
                    <p><strong>Email:</strong> {values.email}</p>
                    <p><strong>Phone:</strong> {values.number}</p>
                    <p><strong>Budget:</strong> {values.budget ? `$${values.budget}` : 'Not specified'}</p>
                    <p><strong>Service:</strong> {values.service.replace('-', ' ')}</p>
                    {values.message && (
                      <>
                        <p><strong>Message:</strong></p>
                        <p>{values.message}</p>
                      </>
                    )}
                  </div>
              </div>

            {error && <div className="notification is-danger">{error}</div>}

            <div className="field is-grouped is-grouped-centered mt-5">
              <div className="control">
                <button className="button is-link is-light" onClick={prevStep}>
                  Back
                </button>
              </div>
              <div className="control">
                <button
                  className={`button is-link ${isSubmitting ? "is-loading" : ""}`}
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const SuccessPage = ({ resetForm }) => (
  <div className="section">
   <div className="columns is-centered">
          <div className="column is-8">
              <div className="contact-box has-text-centered">
      <h1 className="title">Thank You!</h1>
      <p style={{marginTop: "5rem", lineHeight: "1.5rem"}} className="subtitle">We've received your submission and will contact you soon.</p>
      <button className="button is-link mt-5" onClick={resetForm}>
        Start New Submission
      </button>
      </div>
      </div>
    </div>
  </div>
);

export default UserForm;