const nodeMailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport")

module.exports = async(email,subject,text)=>{
    try {
        const transport = nodeMailer.createTransport({
          service:"gmail",
          // port:587,
          // secure:true,
          auth:{
            user:"shanthisiva@gmail.com",
            pass:"hakueanmxkaUJSmnx",
          }
        })

        transport.sendMail({
        from:"shanthisiva@gmail.com",
        to: email,
        subject: subject,
        text:"Password reset link :", text,
      }, (err) => {
        if (err)
          console.log("Mail has not sent", err);
        else
          console.log("Mail has sent successfully");
      })
       //console.log("Message: Mail sent successfully");
    } catch (error) {
        console.log(error);
    }
}