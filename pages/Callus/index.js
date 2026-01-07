import React from 'react'
import Head from 'next/head'
import MainHeader from "../main-header";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (<>
    <Head>
      <title>تماس با ما | شیک پوشان</title>
      <meta name="description" content="اطلاعات تماس و راه‌های ارتباطی با فروشگاه آنلاین" />
    </Head>

    <MainHeader />
    <div className="contact-page">
      <main className="contact-container">
        <section className="contact-info-section" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div className="section-header">
            <h2>راه‌های ارتباطی</h2>
            <p>از طریق روش‌های زیر می‌توانید با ما در تماس باشید</p>
          </div>
          <div className="contact-cards">
            <div className="contact-card" data-aos="zoom-in" data-aos-duration="600">
              <div className="contact-card-icon">
                <FaPhone />
              </div>
              <h3 className="contact-card-title">تلفن تماس</h3>
              <p className="contact-card-description">جهت خرید آنلاین و پشتیبانی</p>
              <div className="contact-card-content">
                <a href="tel:021845632" className="contact-link">۰۲۱ - ۸۴۵۶۳۲</a>
                <a href="tel:021845633" className="contact-link">۰۲۱ - ۸۴۵۶۳۳</a>
              </div>
            </div>
            <div className="contact-card" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
              <div className="contact-card-icon">
                <FaEnvelope />
              </div>
              <h3 className="contact-card-title">ایمیل</h3>
              <p className="contact-card-description">ایمیل مدیریت و پشتیبانی</p>
              <div className="contact-card-content">
                <a href="mailto:baghamoh3@gmail.com" className="contact-link">baghamoh3@gmail.com</a>
                <a href="mailto:support@example.com" className="contact-link">support@example.com</a>
              </div>
            </div>
            <div className="contact-card" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
              <div className="contact-card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-card-title">آدرس</h3>
              <p className="contact-card-description">آدرس دفتر مرکزی</p>
              <div className="contact-card-content">
                <p>تهران، خیابان رازی، پلاک ۱۲۳۴</p>
                <p>طبقه سوم، واحد ۵</p>
              </div>
            </div>
            <div className="contact-card" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
              <div className="contact-card-icon">
                <FaClock />
              </div>
              <h3 className="contact-card-title">ساعات کاری</h3>
              <p className="contact-card-description">زمان پاسخگویی ما</p>
              <div className="contact-card-content">
                <p>شنبه تا چهارشنبه: ۸ صبح تا ۵ عصر</p>
                <p>پنجشنبه: ۸ صبح تا ۱۲ ظهر</p>
                <p>جمعه‌ها تعطیل</p>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form-section" data-aos="fade-up" data-aos-duration="1000">
          <div className="section-header">
            <h2>ارسال پیام مستقیم</h2>
            <p>پیام خود را مستقیماً برای ما ارسال کنید</p>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group" data-aos="fade-right" data-aos-duration="600">
                <label htmlFor="name">نام و نام خانوادگی</label>
                <input type="text" className='input-form' id="name" placeholder="نام خود را وارد کنید" />
              </div>
              <div className="form-group" data-aos="fade-left" data-aos-duration="600" data-aos-delay="100">
                <label htmlFor="email">آدرس ایمیل</label>
                <input type="email"  className='input-form'id="email" placeholder="ایمیل خود را وارد کنید" />
              </div>
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <label htmlFor="subject">موضوع پیام</label>
              <input type="text" id="subject" className='input-form' placeholder="موضوع پیام خود را وارد کنید" />
            </div>
            <div className="form-group" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
              <label htmlFor="message">متن پیام</label>
              <textarea id="message" rows="5" placeholder="متن پیام خود را وارد کنید"></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400">
              ارسال پیام
            </button>
          </form>
        </section>
      </main>
      <style jsx>{`
      *{   
        font-family:'IRY'!important;
      }
           .input-form{
               height: 200px !important;
           height:200px!important;
           }
        .contact-page {
     
          direction: rtl;
                font-family:'IRY'!important;
          background-color: #f8f9fa;
          min-height: 100vh;
        }        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }        
        .contact-hero {
       background: linear-gradient(135deg, #667eea 0%, #4b51a2ff 100%);
          border-radius: 20px;
          padding: 60px 30px;
          margin-bottom: 60px;
          color: white;
          text-align: center;
          box-shadow: 0 10px 30px rgba(79, 70, 229, 0.2);
        }        
        .contact-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 15px;
        }        
        .contact-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }
        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }        
        .section-header h2 {
          font-size: 2.2rem;
          color: #333;
          margin-bottom: 10px;
        }        
        .section-header p {
          color: #666;
          font-size: 1.1rem;
        }        
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 80px;
        }
        
        .contact-card {
          background: white;
          border-radius: 15px;
          padding: 30px 25px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border-top: 4px solid #4f46e5;
        }        
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }        
        .contact-card-icon {
          background: #f0f4ff;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #4f46e5;
          font-size: 1.8rem;
        }        
        .contact-card-title {
          font-size: 1.4rem;
          color: #333;
          margin-bottom: 10px;
        }
        
        .contact-card-description {
          color: #777;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }        
        .contact-card-content {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .contact-link {
          color: #4f46e5;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }        
        .contact-link:hover {
          color: #7c3aed;
          text-decoration: underline;
        }
        .contact-form-section {
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          margin-bottom: 50px;
        }
        
        .contact-form {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-bottom: 25px;
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #444;
        }
        
        .form-group input, 
        .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          font-family: inherit;
          transition: border 0.3s;
        }
        
        .form-group input:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        
        .submit-btn {
       background: linear-gradient(135deg, #667eea 0%, #4b51a2ff 100%);
          color: white;
          border: none;
          padding: 16px 40px;
          border-radius: 10px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
          margin: 40px auto 0;
          min-width: 200px;
        }        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 7px 15px rgba(79, 70, 229, 0.3);
        }
        @media (max-width: 768px) {
          .contact-cards {
            grid-template-columns: 1fr;
            gap: 20px;
          }          
          .contact-hero {
            padding: 40px 20px;
          }          
          .contact-title {
            font-size: 2.2rem;
          }          
          .contact-form-section {
            padding: 30px 20px;
          }
                  .input-form{
                  background-color:red!important;
           height:200px!important;
           }
        }
      `}</style>
    </div>

  </>

  )
}