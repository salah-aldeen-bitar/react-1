import React from "react";
import{InputText,Input,Inputsubmit,InputEmail,Span,Sub,FormInput,Form,Textarea,DropTitle,Drop} from './style.js';
import Footer from  './../foooter';
const Contact = () =>{
    return(
        <React.Fragment>
            <Drop>
        <div className="container">
            <DropTitle><Span>Drop </Span>Me A line</DropTitle>
            <Form action="">
                <FormInput >
                    <InputText type="text" placeholder="Your Name" />
                    <InputEmail type="email" placeholder="Your Email" />
                </FormInput>
                <Sub type="text" className="sub" placeholder="Your Subject" />
                <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                <Inputsubmit type="submit" value="Send Message"/>
            </Form>
         </div>
         </Drop>
         <Footer/>
        </React.Fragment>
        
    )
}

export default Contact;