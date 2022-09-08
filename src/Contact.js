import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faLocationDot } from '@fortawesome/free-solid-svg-icons'
import{faPhone} from '@fortawesome/free-solid-svg-icons'
import{faAt} from '@fortawesome/free-solid-svg-icons'
import './infosection.css'
function Contact() {
  return<>
	  <section className="section p-3">
		  <div className='container'>
			<div className="row">
				<div className="col-12 text-center mb-2">
					<h2 className="hero-title">Contact with me</h2>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-5 col-md-5 order-md-last d-flex pl-3 pr-3">
					<div className="contact-wrap w-100">
						<form>
							<h5>Send message</h5>
							<div className='form-group'>
								<span>Full Name</span>
								<input type="text" className='form-control' name='' required="required"/>
							</div>
							<div className='form-group'>
								<span>Email</span>
								<input type="text" className='form-control' name='' required="required"/>
							</div>
							<div className='form-group'>
								<span>Write your message</span>
								<textarea required='required' className='form-control'></textarea>
							</div>
							<div className='form-group'>
								<input type="submit" className='btn send-button' value='Send Message'/>
							</div>
						</form>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 d-flex align-items-stretch contact-text">
					<div className="info-wrap w-100 pl-5">
						<div className="dbox w-100 d-flex align-items-center">
							<div className="icon d-flex align-items-center justify-content-center contact-text-phone">
								<span className="fa fa-phone"></span>
							</div>
							<div className="text">
								<p><span>Phone:</span> <a href="tel://+447944946496">+44 7944 946496</a></p>
							</div>
						</div>
						<div className="dbox w-100 d-flex align-items-center">
							<div className="icon d-flex align-items-center justify-content-center contact-text-phone">
								<span className="fa fa-envelope"></span>
							</div>
							<div className="text">
								<p><span>Email:</span> <a href="mailto:sadia.hypnotherapy@gmail.com">sadia.hypnotherapy@gmail.com</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		  </div>
	  </section>
  </>
}

export default Contact