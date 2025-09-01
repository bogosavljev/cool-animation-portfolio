import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: ""
        });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }
            );

            setFormStatus({
                submitting: false,
                success: true,
                error: false,
                message: "Message sent successfully!"
            });

            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setFormStatus({
                submitting: false,
                success: false,
                error: true,
                message: "Failed to send message. Please try again later."
            });
        }
    };
    return (
        <motion.div id="contact" className="contact" initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <motion.h2 variants={fadeInUp} initial="initial" animate="animate" viewport={{ once: true }}>Get In Touch</motion.h2>
            <motion.div className="contact-content" variants={fadeInUp}>
                <motion.form className="contact-form" onSubmit={handleSubmit}>
                    <motion.input type="text" name="name" placeholder="Your Name..." required whileFocus={{ scale: 1.02 }} onChange={handleChange} />
                    <motion.input type="email" name="email" placeholder="Your Email..." required whileFocus={{ scale: 1.02 }} onChange={handleChange} />
                    <motion.textarea name="message" placeholder="Your Message..." whileFocus={{ scale: 1.02 }} onChange={handleChange}></motion.textarea>
                    <motion.button className="submit-btn" type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} disabled={formStatus.submitting}>
                        {formStatus.submitting ? "Sending..." : "Send Message"}
                    </motion.button>
                    {formStatus.message && (<motion.p className={`form-status ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</motion.p>)}
                </motion.form>
            </motion.div>
        </motion.div>
    )
}
