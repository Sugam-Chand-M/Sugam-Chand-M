"use server";

import {Resend} from "resend";
import { validateString,getErrorMessage } from "@/app/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend=new Resend(process.env.RESEND_API_KEY);

export const sendEmail=async (formData:FormData)=>{
    console.log("Running on Server");

    const senderEmail=formData.get("senderEmail") as string;
    const message=formData.get("message") as string;

    //server side validation
    if(!validateString(senderEmail,500)){
        return {
            error: "Invalid sender email"
        };
    }

    if(!validateString(message,5000)){
        return {
            error: "Invalid Message"
        };
    }

    let data;
    try{
        data=await resend.emails.send({
            from:"Contact Form <onboarding@resend.dev>",
            to:"sugamchandm@gmail.com",
            subject:"Message from Contact Form",
            replyTo:senderEmail,
            react:React.createElement(ContactFormEmail,{
                message:message,
                senderEmail:senderEmail
            })
        });
    }
    catch(error){
        console.log(error);
        return {
            error: getErrorMessage(error)
        };
    }
    return{
        data
    };
};